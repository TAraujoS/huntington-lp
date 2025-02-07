"use client";

import Image from "next/image";

export const ScheduleCarousel = () => {
  const carouselImages = [
    {
      srcMobile: "/assets/schedule-mobile.svg",
      srcDesktop: "/assets/schedule-desktop.svg",
      alt: "Banner Agendar",
    },
  ];

  return (
    <section className="relative w-full mt-20">
      {carouselImages.map((image, index) => (
        <div key={index}>
          <Image
            src={image.srcMobile}
            alt={image.alt}
            width={1920}
            height={1080}
            priority
            className="object-fill w-full lg:hidden"
          />

          <Image
            src={image.srcDesktop}
            alt={image.alt}
            width={1920}
            height={1080}
            priority
            className="object-fill w-full hidden lg:block"
          />
        </div>
      ))}

      <div className="absolute z-10 inset-0 flex items-center h-1/3 w-3/5 px-6 mt-10 md:w-2/5 lg:h-full lg:mt-0 lg:mx-auto lg:w-full">
        <h1 className="text-white text-4xl font-bold w-full lg:text-center md:text-5xl ">
          Nós ligamos para você
        </h1>
      </div>
    </section>
  );
};
