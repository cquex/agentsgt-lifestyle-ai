/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif"
        ],
        serif: ["Georgia", "Cambria", "serif"],
        mono: ["Menlo", "Monaco", "Courier New", "monospace"]
      },
      colors: {
        primary: "#004E64",
        secondary: "#AEC3B0",
        success: "#22C55E",
        warning: "#EAB308",
        error: "#DC2626",
        dark: "#1E293B",
        light: "#F9FAFB",
        surface: {
          light: "#F9FAFB",
          dark: "#1E293B"
        }
      }
    }
  },
  darkMode: "class",
  plugins: []
};
