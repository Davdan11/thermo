"use client";

import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(onChange: () => void) {
  const mq = window.matchMedia(QUERY);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

/**
 * Réglage « réduire les animations » sans écart d'hydratation : faux au rendu serveur et pendant
 * l'hydratation, puis la vraie valeur. Les héros remontent leur section (clé) quand il vaut vrai,
 * pour s'afficher directement dans leur état final.
 */
export function useReduced(): boolean {
  return useSyncExternalStore(subscribe, () => window.matchMedia(QUERY).matches, () => false);
}
