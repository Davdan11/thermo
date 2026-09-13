"use server";

/* ==================================================================
   Server Actions du volet A (partenaires, entente, chantier, service
   après-vente). Chacune : requireAdmin() → validation (zod,
   expressions des identifiants) → écriture → refresh(). Une action est
   joignable par un POST direct : la session est vérifiée ici.
   Les téléversements (documents, photos) passent par des routes
   /gestion/api/… (taille des fichiers).
   ================================================================== */

import { refresh } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import * as pa from "@/lib/gestion/partenaires/service";
import { AGREEMENT_ID_RE, CLAUSE_REF_RE, HALOCARBON_ID_RE, INSTALLER_ID_RE, TERMINATION_MODES, TIERS, type Tier } from "@/lib/gestion/partenaires/types";
import { publicBaseUrl } from "@/lib/gestion/request";
import * as sav from "@/lib/gestion/sav/service";
import { TICKET_CAUSES, TICKET_ID_RE, TICKET_PRIORITIES } from "@/lib/gestion/sav/types";
// Chantier S : journal d'audit sur chaque action sensible (Conformité C3 : entente, conformité, fin, réglages, service).
import { audit } from "@/lib/gestion/securite/audit";
import { ID_RE } from "@/lib/gestion/service";
import * as terrain from "@/lib/gestion/terrain/service";
import { FIELD_PHOTO_ID_RE } from "@/lib/gestion/terrain/types";

export type PaResult = { ok: true; message?: string; link?: string } | { ok: false; error: string } | undefined;

const INVALID = { ok: false as const, error: "Demande invalide." };
const str = (fd: FormData, k: string, max = 4000) => String(fd.get(k) ?? "").trim().slice(0, max);
const inst = z.string().regex(INSTALLER_ID_RE);
const jobId = z.string().regex(ID_RE);
const ymd = z.string().regex(/^\d{4}-\d{2}-\d{2}$/);
const done = (r: { ok: true } | { ok: false; error: string }, message: string): PaResult => (r.ok ? { ok: true, message } : r);

/* ---------------- Entente : versions ---------------- */

export async function createDraftAction(): Promise<void> {
  const s = await requireAdmin();
  const r = await pa.createDraft(s.email);
  if (r.ok) {
    await audit("entente.version", { operation: "brouillon", version: r.id });
    redirect(`/gestion/entente/${r.id}`);
  }
  redirect("/gestion/entente");
}

/** Conformité C3 : brouillon de l'entente maître depuis la trousse importée (texte lu dans les données). */
export async function createDraftFromTrousseAction(): Promise<PaResult> {
  const s = await requireAdmin();
  const r = await pa.createDraftFromTrousse(s.email);
  if (!r.ok) return r;
  await audit("entente.version", { operation: "creee-depuis-trousse", version: r.id, numero: r.number });
  redirect(`/gestion/entente/${r.id}`);
}

const versionSchema = z.object({
  title: z.string().trim().min(1, "Le titre est vide.").max(160),
  preamble: z.string().max(6000),
  articles: z
    // Conformité C3 : numéro de l'avocat facultatif (« 2.24 ») ; les articles de la trousse sont plus longs.
    .array(z.object({ number: z.string().trim().max(8).optional(), title: z.string().max(160), paragraphs: z.array(z.string().max(6000)).min(1, "Chaque article contient au moins un paragraphe.").max(30) }))
    .min(1, "Ajoutez au moins un article.")
    .max(60),
});

export async function saveDraftAction(id: unknown, input: unknown): Promise<PaResult> {
  const s = await requireAdmin();
  const vid = z.string().regex(AGREEMENT_ID_RE).safeParse(id);
  const p = versionSchema.safeParse(input);
  if (!vid.success) return INVALID;
  if (!p.success) return { ok: false, error: p.error.issues[0]?.message ?? "Texte invalide." };
  const r = await pa.saveDraft(vid.data, p.data, s.email);
  if (r.ok) {
    await audit("entente.version", { operation: "brouillon-enregistre", version: vid.data });
    refresh();
  }
  return done(r, "Brouillon enregistré.");
}

/** Conformité C3 : champs propres à l'entente (district judiciaire…), champs « f:NOM » du formulaire. */
export async function saveVersionFieldsAction(id: string, _prev: PaResult, fd: FormData): Promise<PaResult> {
  const s = await requireAdmin();
  const vid = z.string().regex(AGREEMENT_ID_RE).safeParse(id);
  if (!vid.success) return INVALID;
  const raw: Record<string, string> = {};
  for (const [k, v] of fd.entries()) if (k.startsWith("f:") && typeof v === "string") raw[k.slice(2, 82)] = v.slice(0, 200);
  const p = z.record(z.string().min(1).max(80), z.string().max(200)).safeParse(raw);
  if (!p.success) return INVALID;
  const r = await pa.saveVersionFields(vid.data, p.data, s.email);
  if (r.ok) {
    await audit("entente.version", { operation: "champs", version: vid.data, champs: Object.keys(p.data).length });
    refresh();
  }
  return done(r, "Champs enregistrés.");
}

export async function validateVersionAction(id: unknown): Promise<PaResult> {
  const s = await requireAdmin();
  const vid = z.string().regex(AGREEMENT_ID_RE).safeParse(id);
  if (!vid.success) return INVALID;
  const r = await pa.validateVersion(vid.data, s.email);
  if (r.ok) {
    await audit("entente.version", { operation: "validee", version: vid.data });
    refresh();
  }
  return done(r, "Texte final validé : il ne changera plus.");
}

export async function unvalidateVersionAction(id: unknown): Promise<PaResult> {
  const s = await requireAdmin();
  const vid = z.string().regex(AGREEMENT_ID_RE).safeParse(id);
  if (!vid.success) return INVALID;
  const r = await pa.unvalidateVersion(vid.data, s.email);
  if (r.ok) {
    await audit("entente.version", { operation: "retour-brouillon", version: vid.data });
    refresh();
  }
  return done(r, "Retour au brouillon.");
}

export async function deleteDraftAction(id: unknown): Promise<void> {
  await requireAdmin();
  const vid = z.string().regex(AGREEMENT_ID_RE).safeParse(id);
  if (vid.success) {
    const r = await pa.deleteDraft(vid.data);
    if (r.ok) await audit("entente.version", { operation: "supprimee", version: vid.data });
  }
  redirect("/gestion/entente");
}

export async function publishVersionAction(id: string, _prev: PaResult, fd: FormData): Promise<PaResult> {
  const s = await requireAdmin();
  const p = z.object({ id: z.string().regex(AGREEMENT_ID_RE), grace: z.coerce.number().int().min(0).max(120), confirm: z.literal("1") }).safeParse({ id, grace: str(fd, "graceDays", 4) || "0", confirm: str(fd, "confirm", 2) });
  if (!p.success) return { ok: false, error: "Indiquez le délai de grâce et cochez la confirmation." };
  const r = await pa.publishVersion(p.data.id, p.data.grace, s.email);
  if (!r.ok) return r;
  await audit("entente.version", { operation: "publiee", version: p.data.id, numero: r.number, grace: p.data.grace });
  refresh();
  return { ok: true, message: `Version ${r.number} en vigueur. Envoyez-la maintenant aux partenaires.` };
}

export async function sendAgreementToAllAction(): Promise<PaResult> {
  const s = await requireAdmin();
  const r = await pa.sendAgreementToAll(s.email, await publicBaseUrl());
  refresh();
  if (!r.ok) return r;
  await audit("entente.envoi", { operation: "tous", envois: r.sent, refus: r.errors.length });
  return { ok: true, message: `${r.sent} envoi${r.sent > 1 ? "s" : ""}.${r.errors.length ? ` Non envoyés : ${r.errors.join(" ; ")}` : ""}` };
}

/* ---------------- Partenaire ---------------- */

export async function sendAgreementAction(installerId: unknown): Promise<PaResult> {
  const s = await requireAdmin();
  const p = inst.safeParse(installerId);
  if (!p.success) return INVALID;
  const r = await pa.sendAgreement(p.data, s.email, await publicBaseUrl());
  if (!r.ok) return r;
  await audit("entente.envoi", { partenaire: p.data, operation: r.kind, courriel: r.email, texto: r.sms });
  refresh();
  return { ok: true, message: `${r.kind === "relance" ? "Relance" : "Entente"} envoyée · courriel ${r.email} · texto ${r.sms}. Lien personnel (à ne transmettre qu’au partenaire) :`, link: r.link };
}

/** « 2 000 000 », « 2 M$ », « 2,5 M » → dollars ; vide → null. */
const moneyValue = (v: string): number | null | "invalide" => {
  const s = v.replace(/\s| | /g, "").replace(/\$$/, "").toLowerCase();
  if (!s) return null;
  const m = /^(\d+(?:[.,]\d+)?)(m|k)?\$?$/.exec(s);
  if (!m) return "invalide";
  const n = Number(m[1].replace(",", ".")) * (m[2] === "m" ? 1_000_000 : m[2] === "k" ? 1_000 : 1);
  return Number.isFinite(n) && n >= 0 && n <= 1_000_000_000 ? Math.round(n) : "invalide";
};

// Conformité C3 : assurance automobile, montant de la couverture et sous-catégories RBQ.
export async function complianceAction(installerId: string, kind: "rbq" | "assurance" | "automobile", _prev: PaResult, fd: FormData): Promise<PaResult> {
  const s = await requireAdmin();
  const expires = str(fd, "expiresOn", 10);
  const amount = fd.has("amount") ? moneyValue(str(fd, "amount", 20)) : undefined;
  if (amount === "invalide") return { ok: false, error: "Montant invalide : écrivez par exemple 2 000 000." };
  const p = z
    .object({ id: inst, kind: z.enum(["rbq", "assurance", "automobile"]), number: z.string().max(60), issuer: z.string().max(120), coverage: z.string().max(120), expiresOn: ymd.nullable(), subcategories: z.string().max(200).optional() })
    .safeParse({ id: installerId, kind, number: str(fd, "number", 60), issuer: str(fd, "issuer", 120), coverage: str(fd, "coverage", 120), expiresOn: expires || null, subcategories: fd.has("subcategories") ? str(fd, "subcategories", 200) : undefined });
  if (!p.success) return { ok: false, error: "Date d’expiration invalide." };
  const r = await pa.saveCompliance(p.data.id, p.data.kind, { number: p.data.number, issuer: p.data.issuer, coverage: p.data.coverage, expiresOn: p.data.expiresOn, ...(amount !== undefined ? { amount } : {}), ...(p.data.subcategories !== undefined ? { subcategories: p.data.subcategories } : {}) }, s.email);
  if (r.ok) {
    await audit("partenaire.conformite", { partenaire: p.data.id, document: p.data.kind, expiration: p.data.expiresOn, montant: typeof amount === "number" ? amount : null });
    refresh();
  }
  return done(r, "Enregistré.");
}

/** Conformité C3 : avenant d'assuré additionnel (case et date). */
export async function endorsementAction(installerId: string, _prev: PaResult, fd: FormData): Promise<PaResult> {
  const s = await requireAdmin();
  const date = str(fd, "date", 10);
  const p = z.object({ id: inst, confirmed: z.boolean(), date: ymd.nullable() }).safeParse({ id: installerId, confirmed: fd.get("confirmed") === "1", date: date || null });
  if (!p.success) return { ok: false, error: "Date de l’avenant invalide." };
  const r = await pa.saveEndorsement(p.data.id, { confirmed: p.data.confirmed, date: p.data.date }, s.email);
  if (r.ok) {
    await audit("partenaire.conformite", { partenaire: p.data.id, document: "avenant", confirme: p.data.confirmed, date: p.data.date });
    refresh();
  }
  return done(r, p.data.confirmed ? "Avenant noté." : "Avenant retiré.");
}

/** Conformité C3 : qualification environnementale (halocarbures). */
export async function halocarbonAddAction(installerId: string, _prev: PaResult, fd: FormData): Promise<PaResult> {
  const s = await requireAdmin();
  const issued = str(fd, "issuedOn", 10);
  const expires = str(fd, "expiresOn", 10);
  const p = z.object({ id: inst, holder: z.string().max(120), number: z.string().max(60), issuedOn: ymd.nullable(), expiresOn: ymd.nullable() }).safeParse({ id: installerId, holder: str(fd, "holder", 120), number: str(fd, "number", 60), issuedOn: issued || null, expiresOn: expires || null });
  if (!p.success) return { ok: false, error: "Date invalide." };
  const r = await pa.addHalocarbon(p.data.id, { holder: p.data.holder, number: p.data.number, issuedOn: p.data.issuedOn, expiresOn: p.data.expiresOn }, s.email);
  if (r.ok) {
    await audit("partenaire.conformite", { partenaire: p.data.id, document: "halocarbures", operation: "ajout", attestation: r.id });
    refresh();
  }
  return done(r, "Attestation ajoutée.");
}

export async function halocarbonRemoveAction(installerId: unknown, certId: unknown): Promise<PaResult> {
  const s = await requireAdmin();
  const p = z.object({ id: inst, cert: z.string().regex(HALOCARBON_ID_RE) }).safeParse({ id: installerId, cert: certId });
  if (!p.success) return INVALID;
  const r = await pa.removeHalocarbon(p.data.id, p.data.cert, s.email);
  if (r.ok) {
    await audit("partenaire.conformite", { partenaire: p.data.id, document: "halocarbures", operation: "retrait", attestation: p.data.cert });
    refresh();
  }
  return done(r, "Attestation retirée.");
}

/** Conformité C3 : forme juridique de l'installateur (entente maître). */
export async function legalFormAction(installerId: string, _prev: PaResult, fd: FormData): Promise<PaResult> {
  const s = await requireAdmin();
  const p = z.object({ id: inst, legalForm: z.string().max(120) }).safeParse({ id: installerId, legalForm: str(fd, "legalForm", 120) });
  if (!p.success) return INVALID;
  const r = await pa.saveLegalForm(p.data.id, p.data.legalForm, s.email);
  if (r.ok) {
    await audit("partenaire.conformite", { partenaire: p.data.id, document: "forme-juridique" });
    refresh();
  }
  return done(r, "Forme juridique enregistrée.");
}

export async function tierAction(installerId: string, _prev: PaResult, fd: FormData): Promise<PaResult> {
  const s = await requireAdmin();
  const tierRaw = str(fd, "tier", 20);
  const p = z.object({ id: inst, tier: z.enum([...TIERS, "auto"]), reason: z.string().max(500) }).safeParse({ id: installerId, tier: tierRaw || "auto", reason: str(fd, "reason", 500) });
  if (!p.success) return INVALID;
  const r = await pa.setTierOverride(p.data.id, p.data.tier === "auto" ? null : (p.data.tier as Tier), p.data.reason, s.email);
  if (r.ok) {
    await audit("partenaire.conformite", { partenaire: p.data.id, niveau: p.data.tier });
    refresh();
  }
  return done(r, p.data.tier === "auto" ? "Niveau automatique rétabli." : "Niveau imposé.");
}

export async function endPartnershipAction(installerId: string, _prev: PaResult, fd: FormData): Promise<PaResult> {
  const s = await requireAdmin();
  const p = z.object({ id: inst, reason: z.string().max(1000), confirm: z.literal("1") }).safeParse({ id: installerId, reason: str(fd, "reason", 1000), confirm: str(fd, "confirm", 2) });
  if (!p.success) return { ok: false, error: "Donnez la raison et cochez la confirmation." };
  const r = await pa.endPartnership(p.data.id, p.data.reason, s.email);
  if (r.ok) {
    await audit("partenaire.fin", { partenaire: p.data.id, mode: "immediate" });
    refresh();
  }
  return done(r, "Partenariat terminé : plus aucune offre. L’historique est conservé.");
}

/** Conformité C3 : « Mettre fin au partenariat » : préavis de 30 jours sans motif, avis de défaut, ou fin immédiate pour motif. */
export async function noticeAction(installerId: string, _prev: PaResult, fd: FormData): Promise<PaResult> {
  const s = await requireAdmin();
  const p = z
    .object({ id: inst, mode: z.enum(TERMINATION_MODES), initiatedBy: z.enum(["plateforme", "partenaire"]), reason: z.string().max(1000), notify: z.boolean(), confirm: z.literal("1") })
    .safeParse({ id: installerId, mode: str(fd, "mode", 20), initiatedBy: str(fd, "initiatedBy", 20) || "plateforme", reason: str(fd, "reason", 1000), notify: fd.get("notify") === "1", confirm: str(fd, "confirm", 2) });
  if (!p.success) return { ok: false, error: "Choisissez le type de fin et cochez la confirmation." };
  const r = await pa.giveNotice(p.data.id, { mode: p.data.mode, initiatedBy: p.data.initiatedBy, reason: p.data.reason, notify: p.data.notify }, s.email, await publicBaseUrl());
  if (!r.ok) return r;
  await audit("partenaire.fin", { partenaire: p.data.id, mode: p.data.mode, initiative: p.data.initiatedBy, effet: r.effectiveOn, avis: r.email });
  refresh();
  const sent = r.email ? ` Avis au partenaire : courriel ${r.email}.` : "";
  return { ok: true, message: p.data.mode === "motif-immediat" ? `Partenariat terminé.${sent}` : p.data.mode === "sans-motif" ? `Préavis enregistré : fin le ${r.effectiveOn}. Nouvelles offres suspendues.${sent}` : `Avis de défaut enregistré : correction attendue avant le ${r.effectiveOn}.${sent}` };
}

export async function cancelNoticeAction(installerId: string, _prev: PaResult, fd: FormData): Promise<PaResult> {
  const s = await requireAdmin();
  const p = z.object({ id: inst, reason: z.string().max(500) }).safeParse({ id: installerId, reason: str(fd, "reason", 500) });
  if (!p.success) return INVALID;
  const r = await pa.cancelNotice(p.data.id, p.data.reason, s.email);
  if (r.ok) {
    await audit("partenaire.fin", { partenaire: p.data.id, operation: "avis-annule" });
    refresh();
  }
  return done(r, "Avis annulé : le partenariat continue.");
}

export async function confirmTerminationAction(installerId: unknown): Promise<PaResult> {
  const s = await requireAdmin();
  const p = inst.safeParse(installerId);
  if (!p.success) return INVALID;
  const r = await pa.confirmTermination(p.data, s.email);
  if (r.ok) {
    await audit("partenaire.fin", { partenaire: p.data, operation: "fin-confirmee" });
    refresh();
  }
  return done(r, "Fin du partenariat confirmée.");
}

export async function reinstateAction(installerId: string, _prev: PaResult, fd: FormData): Promise<PaResult> {
  const s = await requireAdmin();
  const p = inst.safeParse(installerId);
  if (!p.success) return INVALID;
  const r = await pa.reinstatePartnership(p.data, str(fd, "reason", 500), s.email);
  if (r.ok) {
    await audit("partenaire.fin", { partenaire: p.data, operation: "repris" });
    refresh();
  }
  return done(r, "Partenariat repris.");
}

const citeSchema = z.object({ id: inst, ref: z.string().regex(CLAUSE_REF_RE), note: z.string().max(1500), jobId: z.string().regex(ID_RE).optional(), ticketId: z.string().regex(TICKET_ID_RE).optional() });

export async function citationPreviewAction(input: unknown): Promise<{ ok: true; sentence: string } | { ok: false; error: string }> {
  await requireAdmin();
  const p = citeSchema.safeParse(input);
  if (!p.success) return INVALID;
  const r = await pa.citationPreview(p.data.id, p.data.ref, p.data.note);
  return r.ok ? { ok: true, sentence: r.sentence } : r;
}

export async function citationSendAction(input: unknown): Promise<PaResult> {
  const s = await requireAdmin();
  const p = citeSchema.safeParse(input);
  if (!p.success) return INVALID;
  const r = await pa.sendCitation(p.data.id, p.data.ref, p.data.note, { ...(p.data.jobId ? { jobId: p.data.jobId } : {}), ...(p.data.ticketId ? { ticketId: p.data.ticketId } : {}) }, s.email);
  if (!r.ok) return r;
  refresh();
  return { ok: true, message: `Article ${p.data.ref} envoyé · courriel ${r.email} · texto ${r.sms}.` };
}

/* ---------------- Réglages ---------------- */

const pct = (v: string) => (v.trim() === "" ? undefined : Number(v.replace(",", ".")) / 100);

export async function partnerSettingsAction(_prev: PaResult, fd: FormData): Promise<PaResult> {
  const s = await requireAdmin();
  const n = (k: string) => (str(fd, k, 10) === "" ? undefined : Number(str(fd, k, 10).replace(",", ".")));
  // Conformité C3 : minimums d'assurance (en dollars) et délais de service.
  const dollars = (k: string) => {
    const v = moneyValue(str(fd, k, 20));
    return v === "invalide" || v === null ? undefined : v;
  };
  const c3 = z
    .object({
      requirements: z.object({ minLiability: z.number().int().min(0).max(100_000_000), minAuto: z.number().int().min(0).max(100_000_000), requireEndorsement: z.boolean(), requireAuto: z.boolean(), requireHalocarbon: z.boolean() }),
      sla: z.object({ ackBusinessDays: z.number().int().min(0).max(30), visitBusinessDays: z.number().int().min(0).max(60), urgentAckBusinessHours: z.number().min(0).max(72), urgentVisitHours: z.number().min(1).max(240) }),
    })
    .safeParse({
      requirements: { minLiability: dollars("minLiability"), minAuto: dollars("minAuto"), requireEndorsement: fd.get("requireEndorsement") === "1", requireAuto: fd.get("requireAuto") === "1", requireHalocarbon: fd.get("requireHalocarbon") === "1" },
      sla: { ackBusinessDays: n("ackBusinessDays"), visitBusinessDays: n("visitBusinessDays"), urgentAckBusinessHours: n("urgentAckBusinessHours"), urgentVisitHours: n("urgentVisitHours") },
    });
  if (!c3.success) return { ok: false, error: `Valeur invalide : ${c3.error.issues[0]?.path.join(".") ?? "réglage"}.` };
  const p = z
    .object({
      graceDays: z.number().int().min(0).max(120),
      alertDays: z.number().int().min(1).max(180),
      serviceHours: z.number().min(4).max(720),
      punctualityMinutes: z.number().int().min(0).max(180),
      photoReview: z.enum(["chaque", "hasard"]),
      photoSampleRate: z.number().min(0.05).max(1),
      blockWhenMissing: z.boolean(),
      tierPoints: z.object({ or: z.number().min(-30).max(30), standard: z.number().min(-30).max(30), probation: z.number().min(-30).max(30) }),
      thresholds: z.object({
        orMinInstalls: z.number().int().min(1).max(1000),
        orMaxLaborPer100: z.number().min(0).max(100),
        orMinPhotoRate: z.number().min(0).max(1),
        orMinPunctuality: z.number().min(0).max(1),
        orMinAcceptance: z.number().min(0).max(1),
        probationMinInstalls: z.number().int().min(1).max(1000),
        probationLaborPer100: z.number().min(0).max(100),
        probationPhotoRate: z.number().min(0).max(1),
        probationPunctuality: z.number().min(0).max(1),
      }),
    })
    .safeParse({
      graceDays: n("graceDays"),
      alertDays: n("alertDays"),
      serviceHours: n("serviceHours"),
      punctualityMinutes: n("punctualityMinutes"),
      photoReview: str(fd, "photoReview", 10),
      photoSampleRate: pct(str(fd, "photoSampleRate", 6)),
      blockWhenMissing: fd.get("blockWhenMissing") === "1",
      tierPoints: { or: n("pts_or"), standard: n("pts_standard"), probation: n("pts_probation") },
      thresholds: {
        orMinInstalls: n("orMinInstalls"),
        orMaxLaborPer100: n("orMaxLaborPer100"),
        orMinPhotoRate: pct(str(fd, "orMinPhotoRate", 6)),
        orMinPunctuality: pct(str(fd, "orMinPunctuality", 6)),
        orMinAcceptance: pct(str(fd, "orMinAcceptance", 6)),
        probationMinInstalls: n("probationMinInstalls"),
        probationLaborPer100: n("probationLaborPer100"),
        probationPhotoRate: pct(str(fd, "probationPhotoRate", 6)),
        probationPunctuality: pct(str(fd, "probationPunctuality", 6)),
      },
    });
  if (!p.success) return { ok: false, error: `Valeur invalide : ${p.error.issues[0]?.path.join(".") ?? "réglage"}.` };
  const r = await pa.savePartnerSettings({ ...p.data, ...c3.data }, s.email);
  if (r.ok) {
    await audit("partenaire.reglages", { assuranceMin: c3.data.requirements.minLiability, automobileMin: c3.data.requirements.minAuto, accuse: c3.data.sla.ackBusinessDays, visite: c3.data.sla.visitBusinessDays });
    refresh();
  }
  return done(r, "Réglages enregistrés.");
}

/* ---------------- Chantier ---------------- */

export async function fieldLinkAction(id: unknown): Promise<PaResult> {
  const s = await requireAdmin();
  const p = jobId.safeParse(id);
  if (!p.success) return INVALID;
  const r = await terrain.issueFieldLink(p.data, s.email, await publicBaseUrl());
  if (!r.ok) return r;
  refresh();
  return { ok: true, message: `Lien de chantier envoyé · courriel ${r.email} · texto ${r.sms}. Lien (installateur seulement) :`, link: r.link };
}

export async function plannedArrivalAction(id: string, _prev: PaResult, fd: FormData): Promise<PaResult> {
  const s = await requireAdmin();
  const p = jobId.safeParse(id);
  const raw = str(fd, "plannedAt", 40);
  const iso = str(fd, "plannedIso", 40);
  if (!p.success) return INVALID;
  const t = iso ? Date.parse(iso) : Number.NaN;
  if (raw && !Number.isFinite(t)) return { ok: false, error: "Heure invalide." };
  const r = await terrain.setPlannedArrival(p.data, raw ? new Date(t).toISOString() : null, s.email);
  if (r.ok) refresh();
  return done(r, raw ? "Heure d’arrivée prévue enregistrée." : "Heure prévue retirée.");
}

export async function declareCompletionAction(id: string, _prev: PaResult, fd: FormData): Promise<PaResult> {
  const s = await requireAdmin();
  const p = jobId.safeParse(id);
  if (!p.success) return INVALID;
  const r = await terrain.declareCompletion(p.data, s.email, str(fd, "note", 1000), fd.get("force") === "1");
  if (!r.ok) return r;
  refresh();
  return { ok: true, message: r.missing.length ? `Fin de chantier déclarée malgré : ${r.missing.join(", ")}.` : "Fin de chantier déclarée." };
}

export async function reviewPhotoAction(photoId: unknown, status: unknown, note: unknown = ""): Promise<PaResult> {
  const s = await requireAdmin();
  const p = z.object({ id: z.string().regex(FIELD_PHOTO_ID_RE), status: z.enum(["approuvee", "signalee", "aucune"]), note: z.string().max(500) }).safeParse({ id: photoId, status, note });
  if (!p.success) return INVALID;
  const r = await terrain.reviewPhoto(p.data.id, p.data.status === "aucune" ? null : p.data.status, p.data.note, s.email);
  if (r.ok) refresh();
  return done(r, p.data.status === "signalee" ? "Photo signalée." : p.data.status === "approuvee" ? "Photo approuvée." : "Décision retirée.");
}

/* ---------------- Service après-vente ---------------- */

export async function createTicketAction(_prev: PaResult, fd: FormData): Promise<PaResult> {
  const s = await requireAdmin();
  const job = str(fd, "jobId", 40);
  const p = z.object({ jobId: z.string().regex(ID_RE).nullable(), description: z.string().min(5, "Décrivez le problème.").max(3000), contact: z.string().max(200) }).safeParse({ jobId: job || null, description: str(fd, "description", 3000), contact: str(fd, "contactPreference", 200) });
  if (!p.success) return { ok: false, error: p.error.issues[0]?.message ?? "Demande invalide." };
  // Conformité C3 : urgence (sécurité, fuite active, dommages imminents, perte de chauffage) : délais courts de l'annexe E.
  const r = await sav.createTicket({ jobId: p.data.jobId, description: p.data.description, contactPreference: p.data.contact, source: "proprietaire", by: s.email, priority: fd.get("urgent") === "1" ? "urgent" : "normal" }, [], await publicBaseUrl());
  if (!r.ok) return r;
  redirect(`/gestion/sav/${r.id}?cree=1`);
}

const tid = z.string().regex(TICKET_ID_RE);

export async function classifyTicketAction(id: string, _prev: PaResult, fd: FormData): Promise<PaResult> {
  const s = await requireAdmin();
  const p = z.object({ id: tid, cause: z.enum(TICKET_CAUSES), note: z.string().max(1000) }).safeParse({ id, cause: str(fd, "cause", 20), note: str(fd, "note", 1000) });
  if (!p.success) return { ok: false, error: "Choisissez la cause." };
  const r = await sav.classifyTicket(p.data.id, p.data.cause, p.data.note, s.email);
  if (r.ok) refresh();
  return done(r, "Cause enregistrée.");
}

export async function assignTicketAction(id: unknown): Promise<PaResult> {
  const s = await requireAdmin();
  const p = tid.safeParse(id);
  if (!p.success) return INVALID;
  const r = await sav.assignTicket(p.data, s.email, await publicBaseUrl());
  if (!r.ok) return r;
  refresh();
  return { ok: true, message: `Assigné à l’installateur d’origine · courriel ${r.email} · texto ${r.sms}.` };
}

export async function visitTicketAction(id: string, _prev: PaResult, fd: FormData): Promise<PaResult> {
  const s = await requireAdmin();
  const p = tid.safeParse(id);
  const iso = str(fd, "visitIso", 40);
  if (!p.success || !iso) return { ok: false, error: "Choisissez la date de la visite." };
  const r = await sav.planTicketVisit(p.data, iso, s.email);
  if (r.ok) refresh();
  return done(r, "Visite prévue.");
}

export async function resolveTicketAction(id: string, _prev: PaResult, fd: FormData): Promise<PaResult> {
  const s = await requireAdmin();
  const p = tid.safeParse(id);
  if (!p.success) return INVALID;
  const r = await sav.resolveTicket(p.data, str(fd, "note", 2000), s.email, await publicBaseUrl());
  if (r.ok) refresh();
  return done(r, "Résolu : le client est invité à confirmer.");
}

export async function ticketSatisfactionAction(id: unknown, satisfied: unknown): Promise<PaResult> {
  const s = await requireAdmin();
  const p = z.object({ id: tid, satisfied: z.boolean() }).safeParse({ id, satisfied });
  if (!p.success) return INVALID;
  const r = await sav.ownerSatisfaction(p.data.id, p.data.satisfied, "", s.email);
  if (r.ok) refresh();
  return done(r, p.data.satisfied ? "Client satisfait : billet fermé." : "Billet rouvert.");
}

export async function closeTicketAction(id: string, _prev: PaResult, fd: FormData): Promise<PaResult> {
  const s = await requireAdmin();
  const p = tid.safeParse(id);
  if (!p.success) return INVALID;
  const r = await sav.closeTicket(p.data, str(fd, "note", 500), s.email);
  if (r.ok) refresh();
  return done(r, "Billet fermé.");
}

/** Conformité C3 : cas normal ou urgence (délais de réponse recalculés). */
export async function ticketPriorityAction(id: unknown, priority: unknown): Promise<PaResult> {
  const s = await requireAdmin();
  const p = z.object({ id: tid, priority: z.enum(TICKET_PRIORITIES) }).safeParse({ id, priority });
  if (!p.success) return INVALID;
  const r = await sav.setTicketPriority(p.data.id, p.data.priority, s.email);
  if (r.ok) {
    await audit("sav.delais", { billet: p.data.id, priorite: p.data.priority });
    refresh();
  }
  return done(r, p.data.priority === "urgent" ? "Urgence : délais courts appliqués." : "Cas normal.");
}

/** Conformité C3 : accusé de réception du partenaire noté par le propriétaire (ex. appel reçu). */
export async function ticketAckAction(id: unknown): Promise<PaResult> {
  const s = await requireAdmin();
  const p = tid.safeParse(id);
  if (!p.success) return INVALID;
  const r = await sav.acknowledgeTicket(p.data, s.email);
  if (r.ok) {
    await audit("sav.delais", { billet: p.data, operation: "accuse" });
    refresh();
  }
  return done(r, "Accusé de réception noté.");
}

export async function sendServiceLinkAction(id: unknown): Promise<PaResult> {
  const s = await requireAdmin();
  const p = jobId.safeParse(id);
  if (!p.success) return INVALID;
  const r = await sav.sendServiceLink(p.data, s.email, await publicBaseUrl());
  if (!r.ok) return r;
  return { ok: true, message: `Lien « Un problème ? » envoyé au client · courriel ${r.email} · texto ${r.sms}. Lien :`, link: r.link };
}
