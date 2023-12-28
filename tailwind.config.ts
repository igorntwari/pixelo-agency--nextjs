import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-black": "#0C0C0C",
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
        "hero-content-sm": "calc(100vh - 4rem)",
      },
    },
  },
  plugins: [],
};
export default config;
