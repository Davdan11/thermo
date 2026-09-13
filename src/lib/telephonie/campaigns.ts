/* ==================================================================
   Chantier T — campagnes de textos aux anciens clients.

   Brouillon → aperçu (qui recevra, qui est exclu et pourquoi) → envoi
   test au propriétaire → envoi SEULEMENT sur clic explicite (le nombre
   de destinataires affiché doit être confirmé). Le robot n'envoie que
   les campagnes lancées par ce clic, jamais un brouillon.

   Chaque texto : identification de l'entreprise et « Répondez STOP ».
   Consentement (LCAP, consent.ts) et désabonnement revérifiés juste
   avant chaque envoi. Heures et jours d'envoi réglables ; débit
   limité (au plus N textos par passage de 5 minutes, une seconde
   d'écart). Rapport : envoyés, réponses, STOP.
   ================================================================== */

import { sendOwnerSms } from "@/lib/gestion/automatisations/send";
import type { ClientComputed } from "@/lib/gestion/crm/model";
import { freshIndex } from "@/lib/gestion/crm/service";
import { zoned } from "@/lib/gestion/crm/time";
import { readTextos } from "@/lib/textos/store";
import type { Conversation } from "@/lib/textos/types";
import { maskPhone } from "@/lib/textos/phone";
import { consentOf, type ConsentState } from "./consent";
import { readConsents } from "@/lib/consentements/store"; // Conformité C2 : case 5.3 des formulaires
import { promotionsConsent } from "@/lib/consentements/commercial";
import { MESSAGE_MAX, renderCampaignText } from "./plan";
import { sendTrackedSms } from "./sms";
import { CAMPAIGN_ID_RE, mutateTelephonie, newTelId, readTelephonie } from "./store";
import type { Campaign, CampaignSegment, CampaignSettings, ExpressConsent } from "./types";

export { MESSAGE_MAX, renderCampaignText };
export const EMPTY_SEGMENT: CampaignSegment = { installedFromMonths: null, installedToMonths: null, cities: [], brands: [] };

/* ---------------- Segment (pur) ---------------- */

export const norm = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

/** Dernière installation terminée d'un client (date et marque). */
export function lastInstall(c: ClientComputed): { at: string; brand: string | null } | null {
  const done = c.b.jobs
    .filter((j) => j.status === "termine")
    .map((j) => ({ at: j.completedAt ?? [...j.audit].reverse().find((a) => a.action === "marquer terminé")?.at ?? j.updatedAt, brand: j.brand }))
    .sort((a, b) => b.at.localeCompare(a.at));
  return done[0] ?? null;
}

export const monthsSince = (iso: string, now: Date) => (now.getTime() - Date.parse(iso)) / (30.4375 * 86_400_000);

export interface SegmentRow {
  clientId: string;
  firstName: string;
  city: string;
  /** Serveur seulement (retiré des vues). */
  phone: string;
  installedAt: string | null;
  brand: string | null;
  consent: ConsentState;
  reason?: string;
}

export function inSegment(c: ClientComputed, seg: CampaignSegment, now: Date): boolean {
  const install = lastInstall(c);
  const bounded = seg.installedFromMonths !== null || seg.installedToMonths !== null;
  if (bounded) {
    if (!install) return false;
    const m = monthsSince(install.at, now);
    if (seg.installedFromMonths !== null && m < seg.installedFromMonths) return false;
    if (seg.installedToMonths !== null && m > seg.installedToMonths) return false;
  }
  if (seg.cities.length && !seg.cities.map(norm).includes(norm(c.b.city))) return false;
  if (seg.brands.length) {
    const brands = new Set(c.b.jobs.filter((j) => j.status === "termine" && j.brand).map((j) => norm(j.brand!)));
    if (!seg.brands.some((b) => brands.has(norm(b)))) return false;
  }
  return true;
}

/** `formOf` : Conformité C2, case 5.3 des formulaires (et son retrait) d'un client. */
export function segmentRows(clients: ClientComputed[], conversations: Record<string, Conversation>, consents: Record<string, ExpressConsent>, seg: CampaignSegment, now: Date, formOf: (c: ClientComputed) => import("./consent").FormConsent | null = () => null): { included: SegmentRow[]; excluded: SegmentRow[] } {
  const included: SegmentRow[] = [];
  const excluded: SegmentRow[] = [];
  const seen = new Set<string>();
  for (const c of clients) {
    if (!inSegment(c, seg, now)) continue;
    const install = lastInstall(c);
    const phone = c.b.phones[0] ?? "";
    const optedOut = c.b.phones.some((p) => conversations[p]?.optedOut);
    const consent = consentOf(c.b, consents, optedOut, now, formOf(c));
    const row: SegmentRow = { clientId: c.b.id, firstName: c.b.firstName || "Sans nom", city: c.b.city, phone, installedAt: install?.at ?? null, brand: install?.brand ?? null, consent };
    if (!phone) excluded.push({ ...row, reason: "Aucun numéro" });
    else if (seen.has(phone)) continue;
    else if (!consent.ok) excluded.push({ ...row, reason: consent.reason });
    else included.push(row);
    if (phone) seen.add(phone);
  }
  return { included, excluded };
}

/** Heures et jours d'envoi (heure de Montréal). */
export function inSendWindow(now: Date, s: CampaignSettings): boolean {
  const z = zoned(now);
  return s.days.includes(z.weekday) && z.hour >= s.startHour && z.hour < s.endHour;
}

/* ---------------- Rapport (pur) ---------------- */

export interface CampaignReport {
  total: number;
  sent: number;
  waiting: number;
  failed: number;
  excluded: number;
  replies: number;
  stops: number;
}

export function campaignReport(c: Campaign, conversations: Record<string, Conversation>): CampaignReport {
  const r: CampaignReport = { total: c.recipients.length, sent: 0, waiting: 0, failed: 0, excluded: 0, replies: 0, stops: 0 };
  for (const x of c.recipients) {
    if (x.status === "envoye" || x.status === "simule") r.sent++;
    else if (x.status === "attente") r.waiting++;
    else if (x.status === "echec") r.failed++;
    else r.excluded++;
    if (!x.sentAt) continue;
    const conv = conversations[x.phone];
    const after = conv?.messages.filter((m) => m.dir === "in" && m.at >= x.sentAt!) ?? [];
    if (after.some((m) => !m.keyword)) r.replies++;
    if (after.some((m) => m.keyword === "stop") || (conv?.optedOut && (conv.optChangedAt ?? "") >= x.sentAt)) r.stops++;
  }
  return r;
}

/* ---------------- Écritures ---------------- */

export type CampaignResult = { ok: true; id: string; message?: string } | { ok: false; error: string };

export async function createCampaign(name: string, by: string, now = new Date()): Promise<CampaignResult> {
  const clean = name.trim().slice(0, 80);
  if (!clean) return { ok: false, error: "Donnez un nom à la campagne." };
  const id = newTelId("k");
  await mutateTelephonie((d) => {
    d.campaigns.push({ id, name: clean, createdAt: now.toISOString(), createdBy: by, updatedAt: now.toISOString(), status: "brouillon", segment: { ...EMPTY_SEGMENT, cities: [], brands: [] }, message: "", recipients: [] });
    return { result: undefined, changed: true };
  });
  return { ok: true, id };
}

export async function saveCampaign(id: string, input: { name: string; segment: CampaignSegment; message: string }, now = new Date()): Promise<CampaignResult> {
  if (!CAMPAIGN_ID_RE.test(id)) return { ok: false, error: "Campagne introuvable." };
  const message = input.message.replace(/\r\n?/g, "\n").trim();
  if (message.length > MESSAGE_MAX) return { ok: false, error: `Message trop long (${MESSAGE_MAX} caractères au plus).` };
  const { installedFromMonths: from, installedToMonths: to } = input.segment;
  if (from !== null && to !== null && from > to) return { ok: false, error: "La période d’installation est inversée (de… à…)." };
  return mutateTelephonie<CampaignResult>((d) => {
    const c = d.campaigns.find((x) => x.id === id);
    if (!c) return { result: { ok: false, error: "Campagne introuvable." }, changed: false };
    if (c.status !== "brouillon") return { result: { ok: false, error: "Campagne déjà lancée : elle ne se modifie plus." }, changed: false };
    c.name = input.name.trim().slice(0, 80) || c.name;
    c.segment = { installedFromMonths: from, installedToMonths: to, cities: input.segment.cities.slice(0, 30), brands: input.segment.brands.slice(0, 30) };
    c.message = message;
    c.updatedAt = now.toISOString();
    return { result: { ok: true, id, message: "Campagne enregistrée." }, changed: true };
  });
}

export async function deleteDraft(id: string): Promise<CampaignResult> {
  return mutateTelephonie<CampaignResult>((d) => {
    const i = d.campaigns.findIndex((x) => x.id === id);
    if (i < 0) return { result: { ok: false, error: "Campagne introuvable." }, changed: false };
    if (d.campaigns[i].status !== "brouillon") return { result: { ok: false, error: "Seul un brouillon se supprime." }, changed: false };
    d.campaigns.splice(i, 1);
    return { result: { ok: true, id }, changed: true };
  });
}

export async function previewCampaign(id: string, now = new Date()): Promise<{ campaign: Campaign; included: SegmentRow[]; excluded: SegmentRow[] } | null> {
  if (!CAMPAIGN_ID_RE.test(id)) return null;
  const [data, index, textos] = await Promise.all([readTelephonie(), freshIndex(now), readTextos()]);
  const campaign = data.campaigns.find((c) => c.id === id);
  if (!campaign) return null;
  // Conformité C2 : l'aperçu applique la même règle que l'envoi (case 5.3 des formulaires comprise).
  const cons = await readConsents().catch(() => null);
  return { campaign, ...segmentRows(index.clients, textos.conversations, data.consents, campaign.segment, now, (c) => (cons ? promotionsConsent(cons, { emails: c.b.emails, phones: c.b.phones }, now) : null)) };
}

/** Envoi test au propriétaire (ALERT_SMS_TO) : le texte exact, avec « Prénom ». */
export async function sendCampaignTest(id: string, now = new Date()): Promise<CampaignResult> {
  const c = CAMPAIGN_ID_RE.test(id) ? (await readTelephonie()).campaigns.find((x) => x.id === id) : undefined;
  if (!c) return { ok: false, error: "Campagne introuvable." };
  if (!c.message.trim()) return { ok: false, error: "Écrivez d’abord le message." };
  const out = await sendOwnerSms(`[TEST] ${renderCampaignText(c.message, "Prénom")}`, "campagne (test)");
  await mutateTelephonie((d) => {
    const x = d.campaigns.find((y) => y.id === id);
    if (!x) return { result: undefined, changed: false };
    x.test = { at: now.toISOString(), status: out };
    return { result: undefined, changed: true };
  });
  if (out === "envoye") return { ok: true, id, message: "Test envoyé sur votre cellulaire (ALERT_SMS_TO)." };
  if (out === "simule") return { ok: true, id, message: "Test simulé (développement)." };
  if (out === "non-configure") return { ok: false, error: "ALERT_SMS_TO ou Twilio n’est pas configuré : impossible d’envoyer le test." };
  return { ok: false, error: "Le test n’est pas parti (Twilio a refusé)." };
}

/** Le clic « Envoyer » : fige la liste. `confirmCount` doit être le nombre affiché à l'aperçu. */
export async function launchCampaign(id: string, confirmCount: number, by: string, now = new Date()): Promise<CampaignResult> {
  const p = await previewCampaign(id, now);
  if (!p) return { ok: false, error: "Campagne introuvable." };
  if (p.campaign.status !== "brouillon") return { ok: false, error: "Campagne déjà lancée." };
  if (!p.campaign.message.trim()) return { ok: false, error: "Écrivez d’abord le message." };
  if (!p.included.length) return { ok: false, error: "Aucun destinataire dans ce segment." };
  if (confirmCount !== p.included.length) return { ok: false, error: `Le segment compte maintenant ${p.included.length} destinataires : revoyez l’aperçu puis confirmez de nouveau.` };
  return mutateTelephonie<CampaignResult>((d) => {
    const c = d.campaigns.find((x) => x.id === id);
    if (!c || c.status !== "brouillon") return { result: { ok: false, error: "Campagne déjà lancée." }, changed: false };
    c.recipients = p.included.map((r) => ({ clientId: r.clientId, phone: r.phone, firstName: r.firstName, status: "attente" as const }));
    c.status = "envoi";
    c.launchedAt = now.toISOString();
    c.launchedBy = by;
    c.updatedAt = now.toISOString();
    return { result: { ok: true, id, message: `Envoi lancé : ${c.recipients.length} textos, au rythme réglé, pendant les heures d’envoi.` }, changed: true };
  });
}

export async function setCampaignPaused(id: string, paused: boolean, now = new Date()): Promise<CampaignResult> {
  return mutateTelephonie<CampaignResult>((d) => {
    const c = d.campaigns.find((x) => x.id === id);
    if (!c) return { result: { ok: false, error: "Campagne introuvable." }, changed: false };
    if (paused && c.status === "envoi") c.status = "pause";
    else if (!paused && c.status === "pause" && c.launchedAt) c.status = "envoi";
    else return { result: { ok: false, error: "Rien à changer." }, changed: false };
    c.updatedAt = now.toISOString();
    return { result: { ok: true, id, message: paused ? "Campagne en pause." : "Envoi repris." }, changed: true };
  });
}

/* ---------------- Robot ---------------- */

export interface CampaignTick {
  sent: number;
  excluded: number;
  failed: number;
  skipped: string | null;
}

const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));

/** Envoie les textos des campagnes LANCÉES (status « envoi », launchedAt posé). Jamais un brouillon. */
export async function processCampaigns(now = new Date(), opts: { gapMs?: number } = {}): Promise<CampaignTick> {
  const out: CampaignTick = { sent: 0, excluded: 0, failed: 0, skipped: null };
  const data = await readTelephonie();
  const running = data.campaigns.filter((c) => c.status === "envoi" && c.launchedAt && c.launchedBy && c.recipients.some((r) => r.status === "attente"));
  // Campagnes finies : fermées.
  await mutateTelephonie((d) => {
    let n = 0;
    for (const c of d.campaigns) if (c.status === "envoi" && !c.recipients.some((r) => r.status === "attente")) {
      c.status = "terminee";
      c.finishedAt = now.toISOString();
      n++;
    }
    return { result: n, changed: n > 0 };
  });
  if (!running.length) return { ...out, skipped: "aucune" };
  if (!inSendWindow(now, data.settings.campaigns)) return { ...out, skipped: "hors-heures" };

  // Conformité C2 : case 5.3 des formulaires (et son retrait) ajoutée aux règles de consentement, revérifiée juste avant chaque envoi.
  const [index, textos, consentData] = await Promise.all([freshIndex(now), readTextos(), readConsents().catch(() => null)]);
  const formOf = (c: ClientComputed) => (consentData ? promotionsConsent(consentData, { emails: c.b.emails, phones: c.b.phones }, now) : null);
  let budget = data.settings.campaigns.perTick;
  for (const camp of running) {
    for (const r of camp.recipients.filter((x) => x.status === "attente")) {
      if (budget <= 0) break;
      // Réservation : la personne passe à « envoi en cours » (envoye/echec/exclu ensuite), jamais deux fois.
      const fresh = await mutateTelephonie((d) => {
        const c = d.campaigns.find((x) => x.id === camp.id);
        const x = c?.recipients.find((y) => y.clientId === r.clientId && y.phone === r.phone);
        if (!c || c.status !== "envoi" || !x || x.status !== "attente") return { result: false, changed: false };
        x.status = "echec";
        x.reason = "Envoi en cours";
        return { result: true, changed: true };
      });
      if (!fresh) continue;
      const client = index.byId.get(r.clientId);
      const optedOut = Boolean(textos.conversations[r.phone]?.optedOut);
      const consent = client ? consentOf(client.b, data.consents, optedOut, now, formOf(client)) : null;
      let status: Campaign["recipients"][number]["status"];
      let reason: string | undefined;
      let messageId: string | undefined;
      if (!consent?.ok) {
        status = "exclu";
        reason = consent?.reason ?? "Client introuvable";
        out.excluded++;
      } else {
        budget--;
        const sent = await sendTrackedSms(r.phone, renderCampaignText(camp.message, r.firstName), { by: `campagne « ${camp.name} »`, event: "campagne", now });
        if (sent.ok) {
          status = sent.status === "simule" ? "simule" : "envoye";
          messageId = sent.messageId;
          out.sent++;
        } else {
          status = sent.blocked ? "exclu" : "echec";
          reason = sent.error;
          if (sent.blocked) out.excluded++;
          else {
            out.failed++;
            console.warn(`[telephonie] campagne ${camp.id} : texto refusé pour ${maskPhone(r.phone)}.`);
          }
        }
        if (opts.gapMs !== 0) await wait(opts.gapMs ?? 1100);
      }
      await mutateTelephonie((d) => {
        const x = d.campaigns.find((c) => c.id === camp.id)?.recipients.find((y) => y.clientId === r.clientId && y.phone === r.phone);
        if (!x) return { result: undefined, changed: false };
        x.status = status;
        if (reason) x.reason = reason;
        else delete x.reason;
        if (status === "envoye" || status === "simule") x.sentAt = new Date().toISOString();
        if (messageId) x.messageId = messageId;
        return { result: undefined, changed: true };
      });
    }
  }
  return out;
}
