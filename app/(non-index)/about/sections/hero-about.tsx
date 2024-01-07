import { about1, about2, about3, robotoSerif } from "@/app/assets";
import ImageCollage from "@/components/image-collage";
import classNames from "classnames";

export default function HeroAbout() {
  const IMAGES = [
    { src: about1, alt: "About image 1" },
    { src: about2, alt: "About image 2" },
    { src: about3, alt: "About image 3" },
  ];
  return (
    <section className="width-responsive my-10">
      <div className="bg-custom-black text-white rounded-xl p-5 sm:p-10 grid gap-5 md:grid-cols-2">
        <div className="flex flex-col order-last space-y-5 md:space-y-0 md:order-first justify-evenly">
          <p className="text-sm hidden md:block">
            Pleasure and so read the was hope.
          </p>
          <p
            className={classNames(
              robotoSerif.className,
              "text-xl sm:text-2xl md:text-3xl lg:text-5xl leading-snug font-medium",
            )}
          >
            Ready to take{" "}
            <span className="text-light-green">your business </span>
            to the next level?
          </p>
          <p>
            We believe in collaboration, open communication, and delivering the
            best solutions to our customers. Excited for the future, we look
            forward to working with you.
          </p>
        </div>
        <div>
          <ImageCollage images={IMAGES} className=" h-52 sm:h-80" />
        </div>
      </div>
    </section>
  );
}
