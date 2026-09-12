"use client";

import "./flow-hero.css";
import type { ReactNode } from "react";
import Link from "next/link";
import { useReducedMotion } from "motion/react";
import { HC, HERO_DISPLAY } from "@/components/hero/HeroKit";

/* ==================================================================
   Barre d'en-tête des parcours plein écran (ThermoMatch, soumission),
   qui n'ont pas l'en-tête du site. Fond transparent : elle se pose sur
   le fond encre du parcours. Logo crème à gauche (retour à l'accueil),
   repère d'étape au centre, sortie à droite. Filet orange optionnel
   en bas pour la progression.
   Hauteur fixe de 64 px : identique au gabarit de chargement.
   ================================================================== */

export function FlowBar({ center, right, progress, className = "" }: { center?: ReactNode; right?: ReactNode; /** 0 à 1 */ progress?: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <header
      className={`relative z-20 flex h-[64px] shrink-0 items-center justify-between gap-3 px-5 sm:px-10 ${className}`}
      style={{ fontFamily: HERO_DISPLAY, color: HC.cream, borderBottom: `1px solid ${HC.line}` }}
    >
      <Link href="/" aria-label="Thermopompes À Vendre.ca — Accueil" className="shrink-0" style={{ textDecoration: "none" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/headerlogo-720-creme.webp" alt="Thermopompes À Vendre" width={126} height={42} style={{ width: 126, height: 42, maxWidth: "none", display: "block" }} />
      </Link>

      {center ? <div className="min-w-0 sm:absolute sm:left-1/2 sm:-translate-x-1/2">{center}</div> : null}

      <div className="shrink-0">{right}</div>

      {typeof progress === "number" && (
        <span
          aria-hidden="true"
          className="absolute bottom-[-1px] left-0 h-[2px] w-full origin-left"
          style={{
            background: HC.orange,
            transform: `scaleX(${Math.max(0, Math.min(1, progress))})`,
            transition: reduce ? "none" : "transform 0.9s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        />
      )}
    </header>
  );
}
