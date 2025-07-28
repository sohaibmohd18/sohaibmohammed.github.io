/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enables dark mode toggling via a class on <html>
  content: [
    "./pages/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./app/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        popover: "hsl(var(--popover))",
        "popover-foreground": "hsl(var(--popover-foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        secondary: "hsl(var(--secondary))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        destructive: "hsl(var(--destructive))",
        "destructive-foreground": "hsl(var(--destructive-foreground))",
        ring: "hsl(var(--ring))",

        // Warm gray
        "warm-gray-50": "hsl(var(--warm-gray-50))",
        "warm-gray-100": "hsl(var(--warm-gray-100))",
        "warm-gray-200": "hsl(var(--warm-gray-200))",
        "warm-gray-300": "hsl(var(--warm-gray-300))",
        "warm-gray-400": "hsl(var(--warm-gray-400))",
        "warm-gray-500": "hsl(var(--warm-gray-500))",
        "warm-gray-600": "hsl(var(--warm-gray-600))",
        "warm-gray-700": "hsl(var(--warm-gray-700))",
        "warm-gray-800": "hsl(var(--warm-gray-800))",
        "warm-gray-900": "hsl(var(--warm-gray-900))",
      },
      borderRadius: {
        lg: "var(--radius)",
      },
    },
  },
  plugins: [],
};