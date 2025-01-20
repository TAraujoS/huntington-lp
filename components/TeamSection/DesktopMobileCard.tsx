"use client";

import Image from "next/image";
import Link from "next/link";
import { medicalTeam } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { PopoverClose } from "@radix-ui/react-popover";

export const DesktopTeamCard = () => {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex w-full max-w-5xl h-64 border border-gray-default p-6 text-start rounded-sm mb-5 px-16 gap-10">
        <div className="relative w-1/3 h-full overflow-hidden">
          <Image
            src="/assets/doctor-1.jpg"
            alt="Foto Médico"
            fill
            loading="lazy"
            className="object-cover rounded-md"
          />
        </div>

        <div className="space-y-3 w-2/3 mt-2">
          <h5 className="text-gray-neutral font-bold text-2xl uppercase">
            Thais Sanches Domingues Cury
          </h5>

          <p className="text-sm text-gray-neutral font-normal">
            CRM-SP 104.252 | RQE/RA 97.7111
          </p>

          <span className="text-sm text-gray-neutral font-normal">
            Coordenadora e Doutora em Reprodução Humana
          </span>

          <p className="flex items-center gap-2 text-blue-default font-bold text-sm focus:ring-0 focus:outline-none pt-0">
            SAIBA MAIS ABAIXO:
          </p>

          <Popover>
            <PopoverContent className="w-80 max-w-md p-7 text-start border border-gray-default rounded-md">
              <PopoverClose
                className="absolute top-2 right-4 text-gray-neutral hover:text-bloack focus:ring-0 focus:outline-none cursor-pointer"
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

                <h5 className="text-gray-neutral font-bold text-sm uppercase">
                  Thais Sanches Domingues Cury
                </h5>

                <p className="text-xs text-gray-neutral font-normal">
                  CRM-SP 104.252 | RQE/RA 97.7111
                </p>

                <span className="text-xs text-gray-neutral font-normal">
                  Coordenadora e Doutora em Reprodução Humana
                </span>
                <div className="flex w-full gap-2">
                  <span className="text-xs font-normal text-gray-neutral bg-light p-3 rounded-sm underline hover:bg-blue-extralight hover:text-blue-dark">
                    LATTES
                  </span>

                  <Link
                    className="text-xs font-normal text-gray-neutral bg-light p-3 rounded-sm underline cursor-pointer hover:bg-blue-extralight hover:text-blue-dark"
                    href="https://youtu.be/bskhBCG36CE"
                    target="_blank"
                  >
                    VÍDEO
                  </Link>

                  <Link
                    className="text-xs font-normal text-gray-neutral bg-light p-3 rounded-sm underline cursor-pointer hover:bg-blue-extralight hover:text-blue-dark"
                    href="https://www.instagram.com/thaisdominguescury/"
                    target="_blank"
                  >
                    INSTAGRAM
                  </Link>
                </div>

                <div className="mt-2">
                  <div className="border-b border-gray-200 mb-4" />
                  <p className="text-xs text-gray-neutral font-normal leading-4">
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
                <span className="text-xs font-normal text-gray-neutral bg-light p-3 rounded-sm underline hover:bg-blue-extralight hover:text-blue-dark cursor-pointer">
                  LATTES
                </span>
              </PopoverTrigger>

              <span className="text-xs font-normal text-gray-neutral bg-light hover:bg-blue-extralight hover:text-blue-dark p-3 rounded-sm underline cursor-pointer">
                VÍDEO
              </span>
              <span className="text-xs font-normal text-gray-neutral bg-light hover:bg-blue-extralight hover:text-blue-dark p-3 rounded-sm underline cursor-pointer">
                INSTAGRAM
              </span>
            </div>
          </Popover>
        </div>
      </div>

      <div className="w-full grid grid-cols-3 gap-6 max-w-5xl">
        {medicalTeam.map((doctor, index) => (
          <div
            key={index}
            className="w-full flex flex-col border border-gray-default p-6 text-start rounded-sm gap-3"
          >
            <div className="relative w-full h-64 overflow-hidden">
              <Image
                src={doctor.picture}
                alt="Foto Médico"
                fill
                loading="lazy"
                className="rounded-md object-cover object-top"
              />
            </div>

            <h5 className="text-gray-neutral font-semibold text-sm uppercase">
              {doctor.name}
            </h5>

            <p className="text-xs text-gray-neutral font-normal">
              {doctor.register} - {doctor.rqe}
            </p>

            <span className="text-sm text-gray-neutral font-normal">
              {doctor.resume}
            </span>

            <div className="border-b border-gray-200" />
            <p className="flex items-center gap-2 text-blue-default font-bold text-sm focus:ring-0 focus:outline-none pt-0">
              SAIBA MAIS ABAIXO:
            </p>

            <Popover>
              <PopoverContent className="w-80 max-w-md p-7 text-start border border-gray-default rounded-md">
                <PopoverClose
                  className="absolute top-2 right-4 text-gray-neutral hover:text-bloack focus:ring-0 focus:outline-none cursor-pointer"
                  aria-label="Fechar"
                >
                  ✕
                </PopoverClose>

                <div className="flex flex-col gap-3">
                  <div className="relative w-full h-64 overflow-hidden">
                    <Image
                      src={doctor.picture}
                      alt="Foto Médico"
                      fill
                      loading="lazy"
                      className="rounded-md object-cover object-top"
                    />
                  </div>

                  <h5 className="text-gray-neutral font-semibold text-sm uppercase">
                    {doctor.name}
                  </h5>

                  <p className="text-xs text-gray-neutral font-normal">
                    {doctor.register} - {doctor.rqe}
                  </p>

                  <span className="text-sm text-gray-neutral font-normal">
                    {doctor.resume}
                  </span>

                  <div className="flex w-full gap-2">
                    <span className="text-xs font-normal text-gray-neutral bg-light p-3 rounded-sm underline hover:bg-blue-extralight hover:text-blue-dark">
                      LATTES
                    </span>

                    {doctor.video && (
                      <Link
                        className="text-xs font-normal text-gray-neutral bg-light p-3 rounded-sm underline hover:bg-blue-extralight hover:text-blue-dark"
                        href={doctor.video}
                        target="_blank"
                      >
                        VÍDEO
                      </Link>
                    )}
                    {doctor.insta && (
                      <Link
                        className="text-xs font-normal text-gray-neutral bg-light p-3 rounded-sm underline hover:bg-blue-extralight hover:text-blue-dark"
                        href={doctor.insta}
                        target="_blank"
                      >
                        INSTAGRAM
                      </Link>
                    )}
                  </div>

                  <div className="mt-2">
                    <div className="border-b border-gray-200 mb-4" />
                    <p className="text-xs text-gray-neutral font-normal leading-4">
                      {doctor.lattes}
                    </p>
                  </div>
                </div>
              </PopoverContent>

              <div className="flex w-full gap-2">
                <PopoverTrigger asChild>
                  <span className="text-xs font-normal text-gray-neutral bg-light p-3 rounded-sm underline hover:bg-blue-extralight hover:text-blue-dark cursor-pointer">
                    LATTES
                  </span>
                </PopoverTrigger>

                {doctor.video && (
                  <Link
                    className="text-xs font-normal text-gray-neutral bg-light p-3 rounded-sm underline hover:bg-blue-extralight hover:text-blue-dark"
                    href={doctor.video}
                    target="_blank"
                  >
                    VÍDEO
                  </Link>
                )}
                {doctor.insta && (
                  <Link
                    className="text-xs font-normal text-gray-neutral bg-light p-3 rounded-sm underline hover:bg-blue-extralight hover:text-blue-dark"
                    href={doctor.insta}
                    target="_blank"
                  >
                    INSTAGRAM
                  </Link>
                )}
              </div>
            </Popover>
          </div>
        ))}
      </div>
    </div>
  );
};
