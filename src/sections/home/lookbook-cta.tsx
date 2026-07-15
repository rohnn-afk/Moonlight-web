import Image from "next/image";
import { ArrowRight, Globe2, PackageCheck, ShieldCheck } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";

const campaignStats = [
  { value: "04", label: "Ritual edits" },
  { value: "19", label: "Momme silk" },
  { value: "24h", label: "Dispatch" },
];

const assurances = [
  { label: "Global delivery", Icon: Globe2 },
  { label: "Reserved inventory", Icon: PackageCheck },
  { label: "Secure checkout", Icon: ShieldCheck },
];

export function LookbookCta() {
  return (
    <section className="relative overflow-hidden border-y border-white/8 bg-[#070a12] py-24">
      <div className="absolute inset-0">
        <Image
          src="/images/collection-moonlit-lineup.png"
          alt="Moonlit nightwear collection campaign"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#070a12_0%,rgba(7,10,18,0.88)_46%,rgba(7,10,18,0.54)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#070a12] to-transparent" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 rounded-lg border border-white/12 bg-[#070a12]/72 p-6 shadow-[0_28px_110px_rgba(0,0,0,0.34)] backdrop-blur-xl sm:p-8 lg:grid-cols-[0.68fr_0.32fr] lg:items-end lg:p-10">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-[#c8b68a]">
              Campaign
            </p>
            <h2 className="editorial-serif mt-5 max-w-2xl text-5xl leading-[1.04] text-balance sm:text-6xl">
              A moonlit wardrobe, composed to shop.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#dde6f2]/70">
              Editorial styling meets commerce clarity: silk sets, robes, slips,
              and lounge layers arranged as complete evening rituals.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/lookbook" className="min-w-52 font-semibold">
                Explore lookbook <ArrowRight size={16} />
              </ButtonLink>
              <ButtonLink href="/collections" variant="outline">
                Shop collections
              </ButtonLink>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="grid grid-cols-3 gap-3">
              {campaignStats.map((item) => (
                <div key={item.label} className="rounded-md border border-white/10 bg-white/[0.035] p-4">
                  <p className="text-2xl font-semibold text-[#f7f1e8]">{item.value}</p>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.16em] text-[#dde6f2]/48">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="grid gap-2">
              {assurances.map(({ label, Icon }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.035] px-4 py-3 text-sm text-[#dde6f2]/70"
                >
                  <Icon size={17} className="text-[#c8b68a]" />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
