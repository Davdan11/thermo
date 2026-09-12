import { getLogisVertByBrand } from "@/lib/subsidies/logisvert-official";
import type { LogisVertSample } from "./types";

/* ==================================================================
   Extraits réels de la liste LogisVert d'Hydro-Québec pour le héros de
   /subventions (côté serveur seulement : la liste est lue sur le disque).
   Un jumelage par marque connue au Québec : celui au montant médian
   parmi ses murales et multizones. Aucune valeur n'est inventée ; une
   marque absente de la liste est simplement ignorée.
   ================================================================== */

const BRANDS: Array<[string, string]> = [
  ["MITSUBISHI ELECTRIC", "Mitsubishi Electric"],
  ["DAIKIN", "Daikin"],
  ["FUJITSU", "Fujitsu"],
  ["LG", "LG"],
  ["SAMSUNG", "Samsung"],
  ["GREE", "Gree"],
  ["BOSCH", "Bosch"],
  ["CARRIER", "Carrier"],
  ["LENNOX", "Lennox"],
  ["MIDEA", "Midea"],
  ["TOSHIBA CARRIER", "Toshiba Carrier"],
  ["HISENSE", "Hisense"],
];

let cache: LogisVertSample[] | null = null;

export function getLogisVertHeroSamples(): LogisVertSample[] {
  if (cache) return cache;
  const out: LogisVertSample[] = [];
  for (const [key, label] of BRANDS) {
    // Déjà trié par montant décroissant : l'élément du milieu est le jumelage médian.
    const list = getLogisVertByBrand(key).filter((e) => e.systemType === "M" && e.logisVertDollars > 0 && e.heatingBtu17F > 0 && e.outdoorModel);
    if (!list.length) continue;
    const e = list[Math.floor(list.length / 2)];
    out.push({ brand: label, model: e.outdoorModel, btu: e.heatingBtu17F, amount: e.logisVertDollars });
  }
  cache = out;
  return out;
}
