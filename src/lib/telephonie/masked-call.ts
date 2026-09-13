/* ==================================================================
   Chantier T — appel masqué depuis le CRM.

   « Appeler » (fiche client, tâches, conversation, lien du texto
   d'alerte) ne compose plus tel: depuis le cellulaire du propriétaire
   (qui montrait son numéro personnel au client). Twilio fait sonner
   son cellulaire (API REST, From = numéro du site), lui chuchote à
   qui il parle, puis appelle le client AVEC LE NUMÉRO DU SITE.

   Ce qui sort du serveur :
     - vers Twilio seulement : le cellulaire (champ To de l'appel REST)
       et le numéro du client (TwiML de <Dial>) ;
     - vers le navigateur : l'étape, le résultat, la durée et
       l'étiquette « Julie T., Laval ». Jamais un numéro.
   Journaux : quatre derniers chiffres au plus.

   Fin d'appel : une note dans la fiche du client (durée, résultat).
   Répondu : note « appel », qui compte comme « contacté ». Sans
   réponse : note simple (une tentative n'est pas un contact).
   ================================================================== */

import { SITE_URL } from "@/lib/seo";
import { liveSendsAllowed } from "@/lib/textos/twilio-send";
import { maskPhone } from "@/lib/textos/phone";
import { xml } from "@/lib/security/twilio";
import { basicAuth, callsReadiness, ownerCell, siteNumber, tail4, twilioApi, twilioCreds } from "./config";
import { clientById, clientByPhone, contextOf, conversationPhone, labelOf, noteForClient } from "./crm-link";
import { shortLabel } from "./plan";
import { CALL_ID_RE, CALL_SID_RE, LEAD_ID_RE, mutateTelephonie, newTelId, readTelephonie } from "./store";
import { enqueueRecording } from "./transcription";
import { cancelledTwiml, connectTwiml, noticeTwiml, ownerLegTwiml, unavailableTwiml, whisperText } from "./twiml";
import type { CallPhase, CallResult, MaskedCall, SpeedKind } from "./types";

export type StartTarget = { kind: "client" | "conversation" | "lead"; id: string };
export type StartResult = { ok: true; view: CallView } | { ok: false; error: string };

export const LEAD_CONTEXT: Record<SpeedKind, string> = {
  soumission: "nouvelle demande de soumission",
  thermomatch: "nouvelle demande ThermoMatch",
  "rendez-vous": "rendez-vous réservé",
  contact: "message du formulaire de contact",
};

const PHASE_RANK: Record<CallPhase, number> = { initie: 0, "proprio-sonne": 1, "proprio-en-ligne": 2, "client-sonne": 3, "en-cours": 4, termine: 5 };
const advance = (c: MaskedCall, p: CallPhase) => {
  if (PHASE_RANK[p] > PHASE_RANK[c.phase]) c.phase = p;
};

/* ---------------- Vue (navigateur) ---------------- */

export interface CallView {
  id: string;
  phase: CallPhase;
  result: CallResult | null;
  final: boolean;
  label: string;
  title: string;
  detail: string;
  tone: "live" | "ok" | "warn" | "bad" | "muted";
  /** Début de la conversation avec le client (minuterie). */
  answeredAt: string | null;
  durationSec: number | null;
  record: boolean;
}

export function formatDuration(sec: number): string {
  const s = Math.max(0, Math.round(sec));
  if (s < 60) return `${s} s`;
  const m = Math.floor(s / 60);
  return `${m} min${s % 60 ? ` ${String(s % 60).padStart(2, "0")} s` : ""}`;
}

const RESULT_TEXT: Record<CallResult, { title: string; detail: string; tone: CallView["tone"] }> = {
  repondu: { title: "Appel terminé", detail: "Noté dans la fiche du client.", tone: "ok" },
  "pas-de-reponse": { title: "Pas de réponse", detail: "Le client n’a pas décroché. Tentative notée dans sa fiche.", tone: "warn" },
  occupe: { title: "Ligne occupée", detail: "Réessayez dans quelques minutes.", tone: "warn" },
  echec: { title: "Échec de l’appel", detail: "Twilio n’a pas pu joindre le numéro.", tone: "bad" },
  annule: { title: "Appel annulé", detail: "", tone: "muted" },
  "proprio-absent": { title: "Vous n’avez pas répondu", detail: "Votre cellulaire a sonné sans réponse : le client n’a pas été appelé.", tone: "muted" },
  "non-confirme": { title: "Appel non confirmé", detail: "Sans la touche 1, le client n’est pas appelé (protection contre votre boîte vocale).", tone: "muted" },
  simule: { title: "Appel simulé", detail: "Développement : rien n’a été composé.", tone: "muted" },
  inconnu: { title: "Statut inconnu", detail: "Twilio n’a plus donné de nouvelles de cet appel.", tone: "muted" },
};

export function callView(c: MaskedCall): CallView {
  const base = { id: c.id, phase: c.phase, result: c.result ?? null, label: c.label, answeredAt: c.clientAnsweredAt ?? null, durationSec: c.durationSec ?? null, record: c.record };
  if (c.result) {
    const r = RESULT_TEXT[c.result];
    const title = c.result === "repondu" && c.durationSec ? `${r.title} · ${formatDuration(c.durationSec)}` : r.title;
    return { ...base, final: true, title, detail: c.error && c.result === "echec" ? c.error : r.detail, tone: r.tone };
  }
  switch (c.phase) {
    case "initie":
      return { ...base, final: false, title: "Appel en préparation…", detail: "Votre cellulaire va sonner.", tone: "live" };
    case "proprio-sonne":
      return { ...base, final: false, title: "Votre cellulaire sonne", detail: "Décrochez : vous entendrez à qui vous parlez, puis faites le 1.", tone: "live" };
    case "proprio-en-ligne":
      return { ...base, final: false, title: "Vous êtes en ligne", detail: `Faites le 1 pour joindre ${c.label}.`, tone: "live" };
    case "client-sonne":
      return { ...base, final: false, title: `Ça sonne chez ${c.label}`, detail: "Le client voit le numéro du site.", tone: "live" };
    case "en-cours":
      return { ...base, final: false, title: "En communication", detail: c.record ? "Appel enregistré (avis donné au client)." : "Le client a entendu l’avis d’enregistrement.", tone: "live" };
    default:
      return { ...base, final: false, title: "Fin de l’appel…", detail: "", tone: "live" };
  }
}

export async function getCallView(id: string): Promise<CallView | null> {
  if (!CALL_ID_RE.test(id)) return null;
  const c = (await readTelephonie()).calls.find((x) => x.id === id);
  return c ? callView(c) : null;
}

/* ---------------- Lancement ---------------- */

interface Resolved {
  phone: string;
  clientId: string | null;
  label: string;
  context: string;
}

async function resolveTarget(t: StartTarget): Promise<Resolved | null> {
  if (t.kind === "client") {
    const c = await clientById(t.id);
    const phone = c?.b.phones[0];
    return c && phone ? { phone, clientId: c.b.id, label: labelOf(c), context: contextOf(c) } : null;
  }
  if (t.kind === "conversation") {
    const phone = await conversationPhone(t.id);
    if (!phone) return null;
    const c = await clientByPhone(phone);
    return { phone, clientId: c?.b.id ?? null, label: c ? labelOf(c) : "un client (texto)", context: c ? contextOf(c) : "conversation texto" };
  }
  if (!LEAD_ID_RE.test(t.id)) return null;
  const lead = (await readTelephonie()).leads.find((l) => l.id === t.id);
  if (!lead?.phone) return null;
  const c = await clientByPhone(lead.phone);
  return { phone: lead.phone, clientId: c?.b.id ?? null, label: shortLabel(lead.firstName, lead.lastName, lead.city), context: LEAD_CONTEXT[lead.kind] };
}

export async function startMaskedCall(target: StartTarget, by: string, now = new Date(), fetchImpl: typeof fetch = fetch): Promise<StartResult> {
  const ready = callsReadiness();
  if (!ready.ok) return { ok: false, error: `Appel masqué indisponible : ${ready.missing.join(", ")} à régler sur le serveur.` };
  const r = await resolveTarget(target);
  if (!r) return { ok: false, error: "Aucun numéro pour ce client." };
  const settings = (await readTelephonie()).settings;
  const iso = now.toISOString();
  const call: MaskedCall = {
    id: newTelId("a"),
    createdAt: iso,
    updatedAt: iso,
    by,
    target: { kind: target.kind, ref: target.id },
    clientId: r.clientId,
    phone: r.phone,
    label: r.label,
    context: r.context,
    record: settings.calls.record,
    phase: "initie",
  };
  const live = liveSendsAllowed();
  if (!live) {
    call.phase = "termine";
    call.result = "simule";
    call.endedAt = iso;
  }
  await mutateTelephonie((d) => {
    d.calls.push(call);
    return { result: undefined, changed: true };
  });
  if (!live) {
    console.log(`[telephonie] appel masqué simulé (développement) → client ${maskPhone(r.phone)}, cellulaire ${tail4(ownerCell())}`);
    return { ok: true, view: callView(call) };
  }

  const creds = twilioCreds()!;
  const cb = (etape: string, extra = "") => `${SITE_URL}/api/phone/masque/${etape}?a=${call.id}${extra}`;
  const form = new URLSearchParams({
    To: ownerCell()!,
    From: siteNumber()!,
    Url: cb("proprio"),
    Method: "POST",
    StatusCallback: cb("statut", "&jambe=proprio"),
    StatusCallbackMethod: "POST",
    Timeout: "25",
  });
  for (const e of ["initiated", "ringing", "answered", "completed"]) form.append("StatusCallbackEvent", e);
  let error: string | null = null;
  let sid: string | null = null;
  try {
    const res = await fetchImpl(`${twilioApi(creds.sid)}/Calls.json`, {
      method: "POST",
      headers: { Authorization: basicAuth(creds), "Content-Type": "application/x-www-form-urlencoded" },
      body: form.toString(),
      signal: AbortSignal.timeout(15_000),
    });
    const json = (await res.json().catch(() => ({}))) as { sid?: string; code?: number; message?: string };
    if (!res.ok) error = `Twilio a refusé l’appel${json.code ? ` (erreur ${json.code})` : ` (HTTP ${res.status})`}.`;
    else sid = typeof json.sid === "string" && CALL_SID_RE.test(json.sid) ? json.sid : null;
  } catch {
    error = "Twilio injoignable (réseau ou délai dépassé). Réessayez.";
  }
  if (error) console.error(`[telephonie] appel masqué refusé (${call.id}, cellulaire ${tail4(ownerCell())}) : ${error}`);
  const saved = await mutateTelephonie((d) => {
    const c = d.calls.find((x) => x.id === call.id);
    if (!c) return { result: call, changed: false };
    if (sid) c.callSid = sid;
    if (error) {
      c.phase = "termine";
      c.result = "echec";
      c.error = error;
      c.endedAt = new Date().toISOString();
    }
    c.updatedAt = new Date().toISOString();
    return { result: { ...c }, changed: true };
  });
  return error ? { ok: false, error } : { ok: true, view: callView(saved) };
}

/* ---------------- Webhooks Twilio (signés) ---------------- */

function update(id: string, fn: (c: MaskedCall) => void): Promise<MaskedCall | null> {
  if (!CALL_ID_RE.test(id)) return Promise.resolve(null);
  return mutateTelephonie((d) => {
    const c = d.calls.find((x) => x.id === id);
    if (!c) return { result: null, changed: false };
    fn(c);
    c.updatedAt = new Date().toISOString();
    return { result: { ...c }, changed: true };
  });
}

/** Le propriétaire décroche : chuchotement et touche 1. */
export async function ownerAnswered(id: string): Promise<string> {
  const c = await update(id, (x) => {
    if (x.result) return;
    advance(x, "proprio-en-ligne");
    x.ownerAnsweredAt ??= new Date().toISOString();
  });
  if (!c || c.result) return unavailableTwiml();
  return ownerLegTwiml(xml(SITE_URL), c.id, whisperText(c.label, c.context));
}

/** Touche du propriétaire : 1 appelle le client avec le numéro du site. */
export async function connectClient(id: string, digits: string): Promise<string> {
  const site = siteNumber();
  const c = await update(id, (x) => {
    if (x.result) return;
    if (digits === "1" && site) {
      advance(x, "client-sonne");
      x.clientDialedAt ??= new Date().toISOString();
    } else {
      x.phase = "termine";
      x.result = "non-confirme";
      x.endedAt = new Date().toISOString();
    }
  });
  if (!c) return unavailableTwiml();
  if (c.result) return cancelledTwiml();
  return connectTwiml({ base: xml(SITE_URL), callId: c.id, siteNumber: site!, clientPhone: c.phone, record: c.record });
}

/** Joué au client quand il décroche. */
export async function clientNotice(id: string): Promise<string> {
  await update(id, (x) => {
    if (x.result) return;
    advance(x, "en-cours");
    x.clientAnsweredAt ??= new Date().toISOString();
  });
  return noticeTwiml();
}

const OWNER_END = new Set(["completed", "busy", "no-answer", "failed", "canceled"]);

/** Rappels de statut : jambe du propriétaire (appel REST) ou du client (<Number>). */
export async function applyCallStatus(id: string, leg: "proprio" | "client", p: URLSearchParams): Promise<void> {
  const status = (p.get("CallStatus") ?? "").toLowerCase();
  const duration = Number.parseInt(p.get("CallDuration") ?? "", 10);
  const now = new Date().toISOString();
  const c = await update(id, (x) => {
    if (leg === "client") {
      if (status === "initiated" || status === "ringing") advance(x, "client-sonne");
      if (status === "in-progress") {
        advance(x, "en-cours");
        x.clientAnsweredAt ??= now;
      }
      if (status === "completed" && x.clientAnsweredAt && Number.isFinite(duration)) x.durationSec = duration;
      return;
    }
    if (status === "ringing" || status === "initiated") advance(x, status === "ringing" ? "proprio-sonne" : "initie");
    if (status === "in-progress") {
      advance(x, "proprio-en-ligne");
      x.ownerAnsweredAt ??= now;
    }
    if (OWNER_END.has(status) && !x.result) {
      // Le <Dial> donne normalement le résultat avant ; sinon, on conclut avec ce qu'on sait.
      if (PHASE_RANK[x.phase] <= PHASE_RANK["proprio-sonne"]) x.result = status === "failed" ? "echec" : "proprio-absent";
      else if (x.phase === "proprio-en-ligne") x.result = "non-confirme";
      else x.result = x.clientAnsweredAt ? "repondu" : "pas-de-reponse";
      x.phase = "termine";
      x.endedAt ??= now;
    }
  });
  if (c) await finalize(c);
}

const DIAL_RESULT: Record<string, CallResult> = { completed: "repondu", answered: "repondu", "no-answer": "pas-de-reponse", busy: "occupe", failed: "echec", canceled: "annule" };

/** Fin du <Dial> vers le client : résultat et durée. */
export async function dialEnded(id: string, p: URLSearchParams): Promise<void> {
  const status = (p.get("DialCallStatus") ?? "").toLowerCase();
  const duration = Number.parseInt(p.get("DialCallDuration") ?? "", 10);
  const c = await update(id, (x) => {
    if (x.result) return;
    const answered = Boolean(x.clientAnsweredAt) || status === "completed" || status === "answered";
    x.result = answered && status !== "failed" ? "repondu" : (DIAL_RESULT[status] ?? "pas-de-reponse");
    if (answered && Number.isFinite(duration)) x.durationSec = duration;
    x.phase = "termine";
    x.endedAt = new Date().toISOString();
  });
  if (c) await finalize(c);
}

/** Enregistrement de l'appel masqué terminé (si activé) : file de transcription. */
export async function callRecorded(id: string, p: URLSearchParams): Promise<void> {
  const c = CALL_ID_RE.test(id) ? (await readTelephonie()).calls.find((x) => x.id === id) : undefined;
  if (!c || !c.record) return;
  await enqueueRecording({ recordingSid: p.get("RecordingSid") ?? "", callSid: p.get("CallSid"), source: "appel-masque", phone: c.phone, callId: c.id, durationSec: Number(p.get("RecordingDuration") ?? "0") });
}

const NOTED_RESULTS = new Set<CallResult>(["repondu", "pas-de-reponse", "occupe", "echec", "annule"]);

/** Note dans la fiche, une seule fois, si le client a été appelé. */
async function finalize(c: MaskedCall): Promise<void> {
  if (!c.result || c.noted || !c.clientDialedAt || !NOTED_RESULTS.has(c.result)) return;
  const reserved = await mutateTelephonie((d) => {
    const x = d.calls.find((y) => y.id === c.id);
    if (!x || x.noted) return { result: false, changed: false };
    x.noted = true;
    return { result: true, changed: true };
  });
  if (!reserved) return;
  const answered = c.result === "repondu";
  const text = answered
    ? `Appel masqué (numéro du site) · répondu${c.durationSec ? ` · ${formatDuration(c.durationSec)}` : ""}${c.record ? " · enregistré" : ""}`
    : `Tentative d’appel masqué (numéro du site) · ${RESULT_TEXT[c.result].title.toLocaleLowerCase("fr-CA")}`;
  const ok = await noteForClient({ clientId: c.clientId, phone: c.phone }, text, answered ? "appel" : "note", c.by).catch(() => false);
  if (!ok) {
    console.warn(`[telephonie] appel ${c.id} non noté : aucune fiche pour ${maskPhone(c.phone)}.`);
  }
}

/** Appels sans nouvelles depuis deux heures : statut « inconnu » (le robot). */
export async function expireStaleCalls(now = new Date()): Promise<number> {
  const limit = now.getTime() - 2 * 3_600_000;
  return mutateTelephonie((d) => {
    let n = 0;
    for (const c of d.calls) {
      if (c.result || Date.parse(c.updatedAt) > limit) continue;
      c.result = "inconnu";
      c.phase = "termine";
      c.endedAt = now.toISOString();
      n++;
    }
    return { result: n, changed: n > 0 };
  });
}
