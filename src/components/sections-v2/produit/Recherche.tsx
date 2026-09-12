"use client";

import "./fiche.css";
import Image from "next/image";
import Link from "next/link";
import { MotionConfig, motion } from "motion/react";
import { useReducedSafe } from "@/components/heroes-v2/produit/Tick";
import type { SearchHit } from "@/lib/search/site-search";
import { INK, PAPER_LINE, PAPER_MUTE } from "./tokens";

/* ==================================================================
   Résultats de /recherche, sous le héros « Page blanche » : un index
   de livre. Papier, encre, Instrument Serif ; le titre de chaque
   groupe monte derrière un masque, les entrées apparaissent l'une
   après l'autre ; au survol, le curseur orange du héros se pose
   devant l'entrée et un trait d'encre la souligne.
   Présentation seulement : mêmes groupes, mêmes liens, mêmes ancres.
   ================================================================== */

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export type ResultGroup = { kind: string; label: string; items: SearchHit[] };

export function ResultsIndex({ groups, empty }: { groups: ResultGroup[]; empty: boolean }) {
  const reduce = useReducedSafe();
  return (
    <MotionConfig reducedMotion="user">
      <div className="sv2r relative">
        <div className="mx-auto max-w-[1280px] px-5 pb-24 sm:px-8 lg:px-12 lg:pb-32">
          {empty && (
            <motion.p
              className="sv2r-serif mx-auto max-w-[900px] py-14 text-center"
              style={{ fontSize: "clamp(26px, 3.4vw, 44px)", lineHeight: 1.18, letterSpacing: "-0.015em", color: INK, margin: 0 }}
              initial={reduce ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.9, ease: EASE }}
            >
              Aucun résultat. Essayez un nom de marque, un numéro de modèle (par exemple MUZ-FS12NA) ou une ville, ou passez par le{" "}
              <Link href="/thermopompes" className="sv2r-lnk" style={{ color: INK }}>
                catalogue
              </Link>
              .<span aria-hidden="true" className="sv2r-caret-end" />
            </motion.p>
          )}

          {groups.map((g) => (
            <Group key={g.kind} g={g} reduce={reduce} />
          ))}
        </div>
      </div>
    </MotionConfig>
  );
}

function Group({ g, reduce }: { g: ResultGroup; reduce: boolean }) {
  const isModel = g.kind === "modele";
  const n = g.items.length;
  return (
    <section id={`resultats-${g.kind}`} style={{ scrollMarginTop: 110 }} className="grid gap-x-14 gap-y-6 pt-12 lg:grid-cols-[250px_minmax(0,1fr)] lg:pt-16">
      {/* Filet d'ouverture, tracé depuis le centre comme le champ du héros */}
      <motion.span
        aria-hidden="true"
        className="block h-px origin-center lg:col-span-2"
        style={{ background: PAPER_LINE }}
        initial={reduce ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 1 }}
        transition={{ duration: 1.2, ease: EASE }}
      />

      <div className="lg:sticky lg:top-[120px] lg:self-start">
        <motion.h2
          className="sv2r-serif m-0 overflow-hidden"
          style={{ fontSize: "clamp(46px, 5.2vw, 78px)", lineHeight: 0.95, letterSpacing: "-0.03em", paddingBottom: "0.1em", color: INK }}
          initial={reduce ? false : "hide"}
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
        >
          <motion.span className="block" variants={{ hide: { y: "106%" }, show: { y: "0%" } }} transition={{ duration: 1, ease: EASE }}>
            {g.label}
          </motion.span>
        </motion.h2>
        <motion.p
          className="m-0 mt-3 text-[11.5px] font-medium uppercase"
          style={{ letterSpacing: "0.24em", color: PAPER_MUTE }}
          initial={reduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {n} entrée{n > 1 ? "s" : ""}
        </motion.p>
      </div>

      <ol className={`m-0 list-none p-0 ${isModel ? "grid md:grid-cols-2 md:gap-x-10" : ""}`}>
        {g.items.map((h, i) => (
          <motion.li
            key={h.href}
            className="min-w-0"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: EASE, delay: (i % 6) * 0.05 }}
          >
            <Link href={h.href} className="sv2r-row relative flex items-center gap-4 py-4 no-underline sm:gap-5" style={{ color: INK }}>
              <span aria-hidden="true" className="w-6 shrink-0 text-[12px]" style={{ color: PAPER_MUTE, fontVariantNumeric: "tabular-nums" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              {h.kind === "modele" && h.imageUrl && (
                <span className="sv2r-thumb relative block h-[52px] w-[74px] shrink-0 overflow-hidden rounded-[8px] bg-white" style={{ border: `1px solid ${PAPER_LINE}` }}>
                  <Image src={h.imageUrl} alt="" fill sizes="74px" style={{ objectFit: "contain", padding: 6 }} />
                </span>
              )}
              <span className="relative min-w-0 flex-1">
                <span className="sv2r-t relative block">
                  <span aria-hidden="true" className="sv2r-caret" />
                  <span className="sv2r-serif block" style={{ fontSize: isModel ? 23 : 30, lineHeight: 1.12, letterSpacing: "-0.01em", overflowWrap: "anywhere" }}>
                    {h.title}
                  </span>
                  {h.subtitle && (
                    <span className="mt-1 block text-[13.5px]" style={{ color: PAPER_MUTE }}>
                      {h.subtitle}
                    </span>
                  )}
                </span>
              </span>
              <span aria-hidden="true" className="sv2r-go shrink-0" style={{ color: INK }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </span>
              <span aria-hidden="true" className="absolute inset-x-0 bottom-0 block h-px" style={{ background: PAPER_LINE }}>
                <span className="sv2r-under absolute inset-0 block" style={{ background: INK }} />
              </span>
            </Link>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
