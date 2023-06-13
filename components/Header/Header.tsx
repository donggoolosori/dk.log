"use client";

import { astronautImage } from "@constants/profile";
import { siteName } from "@constants/siteMetaData";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Menu from "./Menu";
import NavigationButton from "./NavigationButton";
import NavigationButtonList from "./NavigationButtonList";
import ThemeModeButton from "./ThemeModeButton";
import { useMemo } from "react";

export default function Header() {
  const pathname = usePathname();

  const maxWidth = useMemo(() => {
    // eslint-disable-next-line no-useless-escape
    if (/^\/posts\/[^\/]+$/.test(pathname)) {
      return "max-w-4xl";
    }
    return "max-w-7xl";
  }, [pathname]);

  return (
    <nav className="fixed top-0 left-0 backdrop-blur-sm bg-base-100/40 z-50 w-full h-14 flex justify-center items-center">
      <div
        className={`flex flex-row justify-between items-center w-full h-full px-4 md:px-28 xl:px-0 transition-all ${maxWidth}`}>
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
}
