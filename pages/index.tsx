import type { GetStaticProps, NextPage } from 'next';
import { getSortedPostsData, PostData } from '@lib/posts';
import Layout from '@components/layout';
import Link from 'next/link';
import PostCard from '@components/PostCard';

interface Props {
  allPostsData: PostData[];
}

export default function Home({ allPostsData }: Props) {
  return (
    <Layout>
      <ul>
        {allPostsData.map(({ id, title, date }) => (
          <PostCard key={id} id={id} title={title} date={date} />
        ))}
      </ul>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
};
