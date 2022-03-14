import Layout from '@components/layout';
import { getAllPostIds, getPostData, PostData } from '@lib/posts';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

interface Props {
  postData: PostData;
}

export default function Post({ postData }: Props) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      {postData.id}
      <br />
      {postData.title}
      <br />
      {postData.date}
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml! }} />
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
  if (!params) {
    return {
      props: {
        postData: {},
      },
    };
  }

  const postData = await getPostData(params.id as string);

  return {
    props: {
      postData,
    },
  };
};
