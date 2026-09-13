/* ==================================================================
   Identité légale de la plateforme (l'exploitant de ThermopompesAVendre.ca).

   Source unique des champs entre crochets de la trousse contractuelle :
   contrat client, entente maître, politique de confidentialité, pieds
   de messages (LCAP), message d'enregistrement des appels.

   Données : plateforme.json dans le dossier de gestion (shared/data en
   production), jamais dans le code : le dépôt est public.

   Les jetons de l'installateur ([RAISON SOCIALE DE L’INSTALLATEUR],
   [NEQ] d'une section installateur…) et du client sont fournis par
   l'appelant : fillPlaceholders remplace ce qu'on lui donne et liste
   ce qui manque, pour bloquer un envoi incomplet.
   ================================================================== */

import path from "node:path";
import { gestionDataDir, mutateJson, readJson } from "@/lib/gestion/store";

export interface PlatformPerson {
  name: string;
  title: string;
  email: string;
  phone: string;
}

export interface PlatformIdentity {
  /** Raison sociale (nom légal au Registraire des entreprises). */
  legalName: string;
  /** Forme juridique : société par actions, entreprise individuelle… */
  legalForm: string;
  /** Nom commercial présenté aux clients. */
  tradeName: string;
  neq: string;
  /** Adresse de l'établissement, sur une ligne. */
  address: string;
  /** Facultatif : vide si l'entreprise n'est pas inscrite. */
  tps: string;
  /** Facultatif : vide si l'entreprise n'est pas inscrite. */
  tvq: string;
  phone: string;
  /** Avis juridiques et annulations. */
  emailLegal: string;
  /** Service à la clientèle. */
  emailService: string;
  /** Vie privée : accès, rectification, retrait du consentement. */
  emailPrivacy: string;
  /** Responsable de la protection des renseignements personnels (Loi 25). */
  privacyOfficer: PlatformPerson;
  /** Signataire autorisé des ententes. */
  representative: { name: string; title: string };
  updatedAt: string | null;
  updatedBy: string | null;
}

export const platformFile = () => path.join(gestionDataDir(), "plateforme.json");

const str = (v: unknown, max = 200) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const obj = (v: unknown): Record<string, unknown> => (v && typeof v === "object" && !Array.isArray(v) ? (v as Record<string, unknown>) : {});

export function emptyPlatformIdentity(): PlatformIdentity {
  return {
    legalName: "",
    legalForm: "",
    tradeName: "ThermopompesAVendre.ca",
    neq: "",
    address: "",
    tps: "",
    tvq: "",
    phone: "",
    emailLegal: "",
    emailService: "",
    emailPrivacy: "",
    privacyOfficer: { name: "", title: "", email: "", phone: "" },
    representative: { name: "", title: "" },
    updatedAt: null,
    updatedBy: null,
  };
}

export function normalizePlatformIdentity(v: unknown): PlatformIdentity {
  const d = obj(v);
  const po = obj(d.privacyOfficer);
  const rep = obj(d.representative);
  return {
    legalName: str(d.legalName),
    legalForm: str(d.legalForm, 120),
    tradeName: str(d.tradeName) || emptyPlatformIdentity().tradeName,
    neq: str(d.neq, 20),
    address: str(d.address, 300),
    tps: str(d.tps, 30),
    tvq: str(d.tvq, 30),
    phone: str(d.phone, 40),
    emailLegal: str(d.emailLegal).toLowerCase(),
    emailService: str(d.emailService).toLowerCase(),
    emailPrivacy: str(d.emailPrivacy).toLowerCase(),
    privacyOfficer: { name: str(po.name), title: str(po.title, 120), email: str(po.email).toLowerCase(), phone: str(po.phone, 40) },
    representative: { name: str(rep.name), title: str(rep.title, 120) },
    updatedAt: typeof d.updatedAt === "string" ? d.updatedAt : null,
    updatedBy: typeof d.updatedBy === "string" ? d.updatedBy : null,
  };
}

/* ---------------- Validation ---------------- */

const digits = (v: string) => v.replace(/\D/g, "");
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;
export const TPS_RE = /^\d{9}\s*RT\s*\d{4}$/i;
export const TVQ_RE = /^\d{10}\s*TQ\s*\d{4}$/i;

export interface PlatformIssue {
  field: string;
  label: string;
  problem: "manquant" | "format";
}

export function platformIssues(id: PlatformIdentity): PlatformIssue[] {
  const out: PlatformIssue[] = [];
  const need = (field: string, label: string, value: string, ok = true) => {
    if (!value) out.push({ field, label, problem: "manquant" });
    else if (!ok) out.push({ field, label, problem: "format" });
  };
  const optional = (field: string, label: string, value: string, ok: boolean) => {
    if (value && !ok) out.push({ field, label, problem: "format" });
  };
  need("legalName", "Raison sociale", id.legalName);
  need("legalForm", "Forme juridique", id.legalForm);
  need("neq", "NEQ (10 chiffres)", id.neq, digits(id.neq).length === 10);
  need("address", "Adresse de l’établissement", id.address);
  optional("tps", "Numéro de TPS (123456789 RT0001)", id.tps, TPS_RE.test(id.tps));
  optional("tvq", "Numéro de TVQ (1234567890 TQ0001)", id.tvq, TVQ_RE.test(id.tvq));
  need("phone", "Téléphone", id.phone, digits(id.phone).length >= 10);
  need("emailLegal", "Courriel juridique (avis, annulations)", id.emailLegal, EMAIL_RE.test(id.emailLegal));
  need("emailService", "Courriel du service", id.emailService, EMAIL_RE.test(id.emailService));
  need("emailPrivacy", "Courriel de la vie privée", id.emailPrivacy, EMAIL_RE.test(id.emailPrivacy));
  need("privacyOfficer.name", "Responsable de la protection des renseignements personnels : nom", id.privacyOfficer.name);
  need("privacyOfficer.title", "Responsable de la protection des renseignements personnels : titre", id.privacyOfficer.title);
  need("privacyOfficer.email", "Responsable de la protection des renseignements personnels : courriel", id.privacyOfficer.email, EMAIL_RE.test(id.privacyOfficer.email));
  need("representative.name", "Signataire autorisé : nom", id.representative.name);
  need("representative.title", "Signataire autorisé : titre", id.representative.title);
  return out;
}

export const isPlatformIdentityComplete = (id: PlatformIdentity) => platformIssues(id).length === 0;

/* ---------------- Magasin ---------------- */

export async function readPlatformIdentity(): Promise<PlatformIdentity> {
  return normalizePlatformIdentity(await readJson<unknown>(platformFile(), () => null));
}

export type PlatformIdentityPatch = Partial<Omit<PlatformIdentity, "privacyOfficer" | "representative" | "updatedAt" | "updatedBy">> & {
  privacyOfficer?: Partial<PlatformPerson>;
  representative?: Partial<PlatformIdentity["representative"]>;
};

export function savePlatformIdentity(patch: PlatformIdentityPatch, by: string, now = new Date()): Promise<PlatformIdentity> {
  return mutateJson<PlatformIdentity, PlatformIdentity>(platformFile(), emptyPlatformIdentity, normalizePlatformIdentity, (cur) => {
    const next = normalizePlatformIdentity({
      ...cur,
      ...patch,
      privacyOfficer: { ...cur.privacyOfficer, ...(patch.privacyOfficer ?? {}) },
      representative: { ...cur.representative, ...(patch.representative ?? {}) },
      updatedAt: now.toISOString(),
      updatedBy: by,
    });
    Object.assign(cur, next);
    return { result: next, changed: true };
  });
}

/* ---------------- Champs entre crochets ---------------- */

/** Jetons en majuscules entre crochets, ex. « [RAISON SOCIALE DE LA PLATEFORME] », « [COURRIEL DE L’INSTALLATEUR] ». */
export const PLACEHOLDER_RE = /\[([A-ZÀ-ÖØ-ÞŒ0-9’' ,.-]{2,80})\]/g;

export function placeholdersIn(text: string): string[] {
  return [...new Set([...text.matchAll(PLACEHOLDER_RE)].map((m) => m[1]))];
}

/** Remplace les jetons connus ; les jetons sans valeur restent tels quels et sont listés dans `missing`. */
export function fillPlaceholders(text: string, values: Record<string, string | null | undefined>): { text: string; missing: string[] } {
  const missing = new Set<string>();
  const out = text.replace(PLACEHOLDER_RE, (whole, token: string) => {
    const v = values[token]?.trim();
    if (v) return v;
    missing.add(token);
    return whole;
  });
  return { text: out, missing: [...missing] };
}

/** Valeurs de la plateforme pour les jetons de la trousse ; seules les valeurs remplies sont données. */
export function platformValues(id: PlatformIdentity): Record<string, string> {
  const po = id.privacyOfficer;
  const rep = id.representative;
  const coords = [id.address, id.phone, id.emailService].filter(Boolean).join(" · ");
  const values: Record<string, string> = {
    "RAISON SOCIALE DE LA PLATEFORME": id.legalName,
    "RAISON SOCIALE": id.legalName,
    PLATEFORME: id.legalName,
    NEQ: id.neq,
    ADRESSE: id.address,
    "ADRESSE POSTALE": id.address,
    TPS: id.tps,
    TVQ: id.tvq,
    COURRIEL: id.emailService,
    TÉLÉPHONE: id.phone,
    COORDONNÉES: coords,
    "RESPONSABLE PRP ET COORDONNÉES": po.name && po.email ? `${po.name}${po.title ? `, ${po.title}` : ""}, ${po.email}${po.phone ? `, ${po.phone}` : ""}` : "",
    "NOM ET TITRE": rep.name && rep.title ? `${rep.name}, ${rep.title}` : "",
  };
  return Object.fromEntries(Object.entries(values).filter(([, v]) => v));
}
