"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper as SwiperCore } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { cn, proceduresContent } from "@/lib/utils";
import { Button } from "./ui/button";
import { Collapsible, CollapsibleTrigger } from "./ui/collapsible";
import { ChevronLeft, ChevronRight } from "lucide-react";

const borderClasses: Record<string, string> = {
  "border-magenta-text": "border-magenta-text",
  "border-orange-text": "border-orange-text",
  "border-purple": "border-purple",
  "border-blue-normal": "border-blue-normal",
};

export const ProceduresSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const swiperRef = useRef<SwiperCore | null>(null);
  const contentSwiperRef = useRef<SwiperCore | null>(null);

  const contentLimit = 145;

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
      className="bg-light pt-10 pb-8 flex flex-col items-center max-h-[810px]"
    >
      <h2 className="text-blue-normal text-xl lg:text-2xl font-semibold">
        PROCEDIMENTOS
      </h2>

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
            modules={[Navigation, Pagination]}
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
                    "flex w-11/12 md:w-10/12 h-20 border p-2 px-5 ml-3 rounded-md cursor-pointer bg-ligthBg items-center justify-center gap-2",
                    activeSlide === index
                      ? borderClasses[slide.border]
                      : "border-gray-default"
                  )}
                >
                  <Image
                    src={slide.icon}
                    alt={`Icone ${slide.title}`}
                    width={40}
                    height={40}
                  />

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
                "flex w-1/5 h-20 max-w-[194px] border p-2 px-6 rounded-md bg-ligthBg items-center justify-center cursor-pointer gap-2",
                activeSlide === index
                  ? borderClasses[slide.border]
                  : "border-gray-default"
              )}
            >
              <Image
                src={slide.icon}
                alt={`Icone ${slide.title}`}
                width={40}
                height={40}
              />

              <p className="text-gray-neutral font-semibold text-xs">
                {slide.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        onSlideChange={(swiper) => {
          if (swiper.realIndex !== activeSlide) {
            setActiveSlide(swiper.realIndex);
            setIsOpen(false);
          }
        }}
        onSwiper={(swiper) => (contentSwiperRef.current = swiper)}
        slidesPerView={1}
        loop={true}
        className="procedure-swiper w-full max-w-7xl relative"
      >
        <button
          className="absolute -left-2 top-72 transform -translate-y-1/2 text-gray-default p-2 rounded-full z-10 hidden lg:block"
          onClick={() => contentSwiperRef.current?.slidePrev()}
        >
          <ChevronLeft className="w-9 h-9" />
        </button>
        <button
          className="absolute -right-2 top-72 transform -translate-y-1/2 text-gray-default p-2 rounded-full z-10 hidden lg:block"
          onClick={() => contentSwiperRef.current?.slideNext()}
        >
          <ChevronRight className="w-9 h-9" />
        </button>

        {proceduresContent.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="w-full flex flex-col lg:flex-row lg:gap-8 mt-10 gap-4 px-10 lg:px-10 md:p-6 max-w-7xl">
              <div className="h-36 lg:h-full w-full md:h-52 lg:w-1/2 lg:order-2 lg:flex self-center relative">
                <Swiper
                  modules={[Pagination]}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  loop={true}
                  className="w-full h-full"
                >
                  {slide.images.map((imgSrc, imgIndex) => (
                    <SwiperSlide key={imgIndex}>
                      <Image
                        src={imgSrc}
                        alt={`Imagem ${slide.title} ${imgIndex + 1}`}
                        width={500}
                        height={500}
                        className="w-full h-full object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div className="lg:w-1/2">
                <h3 className="text-gray-neutral font-semibold text-sm lg:text-base">
                  {slide.title}
                </h3>

                <div className="text-sm font-normal text-gray-neutral leading-6 mt-3 hidden md:block">
                  {slide.content.map((paragraph, index) => (
                    <p key={index} className="mb-[2px] last:mt-3">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <Collapsible
                  open={isOpen}
                  onOpenChange={setIsOpen}
                  className="block md:hidden"
                >
                  <div>
                    {slide.content.map((paragraph, index) => {
                      if (!isOpen) {
                        if (index === 0) {
                          return (
                            <p
                              key={index}
                              className="text-xs font-normal text-gray-neutral leading-5 mb-[2px]"
                            >
                              {paragraph}
                            </p>
                          );
                        }

                        if (index === 1) {
                          return (
                            <p
                              key={index}
                              className="text-xs font-normal text-gray-neutral leading-5 mb-[2px]"
                            >
                              {paragraph.length > contentLimit
                                ? `${paragraph.slice(0, contentLimit)}...`
                                : paragraph}
                            </p>
                          );
                        }

                        return null;
                      }

                      return (
                        <p
                          key={index}
                          className="text-xs font-normal text-gray-neutral leading-5 mb-[2px] last:mt-3"
                        >
                          {paragraph}
                        </p>
                      );
                    })}
                  </div>

                  {(slide.content.length > 2 ||
                    slide.content[1].length > contentLimit) && (
                    <CollapsibleTrigger asChild>
                      <span className="text-sm font-normal text-gray-neutral bg-light p-1 rounded-sm underline cursor-pointer">
                        {isOpen ? "LER MENOS" : "LER MAIS"}
                      </span>
                    </CollapsibleTrigger>
                  )}
                </Collapsible>
              </div>
            </div>
            <div
              className={cn(
                "flex justify-start lg:justify-center self-start lg:self-center pl-10 md:pl-6 lg:pl-0 mt-6 lg:mt-0",
                index !== 0 && "lg:mt-8"
              )}
            >
              <Button
                variant="default"
                className="bg-blue-normal text-white font-black text-sm hover:bg-blue-dark p-5 w-48"
              >
                <Link href="/agendar">AGENDAR CONSULTA</Link>
              </Button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
