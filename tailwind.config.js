/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      screens: {
        sm: "540px",
        md: "720px",
        lg: "840px",
        xl: "840px",
        "2xl": "840px",
      },
    },
  },
  plugins: [],
};
