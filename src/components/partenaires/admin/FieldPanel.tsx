/* ==================================================================
   Panneau « Chantier » de la fiche d'un job (/gestion/jobs/[id]) :
   suivi en direct (en route, arrivé, fermé), lien de chantier, heure
   d'arrivée prévue, photos par étape (vérification), numéros de série,
   liste de contrôle, signature du client, ce qui manque, fin de
   chantier déclarée par le propriétaire, billets de service du job.
   Composant serveur ; la page appelante a déjà vérifié la session.
   ================================================================== */

import Link from "next/link";
import { Check, ChevronRight, Minus, Plus, Wrench } from "lucide-react";
import { declareCompletionAction, fieldLinkAction, plannedArrivalAction, sendServiceLinkAction } from "@/app/gestion/(prive)/partenaires-actions";
import { Chip } from "@/components/gestion/kit/Chip";
import { clock, longDateTime } from "@/lib/gestion/partenaires/format";
import { ticketsForJob } from "@/lib/gestion/sav/service";
import { CAUSE_LABELS, TICKET_STATUS_LABELS } from "@/lib/gestion/sav/types";
import { loadFieldPanel } from "@/lib/gestion/terrain/service";
import { ActionButton, ActionForm, LocalDateTime } from "./AdminTools";
import { PhotoGrid } from "./bits";
import "./partenaires.css";

export async function FieldPanel({ jobId }: { jobId: string }) {
  const [p, tickets] = await Promise.all([loadFieldPanel(jobId), ticketsForJob(jobId)]);
  if (!p) return null;
  const open = p.jobStatus === "attribue" || p.jobStatus === "planifie";
  const closed = p.jobStatus === "termine";
  if (!p.assigned && !closed && !tickets.length) return null;

  return (
    <section className="k-card k-card--pad pa-field" id="chantier" aria-labelledby="chantier-titre">
      <header className="k-card__head" style={{ marginBottom: 0 }}>
        <div>
          <p className="k-eyebrow">Terrain{p.assigned ? ` · ${p.assigned.company}` : ""}</p>
          <h2 className="k-card__title" id="chantier-titre" style={{ fontSize: 20 }}>
            Chantier
          </h2>
          <p className="k-card__sub">{closed ? `Terminé${p.closedAt ? ` le ${longDateTime(p.closedAt)}` : ""}${p.closedBy ? ` · par ${p.closedBy}` : ""}` : `${p.progress.done} sur ${p.progress.total} éléments requis`}</p>
        </div>
        {p.review ? <Chip tone="blue">Photos à vérifier</Chip> : null}
      </header>

      <div className="pa-field__progress" aria-hidden>
        <div className="pa-meter">
          <i style={{ ["--p" as string]: p.progress.done / p.progress.total }} />
        </div>
      </div>

      <div className="pa-timeline">
        <div className={p.enRoute ? "is-done" : ""}>
          <b>En route</b>
          {p.enRoute ? `${clock(p.enRoute.at)}${p.enRoute.etaAt ? ` · prévu ${clock(p.enRoute.etaAt)}` : ""}${p.enRoute.sms ? ` · texto ${p.enRoute.sms}` : ""}` : "—"}
        </div>
        <div className={p.arrivedAt ? "is-done" : ""}>
          <b>Arrivé</b>
          {p.arrivedAt ? `${clock(p.arrivedAt)}${p.plannedAt ? ` · prévu ${clock(p.plannedAt)}` : ""}` : p.plannedAt ? `prévu ${clock(p.plannedAt)}` : "—"}
        </div>
        <div className={closed ? "is-done" : ""}>
          <b>Fermé</b>
          {p.closedAt ? clock(p.closedAt) : "—"}
        </div>
      </div>

      {p.assigned && !closed ? (
        <div className="g-actions" style={{ alignItems: "flex-start" }}>
          <ActionButton action={fieldLinkAction.bind(null, jobId)} className="k-btn k-btn--ink" pending="Envoi…">
            Envoyer le lien de chantier
          </ActionButton>
          <span className="g-hint" style={{ alignSelf: "center" }}>
            Le lien de l’offre acceptée ouvre aussi la page{p.links ? ` · ${p.links} lien${p.links > 1 ? "s" : ""} envoyé${p.links > 1 ? "s" : ""}` : ""}.
          </span>
        </div>
      ) : null}

      {open ? (
        <details className="g-details">
          <summary>
            <ChevronRight size={16} aria-hidden /> Heure d’arrivée prévue {p.plannedAt ? `(${longDateTime(p.plannedAt)})` : "(pour la ponctualité)"}
          </summary>
          <ActionForm action={plannedArrivalAction.bind(null, jobId)} submit="Enregistrer" className="g-form" pending="…">
            <LocalDateTime name="plannedAt" isoName="plannedIso" defaultIso={p.plannedAt} label="Date et heure" />
          </ActionForm>
        </details>
      ) : null}

      <div>
        <p className="k-eyebrow" style={{ marginBottom: 8 }}>
          Photos par étape
        </p>
        <div className="g-tags" style={{ marginBottom: 10 }}>
          {p.steps.map((s) => (
            <Chip key={s.id} tone={s.count ? "ok" : "muted"} dot>
              {s.label} {s.count ? `· ${s.count}` : ""}
            </Chip>
          ))}
        </div>
        <PhotoGrid photos={p.photos} review={p.review} />
      </div>

      <div className="cr-grid2">
        <div>
          <p className="k-eyebrow" style={{ marginBottom: 6 }}>
            Numéros de série{p.serials.readByVision ? " · lus sur la plaque" : ""}
          </p>
          <div className="pa-serials">
            <p className="g-hint" style={{ margin: 0 }}>Extérieur</p>
            {p.serials.outdoor.length ? p.serials.outdoor.map((s) => <code key={s}>{s}</code>) : <span className="g-hint">—</span>}
            <p className="g-hint" style={{ margin: "6px 0 0" }}>Intérieur</p>
            {p.serials.indoor.length ? p.serials.indoor.map((s) => <code key={s}>{s}</code>) : <span className="g-hint">—</span>}
          </div>
        </div>
        <div>
          <p className="k-eyebrow" style={{ marginBottom: 6 }}>
            Liste de contrôle
          </p>
          <ul className="pa-checks">
            {p.checklist.map((c) => (
              <li key={c.id} className={c.value ? "is-yes" : "is-no"}>
                {c.value === "fait" ? <Check size={14} aria-hidden /> : c.value === "sans-objet" ? <Minus size={14} aria-hidden /> : <Minus size={14} aria-hidden />}
                {c.label}
                {c.value === "sans-objet" ? " (sans objet)" : ""}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {p.signature ? (
        <div className="pa-sign">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={p.signature.url} alt={`Signature de ${p.signature.name}`} />
          <div>
            <b>{p.signature.name}</b>
            <p className="g-hint" style={{ margin: 0 }}>
              Signé le {longDateTime(p.signature.at)}
            </p>
          </div>
        </div>
      ) : null}

      {p.ownerDeclaration ? (
        <p className="g-alert g-alert--info">
          Fin déclarée par le propriétaire le {longDateTime(p.ownerDeclaration.at)}
          {p.ownerDeclaration.missing.length ? ` malgré : ${p.ownerDeclaration.missing.join(", ")}` : ""}
          {p.ownerDeclaration.note ? ` · « ${p.ownerDeclaration.note} »` : ""}
        </p>
      ) : null}

      {open ? (
        <details className="g-details">
          <summary>
            <ChevronRight size={16} aria-hidden /> Déclarer la fin du chantier (propriétaire)
          </summary>
          {p.missing.length ? (
            <ul className="pa-missing" style={{ margin: "8px 0" }}>
              {p.missing.map((m) => (
                <li key={m.code}>{m.label}</li>
              ))}
            </ul>
          ) : (
            <p className="g-hint">Tout est au dossier.</p>
          )}
          <ActionForm action={declareCompletionAction.bind(null, jobId)} submit="Déclarer la fin du chantier" submitClass="k-btn k-btn--primary" pending="…">
            <div className="g-field">
              <label className="g-label" htmlFor={`note-${jobId}`}>
                Note <small>(facultative)</small>
              </label>
              <textarea id={`note-${jobId}`} name="note" className="g-textarea" maxLength={1000} style={{ minHeight: 70 }} />
            </div>
            {p.missing.length ? (
              <label className="g-check">
                <input type="checkbox" name="force" value="1" /> Déclarer la fin malgré les éléments manquants
              </label>
            ) : null}
          </ActionForm>
        </details>
      ) : null}

      <div>
        <div className="k-card__head" style={{ marginBottom: 8 }}>
          <p className="k-eyebrow" style={{ margin: 0 }}>
            <Wrench size={13} aria-hidden style={{ verticalAlign: -2 }} /> Service après-vente
          </p>
          <Link href={`/gestion/sav/nouveau?job=${jobId}`} className="k-link">
            <Plus size={14} aria-hidden /> Billet de service
          </Link>
        </div>
        {tickets.length ? (
          <ul className="cr-linked">
            {tickets.map((t) => (
              <li key={t.id}>
                <Link href={`/gestion/sav/${t.id}`} className="cr-linked__row">
                  <span>
                    Billet n° {t.number} · {t.cause ? CAUSE_LABELS[t.cause] : "cause à classer"}
                  </span>
                  <span className="cr-linked__end">{TICKET_STATUS_LABELS[t.status]}</span>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="g-hint" style={{ margin: 0 }}>
            Aucun appel de service.
          </p>
        )}
        {closed ? (
          <div style={{ marginTop: 10 }}>
            <ActionButton action={sendServiceLinkAction.bind(null, jobId)} className="k-btn" pending="Envoi…">
              Envoyer au client le lien « Un problème ? »
            </ActionButton>
          </div>
        ) : null}
      </div>

      {p.events.length ? (
        <details className="g-details">
          <summary>
            <ChevronRight size={16} aria-hidden /> Journal du chantier ({p.events.length})
          </summary>
          <ul className="g-audit" style={{ marginTop: 8 }}>
            {p.events.map((e, i) => (
              <li key={i}>
                <strong>{e.action}</strong>
                {e.detail ? ` · ${e.detail}` : ""}
                <br />
                {longDateTime(e.at)}
              </li>
            ))}
          </ul>
        </details>
      ) : null}
    </section>
  );
}
