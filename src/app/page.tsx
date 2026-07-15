import { BestSellers } from "@/sections/home/best-sellers";
import { CollectionReveal } from "@/sections/home/collection-reveal";
import { FabricStory } from "@/sections/home/fabric-story";
import { HeroSection } from "@/sections/home/HeroSection";
import { LookbookCta } from "@/sections/home/lookbook-cta";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FabricStory />
      <CollectionReveal />
      <BestSellers />
      <LookbookCta />
    </main>
  );
}
