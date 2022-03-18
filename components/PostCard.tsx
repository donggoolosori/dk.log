import { PostData } from '@lib/posts';
import Image from 'next/image';
import Link from 'next/link';
import BlurImage from './BlurImage';

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
      <a className="w-100 h-96 rounded-3xl flex flex-col gap-2 justify-evenly relative p-10 text-slate-50 hover:-translate-y-2 transition-transform duration-300">
        <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full overflow-hidden rounded-3xl brightness-50">
          <div className="relative w-full h-full">
            <BlurImage blurCss={blurCss} />
            <Image
              src={coverImg}
              alt="cover-image"
              layout="fill"
              objectFit="cover"
              className="rounded-3xl"
            />
          </div>
        </div>

        <section className="z-10 w-full h-3/5 flex flex-col justify-between mt-28">
          <h1 className="font-bold text-2xl w-full line-clamp-2">{title}</h1>
          <p className="text-xl font-thin w-full line-clamp-2">{description}</p>
          <span className="text-base italic font-thin h-1/5">{date}</span>
        </section>
      </a>
    </Link>
  );
}
