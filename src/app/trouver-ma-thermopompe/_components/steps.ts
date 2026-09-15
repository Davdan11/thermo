/* ----------------------------------------------------------
   ThermoMatch — Step definitions

   L'architecture d'abord : les conduits, les espaces à chauffer et
   les emplacements décident du type de thermopompe (le moteur choisit,
   plus le client). Une étape peut dépendre des réponses (`when`) :
   visibleSteps(a) donne le parcours réel, de 14 à 17 questions.
   Une étape ne dépend que des étapes placées avant elle : changer une
   réponse ne change jamais ce qui a déjà été demandé.
   ---------------------------------------------------------- */

import { answersToRequest, architectureInputOf, type QuestionnaireAnswers } from "@/lib/thermomatch/answers";
import { architectureHint } from "@/lib/thermomatch/architecture";
import { DUCTS_OPTIONS, LAYOUT_OPTIONS, PANEL_OPTIONS, PLACEMENT_OPTIONS, ZONES_OPTIONS } from "@/lib/thermomatch/parcours";

export type StepType = "text" | "radio" | "multi";
export type Answers = Record<string, string | string[] | undefined>;

export interface StepOption {
  value: string;
  label: string;
  /** Choix multiple : cette option exclut les autres (« Je ne sais pas »). */
  exclusive?: boolean;
}

export interface Step {
  id: string;
  question: string;
  subtitle?: string;
  type: StepType;
  options?: StepOption[] | ((answers: Answers) => StepOption[]);
  placeholder?: string;
  validate?: (value: string | string[]) => string | null;
  /** Étape posée seulement si… ; ne lit que les réponses des étapes précédentes. */
  when?: (a: Answers) => boolean;
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
   Conditions
   ---------------------------------------------------------- */

const isCondo = (a: Answers) => a.propertyType === "condo";
const hasFurnace = (a: Answers) => a.currentSystem === "fournaise-gaz" || a.currentSystem === "fournaise-mazout";
/** Les conduits : pas en condo, ni avec des plinthes ou une chaudière (aucun conduit d'air à réutiliser). */
const asksDucts = (a: Answers) => !isCondo(a) && a.currentSystem !== "electrique" && a.currentSystem !== "chaudiere";
/** Les espaces à chauffer : sauf quand les conduits décident (complets, ou fournaise dont on ne connaît pas les conduits). */
const asksZones = (a: Answers) => a.ducts !== "complets" && !(hasFurnace(a) && a.ducts === "ne-sais-pas");

/** Architecture pressentie d'après les réponses déjà données (tranches de budget). */
function pressentie(a: Answers) {
  const answers = a as QuestionnaireAnswers;
  return architectureHint(architectureInputOf(answers, answersToRequest(answers).req));
}

const CENTRAL_BUDGETS: StepOption[] = [
  { value: "<6000", label: "Moins de 6 000 $" },
  { value: "6000-10000", label: "6 000 $ à 10 000 $" },
  { value: "10000-15000", label: "10 000 $ à 15 000 $" },
  { value: "15000+", label: "Plus de 15 000 $" },
  { value: "ne-sais-pas", label: "Je ne sais pas encore" },
];

const MURALE_BUDGETS: StepOption[] = [
  { value: "<3000", label: "Moins de 3 000 $" },
  { value: "3000-5000", label: "3 000 $ à 5 000 $" },
  { value: "5000-7000", label: "5 000 $ à 7 000 $" },
  { value: "7000+", label: "Plus de 7 000 $" },
  { value: "ne-sais-pas", label: "Je ne sais pas encore" },
];

/* ----------------------------------------------------------
   Steps
   ---------------------------------------------------------- */

export const STEPS: Step[] = [
  {
    id: "postalCode",
    question: "Quel est votre code postal?",
    subtitle:
      "Pour vous situer et trouver les installateurs de votre secteur. Votre région nous donne aussi son froid de référence : il ne change pas le calcul à −15 °C, point de mesure commun des capacités certifiées, mais il sert à estimer la relève nécessaire les jours les plus froids. L'installateur confirme le tout par un calcul CSA F280.",
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
      { value: "<1000", label: "Moins de 1 000 pi²" },
      { value: "1000-1500", label: "1 000 à 1 500 pi²" },
      { value: "1500-2000", label: "1 500 à 2 000 pi²" },
      { value: "2000-2500", label: "2 000 à 2 500 pi²" },
      { value: "2500+", label: "Plus de 2 500 pi²" },
    ],
  },
  {
    id: "floors",
    question: "Combien d’étages?",
    subtitle: "Sans compter le sous-sol.",
    type: "radio",
    options: [
      { value: "1", label: "1 étage" },
      { value: "2", label: "2 étages" },
      { value: "3", label: "3 étages" },
      { value: "4+", label: "4 étages ou plus" },
    ],
  },
  {
    id: "constructionPeriod",
    question: "En quelle période votre maison a-t-elle été construite?",
    subtitle: "L'âge du bâtiment est le premier indice de ses pertes de chaleur.",
    type: "radio",
    options: [
      { value: "pre_1960", label: "Avant 1960" },
      { value: "1960_1980", label: "1960 à 1980" },
      { value: "1981_2000", label: "1981 à 2000" },
      { value: "2001_2015", label: "2001 à 2015" },
      { value: "2016_plus", label: "2016 ou plus récent" },
      { value: "ne-sais-pas", label: "Je ne sais pas" },
    ],
  },
  {
    id: "insulation",
    question: "Comment décririez-vous l'isolation?",
    subtitle: "Murs, toit et fenêtres. Une impression générale suffit.",
    type: "radio",
    options: [
      { value: "poor", label: "Faible (courants d'air, murs froids)" },
      { value: "standard", label: "Normale pour son âge" },
      { value: "good", label: "Bonne (rénovée, fenêtres récentes)" },
      { value: "high_performance", label: "Très performante (Novoclimat, R-2000)" },
      { value: "ne-sais-pas", label: "Je ne sais pas" },
    ],
  },
  {
    id: "windowShare",
    question: "Quelle est la place des fenêtres?",
    subtitle: "Les grandes surfaces vitrées perdent beaucoup de chaleur l'hiver.",
    type: "radio",
    options: [
      { value: "low", label: "Peu de fenêtres" },
      { value: "standard", label: "Fenestration normale" },
      { value: "high", label: "Beaucoup de fenêtres ou grandes baies vitrées" },
    ],
  },
  {
    id: "basement",
    question: "Y a-t-il un sous-sol?",
    subtitle: "Un sous-sol que la thermopompe doit chauffer s'ajoute à la charge.",
    type: "radio",
    when: (a) => !isCondo(a),
    options: [
      { value: "none", label: "Pas de sous-sol" },
      { value: "unheated", label: "Sous-sol non chauffé ou vide sanitaire" },
      { value: "heated", label: "Chauffé et habité : la thermopompe doit le chauffer" },
      { value: "heated_excluded", label: "Chauffé autrement, à exclure" },
    ],
  },
  {
    id: "currentSystem",
    question: "Quel est votre système de chauffage actuel?",
    type: "radio",
    options: [
      { value: "electrique", label: "Plinthes électriques" },
      { value: "thermopompe", label: "Thermopompe existante" },
      { value: "fournaise-gaz", label: "Fournaise au gaz" },
      { value: "fournaise-mazout", label: "Fournaise au mazout" },
      { value: "chaudiere", label: "Chaudière (radiateurs à eau chaude)" },
      { value: "autre", label: "Autre" },
    ],
  },
  {
    id: "ducts",
    question: "Votre maison a-t-elle des conduits d'air (bouches au plancher ou aux murs)?",
    subtitle: "Ils décident de l'essentiel : une thermopompe centrale s'y branche ; sans eux, la chaleur passe par des têtes murales.",
    type: "radio",
    when: asksDucts,
    options: DUCTS_OPTIONS,
  },
  {
    id: "zonesWanted",
    question: "Quels espaces la thermopompe doit-elle chauffer?",
    subtitle: "Le reste de la maison garde votre chauffage actuel.",
    type: "radio",
    when: asksZones,
    options: ZONES_OPTIONS,
  },
  {
    id: "layout",
    question: "Comment les pièces sont-elles disposées?",
    subtitle: "Une tête murale chauffe bien une aire ouverte, mal une pièce fermée.",
    type: "radio",
    when: (a) => asksZones(a) && a.zonesWanted !== "pieces",
    options: LAYOUT_OPTIONS,
  },
  {
    id: "placements",
    question: "Où les unités peuvent-elles aller?",
    subtitle: "Plusieurs réponses possibles.",
    type: "multi",
    when: asksZones,
    options: PLACEMENT_OPTIONS,
  },
  {
    id: "electricalPanel",
    question: "Intensité du panneau électrique (disjoncteur principal)?",
    subtitle: "Le chiffre est inscrit sur le gros disjoncteur du haut du panneau.",
    type: "radio",
    options: PANEL_OPTIONS,
  },
  {
    id: "priority",
    question: "Qu’est-ce qui est le plus important pour vous?",
    subtitle: "Sélectionnez une ou plusieurs priorités.",
    type: "multi",
    options: [
      { value: "economies", label: "Économies d’énergie" },
      { value: "grand-froid", label: "Performance par grand froid" },
      { value: "silence", label: "Silence" },
      { value: "prix", label: "Meilleur prix" },
      { value: "qualite", label: "Qualité haut de gamme" },
    ],
  },
  {
    id: "budget",
    question: "Quel est votre budget approximatif?",
    subtitle: "Installation incluse. Une estimation suffit.",
    type: "radio",
    // Tranches selon l'architecture pressentie : une centrale ou plusieurs têtes coûtent plus qu'une murale.
    options: (answers) => (pressentie(answers).kind === "single-zone" ? MURALE_BUDGETS : CENTRAL_BUDGETS),
  },
  {
    id: "financing",
    question: "Avez-vous besoin de financement?",
    type: "radio",
    options: [
      { value: "oui", label: "Oui" },
      { value: "non", label: "Non" },
      { value: "peut-etre", label: "Peut-être" },
    ],
  },
];

const STEP_IDS = new Set(STEPS.map((s) => s.id));

/**
 * Le parcours réel pour ces réponses. Chaque condition ne voit que les réponses des étapes visibles
 * placées avant elle : une réponse restée d'une étape désormais masquée ne compte pas.
 */
export function visibleSteps(a: Answers): Step[] {
  const seen: Answers = {};
  const out: Step[] = [];
  for (const s of STEPS) {
    if (s.when && !s.when(seen)) continue;
    out.push(s);
    if (a[s.id] !== undefined) seen[s.id] = a[s.id];
  }
  return out;
}

/** Retire les réponses des étapes masquées ; les autres clés (anciens liens : heatPumpType) restent. */
export function pruneHidden<T extends Answers>(a: T): T {
  const visible = new Set(visibleSteps(a).map((s) => s.id));
  return Object.fromEntries(Object.entries(a).filter(([k, v]) => v !== undefined && (!STEP_IDS.has(k) || visible.has(k)))) as T;
}
