import AllTags from '@components/AllTags';
import PostCardWrapper from '@components/PostCardWrapper';
import { PostMetaData } from '@lib/posts';
import { Tags } from '@lib/tag';
import SearchIcon from '@mui/icons-material/Search';
import usePostSearch from './usePostSearch.hook';

interface Props {
  allPostsMetaData: PostMetaData[];
  allTags: Tags;
}

const PostsPageMain = ({ allPostsMetaData, allTags }: Props) => {
  const { input, filteredPosts, searchHandler } =
    usePostSearch(allPostsMetaData);

  return (
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
  );
};

export default PostsPageMain;
