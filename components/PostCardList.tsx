import { PostData } from '@lib/posts';
import PostCard from './PostCard';

interface Props {
  allPostsData: PostData[];
}

export default function PostCardList({ allPostsData }: Props) {
  return (
    <div className="flex flex-wrap gap-6 p-12">
      {allPostsData.map((props) => (
        <PostCard key={props.id} {...props} />
      ))}
    </div>
  );
}
