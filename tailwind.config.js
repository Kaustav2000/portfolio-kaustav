/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: "#root",
  theme: {
    extend: {
      colors: {
        primary: {
          mix: "linear-gradient(134deg. #6A98F0 0%, #4961DC 99%)",
          dark: "#6A98F0",
          light: "#6D83F2",
        },
        dark: {
          secondary: "#303030",
          primary: "#191919",
        },
      },
    },
  },
  plugins: [],

  darkMode: "class",
};
