import Layout from '@components/layout';
import PostImage from '@components/PostImage';
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
      <div className="flex justify-center">
        <article className="prose prose-lg lg:prose-xl">
          <section className="flex flex-col items-center gap-6">
            <h1 style={{ margin: 0 }}>{postData.title}</h1>
            <h5>{postData.date}</h5>
            <div className="w-full h-100 overflow-hidden rounded-3xl">
              <div className="relative w-full h-full">
                <PostImage
                  blurCss={postData.blurCss}
                  coverImg={postData.coverImg}
                />
              </div>
            </div>
          </section>
          <section
            dangerouslySetInnerHTML={{ __html: postData.contentHtml! }}
          />
        </article>
      </div>
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
