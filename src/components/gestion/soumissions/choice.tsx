"use client";

/* ==================================================================
   Choix en un clic : pastilles tirées des listes des réglages, plus
   « Autre… » qui ouvre un champ libre. Rien n'est coché d'office :
   cliquer la pastille active la retire. Une ancienne valeur (clé
   « support-mural », « pompe »…) s'affiche avec son libellé.
   Groupe étiqueté, boutons aria-pressed, cibles de 40 px ; le champ
   « Autre » apparaît en fondu (retenu si « réduire les animations »).
   ================================================================== */

import { useId, useRef, useState } from "react";
import { choiceState, numChoiceState, parseChoiceNumber } from "@/lib/soumissions/choices";
import { formatNumber } from "@/lib/soumissions/money";

interface ChoiceProps {
  label: string;
  hint?: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  /** Anciennes clés → libellés d'origine. */
  legacy?: Record<string, string>;
  placeholder?: string;
  multiline?: boolean;
  maxLength?: number;
  className?: string;
}

export function Choice(p: ChoiceProps) {
  const id = useId();
  const st = choiceState(p.value, p.options, p.legacy);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);
  // Valeur posée de l'extérieur (modèle, client, soumission copiée) : « Autre » s'affiche de lui-même (st.other).
  const showOther = open || st.other;
  const toggleOther = () => {
    if (showOther) {
      setOpen(false);
      if (st.other) p.onChange("");
      return;
    }
    setOpen(true);
    if (st.picked) p.onChange("");
    requestAnimationFrame(() => ref.current?.focus());
  };
  const common = {
    id: `${id}-o`,
    value: st.text,
    placeholder: p.placeholder ?? "Écrivez…",
    maxLength: p.maxLength ?? 120,
    "aria-label": `${p.label} : autre`,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      // Le champ reste ouvert pendant la saisie, même si le texte tapé devient celui d'une pastille.
      setOpen(true);
      p.onChange(e.target.value);
    },
  };
  return (
    <div className={`g-field sq-choice ${p.className ?? ""}`}>
      <span className="g-label" id={`${id}-l`}>
        {p.label}
        {p.hint ? <small> {p.hint}</small> : null}
      </span>
      <div className="sq-chips" role="group" aria-labelledby={`${id}-l`}>
        {p.options.map((o) => {
          const on = st.picked === o;
          return (
            <button
              key={o}
              type="button"
              className="sq-chip"
              aria-pressed={on}
              onClick={() => {
                setOpen(false);
                p.onChange(on ? "" : o);
              }}
            >
              {o}
            </button>
          );
        })}
        <button type="button" className="sq-chip sq-chip--other" aria-pressed={showOther} aria-expanded={showOther} aria-controls={`${id}-o`} onClick={toggleOther}>
          Autre…
        </button>
      </div>
      {showOther ? (
        p.multiline ? (
          <textarea {...common} ref={(el) => void (ref.current = el)} className="g-textarea sq-other" rows={2} maxLength={p.maxLength ?? 1000} />
        ) : (
          <input {...common} ref={(el) => void (ref.current = el)} className="g-input sq-other" autoComplete="off" />
        )
      ) : null}
    </div>
  );
}

interface ChoiceNumProps {
  label: string;
  hint?: string;
  value: number | null;
  onChange: (v: number | null) => void;
  /** Liste des réglages (« 15 », « 25 »…), ou pastilles fixes [valeur, libellé]. */
  options?: string[];
  presets?: Array<[number, string]>;
  suffix?: string;
  integer?: boolean;
  min?: number;
  max?: number;
  className?: string;
}

const show = (n: number | null) => (n === null ? "" : String(n).replace(".", ","));

export function ChoiceNum(p: ChoiceNumProps) {
  const id = useId();
  const opts: Array<[number, string]> =
    p.presets ??
    (p.options ?? [])
      .map((s) => parseChoiceNumber(s))
      .filter((n): n is number => n !== null && (!p.integer || Number.isInteger(n)))
      .map((n) => [n, `${formatNumber(n, 1)}${p.suffix ? ` ${p.suffix}` : ""}`]);
  const st = numChoiceState(p.value, opts.map((o) => o[0]));
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const ref = useRef<HTMLInputElement>(null);
  const showOther = open || st.other;
  // Saisie en cours (« 7, ») gardée tant qu'elle vaut la valeur ; sinon la valeur actuelle (posée de l'extérieur).
  const typed = draft.replace(/[\s ]/g, "").replace(",", ".");
  const shown = draft !== "" && Number(typed) === p.value ? draft : show(p.value);
  const clamp = (n: number) => Math.min(p.max ?? 100_000, Math.max(p.min ?? 0, p.integer ? Math.round(n) : n));
  return (
    <div className={`g-field sq-choice ${p.className ?? ""}`}>
      <span className="g-label" id={`${id}-l`}>
        {p.label}
        {p.hint ? <small> {p.hint}</small> : null}
      </span>
      <div className="sq-chips" role="group" aria-labelledby={`${id}-l`}>
        {opts.map(([n, l]) => {
          const on = st.picked === n;
          return (
            <button
              key={n}
              type="button"
              className="sq-chip"
              aria-pressed={on}
              onClick={() => {
                setOpen(false);
                setDraft("");
                p.onChange(on ? null : n);
              }}
            >
              {l}
            </button>
          );
        })}
        <button
          type="button"
          className="sq-chip sq-chip--other"
          aria-pressed={showOther}
          aria-expanded={showOther}
          aria-controls={`${id}-o`}
          onClick={() => {
            if (showOther) {
              setOpen(false);
              setDraft("");
              if (st.other) p.onChange(null);
              return;
            }
            setOpen(true);
            if (st.picked !== null) p.onChange(null);
            requestAnimationFrame(() => ref.current?.focus());
          }}
        >
          Autre…
        </button>
      </div>
      {showOther ? (
        <div className="sq-other sq-other--num">
          <input
            ref={ref}
            id={`${id}-o`}
            className="g-input"
            inputMode={p.integer ? "numeric" : "decimal"}
            value={shown}
            aria-label={`${p.label} : autre valeur`}
            placeholder="Valeur"
            onChange={(e) => {
              setOpen(true);
              setDraft(e.target.value);
              const t = e.target.value.replace(/[\s ]/g, "").replace(",", ".");
              if (!t) return p.onChange(null);
              if (!/^\d*\.?\d*$/.test(t)) return;
              const n = Number(t);
              if (Number.isFinite(n)) p.onChange(clamp(n));
            }}
          />
          {p.suffix ? <span aria-hidden>{p.suffix}</span> : null}
        </div>
      ) : null}
    </div>
  );
}
