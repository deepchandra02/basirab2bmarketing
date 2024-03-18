/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navbar: '#081B0B',
        heroBody: '#041C09',
        text: '#C09E3B',
        basiraGreen: '#B5E887'
      },
    },
  },
  plugins: [],
});