/* ==================================================================
   Abonnés aux alertes LogisVert : un fichier JSON à côté du journal
   des leads, donc hors des dossiers de version :
     - VPS : /var/www/thermopompesavendre.ca/shared/data/alertes-logisvert.json
       (LEAD_JOURNAL_DIR = shared/data/leads, défini dans shared/.env,
       conservé d'un déploiement à l'autre) ;
     - développement : data/alertes-logisvert.json (hors dépôt).
   Chemin imposable avec LOGISVERT_ALERTS_FILE.

   Deux processus écrivent ce fichier : le site (pm2) et le script de
   nuit (scripts/notify-logisvert-alerts.ts). Chaque écriture relit le
   fichier sous un verrou exclusif (…json.lock), en plus de la file
   d'attente du processus : aucune écriture ne peut en écraser une autre.
   ================================================================== */
import { promises as fs } from "node:fs";
import path from "node:path";
import { randomBytes, randomUUID } from "node:crypto";
import { journalDir } from "@/lib/crm/lead-journal";
import { withLock } from "@/lib/rdv/store";
import { targetKey, type AlertSnapshot, type AlertSubscription, type AlertTarget } from "./logisvert-alerts-core";

/** Nombre maximal d'alertes pour une même adresse. */
export const MAX_ALERTS_PER_EMAIL = 30;
/** Délai minimal entre deux courriels de confirmation pour la même alerte. */
export const RESEND_COOLDOWN_MS = 10 * 60 * 1000;
/** Demandes jamais confirmées : effacées après ce délai (Loi 25 : pas de conservation inutile). */
export const PENDING_TTL_MS = 30 * 24 * 60 * 60 * 1000;

export function alertsFile(): string {
  return process.env.LOGISVERT_ALERTS_FILE || path.join(path.dirname(journalDir()), "alertes-logisvert.json");
}

async function readAll(file: string): Promise<AlertSubscription[]> {
  try {
    const parsed = JSON.parse(await fs.readFile(file, "utf8"));
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw err;
  }
}

async function writeAll(file: string, list: AlertSubscription[]): Promise<void> {
  const tmp = `${file}.${process.pid}.tmp`;
  await fs.writeFile(tmp, JSON.stringify(list, null, 1));
  await fs.rename(tmp, file);
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/** Verrou entre processus : fichier créé en mode exclusif, repris s'il a plus de 30 s (processus tué). */
async function withFileLock<T>(file: string, fn: () => Promise<T>): Promise<T> {
  const lock = `${file}.lock`;
  await fs.mkdir(path.dirname(file), { recursive: true });
  const deadline = Date.now() + 10_000;
  for (;;) {
    try {
      await (await fs.open(lock, "wx")).close();
      break;
    } catch (err) {
      if ((err as NodeJS.ErrnoException).code !== "EEXIST") throw err;
      const age = await fs.stat(lock).then((s) => Date.now() - s.mtimeMs, () => 0);
      if (age > 30_000) {
        await fs.rm(lock, { force: true });
        continue;
      }
      if (Date.now() > deadline) throw new Error(`Fichier des alertes verrouillé : ${lock}`);
      await sleep(40 + Math.random() * 60);
    }
  }
  try {
    return await fn();
  } finally {
    await fs.rm(lock, { force: true }).catch(() => undefined);
  }
}

/** Lecture, modification et réécriture sous verrou. `fn` renvoie le résultat et s'il faut écrire. */
function mutate<T>(fn: (list: AlertSubscription[]) => { result: T; changed: boolean }): Promise<T> {
  return withLock(() => {
    const file = alertsFile();
    return withFileLock(file, async () => {
      const list = await readAll(file);
      const { result, changed } = fn(list);
      if (changed) await writeAll(file, list);
      return result;
    });
  });
}

export function newToken(): string {
  return randomBytes(24).toString("base64url");
}

export async function listSubscriptions(): Promise<AlertSubscription[]> {
  return readAll(alertsFile());
}

export type RequestOutcome =
  | { status: "created" | "pending" | "confirmed"; sub: AlertSubscription; shouldEmail: boolean }
  | { status: "limit" };

export interface SubscriptionInput {
  email: string;
  firstName?: string;
  target: AlertTarget;
  label: string;
  path: string;
  snapshot: AlertSnapshot;
  journalId?: string;
}

/**
 * Enregistre une demande, dédupliquée par courriel + cible.
 * - nouvelle : créée non confirmée, courriel de confirmation à envoyer ;
 * - déjà en attente : instantané rafraîchi, confirmation renvoyée si la précédente date de plus de 10 min ;
 * - déjà confirmée : seuls le prénom et la date de consentement changent (un courriel « déjà active » peut partir).
 * `confirmationSentAt` est posé tout de suite quand `shouldEmail` est vrai (deux clics rapprochés = un seul courriel) ;
 * appeler `markConfirmationSent(id, null)` si l'envoi échoue.
 */
export function requestSubscription(input: SubscriptionInput, now = new Date()): Promise<RequestOutcome> {
  const iso = now.toISOString();
  const key = targetKey(input.target);
  return mutate<RequestOutcome>((list) => {
    const existing = list.find((s) => s.email === input.email && targetKey(s.target) === key);
    if (existing) {
      const shouldEmail = !existing.confirmationSentAt || now.getTime() - Date.parse(existing.confirmationSentAt) >= RESEND_COOLDOWN_MS;
      if (input.firstName) existing.firstName = input.firstName;
      existing.consentAt = iso;
      existing.label = input.label;
      existing.path = input.path;
      // Tant que l'alerte n'est pas confirmée, la référence est ce que la personne voit aujourd'hui.
      if (!existing.confirmedAt) existing.lastSnapshot = input.snapshot;
      if (shouldEmail) existing.confirmationSentAt = iso;
      return { result: { status: existing.confirmedAt ? "confirmed" : "pending", sub: { ...existing }, shouldEmail }, changed: true };
    }
    if (list.filter((s) => s.email === input.email).length >= MAX_ALERTS_PER_EMAIL) return { result: { status: "limit" }, changed: false };
    const sub: AlertSubscription = {
      id: randomUUID(),
      email: input.email,
      ...(input.firstName ? { firstName: input.firstName } : {}),
      target: input.target,
      label: input.label,
      path: input.path,
      createdAt: iso,
      consentAt: iso,
      confirmedAt: null,
      confirmationSentAt: iso,
      token: newToken(),
      lastSnapshot: input.snapshot,
      lastNotifiedAt: null,
      ...(input.journalId ? { journalId: input.journalId } : {}),
    };
    list.push(sub);
    return { result: { status: "created", sub: { ...sub }, shouldEmail: true }, changed: true };
  });
}

export function markConfirmationSent(id: string, at: Date | null): Promise<boolean> {
  return updateSubscription(id, { confirmationSentAt: at ? at.toISOString() : null });
}

/** Active l'alerte liée au jeton. null si le jeton est inconnu (déjà désabonné ou demande expirée). */
export function confirmSubscription(token: string, now = new Date()): Promise<{ status: "confirmed" | "already"; sub: AlertSubscription } | null> {
  return mutate<{ status: "confirmed" | "already"; sub: AlertSubscription } | null>((list) => {
    const sub = list.find((s) => s.token === token);
    if (!sub) return { result: null, changed: false };
    if (sub.confirmedAt) return { result: { status: "already", sub: { ...sub } }, changed: false };
    sub.confirmedAt = now.toISOString();
    return { result: { status: "confirmed", sub: { ...sub } }, changed: true };
  });
}

/** Désabonnement : l'alerte est effacée (rien n'est gardé). Renvoie l'alerte retirée, ou null si le jeton est inconnu. */
export function unsubscribe(token: string): Promise<AlertSubscription | null> {
  return mutate<AlertSubscription | null>((list) => {
    const i = list.findIndex((s) => s.token === token);
    if (i < 0) return { result: null, changed: false };
    const [removed] = list.splice(i, 1);
    return { result: removed, changed: true };
  });
}

/** Met à jour une alerte (instantané, date d'envoi) en relisant le fichier : les autres alertes restent intactes. */
export function updateSubscription(id: string, patch: Partial<Omit<AlertSubscription, "id" | "token" | "email" | "target">>): Promise<boolean> {
  return mutate<boolean>((list) => {
    const sub = list.find((s) => s.id === id);
    if (!sub) return { result: false, changed: false };
    Object.assign(sub, patch);
    return { result: true, changed: true };
  });
}

/** Efface les demandes jamais confirmées plus vieilles que `ttlMs`. Renvoie le nombre effacé. */
export function purgePendingSubscriptions(now = new Date(), ttlMs = PENDING_TTL_MS): Promise<number> {
  return mutate<number>((list) => {
    const before = list.length;
    const kept = list.filter((s) => s.confirmedAt || now.getTime() - Date.parse(s.createdAt) < ttlMs);
    if (kept.length === before) return { result: 0, changed: false };
    list.splice(0, list.length, ...kept);
    return { result: before - kept.length, changed: true };
  });
}
