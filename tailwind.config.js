/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Arial"],
      },
      fontSize: {
        small: [
          "22px",
          {
            lineHeight: "26px",
            letterSpacing: "-0.01em",
            fontWeight: "400",
          },
        ],
        normal: [
          "28px",
          {
            lineHeight: "32px",
            letterSpacing: "-0.01em",
            fontWeight: "400",
          },
        ],
        big: [
          "50px",
          {
            lineHeight: "54px",
            letterSpacing: "-0.01em",
            fontWeight: "400",
          },
        ],
        veryBig: [
          "62px",
          {
            lineHeight: "66px",
            letterSpacing: "-0.01em",
            fontWeight: "400",
          },
        ],
      },
      colors: {
        pinkish: {
          700: "#f4a88e",
        },
        gray: {
          700: "#e4e4e4",
        },
      },
    },
  },
  plugins: [],
};
