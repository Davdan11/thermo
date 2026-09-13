/* ==================================================================
   Opérations du volet A côté partenaires : versions de l'entente,
   envois et signature, conformité, niveaux, fin de partenariat,
   citations, réglages.
   AUCUNE vérification d'accès ici : chaque page, action et route de
   /gestion passe d'abord par requireAdmin() ; la page de signature
   est autorisée par son jeton (empreinte SHA-256 seulement).
   Écritures sous verrou, envois ensuite (jamais sous verrou).
   ================================================================== */

import { readSettings } from "@/lib/soumissions/store";
// Conformité C3 : identité légale de la plateforme et trousse contractuelle (texte dans les données, jamais dans le code).
import { platformIssues, readPlatformIdentity } from "@/lib/plateforme/identite";
import { readTrousse, trousseLoaded } from "@/lib/plateforme/trousse";
import { hashToken, newToken, TOKEN_RE } from "../auth/magic-link";
import { readSav } from "../sav/store";
import { audit } from "../securite/audit";
import { mutateGestion, readGestion } from "../store";
import type { Installer } from "../types";
import {
  agreementHash,
  agreementState,
  citationSentence,
  findClause,
  finalTextProblems,
  nextVersionNumber,
  partnerFillFor,
  partnerReadiness,
  presentedHash,
  publishedVersion,
  resolveVersion,
  sha256Text,
  signedTextOf,
  TEMPLATE_TITLE,
  templateArticles,
  unresolvedForSend,
  type ResolvedAgreement,
} from "./agreement";
import { parseSubcategories } from "./compliance";
import { renderSignedDocument } from "./document";
import { agreementFromTrousse } from "./entente-trousse";
import { FileError, MAX_PDF_BYTES, parseSignaturePng, processPhoto, readPrivateFile, rid, sha256Hex, sniff, writePrivateFile } from "./files";
import { ARTICLES, endedOf, terminationDates, terminationPhase } from "./fin";
import { longDate, longDateTime } from "./format";
import { agreementPlatformValues, normalizeValues, partnerAgreementValues, partnerTokenHint } from "./jetons";
import * as msg from "./messages";
import { sendEmailSafe, sendOwnerSafe, sendSmsSafe } from "./send";
import { compliantDoc, logPartner, mutatePartenaires, normalizePartnerSettings, partenairesFilesDir, partnerOf, readPartenaires } from "./store";
import type { AgreementArticle, AgreementVersion, ComplianceKind, HalocarbonCert, PartenairesData, PartnerSettings, SendStatus, SignedAgreement, TerminationMode, Tier } from "./types";

export type Result<T extends object = object> = ({ ok: true } & T) | { ok: false; error: string };
const fail = (error: string): { ok: false; error: string } => ({ ok: false, error });

/* ---------------- Versions de l'entente ---------------- */

export interface VersionInput {
  title: string;
  preamble: string;
  articles: AgreementArticle[];
}

export async function listVersions(): Promise<AgreementVersion[]> {
  return (await readPartenaires()).agreements.sort((a, b) => b.number - a.number);
}

export async function getVersion(id: string): Promise<AgreementVersion | null> {
  return (await readPartenaires()).agreements.find((a) => a.id === id) ?? null;
}

/** Un seul brouillon à la fois : copie de la version en vigueur, sinon le gabarit (titres seulement). */
export function createDraft(by: string, now = new Date()): Promise<Result<{ id: string }>> {
  return mutatePartenaires<Result<{ id: string }>>((d) => {
    const open = d.agreements.find((a) => a.status === "brouillon" || a.status === "validee");
    if (open) return { result: { ok: true, id: open.id }, changed: false };
    const base = publishedVersion(d);
    const stamp = now.toISOString();
    const v: AgreementVersion = {
      id: rid("a"),
      number: nextVersionNumber(d),
      title: base?.title ?? TEMPLATE_TITLE,
      preamble: base?.preamble ?? "",
      articles: base ? structuredClone(base.articles) : templateArticles(),
      status: "brouillon",
      createdAt: stamp,
      createdBy: by,
      updatedAt: stamp,
      updatedBy: by,
      // Conformité C3 : une nouvelle version de l'entente maître garde ses parties, annexes et champs (pas les valeurs figées).
      ...(base ? copyMasterParts(base) : {}),
    };
    d.agreements.push(v);
    return { result: { ok: true, id: v.id }, changed: true };
  });
}

/* ---------------- Conformité C3 : entente maître tirée de la trousse ---------------- */

function copyMasterParts(base: AgreementVersion): Partial<AgreementVersion> {
  const out: Partial<AgreementVersion> = {};
  if (base.source) out.source = structuredClone(base.source);
  if (base.headings) out.headings = structuredClone(base.headings);
  if (base.headerNote) out.headerNote = base.headerNote;
  if (base.parties) out.parties = structuredClone(base.parties);
  if (base.annexes) out.annexes = structuredClone(base.annexes);
  if (base.signatureBlock) out.signatureBlock = structuredClone(base.signatureBlock);
  if (base.fields) out.fields = { ...base.fields };
  return out;
}

/** Brouillon depuis la trousse importée : parties, préambule, articles 2.1 à 2.n (numéros de l'avocat), annexes, signatures. */
export async function createDraftFromTrousse(by: string, now = new Date()): Promise<Result<{ id: string; number: number }>> {
  const t = await readTrousse();
  if (!trousseLoaded(t)) return fail("Aucune trousse importée : importez-la d’abord (npx tsx scripts/importer-trousse.ts <fichier.txt>).");
  const built = agreementFromTrousse(t);
  if (!built.ok) return fail(built.error);
  const a = built.value;
  return mutatePartenaires<Result<{ id: string; number: number }>>((d) => {
    const open = d.agreements.find((x) => x.status === "brouillon" || x.status === "validee");
    if (open) return { result: fail(`La version ${open.number} est déjà en préparation : terminez-la ou supprimez-la d’abord.`), changed: false };
    const stamp = now.toISOString();
    const v: AgreementVersion = {
      id: rid("a"),
      number: nextVersionNumber(d),
      title: a.title,
      preamble: a.preamble,
      articles: a.articles,
      status: "brouillon",
      createdAt: stamp,
      createdBy: by,
      updatedAt: stamp,
      updatedBy: by,
      source: a.source,
      headings: a.headings,
      ...(a.headerNote ? { headerNote: a.headerNote } : {}),
      parties: a.parties,
      annexes: a.annexes,
      ...(a.signatureBlock ? { signatureBlock: a.signatureBlock } : {}),
    };
    d.agreements.push(v);
    return { result: { ok: true, id: v.id, number: v.number }, changed: true };
  });
}

/** Champs propres à l'entente (ni la plateforme ni l'installateur : district judiciaire…), au brouillon seulement. */
export function saveVersionFields(id: string, fields: Record<string, string>, by: string, now = new Date()): Promise<Result> {
  return mutatePartenaires<Result>((d) => {
    const v = d.agreements.find((a) => a.id === id);
    if (!v) return { result: fail("Version introuvable."), changed: false };
    if (v.status !== "brouillon") return { result: fail("Seul un brouillon se modifie."), changed: false };
    v.fields = Object.fromEntries(Object.entries(normalizeValues(fields)).slice(0, 30).map(([k, x]) => [k, x.slice(0, 200)]));
    v.updatedAt = now.toISOString();
    v.updatedBy = by;
    return { result: { ok: true }, changed: true };
  });
}

export function saveDraft(id: string, input: VersionInput, by: string, now = new Date()): Promise<Result> {
  return mutatePartenaires<Result>((d) => {
    const v = d.agreements.find((a) => a.id === id);
    if (!v) return { result: fail("Version introuvable."), changed: false };
    if (v.status !== "brouillon") return { result: fail("Seul un brouillon se modifie. Revenez au brouillon pour changer le texte."), changed: false };
    v.title = input.title.trim();
    v.preamble = input.preamble.trim();
    // Conformité C3 : le numéro de l'avocat (« 2.24 ») est conservé.
    v.articles = input.articles.map((a) => ({ ...(a.number?.trim() ? { number: a.number.trim() } : {}), title: a.title.trim(), paragraphs: a.paragraphs.map((p) => p.trim()) }));
    v.updatedAt = now.toISOString();
    v.updatedBy = by;
    return { result: { ok: true }, changed: true };
  });
}

/** Conformité C3 : version dont des paragraphes visent les parties (entente maître) : l'identité de la plateforme est exigée. */
const isMaster = (v: Pick<AgreementVersion, "source" | "parties" | "signatureBlock">) => v.source?.kind === "trousse" || Boolean(v.parties?.length || v.signatureBlock);

/**
 * « Texte final validé » : plus aucune marque « [À rédiger par l'avocat] », empreinte figée.
 * Conformité C3 : entente maître, identité de la plateforme complète, ses champs remplis et figés, renvois internes justes.
 */
export async function validateVersion(id: string, by: string, now = new Date()): Promise<Result> {
  const identity = await readPlatformIdentity();
  return mutatePartenaires<Result>((d) => {
    const v = d.agreements.find((a) => a.id === id);
    if (!v) return { result: fail("Version introuvable."), changed: false };
    if (v.status !== "brouillon") return { result: fail("Cette version n’est pas un brouillon."), changed: false };
    let platform: Record<string, string> | undefined;
    if (isMaster(v)) {
      const issues = platformIssues(identity);
      if (issues.length) return { result: fail(`Identité de la plateforme incomplète : ${issues.map((i) => i.label).join(", ")}.`), changed: false };
      platform = agreementPlatformValues(identity, v.fields);
    }
    const problems = finalTextProblems(v, platform ? { platform } : {});
    if (problems.length) return { result: fail(problems.join(" ")), changed: false };
    if (platform) v.platformFill = platform;
    v.status = "validee";
    v.validatedAt = now.toISOString();
    v.validatedBy = by;
    v.textSha256 = agreementHash(v);
    return { result: { ok: true }, changed: true };
  });
}

export function unvalidateVersion(id: string, by: string, now = new Date()): Promise<Result> {
  return mutatePartenaires<Result>((d) => {
    const v = d.agreements.find((a) => a.id === id);
    if (!v || v.status !== "validee") return { result: fail("Seule une version validée, non publiée, revient au brouillon."), changed: false };
    v.status = "brouillon";
    delete v.validatedAt;
    delete v.validatedBy;
    delete v.textSha256;
    delete v.platformFill;
    v.updatedAt = now.toISOString();
    v.updatedBy = by;
    return { result: { ok: true }, changed: true };
  });
}

export function deleteDraft(id: string): Promise<Result> {
  return mutatePartenaires<Result>((d) => {
    const i = d.agreements.findIndex((a) => a.id === id && (a.status === "brouillon" || a.status === "validee"));
    if (i < 0) return { result: fail("Seule une version jamais publiée peut être supprimée."), changed: false };
    d.agreements.splice(i, 1);
    return { result: { ok: true }, changed: true };
  });
}

/** Publication : la version validée devient celle en vigueur ; tous les partenaires doivent la signer (délai de grâce pour ceux déjà en place). */
export function publishVersion(id: string, graceDays: number, by: string, now = new Date()): Promise<Result<{ number: number }>> {
  return mutatePartenaires<Result<{ number: number }>>((d) => {
    const v = d.agreements.find((a) => a.id === id);
    if (!v) return { result: fail("Version introuvable."), changed: false };
    if (v.status !== "validee" || !v.validatedAt) return { result: fail("Marquez d’abord le texte comme « texte final validé »."), changed: false };
    if (v.textSha256 !== agreementHash(v)) return { result: fail("Le texte a changé depuis la validation : revalidez-le."), changed: false };
    const stamp = now.toISOString();
    for (const old of d.agreements) {
      if (old.status === "publiee") {
        old.status = "remplacee";
        old.replacedAt = stamp;
      }
    }
    for (const r of d.requests) if (r.versionId !== v.id && !r.signatureId && !r.cancelledAt) r.cancelledAt = stamp;
    v.status = "publiee";
    v.publishedAt = stamp;
    v.publishedBy = by;
    v.graceDays = Math.max(0, Math.min(120, Math.round(graceDays)));
    for (const iid of new Set(d.signatures.map((s) => s.installerId))) logPartner(d, iid, { at: stamp, by, action: `version ${v.number} publiée : re-signature demandée`, detail: `délai de grâce de ${v.graceDays} jours` });
    return { result: { ok: true, number: v.number }, changed: true };
  });
}

/* ---------------- Envoi et relance ---------------- */

export interface SendOutcome {
  link: string;
  email: SendStatus;
  sms: SendStatus;
  kind: "envoi" | "relance";
}

export async function sendAgreement(installerId: string, by: string, baseUrl: string, now = new Date()): Promise<Result<SendOutcome>> {
  const inst = (await readGestion()).installers.find((i) => i.id === installerId);
  if (!inst) return fail("Installateur introuvable.");
  const identity = await readPlatformIdentity();
  const token = newToken();
  const prep = await mutatePartenaires<Result<{ requestId: string; kind: "envoi" | "relance"; number: number; resign: boolean; graceUntil: string | null }>>((d) => {
    const v = publishedVersion(d);
    if (!v || !v.validatedAt) return { result: fail("Aucune entente en vigueur : validez puis publiez une version du texte."), changed: false };
    if (endedOf(d.partners[installerId], now)) return { result: fail("Ce partenariat est terminé."), changed: false };
    // Conformité C3 : aucun envoi sans l'identité complète de la plateforme, ni avec des champs entre crochets restants.
    const issues = platformIssues(identity);
    if (issues.length) return { result: fail(`Identité de la plateforme incomplète : ${issues.map((i) => i.label).join(", ")}. Complétez-la avant d’envoyer l’entente.`), changed: false };
    const readiness = partnerReadiness(v, partnerAgreementValues(inst, d.partners[installerId]));
    if (readiness.problems.length) return { result: fail(`${readiness.problems.join(" ; ")}.`), changed: false };
    const partnerFill = partnerFillFor(readiness);
    const left = unresolvedForSend(v, partnerFill);
    if (left.platform.length || left.partner.length) {
      const list = [...left.platform.map((k) => `[${k}] (plateforme)`), ...left.partner.map((k) => `[${k}] : ${partnerTokenHint(k)}`)];
      return { result: fail(`Champs entre crochets à remplir avant l’envoi : ${list.join(" ; ")}.`), changed: false };
    }
    const st = agreementState(inst, d, now);
    if (st.code === "signee") return { result: fail("La version en vigueur est déjà signée."), changed: false };
    let req = st.request;
    const kind: "envoi" | "relance" = req?.sends.length ? "relance" : "envoi";
    if (!req) {
      req = { id: rid("r"), installerId, versionId: v.id, tokenHash: hashToken(token), previousHashes: [], createdAt: now.toISOString(), createdBy: by, sends: [], openCount: 0 };
      d.requests.push(req);
    } else {
      req.previousHashes.push(req.tokenHash);
      req.tokenHash = hashToken(token);
    }
    // Valeurs de l'installateur figées à l'envoi (une relance les met à jour).
    if (Object.keys(partnerFill).length) req.partnerFill = partnerFill;
    else delete req.partnerFill;
    return { result: { ok: true, requestId: req.id, kind, number: v.number, resign: Boolean(st.lastSignature), graceUntil: st.graceUntil }, changed: true };
  });
  if (!prep.ok) return prep;

  const link = `${baseUrl}/entente/${token}`;
  const grace = prep.graceUntil ? longDate(prep.graceUntil) : null;
  const [email, sms] = await Promise.all([
    sendEmailSafe(inst.email, msg.agreementInvite({ contactName: inst.contactName, company: inst.company, versionNumber: prep.number, link, resign: prep.resign, graceUntil: grace, reminder: prep.kind === "relance" }), "partenaires : entente à signer"),
    sendSmsSafe(inst.phone, msg.agreementInviteSms({ company: inst.company, link, resign: prep.resign })),
  ]);
  await mutatePartenaires((d) => {
    const req = d.requests.find((r) => r.id === prep.requestId);
    if (req) req.sends.push({ at: now.toISOString(), by, kind: prep.kind, email, sms });
    logPartner(d, installerId, { at: now.toISOString(), by, action: prep.kind === "relance" ? "entente : relance" : "entente envoyée", detail: `version ${prep.number} · courriel ${email} · texto ${sms}` });
    return { result: undefined, changed: true };
  });
  return { ok: true, link, email, sms, kind: prep.kind };
}

/** Après une publication : envoie la version en vigueur à tous les partenaires actifs qui ne l'ont pas signée. */
export async function sendAgreementToAll(by: string, baseUrl: string, now = new Date()): Promise<Result<{ sent: number; errors: string[] }>> {
  const [g, d] = await Promise.all([readGestion(), readPartenaires()]);
  const errors: string[] = [];
  let sent = 0;
  for (const inst of g.installers) {
    if (!inst.active || endedOf(d.partners[inst.id], now)) continue;
    if (agreementState(inst, d, now).code === "signee") continue;
    const r = await sendAgreement(inst.id, by, baseUrl, now);
    if (r.ok) sent++;
    else errors.push(`${inst.company} : ${r.error}`);
  }
  return { ok: true, sent, errors };
}

/* ---------------- Page de signature (jeton) ---------------- */

export type SigningView =
  | { state: "invalide" | "remplace" | "annulee" }
  | {
      state: "a-signer" | "signee";
      company: string;
      contactName: string;
      version: Pick<AgreementVersion, "number" | "title" | "preamble" | "articles" | "validatedAt" | "publishedAt">;
      /** Conformité C3 : texte affiché, champs remplis (plateforme, installateur, et signataire une fois signé). */
      resolved: ResolvedAgreement;
      textSha256: string;
      signature?: Pick<SignedAgreement, "signedAt" | "signerName" | "signerTitle" | "method">;
    };

function findRequest(d: PartenairesData, token: string) {
  if (!TOKEN_RE.test(token)) return { req: null, replaced: false };
  const hash = hashToken(token);
  const req = d.requests.find((r) => r.tokenHash === hash) ?? null;
  return { req, replaced: !req && d.requests.some((r) => r.previousHashes.includes(hash)) };
}

/** Lecture seule (GET) : n'écrit rien, même pas l'ouverture (notée par le signal POST de la page). */
export async function getSigningView(token: string): Promise<SigningView> {
  const [d, g] = await Promise.all([readPartenaires(), readGestion()]);
  const { req, replaced } = findRequest(d, token);
  if (!req) return { state: replaced ? "remplace" : "invalide" };
  const inst = g.installers.find((i) => i.id === req.installerId);
  const v = d.agreements.find((a) => a.id === req.versionId);
  if (!inst || !v) return { state: "invalide" };
  const version = { number: v.number, title: v.title, preamble: v.preamble, articles: v.articles, validatedAt: v.validatedAt, publishedAt: v.publishedAt };
  if (req.signatureId) {
    const s = d.signatures.find((x) => x.id === req.signatureId);
    if (s) {
      const resolved = resolveVersion(v, { partner: s.partnerFill ?? null, signer: { name: s.signerName, title: s.signerTitle, signedAt: s.signedAt } });
      return { state: "signee", company: s.company, contactName: inst.contactName, version, resolved, textSha256: s.proof.textSha256, signature: { signedAt: s.signedAt, signerName: s.signerName, signerTitle: s.signerTitle, method: s.method } };
    }
  }
  if (req.cancelledAt || v.status !== "publiee") return { state: "annulee" };
  // Conformité C3 : texte présenté avec les valeurs de l'installateur figées à l'envoi ; son empreinte protège la signature.
  return { state: "a-signer", company: inst.company, contactName: inst.contactName, version, resolved: resolveVersion(v, { partner: req.partnerFill ?? null }), textSha256: presentedHash(v, req.partnerFill) };
}

export async function markOpened(token: string, now = new Date()): Promise<void> {
  await mutatePartenaires((d) => {
    const { req } = findRequest(d, token);
    if (!req || req.signatureId || req.cancelledAt) return { result: undefined, changed: false };
    const first = !req.openedAt;
    req.openedAt ??= now.toISOString();
    req.lastOpenedAt = now.toISOString();
    req.openCount += 1;
    if (first) logPartner(d, req.installerId, { at: now.toISOString(), by: `installateur:${req.installerId}`, action: "entente ouverte" });
    return { result: undefined, changed: true };
  });
}

export interface SignInput {
  name: string;
  title: string;
  authorized: boolean;
  accepted: boolean;
  method: "trace" | "nom";
  /** Signature tracée : image PNG (data:image/png;base64,…). */
  image?: string;
  /** Empreinte du texte affiché dans la page : refus si la version a changé entre-temps. */
  textSha256: string;
}

export const SIGN_ERRORS: Record<string, string> = {
  nom: "Écrivez votre prénom et votre nom au complet.",
  titre: "Indiquez votre titre dans l’entreprise (ex. président, copropriétaire).",
  autorise: "Cochez « Je confirme être autorisé à signer pour l’entreprise ».",
  accepte: "Cochez « J’ai lu et j’accepte l’entente ».",
  signature: "Tracez votre signature dans le cadre, ou choisissez « Taper mon nom ».",
  "document-change": "L’entente a changé depuis l’ouverture de la page. Relisez-la, puis signez de nouveau.",
  deja: "Cette entente est déjà signée.",
  annulee: "Cette version a été remplacée. Utilisez le lien le plus récent reçu par courriel.",
  invalide: "Ce lien n’est pas valide.",
  // Conformité C3 : des renseignements de l'entente manquent (champs entre crochets) : un nouvel envoi est nécessaire.
  incomplet: "Des renseignements de l’entente sont incomplets. Communiquez avec nous : un nouveau lien vous sera envoyé.",
};

export async function signAgreement(token: string, input: SignInput, ctx: { ip: string; userAgent: string; baseUrl: string }, now = new Date()): Promise<Result<{ signatureId: string }>> {
  const name = input.name.replace(/\s+/g, " ").trim().slice(0, 120);
  const title = input.title.replace(/\s+/g, " ").trim().slice(0, 80);
  if (name.length < 3 || !/\s/.test(name)) return fail("nom");
  if (title.length < 2) return fail("titre");
  if (!input.authorized) return fail("autorise");
  if (!input.accepted) return fail("accepte");
  let png: Buffer | null = null;
  if (input.method === "trace") {
    try {
      png = parseSignaturePng(input.image ?? "");
    } catch {
      return fail("signature");
    }
  }
  const g = await readGestion();
  const pre = await readPartenaires();
  const { req } = findRequest(pre, token);
  if (!req) return fail("invalide");
  const inst = g.installers.find((i) => i.id === req.installerId);
  if (!inst) return fail("invalide");

  const fileId = png ? rid("d") : null;
  if (png && fileId) await writePrivateFile(partenairesFilesDir(), fileId, "png", png);

  const out = await mutatePartenaires<Result<{ sig: SignedAgreement; version: AgreementVersion }>>((d) => {
    const { req: r } = findRequest(d, token);
    if (!r) return { result: fail("invalide"), changed: false };
    if (r.signatureId) return { result: fail("deja"), changed: false };
    const v = d.agreements.find((a) => a.id === r.versionId);
    if (!v || r.cancelledAt || v.status !== "publiee") return { result: fail("annulee"), changed: false };
    // Conformité C3 : empreinte du texte PRÉSENTÉ (valeurs de l'installateur figées à l'envoi) ; le texte signé y ajoute le signataire.
    const presented = presentedHash(v, r.partnerFill);
    if (input.textSha256 !== presented || (v.textSha256 && v.textSha256 !== agreementHash(v))) return { result: fail("document-change"), changed: false };
    const left = unresolvedForSend(v, r.partnerFill);
    if (left.platform.length || left.partner.length) return { result: fail("incomplet"), changed: false };
    const signedAt = now.toISOString();
    const text = signedTextOf(v, { partnerFill: r.partnerFill, signerName: name, signerTitle: title, signedAt });
    const hash = sha256Text(text);
    const sig: SignedAgreement = {
      id: rid("s"),
      installerId: r.installerId,
      requestId: r.id,
      versionId: v.id,
      versionNumber: v.number,
      signedAt,
      company: inst.company,
      signerName: name,
      signerTitle: title,
      authorized: true,
      accepted: true,
      method: png ? "trace" : "nom",
      ...(fileId ? { imageFileId: fileId } : {}),
      proof: { ip: ctx.ip.slice(0, 80), userAgent: ctx.userAgent.slice(0, 400), textSha256: hash, ...(png ? { imageSha256: sha256Hex(png) } : {}), ...(hash !== presented ? { presentedSha256: presented } : {}) },
      signedText: text,
      copies: { partner: "echec", owner: [] },
      ...(r.partnerFill ? { partnerFill: { ...r.partnerFill } } : {}),
    };
    if (png && fileId) d.files.push({ id: fileId, installerId: r.installerId, kind: "signature", mime: "image/png", ext: "png", bytes: png.length, sha256: sha256Hex(png), name: "signature.png", createdAt: sig.signedAt, createdBy: `installateur:${r.installerId}` });
    d.signatures.push(sig);
    r.signatureId = sig.id;
    logPartner(d, r.installerId, { at: sig.signedAt, by: `installateur:${r.installerId}`, action: `entente signée (version ${v.number})`, detail: `${name}, ${title}` });
    return { result: { ok: true, sig, version: structuredClone(v) }, changed: true };
  });
  if (!out.ok) return out;

  const { sig, version } = out;
  // Chantier S : journal d'audit (signature par le partenaire, sans session : son identifiant et son adresse IP).
  await audit("entente.signature", { signature: sig.id, version: sig.versionNumber, partenaire: sig.installerId }, { qui: `installateur:${sig.installerId}`, ip: ctx.ip, now });
  const when = longDateTime(sig.signedAt);
  const res = resolveVersion(version, { partner: sig.partnerFill ?? null, signer: { name: sig.signerName, title: sig.signerTitle, signedAt: sig.signedAt } });
  const articles = res.articles.map((a) => ({ ref: a.number, title: a.title, paragraphs: a.paragraphs.map((p) => [p.ref ?? "", p.text] as [string, string]) }));
  const [partner, owner] = await Promise.all([
    sendEmailSafe(inst.email, msg.agreementSignedPartner({ contactName: inst.contactName, company: sig.company, versionNumber: sig.versionNumber, signedAt: when, signerName: sig.signerName, textSha256: sig.proof.textSha256, documentLink: `${ctx.baseUrl}/entente/${token}/document`, articles }), "partenaires : copie de l’entente signée"),
    sendOwnerSafe(msg.agreementSignedOwner({ company: sig.company, versionNumber: sig.versionNumber, signedAt: when, signerName: sig.signerName, signerTitle: sig.signerTitle, link: `${ctx.baseUrl}/gestion/partenaires/${inst.id}` }), "partenaires : entente signée"),
  ]);
  await mutatePartenaires((d) => {
    const s = d.signatures.find((x) => x.id === sig.id);
    if (s) s.copies = { partner, owner };
    return { result: undefined, changed: Boolean(s) };
  });
  return { ok: true, signatureId: sig.id };
}

/* ---------------- Document signé ---------------- */

async function documentFor(d: PartenairesData, sig: SignedAgreement): Promise<string | null> {
  const v = d.agreements.find((a) => a.id === sig.versionId);
  if (!v) return null;
  const [settings, img] = await Promise.all([readSettings().catch(() => null), sig.imageFileId ? readPrivateFile(partenairesFilesDir(), sig.imageFileId, "png") : Promise.resolve(null)]);
  return renderSignedDocument({ sig, version: v, company: settings?.company ?? null, signatureDataUrl: img ? `data:image/png;base64,${img.toString("base64")}` : null });
}

/** Conformité C3 : un document de l'entente en vigueur, sans signature (aperçu pour le propriétaire). */
export async function versionPreview(id: string): Promise<{ version: AgreementVersion; resolved: ResolvedAgreement } | null> {
  const [d, identity] = await Promise.all([readPartenaires(), readPlatformIdentity()]);
  const v = d.agreements.find((a) => a.id === id);
  if (!v) return null;
  return { version: v, resolved: resolveVersion(v, v.platformFill ? {} : { platform: agreementPlatformValues(identity, v.fields) }) };
}

export async function signedDocumentHtml(signatureId: string): Promise<string | null> {
  const d = await readPartenaires();
  const sig = d.signatures.find((s) => s.id === signatureId);
  return sig ? documentFor(d, sig) : null;
}

/** Pour le partenaire : le document de SA signature, par le jeton du lien reçu. */
export async function signedDocumentForToken(token: string): Promise<string | null> {
  const d = await readPartenaires();
  const { req } = findRequest(d, token);
  const sig = req?.signatureId ? d.signatures.find((s) => s.id === req.signatureId) : null;
  return sig ? documentFor(d, sig) : null;
}

/* ---------------- Conformité ---------------- */

export interface ComplianceInput {
  number: string;
  issuer: string;
  expiresOn: string | null;
  coverage: string;
  /** Conformité C3 : montant de la couverture ($), assurances seulement. */
  amount?: number | null;
  /** Conformité C3 : sous-catégories RBQ détenues (« 15.9, 15.10 »), licence seulement. */
  subcategories?: string[] | string;
}

const KIND_UPDATED: Record<ComplianceKind, string> = { rbq: "licence RBQ mise à jour", assurance: "assurance mise à jour", automobile: "assurance automobile mise à jour" };

export function saveCompliance(installerId: string, kind: ComplianceKind, input: ComplianceInput, by: string, now = new Date()): Promise<Result> {
  return mutatePartenaires<Result>((d) => {
    const p = partnerOf(d, installerId);
    const doc = compliantDoc(p, kind);
    Object.assign(doc, { number: input.number.trim().slice(0, 60), issuer: input.issuer.trim().slice(0, 120), expiresOn: input.expiresOn, coverage: input.coverage.trim().slice(0, 120), updatedAt: now.toISOString(), updatedBy: by });
    // Conformité C3 : montant et sous-catégories.
    if (input.amount !== undefined) doc.amount = typeof input.amount === "number" && Number.isFinite(input.amount) ? Math.round(input.amount) : null;
    if (input.subcategories !== undefined) doc.subcategories = parseSubcategories(input.subcategories);
    const extra = [input.expiresOn ? `expire le ${input.expiresOn}` : "sans date d’expiration", typeof doc.amount === "number" && kind !== "rbq" ? `${doc.amount} $` : "", kind === "rbq" && doc.subcategories?.length ? `sous-catégories ${doc.subcategories.join(", ")}` : ""].filter(Boolean).join(" · ");
    logPartner(d, installerId, { at: now.toISOString(), by, action: KIND_UPDATED[kind], detail: extra });
    return { result: { ok: true }, changed: true };
  });
}

/** Conformité C3 : avenant désignant la plateforme assurée additionnelle (case et date ; le document se téléverse à part). */
export function saveEndorsement(installerId: string, input: { confirmed: boolean; date: string | null }, by: string, now = new Date()): Promise<Result> {
  return mutatePartenaires<Result>((d) => {
    const p = partnerOf(d, installerId);
    p.additionalInsured = { ...(p.additionalInsured ?? {}), confirmed: input.confirmed, date: input.date, updatedAt: now.toISOString(), updatedBy: by };
    logPartner(d, installerId, { at: now.toISOString(), by, action: input.confirmed ? "avenant d’assuré additionnel confirmé" : "avenant d’assuré additionnel retiré", detail: input.date ? `avenant du ${input.date}` : undefined });
    return { result: { ok: true }, changed: true };
  });
}

/** Conformité C3 : attestation de qualification environnementale (halocarbures) d'une personne. */
export function addHalocarbon(installerId: string, input: { holder: string; number: string; issuedOn: string | null; expiresOn: string | null }, by: string, now = new Date()): Promise<Result<{ id: string }>> {
  const holder = input.holder.replace(/\s+/g, " ").trim().slice(0, 120);
  const number = input.number.trim().slice(0, 60);
  if (holder.length < 3) return Promise.resolve(fail("Écrivez le nom de la personne qui détient l’attestation."));
  if (!number) return Promise.resolve(fail("Écrivez le numéro de l’attestation."));
  return mutatePartenaires<Result<{ id: string }>>((d) => {
    const p = partnerOf(d, installerId);
    const list = (p.halocarbons ??= []);
    if (list.length >= 40) return { result: fail("40 attestations au plus."), changed: false };
    const cert: HalocarbonCert = { id: rid("h"), holder, number, issuedOn: input.issuedOn, expiresOn: input.expiresOn, updatedAt: now.toISOString(), updatedBy: by };
    list.push(cert);
    logPartner(d, installerId, { at: now.toISOString(), by, action: "qualification environnementale ajoutée", detail: `${holder} · ${number}${input.expiresOn ? ` · expire le ${input.expiresOn}` : ""}` });
    return { result: { ok: true, id: cert.id }, changed: true };
  });
}

export function removeHalocarbon(installerId: string, id: string, by: string, now = new Date()): Promise<Result> {
  return mutatePartenaires<Result>((d) => {
    const p = partnerOf(d, installerId);
    const i = (p.halocarbons ?? []).findIndex((c) => c.id === id);
    if (i < 0) return { result: fail("Attestation introuvable."), changed: false };
    const [c] = p.halocarbons!.splice(i, 1);
    logPartner(d, installerId, { at: now.toISOString(), by, action: "qualification environnementale retirée", detail: `${c.holder} · ${c.number}` });
    return { result: { ok: true }, changed: true };
  });
}

/** Conformité C3 : forme juridique de l'installateur (« Entre les parties » de l'entente maître). */
export function saveLegalForm(installerId: string, legalForm: string, by: string, now = new Date()): Promise<Result> {
  return mutatePartenaires<Result>((d) => {
    const p = partnerOf(d, installerId);
    const v = legalForm.replace(/\s+/g, " ").trim().slice(0, 120);
    if (v) p.legalForm = v;
    else delete p.legalForm;
    logPartner(d, installerId, { at: now.toISOString(), by, action: "forme juridique mise à jour", detail: v || "retirée" });
    return { result: { ok: true }, changed: true };
  });
}

// Conformité C3 : documents de l'assurance automobile, de l'avenant et des attestations environnementales.
export type ComplianceFileKind = ComplianceKind | "avenant" | "halocarbure";

const FILE_ADDED: Record<ComplianceFileKind, string> = { rbq: "document RBQ ajouté", assurance: "certificat d’assurance ajouté", automobile: "certificat d’assurance automobile ajouté", avenant: "avenant d’assuré additionnel ajouté", halocarbure: "attestation environnementale ajoutée" };

export async function attachComplianceFile(installerId: string, kind: ComplianceFileKind, buf: Buffer, name: string, by: string, now = new Date(), opts: { halocarbonId?: string } = {}): Promise<Result<{ fileId: string }>> {
  if (kind === "halocarbure") {
    const rec = (await readPartenaires()).partners[installerId];
    if (!opts.halocarbonId || !rec?.halocarbons?.some((c) => c.id === opts.halocarbonId)) return fail("Attestation introuvable.");
  }
  const kindOf = sniff(buf);
  let data: Buffer;
  let ext: string;
  let mime: string;
  try {
    if (kindOf === "pdf") {
      if (buf.length > MAX_PDF_BYTES) return fail("PDF trop lourd (10 Mo au plus).");
      data = buf;
      ext = "pdf";
      mime = "application/pdf";
    } else {
      const img = await processPhoto(buf, 2000);
      data = img.data;
      ext = img.ext;
      mime = img.mime;
    }
  } catch (e) {
    if (e instanceof FileError) return fail(e.message);
    throw e;
  }
  const fileId = rid("d");
  await writePrivateFile(partenairesFilesDir(), fileId, ext, data);
  const cleanName = name.replace(/[^\p{L}\p{N} ._-]/gu, "").slice(0, 80) || `${kind}.${ext}`;
  return mutatePartenaires<Result<{ fileId: string }>>((d) => {
    const p = partnerOf(d, installerId);
    const stamp = { fileId, fileName: cleanName, updatedAt: now.toISOString(), updatedBy: by };
    if (kind === "avenant") p.additionalInsured = { confirmed: false, date: null, ...(p.additionalInsured ?? {}), ...stamp };
    else if (kind === "halocarbure") {
      const cert = p.halocarbons?.find((c) => c.id === opts.halocarbonId);
      if (!cert) return { result: fail("Attestation introuvable."), changed: false };
      Object.assign(cert, stamp);
    } else Object.assign(compliantDoc(p, kind), stamp);
    d.files.push({ id: fileId, installerId, kind, mime, ext, bytes: data.length, sha256: sha256Hex(data), name: cleanName, createdAt: now.toISOString(), createdBy: by });
    logPartner(d, installerId, { at: now.toISOString(), by, action: FILE_ADDED[kind], detail: cleanName });
    return { result: { ok: true, fileId }, changed: true };
  });
}

export async function readPartnerFile(fileId: string): Promise<{ data: Buffer; ext: string; name: string } | null> {
  const f = (await readPartenaires()).files.find((x) => x.id === fileId);
  if (!f) return null;
  const data = await readPrivateFile(partenairesFilesDir(), f.id, f.ext);
  return data ? { data, ext: f.ext, name: f.name } : null;
}

/* ---------------- Niveau et fin de partenariat ---------------- */

export function setTierOverride(installerId: string, tier: Tier | null, reason: string, by: string, now = new Date()): Promise<Result> {
  return mutatePartenaires<Result>((d) => {
    const p = partnerOf(d, installerId);
    const r = reason.trim().slice(0, 500);
    if (tier && r.length < 3) return { result: fail("Donnez la raison du niveau imposé (elle reste dans l’historique)."), changed: false };
    p.tierOverride = tier ? { tier, reason: r, at: now.toISOString(), by } : null;
    logPartner(d, installerId, { at: now.toISOString(), by, action: tier ? `niveau imposé : ${tier}` : "retour au niveau automatique", detail: r || undefined });
    return { result: { ok: true }, changed: true };
  });
}

export async function endPartnership(installerId: string, reason: string, by: string, now = new Date()): Promise<Result> {
  const r = reason.trim().slice(0, 1000);
  if (r.length < 5) return fail("Expliquez la raison de la fin du partenariat : elle reste dans l’historique.");
  const out = await mutatePartenaires<Result>((d) => {
    const p = partnerOf(d, installerId);
    if (p.ended) return { result: fail("Ce partenariat est déjà terminé."), changed: false };
    p.ended = { at: now.toISOString(), by, reason: r };
    for (const q of d.requests) if (q.installerId === installerId && !q.signatureId && !q.cancelledAt) q.cancelledAt = now.toISOString();
    logPartner(d, installerId, { at: now.toISOString(), by, action: "fin du partenariat", detail: r });
    return { result: { ok: true }, changed: true };
  });
  if (out.ok) await setActive(installerId, false, now);
  return out;
}

export async function reinstatePartnership(installerId: string, reason: string, by: string, now = new Date()): Promise<Result> {
  const out = await mutatePartenaires<Result>((d) => {
    const p = partnerOf(d, installerId);
    if (!p.ended && !endedOf(p, now)) return { result: fail("Ce partenariat est actif."), changed: false };
    p.ended = null;
    // Conformité C3 : l'avis de fin reste à l'historique, marqué annulé.
    if (p.termination && !p.termination.cancelledAt) Object.assign(p.termination, { cancelledAt: now.toISOString(), cancelledBy: by, cancelReason: "partenariat repris" });
    logPartner(d, installerId, { at: now.toISOString(), by, action: "partenariat repris", detail: reason.trim().slice(0, 500) || undefined });
    return { result: { ok: true }, changed: true };
  });
  if (out.ok) await setActive(installerId, true, now);
  return out;
}

/* ---------------- Conformité C3 : avis de fin (préavis, défaut, fin immédiate) ---------------- */

export interface NoticeInput {
  mode: TerminationMode;
  initiatedBy: "plateforme" | "partenaire";
  reason: string;
  /** Envoyer l'avis par courriel au partenaire (copie au propriétaire). */
  notify: boolean;
}

/** Article de résiliation de l'entente signée par ce partenaire (s'il existe dans sa version). */
function terminationArticle(d: PartenairesData, installerId: string): string | null {
  const sig = d.signatures.filter((s) => s.installerId === installerId).sort((a, b) => a.signedAt.localeCompare(b.signedAt)).at(-1);
  const v = sig ? d.agreements.find((a) => a.id === sig.versionId) : publishedVersion(d);
  return v?.articles.some((a) => a.number === ARTICLES.termination) ? ARTICLES.termination : null;
}

export async function giveNotice(installerId: string, input: NoticeInput, by: string, baseUrl: string, now = new Date()): Promise<Result<{ effectiveOn: string; email: SendStatus | null }>> {
  const reason = input.reason.trim().slice(0, 1000);
  if (input.mode !== "sans-motif" && reason.length < 5) return fail("Décrivez le motif ou le défaut : il figure dans l’avis et reste à l’historique.");
  if (input.mode === "sans-motif" && input.initiatedBy === "plateforme" && reason.length < 3) return fail("Notez la raison interne (elle n’est pas écrite dans l’avis) : elle reste à l’historique.");
  const inst = (await readGestion()).installers.find((i) => i.id === installerId);
  if (!inst) return fail("Installateur introuvable.");
  const dates = terminationDates(input.mode, now);
  const out = await mutatePartenaires<Result<{ article: string | null }>>((d) => {
    const p = partnerOf(d, installerId);
    if (endedOf(p, now)) return { result: fail("Ce partenariat est déjà terminé."), changed: false };
    const phase = terminationPhase(p, now);
    if (phase === "preavis" || phase === "correction" || phase === "a-confirmer") return { result: fail("Un avis est déjà en cours : annulez-le d’abord pour en donner un autre."), changed: false };
    const stamp = now.toISOString();
    p.termination = { mode: input.mode, initiatedBy: input.initiatedBy, noticeAt: stamp, receivedOn: dates.receivedOn, effectiveOn: dates.effectiveOn, reason, by };
    if (input.mode === "motif-immediat") {
      p.ended = { at: stamp, by, reason };
      for (const q of d.requests) if (q.installerId === installerId && !q.signatureId && !q.cancelledAt) q.cancelledAt = stamp;
    }
    const who = input.initiatedBy === "partenaire" ? "avis reçu du partenaire" : "avis de la plateforme";
    logPartner(d, installerId, { at: stamp, by, action: input.mode === "sans-motif" ? `préavis de fin (30 jours) : fin le ${dates.effectiveOn}` : input.mode === "motif-defaut" ? `avis de défaut : correction avant le ${dates.effectiveOn}` : "fin du partenariat pour motif (immédiate)", detail: `${who}${reason ? ` · ${reason}` : ""}` });
    return { result: { ok: true, article: terminationArticle(d, installerId) }, changed: true };
  });
  if (!out.ok) return out;
  if (input.mode === "motif-immediat") await setActive(installerId, false, now);
  let email: SendStatus | null = null;
  if (input.notify && input.initiatedBy === "plateforme") {
    const data: msg.TerminationNoticeData = { contactName: inst.contactName, company: inst.company, mode: input.mode, receivedOn: longDate(`${dates.receivedOn}T12:00:00Z`), effectiveOn: longDate(`${dates.effectiveOn}T12:00:00Z`), reason: input.mode === "sans-motif" ? "" : reason, article: out.article };
    const [e, owner] = await Promise.all([sendEmailSafe(inst.email, msg.terminationNotice(data), "partenaires : avis de fin"), sendOwnerSafe(msg.terminationNoticeOwner({ ...data, link: `${baseUrl}/gestion/partenaires/${installerId}` }), "partenaires : copie de l’avis de fin")]);
    email = e;
    await mutatePartenaires((d) => {
      const t = d.partners[installerId]?.termination;
      if (t && t.noticeAt === now.toISOString()) t.notice = { email: e, owner };
      logPartner(d, installerId, { at: now.toISOString(), by, action: "avis de fin transmis", detail: `courriel ${e}` });
      return { result: undefined, changed: true };
    });
  }
  return { ok: true, effectiveOn: dates.effectiveOn, email };
}

/** Annule un préavis ou un avis de défaut (défaut corrigé, entente maintenue). */
export function cancelNotice(installerId: string, reason: string, by: string, now = new Date()): Promise<Result> {
  return mutatePartenaires<Result>((d) => {
    const p = partnerOf(d, installerId);
    const phase = terminationPhase(p, now);
    if (!p.termination || !(phase === "preavis" || phase === "correction" || phase === "a-confirmer")) return { result: fail("Aucun avis en cours à annuler."), changed: false };
    Object.assign(p.termination, { cancelledAt: now.toISOString(), cancelledBy: by, cancelReason: reason.trim().slice(0, 500) });
    logPartner(d, installerId, { at: now.toISOString(), by, action: p.termination.mode === "motif-defaut" ? "avis de défaut annulé (corrigé)" : "préavis de fin annulé", detail: reason.trim().slice(0, 500) || undefined });
    return { result: { ok: true }, changed: true };
  });
}

/** Confirme la fin après un avis de défaut dont le délai de correction est écoulé (jamais automatique). */
export async function confirmTermination(installerId: string, by: string, now = new Date()): Promise<Result> {
  const out = await mutatePartenaires<Result>((d) => {
    const p = partnerOf(d, installerId);
    if (terminationPhase(p, now) !== "a-confirmer" || !p.termination) return { result: fail("Rien à confirmer : le délai de correction n’est pas écoulé, ou aucun avis de défaut n’est en cours."), changed: false };
    p.ended = { at: now.toISOString(), by, reason: p.termination.reason };
    for (const q of d.requests) if (q.installerId === installerId && !q.signatureId && !q.cancelledAt) q.cancelledAt = now.toISOString();
    logPartner(d, installerId, { at: now.toISOString(), by, action: "fin du partenariat confirmée (défaut non corrigé)", detail: p.termination.reason });
    return { result: { ok: true }, changed: true };
  });
  if (out.ok) await setActive(installerId, false, now);
  return out;
}

/** Préavis arrivés à terme : la fin est inscrite à la fiche (liens d'entente annulés, installateur en pause). */
export async function settleTerminations(now = new Date()): Promise<string[]> {
  const settled = await mutatePartenaires<string[]>((d) => {
    const ids: string[] = [];
    for (const [id, p] of Object.entries(d.partners)) {
      if (p.ended) continue;
      const e = endedOf(p, now);
      if (!e) continue;
      p.ended = e;
      for (const q of d.requests) if (q.installerId === id && !q.signatureId && !q.cancelledAt) q.cancelledAt = now.toISOString();
      logPartner(d, id, { at: now.toISOString(), by: "système", action: "fin du partenariat (préavis échu)", detail: p.termination?.reason || undefined });
      ids.push(id);
    }
    return { result: ids, changed: ids.length > 0 };
  });
  for (const id of settled) await setActive(id, false, now);
  return settled;
}

function setActive(installerId: string, active: boolean, now: Date): Promise<boolean> {
  return mutateGestion((g) => {
    const i = g.installers.find((x) => x.id === installerId);
    if (!i) return { result: false, changed: false };
    i.active = active;
    i.updatedAt = now.toISOString();
    return { result: true, changed: true };
  });
}

/* ---------------- Citation d'une clause ---------------- */

export interface CitationPreview {
  ref: string;
  sentence: string;
  signedOn: string;
  versionNumber: number;
}

export async function citationPreview(installerId: string, ref: string, note: string): Promise<Result<CitationPreview>> {
  const d = await readPartenaires();
  const sig = d.signatures.filter((s) => s.installerId === installerId).sort((a, b) => a.signedAt.localeCompare(b.signedAt)).at(-1);
  if (!sig) return fail("Ce partenaire n’a signé aucune entente : rien à citer.");
  const v = d.agreements.find((a) => a.id === sig.versionId);
  // Conformité C3 : texte cité tel que signé (valeurs de l'installateur et du signataire).
  const clause = v ? findClause(v, ref, { partner: sig.partnerFill ?? null, signer: { name: sig.signerName, title: sig.signerTitle, signedAt: sig.signedAt } }) : null;
  if (!clause) return fail("Clause introuvable dans l’entente signée.");
  const signedOn = longDate(sig.signedAt);
  return { ok: true, ref, signedOn, versionNumber: sig.versionNumber, sentence: citationSentence(clause, signedOn, note) };
}

export async function sendCitation(installerId: string, ref: string, note: string, context: { jobId?: string; ticketId?: string }, by: string, now = new Date()): Promise<Result<{ email: SendStatus; sms: SendStatus }>> {
  const [g, sav] = await Promise.all([readGestion(), readSav()]);
  const inst = g.installers.find((i) => i.id === installerId);
  if (!inst) return fail("Installateur introuvable.");
  const preview = await citationPreview(installerId, ref, note);
  if (!preview.ok) return preview;
  const job = context.jobId ? g.jobs.find((j) => j.id === context.jobId) : null;
  const ticket = context.ticketId ? sav.tickets.find((t) => t.id === context.ticketId) : null;
  const ctxText = ticket ? `Appel de service n° ${ticket.number}` : job ? `Job n° ${job.number}` : null;
  const [email, sms] = await Promise.all([
    sendEmailSafe(inst.email, msg.citation({ contactName: inst.contactName, sentence: preview.sentence, context: ctxText }), "partenaires : citation de l’entente"),
    sendSmsSafe(inst.phone, msg.citationSms({ ref, context: ctxText })),
  ]);
  await mutatePartenaires((d) => {
    const sig = d.signatures.filter((s) => s.installerId === installerId).sort((a, b) => a.signedAt.localeCompare(b.signedAt)).at(-1);
    const p = partnerOf(d, installerId);
    p.citations.push({ id: rid("x"), at: now.toISOString(), by, signatureId: sig?.id ?? "", versionNumber: preview.versionNumber, ref, context: { ...(job ? { jobId: job.id } : {}), ...(ticket ? { ticketId: ticket.id } : {}) }, message: preview.sentence, channels: { email, sms } });
    logPartner(d, installerId, { at: now.toISOString(), by, action: `article ${ref} cité`, detail: ctxText ?? undefined });
    return { result: undefined, changed: true };
  });
  return { ok: true, email, sms };
}

/* ---------------- Réglages ---------------- */

export async function readPartnerSettings(): Promise<PartnerSettings> {
  return (await readPartenaires()).settings;
}

export function savePartnerSettings(input: Partial<PartnerSettings>, by: string, now = new Date()): Promise<Result> {
  return mutatePartenaires<Result>((d) => {
    d.settings = normalizePartnerSettings({
      ...d.settings,
      ...input,
      thresholds: { ...d.settings.thresholds, ...(input.thresholds ?? {}) },
      tierPoints: { ...d.settings.tierPoints, ...(input.tierPoints ?? {}) },
      // Conformité C3 : exigences d'assurance et délais de service.
      requirements: { ...d.settings.requirements, ...(input.requirements ?? {}) },
      sla: { ...d.settings.sla, ...(input.sla ?? {}) },
      updatedAt: now.toISOString(),
      updatedBy: by,
    });
    return { result: { ok: true }, changed: true };
  });
}

/* ---------------- Lecture pour la fiche ---------------- */

export async function partnerDocuments(installerId: string): Promise<{ signatures: SignedAgreement[]; versions: Record<string, AgreementVersion> }> {
  const d = await readPartenaires();
  const signatures = d.signatures.filter((s) => s.installerId === installerId).sort((a, b) => b.signedAt.localeCompare(a.signedAt));
  return { signatures, versions: Object.fromEntries(d.agreements.map((a) => [a.id, a])) };
}

export async function installerById(id: string): Promise<Installer | null> {
  return (await readGestion()).installers.find((i) => i.id === id) ?? null;
}
