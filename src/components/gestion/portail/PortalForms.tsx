"use client";

/* Chantier P — formulaires de « Plans d'entretien » et « Créneaux » (/gestion). useActionState : le formulaire garde
   sa saisie si la validation échoue ; chaque action vérifie la session au serveur (portail-actions.ts). */
import { useActionState, useMemo, useState, useTransition } from "react";
import { CalendarPlus, Link2, Play, Send, Trash2 } from "lucide-react";
import {
  addSlotsAction,
  cancelMembershipAction,
  enrollAction,
  removeSlotAction,
  runPortalTickAction,
  saveConditionsAction,
  savePlanAction,
  savePortalSettingsAction,
  sendAvailabilityLinkAction,
  sendPortalLinkAction,
  type PortalActionResult,
} from "@/app/gestion/(prive)/portail-actions";

export function Msg({ state }: { state: PortalActionResult }) {
  if (!state) return null;
  return (
    <p className={`cr-msg ${state.ok ? "is-ok" : "is-bad"}`} role={state.ok ? "status" : "alert"}>
      {state.ok ? state.message : state.error}
    </p>
  );
}

const centsText = (c: number | null) => (c === null ? "" : (c / 100).toFixed(2).replace(".", ","));

export interface PlanFormValue {
  id: string;
  name: string;
  priceCents: number | null;
  includes: string[];
  commissionPercent: number | null;
  active: boolean;
}

export function PlanForm({ plan }: { plan?: PlanFormValue }) {
  const act = useMemo(() => savePlanAction.bind(null, plan?.id), [plan?.id]);
  const [state, action, pending] = useActionState<PortalActionResult, FormData>(act, undefined);
  return (
    <form action={action} className="ar-form">
      <label className="g-field">
        <span className="g-label">Nom du plan</span>
        <input name="name" className="g-input" defaultValue={plan?.name ?? ""} required maxLength={80} placeholder="Ex. : Entretien annuel" />
      </label>
      <div className="ar-form__row">
        <label className="g-field">
          <span className="g-label">Prix annuel, avant taxes ($)</span>
          <input name="price" className="g-input" inputMode="decimal" defaultValue={centsText(plan?.priceCents ?? null)} placeholder="À fixer" />
          <span className="g-hint">Payé par le client. Vide : à fixer (le plan ne peut pas être offert).</span>
        </label>
        <label className="g-field">
          <span className="g-label">Commission de l’installateur (%)</span>
          <input name="percent" className="g-input" inputMode="decimal" defaultValue={plan?.commissionPercent === null || plan?.commissionPercent === undefined ? "" : String(plan.commissionPercent).replace(".", ",")} placeholder="À fixer" />
          <span className="g-hint">Du prix du plan, facturée à chaque visite.</span>
        </label>
      </div>
      <label className="g-field">
        <span className="g-label">Ce qui est inclus (une ligne par élément)</span>
        <textarea name="includes" className="g-textarea" rows={4} defaultValue={(plan?.includes ?? []).join("\n")} placeholder={"Nettoyage des filtres\nVérification du drain"} />
      </label>
      <label className="g-check" style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <input type="checkbox" name="active" defaultChecked={plan?.active ?? false} /> Offert aux clients (prix et commission requis)
      </label>
      <button type="submit" className="k-btn k-btn--primary" disabled={pending}>
        {pending ? "Enregistrement…" : plan ? "Enregistrer le plan" : "Créer le plan"}
      </button>
      <Msg state={state} />
    </form>
  );
}

export function ConditionsForm({ text }: { text: string }) {
  const [state, action, pending] = useActionState<PortalActionResult, FormData>(saveConditionsAction, undefined);
  return (
    <form action={action} className="ar-form">
      <label className="g-field">
        <span className="g-label">Texte des conditions (fourni par l’avocat)</span>
        <textarea name="conditions" className="g-textarea" rows={10} defaultValue={text} maxLength={20000} placeholder="À rédiger : collez ici le texte fourni par l’avocat. Tant qu’il est vide, le portail affiche « Conditions à rédiger » et l’adhésion est fermée." />
        <span className="g-hint">Le client coche « J’ai lu et j’accepte » et tape son nom ; l’empreinte du texte accepté est gardée avec son adhésion.</span>
      </label>
      <button type="submit" className="k-btn k-btn--primary" disabled={pending}>
        {pending ? "Enregistrement…" : "Enregistrer les conditions"}
      </button>
      <Msg state={state} />
    </form>
  );
}

export function PortalSettingsForm({ settings }: { settings: { changeDeadlineHours: number; bookingLeadHours: number; visitLeadDays: number; inviteClients: boolean; generateVisits: boolean } }) {
  const [state, action, pending] = useActionState<PortalActionResult, FormData>(savePortalSettingsAction, undefined);
  return (
    <form action={action} className="ar-form">
      <div className="ar-form__row ar-form__row--3">
        <label className="g-field">
          <span className="g-label">Changement en ligne jusqu’à (heures avant)</span>
          <input name="changeDeadlineHours" type="number" min={0} max={720} className="g-input" defaultValue={settings.changeDeadlineHours} required />
          <span className="g-hint">Ensuite : « appelez-nous ».</span>
        </label>
        <label className="g-field">
          <span className="g-label">Réservable au plus tôt (heures avant)</span>
          <input name="bookingLeadHours" type="number" min={0} max={720} className="g-input" defaultValue={settings.bookingLeadHours} required />
        </label>
        <label className="g-field">
          <span className="g-label">Visite d’entretien créée (jours avant l’échéance)</span>
          <input name="visitLeadDays" type="number" min={0} max={120} className="g-input" defaultValue={settings.visitLeadDays} required />
        </label>
      </div>
      <label className="g-check" style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <input type="checkbox" name="inviteClients" defaultChecked={settings.inviteClients} /> Inviter le client à choisir sa date dès que son installateur a des moments libres
      </label>
      <label className="g-check" style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <input type="checkbox" name="generateVisits" defaultChecked={settings.generateVisits} /> Créer et offrir chaque année les visites d’entretien des adhérents
      </label>
      <button type="submit" className="k-btn k-btn--primary" disabled={pending}>
        {pending ? "Enregistrement…" : "Enregistrer les réglages"}
      </button>
      <Msg state={state} />
    </form>
  );
}

export function EnrollForm({ jobs, plans }: { jobs: Array<{ id: string; label: string }>; plans: Array<{ id: string; name: string }> }) {
  const [state, action, pending] = useActionState<PortalActionResult, FormData>(enrollAction, undefined);
  return (
    <form action={action} className="ar-form">
      <div className="ar-form__row">
        <label className="g-field">
          <span className="g-label">Client (job d’installation)</span>
          <select name="jobId" className="g-select" defaultValue="" required>
            <option value="">Choisir…</option>
            {jobs.map((j) => (
              <option key={j.id} value={j.id}>
                {j.label}
              </option>
            ))}
          </select>
        </label>
        <label className="g-field">
          <span className="g-label">Plan</span>
          <select name="planId" className="g-select" defaultValue={plans[0]?.id ?? ""} required>
            {plans.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="g-field">
        <span className="g-label">Consentement du client</span>
        <input name="note" className="g-input" required minLength={3} maxLength={300} placeholder="Ex. : accepté au téléphone le 3 mars, conditions lues" />
      </label>
      <button type="submit" className="k-btn k-btn--primary" disabled={pending || !plans.length}>
        {pending ? "Inscription…" : "Inscrire au plan"}
      </button>
      <Msg state={state} />
    </form>
  );
}

export function CancelMembershipForm({ id }: { id: string }) {
  const act = useMemo(() => cancelMembershipAction.bind(null, id), [id]);
  const [state, action, pending] = useActionState<PortalActionResult, FormData>(act, undefined);
  return (
    <details className="ar-void">
      <summary>Annuler…</summary>
      <form action={action} className="ar-form">
        <input name="reason" className="g-input" required minLength={3} maxLength={300} placeholder="Raison (gardée avec l’adhésion)" />
        <button type="submit" className="k-btn ar-danger" disabled={pending}>
          {pending ? "…" : "Annuler l’adhésion"}
        </button>
        <Msg state={state} />
      </form>
    </details>
  );
}

export function AddSlotForm({ installerId, today }: { installerId: string; today: string }) {
  const [state, action, pending] = useActionState<PortalActionResult, FormData>(addSlotsAction, undefined);
  return (
    <form action={action} className="ar-form">
      <input type="hidden" name="installerId" value={installerId} />
      <div className="ar-form__row ar-form__row--3">
        <label className="g-field">
          <span className="g-label">Date</span>
          <input type="date" name="day" className="g-input" min={today} required />
        </label>
        <label className="g-field">
          <span className="g-label">Arrivée à partir de</span>
          <input type="time" name="start" className="g-input" defaultValue="08:00" step={900} required />
        </label>
        <label className="g-field">
          <span className="g-label">Jusqu’à</span>
          <input type="time" name="end" className="g-input" defaultValue="12:00" step={900} required />
        </label>
      </div>
      <label className="g-field">
        <span className="g-label">Répéter chaque semaine</span>
        <select name="repeatWeeks" className="g-select" defaultValue="0">
          <option value="0">Une seule fois</option>
          {[1, 2, 3, 4, 6, 8, 12].map((w) => (
            <option key={w} value={w}>
              {w} semaine{w > 1 ? "s" : ""} de plus
            </option>
          ))}
        </select>
      </label>
      <button type="submit" className="k-btn k-btn--primary" disabled={pending}>
        <CalendarPlus size={15} aria-hidden /> {pending ? "Publication…" : "Publier"}
      </button>
      <Msg state={state} />
    </form>
  );
}

function ActionButton({ run, children, className = "k-btn", pendingLabel, label }: { run: () => Promise<PortalActionResult>; children: React.ReactNode; className?: string; pendingLabel: string; label?: string }) {
  const [msg, setMsg] = useState<PortalActionResult>(undefined);
  const [pending, start] = useTransition();
  return (
    <span style={{ display: "inline-grid", gap: 6 }}>
      <button type="button" className={className} disabled={pending} aria-label={label} onClick={() => start(async () => setMsg(await run()))}>
        {pending ? pendingLabel : children}
      </button>
      <Msg state={msg} />
    </span>
  );
}

export function RemoveSlotButton({ slotId, label }: { slotId: string; label: string }) {
  return (
    <ActionButton run={() => removeSlotAction(slotId)} className="k-btn k-btn--ghost k-btn--icon" pendingLabel="…" label={label}>
      <Trash2 size={14} aria-hidden />
    </ActionButton>
  );
}

export function AvailabilityLinkButton({ installerId }: { installerId: string }) {
  return (
    <ActionButton run={() => sendAvailabilityLinkAction(installerId)} pendingLabel="Envoi…">
      <Send size={14} aria-hidden /> Envoyer son lien
    </ActionButton>
  );
}

export function PortalLinkButton({ jobId }: { jobId: string }) {
  return (
    <ActionButton run={() => sendPortalLinkAction(jobId)} pendingLabel="Envoi…">
      <Link2 size={14} aria-hidden /> Envoyer son espace
    </ActionButton>
  );
}

export function RunPortalTickButton() {
  return (
    <ActionButton run={() => runPortalTickAction()} className="k-btn k-btn--ink" pendingLabel="Passage…">
      <Play size={14} aria-hidden /> Lancer maintenant
    </ActionButton>
  );
}
