import { robotoSerif } from "@/app/assets";
import classNames from "classnames";

export default function Counter() {
  return (
    <section className="width-responsive py-10 flex justify-between gap-5 sm:flex-row flex-col">
      <div className="flex flex-col items-center sm:items-start gap-2 sm:gap-5">
        <h3
          className={classNames(robotoSerif.className, "font-medium text-2xl")}
        >
          200+
        </h3>
        <p className={robotoSerif.className}>We&apos;re family</p>
        <p className="text-center sm:text-start">
          Speedily say has suitable disposal add boy. On fourth doubt miles of
          child. Exercise joy man children rejoiced
        </p>
      </div>
      <div className="flex flex-col items-center sm:items-start gap-2 sm:gap-5">
        <h3
          className={classNames(robotoSerif.className, "font-medium text-2xl")}
        >
          99%
        </h3>
        <p className={robotoSerif.className}>Graphic Design</p>
        <p className="text-center sm:text-start">
          Perceived end knowledge certainly day sweetness why cordially. Ask a
          quick six seven offer see among.
        </p>
      </div>
      <div className="flex flex-col items-center sm:items-start gap-2 sm:gap-5">
        <h3
          className={classNames(robotoSerif.className, "font-medium text-2xl")}
        >
          1.5M+
        </h3>
        <p className={robotoSerif.className}>Digital Marketing</p>
        <p className="text-center sm:text-start">
          Rooms oh fully taken by worse do. Points afraid but may end law
          lasted. Was out laughter raptures returned outweigh.
        </p>
      </div>
    </section>
  );
}
