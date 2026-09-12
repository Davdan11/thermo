"use client";

import "./outils.css";
import { useReduced } from "./motion";
import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { HERO_EASE } from "@/components/hero/HeroKit";
import { DISPLAY, MONO, SERIF, outilsMono } from "./fonts";

/* ==================================================================
   « Document » — en-tête des pages légales (/conditions,
   /confidentialite, /accessibilite).
   Papier blanc, encre, un filet orange fin. Un en-tête de document
   sobre : métadonnées, filet, titre, introduction, puis le sommaire
   (liens vers les ancres qui existent dans la page).
   Système commun, accent propre à chaque page :
   - conditions : double filet de contrat, le sommaire se compose
     ligne à ligne, pointillés tracés jusqu'au numéro d'article ;
   - confidentialité : filet simple, les intitulés du sommaire sont
     caviardés puis révélés un à un ;
   - accessibilité : filet épais, un contour de focus orange parcourt
     le sommaire comme une navigation au clavier.
   ================================================================== */

const D = {
  paper: "#FFFFFF",
  ink: "#111418",
  body: "#3A4147",
  soft: "#5F6468",
  hair: "rgba(17,20,24,0.12)",
  orange: "#E54B17",
} as const;

export type DocumentVariant = "conditions" | "confidentialite" | "accessibilite";
type TocItem = { id: string; label: string };

/** Typographie française à l'affichage : apostrophe courbe, espace insécable avant « : ; ? ! ». */
function typo(s: string): string {
  return s
    .replace(/'/g, "’")
    .replace(/ ([:;?!])/g, " $1")
    .replace(/([^\s ])([?!;])(?=\s|$)/g, "$1 $2");
}

export function DocumentHero({
  variant,
  eyebrow,
  titleLines,
  intro,
  breadcrumbs,
  toc,
}: {
  variant: DocumentVariant;
  eyebrow: string;
  /** Lignes du h1 (mots identiques au titre de la page). */
  titleLines: string[];
  intro: string;
  breadcrumbs: Array<{ label: string; href: string }>;
  toc: { heading: string; note?: string; items: TocItem[] };
}) {
  const reduce = useReduced();
  const ruleH = variant === "accessibilite" ? 2 : 1;

  return (
    <section
      key={reduce ? "still" : "live"}
      aria-labelledby="doc-titre"
      className={`ou-root ${outilsMono.variable} relative -mt-[93px] px-5 pb-16 pt-[124px] sm:px-8 min-[1700px]:-mt-[105px] min-[1700px]:pt-[142px] lg:px-12 lg:pb-20`}
      style={{ background: D.paper, color: D.ink, fontFamily: DISPLAY }}
    >
      <div className="mx-auto max-w-[1240px]">
        {/* Métadonnées du document */}
        <Fade delay={0} className="flex flex-wrap items-end justify-between gap-x-6 gap-y-2">
          <nav aria-label="Fil d’Ariane" className="ou-d-crumbs">
            <ol className="flex flex-wrap items-center gap-2 text-[13px]" style={{ listStyle: "none", margin: 0, padding: 0, color: D.soft }}>
              <li>
                <Link href="/">Accueil</Link>
              </li>
              {breadcrumbs.map((b, i) => (
                <li key={b.href} className="flex items-center gap-2">
                  <span aria-hidden="true" style={{ color: "rgba(17,20,24,0.3)" }}>
                    /
                  </span>
                  {i === breadcrumbs.length - 1 ? (
                    <span aria-current="page" style={{ color: D.ink, fontWeight: 500 }}>
                      {typo(b.label)}
                    </span>
                  ) : (
                    <Link href={b.href}>{typo(b.label)}</Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          <p className="flex items-center gap-2.5 text-[11px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.16em", color: D.soft, margin: 0 }}>
            <span>Document</span>
            <span aria-hidden="true">·</span>
            {variant === "confidentialite" ? (
              <span className="px-1.5 py-[2px]" style={{ background: D.ink, color: D.paper }}>
                {typo(eyebrow)}
              </span>
            ) : (
              <span style={{ color: D.ink }}>{typo(eyebrow)}</span>
            )}
          </p>
        </Fade>

        {/* Filet orange */}
        <div className="relative mt-4" aria-hidden="true" style={{ height: variant === "conditions" ? 4 : ruleH }}>
          <motion.span className="absolute inset-x-0 top-0 block origin-left" style={{ height: ruleH, background: D.orange }} initial={reduce ? false : { scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.3, ease: HERO_EASE, delay: 0.15 }} />
          {variant === "conditions" && (
            <motion.span className="absolute inset-x-0 bottom-0 block h-px origin-left" style={{ background: D.orange }} initial={reduce ? false : { scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.3, ease: HERO_EASE, delay: 0.3 }} />
          )}
        </div>

        <div className="mt-10 grid gap-12 lg:mt-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,440px)] lg:gap-20">
          <div className="min-w-0">
            <h1 id="doc-titre" style={{ fontSize: "clamp(42px, min(5.4vw, 10vh), 84px)", fontWeight: 600, letterSpacing: "-0.045em", lineHeight: 0.98, margin: 0, textWrap: "balance" }}>
              {titleLines.map((l, i) => (
                <span key={i} className="block overflow-hidden pb-[0.08em]">
                  <motion.span className="block" initial={reduce ? false : { y: "105%" }} animate={{ y: "0%" }} transition={{ duration: 1, ease: HERO_EASE, delay: 0.25 + i * 0.1 }}>
                    {typo(l)}
                    {i < titleLines.length - 1 ? " " : null}
                  </motion.span>
                </span>
              ))}
            </h1>
            <Fade delay={0.5}>
              <p className="mt-7 max-w-[620px] text-[17px] leading-[1.7] sm:text-[18px]" style={{ color: D.body, margin: "28px 0 0" }}>
                {typo(intro)}
              </p>
            </Fade>
            <Fade delay={0.65} className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
              <Link href="/trouver-ma-thermopompe" className="ou-btn inline-flex items-center gap-3 px-6 py-[14px] text-[15px] font-semibold" style={{ background: D.ink, color: "#fff", borderRadius: 2 }}>
                Trouver ma thermopompe en 2 min
                <svg className="ou-arrow" aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
              <a href="tel:4389003224" className="ou-link ou-link-on text-[15px] font-semibold" style={{ color: D.ink }}>
                438-900-3224
              </a>
            </Fade>
            <Fade delay={0.75}>
              <p className="text-[13px]" style={{ color: D.soft, margin: "14px 0 0" }}>
                Gratuit, sans engagement. Un installateur licencié RBQ vous rappelle.
              </p>
            </Fade>
          </div>

          <Toc variant={variant} toc={toc} reduce={reduce} />
        </div>
      </div>
    </section>
  );
}

function Toc({ variant, toc, reduce }: { variant: DocumentVariant; toc: { heading: string; note?: string; items: TocItem[] }; reduce: boolean }) {
  const base = 0.7;
  // Accessibilité : un contour de focus descend le sommaire, puis se pose sur la première entrée.
  const [focus, setFocus] = useState(-1);
  useEffect(() => {
    if (variant !== "accessibilite" || reduce) return;
    const n = toc.items.length;
    let i = 0;
    let t: number;
    const tick = () => {
      setFocus(i < n ? i : 0);
      i += 1;
      if (i <= n) t = window.setTimeout(tick, 650);
    };
    t = window.setTimeout(tick, 1200);
    return () => window.clearTimeout(t);
  }, [variant, reduce, toc.items.length]);

  return (
    <nav aria-label={typo(toc.heading)} className="relative min-w-0 lg:pt-3">
      {variant === "conditions" && (
        <motion.span aria-hidden="true" className="absolute -left-6 bottom-0 top-3 hidden w-px origin-top lg:block" style={{ background: D.orange }} initial={reduce ? false : { scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 1.4, ease: HERO_EASE, delay: 0.5 }} />
      )}
      <Fade delay={0.55} className="flex items-baseline justify-between gap-4 pb-3" style={{ borderBottom: `1px solid ${D.ink}` }}>
        <p className="text-[11px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.18em", color: D.ink, margin: 0 }}>
          {typo(toc.heading)}
        </p>
        {toc.note ? (
          <p className="text-right text-[11px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.12em", color: D.soft, margin: 0 }}>
            {typo(toc.note)}
          </p>
        ) : null}
      </Fade>
      <ol className="ou-d-toc" style={{ listStyle: "none", margin: 0, padding: 0 }}>
        {toc.items.map((it, i) => {
          const d = base + i * 0.09;
          return (
            <motion.li key={it.id} className="relative" style={{ borderBottom: `1px solid ${D.hair}` }} initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: d }}>
              {variant === "accessibilite" && (
                <motion.span
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-x-2 inset-y-1 rounded-[4px]"
                  style={{ outline: `2px solid ${D.orange}`, outlineOffset: 0 }}
                  initial={false}
                  animate={{ opacity: focus === i || (reduce && i === 0) ? 1 : 0 }}
                  transition={{ duration: 0.18 }}
                />
              )}
              <a href={`#${it.id}`} className="flex items-baseline gap-3 py-[11px] text-[15px]" style={{ color: D.ink }}>
                <span className="ou-d-num w-7 shrink-0 text-[17px]" style={{ fontFamily: SERIF, fontStyle: "italic", color: variant === "conditions" ? D.orange : D.soft, transition: "color 0.3s" }}>
                  {i + 1}.
                </span>
                <span className="relative min-w-0">
                  {typo(it.label)}
                  {variant === "confidentialite" && <Redaction delay={d + 0.35} reduce={reduce} />}
                </span>
                {variant === "conditions" ? (
                  <>
                    <motion.span aria-hidden="true" className="mb-[5px] hidden min-w-6 flex-1 origin-left self-end sm:block" style={{ borderBottom: "1px dotted rgba(17,20,24,0.4)" }} initial={reduce ? false : { scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.6, ease: HERO_EASE, delay: d + 0.2 }} />
                    <span className="ml-auto shrink-0 text-[11px] sm:ml-0" style={{ fontFamily: MONO, color: D.soft }}>
                      art.&nbsp;{i + 1}
                    </span>
                  </>
                ) : (
                  <span aria-hidden="true" className="ml-auto shrink-0 text-[13px]" style={{ color: "rgba(17,20,24,0.35)" }}>
                    ↓
                  </span>
                )}
              </a>
            </motion.li>
          );
        })}
      </ol>
    </nav>
  );
}

/** Bande d'encre qui recouvre l'intitulé, puis se retire (caviardage levé). */
function Redaction({ delay, reduce }: { delay: number; reduce: boolean }) {
  if (reduce) return null;
  return (
    <motion.span
      aria-hidden="true"
      className="pointer-events-none absolute -inset-x-0.5 inset-y-[3px] origin-right"
      style={{ background: D.ink }}
      initial={{ scaleX: 1 }}
      animate={{ scaleX: 0 }}
      transition={{ duration: 0.55, ease: [0.65, 0, 0.35, 1], delay: delay + 0.5 }}
    />
  );
}

function Fade({ children, delay, className, style }: { children: ReactNode; delay: number; className?: string; style?: CSSProperties }) {
  const reduce = useReduced();
  return (
    <motion.div className={className} style={style} initial={reduce ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: HERO_EASE, delay }}>
      {children}
    </motion.div>
  );
}
