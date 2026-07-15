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
          <div className="relative h-[650px] w-full max-w-[680px]">
            <div className="absolute left-16 top-8 h-[590px] w-px bg-gradient-to-b from-transparent via-[#c8b68a]/38 to-transparent" />
            <div className="absolute left-0 top-32 max-w-[220px] border-l border-[#c8b68a]/32 pl-5">
              <p className="text-[11px] uppercase tracking-[0.28em] text-[#e8d6aa]">
                Moon room edit
              </p>
              <p className="editorial-serif mt-4 text-4xl leading-[0.95] text-[#f7f1e8]">
                Drape, sheen, and silence.
              </p>
              <p className="mt-5 text-sm leading-6 text-[#dde6f2]/58">
                A calm composition of silk sets, robes, slips, and lounge layers.
              </p>
            </div>

            <div className="absolute right-0 top-7 h-[560px] w-[460px] overflow-hidden rounded-lg border border-white/12 bg-[#070a12]/32 shadow-[0_34px_130px_rgba(0,0,0,0.46)] [clip-path:polygon(7%_0,100%_0,93%_100%,0_100%)]">
              <Image
                src="/images/product-vignettes.png"
                alt="Curated luxury nightwear pieces"
                fill
                sizes="460px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,10,18,0.08)_0%,rgba(7,10,18,0.05)_46%,rgba(7,10,18,0.56)_100%)]" />
              <div className="absolute left-12 top-6 border-b border-[#c8b68a]/45 pb-2 text-[11px] uppercase tracking-[0.22em] text-[#f7f1e8]">
                New season
              </div>
              <div className="absolute bottom-9 left-12 right-10">
                <div className="flex items-end justify-between gap-8">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#dde6f2]/54">
                      Signature edit
                    </p>
                    <p className="mt-2 max-w-[230px] text-lg font-medium leading-6 text-[#f7f1e8]">
                      Silk sets, robes, and slip dresses
                    </p>
                  </div>
                  <p className="whitespace-nowrap text-sm text-[#f7f1e8]">From $198</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-16 left-[170px] h-[245px] w-[315px] overflow-hidden rounded-lg border border-white/14 bg-[#070a12]/42 shadow-[0_26px_90px_rgba(0,0,0,0.4)] [clip-path:polygon(0_9%,100%_0,91%_100%,7%_94%)]">
              <Image
                src="/images/fabric-macro-silk.png"
                alt="Silk and lace material detail"
                fill
                sizes="315px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#070a12]/24 via-transparent to-[#f7f1e8]/8" />
            </div>

            <div className="absolute bottom-0 right-8 grid w-[430px] grid-cols-3 border-y border-white/12 bg-[#070a12]/54 text-center shadow-[0_18px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl">
              {[
                ["19", "Momme silk"],
                ["24h", "Dispatch"],
                ["4", "Collections"],
              ].map(([value, label]) => (
                <div key={label} className="border-r border-white/10 px-4 py-4 last:border-r-0">
                  <p className="text-xl font-medium text-[#f7f1e8]">{value}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-[#dde6f2]/50">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
