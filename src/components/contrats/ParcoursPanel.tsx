/* ==================================================================
   Conformité C1 — avancement du parcours sur la fiche de la
   soumission : « Envoyée → Le client va de l'avant → Installateur
   trouvé → Approuvée → Signée », avec les délais ; « Trouver un
   installateur » (liste classée par le moteur existant, disponibilités
   d'abord, blocages visibles) ou « Offrir aux installateurs
   admissibles » ; contrat, preuve vérifiée, copies ; changement
   d'installateur ; avenants. Composant serveur.
   ================================================================== */

import Link from "next/link";
import { FileText, ShieldCheck, ShieldX } from "lucide-react";
import { AVAILABILITY_LABELS } from "@/lib/contrats/disponibilites";
import { moneyFr } from "@/lib/contrats/format";
import { findInstallers, parcoursView, readinessProblems } from "@/lib/contrats/service";
import { sinceFr } from "@/lib/contrats/crm-tasks";
import { AVENANT_STATUS_LABELS, CONTRACT_STATUS_LABELS, PROPOSAL_STATUS_LABELS } from "@/lib/contrats/types";
import { formatDateTime } from "@/lib/soumissions/dates";
import { ActionForm } from "@/components/partenaires/admin/AdminTools";
import { changeInstallerAction, createAvenantAction, offerAction, proposeAction } from "@/app/gestion/soumissions/parcours-actions";
import "./contrat.css";

const STAGE_TEXT: Record<string, string> = {
  estimation: "Le client voit sa soumission (estimation non contraignante) ; il peut aller de l’avant.",
  recherche: "Le client va de l’avant : installateur à trouver.",
  confirmation: "En attente de l’installateur (approbation du contrat).",
  finalisation: "Refus ou changement demandé : renvoyez, ou choisissez un autre installateur. Le client voit « Nous finalisons le choix de votre entrepreneur ».",
  contrat: "Approuvée, envoyée au client : en attente de sa signature.",
  signe: "Signée par le client.",
  refuse: "Le client a refusé le contrat.",
};

export async function ParcoursPanel({ quoteId, staff }: { quoteId: string; staff: boolean }) {
  const view = await parcoursView(quoteId);
  if (!view) return null;
  if (view.parcours === "brouillon") {
    const problems = await readinessProblems();
    return (
      <section className="sq-card ct-scope" id="parcours">
        <h2 className="g-h2" style={{ marginBottom: 6 }}>Parcours du contrat</h2>
        <p className="g-hint" style={{ margin: 0 }}>
          « Envoyer » : le client reçoit sa soumission complète avec l’avis de jumelage (non contraignante, sans signature). Installateur choisi dans le créateur : sa demande d’approbation part en même temps (parcours A). Sinon, vous le trouvez quand le client va de l’avant (parcours B). Le client signe seulement le contrat final de l’installateur, après son approbation.
        </p>
        {problems.length ? (
          <ul className="g-hint" style={{ color: "var(--ct-bad)", marginBottom: 0 }}>
            {problems.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        ) : null}
      </section>
    );
  }
  if (view.parcours === "ancien") {
    return (
      <section className="sq-card" id="parcours">
        <h2 className="g-h2" style={{ marginBottom: 6 }}>Ancienne soumission</h2>
        <p className="g-hint" style={{ margin: 0 }}>Envoyée avant le parcours de la trousse : elle reste lisible, mais le client ne peut plus l’accepter en ligne. Créez une nouvelle version et envoyez-la pour passer au contrat de l’installateur.</p>
      </section>
    );
  }

  const d = view.dossier;
  const active = view.active;
  const canFind = staff && view.stage !== "contrat" && view.stage !== "signe" && view.version?.status !== "remplacee";
  const find = canFind ? await findInstallers(quoteId) : null;
  const now = new Date();

  return (
    <section className="sq-card ct-scope" id="parcours" aria-labelledby="parcours-t">
      <div className="sq-card__head">
        <h2 id="parcours-t" className="g-h2">Parcours du contrat</h2>
        {view.stage ? <span className="sq-pill">{STAGE_TEXT[view.stage]?.split(" : ")[0].split(".")[0]}</span> : null}
      </div>
      <p className="g-hint" style={{ marginTop: 0 }}>{view.stage ? STAGE_TEXT[view.stage] : ""}</p>

      <ol className="sq-log" style={{ margin: "8px 0 12px" }}>
        {view.steps.map((s, i) => {
          const prev = view.steps.slice(0, i).reverse().find((x) => x.at)?.at;
          return (
            <li key={s.label} className={s.done ? "is-ok" : ""}>
              <span>
                <time>{s.at ? formatDateTime(s.at) : "—"}</time>
                <strong>{s.label}</strong>
                {s.done && s.at && prev ? ` · ${sinceFr(prev, new Date(s.at))} après l’étape précédente` : !s.done && prev ? ` · en attente depuis ${sinceFr(prev, now)}` : ""}
                {s.detail ? ` · ${s.detail}` : ""}
              </span>
            </li>
          );
        })}
      </ol>

      <dl className="sq-kv">
        <dt>Consentement au transfert</dt>
        <dd>{d?.consent ? (d.consent.source === "client" ? `Case 3.1 cochée par le client (version ${d.consent.v ?? "?"}), le ${formatDateTime(d.consent.at)}` : `Noté par ${d.consent.by} le ${formatDateTime(d.consent.at)} : ${d.consent.note}`) : "Pas encore : le client doit aller de l’avant, ou notez-le en choisissant l’installateur."}</dd>
        {d?.offer ? (
          <>
            <dt>Offre anonymisée</dt>
            <dd>
              {formatDateTime(d.offer.at)} · {d.offer.installerIds.length} installateur(s){d.offer.auto ? " (automatique)" : ""} · <Link href={`/gestion/jobs/${d.offer.jobId}`}>voir le job et les offres</Link>
            </dd>
          </>
        ) : null}
      </dl>

      {d?.proposals.length ? (
        <>
          <h3 className="g-h3" style={{ margin: "12px 0 6px" }}>Installateurs sollicités</h3>
          <ul className="sq-log">
            {[...d.proposals].reverse().map((p) => (
              <li key={p.id} className={p.status === "approuvee" ? "is-ok" : p.status === "refusee" || p.status === "changements" ? "is-bad" : ""}>
                <span>
                  <time>{formatDateTime(p.createdAt)} · version {p.v} · {p.via === "offre" ? "moteur d’offres" : "lien direct"}</time>
                  <strong>{p.company}</strong> · {PROPOSAL_STATUS_LABELS[p.status]}
                  {p.approval ? ` · approuvé par ${p.approval.name}, ${p.approval.title}, le ${formatDateTime(p.approval.at)} (${p.approval.dateChoice.kind === "confirme" ? "date confirmée" : "nouvelle date proposée"})` : ""}
                  {p.sends.length ? ` · courriel ${p.sends.at(-1)!.email}, texto ${p.sends.at(-1)!.sms}` : ""}
                  {p.messages.length ? ` · « ${p.messages.at(-1)!.text.slice(0, 160)} »` : ""}
                </span>
              </li>
            ))}
          </ul>
        </>
      ) : null}

      {active ? (
        <div className="sq-card" style={{ marginTop: 12, background: "var(--ct-cream)" }}>
          <div className="sq-card__head">
            <h3 className="g-h3" style={{ margin: 0 }}>Contrat {active.doc.number}</h3>
            {view.verification ? view.verification.ok ? <span className="sq-pill sq-pill--acceptee"><ShieldCheck size={14} aria-hidden /> Empreintes vérifiées</span> : <span className="sq-pill sq-pill--refusee"><ShieldX size={14} aria-hidden /> Empreinte invalide</span> : null}
          </div>
          <dl className="sq-kv">
            <dt>Entrepreneur-vendeur</dt>
            <dd>{active.doc.installer.legalName} · RBQ {active.doc.installer.rbq} ({active.doc.installer.rbqSubcategories.join(", ")})</dd>
            <dt>État</dt>
            <dd>{CONTRACT_STATUS_LABELS[active.status]}</dd>
            <dt>Approuvé le</dt>
            <dd>{formatDateTime(active.approvedAt)}{active.notices.length ? ` · avis au client : courriel ${active.notices.at(-1)!.email}, texto ${active.notices.at(-1)!.sms}` : ""}</dd>
            <dt>Changements</dt>
            <dd>{active.doc.changes.length ? active.doc.changes.map((x) => `${x.label} : ${x.before ?? "—"} → ${x.after ?? "retiré"}`).join(" ; ") : "Aucun : contenu et prix de la soumission"}</dd>
            {active.signature ? (
              <>
                <dt>Signé par</dt>
                <dd>« {active.signature.typedName} », le {formatDateTime(active.signature.at)} · {moneyFr(active.signature.totals.totalCents)} · IP {active.signature.ip}</dd>
                <dt>Trousse</dt>
                <dd>version {active.signature.trousse.version} · {active.signature.trousse.sha256.slice(0, 16)}…</dd>
                <dt>Empreinte du contrat rendu</dt>
                <dd className="sq-hash">{active.signature.renderedSha256}</dd>
                <dt>Copies</dt>
                <dd>{active.copies ? `client ${active.copies.client} · installateur ${active.copies.installer} · propriétaire ${active.copies.owner}` : "—"}</dd>
              </>
            ) : null}
          </dl>
          {view.verification ? (
            <ul className="g-hint" style={{ margin: "8px 0 0" }}>
              {view.verification.checks.map((c) => (
                <li key={c.label}>{c.ok ? "✓" : "✗"} {c.label}</li>
              ))}
            </ul>
          ) : null}
          <p style={{ margin: "10px 0 0" }}>
            <a className="g-btn g-btn--ghost" href={`/gestion/soumissions/${quoteId}/contrat`} target="_blank" rel="noreferrer">
              <FileText size={16} aria-hidden /> Document conservable
            </a>
          </p>
        </div>
      ) : null}

      {find ? (
        <details className="g-details" style={{ marginTop: 14 }} open={view.stage === "recherche" || view.stage === "finalisation"}>
          <summary>Trouver un installateur</summary>
          <p className="g-hint">
            Période voulue : <b>{find.periodText}</b>. Classement du moteur (zones, marques, charge, niveaux, blocages), disponibles d’abord.
          </p>
          {find.rows.length ? (
            <ul className="sq-log">
              {find.rows.map((r) => (
                <li key={r.installerId} className={r.approvalIssues.length ? "is-bad" : r.availability.kind === "disponible" ? "is-ok" : ""}>
                  <span style={{ display: "grid", gap: 6, width: "100%" }}>
                    <span>
                      <strong>{r.company}</strong>
                      {r.city ? ` · ${r.city}` : ""} · {r.score} pts · <b>{AVAILABILITY_LABELS[r.availability.kind]}</b> ({r.availability.detail})
                    </span>
                    <small className="g-hint" style={{ margin: 0 }}>{r.reasons.join(" · ")}</small>
                    {r.approvalIssues.length ? <small style={{ color: "var(--ct-bad)" }}>Ne pourra pas approuver : {r.approvalIssues.join(" ; ")}</small> : null}
                    <ActionForm action={proposeAction.bind(null, quoteId, r.installerId)} submit="Choisir cet installateur" submitClass="k-btn k-btn--ink" pending="Envoi…" className="g-form">
                      {!find.consent ? <input name="consent" className="g-input" aria-label="Consentement au transfert" placeholder="Consentement au transfert : comment le client l’a donné" maxLength={300} /> : null}
                    </ActionForm>
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="g-hint">Aucun installateur admissible pour ce projet.</p>
          )}
          {find.nearMisses.length ? (
            <p className="g-hint">
              Presque admissibles : {find.nearMisses.map((r) => `${r.company} (${r.failures.join(", ")})`).join(" ; ")}.
            </p>
          ) : null}
          <ActionForm action={offerAction.bind(null, quoteId)} submit="Offrir aux installateurs admissibles" submitClass="k-btn k-btn--primary" pending="Envoi…" className="g-form">
            <p className="g-hint" style={{ margin: 0 }}>Offre anonymisée par le moteur d’offres ; le premier admissible qui accepte obtient la priorité, puis approuve le contrat. Période fixée : seulement aux disponibles et aux disponibilités inconnues.</p>
            {!find.consent ? <input name="consent" className="g-input" aria-label="Consentement au transfert" placeholder="Consentement au transfert : comment le client l’a donné" maxLength={300} /> : null}
          </ActionForm>
        </details>
      ) : null}

      {staff && active ? (
        <details className="g-details" style={{ marginTop: 12 }}>
          <summary>Changer d’installateur</summary>
          <ActionForm action={changeInstallerAction.bind(null, quoteId)} submit="Annuler ce contrat d’un commun accord" submitClass="k-btn k-btn--ink" pending="…" className="g-form">
            <p className="g-hint" style={{ margin: 0 }}>Le contrat est annulé d’un commun accord (aucune commission pour ce job à cet installateur), le client est averti ; le nouvel installateur approuve un nouveau contrat, puis le client le signe.</p>
            <select name="cause" className="g-select" defaultValue="desistement" aria-label="Cause">
              <option value="desistement">L’installateur se désiste (compté dans sa performance)</option>
              <option value="commun-accord">Autre raison, d’un commun accord</option>
            </select>
            <textarea name="reason" className="g-textarea" required minLength={3} maxLength={600} aria-label="Raison, transmise au client" placeholder="Raison (transmise au client)" />
          </ActionForm>
        </details>
      ) : null}

      {staff && active?.status === "signe" ? (
        <details className="g-details" style={{ marginTop: 12 }}>
          <summary>Préparer un avenant</summary>
          <ActionForm action={createAvenantAction.bind(null, quoteId)} submit="Préparer l’avenant" submitClass="k-btn k-btn--primary" pending="…" className="g-form">
            <p className="g-hint" style={{ margin: 0 }}>Aucun extra sans avenant : l’installateur l’approuve, puis le client le signe, AVANT l’exécution.</p>
            <input name="reason" className="g-input" required maxLength={600} aria-label="Condition imprévue ou raison" placeholder="Condition imprévue ou raison" />
            <textarea name="added" className="g-textarea" maxLength={1000} aria-label="Travail ajouté" placeholder="Travail ajouté" />
            <textarea name="removed" className="g-textarea" maxLength={1000} aria-label="Travail retranché" placeholder="Travail retranché" />
            {[1, 2, 3].map((i) => (
              <div key={i} className="g-row g-row--2">
                <input name={`l${i}_label`} className="g-input" maxLength={160} aria-label={`Ligne ${i} : description`} placeholder={`Ligne ${i} : description`} />
                <span style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <input name={`l${i}_amount`} className="g-input" inputMode="decimal" aria-label={`Ligne ${i} : prix avant taxes`} placeholder="Prix avant taxes" />
                  <label className="sq-inline-check">
                    <input type="checkbox" name={`l${i}_minus`} value="1" /> retrait
                  </label>
                </span>
              </div>
            ))}
            <input name="schedule" className="g-input" required maxLength={300} aria-label="Effet sur l’échéancier" placeholder="Effet sur l’échéancier (« aucun » au besoin)" />
          </ActionForm>
        </details>
      ) : null}

      {d?.avenants.length ? (
        <>
          <h3 className="g-h3" style={{ margin: "12px 0 6px" }}>Avenants</h3>
          <ul className="sq-log">
            {d.avenants.map((a) => (
              <li key={a.id} className={a.status === "signe" ? "is-ok" : a.status === "refuse" || a.status === "annule" ? "is-bad" : ""}>
                <span>
                  <time>{formatDateTime(a.createdAt)} · contrat {a.content.contractNumber}</time>
                  <strong>Avenant n° {a.content.number}</strong> · {AVENANT_STATUS_LABELS[a.status]} · {moneyFr(a.content.priceBeforeTaxCents)} avant taxes · nouveau total {moneyFr(a.content.newTotalCents)}
                </span>
              </li>
            ))}
          </ul>
        </>
      ) : null}
    </section>
  );
}
