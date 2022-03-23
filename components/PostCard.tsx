import { PostData } from '@lib/posts';
import Image from 'next/image';
import Link from 'next/link';
import BlurImage from './BlurImage';
import PostImage from './PostImage';

type Props = PostData;

export default function PostCard({
  id,
  title,
  date,
  coverImg,
  description,
  blurCss,
}: Props) {
  return (
    <Link href={`/posts/${id}`}>
      <a className="group h-80 min-w-full md:min-w-[40%] lg:min-w-[30%] xl:h-96 rounded-3xl flex flex-col flex-1 gap-2 justify-evenly relative hover:-translate-y-2 transition-transform duration-300">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-3xl brightness-50 group-hover:brightness-75">
          <PostImage blurCss={blurCss} coverImg={coverImg} />
        </div>
        <section className="z-10 w-full h-4/5 mt-20 flex flex-col justify-between p-10 text-slate-50">
          <h1 className="font-bold text-2xl w-full line-clamp-2 sm:line-clamp-1 md:line-clamp-2">
            {title}
          </h1>
          <p className="text-xl font-thin w-full line-clamp-2">{description}</p>
          <span className="text-base italic font-thin h-1/5">{date}</span>
        </section>
      </a>
    </Link>
  );
}
