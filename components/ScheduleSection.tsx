"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    RDStationForms: new (param1: string, param2: string) => {
      createForm: () => void;
    };
  }
}

export const ScheduleSection = () => {
  useEffect(() => {
    const initializeForm = () => {
      const formElement = document.getElementById(
        "pf-solicitar-ligacao-4fb02f01d08a1d2c529d"
      );

      if (formElement && !formElement.hasAttribute("data-initialized")) {
        if (window.RDStationForms) {
          const form = new window.RDStationForms(
            "pf-solicitar-ligacao-4fb02f01d08a1d2c529d",
            "UA-31224446-11"
          );
          form.createForm();
          formElement.setAttribute("data-initialized", "true");
        }
      }
    };

    initializeForm();
  }, []);

  return (
    <section id="agendar" className="py-10 flex flex-col items-center px-8">
      <h2 className="text-gray-neutral text-lg font-semibold mb-5">
        PREENCHA O <p className="text-blue-default inline">FORMULÁRIO</p> ABAIXO
        E ENTRAREMOS EM CONTATO COM VOCÊ.
      </h2>

      <div
        role="main"
        id="pf-solicitar-ligacao-4fb02f01d08a1d2c529d"
        className="custom-rd-form w-full max-w-lg lg:grid lg:grid-cols-2 lg:gap-4"
      ></div>
    </section>
  );
};
