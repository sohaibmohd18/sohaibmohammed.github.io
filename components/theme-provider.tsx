import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: "system",
  setTheme: () => {},
});

export const ThemeProvider = ({
  children,
  defaultTheme = "system",
  storageKey = "theme",
}: ThemeProviderProps) => {
  const [theme, setThemeState] = useState<Theme>(defaultTheme);

  // Apply theme to <html>
  const applyTheme = (newTheme: Theme) => {
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
    const saved = localStorage.getItem(storageKey) as Theme;
    const initial = saved || defaultTheme;
    setThemeState(initial);
    applyTheme(initial);
  }, []);

  const setTheme = (newTheme: Theme) => {
    localStorage.setItem(storageKey, newTheme);
    setThemeState(newTheme);
    applyTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used inside ThemeProvider");
  return context;
};