/* Chiffres du catalogue communs aux pages « municipalité » (liste LogisVert d'Hydro-Québec). */
import { getAllBrandStats, getCanonicalModels, getRanking, type SeoModel } from "./programmatic";
import { RANKING_LIMIT, type CatalogueFacts, type RankingSlug } from "./municipal-content";

let facts: CatalogueFacts | null = null;

export function catalogueFacts(): CatalogueFacts {
  if (facts) return facts;
  const certified = getCanonicalModels().filter((m) => m.h5Btu !== null);
  const brands = getAllBrandStats();
  facts = {
    coldCount: brands.reduce((a, b) => a + b.coldClimateCount, 0),
    holdsFullCount: certified.filter((m) => (m.h5Btu ?? 0) >= m.nominalBtu).length,
    maxLogisVert: brands.reduce((a, b) => Math.max(a, b.maxLogisVert), 0),
  };
  return facts;
}

export function rankingFor(slug: RankingSlug, limit = RANKING_LIMIT) {
  return getRanking(slug, limit)!;
}

/** Texte visible du tableau de classement (vérification d'unicité ; `limit` lignes, 8 sur une ville historique). */
export function rankingText(slug: RankingSlug, limit = RANKING_LIMIT): string {
  const r = rankingFor(slug, limit);
  return r.models
    .map((m: SeoModel, i) => `${String(i + 1).padStart(2, "0")} ${m.name} ${m.brand} ${m.systemTypeLabel} ${m.nominalBtu} ${m.h5Btu ?? "—"} ${m.hspf2 ?? "—"} ${m.seer2 ?? "—"} ${m.logisVertDollars} ${r.def.value(m)}`)
    .join(" ");
}
