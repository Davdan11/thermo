"use client";

/* Citer une clause de l'entente signée : choix de l'article (6.2…), note facultative, aperçu exact du message, envoi
   au partenaire (courriel + texto court). Le contexte (job, billet) est ajouté quand on cite depuis ces pages. */

import { useState, useTransition } from "react";
import { Quote, Send } from "lucide-react";
import type { PaResult } from "@/app/gestion/(prive)/partenaires-actions";

export interface ClauseOption {
  ref: string;
  title: string;
  text: string;
}

export function CitationForm({ installerId, clauses, signedOn, context, preview, send }: { installerId: string; clauses: ClauseOption[]; signedOn: string; context?: { jobId?: string; ticketId?: string }; preview: (input: unknown) => Promise<{ ok: true; sentence: string } | { ok: false; error: string }>; send: (input: unknown) => Promise<PaResult> }) {
  const [ref, setRef] = useState(clauses[0]?.ref ?? "");
  const [note, setNote] = useState("");
  const [text, setText] = useState<string | null>(null);
  const [result, setResult] = useState<PaResult>(undefined);
  const [isPending, start] = useTransition();
  const input = { id: installerId, ref, note, ...(context ?? {}) };
  if (!clauses.length) return <p className="g-hint">Aucune entente signée : rien à citer pour l’instant.</p>;
  const current = clauses.find((c) => c.ref === ref);

  return (
    <div className="g-form" style={{ gap: 12 }}>
      <div className="g-field">
        <label className="g-label" htmlFor={`cite-${installerId}`}>
          Article <small>(entente signée le {signedOn})</small>
        </label>
        <select
          id={`cite-${installerId}`}
          className="g-select"
          value={ref}
          onChange={(e) => {
            setRef(e.target.value);
            setText(null);
          }}
        >
          {clauses.map((c) => (
            <option key={c.ref} value={c.ref}>
              {c.ref} · {c.title} — {c.text.slice(0, 60)}
              {c.text.length > 60 ? "…" : ""}
            </option>
          ))}
        </select>
      </div>
      {current ? (
        <blockquote className="pa-quote">
          <Quote size={14} aria-hidden /> {current.text}
        </blockquote>
      ) : null}
      <div className="g-field">
        <label className="g-label" htmlFor={`note-${installerId}`}>
          Votre message <small>(facultatif)</small>
        </label>
        <textarea
          id={`note-${installerId}`}
          className="g-textarea"
          value={note}
          maxLength={1500}
          onChange={(e) => {
            setNote(e.target.value);
            setText(null);
          }}
          placeholder="Ex. : les photos de la plaque intérieure manquent pour le job n° 12."
        />
      </div>
      {text ? <pre className="pa-preview">{text}</pre> : null}
      <div className="g-actions">
        <button type="button" className="k-btn" disabled={isPending} onClick={() => start(async () => {
          const r = await preview(input);
          if (r.ok) setText(r.sentence);
          else setResult(r);
        })}>
          Aperçu
        </button>
        <button type="button" className="k-btn k-btn--primary" disabled={isPending || !text} onClick={() => start(async () => setResult(await send(input)))} title={!text ? "Voyez d’abord l’aperçu" : undefined}>
          <Send size={15} aria-hidden /> Envoyer au partenaire
        </button>
      </div>
      {result ? (
        <p className={`g-alert ${result.ok ? "g-alert--ok" : ""}`} role="status">
          {result.ok ? result.message : result.error}
        </p>
      ) : null}
    </div>
  );
}
