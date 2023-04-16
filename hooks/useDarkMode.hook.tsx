import { useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";

const useDarkMode = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return { theme, toggleTheme };
};

export default useDarkMode;
