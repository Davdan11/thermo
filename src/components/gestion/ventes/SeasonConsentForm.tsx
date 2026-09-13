"use client";

/* Enregistrer ou retirer le consentement à la relance de saison. La façon dont le client l'a donné est obligatoire
   (preuve) ; le retrait est conservé avec sa date. */
import { useState, useTransition } from "react";
import { setSeasonConsentAction } from "@/app/gestion/(prive)/ventes-actions";

export function SeasonConsentForm({ clientId, firstName, active, withdrawn }: { clientId: string; firstName: string; active: { when: string; note: string } | null; withdrawn: string | null }) {
  const [note, setNote] = useState("");
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);
  const [pending, start] = useTransition();
  const who = firstName || "Le client";
  const send = (on: boolean) =>
    start(async () => {
      setMsg(null);
      const r = await setSeasonConsentAction(clientId, on, on ? note : "");
      if (r && !r.ok) setMsg({ ok: false, text: r.error });
      else {
        setNote("");
        setMsg({ ok: true, text: on ? "Consentement enregistré." : "Consentement retiré." });
      }
    });

  return (
    <div className="vt-consent">
      {active ? (
        <>
          <p className="vt-consent__state">
            <strong>Consentement enregistré</strong> le {active.when}
            {active.note ? ` : « ${active.note} »` : ""}. S’il est perdu, {who} pourra être relancé automatiquement à la saison suivante (désabonnement respecté).
          </p>
          <div className="vt-consent__row">
            <button type="button" className="k-btn k-btn--ghost" disabled={pending} onClick={() => send(false)}>
              Retirer le consentement
            </button>
          </div>
        </>
      ) : (
        <>
          <p className="vt-consent__state">
            Aucun consentement enregistré{withdrawn ? ` (retiré le ${withdrawn})` : ""} : la relance de saison reste une tâche manuelle, sans aucun envoi automatique.
          </p>
          <div className="vt-consent__row">
            <input className="g-input" value={note} onChange={(e) => setNote(e.target.value)} maxLength={300} placeholder="Comment : « au téléphone, le 12 septembre »" aria-label="Comment le client a donné son accord" />
            <button type="button" className="k-btn k-btn--ink" disabled={pending || !note.trim()} onClick={() => send(true)}>
              {pending ? "Enregistrement…" : "Enregistrer"}
            </button>
          </div>
        </>
      )}
      {msg ? (
        <p className={`cr-msg ${msg.ok ? "is-ok" : "is-bad"}`} role={msg.ok ? "status" : "alert"}>
          {msg.text}
        </p>
      ) : null}
    </div>
  );
}
