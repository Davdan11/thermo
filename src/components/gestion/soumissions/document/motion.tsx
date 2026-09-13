"use client";

/* Mouvements du document de soumission : apparition au défilement et montants qui roulent quand une option change.
   « Réduire les animations » respecté sans écart d'hydratation (useReduced). À l'impression, tout est visible (devis.css). */
import { AnimatePresence, motion } from "motion/react";
import { useReduced } from "@/components/heroes-v2/outils/motion";
import { money } from "@/lib/soumissions/money";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Rise({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduced = useReduced();
  if (reduced) return <div className={`dv-rise ${className}`}>{children}</div>;
  return (
    <motion.div className={`dv-rise ${className}`} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "0px 0px -6% 0px" }} transition={{ duration: 0.65, delay, ease: EASE }}>
      {children}
    </motion.div>
  );
}

/** Montant qui glisse vers le haut quand il change (options cochées ou décochées). */
export function RollingMoney({ cents, className = "", sign = "" }: { cents: number; className?: string; sign?: string }) {
  const reduced = useReduced();
  const text = `${sign}${money(cents)}`;
  if (reduced) return <span className={className}>{text}</span>;
  return (
    <span className={`dv-roll ${className}`} aria-live="polite">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span key={text} className="dv-roll__v" initial={{ y: "70%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: "-70%", opacity: 0 }} transition={{ duration: 0.38, ease: EASE }}>
          {text}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
