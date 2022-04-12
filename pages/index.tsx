import type { GetStaticProps } from 'next';
import { getSortedPostsData, PostData } from '@lib/posts';
import Layout from '@components/layout';
import PostCardList from '@components/PostCardWrapper';
import ProfileCard from '@components/ProfileCard';

interface Props {
  allPostsData: PostData[];
}

export default function Home({ allPostsData }: Props) {
  return (
    <Layout>
      <ProfileCard />
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
