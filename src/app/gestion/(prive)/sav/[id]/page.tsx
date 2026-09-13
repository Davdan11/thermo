/* ==================================================================
   /gestion/sav/[id] — un billet de service : signalement et photos,
   cause (main-d'œuvre, appareil, autre), assignation à l'installateur
   d'origine, visite, résolution avec photos, satisfaction du client,
   citation de l'entente, fermeture.
   ================================================================== */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { listClauses } from "@/lib/gestion/partenaires/agreement";
import { longDate, longDateTime, relative } from "@/lib/gestion/partenaires/format";
import { partnerDocuments, readPartnerSettings } from "@/lib/gestion/partenaires/service";
import { isLate, responseHours } from "@/lib/gestion/sav/rules";
import { loadTicket } from "@/lib/gestion/sav/service";
// Conformité C3 : délais de service du partenaire (annexe E).
import { SLA_STATE_LABELS, ticketSla, type SlaState } from "@/lib/gestion/sav/sla";
import { CAUSE_LABELS, PRIORITY_LABELS, TICKET_CAUSES, TICKET_ID_RE, TICKET_STATUS_LABELS } from "@/lib/gestion/sav/types";
import { assignTicketAction, citationPreviewAction, citationSendAction, classifyTicketAction, closeTicketAction, resolveTicketAction, sendServiceLinkAction, ticketAckAction, ticketPriorityAction, ticketSatisfactionAction, visitTicketAction } from "../../partenaires-actions";
import { Card } from "@/components/gestion/kit/Card";
import { Chip } from "@/components/gestion/kit/Chip";
import { Reveal } from "@/components/gestion/Reveal";
import { ActionButton, ActionForm, LocalDateTime } from "@/components/partenaires/admin/AdminTools";
import { HeroArcs } from "@/components/partenaires/admin/bits";
import { CitationForm } from "@/components/partenaires/admin/CitationForm";
import "@/components/partenaires/admin/partenaires.css";
import "@/components/partenaires/admin/conformite.css";

export const metadata: Metadata = { title: "Billet de service" };

const SLA_TONE: Record<SlaState, "ok" | "blue" | "bad" | "warn"> = { respecte: "ok", "en-attente": "blue", "en-retard": "bad", "hors-delai": "warn" };

export default async function TicketPage({ params, searchParams }: { params: Promise<{ id: string }>; searchParams: Promise<{ cree?: string; ok?: string; erreur?: string }> }) {
  await requireAdmin();
  const { id } = await params;
  const sp = await searchParams;
  if (!TICKET_ID_RE.test(id)) notFound();
  const data = await loadTicket(id);
  if (!data) notFound();
  const { ticket: t, job, installer } = data;
  const now = new Date();
  const late = isLate(t, now);
  const photo = (kind: "signalement" | "resolution") => t.photos.filter((p) => p.kind === kind);
  const docs = installer ? await partnerDocuments(installer.id) : null;
  const lastSig = docs?.signatures[0] ?? null;
  // Conformité C3 : clauses telles que signées (numéros de l'avocat, valeurs de l'installateur).
  const clauses = lastSig && docs ? listClauses(docs.versions[lastSig.versionId] ?? { articles: [] }, { partner: lastSig.partnerFill ?? null, signer: { name: lastSig.signerName, title: lastSig.signerTitle, signedAt: lastSig.signedAt } }).map((c) => ({ ref: c.ref, title: c.label === `article ${c.ref}` ? c.articleTitle : `${c.label} · ${c.articleTitle}`, text: c.text })) : [];
  const hours = responseHours(t);
  const settings = await readPartnerSettings();
  const sla = ticketSla(t, settings.sla, now);
  const priority = t.priority ?? "normal";

  const photoGrid = (list: typeof t.photos) =>
    list.length ? (
      <div className="pa-photos" style={{ marginTop: 10 }}>
        {list.map((p) => (
          <figure key={p.id} className="pa-photo">
            <a href={`/gestion/api/sav/photo/${p.id}`} target="_blank" rel="noreferrer">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`/gestion/api/sav/photo/${p.id}`} alt="Photo du billet" loading="lazy" />
            </a>
            <figcaption>{longDateTime(p.at)}</figcaption>
          </figure>
        ))}
      </div>
    ) : null;

  const upload = (kind: "signalement" | "resolution") => (
    <form action="/gestion/api/sav/photos" method="post" encType="multipart/form-data" className="pa-upload">
      <input type="hidden" name="ticketId" value={t.id} />
      <input type="hidden" name="kind" value={kind} />
      <input type="file" name="photos" accept="image/*" multiple aria-label="Photos" />
      <button type="submit" className="k-btn">
        Ajouter des photos
      </button>
    </form>
  );

  return (
    <>
      <Reveal>
        <header className="pa-hero">
          <HeroArcs />
          <Link href="/gestion/sav" className="pa-hero__back">
            <ChevronLeft size={16} aria-hidden /> Service après-vente
          </Link>
          <h1>
            Billet n° {t.number}
            <em>
              {job ? `${`${job.client.firstName} ${job.client.lastName}`.trim()} · job n° ${job.number}` : "Sans job"} · {t.source === "client" ? "signalé par le client" : "créé par vous"} le {longDate(t.createdAt)}
            </em>
          </h1>
          <div className="pa-hero__chips">
            <Chip tone={t.status === "ferme" ? "muted" : "orange"} dot>
              {TICKET_STATUS_LABELS[t.status]}
            </Chip>
            {t.cause ? <Chip tone={t.cause === "main-oeuvre" ? "bad" : "blue"}>{CAUSE_LABELS[t.cause]}</Chip> : <Chip tone="warn">Cause à classer</Chip>}
            {priority === "urgent" ? <Chip tone="bad" dot>Urgence</Chip> : null}
            {late ? <Chip tone="bad">Prise en charge en retard</Chip> : null}
            {job ? (
              <Link href={`/gestion/jobs/${job.id}#chantier`} className="k-btn k-btn--ghost" style={{ color: "var(--g-cream)", minHeight: 30 }}>
                Voir le job
              </Link>
            ) : null}
          </div>
        </header>
      </Reveal>
      {sp.cree ? <p className="g-alert g-alert--ok" style={{ marginBottom: 16 }}>Billet créé. Classez la cause pour l’assigner.</p> : null}
      {sp.ok ? <p className="g-alert g-alert--ok" style={{ marginBottom: 16 }}>{sp.ok}</p> : null}
      {sp.erreur ? <p className="g-alert" style={{ marginBottom: 16 }}>{sp.erreur}</p> : null}

      <div className="pa-grid">
        <div className="pa-stack">
          <Card title="Signalement" sub={t.contactPreference ? `Joindre : ${t.contactPreference}` : undefined}>
            <p style={{ margin: 0, whiteSpace: "pre-wrap" }}>{t.description}</p>
            {photoGrid(photo("signalement"))}
            {t.status !== "ferme" ? upload("signalement") : null}
          </Card>

          <Card title="Résolution" sub={hours !== null ? `Première action ${hours} h après le signalement` : `Prise en charge attendue avant le ${longDateTime(t.dueAt)}`}>
            {t.resolution ? (
              <>
                <p className="g-alert g-alert--ok" style={{ marginTop: 0 }}>
                  {t.resolution.note}
                  <br />
                  <small>
                    {longDateTime(t.resolution.at)} · {t.resolution.by.startsWith("installateur:") ? installer?.company ?? "installateur" : t.resolution.by}
                  </small>
                </p>
                {photoGrid(photo("resolution"))}
              </>
            ) : t.status !== "ferme" ? (
              <ActionForm action={resolveTicketAction.bind(null, t.id)} submit="Marquer résolu" pending="…">
                <div className="g-field">
                  <label className="g-label" htmlFor="res-note">
                    Ce qui a été fait
                  </label>
                  <textarea id="res-note" name="note" className="g-textarea" maxLength={2000} />
                </div>
                <p className="g-hint" style={{ margin: 0 }}>Le client reçoit ensuite un lien pour confirmer que c’est réglé.</p>
              </ActionForm>
            ) : null}
            {t.status !== "ferme" ? upload("resolution") : null}
          </Card>

          <Card title="Suivi">
            <ul className="pa-history">
              {[...t.events].reverse().map((e, i) => (
                <li key={i}>
                  <b>{e.action}</b>
                  {e.detail ? ` · ${e.detail}` : ""}
                  <small>
                    {longDateTime(e.at)} · {e.by.startsWith("installateur:") ? installer?.company ?? "installateur" : e.by}
                  </small>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <aside className="pa-stack">
          <Card title="Cause" sub="Seule la main-d’œuvre compte contre l’installateur.">
            <ActionForm action={classifyTicketAction.bind(null, t.id)} submit="Enregistrer la cause" pending="…">
              <div className="g-field" role="radiogroup" aria-label="Cause">
                {TICKET_CAUSES.map((c) => (
                  <label key={c} className="g-check">
                    <input type="radio" name="cause" value={c} defaultChecked={t.cause === c} /> {CAUSE_LABELS[c]}
                  </label>
                ))}
              </div>
              <div className="g-field">
                <label className="g-label" htmlFor="cause-note">
                  Note <small>(facultative)</small>
                </label>
                <input id="cause-note" name="note" className="g-input" defaultValue={t.causeNote} maxLength={1000} />
              </div>
            </ActionForm>
          </Card>

          <Card title="Installateur d’origine" sub={installer ? installer.company : "Aucun (billet sans job attribué)"}>
            {installer && t.status !== "ferme" ? (
              <div className="cr-stack">
                {t.status === "nouveau" ? (
                  <ActionButton action={assignTicketAction.bind(null, t.id)} className="k-btn k-btn--ink" pending="Envoi…">
                    Assigner et prévenir l’installateur
                  </ActionButton>
                ) : (
                  <p className="g-hint" style={{ margin: 0 }}>
                    Assigné{t.assignedAt ? ` ${relative(t.assignedAt, now)}` : ""}
                    {t.assignNotice ? ` · courriel ${t.assignNotice.email} · texto ${t.assignNotice.sms}` : ""}
                    {t.visitAt ? ` · visite prévue le ${longDateTime(t.visitAt)}` : ""}
                  </p>
                )}
                {t.status !== "resolu" ? (
                  <details className="g-details">
                    <summary>
                      <ChevronRight size={16} aria-hidden /> Noter la date de visite
                    </summary>
                    <ActionForm action={visitTicketAction.bind(null, t.id)} submit="Enregistrer" pending="…">
                      <LocalDateTime name="visit" isoName="visitIso" defaultIso={t.visitAt} label="Date et heure de la visite" />
                    </ActionForm>
                  </details>
                ) : null}
                <Link href={`/gestion/partenaires/${installer.id}`} className="k-link">
                  Fiche du partenaire
                </Link>
              </div>
            ) : null}
          </Card>

          {/* Conformité C3 : délais de service du partenaire (accusé de réception, visite), fixés à l'assignation. */}
          <Card title="Délais de service" sub={sla ? `${PRIORITY_LABELS[sla.priority]} · depuis l’assignation, ${relative(sla.from, now)}` : "Ils commencent à l’assignation au partenaire."}>
            {sla ? (
              <div className="pa-sla">
                <div className="pa-sla__item">
                  <span>Accusé de réception</span>
                  <b>avant le {longDateTime(sla.ack.dueAt)}</b>
                  <Chip tone={SLA_TONE[sla.ack.state]} dot>
                    {SLA_STATE_LABELS[sla.ack.state]}
                    {sla.ack.at ? ` · ${longDateTime(sla.ack.at)}` : ""}
                  </Chip>
                </div>
                <div className="pa-sla__item">
                  <span>{sla.priority === "urgent" ? "Intervention sur place" : "Visite offerte"}</span>
                  <b>avant le {longDateTime(sla.visit.dueAt)}</b>
                  <Chip tone={SLA_TONE[sla.visit.state]} dot>
                    {SLA_STATE_LABELS[sla.visit.state]}
                    {sla.visit.at ? ` · ${longDateTime(sla.visit.at)}` : ""}
                  </Chip>
                </div>
              </div>
            ) : (
              <p className="g-hint" style={{ margin: 0 }}>
                Cas normal : accusé de réception en {settings.sla.ackBusinessDays} jour{settings.sla.ackBusinessDays > 1 ? "s" : ""} ouvrable{settings.sla.ackBusinessDays > 1 ? "s" : ""}, visite dans les {settings.sla.visitBusinessDays} jours ouvrables. Urgence : {settings.sla.urgentAckBusinessHours} heures ouvrables, sur place dans les {settings.sla.urgentVisitHours} heures.
              </p>
            )}
            {t.status !== "ferme" ? (
              <div className="g-actions" style={{ marginTop: 12 }}>
                {sla && !sla.ack.at ? (
                  <ActionButton action={ticketAckAction.bind(null, t.id)} className="k-btn" pending="…">
                    Noter l’accusé de réception
                  </ActionButton>
                ) : null}
                <ActionButton action={ticketPriorityAction.bind(null, t.id, priority === "urgent" ? "normal" : "urgent")} className="k-btn k-btn--ghost" pending="…">
                  {priority === "urgent" ? "Repasser en cas normal" : "Passer en urgence"}
                </ActionButton>
              </div>
            ) : null}
          </Card>

          {t.status === "resolu" || t.satisfaction ? (
            <Card title="Satisfaction du client">
              {t.satisfaction ? (
                <p className={`g-alert ${t.satisfaction.satisfied ? "g-alert--ok" : ""}`} style={{ marginTop: 0 }}>
                  {t.satisfaction.satisfied ? "Satisfait" : "Pas satisfait"}
                  {t.satisfaction.note ? ` : « ${t.satisfaction.note} »` : ""} · {longDateTime(t.satisfaction.at)} ({t.satisfaction.via === "client" ? "réponse du client" : "noté par vous"})
                </p>
              ) : null}
              {t.status === "resolu" ? (
                <div className="g-actions">
                  <ActionButton action={ticketSatisfactionAction.bind(null, t.id, true)} className="k-btn k-btn--ok">
                    Client satisfait
                  </ActionButton>
                  <ActionButton action={ticketSatisfactionAction.bind(null, t.id, false)} className="k-btn">
                    Pas satisfait : rouvrir
                  </ActionButton>
                </div>
              ) : null}
            </Card>
          ) : null}

          {installer ? (
            <Card title="Citer l’entente" sub="Envoyé au partenaire avec la référence de ce billet.">
              <CitationForm installerId={installer.id} clauses={clauses} signedOn={lastSig ? longDate(lastSig.signedAt) : ""} context={{ ticketId: t.id }} preview={citationPreviewAction} send={citationSendAction} />
            </Card>
          ) : null}

          {job ? (
            <Card title="Lien du client">
              <ActionButton action={sendServiceLinkAction.bind(null, job.id)} className="k-btn" pending="Envoi…">
                Envoyer le lien « Un problème ? »
              </ActionButton>
            </Card>
          ) : null}

          {t.status !== "ferme" ? (
            <Card title="Fermer le billet" sub="Si le dossier est réglé autrement (client joint par téléphone, doublon…).">
              <ActionForm action={closeTicketAction.bind(null, t.id)} submit="Fermer" submitClass="g-btn g-btn--danger" pending="…">
                <input name="note" className="g-input" maxLength={500} placeholder="Raison (facultative)" aria-label="Raison" />
              </ActionForm>
            </Card>
          ) : null}
        </aside>
      </div>
    </>
  );
}
