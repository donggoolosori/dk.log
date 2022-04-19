import useDarkMode from './useDarkMode.hook';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const ThemeModeButton = () => {
  const { isDark, darkModeHandler } = useDarkMode();

  return (
    <button onClick={darkModeHandler} className="group p-1">
      {isDark ? (
        <LightModeIcon className="text-3xl group-hover:text-orange-400" />
      ) : (
        <DarkModeIcon className="text-3xl group-hover:text-indigo-500" />
      )}
    </button>
  );
};

export default ThemeModeButton;
