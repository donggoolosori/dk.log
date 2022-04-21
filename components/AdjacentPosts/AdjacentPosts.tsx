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
            <a className="flex items-center justify-between gap-3 no-underline w-4/5 p-3 px-6 rounded-2xl transition-transform hover:-translate-y-2 shadow-slate-500 dark:shadow-black shadow-lg">
              <ArrowBackIcon fontSize="large" />
              <div className="flex flex-col justify-center items-center gap-1">
                <span className="text-xs text-slate-400">PREVIOUS</span>
                <span className="line-clamp-1 text-md">{prevPost.title}</span>
              </div>
            </a>
          </Link>
        )}
      </div>
      <div className="w-1/2 flex justify-end">
        {!nextPost ? (
          ''
        ) : (
          <Link href={`/posts/${nextPost.id}`}>
            <a className="flex items-center justify-between gap-3 no-underline w-4/5 p-3 px-6 rounded-2xl transition-transform hover:-translate-y-2 shadow-slate-500 dark:shadow-black shadow-lg">
              <div className="flex flex-col justify-center items-center gap-1">
                <span className="text-xs text-slate-400">NEXT</span>
                <span className="line-clamp-1 text-md">{nextPost.title}</span>
              </div>
              <ArrowForwardIcon fontSize="large" />
            </a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default AdjacentPosts;
