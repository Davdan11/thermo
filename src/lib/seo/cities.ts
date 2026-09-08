/* ==================================================================
   Villes du Québec pour les pages locales « Thermopompe à [ville] »

   Chaque ville est reliée à ses préfixes de code postal (RTA/FSA) et à
   la température de conception de sa région (src/lib/data/geography).
   Aucune donnée démographique n'est inventée : seules la région, les
   codes postaux et la température de conception sont utilisées.
   ================================================================== */

import { resolvePostalCode } from "@/lib/data/geography/postal-zones";

export interface City {
  slug: string;
  name: string;
  /** Région administrative, telle qu'affichée. */
  region: string;
  /** Préfixes de code postal (3 caractères) couvrant la ville. */
  fsa: string[];
  /** Grande ville voisine pour le maillage interne (slug). */
  near?: string[];
}

const RAW: Array<Omit<City, "region"> & { region: string }> = [
  { slug: "montreal", name: "Montréal", region: "Montréal", fsa: ["H1A", "H2X", "H3A", "H4B", "H9A"], near: ["laval", "longueuil", "brossard"] },
  { slug: "laval", name: "Laval", region: "Laval", fsa: ["H7A", "H7E", "H7L", "H7N", "H7T"], near: ["montreal", "terrebonne", "boisbriand"] },
  { slug: "longueuil", name: "Longueuil", region: "Montérégie", fsa: ["J4G", "J4H", "J4K", "J4L", "J4M"], near: ["montreal", "brossard", "boucherville"] },
  { slug: "brossard", name: "Brossard", region: "Montérégie", fsa: ["J4W", "J4X", "J4Y", "J4Z"], near: ["longueuil", "montreal", "saint-hubert"] },
  { slug: "saint-hubert", name: "Saint-Hubert", region: "Montérégie", fsa: ["J3Y", "J3Z"], near: ["longueuil", "brossard"] },
  { slug: "boucherville", name: "Boucherville", region: "Montérégie", fsa: ["J4B"], near: ["longueuil", "montreal"] },
  { slug: "quebec", name: "Québec", region: "Capitale-Nationale", fsa: ["G1A", "G1K", "G1R", "G1X", "G2B"], near: ["levis", "saint-augustin"] },
  { slug: "levis", name: "Lévis", region: "Chaudière-Appalaches", fsa: ["G6V", "G6W", "G6X", "G6J", "G6K"], near: ["quebec", "saint-georges"] },
  { slug: "gatineau", name: "Gatineau", region: "Outaouais", fsa: ["J8P", "J8T", "J8X", "J8Y", "J9A"], near: ["mont-laurier"] },
  { slug: "sherbrooke", name: "Sherbrooke", region: "Estrie", fsa: ["J1E", "J1G", "J1H", "J1K", "J1N"], near: ["magog", "granby", "drummondville"] },
  { slug: "magog", name: "Magog", region: "Estrie", fsa: ["J1X"], near: ["sherbrooke", "granby"] },
  { slug: "trois-rivieres", name: "Trois-Rivières", region: "Mauricie", fsa: ["G8T", "G8V", "G8W", "G8Y", "G8Z"], near: ["shawinigan", "drummondville", "victoriaville"] },
  { slug: "shawinigan", name: "Shawinigan", region: "Mauricie", fsa: ["G9N", "G9P", "G9R", "G9T"], near: ["trois-rivieres"] },
  { slug: "saguenay", name: "Saguenay (Chicoutimi)", region: "Saguenay–Lac-Saint-Jean", fsa: ["G7H", "G7J", "G7B"], near: ["jonquiere", "alma"] },
  { slug: "jonquiere", name: "Jonquière", region: "Saguenay–Lac-Saint-Jean", fsa: ["G7S", "G7X"], near: ["saguenay", "alma"] },
  { slug: "alma", name: "Alma", region: "Saguenay–Lac-Saint-Jean", fsa: ["G8B"], near: ["saguenay", "roberval"] },
  { slug: "roberval", name: "Roberval", region: "Saguenay–Lac-Saint-Jean", fsa: ["G8H"], near: ["alma", "saint-felicien"] },
  { slug: "saint-felicien", name: "Saint-Félicien", region: "Saguenay–Lac-Saint-Jean", fsa: ["G8K"], near: ["roberval", "alma"] },
  { slug: "rimouski", name: "Rimouski", region: "Bas-Saint-Laurent", fsa: ["G5L", "G5M", "G5N"], near: ["riviere-du-loup", "matane"] },
  { slug: "riviere-du-loup", name: "Rivière-du-Loup", region: "Bas-Saint-Laurent", fsa: ["G5R"], near: ["rimouski", "levis"] },
  { slug: "matane", name: "Matane", region: "Bas-Saint-Laurent", fsa: ["G4W"], near: ["rimouski", "gaspe"] },
  { slug: "gaspe", name: "Gaspé", region: "Gaspésie–Îles-de-la-Madeleine", fsa: ["G4X"], near: ["matane"] },
  { slug: "rouyn-noranda", name: "Rouyn-Noranda", region: "Abitibi-Témiscamingue", fsa: ["J9X", "J9Y"], near: ["val-dor", "amos", "la-sarre"] },
  { slug: "val-dor", name: "Val-d'Or", region: "Abitibi-Témiscamingue", fsa: ["J9P"], near: ["rouyn-noranda", "amos"] },
  { slug: "amos", name: "Amos", region: "Abitibi-Témiscamingue", fsa: ["J9T"], near: ["rouyn-noranda", "val-dor"] },
  { slug: "la-sarre", name: "La Sarre", region: "Abitibi-Témiscamingue", fsa: ["J9Z"], near: ["rouyn-noranda", "amos"] },
  { slug: "sept-iles", name: "Sept-Îles", region: "Côte-Nord", fsa: ["G4R", "G4S"], near: ["baie-comeau"] },
  { slug: "baie-comeau", name: "Baie-Comeau", region: "Côte-Nord", fsa: ["G4Z", "G5C"], near: ["sept-iles"] },
  { slug: "drummondville", name: "Drummondville", region: "Centre-du-Québec", fsa: ["J2B", "J2C", "J2E"], near: ["victoriaville", "sherbrooke", "trois-rivieres"] },
  { slug: "victoriaville", name: "Victoriaville", region: "Centre-du-Québec", fsa: ["G6P", "G6R", "G6S", "G6T"], near: ["drummondville", "trois-rivieres"] },
  { slug: "granby", name: "Granby", region: "Montérégie", fsa: ["J2G", "J2H", "J2J"], near: ["sherbrooke", "saint-hyacinthe", "magog"] },
  { slug: "saint-hyacinthe", name: "Saint-Hyacinthe", region: "Montérégie", fsa: ["J2R", "J2S", "J2T"], near: ["granby", "drummondville", "saint-jean-sur-richelieu"] },
  { slug: "saint-jean-sur-richelieu", name: "Saint-Jean-sur-Richelieu", region: "Montérégie", fsa: ["J2W", "J2X", "J2Y", "J3A", "J3B"], near: ["brossard", "chateauguay", "saint-hyacinthe"] },
  { slug: "sorel-tracy", name: "Sorel-Tracy", region: "Montérégie", fsa: ["J3P", "J3R"], near: ["saint-hyacinthe", "repentigny"] },
  { slug: "chateauguay", name: "Châteauguay", region: "Montérégie", fsa: ["J6J", "J6K"], near: ["montreal", "salaberry-de-valleyfield"] },
  { slug: "salaberry-de-valleyfield", name: "Salaberry-de-Valleyfield", region: "Montérégie", fsa: ["J6S", "J6T"], near: ["chateauguay", "vaudreuil-dorion"] },
  { slug: "vaudreuil-dorion", name: "Vaudreuil-Dorion", region: "Montérégie", fsa: ["J7V"], near: ["montreal", "salaberry-de-valleyfield"] },
  { slug: "repentigny", name: "Repentigny", region: "Lanaudière", fsa: ["J5Y", "J5Z", "J6A"], near: ["terrebonne", "montreal", "joliette"] },
  { slug: "terrebonne", name: "Terrebonne", region: "Lanaudière", fsa: ["J6V", "J6W", "J6X", "J6Y"], near: ["laval", "mascouche", "repentigny"] },
  { slug: "mascouche", name: "Mascouche", region: "Lanaudière", fsa: ["J7K", "J7L"], near: ["terrebonne", "laval"] },
  { slug: "joliette", name: "Joliette", region: "Lanaudière", fsa: ["J6E"], near: ["repentigny", "terrebonne"] },
  { slug: "blainville", name: "Blainville", region: "Laurentides", fsa: ["J7B", "J7C"], near: ["boisbriand", "saint-jerome", "laval"] },
  { slug: "boisbriand", name: "Boisbriand", region: "Laurentides", fsa: ["J7G", "J7H"], near: ["blainville", "laval", "saint-eustache"] },
  { slug: "saint-eustache", name: "Saint-Eustache", region: "Laurentides", fsa: ["J7P", "J7R"], near: ["boisbriand", "mirabel", "laval"] },
  { slug: "mirabel", name: "Mirabel", region: "Laurentides", fsa: ["J7J", "J7N"], near: ["saint-eustache", "saint-jerome"] },
  { slug: "saint-jerome", name: "Saint-Jérôme", region: "Laurentides", fsa: ["J5L", "J7Y", "J7Z"], near: ["blainville", "mirabel", "mont-laurier"] },
  { slug: "mont-laurier", name: "Mont-Laurier", region: "Laurentides", fsa: ["J9L"], near: ["saint-jerome", "gatineau"] },
  { slug: "saint-augustin", name: "Saint-Augustin-de-Desmaures", region: "Capitale-Nationale", fsa: ["G3A"], near: ["quebec"] },
  { slug: "baie-saint-paul", name: "Baie-Saint-Paul", region: "Capitale-Nationale (Charlevoix)", fsa: ["G3Z"], near: ["quebec"] },
  { slug: "saint-georges", name: "Saint-Georges", region: "Chaudière-Appalaches (Beauce)", fsa: ["G5Y", "G5Z"], near: ["levis", "thetford-mines"] },
  { slug: "thetford-mines", name: "Thetford Mines", region: "Chaudière-Appalaches", fsa: ["G6G", "G6H"], near: ["saint-georges", "levis", "victoriaville"] },
  { slug: "montmagny", name: "Montmagny", region: "Chaudière-Appalaches", fsa: ["G5V"], near: ["levis", "riviere-du-loup"] },
  { slug: "chibougamau", name: "Chibougamau", region: "Nord-du-Québec", fsa: ["G8P"], near: ["roberval"] },
];

export interface CityProfile extends City {
  /** Température de conception (°C) de la région, selon la table des codes postaux. */
  designTempC: number;
  /** Libellé de zone climatique de la table des codes postaux. */
  climateLabel: string;
}

let cache: CityProfile[] | null = null;

export function getCities(): CityProfile[] {
  if (cache) return cache;
  cache = RAW.map((c) => {
    const zone = resolvePostalCode(`${c.fsa[0]}1A1`);
    return {
      ...c,
      designTempC: zone?.designTempC ?? -25,
      climateLabel: zone?.region ?? "Québec (Général)",
    };
  }).sort((a, b) => a.name.localeCompare(b.name, "fr-CA"));
  return cache;
}

export function getCity(slug: string): CityProfile | null {
  return getCities().find((c) => c.slug === slug) ?? null;
}

export function getCitiesByRegion(): Map<string, CityProfile[]> {
  const map = new Map<string, CityProfile[]>();
  for (const c of getCities()) {
    const list = map.get(c.region) ?? [];
    list.push(c);
    map.set(c.region, list);
  }
  return map;
}
