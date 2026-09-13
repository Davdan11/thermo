"use client";

/* Chantier A — saisie d'une dépense publicitaire (canal, mois, montant). Le même mois remplace la valeur précédente.
   Le formulaire est vidé après un succès, gardé si la validation échoue. */
import { useActionState, useEffect, useRef } from "react";
import { saveSpendAction, type SpendResult } from "@/app/gestion/(prive)/rentabilite/actions";

export function SpendForm({ channels, defaultMonth }: { channels: Array<{ id: string; label: string }>; defaultMonth: string }) {
  const [state, action, pending] = useActionState<SpendResult, FormData>(saveSpendAction, undefined);
  const ref = useRef<HTMLFormElement>(null);
  useEffect(() => {
    if (state?.ok) ref.current?.reset();
  }, [state]);
  return (
    <form ref={ref} action={action} className="rt-form">
      <label className="g-field">
        <span className="g-label">Canal</span>
        <select name="channel" className="g-select" defaultValue={channels[0]?.id}>
          {channels.map((c) => (
            <option key={c.id} value={c.id}>
              {c.label}
            </option>
          ))}
        </select>
      </label>
      <label className="g-field">
        <span className="g-label">Mois</span>
        <input type="month" name="month" className="g-input" defaultValue={defaultMonth} max={defaultMonth} required />
      </label>
      <label className="g-field">
        <span className="g-label">
          Montant dépensé <small>taxes comprises, comme facturé</small>
        </span>
        <input name="amount" className="g-input" inputMode="decimal" autoComplete="off" placeholder="Ex. : 1 250" required maxLength={20} />
      </label>
      <label className="g-field">
        <span className="g-label">
          Note <small>facultative</small>
        </span>
        <input name="note" className="g-input" maxLength={120} placeholder="Ex. : campagne thermopompes murales" />
      </label>
      <div className="rt-form__foot">
        <button type="submit" className="k-btn k-btn--primary" disabled={pending}>
          {pending ? "Enregistrement…" : "Enregistrer la dépense"}
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
