"use client";

import "../sections.css";
import "./horsplage.css";
import Link from "next/link";
import { motion } from "motion/react";
import { useReduced } from "@/components/heroes-v2/outils/motion";
import { DISPLAY, MONO } from "@/components/heroes-v2/outils/font-stacks";
// Police sans préchargement : section de la 404, présente dans l’arbre de toutes les routes.
import { outilsMonoLazy as outilsMono } from "@/components/heroes-v2/outils/fonts-lazy";
import { EASE, Reveal, Rule, VIEW } from "../kit";

/* ==================================================================
   Page 404, sous le héros « Hors plage » : d'autres réglages.
   Même presque-noir, même orange, même cadran. Chaque chemin est un
   préréglage de thermostat : un petit arc gradué qui se remplit à son
   niveau quand il entre à l'écran, puis jusqu'au maximum au survol,
   le repère de la molette tournant avec lui. En bas, une consigne
   manuelle : la recherche du site (/recherche?q=…).
   ================================================================== */

const K = {
  bg: "#0B0B0B",
  white: "#F3F1EE",
  mute: "rgba(243,241,238,0.7)",
  faint: "rgba(243,241,238,0.5)",
  line: "rgba(243,241,238,0.13)",
  orange: "#E54B17",
  hot: "#FF6A2B",
} as const;

const PRESETS = [
  { href: "/guides", label: "Guides et conseils", note: "Lecture" },
  { href: "/meilleures-thermopompes", label: "Meilleures thermopompes", note: "Classements" },
  { href: "/marques", label: "Toutes les marques", note: "Catalogue" },
  { href: "/calculateur-economies", label: "Calculatrice d’économies", note: "Outil" },
  { href: "/prix", label: "Prix : notre approche", note: "Lecture" },
  { href: "/faq", label: "Questions fréquentes", note: "FAQ" },
  { href: "/rendez-vous", label: "Prendre rendez-vous", note: "Conseiller" },
  { href: "/contact", label: "Nous joindre", note: "Contact" },
];

/* Mini-cadran (viewBox 64 × 64) : arc de -135° à +135°, comme le grand cadran du héros. */
const R = 24;
const ARC_LEN = Math.round(((2 * Math.PI * R * 270) / 360) * 100) / 100;
const pt = (deg: number, r = R) => {
  const a = ((deg - 90) * Math.PI) / 180;
  return [Math.round((32 + r * Math.cos(a)) * 100) / 100, Math.round((32 + r * Math.sin(a)) * 100) / 100] as const;
};
const [x0, y0] = pt(-135);
const [x1, y1] = pt(135);
const ARC = `M${x0} ${y0} A ${R} ${R} 0 1 1 ${x1} ${y1}`;
const TICKS = Array.from({ length: 10 }, (_, i) => -135 + i * 30);

export function HorsPlagePresets() {
  const reduce = useReduced();
  return (
    <section aria-labelledby="nf-reglages" className={`so-root ${outilsMono.variable} relative px-5 pb-24 sm:px-8 lg:pb-28`} style={{ background: K.bg, color: K.white, fontFamily: DISPLAY }}>
      <div className="mx-auto max-w-[1180px]">
        <Rule className="h-px w-full" color={K.line} duration={1.4} />
        <div className="flex flex-wrap items-end justify-between gap-4 pt-12 lg:pt-14">
          <Reveal>
            <p className="text-[11px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.22em", color: K.faint, margin: 0 }}>
              Préréglages · P1 à P{PRESETS.length}
            </p>
            <h2 id="nf-reglages" style={{ fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 500, letterSpacing: "-0.035em", lineHeight: 1.05, margin: "12px 0 0" }}>
              Autres réglages<span style={{ color: K.orange }}>.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-[380px] text-[15px] leading-[1.6]" style={{ color: K.mute, margin: 0 }}>
              Choisissez une consigne : chaque préréglage vous ramène dans une partie du site.
            </p>
          </Reveal>
        </div>

        <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ listStyle: "none", padding: 0, margin: "40px 0 0", borderTop: `1px solid ${K.line}`, borderLeft: `1px solid ${K.line}` }}>
          {PRESETS.map((p, i) => {
            const level = 0.22 + (i % 4) * 0.2 + (i >= 4 ? 0.08 : 0);
            return (
              <motion.li
                key={p.href}
                style={{ borderRight: `1px solid ${K.line}`, borderBottom: `1px solid ${K.line}` }}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEW}
                transition={reduce ? { duration: 0 } : { duration: 0.8, ease: EASE, delay: 0.05 + i * 0.06 }}
              >
                <Link href={p.href} className="nf-preset group relative flex h-full items-center gap-5 px-5 py-6 sm:px-6" style={{ ["--lvl" as string]: String(ARC_LEN * (1 - level)), ["--rot" as string]: `${-135 + 270 * level}deg` }}>
                  <span aria-hidden="true" className="relative block h-16 w-16 shrink-0">
                    <svg viewBox="0 0 64 64" className="absolute inset-0 h-full w-full overflow-visible" fill="none">
                      <path d={ARC} stroke={K.line} strokeWidth={2} strokeLinecap="round" />
                      {TICKS.map((d) => {
                        const [a, b] = pt(d, 29.5);
                        const [c, e] = pt(d, 31.5);
                        return <line key={d} x1={a} y1={b} x2={c} y2={e} stroke="rgba(243,241,238,0.3)" strokeWidth={1} strokeLinecap="round" />;
                      })}
                      <motion.path
                        className="nf-arc"
                        d={ARC}
                        stroke={K.orange}
                        strokeWidth={2.4}
                        strokeLinecap="round"
                        strokeDasharray={ARC_LEN}
                        initial={{ strokeDashoffset: ARC_LEN }}
                        whileInView={{ strokeDashoffset: ARC_LEN * (1 - level) }}
                        viewport={VIEW}
                        transition={reduce ? { duration: 0 } : { duration: 1.1, ease: EASE, delay: 0.35 + i * 0.08 }}
                      />
                      <circle cx={32} cy={32} r={15} fill="#161616" stroke="rgba(255,255,255,0.08)" />
                      <motion.g
                        className="nf-knob"
                        style={{ transformOrigin: "32px 32px", transformBox: "view-box" }}
                        initial={{ rotate: -135 }}
                        whileInView={{ rotate: -135 + 270 * level }}
                        viewport={VIEW}
                        transition={reduce ? { duration: 0 } : { duration: 1.1, ease: EASE, delay: 0.35 + i * 0.08 }}
                      >
                        <line x1={32} y1={19} x2={32} y2={25} stroke={K.hot} strokeWidth={2} strokeLinecap="round" />
                      </motion.g>
                    </svg>
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center gap-2 text-[11px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.14em" }}>
                      <span style={{ color: K.hot }}>P{i + 1}</span>
                      <span aria-hidden="true" style={{ color: K.line }}>
                        ·
                      </span>
                      <span style={{ color: K.faint }}>{p.note}</span>
                    </span>
                    <span className="nf-label mt-1.5 block text-[16px] font-semibold leading-snug" style={{ letterSpacing: "-0.01em" }}>
                      {p.label}
                    </span>
                  </span>
                  <svg className="nf-arrow shrink-0" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.li>
            );
          })}
        </ul>

        {/* Consigne manuelle : la recherche du site */}
        <Reveal delay={0.1} className="mt-14 lg:mt-16">
          <form action="/recherche" method="get" role="search" className="grid items-end gap-6 lg:grid-cols-[minmax(0,300px)_minmax(0,1fr)_auto] lg:gap-10">
            <div>
              <p className="text-[11px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.22em", color: K.hot, margin: 0 }}>
                Consigne manuelle
              </p>
              <p className="mt-2 text-[15px] leading-[1.6]" style={{ color: K.mute, margin: "8px 0 0" }}>
                Vous cherchiez quelque chose de précis ? Tapez-le.
              </p>
            </div>
            <label className="nf-field block">
              <span className="block text-[11px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.16em", color: K.faint }}>
                Chercher sur le site
              </span>
              <input
                type="search"
                name="q"
                maxLength={80}
                autoComplete="off"
                placeholder="Marque, numéro de modèle ou ville"
                className="mt-2 block w-full bg-transparent pb-3 text-[19px] sm:text-[22px]"
                style={{ outline: "none", border: "none", color: K.white, fontFamily: DISPLAY, letterSpacing: "-0.01em" }}
              />
            </label>
            <button type="submit" className="so-btn inline-flex items-center justify-center gap-3 rounded-full px-7 py-[15px] text-[15px] font-semibold" style={{ background: K.orange, color: "#fff" }}>
              Rechercher
              <svg className="so-arrow" aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
