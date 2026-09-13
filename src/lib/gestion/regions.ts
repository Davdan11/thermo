/* ==================================================================
   Les 17 régions administratives du Québec (liste officielle, codes
   du ministère). Les installateurs cochent des régions supplémentaires ;
   chaque job reçoit une région devinée puis corrigeable.
   ================================================================== */

export const QUEBEC_REGIONS = [
  { code: "01", name: "Bas-Saint-Laurent" },
  { code: "02", name: "Saguenay–Lac-Saint-Jean" },
  { code: "03", name: "Capitale-Nationale" },
  { code: "04", name: "Mauricie" },
  { code: "05", name: "Estrie" },
  { code: "06", name: "Montréal" },
  { code: "07", name: "Outaouais" },
  { code: "08", name: "Abitibi-Témiscamingue" },
  { code: "09", name: "Côte-Nord" },
  { code: "10", name: "Nord-du-Québec" },
  { code: "11", name: "Gaspésie–Îles-de-la-Madeleine" },
  { code: "12", name: "Chaudière-Appalaches" },
  { code: "13", name: "Laval" },
  { code: "14", name: "Lanaudière" },
  { code: "15", name: "Laurentides" },
  { code: "16", name: "Montérégie" },
  { code: "17", name: "Centre-du-Québec" },
] as const;

export type RegionCode = (typeof QUEBEC_REGIONS)[number]["code"];

const BY_CODE = new Map<string, string>(QUEBEC_REGIONS.map((r) => [r.code, r.name]));

export function isRegionCode(value: unknown): value is RegionCode {
  return typeof value === "string" && BY_CODE.has(value);
}

export function regionName(code: string | null | undefined): string {
  return (code && BY_CODE.get(code)) || "Région inconnue";
}

/** Minuscules sans accents ni ponctuation : « Saguenay–Lac-Saint-Jean » → « saguenay lac saint jean ». */
export function foldText(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

/* Autres appellations courantes, pour lire le texte libre des candidatures et les régions des villes du site. */
const ALIASES: Array<[string, RegionCode]> = [
  ["bas st laurent", "01"],
  ["saguenay", "02"],
  ["lac st jean", "02"],
  ["lac saint jean", "02"],
  ["quebec city", "03"],
  ["ville de quebec", "03"],
  ["charlevoix", "03"],
  ["portneuf", "03"],
  ["trois rivieres", "04"],
  ["cantons de l est", "05"],
  ["eastern townships", "05"],
  ["sherbrooke", "05"],
  ["gatineau", "07"],
  ["abitibi", "08"],
  ["temiscamingue", "08"],
  ["gaspesie", "11"],
  ["iles de la madeleine", "11"],
  ["beauce", "12"],
  ["levis", "12"],
  ["rive sud", "16"],
  ["south shore", "16"],
  ["rive nord", "15"],
  ["north shore", "15"],
  ["centre du quebec", "17"],
  ["bois francs", "17"],
];

/**
 * Région administrative d'un libellé : nom officiel (avec ou sans accents), précisions entre
 * parenthèses ignorées (« Capitale-Nationale (Charlevoix) »), ou appellation courante.
 */
export function regionFromLabel(label: string): RegionCode | null {
  const folded = foldText(label.replace(/\(.*?\)/g, " "));
  if (!folded) return null;
  for (const r of QUEBEC_REGIONS) if (foldText(r.name) === folded) return r.code;
  for (const r of QUEBEC_REGIONS) if (folded.includes(foldText(r.name))) return r.code;
  for (const [alias, code] of ALIASES) if (folded.includes(alias)) return code;
  return null;
}
