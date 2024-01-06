import classNames from "classnames";
import { robotoSerif } from "../../assets";
import TrialButton from "@/components/trial-button";
import { team1, team2, team3 } from "../../assets";
import ImageCollage from "@/components/image-collage";

export default function AboutUs() {
  const IMAGES = [
    { src: team1, alt: "Team image 1" },
    { src: team2, alt: "Team image 2" },
    { src: team3, alt: "Team image 3" },
  ];

  return (
    <section className="bg-custom-black text-white py-14">
      <div className="width-responsive grid md:grid-cols-2 gap-10 sm:gap-0">
        <ImageCollage images={IMAGES} className="h-52 sm:h-80 md:h-auto" />
        <div className="space-y-5">
          <h3
            className={classNames(
              robotoSerif.className,
              "text-light-green sm:text-xl font-semibold",
            )}
          >
            About us
          </h3>
          <h1
            className={classNames(
              robotoSerif.className,
              "text-3xl sm:text-5xl lg:text-6xl text-balance",
            )}
          >
            The core mission behind our work
          </h1>
          <p className="text-sm sm:text-base">
            Meet our team at Pixelo Agency - a blend of strategists, designers,
            developers, and consultants. Together, we&apos;re committed to
            shaping your digital journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 sm:gap-10">
            <div className="grid">
              <span
                className={classNames(
                  robotoSerif.className,
                  "text-light-green text-3xl font-semibold",
                )}
              >
                330+
              </span>
              <span className="text-sm">Companies helped</span>
            </div>
            <div className="grid">
              <span
                className={classNames(
                  robotoSerif.className,
                  "text-light-green text-3xl font-semibold",
                )}
              >
                230+
              </span>
              <span className="text-sm">Revenue generated</span>
            </div>
            <div></div>
          </div>
          <TrialButton className="mr-auto w-fit" dark={false} />
        </div>
      </div>
    </section>
  );
}
