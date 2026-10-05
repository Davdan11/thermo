/* ------------------------------------------------------------------
   Partage des textes identiques d'un gros JSON lu au démarrage.

   JSON.parse crée une chaîne par valeur, même quand la même marque, le
   même numéro de modèle ou la même source reviennent des centaines de
   milliers de fois. Remplacer chaque doublon par une seule instance ne
   change aucune valeur, mais réduit fortement la mémoire du serveur
   (mesuré le 17 septembre 2026 : liste LogisVert 250 → 92 Mo, catalogue
   169 → 137 Mo). Le serveur du VPS a 8 Go partagés entre plusieurs sites.
   ------------------------------------------------------------------ */

/** Remplace, en place, les chaînes identiques d'un objet JSON par une seule instance. Retourne l'objet. */
export function partagerTextes<T>(racine: T): T {
  const pool = new Map<string, string>();
  const unique = (s: string) => {
    const v = pool.get(s);
    if (v !== undefined) return v;
    pool.set(s, s);
    return s;
  };
  const pile: unknown[] = [racine];
  while (pile.length) {
    const o = pile.pop();
    if (Array.isArray(o)) {
      for (let i = 0; i < o.length; i++) {
        const v = o[i];
        if (typeof v === "string") o[i] = unique(v);
        else if (v && typeof v === "object") pile.push(v);
      }
    } else if (o && typeof o === "object") {
      const rec = o as Record<string, unknown>;
      for (const k in rec) {
        const v = rec[k];
        if (typeof v === "string") rec[k] = unique(v);
        else if (v && typeof v === "object") pile.push(v);
      }
    }
  }
  return racine;
}
