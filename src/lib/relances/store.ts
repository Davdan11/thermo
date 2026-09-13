/* ==================================================================
   File des relances ThermoMatch et des demandes d'avis : un fichier
   JSON à côté du journal des leads, donc hors des dossiers de version,
   comme data/alertes-logisvert.json :
     - VPS : /var/www/thermopompesavendre.ca/shared/data/relances.json
       (LEAD_JOURNAL_DIR = shared/data/leads, défini dans shared/.env) ;
     - développement : data/relances.json (hors dépôt).
   Chemin imposable avec RELANCES_FILE.

   Deux processus écrivent ce fichier : le site (pm2 : formulaire
   ThermoMatch, webhook Pipedrive, désabonnement) et le robot quotidien
   (scripts/send-relances.ts). Chaque écriture relit le fichier sous le
   même verrou exclusif que les alertes (…json.lock), puis le remplace
   d'un coup (fichier temporaire + rename) : jamais de fichier à moitié écrit.
   ================================================================== */
import { promises as fs } from "node:fs";
import path from "node:path";
import { journalDir } from "@/lib/crm/lead-journal";
import { withLock } from "@/lib/rdv/store";
import { withFileLock } from "@/lib/alerts/logisvert-alerts-store";
import {
  MAX_ATTEMPTS,
  emailHash,
  normalizeEmail,
  planReviewRequest,
  planThermoMatch,
  type CancelReason,
  type RelancesData,
  type ScheduledMessage,
  type ThermoMatchPlanInput,
} from "./core";

export function relancesFile(): string {
  return process.env.RELANCES_FILE || path.join(path.dirname(journalDir()), "relances.json");
}

const empty = (): RelancesData => ({ version: 1, messages: [], suppressed: [] });

async function readAll(file: string): Promise<RelancesData> {
  try {
    const parsed = JSON.parse(await fs.readFile(file, "utf8")) as Partial<RelancesData>;
    return {
      version: 1,
      messages: Array.isArray(parsed?.messages) ? parsed.messages : [],
      suppressed: Array.isArray(parsed?.suppressed) ? parsed.suppressed : [],
    };
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") return empty();
    throw err;
  }
}

async function writeAll(file: string, data: RelancesData): Promise<void> {
  const tmp = `${file}.${process.pid}.tmp`;
  await fs.writeFile(tmp, JSON.stringify(data, null, 1));
  await fs.rename(tmp, file);
}

/** Lecture, modification et réécriture sous verrou. `fn` renvoie le résultat et s'il faut écrire. */
function mutate<T>(fn: (data: RelancesData) => { result: T; changed: boolean }): Promise<T> {
  return withLock(() => {
    const file = relancesFile();
    return withFileLock(file, async () => {
      const data = await readAll(file);
      const { result, changed } = fn(data);
      if (changed) await writeAll(file, data);
      return result;
    });
  });
}

export async function readRelances(): Promise<RelancesData> {
  return readAll(relancesFile());
}

const isOpen = (m: ScheduledMessage) => m.status === "pending" || m.status === "failed" || m.status === "sending";

function cancel(m: ScheduledMessage, reason: CancelReason, now: Date) {
  m.status = "cancelled";
  m.cancelReason = reason;
  m.cancelledAt = now.toISOString();
}

export type EnqueueThermoMatchResult = { status: "queued"; messages: ScheduledMessage[]; replaced: number } | { status: "suppressed" };

/**
 * Planifie J+2 et J+7 pour une demande ThermoMatch avec la case cochée.
 * Une nouvelle demande de la même adresse remplace les relances ThermoMatch pas encore parties.
 * Une adresse désabonnée n'est jamais replanifiée.
 */
export function enqueueThermoMatch(input: ThermoMatchPlanInput, now = new Date()): Promise<EnqueueThermoMatchResult> {
  const email = normalizeEmail(input.email);
  return mutate<EnqueueThermoMatchResult>((data) => {
    if (data.suppressed.includes(emailHash(email))) return { result: { status: "suppressed" }, changed: false };
    let replaced = 0;
    for (const m of data.messages) {
      if (m.email === email && m.kind !== "avis" && (m.status === "pending" || m.status === "failed")) {
        cancel(m, "remplacee", now);
        replaced++;
      }
    }
    const messages = planThermoMatch({ ...input, email }, now);
    data.messages.push(...messages);
    return { result: { status: "queued", messages: messages.map((m) => ({ ...m })), replaced }, changed: true };
  });
}

export type EnqueueReviewResult = { status: "queued"; message: ScheduledMessage } | { status: "doublon"; message: ScheduledMessage } | { status: "suppressed" };

/** Planifie une demande d'avis (5 jours plus tard). Jamais deux fois pour la même affaire ni pour la même adresse. */
export function enqueueReviewRequest(input: { email: string; firstName?: string; dealId?: number; dueAt?: Date }, now = new Date()): Promise<EnqueueReviewResult> {
  const email = normalizeEmail(input.email);
  return mutate<EnqueueReviewResult>((data) => {
    if (data.suppressed.includes(emailHash(email))) return { result: { status: "suppressed" }, changed: false };
    const existing = data.messages.find(
      (m) => m.kind === "avis" && (m.email === email || (input.dealId != null && m.source.type === "pipedrive" && m.source.dealId === input.dealId)),
    );
    if (existing) return { result: { status: "doublon", message: { ...existing } }, changed: false };
    const message = planReviewRequest(
      { email, firstName: input.firstName, source: input.dealId != null ? { type: "pipedrive", dealId: input.dealId } : { type: "cli" }, dueAt: input.dueAt },
      now,
    );
    data.messages.push(message);
    return { result: { status: "queued", message: { ...message } }, changed: true };
  });
}

/** Annule un message encore en attente (arrêt : soumission, rendez-vous, retard, modèles introuvables). */
export function cancelMessage(id: string, reason: CancelReason, now = new Date()): Promise<boolean> {
  return mutate<boolean>((data) => {
    const m = data.messages.find((x) => x.id === id);
    if (!m || (m.status !== "pending" && m.status !== "failed")) return { result: false, changed: false };
    cancel(m, reason, now);
    return { result: true, changed: true };
  });
}

/**
 * Réserve un message avant l'envoi : passe à « sending » sous verrou.
 * Renvoie null s'il n'est plus envoyable (déjà parti, réservé par un autre passage, annulé, désabonné) :
 * c'est ce qui garantit qu'un message ne part jamais deux fois.
 */
export function claimMessage(id: string, now = new Date()): Promise<ScheduledMessage | null> {
  return mutate<ScheduledMessage | null>((data) => {
    const m = data.messages.find((x) => x.id === id);
    if (!m) return { result: null, changed: false };
    const open = m.status === "pending" || (m.status === "failed" && m.attempts < MAX_ATTEMPTS);
    if (!open || Date.parse(m.dueAt) > now.getTime()) return { result: null, changed: false };
    if (data.suppressed.includes(emailHash(m.email))) {
      cancel(m, "desabonnement", now);
      return { result: null, changed: true };
    }
    m.status = "sending";
    m.attempts += 1;
    m.lastAttemptAt = now.toISOString();
    return { result: { ...m }, changed: true };
  });
}

export function markSent(id: string, now = new Date()): Promise<boolean> {
  return mutate<boolean>((data) => {
    const m = data.messages.find((x) => x.id === id);
    if (!m || m.status !== "sending") return { result: false, changed: false };
    m.status = "sent";
    m.sentAt = now.toISOString();
    delete m.lastError;
    return { result: true, changed: true };
  });
}

/** Envoi en échec : nouvel essai au prochain passage, abandon après MAX_ATTEMPTS essais. */
export function markFailed(id: string, error: string, now = new Date()): Promise<boolean> {
  return mutate<boolean>((data) => {
    const m = data.messages.find((x) => x.id === id);
    if (!m || m.status !== "sending") return { result: false, changed: false };
    m.lastError = error.slice(0, 300);
    if (m.attempts >= MAX_ATTEMPTS) cancel(m, "echecs", now);
    else m.status = "failed";
    return { result: true, changed: true };
  });
}

/**
 * Désabonnement en un clic : l'adresse du jeton ne reçoit plus rien (relances et demandes d'avis),
 * y compris ce qui serait planifié plus tard. Idempotent. null si le jeton est inconnu.
 */
export function unsubscribeByToken(token: string, now = new Date()): Promise<{ email: string; cancelled: number; already: boolean } | null> {
  return mutate<{ email: string; cancelled: number; already: boolean } | null>((data) => {
    const found = data.messages.find((m) => m.token === token);
    if (!found) return { result: null, changed: false };
    const hash = emailHash(found.email);
    const already = data.suppressed.includes(hash);
    if (!already) data.suppressed.push(hash);
    let cancelled = 0;
    for (const m of data.messages) {
      if (m.email === found.email && isOpen(m)) {
        cancel(m, "desabonnement", now);
        cancelled++;
      }
    }
    return { result: { email: found.email, cancelled, already }, changed: !already || cancelled > 0 };
  });
}

export async function isSuppressed(email: string): Promise<boolean> {
  return (await readRelances()).suppressed.includes(emailHash(email));
}
