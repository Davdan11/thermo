export interface SubsidyStep {
  id: string;
  question: string;
  subtitle?: string;
  fieldType: "text" | "radio" | "checkbox" | "product-search";
  placeholder?: string;
  options?: { label: string; value: string }[];
  validate?: (value: string) => string | null;
}

export function getStepsForSubsidy(): SubsidyStep[] {
  const steps: SubsidyStep[] = [];

  // Step 1: Project Type
  steps.push({
    id: "projectType",
    question: "Quel est votre projet?",
    subtitle: "Cela détermine les programmes qui pourraient s'appliquer.",
    fieldType: "radio",
    options: [
      { label: "Ajouter une thermopompe murale", value: "new-wall" },
      { label: "Remplacer une thermopompe murale", value: "replace-wall" },
      { label: "Installer un système multizone", value: "new-multi" },
      { label: "Ajouter une thermopompe centrale", value: "new-central" },
      { label: "Remplacer un système central", value: "replace-central" },
    ],
  });

  // Step 2: Date
  steps.push({
    id: "installationDate",
    question: "Quelle est la date prévue de l'installation?",
    subtitle: "Les subventions dépendent souvent de la date des travaux.",
    fieldType: "radio",
    options: [
      { label: "Bientôt (dans le prochain mois)", value: new Date().toISOString() },
      { label: "C'est déjà installé", value: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString() }, // 30 days ago
      { label: "Je ne sais pas encore", value: new Date().toISOString() },
    ],
  });

  // Step 3: Product Search (Optional)
  steps.push({
    id: "configurationId",
    question: "Avez-vous déjà choisi un modèle précis?",
    subtitle: "Sélectionnez le modèle exact pour vérifier l'admissibilité des certifications (ENERGY STAR, Climat Froid).",
    fieldType: "product-search",
  });

  return steps;
}
