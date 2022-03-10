import type { GetStaticProps, NextPage } from 'next';
import { getSortedPostsData, PostData } from '@lib/posts';
import Layout from '@components/layout';

interface Props {
  allPostsData: PostData[];
}

const Home: NextPage<Props> = ({ allPostsData }) => {
  return (
    <Layout>
      <ul>
        {allPostsData.map(({ id, title, date }) => (
          <li key={id}>
            {title}
            <br />
            {id}
            <br />
            {date}
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
};

export default Home;
