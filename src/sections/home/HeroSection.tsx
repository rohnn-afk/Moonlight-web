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
          <div className="relative h-[650px] w-full max-w-[660px]">
            <div className="absolute left-4 top-0 h-[630px] w-[560px] rounded-full border border-[#c8b68a]/16" />
            <div className="absolute left-24 top-14 h-[510px] w-[410px] rounded-full border border-[#dde6f2]/10" />
            <div className="absolute right-6 top-5 h-[590px] w-[430px] overflow-hidden rounded-t-[240px] rounded-b-[36px] border border-white/14 bg-[#070a12]/40 shadow-[0_34px_130px_rgba(0,0,0,0.46)]">
              <Image
                src="/images/atelier-showcase.png"
                alt="Curated luxury nightwear pieces"
                fill
                sizes="430px"
                className="object-cover object-[54%_44%]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,10,18,0)_0%,rgba(7,10,18,0.08)_46%,rgba(7,10,18,0.72)_100%)]" />
              <div className="absolute bottom-8 right-8 border-t border-[#c8b68a]/60 pt-3">
                <p className="whitespace-nowrap text-sm font-medium text-[#f7f1e8]">
                  From $198
                </p>
              </div>
            </div>

            <div className="absolute left-4 top-28 max-w-[235px]">
              <p className="text-[11px] uppercase tracking-[0.28em] text-[#e8d6aa]">
                Atelier calm
              </p>
              <p className="editorial-serif mt-4 text-4xl leading-[0.95] text-[#f7f1e8]">
                Drape, sheen, silence.
              </p>
              <p className="mt-5 text-sm leading-6 text-[#dde6f2]/60">
                A softer product stage, built to slow the eye before the buy.
              </p>
            </div>

            <div className="absolute bottom-24 left-0 h-[210px] w-[280px] overflow-hidden rounded-tl-[92px] rounded-br-[92px] border border-white/14 bg-[#070a12]/44 shadow-[0_26px_90px_rgba(0,0,0,0.38)]">
              <Image
                src="/images/fabric-macro-silk.png"
                alt="Silk and lace material detail"
                fill
                sizes="280px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#070a12]/20 via-transparent to-[#f7f1e8]/10" />
            </div>

            <div className="absolute bottom-5 left-20 flex items-center gap-4 border-y border-white/12 bg-[#070a12]/70 px-6 py-4 shadow-[0_18px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl">
              <div>
                <p className="text-xl font-medium text-[#f7f1e8]">19</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-[#dde6f2]/50">
                  Momme silk
                </p>
              </div>
              <div className="h-10 w-px bg-white/12" />
              <div>
                <p className="text-xl font-medium text-[#f7f1e8]">24h</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-[#dde6f2]/50">
                  Dispatch
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
