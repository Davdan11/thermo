"use client";

/* ==================================================================
   Conformité C1 — signature du contrat final par le client, en un
   geste : options (total en direct), renseignements à corriger au
   besoin, confirmations de la trousse (3.2), nom tapé, « J'accepte ».
   Formulaire POST ordinaire vers /devis/[jeton]/signer ; les cases
   « required » fonctionnent même sans JavaScript.
   ================================================================== */

import { useMemo, useState } from "react";
import { PenLine } from "lucide-react";
import type { ContractDoc } from "@/lib/contrats/types";
import { money } from "@/lib/soumissions/money";
import { computeTotals } from "@/lib/soumissions/totals";

export function ContractSignForm({ action, doc, sha, asOf, initialSelection, error }: { action: string; doc: ContractDoc; sha: string; asOf: string; initialSelection: string[]; error: string | null }) {
  const [sel, setSel] = useState<string[]>(initialSelection);
  const [checks, setChecks] = useState<boolean[]>(() => doc.confirmations.map(() => false));
  const [name, setName] = useState("");
  const [sending, setSending] = useState(false);
  const totals = useMemo(() => computeTotals(doc.project, sel, doc.taxes, asOf), [doc, sel, asOf]);
  const byLine = useMemo(() => new Map(totals.lines.map((l) => [l.id, l])), [totals]);
  const options = doc.project.lines.filter((l) => l.optional);
  const ready = checks.every(Boolean) && /^\S+(\s+\S+)+$/.test(name.trim());
  const c = doc.client;
  const s = doc.site;

  return (
    <form method="post" action={action} className="ct-form ct-rise ct-rise--3" id="signature" onSubmit={() => setSending(true)}>
      <input type="hidden" name="decision" value="signer" />
      <input type="hidden" name="sha" value={sha} />
      <input type="hidden" name="total" value={totals.totalCents} />
      {error ? (
        <p className="ct-alert" role="alert">
          {error}
        </p>
      ) : null}

      {options.length ? (
        <fieldset>
          <legend>Vos options</legend>
          {options.map((l) => (
            <label key={l.id} className="ct-opt">
              <input type="checkbox" name="options" value={l.id} checked={sel.includes(l.id)} onChange={(e) => setSel((x) => (e.target.checked ? [...new Set([...x, l.id])] : x.filter((y) => y !== l.id)))} />
              <span>{l.label}</span>
              <b>{money(byLine.get(l.id)?.netCents ?? 0)}</b>
            </label>
          ))}
        </fieldset>
      ) : null}

      <details className="ct-details">
        <summary>Corriger mes renseignements</summary>
        <div className="ct-grid2">
          <label className="ct-field">Prénom<input className="ct-input" name="c_firstName" defaultValue={c.firstName} autoComplete="given-name" maxLength={80} /></label>
          <label className="ct-field">Nom<input className="ct-input" name="c_lastName" defaultValue={c.lastName} autoComplete="family-name" maxLength={80} /></label>
          <label className="ct-field">Courriel<input className="ct-input" type="email" name="c_email" defaultValue={c.email} autoComplete="email" maxLength={160} /></label>
          <label className="ct-field">Téléphone<input className="ct-input" type="tel" name="c_phone" defaultValue={c.phone} autoComplete="tel" maxLength={30} /></label>
          <label className="ct-field">Adresse de facturation<input className="ct-input" name="c_address" defaultValue={c.address} autoComplete="street-address" maxLength={160} /></label>
          <label className="ct-field">Ville<input className="ct-input" name="c_city" defaultValue={c.city} autoComplete="address-level2" maxLength={80} /></label>
          <label className="ct-field">Code postal<input className="ct-input" name="c_postalCode" defaultValue={c.postalCode} autoComplete="postal-code" maxLength={10} /></label>
        </div>
        <label className="ct-check">
          <input type="checkbox" name="s_same" value="1" defaultChecked={s.sameAsBilling} />
          <span>L’adresse des travaux est la même que l’adresse de facturation.</span>
        </label>
        <div className="ct-grid2">
          <label className="ct-field">Adresse des travaux<input className="ct-input" name="s_address" defaultValue={s.address} maxLength={160} /></label>
          <label className="ct-field">Ville des travaux<input className="ct-input" name="s_city" defaultValue={s.city} maxLength={80} /></label>
          <label className="ct-field">Code postal des travaux<input className="ct-input" name="s_postalCode" defaultValue={s.postalCode} maxLength={10} /></label>
        </div>
      </details>

      <fieldset>
        <legend>Avant de signer</legend>
        {doc.confirmations.map((t, i) => (
          <label key={i} className="ct-check">
            <input type="checkbox" name="confirmation" value={i} required checked={checks[i]} onChange={(e) => setChecks((x) => x.map((v, j) => (j === i ? e.target.checked : v)))} />
            <span>{t}</span>
          </label>
        ))}
      </fieldset>

      <label className="ct-field">
        Votre prénom et votre nom (signature électronique)
        <input className="ct-input ct-input--sign" name="nom" required minLength={4} maxLength={120} autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} pattern="\S+(\s+\S+)+" title="Prénom et nom" />
      </label>

      <div className="ct-total" aria-live="polite">
        <span>Total, taxes comprises</span>
        <strong>{money(totals.totalCents)}</strong>
      </div>

      <button type="submit" className="ct-btn ct-btn--go" disabled={!ready || sending}>
        <PenLine size={18} aria-hidden /> {sending ? "Signature…" : "J’accepte et je signe le contrat"}
      </button>
      <p className="ct-fine">
        En cliquant, vous signez électroniquement le contrat de {doc.installer.legalName}, votre entrepreneur-vendeur. Nous conservons la date et l’heure, la version de la trousse, votre nom tapé, vos confirmations, vos options, votre adresse IP, votre navigateur et une empreinte SHA-256 du contrat, puis nous vous envoyons une copie par courriel.
      </p>
    </form>
  );
}
