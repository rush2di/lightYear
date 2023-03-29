/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const getPalette = require("tailwindcss-palette-generator");

const lightYearPalette = getPalette([
  {
    color: "#5B93FF",
    name: "ly-blue",
    shade: 400,
    shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
  },
  {
    color: "#26C0E2",
    name: "ly-teal",
    shade: 700,
    shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
  },
  {
    color: "#FFC327",
    name: "ly-yellow",
    shade: 500,
    shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
  },
  {
    color: "#FF8F6B",
    name: "ly-orange",
    shade: 400,
    shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
  },
  {
    color: "#605BFF",
    name: "ly-indigo",
    shade: 600,
    shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
  },
]);

const _custom_screens = {
  xs: "345px",
  sm: "525px",
  md: "768px",
  lg: "1024px",
  xl: "1420px",
};

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        shades: {
          1: "#181818",
          2: "#282828",
          3: "#404040",
          4: "#545454",
          5: "#717171",
          6: "#A2A2A2",
          7: "#D4D4D4",
          8: "#E7E7E7",
          9: "#F4F4F4",
          10: "#FAFAFA",
        },
        ...lightYearPalette,
      },
      keyframes: {
        arrow: {
          "0%": { transform: "translateY(-1rem)" },
          "50%": { transform: "translateY(0rem)" },
          "100%": { transform: "translateY(-1rem)" },
        },
      },
      animation: {
        arrow: "arrow 1.85s ease-in-out infinite",
      },
    },
    screens: _custom_screens,
    fontFamily: {
      prim: ["'Nunito'", ...defaultTheme.fontFamily.sans],
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    require("tailwind-bootstrap-grid")({
      containerMaxWidths: {
        xs: "100%",
        sm: "100%",
        md: "100%",
        lg: "100%",
        xl: _custom_screens.xl,
      },
      gridGutters: { 1: "1.5rem" },
    }),
  ],
};
