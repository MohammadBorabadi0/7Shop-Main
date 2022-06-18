/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F4F5FC",
        secondary__light: "#faf5fc",
        secondary__dark: "#888",
      },
    },
  },
  plugins: [],
};
