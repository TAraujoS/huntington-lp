import { About } from "@/components/About";
import { HeroCarousel } from "@/components/HeroCarousel";
import { InfraSection } from "@/components/InfraSection";
import { MiddleSection } from "@/components/MiddleSection";
import { ProceduresSection } from "@/components/ProceduresSection";
import { TeamSection } from "@/components/TeamSection/TeamSection";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <About />
      <InfraSection />
      <MiddleSection />
      <ProceduresSection />
      <TeamSection />
    </>
  );
}
