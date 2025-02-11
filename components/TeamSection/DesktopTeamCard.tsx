"use client";

import Image from "next/image";
import Link from "next/link";
import { cn, firstDoctorLattes, medicalTeam } from "@/lib/utils";
import { DesktopDoctorCard } from "./DoctorCard";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { useState } from "react";

export const DesktopTeamCard = () => {
  const [isDoctorOpen, setIsDoctorOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
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
          <h3 className="text-gray-title font-bold text-2xl uppercase">
            DRA. Thais Sanches Domingues Cury
          </h3>

          <p className="text-base text-gray-title font-normal">
            CRM-SP 104.252 | RQE/RA 97.7111
          </p>

          <span className="flex text-base text-gray-title font-normal mt-1">
            Coordenadora
          </span>

          <p className="flex items-center gap-2 text-blue-normal font-bold text-xs focus:ring-0 focus:outline-none pt-0">
            SAIBA MAIS ABAIXO:
          </p>

          <Dialog open={isDoctorOpen} onOpenChange={setIsDoctorOpen}>
            <DialogContent className="w-[984px] max-w-none p-7 text-start border border-gray-default rounded-md">
              <DialogTitle></DialogTitle>
              <div className="flex flex-col gap-3 w-full">
                <div className="flex w-full px-12 gap-14">
                  <div className="w-1/3 h-44 my-2 mx-auto">
                    <Image
                      src="/assets/doctor-1.svg"
                      alt="Foto Médico"
                      width={500}
                      height={300}
                      loading="lazy"
                      className="rounded-md object-cover"
                    />
                  </div>

                  <div className="space-y-3 w-2/3 mt-2">
                    <h3 className="text-gray-title font-bold text-2xl uppercase">
                      DRA. Thais Sanches Domingues Cury
                    </h3>

                    <p className="text-base text-gray-title font-normal">
                      CRM-SP 104.252 | RQE/RA 97.7111
                    </p>

                    <span className="flex text-base text-gray-title font-normal mt-1">
                      Coordenadora
                    </span>

                    <p className="flex items-center gap-2 text-blue-normal font-bold text-[11px] leading-3 focus:ring-0 focus:outline-none pt-0">
                      SAIBA MAIS ABAIXO:
                    </p>

                    <div className="flex w-full gap-2">
                      <span className="text-xs font-medium p-2 rounded-sm underline bg-blue-normal bg-opacity-10 text-blue-normal">
                        LATTES
                      </span>

                      <Dialog
                        open={isVideoOpen}
                        onOpenChange={() => {
                          setIsDoctorOpen(false);
                          setIsVideoOpen(true);
                        }}
                      >
                        <DialogTrigger asChild>
                          <span className="text-xs font-medium content-center text-gray-title bg-light p-2 rounded-sm underline cursor-pointer hover:bg-blue-normal hover:bg-opacity-10 hover:text-blue-normal">
                            VÍDEO
                          </span>
                        </DialogTrigger>

                        <DialogContent className="max-w-xl w-full p-4">
                          <DialogTitle></DialogTitle>
                          <iframe
                            width="100%"
                            height="315"
                            src="https://www.youtube.com/embed/bskhBCG36CE"
                            title="YouTube video"
                            allowFullScreen
                          ></iframe>
                        </DialogContent>
                      </Dialog>

                      <Link
                        className="text-xs font-medium text-gray-title bg-light p-2 rounded-sm underline cursor-pointer hover:bg-blue-normal hover:bg-opacity-10 hover:text-blue-normal"
                        href="https://www.instagram.com/thaisdominguescury/"
                        target="_blank"
                      >
                        INSTAGRAM
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="mt-2 px-12">
                  <div className="border-b border-gray-200 mb-4" />
                  {firstDoctorLattes.map((item, index) => (
                    <p
                      key={index}
                      className="text-xs text-gray-title font-normal leading-5"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </DialogContent>

            <div className="flex w-full gap-2">
              <DialogTrigger asChild>
                <span className="text-xs font-bold text-gray-title bg-light p-2 rounded-sm underline hover:bg-blue-normal hover:bg-opacity-10 hover:text-blue-normal cursor-pointer">
                  LATTES
                </span>
              </DialogTrigger>

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
                    height="315"
                    src="https://www.youtube.com/embed/bskhBCG36CE"
                    title="YouTube video"
                    allowFullScreen
                  ></iframe>
                </DialogContent>
              </Dialog>

              <Link
                className="text-xs font-bold text-gray-title bg-light p-2 rounded-sm underline cursor-pointer hover:bg-blue-normal hover:bg-opacity-10 hover:text-blue-normal"
                href="https://www.instagram.com/thaisdominguescury/"
                target="_blank"
              >
                INSTAGRAM
              </Link>
            </div>
          </Dialog>
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
