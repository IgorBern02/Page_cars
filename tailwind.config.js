/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, js}", "index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        corLua: "#f1c40f",
        corSol: "#f39c12",
      },
      fontFamily: {
        pacifico: ["Pacifico", "cursive"],
      },
      height: {
        128: "32rem",
      },
    },
  },
  plugins: [],
};
