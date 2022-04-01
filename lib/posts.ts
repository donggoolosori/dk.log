import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { getPlaiceholder } from 'plaiceholder';
import { getRandomDefaultImage } from './image';
import { formatDate } from '@helpers/formatDate';

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
}

const postsDir = path.join(process.cwd(), 'posts');

export async function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDir);

  const promises: Promise<PostData>[] = fileNames.map(async (fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const { metaData } = await getPostMetaData(id);
    return metaData;
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
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getPostData(id: string): Promise<PostData> {
  const { metaData, matterResult } = await getPostMetaData(id);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  return {
    ...metaData,
    contentHtml,
  } as PostData;
}

async function getPostMetaData(id: string) {
  const filePath = path.join(postsDir, `${id}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  const matterResult = matter(fileContent);

  const { title } = matterResult.data;

  let { date, coverImg, description } = matterResult.data;
  date = formatDate(date);
  description = description || '';
  coverImg = coverImg || getRandomDefaultImage();

  const { css } = await getPlaiceholder(coverImg);

  return {
    metaData: {
      id,
      title,
      date,
      coverImg,
      description,
      blurCss: css,
    },
    matterResult,
  };
}
