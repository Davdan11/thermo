"use client";

import Link from "next/link";
import { useEffect, useState, type CSSProperties, type ReactNode } from "react";

import { HERO_EASE } from "@/components/hero/HeroKit";
import { useReduced } from "@/components/heroes-v2/outils/motion";

/* Petits outils communs aux héros v2 « entreprise ». Chaque page garde sa propre direction
   artistique : ici, seulement la mécanique (sous l'en-tête, liens, flèche). */

export const EASE = HERO_EASE;
export const PHONE = "438-900-3224";
export const PHONE_HREF = `tel:${PHONE.replace(/-/g, "")}`;
export const EMAIL = "info@thermopompesavendre.ca";

/** La section démarre sous l'en-tête transparent du site (93 px, 105 px dès 1700 px). */
export const UNDER_HEADER = "-mt-[93px] min-[1700px]:-mt-[105px]";
export const HEADER_PAD = "pt-[136px] min-[1700px]:pt-[152px]";

/** Lien : next/link pour les routes internes, <a> pour tel:, mailto: et ancres. */
export function XLink({ href, className, style, children, ariaLabel }: { href: string; className?: string; style?: CSSProperties; children: ReactNode; ariaLabel?: string }) {
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className} style={style} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={className} style={style} aria-label={ariaLabel}>
      {children}
    </a>
  );
}

export function Arrow({ size = 16, className = "xe-arrow" }: { size?: number; className?: string }) {
  return (
    <svg aria-hidden="true" className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  );
}

/** Espaces fines insécables pour les milliers, identiques côté serveur et client. */
export function fmtInt(n: number): string {
  return String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, "\u00A0");
}

/** « Réduire les animations », sans écart d'hydratation : false au rendu serveur et au premier
    rendu client, puis la vraie préférence. Les sections sont aussi sous <MotionConfig reducedMotion="user">. */
export function useReducedSafe(): boolean {
  const pref = useReduced();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = window.setTimeout(() => setMounted(true), 0);
    return () => window.clearTimeout(t);
  }, []);
  return mounted && !!pref;
}
