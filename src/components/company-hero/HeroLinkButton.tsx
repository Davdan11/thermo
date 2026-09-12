"use client";

import type { CSSProperties } from "react";
import { HC, HeroArrow } from "@/components/hero/HeroKit";

/* ==================================================================
   Bouton de héros pour les liens hors navigation Next (tel:, mailto:,
   ancres) : même allure que HeroButton de la trousse commune.
   ================================================================== */
export function HeroLinkButton({ href, children, variant = "primary", ariaLabel }: { href: string; children: string; variant?: "primary" | "ghost"; ariaLabel?: string }) {
  if (variant === "ghost") {
    return (
      <a href={href} aria-label={ariaLabel} className="ph-ghost inline-flex items-center rounded-full px-6 py-3.5 text-[15px] font-semibold" style={{ border: `1px solid ${HC.line}`, color: HC.cream }}>
        <span>{children}</span>
      </a>
    );
  }
  const st: CSSProperties = { background: HC.orange };
  return (
    <a href={href} aria-label={ariaLabel} className="inline-flex items-center gap-3 rounded-full py-2 pl-6 pr-2 text-[15px] font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5" style={st}>
      <span className="ph-roll">
        <span>{children}</span>
        <span aria-hidden="true">{children}</span>
      </span>
      <span className="flex h-9 w-9 items-center justify-center rounded-full" style={{ background: "rgba(255,255,255,0.16)" }}>
        <HeroArrow />
      </span>
    </a>
  );
}

/** Petite étiquette en capitales, pour les panneaux des visuels. */
export const cxLabel: CSSProperties = { fontSize: 11, fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase", color: HC.faint };
