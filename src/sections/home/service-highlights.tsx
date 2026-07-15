import { Gem, PackageCheck, RefreshCw, ShieldCheck } from "lucide-react";

const highlights = [
  {
    title: "Atelier-grade fabric",
    copy: "Silk satin, lace, and modal chosen for drape, sheen, and nightly comfort.",
    Icon: Gem,
  },
  {
    title: "Inventory reserved",
    copy: "Stock-aware product flow helps clients buy with confidence.",
    Icon: PackageCheck,
  },
  {
    title: "Easy exchanges",
    copy: "Size changes and returns stay simple after delivery.",
    Icon: RefreshCw,
  },
  {
    title: "Secure checkout",
    copy: "A quiet path to purchase with payment and delivery clarity.",
    Icon: ShieldCheck,
  },
];

export function ServiceHighlights() {
  return (
    <section className="border-y border-white/8 bg-[#070a12]">
      <div className="mx-auto grid max-w-7xl gap-px px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {highlights.map(({ title, copy, Icon }) => (
          <div
            key={title}
            className="grid gap-3 border-white/8 py-8 lg:border-l lg:px-7 lg:last:border-r"
          >
            <div className="grid size-11 place-items-center rounded-full border border-[#c8b68a]/22 bg-[#c8b68a]/10 text-[#c8b68a]">
              <Icon size={18} />
            </div>
            <h2 className="text-sm font-medium text-[#f7f1e8]">{title}</h2>
            <p className="text-sm leading-6 text-[#dde6f2]/58">{copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
