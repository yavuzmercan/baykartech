/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dalio_blue: "#0A142F",
        dalio_yellow: "#FFC93E",
      },
    },
  },
  plugins: [],
};
