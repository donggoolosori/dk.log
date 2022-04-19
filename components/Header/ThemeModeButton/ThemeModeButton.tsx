import useDarkMode from './useDarkMode.hook';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const ThemeModeButton = () => {
  const { isDark, darkModeHandler } = useDarkMode();

  return (
    <button onClick={darkModeHandler}>
      {isDark ? (
        <LightModeIcon className="text-3xl" />
      ) : (
        <DarkModeIcon className="text-3xl" />
      )}
    </button>
  );
};

export default ThemeModeButton;
