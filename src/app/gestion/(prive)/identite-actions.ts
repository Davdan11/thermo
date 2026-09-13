"use server";

/* ==================================================================
   Server Actions de l'identité légale des partenaires (entreprise qui
   réalise les travaux dans les soumissions). Chacune : requireAdmin()
   → validation (zod, expression de l'identifiant) → écriture →
   refresh(). Une action est joignable par un POST direct : la session
   est vérifiée ici. Aucun envoi réel en développement (send.ts).
   ================================================================== */

import { refresh } from "next/cache";
import { z } from "zod";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { identityFieldsSchema, issueIdentityLink, saveIdentity, verifyIdentity } from "@/lib/gestion/partenaires/identity";
import { INSTALLER_ID_RE } from "@/lib/gestion/partenaires/types";
import { publicBaseUrl } from "@/lib/gestion/request";
import type { PaResult } from "./partenaires-actions";

const inst = z.string().regex(INSTALLER_ID_RE);
const INVALID = { ok: false as const, error: "Demande invalide." };
const FIELDS = ["legalName", "tradeName", "neq", "address", "city", "postalCode", "phone", "email", "tps", "tvq"] as const;

export async function saveIdentityAction(installerId: string, _prev: PaResult, fd: FormData): Promise<PaResult> {
  const s = await requireAdmin();
  const id = inst.safeParse(installerId);
  if (!id.success) return INVALID;
  const p = identityFieldsSchema.safeParse(Object.fromEntries(FIELDS.map((k) => [k, String(fd.get(k) ?? "")])));
  if (!p.success) return { ok: false, error: "Un champ est trop long ou invalide." };
  const r = await saveIdentity(id.data, p.data, s.email);
  if (!r.ok) return r;
  refresh();
  return { ok: true, message: "Identité légale enregistrée : elle est marquée comme vérifiée par vous." };
}

export async function verifyIdentityAction(installerId: unknown): Promise<PaResult> {
  const s = await requireAdmin();
  const id = inst.safeParse(installerId);
  if (!id.success) return INVALID;
  const r = await verifyIdentity(id.data, s.email);
  if (!r.ok) return r;
  refresh();
  return { ok: true, message: "Identité transmise confirmée." };
}

export async function sendIdentityLinkAction(installerId: unknown): Promise<PaResult> {
  const s = await requireAdmin();
  const id = inst.safeParse(installerId);
  if (!id.success) return INVALID;
  const r = await issueIdentityLink(id.data, s.email, await publicBaseUrl());
  if (!r.ok) return r;
  refresh();
  return { ok: true, message: `Lien envoyé · courriel ${r.email} · texto ${r.sms}. Lien personnel (à ne transmettre qu’au partenaire) :`, link: r.link };
}
