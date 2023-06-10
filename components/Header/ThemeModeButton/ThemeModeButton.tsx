"use client";

import { HiSun } from "@react-icons/all-files/hi/HiSun";
import { HiMoon } from "@react-icons/all-files/hi/HiMoon";
import useDarkMode from "@hooks/useDarkMode.hook";

const ThemeModeButton = () => {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <button
      onClick={toggleTheme}
      className="group p-1 flex items-center justify-center"
      aria-label="Toggle Dark Mode">
      {theme === "light" ? (
        <HiMoon className="text-indigo-500" />
      ) : (
        <HiSun className="text-orange-400" />
      )}
    </button>
  );
};

export default ThemeModeButton;
