"use client";

/* Conformité C2 — commandes de /gestion/conformite : date d'entrée en vigueur de la politique, anonymisation des
   prospects (essai ou réel), passage manuel, programme de recommandation (récompense fixe), faits confirmés d'une
   recommandation, retrait de consentement noté par téléphone ou courriel. */
import { useActionState, useState, useTransition } from "react";
import { Play } from "lucide-react";
import { referralFactAction, runDailyNowAction, saveReferralProgramAction, savePolicyDateAction, saveRetentionAction, withdrawConsentAction, type CfResult } from "@/app/gestion/(prive)/conformite-actions";
import type { ReferralProgram } from "@/lib/gestion/automatisations/types";
import { Msg } from "@/components/gestion/argent/PaymentForms";

const dollars = (c: number | null | undefined) => (c ? (c % 100 === 0 ? String(c / 100) : (c / 100).toFixed(2).replace(".", ",")) : "");

export function PolicyDateForm({ value }: { value: string | null }) {
  const [state, action, pending] = useActionState<CfResult, FormData>(savePolicyDateAction, undefined);
  return (
    <form action={action} className="ar-form">
      <label className="g-field">
        <span className="g-label">Politique en vigueur le</span>
        <input type="date" name="date" className="g-input" defaultValue={value ?? ""} />
        <span className="g-hint">Affichée en tête de la politique (« Version du … »). Vide : la politique actuelle reste en ligne.</span>
      </label>
      <button type="submit" className="k-btn k-btn--ink" disabled={pending}>
        {pending ? "Enregistrement…" : "Enregistrer"}
      </button>
      <Msg state={state} />
    </form>
  );
}

export function RetentionForm({ mode, mois }: { mode: "essai" | "reel"; mois: number }) {
  const [state, action, pending] = useActionState<CfResult, FormData>(saveRetentionAction, undefined);
  return (
    <form action={action} className="ar-form">
      <label className="g-field">
        <span className="g-label">Mode</span>
        <select name="mode" className="g-input" defaultValue={mode}>
          <option value="essai">Essai : rien n’est modifié</option>
          <option value="reel">Réel : anonymiser les prospects inactifs</option>
        </select>
      </label>
      <label className="g-field">
        <span className="g-label">Inactivité (mois)</span>
        <input type="number" name="mois" min={12} max={120} className="g-input" defaultValue={mois} />
        <span className="g-hint">Décision approuvée : 24 mois. Contrats, garanties et litiges ne sont jamais touchés.</span>
      </label>
      <button type="submit" className="k-btn k-btn--ink" disabled={pending}>
        {pending ? "Enregistrement…" : "Enregistrer"}
      </button>
      <Msg state={state} />
    </form>
  );
}

export function RunDailyButton() {
  const [msg, setMsg] = useState<CfResult>(undefined);
  const [pending, start] = useTransition();
  return (
    <span style={{ display: "grid", gap: 6, justifyItems: "start" }}>
      <button type="button" className="k-btn" disabled={pending} onClick={() => start(async () => setMsg(await runDailyNowAction()))}>
        <Play size={15} aria-hidden /> {pending ? "Passage en cours…" : "Lancer le passage maintenant"}
      </button>
      <Msg state={msg} />
    </span>
  );
}

export function ReferralProgramForm({ p }: { p: ReferralProgram | null }) {
  const [state, action, pending] = useActionState<CfResult, FormData>(saveReferralProgramAction, undefined);
  return (
    <form action={action} className="ar-form">
      <label className="g-field">
        <span className="g-label">Récompense fixe ($)</span>
        <input name="montant" className="g-input" inputMode="decimal" defaultValue={dollars(p?.rewardCents)} placeholder="Vide : programme non offert" />
      </label>
      <label className="g-field">
        <span className="g-label">Forme</span>
        <input name="forme" className="g-input" maxLength={80} defaultValue={p?.form ?? ""} placeholder="Ex. : carte-cadeau, virement Interac" />
      </label>
      <label className="g-field">
        <span className="g-label">Plafond annuel par personne</span>
        <span style={{ display: "flex", gap: 8 }}>
          <input name="plafond" className="g-input" inputMode="decimal" defaultValue={p?.annualCap ? (p.annualCap.kind === "montant" ? dollars(p.annualCap.value) : String(p.annualCap.value)) : ""} />
          <select name="plafondType" className="g-input" defaultValue={p?.annualCap?.kind ?? "nombre"} style={{ maxWidth: 170 }}>
            <option value="nombre">récompenses</option>
            <option value="montant">$ au total</option>
          </select>
        </span>
      </label>
      <label className="g-field">
        <span className="g-label">Date de lancement</span>
        <input type="date" name="lancement" className="g-input" defaultValue={p?.launchDate ?? ""} />
      </label>
      <label className="g-field">
        <span className="g-label">Délai d’annulation du contrat (jours)</span>
        <input name="annulation" className="g-input" inputMode="numeric" defaultValue={p?.cancellationDays ? String(p.cancellationDays) : ""} />
        <span className="g-hint">La récompense n’est due qu’après ce délai, l’installation terminée et payée, puis versée dans les 30 jours.</span>
      </label>
      <button type="submit" className="k-btn k-btn--ink" disabled={pending}>
        {pending ? "Enregistrement…" : "Enregistrer"}
      </button>
      <Msg state={state} />
    </form>
  );
}

const FACTS: Array<{ fact: "paiement" | "remboursement" | "versement" | "refus"; label: string; when: (s: string) => boolean }> = [
  { fact: "paiement", label: "Paiement du client confirmé", when: (s) => s === "en-attente" },
  { fact: "versement", label: "Récompense versée", when: (s) => s === "a-verser" },
  { fact: "remboursement", label: "Annulé ou remboursé", when: (s) => s !== "versee" && s !== "refusee" },
  { fact: "refus", label: "Refuser", when: (s) => s === "en-attente" || s === "a-verser" },
];

export function ReferralFactButtons({ id, status, paid }: { id: string; status: string; paid: boolean }) {
  const [msg, setMsg] = useState<CfResult>(undefined);
  const [pending, start] = useTransition();
  return (
    <span style={{ display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center" }}>
      {FACTS.filter((f) => f.when(status) && !(f.fact === "paiement" && paid)).map((f) => (
        <button key={f.fact} type="button" className="k-btn" disabled={pending} onClick={() => start(async () => setMsg(await referralFactAction(id, f.fact)))}>
          {f.label}
        </button>
      ))}
      <Msg state={msg} />
    </span>
  );
}

export function WithdrawForm() {
  const [state, action, pending] = useActionState<CfResult, FormData>(withdrawConsentAction, undefined);
  return (
    <form action={action} className="ar-form">
      <label className="g-field">
        <span className="g-label">Courriel ou téléphone</span>
        <input name="contact" className="g-input" maxLength={160} autoComplete="off" />
      </label>
      <label className="g-field">
        <span className="g-label">Demandé par</span>
        <select name="methode" className="g-input" defaultValue="telephone">
          <option value="telephone">Téléphone</option>
          <option value="courriel">Courriel</option>
          <option value="gestion">Autre (noté ici)</option>
        </select>
        <span className="g-hint">Retire les rappels (5.2) et les messages commerciaux (5.3), tout de suite. Les messages de service continuent.</span>
      </label>
      <button type="submit" className="k-btn k-btn--ink" disabled={pending}>
        {pending ? "Enregistrement…" : "Noter le retrait"}
      </button>
      <Msg state={state} />
    </form>
  );
}
