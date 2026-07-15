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
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#070a12_0%,rgba(7,10,18,0.9)_34%,rgba(7,10,18,0.38)_70%,rgba(7,10,18,0.2)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_24%,rgba(200,182,138,0.12),transparent_22rem),radial-gradient(circle_at_12%_80%,rgba(175,199,232,0.12),transparent_26rem)]" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#070a12] to-transparent" />
      </div>
      <div className="absolute left-0 top-16 hidden h-px w-full bg-gradient-to-r from-transparent via-[#c8b68a]/30 to-transparent lg:block" />
      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:px-8">
        <HeroCopy />
        <div className="hidden min-h-[640px] items-center justify-end lg:flex">
          <div className="relative w-full max-w-[610px]">
            <div className="absolute -left-7 top-12 z-20 w-56 overflow-hidden rounded-lg border border-white/12 bg-[#f7f1e8]/8 p-3 shadow-2xl backdrop-blur-xl">
              <div className="relative aspect-[4/5] overflow-hidden rounded-md">
                <Image
                  src="/images/fabric-macro-silk.png"
                  alt="Silk and lace material detail"
                  fill
                  sizes="260px"
                  className="object-cover"
                />
              </div>
              <div className="mt-3 flex items-center justify-between gap-3">
                <p className="text-xs uppercase tracking-[0.18em] text-[#dde6f2]/58">
                  Silk grade
                </p>
                <p className="text-sm text-[#f7f1e8]">19 momme</p>
              </div>
            </div>
            <div className="ml-auto w-[430px] overflow-hidden rounded-lg border border-white/12 bg-[#f7f1e8]/8 p-3 shadow-[0_30px_120px_rgba(0,0,0,0.42)] backdrop-blur-xl">
              <div className="relative aspect-[4/5] overflow-hidden rounded-md">
                <Image
                  src="/images/product-vignettes.png"
                  alt="Curated luxury nightwear pieces"
                  fill
                  sizes="380px"
                  className="object-cover"
                />
                <div className="absolute left-4 top-4 rounded-full border border-white/18 bg-[#070a12]/58 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-[#f7f1e8] backdrop-blur">
                  New season
                </div>
              </div>
              <div className="grid gap-3 px-1 pt-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#dde6f2]/64">Signature edit</span>
                  <span className="text-[#f7f1e8]">From $198</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[72%] rounded-full bg-[#c8b68a]" />
                </div>
                <p className="text-xs uppercase tracking-[0.16em] text-[#dde6f2]/48">
                  72% of launch stock allocated
                </p>
              </div>
            </div>
            <div className="absolute -bottom-8 right-8 rounded-lg border border-[#c8b68a]/22 bg-[#070a12]/72 px-5 py-4 shadow-2xl backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.18em] text-[#c8b68a]">
                Boutique standard
              </p>
              <p className="mt-2 text-sm text-[#dde6f2]/70">
                Gift wrap, exchanges, and stock-reserved checkout.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
