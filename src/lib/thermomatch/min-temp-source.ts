/* ==================================================================
   Température minimale de chauffage — vocabulaire commun (sans données).

   Types, mentions et mise en forme partagés par le serveur (résolveur,
   courriels) et les composants client (comparateur, cartes ThermoMatch).
   Ce module n'importe rien : l'importer côté client n'embarque pas la
   table des relevés (src/lib/data/min-heating-temps.json).
   ================================================================== */

/**
 * Nature de la source :
 * - « officiel » : document ou page du fabricant (ou de son distributeur officiel), ou fiche du catalogue ;
 * - « secondaire » : distributeur ou détaillant qui reproduit la fiche du fabricant pour ce numéro exact.
 */
export type MinTempSourceType = "officiel" | "secondaire";

/** Température minimale de chauffage retenue pour une machine, avec sa provenance. */
export interface ResolvedMinHeatingTemp {
  /** Température extérieure minimale de chauffage (°C), telle qu'imprimée (°F convertis, arrondis à l'entier). */
  valueC: number;
  sourceType: MinTempSourceType;
  /** « catalogue » : configuration du registre ; « document » : ligne de min-heating-temps.json. */
  origin: "catalogue" | "document";
  /** PDF du dépôt (« public/… ») ou adresse https ; null pour le catalogue. */
  sourceFile: string | null;
  page: number | null;
  /** Citation exacte du document ; null pour le catalogue. */
  quote: string | null;
  /** « modele » : le document nomme ce numéro ; « serie » : il ne vise que la série ; null si non précisé. */
  confidence: "modele" | "serie" | null;
}

/** Petite mention sous « Chauffe jusqu'à −XX °C ». */
export const MIN_TEMP_MENTION: Record<MinTempSourceType, string> = {
  officiel: "Température minimale publiée par le fabricant",
  secondaire: "Selon la fiche technique du fabricant, reproduite par un distributeur",
};

/** Mention de la source ; une source absente vaut « officiel » (même règle que la table). */
export function minTempMention(sourceType: MinTempSourceType | null | undefined): string {
  return MIN_TEMP_MENTION[sourceType ?? "officiel"];
}

/** « −30 °C » : vrai signe moins, espace insécable, une décimale seulement si la valeur en a une. */
export function formatMinTemp(t: number): string {
  const n = Math.abs(t).toLocaleString("fr-CA", { maximumFractionDigits: 1 });
  return `${t < 0 ? "−" : ""}${n} °C`;
}

/** Adresse publique de la source : PDF du dépôt servi depuis /public, adresse https telle quelle, sinon null. */
export function minTempSourceHref(sourceFile: string | null | undefined): string | null {
  if (!sourceFile) return null;
  if (/^https:\/\//.test(sourceFile)) return sourceFile;
  return sourceFile.startsWith("public/") ? `/${sourceFile.slice("public/".length)}` : null;
}
