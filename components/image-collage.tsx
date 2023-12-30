import classNames from "classnames";
import Image, { StaticImageData } from "next/image";

interface ImageCollageProperties {
  images: {
    src: StaticImageData;
    alt: string;
  }[];
  className?: string;
}

export default function ImageCollage({
  className,
  images,
}: ImageCollageProperties) {
  return (
    <div className={classNames("relative", className)}>
      <div className="relative size-10/12">
        <Image
          src={images[0].src}
          alt={images[0].alt}
          className="absolute h-full w-full object-cover opacity-20 rounded-xl"
        />
        <Image
          src={images[1].src}
          alt={images[1].alt}
          className="absolute h-full w-full object-cover opacity-50 rounded-xl top-5 left-5"
        />
        <Image
          src={images[2].src}
          alt={images[2].alt}
          className="absolute h-full w-full object-cover object-top rounded-xl top-10 left-10"
        />
      </div>
    </div>
  );
}
