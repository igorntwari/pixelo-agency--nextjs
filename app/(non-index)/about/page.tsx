import Counter from "./sections/counter";
import HeroAbout from "./sections/hero-about";
import Mission from "./sections/mission";

export default function About() {
  return (
    <main>
      <HeroAbout />
      <Counter />
      <Mission />
    </main>
  );
}
