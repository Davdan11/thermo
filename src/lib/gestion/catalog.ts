/* Marques (avec logos) et recherche de modèles pour l'outil de gestion, à partir du catalogue du site. */

import { registry } from "@/lib/data/registry";
import { brandLogoPath } from "@/lib/data/brand-logos";
import { SYSTEM_TYPE_LABELS, type SystemType } from "@/lib/data/types/enums";
import { foldText } from "./regions";

export interface BrandOption {
  id: string;
  name: string;
  logo: string | null;
}

let brandsCache: BrandOption[] | null = null;

/** Marques actives au Québec, par ordre alphabétique. */
export function brandOptions(): BrandOption[] {
  if (brandsCache) return brandsCache;
  brandsCache = registry.brands
    .filter((b) => b.activeInQuebec)
    .map((b) => ({ id: b.id, name: b.name, logo: brandLogoPath(b.slug) }))
    .sort((a, b) => a.name.localeCompare(b.name, "fr-CA"));
  return brandsCache;
}

export function brandLabel(id: string): string {
  return registry.brandById.get(id)?.name ?? id;
}

export function isKnownBrand(id: string): boolean {
  return registry.brandById.has(id);
}

export interface ModelOption {
  slug: string;
  label: string;
  brandId: string;
  capacityBtu: number | null;
  systemType: SystemType;
  systemTypeLabel: string;
}

function toOption(m: (typeof registry.models)[number]): ModelOption {
  return {
    slug: m.slug,
    label: `${brandLabel(m.brandId)} ${m.name}`,
    brandId: m.brandId,
    capacityBtu: m.nominalCapacityBtu ?? m.coolingCapacityMaxBtu ?? null,
    systemType: m.systemType,
    systemTypeLabel: SYSTEM_TYPE_LABELS[m.systemType],
  };
}

export function modelBySlug(slug: string): ModelOption | null {
  const m = registry.modelBySlug.get(slug);
  return m ? toOption(m) : null;
}

/** Recherche par nom, numéro ou slug ; limitée à une marque si fournie. Les modèles 2026 d'abord. */
export function searchModels(query: string, brandId?: string | null, limit = 12): ModelOption[] {
  const q = foldText(query);
  const compact = q.replace(/\s/g, "");
  if (compact.length < 2) return [];
  const hits: Array<{ m: (typeof registry.models)[number]; rank: number }> = [];
  for (const m of registry.models) {
    if (brandId && m.brandId !== brandId) continue;
    const name = foldText(m.name);
    const num = m.normalizedModelNumber.toLowerCase();
    let rank = -1;
    if (num.startsWith(compact) || m.slug.includes(compact)) rank = 0;
    else if (name.includes(q)) rank = 1;
    else if (num.includes(compact)) rank = 2;
    if (rank < 0) continue;
    hits.push({ m, rank: rank + (m.isActive2026 ? 0 : 3) });
  }
  hits.sort((a, b) => a.rank - b.rank || a.m.name.localeCompare(b.m.name));
  return hits.slice(0, limit).map((h) => toOption(h.m));
}
