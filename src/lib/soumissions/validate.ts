/* ==================================================================
   Validation serveur de tout ce qui arrive du constructeur et des
   réglages (zod). Longueurs bornées, montants entiers positifs,
   pourcentages de 0 à 100, dates AAAA-MM-JJ, identifiants de photos
   reconnus, raison obligatoire pour chaque rabais. La machine n'arrive
   que sous forme de CHOIX (modèle, AHRI…) : ses données sont
   recalculées depuis le catalogue (catalog.ts).
   ================================================================== */

import { z } from "zod";
import { CLIENT_ID_RE } from "@/lib/gestion/crm/types";
import { INSTALLER_ID_RE } from "@/lib/gestion/partenaires/types";
import { normalizeChoices } from "./choices";
import { LIMITS } from "./config";
import type { MachineChoice } from "./catalog";
import type { CatalogItem, DiscountPreset, PricePackage, QuoteContent, Settings } from "./types";

const S = (max = 300) => z.string().trim().max(max);
/** Longueur d'un choix en un clic ou d'un texte « Autre… ». */
const CHOICE_TEXT = 120;
const day = z.string().regex(/^(\d{4}-\d{2}-\d{2})?$/, "Date invalide.");
const cents = z.number().int().min(0).max(100_000_000);
const qty = z.number().min(0).max(100_000);
const nullableNum = (max: number) => z.number().min(0).max(max).nullable();
const localId = z.string().regex(/^[a-z]{1,3}_[A-Za-z0-9_-]{1,24}$/, "Identifiant invalide.");
const photoIds = z.array(z.string().regex(/^p_[A-Za-z0-9_-]{8,16}$/)).max(LIMITS.photosPerUnit);

const discount = z
  .object({
    id: localId,
    reason: S(140).min(1, "Chaque rabais doit avoir une raison."),
    kind: z.enum(["montant", "pourcentage"]),
    value: z.number().min(0).max(100_000_000),
    expiresOn: day.nullable(),
  })
  .refine((d) => d.kind !== "pourcentage" || d.value <= 100, "Un rabais en pourcentage ne dépasse pas 100 %.")
  .transform((d) => ({ ...d, expiresOn: d.expiresOn || null, value: d.kind === "montant" ? Math.round(d.value) : Math.round(d.value * 100) / 100 }));

const line = z.object({
  id: localId,
  kind: z.enum(["forfait", "equipement", "extra", "main-oeuvre", "autre"]),
  label: S(160).min(1, "Chaque ligne de prix a un libellé."),
  description: S(1000),
  unit: z.enum(["unite", "pied", "metre", "forfait", "heure"]),
  quantity: qty,
  unitPriceCents: cents,
  optional: z.boolean(),
  selectedByDefault: z.boolean(),
  discount: discount.nullable(),
  catalogRef: z.string().max(40).nullable(),
  unitRef: z.string().max(40).nullable(),
});

const item = z.object({ id: localId, label: S(240), detail: S(600) });
const items = z.array(item).max(LIMITS.listItems).transform((l) => l.filter((i) => i.label));

const client = z.object({ firstName: S(80), lastName: S(80), email: S(200), phone: S(40), address: S(200), city: S(100), postalCode: S(10) });

const site = z.object({
  sameAsBilling: z.boolean(),
  address: S(200),
  city: S(100),
  postalCode: S(10),
  // Choix en un clic ou « Autre… » : texte borné (les anciennes clés restent acceptées telles quelles).
  propertyType: S(80),
  yearBuilt: S(20),
  floors: z.number().int().min(1).max(10).nullable(),
  basement: z.boolean(),
  access: S(1000),
  constraints: S(1000),
  presence: S(300),
});

const indoor = z.object({
  id: localId,
  label: S(80),
  type: S(CHOICE_TEXT),
  model: S(80),
  capacityBtu: nullableNum(200_000),
  floor: z.number().int().min(0).max(10).nullable(),
  room: S(120),
  wall: S(160),
  height: S(120),
  lineLength: nullableNum(1000),
  lineIncluded: nullableNum(1000),
  lineRoute: S(CHOICE_TEXT),
  lineFinish: S(CHOICE_TEXT),
  penetrations: z.number().int().min(0).max(20).nullable(),
  wallMaterial: S(CHOICE_TEXT),
  drain: S(CHOICE_TEXT),
  notes: S(1000),
  photos: photoIds,
});

const placement = z.object({
  lengthUnit: z.enum(["pi", "m"]),
  outdoor: z.object({
    location: S(200),
    mounting: S(CHOICE_TEXT),
    clearance: S(400),
    snow: S(400),
    notes: S(1000),
    photos: photoIds,
  }),
  indoor: z.array(indoor).max(LIMITS.indoorUnits),
  electrical: z.object({
    panelCapacity: S(40),
    circuit: S(CHOICE_TEXT),
    breaker: S(40),
    disconnect: S(CHOICE_TEXT),
    panelDistance: nullableNum(1000),
    electrician: z.enum(["requis-inclus", "requis-non-inclus", "non-requis", "a-confirmer", ""]),
    notes: S(1000),
  }),
  removal: z.object({ remove: z.boolean(), description: S(600) }),
  // Chantier D : couleur du cache-ligne (absente des anciens brouillons).
  coverColor: S(80).optional(),
});

const schedule = z.object({
  mode: z.enum(["date", "fenetre", ""]),
  date: day,
  windowStart: day,
  windowEnd: day,
  windowText: S(200),
  duration: S(120),
  arrival: S(120),
  prep: z.array(S(240)).max(LIMITS.listItems).transform((l) => l.filter(Boolean)),
  notes: S(1000),
});

const machineChoice = z.object({
  modelSlug: z.string().min(1).max(160),
  ahri: z.string().regex(/^\d{3,12}$/).nullable(),
  offList: z.boolean(),
  offListIndoor: S(300),
  showCatalogWarranties: z.boolean(),
  warrantyText: S(2000),
  explanation: S(3000),
});

const contentSchema = z.object({
    client,
    site,
    machine: machineChoice.nullable(),
    placement,
    schedule,
    lines: z.array(line).max(LIMITS.lines),
    discounts: z.array(discount).max(20),
    inclusions: items,
    exclusions: items,
    assumptions: items,
    // Plus de choix de mode : le serveur le recalcule depuis le jumelage (logisvertModeFor). Accepté pour les anciens brouillons.
    logisvert: z.object({ mode: z.enum(["cession", "client", "aucune"]) }).optional(),
    deposit: z
      .object({ kind: z.enum(["pourcentage", "montant", "aucun"]), value: z.number().min(0).max(100_000_000) })
      .refine((d) => d.kind !== "pourcentage" || d.value <= 100, "L’acompte en pourcentage ne dépasse pas 100 %."),
    validUntil: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Date de validité requise."),
    projectSummary: S(2000),
    notes: S(LIMITS.text),
});

const installerRef = z.string().regex(INSTALLER_ID_RE, "Entrepreneur introuvable.").nullable().optional();

export const quoteInputSchema = z.object({
  content: contentSchema,
  internalNotes: S(LIMITS.text),
  /** Installateur partenaire qui réalise les travaux (i_…). */
  contractorId: installerRef,
  /** Fiche client du CRM choisie dans le créateur (c_…). */
  clientId: z.string().regex(CLIENT_ID_RE, "Fiche client introuvable.").nullable().optional(),
});

export type QuoteInput = z.infer<typeof quoteInputSchema>;

/** « Enregistrer comme modèle » : un nom et le contenu du créateur (le client et le chantier sont retirés au serveur). */
export const templateInputSchema = z.object({
  name: S(80).min(1, "Donnez un nom au modèle (ex. « Murale standard »)."),
  content: contentSchema,
  contractorId: installerRef,
});

export type TemplateInput = z.infer<typeof templateInputSchema>;

export function parseTemplateInput(raw: unknown): { ok: true; data: TemplateInput } | { ok: false; error: string } {
  const r = templateInputSchema.safeParse(raw);
  return r.success ? { ok: true, data: r.data } : { ok: false, error: firstIssue(r.error) };
}
export type ContentInput = Omit<QuoteContent, "machine"> & { machine: MachineChoice | null };

function firstIssue(err: z.ZodError): string {
  const i = err.issues[0];
  return i ? `${i.message}${i.path.length ? ` (${i.path.join(" › ")})` : ""}` : "Données invalides.";
}

export function parseQuoteInput(raw: unknown): { ok: true; data: QuoteInput } | { ok: false; error: string } {
  const r = quoteInputSchema.safeParse(raw);
  return r.success ? { ok: true, data: r.data } : { ok: false, error: firstIssue(r.error) };
}

/* ---------------- Réglages ---------------- */

const company = z.object({
  legalName: S(200),
  tradeName: S(200),
  neq: S(20),
  rbq: S(20),
  address: S(200),
  city: S(100),
  postalCode: S(10),
  phone: S(40),
  email: S(200),
  website: S(200),
  tps: S(30),
  tvq: S(30),
  logoId: z.string().regex(/^p_[A-Za-z0-9_-]{8,16}$/).nullable(),
});

const texts = z.object({
  paymentTerms: S(LIMITS.text),
  depositRule: S(LIMITS.text),
  warranty: S(LIMITS.text),
  legalWarranty: S(LIMITS.text),
  cancellation: S(LIMITS.longText),
  terms: S(LIMITS.longText),
  weatherClause: S(LIMITS.text),
  changeOrder: S(LIMITS.text),
  logisvertCession: S(LIMITS.text),
  logisvertClient: S(LIMITS.text),
});

const stage = z.number().int().positive().nullable();

export const settingsInputSchema = z.object({
  company,
  texts,
  defaults: z.object({
    validityDays: z.number().int().min(1).max(365),
    deposit: z.object({ kind: z.enum(["pourcentage", "montant", "aucun"]), value: z.number().min(0).max(100_000_000) }).refine((d) => d.kind !== "pourcentage" || d.value <= 100, "Acompte : 100 % au plus."),
    lengthUnit: z.enum(["pi", "m"]),
    includedLineLength: nullableNum(1000),
    // Chantier D : contraintes des occupants par défaut (facultatif, anciens formulaires sans ce champ).
    site: z.object({ access: S(1000), presence: S(300), constraints: S(1000).optional() }),
    schedule: z.object({ duration: S(120), arrival: S(120), windowText: S(200) }),
  }),
  // Chantier D : « Inclusions standard » (absentes d'un ancien formulaire : valeurs gardées).
  standard: z
    .object({
      enabled: z.boolean(),
      lineIncludedFt: z.number().min(0).max(1000).nullable(),
      lineCover: z.boolean(),
      mounting: z.boolean(),
      gravityDrain: z.boolean(),
      electricalToPanel: z.boolean(),
    })
    .optional(),
  // Listes des choix en un clic : nettoyées (doublons, vides, longueur, nombres) par normalizeChoices.
  choices: z.record(z.string().max(40), z.array(z.string().max(200)).max(60)).transform((r) => normalizeChoices(r)),
  templates: z.object({
    inclusions: z.array(S(240)).max(LIMITS.listItems).transform((l) => l.filter(Boolean)),
    exclusions: z.array(S(240)).max(LIMITS.listItems).transform((l) => l.filter(Boolean)),
    assumptions: z.array(S(240)).max(LIMITS.listItems).transform((l) => l.filter(Boolean)),
    prep: z.array(S(240)).max(LIMITS.listItems).transform((l) => l.filter(Boolean)),
  }),
  pipedriveStages: z.object({ envoyee: stage, ouverte: stage, acceptee: stage, refusee: stage }),
});

export type SettingsInput = z.infer<typeof settingsInputSchema>;

export function parseSettingsInput(raw: unknown): { ok: true; data: SettingsInput } | { ok: false; error: string } {
  const r = settingsInputSchema.safeParse(raw);
  return r.success ? { ok: true, data: r.data } : { ok: false, error: firstIssue(r.error) };
}

const catalogItem = (kind: CatalogItem["kind"]) =>
  z.object({
    id: localId,
    kind: z.literal(kind),
    name: S(160).min(1, "Chaque élément a un nom."),
    description: S(1000),
    unit: z.enum(["unite", "pied", "metre", "forfait", "heure"]),
    unitPriceCents: cents,
    defaultQuantity: qty,
    optional: z.boolean(),
    role: z.enum(["ligne-supplementaire", "pompe-drain", "retrait", "circuit", "support-mural", "support-sol"]).nullable(),
  });

export const pricesInputSchema = z.object({
  packages: z
    .array(
      z.object({
        id: localId,
        label: S(160).min(1, "Chaque forfait a un nom."),
        description: S(1000),
        systemType: z.string().max(40),
        capacityMinBtu: nullableNum(500_000),
        capacityMaxBtu: nullableNum(500_000),
        priceCents: cents,
        includedLineLength: nullableNum(1000),
        inclusions: z.array(S(240)).max(LIMITS.listItems).transform((l) => l.filter(Boolean)),
      }),
    )
    .max(60),
  extras: z.array(catalogItem("extra")).max(100),
  labour: z.array(catalogItem("main-oeuvre")).max(40),
  discounts: z
    .array(z.object({ id: localId, reason: S(140).min(1, "Chaque rabais a une raison."), kind: z.enum(["montant", "pourcentage"]), value: z.number().min(0).max(100_000_000) }))
    .max(30),
});

export type PricesInput = { packages: PricePackage[]; extras: CatalogItem[]; labour: CatalogItem[]; discounts: DiscountPreset[] };

export function parsePricesInput(raw: unknown): { ok: true; data: PricesInput } | { ok: false; error: string } {
  const r = pricesInputSchema.safeParse(raw);
  return r.success ? { ok: true, data: r.data as PricesInput } : { ok: false, error: firstIssue(r.error) };
}

export type { Settings };
