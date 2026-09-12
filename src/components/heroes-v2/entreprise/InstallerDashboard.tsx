"use client";

import "./entreprise.css";
import { useEffect, type CSSProperties, type ReactNode } from "react";
import { animate, motion, useMotionValue, useTransform, type MotionValue, MotionConfig } from "motion/react";
import { xeMono } from "./fonts";
import { Arrow, EASE, HEADER_PAD, UNDER_HEADER, XLink, useReducedSafe } from "./shared";

/* ==================================================================
   /espace-installateur — « Tableau de bord ».
   Gris clair, encre, orange. Toute la page tient dans ce héros : un
   tableau de bord fait de panneaux blancs qui arrivent chacun de son
   côté et s'assemblent en grille. Il ne montre que ce que la page dit
   déjà : le portail est en préparation, rendez-vous et soumissions
   sont coordonnés avec l'équipe, le parcours en quatre étapes.
   Aucun chiffre inventé : les listes restent en attente.
   ================================================================== */

const C = {
  bg: "#F1F3F5",
  ink: "#11181C",
  mute: "#56616B",
  faint: "#8B959E",
  line: "#DDE2E7",
  panel: "#FFFFFF",
  orange: "#E54B17",
  wash: "#FBEDE7",
};

const STEPS = [
  { t: "Première estimation", d: "Le client arrive avec son dossier ThermoMatch." },
  { t: "Soumission", d: "Vous validez le calcul de charge." },
  { t: "Rendez-vous", d: "Coordonné pour l’instant avec notre équipe." },
  { t: "Installation", d: "Réalisée par un installateur licencié RBQ." },
];

const NAV = ["Rendez-vous", "Soumissions", "Dossiers ThermoMatch"];

/* Point de départ de chaque panneau avant l'assemblage. */
const FROM = {
  side: { x: -140, y: 30, rotate: -5 },
  status: { x: 40, y: -110, rotate: 3 },
  rdv: { x: 160, y: -50, rotate: 6 },
  path: { x: -80, y: 140, rotate: -3 },
  quote: { x: 150, y: 120, rotate: 5 },
};

const panelStyle: CSSProperties = { background: C.panel, border: `1px solid ${C.line}`, borderRadius: 18, boxShadow: "0 1px 0 rgba(17,24,28,0.03), 0 24px 40px -32px rgba(17,24,28,0.28)" };
const label: CSSProperties = { fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: C.faint };

function Panel({ from, order, className = "", children, style }: { from: { x: number; y: number; rotate: number }; order: number; className?: string; children: ReactNode; style?: CSSProperties }) {
  const reduce = useReducedSafe();
  return (
    <motion.div
      className={`relative min-w-0 ${className}`}
      style={{ ...panelStyle, ...style }}
      initial={reduce ? false : { opacity: 0, x: from.x, y: from.y, rotate: from.rotate, scale: 0.94 }}
      animate={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 70, damping: 16, mass: 1, delay: 0.45 + order * 0.14, opacity: { duration: 0.35, delay: 0.45 + order * 0.14 } }}
    >
      {children}
    </motion.div>
  );
}

function Inner({ order, children, className }: { order: number; children: ReactNode; className?: string }) {
  const reduce = useReducedSafe();
  return (
    <motion.div className={className} initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 1.1 + order * 0.14 }}>
      {children}
    </motion.div>
  );
}

function Waiting({ rows, widths }: { rows: number; widths: number[] }) {
  return (
    <div aria-hidden="true" className="mt-4 flex flex-col gap-2.5">
      {Array.from({ length: rows }, (_, i) => (
        <div key={i} className="flex items-center gap-3 rounded-[10px] px-3 py-2.5" style={{ border: `1px dashed ${C.line}` }}>
          <span className="xe-wait block h-[26px] w-[26px] shrink-0 rounded-[7px]" />
          <span className="flex min-w-0 flex-1 flex-col gap-1.5">
            <span className="xe-wait block h-[8px] rounded-full" style={{ width: `${widths[i % widths.length]}%` }} />
            <span className="xe-wait block h-[7px] rounded-full" style={{ width: `${widths[(i + 1) % widths.length] - 18}%` }} />
          </span>
        </div>
      ))}
    </div>
  );
}

export function InstallerDashboard() {
  const reduce = useReducedSafe();
  return (
    <MotionConfig reducedMotion="user">
    <section aria-labelledby="espace-titre" className={`xe-root ${xeMono.variable} relative ${UNDER_HEADER}`} style={{ background: C.bg, color: C.ink }}>
      <div className={`mx-auto max-w-[1440px] px-4 pb-16 sm:px-8 lg:min-h-screen lg:px-12 lg:pb-20 ${HEADER_PAD}`}>
        {/* En-tête du tableau de bord */}
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:items-end lg:gap-12">
          <div>
            <motion.p className="xe-mono flex items-center gap-2.5 text-[12px] uppercase" style={{ letterSpacing: "0.18em", color: C.mute, margin: 0 }} initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.1 }}>
              Espace installateur
              <span aria-hidden="true" style={{ color: C.line }}>
                /
              </span>
              <span style={{ color: C.ink }}>Tableau de bord</span>
            </motion.p>
            <motion.h1
              id="espace-titre"
              style={{ fontSize: "clamp(46px, 6.4vw, 112px)", lineHeight: 0.92, letterSpacing: "-0.055em", fontWeight: 700, margin: "18px 0 0" }}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: EASE, delay: 0.15 }}
            >
              Espace{" "}
              <span className="relative inline-block">
                Partenaire
                <motion.span aria-hidden="true" className="absolute -bottom-[0.04em] left-[0.04em] right-0 block h-[0.08em] origin-left" style={{ background: C.orange }} initial={reduce ? false : { scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1, ease: EASE, delay: 1.9 }} />
              </span>
            </motion.h1>
          </div>
          <motion.div initial={reduce ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: EASE, delay: 0.35 }}>
            <p className="text-[17px] leading-[1.6]" style={{ color: C.mute, margin: 0 }}>
              Un espace pour gérer vos rendez-vous et vos soumissions est en préparation.
            </p>
          </motion.div>
        </div>

        {/* Les panneaux qui s'assemblent */}
        <div className="mt-8 grid gap-3 sm:gap-4 lg:mt-12 lg:grid-cols-12 lg:grid-rows-[auto_auto]">
          {/* Barre latérale */}
          <Panel from={FROM.side} order={0} className="p-5 lg:col-span-3 lg:row-span-2 lg:flex lg:flex-col" style={{ background: C.ink, color: "#F1F3F5", border: "none" }}>
            <Inner order={0} className="flex h-full flex-col">
              <div className="flex items-center justify-between gap-3">
                <span className="text-[15px] font-semibold" style={{ letterSpacing: "-0.01em" }}>
                  Portail partenaire
                </span>
                <span className="xe-mono rounded-full px-2.5 py-1 text-[10px] uppercase" style={{ letterSpacing: "0.12em", background: "rgba(229,75,23,0.16)", color: "#FF9B78" }}>
                  En préparation
                </span>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2 lg:flex-col lg:gap-1" style={{ listStyle: "none", margin: "20px 0 0", padding: 0 }}>
                {NAV.map((n) => (
                  <li key={n} className="flex items-center justify-between gap-3 rounded-[10px] px-3 py-2.5 text-[14px] lg:py-3" style={{ background: "rgba(241,243,245,0.05)", color: "rgba(241,243,245,0.72)" }}>
                    <span>{n}</span>
                    <span className="xe-mono hidden text-[10px] uppercase lg:inline" style={{ letterSpacing: "0.12em", color: "rgba(241,243,245,0.38)" }}>
                      à venir
                    </span>
                  </li>
                ))}
              </ul>
              <p className="xe-mono mb-0 mt-auto hidden pt-8 text-[10.5px] uppercase lg:block" style={{ letterSpacing: "0.16em", color: "rgba(241,243,245,0.45)" }}>
                Propulsé par ThermoMatch
              </p>
            </Inner>
          </Panel>

          {/* État du portail */}
          <Panel from={FROM.status} order={1} className="p-6 sm:p-7 lg:col-span-5" style={{ background: C.wash, border: `1px solid #F3D5C8` }}>
            <Inner order={1}>
              <p className="xe-mono flex items-center gap-2" style={{ ...label, color: C.orange, margin: 0 }}>
                <span aria-hidden="true" className="xe-pulse inline-block h-[7px] w-[7px] rounded-full" style={{ background: C.orange }} />
                État du portail
              </p>
              <p className="text-[21px] font-semibold leading-tight sm:text-[24px]" style={{ letterSpacing: "-0.025em", margin: "12px 0 0" }}>
                Le portail partenaire n’est pas encore ouvert.
              </p>
              <p className="text-[15px] leading-[1.6]" style={{ color: C.mute, margin: "10px 0 0" }}>
                Les rendez-vous et soumissions sont pour l’instant coordonnés directement avec notre équipe. Vous êtes installateur licencié RBQ et voulez rejoindre le réseau&nbsp;?
              </p>
              <XLink href="/partenaires#candidature" className="mt-5 inline-flex items-center gap-3 rounded-[12px] px-5 py-3.5 text-[15px] font-semibold text-white transition-colors duration-300 hover:bg-[#C93F10]" style={{ background: C.orange }}>
                Déposer une candidature <Arrow />
              </XLink>
            </Inner>
          </Panel>

          {/* Rendez-vous */}
          <Panel from={FROM.rdv} order={2} className="p-5 sm:p-6 lg:col-span-4">
            <Inner order={2}>
              <div className="flex items-center justify-between gap-3">
                <span className="text-[16px] font-semibold">Rendez-vous</span>
                <span className="xe-mono" style={label}>
                  En attente
                </span>
              </div>
              <Waiting rows={3} widths={[72, 58, 84]} />
              <p className="text-[13.5px] leading-snug" style={{ color: C.mute, margin: "14px 0 0" }}>
                Coordonnés pour l’instant avec notre équipe.
              </p>
            </Inner>
          </Panel>

          {/* Parcours */}
          <Panel from={FROM.path} order={3} className="p-6 sm:p-7 lg:col-span-6">
            <Inner order={3}>
              <h2 style={{ fontSize: "clamp(22px, 2vw, 30px)", lineHeight: 1.12, letterSpacing: "-0.03em", fontWeight: 600, margin: 0 }}>L’excellence, de la première estimation à l’installation.</h2>
              <Journey />
            </Inner>
          </Panel>

          {/* Soumissions */}
          <Panel from={FROM.quote} order={4} className="p-5 sm:p-6 lg:col-span-3">
            <Inner order={4}>
              <div className="flex items-center justify-between gap-3">
                <span className="text-[16px] font-semibold">Soumissions</span>
                <span className="xe-mono" style={label}>
                  En attente
                </span>
              </div>
              <Waiting rows={2} widths={[66, 80]} />
              <p className="text-[13.5px] leading-snug" style={{ color: C.mute, margin: "14px 0 0" }}>
                Vous validez le calcul de charge.
              </p>
            </Inner>
          </Panel>
        </div>
      </div>
    </section>
    </MotionConfig>
  );
}

/* Le parcours en quatre étapes, parcouru en boucle par un trait orange. */
function Journey() {
  const reduce = useReducedSafe();
  const p = useMotionValue(0);
  useEffect(() => {
    if (reduce) {
      p.set(1);
      return;
    }
    const c = animate(p, [0, 1], { duration: 6, ease: "linear", delay: 2.4, repeat: Infinity, repeatDelay: 1.4 });
    return () => c.stop();
  }, [p, reduce]);
  const width = useTransform(p, (v) => `${v * 100}%`);

  return (
    <div className="relative mt-6">
      <div aria-hidden="true" className="absolute left-[6px] right-[calc(25%-6px)] top-[6px] hidden h-[2px] sm:block" style={{ background: C.line }}>
        <motion.span className="absolute inset-y-0 left-0 block" style={{ width, background: C.orange }} />
      </div>
      <ol className="grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-4" style={{ listStyle: "none", margin: 0, padding: 0 }}>
        {STEPS.map((s, i) => (
          <Station key={s.t} i={i} p={p} title={s.t} desc={s.d} />
        ))}
      </ol>
    </div>
  );
}

function Station({ i, p, title, desc }: { i: number; p: MotionValue<number>; title: string; desc: string }) {
  const at = i / (STEPS.length - 1);
  const on = useTransform(p, [Math.max(0, at - 0.03), at + 0.01], [0, 1]);
  const bg = useTransform(on, [0, 1], [C.panel, C.orange]);
  const border = useTransform(on, [0, 1], [C.faint, C.orange]);
  const opacity = useTransform(on, [0, 1], [0.55, 1]);
  return (
    <li className="relative min-w-0">
      <motion.span aria-hidden="true" className="relative z-[1] block h-[14px] w-[14px] rounded-[4px]" style={{ background: bg, border: "2px solid", borderColor: border }} />
      <motion.div style={{ opacity }}>
        <p className="xe-mono text-[10.5px]" style={{ color: C.faint, margin: "12px 0 0", letterSpacing: "0.12em" }}>
          {String(i + 1).padStart(2, "0")}
        </p>
        <p className="text-[15px] font-semibold leading-tight" style={{ margin: "4px 0 0", letterSpacing: "-0.01em" }}>
          {title}
        </p>
        <p className="text-[13px] leading-snug" style={{ color: C.mute, margin: "4px 0 0" }}>
          {desc}
        </p>
      </motion.div>
    </li>
  );
}
