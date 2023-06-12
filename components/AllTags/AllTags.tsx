import type { Tags } from "@lib/tag";
import Link from "next/link";
import { FC } from "react";

interface Props {
  allTags: Tags;
}

const AllTags: FC<Props> = ({ allTags }) => {
  return (
    <div className="flex flex-wrap gap-3 max-w-3xl">
      {allTags.map((tag, idx) => (
        <Link
          href={`/posts/tag/${tag[0]}`}
          key={tag[0] + idx}
          className="btn btn-sm btn-outline btn-primary rounded-full">
          {tag[0]}
          <div className="badge badge-ghost">{tag[1]}</div>
        </Link>
      ))}
    </div>
  );
};

export default AllTags;
