import type { Config } from "tailwindcss";

/** @type {import('tailwindcss').Config} */
const config:Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        blue: "#85210b",
      },
    },
  },
  plugins: [],
};

export default config;