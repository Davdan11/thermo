/* ==================================================================
   Chantier R — inventaire : lecture (réservations calculées) et
   écritures du propriétaire. AUCUNE vérification d'accès ici : les
   Server Actions passent par requireAdmin() et zod.
   Les jobs et les soumissions sont LUS seulement.
   ================================================================== */

import { readSoumissions } from "@/lib/soumissions/store";
import { modelBySlug } from "../catalog";
import { readGestion } from "../store";
import { applyExits, dossiersFrom, stockValue, stockView, type Dossier, type ItemStock } from "./reservations";
import { mutateInventaire, newInvId, readInventaire } from "./store";
import type { InventaireData, ItemKind, OrderLine, StockItem } from "./types";

export type InvResult = { ok: true; message?: string; id?: string } | { ok: false; error: string };

const demo = () => process.env.NODE_ENV !== "production";

export async function loadDossiers(): Promise<Dossier[]> {
  const [g, s] = await Promise.all([readGestion(), readSoumissions()]);
  return dossiersFrom(demo() || !g.seed ? g.jobs : [], s.quotes.filter((q) => demo() || !q.seed));
}

export interface InventoryView {
  data: InventaireData;
  stock: ItemStock[];
  value: { cents: number; withoutCost: number };
}

export async function inventoryView(): Promise<InventoryView> {
  const [data, dossiers] = await Promise.all([readInventaire(), loadDossiers()]);
  return { data, stock: stockView(data, dossiers), value: stockValue(data.items) };
}

/** Articles au seuil ou en dessous (tâches « Commander »). */
export async function lowStockAlerts() {
  const { stock } = await inventoryView();
  return stock
    .filter((s) => s.low && s.item.lowThreshold !== null)
    .map((s) => ({ id: s.item.id, label: s.item.label, available: s.available, lowThreshold: s.item.lowThreshold!, quantity: s.item.quantity, reserved: s.reserved, updatedAt: s.item.updatedAt }));
}

/* ---------------- Articles ---------------- */

export interface ItemInput {
  kind: ItemKind;
  label: string;
  modelSlug: string | null;
  partNumber: string;
  perJob: number;
  location: string;
  unitCostCents: number | null;
  lowThreshold: number | null;
  supplier: string;
}

function catalogFields(slug: string | null): { modelSlug: string | null; modelLabel: string | null; brandId: string | null } | null {
  if (!slug) return { modelSlug: null, modelLabel: null, brandId: null };
  const m = modelBySlug(slug);
  return m ? { modelSlug: m.slug, modelLabel: m.label, brandId: m.brandId } : null;
}

export async function createItem(input: ItemInput & { quantity: number }, by: string, now = new Date()): Promise<InvResult> {
  const cat = catalogFields(input.modelSlug);
  if (!cat) return { ok: false, error: "Modèle introuvable au catalogue." };
  const at = now.toISOString();
  const id = newInvId("k");
  await mutateInventaire((d) => {
    const { quantity, ...rest } = input;
    const item: StockItem = { ...rest, ...cat, id, label: input.label || cat.modelLabel || "Article", quantity: 0, archived: false, createdAt: at, createdBy: by, updatedAt: at };
    d.items.push(item);
    if (quantity > 0) {
      item.quantity = quantity;
      d.movements.push({ id: newInvId("m"), at, by, itemId: id, delta: quantity, reason: "entree", note: "Quantité de départ" });
    }
    return { result: undefined, changed: true };
  });
  return { ok: true, message: "Article ajouté.", id };
}

export async function updateItem(id: string, input: ItemInput, by: string, now = new Date()): Promise<InvResult> {
  const cat = catalogFields(input.modelSlug);
  if (!cat) return { ok: false, error: "Modèle introuvable au catalogue." };
  return mutateInventaire<InvResult>((d) => {
    const item = d.items.find((i) => i.id === id);
    if (!item) return { result: { ok: false as const, error: "Article introuvable." }, changed: false };
    Object.assign(item, input, cat, { label: input.label || cat.modelLabel || item.label, updatedAt: now.toISOString() });
    return { result: { ok: true as const, message: "Article enregistré." }, changed: true };
  });
}

export async function adjustQuantity(id: string, delta: number, reason: "entree" | "ajustement", note: string, by: string, now = new Date()): Promise<InvResult> {
  if (!Number.isInteger(delta) || delta === 0) return { ok: false, error: "Quantité invalide." };
  return mutateInventaire<InvResult>((d) => {
    const item = d.items.find((i) => i.id === id);
    if (!item) return { result: { ok: false as const, error: "Article introuvable." }, changed: false };
    const at = now.toISOString();
    item.quantity += delta;
    item.updatedAt = at;
    d.movements.push({ id: newInvId("m"), at, by, itemId: id, delta, reason, note: note.slice(0, 200) });
    return { result: { ok: true as const, message: delta > 0 ? `${delta} ajouté${delta > 1 ? "s" : ""}.` : `${-delta} retiré${delta < -1 ? "s" : ""}.` }, changed: true };
  });
}

export async function setArchived(id: string, archived: boolean, now = new Date()): Promise<InvResult> {
  return mutateInventaire<InvResult>((d) => {
    const item = d.items.find((i) => i.id === id);
    if (!item) return { result: { ok: false as const, error: "Article introuvable." }, changed: false };
    item.archived = archived;
    item.updatedAt = now.toISOString();
    return { result: { ok: true as const, message: archived ? "Article archivé." : "Article remis en stock." }, changed: true };
  });
}

/** Libère (ou rétablit) la réservation d'un dossier pour un article. */
export async function setRelease(itemId: string, ref: string, release: boolean, note: string, by: string, now = new Date()): Promise<InvResult> {
  return mutateInventaire<InvResult>((d) => {
    if (!d.items.some((i) => i.id === itemId)) return { result: { ok: false as const, error: "Article introuvable." }, changed: false };
    const at = d.releases.findIndex((r) => r.itemId === itemId && r.ref === ref);
    if (release && at < 0) d.releases.push({ ref, itemId, at: now.toISOString(), by, note: note.slice(0, 200) });
    else if (!release && at >= 0) d.releases.splice(at, 1);
    else return { result: { ok: true as const }, changed: false };
    return { result: { ok: true as const, message: release ? "Réservation libérée." : "Réservation rétablie." }, changed: true };
  });
}

/** Sorties du stock pour les jobs terminés (volet A) : idempotent. */
export async function syncStockExits(now = new Date()): Promise<{ created: number }> {
  const dossiers = await loadDossiers();
  const created = await mutateInventaire((d) => {
    const list = applyExits(d, dossiers, now.toISOString(), () => newInvId("m"));
    return { result: list.length, changed: list.length > 0 };
  });
  return { created };
}

/* ---------------- Bons de commande ---------------- */

export async function createOrder(input: { supplier: string; note: string; lines: OrderLine[] }, by: string, now = new Date()): Promise<InvResult> {
  if (!input.lines.length) return { ok: false, error: "Ajoutez au moins une ligne." };
  const id = newInvId("bc");
  return mutateInventaire<InvResult>((d) => {
    if (input.lines.some((l) => !d.items.some((i) => i.id === l.itemId))) return { result: { ok: false as const, error: "Article introuvable." }, changed: false };
    const at = now.toISOString();
    d.counter += 1;
    d.orders.push({ id, number: d.counter, supplier: input.supplier.trim(), status: "brouillon", lines: input.lines, note: input.note.trim(), createdAt: at, createdBy: by, updatedAt: at });
    return { result: { ok: true as const, message: `Bon de commande n° ${d.counter} créé.`, id }, changed: true };
  });
}

export async function setOrderStatus(id: string, status: "envoye" | "annule", now = new Date()): Promise<InvResult> {
  return mutateInventaire<InvResult>((d) => {
    const o = d.orders.find((x) => x.id === id);
    if (!o) return { result: { ok: false as const, error: "Bon introuvable." }, changed: false };
    if (o.status === "recu" || o.status === "annule") return { result: { ok: false as const, error: "Ce bon est déjà fermé." }, changed: false };
    o.status = status;
    o.updatedAt = now.toISOString();
    if (status === "envoye") o.sentAt = o.updatedAt;
    return { result: { ok: true as const, message: status === "envoye" ? "Marqué commandé." : "Bon annulé." }, changed: true };
  });
}

/** Réception : chaque ligne entre en stock une seule fois ; le coût saisi sur la ligne devient le coût de l'article. */
export async function receiveOrder(id: string, by: string, now = new Date()): Promise<InvResult> {
  return mutateInventaire<InvResult>((d) => {
    const o = d.orders.find((x) => x.id === id);
    if (!o) return { result: { ok: false as const, error: "Bon introuvable." }, changed: false };
    if (o.status === "recu" || o.status === "annule") return { result: { ok: false as const, error: "Ce bon est déjà fermé." }, changed: false };
    const at = now.toISOString();
    for (const l of o.lines) {
      const key = `bc:${o.id}:${l.itemId}`;
      const item = d.items.find((i) => i.id === l.itemId);
      if (!item || d.movements.some((m) => m.key === key)) continue;
      item.quantity += l.qty;
      if (l.unitCostCents !== null) item.unitCostCents = l.unitCostCents;
      item.updatedAt = at;
      d.movements.push({ id: newInvId("m"), at, by, itemId: item.id, delta: l.qty, reason: "reception-bc", note: `Bon de commande n° ${o.number}`, key, orderId: o.id });
    }
    o.status = "recu";
    o.receivedAt = at;
    o.receivedBy = by;
    o.updatedAt = at;
    return { result: { ok: true as const, message: "Reçu : les quantités sont entrées en stock." }, changed: true };
  });
}
