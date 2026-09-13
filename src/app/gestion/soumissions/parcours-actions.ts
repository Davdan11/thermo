"use server";

/* ==================================================================
   Conformité C1 — Server Actions du parcours du contrat, depuis la
   soumission : choisir un installateur, offrir aux admissibles,
   changer d'installateur, préparer un avenant. Propriétaire et
   adjoints seulement (requireUser, rôles STAFF) ; chaque action est
   notée au journal d'audit.
   ================================================================== */

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { requireUser } from "@/lib/gestion/auth/dal";
import { STAFF } from "@/lib/gestion/equipe/garde";
import { publicBaseUrl } from "@/lib/gestion/request";
import { audit } from "@/lib/gestion/securite/audit";
import { INSTALLER_ID_RE } from "@/lib/gestion/partenaires/types";
import { changeInstaller, createAvenant, offerToEligible, proposeToInstaller } from "@/lib/contrats/service";
import { parseMoney } from "@/lib/soumissions/money";
import { QUOTE_ID_RE } from "@/lib/soumissions/quote";
import type { PaResult } from "@/app/gestion/(prive)/partenaires-actions";

const INVALID = { ok: false as const, error: "Demande invalide." };
const str = (fd: FormData, k: string, max = 2000) => String(fd.get(k) ?? "").trim().slice(0, max);
const path = (id: string) => `/gestion/soumissions/${id}`;

/** « Choisir » dans Trouver un installateur (parcours B), ou renvoyer à un installateur après un refus. */
export async function proposeAction(quoteId: string, installerId: string, _prev: PaResult, fd: FormData): Promise<PaResult> {
  const s = await requireUser({ roles: STAFF });
  if (!QUOTE_ID_RE.test(quoteId) || !INSTALLER_ID_RE.test(installerId)) return INVALID;
  const r = await proposeToInstaller({ quoteId, installerId, by: s.email, consentNote: str(fd, "consent", 300) || null }, { baseUrl: await publicBaseUrl() });
  if (!r.ok) return { ok: false, error: r.error };
  await audit("soumission.proposition", { soumission: quoteId, installateur: installerId }, { qui: s.email });
  revalidatePath(path(quoteId));
  return { ok: true, message: `Demande d’approbation envoyée à l’installateur (courriel ${r.email} · texto ${r.sms}).` };
}

/** « Offrir aux installateurs admissibles » : offre anonymisée par le moteur d'offres ; le premier admissible qui accepte a la priorité. */
export async function offerAction(quoteId: string, _prev: PaResult, fd: FormData): Promise<PaResult> {
  const s = await requireUser({ roles: STAFF });
  if (!QUOTE_ID_RE.test(quoteId)) return INVALID;
  const ids = fd.getAll("installers").map(String).filter((x) => INSTALLER_ID_RE.test(x));
  const r = await offerToEligible({ quoteId, by: s.email, installerIds: ids.length ? ids : null, consentNote: str(fd, "consent", 300) || null }, { baseUrl: await publicBaseUrl() });
  if (!r.ok) return { ok: false, error: r.error };
  await audit("soumission.offre", { soumission: quoteId, job: r.jobId, envoyees: r.sent }, { qui: s.email });
  revalidatePath(path(quoteId));
  return { ok: true, message: `Offre anonymisée envoyée à ${r.sent} installateur${r.sent > 1 ? "s" : ""}.${r.errors.length ? ` Non envoyée : ${r.errors.join(" ; ")}` : ""}` };
}

/** « Changer d'installateur » : contrat annulé d'un commun accord, nouvelle approbation et nouvelle signature ensuite. */
export async function changeInstallerAction(quoteId: string, _prev: PaResult, fd: FormData): Promise<PaResult> {
  const s = await requireUser({ roles: STAFF });
  if (!QUOTE_ID_RE.test(quoteId)) return INVALID;
  const cause = str(fd, "cause", 20) === "desistement" ? "desistement" : "commun-accord";
  const r = await changeInstaller({ quoteId, reason: str(fd, "reason", 600), cause, by: s.email }, { baseUrl: await publicBaseUrl() });
  if (!r.ok) return { ok: false, error: r.error };
  await audit("soumission.changement-installateur", { soumission: quoteId, cause }, { qui: s.email });
  revalidatePath(path(quoteId));
  return { ok: true, message: "Contrat annulé d’un commun accord ; le client est averti. Choisissez le nouvel installateur." };
}

const lineSchema = z.object({ label: z.string().min(1), amountCents: z.number().int() });

/** Avenant préparé par le propriétaire : l'installateur l'approuve, puis le client le signe, AVANT l'exécution. */
export async function createAvenantAction(quoteId: string, _prev: PaResult, fd: FormData): Promise<PaResult> {
  const s = await requireUser({ roles: STAFF });
  if (!QUOTE_ID_RE.test(quoteId)) return INVALID;
  const lines = [1, 2, 3, 4]
    .map((i) => ({ label: str(fd, `l${i}_label`, 160), cents: parseMoney(str(fd, `l${i}_amount`, 20)), minus: fd.get(`l${i}_minus`) === "1" }))
    .filter((l) => l.label || l.cents !== null)
    .map((l) => ({ label: l.label, amountCents: l.cents === null ? 0 : l.minus ? -Math.abs(l.cents) : l.cents }));
  if (!lines.every((l) => lineSchema.safeParse(l).success)) return { ok: false, error: "Chaque ligne a une description et un montant avant taxes." };
  const r = await createAvenant({ quoteId, by: s.email, draft: { reason: str(fd, "reason", 600), added: str(fd, "added", 1000), removed: str(fd, "removed", 1000), lines, scheduleEffect: str(fd, "schedule", 300) } }, { baseUrl: await publicBaseUrl() });
  if (!r.ok) return { ok: false, error: r.error };
  await audit("soumission.avenant", { soumission: quoteId, avenant: r.avenantId }, { qui: s.email });
  revalidatePath(path(quoteId));
  return { ok: true, message: "Avenant préparé : l’installateur l’approuve, puis le client le signe avant l’exécution." };
}
