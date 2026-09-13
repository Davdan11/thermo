"use client";

/* ==================================================================
   Chantier V — formulaires de l'équipe : invitation, réglages de la
   répartition, fiche d'un membre, boutons d'action, suppression,
   relevé payé. Chaque action est revérifiée côté serveur
   (requireAdmin) ; ici, seulement l'affichage et les messages.
   ================================================================== */

import { useActionState, useEffect, useRef, useState, useTransition } from "react";
import {
  deleteMemberAction,
  inviteMemberAction,
  payStatementAction,
  saveTeamSettingsAction,
  updateMemberAction,
  type TeamActionState,
} from "@/app/gestion/(prive)/equipe/actions";
import type { MemberRow } from "@/lib/gestion/equipe/service";
import { ASSIGN_MODE_LABELS, type AssignMode, type TeamSettings } from "@/lib/gestion/equipe/types";

function Msg({ state }: { state: TeamActionState }) {
  if (!state) return null;
  return (
    <p className={`eq-msg ${state.ok ? "is-ok" : "is-bad"}`} role={state.ok ? "status" : "alert"}>
      {state.ok ? state.message : state.error}
    </p>
  );
}

export function InviteForm() {
  const [state, action, pending] = useActionState<TeamActionState, FormData>(inviteMemberAction, undefined);
  const ref = useRef<HTMLFormElement>(null);
  useEffect(() => {
    if (state?.ok) ref.current?.reset();
  }, [state]);
  return (
    <form ref={ref} action={action} className="eq-form">
      <div className="eq-form__row">
        <label className="g-field">
          <span className="g-label">Nom</span>
          <input name="name" className="g-input" required maxLength={80} autoComplete="off" placeholder="Ex. : Camille Exemple" />
        </label>
        <label className="g-field">
          <span className="g-label">Courriel</span>
          <input name="email" type="email" className="g-input" required maxLength={200} autoComplete="off" placeholder="camille@exemple.ca" />
        </label>
      </div>
      <div className="eq-form__row">
        <label className="g-field">
          <span className="g-label">Rôle</span>
          <select name="role" className="g-select g-input" defaultValue="vendeur">
            <option value="vendeur">Vendeur : ses clients seulement</option>
            <option value="adjoint">Adjoint : tout, sauf l’argent et la sécurité</option>
          </select>
        </label>
        <label className="g-field">
          <span className="g-label">Cellulaire (facultatif)</span>
          <input name="phone" type="tel" className="g-input" maxLength={30} inputMode="tel" placeholder="514 555-0100" />
        </label>
      </div>
      <div className="eq-actions">
        <button type="submit" className="k-btn k-btn--primary" disabled={pending}>
          {pending ? "Envoi…" : "Envoyer l’invitation"}
        </button>
        <Msg state={state} />
      </div>
    </form>
  );
}

const MODE_HINTS: Record<AssignMode, string> = {
  tour: "Chacun son tour, dans l’ordre d’arrivée des vendeurs.",
  territoire: "Selon les villes et débuts de codes postaux de chaque vendeur ; hors territoire : tour de rôle.",
  charge: "Au vendeur qui a le moins de dossiers ouverts.",
  manuel: "Rien d’automatique : vous attribuez chaque client depuis sa fiche.",
};

export function TeamSettingsForm({ settings }: { settings: TeamSettings }) {
  const [state, action, pending] = useActionState<TeamActionState, FormData>(saveTeamSettingsAction, undefined);
  return (
    <form action={action} className="eq-form">
      <fieldset className="eq-modes" style={{ border: 0, padding: 0, margin: 0 }}>
        <legend className="g-label" style={{ marginBottom: 8 }}>
          Répartition des nouvelles demandes
        </legend>
        {(Object.keys(ASSIGN_MODE_LABELS) as AssignMode[]).map((m) => (
          <label key={m} className="eq-mode">
            <input type="radio" name="mode" value={m} defaultChecked={settings.mode === m} />
            <span>
              <strong>{ASSIGN_MODE_LABELS[m]}</strong>
              <small>{MODE_HINTS[m]}</small>
            </span>
          </label>
        ))}
      </fieldset>
      <label className="eq-check">
        <input type="checkbox" name="require2faVendeurs" defaultChecked={settings.require2faVendeurs} />
        <span>
          <strong>2e étape obligatoire pour les vendeurs</strong> (recommandé) : un code sur leur cellulaire en plus du lien par courriel.
        </span>
      </label>
      <label className="eq-check">
        <input type="checkbox" name="require2faAdjoints" defaultChecked={settings.require2faAdjoints} />
        <span>
          <strong>2e étape obligatoire pour les adjoints</strong> (recommandé).
        </span>
      </label>
      <label className="eq-check">
        <input type="checkbox" name="notifyEmail" defaultChecked={settings.notifyEmail} />
        <span>Avertir le vendeur par courriel à chaque demande attribuée.</span>
      </label>
      <label className="eq-check">
        <input type="checkbox" name="notifySms" defaultChecked={settings.notifySms} />
        <span>Et par texto, s’il y a consenti dans sa fiche.</span>
      </label>
      <label className="g-field" style={{ maxWidth: 260 }}>
        <span className="g-label">Une invitation reste valable</span>
        <select name="inviteDays" className="g-select g-input" defaultValue={String(settings.inviteDays)}>
          {[1, 3, 7, 14, 30].map((d) => (
            <option key={d} value={d}>
              {d} jour{d > 1 ? "s" : ""}
            </option>
          ))}
        </select>
      </label>
      <div className="eq-actions">
        <button type="submit" className="k-btn k-btn--ink" disabled={pending}>
          {pending ? "Enregistrement…" : "Enregistrer"}
        </button>
        <Msg state={state} />
      </div>
    </form>
  );
}

export function MemberForm({ member }: { member: MemberRow }) {
  const [state, action, pending] = useActionState<TeamActionState, FormData>(updateMemberAction.bind(null, member.id), undefined);
  return (
    <form action={action} className="eq-form">
      <div className="eq-form__row">
        <label className="g-field">
          <span className="g-label">Nom</span>
          <input name="name" className="g-input" required maxLength={80} defaultValue={member.name} />
        </label>
        <label className="g-field">
          <span className="g-label">Cellulaire</span>
          <input name="phone" type="tel" className="g-input" maxLength={30} inputMode="tel" defaultValue={member.phone ?? ""} placeholder="514 555-0100" />
        </label>
      </div>
      <label className="eq-check">
        <input type="checkbox" name="available" defaultChecked={member.available} />
        <span>
          <strong>Disponible</strong> : reçoit les nouvelles demandes (décochez pendant ses vacances).
        </span>
      </label>
      <label className="eq-check">
        <input type="checkbox" name="smsConsent" defaultChecked={member.smsConsent} />
        <span>A consenti à recevoir un texto à chaque demande attribuée.</span>
      </label>
      {member.role === "vendeur" ? (
        <>
          <div className="eq-form__row">
            <label className="g-field">
              <span className="g-label">Villes du territoire</span>
              <textarea name="cities" className="g-input" rows={2} defaultValue={member.cities.join(", ")} placeholder="Laval, Terrebonne, Blainville" />
            </label>
            <label className="g-field">
              <span className="g-label">Débuts de codes postaux</span>
              <textarea name="postal" className="g-input" rows={2} defaultValue={member.postal.join(", ")} placeholder="H7N, H7M, J6W" />
            </label>
          </div>
          <label className="g-field" style={{ maxWidth: 260 }}>
            <span className="g-label">Part de la commission de l’entreprise (%)</span>
            <input name="commission" className="g-input" inputMode="decimal" defaultValue={String(member.commissionPercent)} />
          </label>
        </>
      ) : null}
      <div className="eq-actions">
        <button type="submit" className="k-btn k-btn--ink" disabled={pending}>
          {pending ? "Enregistrement…" : "Enregistrer la fiche"}
        </button>
        <Msg state={state} />
      </div>
    </form>
  );
}

/** Bouton qui appelle une action serveur liée (rôle, statut, invitation, redistribution, répartition). */
export function ActionButton({ action, label, pendingLabel = "…", className = "k-btn", confirmText }: { action: () => Promise<TeamActionState>; label: string; pendingLabel?: string; className?: string; confirmText?: string }) {
  const [pending, start] = useTransition();
  const [state, setState] = useState<TeamActionState>(undefined);
  return (
    <span className="eq-actions">
      <button
        type="button"
        className={className}
        disabled={pending}
        onClick={() => {
          if (confirmText && !window.confirm(confirmText)) return;
          start(async () => setState(await action()));
        }}
      >
        {pending ? pendingLabel : label}
      </button>
      <Msg state={state} />
    </span>
  );
}

export function DeleteMemberForm({ id, name }: { id: string; name: string }) {
  const [state, action, pending] = useActionState<TeamActionState, FormData>(deleteMemberAction.bind(null, id), undefined);
  return (
    <form action={action} className="eq-form">
      <label className="eq-check">
        <input type="checkbox" name="confirmer" value="oui" required />
        <span>Je supprime {name} de l’équipe. Ses clients restent dans le CRM ; réattribuez ses dossiers ouverts avant.</span>
      </label>
      <div className="eq-actions">
        <button type="submit" className="k-btn eq-danger" disabled={pending}>
          {pending ? "Suppression…" : "Supprimer ce membre"}
        </button>
        <Msg state={state} />
      </div>
    </form>
  );
}

export function PayForm({ month, userId }: { month: string; userId: string }) {
  const [state, action, pending] = useActionState<TeamActionState, FormData>(payStatementAction.bind(null, month, userId), undefined);
  return (
    <form action={action} className="eq-form">
      <div className="eq-form__row">
        <label className="g-field">
          <span className="g-label">Référence du paiement (facultatif)</span>
          <input name="reference" className="g-input" maxLength={80} placeholder="Ex. : virement du 5 octobre" />
        </label>
        <label className="eq-check" style={{ alignSelf: "end" }}>
          <input type="checkbox" name="confirmer" value="oui" required />
          <span>Le paiement est fait.</span>
        </label>
      </div>
      <div className="eq-actions">
        <button type="submit" className="k-btn k-btn--primary" disabled={pending}>
          {pending ? "Enregistrement…" : "Marquer payé"}
        </button>
        <Msg state={state} />
      </div>
    </form>
  );
}
