"use client";

import "./company-hero.css";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { HC, HERO_EASE, HeroActions, HeroButton, HeroEyebrow, HeroFade, HeroLead, HeroShell, HeroStats, HeroTitle, Serif } from "@/components/hero/HeroKit";
import { cxLabel } from "./HeroLinkButton";

/* ==================================================================
   Héros de /carriere : « Bâtissons ensemble le confort de demain. »
   Visuel : un plan d'architecte qui se trace trait par trait — maison,
   unité murale, liaison frigorifique, unité extérieure. L'air circule,
   l'hélice tourne. Les repères 01, 02, 03 renvoient aux vrais postes
   ouverts (fournis par la page).
   ================================================================== */

export type Poste = { title: string; type: string; loc: string };

// Position des repères sur le plan (dans l'ordre des postes).
const MARKERS = [
  { x: 236, y: 118 }, // faîte : le produit (ThermoMatch)
  { x: 433, y: 346 }, // porte : l'expérience client
  { x: 518, y: 362 }, // unité extérieure : le réseau d'installateurs
];

export function CareerHero({ postes }: { postes: Poste[] }) {
  return (
    <HeroShell size="lg" labelledBy="carriere-titre" visual={<Blueprint postes={postes} />}>
      <HeroEyebrow>Carrières</HeroEyebrow>
      <HeroTitle
        id="carriere-titre"
        style={{ fontSize: "clamp(38px, 4.8vw, 86px)" }}
        lines={[
          "Bâtissons ensemble",
          <>
            le confort <Serif>de demain.</Serif>
          </>,
        ]}
      />
      <HeroLead>Nous sommes toujours à la recherche de talents passionnés pour simplifier l’achat et l’installation de thermopompes au Québec.</HeroLead>
      <HeroActions>
        <HeroButton href="#postes">Voir les postes ouverts</HeroButton>
        <HeroButton href="/contact" variant="ghost">
          Nous écrire
        </HeroButton>
      </HeroActions>
      {postes.length > 0 && <HeroStats items={[{ value: postes.length, label: postes.length > 1 ? "postes ouverts" : "poste ouvert" }]} delay={1.05} />}
    </HeroShell>
  );
}

function Blueprint({ postes }: { postes: Poste[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [20, -20]);

  // Trait qui se dessine (ou déjà là si « réduire les animations »).
  const draw = (delay: number, dur = 1.5) =>
    reduce
      ? {}
      : {
          initial: { pathLength: 0, opacity: 0 },
          animate: { pathLength: 1, opacity: 1 },
          transition: { pathLength: { duration: dur, ease: HERO_EASE, delay }, opacity: { duration: 0.2, delay } },
        };
  const appear = (delay: number) => (reduce ? {} : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.8, delay } });

  const cream = "rgba(244,239,231,0.78)";
  const faint = "rgba(244,239,231,0.3)";
  const shown = postes.slice(0, MARKERS.length);

  return (
    <div ref={ref} className="relative">
      <motion.div style={reduce ? undefined : { y }}>
        <svg viewBox="0 0 560 450" className="h-auto w-full" role="img" aria-label="Plan d’une maison équipée d’une thermopompe : unité murale, liaison frigorifique et unité extérieure">
          <g fill="none" strokeLinecap="round" strokeLinejoin="round">
            {/* Cotes */}
            <motion.path d="M96 78 H376 M96 70 V86 M376 70 V86" stroke={faint} strokeWidth={1} {...draw(1.6, 1)} />
            <motion.path d="M56 236 V420 M48 236 H64 M48 420 H64" stroke={faint} strokeWidth={1} {...draw(1.7, 1)} />
            {/* Sol */}
            <motion.path d="M16 420 H544" stroke={faint} strokeWidth={1.2} {...draw(0.3, 1.2)} />
            {/* Maison principale, toit à deux versants */}
            <motion.path d="M96 420 V236 L236 128 L376 236 V420" stroke={cream} strokeWidth={1.6} {...draw(0.45)} />
            <motion.path d="M78 250 L236 116 L394 250" stroke={cream} strokeWidth={1.6} {...draw(0.6)} />
            {/* Agrandissement à toit plat */}
            <motion.path d="M376 300 H486 V420 M366 300 H496" stroke={cream} strokeWidth={1.6} {...draw(0.75)} />
            {/* Fenêtres, lucarne, porte */}
            <motion.path d="M128 284 H208 V346 H128 Z M168 284 V346" stroke={cream} strokeWidth={1.2} {...draw(0.95, 1.1)} />
            <motion.path d="M262 284 H342 V346 H262 Z M302 284 V346" stroke={cream} strokeWidth={1.2} {...draw(1.05, 1.1)} />
            <motion.path d="M216 180 H256 V212 H216 Z" stroke={cream} strokeWidth={1.2} {...draw(1.1, 1)} />
            <motion.path d="M414 420 V352 H452 V420" stroke={cream} strokeWidth={1.2} {...draw(1.15, 1)} />
            {/* Unité murale */}
            <motion.path d="M150 246 H254 V264 H150 Z" stroke={HC.orange} strokeWidth={1.6} {...draw(1.3, 0.9)} />
            {/* Liaison frigorifique */}
            <motion.path d="M496 392 H458 V316 H358 V255 H254" stroke={HC.orange} strokeWidth={1.3} strokeDasharray="4 5" {...appear(1.9)} />
            {/* Unité extérieure et hélice */}
            <motion.path d="M496 370 H540 V416 H496 Z" stroke={cream} strokeWidth={1.4} {...draw(1.4, 0.9)} />
            <motion.g {...appear(1.8)}>
              <circle cx={518} cy={393} r={14} stroke={faint} strokeWidth={1} />
              <g className="cx-spin">
                <path d="M518 393 L518 381 M518 393 L528.4 399 M518 393 L507.6 399" stroke={cream} strokeWidth={1.4} />
              </g>
            </motion.g>
          </g>
          {/* Air chaud qui descend de l'unité murale */}
          <motion.g fill="none" stroke={HC.orange} strokeWidth={1.4} strokeLinecap="round" {...appear(2.1)}>
            <path className="cx-flow" d="M164 272 C 178 298, 152 322, 172 352 S 160 392, 176 410" style={{ animationDuration: "7s" }} />
            <path className="cx-flow" d="M202 272 C 216 302, 190 330, 212 362 S 198 396, 214 410" style={{ animationDuration: "8.5s" }} />
            <path className="cx-flow" d="M240 272 C 254 300, 230 326, 250 356 S 238 394, 252 410" style={{ animationDuration: "10s" }} />
          </motion.g>
          {/* Repères des postes */}
          {shown.map((_, i) => {
            const m = MARKERS[i];
            return (
              <motion.g key={i} {...appear(2.2 + i * 0.15)}>
                <rect x={m.x - 4} y={m.y - 4} width={8} height={8} fill={HC.orange} />
                <text x={m.x + 9} y={m.y - 8} fill={HC.cream} fontSize={12} fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" letterSpacing="0.06em">
                  {String(i + 1).padStart(2, "0")}
                </text>
              </motion.g>
            );
          })}
        </svg>
      </motion.div>

      {/* Légende : les postes ouverts */}
      {shown.length > 0 && (
        <HeroFade delay={1.3} className="mt-10">
          <p style={{ ...cxLabel, margin: 0 }}>Postes ouverts sur le chantier</p>
          <ul className="mt-3" style={{ listStyle: "none", margin: "12px 0 0", padding: 0 }}>
            {shown.map((p, i) => (
              <li key={p.title} className="grid grid-cols-[34px_minmax(0,1fr)] items-baseline gap-2 py-2.5" style={{ borderTop: `1px solid ${HC.line}` }}>
                <span className="text-[12px]" style={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace", color: HC.orange }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0">
                  <span className="block text-[15px] font-medium leading-snug" style={{ color: HC.cream }}>
                    {p.title}
                  </span>
                  <span className="block text-[13px]" style={{ color: HC.faint }}>
                    {p.type} · {p.loc}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </HeroFade>
      )}
    </div>
  );
}
