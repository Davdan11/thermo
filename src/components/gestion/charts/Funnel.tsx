"use client";

/* Entonnoir des soumissions : envoyées → ouvertes → acceptées. Étapes ordonnées = rampe ordinale d'une teinte.
   Barres de 20 px, bout arrondi, valeur au bout, taux de passage entre les étapes. */
import { motion } from "motion/react";
import { useReduced } from "@/components/heroes-v2/outils/motion";
import { num, pct } from "../kit/format";
import { EASE, FUNNEL_COLORS } from "./palette";

export function Funnel({ steps, label }: { steps: Array<{ label: string; value: number }>; label: string }) {
  const reduced = useReduced();
  const top = Math.max(1, ...steps.map((s) => s.value));
  return (
    <ol className="ch-funnel" aria-label={label}>
      {steps.map((s, i) => {
        const w = `${Math.max(s.value ? 3 : 0, (s.value / top) * 100)}%`;
        const prev = i > 0 ? steps[i - 1].value : null;
        return (
          <li key={s.label}>
            <div className="ch-funnel__top">
              <span className="ch-funnel__label">{s.label}</span>
              <span className="ch-funnel__n">
                {num(s.value)}
                {prev ? <small> · {pct(s.value / prev)} de l’étape précédente</small> : null}
              </span>
            </div>
            <div className="ch-funnel__track" aria-hidden>
              {reduced ? (
                <span className="ch-funnel__bar" style={{ width: w, background: FUNNEL_COLORS[i] ?? FUNNEL_COLORS[2] }} />
              ) : (
                <motion.span className="ch-funnel__bar" style={{ background: FUNNEL_COLORS[i] ?? FUNNEL_COLORS[2] }} initial={{ width: 0 }} whileInView={{ width: w }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.7, delay: 0.1 + i * 0.12, ease: EASE }} />
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
