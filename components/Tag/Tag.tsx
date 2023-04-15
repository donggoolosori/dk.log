import Link from "next/link";
import { FC } from "react";

interface Props {
  tag: string;
  count?: number;
  className?: string;
}

const Tag: FC<Props> = ({ tag, count, className }) => {
  return (
    <Link
      href={tag === "All" ? "/posts" : `/posts/tag/${tag}`}
      className={`rounded-xl px-3 flex gap-2 cursor-pointer border-2 ${className}`}>
      <span>{tag}</span>
      {count && <span className="text-xs">{count}</span>}
    </Link>
  );
};

export default Tag;
