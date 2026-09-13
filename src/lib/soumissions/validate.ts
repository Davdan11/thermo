/* ==================================================================
   Validation serveur de tout ce qui arrive du constructeur et des
   réglages (zod). Longueurs bornées, montants entiers positifs,
   pourcentages de 0 à 100, dates AAAA-MM-JJ, identifiants de photos
   reconnus, raison obligatoire pour chaque rabais. La machine n'arrive
   que sous forme de CHOIX (modèle, AHRI…) : ses données sont
   recalculées depuis le catalogue (catalog.ts).
   ================================================================== */

import { z } from "zod";
import { LIMITS } from "./config";
import type { MachineChoice } from "./catalog";
import type { CatalogItem, DiscountPreset, PricePackage, QuoteContent, Settings } from "./types";

const S = (max = 300) => z.string().trim().max(max);
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
  propertyType: z.enum(["unifamiliale", "jumelee", "en-rangee", "duplex", "triplex", "condo", "chalet", "commerce", "autre", ""]),
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
  type: z.enum(["murale", "cassette", "gainable", "console", "plafonnier", "centrale", "autre", ""]),
  model: S(80),
  capacityBtu: nullableNum(200_000),
  floor: z.number().int().min(0).max(10).nullable(),
  room: S(120),
  wall: S(160),
  height: S(120),
  lineLength: nullableNum(1000),
  lineIncluded: nullableNum(1000),
  lineRoute: z.enum(["interieur", "exterieur", "mixte", ""]),
  lineFinish: z.enum(["cache-ligne", "goulotte", "dans-le-mur", "aucune", "autre", ""]),
  penetrations: z.number().int().min(0).max(20).nullable(),
  wallMaterial: z.enum(["bois", "vinyle", "brique", "beton", "pierre", "aluminium", "inconnu", "autre", ""]),
  drain: z.enum(["gravite", "pompe", ""]),
  notes: S(1000),
  photos: photoIds,
});

const placement = z.object({
  lengthUnit: z.enum(["pi", "m"]),
  outdoor: z.object({
    location: S(200),
    mounting: z.enum(["support-mural", "socle-sol", "support-sol", "toit", "autre", ""]),
    clearance: S(400),
    snow: S(400),
    notes: S(1000),
    photos: photoIds,
  }),
  indoor: z.array(indoor).max(LIMITS.indoorUnits),
  electrical: z.object({
    panelCapacity: S(40),
    circuit: z.enum(["existant", "a-installer", "inconnu", ""]),
    breaker: S(40),
    disconnect: z.enum(["inclus", "existant", "non-requis", "a-confirmer", ""]),
    panelDistance: nullableNum(1000),
    electrician: z.enum(["requis-inclus", "requis-non-inclus", "non-requis", "a-confirmer", ""]),
    notes: S(1000),
  }),
  removal: z.object({ remove: z.boolean(), description: S(600) }),
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

export const quoteInputSchema = z.object({
  content: z.object({
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
    logisvert: z.object({ mode: z.enum(["cession", "client", "aucune"]) }),
    deposit: z
      .object({ kind: z.enum(["pourcentage", "montant", "aucun"]), value: z.number().min(0).max(100_000_000) })
      .refine((d) => d.kind !== "pourcentage" || d.value <= 100, "L’acompte en pourcentage ne dépasse pas 100 %."),
    validUntil: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Date de validité requise."),
    projectSummary: S(2000),
    notes: S(LIMITS.text),
  }),
  internalNotes: S(LIMITS.text),
});

export type QuoteInput = z.infer<typeof quoteInputSchema>;
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
  }),
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
