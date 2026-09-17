"use client";

import { useState } from "react";
import type { Step } from "./steps";
import { answered } from "./steps";
import type { Hypothese } from "@/lib/thermomatch/hypotheses";

/* ==================================================================
   ThermoMatch — « Affiner », juste sous les trois cartes.

   Le parcours ne pose avant le résultat que ce qui change la
   recommandation. Ici viennent les questions qui servent surtout à la
   faisabilité et au devis : emplacements des unités, panneau
   électrique, place des fenêtres, financement.

   Deux blocs :
   1. « Ce que nous avons supposé » — l'hypothèse prise pour chaque
      réponse manquante, en clair (src/lib/thermomatch/hypotheses.ts).
      Aucune estimation n'est présentée comme un calcul complet.
   2. Les questions restantes. Chaque réponse relance le calcul tout de
      suite ; la ligne dit ce que l'hypothèse devient.
   ================================================================== */

const C = {
  ink: "#0A1419",
  panel: "#10222D",
  cream: "#F4EFE7",
  orange: "#E54B17",
  mute: "rgba(244,239,231,0.66)",
  dim: "rgba(244,239,231,0.58)",
  faint: "rgba(244,239,231,0.42)",
  line: "rgba(244,239,231,0.12)",
};
const DISPLAY = "var(--font-display), var(--font-sans), sans-serif";

export interface AffinageProps {
  /** Les questions d'affinage encore posables, dans l'ordre. */
  steps: Step[];
  answers: Record<string, string | string[]>;
  onAnswer: (stepId: string, value: string | string[]) => void;
  /** Le calcul repart : les boutons attendent. */
  busy?: boolean;
}

export function Affiner({ steps, answers, onAnswer, busy, hypotheses }: AffinageProps & { hypotheses: Hypothese[] }) {
  const restants = steps.filter((s) => !answered(answers[s.id]));
  if (steps.length === 0 && hypotheses.length === 0) return null;

  return (
    <section
      aria-labelledby="tm-affiner"
      className="mx-auto mt-10 w-full max-w-[1320px] overflow-hidden rounded-[28px] px-5 py-8 sm:px-8 sm:py-10 lg:px-12"
      style={{ background: C.panel, border: `1px solid ${C.line}`, color: C.cream, fontFamily: DISPLAY }}
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-14">
        <div className="min-w-0">
          <p className="text-[11.5px] font-semibold uppercase" style={{ letterSpacing: "0.18em", color: C.faint, margin: 0 }}>
            Facultatif
          </p>
          <h2 id="tm-affiner" style={{ fontSize: "clamp(30px, 3.2vw, 46px)", lineHeight: 0.98, letterSpacing: "-0.04em", fontWeight: 600, margin: "14px 0 0" }}>
            Affiner la recommandation
          </h2>
          <p className="text-[15px] leading-relaxed" style={{ color: C.mute, margin: "16px 0 0" }}>
            {restants.length > 0
              ? `${restants.length === 1 ? "Une dernière question" : `${restants.length} questions`} sur la faisabilité et la soumission. Chaque réponse remplace une hypothèse par un fait, et le calcul repart aussitôt.`
              : "Vous avez répondu à tout : plus aucune hypothèse ne pèse sur le résultat."}
          </p>

          {hypotheses.length > 0 && (
            <div className="mt-8">
              <p className="text-[11.5px] font-semibold uppercase" style={{ letterSpacing: "0.16em", color: C.faint, margin: 0 }}>
                Ce que nous avons supposé
              </p>
              <ul className="mt-4 space-y-3" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {hypotheses.map((h) => (
                  <li key={h.id} className="grid grid-cols-[10px_1fr] gap-3 text-[13.5px] leading-snug" style={{ color: C.dim }}>
                    <span aria-hidden="true" className="mt-[7px] block h-[7px] w-[7px]" style={{ background: C.orange }} />
                    <span>
                      <strong className="block text-[13.5px] font-semibold" style={{ color: C.cream }}>
                        {h.label}
                      </strong>
                      {h.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="min-w-0">
          {steps.length === 0 ? null : (
            <div style={{ borderTop: `1px solid ${C.line}` }}>
              {/* Ordre stable : une question déjà répondue ne saute pas de place pendant qu'on coche. */}
              {steps.map((s) => (
                <Question key={s.id} step={s} value={answers[s.id]} busy={!!busy} onAnswer={(v) => onAnswer(s.id, v)} />
              ))}
            </div>
          )}
          {busy && (
            <p className="text-[13px]" style={{ color: C.mute, margin: "16px 0 0" }} role="status">
              Recalcul en cours…
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function Question({ step, value, busy, onAnswer }: { step: Step; value: string | string[] | undefined; busy: boolean; onAnswer: (v: string | string[]) => void }) {
  const done = answered(value);
  const [open, setOpen] = useState(!done);
  const options = (typeof step.options === "function" ? step.options({}) : step.options) ?? [];
  const exclusive = new Set(options.filter((o) => o.exclusive).map((o) => o.value));
  const picked = Array.isArray(value) ? value : typeof value === "string" && value ? [value] : [];
  const resume = picked.map((v) => options.find((o) => o.value === v)?.label ?? v).join(", ");

  function toggle(v: string) {
    if (step.type !== "multi") {
      onAnswer(v);
      setOpen(false);
      return;
    }
    const next = picked.includes(v) ? picked.filter((x) => x !== v) : exclusive.has(v) ? [v] : [...picked.filter((x) => !exclusive.has(x)), v];
    onAnswer(next);
  }

  return (
    <div className="py-5" style={{ borderBottom: `1px solid ${C.line}` }}>
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-[16.5px] font-semibold leading-snug" style={{ letterSpacing: "-0.015em", margin: 0 }}>
            {step.question}
          </p>
          {done && !open ? (
            <p className="text-[14px]" style={{ color: C.orange, margin: "6px 0 0" }}>
              {resume}
            </p>
          ) : (
            step.subtitle && (
              <p className="text-[13px] leading-snug" style={{ color: C.dim, margin: "6px 0 0" }}>
                {step.subtitle}
              </p>
            )
          )}
        </div>
        {done && (
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="shrink-0 text-[13px] font-semibold underline-offset-4 hover:underline"
            style={{ color: C.mute }}
          >
            {open ? "Fermer" : "Modifier"}
          </button>
        )}
      </div>

      {open && (
        <div className="mt-4 flex flex-wrap gap-2" role={step.type === "multi" ? "group" : "radiogroup"} aria-label={step.question}>
          {options.map((o) => {
            const on = picked.includes(o.value);
            return (
              <button
                key={o.value}
                type="button"
                role={step.type === "multi" ? "checkbox" : "radio"}
                aria-checked={on}
                disabled={busy}
                onClick={() => toggle(o.value)}
                className="rounded-full px-4 py-2.5 text-left text-[14px] font-medium transition-colors disabled:opacity-50"
                style={{
                  border: `1px solid ${on ? C.orange : C.line}`,
                  background: on ? "rgba(229,75,23,0.14)" : "transparent",
                  color: on ? C.cream : C.mute,
                }}
              >
                {o.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
