import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { getPlaiceholder } from "plaiceholder";

import { getMdxSource, readMdxFile } from "./mdx";
import { getRandomDefaultImage } from "./image";
import { formatDate } from "@helpers/formatDate";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

export interface PostMetaData {
  id: string;
  title: string;
  date: string;
  description: string;
  coverImg: string;
  blurCss?: any;
  tags?: string[];
}

interface AdjacentPost {
  id: string;
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

export async function getSortedPostsMetaData(options?: PostDataOption) {
  let fileNames = fs.readdirSync(postsDir);

  const promises: Promise<PostMetaData>[] = fileNames.map(async (fileName) => {
    const id = fileName.replace(fileExtensionRegex, "");
    const frontmatter = await getFrontMatter(id);
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
        id: fileName.replace(fileExtensionRegex, ""),
      },
    };
  });
}

const getAdjacentPosts = (id: string): AdjacentPosts => {
  const posts = fs
    .readdirSync(postsDir)
    .map((fileName) => {
      const source = fs.readFileSync(path.join(postsDir, fileName));

      const { title, date } = matter(source).data;

      return {
        id: fileName.replace(fileExtensionRegex, ""),
        title,
        date,
      };
    })
    .sort(({ date: a }, { date: b }) => +new Date(a) - +new Date(b));

  const currPostIndex = posts.findIndex((metaData) => metaData.id === id);

  const prevPost = currPostIndex === 0 ? null : posts[currPostIndex - 1];
  const nextPost =
    currPostIndex === posts.length - 1 ? null : posts[currPostIndex + 1];

  return {
    prevPost,
    nextPost,
  };
};

export async function getPostData(id: string): Promise<PostData> {
  const source = readMdxFile(id);

  const mdxSource = await getMdxSource(source);

  const frontmatter = await getFrontMatter(id, source);

  const adjacentPosts = getAdjacentPosts(id);

  return {
    ...frontmatter,
    mdxSource,
    adjacentPosts,
  } as PostData;
}

export async function getFrontMatter(id: string, source?: string) {
  if (!source) {
    source = readMdxFile(id);
  }

  const { data } = matter(source);

  let { date, coverImg, description } = data;
  date = formatDate(date);
  description = description || "";
  coverImg = coverImg || getRandomDefaultImage(id);

  const { css } = await getPlaiceholder(coverImg);

  return {
    ...data,
    id,
    date,
    coverImg,
    description,
    blurCss: css,
  } as PostMetaData;
}
