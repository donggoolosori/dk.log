import { blogName } from '@constants/blog';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <nav className="flex flex-row justify-between items-end mb-10">
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
    </nav>
  );
};

export default Header;
