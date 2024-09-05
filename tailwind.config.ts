import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#111111",
        primary: "#0045FF",
        secondary: "#757575",
      },
      fontFamily:{
        inter: ['var(--font-inter)'],
        mont: ['var(--font-montserrat)'],
      }
    },
  },
  plugins: [],
};
export default config;
