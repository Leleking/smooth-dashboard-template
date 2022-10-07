/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        primary: "#005C69",
        transparent: "transparent",
        current: "currentColor",
        grey: {
          100: "#DDE0E5",
          200: "#5C6278",
          300: "#5C6278",
        },

        black: colors.black,
        white: colors.white,
        gray: colors.coolGray,
        red: colors.red,
        yellow: colors.amber,
        green: colors.emerald,
        blue: colors.blue,
        indigo: colors.indigo,
        purple: colors.violet,
        pink: colors.pink,
        secondary: "#FBE89F",
      },
      transitionProperty: {
        height: "height",
        width: "width",
        maxh: "max-height",
        padding: "padding",
      },
    },
  },
  plugins: [],
};
