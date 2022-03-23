module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      confortaa: ["Comfortaa", "cursive"],
      lato: ["Lato", "sans-serif"],
    },
    extend: {
      colors: {
        "main-blue": "#B2D9D9",
        "light-blue": "#d3e5e5",
        "dark-gray": "#959595",
        "soft-gray": "#f7f7f7",
        "cream-yellow": "#eae8de",
        "off-pink": "#cebeb9",
        "pure-pink": "#e7cac2",
      },
    },
  },
  plugins: [],
};
