import PostsPageMain from "@components/PostsPageMain";
import { siteURL } from "@constants/siteMetaData";
import { PostMetaData } from "@lib/posts";
import { getAllTags, getTagFilteredPosts, Tags } from "@lib/tag";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";

interface Props {
  filteredPosts: PostMetaData[];
  allTags: Tags;
  siteUrl: string;
}
const FilteredPosts: NextPage<Props> = ({
  filteredPosts,
  allTags,
  siteUrl,
}) => {
  return (
    <>
      <Head>
        <link rel="canonical" href={siteUrl} />
      </Head>
      <PostsPageMain allPostsMetaData={filteredPosts} allTags={allTags} />
    </>
  );
};

export default FilteredPosts;

export const getStaticPaths: GetStaticPaths = async () => {
  const tags = getAllTags();

  const paths = tags.map((tag) => {
    return {
      params: {
        tag: tag[0],
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const allTags = getAllTags();

  const tag = params?.tag as string;

  if (!tag) {
    return {
      props: {
        filteredPosts: [],
        allTags,
      },
    };
  }
  const filteredPosts = await getTagFilteredPosts(tag);

  return {
    props: {
      filteredPosts,
      allTags,
      siteUrl: siteURL,
    },
  };
};
