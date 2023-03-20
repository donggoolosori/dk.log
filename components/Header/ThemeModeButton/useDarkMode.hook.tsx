import { useEffect, useState } from "react";

export default function useDarkMode() {
  const [isDark, setIsDark] = useState<boolean>(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const darkModeHandler = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
    setIsDark((isDark) => !isDark);
  };

  return { isDark, darkModeHandler };
}
