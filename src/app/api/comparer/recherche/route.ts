/* ==================================================================
   GET /api/comparer/recherche?q=…&limit=…
   Recherche du sélecteur du comparateur (/comparer) : la page ne
   sérialise plus les ~3 900 modèles, le sélecteur interroge cette route.
   Réponse : { q, results: SelectableModelData[], total }.
   Entrée bornée : q tronquée à 80 caractères (moins de 2 : aucun
   résultat), limit ramenée entre 1 et 60. Jamais d'erreur 500 pour
   une entrée invalide : réponse vide.
   ================================================================== */
import { NextResponse } from "next/server";
import { COMPARE_SEARCH_MAX, normalizeCompareQuery, searchCompareModels } from "@/lib/data/queries/comparator";

/* Le catalogue ne change qu'au déploiement : cache court chez le visiteur, plus long au proxy. */
const CACHE = "public, max-age=300, s-maxage=3600, stale-while-revalidate=86400";

function parseLimit(raw: string | null): number {
  if (raw === null || !/^\d{1,4}$/.test(raw.trim())) return COMPARE_SEARCH_MAX;
  return Math.min(Math.max(Number(raw.trim()), 1), COMPARE_SEARCH_MAX);
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const q = normalizeCompareQuery(url.searchParams.get("q") ?? "");
  const limit = parseLimit(url.searchParams.get("limit"));
  const { results, total } = searchCompareModels(q, limit);
  return NextResponse.json({ q, results, total }, { headers: { "Cache-Control": CACHE } });
}
