import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { getPlaiceholder } from 'plaiceholder';
import { getRandomDefaultImage } from './image';
import { formatDate } from '@helpers/formatDate';
import { bundleMDX } from 'mdx-bundler';

export interface PostMetaData {
  id: string;
  title: string;
  date: string;
  description: string;
  coverImg: string;
}

export interface PostData {
  id: string;
  title: string;
  date: string;
  description: string;
  coverImg: string;
  contentHtml?: string;
  blurCss?: any;
  mdxSource?: any;
}

const postsDir = path.join(process.cwd(), 'posts');

const fileExtensionRegex = /\.mdx?$/;

export async function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDir);

  const promises: Promise<PostData>[] = fileNames.map(async (fileName) => {
    const id = fileName.replace(fileExtensionRegex, '');
    const frontmatter = await getFrontMatter(id);
    return frontmatter;
  });

  const allPostsData = await Promise.all(promises);

  return allPostsData.sort(({ date: a }, { date: b }) => {
    return +new Date(b) - +new Date(a);
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDir);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(fileExtensionRegex, ''),
      },
    };
  });
}

export async function getPostData(id: string): Promise<PostData> {
  const mdPath = path.join(postsDir, `${id}.md`);
  const mdxPath = path.join(postsDir, `${id}.mdx`);

  const source = fs.existsSync(mdPath)
    ? fs.readFileSync(mdPath, 'utf-8')
    : fs.readFileSync(mdxPath, 'utf-8');

  const { code } = await bundleMDX({
    source,
  });

  const frontmatter = await getFrontMatter(id, source);

  return {
    ...frontmatter,
    mdxSource: code,
  } as PostData;
}

async function getFrontMatter(id: string, source?: string) {
  if (!source) {
    const mdPath = path.join(postsDir, `${id}.md`);
    const mdxPath = path.join(postsDir, `${id}.mdx`);

    source = fs.existsSync(mdPath)
      ? fs.readFileSync(mdPath, 'utf-8')
      : fs.readFileSync(mdxPath, 'utf-8');
  }

  const { frontmatter } = await bundleMDX({ source });

  const { title } = frontmatter;

  let { date, coverImg, description } = frontmatter;
  date = formatDate(date);
  description = description || '';
  coverImg = coverImg || getRandomDefaultImage();

  const { css } = await getPlaiceholder(coverImg);

  return {
    id,
    title,
    date,
    coverImg,
    description,
    blurCss: css,
  };
}
