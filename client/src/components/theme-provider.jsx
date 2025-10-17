// components/theme-provider.jsx
import React from "react";

// Simplified ThemeProvider: project targets a single light theme (Apple-like).
export function ThemeProvider({ children }) {
  return <>{children}</>;
}

export function useTheme() {
  // Keep a minimal hook shape to avoid changes elsewhere; returns a no-op setter.
  return { theme: "light", setTheme: () => {} };
}