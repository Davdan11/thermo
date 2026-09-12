"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { HC, HERO_EASE, HeroFade } from "@/components/hero/HeroKit";
import { CountUp } from "@/components/home/premium/shared";

/* ==================================================================
   Repères du héros dans un panneau de verre dépoli (pages outils).
   Valeur numérique : elle défile jusqu'à la vraie valeur. Valeur texte
   (« 2011 à 2026 ») : affichée telle quelle. Sur mobile, une ligne par
   repère (valeur à gauche, libellé à droite) : pas de bloc qui se replie
   avec des filets orphelins.
   ================================================================== */

export type ToolStat = { value: number | string; label: string };

export function ToolStats({ items, delay = 1 }: { items: ToolStat[]; delay?: number }) {
  const reduce = useReducedMotion();
  const [play, setPlay] = useState(false);
  useEffect(() => {
    const t = window.setTimeout(() => setPlay(true), delay * 1000 + 150);
    return () => window.clearTimeout(t);
  }, [delay]);
  if (!items.length) return null;
  return (
    <HeroFade delay={delay} className="mt-10 max-w-full sm:inline-flex">
      <dl
        className="relative grid grid-cols-1 overflow-hidden rounded-[22px] sm:grid-flow-col sm:grid-cols-none sm:auto-cols-auto"
        style={{ margin: 0, background: "rgba(16,34,45,0.55)", border: `1px solid ${HC.line}`, backdropFilter: "blur(16px) saturate(130%)", WebkitBackdropFilter: "blur(16px) saturate(130%)" }}
      >
        <motion.span aria-hidden="true" className="absolute left-0 top-0 h-[2px] w-full origin-left" style={{ background: HC.orange }} initial={reduce ? false : { scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.4, ease: HERO_EASE, delay: delay + 0.2 }} />
        {items.map((s, i) => (
          <div
            key={s.label}
            className={`flex items-baseline justify-between gap-4 px-5 py-3.5 sm:flex-col sm:items-start sm:justify-start sm:gap-2 sm:px-6 sm:py-5 ${i ? "border-t sm:border-l sm:border-t-0" : ""}`}
            style={{ borderColor: HC.line }}
          >
            <dt className="order-2 text-right text-[11px] font-medium uppercase leading-snug sm:text-left sm:text-[11.5px]" style={{ color: HC.faint, letterSpacing: "0.12em" }}>
              {s.label}
            </dt>
            <dd className="order-1 whitespace-nowrap" style={{ fontSize: "clamp(22px, 2.3vw, 34px)", fontWeight: 600, letterSpacing: "-0.045em", lineHeight: 1, margin: 0 }}>
              {typeof s.value === "number" ? <CountUp value={s.value} play={play} /> : s.value}
            </dd>
          </div>
        ))}
      </dl>
    </HeroFade>
  );
}
