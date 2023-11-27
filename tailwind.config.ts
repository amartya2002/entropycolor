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
      // keyframes: {
      //   pulseslow: {
      //     '0%': { opacity: '1' },
      //     '50%': { opacity: '0' },

      //     '100%': { opacity: '1' },
      //   },
      // },

      animation: {
        "spin-slow": "spin 1.9s  infinite",
        "pulse-slow": "pulseslow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};
export default config;
