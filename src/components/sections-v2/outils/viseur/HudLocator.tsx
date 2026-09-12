"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { motion, useInView } from "motion/react";
import { useReduced } from "@/components/heroes-v2/outils/motion";
import { MONO } from "@/components/heroes-v2/outils/fonts";
import { Corners } from "../kit";

/* ==================================================================
   « Où est l'étiquette » en écran de viseur : l'unité extérieure et
   l'unité murale en trait blanc sur graphite, les plaques en orange.
   Le cadre de mise au point cherche (grille, raccords, mur), puis se
   verrouille sur la plaque 1, repart, se verrouille sur la plaque 2.
   Le cycle ne tourne que lorsque la figure est à l'écran.
   Mêmes mentions que l'ancien schéma. Figure décorative (aria-hidden) :
   les mêmes informations sont dans le texte à côté.
   ================================================================== */

const HUD = "#FF6A2B";
const W = "rgba(255,255,255,0.62)";
const W2 = "rgba(255,255,255,0.26)";
const FILL = "#1C1C1C";

type Box = { x: number; y: number; w: number; h: number };
/* En % de la figure (viewBox 640 × 430). */
const START: Box = { x: 14, y: 14, w: 72, h: 72 };
const FAN: Box = { x: 18.4, y: 48.4, w: 12.5, h: 18.6 };
const PIPES: Box = { x: 46, y: 70, w: 6.4, h: 12 };
const PLATE1: Box = { x: 39.9, y: 54.7, w: 5, h: 9.3 };
const WALL: Box = { x: 62, y: 31.5, w: 10.5, h: 16 };
const PLATE2: Box = { x: 82.6, y: 45.6, w: 8.6, h: 5.6 };

type Beat = { box: Box; lock?: 1 | 2; ms: number };
const BEATS: Beat[] = [
  { box: FAN, ms: 620 },
  { box: PIPES, ms: 560 },
  { box: PLATE1, lock: 1, ms: 2600 },
  { box: WALL, ms: 640 },
  { box: PLATE2, lock: 2, ms: 2600 },
];

const pct = (b: Box) => ({ left: `${b.x}%`, top: `${b.y}%`, width: `${b.w}%`, height: `${b.h}%` });

export function HudLocator() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "0px 0px -10% 0px" });
  const reduce = useReduced();
  const [i, setI] = useState(-1);

  useEffect(() => {
    if (reduce || !inView) return;
    const t = window.setTimeout(() => setI((n) => (n + 1) % BEATS.length), i < 0 ? 500 : BEATS[i].ms);
    return () => window.clearTimeout(t);
  }, [i, inView, reduce]);

  const beat = i >= 0 ? BEATS[i] : null;
  const box = reduce ? PLATE1 : beat ? beat.box : START;
  const lock = reduce ? 1 : beat?.lock;

  return (
    <div ref={ref} className="relative" aria-hidden="true">
      {/* Barre d'état du viseur */}
      <div className="mb-3 flex items-center justify-between gap-4 text-[10.5px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.14em" }}>
        <span className="flex items-center gap-2" style={{ color: "rgba(255,255,255,0.6)" }}>
          <span className="ou-v-blink inline-block h-[7px] w-[7px]" style={{ background: HUD }} />
          Repérage
        </span>
        <span style={{ color: lock ? HUD : "rgba(255,255,255,0.72)", transition: "color 0.2s" }}>{lock ? `AF · Plaque ${lock}` : "AF · Recherche"}</span>
      </div>

      <div className="relative" style={{ aspectRatio: "640 / 430" }}>
        <svg viewBox="0 0 640 430" className="absolute inset-0 h-full w-full" fill="none">
          {/* sol */}
          <path d="M20 396 H620" stroke={W2} strokeWidth="1.5" strokeLinecap="round" />

          {/* ---- unité extérieure ---- */}
          <g transform="translate(40 120)">
            <rect x="0" y="230" width="280" height="14" rx="2" stroke={W2} />
            <rect x="18" y="0" width="244" height="232" rx="12" fill={FILL} stroke={W} strokeWidth="1.5" />
            <rect x="34" y="14" width="212" height="18" rx="4" stroke={W2} />
            <circle cx="118" cy="128" r="78" stroke={W} strokeWidth="1.5" />
            {[66, 50, 34, 18].map((r) => (
              <circle key={r} cx="118" cy="128" r={r} stroke={W2} />
            ))}
            <g className="vz-fan" style={{ transformOrigin: "118px 128px", transformBox: "view-box" }}>
              <path d="M118 128 C100 96 108 70 122 60 C138 80 134 108 118 128 Z" stroke={W} />
              <path d="M118 128 C150 118 176 128 184 144 C160 156 132 148 118 128 Z" stroke={W} />
              <path d="M118 128 C104 160 84 174 66 172 C70 148 92 132 118 128 Z" stroke={W} />
            </g>
            <circle cx="118" cy="128" r="6" fill={FILL} stroke={W} />
            <rect x="214" y="44" width="34" height="170" rx="3" stroke={W2} />
            {Array.from({ length: 13 }, (_, k) => (
              <path key={k} d={`M218 ${56 + k * 12} H244`} stroke={W2} />
            ))}
            <rect x="220" y="120" width="22" height="30" rx="2" fill="#141414" stroke={HUD} strokeWidth="1.8" />
            <path className="vz-plate-lines" d="M224 127h14M224 133h14M224 139h9" stroke={HUD} strokeWidth="1.3" strokeLinecap="round" />
            <path d="M262 190 h30 c10 0 14 4 14 14 v40" stroke={W} strokeWidth="1.5" strokeLinecap="round" />
            <path d="M262 200 h22 c10 0 14 4 14 14 v30" stroke={W2} strokeWidth="1.5" strokeLinecap="round" />
            <text x="140" y="272" textAnchor="middle" fontSize="13" fill="#fff" style={{ fontFamily: MONO, letterSpacing: "0.06em" }}>
              UNITÉ EXTÉRIEURE
            </text>
          </g>

          {/* ---- unité murale ---- */}
          <g transform="translate(360 84)">
            <rect x="0" y="0" width="260" height="300" rx="8" stroke={W2} strokeDasharray="2 5" />
            <rect x="24" y="52" width="212" height="70" rx="14" fill={FILL} stroke={W} strokeWidth="1.5" />
            <rect x="40" y="62" width="150" height="3" rx="1.5" fill={W2} />
            <path d="M24 104 H236" stroke={W2} />
            <circle cx="212" cy="80" r="3" fill={HUD} />
            <g className="vz-air">
              {[70, 120, 170].map((x) => (
                <path key={x} d={`M${x} 136 c8 8 -8 16 0 24`} stroke={W2} strokeWidth="1.5" strokeLinecap="round" />
              ))}
            </g>
            <rect x="176" y="118" width="40" height="12" rx="2" fill="#141414" stroke={HUD} strokeWidth="1.8" />
            <path className="vz-plate-lines" d="M181 124h22" stroke={HUD} strokeWidth="1.3" strokeLinecap="round" />
            <text x="130" y="250" textAnchor="middle" fontSize="13" fill="#fff" style={{ fontFamily: MONO, letterSpacing: "0.06em" }}>
              UNITÉ MURALE INTÉRIEURE
            </text>
          </g>

          {/* légende */}
          <g transform="translate(40 30)">
            <rect x="0" y="0" width="22" height="30" rx="2" stroke={HUD} strokeWidth="1.8" />
            <path d="M4 7h14M4 13h14M4 19h9" stroke={HUD} strokeWidth="1.3" strokeLinecap="round" />
            <text x="34" y="13" fontSize="12" fill="#fff" style={{ fontFamily: MONO, letterSpacing: "0.06em" }}>
              PLAQUE SIGNALÉTIQUE
            </text>
            <text x="34" y="28" fontSize="11" fill="rgba(255,255,255,0.55)" style={{ fontFamily: MONO }}>
              Model / Modèle · Serial · tension · fluide
            </text>
          </g>
        </svg>

        {/* Repères fixes des deux plaques */}
        {[PLATE1, PLATE2].map((b, k) => (
          <span key={k} className="absolute flex items-center justify-center text-[10px]" style={{ ...pct(b), fontFamily: MONO }}>
            <span className="absolute -top-[18px] left-1/2 -translate-x-1/2 px-1 leading-[14px]" style={{ background: lock === k + 1 ? HUD : "rgba(255,255,255,0.14)", color: lock === k + 1 ? "#141414" : "#fff", transition: "background-color 0.25s, color 0.25s" }}>
              {k + 1}
            </span>
          </span>
        ))}

        {/* Cadre de mise au point */}
        <motion.div
          className="absolute"
          initial={false}
          animate={pct(box)}
          transition={reduce ? { duration: 0 } : lock ? { type: "spring", stiffness: 260, damping: 20, mass: 0.8 } : { type: "spring", stiffness: 380, damping: 16, mass: 0.6 }}
          style={{ margin: "-10px", padding: "10px", boxSizing: "content-box" } as CSSProperties}
        >
          <motion.div
            key={`${i}-${lock ?? 0}`}
            className="absolute inset-0"
            initial={false}
            animate={lock && !reduce ? { opacity: [1, 0.3, 1, 0.3, 1], scale: [1.16, 0.96, 1.02, 1, 1] } : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <Corners color={lock ? HUD : "#fff"} size={lock ? 11 : 13} weight={lock ? 2 : 1.5} />
            {!lock && <span className="absolute left-1/2 top-1/2 h-[9px] w-px -translate-x-1/2 -translate-y-1/2 bg-white/80" />}
            {!lock && <span className="absolute left-1/2 top-1/2 h-px w-[9px] -translate-x-1/2 -translate-y-1/2 bg-white/80" />}
          </motion.div>
        </motion.div>
      </div>

      {/* Relevé : la cible verrouillée */}
      <div className="mt-5 grid grid-cols-1 gap-x-6 sm:grid-cols-2">
        {[
          ["Plaque 1", "Unité extérieure", "plaque sur le panneau latéral, près des raccords"],
          ["Plaque 2", "Unité murale intérieure", "sous l’appareil ou sur le côté, derrière le volet"],
        ].map(([k, v, d], n) => (
          <div key={k} className="py-2.5" style={{ borderTop: `1px solid ${lock === n + 1 ? HUD : "rgba(255,255,255,0.16)"}`, transition: "border-color 0.25s" }}>
            <p className="flex items-baseline justify-between gap-3 text-[10.5px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.1em", margin: 0 }}>
              <span style={{ color: lock === n + 1 ? HUD : "rgba(255,255,255,0.5)", transition: "color 0.25s" }}>{k}</span>
              <span className="text-right" style={{ color: "#fff" }}>
                {v}
              </span>
            </p>
            <p className="mt-1 text-[12.5px] leading-snug" style={{ color: "rgba(255,255,255,0.55)", margin: "4px 0 0" }}>
              {d}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
