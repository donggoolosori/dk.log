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
      <a className="flex flex-col gap-2 justify-between border-2 rounded-lg w-2/5 h-36 p-4">
        <h1 className="font-bold text-2xl">{title}</h1>

        <h3 className="text-sm">
          <p className="italic font-thin">{date}</p>
        </h3>
      </a>
    </Link>
  );
}
