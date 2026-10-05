"use client";

/* Légende d'un élément de la file Facebook : modifiable avant l'envoi ; le lien suivi doit rester (sinon la visite n'est plus comptée). */
import { useActionState, useMemo, useState } from "react";
import { TriangleAlert } from "lucide-react";
import { saveTextAction, type PresenceResult } from "@/app/gestion/(prive)/presence/actions";

export function CaptionEditor({ id, texte, lien, inconnus, disabled }: { id: string; texte: string; lien: string; /** Nombres du texte enregistré absents des faits. */ inconnus: string[]; disabled: boolean }) {
  const [valeur, setValeur] = useState(texte);
  const [state, action, pending] = useActionState<PresenceResult, FormData>(saveTextAction, undefined);
  const lienGarde = useMemo(() => valeur.includes(lien), [valeur, lien]);
  const modifie = valeur !== texte;

  return (
    <form action={action} className="pr-editor">
      <input type="hidden" name="id" value={id} />
      <label className="g-field">
        <span className="g-label">Légende Facebook</span>
        <textarea name="texte" className="g-textarea pr-editor__text" rows={16} value={valeur} onChange={(e) => setValeur(e.target.value)} disabled={disabled} maxLength={2200} />
      </label>
      <div className="pr-editor__meta">
        <span className={valeur.length > 2000 ? "is-bad" : undefined}>{valeur.length} / 2000 caractères</span>
      </div>
      {!lienGarde ? (
        <div className="pr-warn pr-warn--bad" role="alert">
          <TriangleAlert size={16} aria-hidden />
          <p>Le lien suivi a été modifié ou retiré : remettez-le tel quel, sinon les visites de cette publication ne seront pas comptées.</p>
        </div>
      ) : null}
      {inconnus.length && !modifie ? (
        <div className="pr-warn" role="alert">
          <TriangleAlert size={16} aria-hidden />
          <p>
            {inconnus.length === 1 ? "Ce nombre n’est pas dans les faits" : "Ces nombres ne sont pas dans les faits"} : <b>{inconnus.join(", ")}</b>. On ne publie jamais un chiffre sans source.
          </p>
        </div>
      ) : null}
      <div className="pr-actions__row">
        <button type="submit" className="k-btn k-btn--primary" disabled={disabled || pending || !modifie || !lienGarde}>
          {pending ? "Enregistrement…" : "Enregistrer la légende"}
        </button>
        {modifie ? (
          <button type="button" className="k-btn k-btn--ghost" onClick={() => setValeur(texte)}>
            Annuler les changements
          </button>
        ) : null}
      </div>
      {state ? (
        <p className={`pr-msg ${state.ok ? "is-ok" : "is-bad"}`} role={state.ok ? "status" : "alert"}>
          {state.ok ? state.message : state.error}
        </p>
      ) : null}
    </form>
  );
}
