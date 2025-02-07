"use client";

import { useState } from "react";
import { cn, faqQuestions } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export const FaqSection = () => {
  const [openItem, setOpenItem] = useState<string | undefined>(undefined);

  return (
    <section
      id="faq"
      className="py-10 flex flex-col items-center px-8 max-w-3xl mx-auto lg:max-w-7xl"
    >
      <div className="w-full flex flex-col lg:flex-row lg:gap-4 my-5 md:px-6 lg:px-0">
        <div className="flex flex-col gap-4 flex-1">
          {faqQuestions
            .slice(0, Math.ceil(faqQuestions.length / 2))
            .map((item, index) => {
              const itemValue = `faq-${index}`;

              return (
                <Accordion
                  key={index}
                  type="single"
                  collapsible
                  value={openItem}
                  onValueChange={setOpenItem}
                >
                  <AccordionItem
                    value={itemValue}
                    className="border border-gray-light rounded-md"
                  >
                    <AccordionTrigger className="accordion-trigger flex items-center justify-between p-4 w-full text-gray-neutral font-normal text-xs hover:no-underline focus:ring-0 focus:outline-none">
                      <span
                        className={cn(
                          openItem === itemValue &&
                            "text-blue-normal font-semibold"
                        )}
                      >
                        {item.question}
                      </span>
                      <span className="ml-2 text-2xl">
                        {openItem === itemValue ? "-" : "+"}
                      </span>
                    </AccordionTrigger>

                    <AccordionContent className="px-4 text-gray-neutral font-normal text-xs">
                      {item.answer}
                      {item.list && (
                        <ul className="mt-2 list-disc list-inside space-y-1 pl-4">
                          {item.list.map((listItem, idx) => (
                            <li key={idx}>{listItem}</li>
                          ))}
                        </ul>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              );
            })}
        </div>

        <div className="flex flex-col gap-4 flex-1 mt-4 lg:mt-0">
          {faqQuestions
            .slice(Math.ceil(faqQuestions.length / 2))
            .map((item, index) => {
              const itemValue = `faq-${
                index + Math.ceil(faqQuestions.length / 2)
              }`;

              return (
                <Accordion
                  key={index}
                  type="single"
                  collapsible
                  value={openItem}
                  onValueChange={setOpenItem}
                >
                  <AccordionItem
                    value={itemValue}
                    className="border border-gray-light rounded-md"
                  >
                    <AccordionTrigger className="accordion-trigger flex items-center justify-between p-4 w-full text-gray-neutral font-normal text-xs hover:no-underline focus:ring-0 focus:outline-none">
                      <span
                        className={cn(
                          openItem === itemValue &&
                            "text-blue-normal font-semibold"
                        )}
                      >
                        {item.question}
                      </span>
                      <span className="ml-2 text-2xl">
                        {openItem === itemValue ? "-" : "+"}
                      </span>
                    </AccordionTrigger>

                    <AccordionContent className="px-4 text-gray-neutral font-normal text-xs">
                      {item.answer}
                      {item.list && (
                        <ul className="mt-2 list-disc list-inside space-y-1 pl-4">
                          {item.list.map((listItem, idx) => (
                            <li key={idx}>{listItem}</li>
                          ))}
                        </ul>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              );
            })}
        </div>
      </div>
    </section>
  );
};
