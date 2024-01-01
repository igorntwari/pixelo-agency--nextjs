import classNames from "classnames";
import { robotoSerif } from "./assets";
import NavBar from "@/components/nav-bar";

export default function NotFound() {
  return (
    <main className="bg-hero-pattern bg-blend-overlay bg-cover relative w-screen overflow-x-hidden space-y-10 h-screen text-white">
      <section className="flex flex-col h-full width-responsive pt-5">
        <NavBar dark />
        <div className="flex-1 grid place-content-center">
          <h1
            className={classNames(
              robotoSerif.className,
              "text-center text-5xl font-bold",
            )}
          >
            404
          </h1>
          <p className="text-2xl">Page not found</p>
        </div>
      </section>
    </main>
  );
}
