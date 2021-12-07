module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        noto: ["Noto Sans Arabic"],
      },
      fontSize: {},
      colors: {
        primary: {
          100: "#e5f0ff",
          200: "#66a6ff",
          300: "#006cff",
          400: "#004099",
        },
        secondary: "#f1f1f4",
        accent: "#ffd700",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
