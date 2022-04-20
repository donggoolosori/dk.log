import PostImage from '@components/PostImage';
import { getAllPostIds, getPostData, PostData } from '@lib/posts';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import FixedRatioContainer from '@components/FixedRatioContainer';

interface Props {
  postData: PostData;
}

export default function Post({ postData }: Props) {
  const Content = useMemo(
    () => getMDXComponent(postData.mdxSource),
    [postData.mdxSource]
  );

  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div className="flex justify-center">
        <article className="prose prose-img:rounded-3xl dark:prose-invert prose-lg md:prose-xl 2xl:prose-2xl">
          <section className="flex flex-col items-center gap-6">
            <h1 style={{ margin: 0 }}>{postData.title}</h1>
            <h5>{postData.date}</h5>

            <FixedRatioContainer className="group rounded-3xl shadow-2xl shadow-slate-700 mb-28">
              <PostImage coverImg={postData.coverImg} priority />
            </FixedRatioContainer>
          </section>
          <Content />
        </article>
      </div>
    </>
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
