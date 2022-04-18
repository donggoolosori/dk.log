import { PostData } from '@lib/posts';
import Link from 'next/link';
import PostImage from '@components/PostImage';
import Tags from '@components/Tags';

type Props = PostData;

export default function PostCard({
  id,
  title,
  date,
  coverImg,
  description,
  blurCss,
  tags,
}: Props) {
  return (
    <Link href={`/posts/${id}`} passHref>
      <div className="cursor-pointer group min-w-full md:min-w-[40%] xl:min-w-[30%] h-96 rounded-3xl flex flex-col flex-1 gap-2 justify-evenly relative hover:-translate-y-2 transition-transform duration-300 shadow-xl shadow-slate-500">
        <a className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-3xl brightness-75">
          <PostImage blurCss={blurCss} coverImg={coverImg} />
        </a>
        <section className="z-10 w-full h-4/5 mt-20 flex flex-col justify-between p-10 text-slate-50">
          {<Tags tags={tags} />}
          <a className="font-bold text-2xl w-full line-clamp-2 sm:line-clamp-1 md:line-clamp-2">
            {title}
          </a>
          <a className="text-md w-full line-clamp-2 max-w-2xl">{description}</a>
          <a className="text-md italic h-1/5">{date}</a>
        </section>
      </div>
    </Link>
  );
}
