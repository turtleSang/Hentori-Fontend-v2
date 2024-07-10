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
        brown: {
          1: "#8F714B"
        },
        yellow: {
          base: "#C58325"
        }
      },
      animation: {
        'xoaycham': "xoay 2s infinite ease-in-out"
      }
      ,
      keyframes: {
        xoay: {
          '0%': {
            transform: 'rotate(0deg) scaleX(0)'

          },
          '100%': {
            transform: 'rotate(360deg) scaleX(1)'
          },
        }
      }
    },
  },
  plugins: [],
};
export default config;
