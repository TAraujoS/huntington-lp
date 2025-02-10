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
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface MenuMobileProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MenuMobile = ({ isOpen, onClose }: MenuMobileProps) => {
  const pathname = usePathname();

  const proceduresContent = [
    "FERTILIZAÇÃO IN VITRO",
    "CONGELAMENTO DE ÓVULOS",
    "INSEMINAÇÃO INTRAUTRINA",
    "ONCOFERTILIDADE",
    "OVODOAÇÃO",
  ];

  const handleNavigation = (href: string) => {
    if (pathname !== "/") {
      window.location.href = `/${href}`;
    } else {
      const element = document.getElementById(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div
      className={cn(
        "fixed h-22 inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
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
          <Link
            href="/"
            onClick={() => {
              onClose();
              handleNavigation("");
            }}
          >
            <Image
              src="../assets/icons/logo.svg"
              alt="Logo"
              width={100}
              height={100}
              className="w-24 h-9"
            />
          </Link>
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
        <div className="border-b border-gray-200 py-4">
          <Link
            href="#sobre-nos"
            className="block text-gray-neutral font-bold text-xs hover:text-blue-normal"
            onClick={() => {
              onClose();
              handleNavigation("#sobre-nos");
            }}
          >
            SOBRE NÓS
          </Link>
        </div>

        <div className="border-b border-gray-200 py-4">
          <Link
            href="#infertilidade"
            className="block text-gray-neutral font-bold text-xs hover:text-blue-normal"
            onClick={() => {
              onClose();
              handleNavigation("#infertilidade");
            }}
          >
            INFERTILIDADE
          </Link>
        </div>

        <Accordion type="single" collapsible className="-pt-4">
          <AccordionItem value="procedimentos">
            <AccordionTrigger className="text-gray-neutral font-bold text-xs hover:no-underline hover:text-blue-normal focus:ring-0 focus:outline-none data-[state=open]:text-blue-normal">
              PROCEDIMENTOS
            </AccordionTrigger>
            <AccordionContent>
              {proceduresContent.map((item, index) => (
                <Link
                  key={index}
                  href="#procedimentos"
                  onClick={() => {
                    onClose();
                    handleNavigation("#procedimentos");
                  }}
                  className="block text-gray-neutral font-normal text-xs hover:text-blue-normal py-2"
                >
                  {item}
                </Link>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="border-b border-gray-200 py-4">
          <Link
            href="#equipe"
            className="block text-gray-neutral font-bold text-xs hover:text-blue-normal"
            onClick={() => {
              onClose();
              handleNavigation("#equipe");
            }}
          >
            EQUIPE
          </Link>
        </div>

        <div className="border-b border-gray-200 py-4">
          <Link
            href="/duvidas-frequentes"
            className="block text-gray-neutral font-bold text-xs hover:text-blue-normal"
            onClick={() => {
              onClose();
              handleNavigation("/duvidas-frequentes");
            }}
          >
            DÚVIDAS FREQUENTES
          </Link>
        </div>

        <div className="pt-4 mt-2">
          <Button
            variant="default"
            className="w-28 bg-blue-normal text-white font-black text-xs hover:bg-blue-dark"
          >
            <Link href="/agendar" onClick={() => onClose()}>
              AGENDAR
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
