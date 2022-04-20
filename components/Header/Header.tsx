import { blogName } from '@constants/blog';
import Menu from './Menu';
import NavigationButton from './NavigationButton';
import NavigationButtonList from './NavigationButtonList';
import ThemeModeButton from './ThemeModeButton';

const Header = () => {
  return (
    <nav className="fixed top-0 left-0 backdrop-blur-sm bg-white/40 dark:bg-slate-800/40 z-50 w-full h-14 flex justify-center items-center transition-all">
      <div className="flex flex-row justify-between items-center w-full h-full max-w-7xl px-4">
        <NavigationButton
          href="/"
          text={blogName}
          className="font-bold text-3xl"
        />

        <div className="text-lg flex justify-end gap-6 items-center">
          <div className="hidden sm:block">
            <NavigationButtonList />
          </div>
          <ThemeModeButton />
          <Menu />
        </div>
      </div>
    </nav>
  );
};

export default Header;
