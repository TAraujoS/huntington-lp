"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper as SwiperCore } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { cn, proceduresContent } from "@/lib/utils";
import { Button } from "./ui/button";
import { Collapsible, CollapsibleTrigger } from "./ui/collapsible";
import { ChevronLeft, ChevronRight } from "lucide-react";

const borderClasses: Record<string, string> = {
  "border-magenta-text": "border-magenta-text",
  "border-orange-text": "border-orange-text",
  "border-green-text": "border-green-text",
  "border-blue-default": "border-blue-default",
};

export const ProceduresSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const swiperRef = useRef<SwiperCore | null>(null);
  const contentSwiperRef = useRef<SwiperCore | null>(null);
  const contentLimit = 545;

  useEffect(() => {
    if (
      contentSwiperRef.current &&
      contentSwiperRef.current.realIndex !== activeSlide
    ) {
      contentSwiperRef.current.slideTo(activeSlide);
    }
  }, [activeSlide]);

  return (
    <section
      id="procedimentos"
      className="bg-light pt-10 pb-8 flex flex-col items-center"
    >
      <h2 className="text-blue-default text-lg font-semibold">PROCEDIMENTOS</h2>

      <div className="relative flex mt-6 w-full px-8 max-w-7xl">
        <button
          className="absolute left-5 top-10 transform -translate-y-1/2 text-gray-neutral p-2 rounded-full z-10 lg:hidden"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <ChevronLeft />
        </button>
        <button
          className="absolute right-2 top-10 transform -translate-y-1/2 text-gray-neutral p-2 rounded-full z-10 lg:hidden"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <ChevronRight />
        </button>

        <div className="block lg:hidden w-full">
          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            slidesPerView={3.5}
            loop={true}
            className="w-11/12"
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => {
              if (swiper.realIndex !== activeSlide) {
                setActiveSlide(swiper.realIndex);
              }
            }}
            breakpoints={{
              1024: { slidesPerView: 3.8 },
              768: { slidesPerView: 2.8 },
              425: { slidesPerView: 1.5 },
              375: { slidesPerView: 1.3 },
              0: { slidesPerView: 1 },
            }}
          >
            {proceduresContent.map((slide, index) => (
              <SwiperSlide key={index}>
                <div
                  onClick={() => {
                    setActiveSlide(index);
                    swiperRef.current?.slideToLoop(index, 0);
                  }}
                  className={cn(
                    "flex w-11/12 md:w-10/12 h-20 border p-2 px-5 ml-3 rounded-md cursor-pointer bg-ligthBg items-center justify-center",
                    activeSlide === index
                      ? borderClasses[slide.border]
                      : "border-gray-default"
                  )}
                >
                  <div className="w-full">
                    <Image
                      src={slide.icon}
                      alt={`Icone ${slide.title}`}
                      width={50}
                      height={50}
                    />
                  </div>
                  <p className="text-gray-neutral font-semibold text-xs">
                    {slide.title}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="hidden lg:flex gap-4 justify-center mx-auto">
          {proceduresContent.map((slide, index) => (
            <div
              key={index}
              onClick={() => setActiveSlide(index)}
              className={cn(
                "flex w-1/5 h-20 border p-2 px-6 rounded-md bg-ligthBg items-center justify-center cursor-pointer",
                activeSlide === index
                  ? borderClasses[slide.border]
                  : "border-gray-default"
              )}
            >
              <div className="w-full">
                <Image
                  src={slide.icon}
                  alt={`Icone ${slide.title}`}
                  width={50}
                  height={50}
                />
              </div>
              <p className="text-gray-neutral font-semibold text-xs">
                {slide.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        onSlideChange={(swiper) => {
          if (swiper.realIndex !== activeSlide) {
            setActiveSlide(swiper.realIndex);
          }
        }}
        onSwiper={(swiper) => (contentSwiperRef.current = swiper)}
        slidesPerView={1}
        loop={true}
        className="w-full max-w-7xl"
      >
        {proceduresContent.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="w-full flex flex-col lg:flex-row lg:gap-8 mt-10 gap-4 px-10 lg:px-10 md:p-6 max-w-7xl">
              <div className="h-36 lg:h-full w-full md:h-52 lg:w-1/2 lg:order-2 lg:flex self-center">
                <Image
                  src={proceduresContent[activeSlide].image}
                  alt={`Imagem ${proceduresContent[activeSlide].title}`}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="lg:w-1/2">
                <h4 className="text-gray-neutral font-semibold text-sm">
                  {slide.title}
                </h4>

                <p className="text-sm font-normal text-gray-neutral leading-6 mt-3 hidden md:block">
                  {slide.content}
                </p>

                <Collapsible open={isOpen} onOpenChange={setIsOpen}>
                  <div>
                    <p className="text-xs font-normal text-gray-neutral leading-5 block md:hidden">
                      {isOpen
                        ? proceduresContent[activeSlide].content
                        : `${proceduresContent[activeSlide].content.slice(
                            0,
                            contentLimit
                          )}...`}
                    </p>
                  </div>

                  <CollapsibleTrigger asChild>
                    <span className="text-sm font-normal text-gray-neutral bg-light p-1 rounded-sm underline cursor-pointer">
                      {isOpen ? "LER MENOS" : "LER MAIS"}
                    </span>
                  </CollapsibleTrigger>
                </Collapsible>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center lg:justify-start mt-4 lg:mt-10">
        <Button
          variant="default"
          className="bg-blue-default text-white font-black text-sm hover:bg-blue-dark p-5 w-48"
        >
          <Link href="/agendar">AGENDAR CONSULTA</Link>
        </Button>
      </div>

      <div className="hidden lg:flex w-full justify-center z-20 mt-10 pb-2 space-x-2 mx-auto">
        {proceduresContent.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              activeSlide === index
                ? "bg-blue-default"
                : "bg-gray-light hover:bg-gray-default"
            }`}
            onClick={() => {
              setActiveSlide(index);
              swiperRef.current?.slideToLoop(index, 0);
            }}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
