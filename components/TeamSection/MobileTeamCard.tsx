"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn, firstDoctorLattes, medicalTeam } from "@/lib/utils";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper as SwiperCore } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { MobileDoctorCard } from "./DoctorCard";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

export const MobileTeamCard = () => {
  const swiperRef = useRef<SwiperCore | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className="flex flex-col w-[312px]">
      <div className="flex flex-col border border-gray-default p-6 text-start rounded-sm gap-3 mb-5">
        <div className="relative w-64 h-52 overflow-hidden">
          <Image
            src="/assets/doctor-1.svg"
            alt="Foto Médico"
            fill
            loading="lazy"
            className="object-cover object-top rounded-md"
          />
        </div>

        <h5 className="text-gray-title font-semibold text-sm w-4/5 uppercase">
          DRA. Thais Sanches Domingues Cury
        </h5>

        <p className="text-xs text-gray-title font-normal">
          CRM-SP 104.252 | RQE/RA 97.7111
        </p>

        <span className="text-sm text-gray-title font-normal">
          Coordenadora
        </span>

        <p className="flex items-center gap-2 text-blue-normal font-bold text-[11px] focus:ring-0 focus:outline-none pt-0">
          SAIBA MAIS ABAIXO:
        </p>

        <div className="flex w-full gap-2">
          <Collapsible>
            <div className="flex gap-2">
              <CollapsibleTrigger>
                <span className="text-xs font-bold text-gray-title bg-light p-2 rounded-sm underline hover:bg-blue-normal hover:bg-opacity-10 hover:text-blue-normal">
                  LATTES
                </span>
              </CollapsibleTrigger>

              <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
                <DialogTrigger asChild>
                  <span className="text-xs font-bold content-center text-gray-title bg-light p-2 rounded-sm underline cursor-pointer hover:bg-blue-normal hover:bg-opacity-10 hover:text-blue-normal">
                    VÍDEO
                  </span>
                </DialogTrigger>

                <DialogContent className="max-w-xl w-full p-4">
                  <DialogTitle></DialogTitle>
                  <iframe
                    width="100%"
                    height="415"
                    src="https://www.youtube.com/embed/bskhBCG36CE"
                    title="YouTube video"
                    allowFullScreen
                  ></iframe>
                </DialogContent>
              </Dialog>

              <Link
                className="text-xs font-bold text-gray-title bg-light p-2 rounded-sm underline hover:bg-blue-normal hover:bg-opacity-10 hover:text-blue-normal"
                href="https://www.instagram.com/thaisdominguescury/"
                target="_blank"
              >
                INSTAGRAM
              </Link>
            </div>

            <CollapsibleContent className="text-xs font-normal text-gray-title mt-2 leading-5">
              <div className="border-b border-gray-200 mb-3 mt-5" />
              {firstDoctorLattes.map((item, index) => (
                <p
                  key={index}
                  className="text-xs text-gray-title font-normal leading-5"
                >
                  {item}
                </p>
              ))}
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>

      <div className="relative w-[312px] flex flex-col gap-6">
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          slidesPerView={1}
          loop={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
          className="w-full"
        >
          {medicalTeam.map((doctor, index) => (
            <SwiperSlide key={index} className="flex flex-col items-center">
              <div className="min-h-[315px] w-full flex items-center justify-center">
                <MobileDoctorCard {...doctor} />
              </div>

              <div className="flex justify-center my-6 space-x-2">
                {medicalTeam.map((_, i) => (
                  <button
                    key={i}
                    className={cn(
                      "w-2 h-2 rounded-full",
                      activeSlide === i
                        ? "bg-blue-normal"
                        : "bg-gray-light hover:bg-gray-default"
                    )}
                    onClick={() => swiperRef.current?.slideToLoop(i, 0)}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
