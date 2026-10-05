"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { EASE } from "@/components/heroes-v2/marques/shared";

/* ==================================================================
   Lignes du relevé des calibres (/marques/[slug]/[type]).
   Le serveur passe des lignes déjà mises en forme (~0,45 Ko chacune)
   au lieu de l’arbre rendu de chaque ligne (vignette, mini-règle et
   ses graduations, animations). Les premières lignes sont complètes
   dans le HTML ; les suivantes y figurent avec toutes leurs valeurs et
   leurs liens (contenu indexable), sans vignette ni mini-règle, puis
   sont rendues complètes, segment par segment, à l’approche du
   défilement.
   ================================================================== */

/* Mêmes valeurs que la palette de Calibres.tsx. */
const C = {
  strip: "#F4F7F8",
  navy: "#0F2233",
  mute: "rgba(15,34,51,0.74)",
  faint: "rgba(15,34,51,0.5)",
  line: "rgba(15,34,51,0.14)",
  orange: "#E0592A",
} as const;

/** Une ligne du relevé, valeurs déjà mises en forme au serveur (aucun écart d’hydratation). */
export interface ReleveLigne {
  key: string;
  href: string;
  name: string;
  outdoorModel: string;
  /** « Aussi : » : marques qui vendent la même machine, déjà jointes ; null s’il n’y en a pas. */
  alsoSoldAs: string | null;
  imageUrl: string | null;
  /** Logo de la marque, seulement quand la ligne n’a pas de photo. */
  logo: string | null;
  /** « Murale · grand froid » */
  type: string;
  nominal: string;
  /** Position sur la mini-règle (« 33.33% »). */
  nominalPct: string;
  /** Capacité certifiée à -15 °C, null si ENERGY STAR ne la publie pas (affiche « n/d »). */
  h5: string | null;
  h5Pct: string | null;
  hspf2: string;
  seer2: string;
  logisVert: string;
}

/** Graduation de la mini-règle, commune à toutes les lignes (même échelle). */
export interface ReleveTick {
  left: string;
  major: boolean;
}

/* Le filet de chaque cellule (1px solid C.line) et la police du numéro de modèle viennent de
   sections.css (.mqs-mrow > td, .mqs-relmono) : écrits en ligne, ils pesaient ~0,5 Ko par ligne. */

/** Cellules d’une ligne : complètes (vignette, mini-règle animée, repère au survol) ou courtes. */
function Cellules({ l, ticks, complete }: { l: ReleveLigne; ticks: ReleveTick[]; complete: boolean }) {
  const thumb = "flex h-11 w-14 shrink-0 items-center justify-center overflow-hidden";
  const thumbStyle = { background: "#FFFFFF", boxShadow: `inset 0 0 0 1px ${C.line}` } as const;
  return (
    <>
      <td className="mqs-sticky-col relative min-w-[220px] px-4 py-3.5 align-middle sm:min-w-[290px]" style={{ background: C.strip }}>
        {complete ? <span aria-hidden="true" className="mqs-mark absolute bottom-0 left-0 top-0 w-[3px] origin-top" style={{ background: C.orange }} /> : null}
        <div className="flex items-center gap-3">
          {complete ? (
            <Link href={l.href} className={thumb} style={thumbStyle} aria-hidden="true" tabIndex={-1}>
              {l.imageUrl ? (
                <Image src={l.imageUrl} alt="" width={56} height={44} className="h-full w-full object-contain p-1" />
              ) : l.logo ? (
                <Image src={l.logo} alt="" width={48} height={20} className="h-auto max-h-[18px] w-auto max-w-[44px] object-contain opacity-80" />
              ) : null}
            </Link>
          ) : (
            <span aria-hidden="true" className={thumb} style={thumbStyle} />
          )}
          <div className="min-w-0">
            <Link href={l.href} className="font-semibold hover:underline" style={{ color: C.navy, textUnderlineOffset: 3 }}>
              {l.name}
            </Link>
            <div className="mqs-relmono text-[11px]">
              {l.outdoorModel}
            </div>
          </div>
        </div>
        {l.alsoSoldAs ? (
          <div className="mt-1 text-[11px]" style={{ color: C.mute }}>
            Aussi : {l.alsoSoldAs}
          </div>
        ) : null}
      </td>
      <td className="px-4 py-3.5" style={{ color: C.mute }}>
        {l.type}
      </td>
      <td className="whitespace-nowrap px-4 py-3.5 text-right tabular-nums">
        {l.nominal}
      </td>
      <td className="px-4 py-3.5 text-right">
        <div className="flex flex-col items-end">
          <span className="whitespace-nowrap tabular-nums" style={{ fontWeight: 600 }}>
            {l.h5 !== null ? l.h5 : <span style={{ color: C.faint, fontWeight: 400 }}>n/d</span>}
          </span>
          {/* Mini-règle : trait marine = nominal, repère orange = certifié à -15 °C */}
          {complete ? (
            <span aria-hidden="true" className="relative mt-2 block h-[12px] w-[160px]">
              <span className="absolute inset-x-0 top-[5px] h-px" style={{ background: C.line }} />
              {ticks.map((t) => (
                <span key={t.left} className="absolute top-[2px] h-[7px] w-px" style={{ left: t.left, background: C.navy, opacity: t.major ? 0.42 : 0.18 }} />
              ))}
              <motion.span
                className="absolute left-0 top-[4px] block h-[3px] origin-left"
                style={{ width: l.nominalPct, background: C.navy, opacity: 0.55 }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
              />
              {l.h5Pct !== null ? (
                <motion.span
                  className="absolute top-0 block h-[12px] w-[3px] -translate-x-1/2 origin-bottom"
                  style={{ left: l.h5Pct, background: C.orange }}
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: EASE, delay: 0.75 }}
                />
              ) : null}
            </span>
          ) : (
            <span aria-hidden="true" className="relative mt-2 block h-[12px] w-[160px]" />
          )}
        </div>
      </td>
      <td className="px-4 py-3.5 text-right tabular-nums">
        {l.hspf2}
      </td>
      <td className="px-4 py-3.5 text-right tabular-nums">
        {l.seer2}
      </td>
      <td className="whitespace-nowrap px-4 py-3.5 text-right font-semibold tabular-nums">
        {l.logisVert}
      </td>
    </>
  );
}

/**
 * Les lignes du <tbody> du relevé. Les `premier` premières sont complètes dès le HTML ; les suivantes
 * le deviennent par tranches de `segment` quand la première ligne courte arrive à moins de 1 200 px
 * de l’écran (avant d’être vue : aucun décalage visible).
 */
export function ReleveLignes({ lignes, ticks, premier, segment }: { lignes: ReleveLigne[]; ticks: ReleveTick[]; premier: number; segment: number }) {
  const [shown, setShown] = useState(premier);
  const next = useRef<HTMLTableRowElement>(null);

  useEffect(() => {
    const el = next.current;
    if (!el || shown >= lignes.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) setShown((s) => Math.min(s + segment, lignes.length));
      },
      { rootMargin: "1200px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [shown, segment, lignes.length]);

  return (
    <>
      {lignes.map((l, i) =>
        i < shown ? (
          <motion.tr key={l.key} className="mqs-mrow" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "0px 0px -6% 0px" }} transition={{ duration: 0.6 }}>
            <Cellules l={l} ticks={ticks} complete />
          </motion.tr>
        ) : (
          <tr key={l.key} ref={i === shown ? next : undefined} className="mqs-mrow">
            <Cellules l={l} ticks={ticks} complete={false} />
          </tr>
        ),
      )}
    </>
  );
}
