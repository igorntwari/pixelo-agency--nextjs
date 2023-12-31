import { robotoSerif } from "@/app/assets";
import classNames from "classnames";
import { Check } from "react-feather";

export default function Mission() {
  return (
    <section className="bg-custom-black py-10 text-white">
      <div className="width-responsive grid md:grid-cols-2 gap-10 md:gap-5">
        <div className="space-y-5">
          <h3
            className={classNames(
              robotoSerif.className,
              "text-light-green sm:text-xl font-semibold",
            )}
          >
            Our Mission
          </h3>
          <h1
            className={classNames(
              robotoSerif.className,
              "text-3xl sm:text-5xl lg:text-6xl text-balance",
            )}
          >
            Boost your business.
          </h1>
          <p>
            He moonlights difficult engrossed it, sportsmen. Interested has all
            Devonshire difficulty gay assistance joy.
          </p>
        </div>
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <span className="text-white rounded-full p-1 bg-light-green ">
              <Check className="size-5" />
            </span>
            <p>Moonlight newspaper up its enjoyment</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-white rounded-full p-1 bg-light-green ">
              <Check className="size-5" />
            </span>
            <p>She new course gets living.</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-white rounded-full p-1 bg-light-green ">
              <Check className="size-5" />
            </span>
            <p>Rooms oh fully taken by worse.</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-white rounded-full p-1 bg-light-green ">
              <Check className="size-5" />
            </span>
            <p>Perceived end certainly day.</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-white rounded-full p-1 bg-light-green ">
              <Check className="size-5" />
            </span>
            <p>Preference any astonished unreserved Mrs.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
