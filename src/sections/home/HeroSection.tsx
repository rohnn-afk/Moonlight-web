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
          <div className="relative w-full max-w-[620px]">
            <div className="absolute -inset-8 rounded-full bg-[#afc7e8]/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-lg border border-white/12 bg-[#070a12]/58 p-4 shadow-[0_34px_140px_rgba(0,0,0,0.48)] backdrop-blur-xl">
              <div className="grid gap-4 xl:grid-cols-[0.72fr_1fr]">
                <div className="grid content-between gap-4">
                  <div className="rounded-md border border-[#c8b68a]/18 bg-[#c8b68a]/10 p-4">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-[#e8d6aa]">
                      Atelier note
                    </p>
                    <p className="editorial-serif mt-3 text-3xl leading-none text-[#f7f1e8]">
                      Silk with a cool, moonlit hand-feel.
                    </p>
                  </div>
                  <div className="relative aspect-[4/5] overflow-hidden rounded-md border border-white/10">
                    <Image
                      src="/images/fabric-macro-silk.png"
                      alt="Silk and lace material detail"
                      fill
                      sizes="230px"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="overflow-hidden rounded-md border border-white/10 bg-white/[0.035]">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src="/images/product-vignettes.png"
                      alt="Curated luxury nightwear pieces"
                      fill
                      sizes="390px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070a12]/36 via-transparent to-transparent" />
                    <div className="absolute left-4 top-4 rounded-full border border-white/18 bg-[#070a12]/62 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-[#f7f1e8] backdrop-blur">
                      New season
                    </div>
                  </div>
                  <div className="grid gap-4 p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-[0.18em] text-[#dde6f2]/48">
                          Signature edit
                        </p>
                        <p className="mt-1 font-medium text-[#f7f1e8]">
                          Silk sets, robes, and slip dresses
                        </p>
                      </div>
                      <p className="whitespace-nowrap text-sm text-[#f7f1e8]">From $198</p>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center text-xs text-[#dde6f2]/58">
                      {[
                        ["19", "Momme"],
                        ["24h", "Dispatch"],
                        ["4", "Collections"],
                      ].map(([value, label]) => (
                        <div key={label} className="rounded-md border border-white/10 bg-[#070a12]/44 p-3">
                          <p className="text-base font-medium text-[#f7f1e8]">{value}</p>
                          <p className="mt-1 uppercase tracking-[0.12em]">{label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
