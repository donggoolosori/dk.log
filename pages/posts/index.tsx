import AllTags from '@components/AllTags';
import Layout from '@components/layout';
import PostCardWrapper from '@components/PostCardWrapper';
import { getSortedPostsMetaData, PostMetaData } from '@lib/posts';
import { getAllTags, Tags } from '@lib/tag';
import { GetStaticProps } from 'next';

interface Props {
  allPostsMetaData: PostMetaData[];
  allTags: Tags;
}

export default function Posts({ allPostsMetaData, allTags }: Props) {
  return (
    <Layout>
      <div className="flex flex-col items-center">
        <AllTags allTags={allTags} />
        <PostCardWrapper allPostsMetaData={allPostsMetaData} />
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsMetaData = await getSortedPostsMetaData();

  const allTags = getAllTags(allPostsMetaData);

  return {
    props: {
      allPostsMetaData,
      allTags,
    },
  };
};
