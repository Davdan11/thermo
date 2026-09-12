export type ClimateZone = {
  region: string;
  designTempC: number;
};

// Simplified mapping of Forward Sortation Areas (FSA) in Quebec
// Design temperatures are approximate for heating load calculations.
const fsaMap: Record<string, ClimateZone> = {
  // ABITIBI-TÉMISCAMINGUE (Very Cold)
  "J9T": { region: "Abitibi-Témiscamingue (Amos)", designTempC: -32 },
  "J9X": { region: "Abitibi-Témiscamingue (Rouyn-Noranda)", designTempC: -32 },
  "J9Y": { region: "Abitibi-Témiscamingue (Rouyn-Noranda)", designTempC: -32 },
  "J9Z": { region: "Abitibi-Témiscamingue (La Sarre)", designTempC: -32 },
  "J9P": { region: "Abitibi-Témiscamingue (Val-d'Or)", designTempC: -32 },

  // SAGUENAY-LAC-SAINT-JEAN (Very Cold)
  "G7B": { region: "Saguenay (La Baie)", designTempC: -30 },
  "G7H": { region: "Saguenay (Chicoutimi)", designTempC: -30 },
  "G7J": { region: "Saguenay (Chicoutimi)", designTempC: -30 },
  "G7S": { region: "Saguenay (Jonquière)", designTempC: -30 },
  "G7X": { region: "Saguenay (Jonquière)", designTempC: -30 },
  "G8B": { region: "Lac-Saint-Jean (Alma)", designTempC: -30 },
  "G8H": { region: "Lac-Saint-Jean (Roberval)", designTempC: -30 },
  "G8K": { region: "Lac-Saint-Jean (Saint-Félicien)", designTempC: -30 },

  // CÔTE-NORD & NORD-DU-QUÉBEC
  "G4R": { region: "Côte-Nord (Sept-Îles)", designTempC: -30 },
  "G4S": { region: "Côte-Nord (Sept-Îles)", designTempC: -30 },
  "G4Z": { region: "Côte-Nord (Baie-Comeau)", designTempC: -30 },
  "G5C": { region: "Côte-Nord (Baie-Comeau)", designTempC: -30 },
  "J0M": { region: "Nord-du-Québec", designTempC: -35 },

  // GASPÉSIE-ÎLES-DE-LA-MADELEINE
  "G4X": { region: "Gaspésie (Gaspé)", designTempC: -25 },
  "G0C": { region: "Gaspésie", designTempC: -25 },

  // BAS-SAINT-LAURENT
  "G5L": { region: "Bas-Saint-Laurent (Rimouski)", designTempC: -26 },
  "G5R": { region: "Bas-Saint-Laurent (Rivière-du-Loup)", designTempC: -26 },

  // QUÉBEC & LÉVIS
  "G1": { region: "Capitale-Nationale (Québec)", designTempC: -25 },
  "G2": { region: "Capitale-Nationale (Québec)", designTempC: -25 },
  "G3": { region: "Capitale-Nationale / Portneuf", designTempC: -26 },
  "G6V": { region: "Chaudière-Appalaches (Lévis)", designTempC: -25 },
  "G6W": { region: "Chaudière-Appalaches (Lévis)", designTempC: -25 },
  "G6X": { region: "Chaudière-Appalaches (Lévis)", designTempC: -25 },
  "G6J": { region: "Chaudière-Appalaches (Lévis)", designTempC: -25 },
  "G6K": { region: "Chaudière-Appalaches (Lévis)", designTempC: -25 },

  // TROIS-RIVIÈRES / MAURICIE
  "G8T": { region: "Mauricie (Trois-Rivières)", designTempC: -25 },
  "G8V": { region: "Mauricie (Trois-Rivières)", designTempC: -25 },
  "G8W": { region: "Mauricie (Trois-Rivières)", designTempC: -25 },
  "G8Y": { region: "Mauricie (Trois-Rivières)", designTempC: -25 },
  "G8Z": { region: "Mauricie (Trois-Rivières)", designTempC: -25 },
  "G9": { region: "Mauricie / Centre-du-Québec", designTempC: -25 },

  // SHERBROOKE / ESTRIE
  "J1": { region: "Estrie (Sherbrooke)", designTempC: -25 },
  "J2": { region: "Estrie / Montérégie", designTempC: -25 },

  // MONTRÉAL & LAVAL (Warmer)
  "H": { region: "Montréal / Laval", designTempC: -23 },

  // LONGUEUIL & RIVE-SUD
  "J4": { region: "Montérégie (Longueuil / Rive-Sud)", designTempC: -23 },

  // RURAL MONTÉRÉGIE & LAURENTIDES / LANAUDIÈRE
  "J0": { region: "Régions rurales (Sud/Centre)", designTempC: -26 },
  "J3": { region: "Montérégie", designTempC: -24 },
  "J5": { region: "Lanaudière / Montérégie", designTempC: -25 },
  "J6": { region: "Lanaudière / Laurentides", designTempC: -26 },
  "J7": { region: "Laurentides (Rive-Nord)", designTempC: -25 },

  // OUTAOUAIS
  "J8": { region: "Outaouais (Gatineau)", designTempC: -25 },
};

/** Région renvoyée pour un code postal québécois absent de la table : valeur générique, pas une mesure locale. */
export const QUEBEC_FALLBACK_REGION = "Québec (Général)";

export function resolvePostalCode(postalCode: string): ClimateZone | null {
  if (!postalCode) return null;
  // Clean up postal code: uppercase and remove spaces
  const pc = postalCode.toUpperCase().replace(/\s+/g, "");
  
  if (pc.length < 3) return null;
  
  const fsa = pc.substring(0, 3);
  
  // Exact 3-letter match
  if (fsaMap[fsa]) return fsaMap[fsa];
  
  // 2-letter match (e.g. J9, G1, J4)
  const fsa2 = pc.substring(0, 2);
  if (fsaMap[fsa2]) return fsaMap[fsa2];
  
  // 1-letter match (e.g. H for Montreal)
  const fsa1 = pc.substring(0, 1);
  if (fsaMap[fsa1]) return fsaMap[fsa1];

  // Default fallback for any valid Quebec postal code starting with G, H, or J
  if (fsa1 === "G" || fsa1 === "H" || fsa1 === "J") {
    return { region: QUEBEC_FALLBACK_REGION, designTempC: -25 };
  }

  // Not a Quebec postal code or invalid
  return null;
}
