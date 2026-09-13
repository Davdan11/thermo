/* ==================================================================
   Conformité C3 — champs entre crochets de l'entente maître.

   Le texte de l'avocat (trousse.json, jamais dans le code) contient
   des champs comme « [NEQ] » ou « [forme juridique] ». Le même nom
   peut viser la plateforme ou l'installateur selon le paragraphe :
   c'est la « portée » du paragraphe (agreement.ts) qui décide quelles
   valeurs s'appliquent.

     - Plateforme : identité légale (src/lib/plateforme/identite.ts),
       plus les champs propres à l'entente (district judiciaire…),
       figées à la validation de la version.
     - Installateur : sa fiche (identité légale vérifiée, forme
       juridique, licence RBQ et sous-catégories), figées à l'envoi.
     - Signataire : nom et titre, inscrits au moment de la signature.

   Fonctions pures : aucune lecture de fichier.
   ================================================================== */

import { platformValues, type PlatformIdentity } from "@/lib/plateforme/identite";
import { heldSubcategories } from "./compliance";
import type { PartnerRecord } from "./types";

/** Tout champ entre crochets, en majuscules ou non (« [NEQ] », « [forme juridique] »). */
export const BRACKET_RE = /\[([^[\]\n]{1,80})\]/g;

/** Clé d'un champ : majuscules, apostrophe typographique, espaces réduits. « [forme juridique] » → « FORME JURIDIQUE ». */
export const tokenKey = (raw: string): string => raw.normalize("NFC").replace(/['’]/g, "’").replace(/\s+/g, " ").trim().toUpperCase();

/** Champs remplis par le signataire lui-même, au moment de la signature (portée « partenaire »). */
export const SIGNING_TOKENS: ReadonlySet<string> = new Set(["NOM ET TITRE", "NOM", "TITRE"]);

/** Clés des champs entre crochets d'un texte (sans doublon, dans l'ordre). */
export function tokensIn(text: string): string[] {
  return [...new Set([...text.matchAll(BRACKET_RE)].map((m) => tokenKey(m[1])))];
}

/** Valeurs non vides, indexées par clé normalisée. */
export function normalizeValues(values: Record<string, string | null | undefined> | null | undefined): Record<string, string> {
  const out: Record<string, string> = {};
  for (const [k, v] of Object.entries(values ?? {})) {
    const s = typeof v === "string" ? v.replace(/\s+/g, " ").trim() : "";
    if (s) out[tokenKey(k)] = s;
  }
  return out;
}

/** Remplace les champs connus ; les autres restent tels quels et sont listés (clés) dans `missing`. */
export function fillTokens(text: string, values: Record<string, string>): { text: string; missing: string[] } {
  const missing = new Set<string>();
  const out = text.replace(BRACKET_RE, (whole, raw: string) => {
    const key = tokenKey(raw);
    const v = values[key];
    if (v) return v;
    missing.add(key);
    return whole;
  });
  return { text: out, missing: [...missing] };
}

/* ---------------- Plateforme ---------------- */

/**
 * Valeurs de la plateforme pour l'entente : identité légale (mêmes jetons que le contrat et la politique), courriel
 * juridique, signataire autorisé (bloc de signature), puis les champs propres à la version (district…), qui ne
 * remplacent jamais l'identité.
 */
export function agreementPlatformValues(identity: PlatformIdentity, fields?: Record<string, string> | null): Record<string, string> {
  const rep = identity.representative;
  return {
    ...normalizeValues(fields),
    ...normalizeValues(platformValues(identity)),
    ...normalizeValues({
      "COURRIEL JURIDIQUE DE LA PLATEFORME": identity.emailLegal,
      "COURRIEL JURIDIQUE": identity.emailLegal,
      "FORME JURIDIQUE": identity.legalForm,
      NOM: rep.name,
      TITRE: rep.title,
    }),
  };
}

/** Clés que l'identité de la plateforme sait remplir (pour distinguer « à compléter dans l'identité » et « propre à l'entente »). */
export const PLATFORM_KEYS: ReadonlySet<string> = new Set([
  "RAISON SOCIALE DE LA PLATEFORME",
  "RAISON SOCIALE",
  "PLATEFORME",
  "NEQ",
  "ADRESSE",
  "ADRESSE POSTALE",
  "TPS",
  "TVQ",
  "COURRIEL",
  "TÉLÉPHONE",
  "COORDONNÉES",
  "RESPONSABLE PRP ET COORDONNÉES",
  "NOM ET TITRE",
  "COURRIEL JURIDIQUE DE LA PLATEFORME",
  "COURRIEL JURIDIQUE",
  "FORME JURIDIQUE",
  "NOM",
  "TITRE",
]);

/* ---------------- Installateur ---------------- */

export interface PartnerValues {
  values: Record<string, string>;
  /** Ce qui empêche de s'y fier (identité absente ou non vérifiée…), en clair. */
  problems: string[];
}

/** Licence RBQ et sous-catégories, telles qu'insérées dans l'entente : « 5678-1234-01 (sous-catégories 15.9, 15.10) ». */
export function rbqWithSubcategories(record: Pick<PartnerRecord, "compliance" | "rbqVerification"> | null | undefined, fallbackNumber = ""): string {
  const number = (record?.compliance.rbq.number || fallbackNumber).trim();
  const subs = heldSubcategories(record).list;
  if (!number || !subs.length) return "";
  return `${number} (sous-catégorie${subs.length > 1 ? "s" : ""} ${subs.join(", ")})`;
}

/**
 * Valeurs de l'installateur, lues dans SA fiche : identité légale (vérifiée), forme juridique, licence RBQ et
 * sous-catégories. Seules les valeurs présentes sont données : les champs manquants bloquent l'envoi.
 */
export function partnerAgreementValues(installer: { rbq?: string }, record: PartnerRecord | null | undefined): PartnerValues {
  const id = record?.identity ?? null;
  const problems: string[] = [];
  if (!id) problems.push("Identité légale à saisir dans la fiche du partenaire");
  else if (id.source === "partenaire" && !id.verifiedAt) problems.push("Identité légale transmise par le partenaire : à vérifier dans sa fiche");
  const address = id ? [id.address, id.city, id.postalCode].map((x) => x.trim()).filter(Boolean).join(", ") : "";
  const rbq = rbqWithSubcategories(record, installer.rbq ?? "");
  const values = normalizeValues({
    "RAISON SOCIALE DE L’INSTALLATEUR": id?.legalName,
    "RAISON SOCIALE DU PARTENAIRE": id?.legalName,
    "RAISON SOCIALE": id?.legalName,
    "FORME JURIDIQUE": record?.legalForm,
    ADRESSE: address,
    NEQ: id?.neq,
    "NUMÉRO ET SOUS-CATÉGORIES": rbq,
    "LICENCE RBQ ET SOUS-CATÉGORIES": rbq,
    "LICENCE RBQ": (record?.compliance.rbq.number || installer.rbq || "").trim(),
    TPS: id?.tps,
    TVQ: id?.tvq,
    COURRIEL: id?.email,
    TÉLÉPHONE: id?.phone,
  });
  return { values, problems };
}

/** Libellé lisible d'un champ manquant de l'installateur : où le remplir. */
export function partnerTokenHint(key: string): string {
  if (key.includes("SOUS-CATÉGORIE") || key.includes("RBQ")) return "licence RBQ et sous-catégories (section Conformité)";
  if (key === "FORME JURIDIQUE") return "forme juridique (section Entente)";
  return "identité légale (section Identité légale)";
}
