"use client";

import "./flow-hero.css";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { HC, HERO_DISPLAY, HERO_EASE, HeroEyebrow, HeroFade, HeroLead, HeroTitle, Serif } from "@/components/hero/HeroKit";
import { Snowfall } from "@/components/home/Snowfall";
import { FlowBar } from "./FlowBar";

/** Barre d'en-tête de la soumission : logo, « Votre demande · Dernière étape » souligné d'orange, Quitter. */
export function SoumissionBar() {
  const reduce = useReducedMotion();
  return (
    <FlowBar
      center={
        <div className="relative pb-1.5 text-center">
          <p className="text-[12px] font-semibold uppercase" style={{ letterSpacing: "0.16em", margin: 0, color: HC.cream }}>
            Votre demande
          </p>
          <p className="text-[12px]" style={{ margin: "2px 0 0", color: HC.mute }}>
            Dernière étape
          </p>
          <motion.span
            aria-hidden="true"
            className="absolute bottom-0 left-0 h-[2px] w-full origin-left"
            style={{ background: HC.orange }}
            initial={reduce ? false : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, ease: HERO_EASE, delay: 0.4 }}
          />
        </div>
      }
      right={
        <Link href="/" className="text-[13px] font-medium transition-colors hover:text-white" style={{ color: HC.mute, textDecoration: "none" }}>
          Quitter
        </Link>
      }
    />
  );
}

/* ==================================================================
   Haut de la page /soumission : titre, introduction et lien vers
   ThermoMatch sur une bande encre pleine largeur, neige légère.
   La bande est dessinée derrière ce bloc et déborde jusqu'aux bords
   de l'écran (et sous la barre d'en-tête) : sa hauteur suit le texte,
   quelle que soit la version (projet déjà rempli ou non).
   Le parent doit couper le débord horizontal (overflow-x: clip).
   ================================================================== */

const FACTS = ["Installateur licencié RBQ", "Rappel sous un jour ouvrable", "Jamais de revente de vos coordonnées"];

export function SoumissionHero({ hasDraft }: { hasDraft: boolean }) {
  const reduce = useReducedMotion();
  return (
    <div className="relative pb-12 sm:pb-16" style={{ fontFamily: HERO_DISPLAY, color: HC.cream }}>
      {/* Bande encre : -60vw de chaque côté suffit à rejoindre les bords de l'écran à toutes les largeurs. */}
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-[-60vw] right-[-60vw] top-[-180px] z-0 overflow-hidden" style={{ background: HC.ink }}>
        <Snowfall className="absolute inset-0 h-full w-full" density={0.55} />
        <div className="absolute inset-x-0 bottom-0 h-px" style={{ background: HC.line }} />
      </div>

      <div className="relative">
        <HeroEyebrow delay={0.05}>Gratuit · sans engagement</HeroEyebrow>
        <HeroTitle
          delay={0.15}
          // Espace finale dans la première ligne : le texte lu garde son espace entre les deux lignes.
          lines={
            hasDraft
              ? ["Votre projet est prêt ", <span key="l2">à être <Serif>évalué.</Serif></span>]
              : ["Dites-nous où et quoi. ", <Serif key="l2">On s&apos;occupe du reste.</Serif>]
          }
          style={{ fontSize: "clamp(38px, 4.1vw, 60px)", margin: "22px 0 0", color: HC.cream }}
        />
        <HeroLead delay={0.5} style={{ maxWidth: 470, fontSize: 16.5, margin: "22px 0 0" }}>
          {hasDraft
            ? "Vérifiez les renseignements ci-dessous, puis indiquez comment nous pouvons vous joindre."
            : "Précisez ce que vous savez déjà, même partiellement. Un installateur licencié RBQ de votre région vous rappelle sous un jour ouvrable, gratuitement et sans engagement."}
        </HeroLead>
        {!hasDraft && (
          <HeroFade delay={0.68}>
            <p className="text-[14.5px] font-semibold" style={{ margin: "18px 0 0" }}>
              <Link href="/trouver-ma-thermopompe" className="fh-link" style={{ color: HC.cream, textDecoration: "none" }}>
                Ou répondez à 13 questions et laissez ThermoMatch remplir ceci pour vous <span style={{ color: HC.orange }}>→</span>
              </Link>
            </p>
          </HeroFade>
        )}
        {/* Engagements repris du formulaire, en trois colonnes sous un filet qui se trace. */}
        <HeroFade delay={0.85}>
          <ul className="relative mt-9 grid max-w-[560px] grid-cols-3 text-[12.5px] font-medium leading-[1.45]" style={{ listStyle: "none", padding: 0, color: HC.mute, borderTop: `1px solid ${HC.line}` }}>
            <motion.span
              aria-hidden="true"
              className="absolute left-0 top-[-1px] h-px w-full origin-left"
              style={{ background: HC.orange }}
              initial={reduce ? false : { scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.4, ease: HERO_EASE, delay: 1.05 }}
            />
            {FACTS.map((f, i) => (
              <li key={f} className="pr-3 pt-4" style={{ paddingLeft: i ? 16 : 0, borderLeft: i ? `1px solid ${HC.line}` : "none" }}>
                {f}
              </li>
            ))}
          </ul>
        </HeroFade>
      </div>
    </div>
  );
}
