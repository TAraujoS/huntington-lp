import { About } from "@/components/About";
import { HeroCarousel } from "@/components/HeroCarousel";
import { InfraSection } from "@/components/InfraSection";

export default function Home() {
  return (
    <div className="h-full">
      <HeroCarousel />
      <About />
      <InfraSection />
    </div>
  );
}
