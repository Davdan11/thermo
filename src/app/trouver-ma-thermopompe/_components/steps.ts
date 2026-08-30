/* ----------------------------------------------------------
   ThermoMatch — Step definitions
   ---------------------------------------------------------- */

export type StepType = "text" | "radio" | "multi";

export interface StepOption {
  value: string;
  label: string;
}

export interface Step {
  id: string;
  question: string;
  subtitle?: string;
  type: StepType;
  options?: StepOption[];
  placeholder?: string;
  validate?: (value: string | string[]) => string | null;
}

/* ----------------------------------------------------------
   Postal code helpers
   ---------------------------------------------------------- */

export function formatPostalCode(raw: string): string {
  const cleaned = raw.replace(/[^a-zA-Z0-9]/g, "").toUpperCase().slice(0, 6);
  if (cleaned.length > 3) {
    return `${cleaned.slice(0, 3)} ${cleaned.slice(3)}`;
  }
  return cleaned;
}

function isValidPostalCode(value: string | string[]): string | null {
  const code = String(value).replace(/\s/g, "").toUpperCase();
  if (!/^[A-Z]\d[A-Z]\d[A-Z]\d$/.test(code)) {
    return "Entrez un code postal canadien valide (ex. H2X 1Y4).";
  }
  return null;
}

/* ----------------------------------------------------------
   Steps
   ---------------------------------------------------------- */

export const STEPS: Step[] = [
  {
    id: "postalCode",
    question: "Quel est votre code postal?",
    subtitle:
      "Pour identifier votre zone climatique et les installateurs disponibles.",
    type: "text",
    placeholder: "ex. H2X 1Y4",
    validate: isValidPostalCode,
  },
  {
    id: "propertyType",
    question: "Quel type de propriété?",
    type: "radio",
    options: [
      { value: "maison", label: "Maison unifamiliale" },
      { value: "condo", label: "Condo" },
      { value: "duplex", label: "Duplex" },
      { value: "triplex", label: "Triplex" },
      { value: "autre", label: "Autre" },
    ],
  },
  {
    id: "area",
    question: "Quelle est la superficie approximative?",
    subtitle: "En pieds carrés. Une estimation suffit.",
    type: "radio",
    options: [
      { value: "<1000", label: "Moins de 1 000 pi\u00B2" },
      { value: "1000-1500", label: "1 000 \u00E0 1 500 pi\u00B2" },
      { value: "1500-2000", label: "1 500 \u00E0 2 000 pi\u00B2" },
      { value: "2000-2500", label: "2 000 \u00E0 2 500 pi\u00B2" },
      { value: "2500+", label: "Plus de 2 500 pi\u00B2" },
    ],
  },
  {
    id: "floors",
    question: "Combien d\u2019\u00E9tages?",
    type: "radio",
    options: [
      { value: "1", label: "1 \u00E9tage" },
      { value: "2", label: "2 \u00E9tages" },
      { value: "3", label: "3 \u00E9tages" },
      { value: "4+", label: "4 \u00E9tages ou plus" },
    ],
  },
  {
    id: "currentSystem",
    question: "Quel est votre syst\u00E8me de chauffage actuel?",
    type: "radio",
    options: [
      { value: "electrique", label: "Plinthes \u00E9lectriques" },
      { value: "thermopompe", label: "Thermopompe existante" },
      { value: "fournaise-gaz", label: "Fournaise au gaz" },
      { value: "fournaise-mazout", label: "Fournaise au mazout" },
      { value: "autre", label: "Autre" },
    ],
  },
  {
    id: "heatPumpType",
    question: "Quel type de thermopompe recherchez-vous?",
    subtitle: "Si vous ne savez pas, nous vous guiderons.",
    type: "radio",
    options: [
      { value: "murale", label: "Murale (split)" },
      { value: "centrale", label: "Centrale (ducted)" },
      { value: "multizone", label: "Multizone" },
      { value: "ne-sais-pas", label: "Je ne sais pas" },
    ],
  },
  {
    id: "priority",
    question: "Qu\u2019est-ce qui est le plus important pour vous?",
    subtitle: "S\u00E9lectionnez une ou plusieurs priorit\u00E9s.",
    type: "multi",
    options: [
      { value: "economies", label: "\u00C9conomies d\u2019\u00E9nergie" },
      { value: "grand-froid", label: "Performance par grand froid" },
      { value: "silence", label: "Silence" },
      { value: "prix", label: "Meilleur prix" },
      { value: "qualite", label: "Qualit\u00E9 haut de gamme" },
    ],
  },
  {
    id: "budget",
    question: "Quel est votre budget approximatif?",
    subtitle: "Installation incluse. Une estimation suffit.",
    type: "radio",
    options: [
      { value: "<5000", label: "Moins de 5 000 $" },
      { value: "5000-8000", label: "5 000 $ \u00E0 8 000 $" },
      { value: "8000-12000", label: "8 000 $ \u00E0 12 000 $" },
      { value: "12000-15000", label: "12 000 $ \u00E0 15 000 $" },
      { value: "15000+", label: "Plus de 15 000 $" },
      { value: "ne-sais-pas", label: "Je ne sais pas encore" },
    ],
  },
  {
    id: "financing",
    question: "Avez-vous besoin de financement?",
    type: "radio",
    options: [
      { value: "oui", label: "Oui" },
      { value: "non", label: "Non" },
      { value: "peut-etre", label: "Peut-\u00EAtre" },
    ],
  },
];
