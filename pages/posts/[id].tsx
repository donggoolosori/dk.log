import PostImage from "@components/PostImage";
import { getAllPostIds, getPostData, PostData } from "@lib/posts";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Utterances from "@components/Utterances";
import AdjacentPosts from "@components/AdjacentPosts";
import { PostSEO } from "@components/SEO";
import Mdx from "@components/Mdx";

interface Props {
  postData: PostData;
}

const Post: NextPage<Props> = ({ postData }) => {
  const { title, description, coverImg, mdxSource } = postData;

  return (
    <>
      <PostSEO title={title} description={description} ogImage={coverImg} />

      <article className="prose prose-a:no-underline prose-a:text-blue-400 dark:prose-invert max-w-none mx-auto prose-h1:mt-20 prose-headings:before:text-blue-400 prose-h1:before:content-['#\00a0'] prose-img:rounded-2xl prose-code:before:content-none prose-code:after:content-none">
        <section className="flex flex-col items-center gap-6">
          <h1 style={{ margin: 0 }} className="before:!content-none">
            {postData.title}
          </h1>
          <h2 style={{ fontSize: "1.5rem", margin: 0 }}>{postData.date}</h2>
          <div className="group relative w-full h-80 sm:h-[28rem] rounded-3xl my-16">
            <PostImage
              blurCss={postData.blurCss}
              coverImg={postData.coverImg}
              priority
            />
          </div>
        </section>
        <Mdx source={mdxSource} />
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
