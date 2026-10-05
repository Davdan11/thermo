/* ==================================================================
   Résultat LogisVert affiché par la page /subventions.

   Plus aucun montant n'est calculé ici : la subvention vient de la liste
   officielle (src/lib/subsidies/logisvert-official.ts). Une thermopompe
   absente de la liste en vigueur n'est pas admissible ; lui donner un
   montant « estimé », comme le faisait ce fichier, laissait croire à une
   subvention qui n'existe pas.

   Règle officielle, pour mémoire (guide de participation résidentiel du
   programme LogisVert, version 1.10 du 15 septembre 2026, annexe I,
   mesure Thermopompe) : 50 $ par 1 000 BTU/h à −8 °C pour une thermopompe
   certifiée ENERGY STAR, 120 $ par 1 000 BTU/h à −8 °C si elle est de type
   « climat froid ». Les montants de la liste suivent cette règle ; le
   garde-fou de scripts/lib/logisvert-energystar.mjs le vérifie à chaque
   mise à jour.
   ================================================================== */

import type { SubsidyEstimate } from "../data/types";

/** Ce que la page /subventions affiche après une vérification. */
export interface LogisVertResult {
  /** Subvention en cents CAD (montant de la liste officielle). */
  estimatedAmountCents: number;
  /** Subvention en dollars (montant de la liste officielle). */
  estimatedAmountDollars: number;
  /** Taux officiel appliqué par Hydro-Québec ($ par 1 000 BTU/h à −8 °C) : 50, ou 120 en climat froid. */
  ratePerKBtu: number;
  /** Appareil certifié ENERGY STAR « climat froid ». */
  isColdClimate: boolean;
  /** Capacité de chauffage certifiée à −8 °C (BTU/h) qui donne le montant. */
  capacityBtuUsed: number;
  /** Toujours false : le site n'affiche que des montants de la liste officielle. */
  isEstimate: boolean;
  disclaimer: string;
  sourceUrl: string;
  asSubsidyEstimate: SubsidyEstimate;
}
