/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        red: {
          700: "#ff0000",
        },
      },
      width: {
        "730px": "730px",
      },
    },
  },
  plugins: [],
};
