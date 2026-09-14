/* ==================================================================
   Température minimale de chauffage d'un modèle du registre (serveur).

   Même règle que ThermoMatch depuis toujours : la plus basse des
   configurations du modèle (catalogue), sinon la ligne de la table des
   relevés pour son numéro et sa marque (resolveMinHeatingTemp).
   Sert au moteur ThermoMatch et au courriel du modèle recommandé ; la
   fiche produit passe par getProductDetail, qui applique le même
   résolveur à sa configuration.
   ================================================================== */
import { registry } from "@/lib/data/registry";
import { resolveMinHeatingTemp } from "./min-temp-brochures";
import type { ResolvedMinHeatingTemp } from "./min-temp-source";

let catalogMinByModel: Map<string, number> | null = null;

/** Plus basse température minimale de chauffage des configurations du modèle (catalogue), ou null. */
function catalogMinFor(modelId: string): number | null {
  if (!catalogMinByModel) {
    catalogMinByModel = new Map();
    for (const c of registry.configurations) {
      const v = (c as { minHeatingTempC?: number | null }).minHeatingTempC;
      if (typeof v !== "number") continue;
      const prev = catalogMinByModel.get(c.modelId);
      if (prev === undefined || v < prev) catalogMinByModel.set(c.modelId, v);
    }
  }
  return catalogMinByModel.get(modelId) ?? null;
}

/** Température minimale de chauffage résolue pour un modèle du registre, ou null (inconnue : rien d'inventé). */
export function minHeatingTempForModel(modelId: string): ResolvedMinHeatingTemp | null {
  const m = registry.modelById.get(modelId);
  const catalogC = catalogMinFor(modelId);
  if (!m) return catalogC === null ? null : resolveMinHeatingTemp({ catalogC });
  return resolveMinHeatingTemp({ catalogC, outdoorModel: m.modelNumber, brand: registry.brandById.get(m.brandId)?.name ?? null });
}
