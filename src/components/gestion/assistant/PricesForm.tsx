"use client";

/* Chantier A — tarifs de l'assistant, saisis par le propriétaire (par million de jetons, devise du plafond).
   Les quatre ensemble, ou aucun : sans tarifs, seuls les jetons sont affichés. */
import { useActionState } from "react";
import { savePricesAction, type PricesResult } from "@/app/gestion/(prive)/assistant/actions";
import type { Prices } from "@/lib/gestion/assistant/cost";

const FIELDS: Array<[keyof Prices, string, string]> = [
  ["input", "Entrée", "Jetons lus (question, données des outils)"],
  ["output", "Sortie", "Jetons écrits (réflexion comprise)"],
  ["cacheWrite", "Écriture en cache", "Consignes mises en cache"],
  ["cacheRead", "Lecture du cache", "Consignes relues depuis le cache"],
];

const show = (n: number) => String(n).replace(".", ",");

export function PricesForm({ prices }: { prices: Prices | null }) {
  const [state, action, pending] = useActionState<PricesResult, FormData>(savePricesAction, undefined);
  return (
    <form action={action} className="as-prices">
      <div className="as-prices__grid">
        {FIELDS.map(([k, label, hint]) => (
          <label key={k} className="g-field">
            <span className="g-label">
              {label} <small>$ par million de jetons</small>
            </span>
            <input name={k} className="g-input" inputMode="decimal" autoComplete="off" defaultValue={prices ? show(prices[k]) : ""} placeholder="—" maxLength={12} />
            <span className="g-hint">{hint}</span>
          </label>
        ))}
      </div>
      <div className="as-prices__foot">
        <button type="submit" className="k-btn k-btn--primary" disabled={pending}>
          {pending ? "Enregistrement…" : "Enregistrer les tarifs"}
        </button>
        {state ? (
          <p className={`cr-msg ${state.ok ? "is-ok" : "is-bad"}`} role={state.ok ? "status" : "alert"}>
            {state.ok ? state.message : state.error}
          </p>
        ) : null}
      </div>
    </form>
  );
}
