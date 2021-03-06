import AllTags from '@components/AllTags';
import PostCardList from '@components/PostCardList';
import SearchBar from '@components/SearchBar';
import { PostMetaData } from '@lib/posts';
import { Tags } from '@lib/tag';
import { FC } from 'react';
import usePostSearch from './usePostSearch.hook';

interface Props {
  allPostsMetaData: PostMetaData[];
  allTags: Tags;
}

const PostsPageMain: FC<Props> = ({ allPostsMetaData, allTags }) => {
  const { filteredPosts, searchHandler } = usePostSearch(allPostsMetaData);

  return (
    <div className="flex flex-col items-center gap-16">
      <SearchBar onChange={searchHandler} />
      <AllTags allTags={allTags} />
      <PostCardList allPostsMetaData={filteredPosts} />
    </div>
  );
};

export default PostsPageMain;
