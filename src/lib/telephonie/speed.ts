/* ==================================================================
   Chantier T — réponse en 60 secondes (speed-to-lead).

   À chaque nouvelle demande (soumission, ThermoMatch, rendez-vous,
   contact) avec un numéro :
     1. alerte texto au propriétaire (ALERT_SMS_TO) : « Nouvelle
        demande : Julie T., Laval. Appuie pour l'appeler maintenant »,
        avec un lien signé et à durée limitée (/appel/<jeton>) qui lance
        l'appel masqué ;
     2. texto au client en moins d'une minute (délai réglable de 0 à
        60 s) : remerciement, nom de l'entreprise, lien pour choisir son
        moment de rappel (/rappel/<jeton>), « Répondez STOP… ». La nuit
        (heures silencieuses), il attend la fin de la plage (8 h).
   C'est une réponse à une demande du client (exemption de la LCAP),
   mais un numéro désabonné ne reçoit rien.
   Le texto part aussitôt (after() de la route) ; le robot des
   5 minutes envoie ceux qui attendaient la fin de la nuit.
   Désactivé par défaut : à activer dans /gestion/telephonie/reglages.
   ================================================================== */

import { sendOwnerSms } from "@/lib/gestion/automatisations/send";
import { phoneOf } from "@/lib/gestion/crm/identity";
import { isOptedOutNumber } from "@/lib/textos/store";
import { maskPhone } from "@/lib/textos/phone";
import { taskForPhone } from "./crm-link";
import { checkLink, makeLink } from "./links";
import { ownerAlertText, planSendAt, renderSpeedText, shortLabel, slotOptions, OPTION_ID_RE, type SlotOption } from "./plan";
import { sendTrackedSms } from "./sms";
import { LEAD_ID_RE, mutateTelephonie, newTelId, readTelephonie } from "./store";
import type { SpeedKind, SpeedLead } from "./types";

export interface NewLeadInput {
  kind: SpeedKind;
  journalId: string;
  phone?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  city?: string | null;
}

const clip = (v: string | null | undefined, n: number) => (v ?? "").trim().replace(/\s+/g, " ").slice(0, n);
const firstWord = (v: string | null | undefined) => clip(v, 40).split(" ")[0] ?? "";

/** Enregistre la demande (une seule fois par ligne du journal). null si la fonction est désactivée. */
export async function registerLead(input: NewLeadInput, now = new Date()): Promise<SpeedLead | null> {
  const phone = phoneOf(input.phone ?? "") ?? null;
  return mutateTelephonie<SpeedLead | null>((data) => {
    const s = data.settings.speed;
    if (!s.enabled) return { result: null, changed: false };
    const existing = data.leads.find((l) => l.journalId === input.journalId);
    if (existing) return { result: null, changed: false };
    const lead: SpeedLead = {
      id: newTelId("l"),
      journalId: input.journalId.slice(0, 64),
      kind: input.kind,
      createdAt: now.toISOString(),
      phone,
      firstName: firstWord(input.firstName),
      lastName: clip(input.lastName, 60),
      city: clip(input.city, 60),
      sms: { status: phone ? "attente" : "sans-numero", sendAt: planSendAt(now, s).toISOString() },
      owner: { status: phone && s.ownerAlert ? "attente" : "desactive" },
    };
    data.leads.push(lead);
    return { result: lead, changed: true };
  });
}

async function alertOwner(lead: SpeedLead, now: Date): Promise<void> {
  const s = (await readTelephonie()).settings.speed;
  const link = await makeLink("appel", lead.id, new Date(now.getTime() + s.callLinkMinutes * 60_000));
  const out = await sendOwnerSms(ownerAlertText(shortLabel(lead.firstName, lead.lastName, lead.city), link), "réponse en 60 s");
  const status: SpeedLead["owner"]["status"] = out === "envoye" || out === "simule" || out === "non-configure" ? out : "echec";
  await mutateTelephonie((d) => {
    const l = d.leads.find((x) => x.id === lead.id);
    if (!l) return { result: undefined, changed: false };
    l.owner = { status, ...(status === "envoye" || status === "simule" ? { sentAt: new Date().toISOString() } : {}) };
    return { result: undefined, changed: true };
  });
}

/** Envoie le texto du client s'il est dû (réservation sous verrou : jamais deux fois). */
export async function sendLeadText(id: string, now = new Date()): Promise<SpeedLead["sms"]["status"] | null> {
  const lead = await mutateTelephonie<SpeedLead | null>((d) => {
    const l = d.leads.find((x) => x.id === id);
    if (!l || l.sms.status !== "attente" || !l.phone || Date.parse(l.sms.sendAt) > now.getTime()) return { result: null, changed: false };
    l.sms.status = "envoi";
    return { result: { ...l, sms: { ...l.sms } }, changed: true };
  });
  if (!lead?.phone) return null;

  const settings = (await readTelephonie()).settings.speed;
  let status: SpeedLead["sms"]["status"];
  let error: string | undefined;
  let messageId: string | undefined;
  if (await isOptedOutNumber(lead.phone).catch(() => false)) {
    status = "desabonne";
  } else {
    const link = await makeLink("rappel", lead.id, new Date(now.getTime() + settings.linkDays * 86_400_000));
    const sent = await sendTrackedSms(lead.phone, renderSpeedText(settings.text, { firstName: lead.firstName, link }), { auto: true, event: "reponse-60s", now });
    if (sent.ok) {
      status = sent.status === "simule" ? "simule" : "envoye";
      messageId = sent.messageId;
    } else {
      status = sent.blocked ? "desabonne" : "echec";
      error = sent.error;
    }
  }
  if (status === "echec") console.warn(`[telephonie] réponse en 60 s non envoyée à ${maskPhone(lead.phone)} : ${error}`);
  await mutateTelephonie((d) => {
    const l = d.leads.find((x) => x.id === id);
    if (!l) return { result: undefined, changed: false };
    l.sms = { ...l.sms, status, ...(status === "envoye" || status === "simule" ? { sentAt: new Date().toISOString() } : {}), ...(error ? { error } : {}), ...(messageId ? { messageId } : {}) };
    return { result: undefined, changed: true };
  });
  return status;
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/** Appelé après la réponse de la route (after()) : alerte au propriétaire, puis texto au client dans la minute. */
export async function onNewLead(input: NewLeadInput, now = new Date()): Promise<SpeedLead | null> {
  const lead = await registerLead(input, now);
  if (!lead) return null;
  if (lead.owner.status === "attente") await alertOwner(lead, now).catch((e) => console.error("[telephonie] alerte au propriétaire impossible :", e));
  if (lead.sms.status !== "attente") return lead;
  const wait = Date.parse(lead.sms.sendAt) - Date.now();
  // Délai réglable de 60 s au plus ; la nuit, le robot prendra le relais à 8 h.
  if (wait > 65_000) return lead;
  if (wait > 0) await sleep(wait);
  await sendLeadText(lead.id, new Date(Math.max(Date.now(), Date.parse(lead.sms.sendAt))));
  return lead;
}

/** Robot : textos dus (fin des heures silencieuses) et envois interrompus. */
export async function sendDueLeadTexts(now = new Date()): Promise<{ sent: number; stuck: number }> {
  const data = await readTelephonie();
  let sent = 0;
  for (const l of data.leads.filter((x) => x.sms.status === "attente" && x.phone && Date.parse(x.sms.sendAt) <= now.getTime()).slice(0, 30)) {
    const r = await sendLeadText(l.id, now);
    if (r === "envoye" || r === "simule") sent++;
  }
  // « envoi » depuis plus de 15 minutes : le serveur s'est arrêté pendant l'envoi. Jamais renvoyé (risque de doublon).
  const stuck = await mutateTelephonie((d) => {
    let n = 0;
    for (const l of d.leads) {
      if (l.sms.status === "envoi" && Date.parse(l.sms.sendAt) < now.getTime() - 15 * 60_000) {
        l.sms = { ...l.sms, status: "echec", error: "Envoi interrompu (serveur redémarré) : vérifiez la conversation." };
        n++;
      }
    }
    return { result: n, changed: n > 0 };
  });
  return { sent, stuck };
}

/* ---------------- Page /rappel/<jeton> (client) ---------------- */

export type RappelView =
  | { state: "invalide" | "expire" }
  | { state: "ok"; firstName: string; options: SlotOption[] }
  | { state: "choisi"; firstName: string; chosen: string };

export async function rappelView(token: string, now = new Date()): Promise<RappelView> {
  const check = await checkLink(token, "rappel", now);
  if (!check.ok) return { state: check.error };
  const data = await readTelephonie();
  const lead = LEAD_ID_RE.test(check.id) ? data.leads.find((l) => l.id === check.id) : undefined;
  if (!lead?.phone) return { state: "invalide" };
  if (lead.choice) return { state: "choisi", firstName: lead.firstName, chosen: lead.choice.label };
  return { state: "ok", firstName: lead.firstName, options: slotOptions(data.settings.speed.slots, now, data.settings.speed.horizonDays) };
}

export type ChooseResult = { ok: true; label: string } | { ok: false; error: string };

/** Le client choisit un créneau : tâche datée dans le CRM (une seule fois). */
export async function chooseCallback(token: string, optionId: string, now = new Date()): Promise<ChooseResult> {
  const check = await checkLink(token, "rappel", now);
  if (!check.ok) return { ok: false, error: check.error === "expire" ? "Ce lien a expiré. Répondez simplement à notre texto." : "Lien invalide." };
  if (!OPTION_ID_RE.test(optionId)) return { ok: false, error: "Choisissez un moment dans la liste." };
  const data = await readTelephonie();
  const option = slotOptions(data.settings.speed.slots, now, data.settings.speed.horizonDays).find((o) => o.id === optionId);
  if (!option) return { ok: false, error: "Ce moment n’est plus offert. Choisissez-en un autre." };
  const label = `${option.dayLabel}, ${option.slotLabel.toLocaleLowerCase("fr-CA")} (${option.hours})`;

  const reserved = await mutateTelephonie<{ ok: true; lead: SpeedLead } | { ok: false; label?: string }>((d) => {
    const l = d.leads.find((x) => x.id === check.id);
    if (!l?.phone) return { result: { ok: false }, changed: false };
    if (l.choice) return { result: { ok: false, label: l.choice.label }, changed: false };
    l.choice = { optionId, label, startAt: option.startAt, chosenAt: now.toISOString(), task: "echec" };
    return { result: { ok: true, lead: { ...l } }, changed: true };
  });
  if (!reserved.ok) return reserved.label ? { ok: true, label: reserved.label } : { ok: false, error: "Lien invalide." };

  const lead = reserved.lead;
  const title = `Rappeler ${shortLabel(lead.firstName, lead.lastName, lead.city)} · moment choisi : ${label}`.slice(0, 160);
  const ok = await taskForPhone(lead.phone!, title, new Date(option.startAt), "client (lien texto)", now).catch(() => false);
  await mutateTelephonie((d) => {
    const l = d.leads.find((x) => x.id === lead.id);
    if (!l?.choice) return { result: undefined, changed: false };
    l.choice.task = ok ? "creee" : "echec";
    return { result: undefined, changed: true };
  });
  if (!ok) console.error(`[telephonie] tâche de rappel non créée (${lead.id}).`);
  return { ok: true, label };
}

/* ---------------- Page /appel/<jeton> (propriétaire) ---------------- */

export type AppelLinkView = { state: "invalide" | "expire" } | { state: "ok"; leadId: string; label: string; kind: SpeedKind; expiresAt: string };

export async function appelLinkView(token: string, now = new Date()): Promise<AppelLinkView> {
  const check = await checkLink(token, "appel", now);
  if (!check.ok) return { state: check.error };
  const lead = LEAD_ID_RE.test(check.id) ? (await readTelephonie()).leads.find((l) => l.id === check.id) : undefined;
  if (!lead?.phone) return { state: "invalide" };
  return { state: "ok", leadId: lead.id, label: shortLabel(lead.firstName, lead.lastName, lead.city), kind: lead.kind, expiresAt: check.expiresAt.toISOString() };
}
