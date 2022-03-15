import { PostData } from '@lib/posts';
import PostCard from './PostCard';

interface Props {
  allPostsData: PostData[];
}

export default function PostCardList({ allPostsData }: Props) {
  return (
    <div className="flex flex-col items-center gap-4">
      {allPostsData.map(({ id, title, date, coverImg }) => (
        <PostCard
          key={id}
          id={id}
          title={title}
          date={date}
          coverImg={coverImg}
        />
      ))}
    </div>
  );
}
