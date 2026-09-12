"use client";

import "./outils.css";
import { useReduced } from "./motion";
import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { HERO_EASE } from "@/components/hero/HeroKit";
import { CountUp } from "@/components/home/premium/shared";
import { DISPLAY, MONO, outilsMono } from "./fonts";
import { ThermoMatchWordmark } from "./FlowBar";

/* ==================================================================
   « Le mécanisme » — héros de /technologie-thermomatch.
   Papier blanc, encre, trait orange. Titre centré (les trois phrases
   reliées par des flèches, comme le schéma), puis un schéma éclaté
   pleine largeur : le catalogue entre à gauche, vos réponses pilotent
   six filtres par une ligne de commande, les modèles écartés quittent
   le circuit, trois ressortent à droite. Signature : des points
   circulent le long des traits (SMIL, déterministe côté serveur).
   Chiffres affichés : le nombre de modèles évalués (catalogue), les six
   critères de la page et les trois machines retenues.
   ================================================================== */

const M = {
  paper: "#FFFFFF",
  ink: "#10212B",
  soft: "rgba(16,33,43,0.66)",
  faint: "rgba(16,33,43,0.42)",
  hair: "rgba(16,33,43,0.14)",
  orange: "#E54B17",
} as const;

/* Les six critères de la section « Ce que ThermoMatch analyse ». */
const GATES = ["Votre propriété", "L’hiver d’ici", "Capacité requise", "Votre confort", "Votre budget", "Aides disponibles"];

type Pt = readonly [number, number];
type Geo = {
  w: number;
  h: number;
  /** Tronçon d'entrée du catalogue jusqu'au premier filtre, puis le bus. */
  busStart: Pt;
  busEnd: Pt;
  gates: Pt[];
  /** Branche de rejet de chaque filtre (chemin partant du filtre). */
  reject: (g: Pt) => string;
  /** Ligne de commande (vos réponses) et ses descentes vers chaque filtre. */
  control: string;
  drops: string[];
  controlStart: Pt;
  outputs: Pt[];
  out: (o: Pt) => string;
  valve: (g: Pt) => string;
};

const r1 = (n: number) => Math.round(n * 10) / 10;

/* ---------- Schéma horizontal (ordinateur) : viewBox 1440 × 300 ---------- */
const H_GATES: Pt[] = GATES.map((_, i) => [392 + i * 128, 184] as const);
const H: Geo = {
  w: 1440,
  h: 300,
  busStart: [250, 184],
  busEnd: [1100, 184],
  gates: H_GATES,
  reject: ([x, y]) => `M${x} ${y} C ${x} ${y + 40}, ${x + 22} ${y + 74}, ${x + 58} ${y + 82} L ${x + 74} ${y + 82}`,
  control: `M250 76 H 1032`,
  drops: H_GATES.map(([x]) => `M${x} 76 V 170`),
  controlStart: [250, 76],
  outputs: [
    [1222, 118],
    [1222, 184],
    [1222, 250],
  ],
  out: ([x, y]) => `M1100 184 C 1150 184, 1160 ${y}, ${x - 8} ${y}`,
  valve: ([x, y]) => `M${x - 12} ${y - 11} L ${x} ${y} L ${x - 12} ${y + 11} Z M${x + 12} ${y - 11} L ${x} ${y} L ${x + 12} ${y + 11} Z`,
};

/* ---------- Schéma vertical (mobile) : viewBox 360 × 720 ---------- */
const V_GATES: Pt[] = GATES.map((_, i) => [48, 150 + i * 70] as const);
const V: Geo = {
  w: 360,
  h: 720,
  busStart: [48, 84],
  busEnd: [48, 566],
  gates: V_GATES,
  reject: ([x, y]) => `M${x} ${y} C ${x - 24} ${y + 4}, ${x - 34} ${y + 22}, ${x - 36} ${y + 44}`,
  control: `M318 84 V ${V_GATES[5][1]}`,
  drops: V_GATES.map(([, y]) => `M318 ${y} H 62`),
  controlStart: [318, 84],
  outputs: [
    [48, 650],
    [118, 650],
    [188, 650],
  ],
  out: ([x, y]) => `M48 566 C 48 606, ${x} 600, ${x} ${y - 8}`,
  valve: ([x, y]) => `M${x - 11} ${y - 12} L ${x} ${y} L ${x + 11} ${y - 12} Z M${x - 11} ${y + 12} L ${x} ${y} L ${x + 11} ${y + 12} Z`,
};

/* Générateur pseudo-aléatoire à graine fixe : mêmes points au serveur et au client. */
function rng(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

type Dot = { path: string; dur: number; begin: number; kept: boolean; r: number };

function dotsFor(g: Geo): Dot[] {
  const rand = rng(g.w * 7 + 3);
  const out: Dot[] = [];
  const N = 30;
  const [bx, by] = g.busStart;
  for (let k = 0; k < N; k++) {
    const kept = k % 10 === 6;
    const lead = `M${bx} ${by}`;
    let path: string;
    let dur: number;
    if (kept) {
      const o = g.outputs[Math.floor(k / 10) % 3];
      const tail = g.out(o).replace(/^M[^C]*/, "");
      path = `${lead} L ${g.busEnd[0]} ${g.busEnd[1]} ${tail}`;
      dur = 7.2;
    } else {
      const gi = Math.floor(rand() * g.gates.length);
      const gate = g.gates[gi];
      const branch = g.reject(gate).replace(/^M\S+ \S+ /, "");
      path = `${lead} L ${gate[0]} ${gate[1]} ${branch}`;
      dur = 2.6 + gi * 0.75 + rand() * 0.6;
    }
    out.push({ path, dur: r1(dur), begin: r1(-rand() * 8), kept, r: kept ? 4 : r1(2.3 + rand() * 0.8) });
  }
  return out;
}
const H_DOTS = dotsFor(H);
const V_DOTS = dotsFor(V);

/* Impulsions sur la ligne de commande (vos réponses vers chaque filtre). */
function pulsesFor(g: Geo) {
  return g.drops.map((d, i) => {
    const [cx, cy] = g.controlStart;
    const target = d.replace(/^M/, "");
    const [tx, ty] = target.split(/[ HV]+/).map(Number);
    const vertical = g === H;
    const path = vertical ? `M${cx} ${cy} H ${tx} V ${g.gates[i][1] - 14}` : `M${cx} ${cy} V ${ty} H ${g.gates[i][0] + 14}`;
    return { path, dur: r1(2.2 + i * 0.35), begin: r1(-i * 0.9) };
  });
}
const H_PULSES = pulsesFor(H);
const V_PULSES = pulsesFor(V);

export function MecanismeHero({ modelCount }: { modelCount: number }) {
  const reduce = useReduced();
  const [play, setPlay] = useState(false);
  const [flow, setFlow] = useState(false);
  useEffect(() => {
    const a = window.setTimeout(() => setPlay(true), 900);
    const b = window.setTimeout(() => setFlow(true), 2300);
    return () => {
      window.clearTimeout(a);
      window.clearTimeout(b);
    };
  }, []);
  const moving = flow && !reduce;

  return (
    <section
      key={reduce ? "still" : "live"}
      aria-labelledby="tm-titre"
      className={`ou-root ${outilsMono.variable} relative -mt-[93px] overflow-hidden px-5 pb-16 pt-[128px] sm:px-8 min-[1700px]:-mt-[105px] min-[1700px]:pt-[146px] lg:px-12 lg:pb-20`}
      style={{ background: M.paper, color: M.ink, fontFamily: DISPLAY }}
    >
      <div className="relative mx-auto max-w-[1440px]">
        {/* Cartouche de la planche */}
        <Fade delay={0}>
          <div className="flex items-center justify-between gap-4 pb-3 text-[10.5px] uppercase sm:text-[11px]" style={{ fontFamily: MONO, letterSpacing: "0.18em", color: M.faint, borderBottom: `1px solid ${M.hair}` }}>
            <span className="flex items-center gap-3">
              <span>Technologie</span>
              <span aria-hidden="true" className="h-3 w-px" style={{ background: M.hair }} />
              <ThermoMatchWordmark size={11} />
            </span>
            <span className="hidden sm:inline">Planche 01 · Mécanisme de sélection</span>
          </div>
        </Fade>

        {/* Titre : trois phrases reliées par le trait du schéma */}
        <h1 id="tm-titre" className="mx-auto mt-10 max-w-[1300px] text-center sm:mt-12" style={{ fontSize: "clamp(40px, 4.5vw, 76px)", fontWeight: 300, letterSpacing: "-0.045em", lineHeight: 1.04, margin: undefined, textWrap: "balance" }}>
          <Phrase delay={0.15}>
            Votre maison.
            <Link2 delay={0.55} />
          </Phrase>{" "}
          <Phrase delay={0.45}>
            Vos critères.
            <Link2 delay={0.85} />
          </Phrase>{" "}
          <Phrase delay={0.75}>
            Les bonnes <span style={{ color: M.orange, fontWeight: 400 }}>options.</span>
          </Phrase>
        </h1>

        <Fade delay={0.9}>
          <p className="mx-auto mt-6 max-w-[620px] text-center text-[16.5px] leading-[1.65] sm:text-[18px]" style={{ color: M.soft }}>
            ThermoMatch transforme les caractéristiques de votre propriété et vos priorités en recommandations faciles à comprendre.
          </p>
        </Fade>
        <Fade delay={1.05} className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          <Link href="/trouver-ma-thermopompe" className="ou-btn inline-flex items-center gap-3 px-7 py-[15px] text-[15px] font-semibold" style={{ background: M.ink, color: "#fff", borderRadius: 2 }}>
            Commencer mon analyse
            <svg className="ou-arrow" aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
          <a href="#fonctionnement" className="ou-link ou-link-on text-[15px] font-semibold" style={{ color: M.ink }}>
            Voir comment ça fonctionne
          </a>
        </Fade>

        {/* Schéma éclaté */}
        <div className="mt-12 lg:mt-14">
          <div className="hidden lg:block">
            <Diagram g={H} dots={H_DOTS} pulses={H_PULSES} moving={moving} reduce={reduce} modelCount={modelCount} play={play} />
          </div>
          <div className="mx-auto max-w-[400px] lg:hidden">
            <Diagram g={V} dots={V_DOTS} pulses={V_PULSES} moving={moving} reduce={reduce} modelCount={modelCount} play={play} vertical />
          </div>
        </div>
      </div>
    </section>
  );
}

function Diagram({ g, dots, pulses, moving, reduce, modelCount, play, vertical = false }: { g: Geo; dots: Dot[]; pulses: { path: string; dur: number; begin: number }[]; moving: boolean; reduce: boolean; modelCount: number; play: boolean; vertical?: boolean }) {
  const draw = (delay: number, duration = 1.4) => ({
    initial: reduce ? false : { pathLength: 0, opacity: 0 },
    animate: { pathLength: 1, opacity: 1 },
    transition: { pathLength: { duration, ease: HERO_EASE, delay }, opacity: { duration: 0.2, delay } },
  });
  const pos = (x: number, y: number): CSSProperties => ({ left: `${(x / g.w) * 100}%`, top: `${(y / g.h) * 100}%` });
  const [bx, by] = g.busStart;
  const [cx, cy] = g.controlStart;

  return (
    <div className="relative" style={{ aspectRatio: `${g.w} / ${g.h}` }} role="img" aria-label={`Schéma : près de ${modelCount.toLocaleString("fr-CA")} modèles évalués passent six filtres réglés par vos réponses ; trois machines sont retenues.`}>
      <svg viewBox={`0 0 ${g.w} ${g.h}`} className="absolute inset-0 h-full w-full overflow-visible" fill="none" aria-hidden="true">
        {/* Ligne de commande : vos réponses règlent chaque filtre */}
        <motion.path d={g.control} stroke={M.orange} strokeWidth={1.2} strokeDasharray="3 5" {...draw(1, 1.2)} />
        {g.drops.map((d, i) => (
          <motion.path key={d} d={d} stroke={M.orange} strokeWidth={1.2} strokeDasharray="3 5" {...draw(1.3 + i * 0.08, 0.6)} />
        ))}
        <motion.circle cx={cx} cy={cy} r={3.5} fill={M.orange} initial={reduce ? false : { scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.95, duration: 0.4 }} />

        {/* Bus du catalogue et branches de rejet */}
        <motion.path d={`M${bx} ${by} L ${g.busEnd[0]} ${g.busEnd[1]}`} stroke={M.ink} strokeWidth={1.4} {...draw(0.9, 1.6)} />
        {g.gates.map((gt, i) => (
          <motion.path key={`r${i}`} d={g.reject(gt)} stroke={M.ink} strokeOpacity={0.32} strokeWidth={1.1} {...draw(1.6 + i * 0.1, 0.7)} />
        ))}
        <motion.circle cx={bx} cy={by} r={4} fill={M.ink} initial={reduce ? false : { scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.85, duration: 0.4 }} />

        {/* Sorties */}
        {g.outputs.map((o, i) => (
          <motion.path key={`o${i}`} d={g.out(o)} stroke={M.orange} strokeWidth={1.4} {...draw(2 + i * 0.1, 0.8)} />
        ))}

        {/* Points qui circulent : modèles écartés (encre) et retenus (orange) */}
        {moving && (
          <g>
            {dots.map((d, k) => (
              <circle key={k} r={d.r} fill={d.kept ? M.orange : M.ink} opacity={0}>
                <animateMotion path={d.path} dur={`${d.dur}s`} begin={`${d.begin}s`} repeatCount="indefinite" calcMode="linear" />
                <animate attributeName="opacity" values={d.kept ? "0;1;1;1;0" : "0;0.75;0.75;0"} keyTimes={d.kept ? "0;0.06;0.8;0.94;1" : "0;0.08;0.82;1"} dur={`${d.dur}s`} begin={`${d.begin}s`} repeatCount="indefinite" />
              </circle>
            ))}
            {pulses.map((p, k) => (
              <circle key={`p${k}`} r={2.4} fill={M.orange} opacity={0}>
                <animateMotion path={p.path} dur={`${p.dur}s`} begin={`${p.begin}s`} repeatCount="indefinite" />
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.85;1" dur={`${p.dur}s`} begin={`${p.begin}s`} repeatCount="indefinite" />
              </circle>
            ))}
          </g>
        )}

        {/* Filtres (vannes) et nœuds de sortie, par-dessus les traits */}
        {g.gates.map((gt, i) => (
          <motion.path key={`v${i}`} d={g.valve(gt)} fill={M.paper} stroke={M.ink} strokeWidth={1.3} strokeLinejoin="round" initial={reduce ? false : { opacity: 0, scale: 0.4 }} animate={{ opacity: 1, scale: 1 }} style={{ transformOrigin: `${gt[0]}px ${gt[1]}px`, transformBox: "view-box" }} transition={{ delay: 1.5 + i * 0.1, duration: 0.5, ease: HERO_EASE }} />
        ))}
        {g.outputs.map(([x, y], i) => (
          <motion.rect key={`n${i}`} x={x - 8} y={y - 8} width={16} height={16} fill={M.paper} stroke={M.orange} strokeWidth={1.5} initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.4 + i * 0.1, duration: 0.5 }} />
        ))}
      </svg>

      {/* ── Légendes (HTML : nettes et lisibles à toutes les tailles) ── */}
      {/* Entrée : vos réponses */}
      <Label style={vertical ? { ...pos(cx, cy), transform: "translate(-100%, -100%)", paddingBottom: 12, textAlign: "right" } : { ...pos(cx, cy), transform: "translate(-100%, -50%)", paddingRight: 16, textAlign: "right" }} delay={0.9}>
        <Tag>Entrée · réglage</Tag>
        <span className="block whitespace-nowrap text-[14px] font-medium sm:text-[15px]">Vos réponses</span>
      </Label>
      {/* Entrée : catalogue */}
      <Label style={vertical ? { ...pos(bx, by), transform: "translate(-12px, -100%)", paddingBottom: 12 } : { ...pos(bx, by), transform: "translate(-100%, -50%)", paddingRight: 16, textAlign: "right" }} delay={0.8}>
        <Tag>Entrée · catalogue</Tag>
        <span className="block whitespace-nowrap text-[14px] font-medium sm:text-[15px]">
          Près de <CountUp value={modelCount} play={play} />
        </span>
        <span className="block whitespace-nowrap text-[12.5px]" style={{ color: M.soft }}>
          modèles évalués
        </span>
      </Label>

      {/* Filtres */}
      {g.gates.map(([x, y], i) => (
        <Label
          key={GATES[i]}
          style={vertical ? { ...pos(x, y), transform: "translate(26px, -50%)" } : { ...pos(x, 76), transform: "translate(-50%, -100%)", paddingBottom: 10, textAlign: "center", width: 118 }}
          delay={1.5 + i * 0.1}
        >
          <span className="block text-[10.5px]" style={{ fontFamily: MONO, color: M.orange, letterSpacing: "0.1em" }}>
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="block whitespace-nowrap text-[13px] leading-tight" style={{ color: M.ink }}>
            {GATES[i]}
          </span>
        </Label>
      ))}

      {/* Écartés */}
      <Label style={vertical ? { ...pos(0, g.gates[5][1] + 60), transform: "translate(0, 0)" } : { ...pos(g.gates[5][0] + 80, g.gates[5][1] + 82), transform: "translate(0, -50%)" }} delay={2.2}>
        <span className="block whitespace-nowrap text-[10.5px] uppercase" style={{ fontFamily: MONO, color: M.faint, letterSpacing: "0.14em" }}>
          Écartés à un filtre
        </span>
      </Label>

      {/* Sorties */}
      {g.outputs.map(([x, y], i) => (
        <Label key={`on${i}`} style={{ ...pos(x, y), transform: "translate(-50%, -50%)" }} delay={2.4 + i * 0.1}>
          <span className="block text-[10px] font-medium" style={{ fontFamily: MONO, color: M.orange }}>
            {i + 1}
          </span>
        </Label>
      ))}
      <Label style={vertical ? { ...pos(222, 650), transform: "translate(0, -50%)" } : { ...pos(1256, 184), transform: "translate(0, -50%)", width: "12.5%" }} delay={2.6}>
        <Tag>Sortie</Tag>
        <span className="block text-[16px] font-semibold leading-tight xl:text-[19px]" style={{ letterSpacing: "-0.02em" }}>
          3 machines retenues
        </span>
        <span className="mt-1 block text-[12.5px] leading-snug" style={{ color: M.soft }}>
          classées selon vos priorités
        </span>
      </Label>
    </div>
  );
}

function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="mb-1 block whitespace-nowrap text-[10px] uppercase" style={{ fontFamily: MONO, color: M.faint, letterSpacing: "0.16em" }}>
      {children}
    </span>
  );
}

function Label({ children, style, delay }: { children: ReactNode; style: CSSProperties; delay: number }) {
  const reduce = useReduced();
  return (
    <motion.div className="absolute" style={style} initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay }}>
      {children}
    </motion.div>
  );
}

function Phrase({ children, delay }: { children: ReactNode; delay: number }) {
  const reduce = useReduced();
  return (
    <motion.span className="block sm:inline sm:whitespace-nowrap" initial={reduce ? false : { opacity: 0, y: "0.3em" }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: HERO_EASE, delay }} style={{ display: undefined }}>
      {children}
    </motion.span>
  );
}

/** Flèche en trait entre deux phrases du titre (ordinateur), tracée après la phrase. */
function Link2({ delay }: { delay: number }) {
  const reduce = useReduced();
  return (
    <svg aria-hidden="true" className="ml-[0.22em] hidden align-middle sm:inline-block" width="0.9em" height="0.5em" viewBox="0 0 60 30" fill="none" style={{ marginTop: "-0.12em" }}>
      <motion.path d="M2 15 H 54 M44 5 L 56 15 L 44 25" stroke={M.orange} strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" initial={reduce ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.7, ease: HERO_EASE, delay }} />
    </svg>
  );
}

function Fade({ children, delay, className }: { children: ReactNode; delay: number; className?: string }) {
  const reduce = useReduced();
  return (
    <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: HERO_EASE, delay }}>
      {children}
    </motion.div>
  );
}
