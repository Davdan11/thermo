/* ==================================================================
   Chiffres des pages d'atterrissage /thermopompes/[slug]

   Les textes rédigés (src/data/seo/thermopompes.json) ne contiennent
   aucun chiffre en dur : ils utilisent des jetons {{…}} résolus ici, au
   rendu, à partir des modules de données du site (grille des prix
   publiés, liste LogisVert d'Hydro-Québec, catalogue, villes). Un jeton
   inconnu ou sans donnée publiée fait échouer le rendu plutôt que
   d'afficher un chiffre faux.

   Jetons :
     {{prix:<murale|centrale>:<btu>:<gamme>}}  « 2 500 $ et 3 500 $ »
     {{prix:multizone:<zones>:<gamme>}}
     {{prix:date}}                             date de consultation des prix
     {{lv:max}} {{lv:median}} {{lv:count}} {{lv:date}}   liste LogisVert
     {{lvcap:<btu>}}                           LogisVert maximal d'un calibre
     {{cat:machines}} {{cat:murales}} {{cat:centrales}} {{cat:eligible}} {{cat:brands}}
     {{villes:count}}
   ================================================================== */

import { PRICE_GRID, PRICE_GRID_CONSULTED_AT, TIER_LABEL, type PriceCell, type PriceKind, type PriceTier } from "@/lib/prices/grille-installee";
import { getLogisVertStats } from "@/lib/subsidies/logisvert-official";
import { getCanonicalModels, getCapacityClasses } from "@/lib/seo/programmatic";
import { getActiveBrandCount, getEligibleModelCount } from "@/lib/data/queries/stats";
import { getCities } from "@/lib/seo/cities";

const NB = " ";
/* Groupes de milliers à l'espace insécable, sans dépendre de l'ICU du serveur (comme Counter). */
const fr = (n: number) => {
  const [int, dec] = String(n).split(".");
  return `${int.replace(/\B(?=(\d{3})+(?!\d))/g, NB)}${dec ? `,${dec}` : ""}`;
};
/** Montant arrondi aux 50 $ comme sur /prix. */
const price = (n: number) => `${fr(Math.round(n / 50) * 50)}${NB}$`;
const dollars = (n: number) => `${fr(n)}${NB}$`;

const MONTHS = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
export function frDateIso(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d}${d === 1 ? "er" : ""} ${MONTHS[m - 1]} ${y}`;
}

/* ------------------------------------------------------------------
   Prix publiés
   ------------------------------------------------------------------ */

export interface PriceSelector {
  kind: PriceKind;
  btu?: number;
  zones?: number;
  tier: PriceTier;
}

/** Case publiée de la grille (jamais une case dérivée) ; null si elle n'existe pas. */
export function publishedCell(sel: PriceSelector): PriceCell | null {
  return (
    PRICE_GRID.find(
      (c) =>
        c.basis === "publie" &&
        c.kind === sel.kind &&
        c.tier === sel.tier &&
        (sel.kind === "multizone" ? c.zones === sel.zones : c.btu === sel.btu),
    ) ?? null
  );
}

function cellLabel(c: PriceCell): string {
  if (c.kind === "multizone") return `Multizone, ${c.zones} zones`;
  if (c.kind === "centrale") return `Centrale ${fr(c.btu ?? 0)} BTU (${fr((c.btu ?? 0) / 12000)} t)`;
  return `Murale ${fr(c.btu ?? 0)} BTU`;
}

export type PriceRow = { key: string; kind: PriceKind; label: string; tier: string; range: string; sources: string };

/** Lignes du tableau des prix d'une page : cases publiées seulement, dans l'ordre demandé. */
export function priceRows(selectors: PriceSelector[]): PriceRow[] {
  return selectors.map((sel) => {
    const c = publishedCell(sel);
    if (!c) throw new Error(`Prix introuvable ou non publié : ${JSON.stringify(sel)}`);
    const tier = TIER_LABEL[c.tier];
    return {
      key: `${c.kind}-${c.btu ?? c.zones}-${c.tier}`,
      kind: c.kind,
      label: cellLabel(c),
      tier: tier.charAt(0).toUpperCase() + tier.slice(1),
      range: `${price(c.min)} à ${price(c.max)}`,
      sources: `${c.sources} source${c.sources > 1 ? "s" : ""}`,
    };
  });
}

export const PRICES_CONSULTED = frDateIso(PRICE_GRID_CONSULTED_AT);

/* ------------------------------------------------------------------
   LogisVert
   ------------------------------------------------------------------ */

export type LogisVertScope = "liste" | "murale" | "centrale";

export type LogisVertFacts = {
  scope: LogisVertScope;
  count: string;
  median: string;
  max: string;
  listDate: string | null;
  buckets: Array<{ label: string; pct: number; pctLabel: string }>;
};

const BUCKETS: Array<[string, number, number]> = [
  ["Moins de 1 000 $", 0, 1000],
  ["1 000 à 2 999 $", 1000, 3000],
  ["3 000 à 4 999 $", 3000, 5000],
  ["5 000 $ et plus", 5000, Infinity],
];

/**
 * « liste » : statistiques de la liste officielle entière (jumelages, getLogisVertStats) ;
 * « murale » / « centrale » : machines distinctes du catalogue de ce type qui ont un montant officiel.
 */
export function logisVertFacts(scope: LogisVertScope): LogisVertFacts {
  const s = getLogisVertStats();
  if (scope === "liste") {
    return {
      scope,
      count: fr(s.count),
      median: dollars(s.median),
      max: dollars(s.max),
      listDate: s.listDate,
      buckets: s.buckets.map((b) => ({ label: b.label, pct: Math.round(b.share * 100), pctLabel: `${Math.round(b.share * 100)}${NB}%` })),
    };
  }
  const amounts = getCanonicalModels()
    .filter((m) => m.kind === scope && m.logisVertDollars > 0)
    .map((m) => m.logisVertDollars)
    .sort((a, b) => a - b);
  if (amounts.length === 0) throw new Error(`Aucun montant LogisVert pour ${scope}`);
  const share = (lo: number, hi: number) => amounts.filter((n) => n >= lo && n < hi).length / amounts.length;
  return {
    scope,
    count: fr(amounts.length),
    median: dollars(amounts[Math.floor(amounts.length / 2)]),
    max: dollars(amounts[amounts.length - 1]),
    listDate: s.listDate,
    buckets: BUCKETS.map(([label, lo, hi]) => {
      const pct = Math.round(share(lo, hi) * 100);
      return { label, pct, pctLabel: `${pct}${NB}%` };
    }),
  };
}

/* ------------------------------------------------------------------
   Villes
   ------------------------------------------------------------------ */

export type CityGroup = { region: string; items: Array<{ href: string; label: string }> };

/** Pages « Thermopompe à [ville] » existantes (getCities), groupées par région, ordre alphabétique. */
export function cityGroups(): CityGroup[] {
  const map = new Map<string, CityGroup["items"]>();
  for (const c of getCities()) {
    const list = map.get(c.region) ?? [];
    list.push({ href: `/thermopompe/${c.slug}`, label: c.name });
    map.set(c.region, list);
  }
  return [...map.entries()].sort(([a], [b]) => a.localeCompare(b, "fr-CA")).map(([region, items]) => ({ region, items }));
}

/* ------------------------------------------------------------------
   Jetons
   ------------------------------------------------------------------ */

function fact(token: string): string | null {
  const [ns, a, b, c] = token.split(":");
  switch (ns) {
    case "prix": {
      if (a === "date") return PRICES_CONSULTED;
      const n = Number(b);
      const sel: PriceSelector = a === "multizone" ? { kind: "multizone", zones: n, tier: c as PriceTier } : { kind: a as PriceKind, btu: n, tier: c as PriceTier };
      const cell = publishedCell(sel);
      return cell ? `${price(cell.min)} et ${price(cell.max)}` : null;
    }
    case "lv": {
      const s = getLogisVertStats();
      if (a === "max") return dollars(s.max);
      if (a === "median") return dollars(s.median);
      if (a === "count") return fr(s.count);
      if (a === "date") return s.listDate;
      return null;
    }
    case "lvkind": {
      if (a !== "murale" && a !== "centrale") return null;
      const f = logisVertFacts(a);
      return b === "count" ? f.count : b === "median" ? f.median : b === "max" ? f.max : null;
    }
    case "lvcap": {
      const cls = getCapacityClasses().find((x) => x.btu === Number(a));
      return cls && cls.maxLogisVert > 0 ? dollars(cls.maxLogisVert) : null;
    }
    case "cat": {
      if (a === "machines") return fr(getCanonicalModels().length);
      if (a === "murales") return fr(getCanonicalModels().filter((m) => m.kind === "murale").length);
      if (a === "centrales") return fr(getCanonicalModels().filter((m) => m.kind === "centrale").length);
      if (a === "eligible") return fr(getEligibleModelCount());
      if (a === "brands") return fr(getActiveBrandCount());
      return null;
    }
    case "villes":
      return a === "count" ? fr(getCities().length) : null;
    default:
      return null;
  }
}

/** Remplace les jetons {{…}} d'un texte ; lève une erreur si l'un d'eux n'a pas de donnée. */
export function resolveFacts(text: string, where = ""): string {
  return text.replace(/\{\{([^}]+)\}\}/g, (_, raw: string) => {
    const v = fact(raw.trim());
    if (v === null) throw new Error(`Jeton sans donnée « ${raw} »${where ? ` (${where})` : ""}`);
    return v;
  });
}

/** Résout les jetons dans toutes les chaînes d'un objet (copie profonde). */
export function resolveFactsDeep<T>(value: T, where = ""): T {
  if (typeof value === "string") return resolveFacts(value, where) as T;
  if (Array.isArray(value)) return value.map((v) => resolveFactsDeep(v, where)) as T;
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, resolveFactsDeep(v, where)])) as T;
  }
  return value;
}
