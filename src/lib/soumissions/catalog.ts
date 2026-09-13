/* ==================================================================
   Machine d'une soumission, tirée du catalogue du site :
   capacités, rendement, réfrigérant, bruit, photo, garanties du
   fabricant, et jumelages AHRI de la liste officielle LogisVert
   d'Hydro-Québec (montant exact de chaque jumelage).
   Les données de la machine sont TOUJOURS recalculées ici, côté
   serveur, à partir du modèle et du numéro AHRI choisis : le montant
   LogisVert d'une soumission ne peut pas être saisi à la main.
   ================================================================== */

import { registry } from "@/lib/data/registry";
import { SYSTEM_TYPE_LABELS, type SystemType } from "@/lib/data/types/enums";
import { brandLabel } from "@/lib/gestion/catalog";
import { getLogisVertListInfo } from "@/lib/subsidies/logisvert-meta";
import type { LogisVertOfficialEntry } from "@/lib/subsidies/logisvert-official";
import type { CatalogWarranty, MachineInfo, PairingInfo } from "./types";

const clean = (s: string | undefined | null) => (s ?? "").replace(/[\u0000-\u001f\u007f-\u009f\ufffd]/g, "").trim();
const num = (n: unknown): number | null => (typeof n === "number" && Number.isFinite(n) && n > 0 ? n : null);

function toPairing(e: LogisVertOfficialEntry): PairingInfo {
  return {
    ahri: e.ahri,
    indoorDescription: clean(e.indoorModel),
    logisVertCents: Math.round((e.logisVertDollars || 0) * 100),
    h5Btu: num(e.heatingBtu5F),
    h17Btu: num(e.heatingBtu17F),
    nominalBtu: num(e.nominalBtu),
    coolingBtu: num(e.coolingBtu),
    seer2: num(e.seer2),
    hspf2: num(e.hspf2),
    cop5: num(e.cop5),
    coldClimate: Boolean(e.coldClimate),
  };
}

/** Tous les jumelages officiels d'un modèle du catalogue (index des modèles + configurations AHRI du catalogue). */
export async function pairingsFor(slug: string): Promise<PairingInfo[]> {
  const model = registry.modelBySlug.get(slug);
  if (!model) return [];
  const lv = await import("@/lib/subsidies/logisvert-official");
  const found = new Map<string, LogisVertOfficialEntry>();
  for (const e of lv.getLogisVertVariants(model.modelNumber)) found.set(e.ahri, e);
  for (const c of registry.configurations) {
    if (c.modelId !== model.id) continue;
    const m = c.id.match(/-cfg-(\d{5,})$/);
    if (!m || found.has(m[1])) continue;
    const e = lv.lookupByAHRI(m[1]);
    if (e) found.set(e.ahri, e);
  }
  // Lignes mal découpées du fichier d'Hydro-Québec (guillemet parasite) : écartées.
  return [...found.values()]
    .filter((e) => ![e.brand, e.outdoorModel, e.indoorModel].some((t) => typeof t === "string" && t.includes('"')))
    .map(toPairing)
    .sort((a, b) => b.logisVertCents - a.logisVertCents || (b.h5Btu ?? 0) - (a.h5Btu ?? 0));
}

/** Données de base de la machine (sans choix du propriétaire). */
export function machineBase(slug: string): Omit<MachineInfo, "pairing" | "offList" | "offListIndoor" | "showCatalogWarranties" | "warrantyText" | "explanation"> | null {
  const model = registry.modelBySlug.get(slug);
  if (!model) return null;
  const configs = registry.configurations.filter((c) => c.modelId === model.id);
  const outdoor = registry.outdoorUnits.find((u) => u.id === configs[0]?.outdoorUnitId) ?? registry.outdoorUnits.find((u) => u.id === model.id);
  const indoorIds = new Set(configs.map((c) => c.indoorUnitId).filter(Boolean));
  const indoor = registry.indoorUnits.filter((u) => indoorIds.has(u.id));
  const pick = <T,>(vals: Array<T | null | undefined>): T | null => (vals.find((v) => v !== null && v !== undefined) ?? null) as T | null;
  const warranties: CatalogWarranty[] = registry.warranties
    .filter((w) => w.modelId === model.id && w.provider === "manufacturer" && w.durationYears > 0)
    .map((w) => ({ type: w.type, years: w.durationYears, requiresRegistration: w.requiresRegistration, confidence: w.confidence }));
  const series = registry.series.find((s) => s.id === model.seriesId);
  return {
    modelSlug: model.slug,
    brandId: model.brandId,
    brand: brandLabel(model.brandId),
    name: model.name,
    outdoorModel: clean(model.modelNumber),
    systemType: model.systemType,
    systemTypeLabel: SYSTEM_TYPE_LABELS[model.systemType as SystemType] ?? model.systemType,
    imageUrl: model.imageUrl ?? series?.imageUrl ?? null,
    refrigerant: outdoor?.refrigerant ?? null,
    noiseOutdoorDbA: pick([outdoor?.noiseLevelDbA, ...configs.map((c) => c.noiseOutdoorDbA)]),
    noiseIndoorMinDbA: pick([...configs.map((c) => c.noiseIndoorMinDbA), ...indoor.map((u) => u.noiseMinDbA)]),
    noiseIndoorMaxDbA: pick([...configs.map((c) => c.noiseIndoorMaxDbA), ...indoor.map((u) => u.noiseMaxDbA)]),
    catalogWarranties: warranties,
    listDate: getLogisVertListInfo().listDate,
  };
}

export interface MachineChoice {
  modelSlug: string;
  ahri: string | null;
  offList: boolean;
  offListIndoor: string;
  showCatalogWarranties: boolean;
  warrantyText: string;
  explanation: string;
}

/** Machine complète à partir des choix du propriétaire. Un numéro AHRI absent de la liste du modèle est refusé (null). */
export async function resolveMachine(choice: MachineChoice): Promise<{ ok: true; machine: MachineInfo } | { ok: false; error: string }> {
  const base = machineBase(choice.modelSlug);
  if (!base) return { ok: false, error: "Modèle introuvable dans le catalogue." };
  let pairing: PairingInfo | null = null;
  if (!choice.offList && choice.ahri) {
    pairing = (await pairingsFor(choice.modelSlug)).find((p) => p.ahri === choice.ahri) ?? null;
    if (!pairing) return { ok: false, error: `Le jumelage AHRI ${choice.ahri} n’est pas dans la liste officielle pour ce modèle.` };
  }
  return {
    ok: true,
    machine: {
      ...base,
      pairing,
      offList: choice.offList,
      offListIndoor: choice.offList ? choice.offListIndoor.trim().slice(0, 300) : "",
      showCatalogWarranties: choice.showCatalogWarranties && base.catalogWarranties.length > 0,
      warrantyText: choice.warrantyText.trim().slice(0, 2000),
      explanation: choice.explanation.trim().slice(0, 3000),
    },
  };
}
