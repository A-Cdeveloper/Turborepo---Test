/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./apps/**/*.{js,ts,jsx,tsx}", "./packages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          500: "#3b82f6",
          900: "#1e3a8a",
        },
        secondary: {
          50: "#f8fafc",
          500: "#64748b",
          900: "#0f172a",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
