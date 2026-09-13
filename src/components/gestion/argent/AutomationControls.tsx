"use client";

/* Commandes de la page Automatisations : interrupteurs (réponse optimiste), passage manuel, récompense de référence ;
   statut LogisVert noté par le propriétaire dans la fiche client. */
import { useActionState, useOptimistic, useState, useTransition } from "react";
import { Play } from "lucide-react";
import { runTickNowAction, saveAutomationSettingsAction, setLogisvertStatusAction, toggleAutomationAction, type ArgentResult } from "@/app/gestion/(prive)/argent-actions";
import { LOGISVERT_LABELS, LOGISVERT_STATUSES, type AutomationId, type LogisvertStatus } from "@/lib/gestion/automatisations/types";
import { Msg } from "./PaymentForms";

export function AutomationToggle({ id, enabled, label }: { id: AutomationId; enabled: boolean; label: string }) {
  const [on, setOn] = useOptimistic(enabled);
  const [pending, start] = useTransition();
  const [err, setErr] = useState<string | null>(null);
  return (
    <span style={{ display: "grid", gap: 4, justifyItems: "start" }}>
      <button
        type="button"
        role="switch"
        aria-checked={on}
        aria-label={`${label} : ${on ? "active" : "en pause"}`}
        title={on ? "Active : cliquer pour mettre en pause" : "En pause : cliquer pour activer"}
        className={`ar-switch${on ? " is-on" : ""}`}
        disabled={pending}
        onClick={() =>
          start(async () => {
            setErr(null);
            setOn(!on);
            const r = await toggleAutomationAction(id, !on);
            if (r && !r.ok) setErr(r.error);
          })
        }
      >
        <span className="ar-switch__knob" aria-hidden />
      </button>
      {err ? (
        <span className="cr-msg is-bad" role="alert">
          {err}
        </span>
      ) : null}
    </span>
  );
}

export function RunNowButton() {
  const [msg, setMsg] = useState<ArgentResult>(undefined);
  const [pending, start] = useTransition();
  return (
    <span style={{ display: "grid", gap: 6, justifyItems: "start" }}>
      <button type="button" className="k-btn" disabled={pending} onClick={() => start(async () => setMsg(await runTickNowAction()))}>
        <Play size={15} aria-hidden /> {pending ? "Passage en cours…" : "Lancer un passage maintenant"}
      </button>
      <Msg state={msg} />
    </span>
  );
}

export function ReferralRewardForm({ value }: { value: string }) {
  const [state, action, pending] = useActionState<ArgentResult, FormData>(saveAutomationSettingsAction, undefined);
  return (
    <form action={action} className="ar-form">
      <label className="g-field">
        <span className="g-label">Récompense offerte (facultatif)</span>
        <input name="referralReward" className="g-input" defaultValue={value} maxLength={200} placeholder="Laissez vide : aucune récompense n’est mentionnée" />
        <span className="g-hint">Texte ajouté tel quel au courriel de référence. N’inscrivez un montant que si vous l’offrez vraiment.</span>
      </label>
      <button type="submit" className="k-btn k-btn--ink" disabled={pending}>
        {pending ? "Enregistrement…" : "Enregistrer"}
      </button>
      <Msg state={state} />
    </form>
  );
}

export function LogisvertStatusSelect({ jobId, status }: { jobId: string; status: LogisvertStatus }) {
  const [value, setValue] = useState(status);
  const [msg, setMsg] = useState<ArgentResult>(undefined);
  const [pending, start] = useTransition();
  return (
    <span style={{ display: "inline-grid", gap: 4 }}>
      <select
        className="ar-lv-select"
        value={value}
        disabled={pending}
        aria-label="Statut LogisVert"
        onChange={(e) => {
          const next = e.target.value as LogisvertStatus;
          setValue(next);
          start(async () => setMsg(await setLogisvertStatusAction(jobId, next)));
        }}
      >
        {LOGISVERT_STATUSES.map((s) => (
          <option key={s} value={s}>
            {LOGISVERT_LABELS[s]}
          </option>
        ))}
      </select>
      {msg && !msg.ok ? <Msg state={msg} /> : null}
    </span>
  );
}
