/* ==================================================================
   Les écrans du parcours ThermoMatch — vocabulaire commun, sans
   dépendance : le questionnaire (steps.ts), le compteur d'écrans
   atteints (etapes-store.ts) et l'outil de gestion lisent la même liste.

   L'ordre est celui du parcours : c'est lui qui donne l'entonnoir.
   ================================================================== */

/** Identifiants des écrans essentiels, dans l'ordre du parcours. */
export const SCREEN_IDS = ["lieu", "maison", "enveloppe", "chauffage", "espaces", "attentes"] as const;
export type ScreenId = (typeof SCREEN_IDS)[number];

/** Dernière étape : les trois recommandations affichées. */
export const ETAPE_RESULTATS = "resultats";

/** Nom lisible de chaque étape, pour l'outil de gestion. */
export const ETAPE_LABELS: Record<string, string> = {
  lieu: "1. Code postal",
  maison: "2. La maison",
  enveloppe: "3. Isolation et année",
  chauffage: "4. Chauffage actuel",
  espaces: "5. Espaces à chauffer",
  attentes: "6. Priorités et budget",
  [ETAPE_RESULTATS]: "Recommandations affichées",
};
