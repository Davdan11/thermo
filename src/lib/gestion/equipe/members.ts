/* ==================================================================
   Chantier V — membres de l'équipe : invitation, acceptation,
   rôle, désactivation, réactivation, suppression, fiche.

   Invitation : jeton aléatoire de 32 octets, envoyé par courriel ;
   seule son empreinte SHA-256 est gardée ; valable settings.inviteDays
   jours, une seule fois. L'accepter active le membre et ouvre sa
   session (connexion par lien comme le propriétaire ensuite).
   Désactiver, supprimer ou changer le rôle ferme aussitôt toutes ses
   sessions (notBefore de la sécurité, chantier S).
   AUCUN envoi ici : l'appelant envoie le courriel (notify.ts).
   ================================================================== */

import { hashToken, newToken, TOKEN_RE } from "../auth/magic-link";
import { isAdminEmail, isEmail, normalizeEmail } from "../auth/admins";
import { mutateSecurity } from "../securite/store";
import { toE164 } from "../sms";
import { cleanPercent, mutateTeam, newUserId, normalizeTeamSettings, readTeam } from "./store";
import { USER_ID_RE, type Member, type MemberRole, type MemberStatus, type TeamSettings } from "./types";

export type Result<T = object> = ({ ok: true } & T) | { ok: false; error: string };

const clip = (s: unknown, n: number) => String(s ?? "").trim().replace(/\s+/g, " ").slice(0, n);

export async function listMembers(): Promise<Member[]> {
  return (await readTeam()).members;
}

export async function memberById(id: string): Promise<Member | null> {
  if (!USER_ID_RE.test(id)) return null;
  return (await readTeam()).members.find((m) => m.id === id) ?? null;
}

/** Ferme toutes les sessions de l'adresse (jetons émis avant maintenant refusés). */
export async function revokeMemberSessions(email: string, now = new Date()): Promise<void> {
  await mutateSecurity((d) => {
    d.notBefore[email.toLowerCase()] = Math.floor(now.getTime() / 1000) + 1;
    return { result: undefined, changed: true };
  });
}

/* ---------------- Invitation ---------------- */

export async function inviteMember(input: { email: string; name: string; role: MemberRole; phone?: string }, by: string, now = new Date()): Promise<Result<{ member: Member; token: string; expiresAt: string }>> {
  const email = normalizeEmail(input.email).slice(0, 200);
  if (!isEmail(email)) return { ok: false, error: "Entrez une adresse courriel valide." };
  if (isAdminEmail(email)) return { ok: false, error: "Cette adresse est déjà celle d’un propriétaire." };
  const name = clip(input.name, 80);
  if (!name) return { ok: false, error: "Indiquez le nom du membre." };
  const phone = input.phone ? toE164(input.phone) : null;
  if (input.phone && input.phone.trim() && !phone) return { ok: false, error: "Ce cellulaire n’est pas valide (10 chiffres)." };
  const token = newToken();
  return mutateTeam<Result<{ member: Member; token: string; expiresAt: string }>>((d) => {
    const existing = d.members.find((m) => m.email === email);
    if (existing && existing.status !== "invite") return { result: { ok: false, error: existing.status === "actif" ? "Ce membre fait déjà partie de l’équipe." : "Ce membre est désactivé : réactivez-le depuis sa fiche." }, changed: false };
    const at = now.toISOString();
    const expiresAt = new Date(now.getTime() + d.settings.inviteDays * 86_400_000).toISOString();
    const invite = { hash: hashToken(token), createdAt: at, expiresAt };
    let member: Member;
    if (existing) {
      existing.name = name;
      existing.role = input.role;
      if (phone) existing.phone = phone;
      existing.invite = invite;
      existing.invitedAt = at;
      existing.invitedBy = by;
      existing.updatedAt = at;
      member = existing;
    } else {
      member = { id: newUserId(), email, name, role: input.role, status: "invite", ...(phone ? { phone } : {}), smsConsent: false, available: true, territory: { cities: [], postal: [] }, commissionPercent: 0, invite, invitedAt: at, invitedBy: by, updatedAt: at };
      d.members.push(member);
    }
    return { result: { ok: true, member: { ...member }, token, expiresAt }, changed: true };
  });
}

/** Nouvelle invitation (l'ancienne ne marche plus). */
export async function resendInvite(userId: string, by: string, now = new Date()): Promise<Result<{ member: Member; token: string; expiresAt: string }>> {
  const m = await memberById(userId);
  if (!m) return { ok: false, error: "Membre introuvable." };
  if (m.status !== "invite") return { ok: false, error: "Ce membre a déjà accepté son invitation." };
  return inviteMember({ email: m.email, name: m.name, role: m.role }, by, now);
}

export type InviteState = "valide" | "expire" | "utilise" | "invalide";

function findByToken(members: Member[], token: string): Member | undefined {
  const h = hashToken(token);
  return members.find((m) => m.invite?.hash === h);
}

function inviteState(m: Member | undefined, now: Date): InviteState {
  if (!m?.invite) return "invalide";
  if (m.invite.usedAt || m.status === "actif") return "utilise";
  if (m.status !== "invite") return "invalide";
  if (Date.parse(m.invite.expiresAt) <= now.getTime()) return "expire";
  return "valide";
}

/** Lecture seule (page ouverte par GET : les antivirus visitent les liens). */
export async function peekInvite(token: string, now = new Date()): Promise<{ state: InviteState; name?: string; role?: MemberRole }> {
  if (!TOKEN_RE.test(token)) return { state: "invalide" };
  const m = findByToken((await readTeam()).members, token);
  const state = inviteState(m, now);
  return state === "valide" ? { state, name: m!.name, role: m!.role } : { state };
}

/** Acceptation (POST) : une seule fois, avant l'expiration. Le membre devient actif. */
export async function acceptInvite(token: string, now = new Date()): Promise<{ ok: true; member: Member } | { ok: false; error: Exclude<InviteState, "valide"> }> {
  if (!TOKEN_RE.test(token)) return { ok: false, error: "invalide" };
  return mutateTeam<{ ok: true; member: Member } | { ok: false; error: Exclude<InviteState, "valide"> }>((d) => {
    const m = findByToken(d.members, token);
    const state = inviteState(m, now);
    if (state !== "valide") return { result: { ok: false, error: state }, changed: false };
    const at = now.toISOString();
    m!.invite = { ...m!.invite!, usedAt: at };
    m!.status = "actif";
    m!.activatedAt = at;
    m!.lastLoginAt = at;
    m!.updatedAt = at;
    // La répartition automatique démarre avec le premier vendeur actif : jamais l'historique.
    if (!d.settings.activeSince && m!.role === "vendeur") d.settings.activeSince = at;
    return { result: { ok: true, member: { ...m! } }, changed: true };
  });
}

/* ---------------- Rôle, statut, fiche ---------------- */

export async function setMemberRole(userId: string, role: MemberRole, now = new Date()): Promise<Result<{ from: MemberRole; member: Member }>> {
  if (!USER_ID_RE.test(userId)) return { ok: false, error: "Membre introuvable." };
  const r = await mutateTeam<Result<{ from: MemberRole; member: Member }>>((d) => {
    const m = d.members.find((x) => x.id === userId);
    if (!m) return { result: { ok: false, error: "Membre introuvable." }, changed: false };
    if (m.role === role) return { result: { ok: false, error: "Ce membre a déjà ce rôle." }, changed: false };
    const from = m.role;
    m.role = role;
    m.updatedAt = now.toISOString();
    return { result: { ok: true, from, member: { ...m } }, changed: true };
  });
  // Nouveau rôle : nouvelle connexion (et nouvelle 2e étape si elle devient obligatoire).
  if (r.ok) await revokeMemberSessions(r.member.email, now);
  return r;
}

export async function setMemberStatus(userId: string, active: boolean, now = new Date()): Promise<Result<{ member: Member; status: MemberStatus }>> {
  if (!USER_ID_RE.test(userId)) return { ok: false, error: "Membre introuvable." };
  const r = await mutateTeam<Result<{ member: Member; status: MemberStatus }>>((d) => {
    const m = d.members.find((x) => x.id === userId);
    if (!m) return { result: { ok: false, error: "Membre introuvable." }, changed: false };
    const at = now.toISOString();
    if (active) {
      if (m.status !== "desactive") return { result: { ok: false, error: "Ce membre n’est pas désactivé." }, changed: false };
      m.status = m.activatedAt ? "actif" : "invite";
      delete m.disabledAt;
    } else {
      if (m.status === "desactive") return { result: { ok: false, error: "Ce membre est déjà désactivé." }, changed: false };
      m.status = "desactive";
      m.disabledAt = at;
    }
    m.updatedAt = at;
    return { result: { ok: true, member: { ...m }, status: m.status }, changed: true };
  });
  if (r.ok && !active) await revokeMemberSessions(r.member.email, now);
  return r;
}

export async function deleteMember(userId: string, now = new Date()): Promise<Result<{ member: Member }>> {
  if (!USER_ID_RE.test(userId)) return { ok: false, error: "Membre introuvable." };
  const r = await mutateTeam<Result<{ member: Member }>>((d) => {
    const i = d.members.findIndex((x) => x.id === userId);
    if (i < 0) return { result: { ok: false, error: "Membre introuvable." }, changed: false };
    const [m] = d.members.splice(i, 1);
    if (d.cursor === userId) d.cursor = null;
    return { result: { ok: true, member: m }, changed: true };
  });
  if (r.ok) await revokeMemberSessions(r.member.email, now);
  return r;
}

export interface MemberPatch {
  name?: string;
  phone?: string;
  smsConsent?: boolean;
  available?: boolean;
  cities?: string[];
  postal?: string[];
  commissionPercent?: number;
}

const postalPrefix = (s: string) => s.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 6);

export async function updateMember(userId: string, patch: MemberPatch, now = new Date()): Promise<Result<{ member: Member }>> {
  if (!USER_ID_RE.test(userId)) return { ok: false, error: "Membre introuvable." };
  if (patch.name !== undefined && !clip(patch.name, 80)) return { ok: false, error: "Indiquez le nom du membre." };
  const phone = patch.phone !== undefined && patch.phone.trim() ? toE164(patch.phone) : null;
  if (patch.phone !== undefined && patch.phone.trim() && !phone) return { ok: false, error: "Ce cellulaire n’est pas valide (10 chiffres)." };
  if (patch.postal?.some((p) => !/^[A-Z]\d[A-Z](\d([A-Z]\d?)?)?$/.test(postalPrefix(p)))) return { ok: false, error: "Codes postaux : le début d’un code, par exemple H7N ou J4K 1." };
  return mutateTeam<Result<{ member: Member }>>((d) => {
    const m = d.members.find((x) => x.id === userId);
    if (!m) return { result: { ok: false, error: "Membre introuvable." }, changed: false };
    if (patch.name !== undefined) m.name = clip(patch.name, 80);
    if (patch.phone !== undefined) {
      if (phone) m.phone = phone;
      else delete m.phone;
    }
    if (patch.smsConsent !== undefined) m.smsConsent = patch.smsConsent && Boolean(m.phone);
    if (patch.available !== undefined) m.available = patch.available;
    if (patch.cities) m.territory.cities = [...new Set(patch.cities.map((c) => clip(c, 60)).filter(Boolean))].slice(0, 200);
    if (patch.postal) m.territory.postal = [...new Set(patch.postal.map(postalPrefix).filter(Boolean))].slice(0, 200);
    if (patch.commissionPercent !== undefined) m.commissionPercent = cleanPercent(patch.commissionPercent, m.commissionPercent);
    m.updatedAt = now.toISOString();
    return { result: { ok: true, member: { ...m } }, changed: true };
  });
}

/** Dernière connexion (liste de l'équipe). Jamais bloquant. */
export async function noteLogin(email: string, now = new Date()): Promise<void> {
  const e = normalizeEmail(email);
  await mutateTeam((d) => {
    const m = d.members.find((x) => x.email === e);
    if (!m) return { result: undefined, changed: false };
    m.lastLoginAt = now.toISOString();
    return { result: undefined, changed: true };
  }).catch(() => undefined);
}

export async function saveTeamSettings(patch: Partial<TeamSettings>, by: string, now = new Date()): Promise<TeamSettings> {
  return mutateTeam((d) => {
    const before = d.settings;
    const next = normalizeTeamSettings({ ...before, ...patch, updatedAt: now.toISOString(), updatedBy: by });
    // Passage d'une répartition manuelle à automatique : seules les demandes à venir sont réparties.
    if (next.mode !== "manuel" && (before.mode === "manuel" || !before.activeSince)) next.activeSince = now.toISOString();
    d.settings = next;
    return { result: next, changed: true };
  });
}
