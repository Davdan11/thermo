/* ==================================================================
   Chantier R — licence RBQ dans la fiche du partenaire : verdict de
   la vérification automatique (fichier ouvert de la RBQ), lien vers
   le registre public, levée manuelle d'un blocage après vérification.
   Composant serveur ; les formulaires sont ceux du volet A.
   ================================================================== */

import { ExternalLink, ShieldCheck, ShieldQuestion, ShieldX } from "lucide-react";
import { rbqClearOverrideAction, rbqOverrideAction } from "@/app/gestion/(prive)/reseau-actions";
import { localYmd } from "@/lib/gestion/crm/time";
import { ymdLong } from "@/lib/gestion/partenaires/compliance";
import { longDate } from "@/lib/gestion/partenaires/format";
import { BLOCKING_OUTCOMES, isBlocking, RBQ_DATASET_URL, RBQ_REGISTRY_URL } from "@/lib/gestion/reseau/rbq/verify";
import { RBQ_OUTCOME_LABELS, type RbqVerification } from "@/lib/gestion/reseau/rbq/types";
import { Card } from "@/components/gestion/kit/Card";
import { Chip } from "@/components/gestion/kit/Chip";
import { ActionButton, ActionForm } from "@/components/partenaires/admin/AdminTools";
import "./reseau.css";

export function RbqRegistryCard({ installerId, number, check }: { installerId: string; number: string; check: RbqVerification | null }) {
  const now = new Date();
  const enabled = process.env.RBQ_VERIFICATION_ACTIVE === "1";
  const blocked = isBlocking(check, now);
  const tone = !check ? "muted" : blocked ? "bad" : check.outcome === "active" ? "ok" : "warn";
  const Icon = !check ? ShieldQuestion : blocked ? ShieldX : ShieldCheck;
  const registry = (
    <a href={RBQ_REGISTRY_URL} target="_blank" rel="noreferrer" className="k-btn k-btn--ghost">
      <ExternalLink size={14} aria-hidden /> Registre public de la RBQ
    </a>
  );

  return (
    <Card id="licence-rbq" title="Licence RBQ au registre" sub={enabled ? "Vérifiée chaque nuit au fichier ouvert des licences actives de la RBQ" : "Vérification automatique désactivée (RBQ_VERIFICATION_ACTIVE)"} action={registry}>
      <div className={`rs-rbq is-${tone}`}>
        <div className="rs-rbq__head">
          <span className="rs-rbq__icon" aria-hidden>
            <Icon size={20} />
          </span>
          <div>
            <b>{check ? RBQ_OUTCOME_LABELS[check.outcome] : "Pas encore vérifiée"}</b>
            <p className="g-hint">
              {number ? `Numéro ${number}` : "Aucun numéro saisi"}
              {check ? ` · fichier du ${ymdLong(localYmd(check.source.fetchedAt))}` : ""}
            </p>
          </div>
          <Chip tone={tone} dot>
            {blocked ? "Offres bloquées" : check?.override ? "Levée manuelle" : check ? "Vérifiée" : "À vérifier"}
          </Chip>
        </div>

        {!check ? (
          <p className="rs-rbq__note">
            {enabled ? "La prochaine vérification de nuit donnera le verdict du fichier de la RBQ." : "Aucun statut n’est affiché tant que la vérification automatique n’a pas lu le fichier de la RBQ."} Vérifiez la licence au registre public avant d’envoyer des offres, puis à chaque échéance.
          </p>
        ) : (
          <dl className="g-kv rs-rbq__kv">
            {check.rawStatus ? (
              <>
                <dt>Statut au fichier</dt>
                <dd>« {check.rawStatus} »</dd>
              </>
            ) : null}
            {check.licenceType ? (
              <>
                <dt>Type</dt>
                <dd>{check.licenceType}</dd>
              </>
            ) : null}
            {check.registryName ? (
              <>
                <dt>Nom au registre</dt>
                <dd>{check.registryName}</dd>
              </>
            ) : null}
            {check.subcategories.length ? (
              <>
                <dt>Sous-catégories</dt>
                <dd>{check.subcategories.join(" · ")}</dd>
              </>
            ) : null}
            {check.missingSubcategories.length ? (
              <>
                <dt>Exigées, absentes</dt>
                <dd style={{ color: "var(--g-bad)", fontWeight: 600 }}>{check.missingSubcategories.join(", ")}</dd>
              </>
            ) : null}
            {check.restriction ? (
              <>
                <dt>Restriction</dt>
                <dd>
                  {check.restriction.text}
                  {check.restriction.from || check.restriction.to ? ` (${[check.restriction.from, check.restriction.to].filter(Boolean).join(" → ")})` : ""}
                </dd>
              </>
            ) : null}
            <dt>Source</dt>
            <dd>
              <a href={RBQ_DATASET_URL} target="_blank" rel="noreferrer" className="k-link">
                Liste des licences actives (Données Québec)
              </a>{" "}
              · {check.source.licences.toLocaleString("fr-CA")} licences lues
            </dd>
          </dl>
        )}

        {check?.outcome === "introuvable" ? <p className="rs-rbq__note">Le fichier ne contient que les licences actives : une licence absente peut être suspendue, annulée, expirée, ou le numéro peut être mal saisi. Le registre public donne la raison.</p> : null}

        {blocked ? (
          <ActionForm action={rbqOverrideAction.bind(null, installerId)} submit="Lever le blocage 30 jours" pending="…" submitClass="k-btn k-btn--ink">
            <div className="g-field">
              <label className="g-label" htmlFor="rbq-note">
                Ce que vous avez vérifié au registre public
              </label>
              <input id="rbq-note" name="note" className="g-input" maxLength={300} placeholder="Ex. licence valide sous un autre numéro, renouvelée hier" />
            </div>
            <label className="rs-check">
              <input type="checkbox" name="confirm" value="1" /> J’ai vérifié la licence au registre public de la RBQ.
            </label>
          </ActionForm>
        ) : null}

        {check?.override && BLOCKING_OUTCOMES.has(check.outcome) ? (
          <div className="rs-rbq__override">
            <p>
              Blocage levé par {check.override.by} le {longDate(check.override.at)}, jusqu’au {longDate(check.override.until)} : « {check.override.note} »
            </p>
            <ActionButton action={rbqClearOverrideAction.bind(null, installerId)} className="k-btn k-btn--ghost" pending="…" confirm="Annuler la levée : les offres seront bloquées de nouveau ?">
              Annuler la levée
            </ActionButton>
          </div>
        ) : null}
      </div>
    </Card>
  );
}
