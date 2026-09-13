/* ==================================================================
   Conformité C1 — sous-catégories RBQ exigées selon la portée du
   projet (travaux et type de système), et offre automatique aux
   installateurs admissibles. Les suggestions de départ sont « à
   confirmer » et désactivées : rien ne bloque tant que vous ne les
   activez pas. Propriétaire seulement.
   ================================================================== */
import type { Metadata } from "next";
import Link from "next/link";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { SYSTEM_TYPE_LABELS, SYSTEM_TYPES } from "@/lib/data/types/enums";
import { incompleteRules } from "@/lib/contrats/rbq";
import { readContrats } from "@/lib/contrats/store";
import { readRbqRules } from "@/lib/contrats/service";
import { WORK_KINDS, WORK_LABELS } from "@/lib/contrats/types";
import { Card } from "@/components/gestion/kit/Card";
import { Chip } from "@/components/gestion/kit/Chip";
import { Reveal } from "@/components/gestion/Reveal";
import { ActionForm } from "@/components/partenaires/admin/AdminTools";
import { saveOfferSettingsAction, saveRbqRulesAction } from "../../contrat-actions";

export const metadata: Metadata = { title: "Sous-catégories RBQ exigées" };
export const dynamic = "force-dynamic";

export default async function RbqRulesPage() {
  await requireAdmin();
  const [rules, contrats] = await Promise.all([readRbqRules(), readContrats()]);
  const incomplete = incompleteRules(rules);
  const s = contrats.settings;
  return (
    <div className="g-main--narrow" style={{ margin: "0 auto" }}>
      <Reveal className="k-pagehead">
        <div>
          <p className="k-eyebrow">Réglages · contrat</p>
          <h1 className="k-h1">Sous-catégories RBQ exigées</h1>
          <p className="k-lead">
            Pour chaque type de travaux, les sous-catégories dont l’installateur doit détenir au moins une. Comparées à celles de sa licence (registre RBQ, ou saisies dans sa fiche) avant l’approbation du contrat. Faites confirmer chaque règle par l’avocat ou la RBQ avant de l’activer. Voir aussi l’<Link href="/gestion/reglages/identite">identité de l’entreprise</Link>.
          </p>
        </div>
      </Reveal>

      <Card title="Règles" sub={`${rules.filter((r) => r.active).length} active${rules.filter((r) => r.active).length > 1 ? "s" : ""} sur ${rules.length}`} action={incomplete.length ? <Chip tone="bad" dot>{incomplete.length} sans sous-catégorie</Chip> : <Chip dot>À jour</Chip>}>
        <ActionForm action={saveRbqRulesAction} submit="Enregistrer les règles" pending="Enregistrement…">
          {rules.map((r, i) => (
            <fieldset key={r.id} className="g-card g-card__pad" style={{ display: "grid", gap: 8, margin: "0 0 12px", border: "1px solid var(--g-line, rgba(12,24,33,.12))", borderRadius: 14 }}>
              <input type="hidden" name={`r${i}_id`} value={r.id} />
              <input type="hidden" name={`r${i}_work`} value={r.work} />
              <legend className="g-label">{WORK_LABELS[r.work]}</legend>
              <label className="sq-inline-check">
                <input type="checkbox" name={`r${i}_active`} value="1" defaultChecked={r.active} /> Active (bloque l’approbation si la sous-catégorie manque)
              </label>
              <div className="g-row g-row--2">
                <div className="g-field">
                  <label className="g-label" htmlFor={`r${i}_label`}>Libellé</label>
                  <input id={`r${i}_label`} name={`r${i}_label`} className="g-input" defaultValue={r.label} maxLength={120} />
                </div>
                <div className="g-field">
                  <label className="g-label" htmlFor={`r${i}_codes`}>Sous-catégories (au moins une)</label>
                  <input id={`r${i}_codes`} name={`r${i}_codes`} className="g-input" defaultValue={r.anyOf.join(", ")} placeholder="ex. 15.10, 15.9" maxLength={120} />
                </div>
              </div>
              <div className="g-field">
                <span className="g-label">Types de système visés (aucun coché : tous)</span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "4px 14px" }}>
                  {SYSTEM_TYPES.map((t) => (
                    <label key={t} className="sq-inline-check">
                      <input type="checkbox" name={`r${i}_types`} value={t} defaultChecked={r.systemTypes.includes(t)} /> {SYSTEM_TYPE_LABELS[t]}
                    </label>
                  ))}
                </div>
              </div>
              <div className="g-row g-row--2">
                <div className="g-field">
                  <label className="g-label" htmlFor={`r${i}_status`}>Validation</label>
                  <select id={`r${i}_status`} name={`r${i}_status`} className="g-select" defaultValue={r.status}>
                    <option value="a-confirmer">À confirmer (avocat, RBQ)</option>
                    <option value="confirmee">Confirmée</option>
                  </select>
                </div>
                <div className="g-field">
                  <label className="g-label" htmlFor={`r${i}_note`}>Note</label>
                  <input id={`r${i}_note`} name={`r${i}_note`} className="g-input" defaultValue={r.note} maxLength={400} />
                </div>
              </div>
              <label className="sq-inline-check">
                <input type="checkbox" name={`r${i}_delete`} value="1" /> Retirer cette règle
              </label>
            </fieldset>
          ))}
          <fieldset style={{ display: "grid", gap: 8, border: 0, padding: 0, margin: 0 }}>
            <legend className="g-label">Ajouter une règle (désactivée au départ)</legend>
            <div className="g-row g-row--2">
              <select name="new_work" className="g-select" defaultValue="" aria-label="Travaux">
                <option value="">Travaux…</option>
                {WORK_KINDS.map((w) => (
                  <option key={w} value={w}>
                    {WORK_LABELS[w]}
                  </option>
                ))}
              </select>
              <input name="new_label" className="g-input" placeholder="Libellé" maxLength={120} />
            </div>
            <input name="new_codes" className="g-input" placeholder="Sous-catégories (ex. 15.7, 15.8)" maxLength={120} />
          </fieldset>
        </ActionForm>
      </Card>

      <Card title="Offre automatique" sub="Quand le client va de l’avant et qu’aucun installateur n’est en attente." action={<Chip tone={s.autoOffer ? "ok" : undefined} dot>{s.autoOffer ? "Activée" : "Désactivée"}</Chip>}>
        <ActionForm action={saveOfferSettingsAction} submit="Enregistrer" pending="…">
          <label className="sq-inline-check">
            <input type="checkbox" name="autoOffer" value="1" defaultChecked={s.autoOffer} /> Offrir automatiquement dès que le client va de l’avant (offre anonymisée aux admissibles disponibles)
          </label>
          <div className="g-row g-row--2">
            <div className="g-field">
              <label className="g-label" htmlFor="autoOfferCount">Installateurs sollicités (les mieux classés)</label>
              <input id="autoOfferCount" name="autoOfferCount" type="number" min={1} max={20} className="g-input" defaultValue={s.autoOfferCount} />
            </div>
            <div className="g-field">
              <label className="g-label" htmlFor="offerHours">Délai de réponse</label>
              <select id="offerHours" name="offerHours" className="g-select" defaultValue={String(s.offerHours)}>
                <option value="24">24 h</option>
                <option value="48">48 h</option>
                <option value="72">72 h</option>
              </select>
            </div>
          </div>
        </ActionForm>
      </Card>
    </div>
  );
}
