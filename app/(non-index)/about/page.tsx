import { Metadata } from "next";
import Contact from "@/components/sections/contact";
import Counter from "./sections/counter";
import HeroAbout from "./sections/hero-about";
import Mission from "./sections/mission";
import Team from "./sections/team";

export const metadata: Metadata = {
  title: "About us",
};

export default function About() {
  return (
    <main>
      <HeroAbout />
      <Counter />
      <Mission />
      <Team />
      <Contact />
    </main>
  );
}
