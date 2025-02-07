import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const navItems = [
  {
    label: "SOBRE NÓS",
    href: "#sobre-nos",
  },
  { label: "INFERTILIDADE", href: "#infertilidade" },
  {
    label: "PROCEDIMENTOS",
    href: "#procedimentos",
    dropdown: [
      { label: "FERTILIZAÇÃO IN VITRO", href: "#procedimentos" },
      { label: "CONGELAMENTO DE ÓVULOS", href: "#procedimentos" },
      { label: "INSEMINAÇÃO INTRAUTRINA", href: "#procedimentos" },
      { label: "ONCOFERTILIDADE", href: "#procedimentos" },
      { label: "OVODOAÇÃO", href: "#procedimentos" },
    ],
  },
  { label: "EQUIPE", href: "#equipe" },
];

export const proceduresContent = [
  {
    title: "FERTILIZAÇÃO IN VITRO (FIV)",
    icon: "/assets/icons/procedure-icon-1.svg",
    content: [
      "Conhecido como FIV, este é um tratamento no qual a fecundação do óvulo ocorre fora do corpo da mulher, em laboratório. Para a realização da FIV, é preciso que o casal passe por algumas fases.",
      "Primeiro, a mulher recebe hormônios para estimular os ovários a produzirem mais óvulos do que o normal. Quando os óvulos estão maduros, eles são retirados através de um procedimento simples, geralmente feito com sedação. Esses óvulos são então fertilizados em laboratório com o sêmen do parceiro ou de doador. Após a fertilização, os embriões são cultivados por alguns dias e posteriormente selecionados para a transferência para o útero da mulher ou criopreservação. ",
      "Nossa incubadora conta com a tecnologia time-lapse, que funciona gerando imagens a cada 10 minutos, permitindo avaliar com precisão padrões do crescimento embrionário, sete dias por semana, sem a necessidade de manipulação externa.",
      "Agora, demos mais um passo com a MAIA (Morphological Artificial Intelligence Assistance), um software de inteligência artificial* que, acoplado ao time-lapse, auxilia os embriologistas a refinar ainda mais a seleção do melhor embrião para transferência",
      "*A inteligência artificial é uma ferramenta de predição de probabilidades de prognóstico.",
    ],
    images: ["/assets/procedure-1.svg", "/assets/procedure-6.svg"],
    border: "border-magenta-text",
  },
  {
    title: "CONGELAMENTO DE ÓVULOS",
    icon: "/assets/icons/procedure-icon-2.svg",
    content: [
      "Postergar a gravidez é uma decisão comum entre mulheres que buscam sucesso profissional antes de engravidar. Entretanto, a fertilidade feminina está diretamente ligada à idade. Ao nascer, uma mulher possui cerca de 7 milhões de óvulos, número que diminui significativamente com o passar dos anos, chegando a menos de 25 mil aos 42 anos. Além da quantidade, a qualidade dos óvulos também se deteriora com o tempo devido a fatores ambientais e erros na divisão do material genético. Isso pode dificultar ou até impedir a gestação natural.",
      "O congelamento de óvulos é uma opção viável para preservar a fertilidade, especialmente antes dos 35 anos, quando as taxas de gravidez são mais altas. Mulheres que congelam óvulos aos 35 anos mantêm chances semelhantes às de uma mulher dessa idade ao tentar engravidar mais tarde, a partir de embriões formados com os óvulos congelados. Além das chances em si, o congelamento também minimiza os riscos de abortos e condições como a Síndrome de Down, que aumentam com a idade",
      "Quer saber mais? Entre em contato.",
    ],
    images: ["/assets/procedure-2.svg"],
    border: "border-orange-text",
  },
  {
    title: "INSEMINAÇÃO INTRAUTERINA",
    icon: "/assets/icons/procedure-icon-3.svg",
    content: [
      "A inseminação intrauterina é um procedimento que consiste na introdução de espermatozoides diretamente no útero da mulher, aumentando as chances de fertilização. É indicada em casos de problemas de ovulação ou quando há dificuldade na mobilidade dos gametas. O processo envolve a coleta de espermatozoides, que são preparados em laboratório para otimizar a concentração e a motilidade. Após a ovulação, os espermatozoides são inseridos no útero, durante um ciclo menstrual monitorado",
      "Esse método é menos invasivo que a fertilização in vitro e pode ser realizado com esperma do parceiro ou doador. A inseminação intrauterina é uma opção para casais que desejam aumentar suas chances de concepção, especialmente quando fatores como idade ou condições de saúde afetam a fertilidade. O acompanhamento médico é essencial para determinar o momento ideal e avaliar a resposta ao tratamento, garantindo o melhor resultado possível na busca pela gravidez.",
      "Saiba mais, agende sua consulta.",
    ],
    images: ["/assets/procedure-3.svg"],
    border: "border-purple",
  },
  {
    title: "ONCOFERTILIDADE",
    icon: "/assets/icons/procedure-icon-4.svg",
    content: [
      "Antes do início de um tratamento oncológico, é fundamental considerar a preservação da fertilidade, pois os quimioterápicos e radioterápicos podem afetar as células reprodutivas, comprometendo a função dos ovários e testículos – em alguns casos, permanentemente. O ProFIV oferece um programa especializado, onde um médico de reprodução assistida avalia cada caso com atenção e pode planejar o melhor método para preservar a fertilidade, como a criopreservação de óvulos ou embriões, garantindo que a saúde do paciente não seja prejudicada",
      "Atualmente, com os avanços da medicina, a chance de cura de um câncer é muito grande, o que justifica a preocupação com a fertilidade após o tratamento finalizado",
      "Para saber mais, agende sua consulta com um dos nossos especialistas.",
    ],
    images: ["/assets/procedure-4.svg"],
    border: "border-blue-normal",
  },
  {
    title: "OVODOAÇÃO",
    icon: "/assets/icons/procedure-icon-5.svg",
    content: [
      "A ovodoação, ou o tratamento com óvulos doados, é indicada principalmente para mulheres com diminuição da reserva ovariana devido à idade avançada, falência ovariana prematura ou tratamentos oncológicos. Muitas vezes, os casais já enfrentaram dificuldades em tentativas anteriores e recorrem à doação como uma opção viável para engravidar. É importante ressaltar que a idade do óvulo é crucial para o sucesso do tratamento, e no ProFIV são priorizadas doadoras de até 35 anos, o que otimiza as chances de gravidez",
      "No nosso programa de ovodoação, a doadora de óvulos passa por um rigoroso protocolo de exames, como sorologias, cariótipo e avaliação do histórico de saúde. Além disso, a identidade tanto da doadora quanto da receptora permanece anônima, garantindo um processo ético e seguro para ambas.",
      "Se quiser saber mais sobre o tratamento com óvulos doados, não deixe de entrar em contato conosco e conversar com um especialista.",
    ],
    images: ["/assets/procedure-5.svg"],
    border: "border-magenta-text",
  },
];

export const faqQuestions = [
  {
    question:
      "Quantos casais sofrem com o problema de infertilidade atualmente?",
    answer: "A infertilidade atinge cerca de 20% dos casais.",
  },
  {
    question: "Quando um casal é considerado infértil?",
    answer:
      "Procuramos não utilizar o termo “casal infértil”. Podemos dizer que após 12 meses de relações sexuais regulares sem uso de método anticoncepcional, há suspeita de que algum fator esteja dificultando a concepção.",
  },
  {
    question: "Qual procedimento o casal deve seguir?",
    answer:
      "Aquele casal que apresenta uma dificuldade para engravidar deve ser avaliado de forma individualizada para se buscar as causas do problema. E, para isso, usamos alguns exames de pesquisa básica, como:",
    list: [
      "Histerossalpingografia: é a colocação de contraste no interior do útero para possibilitar a visualização da cavidade uterina, permeabilidade e aspecto das trompas.",
      "Ultrassonografia: permite avaliar o aspecto uterino e ovariano.",
      "Espermograma: mostra informações sobre quantidade, motilidade e morfologia dos espermatozoides.",
      "Exames hormonais: é necessário avaliar todos os hormônios que podem influenciar na ovulação ou no transcorrer de uma gravidez.",
    ],
  },
  {
    question: "O uso de laptop no colo afeta a fertilidade?",
    answer:
      "Sim. O calor gerado pelos laptops sobre a cintura masculina pode afetar a qualidade de sêmen, diminuindo sua quantidade e motilidade.",
  },
  {
    question: "Fumar afeta a qualidade do sêmen?",
    answer:
      "A qualidade e a quantidade dos espermatozoides produzidos por fumantes ativos podem ser influenciadas por substâncias presentes no tabaco, como a nicotina e o THC, causando prejuízo reprodutivo.",
  },
  {
    question:
      "Bebês gerados a partir de técnicas de reprodução assistida tendem a nascer prematuros?",
    answer:
      "A prematuridade está relacionada a gestações múltiplas. Portanto, uma gravidez única por meio de fertilização in vitro não tem risco aumentado de prematuridade. Já uma gestação múltipla, seja espontânea ou pós-fertilização, tem mais riscos.",
  },
];

export const medicalTeam = [
  {
    name: "DR. Eduardo Leme Alves da Motta",
    picture: "/assets/doctor-2.svg",
    register: "CRM: 58.933",
    rqe: "RQE: 436.811",
    resume:
      "Especialidade em Reproduçãoa Assistida e Corresponsável pelo ProFIV",
    video: "https://youtu.be/MuQ60KX_AlU",
    lattes:
      "Fundador da Huntington; Corresponsável pelo Centro de Reprodução Humana Santa Joana; Professor Adjunto do Departamento de Ginecologia da Escola Paulista de Medicina – Unifesp; Especialização em Reprodução Humana na Huntington Reproductive Center, Califórnia – EUA; Mestrado e Doutorado em Medicina pelo Departamento de Ginecologia – Escola Paulista de Medicina Unifesp; Especialização em Ginecologia e Obstetrícia pela FEBRASGO; Residência Médica em Ginecologia e Obstetrícia pela Escola Paulista de Medicina; Médico formado pela Faculdade de Ciências Médicas da Pontifícia Universidade Católica de Campinas..",
  },
  {
    name: "DR. Marcos Shiroma",
    picture: "/assets/doctor-3.svg",
    register: "CRM: 112.096",
    rqe: "RQE: 524.171",
    resume: "Especialidade em Reprodução assistida",
    insta: "https://www.instagram.com/drmarcosshiroma/",
    lattes:
      "Graduação pela Faculdade de Medicina da USP (FMUSP) Residência Médica em Ginecologia e Obstetrícia pela FMUSP Ex-Preceptor da Residência Médica e Internato em Ginecologia da FMUSP Especialização em Endoscopia Ginecológica na FMUSP Especialização em Reprodução Humana na FMUSP Doutor em Ciências pela USP",
  },
  {
    name: "DR. Guilherme Wood",
    picture: "/assets/doctor-4.svg",
    register: "CRM: 129.735",
    rqe: "RQE: 55.654",
    resume: "Especialidade em Urologista",
    video: "https://youtu.be/Jj0XvSKEnhM",
    insta: "https://www.instagram.com/drguilhermewood/",
    lattes:
      "Fellowship em urologia e andrologia pelo Massachusetts General Hospital Harvard University – Boston-EUA; Titulo de especialista em urologia pela Sociedade Brasileira de Urologia (SBU); Residência médica em urologia pelo Hospital das Clínicas da Universidade de São Paulo (USP); Residência médica em cirurgia geral pelo Hospital das Clínicas da Universidade de São Paulo (USP); Médico formado pela Faculdade de Medicina da Universidade de São Paulo (USP).",
  },
  {
    name: "DRA. Ana Luiza Nunes",
    picture: "/assets/doctor-5.svg",
    register: "CRM-SP: 126.992",
    rqe: "RQE: 122.185",
    resume: "Especialidade em Reprodução assistida",
    insta: "https://www.instagram.com/draanaluizanunes/",
    lattes:
      "Médica responsável pelo aconselhamento genético do Grupo Huntington; Fellow na Vrije Universiteit Brussel na Bélgica; Fellow em Reprodução Humana pela Escola Paulista de Medicina (UNIFESP/ EPM). Especialização em Reprodução Humana pelaFaculdade de Medicina do ABC; Título de Especialista em Ginecologia e Obstetrícia pela Federação Brasileira das Associações de Ginecologia e Obstetrícia (FEBRASGO); Residência Médica em Ginecologia e Obstetrícia pela Faculdade de Medicina do ABC; Médica formada pela Faculdade de Medicina do ABC.",
  },
  {
    name: "Manuela Marquez Amaral",
    picture: "/assets/doctor-6.svg",
    register: "COREN: 258.828",
    resume: "Gerente de Enfermagem",
  },
  {
    name: "Gisele Venâncio Rodrigues",
    picture: "/assets/doctor-7.svg",
    register: "COREN: 539.070",
    resume: "Coordenadora de Enfermagem",
  },
];
