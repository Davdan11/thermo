"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { loadProjectDraft, type ExistingUnit } from "@/lib/project/project-draft";

/* ThermoScan × ThermoMatch : l'appareil actuel lu par ThermoScan (gardé dans le
   brouillon de projet du navigateur) face aux trois choix. Sans scan : une
   invitation à scanner l'étiquette. Aucun chiffre estimé : l'efficacité n'est
   comparée que si les deux HSPF2 sont connus. */

const K = {
  cream: "#F4EFE7",
  mute: "rgba(244,239,231,0.66)",
  faint: "rgba(244,239,231,0.42)",
  line: "rgba(244,239,231,0.14)",
  orange: "#E54B17",
  green: "#5CCB8C",
};
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const NB = String.fromCharCode(160);
const fr = (n: number, d = 0) => n.toLocaleString("fr-CA", { minimumFractionDigits: d, maximumFractionDigits: d });

export type CompareChoice = { key: string; brand: string; series: string; hspf2: number | null };

export function ExistingUnitCompare({ choices }: { choices: CompareChoice[] }) {
  const [unit, setUnit] = useState<ExistingUnit | null | undefined>(undefined);

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
      <section className="mx-auto mt-10 flex max-w-[1320px] flex-wrap items-center justify-between gap-x-8 gap-y-4 rounded-[22px] px-6 py-5 sm:px-8" style={{ border: `1px dashed ${K.line}`, color: K.cream }}>
        <p className="text-[15px]" style={{ margin: 0 }}>
          <span className="font-semibold">Vous remplacez un appareil{NB}?</span> <span style={{ color: K.mute }}>Comparez-le à ces trois choix en photographiant son étiquette.</span>
        </p>
        <Link href="/thermoscan" className="text-[14px] font-semibold underline-offset-4 hover:underline" style={{ color: K.orange }}>
          Scanner mon appareil avec ThermoScan →
        </Link>
      </section>
    );
  }

  const age = unit.year ? new Date().getFullYear() - unit.year : null;
  const scanned = unit.scannedAt ? new Date(unit.scannedAt) : null;

  return (
    <section aria-labelledby="tm-actuel" className="mx-auto mt-16 max-w-[1320px] overflow-hidden rounded-[28px] lg:mt-24" style={{ border: `1px solid ${K.line}`, color: K.cream }}>
      <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
        <div className="px-6 py-10 sm:px-10 lg:px-12 lg:py-12" style={{ background: "rgba(244,239,231,0.04)" }}>
          <p className="text-[12px] font-medium uppercase" style={{ letterSpacing: "0.2em", color: K.mute, margin: 0 }}>
            Votre appareil actuel · ThermoScan
          </p>
          <h2 id="tm-actuel" style={{ fontSize: "clamp(28px, 3vw, 42px)", fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 1.05, margin: "16px 0 0" }}>
            {unit.brand} <span className="block text-[0.6em] font-medium" style={{ color: K.mute, letterSpacing: "-0.01em", marginTop: 6 }}>{unit.model}</span>
          </h2>
          <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 text-[13px]" style={{ margin: "32px 0 0" }}>
            {unit.year ? <Fact k="Mise sur le marché" v={`${unit.year}${age && age > 0 ? ` (${age}${NB}an${age > 1 ? "s" : ""})` : ""}`} /> : null}
            {unit.hspf2 ? <Fact k="HSPF2" v={fr(unit.hspf2, 1)} /> : null}
            {unit.refrigerant ? <Fact k="Fluide frigorigène" v={unit.refrigerant} /> : null}
            {scanned && !Number.isNaN(scanned.getTime()) ? <Fact k="Étiquette lue le" v={scanned.toLocaleDateString("fr-CA", { day: "numeric", month: "long", year: "numeric" })} /> : null}
          </dl>
        </div>
        <ol className="px-6 py-8 sm:px-10 lg:px-12 lg:py-12" style={{ listStyle: "none", margin: 0 }}>
          {choices.map((c, i) => {
            const gain = unit.hspf2 && c.hspf2 ? (c.hspf2 / unit.hspf2 - 1) * 100 : null;
            return (
              <motion.li
                key={c.key}
                className="grid grid-cols-[1fr_auto] items-center gap-4 py-5"
                style={{ borderTop: i ? `1px solid ${K.line}` : undefined }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.15 + i * 0.12 }}
              >
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase" style={{ letterSpacing: "0.16em", color: K.faint, margin: 0 }}>
                    {i === 0 ? "Meilleur choix" : `Choix ${i + 1}`}
                  </p>
                  <p className="truncate text-[17px] font-semibold" style={{ margin: "4px 0 0", letterSpacing: "-0.015em" }}>
                    {c.brand} {c.series}
                  </p>
                  <p className="text-[13px]" style={{ color: K.mute, margin: "2px 0 0" }}>
                    HSPF2 {c.hspf2 ? fr(c.hspf2, 1) : "N/D"}
                    {unit.hspf2 ? ` contre ${fr(unit.hspf2, 1)} aujourd’hui` : ""}
                  </p>
                </div>
                <p className="text-right tabular-nums" style={{ margin: 0, fontSize: 22, fontWeight: 600, letterSpacing: "-0.03em", color: gain != null && gain > 0 ? K.green : K.mute }}>
                  {gain == null ? "—" : `${gain > 0 ? "+" : ""}${fr(gain)}${NB}%`}
                  <span className="block text-[11px] font-medium" style={{ letterSpacing: 0, color: K.faint }}>
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
      <dt style={{ color: K.faint }}>{k}</dt>
      <dd className="font-semibold" style={{ margin: "3px 0 0", fontSize: 15 }}>
        {v}
      </dd>
    </div>
  );
}
