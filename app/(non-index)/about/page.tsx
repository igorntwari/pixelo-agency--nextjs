import Contact from "./sections/contact";
import Counter from "./sections/counter";
import HeroAbout from "./sections/hero-about";
import Mission from "./sections/mission";
import Team from "./sections/team";

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
