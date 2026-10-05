/* ----------------------------------------------------------
   ThermoMatch — Questions et écrans

   Deux temps :
   1. « Essentiel » — seulement ce qui change la recommandation
      (superficie, année, isolation, système actuel, conduits, espaces
      à chauffer, région, priorités, budget). Les questions qui vont
      ensemble partagent un écran : cinq ou six écrans, puis le résultat.
   2. « Affinage » — posé APRÈS le résultat : ce qui sert surtout à la
      faisabilité et au devis (fenestration, emplacements des unités,
      panneau électrique, financement). Tant qu'une réponse manque, la
      fiche du résultat dit l'hypothèse prise (hypotheses.ts).

   L'architecture d'abord : les conduits, les espaces à chauffer et les
   emplacements décident du type de thermopompe (le moteur choisit, plus
   le client). Une question peut dépendre des réponses (`when`) ; elle ne
   dépend que des questions placées avant elle, si bien que changer une
   réponse ne change jamais ce qui a déjà été demandé.
   ---------------------------------------------------------- */

import { answersToRequest, architectureInputOf, type QuestionnaireAnswers } from "@/lib/thermomatch/answers";
import { architectureHint } from "@/lib/thermomatch/architecture";
import {
  BASEMENT_OPTIONS,
  CONSTRUCTION_OPTIONS,
  CURRENT_SYSTEM_OPTIONS,
  DUCTS_OPTIONS,
  INSULATION_OPTIONS,
  LAYOUT_OPTIONS,
  PANEL_OPTIONS,
  PLACEMENT_OPTIONS,
  WINDOW_OPTIONS,
  ZONES_OPTIONS,
} from "@/lib/thermomatch/parcours";

export type StepType = "text" | "radio" | "multi";
export type Answers = Record<string, string | string[] | undefined>;
/** « essentiel » : avant le résultat ; « affinage » : après, facultatif. */
export type StepPhase = "essentiel" | "affinage";

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
  /** Question posée seulement si… ; ne lit que les réponses des questions précédentes. */
  when?: (a: Answers) => boolean;
  /** Écran qui la porte : les questions d'un même écran se répondent ensemble. */
  screen: string;
  phase: StepPhase;
  /** On peut continuer sans y répondre : l'hypothèse prise est dite sur la fiche du résultat. */
  optional?: boolean;
}

export interface ScreenMeta {
  id: string;
  /** Titre de l'écran, écrit à la plume (une question peut le compléter). */
  title: string;
  subtitle?: string;
  phase: StepPhase;
  /** Photo d'ambiance de l'écran. */
  photo?: string;
}

export interface Screen extends ScreenMeta {
  steps: Step[];
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
/**
 * Les conduits : une fois le système actuel connu, et seulement s'il peut y en avoir à réutiliser
 * (pas en condo, ni avec des plinthes ou une chaudière).
 */
const asksDucts = (a: Answers) => a.currentSystem !== undefined && !isCondo(a) && a.currentSystem !== "electrique" && a.currentSystem !== "chaudiere";
/** Les espaces à chauffer : sauf quand les conduits décident (complets, ou fournaise dont on ne connaît pas les conduits). */
const asksZones = (a: Answers) => a.ducts !== "complets" && !(hasFurnace(a) && (a.ducts === undefined || a.ducts === "ne-sais-pas"));
/** La disposition ne sert qu'à conseiller un nombre de têtes quand le client ne l'a pas choisi (architecture.ts, headsFor). */
const asksLayout = (a: Answers) => asksZones(a) && a.zonesWanted === "ne-sais-pas";

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
   Écrans
   ---------------------------------------------------------- */

export const SCREENS: ScreenMeta[] = [
  {
    id: "lieu",
    title: "Où se trouve la maison?",
    subtitle:
      "Pour vous situer et trouver les installateurs de votre secteur. Votre région nous donne aussi son froid de référence : il ne change pas le calcul à −15 °C, point de mesure commun des capacités certifiées, mais il sert à estimer la relève nécessaire les jours les plus froids. L'installateur confirme le tout par un calcul CSA F280.",
    phase: "essentiel",
    photo: "/images/thermomatch/postalCode.webp",
  },
  {
    id: "maison",
    title: "Parlez-nous de la maison",
    subtitle: "Ces quatre réponses donnent la charge de chauffage : c'est le cœur du calcul.",
    phase: "essentiel",
    photo: "/images/thermomatch/area.webp",
  },
  {
    id: "enveloppe",
    title: "Ce qui garde la chaleur",
    subtitle: "L'âge du bâtiment et l'isolation ajustent la charge. « Je ne sais pas » est une réponse acceptable : nous prenons alors une valeur moyenne, dite sur le résultat.",
    phase: "essentiel",
    photo: "/images/thermomatch/floors.webp",
  },
  {
    id: "chauffage",
    title: "Votre chauffage actuel",
    subtitle: "Ce qui chauffe aujourd'hui, et par où la chaleur circule. C'est ce qui décide du type de thermopompe.",
    phase: "essentiel",
    photo: "/images/thermomatch/currentSystem.webp",
  },
  {
    id: "espaces",
    title: "Ce que la thermopompe doit chauffer",
    subtitle: "Le reste de la maison garde votre chauffage actuel.",
    phase: "essentiel",
    photo: "/images/thermomatch/heatPumpType.webp",
  },
  {
    id: "attentes",
    title: "Ce qui compte pour vous",
    subtitle: "Vos priorités et votre budget ajustent le poids des critères, jamais les chiffres certifiés.",
    phase: "essentiel",
    photo: "/images/thermomatch/priority.webp",
  },
  {
    id: "affinage",
    title: "Affiner la recommandation",
    subtitle: "Deux questions de faisabilité et une pour la soumission. Chacune remplace une hypothèse par votre réponse.",
    phase: "affinage",
  },
];

const SCREEN_ORDER = new Map(SCREENS.map((s, i) => [s.id, i]));

/* ----------------------------------------------------------
   Questions
   ---------------------------------------------------------- */

export const STEPS: Step[] = [
  {
    id: "postalCode",
    screen: "lieu",
    phase: "essentiel",
    question: "Quel est votre code postal?",
    type: "text",
    placeholder: "ex. H2X 1Y4",
    validate: isValidPostalCode,
  },

  /* --- L'enveloppe qui donne la charge --- */
  {
    id: "propertyType",
    screen: "maison",
    phase: "essentiel",
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
    screen: "maison",
    phase: "essentiel",
    question: "Quelle est la superficie approximative?",
    subtitle: "En pieds carrés, sans le sous-sol. Une estimation suffit.",
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
    screen: "maison",
    phase: "essentiel",
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
    id: "basement",
    screen: "maison",
    phase: "essentiel",
    question: "Y a-t-il un sous-sol?",
    subtitle: "Un sous-sol que la thermopompe doit chauffer s'ajoute à la charge.",
    type: "radio",
    when: (a) => !isCondo(a),
    options: BASEMENT_OPTIONS,
  },

  {
    id: "constructionPeriod",
    screen: "enveloppe",
    phase: "essentiel",
    question: "En quelle période a-t-elle été construite?",
    subtitle: "L'âge du bâtiment est le premier indice de ses pertes de chaleur.",
    type: "radio",
    options: CONSTRUCTION_OPTIONS,
  },
  {
    id: "insulation",
    screen: "enveloppe",
    phase: "essentiel",
    question: "Comment décririez-vous l'isolation?",
    subtitle: "Murs et toit. Une impression générale suffit.",
    type: "radio",
    options: INSULATION_OPTIONS,
  },
  {
    // Mesuré : faire varier cette réponse change les trois machines retenues dans 98 % des maisons
    // simulées (facteur 0,95 à 1,10 sur la charge). Elle reste donc dans le parcours essentiel.
    id: "windowShare",
    screen: "enveloppe",
    phase: "essentiel",
    question: "Quelle est la place des fenêtres?",
    subtitle: "Les grandes surfaces vitrées perdent beaucoup de chaleur l'hiver.",
    type: "radio",
    options: WINDOW_OPTIONS,
  },

  /* --- Ce qui décide de l'architecture --- */
  {
    id: "currentSystem",
    screen: "chauffage",
    phase: "essentiel",
    question: "Quel est votre système de chauffage actuel?",
    type: "radio",
    options: CURRENT_SYSTEM_OPTIONS,
  },
  {
    id: "ducts",
    screen: "chauffage",
    phase: "essentiel",
    question: "Y a-t-il des conduits d'air (bouches au plancher ou aux murs)?",
    subtitle: "Ils décident de l'essentiel : une thermopompe centrale s'y branche ; sans eux, la chaleur passe par des têtes murales.",
    type: "radio",
    when: asksDucts,
    options: DUCTS_OPTIONS,
  },

  {
    id: "zonesWanted",
    screen: "espaces",
    phase: "essentiel",
    question: "Quels espaces la thermopompe doit-elle chauffer?",
    type: "radio",
    when: asksZones,
    options: ZONES_OPTIONS,
  },
  {
    id: "layout",
    screen: "espaces",
    phase: "essentiel",
    question: "Comment les pièces sont-elles disposées?",
    subtitle: "Une tête murale chauffe bien une aire ouverte, mal une pièce fermée : c'est ce qui nous fait conseiller une tête de plus ou non.",
    type: "radio",
    when: asksLayout,
    options: LAYOUT_OPTIONS,
  },

  /* --- Vos attentes --- */
  {
    id: "priority",
    screen: "attentes",
    phase: "essentiel",
    question: "Qu’est-ce qui est le plus important pour vous?",
    subtitle: "Une ou plusieurs priorités.",
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
    screen: "attentes",
    phase: "essentiel",
    question: "Quel est votre budget approximatif?",
    subtitle: "Installation incluse. Une estimation suffit.",
    type: "radio",
    // Tranches selon l'architecture pressentie : une centrale ou plusieurs têtes coûtent plus qu'une murale.
    options: (answers) => (pressentie(answers).kind === "single-zone" ? MURALE_BUDGETS : CENTRAL_BUDGETS),
  },

  /* --- Affinage : après le résultat ---
     Mesuré sur 60 maisons simulées, en faisant varier chaque réponse toutes autres égales :
     les emplacements changent les trois machines dans 15 % des cas (par « un seul endroit possible
     dehors », qui impose une multizone) ; le panneau électrique, dans 0 % — il ne change que les
     points à vérifier ; le financement, dans 0 % — il ne sert qu'à la soumission. */
  {
    id: "placements",
    screen: "affinage",
    phase: "affinage",
    optional: true,
    question: "Où les unités peuvent-elles aller?",
    subtitle: "Plusieurs réponses possibles. Un seul endroit possible dehors change la configuration retenue.",
    type: "multi",
    when: asksZones,
    options: PLACEMENT_OPTIONS,
  },
  {
    id: "electricalPanel",
    screen: "affinage",
    phase: "affinage",
    optional: true,
    question: "Intensité du panneau électrique?",
    subtitle: "Le chiffre est inscrit sur le gros disjoncteur du haut du panneau. Il sert à savoir si un électricien devra faire un calcul de charge avant l'installation.",
    type: "radio",
    options: PANEL_OPTIONS,
  },
  {
    id: "financing",
    screen: "affinage",
    phase: "affinage",
    optional: true,
    question: "Avez-vous besoin de financement?",
    subtitle: "Pour la soumission seulement : aucun effet sur la recommandation.",
    type: "radio",
    options: [
      { value: "oui", label: "Oui" },
      { value: "non", label: "Non" },
      { value: "peut-etre", label: "Peut-être" },
    ],
  },
];

const STEP_IDS = new Set(STEPS.map((s) => s.id));

/** Ordre stable : l'ordre des écrans, puis l'ordre de déclaration dans chaque écran. */
const ORDERED = [...STEPS].sort((a, b) => (SCREEN_ORDER.get(a.screen) ?? 99) - (SCREEN_ORDER.get(b.screen) ?? 99) || STEPS.indexOf(a) - STEPS.indexOf(b));

/**
 * Le parcours réel pour ces réponses, les deux temps confondus. Chaque condition ne voit que les
 * réponses des questions visibles placées avant elle : une réponse restée d'une question désormais
 * masquée ne compte pas.
 */
export function visibleSteps(a: Answers): Step[] {
  const seen: Answers = {};
  const out: Step[] = [];
  for (const s of ORDERED) {
    if (s.when && !s.when(seen)) continue;
    out.push(s);
    if (a[s.id] !== undefined) seen[s.id] = a[s.id];
  }
  return out;
}

/** Les écrans réellement posés pour ces réponses ; un écran sans question visible disparaît. */
export function visibleScreens(a: Answers, phase?: StepPhase): Screen[] {
  const steps = visibleSteps(a);
  return SCREENS.filter((s) => phase === undefined || s.phase === phase)
    .map((meta) => ({ ...meta, steps: steps.filter((s) => s.screen === meta.id) }))
    .filter((s) => s.steps.length > 0);
}

/** Les questions d'affinage encore posables (après le résultat). */
export function affinageSteps(a: Answers): Step[] {
  return visibleSteps(a).filter((s) => s.phase === "affinage");
}

/** Toutes les questions essentielles visibles ont une réponse : le résultat peut être calculé. */
export function essentielComplete(a: Answers): boolean {
  return visibleSteps(a)
    .filter((s) => s.phase === "essentiel" && !s.optional)
    .every((s) => answered(a[s.id]));
}

export const answered = (v: string | string[] | undefined): boolean => (Array.isArray(v) ? v.length > 0 : typeof v === "string" && v.trim() !== "");

/** Retire les réponses des questions masquées ; les autres clés (anciens liens : heatPumpType) restent. */
export function pruneHidden<T extends Answers>(a: T): T {
  const visible = new Set(visibleSteps(a).map((s) => s.id));
  return Object.fromEntries(Object.entries(a).filter(([k, v]) => v !== undefined && (!STEP_IDS.has(k) || visible.has(k)))) as T;
}
