"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { animate } from "motion/react";

const REDUCE_QUERY = "(prefers-reduced-motion: reduce)";
const subscribeReduce = (cb: () => void) => {
  const m = window.matchMedia(REDUCE_QUERY);
  m.addEventListener("change", cb);
  return () => m.removeEventListener("change", cb);
};
/** « Réduire les animations », sans écart d'hydratation : faux au rendu serveur et à l'hydratation, puis la vraie valeur. */
export function useReducedSafe(): boolean {
  return useSyncExternalStore(subscribeReduce, () => window.matchMedia(REDUCE_QUERY).matches, () => false);
}

/** Nombre au format québécois, déterministe (serveur = client) : espace fine insécable, virgule décimale, vrai signe moins. */
export function fmtNum(v: number, decimals = 0): string {
  const s = Math.abs(v).toFixed(decimals);
  const [int, frac] = s.split(".");
  const grouped = int.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return (v < 0 ? "−" : "") + grouped + (frac ? `,${frac}` : "");
}

/* Compteur qui défile jusqu'à la vraie valeur.
   - Serveur et premier rendu client : 0 (aucun écart d'hydratation).
   - La largeur finale est réservée : rien ne bouge autour pendant le défilement.
   - La vraie valeur est toujours dans le HTML (texte pour lecteurs d'écran). */
export function Tick({ value, decimals = 0, play, duration = 1.5, align = "left" }: { value: number; decimals?: number; play: boolean; duration?: number; align?: "left" | "right" }) {
  const reduce = useReducedSafe();
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!play) return;
    const c = animate(0, value, { duration: reduce ? 0 : duration, ease: [0.16, 1, 0.3, 1], onUpdate: setN });
    return () => c.stop();
  }, [play, reduce, value, duration]);
  const final = fmtNum(value, decimals);
  return (
    <span className="relative inline-block whitespace-nowrap" style={{ fontVariantNumeric: "tabular-nums" }}>
      <span aria-hidden="true" style={{ visibility: "hidden" }}>
        {final}
      </span>
      <span aria-hidden="true" className="absolute top-0" style={align === "right" ? { right: 0 } : { left: 0 }}>
        {fmtNum(n, decimals)}
      </span>
      <span className="sr-only">{final}</span>
    </span>
  );
}

/** Vrai après `delay` secondes (tout de suite avec « réduire les animations »). */
export function useLater(delay: number, reduce: boolean): boolean {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const t = window.setTimeout(() => setOn(true), reduce ? 0 : delay * 1000);
    return () => window.clearTimeout(t);
  }, [delay, reduce]);
  return on;
}
