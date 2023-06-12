import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { getPlaiceholder } from "plaiceholder";

import { getMdxSource, readMdxFile } from "./mdx";
import { getRandomDefaultImage } from "./image";
import { formatDate } from "@helpers/formatDate";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { IGetCSSReturn } from "plaiceholder/dist/css";

export interface PostMetaData {
  slug: string;
  title: string;
  date: string;
  description: string;
  coverImg: string;
  blurCss?: IGetCSSReturn;
  tags?: string[];
}

interface AdjacentPost {
  slug: string;
  title: string;
  date: string;
}

export interface AdjacentPosts {
  prevPost: AdjacentPost | null;
  nextPost: AdjacentPost | null;
}

export interface PostData extends PostMetaData {
  mdxSource: MDXRemoteSerializeResult;
  adjacentPosts: AdjacentPosts;
}

export const postsDir = path.join(process.cwd(), "posts");

export const fileExtensionRegex = /\.mdx?$/;

interface PostDataOption {
  recent: boolean;
}

export async function getAllSlugs() {
  const fileNames = fs.readdirSync(postsDir);

  const slugs = fileNames.map((fileName) => {
    return fileName.replace(fileExtensionRegex, "");
  });

  return slugs;
}

export async function getSortedPostsMetaData(options?: PostDataOption) {
  const fileNames = fs.readdirSync(postsDir);

  const promises: Promise<PostMetaData>[] = fileNames.map(async (fileName) => {
    const slug = fileName.replace(fileExtensionRegex, "");
    const frontmatter = await getFrontMatter(slug);
    return frontmatter;
  });

  const allPostsMetaData = await Promise.all(promises);

  allPostsMetaData.sort(({ date: a }, { date: b }) => {
    return +new Date(b) - +new Date(a);
  });

  if (options?.recent) {
    return allPostsMetaData.slice(0, 6);
  }

  return allPostsMetaData;
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDir);

  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(fileExtensionRegex, ""),
      },
    };
  });
}

const getAdjacentPosts = (slug: string): AdjacentPosts => {
  const posts = fs
    .readdirSync(postsDir)
    .map((fileName) => {
      const source = fs.readFileSync(path.join(postsDir, fileName));

      const { title, date } = matter(source).data;

      return {
        slug: fileName.replace(fileExtensionRegex, ""),
        title,
        date,
      };
    })
    .sort(({ date: a }, { date: b }) => +new Date(a) - +new Date(b));

  const currPostIndex = posts.findIndex((metaData) => metaData.slug === slug);

  const prevPost = currPostIndex === 0 ? null : posts[currPostIndex - 1];
  const nextPost =
    currPostIndex === posts.length - 1 ? null : posts[currPostIndex + 1];

  return {
    prevPost,
    nextPost,
  };
};

export async function getPostData(slug: string): Promise<PostData> {
  const source = readMdxFile(slug);

  const mdxSource = await getMdxSource(source);

  const frontmatter = await getFrontMatter(slug, source);

  const adjacentPosts = getAdjacentPosts(slug);

  return {
    ...frontmatter,
    mdxSource,
    adjacentPosts,
  } as PostData;
}

export async function getFrontMatter(slug: string, source?: string) {
  if (!source) {
    source = readMdxFile(slug);
  }

  const { data } = matter(source);

  let { date, coverImg, description } = data;
  date = formatDate(date);
  description = description || "";
  coverImg = coverImg || getRandomDefaultImage(slug);

  const { css } = await getPlaiceholder(coverImg);

  return {
    ...data,
    slug,
    date,
    coverImg,
    description,
    blurCss: css,
  } as PostMetaData;
}
