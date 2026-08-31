import type { MatchInput } from "./types.ts";

const allowed = <T extends string>(value: unknown, values: readonly T[], label: string): T => {
  if (!values.includes(value as T)) throw new Error(`${label} invalide.`);
  return value as T;
};

const finiteNumber = (value: unknown, label: string): number => {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) throw new Error(`${label} invalide.`);
  return parsed;
};

export function validateMatchInput(input: unknown): MatchInput {
  if (!input || typeof input !== "object" || Array.isArray(input)) throw new Error("Questionnaire absent.");
  const value = input as Record<string, unknown>;
  if (typeof value.backupHeatAvailable !== "boolean") throw new Error("backupHeatAvailable invalide.");
  const designHeatLoadBtuH = value.designHeatLoadBtuH === undefined
    ? undefined
    : finiteNumber(value.designHeatLoadBtuH, "designHeatLoadBtuH");

  return {
    selectionYear: finiteNumber(value.selectionYear, "selectionYear"),
    heatedAreaFt2: finiteNumber(value.heatedAreaFt2, "heatedAreaFt2"),
    climateZone: allowed(value.climateZone, ["6", "7A", "7B", "8"] as const, "climateZone"),
    designHeatLoadBtuH,
    homeType: allowed(value.homeType, ["detached", "semi_detached", "townhouse", "condo", "duplex", "triplex", "other"] as const, "homeType"),
    constructionPeriod: allowed(value.constructionPeriod, ["pre_1960", "1960_1980", "1981_2000", "2001_2015", "2016_plus"] as const, "constructionPeriod"),
    insulation: allowed(value.insulation, ["poor", "standard", "good", "high_performance"] as const, "insulation"),
    distribution: allowed(value.distribution, ["ducts", "no_ducts", "partial"] as const, "distribution"),
    requestedZones: finiteNumber(value.requestedZones, "requestedZones"),
    goal: allowed(value.goal, ["savings", "comfort", "electrification", "balanced"] as const, "goal"),
    backupHeatAvailable: value.backupHeatAvailable,
  };
}
