/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        space: ["Space Grotesk", "sans-serif"],
      },

      colors: {
        RichBlack: "#0D1B2A",
        OffWhite: "#F0F4F8",
        SteelBlue: "#415A77",
        IceBlue: "#778DA9",
      },
      screens: {
        tablet: "640px",
        laptop: "1024px",
        lgDesktop: "1530px",
      },
    },
  },
  plugins: [require("tailwindcss-motion"), require("tailwindcss-intersect")],
};
