"use client";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface MenuMobileProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MenuMobile = ({ isOpen, onClose }: MenuMobileProps) => {
  return (
    <div
      className={`fixed h-20 inset-0 bg-white z-50 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="flex items-center justify-between border-b border-gray-200 py-4 px-4">
        <button
          className="p-2 text-gray-700"
          onClick={onClose}
          aria-label="Fechar menu"
        >
          <Menu className="w-6 h-6" />
        </button>

        <div className="flex items-center justify-center">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={100}
            height={100}
            className="w-24 h-9"
          />
        </div>

        <button
          className="p-2 text-gray-700"
          onClick={onClose}
          aria-label="Fechar menu"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <div className="flex flex-col py-8 px-4">
        <Accordion type="single" collapsible>
          <AccordionItem value="quem-somos">
            <AccordionTrigger className="text-gray-neutral font-bold text-xs hover:no-underline focus:ring-0 focus:outline-none data-[state=open]:text-blue-default">
              QUEM SOMOS
            </AccordionTrigger>
            <AccordionContent>
              <Link
                href="/quem-somos/historia"
                className="block text-gray-neutral font-normal text-xs hover:text-primary py-1"
              >
                SOBRE NÓS
              </Link>
              <Link
                href="/quem-somos/missao"
                className="block text-gray-neutral font-normal text-xs hover:text-primary py-2"
              >
                INFRAESTRUTURA
              </Link>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="border-b border-gray-200 py-4">
          <Link
            href="/infertilidade"
            className="block text-gray-neutral font-bold text-xs hover:text-primary"
          >
            INFERTILIDADE
          </Link>
        </div>

        <Accordion type="single" collapsible className="-pt-4">
          <AccordionItem value="procedimentos">
            <AccordionTrigger className="text-gray-neutral font-bold text-xs hover:no-underline focus:ring-0 focus:outline-none data-[state=open]:text-blue-default">
              PROCEDIMENTOS
            </AccordionTrigger>
            <AccordionContent>
              <Link
                href="/procedimentos/consulta"
                className="block text-gray-neutral font-normal text-xs hover:text-primary py-2"
              >
                CONSULTAS
              </Link>
              <Link
                href="/procedimentos/cirurgias"
                className="block text-gray-neutral font-normal text-xs hover:text-primary py-1"
              >
                CIRURGIAS
              </Link>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="border-b border-gray-200 py-4">
          <Link
            href="/equipe"
            className="block text-gray-neutral font-bold text-xs hover:text-primarypy-2"
          >
            EQUIPE
          </Link>
        </div>

        <div className="pt-2">
          <Button
            variant="default"
            className="w-28 bg-blue-default text-white font-black text-sm hover:bg-blue-dark"
          >
            AGENDAR
          </Button>
        </div>
      </div>
    </div>
  );
};
