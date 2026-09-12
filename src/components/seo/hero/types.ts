/* ==================================================================
   Motifs des héros SEO : chaque type de page passe SON motif et les
   données qu'elle a déjà calculées (rien n'est recalculé ici). Tout
   est sérialisable : les motifs sont des composants client.
   ================================================================== */

export type GuideVariant = "murale" | "centrale" | "multizone" | "froid" | "efficacite" | "catalogue" | "installation" | "remplacement";

export type VsBrand = { name: string; href: string; logo: string | null };
export type VsRow = { label: string; a: number | null; b: number | null; decimals?: number; suffix?: string; /** true : la valeur la plus haute est un avantage (surlignée). */ better?: boolean };
export type PodiumItem = { rank: number; brand: string; name: string; value: string; href: string; image: string | null; logo: string | null };
export type TickerRow = { label: string; sub?: string; amount: number };

export type SeoMotif =
  /** Pages juridiques : sommaire typographique, lent. */
  | { kind: "legal"; heading: string; note?: string; items: Array<{ id: string; label: string }> }
  /** Parcours en étapes qui se tracent. */
  | { kind: "explainer"; heading: string; steps: Array<{ n: string; label: string; href: string }> }
  /** Face-à-face de deux marques. */
  | { kind: "compare"; a: VsBrand; b: VsBrand; rows: VsRow[]; shared?: number }
  /** Gamme d'une marque pour un type d'appareil. */
  | { kind: "brand"; brand: string; logo: string | null; typeLabel: string; photo: { src: string; alt: string; caption: string; btu: number } | null; offered: number[] }
  /** Podium d'un classement. */
  | { kind: "podium"; metricLabel: string; items: PodiumItem[] }
  /** Tableau des meneurs de chaque classement. */
  | { kind: "leaders"; rows: Array<{ label: string; href: string; leader: string; value: string }> }
  /** Montant LogisVert qui défile. */
  | { kind: "subsidy"; label: string; amount: number; min?: number; updated?: string | null; tickerLabel: string; ticker: TickerRow[] }
  /** Échelle de froid d'une ville (normales climatiques). */
  | { kind: "city"; city: string; designTempC: number; janMeanC: number | null; janMinC: number | null; extremeMinC: number | null; extremeMinYear: number | null; source: string | null }
  /** Répartition des villes par température de conception. */
  | { kind: "cities"; cities: Array<{ name: string; designTempC: number }> }
  /** Classe de capacité : nominal contre certifié à -15 °C. */
  | { kind: "capacity"; btu: number; h5Min: number | null; h5Max: number | null; certified: number; classes: number[]; areaMin: number; areaMax: number }
  /** Guides éditoriaux : schéma de principe tracé au trait. */
  | { kind: "guide"; variant: GuideVariant };
