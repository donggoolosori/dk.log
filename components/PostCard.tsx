import { PostData } from '@lib/posts';
import Image from 'next/image';
import Link from 'next/link';

type Props = PostData;

export default function PostCard({
  id,
  title,
  date,
  coverImg,
  blurCss,
}: Props) {
  return (
    <Link href={`/posts/${id}`}>
      <a className="w-100 h-96 rounded-3xl">
        <div className="flex flex-col gap-2 justify-evenly h-full w-full relative p-10 text-slate-50 hover:-translate-y-2 transition-transform duration-300">
          <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full overflow-hidden rounded-3xl">
            <div
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                width: '100%',
                height: '100%',
                transform: 'scale(1.5)',
                filter: 'blur(40px)',
                ...blurCss,
              }}
            />

            <Image
              src={coverImg}
              alt="cover-image"
              layout="fill"
              objectFit="cover"
              className="rounded-3xl brightness-50"
            />
          </div>

          <section className="z-10 w-full h-full flex flex-col justify-evenly">
            <h1 className="font-bold text-3xl">{title}</h1>
            <h3 className="text-sm">
              <p className="italic font-thin">{date}</p>
            </h3>
          </section>
        </div>
      </a>
    </Link>
  );
}
