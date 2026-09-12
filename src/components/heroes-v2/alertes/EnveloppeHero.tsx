"use client";

import "./alertes.css";
import Link from "next/link";
import { motion } from "motion/react";
import { useReduced } from "../outils/motion";
import { DISPLAY, MONO, SERIF, outilsMono } from "../outils/fonts";

/* ==================================================================
   « L’enveloppe » — /alertes-logisvert/confirmer et /desabonnement.
   Vert forêt, doublure menthe, papier crème. Une enveloppe arrive, son
   rabat s'ouvre (doublure menthe à l'intérieur), la lettre monte et
   porte le message de statut ; un cachet d'oblitération s'y abat.
   Derrière, des lignes d'oblitération ondulées défilent sans fin.
   ================================================================== */

const F = {
  bg: "#0F3D2B",
  mint: "#BFE8D2",
  cream: "#F3ECDD",
  ink: "#0F3D2B",
  inkMute: "rgba(15,61,43,0.76)",
  inkFaint: "rgba(15,61,43,0.52)",
  line: "rgba(15,61,43,0.14)",
  green: "#1A8F4E",
  serif: "#1E7A4E",
  stamp: "#1C6E47",
} as const;

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const T = { env: 0.12, flap: 0.95, letter: 1.45, stamp: 2.45 };

export type EnvelopeRow = { label: string; value: string; tone?: "amount" | "active" | "removed" };
export type EnvelopeAction = { href: string; label: string; ghost?: boolean };
export type EnveloppeProps = {
  /** Deux parties du h1 : la seconde en italique (Instrument Serif). */
  title: [string, string];
  lead: string;
  actions: EnvelopeAction[];
  rows?: EnvelopeRow[];
  /** Mot(s) au centre du cachet : « Confirmée », « Déjà active »… */
  postmark: string[];
};

export function EnveloppeHero({ title, lead, actions, rows, postmark }: EnveloppeProps) {
  const reduce = useReduced();
  return (
    <section
      key={reduce ? "still" : "live"}
      aria-labelledby="alerte-titre"
      className={`al-root ${outilsMono.variable} relative -mt-[93px] overflow-hidden min-[1700px]:-mt-[105px]`}
      style={{ background: F.bg, color: F.cream, fontFamily: DISPLAY }}
    >
      {/* Profondeur : lumière douce au centre, bas plus sombre */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(900px 620px at 50% 44%, rgba(243,236,221,0.08), rgba(243,236,221,0) 70%), linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(0,0,0,0.18) 100%)" }}
      />
      <Waves className="left-0 top-[215px] w-[46%] sm:top-[250px]" />
      <Waves className="right-0 top-[64%] w-[42%]" flip />

      <div className="relative mx-auto flex max-w-[1100px] flex-col items-center px-4 pb-16 pt-[128px] sm:px-8 sm:pb-24 min-[1700px]:pt-[144px]">
        <motion.p
          className="flex items-center gap-3 text-[11.5px] uppercase"
          style={{ fontFamily: MONO, letterSpacing: "0.24em", color: F.mint, margin: 0 }}
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <WaveMark />
          Alerte LogisVert
          <WaveMark />
        </motion.p>

        {/* ── La scène : enveloppe (fond, rabat, poche) et lettre ── */}
        <motion.div
          className="al-scene relative mt-7 w-full max-w-[820px] sm:mt-9"
          initial={reduce ? false : { opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.05, ease: EASE, delay: T.env }}
        >
          <div aria-hidden="true" className="al-back al-liner" />

          <motion.div
            aria-hidden="true"
            className="al-flap"
            style={{ transformOrigin: "50% 0%", transformPerspective: 1400 }}
            initial={reduce ? false : { rotateX: 0, zIndex: 6 }}
            animate={{ rotateX: 180, zIndex: 2 }}
            transition={reduce ? { duration: 0 } : { rotateX: { duration: 0.8, ease: [0.55, 0, 0.3, 1], delay: T.flap }, zIndex: { duration: 0, delay: T.flap + 0.4 } }}
          >
            <svg viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <linearGradient id="al-flap-liner" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#B3DFC7" />
                  <stop offset="100%" stopColor="#CDEEDC" />
                </linearGradient>
              </defs>
              <polygon points="0,0 100,0 50,100" fill="#EDE3CF" stroke="rgba(15,61,43,0.18)" strokeWidth="1" vectorEffect="non-scaling-stroke" strokeLinejoin="round" />
              {/* Doublure menthe, visible une fois le rabat retourné */}
              <motion.polygon
                points="0,0 100,0 50,100"
                fill="url(#al-flap-liner)"
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={reduce ? { duration: 0 } : { duration: 0, delay: T.flap + 0.4 }}
              />
            </svg>
          </motion.div>

          <div className="al-letter-clip">
            <motion.article className="al-letter" initial={reduce ? false : { y: "104%" }} animate={{ y: "0%" }} transition={{ duration: 1.15, ease: [0.3, 0.72, 0.2, 1], delay: T.letter }}>
              <motion.div
                className="relative px-[22px] pt-[22px] sm:px-12 sm:pt-9"
                initial={false}
                animate={reduce ? { y: 0 } : { y: [0, 3, 0] }}
                transition={reduce ? { duration: 0 } : { duration: 0.28, delay: T.stamp + 0.2, ease: "easeOut" }}
              >
                <Postmark lines={postmark} reduce={reduce} />
                <p className="text-[10.5px] uppercase sm:text-[11px]" style={{ fontFamily: MONO, letterSpacing: "0.2em", color: F.inkFaint, margin: 0 }}>
                  ThermopompesÀVendre.ca
                </p>
                <h1
                  id="alerte-titre"
                  className="mt-[22px] sm:mt-8"
                  style={{ marginBottom: 0, color: F.ink, fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 0.98, fontSize: "clamp(36px, 4.4vw, 58px)", maxWidth: "calc(100% - 96px)" }}
                >
                  <span className="block">{title[0]}</span>{" "}
                  <span className="block" style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 400, letterSpacing: "-0.015em", fontSize: "1.12em", color: F.serif }}>
                    {title[1]}
                  </span>
                </h1>
                <p className="text-[15.5px] leading-[1.65] sm:text-[16.5px]" style={{ color: F.inkMute, margin: "18px 0 0", maxWidth: 600 }}>
                  {lead}
                </p>

                {rows && rows.length > 0 ? (
                  <dl className="m-0 mt-7 grid gap-x-8 sm:grid-cols-2">
                    {rows.map((r) => (
                      <div key={r.label} className="py-3.5" style={{ borderTop: `1px solid ${F.line}` }}>
                        <dt className="text-[10.5px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.16em", color: F.inkFaint }}>
                          {r.label}
                        </dt>
                        <dd
                          className="m-0 mt-1.5 text-[16px] leading-snug sm:text-[16.5px]"
                          style={{ color: r.tone === "amount" ? F.green : F.ink, fontWeight: r.tone === "amount" ? 600 : 500, letterSpacing: "-0.01em" }}
                        >
                          {r.tone === "active" || r.tone === "removed" ? (
                            <span className="inline-flex items-center gap-2">
                              <span aria-hidden="true" className="inline-block h-2 w-2 rounded-full" style={{ background: r.tone === "active" ? F.green : "rgba(15,61,43,0.3)" }} />
                              {r.value}
                            </span>
                          ) : (
                            r.value
                          )}
                        </dd>
                      </div>
                    ))}
                  </dl>
                ) : null}

                <div className="mt-7 flex flex-wrap items-center gap-3">
                  {actions.map((a) =>
                    a.ghost ? (
                      <Link
                        key={a.href}
                        href={a.href}
                        className="al-btn inline-flex w-full items-center justify-center rounded-full px-5 py-[13px] text-[14.5px] font-semibold sm:w-auto sm:px-6 sm:text-[15px]"
                        style={{ border: "1px solid rgba(15,61,43,0.3)", color: F.ink }}
                      >
                        {a.label}
                      </Link>
                    ) : (
                      <Link
                        key={a.href}
                        href={a.href}
                        className="al-btn inline-flex w-full items-center justify-center gap-3 whitespace-nowrap rounded-full px-4 py-[14px] text-[14.5px] font-semibold sm:w-auto sm:px-6 sm:text-[15px]"
                        style={{ background: F.ink, color: F.cream }}
                      >
                        {a.label}
                        <svg className="al-arrow hidden sm:block" aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={F.mint} strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M13 5l7 7-7 7" />
                        </svg>
                      </Link>
                    ),
                  )}
                </div>
              </motion.div>
            </motion.article>
          </div>

          {/* Poche avant : bord supérieur en V léger, plis du fond */}
          <div aria-hidden="true" className="al-pocket">
            <div className="h-full w-full overflow-hidden rounded-b-[10px]">
              <svg viewBox="0 0 1000 300" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="al-pocket-paper" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#F6EFE1" />
                    <stop offset="100%" stopColor="#E9DFCB" />
                  </linearGradient>
                </defs>
                <polygon points="0,0 500,64 1000,0 1000,300 0,300" fill="url(#al-pocket-paper)" />
                <path d="M0 0 L500 64 L1000 0" fill="none" stroke="rgba(15,61,43,0.16)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
                <path d="M0 300 L440 150 M1000 300 L560 150" fill="none" stroke="rgba(15,61,43,0.1)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
                <path d="M440 150 Q500 128 560 150" fill="none" stroke="rgba(15,61,43,0.1)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* Cachet d'oblitération : cercle double, texte en couronne, statut au centre ; encre irrégulière. */
function Postmark({ lines, reduce }: { lines: string[]; reduce: boolean }) {
  const size = lines.length > 1 ? 16.5 : 18.5;
  const y0 = 100 - ((lines.length - 1) * 21) / 2;
  const yEnd = y0 + (lines.length - 1) * 21;
  return (
    <motion.div
      aria-hidden="true"
      className="absolute right-[10px] top-[8px] w-[104px] sm:right-[26px] sm:top-[18px] sm:w-[150px]"
      initial={reduce ? false : { opacity: 0, scale: 1.9, rotate: -34 }}
      animate={reduce ? { opacity: 0.94, scale: 1, rotate: -12 } : { opacity: [0, 1, 0.94], scale: [1.9, 0.93, 1], rotate: -12 }}
      transition={reduce ? { duration: 0 } : { duration: 0.36, times: [0, 0.68, 1], ease: "easeIn", delay: T.stamp, rotate: { duration: 0.3, ease: "easeOut", delay: T.stamp } }}
    >
      <svg viewBox="0 0 200 200" className="block h-auto w-full overflow-visible">
        <defs>
          <path id="al-ring" d="M27 100a73 73 0 1 1 146 0a73 73 0 1 1 -146 0" />
          <filter id="al-ink" x="-10%" y="-10%" width="120%" height="120%">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="4" result="grain" />
            <feDisplacementMap in="SourceGraphic" in2="grain" scale="2.4" xChannelSelector="R" yChannelSelector="G" result="rough" />
            <feTurbulence type="fractalNoise" baseFrequency="0.06" numOctaves="2" seed="9" result="blot" />
            <feColorMatrix in="blot" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  -2.2 0 0 0 1.9" result="mask" />
            <feComposite in="rough" in2="mask" operator="in" />
          </filter>
        </defs>
        <g filter="url(#al-ink)" style={{ color: F.stamp }}>
          <circle cx="100" cy="100" r="94" fill="none" stroke="currentColor" strokeWidth="3.4" />
          <circle cx="100" cy="100" r="58" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <text fill="currentColor" style={{ fontFamily: MONO, fontWeight: 500 }} fontSize="12.5" letterSpacing="1">
            <textPath href="#al-ring" textLength="452" lengthAdjust="spacing">
              ALERTE LOGISVERT • THERMOPOMPESÀVENDRE.CA •
            </textPath>
          </text>
          <line x1="62" y1={y0 - 24} x2="138" y2={y0 - 24} stroke="currentColor" strokeWidth="1.6" />
          {lines.map((l, i) => (
            <text key={l} x="100" y={y0 + i * 21 + 6} textAnchor="middle" fill="currentColor" fontSize={size} letterSpacing="0.6" style={{ fontFamily: MONO, fontWeight: 500, textTransform: "uppercase" }}>
              {l}
            </text>
          ))}
          <line x1="62" y1={yEnd + 20} x2="138" y2={yEnd + 20} stroke="currentColor" strokeWidth="1.6" />
        </g>
      </svg>
    </motion.div>
  );
}

function WaveMark() {
  return (
    <svg aria-hidden="true" width="30" height="8" viewBox="0 0 30 8" fill="none">
      <path d="M0 4q3.75-4 7.5 0t7.5 0 7.5 0 7.5 0" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

/* Lignes d'oblitération : six sinusoïdes sur une piste qui glisse d'une période (boucle sans saut). */
const PERIOD = 120;
const WAVE = (() => {
  let d = "";
  for (let k = 0; k < 6; k++) {
    d += `M0 ${12 + k * 17}q${PERIOD / 4} -14 ${PERIOD / 2} 0`;
    for (let x = PERIOD / 2; x < 1800; x += PERIOD / 2) d += `t${PERIOD / 2} 0`;
  }
  return d;
})();

function Waves({ className, flip = false }: { className: string; flip?: boolean }) {
  return (
    <div aria-hidden="true" className={`al-waves pointer-events-none absolute h-[120px] overflow-hidden ${className}`} style={{ transform: flip ? "scaleX(-1)" : undefined, opacity: 0.16 }}>
      <div className="al-waves-track h-full" style={{ width: 1800 }}>
        <svg width="1800" height="120" viewBox="0 0 1800 120" fill="none">
          <path d={WAVE} stroke={F.mint} strokeWidth="1.4" />
        </svg>
      </div>
    </div>
  );
}
