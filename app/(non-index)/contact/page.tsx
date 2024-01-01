"use client";

import { robotoSerif } from "@/app/assets";
import classNames from "classnames";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "react-feather";

export default function ContactUs() {
  return (
    <main className="my-10 grid gap-10 lg:grid-cols-2 width-responsive">
      <div className="space-y-5">
        <h1
          className={classNames(robotoSerif.className, "font-medium text-4xl")}
        >
          Let&apos;talk
        </h1>
        <p>
          We collaborate with thousands of creators, entrepreneurs and complete
          legends.
        </p>
        <hr className="sm:w-1/2" />
        <div className="space-y-4 *:gap-2 *:flex *:items-center text-sm sm:text-base">
          <div>
            <span className="p-2 md:p-3 text-white bg-custom-black rounded-full">
              <Mail className="size-5 sm:size-auto" />
            </span>
            <div>
              <p className={classNames(robotoSerif.className)}>Our email</p>
              <Link href="">hello@example.com</Link>
            </div>
          </div>
          <div>
            <span className="p-2 md:p-3 text-white bg-custom-black rounded-full">
              <Phone className="size-5 sm:size-auto" />
            </span>
            <div>
              <p className={classNames(robotoSerif.className)}>Call us</p>
              <Link href="">+123 456 7890</Link>
            </div>
          </div>
          <div>
            <span className="p-2 md:p-3 text-white bg-custom-black rounded-full">
              <MapPin className="size-5 sm:size-auto" />
            </span>
            <div>
              <p className={classNames(robotoSerif.className)}>Find us</p>
              <Link href="">Open Google Maps</Link>
            </div>
          </div>
        </div>
        <hr className="sm:w-1/2" />
        <div className="flex justify-between sm:justify-start sm:gap-10">
          <Link href="">
            <Instagram />
          </Link>
          <Link href="">
            <Facebook />
          </Link>
          <Link href="">
            <Linkedin />
          </Link>
        </div>
      </div>
      <form
        onSubmit={(event) => event.preventDefault()}
        className="grid sm:grid-cols-2 gap-5 [&_input]:bg-transparent [&_input]:border-b-2 [&_input]:border-neutral-950 focus:[&_input]:outline-none bg-black/20 rounded-xl p-5"
      >
        <label htmlFor="first-name" className="items-start grid">
          <span>First name</span>
          <input type="text" name="first-name" id="first-name" />
        </label>
        <label htmlFor="last-name" className="items-start grid">
          <span>Last name</span>
          <input type="text" name="last-name" id="last-name" />
        </label>
        <label htmlFor="email" className="items-start grid">
          <span>Email</span>
          <input type="email" name="email" id="email" />
        </label>
        <label htmlFor="phone" className="items-start grid">
          <span>Phone</span>
          <input type="text" name="phone" id="phone" />
        </label>
        <label htmlFor="message" className="sm:col-span-2 grid ">
          <span>Message</span>
          <textarea
            name="message"
            id="message"
            className="bg-transparent focus:outline-none border-b-2 border-neutral-950"
          ></textarea>
        </label>
        <button
          type="submit"
          className="self-center py-1 bg-neutral-950 text-white rounded-full"
        >
          Submit now
        </button>
      </form>
    </main>
  );
}
