"use client";

import { useEffect, useState } from "react";
import { animate, useReducedMotion } from "motion/react";

/* Compteur qui défile jusqu'à la vraie valeur, sans écart d'hydratation :
   le serveur et le client partent tous deux de 0 ; avec « réduire les
   animations », la valeur finale s'affiche d'un coup au déclenchement. */
export function SafeCount({ value, decimals = 0, play }: { value: number; decimals?: number; play: boolean }) {
  const reduce = useReducedMotion();
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!play) return;
    const c = animate(0, value, { duration: reduce ? 0 : 1.6, ease: [0.16, 1, 0.3, 1], onUpdate: setN });
    return () => c.stop();
  }, [play, reduce, value]);
  return <span style={{ fontVariantNumeric: "tabular-nums" }}>{n.toLocaleString("fr-CA", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}</span>;
}
