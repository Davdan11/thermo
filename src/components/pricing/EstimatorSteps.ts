/* ==================================================================
   Estimator — Step definitions (adaptive)

   Steps change based on project type. Only relevant questions shown.
   ================================================================== */

import type { ProjectType } from "@/lib/pricing/types";
import { formatPostalCode } from "@/app/trouver-ma-thermopompe/_components/steps";

/* ------------------------------------------------------------------
   Step types
   ------------------------------------------------------------------ */

export type StepFieldType = "radio" | "text" | "checkbox";

export interface StepOption {
  value: string;
  label: string;
}

export interface EstimatorStep {
  id: string;
  question: string;
  subtitle?: string;
  fieldType: StepFieldType;
  options?: StepOption[];
  placeholder?: string;
  validate?: (value: string | boolean) => string | null;
}

/* ------------------------------------------------------------------
   Validation helpers
   ------------------------------------------------------------------ */

function validatePostalCode(value: string | boolean): string | null {
  const code = String(value).replace(/\s/g, "").toUpperCase();
  if (!/^[A-Z]\d[A-Z]\d[A-Z]\d$/.test(code)) {
    return "Entrez un code postal canadien valide (ex. H2X 1Y4).";
  }
  return null;
}

/* ------------------------------------------------------------------
   Static steps
   ------------------------------------------------------------------ */

const PROJECT_TYPE_STEP: EstimatorStep = {
  id: "projectType",
  question: "Quel est votre projet?",
  subtitle: "Cela détermine les questions qui suivront.",
  fieldType: "radio",
  options: [
    { value: "wall-single-new", label: "Ajouter une thermopompe murale" },
    { value: "wall-single-replace", label: "Remplacer une thermopompe murale" },
    { value: "multi-zone-new", label: "Installer un système multizone" },
    { value: "central-new", label: "Ajouter une thermopompe centrale" },
    { value: "central-replace", label: "Remplacer un système central" },
  ],
};

const POSTAL_CODE_STEP: EstimatorStep = {
  id: "postalCode",
  question: "Quel est votre code postal?",
  subtitle:
    "Pour estimer les coûts selon votre région. Nous n'enregistrons pas votre adresse.",
  fieldType: "text",
  placeholder: "ex. H2X 1Y4",
  validate: validatePostalCode,
};

const PROPERTY_TYPE_STEP: EstimatorStep = {
  id: "propertyType",
  question: "Quel type de propriété?",
  fieldType: "radio",
  options: [
    { value: "maison", label: "Maison unifamiliale" },
    { value: "condo", label: "Condo" },
    { value: "duplex", label: "Duplex" },
    { value: "triplex", label: "Triplex" },
    { value: "autre", label: "Autre" },
  ],
};

const AREA_STEP: EstimatorStep = {
  id: "areaSqFt",
  question: "Quelle est la superficie approximative?",
  subtitle: "Une estimation suffit. Cela aide à déterminer la capacité requise.",
  fieldType: "radio",
  options: [
    { value: "<1000", label: "Moins de 1 000 pi²" },
    { value: "1000-1500", label: "1 000 à 1 500 pi²" },
    { value: "1500-2000", label: "1 500 à 2 000 pi²" },
    { value: "2000-2500", label: "2 000 à 2 500 pi²" },
    { value: "2500+", label: "Plus de 2 500 pi²" },
  ],
};

const CURRENT_SYSTEM_STEP: EstimatorStep = {
  id: "currentSystem",
  question: "Quel est votre système de chauffage actuel?",
  fieldType: "radio",
  options: [
    { value: "electrique", label: "Plinthes électriques" },
    { value: "thermopompe", label: "Thermopompe existante" },
    { value: "fournaise-gaz", label: "Fournaise au gaz" },
    { value: "fournaise-mazout", label: "Fournaise au mazout" },
    { value: "central-electrique", label: "Système central électrique" },
    { value: "autre", label: "Autre" },
  ],
};

const ZONES_STEP: EstimatorStep = {
  id: "zones",
  question: "Combien de zones à climatiser?",
  subtitle: "Chaque zone nécessite une unité intérieure.",
  fieldType: "radio",
  options: [
    { value: "2", label: "2 zones" },
    { value: "3", label: "3 zones" },
    { value: "4", label: "4 zones" },
    { value: "5+", label: "5 zones ou plus" },
  ],
};

const HEIGHT_STEP: EstimatorStep = {
  id: "height",
  question: "À quel étage sera installée l'unité intérieure?",
  subtitle: "L'installation en hauteur peut augmenter les coûts.",
  fieldType: "radio",
  options: [
    { value: "ground", label: "Rez-de-chaussée" },
    { value: "second-floor", label: "2e étage" },
    { value: "third-plus", label: "3e étage ou plus" },
  ],
};

const ACCESS_STEP: EstimatorStep = {
  id: "accessComplexity",
  question: "Comment est l'accès à l'emplacement d'installation?",
  subtitle: "Un accès difficile peut nécessiter plus de temps et d'équipement.",
  fieldType: "radio",
  options: [
    { value: "standard", label: "Accès standard (dégagé, facile)" },
    { value: "difficult", label: "Accès difficile (espace restreint, obstacles)" },
    { value: "very-difficult", label: "Accès très difficile (grue, toit, etc.)" },
  ],
};

const ELECTRICAL_STEP: EstimatorStep = {
  id: "electricalWork",
  question: "Des travaux électriques sont-ils nécessaires?",
  subtitle: "Par exemple, un circuit dédié ou une mise à niveau du panneau.",
  fieldType: "radio",
  options: [
    { value: "no", label: "Non, ou je ne sais pas" },
    { value: "yes", label: "Oui, travaux électriques nécessaires" },
  ],
};

const DUCTWORK_STEP: EstimatorStep = {
  id: "ductwork",
  question: "Des travaux de conduits sont-ils nécessaires?",
  subtitle: "Pour les systèmes centraux utilisant des conduits d'air.",
  fieldType: "radio",
  options: [
    { value: "no", label: "Non, les conduits existants conviennent" },
    { value: "yes", label: "Oui, modification ou installation de conduits" },
  ],
};

const REMOVAL_STEP: EstimatorStep = {
  id: "removal",
  question: "Faut-il retirer l'ancien système?",
  subtitle: "Le démontage et la disposition de l'ancien équipement.",
  fieldType: "radio",
  options: [
    { value: "no", label: "Non" },
    { value: "yes", label: "Oui, retirer l'ancien système" },
  ],
};

/* ------------------------------------------------------------------
   Adaptive step builder
   ------------------------------------------------------------------ */

export function getStepsForProject(
  projectType: ProjectType | undefined,
): EstimatorStep[] {
  if (!projectType || projectType === "unknown") {
    return [PROJECT_TYPE_STEP];
  }

  const steps: EstimatorStep[] = [PROJECT_TYPE_STEP, POSTAL_CODE_STEP];

  // All projects need property + area
  steps.push(PROPERTY_TYPE_STEP);
  steps.push(AREA_STEP);

  // Replacement projects ask about current system + removal
  const isReplacement = projectType.includes("replace");
  if (isReplacement) {
    steps.push(CURRENT_SYSTEM_STEP);
    steps.push(REMOVAL_STEP);
  }

  // Multizone needs zone count
  if (projectType.startsWith("multi-zone")) {
    steps.push(ZONES_STEP);
  }

  // All projects: installation details
  steps.push(HEIGHT_STEP);
  steps.push(ACCESS_STEP);

  // Electrical work
  steps.push(ELECTRICAL_STEP);

  // Central systems may need ductwork
  if (projectType.startsWith("central")) {
    steps.push(DUCTWORK_STEP);
  }

  return steps;
}

/* Re-export for use by the wizard */
export { formatPostalCode };
