"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const InfraSection = () => {
  const [isFirstOpen, setIsFirstOpen] = useState(false);
  const [isSecondOpen, setIsSecondOpen] = useState(false);

  return (
    <section className="bg-blue-extralight p-10 md:px-20 xl:flex xl:flex-col xl:items-center">
      <div className="flex flex-col items-center justify-center gap-4 max-w-7xl">
        <h2 className="text-blue-default text-lg font-semibold">
          INFRAESTRUTURA
        </h2>
        <p className="text-base font-normal text-gray-neutral text-center">
          O ProFIV possui infraestrutura de ponta, aliada a uma equipe altamente
          capacitada, incorpora tecnologias modernas como a incubadora
          time-lapse, para proporcionar resultados mais precisos e seguros aos
          nossos pacientes.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 lg:max-w-7xl">
        <div className="flex-1">
          <div className="flex flex-col gap-4 text-gray-neutral font-normal text-sm mt-6 bg-white py-12 px-8 md:px-10 w-11/12 mx-auto lg:w-full">
            <div className="w-full mb-2">
              <Image
                src="/assets/infra-1.svg"
                alt="Imagem equipamento Incubadora"
                width={500}
                height={300}
                loading="lazy"
                className="w-full"
              />
            </div>

            <h3 className="text-base font-semibold text-gray-neutral inline">
              INCUBADORA COM
              <p className="text-green-text inline"> TECNOLOGIA TIME-LAPSE</p>
            </h3>
            <p>
              Essa tecnologia revolucionária captura imagens em tempo real, a
              cada 10 minutos, permitindo que nossos embriologistas acompanhem o
              desenvolvimento embrionário com precisão, 24 horas por dia, sem
              manipulação externa.
            </p>

            <Accordion
              type="single"
              collapsible
              onValueChange={(value) => setIsFirstOpen(value === "infra")}
            >
              <AccordionItem value="infra" className="border-0">
                <AccordionContent>
                  <p className="text-gray-neutral font-normal text-sm">
                    Isso garante um ambiente seguro, estável controlado para o
                    embrião, além de possibilitar a seleção mais criteriosa dos
                    embriões com maior potencial para transferência ao útero,
                    otimizando os resultados da fertilização in vitro.
                  </p>
                </AccordionContent>

                <div
                  className={cn(
                    "transition-all",
                    isFirstOpen ? "w-28" : "w-24"
                  )}
                >
                  <AccordionTrigger className="flex items-center gap-2 text-grey-neutral font-bold text-sm underline focus:ring-0 focus:outline-none pb-0">
                    <span>{isFirstOpen ? "LER MENOS" : "LER MAIS"}</span>
                  </AccordionTrigger>
                </div>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        <div className="flex-1">
          <div className="flex flex-col gap-4 text-gray-neutral font-normal text-sm mt-6 bg-white py-12 px-8 md:px-10 w-11/12 mx-auto lg:w-full">
            <div className="w-full mb-2">
              <Image
                src="/assets/infra-2.svg"
                alt="Imagem MAIA"
                width={500}
                height={300}
                loading="lazy"
                className="w-full"
              />
            </div>

            <h3 className="text-base font-semibold text-magenta-text inline">
              MAIA: INTELIGÊNCIA ARTIFICIAL
              <p className="text-gray-neutral inline"> DO GRUPO HUNTINGTON</p>
            </h3>
            <p>
              Nosso software de inteligência artificial, foi desenvolvido 100%
              no Brasil. A MAIA (Morphological Artificial Intelligence
              Assistance) é uma tecnologia pioneira que analisa dados
              específicos da população local, refinando ainda mais a seleção
              embrionária.
            </p>

            <Accordion
              type="single"
              collapsible
              onValueChange={(value) =>
                setIsSecondOpen(value === "infra-second")
              }
            >
              <AccordionItem value="infra-second" className="border-0">
                <AccordionContent>
                  <p className="text-gray-neutral font-normal text-sm">
                    Acoplada ao sistema time-lapse, a MAIA utiliza milhões de
                    imagens e dados do casal para identificar o embrião com
                    maior potencial de sucesso. Essa combinação única entre
                    inovação tecnológica e a expertise da nossa equipe
                    multidisciplinar reafirma nosso compromisso com a
                    excelência, oferecendo aos nossos pacientes as melhores
                    chances de realizar o sonho de formar uma família.
                  </p>
                </AccordionContent>

                <div
                  className={cn(
                    "transition-all",
                    isSecondOpen ? "w-28" : "w-24"
                  )}
                >
                  <AccordionTrigger className="flex items-center gap-2 text-grey-neutral font-bold text-sm underline focus:ring-0 focus:outline-none pb-0">
                    <span>{isSecondOpen ? "LER MENOS" : "LER MAIS"}</span>
                  </AccordionTrigger>
                </div>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};
