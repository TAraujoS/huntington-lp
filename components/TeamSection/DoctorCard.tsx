import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
interface DoctorCardProps {
  name: string;
  picture: string;
  register: string;
  resume: string;
  rqe?: string;
  video?: string;
  lattes?: string[];
  insta?: string;
}

export const MobileDoctorCard = (doctor: DoctorCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className="w-full flex flex-col border border-gray-light rounded-sm">
      <div className="relative h-[203px] overflow-hidden">
        <Image
          src={doctor.picture}
          alt="Foto Médico"
          fill
          loading="lazy"
          className="w-full"
        />
      </div>

      <div
        className={cn(
          "flex flex-col h-full gap-3 text-start",
          doctor.lattes ? "p-6" : "p-6 pb-2"
        )}
      >
        <h3 className="text-gray-title font-semibold text-sm w-4/5 uppercase">
          {doctor.name}
        </h3>

        <span className="text-sm text-gray-title font-normal">
          {doctor.resume}
        </span>

        <p className="flex w-full text-xs text-gray-default font-normal gap-5">
          {doctor.register && doctor.register}
          <span>{doctor.rqe && doctor.rqe}</span>
        </p>

        {doctor.lattes && (
          <>
            <div
              className={cn("border-b border-gray-light", isOpen && "hidden")}
            />
            <p
              className={cn(
                "flex items-center gap-2 text-blue-normal font-bold text-[11px] focus:ring-0 focus:outline-none pt-0",
                isOpen && "hidden"
              )}
            >
              SAIBA MAIS ABAIXO:
            </p>
          </>
        )}

        <div className="flex w-full gap-2">
          <Collapsible onOpenChange={(open) => setIsOpen(open)}>
            <div className="flex gap-2">
              {doctor.lattes && (
                <CollapsibleTrigger>
                  <span
                    className={cn(
                      "text-xs font-bold text-gray-title bg-light p-2 rounded-sm underline hover:bg-blue-normal hover:bg-opacity-10 hover:text-blue-normal",
                      isOpen && "bg-blue-normal bg-opacity-10 text-blue-normal"
                    )}
                  >
                    LATTES
                  </span>
                </CollapsibleTrigger>
              )}
              {/* {doctor.video && (
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
                      src={doctor.video}
                      title="YouTube video"
                      allowFullScreen
                    ></iframe>
                  </DialogContent>
                </Dialog>
              )} */}
              {doctor.insta && (
                <Link
                  className="text-xs font-bold text-gray-title bg-light p-2 rounded-sm underline hover:bg-blue-normal hover:bg-opacity-10 hover:text-blue-normal"
                  href={doctor.insta}
                  target="_blank"
                >
                  INSTAGRAM
                </Link>
              )}
            </div>
            {doctor.lattes && (
              <CollapsibleContent>
                <div
                  className={cn(
                    "hidden",
                    isOpen && "block border-b border-gray-light mt-3"
                  )}
                />

                <ul className="list-inside mt-3">
                  {doctor.lattes.map((item, index) => (
                    <li
                      key={index}
                      className="text-xs font-normal text-gray-title leading-5"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </CollapsibleContent>
            )}
          </Collapsible>
        </div>
      </div>
    </div>
  );
};

export const DesktopDoctorCard = (doctor: DoctorCardProps) => {
  // const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isDoctorOpen, setIsDoctorOpen] = useState(false);

  return (
    <>
      <div className="relative h-[150px] w-full overflow-hidden">
        <Image
          src={doctor.picture}
          alt="Foto Médico"
          fill
          loading="lazy"
          className="w-full object-cover"
        />
      </div>

      <div
        className={cn(
          "flex flex-col gap-2 text-start",
          doctor.lattes ? "p-4" : "p-4 pb-2"
        )}
      >
        <h3 className="text-gray-title font-semibold text-xs w-4/5 uppercase">
          {doctor.name}
        </h3>

        <span className="text-[11px] text-gray-title font-normal">
          {doctor.resume}
        </span>

        <p className="flex w-full text-xxs text-gray-default font-normal gap-4">
          {doctor.register && doctor.register}
          <span>{doctor.rqe && doctor.rqe}</span>
        </p>

        {doctor.lattes && (
          <>
            <div className="border-b border-gray-light" />
            <p className="flex items-center gap-2 text-blue-normal font-bold text-xxs focus:ring-0 focus:outline-none pt-0">
              SAIBA MAIS ABAIXO:
            </p>
          </>
        )}

        <Dialog open={isDoctorOpen} onOpenChange={setIsDoctorOpen}>
          <DialogContent className="w-[984px] max-w-none p-7 text-start border border-gray-default rounded-md">
            <DialogTitle></DialogTitle>
            <div className="flex flex-col gap-3 w-full">
              <div className="flex w-full px-12 gap-14">
                <div className="w-1/3 h-44 my-2 mx-auto">
                  <Image
                    src={doctor.picture}
                    alt="Foto Médico"
                    width={500}
                    height={300}
                    loading="lazy"
                    className="rounded-md object-cover"
                  />
                </div>

                <div className="space-y-3 w-2/3 mt-2">
                  <h3 className="text-gray-title font-bold text-2xl uppercase">
                    {doctor.name}
                  </h3>

                  <p className="text-base text-gray-title font-normal">
                    {doctor.resume}
                  </p>

                  <span className="flex text-base text-gray-title font-normal mt-1">
                    {doctor.register && doctor.register}
                    <span>{doctor.rqe && doctor.rqe}</span>
                  </span>

                  <p className="flex items-center gap-2 text-blue-normal font-bold text-[11px] leading-3 focus:ring-0 focus:outline-none pt-0">
                    SAIBA MAIS ABAIXO:
                  </p>

                  <div className="flex w-full gap-2">
                    {doctor.lattes && (
                      <span className="text-xxs font-bold p-2 rounded-sm underline bg-blue-normal bg-opacity-10 text-blue-normal">
                        LATTES
                      </span>
                    )}

                    {/* {doctor.video && (
                      <Dialog
                        open={isVideoOpen}
                        onOpenChange={() => {
                          setIsDoctorOpen(false);
                          setIsVideoOpen(true);
                        }}
                      >
                        <DialogTrigger asChild>
                          <span className="text-xxs font-bold content-center text-gray-title bg-light p-2 rounded-sm underline cursor-pointer hover:bg-blue-normal hover:bg-opacity-10 hover:text-blue-normal">
                            VÍDEO
                          </span>
                        </DialogTrigger>

                        <DialogContent className="max-w-xl w-full p-4">
                          <DialogTitle></DialogTitle>
                          <iframe
                            width="100%"
                            height="315"
                            src={doctor.video}
                            title="YouTube video"
                            allowFullScreen
                          ></iframe>
                        </DialogContent>
                      </Dialog>
                    )} */}

                    {doctor.insta && (
                      <Link
                        className="text-xxs font-bold text-gray-title bg-light p-2 rounded-sm underline hover:bg-blue-normal hover:bg-opacity-10 hover:text-blue-normal"
                        href={doctor.insta}
                        target="_blank"
                      >
                        INSTAGRAM
                      </Link>
                    )}
                  </div>
                </div>
              </div>
              {doctor.lattes && (
                <div className="mt-2 px-12">
                  <div className="border-b border-gray-200 mb-4" />
                  {doctor.lattes.map((item, index) => (
                    <p
                      key={index}
                      className="text-xs text-gray-title font-normal leading-5"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </DialogContent>

          <div className="flex w-full gap-2">
            {doctor.lattes && (
              <DialogTrigger asChild>
                <span className="text-xxs font-bold text-gray-title bg-light p-2 rounded-sm underline hover:bg-blue-normal hover:bg-opacity-10 hover:text-blue-normal cursor-pointer">
                  LATTES
                </span>
              </DialogTrigger>
            )}

            {/* {doctor.video && (
              <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
                <DialogTrigger asChild>
                  <span className="text-xxs font-bold content-center text-gray-title bg-light p-2 rounded-sm underline cursor-pointer hover:bg-blue-normal hover:bg-opacity-10 hover:text-blue-normal">
                    VÍDEO
                  </span>
                </DialogTrigger>

                <DialogContent className="max-w-xl w-full p-4">
                  <DialogTitle></DialogTitle>
                  <iframe
                    width="100%"
                    height="315"
                    src={doctor.video}
                    title="YouTube video"
                    allowFullScreen
                  ></iframe>
                </DialogContent>
              </Dialog>
            )} */}

            {doctor.insta && (
              <Link
                className="text-xxs font-bold text-gray-title bg-light p-2 rounded-sm underline hover:bg-blue-normal hover:bg-opacity-10 hover:text-blue-normal"
                href={doctor.insta}
                target="_blank"
              >
                INSTAGRAM
              </Link>
            )}
          </div>
        </Dialog>
      </div>
    </>
  );
};
