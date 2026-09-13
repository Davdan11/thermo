/* Chantier R — inventaire.json, à côté de gestion.json (même écriture sous verrou, droits 600). */

import { randomBytes } from "node:crypto";
import path from "node:path";
import { gestionDataDir, mutateJson, readJson } from "../store";
import { ITEM_KINDS, ORDER_STATUSES, type InventaireData, type PurchaseOrder, type StockItem } from "./types";

export const inventaireFile = () => path.join(gestionDataDir(), "inventaire.json");

export const emptyInventaire = (): InventaireData => ({ version: 1, counter: 0, items: [], movements: [], releases: [], orders: [] });

const arr = <T,>(v: unknown): T[] => (Array.isArray(v) ? (v as T[]) : []);
const int = (v: unknown, def: number) => (typeof v === "number" && Number.isFinite(v) ? Math.round(v) : def);
const intOrNull = (v: unknown) => (typeof v === "number" && Number.isFinite(v) ? Math.round(v) : null);

function normalizeItem(i: Partial<StockItem>): StockItem {
  return {
    id: String(i.id ?? ""),
    kind: (ITEM_KINDS as readonly string[]).includes(i.kind as string) ? (i.kind as StockItem["kind"]) : "accessoire",
    label: String(i.label ?? ""),
    modelSlug: typeof i.modelSlug === "string" && i.modelSlug ? i.modelSlug : null,
    modelLabel: typeof i.modelLabel === "string" && i.modelLabel ? i.modelLabel : null,
    brandId: typeof i.brandId === "string" && i.brandId ? i.brandId : null,
    partNumber: String(i.partNumber ?? ""),
    perJob: Math.max(1, int(i.perJob, 1)),
    quantity: int(i.quantity, 0),
    location: String(i.location ?? ""),
    unitCostCents: intOrNull(i.unitCostCents),
    lowThreshold: intOrNull(i.lowThreshold),
    supplier: String(i.supplier ?? ""),
    archived: Boolean(i.archived),
    createdAt: String(i.createdAt ?? new Date(0).toISOString()),
    createdBy: String(i.createdBy ?? ""),
    updatedAt: String(i.updatedAt ?? i.createdAt ?? new Date(0).toISOString()),
  };
}

function normalizeOrder(o: Partial<PurchaseOrder>): PurchaseOrder {
  return {
    ...(o as PurchaseOrder),
    status: (ORDER_STATUSES as readonly string[]).includes(o.status as string) ? (o.status as PurchaseOrder["status"]) : "brouillon",
    lines: arr<PurchaseOrder["lines"][number]>(o.lines).map((l) => ({ itemId: String(l.itemId), qty: Math.max(1, int(l.qty, 1)), unitCostCents: intOrNull(l.unitCostCents) })),
    note: String(o.note ?? ""),
    supplier: String(o.supplier ?? ""),
  };
}

export function normalizeInventaire(d: Partial<InventaireData> | null | undefined): InventaireData {
  return {
    version: 1,
    counter: int(d?.counter, 0),
    items: arr<Partial<StockItem>>(d?.items).map(normalizeItem).filter((i) => i.id),
    movements: arr(d?.movements),
    releases: arr(d?.releases),
    orders: arr<Partial<PurchaseOrder>>(d?.orders).map(normalizeOrder),
  };
}

export async function readInventaire(): Promise<InventaireData> {
  return normalizeInventaire(await readJson<Partial<InventaireData> | null>(inventaireFile(), () => null));
}

export function mutateInventaire<T>(fn: (data: InventaireData) => { result: T; changed: boolean } | Promise<{ result: T; changed: boolean }>): Promise<T> {
  return mutateJson<InventaireData, T>(inventaireFile(), emptyInventaire, normalizeInventaire, fn);
}

export const newInvId = (prefix: "k" | "m" | "bc") => `${prefix}_${randomBytes(8).toString("base64url")}`;
