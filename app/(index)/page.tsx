import AboutUs from "./sections/about-us";
import Hero from "./sections/hero";
import Services from "./sections/services";
import Process from "./sections/process";
import ShowCase from "./sections/showcase";
import Testimonials from "./sections/testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <AboutUs />
      <Process />
      <ShowCase />
      <Testimonials />
    </main>
  );
}
