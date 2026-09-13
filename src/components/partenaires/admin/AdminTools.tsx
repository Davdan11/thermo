"use client";

/* ==================================================================
   Outils clients de /gestion (volet A) :
     - ActionButton : bouton qui appelle une Server Action liée et
       affiche le résultat (lien personnel à copier au besoin) ;
     - ActionForm   : formulaire (useActionState) avec message ;
     - PhotoReview  : approuver / signaler une photo de chantier ;
     - LocalDateTime: champ « date et heure » converti en ISO (heure du
       navigateur du propriétaire, à Montréal).
   ================================================================== */

import { useActionState, useState, useTransition } from "react";
import { Check, Copy, Flag, Undo2 } from "lucide-react";
import type { PaResult } from "@/app/gestion/(prive)/partenaires-actions";

function Message({ r }: { r: PaResult }) {
  const [copied, setCopied] = useState(false);
  if (!r) return null;
  if (!r.ok)
    return (
      <p className="g-alert pa-msg" role="alert">
        {r.error}
      </p>
    );
  return (
    <div className="g-alert g-alert--ok pa-msg" role="status">
      {r.message}
      {r.link ? (
        <span className="pa-link">
          <code>{r.link}</code>
          <button
            type="button"
            className="k-btn k-btn--ghost"
            onClick={() => {
              void navigator.clipboard?.writeText(r.link!).then(() => setCopied(true));
            }}
          >
            {copied ? <Check size={14} aria-hidden /> : <Copy size={14} aria-hidden />} {copied ? "Copié" : "Copier"}
          </button>
        </span>
      ) : null}
    </div>
  );
}

export function ActionButton({ action, children, pending = "…", className = "k-btn k-btn--primary", confirm }: { action: () => Promise<PaResult>; children: React.ReactNode; pending?: string; className?: string; confirm?: string }) {
  const [result, setResult] = useState<PaResult>(undefined);
  const [isPending, start] = useTransition();
  return (
    <div className="pa-action">
      <button
        type="button"
        className={className}
        disabled={isPending}
        onClick={() => {
          if (confirm && !window.confirm(confirm)) return;
          start(async () => setResult(await action()));
        }}
      >
        {isPending ? pending : children}
      </button>
      <Message r={result} />
    </div>
  );
}

export function ActionForm({ action, children, submit, className = "g-form", submitClass = "k-btn k-btn--ink", pending = "Enregistrement…" }: { action: (prev: PaResult, fd: FormData) => Promise<PaResult>; children: React.ReactNode; submit: React.ReactNode; className?: string; submitClass?: string; pending?: string }) {
  const [state, formAction, isPending] = useActionState(action, undefined);
  return (
    <form action={formAction} className={className}>
      {children}
      <div className="pa-form-foot">
        <button type="submit" className={submitClass} disabled={isPending}>
          {isPending ? pending : submit}
        </button>
      </div>
      <Message r={state} />
    </form>
  );
}

/** « Date et heure » locales → champ caché ISO (le serveur ne devine jamais le fuseau). */
export function LocalDateTime({ name, isoName, defaultIso, label }: { name: string; isoName: string; defaultIso?: string | null; label: string }) {
  const toLocal = (iso?: string | null) => {
    if (!iso) return "";
    const d = new Date(iso);
    const pad = (n: number) => String(n).padStart(2, "0");
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
  };
  const [value, setValue] = useState(() => toLocal(defaultIso));
  const iso = value ? new Date(value).toISOString() : "";
  return (
    <div className="g-field">
      <label className="g-label" htmlFor={name}>
        {label}
      </label>
      <input id={name} name={name} type="datetime-local" className="g-input" value={value} onChange={(e) => setValue(e.target.value)} suppressHydrationWarning />
      <input type="hidden" name={isoName} value={iso} />
    </div>
  );
}

export function PhotoReview({ photoId, status, action }: { photoId: string; status: "approuvee" | "signalee" | null; action: (photoId: string, status: "approuvee" | "signalee" | "aucune", note?: string) => Promise<PaResult> }) {
  const [current, setCurrent] = useState(status);
  const [isPending, start] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const run = (next: "approuvee" | "signalee" | "aucune") =>
    start(async () => {
      let note = "";
      if (next === "signalee") note = window.prompt("Qu’est-ce qui ne va pas ? (envoyé seulement dans l’historique)") ?? "";
      const r = await action(photoId, next, note);
      if (r?.ok) {
        setCurrent(next === "aucune" ? null : next);
        setError(null);
      } else setError(r && !r.ok ? r.error : "Erreur.");
    });
  return (
    <div className={`pa-review${current ? ` is-${current}` : ""}`} aria-busy={isPending || undefined}>
      {current ? (
        <>
          <span className="pa-review__state">{current === "approuvee" ? <><Check size={13} aria-hidden /> Approuvée</> : <><Flag size={13} aria-hidden /> Signalée</>}</span>
          <button type="button" className="pa-review__btn" onClick={() => run("aucune")} disabled={isPending} aria-label="Annuler la décision">
            <Undo2 size={14} aria-hidden />
          </button>
        </>
      ) : (
        <>
          <button type="button" className="pa-review__btn is-ok" onClick={() => run("approuvee")} disabled={isPending}>
            <Check size={14} aria-hidden /> OK
          </button>
          <button type="button" className="pa-review__btn is-bad" onClick={() => run("signalee")} disabled={isPending}>
            <Flag size={14} aria-hidden /> Signaler
          </button>
        </>
      )}
      {error ? <span className="pa-review__err">{error}</span> : null}
    </div>
  );
}
