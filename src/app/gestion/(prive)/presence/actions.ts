"use server";

/* ==================================================================
   Server Actions du studio (file Facebook). Chacune : requireAdmin() →
   validation (identifiant, champs) → service → refresh(). Une action
   est joignable par un POST direct : la session est vérifiée ici.
   ================================================================== */

import { refresh } from "next/cache";
import { z } from "zod";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import * as svc from "@/lib/social/service";
import { PUBLICATION_ID_RE } from "@/lib/social/types";

export type PresenceResult = { ok: true; message: string } | { ok: false; error: string } | undefined;

const idValide = z.string().regex(PUBLICATION_ID_RE);
const INVALIDE = { ok: false as const, error: "Demande invalide." };
const str = (fd: FormData, k: string) => String(fd.get(k) ?? "");

function fini(r: svc.Resultat): PresenceResult {
  refresh();
  return r.ok ? { ok: true, message: r.message } : { ok: false, error: r.error };
}

export async function prepareAction(): Promise<PresenceResult> {
  const s = await requireAdmin();
  return fini(await svc.preparer(s.email));
}

export async function approveAction(id: unknown): Promise<PresenceResult> {
  const s = await requireAdmin();
  const p = idValide.safeParse(id);
  return p.success ? fini(await svc.approuver(p.data, s.email)) : INVALIDE;
}

export async function rejectAction(id: unknown, raison: unknown): Promise<PresenceResult> {
  const s = await requireAdmin();
  const p = z.object({ id: idValide, raison: z.string().max(300) }).safeParse({ id, raison });
  return p.success ? fini(await svc.refuser(p.data.id, p.data.raison, s.email)) : INVALIDE;
}

export async function restoreAction(id: unknown): Promise<PresenceResult> {
  const s = await requireAdmin();
  const p = idValide.safeParse(id);
  return p.success ? fini(await svc.remettre(p.data, s.email)) : INVALIDE;
}

export async function regenerateAction(id: unknown): Promise<PresenceResult> {
  const s = await requireAdmin();
  const p = idValide.safeParse(id);
  return p.success ? fini(await svc.regenerer(p.data, s.email)) : INVALIDE;
}

export async function publishNowAction(id: unknown): Promise<PresenceResult> {
  await requireAdmin();
  const p = idValide.safeParse(id);
  if (!p.success) return INVALIDE;
  return fini(await svc.publierMaintenant(p.data));
}

export async function saveTextAction(_prev: PresenceResult, fd: FormData): Promise<PresenceResult> {
  const s = await requireAdmin();
  const p = z.object({ id: idValide, texte: z.string().max(2200) }).safeParse({ id: str(fd, "id"), texte: str(fd, "texte") });
  return p.success ? fini(await svc.enregistrerTexte(p.data.id, p.data.texte, s.email)) : INVALIDE;
}

export async function saveSettingsAction(_prev: PresenceResult, fd: FormData): Promise<PresenceResult> {
  const s = await requireAdmin();
  const n = (k: string, d: number) => {
    const v = Number.parseInt(str(fd, k), 10);
    return Number.isFinite(v) ? v : d;
  };
  return fini(
    await svc.enregistrerReglages(
      {
        interrupteur: fd.get("interrupteur") === "on",
        publication: { actif: fd.get("pub_actif") === "on", tousLesJours: n("pub_jours", 2), heure: str(fd, "pub_heure").slice(0, 5) },
        story: { actif: fd.get("story_actif") === "on", tousLesJours: n("story_jours", 1), heure: str(fd, "story_heure").slice(0, 5) },
        joursAvance: n("jours_avance", 4),
        depart: str(fd, "depart").slice(0, 10),
        toujoursObligatoire: fd.get("obligatoire") === "on",
      },
      s.email,
    ),
  );
}
