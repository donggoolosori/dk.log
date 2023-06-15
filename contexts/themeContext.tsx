"use client";

import { createContext, ReactNode, useEffect, useState } from "react";

type Theme = "light" | "dracula";

const lightTheme: Theme = "light";
const darkTheme: Theme = "dracula";

interface Context {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<Context>({
  theme: lightTheme,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(lightTheme);

  useEffect(() => {
    const preferTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? darkTheme
      : lightTheme;
    setTheme(preferTheme);
    document.querySelector("html")?.setAttribute("data-theme", preferTheme);
  }, []);

  const toggleTheme = () => {
    if (theme === lightTheme) {
      setTheme(darkTheme);
      document.querySelector("html")?.setAttribute("data-theme", darkTheme);
    } else {
      setTheme(lightTheme);
      document.documentElement.classList.remove(darkTheme);
      document.querySelector("html")?.setAttribute("data-theme", lightTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
