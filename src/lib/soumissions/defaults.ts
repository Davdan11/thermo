/* ==================================================================
   Valeurs de départ du créateur de soumissions.
   - Identité de l'entreprise : VIDE. Jamais de valeur inventée.
   - Prix : ZÉRO. Le propriétaire saisit ses propres prix.
   - Textes juridiques : marqueurs « [À … ] » tant que l'avocat ou le
     propriétaire ne les a pas remplacés (l'envoi reste bloqué).
   - Listes (inclus, non inclus, hypothèses) : de simples libellés, que
     le propriétaire confirme ou retire ; aucune promesse ajoutée.
   Ce module est pur : utilisable dans le navigateur (constructeur).
   ================================================================== */

import { normalizeChoices } from "./choices";
import { LAWYER_PLACEHOLDER } from "./config";
import { addDays } from "./dates";
import type {
  CatalogItem,
  ClientInfo,
  CompanyIdentity,
  DocumentTexts,
  IndoorPlacement,
  LengthUnit,
  ListItem,
  Placement,
  QuoteContent,
  ScheduleInfo,
  Settings,
  SiteInfo,
} from "./types";

/** Identifiant local court (navigateur ou serveur). */
export function rid(prefix: string): string {
  const bytes = new Uint8Array(8);
  globalThis.crypto.getRandomValues(bytes);
  return `${prefix}_${Array.from(bytes, (b) => b.toString(36).padStart(2, "0")).join("").slice(0, 12)}`;
}

export function emptyCompany(): CompanyIdentity {
  return { legalName: "", tradeName: "", neq: "", rbq: "", address: "", city: "", postalCode: "", phone: "", email: "", website: "", tps: "", tvq: "", logoId: null };
}

export function defaultTexts(): DocumentTexts {
  return {
    paymentTerms: "[À PRÉCISER : échéancier de paiement et modes de paiement acceptés]",
    depositRule: "[À PRÉCISER : moment où l’acompte est exigé et ce qu’il advient de l’acompte en cas d’annulation]",
    warranty: "[À PRÉCISER : durée et étendue de la garantie de main-d’œuvre de l’entreprise]",
    legalWarranty: LAWYER_PLACEHOLDER,
    cancellation: LAWYER_PLACEHOLDER,
    terms: LAWYER_PLACEHOLDER,
    weatherClause: "[À PRÉCISER : conditions météo qui permettent de reporter l’installation, et comment la nouvelle date est fixée]",
    changeOrder:
      "Si une hypothèse ci-dessus s’avère inexacte, ou si vous demandez une modification, nous vous remettons un avenant écrit et chiffré avant d’exécuter les travaux concernés. L’avenant est une nouvelle version de cette soumission : vous l’acceptez de la même façon, en ligne.",
    logisvertCession:
      "Le montant de l’aide LogisVert indiqué est déduit du prix. Vous autorisez l’entreprise à recevoir ce montant directement d’Hydro-Québec, selon les conditions du programme. Si l’aide n’est pas accordée, ou l’est pour un montant moindre, la différence reste payable par vous.",
    logisvertClient:
      "L’aide LogisVert est versée par Hydro-Québec au client, après l’installation, selon les conditions du programme. Le montant indiqué est celui de la liste officielle d’Hydro-Québec pour ce jumelage à la date de la soumission ; l’entreprise ne garantit ni son acceptation ni son versement.",
  };
}

export const SEED_INCLUSIONS = [
  "Installation de l’unité extérieure sur son support",
  "Installation de l’unité intérieure (ou des unités intérieures)",
  "Ligne de réfrigérant jusqu’à la longueur incluse",
  "Percement du mur et scellement",
  "Drain de condensat",
  "Raccordement électrique au circuit dédié existant, s’il y a lieu",
  "Mise sous vide et essai d’étanchéité",
  "Mise en service",
  "Explication de la télécommande ou du thermostat",
  "Nettoyage du chantier",
  "Aide pour la demande d’aide LogisVert",
];

export const SEED_EXCLUSIONS = [
  "Mise à niveau du panneau électrique, ou travaux électriques au-delà du circuit dédié",
  "Permis municipaux, sauf mention contraire",
  "Réparation de gypse, peinture ou finition",
  "Travaux de toiture",
  "Déneigement",
  "Travaux de structure",
  "Amiante ou vermiculite",
  "Conditions cachées",
];

export const SEED_ASSUMPTIONS = [
  "Le panneau électrique a la capacité requise pour le circuit de la thermopompe",
  "Le mur de passage n’est ni en brique ni en béton",
  "Le parcours prévu pour la ligne de réfrigérant est accessible sans ouvrir de mur ni de plafond",
];

export const SEED_PREP = [
  "Dégager l’accès aux emplacements prévus, à l’intérieur et à l’extérieur",
  "Libérer environ un mètre autour de chaque emplacement",
  "Garder les animaux dans une pièce fermée pendant les travaux",
  "Donner accès au panneau électrique",
];

/** Extras demandés par le propriétaire : noms seulement, prix à 0 $ (à compléter). */
export function seedExtras(): CatalogItem[] {
  const x = (id: string, name: string, unit: CatalogItem["unit"], role: CatalogItem["role"], optional = false): CatalogItem => ({ id, kind: "extra", name, description: "", unit, unitPriceCents: 0, defaultQuantity: 1, optional, role });
  return [
    x("x_pompe", "Pompe à condensat (pompe à drain)", "unite", "pompe-drain"),
    x("x_clickplay", "Click & Play", "unite", null, true),
    x("x_supmural", "Support mural", "unite", "support-mural"),
    x("x_supsol", "Support au sol", "unite", "support-sol"),
    x("x_ligne", "Ligne de réfrigérant supplémentaire (par pied)", "pied", "ligne-supplementaire"),
    x("x_circuit", "Circuit électrique dédié", "forfait", "circuit"),
    x("x_retrait", "Retrait de l’ancien appareil", "forfait", "retrait"),
  ];
}

export function defaultSettings(): Settings {
  return {
    version: 1,
    company: emptyCompany(),
    texts: defaultTexts(),
    defaults: {
      validityDays: 30,
      deposit: { kind: "aucun", value: 0 },
      lengthUnit: "pi",
      includedLineLength: null,
      site: { access: "", presence: "" },
      schedule: { duration: "", arrival: "", windowText: "" },
    },
    choices: normalizeChoices(null),
    templates: { inclusions: [...SEED_INCLUSIONS], exclusions: [...SEED_EXCLUSIONS], assumptions: [...SEED_ASSUMPTIONS], prep: [...SEED_PREP] },
    packages: [],
    extras: seedExtras(),
    labour: [],
    discounts: [],
    pipedriveStages: { envoyee: null, ouverte: null, acceptee: null, refusee: null },
    updatedAt: null,
    updatedBy: null,
  };
}

/** Complète des réglages lus sur le disque (champs ajoutés depuis leur écriture). */
export function normalizeSettings(raw: Partial<Settings> | null | undefined): Settings {
  const d = defaultSettings();
  if (!raw || typeof raw !== "object") return d;
  return {
    version: 1,
    company: { ...d.company, ...(raw.company ?? {}) },
    texts: { ...d.texts, ...(raw.texts ?? {}) },
    defaults: {
      ...d.defaults,
      ...(raw.defaults ?? {}),
      deposit: { ...d.defaults.deposit, ...(raw.defaults?.deposit ?? {}) },
      site: { ...d.defaults.site, ...(raw.defaults?.site ?? {}) },
      schedule: { ...d.defaults.schedule, ...(raw.defaults?.schedule ?? {}) },
    },
    choices: normalizeChoices(raw.choices),
    templates: { ...d.templates, ...(raw.templates ?? {}) },
    packages: Array.isArray(raw.packages) ? raw.packages : d.packages,
    extras: Array.isArray(raw.extras) ? raw.extras : d.extras,
    labour: Array.isArray(raw.labour) ? raw.labour : d.labour,
    discounts: Array.isArray(raw.discounts) ? raw.discounts : d.discounts,
    pipedriveStages: { ...d.pipedriveStages, ...(raw.pipedriveStages ?? {}) },
    updatedAt: raw.updatedAt ?? null,
    updatedBy: raw.updatedBy ?? null,
  };
}

export function emptyClient(): ClientInfo {
  return { firstName: "", lastName: "", email: "", phone: "", address: "", city: "", postalCode: "" };
}

export function emptySite(defaults?: Settings["defaults"]["site"]): SiteInfo {
  return { sameAsBilling: true, address: "", city: "", postalCode: "", propertyType: "", yearBuilt: "", floors: null, basement: false, access: defaults?.access ?? "", constraints: "", presence: defaults?.presence ?? "" };
}

export function newIndoor(n: number, included: number | null = null): IndoorPlacement {
  return {
    id: rid("u"),
    label: `Unité ${n}`,
    type: "",
    model: "",
    capacityBtu: null,
    floor: null,
    room: "",
    wall: "",
    height: "",
    lineLength: null,
    lineIncluded: included,
    lineRoute: "",
    lineFinish: "",
    penetrations: null,
    wallMaterial: "",
    drain: "",
    notes: "",
    photos: [],
  };
}

export function emptyPlacement(unit: LengthUnit, included: number | null): Placement {
  return {
    lengthUnit: unit,
    outdoor: { location: "", mounting: "", clearance: "", snow: "", notes: "", photos: [] },
    indoor: [newIndoor(1, included)],
    electrical: { panelCapacity: "", circuit: "", breaker: "", disconnect: "", panelDistance: null, electrician: "", notes: "" },
    removal: { remove: false, description: "" },
  };
}

export function emptySchedule(prep: string[], defaults?: Settings["defaults"]["schedule"]): ScheduleInfo {
  return { mode: "", date: "", windowStart: "", windowEnd: "", windowText: defaults?.windowText ?? "", duration: defaults?.duration ?? "", arrival: defaults?.arrival ?? "", prep: [...prep], notes: "" };
}

export const toItems = (labels: string[]): ListItem[] => labels.filter((l) => l.trim()).map((label) => ({ id: rid("i"), label, detail: "" }));

export function emptyContent(settings: Settings, today: string): QuoteContent {
  return {
    client: emptyClient(),
    site: emptySite(settings.defaults.site),
    machine: null,
    placement: emptyPlacement(settings.defaults.lengthUnit, settings.defaults.includedLineLength),
    schedule: emptySchedule(settings.templates.prep, settings.defaults.schedule),
    lines: [],
    discounts: [],
    inclusions: toItems(settings.templates.inclusions),
    exclusions: toItems(settings.templates.exclusions),
    assumptions: toItems(settings.templates.assumptions),
    logisvert: { mode: "aucune" },
    deposit: { ...settings.defaults.deposit },
    validUntil: addDays(today, Math.max(1, settings.defaults.validityDays || 30)),
    projectSummary: "",
    notes: "",
  };
}
