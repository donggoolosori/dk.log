import Image from 'next/image';
import Link from 'next/link';

interface Props {
  id: string;
  title: string;
  date: string;
  coverImg: string;
}

export default function PostCard({ id, title, date, coverImg }: Props) {
  return (
    <Link href={`/posts/${id}`}>
      <a className="w-100 h-96">
        <div className="flex flex-col gap-2 justify-evenly h-full w-full relative p-10 text-slate-50">
          <Image
            src={coverImg}
            alt="cover-image"
            layout="fill"
            objectFit="cover"
            className="-z-10 brightness-75 rounded-3xl"
          />
          <h1 className="font-bold text-3xl">{title}</h1>
          <h3 className="text-sm">
            <p className="italic font-thin">{date}</p>
          </h3>
        </div>
      </a>
    </Link>
  );
}
