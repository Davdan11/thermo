/* ==================================================================
   ThermoMatch — Les hypothèses prises quand une réponse manque.

   Le parcours essentiel ne pose que ce qui change la recommandation ;
   le reste vient après le résultat (affinage). Tant qu'une réponse
   manque, le moteur applique une valeur par défaut : elle est écrite
   ici, en clair, pour que la fiche du résultat la dise plutôt que de
   laisser croire à un calcul complet.

   Aucun chiffre inventé : chaque phrase nomme la valeur par défaut
   réellement appliquée par sizing.ts ou architecture.ts.
   ================================================================== */

import type { QuestionnaireAnswers } from "./answers";

export interface Hypothese {
  /** Identifiant de la question qui la lève (bloc « Affiner »). */
  id: string;
  /** Ce qui manque, en deux mots. */
  label: string;
  /** L'hypothèse prise et son effet, en une phrase. */
  text: string;
  /** Vrai quand la réponse ne changerait que les points à vérifier, pas la machine retenue. */
  faisabilite?: boolean;
}

const CONSTRUCTION = ["pre_1960", "1960_1980", "1981_2000", "2001_2015", "2016_plus"];
const INSULATION = ["poor", "standard", "good", "high_performance"];
const WINDOWS = ["low", "standard", "high"];
const BASEMENTS = ["none", "unheated", "heated", "heated_excluded"];
const PANELS = ["100-moins", "125-150", "200-plus"];

const has = (v: unknown, allowed: string[]) => typeof v === "string" && allowed.includes(v);
const asList = (v: string[] | string | undefined): string[] => (Array.isArray(v) ? v : typeof v === "string" && v ? [v] : []);

/**
 * Les hypothèses en cours pour ces réponses, dans l'ordre où elles pèsent sur le résultat.
 * Une liste vide veut dire que tout ce qui compte a été répondu.
 */
export function hypothesesOf(a: QuestionnaireAnswers): Hypothese[] {
  const out: Hypothese[] = [];

  if (!has(a.constructionPeriod, CONSTRUCTION)) {
    out.push({
      id: "constructionPeriod",
      label: "Année de construction",
      text: "Année de construction non précisée : la maison est calculée comme une construction de 1981 à 2000 (aucune correction, facteur 1,0). Une maison d'avant 1960 demanderait 20 % de plus.",
    });
  }
  if (!has(a.insulation, INSULATION)) {
    out.push({
      id: "insulation",
      label: "Isolation",
      text: "Isolation non précisée : supposée normale pour l'âge de la maison (facteur 1,0). Une isolation faible ajouterait 15 % à la charge.",
    });
  }
  if (!has(a.windowShare, WINDOWS)) {
    out.push({
      id: "windowShare",
      label: "Fenestration",
      text: "Place des fenêtres non précisée : supposée normale (facteur 1,0). De grandes baies vitrées ajouteraient 10 % à la charge.",
    });
  }
  if (a.propertyType !== "condo" && !has(a.basement, BASEMENTS)) {
    out.push({
      id: "basement",
      label: "Sous-sol",
      text: "Sous-sol non précisé : la thermopompe est calculée sans avoir à le chauffer. Un sous-sol habité à chauffer ajouterait 10 % à la charge et souvent une tête de plus.",
    });
  }

  const placements = asList(a.placements).filter((p) => p !== "ne-sais-pas");
  if (placements.length === 0) {
    out.push({
      id: "placements",
      label: "Emplacements",
      text: "Emplacements des unités non précisés : nous supposons qu'il y a de la place dehors pour chaque unité extérieure. S'il n'y a qu'un seul endroit possible, une multizone serait retenue à la place.",
    });
  }
  if (!has(a.electricalPanel, PANELS)) {
    out.push({
      id: "electricalPanel",
      label: "Panneau électrique",
      text: "Panneau électrique non précisé : nous supposons qu'il a la capacité nécessaire, ce qui est le cas d'un panneau de 200 A. À vérifier — avec 100 A, un électricien doit faire un calcul de charge avant l'installation.",
      faisabilite: true,
    });
  }

  return out;
}
