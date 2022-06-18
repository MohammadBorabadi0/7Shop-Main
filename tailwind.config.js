const plugin = require('tailwindcss/plugin');

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
  plugins: [
    require('tw-elements/dist/plugin'),
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.no-scrollbar::-webkit-scrollbar': {
          'display': 'none',
        },
        'html::-webkit-scrollbar': {
          'width': '12px'
        },
        'html::-webkit-scrollbar-track': {
          'background': '#F4F5FC'
        },
        'html::-webkit-scrollbar-thumb': {
          'background-color': '#f97316',
          'border-radius': '10px'
        },
        '.aside::-webkit-scrollbar': {
          'width': '10px',
          'max-height': '100px'
        },
        '.aside::-webkit-scrollbar-thumb': {
          'background-color': '#f97316',
          'border-radius': '10px'
        },
      })
    })
  ],
};
