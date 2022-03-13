import Layout from '@components/layout';
import { getAllPostIds } from '@lib/posts';

export default function Post() {
  return (
    <Layout>
      <h1>post</h1>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps() {}
