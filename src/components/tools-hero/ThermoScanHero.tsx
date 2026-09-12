"use client";

import "./tools-hero.css";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useReducedMotion, useScroll, useTransform } from "motion/react";
import { HC, HERO_EASE, HeroActions, HeroButton, HeroFade, HeroLead, HeroShell, HeroTitle, Serif } from "@/components/hero/HeroKit";
import { ToolStats } from "./ToolStats";

/* ==================================================================
   Héros de /thermoscan : un viseur d'appareil photo sur une vraie
   thermopompe Mitsubishi Electric. Cycle en trois temps tant qu'il est
   à l'écran : cadrage → les coins se resserrent sur la plaque
   signalétique et l'image s'y rapproche, les champs se lisent un à un
   → fiche prête. Même textes, liens et chiffres que l'ancien héros ;
   les champs lus restent génériques (aucune valeur inventée).
   ================================================================== */

const FIELDS: Array<[string, string]> = [
  ["Marque", "Mitsubishi Electric"],
  ["N° de modèle", "Lu sur la plaque"],
  ["Année", "Détectée"],
  ["Fiche ENERGY STAR", "Trouvée"],
];

const FACTS: Array<[string, string]> = [
  ["< 1 min", "de la photo à la fiche"],
  ["2011 à 2026", "modèles ENERGY STAR reconnus"],
  ["0 photo", "conservée après lecture"],
];

/* Plaque signalétique dans la photo carrée, en %. */
const PLATE = { left: 62.5, top: 46, width: 8.5, height: 16.5 };
const ORIGIN = { x: PLATE.left + PLATE.width / 2, y: PLATE.top + PLATE.height / 2 };
const ZOOM = 2.1;
/* Boîte de la plaque une fois l'image agrandie autour d'ORIGIN (+ marge). */
const PLATE_ZOOMED = {
  left: ORIGIN.x + (PLATE.left - ORIGIN.x) * ZOOM - 2,
  top: ORIGIN.y + (PLATE.top - ORIGIN.y) * ZOOM - 2,
  width: PLATE.width * ZOOM + 4,
  height: PLATE.height * ZOOM + 4,
};
const PHASES = [
  { key: "cadrage", label: "Cadrage", ms: 2600 },
  { key: "lecture", label: "Lecture", ms: 4400 },
  { key: "fiche", label: "Fiche prête", ms: 3200 },
];

export function ThermoScanHero() {
  return (
    <HeroShell labelledBy="ts-titre" size="md" snow={0.18} columns="lg:grid-cols-[1.02fr_0.98fr]" visual={<ScanViewfinder />}>
      <HeroFade delay={0}>
        <nav aria-label="Fil d’Ariane">
          <ol className="flex flex-wrap items-center gap-2 text-[12.5px]" style={{ color: HC.faint, listStyle: "none", margin: 0, padding: 0 }}>
            <li>
              <Link href="/" className="th-crumb">
                Accueil
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/comparer" className="th-crumb">
                Comparer
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" style={{ color: HC.mute }}>
              ThermoScan
            </li>
          </ol>
        </nav>
      </HeroFade>
      {/* Le logo a une marge transparente : léger décalage pour aligner le pictogramme sur le texte. */}
      <HeroFade delay={0.1} className="mt-7">
        <img src="/images/thermoscan-logo.webp" alt="ThermoScan" width={900} height={325} style={{ height: 52, width: "auto", margin: "0 0 -10px -3px", display: "block" }} />
      </HeroFade>
      <HeroTitle
        id="ts-titre"
        lines={[
          // Espace en fin de ligne : garde le texte du h1 lisible pour les lecteurs d'écran et les moteurs.
          "Une photo de ",
          "l’étiquette. ",
          "La fiche complète ",
          <>
            de <Serif>votre thermopompe.</Serif>
          </>,
        ]}
        style={{ fontSize: "clamp(38px, min(4.2vw, 8vh), 76px)" }}
      />
      <HeroLead>ThermoScan lit la plaque signalétique de l’appareil que vous avez déjà, retrouve sa fiche certifiée et mesure ce que vous gagneriez avec un modèle d’aujourd’hui.</HeroLead>
      <HeroActions>
        <HeroButton href="#scanner">Scanner mon appareil</HeroButton>
        <HeroButton href="#etiquette" variant="ghost">
          {"Où est l’étiquette ?"}
        </HeroButton>
      </HeroActions>
      {/* Mêmes trois repères que l'ancien héros (valeurs textuelles, affichées telles quelles). */}
      <ToolStats items={FACTS.map(([value, label]) => ({ value, label }))} />
    </HeroShell>
  );
}

function ScanViewfinder() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = !!useReducedMotion();
  const inView = useInView(ref, { margin: "0px 0px -10% 0px" });
  // -1 : avant le premier cycle (le temps que le héros apparaisse).
  const [phase, setPhase] = useState(reduce ? 1 : -1);

  useEffect(() => {
    if (reduce) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- valeur finale affichée d'un coup (animations réduites ou démarrage)
      setPhase(1);
      return;
    }
    if (!inView) return;
    const ms = phase < 0 ? 900 : PHASES[phase].ms;
    const t = window.setTimeout(() => setPhase((p) => (p + 1) % PHASES.length), ms);
    return () => window.clearTimeout(t);
  }, [phase, inView, reduce]);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  // Parallaxe vers le haut seulement : la carte du scanner, qui chevauche le bas du héros, ne recouvre jamais le viseur.
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const tilt = useTransform(scrollYProgress, [0, 1], [1.5, -1.5]);

  const reading = phase === 1;
  const done = phase === 2;
  const scale = reading ? ZOOM : done ? 1.28 : 1.06;
  const box = reading ? PLATE_ZOOMED : { left: 7, top: 12, width: 86, height: 70 };
  const shown = reading ? FIELDS.length : done ? FIELDS.length : 0;

  return (
    <motion.div
      ref={ref}
      className="relative mx-auto w-full max-w-[560px] lg:ml-auto lg:mr-0"
      style={reduce ? undefined : { y, rotate: tilt }}
      initial={reduce ? false : { opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.4, ease: HERO_EASE, delay: 0.35 }}
      aria-hidden="true"
    >
      <div className="relative overflow-hidden rounded-[30px]" style={{ aspectRatio: "1 / 1", background: HC.panel, border: `1px solid ${HC.line}`, boxShadow: "0 60px 110px -50px rgba(0,0,0,0.9)" }}>
        {/* Photo réelle : elle se rapproche de la plaque pendant la lecture. */}
        <motion.div
          className="absolute inset-0"
          style={{ transformOrigin: `${ORIGIN.x}% ${ORIGIN.y}%` }}
          initial={false}
          animate={{ scale, filter: done ? "brightness(0.55) saturate(0.8)" : "brightness(0.92) saturate(0.85)" }}
          transition={{ duration: 1.5, ease: HERO_EASE }}
        >
          <Image src="/images/about-cta-product.webp" alt="" fill priority sizes="(min-width: 1024px) 560px, 100vw" style={{ objectFit: "cover" }} />
        </motion.div>
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(10,20,25,0.55) 0%, rgba(10,20,25,0) 22%, rgba(10,20,25,0) 55%, rgba(10,20,25,0.8) 100%)" }} />

        {/* Barre du viseur */}
        <div className="absolute inset-x-4 top-4 flex items-center justify-between gap-3 sm:inset-x-5 sm:top-5">
          <span className="flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase" style={{ background: "rgba(10,20,25,0.6)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", letterSpacing: "0.14em" }}>
            <span className="th-blink inline-block h-1.5 w-1.5 rounded-full" style={{ background: HC.orange }} />
            Unité extérieure
          </span>
          <span className="flex items-center gap-1.5">
            {PHASES.map((p, i) => (
              <span key={p.key} className="block h-[3px] w-6 overflow-hidden rounded-full sm:w-8" style={{ background: "rgba(244,239,231,0.25)" }}>
                <motion.span className="block h-full origin-left" style={{ background: i === phase ? HC.orange : HC.cream }} initial={false} animate={{ scaleX: i < phase || (reduce && i <= 1) ? 1 : i === phase ? 1 : 0 }} transition={{ duration: i === phase && !reduce ? p.ms / 1000 : 0.3, ease: "linear" }} />
              </span>
            ))}
          </span>
        </div>

        {/* Coins du viseur : du cadre entier vers la plaque signalétique */}
        <motion.div
          className="absolute"
          initial={false}
          animate={{ left: `${box.left}%`, top: `${box.top}%`, width: `${box.width}%`, height: `${box.height}%`, opacity: done ? 0 : 1 }}
          transition={{ duration: 1.3, ease: HERO_EASE }}
        >
          {(["left-0 top-0 border-l-2 border-t-2 rounded-tl-[10px]", "right-0 top-0 border-r-2 border-t-2 rounded-tr-[10px]", "bottom-0 left-0 border-b-2 border-l-2 rounded-bl-[10px]", "bottom-0 right-0 border-b-2 border-r-2 rounded-br-[10px]"] as const).map((c) => (
            <span key={c} className={`absolute h-7 w-7 sm:h-9 sm:w-9 ${c}`} style={{ borderColor: reading ? HC.orange : HC.cream }} />
          ))}
          {reading && <span className="th-sweep absolute inset-x-[6%] h-[2px]" style={{ background: HC.orange }} />}
        </motion.div>

        {/* Consigne de cadrage */}
        <motion.span
          className="absolute left-1/2 top-[84%] -translate-x-1/2 whitespace-nowrap rounded-full px-3.5 py-1.5 text-[12px] font-semibold"
          style={{ background: "rgba(10,20,25,0.62)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }}
          initial={false}
          animate={{ opacity: phase <= 0 ? 1 : 0, y: phase <= 0 ? 0 : 8 }}
          transition={{ duration: 0.5 }}
        >
          Cadrez la plaque signalétique
        </motion.span>

        {/* Champs lus */}
        <motion.div
          className="absolute bottom-4 left-4 w-[64%] max-w-[300px] rounded-[20px] p-4 sm:bottom-5 sm:left-5 sm:p-5"
          style={{ background: "rgba(10,20,25,0.74)", border: `1px solid ${HC.line}`, backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)" }}
          initial={false}
          animate={{ opacity: phase >= 1 ? 1 : 0, y: phase >= 1 ? 0 : 16 }}
          transition={{ duration: 0.6, ease: HERO_EASE }}
        >
          <p className="text-[10.5px] font-semibold uppercase" style={{ color: HC.orange, letterSpacing: "0.18em", margin: 0 }}>
            {done ? "Fiche prête" : "Lecture de la plaque"}
          </p>
          <ul style={{ listStyle: "none", margin: "10px 0 0", padding: 0 }}>
            {FIELDS.map(([k, v], i) => (
              <motion.li
                key={k}
                className="flex items-center justify-between gap-3 py-1.5 text-[12px] sm:text-[13px]"
                style={{ borderTop: i ? `1px solid rgba(244,239,231,0.08)` : "none" }}
                initial={false}
                animate={{ opacity: i < shown ? 1 : 0, x: i < shown ? 0 : -8 }}
                transition={{ duration: 0.45, ease: HERO_EASE, delay: reading && !reduce ? 0.9 + i * 0.55 : 0 }}
              >
                <span className="truncate" style={{ color: HC.faint }}>
                  {k}
                </span>
                <span className="flex shrink-0 items-center gap-1.5 font-semibold">
                  {v}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2 6.4l2.6 2.6L10 3.4" stroke={HC.orange} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Bandeau d'état */}
        <motion.p
          className="absolute bottom-5 right-5 hidden max-w-[30%] text-right text-[11px] font-semibold uppercase leading-snug sm:block"
          style={{ color: HC.mute, letterSpacing: "0.14em", margin: 0 }}
          initial={false}
          animate={{ opacity: phase >= 1 ? 1 : 0 }}
        >
          {done ? "Fiche certifiée trouvée" : "Plaque signalétique"}
        </motion.p>
      </div>
    </motion.div>
  );
}
