/** @type {import('tailwindcss').Config} */
const colors = import("tailwindcss/colors");

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.yellow,
      },
    },
  },
  plugins: [],
};
