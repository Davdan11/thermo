"use client";

import "./company-hero.css";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { HC, HERO_EASE, HeroActions, HeroButton, HeroEyebrow, HeroFade, HeroLead, HeroShell, HeroTitle, Serif } from "@/components/hero/HeroKit";
import { cxLabel } from "./HeroLinkButton";

/* ==================================================================
   Héros de /partenaires : « Rejoignez le réseau d'installateurs d'élite. »
   Visuel : un dossier ThermoMatch qui se complète rubrique par rubrique
   (les six rubriques décrites plus bas dans la page), puis passe à
   l'installateur partenaire par une ligne de transfert. Aucune valeur
   inventée : les rubriques restent des gabarits.
   ================================================================== */

const FIELDS = ["Superficie", "Année de construction", "Isolation", "Système actuel", "Budget", "Trois machines proposées"];

export function PartnersHero() {
  return (
    <HeroShell size="lg" labelledBy="partenaires-titre" visual={<Dossier />}>
      <HeroEyebrow>Pour les professionnels certifiés</HeroEyebrow>
      <HeroTitle
        id="partenaires-titre"
        style={{ fontSize: "clamp(40px, 5vw, 88px)" }}
        lines={[
          "Rejoignez le réseau",
          "d’installateurs",
          <Serif key="s">
            d’élite<span style={{ color: HC.orange }}>.</span>
          </Serif>,
        ]}
      />
      <HeroLead>
        Nous ne vendons pas de «&nbsp;leads&nbsp;» ou de listes de contacts froids. Nous formons des partenariats stratégiques pour connecter votre expertise avec une clientèle déjà éduquée par ThermoMatch.
      </HeroLead>
      <HeroActions>
        <HeroButton href="#candidature">Soumettre une candidature</HeroButton>
        <HeroButton href="/trouver-ma-thermopompe" variant="ghost">
          Découvrir ThermoMatch
        </HeroButton>
      </HeroActions>
    </HeroShell>
  );
}

function Dossier() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yTop = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const yBottom = useTransform(scrollYProgress, [0, 1], [70, -50]);

  // Les rubriques se cochent l'une après l'autre.
  const [ticks, setTicks] = useState(0);
  useEffect(() => {
    if (reduce) return;
    const ids = FIELDS.map((_, i) => window.setTimeout(() => setTicks(i + 1), 1300 + i * 380));
    return () => ids.forEach((id) => window.clearTimeout(id));
  }, [reduce]);
  const done = reduce ? FIELDS.length : ticks;
  const complete = done === FIELDS.length;

  const glass = {
    background: "rgba(16,34,45,0.8)",
    border: `1px solid ${HC.line}`,
    backdropFilter: "blur(18px) saturate(130%)",
    WebkitBackdropFilter: "blur(18px) saturate(130%)",
    boxShadow: "0 40px 80px -40px rgba(0,0,0,0.85)",
  } as const;

  return (
    <div ref={ref} className="relative mx-auto w-full max-w-[520px] lg:mr-0">
      <motion.div style={reduce ? undefined : { y: yTop }}>
        <HeroFade delay={0.5}>
          <div className="rounded-[24px] p-5 sm:p-7" style={glass}>
            <div className="flex items-center justify-between gap-4">
              <Image src="/images/logo-thermomatch-tm-720.webp" alt="ThermoMatch" width={720} height={247} className="h-[28px] w-auto" />
              <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11.5px] font-medium" style={{ border: `1px solid ${complete ? HC.orange : HC.line}`, color: complete ? HC.cream : HC.faint, transition: "all 0.6s" }}>
                {complete ? "Dossier complet" : "Dossier en cours"}
              </span>
            </div>
            <p className="mt-5 text-[19px] font-semibold" style={{ letterSpacing: "-0.02em", margin: "20px 0 0" }}>
              Nouveau projet qualifié
            </p>
            <ul style={{ listStyle: "none", margin: "16px 0 0", padding: 0 }}>
              {FIELDS.map((f, i) => {
                const on = i < done;
                const last = i === FIELDS.length - 1;
                return (
                  <li key={f} className="grid grid-cols-[18px_minmax(0,1fr)_auto] items-center gap-3 py-2.5" style={{ borderTop: `1px solid ${HC.line}` }}>
                    <svg aria-hidden="true" viewBox="0 0 18 18" className="h-[18px] w-[18px]">
                      <rect x={1} y={1} width={16} height={16} rx={4} fill="none" stroke={on ? HC.orange : HC.line} strokeWidth={1.2} style={{ transition: "stroke 0.4s" }} />
                      {on && <motion.path d="M5 9.4 L8 12 L13 6.2" fill="none" stroke={HC.cream} strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" initial={reduce ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.45, ease: HERO_EASE }} />}
                    </svg>
                    <span className="text-[14.5px]" style={{ color: on ? HC.cream : HC.mute, transition: "color 0.4s" }}>
                      {f}
                    </span>
                    {last ? (
                      <span aria-hidden="true" className="flex gap-1.5">
                        {[0, 1, 2].map((k) => (
                          <motion.span key={k} className="block h-[18px] w-[26px] rounded-[5px]" style={{ border: `1px solid ${HC.line}` }} animate={{ background: on ? "rgba(229,75,23,0.9)" : "rgba(244,239,231,0.06)" }} transition={{ duration: 0.5, delay: on && !reduce ? 0.15 + k * 0.12 : 0 }} />
                        ))}
                      </span>
                    ) : (
                      <span aria-hidden="true" className="cx-skel block h-[8px] rounded-full" style={{ width: 54 + ((i * 23) % 50) }} />
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </HeroFade>
      </motion.div>

      {/* Ligne de transfert vers l'installateur */}
      <div aria-hidden="true" className="relative ml-10 h-14 w-[2px] sm:ml-16">
        <svg viewBox="0 0 2 56" preserveAspectRatio="none" className="absolute inset-0 h-full w-[2px] overflow-visible">
          <path d="M1 0 V56" stroke={HC.line} strokeWidth={1} fill="none" />
          <motion.path d="M1 0 V56" stroke={HC.orange} strokeWidth={2} strokeLinecap="round" fill="none" className="cx-flow" style={{ strokeDasharray: "3 7", animationDuration: "6s" }} initial={reduce ? false : { opacity: 0 }} animate={{ opacity: complete ? 1 : 0.15 }} transition={{ duration: 0.6 }} />
        </svg>
      </div>

      <motion.div style={reduce ? undefined : { y: yBottom }} className="ml-6 sm:ml-12">
        <HeroFade delay={0.9}>
          <div className="ph-float rounded-[20px] p-5 sm:p-6" style={glass}>
            <p style={{ ...cxLabel, margin: 0 }}>Installateur partenaire</p>
            <p className="text-[16px] leading-snug" style={{ color: HC.cream, margin: "10px 0 0" }}>
              Vous validez le calcul de charge et réalisez l’installation.
            </p>
          </div>
        </HeroFade>
      </motion.div>
    </div>
  );
}
