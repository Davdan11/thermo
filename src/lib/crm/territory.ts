import { REGIONS_ENUM } from "./pipedrive";

/**
 * Maps a Canadian Postal Code to a Pipedrive Region Enum
 * @param postalCode Postal code like "H2X 1Y6" or "J4B"
 * @returns Region string
 */
export function getTerritoryFromPostalCode(postalCode: string): string {
  if (!postalCode) return REGIONS_ENUM["Autre"];

  const cleaned = postalCode.replace(/\s+/g, "").toUpperCase();
  const fsa = cleaned.substring(0, 3); // Forward Sortation Area

  // Montréal (H)
  if (fsa.startsWith("H")) {
    // Exception for Laval which also has some H codes (H7)
    if (fsa.startsWith("H7")) return REGIONS_ENUM["Laval"];
    return REGIONS_ENUM["Montréal"];
  }

  // Rive-Sud / Montérégie (J3, J4, J5)
  if (["J3", "J4", "J5"].some(prefix => fsa.startsWith(prefix))) {
    return REGIONS_ENUM["Rive-Sud"];
  }

  // Rive-Nord / Laurentides (J7, J8)
  if (["J7", "J8"].some(prefix => fsa.startsWith(prefix))) {
    return REGIONS_ENUM["Rive-Nord"];
  }

  // Lanaudière (J6)
  if (fsa.startsWith("J6")) {
    return REGIONS_ENUM["Lanaudière"];
  }

  // Estrie (J1, J2)
  if (["J1", "J2"].some(prefix => fsa.startsWith(prefix))) {
    return REGIONS_ENUM["Estrie"];
  }

  // Québec / Autres (G)
  if (fsa.startsWith("G")) {
    return REGIONS_ENUM["Autre"]; // Could be expanded to Capitale-Nationale
  }

  return REGIONS_ENUM["Autre"];
}
