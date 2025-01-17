"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

export const HeroCarousel = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const carouselImages = [
    {
      srcMobile: "/assets/hero-mobile-1.svg",
      srcDesktop: "/assets/hero-desktop-1.svg",
      alt: "Banner ProFiv 1",
    },
  ];

  return (
    <section className="relative w-full">
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        slidesPerView={1}
        loop={true}
        navigation
        className="hero-swiper"
      >
        {carouselImages.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={isDesktop ? image.srcDesktop : image.srcMobile}
              alt={image.alt}
              width={1920}
              height={1080}
              priority
              className="object-fill w-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute z-10 inset-0 flex items-center md:self-center mx-auto h-1/5 w-3/4 md:w-1/2 md:h-1/3 px-4 py-4 mt-10 lg:px-6 md:mt-0 bg-white/20">
        <h1 className="text-white text-lg lg:text-4xl font-bold w-full text-center">
          <span className="text-green-title inline">Agora o </span>
          Centro de Reprodução Humana Santa Joana
          <span className="text-magenta inline"> é ProFIV</span>
        </h1>
      </div>
    </section>
  );
};
