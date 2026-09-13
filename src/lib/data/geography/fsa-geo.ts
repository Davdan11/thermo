/* ==================================================================
   Codes postaux canadiens : table interne des RTA (FSA) avec
   coordonnées et climat, et repli sur Nominatim (OpenStreetMap).

   Partagé par POST /api/postal/resolve (climat, ThermoMatch) et par
   l'outil de gestion privé (distances installateur ↔ job). Les
   coordonnées de la table sont approximatives (centre de la zone) :
   assez pour un rayon en kilomètres, pas pour un itinéraire.
   ================================================================== */

export type ClimateZoneCode = "4A" | "5A" | "6A" | "7" | "8" | "unknown";

export interface FsaClimate {
  municipality: string;
  province: string;
  lat: number;
  lon: number;
  designTempC: number;
  hdd18: number;
  climateZone: ClimateZoneCode;
}

export const FSA_TABLE: Record<string, FsaClimate> = {
  "H2X": { municipality: "Montréal (Centre-Ville)", province: "QC", lat: 45.508, lon: -73.554, designTempC: -23, hdd18: 4279, climateZone: "6A" },
  "H7N": { municipality: "Laval (Chomedey)", province: "QC", lat: 45.566, lon: -73.748, designTempC: -24, hdd18: 4400, climateZone: "6A" },
  "H7A": { municipality: "Laval (Vimont)", province: "QC", lat: 45.616, lon: -73.677, designTempC: -24, hdd18: 4400, climateZone: "6A" },
  "H1A": { municipality: "Montréal (Pointe-aux-Trembles)", province: "QC", lat: 45.652, lon: -73.500, designTempC: -23, hdd18: 4279, climateZone: "6A" },
  "H3": { municipality: "Montréal (Plateau)", province: "QC", lat: 45.519, lon: -73.590, designTempC: -23, hdd18: 4279, climateZone: "6A" },
  "H4": { municipality: "Montréal (Sud-Ouest)", province: "QC", lat: 45.471, lon: -73.604, designTempC: -23, hdd18: 4279, climateZone: "6A" },
  "H": { municipality: "Région de Montréal", province: "QC", lat: 45.508, lon: -73.554, designTempC: -23, hdd18: 4279, climateZone: "6A" },
  "J4": { municipality: "Longueuil", province: "QC", lat: 45.527, lon: -73.518, designTempC: -23, hdd18: 4350, climateZone: "6A" },
  "J4B": { municipality: "Brossard", province: "QC", lat: 45.446, lon: -73.456, designTempC: -23, hdd18: 4350, climateZone: "6A" },
  "J4Y": { municipality: "Saint-Hubert", province: "QC", lat: 45.500, lon: -73.414, designTempC: -23, hdd18: 4350, climateZone: "6A" },
  "J3": { municipality: "Montérégie", province: "QC", lat: 45.420, lon: -73.200, designTempC: -24, hdd18: 4400, climateZone: "6A" },
  "J5": { municipality: "Lanaudière / Montérégie", province: "QC", lat: 45.733, lon: -73.395, designTempC: -25, hdd18: 4600, climateZone: "6A" },
  "J0": { municipality: "Régions rurales (Sud)", province: "QC", lat: 45.600, lon: -73.000, designTempC: -26, hdd18: 4700, climateZone: "6A" },
  "J6": { municipality: "Laurentides", province: "QC", lat: 45.921, lon: -74.004, designTempC: -26, hdd18: 4900, climateZone: "6A" },
  "J7": { municipality: "Laurentides", province: "QC", lat: 45.931, lon: -74.200, designTempC: -26, hdd18: 4900, climateZone: "6A" },
  "J7V": { municipality: "Vaudreuil-Dorion", province: "QC", lat: 45.399, lon: -74.034, designTempC: -24, hdd18: 4400, climateZone: "6A" },
  "J8": { municipality: "Gatineau", province: "QC", lat: 45.478, lon: -75.700, designTempC: -25, hdd18: 4630, climateZone: "6A" },
  "G1": { municipality: "Québec (Haute-Ville)", province: "QC", lat: 46.783, lon: -71.278, designTempC: -25, hdd18: 5061, climateZone: "6A" },
  "G2": { municipality: "Québec (Charlesbourg)", province: "QC", lat: 46.875, lon: -71.268, designTempC: -25, hdd18: 5061, climateZone: "6A" },
  "G3": { municipality: "Portneuf / Capitale-Nationale", province: "QC", lat: 46.900, lon: -71.600, designTempC: -26, hdd18: 5200, climateZone: "6A" },
  "G6V": { municipality: "Lévis", province: "QC", lat: 46.693, lon: -71.204, designTempC: -25, hdd18: 5000, climateZone: "6A" },
  "G6W": { municipality: "Lévis (Saint-Romuald)", province: "QC", lat: 46.758, lon: -71.197, designTempC: -25, hdd18: 5000, climateZone: "6A" },
  "J1": { municipality: "Sherbrooke", province: "QC", lat: 45.404, lon: -71.888, designTempC: -25, hdd18: 4700, climateZone: "6A" },
  "J2": { municipality: "Estrie / Montérégie", province: "QC", lat: 45.350, lon: -72.500, designTempC: -25, hdd18: 4700, climateZone: "6A" },
  "G8T": { municipality: "Trois-Rivières", province: "QC", lat: 46.350, lon: -72.550, designTempC: -25, hdd18: 4900, climateZone: "6A" },
  "G8V": { municipality: "Trois-Rivières", province: "QC", lat: 46.350, lon: -72.550, designTempC: -25, hdd18: 4900, climateZone: "6A" },
  "G9A": { municipality: "Shawinigan", province: "QC", lat: 46.557, lon: -72.745, designTempC: -27, hdd18: 5200, climateZone: "6A" },
  "G9": { municipality: "Mauricie", province: "QC", lat: 46.400, lon: -72.700, designTempC: -26, hdd18: 5000, climateZone: "6A" },
  "G7H": { municipality: "Saguenay (Chicoutimi)", province: "QC", lat: 48.426, lon: -71.074, designTempC: -30, hdd18: 6180, climateZone: "7" },
  "G7J": { municipality: "Saguenay (Chicoutimi-Nord)", province: "QC", lat: 48.430, lon: -71.120, designTempC: -30, hdd18: 6180, climateZone: "7" },
  "G7S": { municipality: "Saguenay (Jonquière)", province: "QC", lat: 48.421, lon: -71.237, designTempC: -30, hdd18: 6180, climateZone: "7" },
  "G7X": { municipality: "Saguenay (Jonquière)", province: "QC", lat: 48.410, lon: -71.210, designTempC: -30, hdd18: 6180, climateZone: "7" },
  "G7B": { municipality: "Saguenay (La Baie)", province: "QC", lat: 48.338, lon: -70.882, designTempC: -30, hdd18: 6200, climateZone: "7" },
  "G8B": { municipality: "Lac-Saint-Jean (Alma)", province: "QC", lat: 48.546, lon: -71.651, designTempC: -30, hdd18: 6500, climateZone: "7" },
  "G8H": { municipality: "Roberval", province: "QC", lat: 48.521, lon: -72.233, designTempC: -31, hdd18: 6700, climateZone: "7" },
  "G8K": { municipality: "Saint-Félicien", province: "QC", lat: 48.648, lon: -72.462, designTempC: -32, hdd18: 6900, climateZone: "7" },
  "J9P": { municipality: "Val-d'Or", province: "QC", lat: 48.097, lon: -77.795, designTempC: -33, hdd18: 7380, climateZone: "7" },
  "J9T": { municipality: "Amos", province: "QC", lat: 48.564, lon: -78.108, designTempC: -33, hdd18: 7500, climateZone: "7" },
  "J9X": { municipality: "Rouyn-Noranda", province: "QC", lat: 48.236, lon: -79.020, designTempC: -33, hdd18: 7450, climateZone: "7" },
  "J9Z": { municipality: "La Sarre", province: "QC", lat: 48.798, lon: -79.196, designTempC: -34, hdd18: 7600, climateZone: "7" },
  "G4R": { municipality: "Sept-Îles", province: "QC", lat: 50.204, lon: -66.382, designTempC: -29, hdd18: 6500, climateZone: "7" },
  "G4Z": { municipality: "Baie-Comeau", province: "QC", lat: 49.222, lon: -68.160, designTempC: -28, hdd18: 6200, climateZone: "7" },
  "G5C": { municipality: "Baie-Comeau (Hauterive)", province: "QC", lat: 49.222, lon: -68.160, designTempC: -28, hdd18: 6200, climateZone: "7" },
  "G4X": { municipality: "Gaspé", province: "QC", lat: 48.835, lon: -64.487, designTempC: -24, hdd18: 5800, climateZone: "7" },
  "G5L": { municipality: "Rimouski", province: "QC", lat: 48.450, lon: -68.532, designTempC: -27, hdd18: 5900, climateZone: "7" },
  "G5R": { municipality: "Rivière-du-Loup", province: "QC", lat: 47.831, lon: -69.542, designTempC: -27, hdd18: 5600, climateZone: "7" },
  "J0M": { municipality: "Chibougamau", province: "QC", lat: 49.917, lon: -74.367, designTempC: -35, hdd18: 8500, climateZone: "8" },
  "M": { municipality: "Toronto", province: "ON", lat: 43.651, lon: -79.347, designTempC: -17, hdd18: 3520, climateZone: "5A" },
  "K1": { municipality: "Ottawa", province: "ON", lat: 45.422, lon: -75.684, designTempC: -24, hdd18: 4440, climateZone: "6A" },
  "L4": { municipality: "Mississauga", province: "ON", lat: 43.589, lon: -79.644, designTempC: -18, hdd18: 3600, climateZone: "5A" },
  "N": { municipality: "Ontario (Sud-Ouest)", province: "ON", lat: 43.000, lon: -81.000, designTempC: -16, hdd18: 3400, climateZone: "5A" },
  "P": { municipality: "Ontario (Nord)", province: "ON", lat: 46.500, lon: -80.900, designTempC: -29, hdd18: 6100, climateZone: "7" },
  "V": { municipality: "Colombie-Britannique", province: "BC", lat: 49.250, lon: -123.120, designTempC: -7, hdd18: 3000, climateZone: "4A" },
  "T": { municipality: "Alberta", province: "AB", lat: 51.050, lon: -114.060, designTempC: -29, hdd18: 5000, climateZone: "7" },
};

/** Code postal sans espace, en majuscules. */
export function cleanPostalCode(postalCode: string): string {
  return postalCode.replace(/\s/g, "").toUpperCase();
}

/** Entrée de la table pour un code postal : RTA complète (3 caractères), puis 2, puis 1. */
export function lookupFsa(postalCode: string): FsaClimate | null {
  const pc = cleanPostalCode(postalCode);
  return FSA_TABLE[pc.slice(0, 3)] ?? FSA_TABLE[pc.slice(0, 2)] ?? FSA_TABLE[pc.slice(0, 1)] ?? null;
}

/** Longueur du préfixe qui a répondu dans la table (3 = RTA exacte), 0 si rien. */
export function fsaMatchLength(postalCode: string): 0 | 1 | 2 | 3 {
  const pc = cleanPostalCode(postalCode);
  if (FSA_TABLE[pc.slice(0, 3)]) return 3;
  if (FSA_TABLE[pc.slice(0, 2)]) return 2;
  if (FSA_TABLE[pc.slice(0, 1)]) return 1;
  return 0;
}

export function climateZoneFromDesignTemp(designTempC: number): ClimateZoneCode {
  if (designTempC >= -15) return "4A";
  if (designTempC >= -20) return "5A";
  if (designTempC >= -28) return "6A";
  if (designTempC >= -36) return "7";
  return "8";
}

export interface GeocodedPostal {
  municipality: string;
  province: string;
  lat: number;
  lon: number;
}

/** Géocodage en ligne (Nominatim, OpenStreetMap). null si injoignable ou inconnu ; délai de 5 s. */
export async function resolveViaNominatim(postalCode: string): Promise<GeocodedPostal | null> {
  const cleaned = cleanPostalCode(postalCode);
  const formatted = `${cleaned.slice(0, 3)} ${cleaned.slice(3)}`;
  try {
    const url = `https://nominatim.openstreetmap.org/search?postalcode=${encodeURIComponent(formatted)}&country=CA&format=json&limit=1&addressdetails=1`;
    const res = await fetch(url, {
      headers: { "User-Agent": "ThermopompesAVendre/1.0 (info@thermopompesavendre.ca)" },
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) return null;
    const data = await res.json();
    if (!data || data.length === 0) return null;
    const item = data[0];
    const addr = item.address ?? {};
    const municipality = addr.city || addr.town || addr.village || addr.municipality || addr.county || addr.state || "Québec";
    const provinceName = (addr.state ?? "").toLowerCase();
    const province = provinceName.includes("québec") || provinceName.includes("quebec") ? "QC"
      : provinceName.includes("ontario") ? "ON"
      : provinceName.includes("british columbia") || provinceName.includes("colombie") ? "BC"
      : provinceName.includes("alberta") ? "AB"
      : provinceName.includes("nova scotia") ? "NS"
      : provinceName.includes("new brunswick") ? "NB"
      : provinceName.includes("manitoba") ? "MB"
      : provinceName.includes("saskatchewan") ? "SK"
      : "QC";
    const lat = parseFloat(item.lat);
    const lon = parseFloat(item.lon);
    if (!Number.isFinite(lat) || !Number.isFinite(lon)) return null;
    return { municipality, province, lat, lon };
  } catch {
    return null;
  }
}
