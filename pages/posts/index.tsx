import Layout from '@components/layout';
import PostCardWrapper from '@components/PostCardWrapper';
import { getSortedPostsData, PostData } from '@lib/posts';
import { GetStaticProps } from 'next';

interface Props {
  allPostsData: PostData[];
}

export default function Posts({ allPostsData }: Props) {
  return (
    <Layout>
      <PostCardWrapper allPostsData={allPostsData} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = await getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
};
