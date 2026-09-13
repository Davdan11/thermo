"use client";

/* Apparition discrète (fondu + léger glissement), en cascade pour les listes.
   Réglage « réduire les animations » respecté sans écart d'hydratation (useReduced). */
import { motion } from "motion/react";
import { useReduced } from "@/components/heroes-v2/outils/motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Reveal({ children, delay = 0, className, as = "div" }: { children: React.ReactNode; delay?: number; className?: string; as?: "div" | "section" | "li" }) {
  const reduced = useReduced();
  const Tag = motion[as];
  if (reduced) {
    const Plain = as;
    return <Plain className={className}>{children}</Plain>;
  }
  return (
    <Tag className={className} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay, ease: EASE }}>
      {children}
    </Tag>
  );
}

/** Liste dont les éléments apparaissent l'un après l'autre (40 ms d'écart, plafonné). */
export function StaggerList({ children, className }: { children: React.ReactNode[]; className?: string }) {
  const reduced = useReduced();
  if (reduced) return <ul className={className}>{children.map((c, i) => <li key={i}>{c}</li>)}</ul>;
  return (
    <ul className={className}>
      {children.map((c, i) => (
        <motion.li key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: Math.min(i, 10) * 0.04, ease: EASE }}>
          {c}
        </motion.li>
      ))}
    </ul>
  );
}
