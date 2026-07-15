import Image from "next/image";
import { HeroCopy } from "@/sections/home/HeroCopy";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#070a12] pt-16">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-moonlit-room.png"
          alt="Premium moonlit nightwear boutique"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#070a12_0%,rgba(7,10,18,0.88)_38%,rgba(7,10,18,0.36)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#070a12] to-transparent" />
      </div>
      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.88fr_1.12fr] lg:px-8">
        <HeroCopy />
        <div className="hidden min-h-[620px] items-end justify-end lg:flex">
          <div className="grid w-full max-w-xl grid-cols-[0.72fr_1fr] gap-4">
            <div className="mb-16 overflow-hidden rounded-lg border border-white/12 bg-white/[0.04] p-3 backdrop-blur">
              <div className="relative aspect-[3/4] overflow-hidden rounded-md">
                <Image
                  src="/images/fabric-macro-silk.png"
                  alt="Silk and lace material detail"
                  fill
                  sizes="260px"
                  className="object-cover"
                />
              </div>
              <p className="mt-3 text-xs uppercase tracking-[0.18em] text-[#dde6f2]/58">
                19 momme silk
              </p>
            </div>
            <div className="overflow-hidden rounded-lg border border-white/12 bg-white/[0.04] p-3 backdrop-blur">
              <div className="relative aspect-[4/5] overflow-hidden rounded-md">
                <Image
                  src="/images/product-vignettes.png"
                  alt="Curated luxury nightwear pieces"
                  fill
                  sizes="380px"
                  className="object-cover"
                />
              </div>
              <div className="flex items-center justify-between pt-4 text-sm">
                <span className="text-[#dde6f2]/64">Signature edit</span>
                <span className="text-[#f7f1e8]">From $198</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
