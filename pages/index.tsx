import type { GetStaticProps, NextPage } from 'next';
import { getSortedPostsData, PostData } from '@lib/posts';
import Layout from '@components/layout';
import Link from 'next/link';

interface Props {
  allPostsData: PostData[];
}

export default function Home({ allPostsData }: Props) {
  return (
    <Layout>
      <ul>
        {allPostsData.map(({ id, title, date }) => (
          <li key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            {date}
          </li>
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
