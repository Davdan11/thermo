/* Chantier V — aides des tests de l'équipe : membres fictifs (@exemple.ca, 514 555-01xx), cookies de session,
   données de deux vendeurs, texte d'un rendu de page (pour vérifier qu'aucune donnée d'un autre vendeur ne sort). */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { daysAgo, job, msg, conv, quote } from "../../crm/__tests__/fixtures";
import { addTask, createManualContact, resetCrmMemo } from "../../crm/service";
import { readCrm } from "../../crm/store";
import { localYmd } from "../../crm/time";
import { createSessionToken, signSessionPayload } from "../../auth/session-token";
import { getSessionSecret } from "../../auth/secret";
import { reassignClient } from "../repartition";
import { mutateTeam } from "../store";
import type { Member, MemberRole, TeamSettings } from "../types";

export const OWNER = "proprio@exemple.ca";
export const A = { id: "u_vendeurA001", email: "vendeur.a@exemple.ca", name: "Vendeur A" };
export const B = { id: "u_vendeurB001", email: "vendeur.b@exemple.ca", name: "Vendeur B" };
export const ADJ = { id: "u_adjoint0001", email: "adjointe@exemple.ca", name: "Adjointe" };

export function member(p: { id: string; email: string; name: string }, role: MemberRole = "vendeur", over: Partial<Member> = {}): Member {
  const at = new Date(Date.now() - 90 * 86_400_000).toISOString();
  return { ...p, role, status: "actif", available: true, territory: { cities: [], postal: [] }, commissionPercent: 30, invitedAt: at, invitedBy: OWNER, activatedAt: at, updatedAt: at, ...over };
}

export function testEnv(dir: string): NodeJS.ProcessEnv {
  return { ...process.env, GESTION_DATA_DIR: dir, LEAD_JOURNAL_DIR: path.join(dir, "leads"), TEXTOS_DATA_DIR: dir, TELEPHONIE_DATA_DIR: dir, RELANCES_FILE: path.join(dir, "relances.json"), ADMIN_EMAILS: OWNER, NODE_ENV: "test" };
}

/** Cookie de session ; `mfa` : 2e étape faite (sinon, pour un vendeur, l'activation est exigée). */
export async function cookieFor(email: string, mfa = true): Promise<string> {
  const secret = await getSessionSecret();
  const { token, payload } = createSessionToken(email, secret);
  return mfa ? signSessionPayload({ ...payload, mfa: payload.iat, mm: "totp" }, secret) : token;
}

export async function seedTeam(settings: Partial<TeamSettings> = {}): Promise<void> {
  await mutateTeam((d) => {
    d.members = [member(A), member(B), member(ADJ, "adjoint")];
    d.settings = { ...d.settings, mode: "manuel", activeSince: null, ...settings };
    return { result: undefined, changed: true };
  });
}

const alice = { firstName: "Alice", lastName: "Exemple", phone: "514 555-0161", email: "alice@exemple.ca", city: "Laval" };
const bruno = { firstName: "Bruno", lastName: "Exemple", phone: "514 555-0162", email: "bruno@exemple.ca", city: "Longueuil" };

export interface Seed {
  a: string;
  b: string;
  quoteA: string;
  quoteB: string;
  numberB: string;
  convA: string;
  convB: string;
  taskA: string;
  taskB: string;
}

/** Deux clients : Alice (vendeur A) et Bruno (vendeur B), chacun avec soumission, texto, tâche ; un job pour Bruno. */
export async function seedClients(dir: string, opts: { assignedBefore?: string } = {}): Promise<Seed> {
  const now = new Date();
  const qA = quote({ client: alice, sentAt: daysAgo(3, now), acceptedAt: daysAgo(2, now) });
  const qB = quote({ client: bruno, sentAt: daysAgo(3, now) });
  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, "soumissions.json"), JSON.stringify({ version: 1, counters: {}, quotes: [qA, qB], photos: [] }));
  const cA = conv("+15145550161", [msg("in", daysAgo(1, now), "Bonjour, Alice ici")], { unread: 1 });
  const cB = conv("+15145550162", [msg("in", daysAgo(1, now), "Bonjour, Bruno ici")], { unread: 1 });
  await writeFile(path.join(dir, "textos.json"), JSON.stringify({ version: 1, conversations: { [cA.phone]: cA, [cB.phone]: cB }, settings: { autoReply: true, autoReplyText: "Merci !" } }));
  const j = job({ client: { firstName: "Bruno", lastName: "Exemple", phone: bruno.phone, email: bruno.email, city: bruno.city }, status: "planifie", scheduledFor: localYmd(now), createdAt: daysAgo(2, now).toISOString() });
  await writeFile(path.join(dir, "gestion.json"), JSON.stringify({ version: 1, installers: [], jobs: [j] }));
  resetCrmMemo();
  const ra = await createManualContact(alice, OWNER);
  const rb = await createManualContact(bruno, OWNER);
  if (!ra.ok || !rb.ok || !ra.id || !rb.id) throw new Error("clients de test non créés");
  await reassignClient(ra.id, A.id, OWNER);
  await reassignClient(rb.id, B.id, OWNER);
  if (opts.assignedBefore) {
    // Attribution antidatée (avant la signature de la soumission d'Alice) pour le relevé de commission.
    const { mutateCrm } = await import("../../crm/store");
    await mutateCrm((d) => {
      for (const r of Object.values(d.clients)) {
        for (const e of r.assignLog ?? []) e.at = opts.assignedBefore!;
        if (r.assignedTo) r.assignedTo.at = opts.assignedBefore!;
      }
      return { result: undefined, changed: true };
    });
  }
  const soon = new Date(now.getTime() + 60 * 60_000);
  await addTask({ clientId: ra.id, title: "Rappeler Alice", dueAt: soon }, A.email);
  await addTask({ clientId: rb.id, title: "Rappeler Bruno", dueAt: soon }, B.email);
  await addTask({ clientId: null, title: "Tâche perso de B", dueAt: soon }, B.email);
  resetCrmMemo();
  const tasks = (await readCrm()).tasks;
  return {
    a: ra.id,
    b: rb.id,
    quoteA: qA.id,
    quoteB: qB.id,
    numberB: qB.number,
    convA: cA.id,
    convB: cB.id,
    taskA: tasks.find((t) => t.title === "Rappeler Alice")!.id,
    taskB: tasks.find((t) => t.title === "Rappeler Bruno")!.id,
  };
}

/** Tout le texte et toutes les valeurs d'un arbre React rendu par une page serveur (props comprises). */
export function txt(node: unknown): string {
  const out: string[] = [];
  const seen = new WeakSet<object>();
  const walk = (v: unknown): void => {
    if (v === null || v === undefined || typeof v === "boolean" || typeof v === "function" || typeof v === "symbol") return;
    if (typeof v === "string" || typeof v === "number" || typeof v === "bigint") {
      out.push(String(v));
      return;
    }
    if (typeof v !== "object") return;
    if (seen.has(v)) return;
    seen.add(v);
    if (Array.isArray(v)) return v.forEach(walk);
    if (v instanceof Map) return [...v.values()].forEach(walk);
    if (v instanceof Set) return [...v].forEach(walk);
    const el = v as { $$typeof?: unknown; props?: unknown };
    if (el.$$typeof) return walk(el.props);
    for (const [k, x] of Object.entries(v)) if (k !== "_owner" && k !== "_store" && k !== "_debugInfo") walk(x);
  };
  walk(node);
  return out.join(" • ");
}
