import { PostMetaData } from '@lib/posts';
import { FC } from 'react';
import PostCard from './PostCard';

interface Props {
  allPostsMetaData: PostMetaData[];
}

const PostCardList: FC<Props> = ({ allPostsMetaData }) => {
  return (
    <div className="flex flex-wrap gap-8">
      {allPostsMetaData?.map((props) => (
        <PostCard key={props.id} {...props} />
      ))}
    </div>
  );
};

export default PostCardList;
