/* /gestion/inventaire/[id] — Chantier R : un article : quantités, réservations (libérables), mouvements, réglages. */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { inventoryView } from "@/lib/gestion/inventaire/service";
import { ITEM_ID_RE, ITEM_KIND_LABELS, MOVEMENT_LABELS } from "@/lib/gestion/inventaire/types";
import { longDate, longDateTime } from "@/lib/gestion/partenaires/format";
import { money } from "@/lib/soumissions/money";
import { adjustAction, archiveAction, itemUpdateAction, releaseAction } from "../../reseau-actions";
import { Card } from "@/components/gestion/kit/Card";
import { Chip } from "@/components/gestion/kit/Chip";
import { Reveal } from "@/components/gestion/Reveal";
import { ItemForm } from "@/components/gestion/reseau/ItemForm";
import { ActionButton, ActionForm } from "@/components/partenaires/admin/AdminTools";
import "@/components/gestion/reseau/reseau.css";

export const metadata: Metadata = { title: "Article" };

const cents = (c: number | null) => (c === null ? "" : (c / 100).toFixed(2).replace(".", ","));

export default async function ItemPage({ params }: { params: Promise<{ id: string }> }) {
  await requireAdmin();
  const { id } = await params;
  if (!ITEM_ID_RE.test(id)) notFound();
  const { data, stock } = await inventoryView();
  const s = stock.find((x) => x.item.id === id);
  if (!s) notFound();
  const it = s.item;
  const released = data.releases.filter((r) => r.itemId === id);
  const moves = data.movements.filter((m) => m.itemId === id).slice(-40).reverse();

  return (
    <>
      <Reveal className="k-pagehead">
        <div>
          <Link href="/gestion/inventaire" className="k-link">
            <ChevronLeft size={14} aria-hidden /> Inventaire
          </Link>
          <p className="k-eyebrow">{ITEM_KIND_LABELS[it.kind]}</p>
          <h1 className="k-h1">{it.label}</h1>
          <p className="k-lead">
            {it.modelLabel ? `Modèle ${it.modelLabel}` : "Sans modèle du catalogue (aucune réservation automatique)"}
            {it.partNumber ? ` · n° ${it.partNumber}` : ""}
            {it.unitCostCents !== null ? ` · coût ${money(it.unitCostCents)}` : ""}
            {it.archived ? " · archivé" : ""}
          </p>
        </div>
        <div className="g-actions">
          <ActionButton action={archiveAction.bind(null, id, !it.archived)} className="k-btn k-btn--ghost" pending="…">
            {it.archived ? "Remettre en stock" : "Archiver"}
          </ActionButton>
        </div>
      </Reveal>

      <div className="rs-nums" style={{ marginBottom: 20 }}>
        <div className="rs-num">
          <span>En main</span>
          <b>{it.quantity}</b>
        </div>
        <div className="rs-num">
          <span>Réservé</span>
          <b>{s.reserved}</b>
        </div>
        <div className={`rs-num${s.available < 0 || s.low ? " is-bad" : ""}`}>
          <span>Disponible{it.lowThreshold !== null ? ` · seuil ${it.lowThreshold}` : ""}</span>
          <b>{s.available}</b>
        </div>
      </div>

      <div className="rs-cands">
        <Card title="Réservations" sub={`${it.perJob} unité${it.perJob > 1 ? "s" : ""} par installation`}>
          {s.dossiers.length ? (
            <ul className="rs-resv">
              {s.dossiers.map((d) => (
                <li key={d.ref}>
                  <span>
                    <b>{d.jobId ? <Link href={`/gestion/jobs/${d.jobId}`}>{d.label}</Link> : d.quoteId ? <Link href={`/gestion/soumissions/${d.quoteId}`}>{d.label}</Link> : d.label}</b>{" "}
                    <small className="g-hint">
                      {d.completedAt ? `terminé le ${longDate(d.completedAt)} · sortie à enregistrer` : d.kind === "soumission" ? `acceptée le ${longDate(d.at)}` : `créé le ${longDate(d.at)}`}
                    </small>
                  </span>
                  <ActionButton action={releaseAction.bind(null, id, d.ref, true)} className="k-btn k-btn--ghost" pending="…">
                    Libérer
                  </ActionButton>
                </li>
              ))}
            </ul>
          ) : (
            <p className="g-hint">Aucune réservation en cours.</p>
          )}
          {released.length ? (
            <>
              <p className="g-label" style={{ marginTop: 14 }}>
                Libérées à la main
              </p>
              <ul className="rs-resv">
                {released.map((r) => (
                  <li key={r.ref}>
                    <span>
                      {r.ref.startsWith("job:") ? "Job" : "Soumission"} <small className="g-hint">le {longDate(r.at)}</small>
                    </span>
                    <ActionButton action={releaseAction.bind(null, id, r.ref, false)} className="k-btn k-btn--ghost" pending="…">
                      Rétablir
                    </ActionButton>
                  </li>
                ))}
              </ul>
            </>
          ) : null}
        </Card>

        <Card title="Entrée ou ajustement" sub="Quantité positive : entrée ; négative : retrait (inventaire compté, bris…).">
          <ActionForm action={adjustAction.bind(null, id)} submit="Enregistrer le mouvement">
            <div className="g-row g-row--2">
              <div className="g-field">
                <label className="g-label" htmlFor="mv-delta">
                  Quantité
                </label>
                <input id="mv-delta" name="delta" type="number" min={-10000} max={10000} className="g-input" required />
              </div>
              <div className="g-field">
                <label className="g-label" htmlFor="mv-reason">
                  Motif
                </label>
                <select id="mv-reason" name="reason" className="g-input" defaultValue="entree">
                  <option value="entree">Entrée</option>
                  <option value="ajustement">Ajustement</option>
                </select>
              </div>
            </div>
            <div className="g-field">
              <label className="g-label" htmlFor="mv-note">
                Note
              </label>
              <input id="mv-note" name="note" className="g-input" maxLength={200} />
            </div>
          </ActionForm>
        </Card>

        <Card title="Mouvements" sub={moves.length ? `${moves.length} derniers` : undefined}>
          {moves.length ? (
            <ul className="rs-moves">
              {moves.map((m) => (
                <li key={m.id}>
                  <b className={m.delta > 0 ? "is-in" : "is-out"}>{m.delta > 0 ? `+${m.delta}` : m.delta}</b>
                  <span>
                    {MOVEMENT_LABELS[m.reason]}
                    {m.note ? ` · ${m.note}` : ""}
                    <br />
                    <small>
                      {longDateTime(m.at)} · {m.by}
                    </small>
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="g-hint">Aucun mouvement.</p>
          )}
        </Card>

        <Card title="Réglages de l’article" action={s.low ? <Chip tone="orange">Sous le seuil</Chip> : null}>
          <ItemForm
            action={itemUpdateAction.bind(null, id)}
            submit="Enregistrer"
            initial={{ kind: it.kind, label: it.label, model: it.modelSlug ? { slug: it.modelSlug, label: it.modelLabel ?? it.modelSlug } : null, partNumber: it.partNumber, perJob: it.perJob, location: it.location, unitCost: cents(it.unitCostCents), lowThreshold: it.lowThreshold === null ? "" : String(it.lowThreshold), supplier: it.supplier }}
          />
        </Card>
      </div>
    </>
  );
}
