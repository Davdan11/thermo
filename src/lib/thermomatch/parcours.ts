/* ==================================================================
   ThermoMatch — le parcours du questionnaire, côté données.

   Libellés des questions d'architecture, partagés entre les étapes
   (steps.ts), le brouillon de projet, la soumission, le CRM et le
   courriel : une seule source. Le parcours essentiel tient en cinq ou
   six écrans (les questions qui vont ensemble sont groupées), puis
   l'affinage facultatif vient après le résultat.
   ================================================================== */

import { installLabel, type ArchitectureKind } from "./architecture";

export const QUESTIONS_LABEL = "cinq ou six questions";
export const QUESTIONS_LABEL_MAJ = "Cinq ou six questions";

export interface ParcoursOption {
  value: string;
  label: string;
  /** Choix multiple : cette option exclut les autres (« Je ne sais pas »). */
  exclusive?: boolean;
}

export const CONSTRUCTION_OPTIONS: ParcoursOption[] = [
  { value: "pre_1960", label: "Avant 1960" },
  { value: "1960_1980", label: "1960 à 1980" },
  { value: "1981_2000", label: "1981 à 2000" },
  { value: "2001_2015", label: "2001 à 2015" },
  { value: "2016_plus", label: "2016 ou plus récent" },
  { value: "ne-sais-pas", label: "Je ne sais pas" },
];

export const INSULATION_OPTIONS: ParcoursOption[] = [
  { value: "poor", label: "Faible (courants d'air, murs froids)" },
  { value: "standard", label: "Normale pour son âge" },
  { value: "good", label: "Bonne (rénovée, fenêtres récentes)" },
  { value: "high_performance", label: "Très performante (Novoclimat, R-2000)" },
  { value: "ne-sais-pas", label: "Je ne sais pas" },
];

export const WINDOW_OPTIONS: ParcoursOption[] = [
  { value: "low", label: "Peu de fenêtres" },
  { value: "standard", label: "Fenestration normale" },
  { value: "high", label: "Beaucoup de fenêtres ou grandes baies vitrées" },
  { value: "ne-sais-pas", label: "Je ne sais pas" },
];

export const BASEMENT_OPTIONS: ParcoursOption[] = [
  { value: "none", label: "Pas de sous-sol" },
  { value: "unheated", label: "Sous-sol non chauffé ou vide sanitaire" },
  { value: "heated", label: "Chauffé et habité : la thermopompe doit le chauffer" },
  { value: "heated_excluded", label: "Chauffé autrement, à exclure" },
  { value: "ne-sais-pas", label: "Je ne sais pas" },
];

export const CURRENT_SYSTEM_OPTIONS: ParcoursOption[] = [
  { value: "electrique", label: "Plinthes électriques" },
  { value: "thermopompe", label: "Thermopompe existante" },
  { value: "fournaise-gaz", label: "Fournaise au gaz" },
  { value: "fournaise-mazout", label: "Fournaise au mazout" },
  { value: "chaudiere", label: "Chaudière (radiateurs à eau chaude)" },
  { value: "autre", label: "Autre" },
];

export const DUCTS_OPTIONS: ParcoursOption[] = [
  { value: "complets", label: "Oui, en bon état, une bouche à chaque étage habité" },
  { value: "partiels", label: "Oui, mais incomplets, petits ou bruyants" },
  { value: "aucun", label: "Non, aucun conduit" },
  { value: "ne-sais-pas", label: "Je ne sais pas" },
];

export const ZONES_OPTIONS: ParcoursOption[] = [
  { value: "principal", label: "L'espace principal (salon, cuisine)" },
  { value: "par-etage", label: "Chaque étage" },
  { value: "pieces", label: "Aussi les chambres, pièce par pièce" },
  { value: "ne-sais-pas", label: "Conseillez-moi" },
];

export const LAYOUT_OPTIONS: ParcoursOption[] = [
  { value: "ouvert", label: "Surtout à aire ouverte" },
  { value: "mixte", label: "Aire ouverte en bas, chambres fermées en haut" },
  { value: "cloisonne", label: "Surtout des pièces fermées" },
];

export const PLACEMENT_OPTIONS: ParcoursOption[] = [
  { value: "mur-haut", label: "Au mur, en hauteur" },
  { value: "plancher", label: "Au plancher (console)" },
  { value: "plafond", label: "Au plafond (grenier ou plafond accessible)" },
  { value: "un-seul-exterieur", label: "Un seul endroit possible dehors" },
  { value: "ne-sais-pas", label: "Je ne sais pas", exclusive: true },
];

export const PANEL_OPTIONS: ParcoursOption[] = [
  { value: "100-moins", label: "100 A ou moins" },
  { value: "125-150", label: "125 à 150 A" },
  { value: "200-plus", label: "200 A ou plus" },
  { value: "ne-sais-pas", label: "Je ne sais pas" },
];

export const labelOf = (options: ParcoursOption[], value: unknown): string | undefined =>
  typeof value === "string" ? options.find((o) => o.value === value)?.label : undefined;

const KINDS: readonly ArchitectureKind[] = ["central", "central-hybrid", "single-zone", "multi-zone", "multi-single"];

/** Une architecture lue d'une source non fiable (stockage du navigateur) : type connu et nombre de têtes plausible, sinon null. */
export function safeArchitecture(v: unknown): { kind: ArchitectureKind; heads: number } | null {
  if (!v || typeof v !== "object") return null;
  const { kind, heads } = v as { kind?: unknown; heads?: unknown };
  if (typeof kind !== "string" || !(KINDS as readonly string[]).includes(kind)) return null;
  const n = typeof heads === "number" && Number.isInteger(heads) && heads >= 1 && heads <= 5 ? heads : 1;
  return { kind: kind as ArchitectureKind, heads: n };
}

/**
 * Lignes du CRM tirées du brouillon ThermoMatch de la session (réponses brutes du navigateur) :
 * seulement des valeurs connues, traduites par nos libellés ; rien de libre n'est recopié.
 */
export function thermoMatchCrmLines(draft: unknown): Array<[string, string]> {
  if (!draft || typeof draft !== "object") return [];
  const d = draft as { answers?: unknown; architecture?: unknown };
  const a = (d.answers && typeof d.answers === "object" ? d.answers : {}) as Record<string, unknown>;
  const lines: Array<[string, string]> = [];
  const one = (label: string, options: ParcoursOption[], v: unknown) => {
    const l = labelOf(options, v);
    if (l) lines.push([label, l]);
  };
  one("Conduits d'air", DUCTS_OPTIONS, a.ducts);
  one("Espaces à chauffer", ZONES_OPTIONS, a.zonesWanted);
  one("Disposition des pièces", LAYOUT_OPTIONS, a.layout);
  const placements = (Array.isArray(a.placements) ? a.placements : []).map((p) => labelOf(PLACEMENT_OPTIONS, p)).filter((l): l is string => Boolean(l));
  if (placements.length) lines.push(["Emplacements possibles", placements.join(", ")]);
  one("Panneau électrique", PANEL_OPTIONS, a.electricalPanel);
  const arch = safeArchitecture(d.architecture);
  if (arch) lines.push(["Configuration ThermoMatch", installLabel(arch.kind, arch.heads)]);
  return lines;
}
