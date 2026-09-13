/* ==================================================================
   Types du créateur de soumissions.
   Montants en cents (entiers). Dates du calendrier au format
   AAAA-MM-JJ (heure de Montréal), horodatages en ISO 8601.
   ================================================================== */

export type QuoteStatus = "brouillon" | "envoyee" | "ouverte" | "acceptee" | "refusee" | "remplacee";
/** Statut affiché : « expirée » est calculé à partir de la date de validité, jamais écrit. */
export type EffectiveStatus = QuoteStatus | "expiree";

export const STATUS_LABELS: Record<EffectiveStatus, string> = {
  brouillon: "Brouillon",
  envoyee: "Envoyée",
  ouverte: "Ouverte",
  acceptee: "Acceptée",
  refusee: "Refusée",
  expiree: "Expirée",
  remplacee: "Remplacée",
};

export type LogisVertMode = "cession" | "client" | "aucune";
export type LineKind = "forfait" | "equipement" | "extra" | "main-oeuvre" | "autre";
export type LineUnit = "unite" | "pied" | "metre" | "forfait" | "heure";
export type DiscountKind = "montant" | "pourcentage";

export const UNIT_LABELS: Record<LineUnit, { one: string; many: string; short: string }> = {
  unite: { one: "unité", many: "unités", short: "unité" },
  pied: { one: "pied", many: "pieds", short: "pi" },
  metre: { one: "mètre", many: "mètres", short: "m" },
  forfait: { one: "forfait", many: "forfaits", short: "forfait" },
  heure: { one: "heure", many: "heures", short: "h" },
};

export interface Discount {
  id: string;
  /** Raison obligatoire, affichée au client (ex. « Rabais de fin de saison »). */
  reason: string;
  kind: DiscountKind;
  /** Cents si « montant », pourcentage (0 à 100, deux décimales) si « pourcentage ». */
  value: number;
  /** Dernier jour où le rabais s'applique (inclus), ou null. */
  expiresOn: string | null;
}

export interface QuoteLine {
  id: string;
  kind: LineKind;
  label: string;
  description: string;
  unit: LineUnit;
  quantity: number;
  unitPriceCents: number;
  /** Ligne facultative : le client peut la cocher ou la décocher. */
  optional: boolean;
  /** Pour une ligne facultative : cochée d'office. */
  selectedByDefault: boolean;
  /** Rabais propre à la ligne (raison obligatoire). */
  discount: Discount | null;
  /** Élément de la liste de prix d'origine (forfait, extra, main-d'œuvre). */
  catalogRef: string | null;
  /** Unité intérieure liée (longueur de ligne supplémentaire, pompe de drain…). */
  unitRef: string | null;
}

export interface ClientInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
}

export type PropertyType = "unifamiliale" | "jumelee" | "en-rangee" | "duplex" | "triplex" | "condo" | "chalet" | "commerce" | "autre" | "";
export const PROPERTY_LABELS: Record<Exclude<PropertyType, "">, string> = {
  unifamiliale: "Maison unifamiliale",
  jumelee: "Maison jumelée",
  "en-rangee": "Maison en rangée",
  duplex: "Duplex",
  triplex: "Triplex ou plus",
  condo: "Condo",
  chalet: "Chalet",
  commerce: "Local commercial",
  autre: "Autre",
};

export interface SiteInfo {
  /** Adresse des travaux identique à l'adresse de facturation. */
  sameAsBilling: boolean;
  address: string;
  city: string;
  postalCode: string;
  propertyType: PropertyType;
  /** Année de construction si connue (texte libre court : « 1987 », « vers 1960 »). */
  yearBuilt: string;
  /** Étages hors sol (1 = plain-pied). */
  floors: number | null;
  basement: boolean;
  /** Accès et stationnement. */
  access: string;
  /** Contraintes des occupants (horaires, télétravail, bébé, animaux…). */
  constraints: string;
  /** Qui doit être présent pendant les travaux. */
  presence: string;
}

export type IndoorType = "murale" | "cassette" | "gainable" | "console" | "plafonnier" | "centrale" | "autre";
export const INDOOR_LABELS: Record<IndoorType, string> = {
  murale: "Murale",
  cassette: "Cassette au plafond",
  gainable: "Gainable (conduits)",
  console: "Console au plancher",
  plafonnier: "Plafonnier",
  centrale: "Appareil central (fournaise ou serpentin)",
  autre: "Autre",
};

export type Mounting = "support-mural" | "socle-sol" | "support-sol" | "toit" | "autre";
export const MOUNTING_LABELS: Record<Mounting, string> = {
  "support-mural": "Support mural",
  "socle-sol": "Socle au sol",
  "support-sol": "Support au sol (surélevé)",
  toit: "Toit",
  autre: "Autre",
};

export type LineRoute = "interieur" | "exterieur" | "mixte";
export const ROUTE_LABELS: Record<LineRoute, string> = {
  interieur: "À l’intérieur",
  exterieur: "À l’extérieur",
  mixte: "Intérieur et extérieur",
};

export type LineFinish = "cache-ligne" | "goulotte" | "dans-le-mur" | "aucune" | "autre";
export const FINISH_LABELS: Record<LineFinish, string> = {
  "cache-ligne": "Cache-ligne",
  goulotte: "Goulotte",
  "dans-le-mur": "Dans le mur",
  aucune: "Sans finition (isolant apparent)",
  autre: "Autre",
};

export type WallMaterial = "bois" | "vinyle" | "brique" | "beton" | "pierre" | "aluminium" | "inconnu" | "autre";
export const WALL_LABELS: Record<WallMaterial, string> = {
  bois: "Bois",
  vinyle: "Revêtement de vinyle",
  brique: "Brique",
  beton: "Béton",
  pierre: "Pierre",
  aluminium: "Aluminium",
  inconnu: "Inconnu",
  autre: "Autre",
};

export type DrainMethod = "gravite" | "pompe";
export const DRAIN_LABELS: Record<DrainMethod, string> = {
  gravite: "Par gravité",
  pompe: "Pompe à condensat (pompe à drain)",
};

export type LengthUnit = "pi" | "m";

export interface IndoorPlacement {
  id: string;
  /** « Unité 1 », « Chambre principale »… */
  label: string;
  type: IndoorType | "";
  /** Numéro de modèle de l'unité intérieure. */
  model: string;
  capacityBtu: number | null;
  /** 0 = sous-sol, 1 = rez-de-chaussée, 2 = étage… */
  floor: number | null;
  room: string;
  wall: string;
  /** Hauteur approximative (texte : « environ 2,1 m du plancher »). */
  height: string;
  lineLength: number | null;
  /** Longueur de ligne comprise dans le prix, pour cette unité. */
  lineIncluded: number | null;
  lineRoute: LineRoute | "";
  lineFinish: LineFinish | "";
  penetrations: number | null;
  wallMaterial: WallMaterial | "";
  drain: DrainMethod | "";
  notes: string;
  photos: string[];
}

export interface OutdoorPlacement {
  location: string;
  mounting: Mounting | "";
  clearance: string;
  snow: string;
  notes: string;
  photos: string[];
}

export type CircuitState = "existant" | "a-installer" | "inconnu";
export const CIRCUIT_LABELS: Record<CircuitState, string> = {
  existant: "Circuit dédié existant",
  "a-installer": "Circuit dédié à installer",
  inconnu: "À vérifier",
};
export type DisconnectState = "inclus" | "existant" | "non-requis" | "a-confirmer";
export const DISCONNECT_LABELS: Record<DisconnectState, string> = {
  inclus: "Sectionneur fourni et installé",
  existant: "Sectionneur existant",
  "non-requis": "Non requis",
  "a-confirmer": "À confirmer",
};
export type ElectricianState = "requis-inclus" | "requis-non-inclus" | "non-requis" | "a-confirmer";
export const ELECTRICIAN_LABELS: Record<ElectricianState, string> = {
  "requis-inclus": "Maître électricien requis : inclus dans le prix",
  "requis-non-inclus": "Maître électricien requis : non inclus",
  "non-requis": "Maître électricien non requis",
  "a-confirmer": "Besoin d’un maître électricien à confirmer",
};

export interface ElectricalInfo {
  /** Capacité du panneau si connue (« 200 A »). */
  panelCapacity: string;
  circuit: CircuitState | "";
  /** Calibre du disjoncteur (« 2 × 20 A »). */
  breaker: string;
  disconnect: DisconnectState | "";
  /** Distance du panneau à l'unité extérieure (dans l'unité de longueur de la soumission). */
  panelDistance: number | null;
  electrician: ElectricianState | "";
  notes: string;
}

export interface RemovalInfo {
  remove: boolean;
  description: string;
}

export interface Placement {
  lengthUnit: LengthUnit;
  outdoor: OutdoorPlacement;
  indoor: IndoorPlacement[];
  electrical: ElectricalInfo;
  removal: RemovalInfo;
}

export interface ScheduleInfo {
  mode: "date" | "fenetre" | "";
  date: string;
  windowStart: string;
  windowEnd: string;
  /** Précision libre sur la fenêtre (« selon la livraison de l’équipement »). */
  windowText: string;
  /** Durée estimée par le propriétaire (« une journée »). */
  duration: string;
  /** Plage d'arrivée (« entre 7 h 30 et 9 h »). */
  arrival: string;
  /** Ce que le client doit préparer. */
  prep: string[];
  notes: string;
}

/** Jumelage AHRI de la liste officielle LogisVert d'Hydro-Québec. */
export interface PairingInfo {
  ahri: string;
  /** Description de l'unité intérieure telle que publiée par Hydro-Québec. */
  indoorDescription: string;
  logisVertCents: number;
  h5Btu: number | null;
  h17Btu: number | null;
  nominalBtu: number | null;
  coolingBtu: number | null;
  seer2: number | null;
  hspf2: number | null;
  cop5: number | null;
  coldClimate: boolean;
}

export interface CatalogWarranty {
  type: "parts" | "compressor" | "labor" | "replacement";
  years: number;
  requiresRegistration: boolean;
  /** Fiabilité de la donnée dans le catalogue (verified, manufacturer_claim, estimated…). */
  confidence: string;
}

export interface MachineInfo {
  modelSlug: string;
  brandId: string;
  brand: string;
  name: string;
  outdoorModel: string;
  systemType: string;
  systemTypeLabel: string;
  imageUrl: string | null;
  refrigerant: string | null;
  noiseOutdoorDbA: number | null;
  noiseIndoorMinDbA: number | null;
  noiseIndoorMaxDbA: number | null;
  /** Jumelage choisi dans la liste officielle, ou null. */
  pairing: PairingInfo | null;
  /** Jumelage absent de la liste officielle : aucune aide LogisVert. */
  offList: boolean;
  /** Unités intérieures du jumelage hors liste (texte). */
  offListIndoor: string;
  catalogWarranties: CatalogWarranty[];
  /** Le propriétaire a confirmé les garanties du catalogue : elles s'affichent au client. */
  showCatalogWarranties: boolean;
  /** Texte de garantie du fabricant saisi par le propriétaire (prioritaire s'il est rempli). */
  warrantyText: string;
  /** Explication en mots simples de ce que la machine fera pour cette maison. */
  explanation: string;
  /** Date de la liste officielle LogisVert consultée. */
  listDate: string | null;
}

export interface ListItem {
  id: string;
  label: string;
  detail: string;
}

export interface DepositRule {
  kind: "pourcentage" | "montant" | "aucun";
  /** Pourcentage (0 à 100) ou cents. */
  value: number;
}

/** Tout ce que voit le client (aucune note interne ici). */
export interface QuoteContent {
  client: ClientInfo;
  site: SiteInfo;
  machine: MachineInfo | null;
  placement: Placement;
  schedule: ScheduleInfo;
  lines: QuoteLine[];
  discounts: Discount[];
  inclusions: ListItem[];
  exclusions: ListItem[];
  assumptions: ListItem[];
  logisvert: { mode: LogisVertMode };
  deposit: DepositRule;
  validUntil: string;
  /** Mot d'introduction de « Votre projet ». */
  projectSummary: string;
  /** Remarques visibles par le client. */
  notes: string;
}

export interface CompanyIdentity {
  legalName: string;
  tradeName: string;
  neq: string;
  rbq: string;
  address: string;
  city: string;
  postalCode: string;
  phone: string;
  email: string;
  website: string;
  tps: string;
  tvq: string;
  /** Logo : identifiant d'une image du dossier des photos, ou null. */
  logoId: string | null;
}

export interface DocumentTexts {
  paymentTerms: string;
  depositRule: string;
  /** Garantie de main-d'œuvre de l'entreprise. */
  warranty: string;
  /** Mention de la garantie légale (texte validé par l'avocat). */
  legalWarranty: string;
  cancellation: string;
  terms: string;
  weatherClause: string;
  changeOrder: string;
  logisvertCession: string;
  logisvertClient: string;
}

export interface PipedriveStages {
  envoyee: number | null;
  ouverte: number | null;
  acceptee: number | null;
  refusee: number | null;
}

export interface PricePackage {
  id: string;
  label: string;
  description: string;
  /** Type de système du catalogue (wall-single, multi-zone…) ou « tous ». */
  systemType: string;
  capacityMinBtu: number | null;
  capacityMaxBtu: number | null;
  priceCents: number;
  /** Longueur de ligne comprise (dans l'unité par défaut des réglages). */
  includedLineLength: number | null;
  /** Inclusions propres au forfait (vide : celles des réglages). */
  inclusions: string[];
}

export type CatalogRole = "ligne-supplementaire" | "pompe-drain" | "retrait" | "circuit" | "support-mural" | "support-sol" | null;

export interface CatalogItem {
  id: string;
  kind: "extra" | "main-oeuvre";
  name: string;
  description: string;
  unit: LineUnit;
  unitPriceCents: number;
  defaultQuantity: number;
  optional: boolean;
  /** Rôle reconnu par l'outil (ex. ajout automatique proposé pour la ligne supplémentaire). */
  role: CatalogRole;
}

export interface DiscountPreset {
  id: string;
  reason: string;
  kind: DiscountKind;
  value: number;
}

export interface Settings {
  version: 1;
  company: CompanyIdentity;
  texts: DocumentTexts;
  defaults: {
    validityDays: number;
    deposit: DepositRule;
    lengthUnit: LengthUnit;
    includedLineLength: number | null;
  };
  templates: {
    inclusions: string[];
    exclusions: string[];
    assumptions: string[];
    prep: string[];
  };
  packages: PricePackage[];
  extras: CatalogItem[];
  labour: CatalogItem[];
  discounts: DiscountPreset[];
  pipedriveStages: PipedriveStages;
  updatedAt: string | null;
  updatedBy: string | null;
}

/** Document figé à l'envoi : entreprise, textes et taux de ce moment-là. */
export interface FrozenDocument {
  issuedAt: string;
  company: CompanyIdentity;
  texts: DocumentTexts;
  taxes: { tpsPer100k: number; tvqPer100k: number };
  /** Empreinte des photos jointes (SHA-256), pour que l'empreinte du document couvre les images. */
  photos: Record<string, PhotoRef>;
}

export interface PhotoRef {
  sha256: string;
  width: number;
  height: number;
}

export interface PhotoMeta extends PhotoRef {
  id: string;
  quoteId: string | null;
  mime: "image/webp" | "image/jpeg";
  bytes: number;
  createdAt: string;
  createdBy: string;
}

/** Document complet présenté au client (rendu, empreinte, instantané). */
export interface QuoteDocument {
  number: string;
  version: number;
  kind: VersionKind;
  basedOn: number | null;
  issuedAt: string;
  validUntil: string;
  company: CompanyIdentity;
  texts: DocumentTexts;
  taxes: { tpsPer100k: number; tvqPer100k: number };
  links: { logisvert: string; opcGaranties: string; opcAnnulation: string; opcDistance: string };
  photos: Record<string, PhotoRef>;
  content: QuoteContent;
}

export type ChannelStatus = "envoye" | "echec" | "non-configure" | "sans-numero";

export interface SendRecord {
  at: string;
  by: string;
  kind: "envoi" | "relance";
  email: ChannelStatus;
  sms: ChannelStatus | null;
}

export interface LineTotal {
  id: string;
  included: boolean;
  optional: boolean;
  grossCents: number;
  discountCents: number;
  netCents: number;
  discountActive: boolean;
  discountExpired: boolean;
}

export interface DiscountTotal {
  id: string;
  reason: string;
  kind: DiscountKind;
  value: number;
  expiresOn: string | null;
  amountCents: number;
  active: boolean;
  expired: boolean;
}

export interface Totals {
  lines: LineTotal[];
  /** Somme des lignes retenues, avant rabais. */
  grossCents: number;
  lineDiscountsCents: number;
  /** Après les rabais de ligne. */
  subtotalCents: number;
  quoteDiscounts: DiscountTotal[];
  quoteDiscountsCents: number;
  discountsCents: number;
  /** Base taxable : après tous les rabais. */
  taxableCents: number;
  tpsCents: number;
  tvqCents: number;
  totalCents: number;
  logisvertMode: LogisVertMode;
  logisvertCents: number;
  /** Ce que le client paie à l'entreprise. */
  clientPaysCents: number;
  /** Coût net après l'aide, dans les deux modes. */
  netAfterAidCents: number;
  depositCents: number;
  balanceCents: number;
}

export interface AcceptedSnapshot {
  document: QuoteDocument;
  selection: string[];
  totals: Totals;
  acceptedAt: string;
  typedName: string;
  termsAccepted: true;
  ip: string;
  userAgent: string;
}

export interface Acceptance {
  at: string;
  version: number;
  versionId: string;
  quoteNumber: string;
  typedName: string;
  termsAccepted: true;
  selectedOptionIds: string[];
  selectedOptions: Array<{ id: string; label: string; netCents: number }>;
  totalCents: number;
  clientPaysCents: number;
  ip: string;
  userAgent: string;
  /** Empreinte SHA-256 du document tel qu'envoyé (sans le choix du client). */
  contentHash: string;
  /** Empreinte SHA-256 de l'instantané accepté (document, choix, totaux, signature). */
  snapshotHash: string;
  snapshot: AcceptedSnapshot;
}

export type VersionKind = "initiale" | "revision" | "avenant";

export interface QuoteVersion {
  id: string;
  v: number;
  token: string;
  kind: VersionKind;
  basedOn: number | null;
  createdAt: string;
  createdBy: string;
  updatedAt: string;
  status: QuoteStatus;
  content: QuoteContent;
  frozen: FrozenDocument | null;
  contentHash: string | null;
  sentAt: string | null;
  sends: SendRecord[];
  views: { count: number; firstAt: string | null; lastAt: string | null };
  acceptance: Acceptance | null;
  refusal: { at: string; reason: string; ip: string; userAgent: string } | null;
  questions: Array<{ at: string; message: string; ip: string; userAgent: string }>;
  replacedAt: string | null;
  replacedBy: number | null;
}

export interface PipedriveLogEntry {
  at: string;
  event: "envoi" | "ouverture" | "acceptation" | "refus" | "question" | "relance";
  ok: boolean;
  detail: string;
}

export interface QuoteEvent {
  at: string;
  type: string;
  detail: string;
  by?: string;
}

export interface Quote {
  id: string;
  number: string;
  createdAt: string;
  createdBy: string;
  duplicatedFrom: string | null;
  internalNotes: string;
  versions: QuoteVersion[];
  pipedrive: { personId: number | null; dealId: number | null; log: PipedriveLogEntry[] };
  events: QuoteEvent[];
  /** Données de démonstration (développement seulement). */
  seed?: boolean;
}

export interface SoumissionsData {
  version: 1;
  counters: Record<string, number>;
  quotes: Quote[];
  photos: PhotoMeta[];
}
