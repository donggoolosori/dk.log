import PostImage from "@components/PostImage";
import { getAllPostIds, getPostData, PostData } from "@lib/posts";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client";
import Utterances from "@components/Utterances";
import AdjacentPosts from "@components/AdjacentPosts";
import { PostSEO } from "@components/SEO";

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

      <article className="prose dark:prose-invert max-w-none mx-auto prose-img:rounded-3xl prose-code:before:content-none prose-code:after:content-none">
        <section className="flex flex-col items-center gap-6">
          <h1 style={{ margin: 0 }}>{postData.title}</h1>
          <h2 style={{ fontSize: "1.5rem", margin: 0 }}>{postData.date}</h2>
          <div className="group relative w-full h-0 overflow-hidden pb-[66.6%] rounded-3xl shadow-2xl shadow-slate-700 my-8">
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
