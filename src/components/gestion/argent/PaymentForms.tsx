"use client";

/* Formulaires de la page Paiements et d'une facture : marquer payée, annuler, renvoyer, émettre, lier une soumission,
   réglages des factures. useActionState : le formulaire garde sa saisie si la validation échoue. */
import { useActionState, useMemo, useState, useTransition } from "react";
import { FilePlus2, Link2, Send } from "lucide-react";
import { issueInvoiceAction, linkQuoteAction, markPaidAction, resendInvoiceAction, saveCommissionSettingsAction, voidInvoiceAction, type ArgentResult } from "@/app/gestion/(prive)/argent-actions";
import { PAYMENT_METHODS, PAYMENT_METHOD_LABELS, type CommissionSettings } from "@/lib/gestion/commissions/types";

export function Msg({ state }: { state: ArgentResult }) {
  if (!state) return null;
  return (
    <p className={`cr-msg ${state.ok ? "is-ok" : "is-bad"}`} role={state.ok ? "status" : "alert"}>
      {state.ok ? state.message : state.error}
    </p>
  );
}

export function MarkPaidForm({ id, today }: { id: string; today: string }) {
  const act = useMemo(() => markPaidAction.bind(null, id), [id]);
  const [state, action, pending] = useActionState<ArgentResult, FormData>(act, undefined);
  return (
    <form action={action} className="ar-form">
      <div className="ar-form__row">
        <label className="g-field">
          <span className="g-label">Date du paiement</span>
          <input type="date" name="date" className="g-input" defaultValue={today} max={today} required />
        </label>
        <label className="g-field">
          <span className="g-label">Moyen</span>
          <select name="method" className="g-select" defaultValue="interac">
            {PAYMENT_METHODS.map((m) => (
              <option key={m} value={m}>
                {PAYMENT_METHOD_LABELS[m]}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="g-field">
        <span className="g-label">Référence (facultatif)</span>
        <input name="reference" className="g-input" maxLength={120} placeholder="N° de virement, de chèque…" autoComplete="off" />
      </label>
      <button type="submit" className="k-btn k-btn--ok k-btn--lg" disabled={pending}>
        {pending ? "Enregistrement…" : "Marquer payée"}
      </button>
      <Msg state={state} />
    </form>
  );
}

export function VoidForm({ id }: { id: string }) {
  const act = useMemo(() => voidInvoiceAction.bind(null, id), [id]);
  const [state, action, pending] = useActionState<ArgentResult, FormData>(act, undefined);
  return (
    <details className="ar-void">
      <summary>Annuler cette facture…</summary>
      <form action={action} className="ar-form">
        <label className="g-field">
          <span className="g-label">Raison (gardée avec la facture)</span>
          <textarea name="reason" className="g-textarea" required minLength={3} maxLength={300} rows={2} placeholder="Ex. : job annulé, soumission remplacée…" />
        </label>
        <button type="submit" className="k-btn ar-danger" disabled={pending}>
          {pending ? "Annulation…" : "Annuler la facture"}
        </button>
        <Msg state={state} />
      </form>
    </details>
  );
}

function ActionButton({ run, children, className = "k-btn", pendingLabel }: { run: () => Promise<ArgentResult>; children: React.ReactNode; className?: string; pendingLabel: string }) {
  const [msg, setMsg] = useState<ArgentResult>(undefined);
  const [pending, start] = useTransition();
  return (
    <span style={{ display: "inline-grid", gap: 6 }}>
      <button type="button" className={className} disabled={pending} onClick={() => start(async () => setMsg(await run()))}>
        {pending ? pendingLabel : children}
      </button>
      <Msg state={msg} />
    </span>
  );
}

export function ResendButton({ id }: { id: string }) {
  return (
    <ActionButton run={() => resendInvoiceAction(id)} pendingLabel="Envoi…">
      <Send size={15} aria-hidden /> Renvoyer par courriel
    </ActionButton>
  );
}

export function IssueButton({ jobId }: { jobId: string }) {
  return (
    <ActionButton run={() => issueInvoiceAction(jobId)} className="k-btn k-btn--primary" pendingLabel="Émission…">
      <FilePlus2 size={15} aria-hidden /> Émettre la facture
    </ActionButton>
  );
}

export function LinkQuoteForm({ jobId, quotes, current }: { jobId: string; quotes: Array<{ id: string; number: string; label: string; taxableCents: number }>; current?: string | null }) {
  const [state, action, pending] = useActionState<ArgentResult, FormData>(linkQuoteAction, undefined);
  const fmt = (c: number) => `${Math.round(c / 100).toLocaleString("fr-CA")} $ avant taxes`;
  return (
    <form action={action}>
      <input type="hidden" name="jobId" value={jobId} />
      <select name="quoteId" className="g-select" defaultValue={current ?? ""} aria-label="Soumission acceptée">
        <option value="">Choisir la soumission acceptée…</option>
        {quotes.map((q) => (
          <option key={q.id} value={q.id}>
            {q.number} · {q.label || "client"} · {fmt(q.taxableCents)}
          </option>
        ))}
      </select>
      <button type="submit" className="k-btn" disabled={pending}>
        <Link2 size={15} aria-hidden /> {pending ? "…" : "Lier"}
      </button>
      <Msg state={state} />
    </form>
  );
}

export function CommissionSettingsForm({ settings }: { settings: CommissionSettings }) {
  const [state, action, pending] = useActionState<ArgentResult, FormData>(saveCommissionSettingsAction, undefined);
  return (
    <form action={action} className="ar-form">
      <div className="ar-form__row ar-form__row--3">
        <label className="g-field">
          <span className="g-label">Commission (%)</span>
          <input name="percent" className="g-input" inputMode="decimal" defaultValue={String(settings.percent).replace(".", ",")} required />
          <span className="g-hint">Du sous-total après rabais, avant taxes. LogisVert exclu.</span>
        </label>
        <label className="g-field">
          <span className="g-label">Délai de paiement (jours)</span>
          <input name="dueDays" type="number" min={0} max={60} className="g-input" defaultValue={settings.dueDays} required />
        </label>
        <label className="g-field">
          <span className="g-label">Grâce avant la pause (jours)</span>
          <input name="graceDays" type="number" min={0} max={60} className="g-input" defaultValue={settings.graceDays} required />
          <span className="g-hint">0 : offres en pause dès le lendemain de l’échéance.</span>
        </label>
      </div>
      <div className="ar-form__row">
        <label className="g-field">
          <span className="g-label">Courriel des virements Interac</span>
          <input name="interacEmail" type="email" className="g-input" defaultValue={settings.interacEmail} maxLength={160} placeholder="paiements@exemple.ca" autoComplete="off" />
          <span className="g-hint">Vide : la facture invite à vous écrire pour l’obtenir.</span>
        </label>
        <label className="g-field">
          <span className="g-label">Précision sous les instructions</span>
          <input name="interacNote" className="g-input" defaultValue={settings.interacNote} maxLength={300} placeholder="Ex. : dépôt automatique activé" />
        </label>
      </div>
      <button type="submit" className="k-btn k-btn--ink" disabled={pending}>
        {pending ? "Enregistrement…" : "Enregistrer"}
      </button>
      <Msg state={state} />
    </form>
  );
}
