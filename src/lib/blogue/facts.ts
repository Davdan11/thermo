/* ==================================================================
   Matière première des gabarits d'articles : faits déjà lus dans les
   données du site. Les gabarits ne lisent que ces faits (aucune
   estimation, aucun texte d'un modèle de langage). L'adaptateur réel
   est dans facts-site.ts ; les tests peuvent fournir leurs faits.
   ================================================================== */

import type { Palmares } from "./palmares";

export interface FactModel {
  slug: string;
  brand: string;
  seriesName: string;
  name: string;
  kind: "murale" | "centrale";
  nominalBtu: number;
  h5Btu: number | null;
  cop5: number | null;
  logisVertDollars: number;
  minTempC: number | null;
  coldClimate: boolean;
}

export interface FactPrice {
  kind: "murale" | "multizone" | "centrale";
  btu?: number;
  zones?: number;
  tier: string;
  min: number;
  max: number;
  /** Nombre de pages sources distinctes derrière la fourchette. */
  sources: number;
}

export interface BlogFacts {
  /** Jour de préparation, AAAA-MM-JJ (heure de Montréal). */
  date: string;
  /** Année de l'édition (titres « … 2026 »). */
  year: number;
  /** Liste officielle LogisVert : date de la liste et de notre dernière vérification (« 17 juillet 2025 »). */
  listDate: string | null;
  listCheckedDate: string | null;
  /** Modèles canoniques du catalogue (une fiche par machine distincte). */
  models: FactModel[];
  /** Fourchettes de prix installé publiées (cases « publie » de la grille de /prix). */
  prices: FactPrice[];
  /** Date de consultation des prix, AAAA-MM-JJ. */
  pricesConsultedAt: string;
  palmares: Palmares;
  palmaresDate: string;
}
