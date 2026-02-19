import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#FDB813",
          light: "#FEC844",
          dark: "#E5A510",
        },
        crimson: {
          DEFAULT: "#DC143C",
          light: "#E8365A",
          dark: "#B01030",
        },
        beige: {
          DEFAULT: "#F5F5DC",
          light: "#FAFAF0",
          dark: "#E8E8C8",
        },
        maroon: {
          DEFAULT: "#800020",
          light: "#9A1A3A",
          dark: "#600018",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
