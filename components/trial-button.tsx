import Link from "next/link";
import { ChevronRight } from "react-feather";
import classNames from "classnames";

interface TrialButtonProperties {
  dark: boolean;
  className: string;
  link?: string;
}

export default function TrialButton({
  dark,
  link,
  className,
}: TrialButtonProperties) {
  return (
    <Link
      href={link ?? "/contact"}
      className={classNames(
        "flex text-sm sm:text-base items-center rounded-full p-1 sm:p-2 pr-4 gap-3",
        className,
        {
          "bg-white text-neutral-950": !dark,
          "bg-neutral-950 text-white": dark,
        },
      )}
    >
      <ChevronRight
        className={classNames("rounded-full size-5 sm:size-auto", {
          "bg-black text-white": !dark,
          "bg-white text-neutral-950": dark,
        })}
      />
      <span>Start your free trial</span>
    </Link>
  );
}
