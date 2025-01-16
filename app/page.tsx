import { About } from "@/components/About";
import { HeroCarousel } from "@/components/HeroCarousel";

export default function Home() {
  return (
    <div className="h-full">
      <HeroCarousel />
      <About />
    </div>
  );
}
