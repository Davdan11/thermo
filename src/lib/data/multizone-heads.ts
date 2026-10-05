import rawHeads from "./multizone-heads.json";

/* ==================================================================
   Nombre de têtes (unités intérieures) qu'une unité extérieure multizone
   peut alimenter, relevé dans les documents des fabricants : Hydro-Québec
   ne le publie pas. Règles de source : scripts/fiches/REGLES.md ; le test
   src/lib/data/__tests__/multizone-heads.test.ts refuse toute entrée hors
   de ces règles. Inconnu = null, jamais deviné d'après le numéro (« 2Z »,
   « 3C » ne sont que des indices).
   ================================================================== */

export interface MultizoneHeadsEntry {
  brand: string;
  outdoorModel: string;
  maxIndoorUnits: number;
  minIndoorUnits?: number;
  sourceFile: string;
  page?: number;
  quote: string;
  confidence: "modele" | "serie";
  sourceType: "officiel" | "secondaire";
  note?: string;
}

export const MULTIZONE_HEADS = rawHeads as MultizoneHeadsEntry[];

const normModel = (s: string) => s.split("+")[0].toUpperCase().replace(/[^A-Z0-9]/g, "");
const normBrand = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]/g, "");

const BY_BRAND = new Map(MULTIZONE_HEADS.map((e) => [`${normBrand(e.brand)}|${normModel(e.outdoorModel)}`, e]));
/** Même unité vendue sous plusieurs marques : la limite est technique, on garde le plus petit maximum publié. */
const BY_MODEL = new Map<string, MultizoneHeadsEntry>();
for (const e of MULTIZONE_HEADS) {
  const k = normModel(e.outdoorModel);
  const prev = BY_MODEL.get(k);
  if (!prev || e.maxIndoorUnits < prev.maxIndoorUnits) BY_MODEL.set(k, e);
}

/** Têtes publiées par le fabricant pour cette unité extérieure (marque de la fiche d'abord), ou null si inconnu. */
export function multizoneHeads(brand: string, modelNumber: string): MultizoneHeadsEntry | null {
  return BY_BRAND.get(`${normBrand(brand)}|${normModel(modelNumber)}`) ?? BY_MODEL.get(normModel(modelNumber)) ?? null;
}
