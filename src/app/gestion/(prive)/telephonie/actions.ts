"use server";

/* ==================================================================
   Chantier T — Server Actions de la téléphonie. Chacune :
   requireAdmin() → validation (zod, expressions des identifiants) →
   limite de fréquence quand l'action coûte (appel, texto) → écriture.
   Une action est joignable par un POST direct : la session est
   vérifiée ici, jamais seulement par l'affichage.
   ================================================================== */

import { refresh } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { requireAdmin, requireUser } from "@/lib/gestion/auth/dal";
// Chantier V : appel masqué ouvert aux vendeurs, pour LEURS clients seulement.
import { mayCall, mayCallTarget } from "@/lib/gestion/equipe/garde";
import { createLimiter } from "@/lib/gestion/rate-limit";
import { CLIENT_ID_RE } from "@/lib/gestion/crm/types";
import { CONVERSATION_ID_RE } from "@/lib/textos/store";
import { createCampaign, deleteDraft, launchCampaign, MESSAGE_MAX, saveCampaign, sendCampaignTest, setCampaignPaused } from "@/lib/telephonie/campaigns";
import { getCallView, startMaskedCall, type CallView } from "@/lib/telephonie/masked-call";
import { retryRecording, setExpressConsent, updateSettings } from "@/lib/telephonie/settings";
import { CALL_ID_RE, CAMPAIGN_ID_RE, HHMM_RE, LEAD_ID_RE, RECORDING_ID_RE, SLOT_ID_RE } from "@/lib/telephonie/store";

export type TelActionResult = { ok: true; message?: string } | { ok: false; error: string } | undefined;

const INVALID = { ok: false as const, error: "Demande invalide." };
const str = (fd: FormData, k: string) => String(fd.get(k) ?? "").trim();
const intOf = (fd: FormData, k: string) => Number(String(fd.get(k) ?? "").replace(",", "."));

/** Appels : 8 par 10 minutes et par session ; textos de test : 5 par 10 minutes ; lancements : 3 par heure. */
const callLimiter = createLimiter({ limit: 8, windowMs: 10 * 60_000 });
const testLimiter = createLimiter({ limit: 5, windowMs: 10 * 60_000 });
const launchLimiter = createLimiter({ limit: 3, windowMs: 60 * 60_000 });
const pollLimiter = createLimiter({ limit: 240, windowMs: 10 * 60_000 });

/* ---------------- Appel masqué ---------------- */

const targetSchema = z.discriminatedUnion("kind", [
  z.object({ kind: z.literal("client"), id: z.string().regex(CLIENT_ID_RE) }),
  z.object({ kind: z.literal("conversation"), id: z.string().regex(CONVERSATION_ID_RE) }),
  z.object({ kind: z.literal("lead"), id: z.string().regex(LEAD_ID_RE) }),
]);

export async function startMaskedCallAction(target: unknown): Promise<{ ok: true; view: CallView } | { ok: false; error: string }> {
  const session = await requireUser(); // Chantier V
  const p = targetSchema.safeParse(target);
  if (!p.success) return INVALID;
  if (!(await mayCallTarget(session, p.data))) return INVALID;
  if (!callLimiter.hit(session.email)) return { ok: false, error: "Trop d’appels lancés en peu de temps. Réessayez dans quelques minutes." };
  return startMaskedCall(p.data, session.email);
}

export async function maskedCallStatusAction(id: unknown): Promise<{ ok: true; view: CallView } | { ok: false; error: string }> {
  const session = await requireUser(); // Chantier V
  const p = z.string().regex(CALL_ID_RE).safeParse(id);
  if (!p.success) return INVALID;
  if (!(await mayCall(session, p.data))) return { ok: false, error: "Appel introuvable." };
  if (!pollLimiter.hit(session.email)) return { ok: false, error: "Trop de demandes." };
  const view = await getCallView(p.data);
  return view ? { ok: true, view } : { ok: false, error: "Appel introuvable." };
}

/* ---------------- Réglages ---------------- */

export async function saveCallSettingsAction(_prev: TelActionResult, fd: FormData): Promise<TelActionResult> {
  const session = await requireAdmin();
  await updateSettings("calls", { record: fd.get("record") === "on" }, session.email);
  refresh();
  return { ok: true, message: fd.get("record") === "on" ? "Les appels masqués seront enregistrés." : "Les appels masqués ne sont pas enregistrés." };
}

const slotSchema = z.object({
  id: z.string().regex(SLOT_ID_RE),
  label: z.string().trim().min(1).max(40),
  start: z.string().regex(HHMM_RE),
  end: z.string().regex(HHMM_RE),
  days: z.array(z.number().int().min(0).max(6)).min(1).max(7),
});

export async function saveSpeedSettingsAction(_prev: TelActionResult, fd: FormData): Promise<TelActionResult> {
  const session = await requireAdmin();
  let slots: unknown;
  try {
    slots = JSON.parse(String(fd.get("slots") ?? "[]"));
  } catch {
    return INVALID;
  }
  const p = z
    .object({
      enabled: z.boolean(),
      text: z.string().trim().min(10, "Écrivez le texto (au moins quelques mots).").max(480, "Texto trop long (480 caractères au plus)."),
      delaySeconds: z.number().int().min(0).max(60),
      quietStart: z.number().int().min(0).max(23),
      quietEnd: z.number().int().min(0).max(23),
      ownerAlert: z.boolean(),
      callLinkMinutes: z.number().int().min(5).max(720),
      horizonDays: z.number().int().min(1).max(14),
      linkDays: z.number().int().min(1).max(30),
      slots: z.array(slotSchema).min(1, "Gardez au moins un créneau de rappel.").max(8),
    })
    .safeParse({
      enabled: fd.get("enabled") === "on",
      text: str(fd, "text"),
      delaySeconds: intOf(fd, "delaySeconds"),
      quietStart: intOf(fd, "quietStart"),
      quietEnd: intOf(fd, "quietEnd"),
      ownerAlert: fd.get("ownerAlert") === "on",
      callLinkMinutes: intOf(fd, "callLinkMinutes"),
      horizonDays: intOf(fd, "horizonDays"),
      linkDays: intOf(fd, "linkDays"),
      slots,
    });
  if (!p.success) return { ok: false, error: p.error.issues[0]?.message ?? "Vérifiez les réglages." };
  if (p.data.slots.some((s) => s.end <= s.start)) return { ok: false, error: "Chaque créneau doit finir après son début." };
  if (!/\{lien\}/i.test(p.data.text)) return { ok: false, error: "Gardez {lien} dans le texto : c’est le lien pour choisir le moment du rappel." };
  await updateSettings("speed", p.data, session.email);
  refresh();
  return { ok: true, message: p.data.enabled ? "Réglages enregistrés : la réponse en 60 secondes est active." : "Réglages enregistrés (réponse en 60 secondes désactivée)." };
}

export async function saveTranscriptionSettingsAction(_prev: TelActionResult, fd: FormData): Promise<TelActionResult> {
  const session = await requireAdmin();
  const p = z
    .object({ enabled: z.boolean(), retention: z.enum(["apres-transcription", "jours"]), retentionDays: z.number().int().min(1).max(365) })
    .safeParse({ enabled: fd.get("enabled") === "on", retention: str(fd, "retention"), retentionDays: intOf(fd, "retentionDays") });
  if (!p.success) return { ok: false, error: "Vérifiez la durée de conservation (1 à 365 jours)." };
  await updateSettings("transcription", p.data, session.email);
  refresh();
  return { ok: true, message: "Réglages de transcription enregistrés." };
}

export async function saveCampaignSettingsAction(_prev: TelActionResult, fd: FormData): Promise<TelActionResult> {
  const session = await requireAdmin();
  const days = fd.getAll("days").map((d) => Number(d));
  const p = z
    .object({ startHour: z.number().int().min(0).max(23), endHour: z.number().int().min(1).max(24), days: z.array(z.number().int().min(0).max(6)).min(1, "Choisissez au moins un jour d’envoi."), perTick: z.number().int().min(1).max(60) })
    .safeParse({ startHour: intOf(fd, "startHour"), endHour: intOf(fd, "endHour"), days, perTick: intOf(fd, "perTick") });
  if (!p.success) return { ok: false, error: p.error.issues[0]?.message ?? "Vérifiez les heures d’envoi." };
  if (p.data.endHour <= p.data.startHour) return { ok: false, error: "L’heure de fin doit suivre l’heure de début." };
  await updateSettings("campaigns", p.data, session.email);
  refresh();
  return { ok: true, message: "Heures d’envoi enregistrées." };
}

/* ---------------- Consentement et transcriptions ---------------- */

export async function setExpressConsentAction(_prev: TelActionResult, fd: FormData): Promise<TelActionResult> {
  const session = await requireAdmin();
  const p = z.object({ clientId: z.string().regex(CLIENT_ID_RE), on: z.enum(["1", "0"]), note: z.string().max(300) }).safeParse({ clientId: str(fd, "clientId"), on: str(fd, "on"), note: str(fd, "note") });
  if (!p.success) return INVALID;
  const r = await setExpressConsent(p.data.clientId, p.data.on === "1", p.data.note, session.email);
  if (r.ok) refresh();
  return r;
}

export async function retryTranscriptionAction(id: unknown): Promise<TelActionResult> {
  await requireAdmin();
  const p = z.string().regex(RECORDING_ID_RE).safeParse(id);
  if (!p.success) return INVALID;
  const r = await retryRecording(p.data);
  if (r.ok) refresh();
  return r;
}

/* ---------------- Campagnes ---------------- */

const campaignId = z.string().regex(CAMPAIGN_ID_RE);
const list = (v: string) =>
  v
    .split(/[,;\n]+/)
    .map((x) => x.trim())
    .filter(Boolean)
    .map((x) => x.slice(0, 60));
const months = (v: string) => (v === "" ? null : Number(v));

export async function createCampaignAction(_prev: TelActionResult, fd: FormData): Promise<TelActionResult> {
  const session = await requireAdmin();
  const p = z.string().trim().min(1, "Donnez un nom à la campagne.").max(80).safeParse(str(fd, "name"));
  if (!p.success) return { ok: false, error: p.error.issues[0]?.message ?? "Demande invalide." };
  const r = await createCampaign(p.data, session.email);
  if (!r.ok) return r;
  redirect(`/gestion/telephonie/campagnes/${r.id}`);
}

export async function saveCampaignAction(id: string, _prev: TelActionResult, fd: FormData): Promise<TelActionResult> {
  await requireAdmin();
  const p = z
    .object({
      id: campaignId,
      name: z.string().trim().min(1, "Donnez un nom à la campagne.").max(80),
      message: z.string().max(MESSAGE_MAX, `Message trop long (${MESSAGE_MAX} caractères au plus).`),
      from: z.number().int().min(0).max(240).nullable(),
      to: z.number().int().min(0).max(240).nullable(),
    })
    .safeParse({ id, name: str(fd, "name"), message: str(fd, "message"), from: months(str(fd, "from")), to: months(str(fd, "to")) });
  if (!p.success) return { ok: false, error: p.error.issues[0]?.message ?? "Vérifiez la campagne." };
  const r = await saveCampaign(p.data.id, { name: p.data.name, message: p.data.message, segment: { installedFromMonths: p.data.from, installedToMonths: p.data.to, cities: list(str(fd, "cities")), brands: list(str(fd, "brands")) } });
  if (!r.ok) return r;
  refresh();
  return { ok: true, message: "Campagne enregistrée : l’aperçu est à jour." };
}

export async function testCampaignAction(id: unknown): Promise<TelActionResult> {
  const session = await requireAdmin();
  const p = campaignId.safeParse(id);
  if (!p.success) return INVALID;
  if (!testLimiter.hit(session.email)) return { ok: false, error: "Trop de tests en peu de temps. Réessayez dans quelques minutes." };
  const r = await sendCampaignTest(p.data);
  refresh();
  return r.ok ? { ok: true, message: r.message } : r;
}

/** Le seul chemin qui lance une campagne : clic explicite, case cochée et nombre de destinataires confirmé. */
export async function launchCampaignAction(id: string, _prev: TelActionResult, fd: FormData): Promise<TelActionResult> {
  const session = await requireAdmin();
  const p = z.object({ id: campaignId, count: z.number().int().min(1).max(5000), confirm: z.literal("oui") }).safeParse({ id, count: intOf(fd, "count"), confirm: str(fd, "confirm") });
  if (!p.success) return { ok: false, error: "Cochez la case de confirmation pour lancer l’envoi." };
  if (!launchLimiter.hit(session.email)) return { ok: false, error: "Trop de lancements en peu de temps." };
  const r = await launchCampaign(p.data.id, p.data.count, session.email);
  if (!r.ok) return r;
  refresh();
  return { ok: true, message: r.message };
}

export async function pauseCampaignAction(id: unknown, paused: unknown): Promise<TelActionResult> {
  await requireAdmin();
  const p = z.object({ id: campaignId, paused: z.boolean() }).safeParse({ id, paused });
  if (!p.success) return INVALID;
  const r = await setCampaignPaused(p.data.id, p.data.paused);
  if (r.ok) refresh();
  return r.ok ? { ok: true, message: r.message } : r;
}

export async function deleteCampaignAction(id: unknown): Promise<TelActionResult> {
  await requireAdmin();
  const p = campaignId.safeParse(id);
  if (!p.success) return INVALID;
  const r = await deleteDraft(p.data);
  if (!r.ok) return r;
  redirect("/gestion/telephonie/campagnes");
}
