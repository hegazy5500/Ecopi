import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        leaf: {
          50: "#f2fbf6",
          100: "#def7e6",
          200: "#bceecd",
          300: "#86e0aa",
          400: "#4fcb82",
          500: "#22b45f",
          600: "#15934a",
          700: "#13753d",
          800: "#135d33",
          900: "#124d2c"
        },
        earth: "#6a5f4b",
        sky: "#def5ff"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(16, 24, 40, 0.08)"
      },
      backgroundImage: {
        hero: "radial-gradient(circle at top, rgba(34,180,95,0.18), transparent 35%), linear-gradient(180deg, #f7fff9 0%, #f0fdf5 45%, #ffffff 100%)"
      }
    }
  },
  plugins: []
};

export default config;
