import { blogName } from '@constants/blog';
import Link from 'next/link';

import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import useDarkMode from './useDarkMode.hook';

const Header = () => {
  const { isDark, darkModeHandler } = useDarkMode();

  return (
    <nav className="fixed top-0 left-0 bg-white dark:bg-slate-800 z-10 w-full h-14 opacity-70 flex justify-center items-center">
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
          <button onClick={darkModeHandler}>
            {isDark ? (
              <LightModeIcon className="text-3xl" />
            ) : (
              <DarkModeIcon className="text-3xl" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
