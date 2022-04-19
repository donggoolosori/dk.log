import Layout from '@components/layout';
import { getSortedPostsMetaData, PostMetaData } from '@lib/posts';
import { getAllTags, Tags } from '@lib/tag';
import { GetStaticProps } from 'next';
import PostsPageMain from '@components/PostsPageMain';

interface Props {
  allPostsMetaData: PostMetaData[];
  allTags: Tags;
}

export default function Posts({ allPostsMetaData, allTags }: Props) {
  return (
    <PostsPageMain allPostsMetaData={allPostsMetaData} allTags={allTags} />
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsMetaData = await getSortedPostsMetaData();

  const allTags = getAllTags();

  return {
    props: {
      allPostsMetaData,
      allTags,
    },
  };
};
