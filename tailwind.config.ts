import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#18181B",
        rose: {
          50: "#FFF1F2",
          700: "#BE123C",
          900: "#881337",
        },
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
      },
      boxShadow: {
        card: "0 18px 50px -30px rgba(24, 24, 27, 0.22)",
      },
    },
  },
  plugins: [],
};

export default config;
