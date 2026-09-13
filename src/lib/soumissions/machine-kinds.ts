/* Chantier D — types de machine et capacités de « Trouver la machine » (pur : aussi dans le navigateur). */

export type MachineKind = "murale" | "multizone" | "centrale" | "plafonnier" | "console" | "cassette";
export const MACHINE_KINDS: MachineKind[] = ["murale", "multizone", "centrale", "plafonnier", "console", "cassette"];
export const KIND_LABELS: Record<MachineKind, string> = {
  murale: "Murale",
  multizone: "Multizone",
  centrale: "Centrale",
  plafonnier: "Plafonnier",
  console: "Console",
  cassette: "Cassette",
};

/** Capacités proposées en pastilles (BTU/h nominaux). */
export const CAPACITY_BANDS = [
  { id: "9k", label: "9 000", min: 7_000, max: 10_499 },
  { id: "12k", label: "12 000", min: 10_500, max: 14_999 },
  { id: "18k", label: "18 000", min: 15_000, max: 20_999 },
  { id: "24k", label: "24 000", min: 21_000, max: 29_999 },
  { id: "36k", label: "36 000 et plus", min: 30_000, max: Number.MAX_SAFE_INTEGER },
] as const;
export type CapacityBand = (typeof CAPACITY_BANDS)[number]["id"];

export interface MachineHit {
  slug: string;
  brand: string;
  name: string;
  series: string;
  outdoorModel: string;
  kind: MachineKind;
  kindLabel: string;
  capacityBtu: number | null;
  /** Montant LogisVert le plus élevé parmi les jumelages officiels (cents), 0 si aucun. */
  maxLogisVertCents: number;
  coldClimate: boolean;
  pairings: number;
  imageUrl: string | null;
  /** Recherche par numéro AHRI : ce jumelage est choisi d'office. */
  ahri?: string;
}
