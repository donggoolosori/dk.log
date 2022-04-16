import { PostMetaData } from '@lib/posts';
import PostCard from './PostCard';

interface Props {
  allPostsMetaData: PostMetaData[];
}

export default function PostCardList({ allPostsMetaData }: Props) {
  return (
    <div className="flex flex-wrap gap-8">
      {allPostsMetaData?.map((props) => (
        <PostCard key={props.id} {...props} />
      ))}
    </div>
  );
}
