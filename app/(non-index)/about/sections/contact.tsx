import { robotoSerif } from "@/app/assets";
import classNames from "classnames";
import Link from "next/link";

export default function Contact() {
  return (
    <section className="width-responsive">
      <div className="bg-black/90 py-5 sm:py-10 my-10 text-white flex flex-col items-center gap-5 rounded-lg">
        <h1 className={classNames(robotoSerif.className, "font-medium")}>
          Enough talk, let&apos;s get to work
        </h1>
        <Link
          href="/contact"
          className="bg-white text-black rounded-full px-4 py-1 sm:py-2"
        >
          Get in touch
        </Link>
      </div>
    </section>
  );
}
