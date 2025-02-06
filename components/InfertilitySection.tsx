"use client";

import Image from "next/image";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper as SwiperCore } from "swiper";
import Link from "next/link";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const InfertilitySection = () => {
  const swiperRef = useRef<SwiperCore | null>(null);
  const femaleFactors = [
    "Idade Avançada",
    "Endometriose",
    "Menopausa Precoce",
    "Fator Tubário",
    "Fator Uterino",
    "Miomas",
    "SOP",
  ];

  const maleFactors = [
    "Varicocele",
    "Azoospermia",
    "Maus Hábitos (drogas e anabolizantes)",
  ];

  return (
    <section
      id="infertilidade"
      className="flex flex-col items-center justify-center p-8 md:px-20 py-8 gap-4 max-w-7xl mx-auto"
    >
      <h2 className="text-blue-normal text-2xl font-semibold my-2">
        INFERTILIDADE
      </h2>

      <div className="flex flex-col lg:flex-row w-full gap-5">
        <div className="flex flex-col gap-4 text-gray-neutral font-normal text-base w-full lg:w-1/2 ">
          <p>
            A <span className="font-semibold inline">infertilidade</span> não
            deve ser confundida com a incapacidade de concepção. Em geral, o
            diagnóstico de infertilidade pode ser realização após 12 meses de
            tentativas sem o uso de método contraceptivo. Se a mulher tem mais
            de 35 anos, o prazo para a realização do diagnóstico cai para seis
            meses de tentativas.
          </p>
          <p>
            No <span className="font-semibold inline">Brasil</span>, estima-se
            que aproximadamente{" "}
            <span className="font-semibold inline">dois milhões de casais</span>{" "}
            venham a apresentar algum tipo de dificuldade ao longo de suas vidas
            reprodutivas. A infertilidade afeta cerca de um a dez casais em
            idade fértil.
          </p>
          <p>
            A infertilidade é uma doença que atinge o casal simultaneamente e de
            vários formas. Com características confusas, afeta{" "}
            <span className="font-semibold inline">diversos aspectos</span>
            da vida das pessoas - a autoestima, a capacidade de planejar o
            futuro, o próprio relacionamento do casal consigo e com os outros,
            além de profundos sentimentos de culpa, frustração e nervosismo.
          </p>
        </div>

        <div className="hidden lg:flex flex-col gap-4 w-1/2 justify-evenly">
          <div className="flex bg-magenta-background text-magenta-text items-center p-6 gap-5 h-24">
            <Image
              src="/assets/woman-icon.svg"
              alt="Icone"
              width={26}
              height={26}
            />
            <span className="font-semibold text-3xl">40%</span>
            <p className="font-normal text-sm">
              dos casos de infertilidade são relacionados a fatores femininos,
              como idade, endometriose, menopausa precoce, entre outros.
            </p>
          </div>
          <div className="flex bg-blue-normal bg-opacity-10 text-blue-normal items-center p-6 gap-5 h-24">
            <Image
              src="/assets/men-icon.svg"
              alt="Icone"
              width={20}
              height={20}
            />
            <span className="font-semibold text-3xl">40%</span>
            <p className="font-normal text-sm">
              das causas estão nos homem, como varicocele e azoospermia.
            </p>
          </div>
          <div className="flex bg-purple bg-opacity-10 text-purple items-center p-6 gap-5 h-24">
            <Image
              src="/assets/couple-icon.svg"
              alt="Icone"
              width={32}
              height={32}
            />
            <span className="font-semibold text-3xl">20%</span>
            <p className="font-normal text-sm">
              das causas estão nos homem, como varicocele e azoospermia.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full lg:hidden relative">
        <button
          className="absolute -left-8 top-1/3 transform -translate-y-1/2 text-gray-neutral p-2 rounded-full z-10 lg:hidden"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <ChevronLeft />
        </button>
        <button
          className="absolute -right-8 top-1/3 transform -translate-y-1/2 text-gray-neutral p-2 rounded-full z-10 lg:hidden"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <ChevronRight />
        </button>

        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          slidesPerView={1}
          loop={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="middle-swiper"
        >
          <SwiperSlide>
            <div className="flex w-full bg-magenta-background text-magenta-text items-center p-4 gap-2 mb-10 md:p-6 md:gap-4">
              <Image
                src="/assets/woman-icon.svg"
                alt="Icone"
                width={20}
                height={20}
              />
              <span className="font-semibold text-2xl">40%</span>
              <p className="font-normal text-xs">
                dos casos de infertilidade são relacionados a fatores femininos,
                como idade, endometriose, menopausa precoce, entre outros.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex w-full bg-blue-normal bg-opacity-10 text-blue-normal items-center p-4 gap-2 mt-2 md:p-6 md:gap-4">
              <Image
                src="/assets/men-icon.svg"
                alt="Icone"
                width={16}
                height={16}
              />
              <span className="font-semibold text-2xl">40%</span>
              <p className="font-normal text-xs">
                das causas estão nos homem, como varicocele e azoospermia.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex w-full bg-purple bg-opacity-10 text-purple items-center p-4 gap-2 mt-2 md:p-6 md:gap-4">
              <Image
                src="/assets/couple-icon.svg"
                alt="Icone"
                width={32}
                height={32}
              />
              <span className="font-semibold text-2xl">20%</span>
              <p className="font-normal text-xs">
                das causas estão nos homem, como varicocele e azoospermia.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 mt-4">
        <div className="space-y-3 lg:w-1/2">
          <h4 className="text-magenta-text font-semibold text-sm">
            FATORES FEMININOS
          </h4>
          <p className="text-xs font-normal text-gray-neutral">
            Entre as causas femininas da infertilidade, as principais causas
            são:
          </p>
          <div className="flex flex-wrap gap-2">
            {femaleFactors.map((factor, index) => (
              <span
                key={index}
                className="text-xs font-normal text-gray-neutral bg-light p-3 rounded-sm"
              >
                {factor}
              </span>
            ))}
          </div>
        </div>
        <div className="space-y-3 lg:w-1/2">
          <h4 className="text-blue-normal font-semibold text-sm">
            FATORES MASCULINOS
          </h4>
          <p className="text-xs font-normal text-gray-neutral">
            Já para os homens, os principais motivos são:
          </p>
          <div className="flex flex-wrap gap-2">
            {maleFactors.map((factor, index) => (
              <span
                key={index}
                className="text-xs font-normal text-gray-neutral bg-light p-3 rounded-sm"
              >
                {factor}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full mt-2 relative">
        <div className="lg:hidden flex min-w-64 h-[86px] p-4 bg-blue-normal border-[1px] rounded-[3px] mx-auto my-6 items-center gap-2">
          <p className="font-normal text-sm text-white">
            Para saber mais, acesse as dúvidas frequentes
          </p>
          <Link href="/duvidas-frequentes">
            <Button
              variant="default"
              className="font-black text-sm bg-white text-blue-normal p-2 hover:bg-blue-dark hover:text-white "
            >
              SABER MAIS
            </Button>
          </Link>
        </div>

        <div className="w-full hidden lg:block relative my-6">
          <Image
            src="/assets/middle-banner.svg"
            alt="Banner"
            width={800}
            height={600}
            className="w-full"
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <Link href="/duvidas-frequentes">
              <div className="flex w-[390px] h-[86px] p-6 border-[1px] border-gray-light rounded-[3px] hover:bg-blue-normal group">
                <p className="text-gray-neutral font-normal text-sm group-hover:text-white">
                  Para saber mais, acesse as dúvidas frequentes
                </p>
                <Button
                  variant="default"
                  className="bg-blue-normal text-white font-black text-sm group-hover:bg-white group-hover:text-blue-normal p-5 mb-6"
                >
                  SABER MAIS
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
