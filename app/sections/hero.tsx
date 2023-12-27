import NavBar from "@/components/nav-bar";
import Stars from "@/components/svg/stars";

export default function Hero() {
  return (
    <section className="min-h-dvh bg-hero-pattern bg-blend-overlay bg-bottom bg-no-repeat bg-cover text-white">
      <div className="width-responsive pt-5 sm:pt-10">
        <Stars className="absolute size-32 top-1/4 left-0" />
        <NavBar />
      </div>
    </section>
  );
}
