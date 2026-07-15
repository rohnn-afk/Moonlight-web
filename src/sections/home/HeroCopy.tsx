"use client";

import { ArrowRight } from "lucide-react";
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
      className="relative z-20 max-w-2xl"
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: prefersReducedMotion ? 0 : 0.16, delayChildren: 0.18 }}
    >
      <motion.p
        variants={reveal}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="text-xs uppercase tracking-[0.34em] text-[#c8b68a]"
      >
        Premium nightwear atelier
      </motion.p>
      <motion.h1
        variants={reveal}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="editorial-serif mt-6 max-w-3xl text-6xl font-medium leading-[0.92] text-balance sm:text-7xl lg:text-8xl"
      >
        Luxury sleepwear, tailored for the after-hours ritual.
      </motion.h1>
      <motion.p
        variants={reveal}
        transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
        className="mt-7 max-w-xl text-base leading-8 text-[#dde6f2]/72 sm:text-lg"
      >
        Silk sets, robes, and sleep dresses presented with boutique polish,
        precise inventory, and a calmer path from discovery to checkout.
      </motion.p>
      <motion.div
        variants={reveal}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="mt-9 flex flex-col gap-3 sm:flex-row"
      >
        <ButtonLink href="/collections/silk-sets">
          Shop the collection <ArrowRight size={16} />
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
          ["4.9/5", "Client rating"],
          ["24h", "Dispatch window"],
          ["100%", "Silk focus"],
        ].map(([value, label]) => (
          <div key={label} className="rounded-md border border-white/12 bg-white/[0.035] p-4">
            <p className="text-lg font-medium text-[#f7f1e8]">{value}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.14em]">{label}</p>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
