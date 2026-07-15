import { BestSellers } from "@/sections/home/best-sellers";
import { CollectionReveal } from "@/sections/home/collection-reveal";
import { FabricStory } from "@/sections/home/fabric-story";
import { HeroSection } from "@/sections/home/HeroSection";
import { LookbookCta } from "@/sections/home/lookbook-cta";
import { ServiceHighlights } from "@/sections/home/service-highlights";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServiceHighlights />
      <FabricStory />
      <CollectionReveal />
      <BestSellers />
      <LookbookCta />
    </main>
  );
}
