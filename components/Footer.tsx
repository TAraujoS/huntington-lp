"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { navItems } from "@/lib/utils";

export const Footer = () => {
  const pathname = usePathname();

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
    <footer className="flex flex-col bg-blue-extralight px-8 py-10 lg:px-20 lg:py-14">
      <Image src="../assets/logo.svg" alt="Logo" width={130} height={100} />

      <div className="flex flex-col lg:flex-row justify-between lg:py-10 lg:space-x-8">
        <div className="lg:space-y-5">
          <div className="flex flex-col gap-2 my-8 lg:my-1">
            <h6 className="text-sm font-semibold text-gray-neutral">
              ENDEREÇO
            </h6>
            <p className="text-sm font-light text-gray-neutral">
              Rua Eduardo Amaro, 152 - 8º andar, Paraíso, São Paulo/SP
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h6 className="text-sm font-semibold text-gray-neutral">
              ENTRE EM CONTATO
            </h6>
            <p className="text-sm font-light text-gray-neutral">
              (11) 5573-3015
            </p>
            <p className="text-xs sm:text-sm font-light text-gray-neutral">
              centralderelacionamento@huntington.com.br
            </p>
          </div>
        </div>

        <ul className="flex flex-col space-y-4 my-8 lg:my-1">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="text-sm font-semibold text-gray-neutral"
                onClick={() => handleNavigation(item.href)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div>
          <div>
            <Button
              variant="default"
              className="bg-blue-default text-white font-black text-sm hover:bg-blue-dark p-5 mb-6"
            >
              <Link href="/agendar">AGENDAR CONSULTA</Link>
            </Button>
          </div>

          <Link
            href="https://www.instagram.com/profivmedicinareprodutiva/"
            target="_blank"
          >
            <div className="flex items-center space-x-4 mb-8 cursor-pointer">
              <p className="text-xs sm:text-sm font-semibold text-gray-neutral">
                INSTAGRAM
              </p>
              <Image
                src="./assets/instagram.svg"
                alt="Instagram"
                width={24}
                height={24}
              />
              <span className="text-xs sm:text-sm font-light text-gray-neutral">
                @profivmedicinareprodutiva
              </span>
            </div>
          </Link>
        </div>
      </div>

      <div className="flex flex-col bg-blue-light px-6 py-12 lg:flex-row lg:py-5 lg:items-center lg:justify-between">
        <p className="text-sm font-semibold text-blue-default w-full lg:w-2/3 mr-5">
          Responsável Técnico: Dr. Eduardo Leme Alves da Motta — CRM-SP 58.933 —
          RQE 43681
        </p>
        <div className="mt-6 flex flex-col lg:flex-row justify-between lg:mt-0 lg:w-1/3 gap-4">
          <p className="text-sm font-semibold text-blue-dark">
            POLÍTICA DE PRIVACIDADE
          </p>
          <Link
            href="https://whistleblowersoftware.com/secure/eugingroup"
            target="_blank"
          >
            <p className="text-sm font-semibold text-blue-dark">
              CANAL DE DENÚNCIAS
            </p>
          </Link>
        </div>
      </div>
    </footer>
  );
};
