import AllTags from '@components/AllTags';
import Layout from '@components/layout';
import PostCardWrapper from '@components/PostCardWrapper';
import { getSortedPostsMetaData, PostMetaData } from '@lib/posts';
import { getAllTags, Tags } from '@lib/tag';
import { GetStaticProps } from 'next';
import usePostSearch from './usePostSearch';

interface Props {
  allPostsMetaData: PostMetaData[];
  allTags: Tags;
}

export default function Posts({ allPostsMetaData, allTags }: Props) {
  const { input, filteredPosts, searchHandler } =
    usePostSearch(allPostsMetaData);

  return (
    <Layout>
      <div className="flex flex-col items-center">
        <AllTags allTags={allTags} />
        <input value={input} onChange={searchHandler} />
        <PostCardWrapper allPostsMetaData={filteredPosts} />
      </div>
    </Layout>
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
