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
    },
  },
  plugins: [],
};
export default config;
