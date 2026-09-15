/* ==================================================================
   Chantier R — réservations et sorties du stock. Pur.

   Dossiers qui réservent (lecture seule des jobs et des soumissions,
   jamais d'écriture dans leur code) :
     - un job non annulé dont le modèle est connu (modèle du job, sinon
       celui de la soumission acceptée liée) ;
     - une soumission acceptée qui n'a pas encore de job.
   Un article réserve `perJob` unités pour chaque dossier de son
   modèle, sauf réservation libérée à la main ou sortie déjà faite.
   Sortie : quand le job est terminé (fin de chantier, volet A), une
   seule fois (clé « sortie:job:<id>:<article> »). Un job terminé
   AVANT la création de l'article n'a pas pris dans ce stock : ni
   réservation ni sortie.
   ================================================================== */

import { registry } from "@/lib/data/registry";
import type { Quote } from "@/lib/soumissions/types";
import { acceptedQuoteForJob, jobCompletion } from "../commissions/link";
import type { Job } from "../types";
import type { InventaireData, StockItem, StockMovement } from "./types";

/** Même modèle, même si un dossier garde l'adresse de fiche d'avant (les adresses suivent le nom commercial). */
const modelKey = (slug: string) => registry.modelBySlug.get(slug)?.id ?? slug;
const sameModel = (a: string, b: string) => a === b || modelKey(a) === modelKey(b);

export interface Dossier {
  /** « job:<id> » ou « quote:<id> ». */
  ref: string;
  kind: "job" | "soumission";
  modelSlug: string;
  label: string;
  at: string;
  jobId?: string;
  quoteId?: string;
  /** Fin du chantier (job terminé), sinon null. */
  completedAt: string | null;
}

const acceptedVersion = (q: Quote) => [...q.versions].reverse().find((v) => v.acceptance) ?? null;

export function dossiersFrom(jobs: Job[], quotes: Quote[]): Dossier[] {
  const linked = new Set<string>();
  const out: Dossier[] = [];
  for (const j of jobs) {
    if (j.status === "annule") continue;
    const aq = acceptedQuoteForJob(j, quotes);
    if (aq) linked.add(aq.quote.id);
    const slug = j.modelSlug ?? aq?.version.content.machine?.modelSlug ?? null;
    if (!slug) continue;
    out.push({ ref: `job:${j.id}`, kind: "job", modelSlug: slug, label: `Job n° ${j.number}`, at: j.createdAt, jobId: j.id, completedAt: jobCompletion(j)?.completedAt ?? null });
  }
  for (const q of quotes) {
    if (linked.has(q.id)) continue;
    const v = acceptedVersion(q);
    const slug = v?.content.machine?.modelSlug;
    if (!v?.acceptance || !slug) continue;
    out.push({ ref: `quote:${q.id}`, kind: "soumission", modelSlug: slug, label: `Soumission ${q.number}`, at: v.acceptance.at, quoteId: q.id, completedAt: null });
  }
  return out;
}

export const exitKey = (ref: string, itemId: string) => `sortie:${ref}:${itemId}`;

export interface ItemStock {
  item: StockItem;
  reserved: number;
  /** En main − réservé (peut être négatif : il manque des unités). */
  available: number;
  low: boolean;
  dossiers: Array<Dossier & { qty: number }>;
  /** Jobs terminés dont la sortie n'est pas encore enregistrée. */
  pendingExit: Array<Dossier & { qty: number }>;
}

export function itemStock(item: StockItem, data: Pick<InventaireData, "releases" | "movements">, dossiers: Dossier[]): ItemStock {
  const released = new Set(data.releases.filter((r) => r.itemId === item.id).map((r) => r.ref));
  const exited = new Set(data.movements.filter((m) => m.itemId === item.id && m.key).map((m) => m.key!));
  const mine = item.modelSlug
    ? dossiers
        .filter((d) => sameModel(d.modelSlug, item.modelSlug!) &&!released.has(d.ref) && !exited.has(exitKey(d.ref, item.id)))
        .filter((d) => !(d.completedAt && d.completedAt < item.createdAt))
        .map((d) => ({ ...d, qty: item.perJob }))
    : [];
  const reserved = item.archived ? 0 : mine.reduce((s, d) => s + d.qty, 0);
  const available = item.quantity - reserved;
  return { item, reserved, available, low: !item.archived && item.lowThreshold !== null && available <= item.lowThreshold, dossiers: item.archived ? [] : mine, pendingExit: item.archived ? [] : mine.filter((d) => d.completedAt) };
}

export function stockView(data: InventaireData, dossiers: Dossier[]): ItemStock[] {
  return data.items.map((i) => itemStock(i, data, dossiers));
}

/**
 * Enregistre les sorties dues (jobs terminés) : mutation de `data`, idempotente.
 * Renvoie les mouvements créés.
 */
export function applyExits(data: InventaireData, dossiers: Dossier[], at: string, newId: () => string, by = "système"): StockMovement[] {
  const created: StockMovement[] = [];
  for (const item of data.items) {
    if (item.archived) continue;
    for (const d of itemStock(item, data, dossiers).pendingExit) {
      const key = exitKey(d.ref, item.id);
      if (data.movements.some((m) => m.key === key)) continue;
      const m: StockMovement = { id: newId(), at, by, itemId: item.id, delta: -d.qty, reason: "sortie-chantier", note: `Fin du chantier · ${d.label}`, key, ...(d.jobId ? { jobId: d.jobId } : {}) };
      data.movements.push(m);
      item.quantity -= d.qty;
      item.updatedAt = at;
      created.push(m);
    }
  }
  return created;
}

/** Valeur au coût (articles au coût saisi seulement) et nombre d'articles sans coût. */
export function stockValue(items: StockItem[]): { cents: number; withoutCost: number } {
  let cents = 0;
  let withoutCost = 0;
  for (const i of items) {
    if (i.archived) continue;
    if (i.unitCostCents === null) withoutCost++;
    else cents += Math.max(0, i.quantity) * i.unitCostCents;
  }
  return { cents, withoutCost };
}

/** Quantité suggérée pour un bon de commande : de quoi remonter le disponible au-dessus du seuil (1 au moins). */
export const suggestedQty = (s: ItemStock): number => (s.item.lowThreshold === null ? 1 : Math.max(1, s.item.lowThreshold - s.available + 1));
