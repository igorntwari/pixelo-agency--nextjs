import type { Config } from "tailwindcss";
import tailwindScrollbar from "tailwind-scrollbar";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-black": "#0C0C0C",
        "light-green": "#64CCC5",
        "light-grey": "#F4F4F4",
      },
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(black, black), url('assets/images/hero-pattern.png')",
      },
      boxShadow: {
        rounded: "0rem 0rem 1.875rem rgba(255, 255, 255, 0.5)",
      },
      height: {
        "hero-content": "calc(100vh - 11rem)",
        "hero-content-sm": "calc(100vh - 4.5rem)",
      },
      keyframes: {
        focus: {
          from: {
            backgroundColor: "#F4F4F4",
            color: "rgb(10 10 10 / 1)",
          },
          "50%": {
            backgroundColor: "#0C0C0C",
            color: "white",
          },
          to: {
            backgroundColor: "#F4F4F4",
            color: "rgb(10 10 10 / 1)",
          },
        },
      },
      animation: {
        focus: "focus 1s ease-in-out calc(var(--order) * 1000ms) forwards",
      },
      screens: {
        "3xl": "1600px",
        "semi-md": "870px",
      },
    },
  },
  plugins: [tailwindScrollbar],
};
export default config;
