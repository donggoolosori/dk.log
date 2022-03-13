import Layout from '@components/layout';
import { getAllPostIds, getPostData, PostData } from '@lib/posts';
import { GetStaticPaths, GetStaticProps } from 'next';

interface Props {
  postData: PostData;
}

export default function Post({ postData }: Props) {
  return (
    <Layout>
      {postData.id}
      <br />
      {postData.title}
      <br />
      {postData.date}
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = getPostData(params?.id as string);

  return {
    props: {
      postData,
    },
  };
};
