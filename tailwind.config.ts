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
        foreground: "var(--foreground)",
        background: {
          "1": "#0F0E11", 
          "2": "#141414",
        },
        darkGrey: "#161716",
        green: "#55B02E",
        red: "#E93030",
        darkGray: "#1F1F21",
        gray: "#71717A",
        lightGray: "#B8B8B8",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
export default config;
