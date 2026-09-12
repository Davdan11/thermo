"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionStyle } from "motion/react";
import { useReduced } from "@/components/heroes-v2/outils/motion";
import { MONO } from "@/components/heroes-v2/marques/shared";

const NAVY = "#0F2233";
const ORANGE = "#E0592A";
const TOP = 10;
const BOTTOM = -25;
/** Abscisse de la tige de l’échelle (px). Graduations et chiffres à droite, curseur et lecture à gauche. */
const SPINE = 112;
const pos = (t: number) => `${(((TOP - t) / (TOP - BOTTOM)) * 100).toFixed(3)}%`;
const DEGREES = Array.from({ length: TOP - BOTTOM + 1 }, (_, i) => TOP - i);

/**
 * Thermomètre-règle vertical (+10 → -25 °C) : pendant le défilement, le curseur orange descend
 * de 8 °C (capacité nominale) à -15 °C (capacité certifiée). Décoratif : le texte voisin dit tout.
 */
export function ColdRuler() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReduced();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 55%"] });
  const temp = useTransform(scrollYProgress, [0, 1], [8, -15], { clamp: true });
  const top = useTransform(temp, (t) => pos(t));
  const readout = useTransform(temp, (t) => `${Math.round(t)} °C`);

  return (
    <div ref={ref} aria-hidden="true" className="relative mx-auto h-[420px] w-full max-w-[440px] select-none sm:h-[480px]">
      {/* Échelle */}
      <span className="absolute inset-y-0 w-px" style={{ left: SPINE, background: NAVY, opacity: 0.55 }} />
      {DEGREES.map((t) => {
        const major = t % 5 === 0;
        return <span key={t} className="absolute h-px" style={{ left: SPINE, top: pos(t), width: major ? 22 : 10, background: NAVY, opacity: major ? 0.75 : 0.35 }} />;
      })}
      {DEGREES.filter((t) => t % 5 === 0).map((t) => (
        <span key={`l${t}`} className="absolute -translate-y-1/2 text-[11px] tabular-nums" style={{ left: SPINE + 30, top: pos(t), fontFamily: MONO, color: NAVY, opacity: 0.75 }}>
          {t} °C
        </span>
      ))}

      {/* Les deux températures du texte */}
      <span className="absolute right-0 -translate-y-1/2" style={{ left: SPINE + 96, top: pos(8) }}>
        <span className="block text-[11px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.12em", color: NAVY, opacity: 0.7 }}>
          8 °C
        </span>
        <span className="block text-[14px] font-semibold leading-snug" style={{ color: NAVY }}>
          Capacité nominale
        </span>
      </span>
      <span className="absolute right-0 -translate-y-1/2" style={{ left: SPINE + 96, top: pos(-15) }}>
        <span className="block text-[11px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.12em", color: "#B4441B" }}>
          -15 °C
        </span>
        <span className="block text-[14px] font-semibold leading-snug" style={{ color: NAVY }}>
          Capacité certifiée, celle qui compte
        </span>
      </span>
      <span className="absolute h-[2px] -translate-y-1/2" style={{ left: SPINE, width: 22, top: pos(-15), background: ORANGE }} />

      {/* Curseur qui descend avec le défilement ; sa lecture glisse le long de l’échelle, à gauche */}
      <motion.span className="absolute left-0 block" style={{ top: reduce ? pos(-15) : top, width: SPINE + 26 } as MotionStyle}>
        <span className="absolute top-0 block h-[3px] -translate-y-1/2" style={{ left: SPINE - 40, right: 0, background: ORANGE }} />
        <motion.span
          className="absolute left-0 top-0 block -translate-y-1/2 whitespace-nowrap px-2 py-1 text-[11px] tabular-nums"
          style={{ fontFamily: MONO, background: NAVY, color: "#F4F7F8", minWidth: 60, textAlign: "center" }}
        >
          {reduce ? "-15 °C" : readout}
        </motion.span>
      </motion.span>
    </div>
  );
}
