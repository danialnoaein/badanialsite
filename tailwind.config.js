/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    theme: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        gray: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
        white: "#ffffff",
        purple: "#3f3cbb",
        midnight: "#121063",
        metal: "#565584",
        tahiti: "#3ab7bf",
        silver: "#ecebff",
        "bubble-gum": "#ff77e9",
        bermuda: "#78dcca",
      },
    },
    container: {
      center: true,
      screens: {
        sm: "540px",
        md: "720px",
        lg: "840px",
        xl: "840px",
        "2xl": "840px",
      },
      print: {
        sm: "540px",
        md: "720px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        raw: "print",
      },
    },
  },
  plugins: [],
};
