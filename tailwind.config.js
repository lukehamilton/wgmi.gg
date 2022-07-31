module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {}
  },
  variants: {
    extend: {
      fontFamily: {
        serif: "Ricoleta"
      }
    }
  },
  plugins: [require("nightwind"), require("@tailwindcss/forms")]
};
