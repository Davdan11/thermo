/* Fiche client : l'après-vente de chaque job (note du sondage, aide LogisVert, facture de commission, référence,
   demandes du client). Composant serveur ; rien n'est affiché si aucun job n'est terminé. */
import "./argent.css";
import Link from "next/link";
import { afterSaleForJobs } from "@/lib/gestion/automatisations/views";
import { INVOICE_STATE_LABELS } from "@/lib/gestion/commissions/types";
import { formatDay } from "@/lib/soumissions/dates";
import { money } from "@/lib/soumissions/money";
import { localYmd } from "@/lib/gestion/crm/time";
import { Card } from "../kit/Card";
import { Chip } from "../kit/Chip";
import { LogisvertStatusSelect } from "./AutomationControls";
import { STATE_TONE } from "./labels";

const REQUEST_LABELS = { probleme: "Problème signalé", changer: "Changement de date", entretien: "Entretien demandé" } as const;

export function Stars({ rating }: { rating: number }) {
  return (
    <span className={`ar-stars${rating <= 3 ? " is-bad" : ""}`} role="img" aria-label={`${rating} sur 5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <i key={n} className={n <= rating ? "is-on" : ""} />
      ))}
    </span>
  );
}

export async function ApresVentePanel({ jobIds }: { jobIds: string[] }) {
  const items = await afterSaleForJobs(jobIds);
  if (!items.length) return null;
  return (
    <Card title="Après-vente" sub="Satisfaction, aide LogisVert (versée au client), commission de l’installateur.">
      <ul className="ar-after">
        {items.map((i) => (
          <li key={i.jobId}>
            <div className="ar-after__head">
              <Link href={`/gestion/jobs/${i.jobId}`} className="k-link">
                <strong>Job n° {i.jobNumber}</strong>
              </Link>
              <small>{i.completedOn ? `Terminé le ${formatDay(i.completedOn)}` : "Pas encore terminé"}</small>
            </div>
            <dl>
              <div>
                <dt>Satisfaction</dt>
                <dd>
                  {i.survey ? (
                    <>
                      <Stars rating={i.survey.rating} /> <strong>{i.survey.rating}/5</strong>
                      {i.survey.comment ? <span className="ar-after__quote">« {i.survey.comment} »</span> : null}
                    </>
                  ) : (
                    <span className="g-hint">Pas encore de réponse</span>
                  )}
                </dd>
              </div>
              {i.logisvert ? (
                <div>
                  <dt>LogisVert</dt>
                  <dd style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center" }}>
                    <LogisvertStatusSelect jobId={i.jobId} status={i.logisvert.status} />
                    <small className="g-hint">
                      {i.logisvert.expectedCents ? `${money(i.logisvert.expectedCents)} prévus · ` : ""}
                      {i.logisvert.by}, {formatDay(localYmd(i.logisvert.updatedAt))}
                    </small>
                  </dd>
                </div>
              ) : null}
              <div>
                <dt>Commission</dt>
                <dd>
                  {i.invoice ? (
                    <Link href={`/gestion/paiements/${i.invoice.id}`} className="k-link">
                      {i.invoice.number} · {money(i.invoice.totalCents)}{" "}
                      <Chip tone={STATE_TONE[i.invoice.state]}>{INVOICE_STATE_LABELS[i.invoice.state]}</Chip>
                    </Link>
                  ) : (
                    <span className="g-hint">{i.completedOn ? "À émettre (voir Paiements)" : "—"}</span>
                  )}
                </dd>
              </div>
              {i.referral ? (
                <div>
                  <dt>Référence</dt>
                  <dd>
                    Lien « {i.referral.code} » · {i.referral.demands} demande{i.referral.demands > 1 ? "s" : ""}
                  </dd>
                </div>
              ) : null}
              {i.requests.length ? (
                <div>
                  <dt>Demandes</dt>
                  <dd>
                    {i.requests.map((r) => (
                      <span key={r.at} className="ar-after__quote" style={{ fontStyle: "normal" }}>
                        {REQUEST_LABELS[r.kind]} · {formatDay(localYmd(r.at))}
                        {r.message ? ` : « ${r.message} »` : ""}
                      </span>
                    ))}
                  </dd>
                </div>
              ) : null}
            </dl>
          </li>
        ))}
      </ul>
    </Card>
  );
}
