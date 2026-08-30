// Basic FSA (Forward Sortation Area) mapping for major Quebec regions
// In a real application, this would be an API call or a larger database.

export function getCityFromPostalCode(postalCode: string): string | null {
  if (!postalCode) return null;
  const fsa = postalCode.replace(/\s/g, "").toUpperCase().substring(0, 3);
  
  if (fsa.startsWith("H")) return "Montréal";
  
  // Laval
  if (fsa.startsWith("H7")) return "Laval";

  // Quebec City
  if (fsa.startsWith("G1") || fsa.startsWith("G2") || fsa.startsWith("G3")) {
    if (fsa === "G3A") return "Saint-Augustin-de-Desmaures";
    return "Québec";
  }

  // South Shore (Montérégie)
  if (fsa.startsWith("J4") || fsa.startsWith("J3") || fsa.startsWith("J5")) {
    if (fsa.startsWith("J4")) return "Longueuil";
    if (fsa.startsWith("J3Y") || fsa.startsWith("J3Z") || fsa.startsWith("J4B")) return "Brossard / Saint-Hubert";
    return "Montérégie (Rive-Sud)";
  }

  // North Shore
  if (fsa.startsWith("J7") || fsa.startsWith("J6")) {
    if (fsa.startsWith("J7V") || fsa.startsWith("J7T")) return "Vaudreuil-Dorion / Pincourt";
    if (fsa.startsWith("J7C") || fsa.startsWith("J7E")) return "Sainte-Thérèse / Blainville";
    return "Couronne Nord / Laurentides";
  }

  // Sherbrooke / Estrie
  if (fsa.startsWith("J1")) return "Sherbrooke";

  // Trois-Rivières
  if (fsa.startsWith("G8") || fsa.startsWith("G9")) {
    if (fsa.startsWith("G8T") || fsa.startsWith("G8V") || fsa.startsWith("G8W") || fsa.startsWith("G8Y") || fsa.startsWith("G8Z") || fsa.startsWith("G9A") || fsa.startsWith("G9B") || fsa.startsWith("G9C")) {
      return "Trois-Rivières";
    }
  }

  // Saguenay
  if (fsa.startsWith("G7")) return "Saguenay";

  // Gatineau
  if (fsa.startsWith("J8") || fsa.startsWith("J9")) return "Gatineau";
  
  // Fallback for general Quebec postal codes
  if (fsa.startsWith("G") || fsa.startsWith("H") || fsa.startsWith("J")) {
    return "Québec (Province)";
  }

  return null;
}
