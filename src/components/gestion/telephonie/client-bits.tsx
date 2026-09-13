"use client";

/* Chantier T — petits éléments client : consentement exprès aux textos (fiche client), reprise d'une transcription. */
import { useActionState, useState, useTransition } from "react";
import { Check, RotateCcw, ShieldCheck, ShieldOff } from "lucide-react";
import { retryTranscriptionAction, setExpressConsentAction, type TelActionResult } from "@/app/gestion/(prive)/telephonie/actions";

export function Msg({ state }: { state: TelActionResult }) {
  if (!state) return null;
  return (
    <p className={`cr-msg ${state.ok ? "is-ok" : "is-bad"}`} role={state.ok ? "status" : "alert"}>
      {state.ok ? state.message : state.error}
    </p>
  );
}

export function ConsentForm({ clientId, firstName, active }: { clientId: string; firstName: string; active: boolean }) {
  const [state, action, pending] = useActionState<TelActionResult, FormData>(setExpressConsentAction, undefined);
  const [open, setOpen] = useState(false);
  if (active) {
    return (
      <form action={action}>
        <input type="hidden" name="clientId" value={clientId} />
        <input type="hidden" name="on" value="0" />
        <div>
          <button type="submit" className="k-btn k-btn--ghost" disabled={pending}>
            <ShieldOff size={15} aria-hidden /> {pending ? "…" : "Retirer le consentement exprès"}
          </button>
        </div>
        <Msg state={state} />
      </form>
    );
  }
  if (!open) {
    return (
      <div>
        <button type="button" className="k-btn" onClick={() => setOpen(true)}>
          <ShieldCheck size={15} aria-hidden /> Noter un consentement exprès
        </button>
      </div>
    );
  }
  return (
    <form action={action} className="is-inline">
      <input type="hidden" name="clientId" value={clientId} />
      <input type="hidden" name="on" value="1" />
      <label className="g-field" style={{ margin: 0 }}>
        <span className="g-label">Comment {firstName} a donné son accord</span>
        <input name="note" className="g-input" required maxLength={300} placeholder="Ex. : au téléphone, le 12 septembre" autoFocus />
      </label>
      <button type="submit" className="k-btn k-btn--ink" disabled={pending}>
        <Check size={15} aria-hidden /> {pending ? "…" : "Noter"}
      </button>
      <Msg state={state} />
    </form>
  );
}

export function RetryTranscription({ id }: { id: string }) {
  const [state, setState] = useState<TelActionResult>(undefined);
  const [pending, start] = useTransition();
  return (
    <div style={{ display: "grid", gap: 6 }}>
      <div>
        <button type="button" className="k-btn k-btn--ghost" disabled={pending} onClick={() => start(async () => setState(await retryTranscriptionAction(id)))}>
          <RotateCcw size={15} aria-hidden /> {pending ? "…" : "Réessayer la transcription"}
        </button>
      </div>
      <Msg state={state} />
    </div>
  );
}
