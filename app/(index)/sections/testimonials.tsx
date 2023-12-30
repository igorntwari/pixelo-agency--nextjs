"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import TestimonialListItem from "../components/testimonial-list-item";

import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "react-feather";

export interface Testimonial {
  id: number;
  message: string;
  name: string;
  title: string;
  image: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 0,
    message: "This is the best designing agency i ever worked with",
    name: "Jaque Miller",
    title: "CEO of Eduport",
    image:
      "https://images.unsplash.com/photo-1616002411355-49593fd89721?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFzc3BvcnQlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 1,
    message: "They are very professional and creative. I highly recommend them",
    name: "Linda Smith",
    title: "Founder of Linsa",
    image:
      "https://images.unsplash.com/photo-1509839862600-309617c3201e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFzc3BvcnQlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    message: "They delivered the project on time and exceeded my expectations",
    name: "Mark Jones",
    title: "Manager of MJ Solutions",
    image:
      "https://images.unsplash.com/photo-1608485439523-25b28d982428?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGFzc3BvcnQlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 3,
    message:
      "They have a great team of designers and developers. They are very responsive and flexible",
    name: "Anna Lee",
    title: "Director of AL Marketing",
    image:
      "https://images.unsplash.com/photo-1603696196733-7883d315991b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBhc3Nwb3J0JTIwcGhvdG98ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 4,
    message:
      "They are the best in the industry. They have a lot of experience and expertise",
    name: "John Brown",
    title: "Owner of JB Enterprises",
    image:
      "https://images.unsplash.com/photo-1612601006505-1254db3e290d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFzc3BvcnQlMjBwaG90byUyMGJsYWNrJTIwbWFufGVufDB8fDB8fHww",
  },
  {
    id: 5,
    message:
      "They are very friendly and helpful. They understood my needs and vision",
    name: "Emma Wilson",
    title: "Co-founder of EWI",
    image:
      "https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBhc3Nwb3J0JTIwcGhvdG98ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 6,
    message:
      "They are amazing. They created a stunning website for my business",
    name: "David Clark",
    title: "CEO of DC Inc",
    image:
      "https://images.unsplash.com/photo-1666852327656-5e9fd213209b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHBhc3Nwb3J0JTIwcGhvdG98ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 7,
    message:
      "They are the best choice for any web design project. They are very skilled and creative",
    name: "Lisa Taylor",
    title: "President of LT Group",
    image:
      "https://images.unsplash.com/photo-1534221738043-a1a90ca6a9ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHBhc3Nwb3J0JTIwcGhvdG98ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 8,
    message:
      "They are very reliable and trustworthy. They delivered what they promised",
    name: "James Wilson",
    title: "Partner of JW & Co",
    image:
      "https://images.unsplash.com/photo-1648183185045-7a5592e66e9c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fHBhc3Nwb3J0JTIwcGhvdG98ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 9,
    message: "They are awesome. They have a great sense of style and design",
    name: "Sarah Davis",
    title: "Head of SD Media",
    image:
      "https://images.unsplash.com/photo-1656275925082-a1222ab189c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHBhc3Nwb3J0JTIwcGhvdG98ZW58MHx8MHx8fDA%3D",
  },
];

export default function Testimonials() {
  const previousReference = useRef(null);
  const nextReference = useRef(null);
  const [_, setInit] = useState(false);

  const displayTestimonialSlides = TESTIMONIALS.map((testimonial) => (
    <SwiperSlide key={testimonial.id}>
      <TestimonialListItem {...testimonial} />
    </SwiperSlide>
  ));

  return (
    <section className="py-10 width-responsive sm:px-10 ">
      <div className="bg-black/20 rounded-lg py-5 sm:space-y-5 lg:space-y-10">
        <Swiper
          className="/lion"
          modules={[Navigation]}
          navigation={{
            prevEl: previousReference.current,
            nextEl: nextReference.current,
          }}
          onInit={() => setInit(true)}
          loop
        >
          {displayTestimonialSlides}
        </Swiper>
        <div className="mx-auto flex gap-5 justify-center">
          <span ref={previousReference}>
            <ChevronLeft className="size-8 border-2 hover:bg-black hover:text-white hover:border-0 border-black rounded-full cursor-pointer" />
          </span>
          <span ref={nextReference}>
            <ChevronRight className="size-8 border-2 hover:bg-black hover:text-white hover:border-0 border-black rounded-full cursor-pointer" />
          </span>
        </div>
      </div>
    </section>
  );
}
