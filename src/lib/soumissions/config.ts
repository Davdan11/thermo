/* ==================================================================
   Créateur de soumissions : constantes réglementaires et liens.

   TAXES — source à revérifier à chaque changement de taux :
     Revenu Québec, « TPS/TVH et TVQ »
     https://www.revenuquebec.ca/fr/entreprises/taxes/tpstvh-et-tvq/
   TPS 5 % et TVQ 9,975 %, chacune calculée sur le prix avant taxes.
   Les taux sont exprimés en cent-millièmes (5 000 = 5 %) pour des
   calculs entiers exacts au cent. Une soumission envoyée garde les taux
   de son envoi (copiés dans le document figé) : changer un taux ici ne
   modifie jamais une soumission déjà envoyée ou acceptée.
   ================================================================== */

export const TAXES = {
  tps: { label: "TPS", ratePer100k: 5_000, display: "5 %" },
  tvq: { label: "TVQ", ratePer100k: 9_975, display: "9,975 %" },
  /** Date de la dernière vérification des taux par l'équipe. */
  checkedOn: "2026-09-12",
  source: "https://www.revenuquebec.ca/fr/entreprises/taxes/tpstvh-et-tvq/",
} as const;

/** Pages officielles citées dans l'outil et dans les soumissions (vérifiées le 2026-09-12). */
export const LINKS = {
  /** Page du programme LogisVert déjà utilisée dans les données du site. */
  logisvert: "https://www.hydroquebec.com/residentiel/mieux-consommer/aides-financieres/logisvert.html",
  /** Office de la protection du consommateur : achats par Internet, par téléphone ou par la poste (contrats à distance). */
  opcDistance: "https://www.opc.gouv.qc.ca/consommateur/sujet/achat/internet",
  /** OPC : garanties prévues par la loi. */
  opcGaranties: "https://www.opc.gouv.qc.ca/consommateur/sujet/achat/internet/garantie/garanties-legales",
  /** OPC : annuler un achat conclu à distance. */
  opcAnnulation: "https://www.opc.gouv.qc.ca/consommateur/sujet/achat/internet/annulation",
  /** OPC (commerçants) : acompte demandé avant la conclusion d'un contrat. */
  opcAcompte: "https://www.opc.gouv.qc.ca/commercant/pratique-commerce/acompte/avant-conclusion-contrat",
} as const;

/** Marqueur des textes que l'avocat ou le notaire doit fournir. Tant qu'il reste, l'envoi est bloqué. */
export const LAWYER_PLACEHOLDER = "[À COMPLÉTER PAR L’AVOCAT OU LE NOTAIRE]";
/** Tout texte qui contient « [À » est considéré comme incomplet. */
export const PLACEHOLDER_RE = /\[\s*À\s/i;

export const TIMEZONE = "America/Toronto";

export const LIMITS = {
  lines: 80,
  listItems: 40,
  indoorUnits: 8,
  photosPerUnit: 6,
  photoBytes: 12 * 1024 * 1024,
  text: 4000,
  longText: 20000,
} as const;
