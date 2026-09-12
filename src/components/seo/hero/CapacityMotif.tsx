"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Caption, Count, EASE, K, Parallax, fr, kBtu } from "./parts";
import { useReduced } from "@/components/heroes-v2/outils/motion";

/* ==================================================================
   Classe de capacité : le chiffre nominal (mesuré à 8 °C) face à la
   plage réellement certifiée à -15 °C. La plage s'ouvre depuis le
   nominal ; une aiguille la balaie lentement. Dessous, les autres
   calibres, en liens.
   ================================================================== */

export function CapacityMotif({ btu, h5Min, h5Max, certified, classes, areaMin, areaMax }: { btu: number; h5Min: number | null; h5Max: number | null; certified: number; classes: number[]; areaMin: number; areaMax: number }) {
  const reduce = useReduced();
  const hasRange = h5Min !== null && h5Max !== null;
  const top = Math.ceil((Math.max(btu, h5Max ?? 0) * 1.12) / 2000) * 2000;
  const pos = (v: number) => (v / top) * 100;

  return (
    <Parallax distance={-45} className="lg:ml-auto lg:max-w-[540px]">
      <Caption>Classe de capacité</Caption>
      <motion.p className="mt-3 flex flex-wrap items-baseline gap-x-4" style={{ margin: "12px 0 0" }} initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: EASE, delay: 0.4 }}>
        <span style={{ fontSize: "clamp(60px, 6.6vw, 104px)", fontWeight: 600, letterSpacing: "-0.055em", lineHeight: 1 }}>
          <Count value={btu} delay={0.6} duration={1.8} />
        </span>
        <span className="text-[14px] leading-snug" style={{ color: K.mute }}>
          BTU nominaux
          <br />
          mesurés à 8&nbsp;°C
        </span>
      </motion.p>

      {hasRange ? (
        <motion.div className="mt-9" initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.9 }}>
          <div className="relative h-[46px]">
            <span className="absolute inset-x-0 top-[30px] h-px" style={{ background: K.line }} />
            {/* Nominal */}
            <span className="absolute top-0 flex -translate-x-1/2 flex-col items-center" style={{ left: `${pos(btu)}%` }}>
              <span className="text-[10.5px] font-medium uppercase" style={{ color: K.cream, letterSpacing: "0.14em" }}>Nominal</span>
              <span className="mt-1 h-[26px] w-[2px]" style={{ background: K.cream }} />
            </span>
            {/* Plage certifiée à -15 °C */}
            <motion.span
              className="absolute top-[25px] h-[11px] rounded-full"
              style={{ left: `${pos(h5Min as number)}%`, width: `${pos(h5Max as number) - pos(h5Min as number)}%`, background: "rgba(229,75,23,0.85)", originX: Math.min(1, Math.max(0, (btu - (h5Min as number)) / Math.max((h5Max as number) - (h5Min as number), 1))) }}
              initial={reduce ? false : { scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.8, ease: EASE, delay: 1.2 }}
            >
              <span className="absolute inset-y-[-5px] left-0 right-0">
                <span className="sh-sweep absolute inset-y-0 w-[2px] -translate-x-1/2 rounded-full" style={{ background: K.cream }} />
              </span>
            </motion.span>
          </div>
          <div className="mt-1 flex justify-between text-[11px] tabular-nums" style={{ color: K.faint }} aria-hidden="true">
            <span>0</span>
            <span>{fr(top)} BTU/h</span>
          </div>
          <p className="mt-4 text-[15px] leading-relaxed" style={{ margin: "16px 0 0", color: K.mute }}>
            <span style={{ color: K.orange, fontWeight: 600 }}>À −15&nbsp;°C, certifié :</span> de {fr(h5Min as number)} à {fr(h5Max as number)}&nbsp;BTU/h selon la machine ({certified} fiches ENERGY STAR).
          </p>
        </motion.div>
      ) : null}

      <motion.div className="mt-7 flex items-baseline justify-between gap-4 py-4" style={{ borderTop: `1px solid ${K.line}`, borderBottom: `1px solid ${K.line}` }} initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.3 }}>
        <Caption>Maison standard</Caption>
        <span className="text-[17px] font-semibold tabular-nums" style={{ letterSpacing: "-0.02em" }}>
          {fr(areaMin)} à {fr(areaMax)}&nbsp;pi²
        </span>
      </motion.div>

      <motion.nav aria-label="Autres calibres" className="mt-6" initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.5 }}>
        <Caption className="mb-3">Autres calibres</Caption>
        <ul className="flex flex-wrap gap-2" style={{ margin: 0, padding: 0, listStyle: "none" }}>
          {classes.map((c) =>
            c === btu ? (
              <li key={c}>
                <span aria-current="page" className="inline-flex rounded-full px-3.5 py-1.5 text-[12.5px] font-semibold tabular-nums text-white" style={{ background: K.orange }}>{kBtu(c)}</span>
              </li>
            ) : (
              <li key={c}>
                <Link href={`/thermopompes/thermopompe-${c}-btu`} className="sh-pill inline-flex rounded-full px-3.5 py-1.5 text-[12.5px] font-medium tabular-nums" style={{ border: `1px solid ${K.line}`, color: K.mute }} aria-label={`Thermopompe ${fr(c)} BTU`}>
                  {kBtu(c)}
                </Link>
              </li>
            ),
          )}
        </ul>
      </motion.nav>
    </Parallax>
  );
}
