import Image from "next/image";
import { Testimonial } from "../sections/testimonials";
import classNames from "classnames";
import { robotoSerif } from "../assets";

export default function TestimonialListItem({
  image,
  message,
  name,
  title,
}: Testimonial) {
  return (
    <div className="rounded-lg text-sm sm:text-base px-5 flex flex-col items-center gap-3">
      <Image
        src={image}
        alt={`${name} image`}
        width={200}
        height={200}
        className="size-32 rounded-full object-top object-cover"
      />
      <p
        className={classNames(
          robotoSerif.className,
          "text-center font-semibold",
        )}
      >
        &ldquo; {message} &rdquo;
      </p>
      <p className={classNames(robotoSerif.className, "font-bold")}>{name}</p>
      <p className="-mt-3">{title}</p>
    </div>
  );
}
