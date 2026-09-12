/* ==================================================================
   Alerte LogisVert — lien avec le catalogue et la liste officielle.

   resolveTarget : vérifie qu'une cible existe (modèle publié d'une
   marque vendue au Québec, ou marque qui a sa page LogisVert) et donne
   son nom et sa page. snapshotFor : montants LogisVert de la liste en
   place pour chaque modèle suivi, avec la même recherche que les fiches
   (numéro de l'unité extérieure, sinon numéro du modèle, sinon
   recherche approchée comme le bloc LogisVert de la fiche produit).

   Charge le registre et la liste Hydro-Québec (35 Mo) : serveur et
   scripts seulement, jamais dans un composant client.
   ================================================================== */
import { registry } from "@/lib/data/registry";
import { getBrandStats } from "@/lib/seo/programmatic";
import { getLogisVertVariants, lookupLogisVertFuzzy } from "@/lib/subsidies/logisvert-official";
import logisVertMetadata from "@/lib/subsidies/logisvert-metadata.json";
import { amountsFromValues, targetKey, type AlertSnapshot, type AlertTarget, type ModelAmounts } from "./logisvert-alerts-core";

export interface TrackedModel {
  id: string;
  slug: string;
  name: string;
}

export interface ResolvedTarget {
  /** Cible normalisée (identifiant de modèle du registre, slug de marque). */
  target: AlertTarget;
  key: string;
  /** « Daikin FTX12AXVJU » pour un modèle, « Daikin » pour une marque. */
  label: string;
  path: string;
  brandName: string;
  models: TrackedModel[];
}

let outdoorByModelId: Map<string, string> | null = null;

/** Numéro de l'unité extérieure du modèle : la liste LogisVert est indexée par unité extérieure. */
function outdoorNumber(modelId: string): string | undefined {
  if (!outdoorByModelId) {
    const byId = new Map(registry.outdoorUnits.map((u) => [u.id, u.modelNumber]));
    outdoorByModelId = new Map();
    for (const c of registry.configurations) {
      const ou = byId.get(c.outdoorUnitId);
      if (ou && !outdoorByModelId.has(c.modelId)) outdoorByModelId.set(c.modelId, ou);
    }
  }
  return outdoorByModelId.get(modelId);
}

export function amountsForModel(modelId: string): ModelAmounts {
  const m = registry.modelById.get(modelId);
  if (!m) return amountsFromValues([]);
  const outdoor = outdoorNumber(m.id) ?? m.modelNumber;
  let variants = getLogisVertVariants(outdoor);
  if (variants.length === 0 && outdoor !== m.modelNumber) variants = getLogisVertVariants(m.modelNumber);
  if (variants.length > 0) return amountsFromValues(variants.map((v) => v.logisVertDollars));
  const brand = registry.brandById.get(m.brandId)?.name;
  const fuzzy = lookupLogisVertFuzzy(outdoor, brand) ?? (outdoor !== m.modelNumber ? lookupLogisVertFuzzy(m.modelNumber, brand) : null);
  return amountsFromValues(fuzzy ? [fuzzy.logisVertDollars] : []);
}

export function resolveTarget(t: AlertTarget): ResolvedTarget | null {
  if (t.kind === "model") {
    const m = registry.modelById.get(t.modelId) ?? registry.modelBySlug.get(t.modelId);
    if (!m || m.status !== "published") return null;
    const brand = registry.brandById.get(m.brandId);
    if (!brand || !brand.activeInQuebec) return null;
    const label = m.name.toLowerCase().startsWith(brand.name.toLowerCase()) ? m.name : `${brand.name} ${m.name}`;
    const target: AlertTarget = { kind: "model", modelId: m.id };
    return { target, key: targetKey(target), label, path: `/produit/${m.slug}`, brandName: brand.name, models: [{ id: m.id, slug: m.slug, name: label }] };
  }
  const stats = getBrandStats(t.brandSlug);
  if (!stats || stats.models.length === 0) return null;
  const target: AlertTarget = { kind: "brand", brandSlug: stats.slug };
  return {
    target,
    key: targetKey(target),
    label: stats.name,
    path: `/subventions/logisvert/${stats.slug}`,
    brandName: stats.name,
    models: stats.models.map((m) => ({ id: m.id, slug: m.slug, name: m.name })),
  };
}

export function currentListDate(): string | null {
  return (logisVertMetadata as { updatedAt?: string }).updatedAt ?? null;
}

export function snapshotFor(r: ResolvedTarget): AlertSnapshot {
  const models: Record<string, ModelAmounts> = {};
  for (const m of r.models) models[m.id] = amountsForModel(m.id);
  return { listUpdatedAt: currentListDate(), models };
}
