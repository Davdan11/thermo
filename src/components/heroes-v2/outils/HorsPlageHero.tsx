"use client";

import "./outils.css";
import { useReduced } from "./motion";
import { useEffect, type ReactNode } from "react";
import Link from "next/link";
import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { HERO_EASE } from "@/components/hero/HeroKit";
import { DISPLAY, MONO } from "./font-stacks";
// Police sans préchargement : ce héros ne sert qu’à la 404, présente dans l’arbre de toutes les routes.
import { outilsMonoLazy as outilsMono } from "./fonts-lazy";

/* ==================================================================
   « Hors plage » — page 404.
   Presque noir et orange. Un cadran de thermostat affiche « 404 » :
   sa molette tourne, dépasse la graduation maximale, revient, hésite,
   repart… et ne se stabilise jamais. L'arc orange suit la molette ;
   la mention « hors plage » s'allume quand elle sort de l'échelle.
   Les chemins utiles vers les outils du site restent en dessous.
   ================================================================== */

const K = {
  bg: "#0B0B0B",
  white: "#F3F1EE",
  mute: "rgba(243,241,238,0.7)",
  faint: "rgba(243,241,238,0.44)",
  line: "rgba(243,241,238,0.13)",
  orange: "#E54B17",
  hot: "#FF6A2B",
} as const;

const LINKS = [
  { href: "/trouver-ma-thermopompe", label: "Trouver ma thermopompe", note: "Questionnaire ThermoMatch" },
  { href: "/subventions", label: "Vérifier les subventions", note: "LogisVert d’Hydro-Québec" },
  { href: "/thermoscan", label: "Scanner mon appareil actuel", note: "ThermoScan" },
  { href: "/comparer", label: "Comparer des modèles", note: "Comparateur" },
];

/* Géométrie du cadran (viewBox 400 × 400). Angles en degrés, 0 = en haut, sens horaire. */
const C = 200;
const SPAN = 135; // échelle de -135° à +135°
const polar = (r: number, deg: number) => {
  const a = ((deg - 90) * Math.PI) / 180;
  // Arrondi : le serveur et le navigateur ne donnent pas toujours la même dernière décimale (erreur d'hydratation).
  return [Math.round((C + r * Math.cos(a)) * 100) / 100, Math.round((C + r * Math.sin(a)) * 100) / 100] as const;
};
const TICKS = Array.from({ length: 46 }, (_, i) => -SPAN + i * 6);
const ARC_R = 168;
const ARC_LEN = Math.round(((2 * Math.PI * ARC_R * (2 * SPAN)) / 360) * 100) / 100;
const [ax0, ay0] = polar(ARC_R, -SPAN);
const [ax1, ay1] = polar(ARC_R, SPAN);
const ARC = `M${ax0.toFixed(2)} ${ay0.toFixed(2)} A ${ARC_R} ${ARC_R} 0 1 1 ${ax1.toFixed(2)} ${ay1.toFixed(2)}`;
const [gx0, gy0] = polar(168, 143);
const [gx1, gy1] = polar(168, 217);
/* Arc du bas (hors de l'échelle), pour la mention « hors plage ». */
const GAP = `M${gx1.toFixed(2)} ${gy1.toFixed(2)} A 168 168 0 0 0 ${gx0.toFixed(2)} ${gy0.toFixed(2)}`;

/* Course de la molette : départ au minimum, elle dépasse, revient, hésite, repart. Fin = départ + 720° (boucle sans saut). */
const SPIN = [-135, 205, 146, 184, 163, 174, 168, 171, 530, 470, 506, 489, 497, 493, 585];
const TIMES = [0, 0.1, 0.16, 0.21, 0.26, 0.3, 0.34, 0.4, 0.52, 0.58, 0.63, 0.67, 0.71, 0.78, 1];
const EASES = ["circOut", "easeInOut", "easeInOut", "easeInOut", "easeInOut", "easeInOut", "easeInOut", "backIn", "easeInOut", "easeInOut", "easeInOut", "easeInOut", "easeInOut", "anticipate"] as const;

/** Angle ramené dans [-180, 180). */
const norm = (deg: number) => ((((deg + 180) % 360) + 360) % 360) - 180;

export function HorsPlageHero() {
  const reduce = useReduced();
  const rot = useMotionValue(-135);
  useEffect(() => {
    if (reduce) {
      rot.set(170);
      return;
    }
    let ctrl: ReturnType<typeof animate> | undefined;
    const t = window.setTimeout(() => {
      ctrl = animate(rot, SPIN, { duration: 11, times: TIMES, ease: [...EASES], repeat: Infinity });
    }, 650);
    return () => {
      window.clearTimeout(t);
      ctrl?.stop();
    };
  }, [reduce, rot]);

  const offset = useTransform(rot, (v) => {
    const a = norm(v);
    // Dans le vide du bas : l'arc reste plein (dépassement du maximum).
    const f = Math.abs(a) > SPAN ? 1 : (a + SPAN) / (2 * SPAN);
    return ARC_LEN * (1 - f);
  });
  const outOfRange = useTransform(rot, (v) => (Math.abs(norm(v)) > SPAN ? 1 : 0.22));
  const knob = useTransform(rot, (v) => `rotate(${v}deg)`);

  return (
    <section
      key={reduce ? "still" : "live"}
      aria-labelledby="nf-titre"
      className={`ou-root ${outilsMono.variable} relative -mt-[93px] overflow-hidden px-5 pb-20 pt-[118px] sm:px-8 min-[1700px]:-mt-[105px] min-[1700px]:pt-[134px] lg:pb-24`}
      style={{ background: K.bg, color: K.white, fontFamily: DISPLAY }}
    >
      {/* Halo très doux derrière le cadran (profondeur, pas de lueur colorée) */}
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-[90px] h-[720px] w-[720px] -translate-x-1/2 rounded-full" style={{ background: "radial-gradient(closest-side, rgba(255,255,255,0.045), rgba(255,255,255,0))" }} />

      <div className="relative mx-auto flex max-w-[1180px] flex-col items-center text-center">
        {/* ── Cadran ── */}
        <motion.div
          aria-hidden="true"
          className="relative"
          style={{ width: "clamp(280px, min(46vh, 40vw), 460px)", aspectRatio: "1 / 1" }}
          initial={reduce ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.3, ease: HERO_EASE }}
        >
          <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full overflow-visible" fill="none">
            <defs>
              <radialGradient id="nf-face" cx="50%" cy="38%" r="65%">
                <stop offset="0%" stopColor="#1C1C1C" />
                <stop offset="100%" stopColor="#0E0E0E" />
              </radialGradient>
              <linearGradient id="nf-rim" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(255,255,255,0.22)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.03)" />
              </linearGradient>
            </defs>

            {/* Échelle et arc qui suit la molette */}
            <path d={ARC} stroke={K.line} strokeWidth={2} strokeLinecap="round" />
            <motion.path d={ARC} stroke={K.orange} strokeWidth={2.5} strokeLinecap="round" strokeDasharray={ARC_LEN} style={{ strokeDashoffset: offset }} />
            {TICKS.map((d, i) => {
              const major = i % 5 === 0;
              const [x1, y1] = polar(major ? 147 : 152, d);
              const [x2, y2] = polar(159, d);
              return <line key={d} x1={x1} y1={y1} x2={x2} y2={y2} stroke={major ? "rgba(243,241,238,0.55)" : "rgba(243,241,238,0.22)"} strokeWidth={major ? 1.6 : 1} strokeLinecap="round" />;
            })}
            {/* Hors de l'échelle : l'arc du bas s'allume quand la molette y passe */}
            <motion.path d={GAP} stroke={K.hot} strokeWidth={2} strokeDasharray="2 7" strokeLinecap="round" style={{ opacity: outOfRange }} />

            {/* Bornes de l'échelle, sous les extrémités de l'arc */}
            <text x={polar(190, -SPAN - 9)[0]} y={polar(190, -SPAN - 9)[1] + 4} textAnchor="middle" fontSize={10} letterSpacing="1.4" fill={K.faint} style={{ fontFamily: MONO }}>
              MIN
            </text>
            <text x={polar(190, SPAN + 9)[0]} y={polar(190, SPAN + 9)[1] + 4} textAnchor="middle" fontSize={10} letterSpacing="1.4" fill={K.faint} style={{ fontFamily: MONO }}>
              MAX
            </text>
            {/* Molette */}
            <circle cx={C} cy={C} r={132} fill="url(#nf-face)" stroke="url(#nf-rim)" strokeWidth={1.2} />
            <circle cx={C} cy={C} r={118} stroke="rgba(255,255,255,0.05)" strokeWidth={1} />
            <motion.g style={{ transform: knob, transformOrigin: "200px 200px", transformBox: "view-box" }}>
              {/* Stries de préhension sur le bord de la molette */}
              {Array.from({ length: 60 }, (_, i) => {
                const [x1, y1] = polar(124, i * 6);
                const [x2, y2] = polar(131, i * 6);
                return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(255,255,255,0.1)" strokeWidth={1} />;
              })}
              {/* Repère de la molette */}
              <line x1={C} y1={C - 131} x2={C} y2={C - 104} stroke={K.orange} strokeWidth={3} strokeLinecap="round" />
              <circle cx={C} cy={C - 172} r={4.5} fill={K.hot} />
            </motion.g>
          </svg>

          {/* Afficheur central */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-[10px] uppercase sm:text-[11px]" style={{ fontFamily: MONO, letterSpacing: "0.22em", color: K.faint }}>
              Consigne
            </span>
            <span className="mt-1" style={{ fontSize: "clamp(64px, min(9vh, 8vw), 104px)", fontWeight: 200, letterSpacing: "-0.06em", lineHeight: 0.9, fontVariantNumeric: "tabular-nums" }}>
              404
            </span>
            <span className="ou-h-blink mt-3 flex items-center gap-1.5 text-[10px] uppercase sm:text-[11px]" style={{ fontFamily: MONO, letterSpacing: "0.2em", color: K.hot }}>
              <svg width="8" height="8" viewBox="0 0 8 8" aria-hidden="true">
                <path d="M4 0 8 7H0Z" fill="currentColor" />
              </svg>
              Hors plage
            </span>
          </div>
        </motion.div>

        {/* ── Texte ── */}
        <Up delay={0.25} className="mt-7">
          <p className="text-[11px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.24em", color: K.faint, margin: 0 }}>
            Erreur 404
          </p>
        </Up>
        <h1 id="nf-titre" className="mt-4" style={{ fontSize: "clamp(40px, 4.4vw, 68px)", fontWeight: 500, letterSpacing: "-0.045em", lineHeight: 1, margin: "16px 0 0" }}>
          <Up delay={0.35} as="span" className="inline-block">
            Page
          </Up>{" "}
          <Up delay={0.45} as="span" className="inline-block">
            introuvable<span style={{ color: K.orange }}>.</span>
          </Up>
        </h1>
        <Up delay={0.6}>
          <p className="mx-auto max-w-[560px] text-[16.5px] leading-[1.65] sm:text-[17.5px]" style={{ color: K.mute, margin: "20px auto 0" }}>
            La page que vous cherchez n’existe pas ou a été déplacée. Le cadran ne trouve pas sa consigne&nbsp;: voici les chemins les plus fréquentés.
          </p>
        </Up>
        <Up delay={0.75} className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link href="/" className="ou-btn inline-flex items-center gap-3 rounded-full px-7 py-[15px] text-[15px] font-semibold" style={{ background: K.orange, color: "#fff" }}>
            Retour à l’accueil
            <Arrow />
          </Link>
          <Link href="/thermopompes" className="ou-btn inline-flex items-center rounded-full px-7 py-[14px] text-[15px] font-semibold" style={{ border: `1px solid ${K.line}`, color: K.white }}>
            Explorer les thermopompes
          </Link>
        </Up>

        {/* ── Chemins utiles : quatre « préréglages » ── */}
        <Up delay={0.95} className="mt-14 w-full text-left lg:mt-16">
          <p className="text-[11px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.22em", color: K.faint, margin: 0 }}>
            Chemins utiles
          </p>
          <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ listStyle: "none", padding: 0, margin: "16px 0 0", borderTop: `1px solid ${K.line}` }}>
            {LINKS.map((l, i) => (
              <li key={l.href} className={i ? "lg:border-l" : ""} style={{ borderColor: K.line }}>
                <Link href={l.href} className="ou-h-preset flex h-full items-start justify-between gap-4 border-b px-1 py-5 sm:px-5" style={{ borderColor: K.line }}>
                  <span className="min-w-0">
                    <span className="block text-[11px]" style={{ fontFamily: MONO, color: K.hot, letterSpacing: "0.12em" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="mt-2 block text-[16px] font-semibold" style={{ color: K.white, letterSpacing: "-0.01em" }}>
                      {l.label}
                    </span>
                    <span className="mt-1 block text-[13px]" style={{ color: K.faint }}>
                      {l.note}
                    </span>
                  </span>
                  <span className="ou-arrow mt-6 shrink-0" style={{ color: K.mute }}>
                    <Arrow size={17} />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Up>
      </div>
    </section>
  );
}

function Arrow({ size = 15 }: { size?: number }) {
  return (
    <svg className="ou-arrow" aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

function Up({ children, delay = 0, className, as = "div" }: { children: ReactNode; delay?: number; className?: string; as?: "div" | "span" }) {
  const reduce = useReduced();
  const M = as === "span" ? motion.span : motion.div;
  return (
    <M className={className} initial={reduce ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: HERO_EASE, delay }}>
      {children}
    </M>
  );
}
