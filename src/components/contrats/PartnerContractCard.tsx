/* ==================================================================
   Conformité C1 — dans la fiche d'un partenaire : paiement du client
   (bénéficiaire = l'installateur ; modes ; échéancier, acompte avant
   les travaux par carte de crédit seulement) et sous-catégories RBQ
   connues (registre du chantier R, ou saisies ici). Composant serveur.
   ================================================================== */

import { paymentProblems } from "@/lib/contrats/paiement";
import { knownSubcategories } from "@/lib/contrats/rbq";
import { partnerContractSettings } from "@/lib/contrats/service";
import { INSTALLMENT_WHEN, INSTALLMENT_WHEN_LABELS, PAYMENT_MODES, PAYMENT_MODE_LABELS } from "@/lib/contrats/types";
import type { RbqVerification } from "@/lib/gestion/reseau/rbq/types";
import { Card } from "@/components/gestion/kit/Card";
import { Chip } from "@/components/gestion/kit/Chip";
import { ActionForm } from "@/components/partenaires/admin/AdminTools";
import { savePartnerRbqAction, savePaymentProfileAction } from "@/app/gestion/(prive)/contrat-actions";

export async function PartnerContractCard({ installerId, verification }: { installerId: string; verification: RbqVerification | null }) {
  const { payment, rbq } = await partnerContractSettings(installerId);
  const problems = paymentProblems(payment);
  const known = knownSubcategories(verification, rbq ? { codes: rbq.codes, note: rbq.note, updatedAt: rbq.updatedAt, updatedBy: "" } : null);
  const rows = [0, 1, 2, 3].map((i) => payment?.schedule[i] ?? null);
  return (
    <>
      <Card id="paiement-client" title="Paiement du client" sub="Le client paie l’installateur directement : il est le bénéficiaire nommé au contrat." action={<Chip tone={problems.length ? "bad" : "ok"} dot>{problems.length ? "À compléter" : "Conforme"}</Chip>}>
        {problems.length ? (
          <ul className="g-hint" style={{ marginTop: 0 }}>
            {problems.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        ) : null}
        <ActionForm action={savePaymentProfileAction.bind(null, installerId)} submit="Enregistrer le paiement" pending="Enregistrement…">
          <div className="g-field">
            <span className="g-label">Modes acceptés par l’installateur</span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "4px 14px" }}>
              {PAYMENT_MODES.map((m) => (
                <label key={m} className="sq-inline-check">
                  <input type="checkbox" name="methods" value={m} defaultChecked={payment?.methods.includes(m)} /> {PAYMENT_MODE_LABELS[m]}
                </label>
              ))}
            </div>
          </div>
          <p className="g-hint" style={{ margin: 0 }}>Échéancier (total : 100 %). Tout versement à la signature ou avant les travaux se paie par carte de crédit seulement.</p>
          {rows.map((r, i) => (
            <fieldset key={i} style={{ display: "grid", gap: 6, border: 0, padding: 0, margin: 0 }}>
              <div className="g-row g-row--2">
                <input name={`v${i + 1}_label`} className="g-input" defaultValue={r?.label ?? ""} placeholder={`Versement ${i + 1} : libellé`} maxLength={80} aria-label={`Versement ${i + 1}`} />
                <span style={{ display: "flex", gap: 8 }}>
                  <select name={`v${i + 1}_when`} className="g-select" defaultValue={r?.when ?? ""} aria-label="Moment">
                    <option value="">Moment…</option>
                    {INSTALLMENT_WHEN.map((w) => (
                      <option key={w} value={w}>
                        {INSTALLMENT_WHEN_LABELS[w]}
                      </option>
                    ))}
                  </select>
                  <input name={`v${i + 1}_percent`} className="g-input" inputMode="decimal" defaultValue={r ? String(r.percent).replace(".", ",") : ""} placeholder="%" style={{ maxWidth: 90 }} aria-label="Pourcentage" />
                </span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "2px 12px" }}>
                {PAYMENT_MODES.map((m) => (
                  <label key={m} className="sq-inline-check">
                    <input type="checkbox" name={`v${i + 1}_methods`} value={m} defaultChecked={r?.methods.includes(m)} /> {PAYMENT_MODE_LABELS[m]}
                  </label>
                ))}
              </div>
            </fieldset>
          ))}
          <div className="g-field">
            <label className="g-label" htmlFor="pay-notes">Précisions pour le client <small>(facultatif)</small></label>
            <textarea id="pay-notes" name="notes" className="g-textarea" defaultValue={payment?.notes ?? ""} maxLength={600} style={{ minHeight: 60 }} />
          </div>
        </ActionForm>
      </Card>

      <Card id="sous-categories" title="Sous-catégories RBQ" sub="Comparées aux sous-catégories exigées par la portée du projet, avant l’approbation." action={<Chip tone={known.codes.length ? "ok" : "bad"} dot>{known.codes.length ? known.codes.join(", ") : "Inconnues"}</Chip>}>
        <p className="g-hint" style={{ marginTop: 0 }}>
          Registre de la RBQ (vérification automatique) : {known.fromRegistry.length ? known.fromRegistry.join(", ") : "aucune (licence non vérifiée, ou pas « active »)"}. Saisies ici : {known.fromFiche.length ? known.fromFiche.join(", ") : "aucune"}.
        </p>
        <ActionForm action={savePartnerRbqAction.bind(null, installerId)} submit="Enregistrer" pending="…">
          <div className="g-row g-row--2">
            <div className="g-field">
              <label className="g-label" htmlFor="rbq-codes">Sous-catégories de sa licence</label>
              <input id="rbq-codes" name="codes" className="g-input" defaultValue={rbq?.codes.join(", ") ?? ""} placeholder="ex. 15.10, 16" maxLength={200} />
            </div>
            <div className="g-field">
              <label className="g-label" htmlFor="rbq-note">Source <small>(ex. vérifié au registre le…)</small></label>
              <input id="rbq-note" name="note" className="g-input" defaultValue={rbq?.note ?? ""} maxLength={300} />
            </div>
          </div>
        </ActionForm>
      </Card>
    </>
  );
}
