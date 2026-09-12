"use client";

import "./tools-hero.css";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { HC, HERO_EASE, HeroActions, HeroButton, HeroEyebrow, HeroLead, HeroShell, HeroTitle, Serif } from "@/components/hero/HeroKit";
import { CountUp } from "@/components/home/premium/shared";

/* ==================================================================
   Héros de /technologie-thermomatch : l'entonnoir des machines évaluées.
   Le schéma se trace à l'arrivée (contour, puis six filtres tirés des
   critères de la page), puis des points — les machines — tombent en
   continu : la plupart sont écartées à un filtre, quelques-unes
   atteignent les trois places retenues. Seuls chiffres affichés : le
   nombre de modèles évalués (catalogue) et les 3 machines retenues.
   ================================================================== */

const W = 520;
const H = 600;
const CX = 176; // axe de l'entonnoir (à gauche ; les libellés occupent la droite)
const TOP = 176; // embouchure
const NECK = 478; // goulot
const HW_TOP = 148;
const HW_NECK = 16;

/** Demi-largeur de l'entonnoir à la hauteur y (profil concave). */
function hw(y: number) {
  const t = Math.min(1, Math.max(0, (y - TOP) / (NECK - TOP)));
  return HW_NECK + (HW_TOP - HW_NECK) * Math.pow(1 - t, 1.7);
}

/* Les six critères de la section « Ce que ThermoMatch analyse », en libellés courts (une ligne, même sur mobile). */
const GATES = [
  { n: "01", label: "Votre propriété" },
  { n: "02", label: "L’hiver d’ici" },
  { n: "03", label: "Capacité requise" },
  { n: "04", label: "Votre confort" },
  { n: "05", label: "Votre budget" },
  { n: "06", label: "Aides disponibles" },
].map((g, i) => ({ ...g, y: 214 + i * 46 }));

const SLOTS = [CX - 56, CX, CX + 56];
const SLOT_Y = 548;

function side(sign: 1 | -1) {
  const pts: string[] = [];
  for (let y = TOP; y <= NECK; y += 6) pts.push(`${(CX + sign * hw(y)).toFixed(1)} ${y}`);
  pts.push(`${(CX + sign * HW_NECK).toFixed(1)} ${NECK + 26}`);
  return `M${pts.join(" L")}`;
}
const LEFT_WALL = side(-1);
const RIGHT_WALL = side(1);

/* Générateur pseudo-aléatoire à graine fixe : mêmes points côté serveur et client. */
function rng(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

type Drop = { x: number; y: number; r: number; style: CSSProperties; kept: boolean };

const DROPS: Drop[] = (() => {
  const rand = rng(20260912);
  const out: Drop[] = [];
  const N = 34;
  for (let k = 0; k < N; k++) {
    const x0 = CX + (rand() * 2 - 1) * (HW_TOP - 18);
    const y0 = TOP - 30 - rand() * 26;
    const kept = k % 11 === 3; // 3 machines sur 34 passent tous les filtres
    const d = 5.6 + rand() * 3.4;
    let mx: number, my: number, ex: number, ey: number;
    if (kept) {
      mx = CX - x0;
      my = NECK + 10 - y0;
      const slot = SLOTS[Math.floor(k / 11) % 3];
      ex = slot - x0;
      ey = SLOT_Y - y0;
    } else {
      const g = GATES[Math.floor(rand() * GATES.length)];
      const half = hw(g.y);
      const gx = CX + (rand() * 2 - 1) * half * 0.75;
      mx = gx - x0;
      my = g.y - y0;
      const dir = rand() < 0.5 ? -1 : 1;
      ex = CX + dir * (half + 22 + rand() * 26) - x0;
      ey = g.y + 14 + rand() * 18 - y0;
    }
    out.push({
      x: x0,
      y: y0,
      r: kept ? 3.6 : 2.2 + rand() * 1.1,
      kept,
      style: {
        "--mx": `${mx.toFixed(1)}px`,
        "--my": `${my.toFixed(1)}px`,
        "--ex": `${ex.toFixed(1)}px`,
        "--ey": `${ey.toFixed(1)}px`,
        "--d": `${d.toFixed(2)}s`,
        "--w": `${(-rand() * d).toFixed(2)}s`,
        "--o": kept ? "1" : (0.4 + rand() * 0.35).toFixed(2),
      } as CSSProperties,
    });
  }
  return out;
})();

/* Nuage de machines au-dessus de l'embouchure (fixe, il « alimente » le flux). */
const CLOUD = (() => {
  const rand = rng(7);
  return Array.from({ length: 64 }, () => ({ x: CX + (rand() * 2 - 1) * (HW_TOP + 6), y: 118 + rand() * 44, r: 1.2 + rand() * 1.4, o: 0.14 + rand() * 0.3 }));
})();

export function ThermoMatchTechHero({ modelCount }: { modelCount: number }) {
  return (
    <HeroShell labelledBy="tm-titre" size="lg" snow={0.22} columns="lg:grid-cols-[1.05fr_0.95fr]" visual={<MatchFunnel modelCount={modelCount} />}>
      <HeroEyebrow>
        <span className="inline-flex items-center gap-3">
          Technologie
          <img src="/images/logo-thermomatch-nav.webp" alt="ThermoMatch" width={118} height={16} style={{ width: 118, height: 16, maxWidth: "none", display: "block" }} />
        </span>
      </HeroEyebrow>
      <HeroTitle
        id="tm-titre"
        lines={[
          // Espace en fin de ligne : garde le texte du h1 lisible pour les lecteurs d'écran et les moteurs.
          "Votre maison. ",
          "Vos critères. ",
          <>
            Les bonnes <Serif>options.</Serif>
          </>,
        ]}
        style={{ fontSize: "clamp(42px, min(4.9vw, 11vh), 96px)" }}
      />
      <HeroLead>ThermoMatch transforme les caractéristiques de votre propriété et vos priorités en recommandations faciles à comprendre.</HeroLead>
      <HeroActions>
        <HeroButton href="/trouver-ma-thermopompe">Commencer mon analyse</HeroButton>
        <HeroButton href="#fonctionnement" variant="ghost">
          Voir comment ça fonctionne
        </HeroButton>
      </HeroActions>
    </HeroShell>
  );
}

function MatchFunnel({ modelCount }: { modelCount: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = !!useReducedMotion();
  const [play, setPlay] = useState(false);
  useEffect(() => {
    const t = window.setTimeout(() => setPlay(true), 700);
    return () => window.clearTimeout(t);
  }, []);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  // Au défilement, les filtres se resserrent légèrement vers l'axe.
  const spread = useTransform(scrollYProgress, [0.3, 0.8], [0, -10]);

  const draw = (delay: number, duration = 1.6) => ({
    initial: reduce ? false : { pathLength: 0, opacity: 0 },
    animate: { pathLength: 1, opacity: 1 },
    transition: { pathLength: { duration, ease: HERO_EASE, delay }, opacity: { duration: 0.2, delay } },
  });
  const fade = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, x: 12 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: HERO_EASE, delay },
  });

  return (
    <motion.div ref={ref} className="relative mx-auto w-full max-w-[560px] lg:ml-auto lg:mr-0" style={reduce ? undefined : { y }} aria-hidden="true">
      <div className="relative" style={{ aspectRatio: `${W} / ${H}` }}>
        <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 h-full w-full overflow-visible" fill="none">
          {/* Nuage des machines évaluées */}
          <motion.g initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4, delay: 0.5 }}>
            {CLOUD.map((p, k) => (
              <circle key={k} cx={p.x} cy={p.y} r={p.r} fill={HC.cream} opacity={p.o} />
            ))}
          </motion.g>

          {/* Parois de l'entonnoir */}
          <motion.path d={LEFT_WALL} stroke={HC.cream} strokeOpacity={0.55} strokeWidth={1.3} strokeLinecap="round" {...draw(0.4)} />
          <motion.path d={RIGHT_WALL} stroke={HC.cream} strokeOpacity={0.55} strokeWidth={1.3} strokeLinecap="round" {...draw(0.4)} />
          <motion.path d={`M${CX - HW_TOP - 18} ${TOP} H${CX + HW_TOP + 18}`} stroke={HC.cream} strokeOpacity={0.22} strokeWidth={1} strokeDasharray="2 5" {...draw(0.3, 1.2)} />

          {/* Six filtres : pointillés dans l'entonnoir, trait de rappel vers le libellé */}
          {GATES.map((g, i) => {
            const half = hw(g.y);
            return (
              <motion.g key={g.n} style={reduce ? undefined : { x: 0, y: spread }}>
                <motion.path d={`M${CX - half + 4} ${g.y} H${CX + half - 4}`} stroke={HC.cream} strokeOpacity={0.3} strokeWidth={1} strokeDasharray="3 5" {...draw(1 + i * 0.14, 0.9)} />
                <motion.path d={`M${CX + half + 8} ${g.y} H${W * 0.655}`} stroke={HC.cream} strokeOpacity={0.14} strokeWidth={1} {...draw(1.1 + i * 0.14, 0.8)} />
                <motion.circle cx={CX + half} cy={g.y} r={3} fill={HC.orange} initial={reduce ? false : { scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, ease: HERO_EASE, delay: 1.2 + i * 0.14 }} />
              </motion.g>
            );
          })}

          {/* Flux continu des machines */}
          {!reduce && (
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 2.1 }}>
              {DROPS.map((p, k) => (
                <circle key={k} className="th-drop" cx={p.x} cy={p.y} r={p.r} fill={p.kept ? HC.orange : HC.cream} style={p.style} />
              ))}
            </motion.g>
          )}

          {/* Trois places retenues */}
          {SLOTS.map((x, i) => (
            <motion.g key={x} initial={reduce ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: HERO_EASE, delay: 2 + i * 0.12 }}>
              <rect x={x - 22} y={SLOT_Y - 17} width={44} height={34} rx={9} fill={i === 0 ? HC.orange : HC.panel} stroke={i === 0 ? HC.orange : "rgba(244,239,231,0.28)"} />
              <text x={x} y={SLOT_Y + 5} textAnchor="middle" fontSize={14} fontWeight={600} fill={HC.cream} style={{ fontFamily: "inherit" }}>
                {i + 1}
              </text>
            </motion.g>
          ))}
        </svg>

        {/* Nombre de modèles évalués, au-dessus du nuage */}
        {/* Sur une seule ligne : « Près de 3 900 modèles évalués » ne touche pas le nuage, même sur mobile. */}
        <motion.p
          className="absolute left-0 top-0 flex items-baseline gap-2.5"
          style={{ margin: 0 }}
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: HERO_EASE, delay: 0.5 }}
        >
          <span className="text-[11px] font-medium uppercase" style={{ color: HC.faint, letterSpacing: "0.16em" }}>
            Près de
          </span>
          <span style={{ fontSize: "clamp(32px, 3.4vw, 52px)", fontWeight: 600, letterSpacing: "-0.05em", lineHeight: 1 }}>
            <CountUp value={modelCount} play={play} />
          </span>
          <span className="text-[12.5px] sm:text-[13.5px]" style={{ color: HC.mute }}>
            modèles évalués
          </span>
        </motion.p>

        {/* Libellés des filtres, alignés sur leur trait */}
        {GATES.map((g, i) => (
          <motion.div
            key={g.n}
            className="absolute flex -translate-y-1/2 items-baseline gap-2"
            style={{ left: `${(W * 0.675 * 100) / W}%`, top: `${(g.y / H) * 100}%`, right: 0 }}
            {...fade(1.2 + i * 0.14)}
          >
            <span className="text-[10.5px] font-semibold tabular-nums" style={{ color: HC.orange, letterSpacing: "0.08em" }}>
              {g.n}
            </span>
            <span className="whitespace-nowrap text-[11.5px] leading-tight sm:text-[13.5px]" style={{ color: HC.mute }}>
              {g.label}
            </span>
          </motion.div>
        ))}

        {/* Résultat */}
        <motion.div className="absolute -translate-y-1/2" style={{ left: `${67.5}%`, top: `${(SLOT_Y / H) * 100}%`, right: 0 }} {...fade(2.3)}>
          <span className="block text-[14px] font-semibold leading-tight sm:text-[16px]" style={{ letterSpacing: "-0.01em" }}>
            3 machines retenues
          </span>
          <span className="mt-1 block text-[11.5px] sm:text-[12.5px]" style={{ color: HC.faint }}>
            classées selon vos priorités
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}
