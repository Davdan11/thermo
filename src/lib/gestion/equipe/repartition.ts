/* ==================================================================
   Chantier V — attribution des clients aux vendeurs.

   Répartition automatique des NOUVELLES demandes (un passage à chaque
   tick des automatisations et de la téléphonie) selon le mode choisi :
     - tour de rôle : chacun son tour, dans l'ordre d'arrivée ;
     - territoire   : le vendeur dont les villes ou les débuts de code
                      postal couvrent le client (tour de rôle entre eux ;
                      hors de tout territoire : tour de rôle général) ;
     - charge       : celui qui a le moins de dossiers ouverts ;
     - manuelle     : rien d'automatique.
   Seuls les vendeurs ACTIFS et DISPONIBLES reçoivent des demandes.
   Jamais l'historique : seuls les clients apparus depuis
   settings.activeSince (premier vendeur actif, ou passage en mode
   automatique) et jamais attribués ni retirés à la main.

   Réattribution manuelle par le propriétaire : historique complet
   (assignLog de crm.json). Les tâches suivent le vendeur : elles sont
   calculées à partir du client, donc de son attribution.
   Pas d'accès ni d'audit ici : l'appelant (action, tick) s'en charge.
   ================================================================== */

import { SITE_URL } from "@/lib/seo";
import { ensureRecord, freshIndex } from "../crm/service";
import type { ClientComputed, CrmIndex } from "../crm/model";
import { KIND_LABELS } from "../crm/sources";
import { mutateCrm } from "../crm/store";
import type { AssignHow } from "../crm/types";
import { audit } from "../securite/audit";
import { notifyAssigned } from "./notify";
import { assigneeOf } from "./scope";
import { mutateTeam, readTeam } from "./store";
import { USER_ID_RE, type AssignMode, type Member, type TeamSettings } from "./types";

const fold = (s: string) => s.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
const postalNorm = (s: string) => s.toUpperCase().replace(/[^A-Z0-9]/g, "");
const CLOSED = new Set(["terminee", "perdue"]);

/** Vendeurs qui reçoivent des demandes, dans l'ordre d'arrivée (ordre du tour de rôle). */
export function eligibleVendors(members: Member[]): Member[] {
  return members
    .filter((m) => m.role === "vendeur" && m.status === "actif" && m.available)
    .sort((a, b) => (a.activatedAt ?? a.invitedAt).localeCompare(b.activatedAt ?? b.invitedAt) || a.id.localeCompare(b.id));
}

export function inTerritory(m: Pick<Member, "territory">, place: { city: string; postalCode: string }): boolean {
  const city = fold(place.city);
  const pc = postalNorm(place.postalCode);
  if (city && m.territory.cities.some((c) => fold(c) === city)) return true;
  return Boolean(pc && m.territory.postal.some((p) => postalNorm(p) && pc.startsWith(postalNorm(p))));
}

/** Premier membre de `pool` qui suit `cursor` dans l'ordre du tour (on repart du début au besoin). */
function afterCursor(order: Member[], pool: Member[], cursor: string | null): Member | null {
  if (!pool.length) return null;
  const i = cursor ? order.findIndex((m) => m.id === cursor) : -1;
  const rotated = [...order.slice(i + 1), ...order.slice(0, i + 1)];
  const ids = new Set(pool.map((m) => m.id));
  return rotated.find((m) => ids.has(m.id)) ?? pool[0];
}

/** Choix pur (testé) : quel vendeur reçoit ce client ? null en mode manuel ou sans vendeur. */
export function pickVendor(mode: AssignMode, order: Member[], place: { city: string; postalCode: string }, loads: ReadonlyMap<string, number>, cursor: string | null): { member: Member; how: AssignHow } | null {
  if (mode === "manuel" || !order.length) return null;
  if (mode === "territoire") {
    const local = order.filter((m) => inTerritory(m, place));
    if (local.length) return { member: afterCursor(order, local, cursor)!, how: "territoire" };
    return { member: afterCursor(order, order, cursor)!, how: "tour" };
  }
  if (mode === "charge") {
    const min = Math.min(...order.map((m) => loads.get(m.id) ?? 0));
    const pool = order.filter((m) => (loads.get(m.id) ?? 0) === min);
    return { member: afterCursor(order, pool, cursor)!, how: "charge" };
  }
  return { member: afterCursor(order, order, cursor)!, how: "tour" };
}

/** Dossiers ouverts (ni terminés ni perdus) par vendeur. */
export function openLoads(index: Pick<CrmIndex, "clients">): Map<string, number> {
  const loads = new Map<string, number>();
  for (const c of index.clients) {
    if (CLOSED.has(c.stage.stage)) continue;
    const uid = assigneeOf(c);
    if (uid) loads.set(uid, (loads.get(uid) ?? 0) + 1);
  }
  return loads;
}

/** Nouvelles demandes à répartir : entrées par le site, le téléphone ou les textos depuis `since`, jamais touchées. */
export function autoCandidates(index: Pick<CrmIndex, "clients">, since: string): ClientComputed[] {
  return index.clients
    .filter((c) => !c.b.record?.assignedTo && !c.b.record?.assignLog?.length && c.b.firstChannel !== null && c.b.firstAt >= since && !CLOSED.has(c.stage.stage))
    .sort((a, b) => a.b.firstAt.localeCompare(b.b.firstAt) || a.b.id.localeCompare(b.b.id));
}

/* ---------------- Écriture ---------------- */

type WriteResult = { ok: true; from: string | null; id: string } | { ok: false; error: string };

async function writeAssignment(c: ClientComputed, to: string | null, by: string, how: AssignHow, o: { reason?: string; now: Date; onlyIfUntouched?: boolean }): Promise<WriteResult> {
  const at = o.now.toISOString();
  return mutateCrm<WriteResult>((d) => {
    const r = ensureRecord(d, c, at);
    if (o.onlyIfUntouched && (r.assignedTo || r.assignLog?.length)) return { result: { ok: false, error: "Déjà attribué." }, changed: false };
    const from = r.assignedTo?.userId ?? null;
    if (from === to) return { result: { ok: false, error: to ? "Ce client est déjà attribué à ce vendeur." : "Ce client n’est attribué à personne." }, changed: false };
    r.assignLog = [...(r.assignLog ?? []), { at, by, from, to, how, ...(o.reason ? { reason: o.reason.slice(0, 200) } : {}) }];
    if (to) r.assignedTo = { userId: to, at, by, how };
    else delete r.assignedTo;
    return { result: { ok: true, from, id: c.b.id }, changed: true };
  });
}

const whoOf = (c: ClientComputed) => [c.b.firstName || "Sans nom", c.b.city].filter(Boolean).join(" · ");
const whatOf = (c: ClientComputed) => KIND_LABELS[c.b.journal[0]?.kind ?? ""] ?? (c.b.textos.length ? "Texto" : "Nouvelle demande");

async function tellVendor(m: Member, c: ClientComputed, s: TeamSettings): Promise<void> {
  await notifyAssigned(m, { who: whoOf(c), what: whatOf(c), link: `${SITE_URL}/gestion/clients/${c.b.id}` }, { email: s.notifyEmail, sms: s.notifySms }).catch((e) => console.error("[équipe] avis au vendeur impossible :", (e as Error)?.message));
}

export interface RepartitionResult {
  assigned: number;
  skipped?: string;
}

/** Un passage de la répartition automatique. Idempotent (un client déjà attribué ou retiré n'est jamais repris). */
export async function runRepartition(opts: { now?: Date; max?: number } = {}): Promise<RepartitionResult> {
  const now = opts.now ?? new Date();
  const team = await readTeam();
  const s = team.settings;
  if (s.mode === "manuel") return { assigned: 0, skipped: "répartition manuelle" };
  const order = eligibleVendors(team.members);
  if (!order.length) return { assigned: 0, skipped: "aucun vendeur disponible" };
  if (!s.activeSince) {
    await mutateTeam((d) => {
      d.settings.activeSince ??= now.toISOString();
      return { result: undefined, changed: true };
    });
    return { assigned: 0, skipped: "démarrage : seules les demandes à venir seront réparties" };
  }
  const index = await freshIndex(now);
  const cands = autoCandidates(index, s.activeSince).slice(0, opts.max ?? 200);
  if (!cands.length) return { assigned: 0 };
  const loads = openLoads(index);
  let cursor = team.cursor;
  const done: Array<{ c: ClientComputed; m: Member; how: AssignHow }> = [];
  for (const c of cands) {
    const pick = pickVendor(s.mode, order, { city: c.b.city, postalCode: c.b.postalCode }, loads, cursor);
    if (!pick) break;
    const r = await writeAssignment(c, pick.member.id, "repartition-automatique", pick.how, { now, onlyIfUntouched: true });
    if (!r.ok) continue;
    cursor = pick.member.id;
    loads.set(pick.member.id, (loads.get(pick.member.id) ?? 0) + 1);
    done.push({ c, m: pick.member, how: pick.how });
  }
  if (cursor !== team.cursor) {
    await mutateTeam((d) => {
      d.cursor = cursor;
      return { result: undefined, changed: true };
    });
  }
  for (const x of done) {
    await audit("crm.attribution", { client: x.c.b.id, vendeur: x.m.id, mode: x.how }, { qui: "repartition-automatique", ip: null });
    await tellVendor(x.m, x.c, s);
  }
  return { assigned: done.length };
}

/* ---------------- Réattribution manuelle, création, redistribution ---------------- */

async function activeVendor(userId: string): Promise<{ member: Member; settings: TeamSettings } | null> {
  if (!USER_ID_RE.test(userId)) return null;
  const team = await readTeam();
  const m = team.members.find((x) => x.id === userId && x.role === "vendeur" && x.status === "actif");
  return m ? { member: m, settings: team.settings } : null;
}

/** Réattribution par le propriétaire : `to` null retire le vendeur. Avis au nouveau vendeur. */
export async function reassignClient(clientId: string, to: string | null, by: string, reason = "", now = new Date()): Promise<{ ok: true; id: string; from: string | null; to: string | null } | { ok: false; error: string }> {
  const target = to ? await activeVendor(to) : null;
  if (to && !target) return { ok: false, error: "Choisissez un vendeur actif." };
  const c = (await freshIndex(now)).byId.get(clientId);
  if (!c) return { ok: false, error: "Client introuvable." };
  const r = await writeAssignment(c, to, by, to ? "manuel" : "retrait", { reason, now });
  if (!r.ok) return r;
  if (target) await tellVendor(target.member, c, target.settings);
  return { ok: true, id: r.id, from: r.from, to };
}

/** Client créé par un vendeur (fiche, soumission) : il lui revient s'il n'est encore à personne. */
export async function claimForCreator(clientId: string, userId: string, by: string, now = new Date()): Promise<boolean> {
  const c = (await freshIndex(now)).byId.get(clientId);
  if (!c || assigneeOf(c)) return false;
  const r = await writeAssignment(c, userId, by, "creation", { now });
  return r.ok;
}

/** Dossiers ouverts d'un vendeur (désactivé, en congé) redistribués aux autres selon le mode (tour de rôle en mode manuel). */
export async function redistributeFrom(userId: string, by: string, now = new Date()): Promise<{ moved: number; left: number }> {
  const team = await readTeam();
  const order = eligibleVendors(team.members).filter((m) => m.id !== userId);
  const index = await freshIndex(now);
  const mine = index.clients.filter((c) => assigneeOf(c) === userId && !CLOSED.has(c.stage.stage));
  if (!order.length) return { moved: 0, left: mine.length };
  const loads = openLoads(index);
  let cursor = team.cursor;
  let moved = 0;
  const mode: AssignMode = team.settings.mode === "manuel" ? "tour" : team.settings.mode;
  for (const c of mine) {
    const pick = pickVendor(mode, order, { city: c.b.city, postalCode: c.b.postalCode }, loads, cursor);
    if (!pick) break;
    const r = await writeAssignment(c, pick.member.id, by, pick.how, { reason: "redistribution des dossiers ouverts", now });
    if (!r.ok) continue;
    moved++;
    cursor = pick.member.id;
    loads.set(pick.member.id, (loads.get(pick.member.id) ?? 0) + 1);
    await audit("crm.reattribution", { client: c.b.id, de: userId, vers: pick.member.id, mode: "redistribution" }, { qui: by });
    await tellVendor(pick.member, c, team.settings);
  }
  await mutateTeam((d) => {
    d.cursor = cursor;
    return { result: undefined, changed: true };
  });
  return { moved, left: mine.length - moved };
}
