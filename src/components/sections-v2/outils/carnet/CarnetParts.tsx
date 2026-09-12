"use client";

import "../sections.css";
import "./carnet.css";
import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { useReduced } from "@/components/heroes-v2/outils/motion";
import { CARNET as P } from "@/components/heroes-v2/outils/FlowBar";
import { SERIF } from "@/components/heroes-v2/outils/fonts";
import { ThermoScanBadge } from "@/components/thermoscan/ThermoScanPromo";
import { EASE, Reveal, VIEW } from "../kit";

/* ==================================================================
   Pièces du carnet pour /soumission, sous le héros « Carnet » :
   boucle tracée à la plume autour d'un choix, case cochée à la main,
   filet de marge qui continue celui du héros, note ThermoScan en marge,
   bande « la suite » en bas de page. Présentation seulement : aucune
   logique de formulaire ici.
   ================================================================== */

export { P };
export const PEN_EASE: [number, number, number, number] = [0.5, 0, 0.3, 1];

const r = (n: number) => Math.round(n * 10) / 10;
/** Boucle ovale, un peu irrégulière, qui déborde en haut à gauche comme un trait de plume. */
function loop(w: number, h: number) {
  return `M${r(w * 0.14)} ${r(h * 0.16)} C ${r(w * 0.34)} ${r(-h * 0.04)}, ${r(w * 0.8)} ${r(-h * 0.02)}, ${r(w * 0.94)} ${r(h * 0.26)} C ${r(w * 1.02)} ${r(h * 0.46)}, ${r(w * 0.97)} ${r(h * 0.82)}, ${r(w * 0.74)} ${r(h * 0.94)} C ${r(w * 0.52)} ${r(h * 1.04)}, ${r(w * 0.18)} ${r(h * 1.0)}, ${r(w * 0.05)} ${r(h * 0.74)} C ${r(-w * 0.02)} ${r(h * 0.56)}, ${r(w * 0.06)} ${r(h * 0.24)}, ${r(w * 0.26)} ${r(h * 0.1)}`;
}

/** Boucle tracée à la plume autour du libellé choisi (à placer dans un parent en position relative). */
export function PenLoop() {
  const reduce = useReduced();
  const ref = useRef<HTMLSpanElement>(null);
  const [box, setBox] = useState<{ w: number; h: number } | null>(null);
  useLayoutEffect(() => {
    const el = ref.current;
    // Mesure du libellé avant de tracer la boucle (trait régulier quelle que soit la taille).
    if (el) setBox({ w: el.offsetWidth, h: el.offsetHeight });
  }, []);
  return (
    <span ref={ref} aria-hidden="true" className="pointer-events-none absolute -bottom-2 -left-3 -right-3 -top-2">
      {box ? (
        <svg width={box.w} height={box.h} className="absolute inset-0 overflow-visible" fill="none">
          <motion.path d={loop(box.w, box.h)} stroke={P.orange} strokeWidth={1.8} strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={reduce ? { duration: 0 } : { duration: 0.36, ease: PEN_EASE }} />
        </svg>
      ) : null}
    </span>
  );
}

/** Case du carnet : la vraie case (invisible) reçoit le clic et le clavier ; la coche est tracée à la plume. */
export function HandCheckbox({ checked, onChange, children }: { checked: boolean; onChange: (checked: boolean) => void; children: ReactNode }) {
  const reduce = useReduced();
  return (
    <label className="flex cursor-pointer items-start gap-3.5">
      <span className="cn-box">
        <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} />
        {checked ? (
          <svg aria-hidden="true" className="pointer-events-none absolute -right-[6px] -top-[8px] overflow-visible" width="25" height="23" viewBox="0 0 24 22" fill="none">
            <motion.path d="M3 12.5c2.2 1.6 3.6 3.6 5 6.3C11 11.6 15.4 5.6 22 1.5" stroke={P.orange} strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={reduce ? { duration: 0 } : { duration: 0.35, ease: PEN_EASE }} />
          </svg>
        ) : null}
      </span>
      <span className="text-[13px] leading-[1.55]" style={{ color: P.soft }}>
        {children}
      </span>
    </label>
  );
}

/** Suite du double filet de marge du héros : il reprend là où celui-ci s'efface et descend jusqu'au bas de la colonne. */
export function MarginContinue({ className = "" }: { className?: string }) {
  const reduce = useReduced();
  const mask = "linear-gradient(180deg, transparent 0px, #000 120px, #000 calc(100% - 80px), transparent 100%)";
  const line = (d: number, opacity: number, left: number) => (
    <motion.span
      className="absolute inset-y-0 w-px"
      style={{ left, background: P.orange, opacity }}
      // Découpe plutôt qu'échelle : une ligne à hauteur nulle n'est jamais vue par l'observateur de défilement.
      initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
      viewport={{ once: true }}
      transition={reduce ? { duration: 0 } : { duration: 2.2, ease: EASE, delay: d }}
    />
  );
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute w-[5px] ${className}`} style={{ maskImage: mask, WebkitMaskImage: mask }}>
      {line(1.1, 0.8, 0)}
      {line(1.22, 0.45, 4)}
    </div>
  );
}

/** Note ThermoScan en marge du carnet (mêmes mots et même lien que la mise en avant commune). */
export function CarnetScanNote({ context }: { context: string }) {
  const href = `/thermoscan?depuis=${encodeURIComponent(context)}`;
  return (
    <div className="relative py-4" style={{ borderTop: "1px dashed rgba(23,27,30,0.24)", borderBottom: "1px dashed rgba(23,27,30,0.24)" }}>
      <p className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[14.5px] leading-[1.6]" style={{ margin: 0, color: P.soft }}>
        <ThermoScanBadge height={18} />
        <span>
          Vous remplacez une thermopompe&nbsp;?{" "}
          <Link href={href} className="cn-link cn-link-on font-semibold" style={{ color: P.rust }}>
            Scannez son étiquette avec ThermoScan
          </Link>{" "}
          pour joindre sa fiche à votre demande.
        </span>
      </p>
    </div>
  );
}

/** Petit titre du carnet : mot à la plume (italique orange) et mention en capitales. */
export function CarnetKicker({ word, note }: { word: string; note?: string }) {
  return (
    <p className="flex items-baseline gap-3" style={{ margin: 0 }}>
      <span className="text-[20px] leading-none" style={{ fontFamily: SERIF, fontStyle: "italic", color: P.orange }}>
        {word}
      </span>
      {note ? (
        <span className="text-[11.5px] font-medium uppercase" style={{ letterSpacing: "0.2em", color: P.soft }}>
          {note}
        </span>
      ) : null}
    </p>
  );
}

const PROCESS = [
  { num: 1, title: "Analyse du projet", desc: "Nous examinons vos besoins et les spécificités de votre bâtiment." },
  { num: 2, title: "Validation", desc: "Nous validons la faisabilité technique et les meilleures options pour vous." },
  { num: 3, title: "Proposition", desc: "Nous vous présentons une proposition claire et adaptée à votre projet." },
];

/** Bas de page : les trois étapes, reliées par un trait de plume qui se trace au défilement. */
export function ProcessStrip() {
  const reduce = useReduced();
  return (
    <div className="relative px-5 pb-16 pt-12 sm:px-8 lg:px-10 lg:pb-20 lg:pt-14" style={{ borderTop: `1px solid ${P.line}`, background: P.paper }}>
      <div className="relative mx-auto max-w-[1140px]">
        <Reveal y={8}>
          <CarnetKicker word="La suite" note="Trois étapes" />
        </Reveal>
        <div className="relative mt-8">
          {/* Trait de plume entre les trois numéros (ordinateur) */}
          <svg aria-hidden="true" className="absolute left-[34px] right-[8%] top-[18px] hidden h-[14px] overflow-visible md:block" viewBox="0 0 1000 14" preserveAspectRatio="none" fill="none">
            <motion.path
              d="M0 8 C 120 2, 230 13, 340 7 S 560 2, 680 8 S 890 12, 1000 5"
              stroke={P.orange}
              strokeOpacity={0.55}
              strokeWidth={1.4}
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={VIEW}
              transition={reduce ? { duration: 0 } : { duration: 1.8, ease: PEN_EASE, delay: 0.3 }}
            />
          </svg>
          <ol className="relative grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10" style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {PROCESS.map((s, i) => (
              <Reveal as="li" key={s.num} delay={0.15 + i * 0.18} y={12} className="flex items-start gap-4 md:block">
                <span className="relative z-[1] inline-block shrink-0 pr-3 text-[38px] leading-none md:text-[44px]" style={{ fontFamily: SERIF, fontStyle: "italic", color: P.orange, background: P.paper }}>
                  {s.num}.
                </span>
                <span className="block md:mt-4">
                  <span className="block text-[16px] font-semibold" style={{ color: P.ink }}>
                    {s.title}
                  </span>
                  <span className="mt-1 block max-w-[320px] text-[14px] leading-[1.6]" style={{ color: P.soft }}>
                    {s.desc}
                  </span>
                </span>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
