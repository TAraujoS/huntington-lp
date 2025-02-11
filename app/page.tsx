import { About } from "@/components/About";
import { HeroCarousel } from "@/components/HeroCarousel";
import { InfertilitySection } from "@/components/InfertilitySection";
import { ProceduresSection } from "@/components/ProceduresSection";
import { TeamSection } from "@/components/TeamSection/TeamSection";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <About />
      <InfertilitySection />
      <ProceduresSection />
      <TeamSection />
    </>
  );
}
