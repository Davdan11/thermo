/* ==================================================================
   Chantier T — enregistrements : file de transcription et
   conservation de l'audio (Loi 25).

   - Chaque enregistrement (appel entrant du menu, message vocal, appel
     masqué si l'enregistrement est activé) entre dans la file. L'URL de
     l'audio est reconstruite à partir du RecordingSid validé : jamais
     une URL reçue telle quelle.
   - Le robot (toutes les 5 minutes) en traite au plus 2 par passage :
     téléchargement côté serveur avec les identifiants Twilio, puis une
     requête Gemini (transcription + résumé). Nouvelles tentatives :
     15 min, 1 h, 6 h ; au premier refus de quota, pause d'une heure
     (six heures après trois refus de suite).
   - Sans GEMINI_API_KEY, réglage désactivé ou quota dépassé : rien
     n'est téléchargé ni envoyé.
   - Conservation : l'audio est supprimé chez Twilio après la
     transcription (si choisi) et, dans tous les cas, après N jours
     (90 par défaut). Seuls les enregistrements de la file sont touchés.
   - Hors production, aucune requête réelle sauf TEXTOS_ENVOIS_DEV=1.
   ================================================================== */

import { liveSendsAllowed } from "@/lib/textos/twilio-send";
import { maskPhone } from "@/lib/textos/phone";
import { normalizeFrom } from "@/lib/textos/phone";
import { basicAuth, geminiKey, twilioApi, twilioCreds } from "./config";
import { transcribeAudio } from "./gemini";
import { CALL_SID_RE, mutateTelephonie, newTelId, readTelephonie, RECORDING_SID_RE } from "./store";
import type { RecordingJob, RecordingSource, TelephonieData } from "./types";

export const MIN_SECONDS = 8;
export const MAX_SECONDS = 20 * 60;
export const MAX_AUDIO_BYTES = 15 * 1024 * 1024;
export const PER_TICK = 2;
const BACKOFF_MS = [15 * 60_000, 60 * 60_000, 6 * 60 * 60_000];
const MAX_ATTEMPTS = BACKOFF_MS.length + 1;
const DAY = 86_400_000;

export const TRANSCRIPTION_DISCLAIMER = "Transcription automatique, peut contenir des erreurs.";

export interface TranscriptionState {
  active: boolean;
  reason: "active" | "desactivee" | "sans-cle" | "quota";
  label: string;
  pausedUntil?: string;
}

export function transcriptionState(data: Pick<TelephonieData, "settings" | "gemini">, now: Date, env: Record<string, string | undefined> = process.env): TranscriptionState {
  if (!data.settings.transcription.enabled) return { active: false, reason: "desactivee", label: "Désactivée dans les réglages" };
  if (!geminiKey(env)) return { active: false, reason: "sans-cle", label: "Désactivée : GEMINI_API_KEY absente" };
  const until = data.gemini.pausedUntil;
  if (until && Date.parse(until) > now.getTime()) return { active: false, reason: "quota", label: "En pause : quota Gemini dépassé", pausedUntil: until };
  return { active: true, reason: "active", label: "Active" };
}

export interface RecordingInput {
  recordingSid: string;
  callSid?: string | null;
  source: RecordingSource;
  phone?: string | null;
  callId?: string;
  durationSec: number;
  /** Conformité C2 : l'appelant a refusé l'enregistrement (touche 9) : aucune transcription ; l'audio suit la conservation. */
  noTranscription?: boolean;
}

/** Ajoute un enregistrement (une seule fois par RecordingSid). Renvoie l'identifiant, ou null si refusé. */
export async function enqueueRecording(input: RecordingInput, now = new Date()): Promise<string | null> {
  if (!RECORDING_SID_RE.test(input.recordingSid)) return null;
  const callSid = input.callSid && CALL_SID_RE.test(input.callSid) ? input.callSid : undefined;
  const phone = normalizeFrom(input.phone ?? null) ?? undefined;
  const duration = Number.isFinite(input.durationSec) ? Math.max(0, Math.round(input.durationSec)) : 0;
  return mutateTelephonie((data) => {
    const existing = data.recordings.find((r) => r.recordingSid === input.recordingSid);
    if (existing) return { result: existing.id, changed: false };
    const state = transcriptionState(data, now);
    const status: RecordingJob["status"] = input.noTranscription
      ? "desactive"
      : duration < MIN_SECONDS
        ? "trop-court"
        : duration > MAX_SECONDS
          ? "trop-long"
          : state.active || state.reason === "quota"
            ? "attente"
            : "desactive";
    if (input.noTranscription) {
      const job: RecordingJob = { id: newTelId("r"), recordingSid: input.recordingSid, ...(callSid ? { callSid } : {}), source: input.source, ...(phone ? { phone } : {}), durationSec: duration, createdAt: now.toISOString(), status, attempts: 0, audio: "twilio", noTranscription: true };
      data.recordings.push(job);
      return { result: job.id, changed: true };
    }
    const job: RecordingJob = {
      id: newTelId("r"),
      recordingSid: input.recordingSid,
      ...(callSid ? { callSid } : {}),
      source: input.source,
      ...(phone ? { phone } : {}),
      ...(input.callId ? { callId: input.callId } : {}),
      durationSec: duration,
      createdAt: now.toISOString(),
      status,
      attempts: 0,
      audio: "twilio",
    };
    data.recordings.push(job);
    return { result: job.id, changed: true };
  });
}

/* ---------------- Twilio : audio, appelant, suppression ---------------- */

const recordingUrl = (sid: string, recordingSid: string, ext = ".mp3") => `${twilioApi(sid)}/Recordings/${recordingSid}${ext}`;

export async function downloadRecording(recordingSid: string, fetchImpl: typeof fetch = fetch): Promise<{ ok: true; audio: Buffer; mime: string } | { ok: false; error: string; gone?: boolean }> {
  const creds = twilioCreds();
  if (!creds || !RECORDING_SID_RE.test(recordingSid)) return { ok: false, error: "Twilio n’est pas configuré." };
  try {
    const res = await fetchImpl(recordingUrl(creds.sid, recordingSid), { headers: { Authorization: basicAuth(creds) }, signal: AbortSignal.timeout(30_000) });
    if (res.status === 404) return { ok: false, error: "Enregistrement introuvable chez Twilio.", gone: true };
    if (!res.ok) return { ok: false, error: `Twilio a refusé le téléchargement (HTTP ${res.status}).` };
    const size = Number(res.headers.get("content-length") ?? "0");
    if (size > MAX_AUDIO_BYTES) return { ok: false, error: "Audio trop lourd." };
    const audio = Buffer.from(await res.arrayBuffer());
    if (audio.length > MAX_AUDIO_BYTES) return { ok: false, error: "Audio trop lourd." };
    return { ok: true, audio, mime: "audio/mpeg" };
  } catch (e) {
    return { ok: false, error: `Twilio injoignable : ${e instanceof Error ? e.message.slice(0, 100) : "réseau"}` };
  }
}

/** Numéro de l'appelant d'un appel entrant (le rappel d'enregistrement de <Dial> ne le donne pas). */
export async function lookupCaller(callSid: string, fetchImpl: typeof fetch = fetch): Promise<string | null> {
  const creds = twilioCreds();
  if (!creds || !CALL_SID_RE.test(callSid)) return null;
  try {
    const res = await fetchImpl(`${twilioApi(creds.sid)}/Calls/${callSid}.json`, { headers: { Authorization: basicAuth(creds) }, signal: AbortSignal.timeout(15_000) });
    if (!res.ok) return null;
    const json = (await res.json().catch(() => ({}))) as { from?: string; direction?: string };
    return json.direction === "inbound" || !json.direction ? normalizeFrom(json.from ?? null) : null;
  } catch {
    return null;
  }
}

/** Supprime l'audio chez Twilio (DELETE). 404 : déjà supprimé. */
export async function deleteRecordingAudio(recordingSid: string, fetchImpl: typeof fetch = fetch): Promise<"supprime" | "simule" | "echec"> {
  if (!RECORDING_SID_RE.test(recordingSid)) return "echec";
  if (!liveSendsAllowed()) {
    console.log(`[telephonie] suppression d’audio simulée (développement) : ${recordingSid.slice(0, 6)}…`);
    return "simule";
  }
  const creds = twilioCreds();
  if (!creds) return "echec";
  try {
    const res = await fetchImpl(recordingUrl(creds.sid, recordingSid, ".json"), { method: "DELETE", headers: { Authorization: basicAuth(creds) }, signal: AbortSignal.timeout(15_000) });
    return res.status === 204 || res.status === 404 || res.ok ? "supprime" : "echec";
  } catch {
    return "echec";
  }
}

/* ---------------- File de transcription ---------------- */

export interface TranscriptionTick {
  done: number;
  failed: number;
  paused: boolean;
  skipped: string | null;
}

/** Traite au plus `max` enregistrements dus. */
export async function processTranscriptions(now = new Date(), opts: { max?: number; fetchImpl?: typeof fetch } = {}): Promise<TranscriptionTick> {
  const fetchImpl = opts.fetchImpl ?? fetch;
  const out: TranscriptionTick = { done: 0, failed: 0, paused: false, skipped: null };
  const snapshot = await readTelephonie();
  const state = transcriptionState(snapshot, now);
  if (!state.active) return { ...out, skipped: state.reason };
  if (!liveSendsAllowed()) return { ...out, skipped: "developpement" };
  const key = geminiKey()!;
  const recent = now.getTime() - 3 * DAY;

  for (let i = 0; i < (opts.max ?? PER_TICK); i++) {
    // Réservation sous verrou : un seul passage traite un enregistrement donné.
    const job = await mutateTelephonie<RecordingJob | null>((data) => {
      const due = data.recordings
        .filter((r) => r.audio === "twilio" && (r.status === "attente" || (r.status === "desactive" && Date.parse(r.createdAt) >= recent)) && (!r.nextAttemptAt || Date.parse(r.nextAttemptAt) <= now.getTime()))
        .sort((a, b) => a.createdAt.localeCompare(b.createdAt))[0];
      if (!due) return { result: null, changed: false };
      due.status = "en-cours";
      due.attempts += 1;
      return { result: { ...due }, changed: true };
    });
    if (!job) break;

    let phone = job.phone;
    if (!phone && job.callSid) phone = (await lookupCaller(job.callSid, fetchImpl)) ?? undefined;
    const dl = await downloadRecording(job.recordingSid, fetchImpl);
    const result = dl.ok ? await transcribeAudio(dl.audio, dl.mime, key, fetchImpl) : ({ ok: false, quota: false, retry: !dl.gone, error: dl.error } as const);

    const retention = snapshot.settings.transcription.retention;
    let deleteNow = false;
    await mutateTelephonie((data) => {
      const r = data.recordings.find((x) => x.id === job.id);
      if (!r) return { result: undefined, changed: false };
      if (phone && !r.phone) r.phone = phone;
      if (result.ok) {
        r.status = "transcrit";
        r.transcript = result.transcript;
        r.summary = result.summary;
        r.need = result.need;
        r.budget = result.budget;
        r.nextStep = result.nextStep;
        r.transcribedAt = now.toISOString();
        delete r.error;
        delete r.nextAttemptAt;
        data.gemini = { ...data.gemini, quotaHits: 0 };
        deleteNow = retention === "apres-transcription";
      } else if (result.quota) {
        // L'enregistrement n'y est pour rien : il reprend sa place, sans compter l'essai.
        r.status = "attente";
        r.attempts = Math.max(0, r.attempts - 1);
        const hits = (data.gemini.quotaHits ?? 0) + 1;
        data.gemini = { pausedUntil: new Date(now.getTime() + (hits >= 3 ? 6 : 1) * 3_600_000).toISOString(), lastError: result.error, quotaHits: hits };
      } else if (result.retry && r.attempts < MAX_ATTEMPTS) {
        r.status = "attente";
        r.error = result.error;
        r.nextAttemptAt = new Date(now.getTime() + BACKOFF_MS[Math.min(r.attempts - 1, BACKOFF_MS.length - 1)]).toISOString();
      } else {
        r.status = "echec";
        r.error = result.error;
        if (!dl.ok && dl.gone) {
          r.audio = "supprime";
          r.audioDeletedAt = now.toISOString();
        }
      }
      return { result: undefined, changed: true };
    });

    if (result.ok) {
      out.done++;
      if (deleteNow) await deleteAudioOf(job.id, now, fetchImpl);
    } else if (result.quota) {
      out.paused = true;
      console.warn("[telephonie] quota Gemini dépassé : transcriptions en pause.");
      break;
    } else {
      out.failed++;
      console.warn(`[telephonie] transcription impossible (${job.id}${phone ? `, ${maskPhone(phone)}` : ""}) : ${result.error}`);
    }
  }
  return out;
}

async function deleteAudioOf(id: string, now: Date, fetchImpl: typeof fetch): Promise<boolean> {
  const data = await readTelephonie();
  const r = data.recordings.find((x) => x.id === id);
  if (!r || r.audio !== "twilio") return false;
  const res = await deleteRecordingAudio(r.recordingSid, fetchImpl);
  if (res === "echec") return false;
  await mutateTelephonie((d) => {
    const x = d.recordings.find((y) => y.id === id);
    if (!x) return { result: undefined, changed: false };
    x.audio = "supprime";
    x.audioDeletedAt = now.toISOString();
    return { result: undefined, changed: true };
  });
  // Conformité C2 : chaque suppression est notée au journal d'audit (conservation de l'audio : 90 jours par défaut).
  await import("@/lib/gestion/securite/audit")
    .then((a) => a.audit("enregistrement.suppression", { enregistrement: id, raison: "conservation" }, { qui: "robot (conservation)", ip: null }))
    .catch(() => undefined);
  return true;
}

/** Audio à supprimer selon la conservation choisie. */
export function audioDue(r: RecordingJob, settings: TelephonieData["settings"]["transcription"], now: Date): boolean {
  if (r.audio !== "twilio" || r.status === "en-cours") return false;
  if (settings.retention === "apres-transcription" && r.status === "transcrit") return true;
  return Date.parse(r.createdAt) + settings.retentionDays * DAY <= now.getTime();
}

/** Conservation (Loi 25) : supprime l'audio dû chez Twilio. Renvoie le nombre d'audios supprimés. */
export async function purgeAudio(now = new Date(), opts: { max?: number; fetchImpl?: typeof fetch } = {}): Promise<number> {
  const data = await readTelephonie();
  const due = data.recordings.filter((r) => audioDue(r, data.settings.transcription, now)).slice(0, opts.max ?? 25);
  let n = 0;
  for (const r of due) if (await deleteAudioOf(r.id, now, opts.fetchImpl ?? fetch)) n++;
  return n;
}
