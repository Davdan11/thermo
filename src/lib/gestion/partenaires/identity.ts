/* ==================================================================
   Identité légale des partenaires installateurs : c'est l'entreprise
   qui réalise les travaux dans les soumissions (raison sociale, nom
   commercial, NEQ, adresse, téléphone, courriel, TPS, TVQ ; la
   licence RBQ reste celle de la conformité du volet A).

   Deux façons de la remplir :
     - le propriétaire la saisit ou la corrige dans la fiche du
       partenaire (elle est alors « vérifiée ») ;
     - le partenaire la remplit lui-même par un lien sécurisé :
       jeton de 256 bits dont seule l'empreinte SHA-256 est gardée,
       valable 14 jours, un seul envoi du formulaire. Le propriétaire
       la relit, la corrige au besoin et la confirme.
   Le numéro RBQ déclaré par le partenaire n'est copié dans la
   conformité qu'à la vérification, et seulement s'il y manque.

   AUCUNE vérification d'accès ici : les actions passent par
   requireAdmin() ; la page publique /identite/[jeton] est autorisée
   par son jeton seulement.
   ================================================================== */

import { z } from "zod";
import { box, brandedEmail, BRAND, p, SITE_URL, t } from "@/lib/crm/templates/layout";
import { escapeHtml } from "@/lib/security/escape";
import { hashToken, newToken, TOKEN_RE } from "../auth/magic-link";
import { createLimiter } from "../rate-limit";
import { readGestion } from "../store";
import { longDate } from "./format";
import { sendEmailSafe, sendOwnerSafe, sendSmsSafe, type Rendered } from "./send";
import type { Result } from "./service";
import { logPartner, mutatePartenaires, partnerOf, readPartenaires } from "./store";
import type { PartnerIdentity, SendStatus } from "./types";

export const IDENTITY_LINK_DAYS = 14;

/** Page publique du formulaire : lectures et envois, par adresse IP. */
export const identityLimits = {
  view: createLimiter({ limit: 60, windowMs: 10 * 60 * 1000 }),
  write: createLimiter({ limit: 10, windowMs: 60 * 60 * 1000 }),
};

const S = (max: number) => z.string().trim().max(max);

export const identityFieldsSchema = z.object({
  legalName: S(200),
  tradeName: S(200),
  neq: S(20),
  address: S(200),
  city: S(100),
  postalCode: S(10).transform((v) => v.toUpperCase()),
  phone: S(40),
  email: S(200).transform((v) => v.toLowerCase()),
  tps: S(30),
  tvq: S(30),
});

export type IdentityFields = z.infer<typeof identityFieldsSchema>;

/** Formulaire du partenaire : les mêmes champs, plus la licence RBQ déclarée et la confirmation. */
export const partnerSubmissionSchema = identityFieldsSchema.extend({
  legalName: S(200).min(2, "legalName"),
  rbqDeclared: S(20),
  confirm: z.literal(true, "confirm"),
});

export const IDENTITY_ERRORS: Record<string, string> = {
  legalName: "Écrivez la raison sociale (le nom légal de l’entreprise).",
  confirm: "Cochez « Je confirme que ces renseignements sont exacts ».",
  invalide: "Ce lien n’est pas valide.",
  expire: "Ce lien est expiré : demandez-nous un nouveau lien.",
  recu: "Vos renseignements ont déjà été reçus. Pour une correction, appelez-nous.",
  donnees: "Un champ est trop long ou invalide. Vérifiez le formulaire.",
};

export const emptyIdentityFields = (): IdentityFields => ({ legalName: "", tradeName: "", neq: "", address: "", city: "", postalCode: "", phone: "", email: "", tps: "", tvq: "" });

const fail = (error: string): { ok: false; error: string } => ({ ok: false, error });
const pick = (i: IdentityFields): IdentityFields => ({ legalName: i.legalName, tradeName: i.tradeName, neq: i.neq, address: i.address, city: i.city, postalCode: i.postalCode, phone: i.phone, email: i.email, tps: i.tps, tvq: i.tvq });

/* ---------------- Propriétaire ---------------- */

/** Saisie ou correction par le propriétaire : l'identité est considérée comme vérifiée. */
export function saveIdentity(installerId: string, input: IdentityFields, by: string, now = new Date()): Promise<Result> {
  return mutatePartenaires<Result>((d) => {
    const rec = partnerOf(d, installerId);
    const at = now.toISOString();
    const prev = rec.identity;
    rec.identity = {
      ...pick(input),
      rbqDeclared: prev?.rbqDeclared ?? "",
      source: "proprietaire",
      updatedAt: at,
      updatedBy: by,
      ...(prev?.submittedAt ? { submittedAt: prev.submittedAt } : {}),
      verifiedAt: at,
      verifiedBy: by,
    } satisfies PartnerIdentity;
    logPartner(d, installerId, { at, by, action: prev ? "identité légale corrigée" : "identité légale saisie", detail: input.legalName || undefined });
    return { result: { ok: true }, changed: true };
  });
}

/** Confirmation de l'identité transmise par le partenaire. Le numéro RBQ déclaré complète la conformité s'il y manque. */
export function verifyIdentity(installerId: string, by: string, now = new Date()): Promise<Result> {
  return mutatePartenaires<Result>((d) => {
    const rec = d.partners[installerId];
    if (!rec?.identity) return { result: fail("Aucune identité à vérifier."), changed: false };
    const at = now.toISOString();
    rec.identity.verifiedAt = at;
    rec.identity.verifiedBy = by;
    let detail = rec.identity.legalName || undefined;
    if (rec.identity.rbqDeclared && !rec.compliance.rbq.number.trim()) {
      rec.compliance.rbq.number = rec.identity.rbqDeclared;
      rec.compliance.rbq.updatedAt = at;
      rec.compliance.rbq.updatedBy = by;
      detail = `${detail ?? ""}${detail ? " · " : ""}licence RBQ déclarée copiée dans la conformité`;
    }
    logPartner(d, installerId, { at, by, action: "identité légale vérifiée", detail });
    return { result: { ok: true }, changed: true };
  });
}

/** Nouveau lien sécurisé (remplace le précédent), envoyé au partenaire par courriel et par texto. */
export async function issueIdentityLink(installerId: string, by: string, baseUrl: string, now = new Date()): Promise<Result<{ link: string; email: SendStatus; sms: SendStatus }>> {
  const inst = (await readGestion()).installers.find((i) => i.id === installerId);
  if (!inst) return fail("Installateur introuvable.");
  const token = newToken();
  const expiresAt = new Date(now.getTime() + IDENTITY_LINK_DAYS * 86_400_000).toISOString();
  const ok = await mutatePartenaires<boolean>((d) => {
    if (d.partners[installerId]?.ended) return { result: false, changed: false };
    const rec = partnerOf(d, installerId);
    rec.identityLink = { tokenHash: hashToken(token), createdAt: now.toISOString(), createdBy: by, expiresAt, sends: [] };
    return { result: true, changed: true };
  });
  if (!ok) return fail("Ce partenariat est terminé.");
  const link = `${baseUrl}/identite/${token}`;
  const until = longDate(expiresAt);
  const [email, sms] = await Promise.all([
    sendEmailSafe(inst.email, identityInvite({ contactName: inst.contactName, company: inst.company, link, until }), "partenaires : identité légale à remplir"),
    sendSmsSafe(inst.phone, `${BRAND.name} : pour inscrire ${inst.company} comme entrepreneur dans nos soumissions, remplissez son identité légale (lien valable jusqu’au ${until}) : ${link}`),
  ]);
  await mutatePartenaires((d) => {
    const rec = d.partners[installerId];
    if (rec?.identityLink?.tokenHash === hashToken(token)) rec.identityLink.sends.push({ at: now.toISOString(), email, sms });
    logPartner(d, installerId, { at: now.toISOString(), by, action: "lien d’identité légale envoyé", detail: `courriel ${email} · texto ${sms}` });
    return { result: undefined, changed: true };
  });
  return { ok: true, link, email, sms };
}

/* ---------------- Page du partenaire (jeton) ---------------- */

export type IdentityView =
  | { state: "invalide" | "expire" | "recu" }
  | { state: "a-remplir"; company: string; contactName: string; values: IdentityFields & { rbqDeclared: string }; expiresAt: string };

function findLink(d: Awaited<ReturnType<typeof readPartenaires>>, token: string) {
  if (!TOKEN_RE.test(token)) return null;
  const hash = hashToken(token);
  for (const [installerId, rec] of Object.entries(d.partners)) if (rec.identityLink?.tokenHash === hash) return { installerId, rec, link: rec.identityLink };
  return null;
}

/** Lecture seule (GET) : n'écrit rien. Les valeurs déjà connues sont proposées au partenaire (ce sont les siennes). */
export async function identityView(token: string, now = new Date()): Promise<IdentityView> {
  const [d, g] = await Promise.all([readPartenaires(), readGestion()]);
  const f = findLink(d, token);
  if (!f) return { state: "invalide" };
  if (f.link.usedAt) return { state: "recu" };
  if (Date.parse(f.link.expiresAt) < now.getTime() || f.rec.ended) return { state: "expire" };
  const inst = g.installers.find((i) => i.id === f.installerId);
  if (!inst) return { state: "invalide" };
  const cur = f.rec.identity;
  const values = cur
    ? { ...pick(cur), rbqDeclared: cur.rbqDeclared || f.rec.compliance.rbq.number || inst.rbq }
    : { ...emptyIdentityFields(), tradeName: inst.company, phone: inst.phone, email: inst.email, rbqDeclared: f.rec.compliance.rbq.number || inst.rbq };
  return { state: "a-remplir", company: inst.company, contactName: inst.contactName, values, expiresAt: f.link.expiresAt };
}

/** Champs reçus du formulaire (la confirmation est vérifiée par le schéma : cochée, sinon refus « confirm »). */
export type SubmissionInput = Omit<z.input<typeof partnerSubmissionSchema>, "confirm"> & { confirm: boolean };

/** Envoi du formulaire par le partenaire : un seul envoi par lien ; le propriétaire est avisé et doit vérifier. */
export async function submitIdentity(token: string, raw: SubmissionInput, ctx: { baseUrl: string }, now = new Date()): Promise<Result> {
  const parsed = partnerSubmissionSchema.safeParse(raw);
  if (!parsed.success) {
    const code = parsed.error.issues[0]?.message ?? "donnees";
    return fail(code in IDENTITY_ERRORS ? code : "donnees");
  }
  const input = parsed.data;
  const out = await mutatePartenaires<Result<{ installerId: string }>>((d) => {
    const f = findLink(d, token);
    if (!f) return { result: fail("invalide"), changed: false };
    if (f.link.usedAt) return { result: fail("recu"), changed: false };
    if (Date.parse(f.link.expiresAt) < now.getTime() || f.rec.ended) return { result: fail("expire"), changed: false };
    const at = now.toISOString();
    f.rec.identity = {
      ...pick(input),
      rbqDeclared: input.rbqDeclared,
      source: "partenaire",
      updatedAt: at,
      updatedBy: `installateur:${f.installerId}`,
      submittedAt: at,
    } satisfies PartnerIdentity;
    f.link.usedAt = at;
    logPartner(d, f.installerId, { at, by: `installateur:${f.installerId}`, action: "identité légale transmise par le partenaire", detail: "à vérifier" });
    return { result: { ok: true, installerId: f.installerId }, changed: true };
  });
  if (!out.ok) return out;
  const inst = (await readGestion()).installers.find((i) => i.id === out.installerId);
  await sendOwnerSafe(identityReceivedOwner({ company: inst?.company ?? "Un partenaire", legalName: input.legalName, link: `${ctx.baseUrl}/gestion/partenaires/${out.installerId}#identite` }), "partenaires : identité légale reçue");
  return { ok: true };
}

/* ---------------- Messages ---------------- */

const INSTALLER_REASON = "Vous recevez ce message parce que vous êtes installateur partenaire de Thermopompes À Vendre.";
const OWNER_REASON = "Message automatique de l’outil de gestion.";
const first = (name: string) => name.trim().split(/\s+/)[0] ?? "";

function identityInvite(d: { contactName: string; company: string; link: string; until: string }): Rendered {
  const subject = `Identité légale de ${d.company} : à remplir pour nos soumissions`;
  const lead = `Dans les soumissions que nous préparons pour vos chantiers, ${d.company} figure comme l’entreprise qui réalise les travaux. Remplissez son identité légale (raison sociale, NEQ, licence RBQ, adresse, TPS et TVQ) : nous la vérifions avant de l’utiliser.`;
  const html = brandedEmail({
    title: subject,
    preheader: "Lien personnel et sécurisé, deux minutes.",
    firstName: first(d.contactName),
    body: [p(t(lead)), p(`Le lien est personnel et valable jusqu’au ${escapeHtml(d.until)}. Ne le transférez pas.`, { muted: true, small: true })].join(""),
    cta: { label: "Remplir l’identité légale", href: escapeHtml(d.link) },
    reason: INSTALLER_REASON,
    optOutText: "",
  });
  const text = [`Bonjour ${first(d.contactName)},`.replace(/ ,$/, ","), "", lead, "", "Remplir :", d.link, "", `Lien personnel, valable jusqu’au ${d.until}.`, "", "--", "L’équipe Thermopompes À Vendre", `${BRAND.phone} · ${BRAND.email}`, SITE_URL].join("\n");
  return { subject, html, text };
}

function identityReceivedOwner(d: { company: string; legalName: string; link: string }): Rendered {
  const subject = `${d.company} a transmis son identité légale : à vérifier`;
  const html = brandedEmail({
    title: subject,
    preheader: "Relisez-la et confirmez-la dans la fiche du partenaire.",
    body: [p(t("Le partenaire a rempli son identité légale. Relisez-la, corrigez au besoin, puis confirmez-la : elle servira dans les soumissions.")), box("Reçu", [["Partenaire", d.company], ["Raison sociale déclarée", d.legalName]])].join(""),
    cta: { label: "Vérifier dans la fiche", href: escapeHtml(d.link) },
    reason: OWNER_REASON,
    optOutText: "",
  });
  const text = ["Bonjour,", "", subject, `- Raison sociale déclarée : ${d.legalName}`, "", d.link].join("\n");
  return { subject, html, text };
}
