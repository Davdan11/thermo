/* ==================================================================
   Chantier V — lectures et écritures de l'équipe pour les pages :
   liste des membres, attribution d'un client, classement, relevés.
   AUCUNE vérification d'accès ici : chaque page et chaque action passe
   d'abord par requireAdmin() ou requireUser({ roles }).
   Seuls des objets d'affichage partent vers le navigateur : prénoms,
   villes, montants ; jamais le courriel ni le numéro d'un client.
   ================================================================== */

import { readCommissions } from "../commissions/store";
import { loadCrmIndex } from "../crm/service";
import type { CrmIndex } from "../crm/model";
import { addDaysYmd, localYmd, zonedToUtc } from "../crm/time";
import { assigneeOf } from "./scope";
import { leaderboard, type VendorCard } from "./classement";
import { signedSales, statementFor, type Sale } from "./commission";
import { mutateTeam, readTeam } from "./store";
import { ASSIGN_MODE_LABELS, USER_ID_RE, type AssignMode, type Member, type MemberRole, type MemberStatus, type PaidStatement, type StatementLine, type TeamSettings } from "./types";
import type { AssignHow } from "../crm/types";

const CLOSED = new Set(["terminee", "perdue"]);
export const MONTH_RE = /^\d{4}-(0[1-9]|1[0-2])$/;

export async function salesOf(index: Pick<CrmIndex, "clients">): Promise<Sale[]> {
  const com = await readCommissions();
  return signedSales(index, { invoices: com.invoices, companyPercent: com.settings.percent });
}

/* ---------------- Équipe ---------------- */

export interface MemberRow {
  id: string;
  name: string;
  email: string;
  role: MemberRole;
  status: MemberStatus;
  available: boolean;
  open: number;
  lastLoginAt: string | null;
  invitedAt: string;
  inviteExpired: boolean;
  commissionPercent: number;
  territory: string;
  phone: string | null;
  smsConsent: boolean;
  cities: string[];
  postal: string[];
}

export function memberRow(m: Member, open: number, now = Date.now()): MemberRow {
  return {
    id: m.id,
    name: m.name || m.email.split("@")[0],
    email: m.email,
    role: m.role,
    status: m.status,
    available: m.available,
    open,
    lastLoginAt: m.lastLoginAt ?? null,
    invitedAt: m.invitedAt,
    inviteExpired: m.status === "invite" && Boolean(m.invite && !m.invite.usedAt && Date.parse(m.invite.expiresAt) <= now),
    commissionPercent: m.commissionPercent,
    territory: [...m.territory.cities, ...m.territory.postal].join(", "),
    phone: m.phone ?? null,
    smsConsent: Boolean(m.smsConsent),
    cities: m.territory.cities,
    postal: m.territory.postal,
  };
}

export async function teamView(): Promise<{ members: MemberRow[]; settings: TeamSettings; unassigned: number; modeLabel: string }> {
  const [team, index] = await Promise.all([readTeam(), loadCrmIndex()]);
  const open = new Map<string, number>();
  let unassigned = 0;
  for (const c of index.clients) {
    if (CLOSED.has(c.stage.stage)) continue;
    const uid = assigneeOf(c);
    if (uid) open.set(uid, (open.get(uid) ?? 0) + 1);
    else unassigned++;
  }
  const order: Record<MemberStatus, number> = { actif: 0, invite: 1, desactive: 2 };
  const members = [...team.members].sort((a, b) => order[a.status] - order[b.status] || a.name.localeCompare(b.name, "fr")).map((m) => memberRow(m, open.get(m.id) ?? 0));
  return { members, settings: team.settings, unassigned, modeLabel: ASSIGN_MODE_LABELS[team.settings.mode] };
}

/* ---------------- Attribution d'un client ---------------- */

const HOW_LABELS: Record<AssignHow, string> = { tour: "tour de rôle", territoire: "territoire", charge: "charge", manuel: "à la main", creation: "créé par le vendeur", retrait: "retiré" };

export interface AssignmentView {
  current: { userId: string; name: string; how: string; at: string } | null;
  history: Array<{ at: string; by: string; from: string; to: string; how: string; reason: string }>;
  vendors: Array<{ id: string; name: string; available: boolean }>;
}

export async function assignmentView(clientId: string, index?: CrmIndex): Promise<AssignmentView | null> {
  const [idx, team] = await Promise.all([index ? Promise.resolve(index) : loadCrmIndex(), readTeam()]);
  const c = idx.byId.get(clientId);
  if (!c) return null;
  const name = (id: string | null) => (id ? (team.members.find((m) => m.id === id)?.name ?? "Ancien membre") : "Personne");
  const rec = c.b.record;
  return {
    current: rec?.assignedTo ? { userId: rec.assignedTo.userId, name: name(rec.assignedTo.userId), how: HOW_LABELS[rec.assignedTo.how] ?? rec.assignedTo.how, at: rec.assignedTo.at } : null,
    history: [...(rec?.assignLog ?? [])].reverse().slice(0, 12).map((e) => ({ at: e.at, by: e.by === "repartition-automatique" ? "Répartition automatique" : e.by.split("@")[0], from: name(e.from), to: name(e.to), how: HOW_LABELS[e.how] ?? e.how, reason: e.reason ?? "" })),
    vendors: team.members.filter((m) => m.role === "vendeur" && m.status === "actif").map((m) => ({ id: m.id, name: m.name, available: m.available })),
  };
}

/* ---------------- Classement ---------------- */

export const PERIOD_KEYS = ["mois", "30", "90", "annee"] as const;
export type PeriodKey = (typeof PERIOD_KEYS)[number];
export const PERIOD_LABELS: Record<PeriodKey, string> = { mois: "Ce mois-ci", "30": "30 jours", "90": "90 jours", annee: "Cette année" };
export const parsePeriodKey = (v: unknown): PeriodKey => ((PERIOD_KEYS as readonly string[]).includes(v as string) ? (v as PeriodKey) : "mois");

export function periodRange(key: PeriodKey, now = new Date()): { from: Date; to: Date } {
  const to = new Date(now.getTime() + 1);
  const ymd = localYmd(now);
  if (key === "mois") return { from: zonedToUtc(`${ymd.slice(0, 7)}-01`), to };
  if (key === "annee") return { from: zonedToUtc(`${ymd.slice(0, 4)}-01-01`), to };
  return { from: zonedToUtc(addDaysYmd(ymd, -Number(key))), to };
}

export async function leaderboardView(key: PeriodKey, now = new Date()): Promise<VendorCard[]> {
  const [index, team] = await Promise.all([loadCrmIndex(), readTeam()]);
  return leaderboard(index, team.members, await salesOf(index), periodRange(key, now));
}

/** La carte du vendeur connecté (sa ligne du classement, rien d'autre). */
export async function myCard(userId: string, key: PeriodKey = "mois", now = new Date()): Promise<VendorCard | null> {
  if (!USER_ID_RE.test(userId)) return null;
  return (await leaderboardView(key, now)).find((c) => c.userId === userId) ?? null;
}

/* ---------------- Relevés mensuels ---------------- */

export interface StatementRow {
  userId: string;
  name: string;
  percent: number;
  status: "a-payer" | "payee" | "vide";
  totalCents: number;
  lines: StatementLine[];
  paid: PaidStatement | null;
}

export function lastMonths(now = new Date(), n = 12): string[] {
  const out: string[] = [];
  let ym = localYmd(now).slice(0, 7);
  for (let i = 0; i < n; i++) {
    out.push(ym);
    const [y, m] = ym.split("-").map(Number);
    ym = m === 1 ? `${y - 1}-12` : `${y}-${String(m - 1).padStart(2, "0")}`;
  }
  return out;
}

export async function statementsView(month: string): Promise<StatementRow[]> {
  const [index, team] = await Promise.all([loadCrmIndex(), readTeam()]);
  const sales = await salesOf(index);
  return team.members
    .filter((m) => m.role === "vendeur")
    .map((m) => {
      const paid = team.statements[`${month}:${m.id}`] ?? null;
      if (paid) return { userId: m.id, name: m.name, percent: m.commissionPercent, status: "payee" as const, totalCents: paid.amountCents, lines: paid.lines, paid };
      const s = statementFor(sales, m, month);
      return { userId: m.id, name: m.name, percent: m.commissionPercent, status: s.lines.length ? ("a-payer" as const) : ("vide" as const), totalCents: s.totalCents, lines: s.lines, paid: null };
    })
    .sort((a, b) => b.totalCents - a.totalCents || a.name.localeCompare(b.name, "fr"));
}

/** Relevé payé : figé (lignes et montant), jamais recalculé ensuite. */
export async function payStatement(month: string, userId: string, by: string, reference: string, now = new Date()): Promise<{ ok: true; amountCents: number } | { ok: false; error: string }> {
  if (!MONTH_RE.test(month) || !USER_ID_RE.test(userId)) return { ok: false, error: "Demande invalide." };
  if (month > localYmd(now).slice(0, 7)) return { ok: false, error: "Ce mois n’est pas encore commencé." };
  const index = await loadCrmIndex();
  const sales = await salesOf(index);
  return mutateTeam<{ ok: true; amountCents: number } | { ok: false; error: string }>((d) => {
    const m = d.members.find((x) => x.id === userId && x.role === "vendeur");
    if (!m) return { result: { ok: false, error: "Vendeur introuvable." }, changed: false };
    const key = `${month}:${userId}`;
    if (d.statements[key]) return { result: { ok: false, error: "Ce relevé est déjà payé." }, changed: false };
    const s = statementFor(sales, m, month);
    if (!s.lines.length) return { result: { ok: false, error: "Aucune vente signée ce mois-là : rien à payer." }, changed: false };
    d.statements[key] = { month, userId, amountCents: s.totalCents, lines: s.lines, paidAt: now.toISOString(), paidBy: by, reference: reference.trim().slice(0, 80) };
    return { result: { ok: true, amountCents: s.totalCents }, changed: true };
  });
}

export type { AssignMode };
