import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Mail, MessageSquare, Pencil, Phone } from "lucide-react";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { brandLabel, brandOptions } from "@/lib/gestion/catalog";
import { availableActions, offerState, STATUS_ACTIONS } from "@/lib/gestion/offers";
import { regionName } from "@/lib/gestion/regions";
import { loadJobPage } from "@/lib/gestion/service";
import { formatDateTime, formatDay } from "@/lib/gestion/summary";
import type { ChannelStatus, Offer } from "@/lib/gestion/types";
import { SYSTEM_TYPE_LABELS } from "@/lib/data/types/enums";
import type { Candidate } from "@/lib/gestion/matching";
import { notesAction, sendOffersAction, statusAction, withdrawOfferAction } from "../../actions";
import { CandidateList, type CandidateDTO } from "@/components/gestion/CandidateList";
import { NotesForm } from "@/components/gestion/NotesForm";
import { Reveal } from "@/components/gestion/Reveal";
import { SubmitButton } from "@/components/gestion/SubmitButton";
import { BrandLogo, StatusPill } from "@/components/gestion/ui";

export const metadata: Metadata = { title: "Job" };

const PRECISION: Record<string, string> = {
  ville: "position de la ville (RTA)",
  rta: "position de la RTA",
  geocodeur: "position géocodée",
  approx: "position approximative",
};

const STATE_LABEL: Record<string, string> = {
  "en-attente": "En attente",
  accepte: "Acceptée",
  refuse: "Refusée",
  expire: "Expirée sans réponse",
  retire: "Retirée",
};

const CHANNEL: Record<ChannelStatus, string> = {
  envoye: "envoyé",
  echec: "échec",
  "non-configure": "non configuré",
  "sans-numero": "sans numéro",
  "en-cours": "en cours",
};

function toDTO(c: Candidate): CandidateDTO {
  return {
    id: c.installer.id,
    company: c.installer.company,
    contactName: c.installer.contactName,
    city: c.installer.base?.city ?? c.installer.basePostalCode,
    score: c.score,
    points: c.points,
    reasons: c.reasons,
    failures: c.failures,
    active: c.installer.active,
  };
}

export default async function JobPage({ params, searchParams }: { params: Promise<{ id: string }>; searchParams: Promise<{ envoye?: string; echecs?: string; cree?: string }> }) {
  await requireAdmin();
  const { id } = await params;
  const sp = await searchParams;
  const now = new Date();
  const data = await loadJobPage(id, now);
  if (!data) notFound();
  const { job, installers, assigned, match } = data;
  const c = job.client;
  const inst = (iid: string) => installers.find((i) => i.id === iid);
  const logo = job.brand ? brandOptions().find((b) => b.id === job.brand)?.logo ?? null : null;
  const actions = availableActions(job);
  const sent = sp.envoye !== undefined ? Number(sp.envoye) : null;
  const offers = [...job.offers].reverse();

  return (
    <>
      <Reveal className="g-head">
        <div style={{ minWidth: 0 }}>
          <p className="g-eyebrow">Job n° {job.number} · créé le {formatDateTime(job.createdAt)}</p>
          <h1 className="g-h1">{`${c.firstName} ${c.lastName}`.trim()}</h1>
          <div className="g-tags" style={{ marginTop: 12, alignItems: "center" }}>
            <StatusPill status={job.status} />
            <span className="g-tag">{c.city || job.geo?.city || c.postalCode}</span>
            {job.brand ? <span className="g-tag g-tag--brand">{logo ? <BrandLogo name={brandLabel(job.brand)} logo={logo} /> : brandLabel(job.brand)}</span> : null}
            {job.systemType ? <span className="g-tag">{SYSTEM_TYPE_LABELS[job.systemType]}</span> : null}
          </div>
        </div>
        <Link href={`/gestion/jobs/${job.id}/modifier`} className="g-btn g-btn--ghost"><Pencil size={16} aria-hidden /> Modifier</Link>
      </Reveal>

      {sp.cree ? <Reveal><p className="g-alert g-alert--ok" role="status">Job créé. Choisissez maintenant à qui l’offrir.</p></Reveal> : null}
      {sent !== null ? (
        <Reveal>
          <p className={`g-alert ${sent > 0 ? "g-alert--ok" : ""}`} role="status">
            {sent > 0 ? `Offre envoyée à ${sent} installateur${sent > 1 ? "s" : ""}.` : "Aucun installateur sélectionné."}
            {sp.echecs ? ` ${sp.echecs} envoi(s) impossible(s) : une offre attendait déjà ou le job n’est plus ouvert.` : ""}
          </p>
        </Reveal>
      ) : null}

      <div className="g-grid g-grid--job" style={{ marginTop: 20 }}>
        <div style={{ display: "grid", gap: 20, minWidth: 0 }}>
          {match ? (
            <Reveal as="section" delay={0.05}>
              <div className="g-section__head">
                <h2 className="g-h2">Installateurs proposés</h2>
                <span className="g-count">{match.ranked.length} admissible{match.ranked.length > 1 ? "s" : ""}</span>
              </div>
              <CandidateList
                action={sendOffersAction.bind(null, job.id)}
                ranked={match.ranked.map(toDTO)}
                offered={match.offered.map(toDTO)}
                nearMisses={match.nearMisses.map(toDTO)}
                declinedNote={job.offers.some((o) => o.response === "refuse")}
              />
            </Reveal>
          ) : null}

          {assigned ? (
            <Reveal as="section" delay={0.05} className="g-card g-card__pad">
              <p className="g-eyebrow">{job.status === "termine" ? "Installé par" : "Attribué à"}</p>
              <h2 className="g-h2">{assigned.company}</h2>
              <dl className="g-kv" style={{ marginTop: 14 }}>
                <dt>Contact</dt>
                <dd>{assigned.contactName}</dd>
                <dt>Cellulaire</dt>
                <dd><a href={`tel:${assigned.phone.replace(/\D/g, "")}`}>{assigned.phone}</a></dd>
                <dt>Courriel</dt>
                <dd><a href={`mailto:${assigned.email}`}>{assigned.email}</a></dd>
                {job.scheduledFor ? (<><dt>Installation</dt><dd>{formatDay(job.scheduledFor)}</dd></>) : null}
              </dl>
            </Reveal>
          ) : null}

          <Reveal as="section" delay={0.1} className="g-card g-card__pad">
            <div className="g-section__head">
              <h2 className="g-h2">Offres</h2>
              <span className="g-count">{job.offers.length}</span>
            </div>
            {offers.length ? (
              <ol className="g-timeline">
                {offers.map((o: Offer) => {
                  const st = offerState(o, now);
                  const who = inst(o.installerId);
                  return (
                    <li key={o.id}>
                      <span className={`g-timeline__dot g-timeline__dot--${st === "en-attente" ? "attente" : st}`} aria-hidden />
                      <div className="g-timeline__title">
                        {who?.company ?? "Installateur supprimé"} · {STATE_LABEL[st]}
                        {st === "retire" && o.withdrawnBecause === "deja-attribue" ? " (déjà attribué)" : ""}
                        {st === "retire" && o.withdrawnBecause === "annule" ? " (job annulé)" : ""}
                      </div>
                      <div className="g-timeline__meta">
                        Envoyée le {formatDateTime(o.sentAt)}
                        {o.distanceKm !== null ? ` · ${o.distanceKm} km` : ""}
                        {" · "}
                        <Mail size={12} aria-hidden style={{ verticalAlign: -1 }} /> {CHANNEL[o.channels.email]} · <MessageSquare size={12} aria-hidden style={{ verticalAlign: -1 }} /> {CHANNEL[o.channels.sms]}
                      </div>
                      <div className="g-timeline__meta">
                        {st === "en-attente" ? `Expire le ${formatDateTime(o.expiresAt)}` : o.respondedAt ? `${STATE_LABEL[st]} le ${formatDateTime(o.respondedAt)}` : null}
                      </div>
                      {o.reason ? <p className="g-hint" style={{ margin: "4px 0 0" }}>« {o.reason} »</p> : null}
                      {st === "en-attente" ? (
                        <form action={withdrawOfferAction.bind(null, job.id, o.id)} style={{ marginTop: 6 }}>
                          <SubmitButton className="g-btn g-btn--quiet" pendingLabel="Retrait…">Retirer l’offre</SubmitButton>
                        </form>
                      ) : null}
                    </li>
                  );
                })}
              </ol>
            ) : (
              <p className="g-empty">Aucune offre envoyée pour l’instant.</p>
            )}
          </Reveal>
        </div>

        <aside className="g-sticky" style={{ display: "grid", gap: 16, minWidth: 0 }}>
          <Reveal delay={0.08} className="g-card g-card__pad">
            <p className="g-eyebrow">Client</p>
            <dl className="g-kv">
              <dt>Téléphone</dt>
              <dd><a href={`tel:${c.phone.replace(/\D/g, "")}`}><Phone size={13} aria-hidden style={{ verticalAlign: -1 }} /> {c.phone}</a></dd>
              {c.email ? (<><dt>Courriel</dt><dd><a href={`mailto:${c.email}`}>{c.email}</a></dd></>) : null}
              <dt>Adresse</dt>
              <dd>{[c.address, c.city, c.postalCode].filter(Boolean).join(", ")}</dd>
              <dt>Région</dt>
              <dd>
                {regionName(job.region)}
                {job.region && job.region === job.regionGuess ? <span className="g-count"> · devinée</span> : null}
              </dd>
              <dt>Position</dt>
              <dd>{job.geo ? `${job.geo.city} · ${PRECISION[job.geo.precision]}` : "introuvable : zone par région seulement"}</dd>
            </dl>
            <hr className="g-divider" />
            <p className="g-eyebrow">Ce que voit l’installateur</p>
            <dl className="g-kv">
              <dt>Marque</dt>
              <dd>{job.brand ? brandLabel(job.brand) : "—"}</dd>
              <dt>Modèle</dt>
              <dd>{job.modelLabel || "—"}</dd>
              <dt>Type</dt>
              <dd>{job.systemType ? SYSTEM_TYPE_LABELS[job.systemType] : "—"}</dd>
              <dt>Capacité</dt>
              <dd>{job.capacity || "—"}</dd>
              <dt>Date souhaitée</dt>
              <dd>{[job.desiredDate ? formatDay(job.desiredDate) : null, job.desiredWindow || null].filter(Boolean).join(" · ") || "—"}</dd>
              <dt>Notes</dt>
              <dd style={{ whiteSpace: "pre-wrap", fontWeight: 450 }}>{job.installerNotes || "—"}</dd>
            </dl>
          </Reveal>

          {actions.length ? (
            <Reveal delay={0.12} className="g-card g-card__pad">
              <p className="g-eyebrow">Statut</p>
              <form action={statusAction.bind(null, job.id)} className="g-form" style={{ gap: 10 }}>
                {actions.includes("planifier") ? (
                  <div className="g-field">
                    <label className="g-label" htmlFor="scheduledFor">Date d’installation <small>(facultatif)</small></label>
                    <input id="scheduledFor" name="scheduledFor" type="date" className="g-input" defaultValue={job.scheduledFor ?? job.desiredDate ?? ""} />
                  </div>
                ) : null}
                <div className="g-actions">
                  {actions.map((a) => (
                    <SubmitButton
                      key={a}
                      name="action"
                      value={a}
                      pendingLabel="…"
                      className={`g-btn ${a === "annuler" ? "g-btn--danger" : a === "terminer" || a === "planifier" ? "g-btn--ink" : "g-btn--ghost"}`}
                    >
                      {STATUS_ACTIONS[a].label}
                    </SubmitButton>
                  ))}
                </div>
                {actions.includes("annuler") && job.status === "offert" ? <p className="g-hint">Annuler retire les offres en attente et prévient les installateurs.</p> : null}
              </form>
            </Reveal>
          ) : null}

          <Reveal delay={0.16} className="g-card g-card__pad">
            <p className="g-eyebrow">Notes internes</p>
            <NotesForm action={notesAction.bind(null, job.id)} defaultValue={job.internalNotes} />
          </Reveal>

          <details className="g-card g-card__pad g-details">
            <summary><ChevronRight size={16} aria-hidden /> Historique ({job.audit.length})</summary>
            <ul className="g-audit" style={{ marginTop: 8 }}>
              {[...job.audit].reverse().map((a, i) => (
                <li key={i}>
                  <strong>{a.action}</strong>{a.detail ? ` · ${a.detail}` : ""}
                  <br />
                  {formatDateTime(a.at)} · {a.by.startsWith("installateur:") ? inst(a.by.slice(13))?.company ?? "installateur" : a.by}
                </li>
              ))}
            </ul>
          </details>
        </aside>
      </div>
    </>
  );
}
