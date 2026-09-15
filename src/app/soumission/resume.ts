/* ==================================================================
   /soumission — libellés du récapitulatif « Votre projet ».
   Le brouillon garde les identifiants du questionnaire ThermoMatch
   (« maison », « 1500-2000 », « ne-sais-pas ») : ils partent tels quels
   au CRM. À l'écran, on montre les libellés des étapes du questionnaire
   (trouver-ma-thermopompe/_components/steps.ts), sans les recopier ici.
   Une valeur tapée par le visiteur, ou inconnue, s'affiche telle quelle.
   ================================================================== */

import { STEPS, type StepOption } from "@/app/trouver-ma-thermopompe/_components/steps";

export type ProjectRowKey = "ville" | "typeBatiment" | "typeThermopompe" | "superficie" | "emplacement" | "echeancier" | "modele";

/** Options fixes d'une étape du questionnaire (une étape aux options calculées n'en donne aucune). */
function stepOptions(stepId: string): StepOption[] {
  const step = STEPS.find((s) => s.id === stepId);
  return step && Array.isArray(step.options) ? step.options : [];
}

function stepLabel(stepId: string, value: string): string | undefined {
  return stepOptions(stepId).find((o) => o.value === value)?.label;
}

/** Ligne du récapitulatif → étape du questionnaire qui en donne les libellés. */
const ROW_STEP: Partial<Record<ProjectRowKey, string>> = {
  typeBatiment: "propertyType",
  superficie: "area",
};

/* Type de projet transmis au CRM (typeThermopompeOf) : aucune étape ne le demande plus, le moteur le choisit. */
const TYPE_LABELS: Record<string, string> = {
  centrale: "Centrale",
  multizone: "Multizone",
  murale: "Murale",
};

/** Libellé humain d'une ligne du récapitulatif ; la valeur telle quelle si elle n'est pas un identifiant connu. */
export function projectRowLabel(key: ProjectRowKey, value: string): string {
  if (!value) return value;
  const stepId = ROW_STEP[key];
  const fromStep = stepId ? stepLabel(stepId, value) : undefined;
  if (fromStep) return fromStep;
  if (key === "typeThermopompe") {
    if (TYPE_LABELS[value]) return TYPE_LABELS[value];
    // Anciens brouillons (« ne-sais-pas ») : même libellé que les étapes du questionnaire.
    if (value === "ne-sais-pas") return stepLabel("constructionPeriod", value) ?? value;
  }
  return value;
}
