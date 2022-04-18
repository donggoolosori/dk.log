import AllTags from '@components/AllTags';
import PostCardWrapper from '@components/PostCardWrapper';
import SearchBar from '@components/SearchBar';
import { PostMetaData } from '@lib/posts';
import { Tags } from '@lib/tag';
import usePostSearch from './usePostSearch.hook';

interface Props {
  allPostsMetaData: PostMetaData[];
  allTags: Tags;
}

const PostsPageMain = ({ allPostsMetaData, allTags }: Props) => {
  const { filteredPosts, searchHandler } = usePostSearch(allPostsMetaData);

  return (
    <div className="flex flex-col items-center gap-16">
      <SearchBar onChange={searchHandler} />
      <AllTags allTags={allTags} />
      <PostCardWrapper allPostsMetaData={filteredPosts} />
    </div>
  );
};

export default PostsPageMain;
