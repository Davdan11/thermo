"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { animate, useInView } from "motion/react";
import { useReduced } from "@/components/heroes-v2/outils/motion";

/**
 * Compteur sans écart d’hydratation : le serveur et la première passe client écrivent la valeur finale.
 * Après l’hydratation seulement, si le nombre est encore sous la ligne de flottaison, il repart de zéro
 * et monte quand il entre à l’écran. Le lecteur d’écran lit toujours la valeur finale.
 */
export function CountUp({ value, duration = 1.4, className, style }: { value: number; duration?: number; className?: string; style?: CSSProperties }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -12% 0px" });
  const reduce = useReduced();
  const [shown, setShown] = useState(value);
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduce || armed) return;
    if (el.getBoundingClientRect().top > window.innerHeight) {
      setArmed(true);
      setShown(0);
    }
    // Une seule vérification, à l’arrivée.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!inView || !armed) return;
    const c = animate(0, value, { duration, ease: [0.22, 1, 0.36, 1], onUpdate: (v) => setShown(Math.round(v)) });
    return () => c.stop();
  }, [inView, armed, value, duration]);

  return (
    <span ref={ref} className={className} style={style}>
      <span aria-hidden="true">{shown.toLocaleString("fr-CA")}</span>
      <span className="sr-only">{value.toLocaleString("fr-CA")}</span>
    </span>
  );
}
