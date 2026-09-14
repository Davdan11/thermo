"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { loadProjectDraft, type ExistingUnit } from "@/lib/project/project-draft";
import { useReduced } from "@/components/heroes-v2/outils/motion";
import { MONO, SERIF } from "@/components/heroes-v2/outils/font-stacks";
import { Scribble, WriteIn, useSeen } from "./Corrige";
import { K, NB, fr } from "./results-model";

/* ThermoScan × ThermoMatch : l'appareil actuel lu par ThermoScan (gardé dans le
   brouillon de projet du navigateur) face aux trois choix, dans le corrigé. Sans
   scan : une invitation à scanner l'étiquette. Aucun chiffre estimé : l'efficacité
   n'est comparée que si les deux HSPF2 sont connus. */

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export type CompareChoice = { key: string; brand: string; series: string; hspf2: number | null };

export function ExistingUnitCompare({ choices }: { choices: CompareChoice[] }) {
  const [unit, setUnit] = useState<ExistingUnit | null | undefined>(undefined);
  const reduce = useReduced();
  const ref = useRef<HTMLElement>(null);
  const play = useSeen(ref);

  useEffect(() => {
    let found: ExistingUnit | null = null;
    try {
      found = loadProjectDraft()?.existingUnit ?? null;
    } catch {
      found = null;
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect -- lecture unique du brouillon local (navigateur seulement)
    setUnit(found);
  }, []);

  if (unit === undefined) return null;

  if (!unit) {
    return (
      <section ref={ref} className="mt-14 flex flex-wrap items-center justify-between gap-x-8 gap-y-3 py-5" style={{ borderTop: `1px dashed ${K.rule}`, borderBottom: `1px dashed ${K.rule}`, color: K.ink }}>
        <p className="text-[15px]" style={{ margin: 0 }}>
          <span className="font-semibold">Vous remplacez un appareil{NB}?</span> <span style={{ color: K.soft }}>Comparez-le à ces trois choix en photographiant son étiquette.</span>
        </p>
        <Link href="/thermoscan" className="ou-link text-[14px] font-semibold" style={{ color: K.rust, textDecoration: "none" }}>
          Scanner mon appareil avec ThermoScan →
        </Link>
      </section>
    );
  }

  const age = unit.year ? new Date().getFullYear() - unit.year : null;
  const scanned = unit.scannedAt ? new Date(unit.scannedAt) : null;

  return (
    <section ref={ref} aria-labelledby="tm-actuel" className="mt-20 lg:mt-28" style={{ color: K.ink }}>
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="min-w-0">
          <p className="text-[20px] leading-none" style={{ fontFamily: SERIF, fontStyle: "italic", color: K.rust, margin: 0 }}>
            <WriteIn play={play}>Votre appareil actuel · ThermoScan</WriteIn>
          </p>
          <h2 id="tm-actuel" style={{ fontSize: "clamp(28px, 3vw, 42px)", fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 1.05, margin: "18px 0 0" }}>
            {unit.brand}{" "}
            <span className="block text-[0.5em] font-normal" style={{ fontFamily: MONO, color: K.soft, letterSpacing: "-0.01em", marginTop: 8 }}>
              {unit.model}
            </span>
          </h2>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-5 text-[13px]" style={{ margin: "28px 0 0", borderTop: `1px solid ${K.ink}`, paddingTop: 18 }}>
            {unit.year ? <Fact k="Mise sur le marché" v={`${unit.year}${age && age > 0 ? ` (${age}${NB}an${age > 1 ? "s" : ""})` : ""}`} /> : null}
            {unit.hspf2 ? <Fact k="HSPF2" v={fr(unit.hspf2, 1)} /> : null}
            {unit.refrigerant ? <Fact k="Fluide frigorigène" v={unit.refrigerant} /> : null}
            {scanned && !Number.isNaN(scanned.getTime()) ? <Fact k="Étiquette lue le" v={scanned.toLocaleDateString("fr-CA", { day: "numeric", month: "long", year: "numeric" })} /> : null}
          </dl>
        </div>
        <ol style={{ listStyle: "none", margin: 0, padding: 0, borderTop: `1px solid ${K.ink}` }}>
          {choices.map((c, i) => {
            const gain = unit.hspf2 && c.hspf2 ? (c.hspf2 / unit.hspf2 - 1) * 100 : null;
            const shown = gain == null ? "—" : `${gain > 0 ? "+" : ""}${fr(gain)}${NB}%`;
            return (
              <motion.li
                key={c.key}
                className="grid grid-cols-[1fr_auto] items-center gap-4 py-5"
                style={{ borderBottom: `1px solid ${K.line}` }}
                initial={reduce ? false : { opacity: 0, x: 18 }}
                animate={play ? { opacity: 1, x: 0 } : undefined}
                transition={{ duration: 0.8, ease: EASE, delay: 0.15 + i * 0.12 }}
              >
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase" style={{ letterSpacing: "0.16em", color: i === 0 ? K.rust : K.soft, margin: 0 }}>
                    {i === 0 ? "Meilleur choix" : `Choix ${i + 1}`}
                  </p>
                  <p className="truncate text-[17px] font-semibold" style={{ margin: "4px 0 0", letterSpacing: "-0.015em" }}>
                    {c.brand} {c.series}
                  </p>
                  <p className="text-[13px]" style={{ color: K.soft, margin: "2px 0 0" }}>
                    HSPF2 {c.hspf2 ? fr(c.hspf2, 1) : "N/D"}
                    {unit.hspf2 ? ` contre ${fr(unit.hspf2, 1)} aujourd’hui` : ""}
                  </p>
                </div>
                <p className="text-right" style={{ margin: 0 }}>
                  <span style={{ fontFamily: MONO, fontSize: 22, fontWeight: 500, letterSpacing: "-0.03em", color: gain != null && gain > 0 ? K.ink : K.soft }}>
                    {gain != null && gain > 0 ? (
                      <Scribble play={play} delay={0.6 + i * 0.12}>
                        {shown}
                      </Scribble>
                    ) : (
                      shown
                    )}
                  </span>
                  <span className="block text-[11px] font-medium" style={{ letterSpacing: 0, color: K.soft, marginTop: 4 }}>
                    {gain == null ? "HSPF2 à comparer" : "d’efficacité en chauffage"}
                  </span>
                </p>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

function Fact({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <dt style={{ color: K.soft }}>{k}</dt>
      <dd className="font-semibold" style={{ margin: "3px 0 0", fontSize: 15 }}>
        {v}
      </dd>
    </div>
  );
}
