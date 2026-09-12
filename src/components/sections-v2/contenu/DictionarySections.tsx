"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll, MotionConfig } from "motion/react";
import { typo } from "@/components/content-hero/typo";
import { FRAUNCES } from "@/components/heroes-v2/contenu/font-stacks";
import { useReduced } from "@/components/heroes-v2/outils/motion";
import { EASE, Mask, Rule, VIEW } from "./motion";
import "./sections.css";

/* ==================================================================
   /glossaire — la suite du « Dictionnaire ».
   Papier, encre, bordeaux, Fraunces. Chaque lettre ouvre une page :
   titre courant (premier et dernier mot-vedette de la lettre, lettre au
   folio), grande capitale romaine qui reste en place pendant qu'on lit
   ses entrées, entrées sur deux colonnes séparées d'un filet (mot-vedette,
   précision, catégorie grammaticale, définition). Onglets de pouce à
   droite : la lettre en cours se colore en bordeaux au défilement.
   ================================================================== */

const P = {
  paper: "#FBFAF6",
  ink: "#1A1714",
  text: "rgba(26,23,20,0.86)",
  mute: "rgba(26,23,20,0.66)",
  faint: "rgba(26,23,20,0.44)",
  line: "rgba(26,23,20,0.14)",
  ox: "#7A1F1F",
} as const;

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

/** Même table que le héros « Dictionnaire » : catégorie seulement quand elle est certaine. */
const GRAMMAR: Record<string, string> = {
  AHRI: "sigle",
  "Air pulsé": "n. m.",
  "Appoint électrique": "n. m.",
  Biénergie: "n. f.",
  BTU: "sigle",
  "Climat froid": "n. m.",
  Compresseur: "n. m.",
  "Compresseur Rotatif / Twin Rotary": "n. m.",
  COP: "sigle",
  "Cycle inversé": "n. m.",
  Dégivrage: "n. m.",
  "Filtre HEPA / Filtre plissé": "n. m.",
  HSPF2: "sigle",
  Inverter: "anglic.",
  Multizone: "adj.",
  Plénum: "n. m.",
  Réfrigérant: "n. m.",
  SEER2: "sigle",
  "Serpentin Évaporateur / Condenseur": "n. m.",
  "Thermopompe centrale": "n. f.",
  "Thermopompe murale": "n. f.",
  "Tonne de réfrigération": "n. f.",
};

function splitTerm(term: string): { head: string; gloss: string | null } {
  const m = term.match(/^(.*?)\s*\((.+)\)\s*$/);
  return m ? { head: m[1].trim(), gloss: m[2].trim() } : { head: term, gloss: null };
}

export type DictEntry = { term: string; slug: string; definition: string };
export type DictGroup = { letter: string; items: DictEntry[] };

export function DictionaryBody({ groups }: { groups: DictGroup[] }) {
  const root = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState<string | null>(null);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", () => {
    const el = root.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    if (r.top > window.innerHeight * 0.5 || r.bottom < 0) {
      setCurrent(null);
      return;
    }
    let cur: string | null = null;
    for (const g of groups) {
      const node = document.getElementById(`lettre-${g.letter}`);
      if (node && node.getBoundingClientRect().top < window.innerHeight * 0.4) cur = g.letter;
    }
    setCurrent(cur ?? groups[0]?.letter ?? null);
  });
  const firstOf = new Map(groups.map((g) => [g.letter, g.items[0]?.slug]));
  const total = groups.reduce((a, g) => a + g.items.length, 0);

  return (
    <MotionConfig reducedMotion="user">
      <div ref={root} className="relative">
        {/* Onglets de pouce, épinglés sur la tranche droite */}
        <nav
          aria-label="Onglets alphabétiques"
          className="dxs-thumb pointer-events-none absolute inset-y-0 right-0 hidden w-[46px] xl:block"
        >
          <ul
            className="pointer-events-auto sticky top-[112px]"
            style={{ margin: 0, padding: 0, listStyle: "none", borderLeft: `1px solid ${P.ink}` }}
          >
            {ALPHABET.map((L) => {
              const slug = firstOf.get(L);
              const on = L === current;
              return (
                <li key={L} className="relative">
                  {slug ? (
                    <a
                      href={`#${slug}`}
                      aria-label={`Lettre ${L}`}
                      className="relative flex h-[26px] items-center justify-center"
                      style={{ fontFamily: FRAUNCES, fontSize: 14, fontWeight: 500, color: on ? P.paper : P.ink }}
                    >
                      {on ? (
                        <motion.span
                          layoutId="dxs-thumb-on"
                          aria-hidden="true"
                          className="absolute inset-0"
                          style={{ background: P.ox }}
                          transition={{ duration: 0.5, ease: EASE }}
                        />
                      ) : null}
                      <span className="relative">{L}</span>
                    </a>
                  ) : (
                    <span
                      aria-hidden="true"
                      className="flex h-[26px] items-center justify-center"
                      style={{ fontFamily: FRAUNCES, fontSize: 14, fontWeight: 300, color: "rgba(26,23,20,0.2)" }}
                    >
                      {L}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="xl:pr-[86px]">
          {groups.map((g, gi) => (
            <LetterPage key={g.letter} g={g} index={gi} total={total} />
          ))}
        </div>
      </div>
    </MotionConfig>
  );
}

function LetterPage({ g, index, total }: { g: DictGroup; index: number; total: number }) {
  const reduce = useReduced();
  const first = splitTerm(g.items[0].term).head;
  const last = splitTerm(g.items[g.items.length - 1].term).head;
  return (
    <div id={`lettre-${g.letter}`} className="relative pb-16 pt-4 sm:pb-20" style={{ scrollMarginTop: 96 }}>
      {/* Titre courant : double filet, mots-repères, folio */}
      <motion.div
        className="grid grid-cols-[1fr_auto_1fr] items-end gap-4 pb-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={VIEW}
        transition={{ duration: 0.8 }}
      >
        <span className="truncate text-[11px] font-semibold uppercase" style={{ letterSpacing: "0.2em", color: P.ink }}>
          {first}
        </span>
        <span style={{ fontFamily: FRAUNCES, fontStyle: "italic", fontSize: 16, color: P.ox }}>
          {g.letter.toLowerCase()}
        </span>
        <span className="truncate text-right text-[11px] font-semibold uppercase" style={{ letterSpacing: "0.2em", color: P.mute }}>
          {g.items.length > 1 ? last : `${g.items.length} terme`}
        </span>
      </motion.div>
      <Rule color={P.ink} thickness={1} duration={1.2} />
      <Rule color={P.ink} thickness={1} duration={1.2} delay={0.12} className="mt-[3px]" />

      <div className="mt-8 grid gap-6 lg:mt-10 lg:grid-cols-12 lg:gap-12">
        {/* Grande capitale : reste en place pendant la lecture de la lettre */}
        <div className="lg:col-span-3">
          <div className="lg:sticky lg:top-[120px]">
            <p aria-hidden="true" className="flex items-end gap-4" style={{ margin: 0 }}>
              <Mask
                block
                duration={reduce ? 0 : 1.1}
                style={{ paddingBottom: "0.04em", marginBottom: 0 }}
                innerStyle={{
                  fontFamily: FRAUNCES,
                  fontWeight: 300,
                  fontSize: "clamp(96px, 12vw, 200px)",
                  lineHeight: 0.8,
                  letterSpacing: "-0.04em",
                  fontVariationSettings: '"opsz" 144, "SOFT" 0, "WONK" 0',
                  color: P.ink,
                }}
              >
                {g.letter}
                <span style={{ color: P.ox }}>.</span>
              </Mask>
            </p>
            <p
              className="mt-4 text-[11px] font-semibold uppercase tabular-nums"
              style={{ letterSpacing: "0.2em", color: P.mute, margin: "16px 0 0" }}
            >
              {g.items.length} terme{g.items.length > 1 ? "s" : ""}
              <span style={{ color: P.faint }}>
                {" "}
                · {String(index + 1).padStart(2, "0")}
              </span>
            </p>
            <span className="sr-only">sur {total} termes</span>
          </div>
        </div>

        {/* Entrées : deux colonnes et un filet, comme une page de dictionnaire */}
        <div className="dxs-cols lg:col-span-9">
          {g.items.map((item, i) => (
            <Entry key={item.slug} item={item} i={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Entry({ item, i }: { item: DictEntry; i: number }) {
  const { head, gloss } = splitTerm(item.term);
  const tag = GRAMMAR[head];
  return (
    <motion.div
      className="dxs-entry pb-9 pt-1"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEW}
      transition={{ duration: 0.9, ease: EASE, delay: Math.min(i, 4) * 0.07 }}
    >
      {/* Entrée « en ligne », comme un dictionnaire : mot-vedette, précision, catégorie. */}
      <div style={{ fontFamily: FRAUNCES, fontSize: 16, lineHeight: 1.45 }}>
        <h2
          id={item.slug}
          style={{ display: "inline", margin: 0, scrollMarginTop: 96, color: P.ink, fontFamily: FRAUNCES, fontWeight: 400, fontSize: "inherit", lineHeight: "inherit" }}
        >
          <span
            style={{
              fontWeight: 650,
              fontSize: head.length > 22 ? 24 : 28,
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              fontVariationSettings: '"opsz" 72',
            }}
          >
            {head}
          </span>
          {gloss ? (
            <>
              {" "}
              <span style={{ fontStyle: "italic", color: P.mute, letterSpacing: 0 }}>({gloss})</span>
            </>
          ) : null}
        </h2>
        {tag ? (
          <>
            {" "}
            <span className="whitespace-nowrap" style={{ fontStyle: "italic", color: P.ox, marginLeft: 4 }}>
              {tag}
            </span>
          </>
        ) : null}
      </div>
      <span className="mt-3 block w-10">
        <Rule color={P.ox} thickness={1} duration={0.9} delay={0.2} />
      </span>
      <p
        style={{
          margin: "14px 0 0",
          color: P.text,
          fontFamily: FRAUNCES,
          fontSize: "clamp(16.5px, 1.15vw, 18px)",
          lineHeight: 1.66,
          fontVariationSettings: '"opsz" 14',
          fontWeight: 380,
          maxWidth: "62ch",
        }}
      >
        {typo(item.definition)}
      </p>
    </motion.div>
  );
}

/* ---------- Fin de l'ouvrage : l'appel ThermoMatch ---------- */

export function DictionaryEnd() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative pb-6 pt-10 text-center">
        <Rule color={P.ink} thickness={1} duration={1.2} origin="center" />
        <Rule color={P.ink} thickness={1} duration={1.2} delay={0.12} origin="center" className="mt-[3px]" />
        <motion.p
          aria-hidden="true"
          style={{ fontFamily: FRAUNCES, fontSize: 26, color: P.ox, margin: "44px 0 0", letterSpacing: "0.3em" }}
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={VIEW}
          transition={{ duration: 0.9, ease: EASE }}
        >
          ⁂
        </motion.p>
        <motion.p
          className="mx-auto"
          style={{
            fontFamily: FRAUNCES,
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "clamp(30px, 3.6vw, 52px)",
            lineHeight: 1.08,
            letterSpacing: "-0.02em",
            color: P.ink,
            margin: "22px auto 0",
            maxWidth: "18ch",
            fontVariationSettings: '"opsz" 144, "SOFT" 50',
          }}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEW}
          transition={{ duration: 1.1, ease: EASE, delay: 0.15 }}
        >
          {typo("Prêt à mettre vos connaissances à profit ?")}
        </motion.p>
        <motion.div
          className="mt-10 flex justify-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEW}
          transition={{ duration: 1, ease: EASE, delay: 0.35 }}
        >
          <Link
            href="/trouver-ma-thermopompe"
            className="dxs-btn group inline-flex h-14 items-center gap-3 px-9 text-[15px] font-semibold text-white"
            style={{ background: P.ox, textDecoration: "none" }}
          >
            Démarrer ThermoMatch
            <span aria-hidden="true" className="transition-transform duration-500 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </motion.div>
      </div>
    </MotionConfig>
  );
}
