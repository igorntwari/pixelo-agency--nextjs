// Fonts
import { DM_Sans } from "next/font/google";
import { Roboto_Serif } from "next/font/google";

export const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export const robotoSerif = Roboto_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// SVG
export { default as Stars } from "./svg/stars";
export { default as Logo } from "./svg/logo";
export { default as Leafe } from "./svg/leafe-logo";
export { default as Mindfullness } from "./svg/mindfullness-logo";
export { default as Greenish } from "./svg/greenish-logo";
export { default as Automation } from "./svg/automation-logo";

// Images
export { default as heroImage } from "./images/hero.png";
export { default as team1 } from "./images/team-1.jpg";
export { default as team2 } from "./images/team-2.jpg";
export { default as team3 } from "./images/team-3.jpg";
export { default as team4 } from "./images/team-4.png";
export { default as team5 } from "./images/team-5.png";
export { default as team6 } from "./images/team-6.png";

export { default as about1 } from "./images/about-1.png";
export { default as about2 } from "./images/about-2.png";
export { default as about3 } from "./images/about-3.png";
