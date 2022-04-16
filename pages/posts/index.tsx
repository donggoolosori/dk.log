import AllTags from '@components/AllTags';
import Layout from '@components/layout';
import PostCardWrapper from '@components/PostCardWrapper';
import { getSortedPostsMetaData, PostData } from '@lib/posts';
import { getAllTags, Tags } from '@lib/tag';
import { GetStaticProps } from 'next';

interface Props {
  allPostsMetaData: PostData[];
  allTags: Tags;
}

export default function Posts({ allPostsMetaData, allTags }: Props) {
  return (
    <Layout>
      <AllTags allTags={allTags} />
      <PostCardWrapper allPostsMetaData={allPostsMetaData} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsMetaData = await getSortedPostsMetaData();

  const allTags = getAllTags(allPostsMetaData);

  return {
    props: {
      allPostsMetaData,
      allTags,
    },
  };
};
