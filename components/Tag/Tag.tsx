import Link from "next/link";

interface Props {
  tag: string;
  count?: number;
  className?: string;
}

export default function Tag({ tag, count, className }: Props) {
  return (
    <Link
      href={tag === "All" ? "/posts" : `/posts/tag/${tag}`}
      className={`rounded-xl px-3 flex gap-2 cursor-pointer border-2 ${className}`}>
      <span>{tag}</span>
      {count && <span className="text-xs">{count}</span>}
    </Link>
  );
}
