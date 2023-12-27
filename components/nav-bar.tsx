import { Roboto_Serif } from "next/font/google";
import Link from "next/link";
import Logo from "./svg/logo";
import classNames from "classnames";
import { Menu } from "react-feather";

const robotoSerif = Roboto_Serif({ subsets: ["latin"] });

export default function NavBar() {
  return (
    <>
      <nav className="hidden sm:flex justify-between items-center">
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
        <div className="flex gap-10">
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact Us</Link>
        </div>
        <Link
          href="/"
          className="bg-white text-neutral-950 px-4 rounded-full py-1"
        >
          Get in touch
        </Link>
      </nav>
      <div className="flex justify-end sm:hidden">
        <Menu size="30" />
        <div className="absolute w-4/5 bg-[#FCFBFD] text-neutral-950 inset-y-0 right-0 pt-5">
          <Link href="/">
            <Logo className="size-10 w-20" />
          </Link>
          <nav className="grid gap-2 mt-10 *:py-2 *:px-2">
            <Link href="/" className="bg-[#F0EEF0]">
              Home
            </Link>
            <Link href="/" className="">
              About
            </Link>
            <Link href="/" className="">
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
