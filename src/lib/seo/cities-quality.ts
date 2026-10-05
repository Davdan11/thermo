/* ==================================================================
   Pages villes : contrôle de qualité avant indexation

   Plus de mille pages /thermopompe/[ville] sortent de deux gabarits
   (53 villes historiques, municipalités). Une page n'est indexée
   (robots « index », plan du site, IndexNow) que si :

   1. elle a une vraie valeur locale (localValueCriteria, page par page) :
      climat (station de normales), territoire (région et MRC),
      recensement, parc immobilier, voisines liées, texte propre,
      nom sans répétition et titre unique ;
   2. son texte ne répète pas celui d'une autre page indexée
      (assessCityPages, sur tout le corpus) : texte visible découpé en
      séquences de 5 mots, comparé à celui de TOUTES les autres pages.

   Dans une paire trop proche, c'est la page la plus contenue dans l'autre
   qui sort (ASYMMETRY_MARGIN) : celle qui n'apporte rien que l'autre ne
   dise déjà. À confinement équivalent, aucune des deux n'est la copie de
   l'autre et la priorité tranche (ville historique, population, slug).

   Une page qui ne passe pas reçoit « noindex, follow » et sort du plan
   du site ; elle reste accessible (liens des MRC, des voisines, de
   l'index). Rien n'est écrit à la main : le résultat est recalculé à
   partir des données et des gabarits, puis mémorisé par processus
   (environ une seconde et demie pour tout le corpus).
   ================================================================== */
import { getCities, type CityProfile } from "./cities";
import { getCityData } from "./cities-data";
import { buildCityPage, cityCatalogueFacts, cityVisibleText, type CityCatalogueFacts } from "./cities-content";
import { nameRepetitions } from "./cities-text";
import { catalogueFacts, rankingText } from "./municipal-catalogue";
import { buildMunicipalPage, pageVisibleText, type MunicipalPage, type RankingSlug } from "./municipal-content";
import { getDataset, getMunicipalityForCity, getPageMunicipalities, getRegion } from "./municipalites";

/* ------------------------------------------------------------------
   Seuils
   ------------------------------------------------------------------ */

/**
 * Séquences de 5 mots (bardeaux) : assez longues pour qu'une suite commune soit une phrase
 * réellement répétée, pas un hasard de vocabulaire. Même valeur que scripts/villes/check-unicite.ts.
 */
export const SHINGLE = 5;
/**
 * Gabarit : séquence présente sur 25 % ou plus des pages du MÊME gabarit (libellés, titres de
 * section, explications générales, tableau de classement). Les deux gabarits sont mesurés à part :
 * une page de ville historique explique davantage, son gabarit pèse plus lourd. Aucune station ni
 * aucune MRC ne couvre 25 % des pages : les données partagées entre voisines restent du texte propre.
 */
export const TEMPLATE_SHARE = 0.25;
/**
 * Texte propre : la page doit porter au moins 250 séquences qui ne sont pas du gabarit, soit à peu
 * près 250 mots de contenu local. Mesure absolue et non une part, parce que la part dépend de la
 * longueur des explications du gabarit (26 % sur une page de ville historique, 48 % sur une page de
 * municipalité, pour une quantité de texte local comparable). Aujourd'hui les pages en portent de
 * 342 à 615 : le seuil écarte une page sans données, ou un gabarit qui grossirait au point de faire
 * l'essentiel de chaque page.
 */
export const MIN_OWN_SHINGLES = 250;
/**
 * Ressemblance du texte propre : au plus la moitié de ce que la page dit d'elle-même peut se
 * retrouver mot pour mot sur une autre page indexée. C'est le critère qui décide : au-delà, deux
 * pages disent surtout la même chose (même station, mêmes phrases) et ne se distinguent que par
 * quelques chiffres.
 */
export const MAX_OWN_CONTAINMENT = 0.5;
/**
 * Garde-fou sur le texte complet, gabarit compris : une page ne peut pas être contenue à plus de
 * 85 % dans une autre. Le gabarit seul représente déjà jusqu'à 76 % d'une page de ville historique,
 * d'où un seuil plus haut que celui du texte propre ; il reste plus strict que les 90 % auxquels les
 * outils de détection de quasi-doublons (Screaming Frog, par défaut) signalent une page.
 */
export const MAX_FULL_CONTAINMENT = 0.85;
/**
 * Écart de confinement à partir duquel une page est tenue pour la copie de l'autre : |A ∩ B| / |A| est
 * asymétrique, et 10 points d'écart séparent nettement la page qui reprend le texte d'une autre (un
 * arrondissement, dont les chiffres sont ceux de sa ville) de celle qui porte en plus ses propres
 * données. En deçà, aucune des deux n'est la copie de l'autre : la priorité tranche.
 */
export const ASYMMETRY_MARGIN = 0.1;
/** Climat : station de normales à 50 km ou moins, même règle que pour avoir une page municipalité. */
export const MAX_STATION_KM = 50;
/** Voisinage : au moins deux pages voisines liées (villes ou municipalités) situent la ville. */
export const MIN_NEIGHBOUR_LINKS = 2;

/*
   Mesure de ressemblance : le confinement (Broder, 1997), |A ∩ B| / |A|, soit la part des séquences
   de la page A qu'on retrouve sur la page B. Il se lit directement (« la moitié du texte ») et,
   mesuré dans les deux sens, repère la petite page recopiée dans une grande, que l'indice de Jaccard
   |A ∩ B| / |A ∪ B| dilue. Pour deux pages de même taille, 50 % de confinement valent un Jaccard de 1/3.
*/

/* ------------------------------------------------------------------
   Entrées : ce que la page affiche, construit par son propre gabarit
   ------------------------------------------------------------------ */
export type CityPageKind = "historique" | "municipalite";

export interface CityPageInput {
  slug: string;
  kind: CityPageKind;
  name: string;
  title: string;
  description: string;
  /** Texte visible du corps de la page, dans l'ordre. */
  text: string;
  /** Station de référence ; km null : distance non mesurée (arrondissement, station vérifiée absente du jeu). */
  station: { name: string; km: number | null; hdd18: number | null; janMeanC: number | null } | null;
  /** Température de conception générale (la table n'a pas de zone propre) : la page le dit. */
  designGeneric: boolean;
  region: string | null;
  /**
   * Territoire nommé sur la page : MRC, agglomération ou territoire hors MRC, avec le lien vers sa
   * page quand elle existe (Laval, Gatineau, Sherbrooke… sont à elles seules leur territoire : pas
   * de page MRC à lier, mais le territoire est bien nommé).
   */
  territory: { name: string; href: string | null } | null;
  census: { population: number | null; dwellings: number | null; builtTo1980Pct: number | null } | null;
  /** Pages voisines distinctes liées depuis la page. */
  neighbourLinks: number;
  /** Pour départager deux pages trop proches : ville historique d'abord, puis la plus peuplée. */
  population: number;
}

/** Libellés fixes du héros et du fil d'Ariane, communs aux deux gabarits (FrostCityHero). */
const HERO_CHROME = "Accueil Thermopompe par ville Thermopompe à Trouver ma thermopompe en 2 min Gratuit, sans engagement. Un installateur licencié RBQ vous rappelle. l'hiver en repères";

type RankingTextOf = (slug: RankingSlug, limit?: number) => string;

function historicInput(city: CityProfile, f: CityCatalogueFacts, ranking: RankingTextOf): CityPageInput {
  const p = buildCityPage(city, f);
  const d = getCityData(city.slug);
  const cl = d?.climate ?? null;
  const cs = d?.census ?? null;
  const muni = getMunicipalityForCity(city.slug);
  const own = muni && muni.curated === city.slug ? muni : null;
  // Distance mesurée seulement quand la fiche de la municipalité porte la station vérifiée de la ville.
  const km = own?.station && own.station.source === "cities-data" ? own.station.km : null;
  const links = new Set([...p.nearby.map((l) => l.href), ...(p.neighbours?.rows ?? []).filter((r) => !r.self && r.href).map((r) => r.href as string)]);
  return {
    slug: city.slug,
    kind: "historique",
    name: city.name,
    title: p.title,
    description: p.description,
    text: `${HERO_CHROME} ${cityVisibleText(p, ranking(p.ranking.slug, p.ranking.limit))}`,
    station: cl?.station ? { name: cl.station, km, hdd18: cl.hdd18 ?? null, janMeanC: cl.janMeanC ?? null } : null,
    designGeneric: p.designGeneric,
    region: city.region || null,
    territory: p.place ? { name: p.place.title, href: p.place.href } : null,
    census: cs ? { population: cs.population2021 ?? null, dwellings: cs.dwellings2021 ?? null, builtTo1980Pct: cs.builtBefore1981Pct ?? null } : null,
    neighbourLinks: links.size,
    population: cs?.population2021 ?? 0,
  };
}

function municipalInput(p: MunicipalPage, ranking: RankingTextOf): CityPageInput {
  const m = p.m;
  const c = m.census;
  return {
    slug: m.slug,
    kind: "municipalite",
    name: p.name,
    title: p.title,
    description: p.description,
    text: `${HERO_CHROME} ${pageVisibleText(p, ranking(p.ranking.slug))}`,
    station: { name: p.station.name, km: m.station?.km ?? null, hdd18: p.station.hdd18, janMeanC: p.station.janMeanC },
    designGeneric: p.design.generic,
    region: getRegion(m.region)?.name ?? null,
    territory: p.place ? { name: p.place.title, href: p.place.href } : null,
    census: c ? { population: c.population2021, dwellings: c.dwellings2021, builtTo1980Pct: c.builtTo1980Pct } : null,
    neighbourLinks: new Set(p.neighbours.rows.filter((r) => !r.self && r.href).map((r) => r.href)).size,
    population: c?.population2021 ?? 0,
  };
}

/** Toutes les pages /thermopompe/[ville] qui existent : villes historiques, puis municipalités avec page. */
export function cityPageInputs(): CityPageInput[] {
  const cf = cityCatalogueFacts();
  const mf = catalogueFacts();
  const cache = new Map<string, string>();
  const ranking: RankingTextOf = (slug, limit) => {
    const k = `${slug}:${limit ?? "-"}`;
    let v = cache.get(k);
    if (v === undefined) {
      v = rankingText(slug, limit);
      cache.set(k, v);
    }
    return v;
  };
  const out = getCities().map((c) => historicInput(c, cf, ranking));
  for (const m of getPageMunicipalities()) {
    const p = buildMunicipalPage(m, mf);
    if (p) out.push(municipalInput(p, ranking));
  }
  return out;
}

/* ------------------------------------------------------------------
   Critères de valeur locale (page par page)
   ------------------------------------------------------------------ */
export type CriterionKey = "climat" | "territoire" | "recensement" | "parc" | "voisines" | "texte-propre" | "nom" | "similarite";

export interface CityCriterion {
  key: CriterionKey;
  /** null : non évalué (la page sort déjà de l'index pour une autre raison). */
  ok: boolean | null;
  detail: string;
}

const fmtPctRatio = (r: number) => `${Math.round(r * 100)} %`;
const fmtNum = (n: number) => n.toLocaleString("fr-CA", { maximumFractionDigits: 1 });

/**
 * Critères de valeur locale d'une page (tous requis). `ownShingles` et `ownShare` : nombre et part
 * de ses séquences hors gabarit ; `titleTwin` : page prioritaire qui porte déjà le même titre.
 */
export function localValueCriteria(p: CityPageInput, ownShingles: number, ownShare: number, titleTwin: string | null = null): CityCriterion[] {
  const s = p.station;
  const c = p.census;
  // Ville historique sans distance mesurée : station vérifiée à la main (cities-data.md), acceptée.
  const kmOk = !!s && (s.km === null ? p.kind === "historique" : s.km <= MAX_STATION_KM);
  const climat = !!s && s.hdd18 !== null && s.janMeanC !== null && kmOk;
  const reps = nameRepetitions(`${p.title} ${p.description} ${p.text}`);
  const design = p.designGeneric ? " ; température de conception : valeur générale de la table, dite comme telle" : "";
  return [
    {
      key: "climat",
      ok: climat,
      detail: !s
        ? "aucune station de normales"
        : s.hdd18 === null || s.janMeanC === null
          ? `station ${s.name} sans degrés-jours ou sans moyenne de janvier`
          : !kmOk
            ? `station ${s.name} à ${fmtNum(s.km ?? 0)} km (plus de ${MAX_STATION_KM} km)`
            : `station ${s.name}${s.km === null ? " (vérifiée, distance non mesurée)" : ` à ${fmtNum(s.km)} km`}${design}`,
    },
    {
      key: "territoire",
      ok: !!p.region && !!p.territory,
      detail: p.region && p.territory ? `${p.region}, ${p.territory.name}${p.territory.href ? "" : " (territoire sans page propre)"}` : !p.region ? "région inconnue" : "aucun territoire nommé",
    },
    {
      key: "recensement",
      ok: !!c && (c.population ?? 0) > 0 && (c.dwellings ?? 0) > 0,
      detail: c && (c.population ?? 0) > 0 && (c.dwellings ?? 0) > 0 ? `${fmtNum(c.population ?? 0)} habitants, ${fmtNum(c.dwellings ?? 0)} logements (2021)` : "population ou logements 2021 non publiés",
    },
    {
      key: "parc",
      ok: !!c && c.builtTo1980Pct !== null,
      detail: c && c.builtTo1980Pct !== null ? `${fmtNum(c.builtTo1980Pct)} % des logements construits en 1980 ou avant` : "période de construction non publiée",
    },
    {
      key: "voisines",
      ok: p.neighbourLinks >= MIN_NEIGHBOUR_LINKS,
      detail: `${p.neighbourLinks} page${p.neighbourLinks > 1 ? "s" : ""} voisine${p.neighbourLinks > 1 ? "s" : ""} liée${p.neighbourLinks > 1 ? "s" : ""} (minimum ${MIN_NEIGHBOUR_LINKS})`,
    },
    {
      key: "texte-propre",
      ok: ownShingles >= MIN_OWN_SHINGLES,
      detail: `${fmtNum(ownShingles)} séquences propres à la page, ${fmtPctRatio(ownShare)} de son texte (minimum ${MIN_OWN_SHINGLES})`,
    },
    {
      key: "nom",
      ok: reps.length === 0 && !titleTwin,
      detail: reps.length ? `répétition du nom : « ${reps[0]} »` : titleTwin ? `même titre que la page ${titleTwin}` : "nom sans répétition, titre unique",
    },
  ];
}

/* ------------------------------------------------------------------
   Corpus : gabarit, ressemblance, verdicts
   ------------------------------------------------------------------ */
export interface CityPageVerdict {
  slug: string;
  kind: CityPageKind;
  name: string;
  indexable: boolean;
  criteria: CityCriterion[];
  /** Détails des critères non remplis (vide si la page est indexée). */
  reasons: string[];
  /** Séquences propres à la page (hors gabarit) et part qu'elles occupent. */
  ownShingles: number;
  ownShare: number;
  /** Plus fortes parts du texte propre et du texte complet retrouvées sur une autre page indexée. */
  maxOwnContainment: number;
  maxFullContainment: number;
  /** Page indexée dont le texte propre ressemble le plus à celui-ci. */
  closest: string | null;
}

export interface CityAssessment {
  verdicts: CityPageVerdict[];
  bySlug: Map<string, CityPageVerdict>;
  /** Séquences de gabarit par type de page. */
  templateSize: Record<CityPageKind, number>;
}

const words = (text: string) =>
  text
    .toLowerCase()
    .replace(/[’']/g, " ")
    .split(/[^\p{L}\p{N}]+/u)
    .filter(Boolean);

/** Séquences de n mots d'un texte, en identifiants entiers (dictionnaire partagé : aucune collision). */
function shingleIds(text: string, dict: Map<string, number>, n = SHINGLE): Int32Array {
  const w = words(text);
  const ids = new Set<number>();
  for (let i = 0; i + n <= w.length; i++) {
    const k = w.slice(i, i + n).join(" ");
    let id = dict.get(k);
    if (id === undefined) {
      id = dict.size;
      dict.set(k, id);
    }
    ids.add(id);
  }
  return Int32Array.from(ids).sort();
}

function popcount(v: number): number {
  v -= (v >>> 1) & 0x55555555;
  v = (v & 0x33333333) + ((v >>> 2) & 0x33333333);
  return (((v + (v >>> 4)) & 0x0f0f0f0f) * 0x01010101) >>> 24;
}

/**
 * Évalue toutes les pages d'un coup. Pur : mêmes entrées, même résultat.
 * Comptage exact des séquences communes à chaque paire : les séquences fréquentes (sur 20 % des
 * pages ou plus) par bitsets et ET logique, les autres par listes inversées.
 */
export function assessCityPages(inputs: CityPageInput[]): CityAssessment {
  const N = inputs.length;
  const dict = new Map<string, number>();
  const full = inputs.map((p) => shingleIds(p.text, dict));
  const D = dict.size;

  // Gabarit de chaque type de page (au moins 2 pages, pour qu'une page seule n'ait pas de « gabarit »).
  const templateSize: Record<CityPageKind, number> = { historique: 0, municipalite: 0 };
  const tpl: Record<CityPageKind, Uint8Array> = { historique: new Uint8Array(D), municipalite: new Uint8Array(D) };
  for (const kind of ["historique", "municipalite"] as const) {
    const members = inputs.flatMap((p, i) => (p.kind === kind ? [i] : []));
    const df = new Int32Array(D);
    for (const i of members) for (const x of full[i]) df[x]++;
    const min = Math.max(2, Math.ceil(TEMPLATE_SHARE * members.length));
    for (let x = 0; x < D; x++) if (df[x] >= min) (tpl[kind][x] = 1), templateSize[kind]++;
  }
  const tplOf = (i: number) => tpl[inputs[i].kind];
  const ownSize = full.map((s, i) => {
    const t = tplOf(i);
    let n = 0;
    for (const x of s) if (!t[x]) n++;
    return n;
  });

  // Séquences communes à chaque paire (i < j) : texte complet et texte propre (hors gabarit des deux pages).
  const dfAll = new Int32Array(D);
  for (const s of full) for (const x of s) dfAll[x]++;
  const frequentMin = Math.max(2, Math.ceil(0.2 * N));
  const bitOf = new Int32Array(D).fill(-1);
  let nb = 0;
  for (let x = 0; x < D; x++) if (dfAll[x] >= frequentMin) bitOf[x] = nb++;
  const W = Math.max(1, Math.ceil(nb / 32));
  const fullBits = new Uint32Array(N * W);
  const ownBits = new Uint32Array(N * W);
  const postings: number[][] = [];
  for (let i = 0; i < N; i++) {
    const t = tplOf(i);
    for (const x of full[i]) {
      const b = bitOf[x];
      if (b >= 0) {
        fullBits[i * W + (b >> 5)] |= 1 << (b & 31);
        if (!t[x]) ownBits[i * W + (b >> 5)] |= 1 << (b & 31);
      } else if (dfAll[x] > 1) (postings[x] ??= []).push(i);
    }
  }
  const fullI = new Uint16Array(N * N);
  const ownI = new Uint16Array(N * N);
  for (let x = 0; x < postings.length; x++) {
    const list = postings[x];
    if (!list) continue;
    for (let a = 0; a < list.length; a++) {
      const i = list[a];
      const ti = tplOf(i)[x];
      for (let b = a + 1; b < list.length; b++) {
        const j = list[b];
        const k = i * N + j;
        fullI[k]++;
        if (!ti && !tplOf(j)[x]) ownI[k]++;
      }
    }
  }
  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      let f = 0;
      let o = 0;
      for (let w = 0; w < W; w++) {
        f += popcount(fullBits[i * W + w] & fullBits[j * W + w]);
        o += popcount(ownBits[i * W + w] & ownBits[j * W + w]);
      }
      fullI[i * N + j] += f;
      ownI[i * N + j] += o;
    }
  }
  const pair = (i: number, j: number) => {
    const k = i < j ? i * N + j : j * N + i;
    return {
      own: [ownSize[i] ? ownI[k] / ownSize[i] : 0, ownSize[j] ? ownI[k] / ownSize[j] : 0],
      full: [full[i].length ? fullI[k] / full[i].length : 0, full[j].length ? fullI[k] / full[j].length : 0],
    };
  };

  // Priorité : ville historique (données vérifiées), puis la plus peuplée, puis le slug.
  const before = (i: number, j: number) =>
    (inputs[i].kind === inputs[j].kind ? 0 : inputs[i].kind === "historique" ? -1 : 1) || inputs[j].population - inputs[i].population || inputs[i].slug.localeCompare(inputs[j].slug);

  // Titres identiques : seule la page prioritaire garde le sien.
  const titleTwin = new Map<number, string>();
  const byTitle = new Map<string, number[]>();
  inputs.forEach((p, i) => byTitle.set(p.title.toLowerCase(), [...(byTitle.get(p.title.toLowerCase()) ?? []), i]));
  for (const list of byTitle.values()) {
    if (list.length < 2) continue;
    const [first, ...rest] = [...list].sort(before);
    for (const i of rest) titleTwin.set(i, inputs[first].slug);
  }

  const ownShare = full.map((s, i) => (s.length ? ownSize[i] / s.length : 0));
  const criteria = inputs.map((p, i) => localValueCriteria(p, ownSize[i], ownShare[i], titleTwin.get(i) ?? null));
  const eligible = criteria.map((cs) => cs.every((c) => c.ok));

  // Ressemblance entre pages admissibles : la paire la plus ressemblante d'abord, la page non prioritaire sort.
  const flagged: Array<{ i: number; j: number; own: number; full: number; ownI: number; ownJ: number }> = [];
  for (let i = 0; i < N; i++) {
    if (!eligible[i]) continue;
    for (let j = i + 1; j < N; j++) {
      if (!eligible[j]) continue;
      const v = pair(i, j);
      const own = Math.max(...v.own);
      const fl = Math.max(...v.full);
      if (own > MAX_OWN_CONTAINMENT || fl > MAX_FULL_CONTAINMENT) flagged.push({ i, j, own, full: fl, ownI: v.own[0], ownJ: v.own[1] });
    }
  }
  flagged.sort((a, b) => b.own - a.own || b.full - a.full);
  const lostTo = new Map<number, { rival: number; own: number; full: number }>();
  for (const { i, j, own, full: fl, ownI: ci, ownJ: cj } of flagged) {
    if (lostTo.has(i) || lostTo.has(j)) continue;
    // Le confinement est asymétrique : quand une page est nettement plus contenue dans l'autre que
    // l'inverse, c'est elle qui n'apporte rien de plus, et c'est elle qui sort — même si la priorité
    // (ville historique, population, slug) l'aurait gardée. Deux pages également contenues l'une dans
    // l'autre n'ont pas de « copie » : la priorité tranche.
    const loser = Math.abs(ci - cj) >= ASYMMETRY_MARGIN ? (ci > cj ? i : j) : before(i, j) < 0 ? j : i;
    lostTo.set(loser, { rival: loser === i ? j : i, own, full: fl });
  }
  const indexable = inputs.map((_, i) => eligible[i] && !lostTo.has(i));

  // Ressemblance restante avec les pages indexées (rapport et vérification).
  const verdicts: CityPageVerdict[] = inputs.map((p, i) => {
    let maxOwn = 0;
    let maxFull = 0;
    let closest: string | null = null;
    for (let j = 0; j < N; j++) {
      if (j === i || !indexable[j]) continue;
      const v = pair(i, j);
      const own = v.own[i < j ? 0 : 1];
      const fl = v.full[i < j ? 0 : 1];
      if (own > maxOwn) (maxOwn = own), (closest = inputs[j].slug);
      if (fl > maxFull) maxFull = fl;
    }
    const lost = lostTo.get(i);
    const similarite: CityCriterion = !eligible[i]
      ? { key: "similarite", ok: null, detail: "non évaluée : la page sort déjà de l'index" }
      : lost
        ? {
            key: "similarite",
            ok: false,
            detail: `trop proche de ${inputs[lost.rival].name} (${inputs[lost.rival].slug}) : ${fmtPctRatio(lost.own)} du texte propre et ${fmtPctRatio(lost.full)} du texte complet en commun`,
          }
        : { key: "similarite", ok: true, detail: `au plus ${fmtPctRatio(maxOwn)} du texte propre et ${fmtPctRatio(maxFull)} du texte complet communs avec une autre page indexée` };
    const all = [...criteria[i], similarite];
    return {
      slug: p.slug,
      kind: p.kind,
      name: p.name,
      indexable: indexable[i],
      criteria: all,
      reasons: all.filter((c) => c.ok === false).map((c) => `${c.key} : ${c.detail}`),
      ownShingles: ownSize[i],
      ownShare: ownShare[i],
      maxOwnContainment: maxOwn,
      maxFullContainment: maxFull,
      closest,
    };
  });
  return { verdicts, bySlug: new Map(verdicts.map((v) => [v.slug, v])), templateSize };
}

/** Comptes pour le rapport : pages, indexées, et combien échouent à chaque critère. */
export function summarizeCityAssessment(a: CityAssessment) {
  const byKind = (kind: CityPageKind) => {
    const list = a.verdicts.filter((v) => v.kind === kind);
    return { pages: list.length, indexed: list.filter((v) => v.indexable).length };
  };
  const failing: Partial<Record<CriterionKey, number>> = {};
  for (const v of a.verdicts) for (const c of v.criteria) if (c.ok === false) failing[c.key] = (failing[c.key] ?? 0) + 1;
  const indexed = a.verdicts.filter((v) => v.indexable).length;
  return { pages: a.verdicts.length, indexed, noindex: a.verdicts.length - indexed, historique: byKind("historique"), municipalite: byKind("municipalite"), failing, templateSize: a.templateSize };
}

/* ------------------------------------------------------------------
   Accès mémorisé (pages, métadonnées, plan du site)
   ------------------------------------------------------------------ */
let memo: { key: unknown; result: CityAssessment } | null = null;

/** Évaluation de toutes les pages villes, recalculée quand le jeu des municipalités change (développement, tests). */
export function cityAssessment(): CityAssessment {
  const key = getDataset();
  if (memo && memo.key === key) return memo.result;
  const result = assessCityPages(cityPageInputs());
  memo = { key, result };
  return result;
}

/** Verdict d'une page /thermopompe/[slug] : critères, ressemblance, indexation. Null si la page n'existe pas. */
export function cityPageQuality(slug: string): CityPageVerdict | null {
  return cityAssessment().bySlug.get(slug) ?? null;
}

/** Vrai si la page est indexée (robots « index » et plan du site). */
export function isCityPageIndexable(slug: string): boolean {
  return cityPageQuality(slug)?.indexable ?? false;
}
