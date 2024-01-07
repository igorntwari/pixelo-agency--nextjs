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
            Our mission at Pixelo Agency is to empower businesses with
            innovative digital solutions, shaping the future of digital
            experiences
          </p>
        </div>
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <span className="text-white rounded-full p-1 bg-light-green ">
              <Check className="size-5" />
            </span>
            <p>Empower businesses with innovative digital solutions</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-white rounded-full p-1 bg-light-green ">
              <Check className="size-5" />
            </span>
            <p>Create compelling content</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-white rounded-full p-1 bg-light-green ">
              <Check className="size-5" />
            </span>
            <p>Design captivating graphics</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-white rounded-full p-1 bg-light-green ">
              <Check className="size-5" />
            </span>
            <p>Develop engaging websites</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-white rounded-full p-1 bg-light-green ">
              <Check className="size-5" />
            </span>
            <p>Offer insightful IT consulting</p>
          </div>
        </div>
      </div>
    </section>
  );
}
