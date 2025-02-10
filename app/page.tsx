import { About } from "@/components/About";
import { HeroCarousel } from "@/components/HeroCarousel";
import { InfertilitySection } from "@/components/InfertilitySection";
import { ProceduresSection } from "@/components/ProceduresSection";
import { TeamSection } from "@/components/TeamSection/TeamSection";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <h1 className="w-full mx-auto text-center text-xl lg:text-2xl font-semibold text-gray-neutral pt-6 bg-blue-normal bg-opacity-10 lg:bg-transparent">
        Infertilidade Feminina: A ProFIV Tem a Solução Para Você!
      </h1>
      <About />
      <InfertilitySection />
      <ProceduresSection />
      <TeamSection />
    </>
  );
}
