"use client";

import { createContext, ReactNode, useEffect, useState } from "react";

type Theme = "dark" | "light" | "dracula";

const darkTheme: "dark" | "dracula" = "dracula";

interface Context {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<Context>({
  theme: "light",
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    setTheme(
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? darkTheme
        : "light"
    );
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme(darkTheme);
      document.querySelector("html")?.setAttribute("data-theme", darkTheme);
    } else {
      setTheme("light");
      document.documentElement.classList.remove(darkTheme);
      document.querySelector("html")?.setAttribute("data-theme", "light");
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
