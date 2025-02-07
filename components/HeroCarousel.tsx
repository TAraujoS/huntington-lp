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
    {
      srcMobile: "/assets/hero-mobile-2.svg",
      srcDesktop: "/assets/hero-desktop-2.svg",
      alt: "Banner ProFiv 2",
    },
  ];

  return (
    <section className="relative w-full pt-20">
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
    </section>
  );
};
