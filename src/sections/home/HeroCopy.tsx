"use client";

import { ArrowRight, ShieldCheck, Sparkles, Truck } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { ButtonLink } from "@/components/ui/button";

export function HeroCopy() {
  const prefersReducedMotion = useReducedMotion();

  const reveal = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 18 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="relative z-20 max-w-[680px]"
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: prefersReducedMotion ? 0 : 0.16, delayChildren: 0.18 }}
    >
      <motion.p
        variants={reveal}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="inline-flex items-center rounded-full border border-[#c8b68a]/24 bg-[#c8b68a]/10 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-[#e8d6aa]"
      >
        Premium nightwear atelier
      </motion.p>
      <motion.h1
        variants={reveal}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="editorial-serif mt-7 max-w-3xl text-5xl font-normal leading-[1.03] text-balance sm:text-6xl lg:text-[82px]"
      >
        The private atelier for silk after dark.
      </motion.h1>
      <motion.p
        variants={reveal}
        transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
        className="mt-7 max-w-xl text-base leading-8 text-[#dde6f2]/76 sm:text-lg"
      >
        Silk sets, robes, and sleep dresses composed with couture restraint,
        precise stock control, and a checkout flow built for confident buying.
      </motion.p>
      <motion.div
        variants={reveal}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="mt-9 flex flex-col gap-3 sm:flex-row"
      >
        <ButtonLink href="/collections/silk-sets" className="min-w-56 font-semibold">
          Shop collection <ArrowRight size={16} />
        </ButtonLink>
        <ButtonLink href="/lookbook" variant="outline">
          View lookbook
        </ButtonLink>
      </motion.div>
      <motion.div
        variants={reveal}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="mt-10 grid max-w-xl grid-cols-3 gap-3 text-sm text-[#dde6f2]/64"
      >
        {[
          { value: "4.9/5", label: "Client rating", Icon: ShieldCheck },
          { value: "24h", label: "Dispatch", Icon: Truck },
          { value: "Silk", label: "Material focus", Icon: Sparkles },
        ].map(({ value, label, Icon }) => (
          <div key={label} className="rounded-md border border-white/12 bg-[#070a12]/52 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur">
            <div className="flex items-center justify-between gap-3">
              <p className="text-lg font-medium text-[#f7f1e8]">{value}</p>
              <Icon size={16} className="text-[#c8b68a]" />
            </div>
            <p className="mt-1 text-[11px] uppercase tracking-[0.14em]">{label}</p>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
