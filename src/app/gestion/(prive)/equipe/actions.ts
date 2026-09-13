"use server";

/* ==================================================================
   Chantier V — Server Actions de l'équipe, de l'attribution des
   clients et des relevés. TOUTES réservées au propriétaire :
   requireAdmin() d'abord (une action est joignable par un POST
   direct), validation, écriture, journal d'audit.
   ================================================================== */

import { refresh } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { CLIENT_ID_RE } from "@/lib/gestion/crm/types";
import { createLimiter } from "@/lib/gestion/rate-limit";
import { publicBaseUrl } from "@/lib/gestion/request";
import { audit } from "@/lib/gestion/securite/audit";
import { deleteMember, inviteMember, resendInvite, saveTeamSettings, setMemberRole, setMemberStatus, updateMember, type MemberPatch } from "@/lib/gestion/equipe/members";
import { sendInvitation } from "@/lib/gestion/equipe/notify";
import { reassignClient, redistributeFrom, runRepartition } from "@/lib/gestion/equipe/repartition";
import { MONTH_RE, payStatement } from "@/lib/gestion/equipe/service";
import { readTeam } from "@/lib/gestion/equipe/store";
import { ASSIGN_MODES, MEMBER_ROLES, USER_ID_RE } from "@/lib/gestion/equipe/types";

export type TeamActionState = { ok: true; message: string } | { ok: false; error: string } | undefined;

const INVALID = { ok: false as const, error: "Demande invalide." };
const str = (fd: FormData, k: string) => String(fd.get(k) ?? "").trim();
const userId = z.string().regex(USER_ID_RE);
/** Invitations : 20 par heure (un courriel part à chaque fois). */
const inviteLimiter = createLimiter({ limit: 20, windowMs: 60 * 60_000 });

function outcomeText(o: string): string {
  return o === "envoye" ? "Invitation envoyée par courriel." : o === "simule" ? "Invitation simulée (développement) : rien n’est parti." : "Invitation enregistrée, mais le courriel n’est pas parti : renvoyez-la depuis sa fiche.";
}

/* ---------------- Membres ---------------- */

export async function inviteMemberAction(_prev: TeamActionState, fd: FormData): Promise<TeamActionState> {
  const session = await requireAdmin();
  const p = z.object({ email: z.string().max(200), name: z.string().min(1, "Indiquez le nom du membre.").max(80), role: z.enum(MEMBER_ROLES), phone: z.string().max(30) }).safeParse({ email: str(fd, "email"), name: str(fd, "name"), role: str(fd, "role") || "vendeur", phone: str(fd, "phone") });
  if (!p.success) return { ok: false, error: p.error.issues[0]?.message ?? "Vérifiez le formulaire." };
  if (!inviteLimiter.hit(session.email)) return { ok: false, error: "Trop d’invitations en peu de temps. Réessayez plus tard." };
  const r = await inviteMember(p.data, session.email);
  if (!r.ok) return r;
  const days = (await readTeam()).settings.inviteDays;
  const out = await sendInvitation(r.member, `${await publicBaseUrl()}/gestion/connexion/invitation?jeton=${r.token}`, days);
  await audit("equipe.invitation", { membre: r.member.id, role: r.member.role, courriel: out }, { qui: session.email });
  refresh();
  return { ok: true, message: outcomeText(out) };
}

export async function resendInviteAction(id: unknown): Promise<TeamActionState> {
  const session = await requireAdmin();
  const p = userId.safeParse(id);
  if (!p.success) return INVALID;
  if (!inviteLimiter.hit(session.email)) return { ok: false, error: "Trop d’invitations en peu de temps. Réessayez plus tard." };
  const r = await resendInvite(p.data, session.email);
  if (!r.ok) return r;
  const days = (await readTeam()).settings.inviteDays;
  const out = await sendInvitation(r.member, `${await publicBaseUrl()}/gestion/connexion/invitation?jeton=${r.token}`, days);
  await audit("equipe.invitation", { membre: r.member.id, role: r.member.role, renvoi: true, courriel: out }, { qui: session.email });
  refresh();
  return { ok: true, message: outcomeText(out) };
}

export async function setRoleAction(id: unknown, role: unknown): Promise<TeamActionState> {
  const session = await requireAdmin();
  const p = z.object({ id: userId, role: z.enum(MEMBER_ROLES) }).safeParse({ id, role });
  if (!p.success) return INVALID;
  const r = await setMemberRole(p.data.id, p.data.role);
  if (!r.ok) return r;
  await audit("equipe.role", { membre: p.data.id, de: r.from, vers: p.data.role }, { qui: session.email });
  refresh();
  return { ok: true, message: `Rôle changé : ${p.data.role === "adjoint" ? "adjoint" : "vendeur"}. Ses sessions ont été fermées.` };
}

export async function setStatusAction(id: unknown, active: unknown): Promise<TeamActionState> {
  const session = await requireAdmin();
  const p = z.object({ id: userId, active: z.boolean() }).safeParse({ id, active });
  if (!p.success) return INVALID;
  const r = await setMemberStatus(p.data.id, p.data.active);
  if (!r.ok) return r;
  await audit(p.data.active ? "equipe.reactive" : "equipe.desactive", { membre: p.data.id }, { qui: session.email });
  refresh();
  return { ok: true, message: p.data.active ? "Membre réactivé." : "Membre désactivé : ses sessions sont fermées et il ne reçoit plus de demandes." };
}

export async function deleteMemberAction(id: string, _prev: TeamActionState, fd: FormData): Promise<TeamActionState> {
  const session = await requireAdmin();
  const p = userId.safeParse(id);
  if (!p.success) return INVALID;
  if (fd.get("confirmer") !== "oui") return { ok: false, error: "Cochez la case de confirmation pour supprimer ce membre." };
  const r = await deleteMember(p.data);
  if (!r.ok) return r;
  await audit("equipe.supprime", { membre: p.data, role: r.member.role }, { qui: session.email });
  redirect("/gestion/equipe?supprime=1");
}

export async function updateMemberAction(id: string, _prev: TeamActionState, fd: FormData): Promise<TeamActionState> {
  const session = await requireAdmin();
  const p = userId.safeParse(id);
  if (!p.success) return INVALID;
  const list = (k: string) =>
    str(fd, k)
      .split(/[,;\n]+/)
      .map((x) => x.trim())
      .filter(Boolean);
  const pct = str(fd, "commission");
  const patch: MemberPatch = {
    name: str(fd, "name"),
    phone: str(fd, "phone"),
    smsConsent: fd.get("smsConsent") === "on",
    available: fd.get("available") === "on",
    cities: list("cities"),
    postal: list("postal"),
    ...(pct ? { commissionPercent: Number(pct.replace(",", ".")) } : {}),
  };
  if (pct && (!Number.isFinite(patch.commissionPercent) || patch.commissionPercent! < 0 || patch.commissionPercent! > 100)) return { ok: false, error: "La part de commission est un pourcentage de 0 à 100." };
  const r = await updateMember(p.data, patch);
  if (!r.ok) return r;
  await audit("equipe.modifie", { membre: p.data, disponible: r.member.available, commission: r.member.commissionPercent }, { qui: session.email });
  refresh();
  return { ok: true, message: "Fiche enregistrée." };
}

/* ---------------- Réglages ---------------- */

export async function saveTeamSettingsAction(_prev: TeamActionState, fd: FormData): Promise<TeamActionState> {
  const session = await requireAdmin();
  const p = z
    .object({ mode: z.enum(ASSIGN_MODES), inviteDays: z.number().int().min(1).max(30) })
    .safeParse({ mode: str(fd, "mode"), inviteDays: Number(str(fd, "inviteDays") || "7") });
  if (!p.success) return { ok: false, error: "Vérifiez les réglages (invitation valable de 1 à 30 jours)." };
  const s = await saveTeamSettings(
    { mode: p.data.mode, inviteDays: p.data.inviteDays, require2faVendeurs: fd.get("require2faVendeurs") === "on", require2faAdjoints: fd.get("require2faAdjoints") === "on", notifyEmail: fd.get("notifyEmail") === "on", notifySms: fd.get("notifySms") === "on" },
    session.email,
  );
  await audit("equipe.reglages", { mode: s.mode, deuxEtapesVendeurs: s.require2faVendeurs, deuxEtapesAdjoints: s.require2faAdjoints, avisCourriel: s.notifyEmail, avisTexto: s.notifySms }, { qui: session.email });
  refresh();
  return { ok: true, message: "Réglages de l’équipe enregistrés." };
}

/** « Répartir maintenant » : un passage de la répartition, sans attendre le prochain tick. */
export async function runRepartitionAction(): Promise<TeamActionState> {
  await requireAdmin();
  const r = await runRepartition();
  refresh();
  return { ok: true, message: r.assigned ? `${r.assigned} demande${r.assigned > 1 ? "s" : ""} répartie${r.assigned > 1 ? "s" : ""}.` : r.skipped ? `Rien à répartir (${r.skipped}).` : "Rien à répartir : toutes les nouvelles demandes ont un vendeur." };
}

export async function redistributeAction(id: unknown): Promise<TeamActionState> {
  const session = await requireAdmin();
  const p = userId.safeParse(id);
  if (!p.success) return INVALID;
  const r = await redistributeFrom(p.data, session.email);
  refresh();
  return r.moved ? { ok: true, message: `${r.moved} dossier${r.moved > 1 ? "s" : ""} ouvert${r.moved > 1 ? "s" : ""} redistribué${r.moved > 1 ? "s" : ""}${r.left ? ` ; ${r.left} restent` : ""}.` } : { ok: false, error: r.left ? "Aucun autre vendeur actif et disponible pour reprendre ses dossiers." : "Aucun dossier ouvert à redistribuer." };
}

/* ---------------- Attribution d'un client ---------------- */

export async function reassignClientAction(clientId: string, _prev: TeamActionState, fd: FormData): Promise<TeamActionState> {
  const session = await requireAdmin();
  const p = z.object({ id: z.string().regex(CLIENT_ID_RE), to: z.union([userId, z.literal("")]), reason: z.string().max(200) }).safeParse({ id: clientId, to: str(fd, "vendeur"), reason: str(fd, "raison") });
  if (!p.success) return INVALID;
  const r = await reassignClient(p.data.id, p.data.to || null, session.email, p.data.reason);
  if (!r.ok) return r;
  await audit("crm.reattribution", { client: r.id, de: r.from, vers: r.to }, { qui: session.email });
  refresh();
  return { ok: true, message: r.to ? "Client réattribué : le vendeur est averti." : "Client retiré : plus aucun vendeur ne le voit." };
}

/* ---------------- Relevés ---------------- */

export async function payStatementAction(month: string, id: string, _prev: TeamActionState, fd: FormData): Promise<TeamActionState> {
  const session = await requireAdmin();
  const p = z.object({ month: z.string().regex(MONTH_RE), id: userId, reference: z.string().max(80) }).safeParse({ month, id, reference: str(fd, "reference") });
  if (!p.success) return INVALID;
  if (fd.get("confirmer") !== "oui") return { ok: false, error: "Cochez la case : le paiement est fait." };
  const r = await payStatement(p.data.month, p.data.id, session.email, p.data.reference);
  if (!r.ok) return r;
  await audit("vendeurs.releve", { vendeur: p.data.id, mois: p.data.month, montant: r.amountCents }, { qui: session.email });
  refresh();
  return { ok: true, message: "Relevé marqué payé : il est figé." };
}
