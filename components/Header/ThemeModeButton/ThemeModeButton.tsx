import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import useDarkMode from "hooks/useDarkMode.hook";

const ThemeModeButton = () => {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <button
      onClick={toggleTheme}
      className="group p-1 flex items-center justify-center"
      aria-label="Toggle Dark Mode">
      {theme === "light" ? (
        <LightModeIcon className="text-orange-400" />
      ) : (
        <DarkModeIcon className="text-indigo-500" />
      )}
    </button>
  );
};

export default ThemeModeButton;
