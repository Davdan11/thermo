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
  options?: StepOption[] | ((answers: Record<string, any>) => StepOption[]);
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
      "Pour vous situer et trouver les installateurs disponibles. Partout au Québec, nous dimensionnons pour un vrai hiver : votre région ne change pas la machine recommandée.",
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
      { value: "triplex", label: "Triplex / Autre" },
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
    id: "constructionPeriod",
    question: "En quelle p\u00E9riode votre maison a-t-elle \u00E9t\u00E9 construite?",
    subtitle: "L'\u00E2ge du b\u00E2timent est le premier indice de ses pertes de chaleur.",
    type: "radio",
    options: [
      { value: "pre_1960", label: "Avant 1960" },
      { value: "1960_1980", label: "1960 \u00E0 1980" },
      { value: "1981_2000", label: "1981 \u00E0 2000" },
      { value: "2001_2015", label: "2001 \u00E0 2015" },
      { value: "2016_plus", label: "2016 ou plus r\u00E9cent" },
      { value: "ne-sais-pas", label: "Je ne sais pas" },
    ],
  },
  {
    id: "insulation",
    question: "Comment d\u00E9cririez-vous l'isolation?",
    subtitle: "Murs, toit et fen\u00EAtres. Une impression g\u00E9n\u00E9rale suffit.",
    type: "radio",
    options: [
      { value: "poor", label: "Faible (courants d'air, murs froids)" },
      { value: "standard", label: "Normale pour son \u00E2ge" },
      { value: "good", label: "Bonne (r\u00E9nov\u00E9e, fen\u00EAtres r\u00E9centes)" },
      { value: "high_performance", label: "Tr\u00E8s performante (Novoclimat, R-2000)" },
      { value: "ne-sais-pas", label: "Je ne sais pas" },
    ],
  },
  {
    id: "windowShare",
    question: "Quelle est la place des fen\u00EAtres?",
    subtitle: "Les grandes surfaces vitr\u00E9es perdent beaucoup de chaleur l'hiver.",
    type: "radio",
    options: [
      { value: "low", label: "Peu de fen\u00EAtres" },
      { value: "standard", label: "Fenestration normale" },
      { value: "high", label: "Beaucoup de fen\u00EAtres ou grandes baies vitr\u00E9es" },
    ],
  },
  {
    id: "basement",
    question: "Y a-t-il un sous-sol?",
    subtitle: "Un sous-sol chauff\u00E9 s'ajoute \u00E0 la superficie \u00E0 chauffer.",
    type: "radio",
    options: [
      { value: "none", label: "Pas de sous-sol (ou condo)" },
      { value: "unheated", label: "Sous-sol non chauff\u00E9 ou vide sanitaire" },
      { value: "heated", label: "Sous-sol chauff\u00E9 et habit\u00E9" },
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
    options: (answers) => {
      const sys = answers.currentSystem;
      // Si fournaise, on propose centrale (conduits existants)
      if (sys === "fournaise-gaz" || sys === "fournaise-mazout") {
        return [
          { value: "centrale", label: "Centrale (conduits existants)" },
          { value: "ne-sais-pas", label: "Je ne sais pas" },
        ];
      }
      // Si plinthes électriques, on limite à murale / multizone car pas de conduits
      if (sys === "electrique") {
        return [
          { value: "murale", label: "Murale (sans conduits)" },
          { value: "multizone", label: "Multizone (sans conduits)" },
          { value: "ne-sais-pas", label: "Je ne sais pas" },
        ];
      }
      // Par défaut
      return [
        { value: "murale", label: "Murale (split)" },
        { value: "centrale", label: "Centrale (ducted)" },
        { value: "multizone", label: "Multizone" },
        { value: "ne-sais-pas", label: "Je ne sais pas" },
      ];
    },
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
    options: (answers) => {
      const hpType = answers.heatPumpType;
      const isCentral = hpType === "centrale" || answers.currentSystem === "fournaise-gaz" || answers.currentSystem === "fournaise-mazout";
      
      if (isCentral) {
        return [
          { value: "<6000", label: "Moins de 6 000 $" },
          { value: "6000-10000", label: "6 000 $ \u00E0 10 000 $" },
          { value: "10000-15000", label: "10 000 $ \u00E0 15 000 $" },
          { value: "15000+", label: "Plus de 15 000 $" },
          { value: "ne-sais-pas", label: "Je ne sais pas encore" },
        ];
      } else {
        return [
          { value: "<3000", label: "Moins de 3 000 $" },
          { value: "3000-5000", label: "3 000 $ \u00E0 5 000 $" },
          { value: "5000-7000", label: "5 000 $ \u00E0 7 000 $" },
          { value: "7000+", label: "Plus de 7 000 $" },
          { value: "ne-sais-pas", label: "Je ne sais pas encore" },
        ];
      }
    },
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
