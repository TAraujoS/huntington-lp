"use client";

import Image from "next/image";

export const FaqCarousel = () => {
  const carouselImages = [
    {
      srcMobile: "/assets/faq-mobile.svg",
      srcDesktop: "/assets/faq-desktop.svg",
      alt: "Banner Perguntas Frequentes",
    },
  ];

  return (
    <section className="relative w-full">
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
            className="object-fill w-full hidden lg:block h-full"
          />
        </div>
      ))}

      <div className="absolute z-10 inset-0 flex items-center h-1/3 w-1/2 mt-10 mx-auto lg:mx-0 lg:h-full lg:mt-0 lg:pl-10">
        <h1 className="text-white text-4xl text-center font-bold w-full lg:text-center md:text-5xl ">
          Dúvidas Frequentes
        </h1>
      </div>
    </section>
  );
};
