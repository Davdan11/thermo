/* ==================================================================
   Refonte R2 — constantes du parcours en 12 étapes, SANS dépendance
   (aucun import de serveur) : utilisables dans le navigateur (page
   Pipeline, réglages). parcours.ts les réexporte.
   ================================================================== */

import type { Stage } from "./types";

/* ---------------- Étapes ---------------- */

export const JOURNEY_STEPS = ["demande", "contacte", "soumission-envoyee", "ouverte", "va-de-l-avant", "installateur-trouve", "contrat-pret", "signe", "planifie", "installe", "paye", "suivi"] as const;
export type JourneyStep = (typeof JOURNEY_STEPS)[number];
export type JourneyState = JourneyStep | "perdu";
export const JOURNEY_STATES = [...JOURNEY_STEPS, "perdu"] as const satisfies readonly JourneyState[];
export const STEP_TOTAL = JOURNEY_STEPS.length;

export const STEP_RANK = Object.fromEntries(JOURNEY_STEPS.map((s, i) => [s, i])) as Record<JourneyStep, number>;
/** 1 à 12 ; 0 pour « Perdu ». */
export const stepNumber = (s: JourneyState): number => (s === "perdu" ? 0 : STEP_RANK[s] + 1);
export const isJourneyState = (v: unknown): v is JourneyState => typeof v === "string" && (JOURNEY_STATES as readonly string[]).includes(v);
export const isJourneyStep = (v: unknown): v is JourneyStep => typeof v === "string" && (JOURNEY_STEPS as readonly string[]).includes(v);

export const STEP_LABELS: Record<JourneyState, string> = {
  demande: "Demande",
  contacte: "Contacté",
  "soumission-envoyee": "Soumission envoyée",
  ouverte: "Ouverte",
  "va-de-l-avant": "Va de l’avant",
  "installateur-trouve": "Installateur trouvé",
  "contrat-pret": "Contrat prêt à signer",
  signe: "Signé",
  planifie: "Planifié",
  installe: "Installé",
  paye: "Payé",
  suivi: "Suivi",
  perdu: "Perdu",
};

/** Ce qui fait entrer un client dans l'étape (réglages, infobulles). */
export const STEP_HINTS: Record<JourneyState, string> = {
  demande: "Demande reçue (formulaire, appel, texto) ou fiche saisie, aucun contact encore.",
  contacte: "Appel enregistré, texto envoyé, rendez-vous ou note « appel ».",
  "soumission-envoyee": "Une version de la soumission est envoyée.",
  ouverte: "Le client a consulté sa soumission.",
  "va-de-l-avant": "Le client a coché « Je veux aller de l’avant » : l’installateur est à trouver (ou à remplacer).",
  "installateur-trouve": "Un installateur étudie le projet : proposition en attente de son approbation.",
  "contrat-pret": "L’installateur a approuvé : le contrat attend la signature du client.",
  signe: "Contrat signé par le client (ou soumission acceptée, ou job créé à la main).",
  planifie: "Date d’installation réservée.",
  installe: "Fin de chantier enregistrée.",
  paye: "Facture de commission payée par l’installateur.",
  suivi: "Après le paiement : sondage répondu, référence ou plan d’entretien.",
  perdu: "Perdu : raison notée à la main, ou soumission refusée, job annulé, contrat refusé.",
};

/** Libellés du portail client (chantier P) : compréhensibles, sans aucune donnée interne (ni commission, ni installateur). */
export const CLIENT_STEP_LABELS: Record<JourneyStep, string> = {
  demande: "Demande reçue",
  contacte: "Premier contact",
  "soumission-envoyee": "Soumission envoyée",
  ouverte: "Soumission consultée",
  "va-de-l-avant": "Vous allez de l’avant",
  "installateur-trouve": "Installateur trouvé",
  "contrat-pret": "Contrat prêt à signer",
  signe: "Contrat signé",
  planifie: "Installation planifiée",
  installe: "Installation terminée",
  paye: "Dossier complété",
  suivi: "Suivi et entretien",
};

/** Étape d'origine (7 étapes + perdue) de chaque étape du parcours : crm.json, prévision, Pipedrive, étape manuelle. */
export const LEGACY_OF: Record<JourneyState, Stage> = {
  demande: "nouvelle",
  contacte: "contacte",
  "soumission-envoyee": "soumission-envoyee",
  ouverte: "ouverte",
  "va-de-l-avant": "ouverte",
  "installateur-trouve": "ouverte",
  "contrat-pret": "ouverte",
  signe: "acceptee",
  planifie: "planifiee",
  installe: "terminee",
  paye: "terminee",
  suivi: "terminee",
  perdu: "perdue",
};

/** Étape du parcours d'une étape d'origine (étape manuelle choisie dans crm.json). */
export const STEP_OF_LEGACY: Record<Stage, JourneyState> = {
  nouvelle: "demande",
  contacte: "contacte",
  "soumission-envoyee": "soumission-envoyee",
  ouverte: "ouverte",
  acceptee: "signe",
  planifiee: "planifie",
  terminee: "installe",
  perdue: "perdu",
};

/** Étapes où l'on peut déposer un client à la main : celles qui correspondent une à une à une étape manuelle existante. */
export const MOVABLE: readonly JourneyState[] = ["demande", "contacte", "soumission-envoyee", "ouverte", "signe", "planifie", "installe", "perdu"];

/** Étapes de la vente (le vendeur y agit) ; au-delà, c'est le chantier (répartition, installation, argent). */
export const SALES_STEPS: ReadonlySet<JourneyStep> = new Set(["demande", "contacte", "soumission-envoyee", "ouverte", "va-de-l-avant", "installateur-trouve", "contrat-pret"]);

/* ---------------- Qui doit agir ---------------- */

export const ACTORS = ["proprietaire", "client", "installateur"] as const;
export type Actor = (typeof ACTORS)[number];
export const ACTOR_LABELS: Record<Actor, string> = { proprietaire: "Propriétaire", client: "Client", installateur: "Installateur" };

/* ---------------- Pertes ---------------- */

/** Raisons structurées, choisies par le propriétaire en marquant un client perdu. */
export const LOSS_CAUSES = ["prix", "delai", "installateur", "concurrent", "reporte", "autre"] as const;
export type LossCause = (typeof LOSS_CAUSES)[number];
export const LOSS_CAUSE_LABELS: Record<LossCause, string> = { prix: "Prix", delai: "Délai", installateur: "Installateur", concurrent: "Concurrent", reporte: "Projet reporté", autre: "Autre" };
export const isLossCause = (v: unknown): v is LossCause => typeof v === "string" && (LOSS_CAUSES as readonly string[]).includes(v);

/** Motifs automatiques : ce que disent les faits au moment de la perte. */
export const LOSS_MOTIFS = ["soumission-refusee", "sans-reponse", "expiree", "contrat-refuse", "contrat-annule", "job-annule", "avant-soumission", "autre"] as const;
export type LossMotif = (typeof LOSS_MOTIFS)[number];
export const LOSS_MOTIF_LABELS: Record<LossMotif, string> = {
  "soumission-refusee": "Soumission refusée",
  "sans-reponse": "Sans réponse",
  expiree: "Soumission expirée",
  "contrat-refuse": "Contrat refusé",
  "contrat-annule": "Contrat annulé",
  "job-annule": "Job annulé",
  "avant-soumission": "Avant toute soumission",
  autre: "Autre",
};

/* ---------------- Réglages : correspondances par défaut ---------------- */

/** Probabilité de l'étape : celle d'une étape de la prévision existante (volet C), « signé » (100 %) ou « aucune » (à définir). */
export const PROBABILITY_KEYS = ["nouvelle", "contacte", "soumission-envoyee", "ouverte", "signe", "aucune"] as const;
export type ProbabilityKey = (typeof PROBABILITY_KEYS)[number];
export const PROBABILITY_KEY_LABELS: Record<ProbabilityKey, string> = {
  nouvelle: "Prévision : nouvelle demande",
  contacte: "Prévision : contacté",
  "soumission-envoyee": "Prévision : soumission envoyée",
  ouverte: "Prévision : soumission ouverte",
  signe: "Contrat signé : 100 %",
  aucune: "À définir (aucune)",
};

export const DEFAULT_PROBABILITY: Record<JourneyStep, ProbabilityKey> = {
  demande: "nouvelle",
  contacte: "contacte",
  "soumission-envoyee": "soumission-envoyee",
  ouverte: "ouverte",
  "va-de-l-avant": "ouverte",
  "installateur-trouve": "ouverte",
  "contrat-pret": "ouverte",
  signe: "signe",
  planifie: "signe",
  installe: "signe",
  paye: "signe",
  suivi: "signe",
};

/** Escalade par texto, par défaut : les étapes où un client attend (demande, installateur, signature, date). */
export const DEFAULT_SMS: Record<JourneyStep, boolean> = {
  demande: true,
  contacte: false,
  "soumission-envoyee": false,
  ouverte: false,
  "va-de-l-avant": true,
  "installateur-trouve": true,
  "contrat-pret": true,
  signe: true,
  planifie: false,
  installe: false,
  paye: false,
  suivi: false,
};
