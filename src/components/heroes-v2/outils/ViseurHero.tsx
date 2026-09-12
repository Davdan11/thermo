"use client";

import "./outils.css";
import { useReduced } from "./motion";
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { HERO_EASE } from "@/components/hero/HeroKit";
import { DISPLAY, MONO, outilsMono } from "./fonts";

/* ==================================================================
   « Viseur » — héros de /thermoscan.
   Graphite neutre, blanc et orange d'affichage tête haute. La photo
   réelle de l'unité extérieure occupe tout le héros comme l'écran d'un
   appareil photo : le cadre de mise au point cherche (l'image est floue,
   il saute d'un sujet à l'autre), puis se verrouille sur la plaque
   signalétique ; l'image devient nette et les champs lus s'inscrivent.
   Le cycle reprend tant que le héros est à l'écran.
   Valeurs lues génériques : aucune donnée inventée.
   ================================================================== */

const G = {
  bg: "#141414",
  white: "#FFFFFF",
  mute: "rgba(255,255,255,0.72)",
  faint: "rgba(255,255,255,0.5)",
  line: "rgba(255,255,255,0.18)",
  hud: "#FF6A2B",
  orange: "#E54B17",
} as const;

/** Champs que ThermoScan lit sur la plaque (valeurs affichées génériques). */
const FIELDS: Array<[string, string]> = [
  ["Marque", "Mitsubishi Electric"],
  ["Modèle", "Lu sur la plaque"],
  ["Année", "Détectée"],
  ["Capacité", "Lue"],
  ["Fluide", "Lu"],
  ["ENERGY STAR", "Fiche trouvée"],
];

const FACTS: Array<[string, string]> = [
  ["< 1 min", "de la photo à la fiche"],
  ["2011 à 2026", "modèles ENERGY STAR reconnus"],
  ["0 photo", "conservée après lecture"],
];

type Box = { x: number; y: number; w: number; h: number };
/* Coordonnées en % de la photo carrée (1024 × 1024). */
const PLATE: Box = { x: 65.3, y: 44.2, w: 5.6, h: 15 };
const START: Box = { x: 30, y: 38, w: 42, h: 36 };
const HUNT: Box[] = [
  { x: 21, y: 37, w: 11, h: 11 }, // arbres
  { x: 37, y: 52, w: 12.5, h: 14 }, // grille du ventilateur
  { x: 79, y: 36, w: 10, h: 11 }, // feuillage
  { x: 52.6, y: 46.8, w: 8.4, h: 6.4 }, // badge de marque
];
/* Durée de chaque temps : -1 mise en route, 0-3 recherche, 4 verrouillage, 5 lecture, 6 fiche prête. */
const MS: Record<number, number> = { [-1]: 700, 0: 560, 1: 520, 2: 560, 3: 640, 4: 950, 5: 2900, 6: 4600 };
const BLUR: Record<number, number> = { [-1]: 10, 0: 7, 1: 3.5, 2: 8, 3: 2.5 };
const METER: Record<number, number> = { [-1]: 0, 0: 1, 1: 3, 2: 1, 3: 4 };
const STATUS: Record<number, string> = {
  [-1]: "Mise en route",
  0: "AF · Recherche",
  1: "AF · Recherche",
  2: "AF · Recherche",
  3: "AF · Recherche",
  4: "AF · Verrouillé",
  5: "Lecture de la plaque",
  6: "Fiche prête",
};

const pct = (b: Box) => ({ left: `${b.x}%`, top: `${b.y}%`, width: `${b.w}%`, height: `${b.h}%` });

export function ViseurHero() {
  const rootRef = useRef<HTMLElement>(null);
  const reduce = useReduced();
  const inView = useInView(rootRef, { margin: "0px 0px -15% 0px" });
  // Même valeur au serveur et au premier rendu client ; l'effet fait avancer le cycle.
  const [step, setStep] = useState(-1);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    if (reduce) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- état final affiché d'un coup (animations réduites)
      setStep(6);
      return;
    }
    if (!inView) return;
    const t = window.setTimeout(() => {
      if (step >= 6) {
        setStep(0);
        setCycle((c) => c + 1);
      } else setStep(step + 1);
    }, MS[step]);
    return () => window.clearTimeout(t);
  }, [step, inView, reduce]);

  const locked = step >= 4;
  const reading = step >= 5;
  const box = step < 0 ? START : step < 4 ? HUNT[step] : PLATE;
  const blur = locked ? 0 : BLUR[step];
  const meter = locked ? 5 : METER[step];

  return (
    <section
      key={reduce ? "still" : "live"}
      ref={rootRef}
      aria-labelledby="ts-titre"
      className={`ou-root ${outilsMono.variable} relative -mt-[93px] overflow-hidden min-[1700px]:-mt-[105px] lg:flex lg:min-h-[max(820px,min(100svh,980px))] lg:flex-col lg:justify-end`}
      style={{ background: G.bg, color: G.white, fontFamily: DISPLAY }}
    >
      {/* ── Écran du viseur : photo plein cadre (bandeau en haut sur mobile) ── */}
      <div className="ou-v-stage relative h-[520px] overflow-hidden sm:h-[600px] lg:absolute lg:inset-0 lg:h-auto" aria-hidden="true">
        <div className="ou-v-wrap">
          <motion.div
            className="absolute inset-0"
            initial={false}
            animate={{ filter: `blur(${blur}px) brightness(${locked ? 0.74 : 0.62}) contrast(1.06) saturate(${locked ? 0.82 : 0.6})` }}
            transition={{ duration: locked ? 0.35 : 0.45, ease: "easeOut" }}
          >
            <Image src="/images/about-cta-product.jpg" alt="" fill priority sizes="(min-width: 1024px) 100vw, 160vw" style={{ objectFit: "cover" }} />
          </motion.div>

          {/* Cadre de mise au point */}
          <motion.div
            className="absolute z-[2]"
            initial={false}
            animate={pct(box)}
            transition={locked ? { type: "spring", stiffness: 260, damping: 20, mass: 0.8 } : { type: "spring", stiffness: 420, damping: 15, mass: 0.55 }}
          >
            <motion.div
              key={`blink-${cycle}-${locked ? "l" : "h"}`}
              className="absolute inset-0"
              initial={false}
              animate={locked && step === 4 ? { opacity: [1, 0.25, 1, 0.25, 1], scale: [1.18, 0.96, 1.02, 1, 1] } : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <Corners color={locked ? G.hud : G.white} size={step < 0 ? 26 : 15} weight={locked ? 2 : 1.5} />
              {!locked && <span className="absolute left-1/2 top-1/2 h-[9px] w-px -translate-x-1/2 -translate-y-1/2" style={{ background: G.white, opacity: 0.8 }} />}
              {!locked && <span className="absolute left-1/2 top-1/2 h-px w-[9px] -translate-x-1/2 -translate-y-1/2" style={{ background: G.white, opacity: 0.8 }} />}
              {reading && <span key={`sw-${cycle}`} className="ou-v-sweep absolute inset-x-[10%] h-px" style={{ background: G.hud }} />}
            </motion.div>
            <motion.span
              className="absolute bottom-full left-0 mb-2 whitespace-nowrap px-1.5 py-[3px] text-[10px] uppercase"
              style={{ fontFamily: MONO, letterSpacing: "0.14em", background: G.hud, color: G.bg }}
              initial={false}
              animate={{ opacity: locked ? 1 : 0, y: locked ? 0 : 4 }}
              transition={{ duration: 0.3, delay: locked && step === 4 ? 0.3 : 0 }}
            >
              Plaque
            </motion.span>
          </motion.div>

          {/* Relevés (grand écran) : un trait part du cadre verrouillé vers la liste des champs lus */}
          <div className="absolute z-[2] hidden xl:block" style={{ left: `${PLATE.x + PLATE.w}%`, top: `${PLATE.y + PLATE.h / 2}%`, width: "2.4%" }}>
            <motion.span
              className="block h-px w-full origin-left"
              style={{ background: G.hud }}
              initial={false}
              animate={{ scaleX: locked ? 1 : 0 }}
              transition={{ duration: 0.5, ease: HERO_EASE, delay: locked && step === 4 ? 0.35 : 0 }}
            />
          </div>
          <div className="absolute z-[2] hidden xl:block" style={{ left: `${PLATE.x + PLATE.w + 2.4}%`, top: `${PLATE.y - 1.2}%`, width: 300 }}>
            <Readouts step={step} cycle={cycle} />
          </div>
        </div>

        {/* Voiles : graphite en haut (en-tête lisible), en bas (texte) et à droite (relevés) */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[190px]" style={{ background: "linear-gradient(180deg, rgba(20,20,20,0.92) 0%, rgba(20,20,20,0.55) 55%, rgba(20,20,20,0) 100%)" }} />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[46%] lg:h-[62%]" style={{ background: "linear-gradient(0deg, #141414 0%, rgba(20,20,20,0.9) 38%, rgba(20,20,20,0) 100%)" }} />
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[36%] xl:block" style={{ background: "linear-gradient(270deg, rgba(20,20,20,0.82) 0%, rgba(20,20,20,0.5) 55%, rgba(20,20,20,0) 100%)" }} />

        {/* Relevés en bas de l'écran (mobile et tablette) */}
        <div className="absolute inset-x-6 bottom-9 z-[2] sm:inset-x-11 lg:hidden">
          <Readouts step={step} cycle={cycle} compact />
        </div>

        {/* Coins du viseur, aux bords de l'écran */}
        <div className="pointer-events-none absolute bottom-5 left-4 right-4 top-[100px] sm:left-6 sm:right-6 lg:bottom-6 lg:top-[118px] min-[1700px]:top-[130px]">
          <Corners color="rgba(255,255,255,0.55)" size={28} weight={1.5} />
        </div>
      </div>

      {/* ── Barre d'état du viseur : fil d'Ariane, sujet, mise au point ── */}
      <div className="absolute inset-x-0 top-[112px] z-10 px-8 sm:px-11 lg:top-[134px] min-[1700px]:top-[148px]">
        <div className="mx-auto flex max-w-[1440px] items-start justify-between gap-6" style={{ fontFamily: MONO }}>
          <Rise delay={0} rack={false}>
            <nav aria-label="Fil d’Ariane" className="ou-v-crumbs">
              <ol className="flex flex-wrap items-center gap-2 text-[11px] uppercase" style={{ letterSpacing: "0.14em", color: G.faint, listStyle: "none", margin: 0, padding: 0 }}>
                <li>
                  <Link href="/">Accueil</Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/comparer">Comparer</Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" style={{ color: G.white }}>
                  ThermoScan
                </li>
              </ol>
            </nav>
          </Rise>
          <Rise delay={0.15} rack={false} className="hidden sm:block">
            <div aria-hidden="true" className="flex items-center gap-4 text-[11px] uppercase" style={{ letterSpacing: "0.14em" }}>
              <span className="flex items-center gap-2" style={{ color: G.mute }}>
                <span className="ou-v-blink inline-block h-[7px] w-[7px]" style={{ background: G.hud }} />
                Unité extérieure
              </span>
              <span className="h-3 w-px" style={{ background: G.line }} />
              <span className="flex items-end gap-[3px]">
                {[0, 1, 2, 3, 4].map((i) => (
                  <span key={i} className="block w-[3px]" style={{ height: 5 + i * 2, background: i < meter ? (locked ? G.hud : G.white) : "rgba(255,255,255,0.22)", transition: "background 0.2s" }} />
                ))}
              </span>
              <span className="min-w-[178px]" style={{ color: locked ? G.hud : G.white }}>
                {STATUS[step]}
              </span>
            </div>
          </Rise>
        </div>
      </div>

      {/* ── Texte : bas de l'écran ── */}
      <div className="relative z-10 px-6 pb-20 pt-6 sm:px-11 lg:pb-[76px] lg:pt-0">
        <div className="mx-auto max-w-[1440px]">
          <Rise delay={0.2}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/thermoscan-logo.webp" alt="ThermoScan" width={900} height={325} style={{ height: 46, width: 127, maxWidth: "none", display: "block", margin: "0 0 14px -3px" }} />
          </Rise>
          <h1 id="ts-titre" style={{ fontSize: "clamp(38px, min(4.4vw, 8.4vh), 76px)", lineHeight: 1, letterSpacing: "-0.045em", fontWeight: 600, margin: 0, textWrap: "balance" }}>
            <Rise delay={0.3} as="span" className="block">
              Une photo de <Bracketed on={step >= 4 || cycle > 0}>l’étiquette.</Bracketed>{" "}
            </Rise>
            <Rise delay={0.45} as="span" className="mt-[0.06em] block" style={{ color: "rgba(255,255,255,0.58)" }}>
              La fiche complète de votre thermopompe.
            </Rise>
          </h1>

          <div className="mt-8 grid gap-8 lg:mt-10 lg:grid-cols-[minmax(0,560px)_auto_minmax(0,1fr)] lg:items-end lg:gap-12">
            <Rise delay={0.6}>
              <p className="text-[16.5px] leading-[1.65] sm:text-[17.5px]" style={{ color: G.mute, margin: 0 }}>
                ThermoScan lit la plaque signalétique de l’appareil que vous avez déjà, retrouve sa fiche certifiée et mesure ce que vous gagneriez avec un modèle d’aujourd’hui.
              </p>
            </Rise>
            <Rise delay={0.75} className="flex flex-wrap items-center gap-3">
              <a href="#scanner" className="ou-btn inline-flex items-center gap-3 px-6 py-[15px] text-[15px] font-semibold" style={{ background: G.orange, color: G.white, borderRadius: 3 }}>
                Scanner mon appareil
                <svg className="ou-arrow ou-arrow-down" aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
              </a>
              <a href="#etiquette" className="ou-btn inline-flex items-center px-6 py-[14px] text-[15px] font-semibold" style={{ border: `1px solid ${G.line}`, color: G.white, borderRadius: 3 }}>
                {"Où est l’étiquette ?"}
              </a>
            </Rise>
            <Rise delay={0.9} className="lg:justify-self-end">
              <dl className="grid grid-cols-3" style={{ margin: 0, fontFamily: MONO }}>
                {FACTS.map(([v, l], i) => (
                  <div key={l} className="flex flex-col gap-2 pr-4 sm:pr-6" style={{ paddingLeft: i ? 16 : 0, borderLeft: i ? `1px solid ${G.line}` : "none" }}>
                    <dt className="order-2 text-[10px] uppercase leading-[1.45] sm:text-[10.5px]" style={{ color: G.faint, letterSpacing: "0.12em" }}>
                      {l}
                    </dt>
                    <dd className="order-1 whitespace-nowrap text-[17px] sm:text-[21px]" style={{ margin: 0, fontFamily: DISPLAY, fontWeight: 600, letterSpacing: "-0.03em", color: G.white }}>
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>
            </Rise>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Quatre coins de cadre. */
function Corners({ color, size, weight }: { color: string; size: number; weight: number }) {
  const s: CSSProperties = { position: "absolute", width: size, height: size, borderColor: color, borderStyle: "solid", transition: "border-color 0.25s" };
  return (
    <>
      <span style={{ ...s, left: 0, top: 0, borderWidth: `${weight}px 0 0 ${weight}px` }} />
      <span style={{ ...s, right: 0, top: 0, borderWidth: `${weight}px ${weight}px 0 0` }} />
      <span style={{ ...s, left: 0, bottom: 0, borderWidth: `0 0 ${weight}px ${weight}px` }} />
      <span style={{ ...s, right: 0, bottom: 0, borderWidth: `0 ${weight}px ${weight}px 0` }} />
    </>
  );
}

/** Mot du titre encadré par les coins orange du viseur, qui se referment au premier verrouillage. */
function Bracketed({ on, children }: { on: boolean; children: ReactNode }) {
  const reduce = useReduced();
  return (
    <span className="relative inline-block" style={{ padding: "0 0.14em", margin: "0 -0.04em" }}>
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute"
        style={{ inset: "-0.02em -0.02em -0.12em" }}
        initial={false}
        animate={{ opacity: on ? 1 : 0, scale: on ? 1 : 1.18 }}
        transition={{ duration: reduce ? 0 : 0.5, ease: HERO_EASE }}
      >
        <Corners color={G.hud} size={14} weight={2} />
      </motion.span>
      {children}
    </span>
  );
}

/** Liste des champs lus : clés toujours visibles, valeurs qui s'écrivent pendant la lecture. */
function Readouts({ step, cycle, compact = false }: { step: number; cycle: number; compact?: boolean }) {
  const reading = step >= 5;
  const value = (v: string, i: number) =>
    reading ? (
      <span
        key={`v-${cycle}`}
        className="ou-type"
        style={{ color: G.white, "--n": v.length, "--dur": `${Math.max(0.25, v.length * 0.035)}s`, "--delay": `${0.15 + i * 0.36}s` } as CSSProperties}
      >
        {v}
      </span>
    ) : (
      <span style={{ color: "rgba(255,255,255,0.3)" }}>—</span>
    );
  return (
    <div style={{ fontFamily: MONO }}>
      <p className="flex items-center justify-between gap-3 text-[10.5px] uppercase" style={{ letterSpacing: "0.16em", margin: 0, color: step >= 4 ? G.hud : G.faint, transition: "color 0.3s" }}>
        <span>{compact ? STATUS[step] : step >= 6 ? "Fiche prête" : "Plaque signalétique"}</span>
        <span style={{ color: G.faint }}>{reading ? "Lecture" : "· · ·"}</span>
      </p>
      {compact ? (
        <ul className="mt-2 grid grid-cols-2 gap-x-5 sm:grid-cols-3" style={{ listStyle: "none", padding: 0, marginBottom: 0 }}>
          {FIELDS.map(([k, v], i) => (
            <li key={k} className="py-[7px] text-[10.5px] uppercase leading-[1.35]" style={{ borderTop: `1px solid ${G.line}`, letterSpacing: "0.05em" }}>
              <span className="block" style={{ color: G.faint }}>
                {k}
              </span>
              <span className="block whitespace-nowrap">{value(v, i)}</span>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="mt-2" style={{ listStyle: "none", padding: 0, marginBottom: 0 }}>
          {FIELDS.map(([k, v], i) => (
            <li key={k} className="flex items-baseline justify-between gap-4 py-[6px] text-[12px] uppercase" style={{ borderTop: `1px solid ${G.line}`, letterSpacing: "0.06em" }}>
              <span style={{ color: G.faint }}>{k}</span>
              <span className="text-right">{value(v, i)}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/** Apparition « mise au point » : l'élément passe du flou au net. */
function Rise({ children, delay = 0, className, style, as = "div", rack = true }: { children: ReactNode; delay?: number; className?: string; style?: CSSProperties; as?: "div" | "span"; rack?: boolean }) {
  const reduce = useReduced();
  const M = as === "span" ? motion.span : motion.div;
  return (
    <M
      className={className}
      style={style}
      initial={reduce ? false : { opacity: 0, filter: rack ? "blur(14px)" : "blur(0px)", y: rack ? 0 : -6 }}
      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{ duration: 1.1, ease: HERO_EASE, delay }}
    >
      {children}
    </M>
  );
}
