import { blogName } from '@constants/blog';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <nav className="fixed top-0 left-0 bg-white z-10 w-full h-14 opacity-70 flex justify-center items-center">
      <div className="flex flex-row justify-between items-center w-full h-full max-w-7xl px-4">
        <div className="text-3xl">
          <Link href={'/'}>
            <a>{blogName}</a>
          </Link>
        </div>
        <div className="text-xl">
          <div>
            <Link href={'/posts'}>
              <a>Posts</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;