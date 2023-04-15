import { AdjacentPosts } from "@lib/posts";
import Link from "next/link";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { FC } from "react";

interface Props {
  adjacentPosts: AdjacentPosts;
}

const AdjacentPosts: FC<Props> = ({ adjacentPosts }) => {
  const { prevPost, nextPost } = adjacentPosts;

  return (
    <div className={`flex justify-between w-full mt-20 mb-10`}>
      <div className="w-1/2 flex justify-start">
        {!prevPost ? (
          ""
        ) : (
          <Link href={`/posts/${prevPost.id}`}>
            <div className="group flex flex-col items-center justify-between no-underline h-32 sm:h-24 w-4/5 p-5  rounded-2xl shadow-slate-500 dark:shadow-black shadow-lg">
              <div className="flex justify-center items-center">
                <ArrowBackIcon className="text-slate-400 group-hover:text-sky-400 dark:group-hover:text-indigo-500" />
                <span className="text-xs text-slate-400 group-hover:text-sky-400 dark:group-hover:text-indigo-500">
                  PREVIOUS
                </span>
              </div>
              <span className="line-clamp-2 sm:line-clamp-1 text-md">
                {prevPost.title}
              </span>
            </div>
          </Link>
        )}
      </div>
      <div className="w-1/2 flex justify-end">
        {!nextPost ? (
          ""
        ) : (
          <Link href={`/posts/${nextPost.id}`}>
            <div className="group flex flex-col items-center justify-between no-underline h-32 sm:h-24 w-4/5 p-5  rounded-2xl shadow-slate-500 dark:shadow-black shadow-lg">
              <div className="flex justify-center items-center">
                <span className="text-xs text-slate-400 group-hover:text-sky-400 dark:group-hover:text-indigo-500">
                  NEXT
                </span>
                <ArrowForwardIcon className="text-slate-400 group-hover:text-sky-400 dark:group-hover:text-indigo-500" />
              </div>
              <span className="line-clamp-2 sm:line-clamp-1 text-md">
                {nextPost.title}
              </span>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default AdjacentPosts;
