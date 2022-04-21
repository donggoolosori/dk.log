import { AdjacentPosts } from '@lib/posts';
import Link from 'next/link';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface Props {
  adjacentPosts: AdjacentPosts;
}

const AdjacentPosts = ({ adjacentPosts }: Props) => {
  const { prevPost, nextPost } = adjacentPosts;

  return (
    <div className={`flex justify-between w-full mt-20 mb-10`}>
      <div className="w-1/2 flex justify-start">
        {!prevPost ? (
          ''
        ) : (
          <Link href={`/posts/${prevPost.id}`}>
            <a className="flex flex-col items-center justify-between no-underline h-32 sm:h-24 w-4/5 p-5 rounded-2xl transition-transform hover:-translate-y-2 shadow-slate-500 dark:shadow-black shadow-lg">
              <div className="flex justify-center items-center">
                <ArrowBackIcon className="text-slate-400" />
                <span className="text-xs text-slate-400">PREVIOUS</span>
              </div>
              <span className="line-clamp-2 sm:line-clamp-1 text-md">
                {prevPost.title}
              </span>
            </a>
          </Link>
        )}
      </div>
      <div className="w-1/2 flex justify-end">
        {!nextPost ? (
          ''
        ) : (
          <Link href={`/posts/${nextPost.id}`}>
            <a className="flex flex-col items-center justify-between no-underline h-32 sm:h-24 w-4/5 p-5 rounded-2xl transition-transform hover:-translate-y-2 shadow-slate-500 dark:shadow-black shadow-lg">
              <div className="flex justify-center items-center">
                <span className="text-xs text-slate-400">NEXT</span>
                <ArrowForwardIcon className="text-slate-400" />
              </div>
              <span className="line-clamp-2 sm:line-clamp-1 text-md">
                {nextPost.title}
              </span>
            </a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default AdjacentPosts;
