/* ==================================================================
   ThermoMatch v2 — Questionnaire → MatchRequest

   Traduit les réponses brutes du questionnaire (valeurs des options de
   steps.ts) en requête typée pour le moteur. Aucune localisation n'est
   transmise au moteur : le code postal sert à situer le client, pas à
   choisir la machine.
   ================================================================== */

import type { BudgetBracket, HomeType, MatchRequest, Priority } from "./types";

export interface QuestionnaireAnswers {
  postalCode?: string;
  propertyType?: string;
  area?: string;
  floors?: string;
  currentSystem?: string;
  heatPumpType?: string;
  priority?: string[] | string;
  budget?: string;
  financing?: string;
  constructionPeriod?: string;
  insulation?: string;
  windowShare?: string;
  basement?: string;
}

const AREA_FT2: Record<string, number> = {
  "<1000": 800,
  "1000-1500": 1250,
  "1500-2000": 1750,
  "2000-2500": 2250,
  "2500+": 3000,
};

const HOME_TYPE: Record<string, HomeType> = {
  maison: "detached",
  condo: "condo",
  duplex: "duplex",
  triplex: "triplex",
};

const BUDGET: Record<string, BudgetBracket> = {
  "<3000": "low",
  "<6000": "low",
  "3000-5000": "mid",
  "6000-10000": "mid",
  "5000-7000": "high",
  "10000-15000": "high",
  "7000+": "top",
  "15000+": "top",
};

const PRIORITIES: readonly Priority[] = ["economies", "grand-froid", "silence", "prix", "qualite"];

const oneOf = <T extends string>(value: unknown, allowed: readonly T[]): T | undefined =>
  typeof value === "string" && (allowed as readonly string[]).includes(value) ? (value as T) : undefined;

export function answersToRequest(a: QuestionnaireAnswers): { req: MatchRequest; floors: number } {
  const floorsRaw = parseInt(String(a.floors ?? "1"), 10);
  const floors = Number.isFinite(floorsRaw) ? Math.min(Math.max(floorsRaw, 1), 4) : 1;
  const homeType = HOME_TYPE[a.propertyType ?? ""] ?? "detached";

  const hasFurnace = a.currentSystem === "fournaise-gaz" || a.currentSystem === "fournaise-mazout";
  let systemKind: MatchRequest["systemKind"] = "any";
  if (a.heatPumpType === "centrale" || (hasFurnace && a.heatPumpType !== "murale" && a.heatPumpType !== "multizone")) {
    systemKind = "central";
  } else if (a.heatPumpType === "murale" || a.heatPumpType === "multizone") {
    systemKind = "ductless";
  }

  let zones = 1;
  if (homeType === "condo" || systemKind === "central") zones = 1;
  else if (a.heatPumpType === "multizone") zones = Math.max(2, Math.min(floors, 4));
  else if (a.heatPumpType === "ne-sais-pas" && floors >= 2) zones = Math.min(floors, 3);

  const rawPriorities = Array.isArray(a.priority) ? a.priority : a.priority ? [a.priority] : [];
  const priorities = rawPriorities.filter((p): p is Priority => PRIORITIES.includes(p as Priority));

  const req: MatchRequest = {
    heatedAreaFt2: AREA_FT2[a.area ?? ""] ?? 1250,
    homeType,
    floors,
    systemKind,
    zones,
    backupHeatAvailable: hasFurnace,
    priorities,
    budget: BUDGET[a.budget ?? ""] ?? "unknown",
    constructionPeriod: oneOf(a.constructionPeriod, ["pre_1960", "1960_1980", "1981_2000", "2001_2015", "2016_plus"] as const),
    insulation: oneOf(a.insulation, ["poor", "standard", "good", "high_performance"] as const),
    windowShare: oneOf(a.windowShare, ["low", "standard", "high"] as const),
    basement: oneOf(a.basement, ["none", "unheated", "heated"] as const),
  };
  return { req, floors };
}
