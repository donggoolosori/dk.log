"use client";

import useDarkMode from "@hooks/useDarkMode.hook";
import { HiMoon } from "@react-icons/all-files/hi/HiMoon";
import { HiSun } from "@react-icons/all-files/hi/HiSun";

const ThemeModeButton = () => {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <label
      className={`swap swap-rotate ${
        theme === "dracula" ? "swap-active" : ""
      }`}>
      {/* this hidden checkbox controls the state */}
      <input type="checkbox" onClick={toggleTheme} />

      <HiSun className=" text-primary swap-on" size={28} />
      <HiMoon className=" text-primary swap-off" size={28} />
    </label>
  );
};

export default ThemeModeButton;
