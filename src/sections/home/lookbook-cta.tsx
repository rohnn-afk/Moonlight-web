import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";

export function LookbookCta() {
  return (
    <section className="relative overflow-hidden py-28">
      <div className="absolute inset-0">
        <Image
          src="/images/collection-moonlit-lineup.png"
          alt="Moonlit nightwear collection campaign"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#070a12]/76" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="moon-panel max-w-2xl rounded-lg p-8 sm:p-10">
          <p className="text-xs uppercase tracking-[0.32em] text-[#c8b68a]">Campaign</p>
          <h2 className="editorial-serif mt-5 text-5xl leading-none sm:text-6xl">
            A dream state, styled to shop.
          </h2>
          <p className="mt-6 text-sm leading-7 text-[#dde6f2]/68">
            The lookbook turns campaign imagery into shoppable rituals:
            matching robes, silk sets, and lounge layers presented with fashion
            house restraint.
          </p>
          <ButtonLink href="/lookbook" className="mt-8">
            Explore the lookbook <ArrowRight size={16} />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
