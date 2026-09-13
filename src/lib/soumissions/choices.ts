/* ==================================================================
   Choix en un clic du créateur de soumissions (pur, navigateur et
   serveur).

   Chaque champ répétitif propose des pastilles tirées d'une liste
   modifiable dans les réglages (ajouter, retirer, réordonner), plus
   « Autre… » pour écrire. Ce sont de simples choix : aucune valeur
   n'est imposée, rien n'est coché d'office.

   Les champs qui étaient des listes fermées (support, type d'unité,
   parcours, finition, matériau, drain, circuit, sectionneur, type de
   propriété) acceptent maintenant du texte. Les anciennes clés
   (« support-mural », « pompe »…) restent valides : elles s'affichent
   avec leur libellé d'origine (LEGACY_LABELS), et les fonctions de
   sens (mountingKind, isPumpDrain…) reconnaissent les deux formes.
   ================================================================== */

import {
  CIRCUIT_LABELS,
  DISCONNECT_LABELS,
  DRAIN_LABELS,
  FINISH_LABELS,
  INDOOR_LABELS,
  MOUNTING_LABELS,
  PROPERTY_LABELS,
  ROUTE_LABELS,
  WALL_LABELS,
  type IndoorType,
  type Mounting,
} from "./types";

export const CHOICE_KEYS = [
  "propertyType",
  "floors",
  "access",
  "outdoorLocation",
  "mounting",
  "clearance",
  "snow",
  "indoorType",
  "room",
  "wall",
  "height",
  "lineLength",
  "route",
  "finish",
  "penetrations",
  "wallMaterial",
  "drain",
  "panelCapacity",
  "circuit",
  "breaker",
  "disconnect",
  "panelDistance",
  "removal",
] as const;

export type ChoiceKey = (typeof CHOICE_KEYS)[number];
export type ChoiceLists = Record<ChoiceKey, string[]>;

export interface ChoiceMeta {
  key: ChoiceKey;
  label: string;
  group: string;
  /** Liste de nombres (longueurs, percements, niveaux) : dans l'unité de la soumission. */
  numeric?: boolean;
}

export const CHOICE_META: ChoiceMeta[] = [
  { key: "propertyType", label: "Type de propriété", group: "Chantier" },
  { key: "floors", label: "Niveaux hors sol", group: "Chantier", numeric: true },
  { key: "access", label: "Accès et stationnement", group: "Chantier" },
  { key: "outdoorLocation", label: "Emplacement de l’unité extérieure", group: "Unité extérieure" },
  { key: "mounting", label: "Support", group: "Unité extérieure" },
  { key: "clearance", label: "Dégagement", group: "Unité extérieure" },
  { key: "snow", label: "Neige et glace", group: "Unité extérieure" },
  { key: "indoorType", label: "Type d’unité intérieure", group: "Unité intérieure" },
  { key: "room", label: "Pièce", group: "Unité intérieure" },
  { key: "wall", label: "Mur", group: "Unité intérieure" },
  { key: "height", label: "Hauteur", group: "Unité intérieure" },
  { key: "lineLength", label: "Longueurs de ligne (longueur et longueur incluse)", group: "Ligne de réfrigérant", numeric: true },
  { key: "route", label: "Parcours", group: "Ligne de réfrigérant" },
  { key: "finish", label: "Finition", group: "Ligne de réfrigérant" },
  { key: "penetrations", label: "Percements", group: "Ligne de réfrigérant", numeric: true },
  { key: "wallMaterial", label: "Matériau du mur", group: "Ligne de réfrigérant" },
  { key: "drain", label: "Drain", group: "Ligne de réfrigérant" },
  { key: "panelCapacity", label: "Capacité du panneau", group: "Électricité" },
  { key: "circuit", label: "Circuit dédié", group: "Électricité" },
  { key: "breaker", label: "Disjoncteur", group: "Électricité" },
  { key: "disconnect", label: "Sectionneur", group: "Électricité" },
  { key: "panelDistance", label: "Distance panneau → unité extérieure", group: "Électricité", numeric: true },
  { key: "removal", label: "Retrait de l’ancien système", group: "Ancien système" },
];

/** Valeurs de départ : de simples choix, dans le vocabulaire des installateurs au Québec. Le propriétaire les modifie. */
export const DEFAULT_CHOICES: ChoiceLists = {
  propertyType: ["Maison unifamiliale", "Maison jumelée", "Maison en rangée", "Duplex", "Triplex ou plus", "Condo", "Chalet"],
  floors: ["1", "2", "3"],
  access: ["Stationnement dans l’entrée", "Stationnement dans la rue", "Accès par la ruelle", "Accès par la cour arrière", "Escalier extérieur à monter"],
  outdoorLocation: ["Cour arrière", "Côté de la maison", "Cour avant", "Sur le balcon", "Sur le toit plat"],
  mounting: ["Au sol, sur base", "Au sol, sur support surélevé", "Mural, sur support", "Toit plat"],
  clearance: ["Dégagements du fabricant respectés", "30 cm du mur, 60 cm devant", "Loin des fenêtres de chambre"],
  snow: ["Surélevé au-dessus de la neige", "Protégé de la chute de glace", "Hors de la chute de neige du toit", "Sous un abri ou un auvent"],
  indoorType: ["Murale", "Cassette au plafond", "Console au plancher", "Gainable (conduits)", "Plafonnier"],
  room: ["Salon", "Cuisine", "Chambre principale", "Chambre", "Sous-sol", "Bureau"],
  wall: ["Mur extérieur", "Mur intérieur", "Au-dessus de la fenêtre", "Au-dessus de la porte"],
  height: ["Près du plafond", "Environ 2,1 m (7 pi) du plancher", "Au bas du mur"],
  lineLength: ["15", "25", "35", "50"],
  route: ["À l’extérieur, le long du mur", "À l’intérieur", "Dans l’entretoit", "Par le sous-sol", "Intérieur et extérieur"],
  finish: ["Cache-ligne", "Goulotte", "Dans le mur", "Isolant apparent"],
  penetrations: ["1", "2", "3"],
  wallMaterial: ["Brique", "Vinyle", "Bois", "Béton", "Pierre", "Fibrociment"],
  drain: ["Gravité vers l’extérieur", "Pompe de condensat"],
  panelCapacity: ["100 A", "125 A", "150 A", "200 A", "Inconnue"],
  circuit: ["Circuit dédié existant", "Circuit dédié à installer", "À vérifier"],
  breaker: ["2 × 15 A", "2 × 20 A", "2 × 25 A", "2 × 30 A"],
  disconnect: ["Sectionneur fourni et installé", "Sectionneur existant", "Non requis", "À confirmer"],
  panelDistance: ["10", "25", "50", "75"],
  removal: ["Climatiseur de fenêtre", "Climatiseur mural", "Ancienne thermopompe murale", "Thermopompe centrale existante"],
};

export const CHOICE_LIMITS = { items: 30, length: 80 } as const;

const NUM_RE = /^\d{1,4}(?:[.,]\d{1,2})?$/;
const META = new Map(CHOICE_META.map((m) => [m.key, m]));
export const isNumericChoice = (key: ChoiceKey) => Boolean(META.get(key)?.numeric);

/** Replie accents et casse (comparaison seulement). */
export const fold = (s: string) => s.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase().replace(/\s+/g, " ").trim();

/** Liste propre : textes coupés, vides et doublons retirés, bornée ; pour une liste de nombres, seulement des nombres. */
export function cleanChoiceList(key: ChoiceKey, raw: unknown): string[] {
  if (!Array.isArray(raw)) return [];
  const seen = new Set<string>();
  const out: string[] = [];
  for (const v of raw) {
    if (typeof v !== "string") continue;
    const s = v.replace(/\s+/g, " ").trim().slice(0, CHOICE_LIMITS.length);
    if (!s || (isNumericChoice(key) && !NUM_RE.test(s))) continue;
    const k = fold(s);
    if (seen.has(k)) continue;
    seen.add(k);
    out.push(s);
    if (out.length >= CHOICE_LIMITS.items) break;
  }
  return out;
}

/** Listes lues sur le disque : une liste absente reprend les valeurs de départ ; une liste vide reste vide (le propriétaire l'a voulue ainsi). */
export function normalizeChoices(raw: unknown): ChoiceLists {
  const src = raw && typeof raw === "object" ? (raw as Record<string, unknown>) : {};
  return Object.fromEntries(CHOICE_KEYS.map((k) => [k, Array.isArray(src[k]) ? cleanChoiceList(k, src[k]) : [...DEFAULT_CHOICES[k]]])) as ChoiceLists;
}

/** Anciennes clés des champs devenus des choix libres, avec leur libellé d'origine. */
export const LEGACY_LABELS: Partial<Record<ChoiceKey, Record<string, string>>> = {
  propertyType: PROPERTY_LABELS,
  mounting: MOUNTING_LABELS,
  indoorType: INDOOR_LABELS,
  route: ROUTE_LABELS,
  finish: FINISH_LABELS,
  wallMaterial: WALL_LABELS,
  drain: DRAIN_LABELS,
  circuit: CIRCUIT_LABELS,
  disconnect: DISCONNECT_LABELS,
};

/** Texte montré (document, courriels) : libellé d'origine pour une ancienne clé, sinon le texte choisi ou écrit. */
export function choiceText(key: ChoiceKey, value: string | null | undefined): string {
  const v = (value ?? "").trim();
  if (!v) return "";
  return LEGACY_LABELS[key]?.[v] ?? v;
}

export interface ChoiceState {
  /** Pastille de la liste qui correspond à la valeur, ou null. */
  picked: string | null;
  /** La valeur n'est dans aucune pastille : « Autre » est actif, avec ce texte. */
  other: boolean;
  text: string;
}

/** État d'un champ « choix » pour sa valeur actuelle. */
export function choiceState(value: string | null | undefined, options: string[], legacy?: Record<string, string>): ChoiceState {
  const v = (value ?? "").trim();
  if (!v) return { picked: null, other: false, text: "" };
  const shown = legacy?.[v] ?? v;
  const match = options.find((o) => fold(o) === fold(shown)) ?? null;
  return match ? { picked: match, other: false, text: shown } : { picked: null, other: true, text: shown };
}

/** « 15 », « 7,5 » → nombre ; autre chose → null. */
export function parseChoiceNumber(s: string): number | null {
  const t = s.trim().replace(",", ".");
  if (!NUM_RE.test(s.trim())) return null;
  const n = Number(t);
  return Number.isFinite(n) ? n : null;
}

export function numChoiceState(value: number | null, options: number[]): { picked: number | null; other: boolean } {
  if (value === null) return { picked: null, other: false };
  return options.includes(value) ? { picked: value, other: false } : { picked: null, other: true };
}

/* ---------------- Sens des choix (anciennes clés ou texte) ---------------- */

/** Type de support, pour le schéma et la ligne de prix du support. */
export function mountingKind(v: string | null | undefined): Mounting | "" {
  const s = (v ?? "").trim();
  if (!s) return "";
  if (s in MOUNTING_LABELS) return s as Mounting;
  const f = fold(s);
  if (/toit/.test(f)) return "toit";
  if (/\bmur/.test(f)) return "support-mural";
  if (/(surelev|pattes|chevalet|support)/.test(f) && /(sol|base)/.test(f)) return "support-sol";
  if (/(sol|base|socle|dalle)/.test(f)) return "socle-sol";
  return "autre";
}

/** Forme de l'unité intérieure (schéma). */
export function indoorKind(v: string | null | undefined): IndoorType | "" {
  const s = (v ?? "").trim();
  if (!s) return "";
  if (s in INDOOR_LABELS) return s as IndoorType;
  const f = fold(s);
  if (/cassette/.test(f)) return "cassette";
  if (/(console|plancher)/.test(f)) return "console";
  if (/(gainable|conduit)/.test(f)) return "gainable";
  if (/plafonnier/.test(f)) return "plafonnier";
  if (/(central|fournaise|serpentin)/.test(f)) return "centrale";
  if (/mural/.test(f)) return "murale";
  return "autre";
}

export const isPumpDrain = (v: string | null | undefined): boolean => v === "pompe" || /pompe/.test(fold(v ?? ""));
export const circuitToInstall = (v: string | null | undefined): boolean => v === "a-installer" || /\ba installer\b|a ajouter|nouveau/.test(fold(v ?? ""));
export const circuitUnknown = (v: string | null | undefined): boolean => v === "inconnu" || /(verifier|inconnu|confirmer)/.test(fold(v ?? ""));
export const routeOutside = (v: string | null | undefined): boolean => v === "exterieur" || v === "mixte" || /exterieur/.test(fold(v ?? ""));
