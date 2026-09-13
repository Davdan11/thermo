"use client";

/* Décisions sur une publication : approuver, publier maintenant, replanifier, régénérer, rejeter, reprendre. */
import { useState, useTransition } from "react";
import { CalendarClock, Check, RefreshCw, RotateCcw, Send, Shuffle, X } from "lucide-react";
import { approveAction, publishNowAction, regenerateAction, rejectAction, rescheduleAction, restoreAction, type PresenceResult } from "@/app/gestion/(prive)/presence/actions";
import type { PostStatus } from "@/lib/presence/types";

type Panel = null | "publier" | "replanifier" | "rejeter";

export function PostActions({
  id,
  status,
  date,
  time,
  real,
  locked,
  canRegenerate,
}: {
  id: string;
  status: PostStatus;
  date: string;
  time: string;
  /** Publication réelle possible (sinon mode essai). */
  real: boolean;
  /** Déjà envoyée en tout ou en partie à Meta. */
  locked: boolean;
  canRegenerate: boolean;
}) {
  const [pending, start] = useTransition();
  const [res, setRes] = useState<PresenceResult>();
  const [panel, setPanel] = useState<Panel>(null);
  const [when, setWhen] = useState({ date, time });
  const [reason, setReason] = useState("");
  const run = (fn: () => Promise<PresenceResult>) =>
    start(async () => {
      const r = await fn();
      setRes(r);
      if (r?.ok) setPanel(null);
    });
  const toggle = (p: Panel) => setPanel((cur) => (cur === p ? null : p));
  const open = status === "a_approuver" || status === "brouillon" || status === "planifiee";

  return (
    <div className="pr-actions">
      <div className="pr-actions__row">
        {status === "a_approuver" || status === "brouillon" ? (
          <button type="button" className="k-btn k-btn--ok" disabled={pending} onClick={() => run(() => approveAction(id))}>
            <Check size={16} aria-hidden /> Approuver
          </button>
        ) : null}
        {open || status === "echec" ? (
          <button type="button" className="k-btn k-btn--ink" disabled={pending} aria-expanded={panel === "publier"} onClick={() => toggle("publier")}>
            <Send size={15} aria-hidden /> Publier maintenant
          </button>
        ) : null}
        {open || status === "echec" ? (
          <button type="button" className="k-btn" disabled={pending} aria-expanded={panel === "replanifier"} onClick={() => toggle("replanifier")}>
            <CalendarClock size={15} aria-hidden /> Replanifier
          </button>
        ) : null}
        {canRegenerate && !locked && open ? (
          <>
            <button type="button" className="k-btn" disabled={pending} onClick={() => run(() => regenerateAction(id, "tournure"))} title="Même sujet, autre façon de le dire">
              <RefreshCw size={15} aria-hidden /> Autre tournure
            </button>
            <button type="button" className="k-btn" disabled={pending} onClick={() => run(() => regenerateAction(id, "sujet"))} title="Autre modèle, autre ville ou autre terme">
              <Shuffle size={15} aria-hidden /> Autre sujet
            </button>
          </>
        ) : null}
        {open && !locked ? (
          <button type="button" className="k-btn k-btn--ghost pr-danger" disabled={pending} aria-expanded={panel === "rejeter"} onClick={() => toggle("rejeter")}>
            <X size={15} aria-hidden /> Rejeter
          </button>
        ) : null}
        {status === "rejetee" || status === "echec" ? (
          <button type="button" className="k-btn" disabled={pending} onClick={() => run(() => restoreAction(id))}>
            <RotateCcw size={15} aria-hidden /> {status === "echec" ? "Réessayer au prochain passage" : "Remettre dans la file"}
          </button>
        ) : null}
      </div>

      {panel === "publier" ? (
        <div className="pr-panel" role="group" aria-label="Confirmer la publication">
          <p>{real ? "Publier tout de suite sur Facebook et Instagram ? La publication sera approuvée à votre nom." : "Mode essai : rien ne partira vers Meta. Le studio montrera ce qui aurait été envoyé."}</p>
          <div className="pr-actions__row">
            <button type="button" className="k-btn k-btn--primary" disabled={pending} onClick={() => run(() => publishNowAction(id))}>
              {pending ? "Envoi…" : real ? "Oui, publier" : "Lancer l’essai"}
            </button>
            <button type="button" className="k-btn k-btn--ghost" onClick={() => setPanel(null)}>
              Annuler
            </button>
          </div>
        </div>
      ) : null}

      {panel === "replanifier" ? (
        <form
          className="pr-panel pr-panel--row"
          onSubmit={(e) => {
            e.preventDefault();
            run(() => rescheduleAction(id, when.date, when.time));
          }}
        >
          <label className="g-field">
            <span className="g-label">Jour</span>
            <input className="g-input" type="date" required value={when.date} onChange={(e) => setWhen((w) => ({ ...w, date: e.target.value }))} />
          </label>
          <label className="g-field">
            <span className="g-label">Heure (Montréal)</span>
            <input className="g-input" type="time" required step={300} value={when.time} onChange={(e) => setWhen((w) => ({ ...w, time: e.target.value }))} />
          </label>
          <button type="submit" className="k-btn k-btn--primary" disabled={pending}>
            Enregistrer
          </button>
        </form>
      ) : null}

      {panel === "rejeter" ? (
        <form
          className="pr-panel"
          onSubmit={(e) => {
            e.preventDefault();
            run(() => rejectAction(id, reason));
          }}
        >
          <label className="g-field">
            <span className="g-label">Pourquoi ? (facultatif, pour vous)</span>
            <input className="g-input" maxLength={300} value={reason} onChange={(e) => setReason(e.target.value)} placeholder="Sujet déjà vu, photo peu claire…" />
          </label>
          <div className="pr-actions__row">
            <button type="submit" className="k-btn pr-danger" disabled={pending}>
              Rejeter
            </button>
            <button type="button" className="k-btn k-btn--ghost" onClick={() => setPanel(null)}>
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
