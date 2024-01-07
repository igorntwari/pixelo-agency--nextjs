import { robotoSerif } from "@/app/assets";
import classNames from "classnames";

export default function Counter() {
  return (
    <section className="width-responsive py-10 flex justify-between gap-5 md:flex-row flex-col">
      <div className="flex flex-col items-center md:items-start gap-2 sm:gap-5">
        <h3
          className={classNames(
            robotoSerif.className,
            "font-bold text-2xl sm:text-3xl",
          )}
        >
          200+
        </h3>
        <p className={classNames(robotoSerif.className, "font-medium")}>
          Web Development
        </p>
        <p className="text-center md:text-start">
          Pixelo Agency has transformed the digital presence of numerous
          companies with our web development expertise
        </p>
      </div>
      <div className="flex flex-col items-center md:items-start gap-2 sm:gap-5">
        <h3
          className={classNames(
            robotoSerif.className,
            "font-bold text-2xl sm:text-3xl",
          )}
        >
          99%
        </h3>
        <p className={classNames(robotoSerif.className, "font-medium")}>
          Graphic Design
        </p>
        <p className="text-center md:text-start">
          Pixelo Agency has brought numerous brands to life with our innovative
          graphic design solutions
        </p>
      </div>
      <div className="flex flex-col items-center md:items-start gap-2 sm:gap-5">
        <h3
          className={classNames(
            robotoSerif.className,
            "font-bold text-2xl sm:text-3xl",
          )}
        >
          1.5M+
        </h3>
        <p className={classNames(robotoSerif.className, "font-medium")}>
          Digital Marketing
        </p>
        <p className="text-center md:text-start">
          Pixelo Agency has successfully amplified the online presence of
          numerous businesses with our digital marketing strategies.
        </p>
      </div>
    </section>
  );
}
