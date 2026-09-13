/* Données fictives des tests du créateur de soumissions (aucun vrai client, aucune vraie entreprise). */
import { defaultSettings, emptyContent } from "../defaults";
import type { MachineInfo, QuoteContent, QuoteLine, Settings } from "../types";

export const RATES = { tpsPer100k: 5_000, tvqPer100k: 9_975 };
export const TODAY = "2026-09-12";
export const NOW = new Date("2026-09-12T15:00:00Z");

export function line(id: string, over: Partial<QuoteLine> = {}): QuoteLine {
  return { id, kind: "forfait", label: `Ligne ${id}`, description: "", unit: "forfait", quantity: 1, unitPriceCents: 100_000, optional: false, selectedByDefault: false, discount: null, catalogRef: null, unitRef: null, ...over };
}

export function machine(over: Partial<MachineInfo> = {}): MachineInfo {
  return {
    modelSlug: "exemple-modele",
    brandId: "exemple",
    brand: "Marque Exemple",
    name: "Série Test 12",
    outdoorModel: "EXT-12",
    systemType: "wall-single",
    systemTypeLabel: "Murale simple zone",
    imageUrl: null,
    refrigerant: "R-410A",
    noiseOutdoorDbA: null,
    noiseIndoorMinDbA: null,
    noiseIndoorMaxDbA: null,
    pairing: { ahri: "123456789", indoorDescription: "Appareils sans conduits", logisVertCents: 150_000, h5Btu: 12_000, h17Btu: 14_000, nominalBtu: 12_000, coolingBtu: 12_000, seer2: 20, hspf2: 10, cop5: 1.9, coldClimate: true },
    offList: false,
    offListIndoor: "",
    catalogWarranties: [],
    showCatalogWarranties: false,
    warrantyText: "10 ans pièces et compresseur, sur enregistrement.",
    explanation: "Elle chauffe le rez-de-chaussée.",
    listDate: "17 juillet 2025",
    ...over,
  };
}

/** Réglages complets et fictifs (identité « Entreprise Exemple »), textes remplis. */
export function fullSettings(): Settings {
  const s = defaultSettings();
  s.company = { legalName: "Entreprise Exemple inc.", tradeName: "Exemple", neq: "1234567890", rbq: "1234-5678-90", address: "1 rue Exemple", city: "Montréal", postalCode: "H2X 1Y4", phone: "514 555-0100", email: "exemple@exemple.ca", website: "", tps: "123456789 RT0001", tvq: "1234567890 TQ0001", logoId: null };
  s.texts = { ...s.texts, paymentTerms: "Solde à la fin des travaux.", depositRule: "Acompte à l’acceptation.", warranty: "Main-d’œuvre : 2 ans.", legalWarranty: "Texte validé (test).", cancellation: "Texte validé (test).", terms: "Texte validé (test).", weatherClause: "Report si tempête." };
  return s;
}

/** Soumission prête à envoyer (tout rempli). */
export function readyContent(settings = fullSettings()): QuoteContent {
  const c = emptyContent(settings, TODAY);
  c.client = { firstName: "Camille", lastName: "Exemple", email: "camille@exemple.ca", phone: "514 555-0199", address: "10 rue Fictive", city: "Laval", postalCode: "H7A 1A1" };
  c.site.propertyType = "unifamiliale";
  c.site.presence = "Un adulte, toute la journée";
  c.machine = machine();
  c.placement.outdoor = { location: "Mur arrière", mounting: "support-mural", clearance: "30 cm", snow: "Hors de la chute du toit", notes: "", photos: [] };
  const u = c.placement.indoor[0];
  Object.assign(u, { type: "murale", model: "INT-12", floor: 1, room: "Salon", wall: "Mur extérieur arrière", height: "environ 2,1 m", lineLength: 15, lineIncluded: 15, lineRoute: "exterieur", lineFinish: "cache-ligne", penetrations: 1, wallMaterial: "vinyle", drain: "gravite" });
  c.placement.electrical.circuit = "existant";
  c.schedule = { ...c.schedule, mode: "date", date: "2026-10-01", duration: "Une journée", arrival: "Entre 8 h et 9 h" };
  c.lines = [line("l_forfait", { label: "Installation murale complète", unitPriceCents: 400_000 }), line("l_opt", { kind: "extra", label: "Support au sol", unitPriceCents: 25_000, optional: true, selectedByDefault: true })];
  c.logisvert = { mode: "cession" };
  c.deposit = { kind: "pourcentage", value: 20 };
  return c;
}
