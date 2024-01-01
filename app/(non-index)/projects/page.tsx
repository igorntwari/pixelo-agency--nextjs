import Contact from "@/components/sections/contact";
import Portfolio from "./sections/portfolio";
import ShowCase from "./sections/showcase";

export default function Projects() {
  return (
    <main className="*:my-10 width-responsive">
      <Portfolio />
      <ShowCase />
      <Contact />
    </main>
  );
}
