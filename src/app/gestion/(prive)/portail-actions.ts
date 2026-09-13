"use server";

/* ==================================================================
   Chantier P — Server Actions de « Plans d'entretien » et « Créneaux ».
   Chacune : requireAdmin() → validation zod → écriture → refresh().
   Une action est joignable par un POST direct : la session est
   vérifiée ici, jamais seulement par l'affichage.
   ================================================================== */

import { refresh } from "next/cache";
import { z } from "zod";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { publicBaseUrl } from "@/lib/gestion/request";
import { ID_RE } from "@/lib/gestion/service";
import { addSlots, cancelMembership, enrollByOwner, removeSlot, savePlan, savePortalSettings, sendAvailabilityLink, sendPortalLink } from "@/lib/gestion/portail/service";
import { runPortalTick } from "@/lib/gestion/portail/tick";
import { HHMM_RE, MEMBERSHIP_ID_RE, PLAN_ID_RE, SLOT_ID_RE } from "@/lib/gestion/portail/types";

export type PortalActionResult = { ok: true; message?: string } | { ok: false; error: string } | undefined;

const INVALID = { ok: false as const, error: "Demande invalide." };
const str = (fd: FormData, k: string) => String(fd.get(k) ?? "").trim();
const firstIssue = (e: z.ZodError) => e.issues[0]?.message ?? "Demande invalide.";
const sent = (o: string | undefined) => (o === "envoye" ? "envoyé" : o === "simule" ? "simulé (développement)" : o ? o.replace(/-/g, " ") : "—");

/** « 249 », « 249,50 », « 1 249.50 $ » → cents ; vide → null (prix à fixer) ; invalide → NaN. */
function moneyCents(s: string): number | null {
  const t = s.replace(/[\s$ ]/g, "").replace(",", ".");
  if (!t) return null;
  if (!/^\d{1,6}(\.\d{1,2})?$/.test(t)) return Number.NaN;
  return Math.round(Number(t) * 100);
}
/** Pourcentage 0 à 100 (deux décimales) ; vide → null ; invalide → NaN. */
function percent(s: string): number | null {
  const t = s.replace(/[\s%]/g, "").replace(",", ".");
  if (!t) return null;
  const n = Number(t);
  return /^\d{1,3}(\.\d{1,2})?$/.test(t) && n >= 0 && n <= 100 ? Math.round(n * 100) / 100 : Number.NaN;
}

/* ---------------- Plans ---------------- */

export async function savePlanAction(id: string | undefined, _prev: PortalActionResult, fd: FormData): Promise<PortalActionResult> {
  const session = await requireAdmin();
  const p = z
    .object({
      id: z.string().regex(PLAN_ID_RE).optional(),
      name: z.string().min(2, "Donnez un nom au plan.").max(80, "Nom trop long (80 caractères)."),
      priceCents: z.number().int().positive("Le prix doit être plus grand que zéro.").max(10_000_000).nullable().refine((n) => n === null || Number.isFinite(n), "Prix invalide (ex. : 249,00)."),
      includes: z.array(z.string().max(160, "Une ligne « inclus » est trop longue (160 caractères).")).max(20, "20 lignes au plus."),
      commissionPercent: z.number().min(0).max(100).nullable().refine((n) => n === null || Number.isFinite(n), "Pourcentage invalide (0 à 100)."),
      active: z.boolean(),
    })
    .safeParse({
      id,
      name: str(fd, "name"),
      priceCents: moneyCents(str(fd, "price")),
      includes: str(fd, "includes").split(/\r?\n/).map((x) => x.trim()).filter(Boolean),
      commissionPercent: percent(str(fd, "percent")),
      active: fd.get("active") === "on",
    });
  if (!p.success) return { ok: false, error: firstIssue(p.error) };
  const { id: planId, ...input } = p.data;
  const r = await savePlan(input, session.email, planId);
  if (!r.ok) return { ok: false, error: r.error };
  refresh();
  return { ok: true, message: planId ? "Plan enregistré." : "Plan créé." };
}

export async function saveConditionsAction(_prev: PortalActionResult, fd: FormData): Promise<PortalActionResult> {
  const session = await requireAdmin();
  const p = z.object({ text: z.string().max(20_000, "Texte trop long (20 000 caractères).") }).safeParse({ text: String(fd.get("conditions") ?? "") });
  if (!p.success) return { ok: false, error: firstIssue(p.error) };
  await savePortalSettings({ conditionsText: p.data.text }, session.email);
  refresh();
  return { ok: true, message: p.data.text.trim() ? "Conditions enregistrées : l’adhésion en ligne est ouverte." : "Conditions retirées : l’adhésion en ligne est fermée." };
}

export async function savePortalSettingsAction(_prev: PortalActionResult, fd: FormData): Promise<PortalActionResult> {
  const session = await requireAdmin();
  const p = z
    .object({
      changeDeadlineHours: z.coerce.number().int("Nombre d’heures entier.").min(0).max(720),
      bookingLeadHours: z.coerce.number().int("Nombre d’heures entier.").min(0).max(720),
      visitLeadDays: z.coerce.number().int("Nombre de jours entier.").min(0).max(120),
      inviteClients: z.boolean(),
      generateVisits: z.boolean(),
    })
    .safeParse({ changeDeadlineHours: str(fd, "changeDeadlineHours"), bookingLeadHours: str(fd, "bookingLeadHours"), visitLeadDays: str(fd, "visitLeadDays"), inviteClients: fd.get("inviteClients") === "on", generateVisits: fd.get("generateVisits") === "on" });
  if (!p.success) return { ok: false, error: firstIssue(p.error) };
  await savePortalSettings(p.data, session.email);
  refresh();
  return { ok: true, message: "Réglages enregistrés." };
}

/* ---------------- Adhésions ---------------- */

export async function enrollAction(_prev: PortalActionResult, fd: FormData): Promise<PortalActionResult> {
  const session = await requireAdmin();
  const p = z
    .object({ jobId: z.string().regex(ID_RE, "Choisissez le job du client."), planId: z.string().regex(PLAN_ID_RE, "Choisissez le plan."), note: z.string().min(3, "Notez comment le client a consenti (ex. : au téléphone, le 3 mars).").max(300) })
    .safeParse({ jobId: str(fd, "jobId"), planId: str(fd, "planId"), note: str(fd, "note") });
  if (!p.success) return { ok: false, error: firstIssue(p.error) };
  const r = await enrollByOwner(p.data.jobId, p.data.planId, p.data.note, session.email, { baseUrl: await publicBaseUrl() });
  if (!r.ok) return { ok: false, error: r.error };
  refresh();
  return { ok: true, message: "Adhésion enregistrée ; le client reçoit une copie des conditions." };
}

export async function cancelMembershipAction(id: string, _prev: PortalActionResult, fd: FormData): Promise<PortalActionResult> {
  const session = await requireAdmin();
  const p = z.object({ id: z.string().regex(MEMBERSHIP_ID_RE), reason: z.string().min(3, "Indiquez la raison.").max(300) }).safeParse({ id, reason: str(fd, "reason") });
  if (!p.success) return { ok: false, error: firstIssue(p.error) };
  const r = await cancelMembership(p.data.id, p.data.reason, session.email);
  if (!r.ok) return { ok: false, error: r.error };
  refresh();
  return { ok: true, message: "Adhésion annulée (conservée avec sa raison)." };
}

/* ---------------- Créneaux ---------------- */

export async function addSlotsAction(_prev: PortalActionResult, fd: FormData): Promise<PortalActionResult> {
  const session = await requireAdmin();
  const p = z
    .object({
      installerId: z.string().regex(ID_RE),
      day: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Choisissez la date."),
      start: z.string().regex(HHMM_RE, "Heure de début invalide."),
      end: z.string().regex(HHMM_RE, "Heure de fin invalide."),
      repeatWeeks: z.coerce.number().int().min(0).max(12),
    })
    .safeParse({ installerId: str(fd, "installerId"), day: str(fd, "day"), start: str(fd, "start").slice(0, 5), end: str(fd, "end").slice(0, 5), repeatWeeks: str(fd, "repeatWeeks") || "0" });
  if (!p.success) return { ok: false, error: firstIssue(p.error) };
  const r = await addSlots(p.data.installerId, p.data, session.email);
  if (!r.ok) return { ok: false, error: r.error };
  refresh();
  return { ok: true, message: `${r.added} moment${r.added > 1 ? "s" : ""} publié${r.added > 1 ? "s" : ""}${r.skipped ? ` (${r.skipped} ignoré${r.skipped > 1 ? "s" : ""} : chevauchement ou date passée)` : ""}.` };
}

export async function removeSlotAction(slotId: unknown): Promise<PortalActionResult> {
  const session = await requireAdmin();
  const p = z.string().regex(SLOT_ID_RE).safeParse(slotId);
  if (!p.success) return INVALID;
  const r = await removeSlot(null, p.data, session.email);
  if (!r.ok) return { ok: false, error: r.error };
  refresh();
  return { ok: true, message: "Moment retiré." };
}

export async function sendAvailabilityLinkAction(installerId: unknown): Promise<PortalActionResult> {
  const session = await requireAdmin();
  const p = z.string().regex(ID_RE).safeParse(installerId);
  if (!p.success) return INVALID;
  const r = await sendAvailabilityLink(p.data, session.email, { baseUrl: await publicBaseUrl() });
  if (!r.ok) return { ok: false, error: r.error };
  refresh();
  return { ok: true, message: `Lien envoyé : courriel ${sent(r.email)}, texto ${sent(r.sms)}.` };
}

export async function sendPortalLinkAction(jobId: unknown): Promise<PortalActionResult> {
  const session = await requireAdmin();
  const p = z.string().regex(ID_RE).safeParse(jobId);
  if (!p.success) return INVALID;
  const r = await sendPortalLink(p.data, session.email, { baseUrl: await publicBaseUrl() });
  if (!r.ok) return { ok: false, error: r.error };
  refresh();
  return { ok: true, message: `Espace envoyé au client : courriel ${sent(r.email)}, texto ${sent(r.sms)}.` };
}

export async function runPortalTickAction(): Promise<PortalActionResult> {
  await requireAdmin();
  const r = await runPortalTick({ baseUrl: await publicBaseUrl() });
  refresh();
  return { ok: true, message: `Passage fait : ${r.visits} visite(s) créée(s), ${r.invites} invitation(s), ${r.attached} adhésion(s) rattachée(s).` };
}
