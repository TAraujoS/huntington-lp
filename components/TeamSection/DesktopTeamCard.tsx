"use client";

import Image from "next/image";
import Link from "next/link";
import { cn, medicalTeam } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { PopoverClose } from "@radix-ui/react-popover";
import { DesktopDoctorCard } from "./DoctorCard";

export const DesktopTeamCard = () => {
  const firstTeam = medicalTeam.slice(0, 4);
  const secondTeam = medicalTeam
    .slice(4, 6)
    .concat(medicalTeam.slice(4, 6))
    .toReversed();

  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex w-full max-w-5xl h-64 border border-gray-default py-6 text-start rounded-sm mb-5 px-24 gap-14">
        <div className="relative w-1/3 h-full overflow-hidden">
          <Image
            src="/assets/doctor-1.svg"
            alt="Foto Médico"
            fill
            loading="lazy"
            className="object-cover rounded-md"
          />
        </div>

        <div className="space-y-3 w-2/3 mt-2">
          <h5 className="text-gray-title font-bold text-2xl uppercase">
            DRA. Thais Sanches Domingues Cury
          </h5>

          <p className="text-sm text-gray-title font-normal">
            CRM-SP 104.252 | RQE/RA 97.7111
          </p>

          <span className="text-sm text-gray-title font-normal">
            Coordenadora
          </span>

          <p className="flex items-center gap-2 text-blue-normal font-bold text-sm focus:ring-0 focus:outline-none pt-0">
            SAIBA MAIS ABAIXO:
          </p>

          <Popover>
            <PopoverContent className="w-80 max-w-md p-7 text-start border border-gray-default rounded-md">
              <PopoverClose
                className="absolute top-2 right-4 text-gray-title hover:text-bloack focus:ring-0 focus:outline-none cursor-pointer"
                aria-label="Fechar"
              >
                ✕
              </PopoverClose>

              <div className="flex flex-col gap-3">
                <div className="w-full h-52 my-2 mx-auto">
                  <Image
                    src="/assets/doctor-1.jpg"
                    alt="Foto Médico"
                    width={500}
                    height={300}
                    loading="lazy"
                    className="rounded-md w-full h-full object-cover object-top"
                  />
                </div>

                <h5 className="text-gray-title font-bold text-sm uppercase">
                  DRA. Thais Sanches Domingues Cury
                </h5>

                <p className="text-xs text-gray-title font-normal">
                  CRM-SP 104.252 | RQE/RA 97.7111
                </p>

                <span className="text-xs text-gray-title font-normal">
                  Coordenadora e Doutora em Reprodução Humana
                </span>
                <div className="flex w-full gap-2">
                  <span className="text-xs font-normal text-gray-title bg-light p-3 rounded-sm underline hover:bg-blue-normal hover:bg-opacity-10 hover:text-blue-normal">
                    LATTES
                  </span>

                  <Link
                    className="text-xs font-normal text-gray-title bg-light p-3 rounded-sm underline cursor-pointer hover:bg-blue-normal hover:bg-opacity-10 hover:text-blue-normal"
                    href="https://youtu.be/bskhBCG36CE"
                    target="_blank"
                  >
                    VÍDEO
                  </Link>

                  <Link
                    className="text-xs font-normal text-gray-title bg-light p-3 rounded-sm underline cursor-pointer hover:bg-blue-normal hover:bg-opacity-10 hover:text-blue-normal"
                    href="https://www.instagram.com/thaisdominguescury/"
                    target="_blank"
                  >
                    INSTAGRAM
                  </Link>
                </div>

                <div className="mt-2">
                  <div className="border-b border-gray-200 mb-4" />
                  <p className="text-xs text-gray-title font-normal leading-5">
                    Revisora da revista científica Human Reproduction Archives
                    (SBRH); Editora associada da revista internacional Minerva
                    Ginecológic; Professora convidada UNIFESP para graduação
                    desde 2010; Doutora em Reprodução Humana pela Universidade
                    Federal de São Paulo (UNIFESP/EPM); Residência Médica em
                    Reprodução Humana pela Escola Paulista de Medicina –
                    Universidade Federal de São Paulo (UNIFESP/EPM); Título de
                    Especialista em Ginecologia e Obstetrícia pela Federação
                    Brasileira das Associações de Ginecologia e Obstetrícia
                    (FEBRASGO); Residência Médica em Obstetrícia e Ginecologia
                    pela Escola Paulista de Medicina (UNIFESP/EPM); Médica
                    formada pela Unesp – Faculdade de Ciências Médicas Júlio de
                    Mesquita Filho.
                  </p>
                </div>
              </div>
            </PopoverContent>

            <div className="flex w-full gap-2">
              <PopoverTrigger asChild>
                <span className="text-xs font-normal text-gray-title bg-light p-3 rounded-sm underline hover:bg-blue-normal hover:bg-opacity-10 hover:text-blue-normal cursor-pointer">
                  LATTES
                </span>
              </PopoverTrigger>

              <span className="text-xs font-normal text-gray-title bg-light hover:bg-blue-normal hover:bg-opacity-10 hover:text-blue-normal p-3 rounded-sm underline cursor-pointer">
                VÍDEO
              </span>
              <span className="text-xs font-normal text-gray-title bg-light hover:bg-blue-normal hover:bg-opacity-10 hover:text-blue-normal p-3 rounded-sm underline cursor-pointer">
                INSTAGRAM
              </span>
            </div>
          </Popover>
        </div>
      </div>

      <div className="w-full grid grid-cols-4 gap-4 max-w-5xl mb-4">
        {firstTeam.map((doctor, index) => (
          <div
            key={index}
            className="w-[235px] flex flex-col border border-gray-default text-start rounded-sm"
          >
            <DesktopDoctorCard {...doctor} />
          </div>
        ))}
      </div>

      <div className="w-full grid grid-cols-4 max-w-5xl">
        {secondTeam.map((doctor, index) => (
          <div
            key={index}
            className={cn(
              "w-[230px] flex flex-col border border-gray-default text-start rounded-sm mx-auto",
              index === 0 || index === 3 ? "invisible opacity-0" : ""
            )}
          >
            <DesktopDoctorCard {...doctor} />
          </div>
        ))}
      </div>
    </div>
  );
};
