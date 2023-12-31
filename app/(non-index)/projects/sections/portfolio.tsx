import { robotoSerif } from "@/app/assets";
import classNames from "classnames";

export default function Portfolio() {
  return (
    <section className="bg-custom-black py-8 sm:py-14 text-white rounded-xl">
      <h1
        className={classNames(
          robotoSerif.className,
          "text-2xl font-medium sm:text-3xl md:text-5xl text-center",
        )}
      >
        Our Portfolio
      </h1>
    </section>
  );
}
