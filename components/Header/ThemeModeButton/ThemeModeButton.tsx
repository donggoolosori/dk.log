"use client";

import useDarkMode from "@hooks/useDarkMode.hook";
import { HiMoon } from "@react-icons/all-files/hi/HiMoon";
import { HiSun } from "@react-icons/all-files/hi/HiSun";

const ThemeModeButton = () => {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <label
      className={`swap swap-rotate ${theme === "dark" ? "swap-active" : ""}`}>
      {/* this hidden checkbox controls the state */}
      <input type="checkbox" onClick={toggleTheme} />

      <HiSun className="text-orange-400 swap-on" size={28} />
      <HiMoon className="text-indigo-500 swap-off" size={28} />
    </label>
    // <button
    //   onClick={toggleTheme}
    //   className="group p-1 flex items-center justify-center"
    //   aria-label="Toggle Dark Mode">
    //   {theme === "light" ? (
    //     <HiMoon className="text-indigo-500" />
    //   ) : (
    //     <HiSun className="text-orange-400" />
    //   )}
    // </button>
  );
};

export default ThemeModeButton;
