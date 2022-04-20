import useDarkMode from './useDarkMode.hook';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const ThemeModeButton = () => {
  const { isDark, darkModeHandler } = useDarkMode();

  return (
    <button onClick={darkModeHandler} className="group p-1">
      {isDark ? (
        <LightModeIcon fontSize="large" className="text-orange-400" />
      ) : (
        <DarkModeIcon fontSize="large" className="text-indigo-500" />
      )}
    </button>
  );
};

export default ThemeModeButton;
