// components/theme-provider.jsx
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({
  theme: "system",
  setTheme: () => {},
});

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "theme",
}) {
  const [theme, setThemeState] = useState(defaultTheme);

  // Apply theme to <html>
  const applyTheme = (newTheme) => {
    const root = document.documentElement;

    const resolvedTheme =
      newTheme === "system"
        ? window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
        : newTheme;

    root.classList.remove("light", "dark");
    root.classList.add(resolvedTheme);
  };

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    const initial = saved || defaultTheme;
    setThemeState(initial);
    applyTheme(initial);
  }, [defaultTheme, storageKey]);

  const setTheme = (newTheme) => {
    localStorage.setItem(storageKey, newTheme);
    setThemeState(newTheme);
    applyTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error("useTheme must be used inside ThemeProvider");
  return context;
}