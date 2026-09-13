"use server";

/* ==================================================================
   Server Actions du Chantier R (réseau et opérations) : licence RBQ,
   réglages du recrutement, accueil des partenaires, inventaire.
   Chacune : requireAdmin() → validation (zod, expressions des
   identifiants) → écriture → refresh(). Une action est joignable par
   un POST direct : la session est vérifiée ici.
   ================================================================== */

import { refresh } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import * as inv from "@/lib/gestion/inventaire/service";
import { ITEM_ID_RE, ITEM_KINDS, ORDER_ID_RE, RESERVATION_REF_RE } from "@/lib/gestion/inventaire/types";
import { INSTALLER_ID_RE } from "@/lib/gestion/partenaires/types";
import * as rs from "@/lib/gestion/reseau/service";

export type RaResult = { ok: true; message?: string; link?: string } | { ok: false; error: string } | undefined;

const INVALID = { ok: false as const, error: "Demande invalide." };
const str = (fd: FormData, k: string, max = 400) => String(fd.get(k) ?? "").trim().slice(0, max);
const inst = z.string().regex(INSTALLER_ID_RE);
const itemId = z.string().regex(ITEM_ID_RE);
const orderId = z.string().regex(ORDER_ID_RE);
const done = (r: { ok: true; message?: string } | { ok: false; error: string }): RaResult => {
  if (r.ok) refresh();
  return r;
};

/** Entier dans des bornes ; « » → null si permis. */
const intField = (min: number, max: number) => z.coerce.number().int().min(min).max(max);
const optionalInt = (min: number, max: number) =>
  z.string().transform((s, ctx) => {
    const t = s.trim();
    if (!t) return null;
    const n = Number(t);
    if (!Number.isInteger(n) || n < min || n > max) {
      ctx.addIssue({ code: "custom", message: `Nombre entier de ${min} à ${max}.` });
      return z.NEVER;
    }
    return n;
  });
/** « 1 234,56 » → 123456 cents ; « » → null. Aucun montant n'est jamais deviné. */
const optionalCents = z.string().transform((s, ctx) => {
  const t = s.replace(/[\s$]/g, "").replace(",", ".");
  if (!t) return null;
  if (!/^\d{1,7}(\.\d{1,2})?$/.test(t)) {
    ctx.addIssue({ code: "custom", message: "Coût invalide (ex. 1234,56)." });
    return z.NEVER;
  }
  return Math.round(Number(t) * 100);
});
const firstError = (e: z.ZodError) => e.issues[0]?.message ?? "Formulaire invalide.";

/* ---------------- Licence RBQ ---------------- */

export async function rbqOverrideAction(id: unknown, _prev: RaResult, fd: FormData): Promise<RaResult> {
  const s = await requireAdmin();
  const iid = inst.safeParse(id);
  const p = z.object({ note: z.string().trim().min(5, "Précisez ce que vous avez vérifié.").max(300), confirm: z.literal("1", { message: "Cochez la confirmation." }) }).safeParse({ note: str(fd, "note", 300), confirm: str(fd, "confirm", 2) });
  if (!iid.success) return INVALID;
  if (!p.success) return { ok: false, error: firstError(p.error) };
  return done(await rs.overrideRbq(iid.data, p.data.note, s.email));
}

export async function rbqClearOverrideAction(id: unknown): Promise<RaResult> {
  const s = await requireAdmin();
  const iid = inst.safeParse(id);
  if (!iid.success) return INVALID;
  return done(await rs.clearRbqOverride(iid.data, s.email));
}

/* ---------------- Réglages du réseau ---------------- */

export async function reseauSettingsAction(_prev: RaResult, fd: FormData): Promise<RaResult> {
  const s = await requireAdmin();
  const codes = str(fd, "subcategories", 200)
    .split(/[\s,;]+/)
    .filter(Boolean);
  const p = z
    .object({
      relevantSubcategories: z.array(z.string().regex(/^\d{1,2}(\.\d{1,2}){0,2}$/, "Sous-catégorie : un code comme 15.10.")).max(20),
      recruitMinDemands: intField(1, 100),
      recruitDays: intField(7, 730),
    })
    .safeParse({ relevantSubcategories: codes, recruitMinDemands: str(fd, "recruitMinDemands", 6), recruitDays: str(fd, "recruitDays", 6) });
  if (!p.success) return { ok: false, error: firstError(p.error) };
  return done(await rs.saveReseauSettings(p.data, s.email));
}

/* ---------------- Accueil ---------------- */

export async function legalAction(id: unknown, _prev: RaResult, fd: FormData): Promise<RaResult> {
  const s = await requireAdmin();
  const iid = inst.safeParse(id);
  const p = z
    .object({ legalName: z.string().max(160), neq: z.string().regex(/^[\d\s-]{0,20}$/, "Le NEQ compte 10 chiffres."), address: z.string().max(240) })
    .safeParse({ legalName: str(fd, "legalName", 160), neq: str(fd, "neq", 20), address: str(fd, "address", 240) });
  if (!iid.success) return INVALID;
  if (!p.success) return { ok: false, error: firstError(p.error) };
  return done(await rs.saveLegal(iid.data, p.data, s.email));
}

export async function availabilityAction(id: unknown, _prev: RaResult, fd: FormData): Promise<RaResult> {
  const s = await requireAdmin();
  const iid = inst.safeParse(id);
  const p = z
    .object({ days: z.array(intField(0, 6)).max(7), weeklyCapacity: optionalInt(0, 200), note: z.string().max(300) })
    .safeParse({ days: fd.getAll("days").map(String), weeklyCapacity: str(fd, "weeklyCapacity", 6), note: str(fd, "note", 300) });
  if (!iid.success) return INVALID;
  if (!p.success) return { ok: false, error: firstError(p.error) };
  return done(await rs.saveAvailability(iid.data, p.data, s.email));
}

/* ---------------- Inventaire : articles ---------------- */

const itemSchema = z.object({
  kind: z.enum(ITEM_KINDS),
  label: z.string().max(160),
  modelSlug: z.string().regex(/^[a-z0-9-]{2,160}$/).nullable(),
  partNumber: z.string().max(80),
  perJob: intField(1, 20),
  location: z.string().max(120),
  unitCostCents: optionalCents,
  lowThreshold: optionalInt(0, 10_000),
  supplier: z.string().max(120),
});

const itemFields = (fd: FormData) => ({
  kind: str(fd, "kind", 20),
  label: str(fd, "label", 160),
  modelSlug: str(fd, "modelSlug", 160) || null,
  partNumber: str(fd, "partNumber", 80),
  perJob: str(fd, "perJob", 4) || "1",
  location: str(fd, "location", 120),
  unitCostCents: str(fd, "unitCost", 20),
  lowThreshold: str(fd, "lowThreshold", 6),
  supplier: str(fd, "supplier", 120),
});

export async function itemCreateAction(_prev: RaResult, fd: FormData): Promise<RaResult> {
  const s = await requireAdmin();
  const p = itemSchema.extend({ quantity: intField(0, 10_000) }).safeParse({ ...itemFields(fd), quantity: str(fd, "quantity", 6) || "0" });
  if (!p.success) return { ok: false, error: firstError(p.error) };
  if (!p.data.label && !p.data.modelSlug) return { ok: false, error: "Donnez une désignation ou choisissez un modèle." };
  const r = await inv.createItem(p.data, s.email);
  if (!r.ok) return r;
  redirect(`/gestion/inventaire/${r.id}`);
}

export async function itemUpdateAction(id: unknown, _prev: RaResult, fd: FormData): Promise<RaResult> {
  const s = await requireAdmin();
  const iid = itemId.safeParse(id);
  const p = itemSchema.safeParse(itemFields(fd));
  if (!iid.success) return INVALID;
  if (!p.success) return { ok: false, error: firstError(p.error) };
  return done(await inv.updateItem(iid.data, p.data, s.email));
}

export async function adjustAction(id: unknown, _prev: RaResult, fd: FormData): Promise<RaResult> {
  const s = await requireAdmin();
  const iid = itemId.safeParse(id);
  const p = z.object({ delta: intField(-10_000, 10_000).refine((n) => n !== 0, "Indiquez une quantité."), reason: z.enum(["entree", "ajustement"]), note: z.string().max(200) }).safeParse({ delta: str(fd, "delta", 7), reason: str(fd, "reason", 12), note: str(fd, "note", 200) });
  if (!iid.success) return INVALID;
  if (!p.success) return { ok: false, error: firstError(p.error) };
  return done(await inv.adjustQuantity(iid.data, p.data.delta, p.data.reason, p.data.note, s.email));
}

export async function archiveAction(id: unknown, archived: unknown): Promise<RaResult> {
  await requireAdmin();
  const iid = itemId.safeParse(id);
  const a = z.boolean().safeParse(archived);
  if (!iid.success || !a.success) return INVALID;
  return done(await inv.setArchived(iid.data, a.data));
}

export async function releaseAction(id: unknown, ref: unknown, release: unknown): Promise<RaResult> {
  const s = await requireAdmin();
  const iid = itemId.safeParse(id);
  const r = z.string().regex(RESERVATION_REF_RE).safeParse(ref);
  const b = z.boolean().safeParse(release);
  if (!iid.success || !r.success || !b.success) return INVALID;
  return done(await inv.setRelease(iid.data, r.data, b.data, "", s.email));
}

export async function syncExitsAction(): Promise<RaResult> {
  await requireAdmin();
  const { created } = await inv.syncStockExits();
  refresh();
  return { ok: true, message: created ? `${created} sortie${created > 1 ? "s" : ""} enregistrée${created > 1 ? "s" : ""}.` : "Aucune sortie à enregistrer." };
}

/* ---------------- Inventaire : bons de commande ---------------- */

export async function orderCreateAction(_prev: RaResult, fd: FormData): Promise<RaResult> {
  const s = await requireAdmin();
  const ids = fd.getAll("itemId").map(String);
  const qtys = fd.getAll("qty").map(String);
  const costs = fd.getAll("cost").map(String);
  const line = z.object({ itemId, qty: intField(0, 10_000), unitCostCents: optionalCents });
  const lines: Array<{ itemId: string; qty: number; unitCostCents: number | null }> = [];
  for (let i = 0; i < Math.min(ids.length, 60); i++) {
    const p = line.safeParse({ itemId: ids[i], qty: qtys[i] ?? "0", unitCostCents: costs[i] ?? "" });
    if (!p.success) return { ok: false, error: firstError(p.error) };
    if (p.data.qty > 0) lines.push(p.data);
  }
  const head = z.object({ supplier: z.string().min(1, "Nommez le fournisseur.").max(120), note: z.string().max(500) }).safeParse({ supplier: str(fd, "supplier", 120), note: str(fd, "note", 500) });
  if (!head.success) return { ok: false, error: firstError(head.error) };
  const r = await inv.createOrder({ ...head.data, lines }, s.email);
  if (!r.ok) return r;
  redirect(`/gestion/inventaire/commandes/${r.id}`);
}

export async function orderStatusAction(id: unknown, status: unknown): Promise<RaResult> {
  await requireAdmin();
  const oid = orderId.safeParse(id);
  const st = z.enum(["envoye", "annule"]).safeParse(status);
  if (!oid.success || !st.success) return INVALID;
  return done(await inv.setOrderStatus(oid.data, st.data));
}

export async function orderReceiveAction(id: unknown): Promise<RaResult> {
  const s = await requireAdmin();
  const oid = orderId.safeParse(id);
  if (!oid.success) return INVALID;
  return done(await inv.receiveOrder(oid.data, s.email));
}
