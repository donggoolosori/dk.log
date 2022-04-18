import AllTags from '@components/AllTags';
import Layout from '@components/layout';
import PostCardWrapper from '@components/PostCardWrapper';
import { getSortedPostsMetaData, PostMetaData } from '@lib/posts';
import { getAllTags, Tags } from '@lib/tag';
import { GetStaticProps } from 'next';
import usePostSearch from './usePostSearch';
import SearchIcon from '@mui/icons-material/Search';

interface Props {
  allPostsMetaData: PostMetaData[];
  allTags: Tags;
}

export default function Posts({ allPostsMetaData, allTags }: Props) {
  const { input, filteredPosts, searchHandler } =
    usePostSearch(allPostsMetaData);

  return (
    <Layout>
      <div className="flex flex-col items-center gap-16">
        <div className="flex items-center w-full max-w-lg relative">
          <SearchIcon className="absolute text-3xl right-4" />
          <input
            value={input}
            onChange={searchHandler}
            className="border-2 rounded-2xl w-full px-6 py-3 text-xl outline-none focus:border-sky-500"
            placeholder="Search Posts"
          />
        </div>
        <AllTags allTags={allTags} />
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
