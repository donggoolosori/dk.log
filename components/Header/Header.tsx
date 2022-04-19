import { blogName } from '@constants/blog';
import Link from 'next/link';
import ThemeModeButton from './ThemeModeButton';

const Header = () => {
  return (
    <nav className="fixed top-0 left-0 bg-white dark:bg-slate-800 opacity-70 z-50 w-full h-14 flex justify-center items-center transition-colors">
      <div className="flex flex-row justify-between items-center w-full h-full max-w-7xl px-4 text-3xl">
        <div className="font-bold">
          <Link href={'/'}>
            <a>{blogName}</a>
          </Link>
        </div>
        <div className="text-xl flex justify-end gap-6 items-center">
          <div>
            <Link href={'/posts'}>
              <a>Posts</a>
            </Link>
          </div>
          <ThemeModeButton />
        </div>
      </div>
    </nav>
  );
};

export default Header;
