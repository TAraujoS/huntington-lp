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

    const loadRDStationScript = () => {
      const scriptExists = document.querySelector(
        'script[src="https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js"]'
      );

      if (!scriptExists) {
        const script = document.createElement("script");
        script.src =
          "https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js";
        script.async = true;
        script.onload = initializeForm;
        document.body.appendChild(script);
      } else {
        initializeForm();
      }
    };

    const customizeForm = () => {
      const observer = new MutationObserver(() => {
        const button = document.querySelector(
          "#rd-button-m5zotmdq"
        ) as HTMLButtonElement;
        if (button) {
          button.textContent = "ENVIAR MEUS DADOS";
        }

        const placeholders = [
          {
            selector: "#rd-text_field-m5zqm3mj",
            placeholder: "Digite seu nome",
          },
          {
            selector: "#rd-text_field-m5zqm3mk",
            placeholder: "Digite seu sobrenome",
          },
          {
            selector: "#rd-email_field-m5zqm3ml",
            placeholder: "Digite seu e-mail",
          },
          {
            selector: "#rd-text_field-m5zqm3mm",
            placeholder: "000.000.000-00",
          },
          {
            selector: "#rd-number_field-m5zqm3mo",
            placeholder: "Preencha seu CEP",
          },
          {
            selector: "#rd-phone_field-m5zqm3mn",
            placeholder: "Digite seu celular",
          },
        ];

        placeholders.forEach(({ selector, placeholder }) => {
          const input = document.querySelector<HTMLInputElement>(selector);
          if (input) {
            input.placeholder = placeholder;
          }
        });
      });

      const formElement = document.getElementById(
        "pf-solicitar-ligacao-4fb02f01d08a1d2c529d"
      );

      if (formElement) {
        observer.observe(formElement, {
          childList: true,
          subtree: true,
        });
      }
    };

    loadRDStationScript();
    customizeForm();
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
