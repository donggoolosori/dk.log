import Link from 'next/link';

interface Props {
  id: string;
  title: string;
  date: string;
}

export default function PostCard({ id, title, date }: Props) {
  return (
    <div>
      <Link href={`/posts/${id}`}>
        <a className="font-bold">{title}</a>
      </Link>
      <h3>{date}</h3>
    </div>
  );
}
