"use client";

import { motion } from "motion/react";
import { useReduced } from "@/components/heroes-v2/outils/motion";
import { METER, MONO } from "./tokens";

/* Sélecteur rotatif du compteur : l'aiguille passe du combustible à la thermopompe. Décoratif. */
export function Knob({ from, to }: { from: string; to: string }) {
  const reduce = useReduced();
  const { ink: INK, sun: SUN, face: FACE } = METER;
  return (
    <div aria-hidden="true" className="relative mx-auto h-[216px] w-[260px]">
      <span className="absolute bottom-0 left-0 text-[10.5px] font-semibold uppercase" style={{ fontFamily: MONO, letterSpacing: "0.14em" }}>
        {from}
      </span>
      <span className="absolute bottom-0 right-0 text-[10.5px] font-semibold uppercase" style={{ fontFamily: MONO, letterSpacing: "0.14em" }}>
        {to}
      </span>
      <svg viewBox="0 0 240 200" className="absolute left-[10px] top-0 h-[200px] w-[240px]" fill="none">
        {/* Graduations en arc */}
        {Array.from({ length: 13 }, (_, k) => {
          const a = (-150 + k * 25) * (Math.PI / 180);
          const r1 = 82;
          const r2 = k % 3 === 0 ? 70 : 75;
          return <line key={k} x1={(120 + r1 * Math.sin(a)).toFixed(1)} y1={(120 - r1 * Math.cos(a)).toFixed(1)} x2={(120 + r2 * Math.sin(a)).toFixed(1)} y2={(120 - r2 * Math.cos(a)).toFixed(1)} stroke={INK} strokeWidth={k % 3 === 0 ? 2.4 : 1.4} opacity={k % 3 === 0 ? 1 : 0.45} />;
        })}
        <circle cx="120" cy="120" r="58" fill={INK} />
        <circle cx="120" cy="120" r="50" fill={SUN} stroke={INK} strokeWidth="2" />
        <circle cx="120" cy="120" r="7" fill={INK} />
      </svg>
      {/* Aiguille */}
      <motion.div
        className="absolute left-1/2 top-[120px] h-0 w-0"
        initial={{ rotate: -125 }}
        whileInView={{ rotate: 125 }}
        viewport={{ once: true, margin: "0px 0px -15% 0px" }}
        transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 40, damping: 9, delay: 0.4 }}
      >
        <span className="absolute left-[-3px] top-[-46px] block h-[46px] w-[6px] rounded-full" style={{ background: INK }} />
        <span className="absolute left-[-2px] top-[-44px] block h-[14px] w-[4px] rounded-full" style={{ background: FACE }} />
      </motion.div>
    </div>
  );
}
