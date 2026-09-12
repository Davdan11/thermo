"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useReduced } from "@/components/heroes-v2/outils/motion";

/**
 * Nom de la marque au trait, sur toute la largeur de la quatrième de couverture : il glisse
 * lentement pendant le défilement (lié au défilement, jamais en boucle). Décoratif.
 */
export function DriftName({ name, ink = "rgba(246,241,232,0.2)" }: { name: string; ink?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReduced();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["6%", "-18%"]);
  const text = `${name} · ${name} · ${name}`;
  return (
    <div ref={ref} aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 overflow-hidden">
      <motion.span
        className="block select-none whitespace-nowrap"
        style={{
          x: reduce ? "0%" : x,
          fontFamily: "var(--font-display), var(--font-sans), sans-serif",
          fontWeight: 800,
          fontSize: "clamp(120px, 19vw, 330px)",
          lineHeight: 0.8,
          letterSpacing: "-0.05em",
          color: "transparent",
          WebkitTextStroke: `1.5px ${ink}`,
        }}
      >
        {text}
      </motion.span>
    </div>
  );
}
