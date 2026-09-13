"use client";

/* Chantier V — réattribution d'un client par le propriétaire (Server Action revérifiée côté serveur). */
import { useActionState } from "react";
import { reassignClientAction, type TeamActionState } from "@/app/gestion/(prive)/equipe/actions";

export function AssignForm({ clientId, current, vendors }: { clientId: string; current: string | null; vendors: Array<{ id: string; name: string; available: boolean }> }) {
  const [state, action, pending] = useActionState<TeamActionState, FormData>(reassignClientAction.bind(null, clientId), undefined);
  return (
    <form action={action} className="eq-form">
      <label className="g-field">
        <span className="g-label">Confier à</span>
        <select name="vendeur" className="g-select g-input" defaultValue={current ?? ""}>
          <option value="">Personne (retirer)</option>
          {vendors.map((v) => (
            <option key={v.id} value={v.id}>
              {v.name}
              {v.available ? "" : " (indisponible)"}
            </option>
          ))}
        </select>
      </label>
      <label className="g-field">
        <span className="g-label">Raison (facultatif)</span>
        <input name="raison" className="g-input" maxLength={200} placeholder="Ex. : client de son secteur" />
      </label>
      <div className="eq-actions">
        <button type="submit" className="k-btn k-btn--ink" disabled={pending}>
          {pending ? "Enregistrement…" : "Réattribuer"}
        </button>
        {state ? (
          <p className={`eq-msg ${state.ok ? "is-ok" : "is-bad"}`} role={state.ok ? "status" : "alert"}>
            {state.ok ? state.message : state.error}
          </p>
        ) : null}
      </div>
    </form>
  );
}
