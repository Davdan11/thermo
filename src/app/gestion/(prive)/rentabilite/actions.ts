"use server";

/* ==================================================================
   Chantier A — Server Actions de la page Rentabilité : saisie et
   retrait d'une dépense publicitaire (canal, mois, montant). Chacune :
   requireAdmin() → validation (zod) → écriture → refresh().
   ================================================================== */

import { refresh } from "next/cache";
import { z } from "zod";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { monthOf } from "@/lib/gestion/rentabilite/calc";
import { removeSpend, setSpend } from "@/lib/gestion/rentabilite/store";
import { MONTH_RE, SPEND_CHANNEL_IDS, type SpendChannelId } from "@/lib/gestion/rentabilite/types";
import { parseMoney } from "@/lib/soumissions/money";

export type SpendResult = { ok: true; message: string } | { ok: false; error: string } | undefined;

const channel = z.enum(SPEND_CHANNEL_IDS as [SpendChannelId, ...SpendChannelId[]]);
const month = z.string().regex(MONTH_RE);

export async function saveSpendAction(_prev: SpendResult, fd: FormData): Promise<SpendResult> {
  const session = await requireAdmin();
  const p = z
    .object({ channel, month, amount: z.string().trim().min(1, "Indiquez le montant dépensé.").max(20), note: z.string().trim().max(120) })
    .safeParse({ channel: fd.get("channel"), month: fd.get("month"), amount: String(fd.get("amount") ?? ""), note: String(fd.get("note") ?? "") });
  if (!p.success) return { ok: false, error: p.error.issues[0]?.message ?? "Saisie invalide." };
  if (p.data.month > monthOf(new Date())) return { ok: false, error: "Choisissez le mois en cours ou un mois passé." };
  const cents = parseMoney(p.data.amount);
  if (cents === null || cents < 0) return { ok: false, error: "Montant illisible : par exemple 1 250 ou 1250,50." };
  const r = await setSpend({ channel: p.data.channel, month: p.data.month, cents, source: "manuel", by: session.email, note: p.data.note });
  if (!r.ok) return r;
  refresh();
  return { ok: true, message: "Dépense enregistrée." };
}

export async function removeSpendAction(ch: unknown, m: unknown): Promise<void> {
  await requireAdmin();
  const p = z.object({ ch: channel, m: month }).safeParse({ ch, m });
  if (!p.success) return;
  await removeSpend(p.data.ch, p.data.m);
  refresh();
}
