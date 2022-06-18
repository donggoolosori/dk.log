import PostImage from '@components/PostImage';
import { getAllPostIds, getPostData, PostData } from '@lib/posts';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import Utterances from '@components/Utterances';
import AdjacentPosts from '@components/AdjacentPosts';
import { PostSEO } from '@components/SEO';

interface Props {
  postData: PostData;
}

const Post: NextPage<Props> = ({ postData }) => {
  const Content = useMemo(
    () => getMDXComponent(postData.mdxSource),
    [postData.mdxSource]
  );

  const { title, description, coverImg } = postData;

  return (
    <>
      <PostSEO title={title} description={description} ogImage={coverImg} />
      <div className="flex flex-col justify-center items-center">
        <article className="prose prose-img:rounded-3xl dark:prose-invert prose-lg md:prose-xl 2xl:prose-2xl">
          <section className="flex flex-col items-center gap-6">
            <h1 style={{ margin: 0 }}>{postData.title}</h1>
            <h5>{postData.date}</h5>
            <div className="group relative w-full h-0 overflow-hidden pb-[66.6%] rounded-3xl shadow-2xl shadow-slate-700 mb-28">
              <div className="absolute left-0 top-0 w-full h-full">
                <PostImage
                  blurCss={postData.blurCss}
                  coverImg={postData.coverImg}
                  priority
                />
              </div>
            </div>
          </section>
          <Content />
          <AdjacentPosts adjacentPosts={postData.adjacentPosts} />
          <Utterances />
        </article>
      </div>
    </>
  );
};

export default Post;

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
