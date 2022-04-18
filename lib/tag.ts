import { getSortedPostsMetaData, PostMetaData, postsDir } from './posts';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

type TagCounter = Record<string, number>;
type Tag = [string, number];
export type Tags = Tag[];

export const getAllTags = (): Tags => {
  const allTags: TagCounter = { All: 0 };

  const fileNames = fs.readdirSync(postsDir);

  fileNames.forEach((fileName) => {
    const source = fs.readFileSync(path.join(postsDir, fileName), 'utf-8');

    const { data } = matter(source);

    const { tags } = data;

    if (!tags) return;

    tags?.forEach((tag: string) => {
      if (!allTags[tag]) {
        allTags[tag] = 0;
      }
      allTags[tag]++;
      allTags['All']++;
    });
  });

  return Object.entries(allTags).sort((a, b) => b[1] - a[1]);
};

export const getTagFilteredPosts = async (
  tag: string
): Promise<PostMetaData[]> => {
  const posts = await getSortedPostsMetaData();

  const filteredPosts = posts.filter((frontmatter) =>
    frontmatter.tags?.includes(tag)
  );

  return filteredPosts;
};
