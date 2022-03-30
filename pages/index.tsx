import type { GetStaticProps } from 'next';
import { getSortedPostsData, PostData } from '@lib/posts';
import Layout from '@components/layout';
import PostCardList from '@components/PostCardWrapper';

interface Props {
  allPostsData: PostData[];
}

export default function Home({ allPostsData }: Props) {
  return (
    <Layout>
      <PostCardList allPostsData={allPostsData} />
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
