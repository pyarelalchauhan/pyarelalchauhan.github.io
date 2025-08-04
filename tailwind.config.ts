import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        custom: "17px 17px 21px #bebebe -17px -17px 21px #ffffff",
      },
      keyframes: {
        floating: {
          "0%": {
            transform: "translate(0, 0px)",
          },
          "50%": {
            transform: "translate(0, 10px)",
          },
          "100%": {
            transform: "translate(0, -0px)",
          },
        }
      },
      animation: {
        float: "floating 3s infinite ease-in-out",
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],

  darkMode: "class",
};
export default config;
