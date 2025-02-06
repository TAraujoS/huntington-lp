"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section
      id="quem-somos"
      className="flex flex-col lg:flex-row items-center justify-center px-4 py-8 gap-4 max-w-7xl mx-auto bg-blue-normal bg-opacity-10 lg:bg-none"
    >
      <div className="hidden lg:block lg:w-1/2 xl:w-1/3 lg:pl-10">
        <Image
          src="/assets/about.png"
          alt="Imagem Quarto"
          width={500}
          height={300}
          loading="lazy"
          className="rounded-md"
        />
      </div>

      <div className="w-full max-w-2xl px-6 lg:w-1/2 xl:w-2/3">
        <h2 className="text-center lg:text-left text-2xl font-semibold text-gray-neutral">
          SOBRE <span className="text-blue-normal">NÓS</span>
        </h2>

        <div className="flex lg:hidden my-8 justify-center">
          <Image
            src="/assets/about.png"
            alt="Imagem Quarto"
            width={500}
            height={500}
            loading="lazy"
            className="rounded-md"
          />
        </div>

        <div className="flex flex-col gap-4 text-gray-neutral font-normal text-sm mt-6">
          <p>
            O <span className="font-bold">ProFIV</span> tem como objetivo
            oferecer aos pacientes com problemas de infertilidade um tratamento
            que atenda a critérios internacionais de qualidade.
          </p>
          <p>
            Contamos com uma grande equipe especializada no atendimento,
            pesquisa, prevenção e tratamento da infertilidade.
          </p>
          <p>
            Com localização estratégica, nossa unidade possui instalações com
            excelente infraestrutura, que garantem segurança e eficiência em
            todos os procedimentos realizados.
          </p>
          <p>
            Somos parte do <span className="font-bold">Grupo Huntington</span>,
            um dos líderes em reprodução assistida e dedicados a transformar o
            sonho de formar uma família em realidade.
          </p>

          <Accordion
            type="single"
            collapsible
            onValueChange={(value) => setIsOpen(value === "about-more")}
          >
            <AccordionItem value="about-more" className="border-0">
              <AccordionContent>
                <p className="text-gray-neutral font-normal text-sm">
                  A atualização profissional da nossa equipe é fundamental para
                  o sucesso de nossos tratamentos. O{" "}
                  <span className="font-bold">ProFIV</span> conta com corpo
                  clínico e embriologistas altamente capacitados e equipe de
                  enfermagem qualificada para acompanhamento de procedimentos de
                  reprodução assistida.
                </p>
                <p className="text-gray-neutral font-normal text-sm mt-2">
                  Investir no aprimoramento de novas técnicas e o
                  desenvolvimento de pesquisas científicas relevantes são
                  práticas constantes que nos revertem à conquista de diversos
                  prêmios acadêmicos de organizações reconhecidas nacional e
                  internacionalmente.
                </p>
              </AccordionContent>

              <div className={cn(isOpen ? "w-28" : "w-24")}>
                <AccordionTrigger className="flex items-center gap-2 text-grey-neutral font-bold text-sm underline focus:ring-0 focus:outline-none pb-0">
                  <span>{isOpen ? "LER MENOS" : "LER MAIS"}</span>
                </AccordionTrigger>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};
