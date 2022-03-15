import { PostData } from '@lib/posts';
import PostCard from './PostCard';

interface Props {
  allPostsData: PostData[];
}

export default function PostCardList({ allPostsData }: Props) {
  return (
    <div className="flex flex-wrap gap-8 justify-center content-center">
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
