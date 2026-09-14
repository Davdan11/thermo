"use client";

import "../_components/results.css";
import Link from "next/link";
import { motion } from "motion/react";
import { useReduced } from "@/components/heroes-v2/outils/motion";

/* Lien de résultats incomplet (code absent ou tronqué), sur l'encre du tamis : le champ de points est là,
   mais aucun ne s'allume, faute de réponses à trier. Puis le chemin vers le questionnaire. */

const C = { cream: "#F4EFE7", orange: "#E54B17", mute: "rgba(244,239,231,0.66)" };
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const DISPLAY = "var(--font-display), var(--font-sans), sans-serif";
const FADE = "linear-gradient(90deg, transparent 0%, #000 55%)";

export function LienIncomplet() {
  const reduce = useReduced();
  const rise = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, ease: EASE, delay },
  });
  return (
    <div className="relative overflow-hidden" style={{ color: C.cream, fontFamily: DISPLAY }}>
      {/* Champ de points éteints (fixe) : il se pose en fondu, seule l'opacité bouge. */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-full lg:w-[58%]"
        style={{ backgroundImage: "radial-gradient(circle, rgba(244,239,231,0.14) 1.3px, transparent 1.9px)", backgroundSize: "14px 14px", maskImage: FADE, WebkitMaskImage: FADE }}
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, ease: "easeOut", delay: 0.2 }}
      />
      <div className="relative mx-auto flex min-h-[72vh] max-w-[1320px] flex-col justify-center px-5 py-20 sm:px-10 lg:px-14">
        <motion.p {...rise(0.05)} className="flex flex-wrap items-center gap-3 text-[12px] font-medium uppercase" style={{ letterSpacing: "0.2em", color: C.mute, margin: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo-thermomatch-nav.webp" alt="ThermoMatch" width={118} height={16} style={{ width: 118, height: 16, maxWidth: "none", display: "block" }} />
          <span aria-hidden="true">·</span>
          Résultats partagés
        </motion.p>
        <motion.h1 {...rise(0.15)} className="max-w-[13em]" style={{ fontSize: "clamp(38px, 5.4vw, 84px)", lineHeight: 0.98, letterSpacing: "-0.045em", fontWeight: 600, margin: "26px 0 0" }}>
          Ce lien de résultats <span className="tm-serif">est incomplet.</span>
        </motion.h1>
        <motion.p {...rise(0.35)} className="max-w-md text-[16px] leading-relaxed" style={{ color: C.mute, margin: "22px 0 0" }}>
          Il a peut-être été tronqué en le copiant. Demandez un nouveau lien à la personne qui vous l’a envoyé, ou refaites le questionnaire : il prend trois minutes.
        </motion.p>
        <motion.div {...rise(0.5)} className="mt-9">
          <Link href="/trouver-ma-thermopompe" className="group inline-flex items-center gap-3 rounded-full px-6 py-3.5 text-[15px] font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 motion-reduce:transform-none" style={{ background: C.orange, textDecoration: "none" }}>
            Faire le questionnaire
            <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none">
              →
            </span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
