"use client";

import { Logo, robotoSerif } from "@/app/assets";
import classNames from "classnames";
import Link from "next/link";
import { FormEvent, useRef } from "react";
import { Facebook, Instagram, Linkedin } from "react-feather";

export default function Footer() {
  const inputReference = useRef<null | HTMLInputElement>(null);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (inputReference.current) inputReference.current.value = "";
  }

  return (
    <footer className="bg-custom-black text-white">
      <div className="width-responsive py-10">
        <div className="flex gap-12 md:gap-5 md:flex-row flex-col">
          <div className="space-y-5 flex-1">
            <div className="flex items-center gap-3">
              <Logo className="size-10" />
              <span
                className={classNames(
                  robotoSerif.className,
                  "font-semibold text-xl",
                )}
              >
                Pixelo
              </span>
            </div>
            <p>
              We’re a team of strategic creator and digital innovator, united
              focus in our pursuit of mastery and joyful.
            </p>
          </div>
          <div className="flex flex-col gap-4 flex-1">
            <h3 className={classNames(robotoSerif.className, "text-xl")}>
              Pages
            </h3>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contac Us</Link>
          </div>
          <form onSubmit={handleSubmit} className="space-y-3 flex-1">
            <h3 className={classNames(robotoSerif.className, "text-xl")}>
              Subscribe
            </h3>
            <label
              htmlFor="email"
              className="bg-white rounded-full py-2 pr-2 pl-4 flex gap-3 text-sm"
            >
              <input
                ref={inputReference}
                type="text"
                name="email"
                placeholder="Enter your email here"
                className="flex-1 focus:outline-none text-black bg-transparent"
              />
              <button className="bg-custom-black/90 py-1 px-3 hidden md:block rounded-full flex-shrink">
                Subscribe
              </button>
            </label>
          </form>
        </div>

        <div className="mt-10 border-t items-center border-t-white pt-5 gap-5 sm:gap-0 flex justify-between flex-col-reverse sm:flex-row">
          <div className="text-center">
            <p>&copy;Pixelo Agency</p>
          </div>
          <div className="flex justify-between items-center gap-5">
            <Link href="/" className="bg-white rounded-full text-black p-2">
              <Facebook className="stroke-2" />
            </Link>
            <Link href="/" className="bg-white rounded-full text-black p-2">
              <Instagram className="stroke-2" />
            </Link>
            <Link href="/" className="bg-white rounded-full text-black p-2">
              <Linkedin className="stroke-2" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
