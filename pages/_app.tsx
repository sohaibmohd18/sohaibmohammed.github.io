// pages/_app.tsx
import "@/styles/globals.css"; // ✅ adjust path if needed
import type { AppProps } from "next/app";
import { ThemeProvider } from "@/components/theme-provider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="system" storageKey="theme">
        <Component {...pageProps} />
    </ThemeProvider>
  );
}