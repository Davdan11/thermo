"use client";

import "./tools-hero.css";
import type { CSSProperties } from "react";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { HC, HERO_EASE, HeroActions, HeroButton, HeroEyebrow, HeroFade, HeroLead, HeroShell, HeroTitle, Serif, HeroArrow } from "@/components/hero/HeroKit";

/* ==================================================================
   Page 404 : tempête de neige. Neige dense, rafales qui filent, « 404 »
   géant en contour qui tangue au vent, à moitié pris dans une congère.
   Les chemins utiles mènent aux outils du site.
   ================================================================== */

const LINKS = [
  { href: "/trouver-ma-thermopompe", label: "Trouver ma thermopompe", note: "Questionnaire ThermoMatch" },
  { href: "/subventions", label: "Vérifier les subventions", note: "LogisVert d’Hydro-Québec" },
  { href: "/thermoscan", label: "Scanner mon appareil actuel", note: "ThermoScan" },
  { href: "/comparer", label: "Comparer des modèles", note: "Comparateur" },
];

const GUSTS = [
  { y: 90, d: 6.5, w: 0 },
  { y: 180, d: 8, w: -3 },
  { y: 260, d: 5.8, w: -1.5 },
  { y: 330, d: 7.2, w: -5 },
  { y: 420, d: 6.2, w: -2.4 },
  { y: 500, d: 8.6, w: -6 },
  { y: 570, d: 7, w: -4 },
];

export function NotFoundHero() {
  return (
    <HeroShell labelledBy="nf-titre" size="lg" snow={2.2} background={<Gusts />} columns="lg:grid-cols-[0.92fr_1.08fr]" visual={<Giant404 />}>
      <HeroEyebrow>Erreur 404</HeroEyebrow>
      <HeroTitle
        id="nf-titre"
        size="lg"
        lines={[
          // Espace en fin de ligne : sinon le h1 se lit « Pageintrouvable ».
          "Page ",
          <>
            <Serif>introuvable</Serif>
            <span style={{ color: HC.orange }}>.</span>
          </>,
        ]}
      />
      <HeroLead>La page que vous cherchez n’existe pas ou a été déplacée. La tempête a effacé les traces&nbsp;: voici les chemins les plus fréquentés.</HeroLead>
      <HeroActions>
        <HeroButton href="/">Retour à l’accueil</HeroButton>
        <HeroButton href="/thermopompes" variant="ghost">
          Explorer les thermopompes
        </HeroButton>
      </HeroActions>
      <HeroFade delay={1.05} className="mt-12 max-w-[560px]">
        <p className="text-[11.5px] font-medium uppercase" style={{ color: HC.faint, letterSpacing: "0.18em", margin: 0 }}>
          Chemins utiles
        </p>
        <ul style={{ listStyle: "none", margin: "12px 0 0", padding: 0, borderTop: `1px solid ${HC.line}` }}>
          {LINKS.map((l) => (
            <li key={l.href} style={{ borderBottom: `1px solid ${HC.line}` }}>
              <Link href={l.href} className="th-row flex items-center justify-between gap-4 py-3.5">
                <span className="min-w-0">
                  <span className="block text-[16px] font-semibold" style={{ color: HC.cream, letterSpacing: "-0.01em" }}>
                    {l.label}
                  </span>
                  <span className="mt-0.5 block text-[13px]" style={{ color: HC.faint }}>
                    {l.note}
                  </span>
                </span>
                <span className="th-row-arrow shrink-0" style={{ color: HC.mute }}>
                  <HeroArrow size={17} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </HeroFade>
    </HeroShell>
  );
}

/* Rafales : traits courts qui filent de gauche à droite sur toute la largeur. */
function Gusts() {
  return (
    <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1440 660" preserveAspectRatio="none" fill="none">
      {GUSTS.map((g, i) => (
        <path
          key={g.y}
          className="th-gust"
          d={`M-80 ${g.y} C 300 ${g.y - 34}, 620 ${g.y + 30}, 900 ${g.y - 6} S 1300 ${g.y - 30}, 1520 ${g.y + 4}`}
          stroke={HC.cream}
          strokeOpacity={i % 2 ? 0.16 : 0.24}
          strokeWidth={1.2}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          style={{ "--d": `${g.d}s`, "--w": `${g.w}s` } as CSSProperties}
        />
      ))}
    </svg>
  );
}

/* « 404 » géant en contour, pris dans une congère ; il remonte au défilement. */
function Giant404() {
  const reduce = !!useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, -110]);
  const drift = useTransform(scrollY, [0, 700], [0, 40]);
  const digits = [
    { c: "4", r: "-1.6deg", x: "-5px", d: 8.4, w: 0 },
    { c: "0", r: "1.2deg", x: "4px", d: 9.6, w: -2.2 },
    { c: "4", r: "-1deg", x: "-3px", d: 7.6, w: -4.1 },
  ];
  return (
    <div aria-hidden="true" className="relative mx-auto flex w-full max-w-[720px] items-end justify-center overflow-hidden lg:overflow-visible">
      <motion.div style={reduce ? undefined : { y }} className="relative">
        <p
          className="flex select-none justify-center"
          style={{ fontSize: "clamp(150px, 23vw, 390px)", fontWeight: 600, letterSpacing: "-0.07em", lineHeight: 0.82, margin: 0, paddingBottom: "0.08em" }}
        >
          {digits.map((d, i) => (
            <motion.span
              key={i}
              style={{ display: "inline-block" }}
              initial={reduce ? false : { y: "40%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 1.4, ease: HERO_EASE, delay: 0.3 + i * 0.12 }}
            >
              <span
                className="th-sway"
                style={
                  {
                    // Le « 4 » a des contours qui se chevauchent : en contour, ses traits internes apparaîtraient.
                    // Les 4 sont donc pleins et discrets ; seul le 0 (sans chevauchement) est tracé en orange.
                    color: i === 1 ? "transparent" : "rgba(244,239,231,0.13)",
                    WebkitTextStroke: i === 1 ? `2px ${HC.orange}` : "0",
                    "--r": d.r,
                    "--x": d.x,
                    "--d": `${d.d}s`,
                    "--w": `${d.w}s`,
                  } as CSSProperties
                }
              >
                {d.c}
              </span>
            </motion.span>
          ))}
        </p>
        {/* Congère : deux couches qui montent à l'arrivée, puis glissent au défilement. */}
        <motion.svg
          className="absolute inset-x-[-8%] bottom-[-2px] h-[38%] w-[116%]"
          viewBox="0 0 800 200"
          preserveAspectRatio="none"
          fill="none"
          // Bords fondus : la congère ne s'arrête pas net de chaque côté.
          style={{
            ...(reduce ? {} : { x: drift }),
            maskImage: "linear-gradient(90deg, transparent 0%, #000 18%, #000 82%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(90deg, transparent 0%, #000 18%, #000 82%, transparent 100%)",
          }}
          initial={reduce ? false : { scaleY: 0.2, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 2.4, ease: HERO_EASE, delay: 0.9 }}
        >
          <path d="M0 120 C 90 70, 190 96, 280 84 S 470 40, 560 70 S 720 96, 800 64 V200 H0 Z" fill={HC.cream} fillOpacity={0.07} />
          <path d="M0 150 C 120 112, 230 132, 340 116 S 540 98, 640 120 S 760 132, 800 110 V200 H0 Z" fill={HC.ink} />
          <path d="M0 150 C 120 112, 230 132, 340 116 S 540 98, 640 120 S 760 132, 800 110" stroke={HC.cream} strokeOpacity={0.4} strokeWidth={1.2} vectorEffect="non-scaling-stroke" />
        </motion.svg>
      </motion.div>
    </div>
  );
}
