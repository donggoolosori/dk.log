"use client";
import { createContext, ReactNode, useEffect, useState } from "react";

type Theme = "dark" | "light";

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
        ? "dark"
        : "light"
    );
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.querySelector("html")?.setAttribute("data-theme", "dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      document.querySelector("html")?.setAttribute("data-theme", "light");
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
