"use server";

/* ==================================================================
   Chantier A — Server Actions de l'assistant. Chacune : requireAdmin()
   → validation (zod) → lecture ou écriture. Joignables par un POST
   direct : la session est vérifiée ici.
   - savePricesAction : tarifs par million de jetons (les quatre, ou aucun).
   - draftLinkAction  : lien pour OUVRIR un brouillon (mailto:, Textos,
     sms:) ; rien n'est envoyé, c'est le propriétaire qui envoie.
   ================================================================== */

import { refresh } from "next/cache";
import { z } from "zod";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { draftHref } from "@/lib/gestion/assistant/drafts";
import { savePrices } from "@/lib/gestion/assistant/store";
import { CLIENT_ID_RE } from "@/lib/gestion/crm/types";

export type PricesResult = { ok: true; message: string } | { ok: false; error: string } | undefined;

const priceField = z
  .string()
  .trim()
  .max(12)
  .transform((s) => s.replace(/\s/g, "").replace(",", "."))
  .refine((s) => s === "" || /^\d+(\.\d{1,4})?$/.test(s), "Tarif illisible : un nombre, par exemple 5 ou 0,50.");

const FIELDS = ["input", "output", "cacheWrite", "cacheRead"] as const;

export async function savePricesAction(_prev: PricesResult, fd: FormData): Promise<PricesResult> {
  const session = await requireAdmin();
  const p = z.object(Object.fromEntries(FIELDS.map((k) => [k, priceField])) as Record<(typeof FIELDS)[number], typeof priceField>).safeParse(Object.fromEntries(FIELDS.map((k) => [k, String(fd.get(k) ?? "")])));
  if (!p.success) return { ok: false, error: p.error.issues[0]?.message ?? "Tarifs invalides." };
  const values = FIELDS.map((k) => p.data[k]);
  if (values.every((v) => v === "")) {
    await savePrices(null, session.email);
    refresh();
    return { ok: true, message: "Tarifs retirés : seuls les jetons seront affichés." };
  }
  if (values.some((v) => v === "")) return { ok: false, error: "Remplissez les quatre tarifs, ou videz-les tous." };
  const nums = values.map(Number);
  if (nums.some((n) => !Number.isFinite(n) || n < 0 || n > 10_000)) return { ok: false, error: "Tarif hors limites." };
  await savePrices({ input: nums[0], output: nums[1], cacheWrite: nums[2], cacheRead: nums[3] }, session.email);
  refresh();
  return { ok: true, message: "Tarifs enregistrés." };
}

const draftSchema = z.object({
  clientId: z.string().regex(CLIENT_ID_RE),
  canal: z.enum(["texto", "courriel"]),
  objet: z.string().max(140).default(""),
  texte: z.string().max(2000),
});

export async function draftLinkAction(input: unknown): Promise<{ ok: true; href: string } | { ok: false; error: string }> {
  await requireAdmin();
  const p = draftSchema.safeParse(input);
  if (!p.success) return { ok: false, error: "Demande invalide." };
  const href = await draftHref(p.data.clientId, p.data.canal, p.data.objet, p.data.texte);
  if (!href) return { ok: false, error: p.data.canal === "courriel" ? "Aucun courriel connu pour ce client." : "Aucun numéro connu pour ce client." };
  return { ok: true, href };
}
