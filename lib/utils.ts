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
  { label: "DÚVIDAS FREQUENTES", href: "/duvidas-frequentes" },
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
    icon: "/assets/icons/procedure-icon-5.png",
    content: [
      "A ovodoação, ou o tratamento com óvulos doados, é indicada principalmente para mulheres com diminuição da reserva ovariana devido à idade avançada, falência ovariana prematura ou tratamentos oncológicos. Muitas vezes, os casais já enfrentaram dificuldades em tentativas anteriores e recorrem à doação como uma opção viável para engravidar. É importante ressaltar que a idade do óvulo é crucial para o sucesso do tratamento, e no ProFIV são priorizadas doadoras de até 35 anos, o que otimiza as chances de gravidez",
      "No nosso programa de ovodoação, a doadora de óvulos passa por um rigoroso protocolo de exames, como sorologias, cariótipo e avaliação do histórico de saúde. Além disso, a identidade tanto da doadora quanto da receptora permanece anônima, garantindo um processo ético e seguro para ambas.",
      "Se quiser saber mais sobre o tratamento com óvulos doados, não deixe de entrar em contato conosco e conversar com um especialista.",
    ],
    images: ["/assets/procedure-5.svg"],
    border: "border-magenta-text",
  },
];

export const firstDoctorLattes = [
  "Possui graduação em medicina pela Universidade Estadual Paulista Júlio de Mesquita Filho (2001) e residência médica em Ginecologia e Obstetrícia, na Universidade Federal de São Paulo - Escola Paulista de Medicina (2005), tendo concluído residência específica em Reprodução Humana nesta Universidade, em 2006. Atualmente obteve o título de doutora em Ciências, pela Universidade Federal de São Paulo - UNIFESP/EPM. É médica ginecologista sênior, especialista em Reprodução Humana, pelo Grupo Huntington desde 2007. Permanece como coordenadora médica do setor de doação de óvulos e da unidade Santa Joana.",
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
    lattes: [
      "Fundador da Huntington;",
      "Corresponsável pelo Centro de Reprodução Humana Santa Joana;",
      "Professor Adjunto do Departamento de Ginecologia da Escola Paulista de Medicina – Unifesp;",
      "Especialização em Reprodução Humana na Huntington Reproductive Center, Califórnia – EUA;",
      "Mestrado e Doutorado em Medicina pelo Departamento de Ginecologia – Escola Paulista de Medicina Unifesp;",
      "Especialização em Ginecologia e Obstetrícia pela FEBRASGO;",
      "Residência Médica em Ginecologia e Obstetrícia pela Escola Paulista de Medicina;",
      "Médico formado pela Faculdade de Ciências Médicas da Pontifícia Universidade Católica de Campinas.",
    ],
  },
  {
    name: "DR. Marcos Shiroma",
    picture: "/assets/doctor-3.svg",
    register: "CRM: 112.096",
    rqe: "RQE: 524.171",
    resume: "Especialidade em Reprodução assistida",
    insta: "https://www.instagram.com/drmarcosshiroma/",
    lattes: [
      "Graduação pela Faculdade de Medicina da USP (FMUSP) Residência Médica em Ginecologia e Obstetrícia pela FMUSP;",
      "Ex-Preceptor da Residência Médica e Internato em Ginecologia da FMUSP;",
      "Especialização em Endoscopia Ginecológica na FMUSP Especialização em Reprodução Humana na FMUSP;",
      "Doutor em Ciências pela USP.",
    ],
  },
  {
    name: "DR. Guilherme Wood",
    picture: "/assets/doctor-4.svg",
    register: "CRM: 129.735",
    rqe: "RQE: 55.654",
    resume: "Especialidade em Urologista",
    video: "https://youtu.be/Jj0XvSKEnhM",
    insta: "https://www.instagram.com/drguilhermewood/",
    lattes: [
      "Fellowship em urologia e andrologia pelo Massachusetts General Hospital Harvard University – Boston-EUA;",
      "Titulo de especialista em urologia pela Sociedade Brasileira de Urologia (SBU);",
      "Residência médica em urologia pelo Hospital das Clínicas da Universidade de São Paulo (USP);",
      "Residência médica em cirurgia geral pelo Hospital das Clínicas da Universidade de São Paulo (USP);",
      "Médico formado pela Faculdade de Medicina da Universidade de São Paulo (USP).",
    ],
  },
  {
    name: "DRA. Ana Luiza Nunes",
    picture: "/assets/doctor-5.svg",
    register: "CRM-SP: 126.992",
    rqe: "RQE: 122.185",
    resume: "Especialidade em Reprodução assistida",
    insta: "https://www.instagram.com/draanaluizanunes/",
    lattes: [
      "Médica responsável pelo aconselhamento genético do Grupo Huntington;",
      "Fellow na Vrije Universiteit Brussel na Bélgica;",
      "Fellow em Reprodução Humana pela Escola Paulista de Medicina (UNIFESP/ EPM);",
      "Especialização em Reprodução Humana pelaFaculdade de Medicina do ABC;",
      "Título de Especialista em Ginecologia e Obstetrícia pela Federação Brasileira das Associações de Ginecologia e Obstetrícia (FEBRASGO);",
      "Residência Médica em Ginecologia e Obstetrícia pela Faculdade de Medicina do ABC;",
      "Médica formada pela Faculdade de Medicina do ABC.",
    ],
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

export const faqQuestions = [
  {
    question:
      "Quantos casais sofrem com o problema de infertilidade atualmente?",
    answer: "A infertilidade atinge cerca de 20% dos casais.",
  },
  {
    question: "Quando um casal é considerado infértil?",
    answer:
      "Procuramos não utilizar o termo 'casal infértil'. Podemos dizer que após 12 meses de relações sexuais regulares sem uso de método anticoncepcional, há suspeita de que algum fator esteja dificultando a concepção.",
  },
  {
    question: "Qual procedimento o casal deve seguir?",
    answer:
      "Aquele casal que apresenta uma dificuldade para engravidar deve ser avaliado de forma individualizada para se buscar as causas do problema. E, para isso, usamos alguns exames de pesquisa básica, como: Histerossalpingografia, Ultrassonografia, Espermograma e Exames hormonais.",
    list: [
      "Histerossalpingografia: é a colocação de contraste no interior do útero para possibilitar a visualização da cavidade uterina, permeabilidade e aspecto das trompas.",
      "Ultrassonografia: permite avaliar o aspecto uterino e ovariano.",
      "Espermograma: mostra informações sobre quantidade, motilidade e morfologia dos espermatozoides.",
      "Exames hormonais: é necessário avaliar todos os hormônios que podem influenciar na ovulação ou no transcorrer de uma gravidez.",
    ],
  },
  {
    question: "A infertilidade é um problema exclusivamente feminino?",
    answer:
      "Não. Cerca de 40% dos casos de infertilidade são decorrentes de problemas com a mulher, 40% com o homem e 20% são de uma combinação de fatores dos dois gêneros.",
  },
  {
    question: "Quais são as principais causas da infertilidade feminina?",
    answer:
      "As principais causas de infertilidade são endometriose, disfunções na ovulação (fator ovulatório), alterações nas tubas (fator tubário) e no útero (fator uterino).",
  },
  {
    question: "O que é endometriose?",
    answer:
      "Endometriose é a presença de tecido endometrial fora do útero, ou seja, o crescimento do tecido que recobre o interior do útero em outro local, como ovários, intestino e a parte externa do útero.",
  },
  {
    question:
      "Quais os principais fatores que aumentam os riscos de infertilidade feminina?",
    answer:
      "Gravidez tardia, obesidade ou baixo peso, exposição a doenças sexualmente transmissíveis, tabagismo e tratamentos oncológicos.",
  },
  {
    question: "Como a idade interfere na fertilidade da mulher?",
    answer:
      "A reserva de óvulos da mulher se estabelece antes dela nascer e reduz ao longo da vida. Há perda na quantidade e na qualidade dos óvulos, o que leva a uma menor chance de engravidar.",
  },
  {
    question: "Mulheres atletas podem ter dificuldade para engravidar?",
    answer:
      "Sim. Atletas de alto desempenho que praticam exercícios extenuantes podem ter amenorreia ou ausência de menstruação, o que pode afetar a ovulação.",
  },
  {
    question:
      "Mulher com útero retrovertido tem mais dificuldade para engravidar?",
    answer:
      "Não. O útero retrovertido é comum e não causa infertilidade. Entretanto, mulheres com este tipo de útero têm mais chance de ter endometriose, que pode causar infertilidade.",
  },
  {
    question:
      "A mulher que sofre um aborto tem menos chances de engravidar novamente?",
    answer:
      "Sim. Se o aborto for realizado em condições de risco, tal ação pode deixar sequelas, como lesões nas trompas, aderência das paredes do útero e infecções.",
  },
  {
    question: "A obesidade diminui a fertilidade da mulher?",
    answer:
      "Sim. Mulheres que sofrem com obesidade mórbida têm mais problemas de fertilidade devido à relação entre os níveis de gordura corporal e a produção de insulina, o que pode causar a Síndrome do Ovário Policístico.",
  },
  {
    question:
      "O uso de pílula anticoncepcional por tempo prolongado pode causar infertilidade?",
    answer:
      "Não. O tempo de uso da pílula não interfere na fertilidade. Em alguns casos, ela pode até ajudar na prevenção da endometriose e de cistos nos ovários.",
  },
  {
    question: "É preciso ter dois ovários e duas trompas para engravidar?",
    answer: "Não. É possível engravidar com apenas um ovário e uma trompa.",
  },
  {
    question: "Problemas de fertilidade feminina são hereditários?",
    answer:
      "A maioria não, mas há exceções. Algumas condições hereditárias podem afetar a fertilidade, como a Síndrome dos Ovários Policísticos e a endometriose.",
  },
  {
    question: "A ansiedade pode atrapalhar as tentativas para engravidar?",
    answer: "Sim, pois pode propiciar sofrimento ao casal.",
  },
  {
    question:
      "Após quantas tentativas de engravidar a mulher deve buscar orientação médica?",
    answer:
      "Após um ano de tentativas. Caso a mulher tenha 35 anos ou mais, este período deve ser de seis meses.",
  },
  {
    question:
      "Quais procedimentos os médicos usam para diagnosticar a infertilidade na mulher?",
    answer:
      "Dentre eles estão a avaliação da ovulação, o estudo das tubas (histerossalpingografia), a avaliação do útero (ultrassonografia transvaginal) e exames de imagem.",
  },
  {
    question:
      "Atualmente, quais são os principais meios para tratar a infertilidade feminina?",
    answer:
      "Os principais tratamentos são a fertilização in vitro (FIV), a inseminação intrauterina e o coito programado.",
  },
  {
    question: "Quais são as principais causas da infertilidade masculina?",
    answer:
      "Varicocele, processos infecciosos, exposição a toxinas, obstrução dos ductos de transporte, alterações hormonais e fatores genéticos.",
  },
  {
    question: "O que é varicocele?",
    answer:
      "Varicocele é a dilatação das veias do plexo pampiniforme, semelhante a varizes nas veias que trazem o sangue do testículo.",
  },
  {
    question:
      "Quais são os principais fatores que aumentam os riscos de infertilidade masculina?",
    answer:
      "Medicamentos utilizados em quimioterapia, radiação ionizante, calor excessivo, hormônios exógenos e infecções.",
  },
  {
    question: "Como a idade interfere na fertilidade masculina?",
    answer:
      "A idade interfere menos do que na mulher, mas pode levar a redução na motilidade e na qualidade dos espermatozoides, principalmente após os 50 anos.",
  },
  {
    question:
      "Quais procedimentos os médicos usam para diagnosticar a infertilidade masculina?",
    answer:
      "O principal exame é o espermograma, que avalia o volume do sêmen, o número, a concentração, a motilidade e a morfologia dos espermatozoides.",
  },
  {
    question: "Há relação entre potência sexual e fertilidade?",
    answer:
      "Na grande maioria dos homens, não. A produção dos espermatozoides (fertilidade) e da testosterona (potência sexual) é feita por células diferentes no testículo. Casais sem perda de potência sexual podem ter algum tipo de problema de infertilidade que dificulte a gravidez.",
  },
  {
    question: "O uso de laptop no colo afeta a fertilidade?",
    answer:
      "Sim. O calor gerado pelos laptops sobre a cintura masculina pode afetar a qualidade de sêmen, diminuindo sua quantidade e motilidade.",
  },
  {
    question: "Andar de bicicleta pode ser prejudicial ao homem?",
    answer:
      "Sim. A prática, de forma excessiva, pode causar lesões traumáticas ou aquecimento dos testículos ou do escroto. Em estudo realizado pela Universidade de Boston, constatou-se que 40% dos ciclistas têm esperma de baixa qualidade contra 27% dos sedentários.",
  },
  {
    question: "Fumar afeta a qualidade do sêmen?",
    answer:
      "A qualidade e a quantidade dos espermatozoides produzidos por fumantes ativos podem ser influenciadas por substâncias presentes no tabaco, como a nicotina e o THC, causando prejuízo reprodutivo.",
  },
  {
    question: "A caxumba pode influir na fertilidade masculina?",
    answer:
      "Sim. A infecção pode atingir não só a glândula parótida, mas também os testículos, causando até atrofia. A 'orquite' (infecção dos testículos) ocorre em 20% a 30% dos homens, segundo dados reunidos pela Vigilância Epidemiológica do Ministério da Saúde.",
  },
  {
    question: "É possível tratar a infertilidade com o uso de medicamentos?",
    answer:
      "Em alguns casos, sim. Por exemplo: em mulheres que tem Síndrome dos Ovários Policísticos (disfunção na ovulação), a indução da ovulação é feita com medicações.",
  },
  {
    question:
      "Bebês gerados a partir de técnicas de reprodução assistida tendem a nascer prematuros?",
    answer:
      "A prematuridade está relacionada a gestações múltiplas. Portanto, uma gravidez única por meio de fertilização in vitro não tem risco aumentado de prematuridade. Já uma gestação múltipla, seja espontânea ou pós-fertilização, tem mais riscos.",
  },
  {
    question:
      "Quais fatores prejudicam o sucesso dos tratamentos de reprodução assistida?",
    answer:
      "A FIV – fertilização in vitro, por exemplo, apresenta uma chance de sucesso de 50 a 60% por tentativa, em média, representando o dobro da chance mensal de um casal sem problemas para engravidar. Os dois principais fatores que prejudicam o sucesso do tratamento são a quantidade e qualidade dos óvulos e a idade da mulher. Outros fatores relevantes são a baixa quantidade e qualidade de espermatozoides, endometriose grave e associação de múltiplas causas de infertilidade.",
  },
  {
    question: "Quais são os riscos das técnicas de reprodução humana?",
    answer:
      "O principal é a gestação múltipla, pois, como os tratamentos envolvem a indução da ovulação, aumenta-se a chance de múltiplos óvulos e, consequentemente, múltiplos embriões. Outro fator é a Síndrome de Hiperestimulação Ovariana, que consiste em uma resposta exagerada às medicações usadas na indução da ovulação. No entanto, muito se tem feito para amenizar este risco. É válido ressaltar que a chance de gestação múltipla é menor do que a chance de gestação única.",
  },
  {
    question: "O tratamento sempre resulta em gêmeos e trigêmeos?",
    answer:
      "Não. A taxa de gêmeos é de 20%. Trigêmeos ou mais representam apenas 4%.",
  },
  {
    question: "O que é e quando está indicada a inseminação artificial?",
    answer:
      "A inseminação artificial consiste na colocação dos espermatozoides preparados e concentrados no interior da cavidade uterina, no momento da ovulação. Indicada principalmente naqueles casos com alteração masculina leve/moderada, na qual 'preparamos' e concentramos os espermatozoides, colocando-os mais 'próximos' dos óvulos.",
  },
  {
    question: "Qual a chance de gravidez com a inseminação artificial?",
    answer:
      "A taxa de sucesso de uma inseminação artificial depende muito das causas envolvidas. É essencial a permeabilidade, pelo menos de uma das trompas, assim como um número mínimo de espermatozoides. Desta maneira temos uma taxa que varia de 15 a 20%.",
  },
  {
    question: "O que é fertilização in vitro? Qual a taxa de sucesso?",
    answer:
      "A fertilização in vitro (FIV) é o chamado 'bebê de proveta', técnica em que retiramos os óvulos para fertilização em laboratório, sendo formados embriões que após alguns dias são transferidos para o útero. A taxa de sucesso depende de vários fatores, sendo o principal a qualidade dos óvulos, que está diretamente relacionada à idade da paciente. Com uma boa qualidade ovular temos de 55 a 60% de sucesso por tentativa.",
  },
  {
    question:
      "Sexo do bebê: no tratamento de FIV tem como saber o sexo do bebê?",
    answer:
      "Atualmente existe o Diagnóstico Genético Pré-implantacional (PGD), exame genético que analisa os cromossomos do embrião e que pode ser realizado após a fertilização dos óvulos no processo de FIV (fertilização in vitro), com o objetivo de evitar o desenvolvimento e nascimento de bebês com problemas cromossômicos. Na maioria das vezes é indicado para casais que têm um histórico de doenças genéticas hereditárias. Este exame permite identificar o sexo do embrião, no entanto, não é considerado ético fazê-lo somente para este intuito.",
  },
  {
    question: "O que significa a sigla ICSI? Qual a taxa de sucesso?",
    answer:
      "ICSI significa injeção intracitoplasmática de espermatozoide, isto é, injetamos o espermatozoide no interior do óvulo. Desta maneira buscamos aumentar as chances de fertilização. Através dessa manobra conseguimos pular uma etapa muito grande da natureza e elevar nossas taxas de fecundação e de sucesso. As taxas de sucesso da ICSI se assemelham às da FIV.",
  },
  {
    question: "Quando a ICSI está indicada?",
    answer:
      "A ICSI é indicada principalmente em casos de alterações seminais importantes, porém muitas vezes é utilizada para 'garantir' uma melhor fertilização dos óvulos.",
  },
  {
    question: "Quando a utilização de óvulos doados é indicada?",
    answer:
      "Óvulos doados são utilizados por aquelas mulheres que não conseguem produzi-los ou quando a qualidade ovular esteja ruim a ponto de não gerar uma gestação saudável.",
  },
  {
    question: "O que é laparoscopia?",
    answer:
      "Videolaparoscopia ou simplesmente laparoscopia é um procedimento em que se coloca uma 'câmera' no interior da cavidade abdominal e assim avaliam-se órgãos intra-abdominais, como trompas, intestino, útero, etc. Podemos realizar a laparoscopia diagnóstica com a finalidade apenas de observar e realizar um diagnóstico (como endometriose, por exemplo), ou cirúrgica, na qual poderemos realizar algum procedimento (retirada de cisto, endometriose, miomas, etc.). A grande vantagem deste tipo de cirurgia é sua pequena agressão à mulher (pequenos 'furinhos').",
  },
  {
    question: "O que é histeroscopia?",
    answer:
      "A histeroscopia é a colocação de 'câmera' no interior do útero. Da mesma maneira que a laparoscopia, ela pode ser cirúrgica ou diagnóstica. Com este procedimento podemos avaliar o interior do útero e corrigir possíveis alterações.",
  },
  {
    question:
      "Reversão de Vasectomia: qual a técnica utilizada no procedimento?",
    answer:
      "A reversão de vasectomia consiste em um procedimento cirúrgico realizado através de uma pequena abertura da bolsa testicular. Com auxílio de microscópio, é feito o realinhamento do canal (deferente) ligado na vasectomia. A anestesia aplicada é por meio de bloqueio raquidiano e o paciente tem alta no mesmo dia. Este método não submete a mulher a nenhum tratamento. As chances de gravidez múltipla diminuem e as de ocorrer uma concepção naturalmente aumentam.",
  },
  {
    question: "Casais Homoafetivos: como é feito o tratamento?",
    answer:
      "No caso de mulheres homossexuais, não se pode utilizar o sêmen de um familiar ou conhecido de uma das parceiras para fertilizar os óvulos de sua companheira por meio da inseminação artificial ou fertilização in vitro. Os doadores não devem conhecer a identidade dos receptores e vice-versa e, obrigatoriamente, é mantido o anonimato. Em situações especiais, as informações sobre doadores, por motivação de saúde, podem ser fornecidas exclusivamente para médicos, resguardando-se sua identidade civil.\nJá os homens homoafetivos dependem dos óvulos de doadora desconhecida e a gestação do útero que, ao contrário dos óvulos doados, deve ser de parente até segundo grau, como irmã ou mãe. É obrigatório que a chamada 'barriga solidária' tenha a aprovação do Conselho Federal de Medicina. Em outros países é possível pagar a uma mulher pelo ‘aluguel’ do seu útero ou pelos seus óvulos, ao contrário no Brasil, onde essa alternativa é proibida.",
  },
  {
    question: "Barriga de Aluguel: como é feito?",
    answer:
      "Consiste em uma alternativa de tratamento para mulheres que não podem engravidar, por não ter útero ou pela presença de doenças graves que contraindiquem a gravidez, mesmo tendo óvulos capazes de gerar um bebê. Refere-se também à única alternativa de tratamento para casais de homens homoafetivos.\nPara a realização da barriga de aluguel, o casal gera o embrião através de técnica de fertilização in vitro (FIV) que, em seguida, é transferido para o útero de outra mulher, que após nove meses dá a luz. Após o nascimento, o bebê é devolvido aos pais biológicos.\nO termo 'barriga de aluguel', apesar de muito utilizado, é inadequado, pois implica uma relação comercial que não é permitida em nosso país. No Brasil, denominamos 'gestação de substituição' ou 'doação temporária do útero'.\nA resolução do Conselho Federal de Medicina (1.957/10) determina que as doadoras temporárias do útero devam ser parentes de até segundo grau (mãe, filha, irmã, avó ou neta da doadora genética – mãe biológica). Os demais casos devem ser autorizados pelo Conselho Regional de Medicina. A doação temporária do útero não deve ter caráter lucrativo ou comercial.",
  },
  {
    question: "Banco de Sêmen: como é feito?",
    answer:
      "Os doadores de sêmen devem ter entre 18 e 45 anos e não ter doenças infecciosas ou genéticas. O voluntário realiza uma série de exames, como testes no aparelho reprodutor – que detectam doenças infectocontagiosas e DSTs (Doenças Sexualmente Transmissíveis) –, exames de sangue – que apontam possíveis doenças hereditárias – e o espermograma – que define a qualidade de seu esperma.\nApós todos os exames, o voluntário é encaminhado a uma sala reservada, onde realiza a coleta de sêmen. Em seguida ele passa por uma espécie de triagem com um urologista e responde a um questionário referente a doenças e questões pessoais.\nNormalmente os bancos selecionam grupos de homens jovens e com potencial reprodutivo comprovado para realizarem a doação, que deve ser feita sem benefícios financeiros entre as partes e com a assinatura de um termo de doação, que consiste em abrir mão de qualquer direito sobre o sêmen.",
  },
  {
    question:
      "Criopreservação de Esperma e Óvulos: como é feito o tratamento para preservação da fertilidade?",
    answer:
      "Utilizado para a preservação da fertilidade da mulher, o congelamento de óvulos pode ser feito em diversas situações, desde o adiamento da maternidade por motivos pessoais, até em casos de tratamentos oncológicos, que podem causar danos irreversíveis aos ovários.\nOs óvulos habitualmente são obtidos por estimulação hormonal. A estimulação ovariana é realizada em cerca de 10 dias com injeções diárias de gonadotrofinas a partir dos três primeiros dias do ciclo menstrual. Em seguida, os óvulos são coletados e criopreservados (congelados).\nO congelamento de espermatozoides tem as seguintes indicações: pacientes que farão uma vasectomia, que passarão por tratamento oncológico ou que estarão ausentes quando a mulher fizer a fertilização in vitro. A coleta do espermatozoide é feita na clínica por masturbação, biópsia ou microdissecção testicular. O espermatozoide é tratado em laboratório e preservado em nitrogênio líquido, a -196ºC.",
  },
  {
    question:
      "Tratamentos de pacientes de outros Estados: como é feito o acompanhamento?",
    answer:
      "O Centro de Reprodução Humana Santa Joana procura organizar todas as etapas do tratamento de modo a diminuir o desgaste das idas e vindas constantes do paciente a São Paulo. A partir da busca de parceiros nas cidades de origem, estes participam de parte dos tratamentos, seja na realização de exames ou no fornecimento de medicações, de acordo com cada caso.",
  },
];
