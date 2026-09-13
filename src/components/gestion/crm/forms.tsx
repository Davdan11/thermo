"use client";

/* Petits formulaires du CRM : tâche, note, fiche client, réglages. useActionState : le formulaire n'est pas vidé
   quand la validation échoue ; il l'est après un succès. */
import { useActionState, useEffect, useRef, useState } from "react";
import { Check, PhoneCall, StickyNote } from "lucide-react";
import { addTaskAction, createClientAction, saveCrmSettingsAction, type ActionResult } from "@/app/gestion/(prive)/crm-actions";
import { STAGE_LABELS, STAGES, type CrmSettings } from "@/lib/gestion/crm/types";

function Msg({ state }: { state: ActionResult }) {
  if (!state) return null;
  return (
    <p className={`cr-msg ${state.ok ? "is-ok" : "is-bad"}`} role={state.ok ? "status" : "alert"}>
      {state.ok ? state.message : state.error}
    </p>
  );
}

function useResetOnSuccess(state: ActionResult) {
  const ref = useRef<HTMLFormElement>(null);
  useEffect(() => {
    if (state?.ok) ref.current?.reset();
  }, [state]);
  return ref;
}

export function TaskForm({ clientId, autoFocus = false }: { clientId?: string | null; autoFocus?: boolean }) {
  const [state, action, pending] = useActionState<ActionResult, FormData>(addTaskAction, undefined);
  const [when, setWhen] = useState("demain");
  const ref = useResetOnSuccess(state);
  return (
    <form ref={ref} action={action} className="cr-note-form">
      {clientId ? <input type="hidden" name="clientId" value={clientId} /> : null}
      <label className="g-field" style={{ margin: 0 }}>
        <span className="g-label">Quoi faire</span>
        <input name="title" className="g-input" required maxLength={160} placeholder="Ex. : rappeler pour confirmer la date" autoFocus={autoFocus} />
      </label>
      <div className="cr-note-form__row">
        <div className="cr-seg" role="radiogroup" aria-label="Quand">
          {[
            ["soir", "Ce soir"],
            ["demain", "Demain"],
            ["lundi", "Lundi"],
            ["date", "Date"],
          ].map(([id, label]) => (
            <label key={id}>
              <input type="radio" name="when" value={id} checked={when === id} onChange={() => setWhen(id)} />
              {label}
            </label>
          ))}
        </div>
        {when === "date" ? (
          <span style={{ display: "flex", gap: 6 }}>
            <input type="date" name="date" className="g-input" required style={{ width: 160 }} aria-label="Date" />
            <input type="time" name="time" className="g-input" defaultValue="09:00" style={{ width: 110 }} aria-label="Heure" />
          </span>
        ) : null}
        <button type="submit" className="k-btn k-btn--primary" disabled={pending}>
          {pending ? "Ajout…" : "Ajouter la tâche"}
        </button>
      </div>
      <Msg state={state} />
    </form>
  );
}

export function NoteForm({ action: act }: { action: (prev: ActionResult, fd: FormData) => Promise<ActionResult> }) {
  const [state, action, pending] = useActionState<ActionResult, FormData>(act, undefined);
  const ref = useResetOnSuccess(state);
  return (
    <form ref={ref} action={action} className="cr-note-form">
      <textarea name="text" required maxLength={4000} placeholder="Ce qui s’est dit, ce qu’il veut, ce qu’il faut retenir…" aria-label="Note" />
      <div className="cr-note-form__row">
        <div className="cr-seg" role="radiogroup" aria-label="Type">
          <label>
            <input type="radio" name="kind" value="note" defaultChecked />
            <StickyNote size={14} aria-hidden /> Note
          </label>
          <label>
            <input type="radio" name="kind" value="appel" />
            <PhoneCall size={14} aria-hidden /> Appel fait
          </label>
        </div>
        <button type="submit" className="k-btn k-btn--ink" disabled={pending}>
          {pending ? "Enregistrement…" : "Ajouter"}
        </button>
      </div>
      <Msg state={state} />
    </form>
  );
}

export function ClientForm() {
  const [state, action, pending] = useActionState<ActionResult, FormData>(createClientAction, undefined);
  return (
    <form action={action} className="cr-form">
      <div className="cr-form__row">
        <label className="g-field">
          <span className="g-label">Prénom</span>
          <input name="firstName" className="g-input" autoComplete="off" maxLength={60} autoFocus />
        </label>
        <label className="g-field">
          <span className="g-label">Nom</span>
          <input name="lastName" className="g-input" autoComplete="off" maxLength={60} />
        </label>
      </div>
      <div className="cr-form__row">
        <label className="g-field">
          <span className="g-label">Téléphone</span>
          <input name="phone" className="g-input" type="tel" inputMode="tel" autoComplete="off" maxLength={30} placeholder="514 555-1234" />
        </label>
        <label className="g-field">
          <span className="g-label">Courriel</span>
          <input name="email" className="g-input" type="email" autoComplete="off" maxLength={200} />
        </label>
      </div>
      <label className="g-field">
        <span className="g-label">Ville</span>
        <input name="city" className="g-input" autoComplete="off" maxLength={60} />
      </label>
      <p className="g-hint" style={{ margin: 0 }}>
        Le téléphone et le courriel relient cette fiche aux demandes, soumissions, jobs et textos du même client, déjà reçus ou à venir.
      </p>
      <Msg state={state} />
      <div>
        <button type="submit" className="k-btn k-btn--primary k-btn--lg" disabled={pending}>
          <Check size={17} aria-hidden /> {pending ? "Création…" : "Créer la fiche"}
        </button>
      </div>
    </form>
  );
}

export function SettingsForm({ settings, stages }: { settings: CrmSettings; stages: { ok: true; stages: Array<{ id: number; name: string }> } | { ok: false; error: string } }) {
  const [state, action, pending] = useActionState<ActionResult, FormData>(saveCrmSettingsAction, undefined);
  const num = (name: keyof CrmSettings, label: string, hint: string, unit: string, min: number, max: number, step = 1) => (
    <div className="cr-setting">
      <div className="cr-setting__row">
        <label className="cr-setting__label" htmlFor={`s-${name}`}>
          {label}
        </label>
        <span className="cr-number">
          <input id={`s-${name}`} name={name} type="number" min={min} max={max} step={step} defaultValue={settings[name] as number} required />
          <span>{unit}</span>
        </span>
      </div>
      <p className="cr-setting__hint">{hint}</p>
    </div>
  );
  return (
    <form action={action} className="cr-form">
      <div>
        {num("callbackHours", "Rappeler un nouveau client", "Heures ouvrables : du lundi au vendredi, de 8 h à 18 h (heure de Montréal).", "heures ouvrables", 0.5, 72, 0.5)}
        {num("openedFollowDays", "Relancer une soumission ouverte sans réponse", "Après la dernière consultation (ou le dernier envoi).", "jours", 1, 30)}
        {num("jobNoAnswerHours", "Job sans preneur", "Offres envoyées et aucun installateur n’a accepté.", "heures", 4, 240)}
        {num("expiringDays", "Avertir avant l’expiration d’une soumission", "Une soumission expirée crée aussi une tâche (elle ne rend jamais le client « perdu »).", "jours avant", 0, 30)}
      </div>
      <div className="k-card k-card--cream k-card--pad" style={{ display: "grid", gap: 12 }}>
        <div>
          <p className="cr-setting__label" style={{ margin: 0 }}>
            Pipedrive : déplacer l’affaire quand vous changez l’étape à la main
          </p>
          <p className="cr-setting__hint">
            Désactivé par défaut. Pipedrive reste en sens unique : l’outil y pousse, il n’y lit rien. Les étapes des soumissions (envoyée, ouverte, acceptée, refusée) sont déjà poussées par le créateur de soumissions et ne le seront jamais deux fois. Laissez « Ne pas déplacer » pour garder une étape hors de Pipedrive.
          </p>
        </div>
        {stages.ok ? (
          <div className="cr-form__row">
            {STAGES.map((s) => (
              <label key={s} className="g-field">
                <span className="g-label">{STAGE_LABELS[s]}</span>
                <select name={`pd_${s}`} className="g-select g-input" defaultValue={settings.pipedriveStageMap[s] ?? ""}>
                  <option value="">Ne pas déplacer</option>
                  {stages.stages.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name}
                    </option>
                  ))}
                </select>
              </label>
            ))}
          </div>
        ) : (
          <p className="g-alert" style={{ margin: 0 }}>
            Étapes Pipedrive indisponibles ({stages.error}). Les délais ci-dessus s’enregistrent quand même.
          </p>
        )}
      </div>
      <Msg state={state} />
      <div>
        <button type="submit" className="k-btn k-btn--primary k-btn--lg" disabled={pending}>
          {pending ? "Enregistrement…" : "Enregistrer les réglages"}
        </button>
      </div>
    </form>
  );
}
