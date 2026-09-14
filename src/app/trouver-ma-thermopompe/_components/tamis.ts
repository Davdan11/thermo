/* ==================================================================
   « Le tamis » — données du haut de l'écran des résultats ThermoMatch.
   Un point par machine réellement évaluée ; ceux hors calibre
   s'éteignent, puis il n'en reste que les retenues.
   Sans React : importable par les tests. Disposition DÉTERMINISTE
   (générateur pseudo-aléatoire à graine fixe) : même rendu d'un
   affichage à l'autre, jamais Math.random.
   Règle : les nombres viennent de summaryContext et des résultats ;
   un nombre absent saute son étape, il n'est jamais inventé.
   ================================================================== */

export const TAMIS_SEED = 0x7a3151;

/** Générateur pseudo-aléatoire (mulberry32) : même graine, même suite. */
export function mulberry32(seed: number): () => number {
  let s = seed | 0;
  return () => {
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const num = (v: unknown): number | null => (typeof v === "number" && Number.isFinite(v) && v >= 0 ? Math.round(v) : null);

export type SieveStage = { key: "evaluated" | "retained" | "kept"; n: number; label: string };

/** Les étapes du tri, avec leurs vrais nombres : une étape dont le nombre manque est sautée. */
export function sieveStages(ctx: { candidatesEvaluated?: unknown; candidatesRetained?: unknown } | null | undefined, kept: number): SieveStage[] {
  const evaluated = num(ctx?.candidatesEvaluated);
  const retained = num(ctx?.candidatesRetained);
  const stages: SieveStage[] = [];
  if (evaluated != null) stages.push({ key: "evaluated", n: evaluated, label: evaluated > 1 ? "machines évaluées" : "machine évaluée" });
  if (retained != null) stages.push({ key: "retained", n: retained, label: "de bon calibre pour votre maison" });
  stages.push({ key: "kept", n: kept, label: kept > 1 ? "retenues pour vous" : "retenue pour vous" });
  return stages;
}

export type SieveLayout = {
  cols: number;
  rows: number;
  /** Position de chaque point dans la zone du champ (0 à 1 sur chaque axe). */
  dots: { x: number; y: number }[];
  /** Points de bon calibre (null : étape sautée). */
  retained: number[] | null;
  /** Points retenus, dans l'ordre des résultats (le premier va vers le meilleur choix, en haut). */
  kept: number[];
};

function shuffle<T>(a: T[], rand: () => number): T[] {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Disposition du tamis : grille dense (légèrement décalée à la main, graine fixe) adaptée au rapport
 * largeur / hauteur de la zone ; ordre d'extinction tiré de la même graine.
 * Le nombre de points est celui de la première étape présente (machines évaluées, sinon de bon calibre,
 * sinon les retenues) ; les retenues sont toujours prises parmi les points de bon calibre.
 */
export function layoutSieve(stages: SieveStage[], aspect: number, seed = TAMIS_SEED): SieveLayout {
  const get = (k: SieveStage["key"]) => stages.find((s) => s.key === k)?.n ?? null;
  const keptN = get("kept") ?? 0;
  const total = Math.max(stages[0]?.n ?? 0, keptN);
  const retainedN = get("retained");
  const nRet = retainedN != null ? Math.min(Math.max(retainedN, keptN), total) : null;
  const nKept = Math.min(keptN, nRet ?? total);

  const a = Math.min(4, Math.max(0.3, Math.round(aspect * 100) / 100));
  const cols = Math.max(1, Math.ceil(Math.sqrt(total * a)));
  const rows = Math.max(1, Math.ceil(total / cols));
  const rand = mulberry32(seed);
  const dots = Array.from({ length: total }, (_, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    return { x: (col + 0.5 + (rand() - 0.5) * 0.36) / cols, y: (row + 0.5 + (rand() - 0.5) * 0.36) / rows };
  });

  const order = shuffle(Array.from({ length: total }, (_, i) => i), rand);
  const retained = nRet != null ? order.slice(0, nRet).sort((x, y) => x - y) : null;
  const pool = retained ? shuffle(retained.slice(), rand) : order;
  // Du haut vers le bas : les points retenus rejoignent les noms sans se croiser.
  const kept = pool.slice(0, nKept).sort((x, y) => dots[x].y - dots[y].y || dots[x].x - dots[y].x);
  return { cols, rows, dots, retained, kept };
}
