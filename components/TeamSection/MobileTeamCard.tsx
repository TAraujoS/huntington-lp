"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { medicalTeam } from "@/lib/utils";
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

export const MobileTeamCard = () => {
  const swiperRef = useRef<SwiperCore | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

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

        <p className="flex items-center gap-2 text-blue-normal font-bold text-sm focus:ring-0 focus:outline-none pt-0">
          SAIBA MAIS ABAIXO:
        </p>

        <div className="flex w-full gap-2">
          <Collapsible>
            <div className="flex gap-2">
              <CollapsibleTrigger>
                <span className="text-xs font-medium text-gray-title bg-light p-3 rounded-sm underline hover:bg-blue-normal hover:bg-opacity-10 hover:text-blue-normal">
                  LATTES
                </span>
              </CollapsibleTrigger>

              <Link
                className="text-xs font-medium text-gray-title bg-light p-3 rounded-sm underline hover:bg-blue-normal hover:bg-opacity-10 hover:text-blue-normal"
                href="https://youtu.be/bskhBCG36CE"
                target="_blank"
              >
                VÍDEO
              </Link>

              <Link
                className="text-xs font-medium text-gray-title bg-light p-3 rounded-sm underline hover:bg-blue-normal hover:bg-opacity-10 hover:text-blue-normal"
                href="https://www.instagram.com/thaisdominguescury/"
                target="_blank"
              >
                INSTAGRAM
              </Link>
            </div>
            <CollapsibleContent className="text-xs font-normal text-gray-title mt-2 leading-5">
              Revisora da revista científica Human Reproduction Archives (SBRH);
              Editora associada da revista internacional Minerva Ginecológic;
              Professora convidada UNIFESP para graduação desde 2010; Doutora em
              Reprodução Humana pela Universidade Federal de São Paulo
              (UNIFESP/EPM); Residência Médica em Reprodução Humana pela Escola
              Paulista de Medicina – Universidade Federal de São Paulo
              (UNIFESP/EPM); Título de Especialista em Ginecologia e Obstetrícia
              pela Federação Brasileira das Associações de Ginecologia e
              Obstetrícia (FEBRASGO); Residência Médica em Obstetrícia e
              Ginecologia pela Escola Paulista de Medicina (UNIFESP/EPM); Médica
              formada pela Unesp – Faculdade de Ciências Médicas Júlio de
              Mesquita Filho.
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
            <SwiperSlide key={index}>
              <MobileDoctorCard {...doctor} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex justify-center mt-3 mb-6 space-x-2">
        {medicalTeam.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              activeSlide === index
                ? "bg-blue-normal"
                : "bg-gray-light hover:bg-gray-default"
            }`}
            onClick={() => swiperRef.current?.slideTo(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
