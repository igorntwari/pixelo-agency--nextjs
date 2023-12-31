"use client";

import { useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import Link from "next/link";
import classNames from "classnames";
import { Menu } from "react-feather";
import { Logo, robotoSerif } from "@/app/assets";
import { usePathname } from "next/navigation";

export default function NavBar({ dark }: { dark?: boolean }) {
  const pathName = usePathname();
  const reference = useRef(null);

  const [navToggled, setNavToggled] = useState(false);

  const handleClickOutside = () => setNavToggled(false);

  useOnClickOutside(reference, handleClickOutside);
  return (
    <>
      <nav
        className={classNames("hidden sm:flex justify-between items-center", {
          "text-white": dark,
          "text-neutral-950 width-responsive mt-5": !dark,
        })}
      >
        <Link
          href="/"
          className={classNames(
            robotoSerif.className,
            "flex items-center gap-2 font-medium",
          )}
        >
          <Logo className="size-10" />
          <span>Pixelo</span>
        </Link>
        <div className="flex gap-10 *:md:px-6 *:px-3 *:py-1 *:rounded-full">
          <Link
            href="/"
            className={classNames("hover:bg-light-green", {
              "bg-light-green": pathName === "/",
            })}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={classNames("hover:bg-light-green", {
              "bg-light-green": pathName === "/about",
            })}
          >
            About
          </Link>
          <Link
            href="/projects"
            className={classNames("hover:bg-light-green", {
              "bg-light-green": pathName === "/projects",
            })}
          >
            Projects
          </Link>
          <Link
            href="/"
            className={classNames("hover:bg-light-green", {
              "bg-light-green": pathName === "/contact",
            })}
          >
            Contact Us
          </Link>
        </div>
        <Link
          href="/"
          className={classNames("px-4 rounded-full py-1", {
            "bg-white text-neutral-950": dark,
            "bg-custom-black text-white": !dark,
          })}
        >
          Get in touch
        </Link>
      </nav>
      <div
        className={classNames("flex justify-end sm:hidden", {
          "pr-5": dark,
          "pr-8 mt-5": !dark,
        })}
      >
        <button onClick={() => setNavToggled(!navToggled)}>
          <Menu size="30" />
        </button>
        <div
          ref={reference}
          className={classNames(
            "absolute z-50 transition duration-500 right-0 w-4/5 bg-[#FCFBFD] text-neutral-950 inset-y-0 pt-5",
            {
              "translate-x-full": !navToggled,
              "translate-x-0": navToggled,
            },
          )}
        >
          <Link href="/">
            <Logo
              className="size-10 w-20"
              onClick={() => setNavToggled(!navToggled)}
            />
          </Link>
          <nav className="grid gap-2 mt-10 *:py-2 *:px-2">
            <Link
              href="/"
              onClick={() => setNavToggled(!navToggled)}
              className={classNames("bg-[#F0EEF0]", {
                "bg-light-green": pathName === "/",
              })}
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setNavToggled(!navToggled)}
              className={classNames("bg-[#F0EEF0]", {
                "bg-light-green": pathName === "/about",
              })}
            >
              About
            </Link>
            <Link
              href="/projects"
              onClick={() => setNavToggled(!navToggled)}
              className={classNames("bg-[#F0EEF0]", {
                "bg-light-green": pathName === "/projects",
              })}
            >
              Projects
            </Link>
            <Link
              href="/"
              onClick={() => setNavToggled(!navToggled)}
              className={classNames("bg-[#F0EEF0]", {
                "bg-light-green": pathName === "/contact",
              })}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
