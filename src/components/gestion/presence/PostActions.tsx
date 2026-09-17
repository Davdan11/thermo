"use client";

/* Décisions sur un élément de la file Facebook : approuver, refuser, régénérer, publier maintenant (approuvé seulement), remettre. */
import { useState, useTransition } from "react";
import { Check, RotateCcw, Send, Shuffle, X } from "lucide-react";
import { approveAction, publishNowAction, regenerateAction, rejectAction, restoreAction, type PresenceResult } from "@/app/gestion/(prive)/presence/actions";
import type { Statut } from "@/lib/social/types";

type Panneau = null | "publier" | "refuser";

export function PostActions({ id, statut, reel, envoyee }: { id: string; statut: Statut; /** Envoi réel possible (sinon mode essai). */ reel: boolean; /** Déjà parti (en tout ou en partie) vers Facebook. */ envoyee: boolean }) {
  const [pending, start] = useTransition();
  const [res, setRes] = useState<PresenceResult>();
  const [panneau, setPanneau] = useState<Panneau>(null);
  const [raison, setRaison] = useState("");
  const run = (fn: () => Promise<PresenceResult>) =>
    start(async () => {
      const r = await fn();
      setRes(r);
      if (r?.ok) setPanneau(null);
    });
  const basculer = (p: Panneau) => setPanneau((c) => (c === p ? null : p));
  const ouverte = statut === "en_attente" || statut === "brouillon" || statut === "approuvee";

  return (
    <div className="pr-actions">
      <div className="pr-actions__row">
        {statut === "en_attente" || statut === "brouillon" ? (
          <button type="button" className="k-btn k-btn--ok" disabled={pending} onClick={() => run(() => approveAction(id))}>
            <Check size={16} aria-hidden /> Approuver
          </button>
        ) : null}
        {statut === "approuvee" && !envoyee ? (
          <button type="button" className="k-btn k-btn--ink" disabled={pending} aria-expanded={panneau === "publier"} onClick={() => basculer("publier")}>
            <Send size={15} aria-hidden /> Publier maintenant
          </button>
        ) : null}
        {(ouverte || statut === "refusee" || statut === "echec") && !envoyee ? (
          <button type="button" className="k-btn" disabled={pending} onClick={() => run(() => regenerateAction(id))} title="Autre sujet, autre texte, autre visuel, pour la même case">
            <Shuffle size={15} aria-hidden /> Régénérer
          </button>
        ) : null}
        {ouverte && !envoyee ? (
          <button type="button" className="k-btn k-btn--ghost pr-danger" disabled={pending} aria-expanded={panneau === "refuser"} onClick={() => basculer("refuser")}>
            <X size={15} aria-hidden /> Refuser
          </button>
        ) : null}
        {statut === "refusee" || statut === "echec" ? (
          <button type="button" className="k-btn" disabled={pending} onClick={() => run(() => restoreAction(id))}>
            <RotateCcw size={15} aria-hidden /> {statut === "echec" ? "Réessayer au prochain passage" : "Remettre dans la file"}
          </button>
        ) : null}
      </div>

      {panneau === "publier" ? (
        <div className="pr-panel" role="group" aria-label="Confirmer l’envoi">
          <p>{reel ? "Publier tout de suite sur la page Facebook ?" : "Mode essai : rien ne partira vers Facebook. Le studio gardera ce qui aurait été envoyé."}</p>
          <div className="pr-actions__row">
            <button type="button" className="k-btn k-btn--primary" disabled={pending} onClick={() => run(() => publishNowAction(id))}>
              {pending ? "Envoi…" : reel ? "Oui, publier" : "Lancer l’essai"}
            </button>
            <button type="button" className="k-btn k-btn--ghost" onClick={() => setPanneau(null)}>
              Annuler
            </button>
          </div>
        </div>
      ) : null}

      {panneau === "refuser" ? (
        <form
          className="pr-panel"
          onSubmit={(e) => {
            e.preventDefault();
            run(() => rejectAction(id, raison));
          }}
        >
          <label className="g-field">
            <span className="g-label">Pourquoi ? (facultatif, pour vous)</span>
            <input className="g-input" maxLength={300} value={raison} onChange={(e) => setRaison(e.target.value)} placeholder="Sujet peu parlant, photo peu claire…" />
          </label>
          <div className="pr-actions__row">
            <button type="submit" className="k-btn pr-danger" disabled={pending}>
              Refuser
            </button>
            <button type="button" className="k-btn k-btn--ghost" onClick={() => setPanneau(null)}>
              Annuler
            </button>
          </div>
        </form>
      ) : null}

      {res ? (
        <p className={`pr-msg ${res.ok ? "is-ok" : "is-bad"}`} role={res.ok ? "status" : "alert"}>
          {res.ok ? res.message : res.error}
        </p>
      ) : null}
    </div>
  );
}
