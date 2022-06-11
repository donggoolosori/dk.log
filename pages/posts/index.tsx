import { getSortedPostsMetaData, PostMetaData } from '@lib/posts';
import { getAllTags, Tags } from '@lib/tag';
import { GetStaticProps } from 'next';
import PostsPageMain from '@components/PostsPageMain';
import { PageSEO } from '@components/SEO';
import { postsPageDescription, postsPageTitle } from '@constants/siteMetaData';

interface Props {
  allPostsMetaData: PostMetaData[];
  allTags: Tags;
}

export default function Posts({ allPostsMetaData, allTags }: Props) {
  return (
    <>
      <PageSEO title={postsPageTitle} description={postsPageDescription} />
      <PostsPageMain allPostsMetaData={allPostsMetaData} allTags={allTags} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsMetaData = await getSortedPostsMetaData();

  const allTags = getAllTags();

  return {
    props: {
      allPostsMetaData,
      allTags,
    },
  };
};
