import { PRICE_GRID, TIER_LABEL, type PriceCell } from "@/lib/prices/grille-installee";

/* ------------------------------------------------------------------
   Séries de fourchettes pour les héros /prix et /prix/[slug].
   Uniquement les cases publiées dans la grille (médianes des sources) :
   rien n'est recalculé ni inventé ici.
   ------------------------------------------------------------------ */

export type RangeRow = { label: string; min: number; max: number; note: string };
export type RangeSet = { key: string; tab: string; sub: string; rows: RangeRow[] };

const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
const note = (c: PriceCell) => (c.basis === "publie" ? `${c.sources} source${c.sources > 1 ? "s" : ""}` : "dérivé");
const btu = (n: number) => `${(n / 1000).toFixed(0)} 000 BTU`;
const tier = (c: PriceCell) => cap(TIER_LABEL[c.tier].replace("gamme ", ""));

/** Murale 12 000 BTU par gamme de marque (économique, intermédiaire, premium ; « toutes gammes » en option). */
export function murale12Rows(withAll = false): RangeRow[] {
  return PRICE_GRID.filter((c) => c.kind === "murale" && c.btu === 12000 && (withAll || c.tier !== "toutes")).map((c) => ({ label: tier(c), min: c.min, max: c.max, note: note(c) }));
}

/** Les trois tableaux du héros /prix : murale, multizone, centrale. */
export function prixBoardSets(): RangeSet[] {
  const multi = PRICE_GRID.filter((c) => c.kind === "multizone" && c.tier === "premium").sort((a, b) => (a.zones ?? 0) - (b.zones ?? 0));
  const centrale = PRICE_GRID.filter((c) => c.kind === "centrale" && c.tier === "toutes" && [24000, 36000, 48000, 60000].includes(c.btu ?? 0)).sort((a, b) => (a.btu ?? 0) - (b.btu ?? 0));
  return [
    { key: "murale", tab: "Murale 12 000 BTU", sub: "Selon la gamme de marque, installation standard.", rows: murale12Rows(true) },
    { key: "multizone", tab: "Multizone", sub: "Gamme premium, selon le nombre de zones.", rows: multi.map((c) => ({ label: `${c.zones} zones`, min: c.min, max: c.max, note: note(c) })) },
    { key: "centrale", tab: "Centrale", sub: "Ajoutée sur des conduits existants, toutes gammes.", rows: centrale.map((c) => ({ label: btu(c.btu ?? 0), min: c.min, max: c.max, note: note(c) })) },
  ].filter((s) => s.rows.length > 0);
}

/** « 2026-09-10 » → « 10 septembre 2026 ». */
export function frDate(iso: string): string {
  const d = new Date(`${iso}T12:00:00Z`);
  return Number.isNaN(d.getTime()) ? iso : d.toLocaleDateString("fr-CA", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
}
