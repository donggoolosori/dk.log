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
            <a className="flex items-center justify-between gap-2 no-underline w-4/5 px-5 py-3 rounded-2xl 1/2 transition-transform hover:-translate-y-2 shadow-slate-500 dark:shadow-black shadow-lg">
              <ArrowBackIcon fontSize="large" />
              <span className="line-clamp-2">{prevPost.title}</span>
            </a>
          </Link>
        )}
      </div>
      <div className="w-1/2 flex justify-end">
        {!nextPost ? (
          ''
        ) : (
          <Link href={`/posts/${nextPost.id}`}>
            <a className="flex items-center justify-between gap-2 no-underline w-4/5 px-5 py-3 rounded-2xl 1/2 transition-transform hover:-translate-y-2 shadow-slate-500 dark:shadow-black shadow-lg">
              <span className="line-clamp-2">{nextPost.title}</span>
              <ArrowForwardIcon fontSize="large" />
            </a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default AdjacentPosts;
