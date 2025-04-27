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
        primary: "#004E64", // tu Pacific Cyan
        secondary: "#AEC3B0", // un gris suave (slate-500)
        success: "#22C55E", // verde
        warning: "#EAB308", // ámbar
        error: "#DC2626", // rojo
        dark: "#1E293B", // gris oscuro
        light: "#F9FAFB",
        surface: {
          light: "#F9FAFB", // fondo claro
          dark: "#1E293B" // fondo oscuro
        }
      }
    }
  },
  darkMode: "class", // si quieres modo oscuro
  plugins: []
};
