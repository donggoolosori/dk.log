import { astronautImage } from "@constants/profile";
import { siteName } from "@constants/siteMetaData";
import Image from "next/image";
import Menu from "./Menu";
import NavigationButton from "./NavigationButton";
import NavigationButtonList from "./NavigationButtonList";
import ThemeModeButton from "./ThemeModeButton";

const Header = () => {
  return (
    <nav className="fixed top-0 left-0 backdrop-blur-sm bg-white/40 dark:bg-dark-base/40 z-50 w-full h-14 flex justify-center items-center transition-all">
      <div className="flex flex-row justify-between items-center w-full h-full max-w-3xl px-4">
        <div className="flex items-center gap-2">
          <NavigationButton
            href="/"
            text={siteName}
            className="font-bold text-3xl"
          />
          <Image
            src={astronautImage}
            alt="navbar astrounaut"
            width={40}
            height={40}
            priority
          />
        </div>

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
