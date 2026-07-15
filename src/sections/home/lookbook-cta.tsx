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
    <section className="relative overflow-hidden border-y border-white/8 bg-[#070a12]">
      <div className="absolute inset-0">
        <Image
          src="/images/collection-moonlit-lineup.png"
          alt="Moonlit nightwear collection campaign"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#070a12_0%,rgba(7,10,18,0.84)_44%,rgba(7,10,18,0.48)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#070a12] to-transparent" />
      </div>
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-28 sm:px-6 lg:grid-cols-[0.72fr_0.28fr] lg:items-end lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.32em] text-[#c8b68a]">
            Campaign
          </p>
          <h2 className="editorial-serif mt-5 max-w-2xl text-5xl leading-[1.03] text-balance sm:text-6xl">
            A moonlit wardrobe, composed to shop.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-[#dde6f2]/70">
            Editorial styling meets commerce clarity: silk sets, robes, slips,
            and lounge layers arranged as complete evening rituals.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/lookbook" className="min-w-56 font-semibold">
              Explore lookbook <ArrowRight size={16} />
            </ButtonLink>
            <ButtonLink href="/collections" variant="outline">
              Shop all collections
            </ButtonLink>
          </div>
          <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
            {assurances.map(({ label, Icon }) => (
              <div
                key={label}
                className="flex items-center gap-3 border-y border-white/10 bg-[#070a12]/42 px-4 py-3 text-sm text-[#dde6f2]/70 backdrop-blur"
              >
                <Icon size={17} className="text-[#c8b68a]" />
                {label}
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-px border-y border-white/12 bg-white/10 backdrop-blur-xl">
          {campaignStats.map((item) => (
            <div key={item.label} className="bg-[#070a12]/70 px-6 py-6">
              <p className="text-3xl font-semibold text-[#f7f1e8]">{item.value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[#dde6f2]/48">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
