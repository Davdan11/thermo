/* ==================================================================
   Séries « fourre-tout »

   Les modèles importés de LogisVert sans nom de série commercial sont
   regroupés sous « Série non identifiée » (slug « …-serie-non-identifiee »,
   anciennement « Série Standard » / « …-serie-commerciale-a-verifier »).
   Ce n'est pas une série : ne jamais l'afficher comme telle au client.
   ================================================================== */

export function isGenericSeries(name: string | null | undefined, slug?: string | null): boolean {
  if (!name) return true;
  return (
    /s[ée]rie standard/i.test(name) ||
    /s[ée]rie non identifi/i.test(name) ||
    /a-verifier$/.test(slug ?? "") ||
    /serie-placeholder$/.test(slug ?? "") ||
    /serie-non-identifiee(-[a-z-]+)?$/.test(slug ?? "")
  );
}

/** Libellé honnête pour l'affichage : le nom de série, ou rien si la série n'est pas identifiée. */
export function seriesDisplayName(name: string | null | undefined, slug?: string | null): string | null {
  return isGenericSeries(name, slug) ? null : (name ?? null);
}

export const GENERIC_SERIES_LABEL = "Série non identifiée par le fabricant";
