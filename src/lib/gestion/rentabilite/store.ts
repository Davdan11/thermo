/* ==================================================================
   Chantier A — rentabilite.json, à côté de gestion.json (shared/data
   sur le VPS, data/ en développement, GESTION_DATA_DIR pour l'imposer).
   Même écriture que les autres magasins : verrou, temporaire + rename,
   droits 600. Aucun renseignement personnel : des montants par canal
   et par mois.

   Une valeur par canal et par mois. Plus tard, l'API publicitaire (le
   cerveau publicitaire) écrira ici avec la source « api » ; elle ne
   remplace jamais une saisie manuelle sans `replaceManual`.
   ================================================================== */

import path from "node:path";
import { gestionDataDir, mutateJson, readJson } from "../store";
import { isSpendChannel, MONTH_RE, type RentabiliteData, type SpendChannelId, type SpendEntry, type SpendSource } from "./types";

export const rentabiliteFile = () => path.join(gestionDataDir(), "rentabilite.json");

export const emptyRentabilite = (): RentabiliteData => ({ version: 1, spends: [] });

function normalizeSpend(v: unknown): SpendEntry | null {
  if (!v || typeof v !== "object") return null;
  const e = v as Partial<SpendEntry>;
  if (!isSpendChannel(e.channel) || typeof e.month !== "string" || !MONTH_RE.test(e.month)) return null;
  if (typeof e.cents !== "number" || !Number.isFinite(e.cents) || e.cents < 0) return null;
  return {
    channel: e.channel,
    month: e.month,
    cents: Math.round(e.cents),
    source: e.source === "api" ? "api" : "manuel",
    updatedAt: typeof e.updatedAt === "string" ? e.updatedAt : new Date(0).toISOString(),
    updatedBy: typeof e.updatedBy === "string" ? e.updatedBy : "",
    ...(typeof e.note === "string" && e.note.trim() ? { note: e.note.trim().slice(0, 120) } : {}),
  };
}

export function normalizeRentabilite(d: Partial<RentabiliteData> | null | undefined): RentabiliteData {
  const seen = new Set<string>();
  const spends: SpendEntry[] = [];
  for (const raw of Array.isArray(d?.spends) ? d.spends : []) {
    const e = normalizeSpend(raw);
    if (!e || seen.has(`${e.channel}|${e.month}`)) continue;
    seen.add(`${e.channel}|${e.month}`);
    spends.push(e);
  }
  return { version: 1, spends };
}

export async function readRentabilite(): Promise<RentabiliteData> {
  return normalizeRentabilite(await readJson<Partial<RentabiliteData> | null>(rentabiliteFile(), () => null));
}

export function mutateRentabilite<T>(fn: (d: RentabiliteData) => { result: T; changed: boolean }): Promise<T> {
  return mutateJson<RentabiliteData, T>(rentabiliteFile(), emptyRentabilite, normalizeRentabilite, fn);
}

export type SpendResult = { ok: true } | { ok: false; error: string };

/** Enregistre la dépense d'un canal pour un mois (remplace la valeur précédente du même mois). */
export function setSpend(
  input: { channel: SpendChannelId; month: string; cents: number; source: SpendSource; by: string; note?: string; replaceManual?: boolean },
  now = new Date(),
): Promise<SpendResult> {
  if (!isSpendChannel(input.channel) || !MONTH_RE.test(input.month)) return Promise.resolve({ ok: false, error: "Canal ou mois invalide." });
  if (!Number.isFinite(input.cents) || input.cents < 0 || input.cents > 100_000_000) return Promise.resolve({ ok: false, error: "Montant invalide." });
  return mutateRentabilite<SpendResult>((d) => {
    const i = d.spends.findIndex((e) => e.channel === input.channel && e.month === input.month);
    if (i >= 0 && input.source === "api" && d.spends[i].source === "manuel" && !input.replaceManual) {
      return { result: { ok: false, error: "Une saisie manuelle existe déjà pour ce mois." }, changed: false };
    }
    const entry: SpendEntry = {
      channel: input.channel,
      month: input.month,
      cents: Math.round(input.cents),
      source: input.source,
      updatedAt: now.toISOString(),
      updatedBy: input.by,
      ...(input.note?.trim() ? { note: input.note.trim().slice(0, 120) } : {}),
    };
    if (i >= 0) d.spends[i] = entry;
    else d.spends.push(entry);
    return { result: { ok: true }, changed: true };
  });
}

export function removeSpend(channel: SpendChannelId, month: string): Promise<boolean> {
  return mutateRentabilite((d) => {
    const before = d.spends.length;
    d.spends = d.spends.filter((e) => !(e.channel === channel && e.month === month));
    return { result: d.spends.length < before, changed: d.spends.length < before };
  });
}
