import NavBar from "@/components/nav-bar";
import {
  Stars,
  heroImage,
  Mindfullness,
  Leafe,
  Automation,
  Greenish,
} from "../../assets";
import Image from "next/image";
import classNames from "classnames";
import TrialButton from "@/components/trial-button";
import { robotoSerif } from "../../assets";

export default function Hero() {
  return (
    <section className="bg-hero-pattern bg-blend-overlay relative w-screen overflow-x-hidden bg-bottom bg-no-repeat bg-cover text-white">
      <div className="width-responsive py-5 sm:py-10 min-h-dvh flex flex-col">
        <Stars className="absolute size-32 top-1/4 left-0 hidden sm:block" />
        <NavBar dark />
        <div className="grid md:grid-cols-2 gap-5 h-hero-content-sm sm:h-hero-content sm:mt-14 grid-rows-3 md:grid-rows-1 box-border">
          <div className="flex flex-col relative row-span-2 md:row-span-1 justify-around py-10 md:py-0 md:justify-center gap-5">
            <p
              className={classNames(
                robotoSerif.className,
                "lg:text-4xl sm:text-2xl text-xl font-medium",
              )}
            >
              Ready to take your{" "}
              <span className="text-light-green">Business Growth</span> to the
              next level?
            </p>
            <p className="text-sm sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit- et ut
              massa libero egestas malesuada viverra gravida libero cursus nulla
              leo pulvinar.
            </p>
            <TrialButton className="sm:w-auto self-start" dark={false} />
            <div className="md:absolute md:bottom-0 md:inset-x-0 flex sm:flex-row flex-col items-start justify-center *:w-full *:h-10 md:*:h-auto md:items-stretch md:h-16">
              <Greenish />
              <Automation />
              <Leafe className="h-full" />
              <Mindfullness />
            </div>
          </div>
          <div className="flex justify-center order-first box-border md:order-last items-center md:py-10">
            <Image
              src={heroImage}
              width={500}
              height={500}
              priority
              alt="Hero Image"
              className="rounded-full shadow-rounded h-full 3xl:h-auto w-auto object-cover"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
