"use client";

import "./outils.css";
import { useReduced } from "./motion";
import type { ReactNode } from "react";
import Link from "next/link";

import { HC } from "@/components/hero/HeroKit";
import { DISPLAY } from "./fonts";

/* ==================================================================
   Barre d'en-tête des parcours plein écran (ThermoMatch, soumission),
   qui n'ont pas l'en-tête du site. Fond transparent. Deux tons :
   « dark » (texte crème, étapes sombres du questionnaire) et « light »
   (texte encre, sur le papier du Carnet). Logo à gauche (retour à
   l'accueil), repère au centre, sortie à droite, filet de progression.
   Hauteur fixe de 64 px : identique au gabarit de chargement.
   ================================================================== */

export const CARNET = {
  paper: "#F7F3EC",
  ink: "#171B1E",
  soft: "rgba(23,27,30,0.66)",
  faint: "rgba(23,27,30,0.44)",
  line: "rgba(23,27,30,0.12)",
  orange: "#E54B17",
  /** Orange assombri : texte d'erreur lisible sur le papier. */
  rust: "#B8360C",
} as const;

export function FlowBar({ center, right, progress, tone = "dark", className = "" }: { center?: ReactNode; right?: ReactNode; /** 0 à 1 */ progress?: number; tone?: "dark" | "light"; className?: string }) {
  const reduce = useReduced();
  const light = tone === "light";
  return (
    <header
      className={`relative z-20 flex h-[64px] shrink-0 items-center justify-between gap-3 px-5 sm:px-10 ${className}`}
      style={{ fontFamily: DISPLAY, color: light ? CARNET.ink : HC.cream, borderBottom: `1px solid ${light ? CARNET.line : HC.line}` }}
    >
      <Link href="/" aria-label="Thermopompes À Vendre.ca — Accueil" className="shrink-0" style={{ textDecoration: "none" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={light ? "/images/headerlogo-720.webp" : "/images/headerlogo-720-creme.webp"} alt="Thermopompes À Vendre" width={126} height={42} style={{ width: 126, height: 42, maxWidth: "none", display: "block" }} />
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

/** Mot-symbole ThermoMatch pour fond clair (le logo image a « MATCH » en crème, illisible sur le papier). */
export function ThermoMatchWordmark({ size = 12 }: { size?: number }) {
  return (
    <span aria-label="ThermoMatch" role="img" className="inline-block whitespace-nowrap" style={{ fontFamily: DISPLAY, fontSize: size, fontWeight: 500, letterSpacing: "0.34em", lineHeight: 1 }}>
      <span aria-hidden="true" style={{ color: CARNET.orange }}>
        THERMO
      </span>
      <span aria-hidden="true" style={{ color: CARNET.ink }}>
        MATCH
      </span>
    </span>
  );
}

/** Coupe une question : le début en grotesque, les derniers mots à part. */
export function splitQuestion(question: string, lastWords = 1): { head: string; tail: string } {
  const words = question.trim().split(/\s+/);
  const n = Math.max(0, Math.min(lastWords, words.length - 1));
  return { head: words.slice(0, words.length - n).join(" "), tail: words.slice(words.length - n).join(" ") };
}
