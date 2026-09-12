"use client";

import { useEffect, useLayoutEffect, useState, type CSSProperties, type ReactNode } from "react";
import { animate, motion, useReducedMotion, useScroll, useTransform } from "motion/react";

/* ==================================================================
   Petits outils communs aux motifs des héros SEO.
   (Couleurs recopiées de HeroKit : ce module est aussi lu côté client.)
   ================================================================== */

export const K = {
  ink: "#0A1419",
  panel: "#10222D",
  cream: "#F4EFE7",
  orange: "#E54B17",
  /** Montants LogisVert sur fond encre : vert doux, lisible, sans néon. */
  green: "#7FD3A2",
  mute: "rgba(244,239,231,0.66)",
  faint: "rgba(244,239,231,0.42)",
  line: "rgba(244,239,231,0.14)",
} as const;
export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const MINUS = "−";
export const fr = (n: number, d = 0) => n.toLocaleString("fr-CA", { minimumFractionDigits: d, maximumFractionDigits: d });
/** Nombre signé avec le vrai signe moins typographique. */
export const signed = (n: number, d = 0) => `${n < 0 ? MINUS : ""}${fr(Math.abs(n), d)}`;
/** Température : « −26 °C », une décimale seulement si elle existe. */
export const deg = (n: number) => {
  const r = Math.round(n * 10) / 10;
  return `${signed(r, Number.isInteger(r) ? 0 : 1)} °C`;
};
export const kBtu = (n: number) => `${fr(n / 1000, n % 1000 ? 1 : 0)} k`;

/* useLayoutEffect sans avertissement au rendu serveur. */
const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

/**
 * Compteur : le HTML serveur contient la vraie valeur (moteurs, lecteurs sans JS) ;
 * côté client il repart de 0 avant l'affichage, puis défile après `delay` secondes.
 * Déclenché au montage et non à l'entrée à l'écran : le héros est en haut de page, et un
 * panneau à moitié visible ne doit jamais afficher « 0 ».
 * À placer dans un conteneur qui apparaît en fondu (le passage à 0 reste invisible).
 */
export function Count({ value, decimals = 0, delay = 0, duration = 1.6, style }: { value: number; decimals?: number; delay?: number; duration?: number; style?: CSSProperties }) {
  const reduce = useReducedMotion();
  const [n, setN] = useState(value);
  useIsoLayoutEffect(() => {
    if (!reduce) setN(0);
  }, [reduce]);
  useEffect(() => {
    if (reduce) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- valeur finale affichée d'un coup (animations réduites ou démarrage)
      setN(value);
      return;
    }
    const c = animate(0, value, { duration, delay, ease: [0.16, 1, 0.3, 1], onUpdate: setN });
    return () => c.stop();
  }, [reduce, value, delay, duration]);
  return <span style={{ fontVariantNumeric: "tabular-nums", ...style }}>{signed(n, decimals)}</span>;
}

/** Léger décalage vertical lié au défilement de la page (le héros est tout en haut). */
export function Parallax({ children, distance = -50, className, style }: { children: ReactNode; distance?: number; className?: string; style?: CSSProperties }) {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 900], [0, distance]);
  return (
    <motion.div className={className} style={reduce ? style : { ...style, y }}>
      {children}
    </motion.div>
  );
}

/** Apparition en fondu montant. */
export function Rise({ children, delay = 0, y = 22, duration = 1.2, className, style }: { children: ReactNode; delay?: number; y?: number; duration?: number; className?: string; style?: CSSProperties }) {
  const reduce = useReducedMotion();
  return (
    <motion.div className={className} style={style} initial={reduce ? false : { opacity: 0, y }} animate={{ opacity: 1, y: 0 }} transition={{ duration, ease: EASE, delay }}>
      {children}
    </motion.div>
  );
}

/** Petite étiquette de légende en capitales espacées. */
export function Caption({ children, style, className = "" }: { children: ReactNode; style?: CSSProperties; className?: string }) {
  return (
    <p className={`text-[11px] font-medium uppercase ${className}`} style={{ letterSpacing: "0.2em", color: K.faint, margin: 0, ...style }}>
      {children}
    </p>
  );
}

/** Vrai quand le composant tourne dans le navigateur et que les animations sont permises. */
export function useLive(): boolean {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  // eslint-disable-next-line react-hooks/set-state-in-effect -- valeur finale affichée d'un coup (animations réduites ou démarrage)
  useEffect(() => setMounted(true), []);
  return mounted && !reduce;
}

/* ------------------------------------------------------------------
   Panneau de chiffres du héros : les valeurs numériques défilent,
   les valeurs textuelles (« Hydro-Québec · ENERGY STAR ») restent du texte.
   ------------------------------------------------------------------ */

const NUM_RE = /^([-−])?\s*(\d{1,3}(?:[\s  ]\d{3})*|\d+)(?:,(\d+))?(?:[\s  ]*(\$|°C|%))?$/;

function parseStat(v: string): { n: number; d: number; suffix: string } | null {
  const m = v.trim().match(NUM_RE);
  if (!m) return null;
  const int = m[2].replace(/[\s  ]/g, "");
  const dec = m[3] ?? "";
  const n = Number(`${m[1] ? "-" : ""}${int}${dec ? `.${dec}` : ""}`);
  if (!Number.isFinite(n)) return null;
  return { n, d: dec.length, suffix: m[4] ? ` ${m[4]}` : "" };
}

export function StatsPanel({ items, delay = 1 }: { items: Array<{ label: string; value: string }>; delay?: number }) {
  const reduce = useReducedMotion();
  if (!items.length) return null;
  return (
    <Rise delay={delay} y={16} className="mt-10 max-w-[720px]">
      <dl
        className="relative grid overflow-hidden rounded-[22px]"
        style={{
          margin: 0,
          gridTemplateColumns: `repeat(auto-fit, minmax(${items.length > 3 ? 138 : 150}px, 1fr))`,
          background: "rgba(16,34,45,0.55)",
          border: `1px solid ${K.line}`,
          backdropFilter: "blur(16px) saturate(130%)",
          WebkitBackdropFilter: "blur(16px) saturate(130%)",
        }}
      >
        <motion.span aria-hidden="true" className="absolute left-0 top-0 h-[2px] w-full origin-left" style={{ background: K.orange }} initial={reduce ? false : { scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.4, ease: EASE, delay: delay + 0.2 }} />
        {items.map((s) => {
          const p = parseStat(s.value);
          return (
            <div key={s.label} className="flex flex-col gap-2 px-5 py-4 sm:px-6 sm:py-5" style={{ boxShadow: `inset 1px 0 0 ${K.line}, inset 0 -1px 0 ${K.line}` }}>
              <dt className="order-2 text-[11px] font-medium uppercase leading-snug" style={{ color: K.faint, letterSpacing: "0.12em" }}>
                {s.label}
              </dt>
              {p ? (
                <dd className="order-1" style={{ fontSize: "clamp(24px, 2.2vw, 32px)", fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 1, margin: 0, whiteSpace: "nowrap" }}>
                  <Count value={p.n} decimals={p.d} delay={delay + 0.15} />
                  {p.suffix}
                </dd>
              ) : (
                <dd className="order-1 text-[15px] font-semibold leading-snug" style={{ margin: 0, letterSpacing: "-0.01em" }}>
                  {s.value}
                </dd>
              )}
            </div>
          );
        })}
      </dl>
    </Rise>
  );
}
