import { PostMetaData } from './posts';

type TagCounter = Record<string, number>;
type Tag = [string, number];
export type Tags = Tag[];

export const getAllTags = (allPostsMetaData: PostMetaData[]): Tags => {
  const allTags: TagCounter = {};

  allPostsMetaData.forEach(({ tags }) => {
    tags?.forEach((tag) => {
      if (!allTags[tag]) {
        allTags[tag] = 0;
      }
      allTags[tag]++;
    });
  });

  return Object.entries(allTags).sort((a, b) => b[1] - a[1]);
};

export const getTagFilteredPosts = (tag: string) => {};
