"use client";

import "./content-hero.css";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion, useScroll, useTransform } from "motion/react";
import { HC, HERO_EASE, HeroActions, HeroArrow, HeroButton, HeroEyebrow, HeroFade, HeroLead, HeroShell, HeroStats, HeroTitle, Serif } from "@/components/hero/HeroKit";

/* ==================================================================
   Héros du glossaire : un dictionnaire qui feuillette ses entrées.
   - Grande lettre en italique qui glisse d'une entrée à l'autre, avec
     le premier terme de la lettre et le début de sa vraie définition.
   - Index A–Z : les lettres qui ont des termes mènent à leur définition
     (survol = aperçu), les autres restent en retrait.
   - Défilement automatique toutes les 3,4 s (mis en pause au survol,
     au clavier, hors écran et si le visiteur réduit les animations).
   ================================================================== */

export type GlossaryEntry = { letter: string; count: number; term: string; slug: string; excerpt: string };

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const STEP = 3.4;

export function GlossaryHero({ entries, termCount }: { entries: GlossaryEntry[]; termCount: number }) {
  return (
    <HeroShell size="md" labelledBy="gl-titre" columns="lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]" visual={entries.length ? <LetterIndex entries={entries} /> : null}>
      <HeroEyebrow>Dictionnaire du CVAC</HeroEyebrow>
      <HeroTitle
        id="gl-titre"
        style={{ fontSize: "clamp(78px, 10.5vw, 172px)", lineHeight: 0.92, letterSpacing: "-0.035em" }}
        lines={[
          <>
            <Serif>Glossaire</Serif>
            <span style={{ color: HC.orange }}>.</span>
          </>,
        ]}
      />
      <HeroLead>Décodez le jargon de l’industrie. Des définitions claires et exhaustives pour maîtriser les termes techniques, de l’achat à l’entretien.</HeroLead>
      <HeroActions>
        <HeroButton href="#lexique">Parcourir de A à Z</HeroButton>
      </HeroActions>
      <HeroStats
        delay={1}
        items={[
          { value: termCount, label: "termes définis" },
          { value: entries.length, label: "lettres" },
        ]}
      />
    </HeroShell>
  );
}

function LetterIndex({ entries }: { entries: GlossaryEntry[] }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-10% 0px -10% 0px" });
  const [active, setActive] = useState(0);
  const [hold, setHold] = useState(false);
  const auto = !reduce && !hold && inView && entries.length > 1;

  useEffect(() => {
    if (!auto) return;
    const t = window.setInterval(() => setActive((k) => (k + 1) % entries.length), STEP * 1000);
    return () => window.clearInterval(t);
  }, [auto, entries.length]);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, -48]);

  const cur = entries[active] ?? entries[0];
  const indexOf = new Map(entries.map((e, k) => [e.letter, k]));

  return (
    <motion.div
      ref={ref}
      style={reduce ? undefined : { y }}
      onMouseEnter={() => setHold(true)}
      onMouseLeave={() => setHold(false)}
      onFocus={() => setHold(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setHold(false);
      }}
    >
      <HeroFade delay={0.45}>
        <div className="rounded-[28px] p-5 sm:p-8" style={{ background: HC.panel, border: `1px solid ${HC.line}` }}>
          <div className="flex items-center justify-between text-[11px] font-medium uppercase" style={{ letterSpacing: "0.18em", color: HC.faint }}>
            <span>
              {cur.letter} · {cur.count} terme{cur.count > 1 ? "s" : ""}
            </span>
            <span className="tabular-nums">
              {String(active + 1).padStart(2, "0")} / {String(entries.length).padStart(2, "0")}
            </span>
          </div>

          <div className="mt-3 grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4 sm:gap-8">
            {/* Grande lettre qui glisse */}
            <div aria-hidden="true" className="relative overflow-hidden" style={{ width: "clamp(84px, 10vw, 156px)", height: "clamp(118px, 13vw, 196px)" }}>
              <AnimatePresence initial={false}>
                <motion.span
                  key={cur.letter}
                  className="ph-serif absolute inset-0 flex items-center justify-center"
                  style={{ fontSize: "clamp(118px, 13vw, 200px)", lineHeight: 1, color: HC.cream }}
                  initial={reduce ? false : { y: "95%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "-95%", opacity: 0 }}
                  transition={{ duration: 0.9, ease: HERO_EASE }}
                >
                  {cur.letter}
                </motion.span>
              </AnimatePresence>
            </div>

            <div className="relative min-h-[178px] min-w-0 sm:min-h-[196px]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={cur.letter}
                  className="flex h-full flex-col justify-center"
                  initial={reduce ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.45, ease: HERO_EASE }}
                >
                  <p className="line-clamp-2 font-semibold" style={{ fontSize: "clamp(19px, 1.8vw, 27px)", lineHeight: 1.1, letterSpacing: "-0.03em", margin: 0 }}>
                    {cur.term}
                  </p>
                  <p className="line-clamp-4 text-[14px] leading-[1.6] sm:text-[14.5px]" style={{ color: HC.mute, margin: "10px 0 0" }}>
                    {cur.excerpt}
                  </p>
                  <a href={`#${cur.slug}`} className="group mt-3 inline-flex w-fit items-center gap-2 text-[13.5px] font-semibold" style={{ color: HC.cream }}>
                    <span className="ct-underline">Lire la définition</span>
                    <span className="transition-transform duration-500 group-hover:translate-x-1" style={{ color: HC.orange }}>
                      <HeroArrow size={13} />
                    </span>
                  </a>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Index A–Z */}
          <nav aria-label="Index alphabétique du glossaire" className="mt-6 pt-5" style={{ borderTop: `1px solid ${HC.line}` }}>
            <ul className="grid grid-cols-7 gap-1 sm:grid-cols-[repeat(13,minmax(0,1fr))]" style={{ margin: 0, padding: 0, listStyle: "none" }}>
              {ALPHABET.map((L, k) => {
                const idx = indexOf.get(L);
                const e = idx === undefined ? null : entries[idx];
                return (
                  <motion.li
                    key={L}
                    initial={reduce ? false : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: HERO_EASE, delay: 0.75 + k * 0.022 }}
                  >
                    {e && idx !== undefined ? (
                      <a
                        href={`#${e.slug}`}
                        data-on={idx === active ? "true" : "false"}
                        aria-label={`Lettre ${L} : ${e.count} terme${e.count > 1 ? "s" : ""}`}
                        onMouseEnter={() => setActive(idx)}
                        onFocus={() => setActive(idx)}
                        className="ct-letter relative flex h-11 items-center justify-center rounded-[10px] text-[18px] font-semibold sm:text-[19px]"
                      >
                        {L}
                        {idx === active && (
                          <motion.span layoutId="ct-letter-mark" aria-hidden="true" className="absolute bottom-1.5 h-[2px] w-4 rounded-full" style={{ background: HC.orange }} transition={{ duration: 0.5, ease: HERO_EASE }} />
                        )}
                      </a>
                    ) : (
                      <span aria-hidden="true" className="flex h-11 items-center justify-center text-[18px] font-semibold sm:text-[19px]" style={{ color: "rgba(244,239,231,0.16)" }}>
                        {L}
                      </span>
                    )}
                  </motion.li>
                );
              })}
            </ul>
          </nav>

          {/* Minuterie de l'entrée affichée */}
          <div aria-hidden="true" className="mt-4 h-px w-full overflow-hidden" style={{ background: HC.line }}>
            {auto && (
              <motion.span key={`${cur.letter}-t`} className="block h-full origin-left" style={{ background: HC.orange }} initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: STEP, ease: "linear" }} />
            )}
          </div>
        </div>
      </HeroFade>
    </motion.div>
  );
}
