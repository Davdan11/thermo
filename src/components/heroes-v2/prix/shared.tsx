"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { animate } from "motion/react";
import { useReduced } from "@/components/heroes-v2/outils/motion";

/* ==================================================================
   Petits outils communs aux héros « prix et subventions » (v2).
   Chaque page garde sa direction artistique propre ; ici, seulement
   la mécanique : minuterie après montage, compteur sans erreur
   d'hydratation, typographie française.
   ================================================================== */

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const fr = (n: number) => Math.round(n).toLocaleString("fr-CA");

/** Apostrophe courbe et espace insécable avant « : ; ? ! ». */
export function typo(s: string): string {
  return s
    .replace(/'/g, "\u2019")
    .replace(/ ([:;?!])/g, "\u00a0$1")
    .replace(/([^\s\u00a0])([?!;])(?=\s|$)/g, "$1\u00a0$2");
}

/** false au rendu serveur et au premier rendu client, true `ms` après le montage. */
export function useAfter(ms: number, enabled = true): boolean {
  const [on, setOn] = useState(false);
  useEffect(() => {
    if (!enabled) return;
    const t = window.setTimeout(() => setOn(true), ms);
    return () => window.clearTimeout(t);
  }, [ms, enabled]);
  return on;
}

/**
 * Chiffre qui défile jusqu'à sa vraie valeur. Premier rendu : `from` (0 par défaut),
 * identique serveur/client. La vraie valeur est toujours lue par les lecteurs d'écran.
 */
export function CountTo({ value, play, duration = 1.4, from = 0, style, className }: { value: number; play: boolean; duration?: number; from?: number; style?: CSSProperties; className?: string }) {
  const reduce = useReduced();
  const [n, setN] = useState(from);
  const cur = useRef(from);
  useEffect(() => {
    if (!play) return;
    if (reduce) {
      cur.current = value;
      // eslint-disable-next-line react-hooks/set-state-in-effect -- valeur finale d'un coup (animations réduites)
      setN(value);
      return;
    }
    const c = animate(cur.current, value, {
      duration,
      ease: EASE,
      onUpdate: (v) => {
        cur.current = v;
        setN(v);
      },
    });
    return () => c.stop();
  }, [play, value, reduce, duration]);
  return (
    <span className={className} style={style}>
      <span className="sr-only">{fr(value)}</span>
      <span aria-hidden="true" style={{ fontVariantNumeric: "tabular-nums" }}>
        {fr(n)}
      </span>
    </span>
  );
}
