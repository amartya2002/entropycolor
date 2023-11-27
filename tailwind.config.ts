import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx,json}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 1.9s  infinite",
        "pulse-better": "pulse 3s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
