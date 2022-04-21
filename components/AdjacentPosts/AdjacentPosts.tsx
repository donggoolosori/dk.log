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
            <a className="flex flex-col items-center justify-start gap-2 no-underline w-4/5 p-3 rounded-2xl 1/2 transition-transform hover:-translate-y-2 shadow-slate-500 dark:shadow-black shadow-lg">
              <span className="text-sm text-slate-400">PREVIOUS</span>
              <div className="flex justify-between items-center gap-6">
                <ArrowBackIcon fontSize="large" />
                <span className="line-clamp-1">{prevPost.title}</span>
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
            <a className="flex flex-col items-center justify-start gap-2 no-underline w-4/5 p-3 rounded-2xl 1/2 transition-transform hover:-translate-y-2 shadow-slate-500 dark:shadow-black shadow-lg">
              <span className="text-sm text-slate-400">NEXT</span>
              <div className="flex justify-between items-center gap-6">
                <span className="line-clamp-1">{nextPost.title}</span>
                <ArrowForwardIcon fontSize="large" />
              </div>
            </a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default AdjacentPosts;
