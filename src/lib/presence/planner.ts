/* ==================================================================
   Génération et planification :
   - generate() choisit un sujet (rotation) et applique le gabarit ;
   - planDays() prépare les 30 prochains jours selon la grille
     (lun modèle, mar question, mer froid, jeu LogisVert,
     ven comparatif, sam glossaire, dim rien), heure de Montréal ;
   - newPost() fixe le statut : question → brouillon ; série passée en
     automatique (après une première approbation) → planifiée ;
     sinon → à approuver.
   Fonctions pures : le magasin et les dates sont passés en paramètres.
   ================================================================== */

import { areComparable, isLogisVertModel, isShowcaseModel, type ModelFact, type PresenceCatalog } from "./catalog";
import { pickCandidate } from "./rotation";
import { canEnableAuto, SERIES_INFO, seriesForWeekday } from "./series";
import { buildComparatif, buildFroid, buildGlossaire, buildLogisVert, buildModele, buildQuestion, VARIANT_COUNT, type Generated } from "./templates";
import { addDays, montrealDate, weekIndex, weekdayOf, zonedToUtc } from "./time";
import type { PresenceData, Post, PresenceSettings, SeriesId } from "./types";

export interface GenerateContext {
  catalog: PresenceCatalog;
  posts: Post[];
  date: string;
  weeks: number;
  variant: number;
  now: string;
  /** Change le tirage (« Autre sujet »). */
  salt?: string;
  excludeId?: string;
  avoid?: Set<string>;
  question?: { question: string; answer: string };
}

const WINTER_MONTHS = new Set([11, 12, 1, 2, 3]);

/** Du plus intéressant au moins intéressant : froid minimal publié, climat froid, chaleur conservée à −15 °C. */
function showcaseOrder(a: ModelFact, b: ModelFact): number {
  const ka = Number(a.minTempC !== null) * 2 + Number(a.coldClimate);
  const kb = Number(b.minTempC !== null) * 2 + Number(b.coldClimate);
  if (ka !== kb) return kb - ka;
  const ra = (a.h5Btu ?? 0) / a.nominalBtu;
  const rb = (b.h5Btu ?? 0) / b.nominalBtu;
  if (ra !== rb) return rb - ra;
  return a.slug.localeCompare(b.slug);
}

let showcaseCache: { catalog: PresenceCatalog; list: ModelFact[]; pairs: Array<[ModelFact, ModelFact]> } | null = null;

function showcase(catalog: PresenceCatalog) {
  if (showcaseCache?.catalog === catalog) return showcaseCache;
  const list = catalog.models.filter(isShowcaseModel).sort(showcaseOrder);
  // Chaque modèle vedette avec son meilleur vis-à-vis : même type, puissance à 10 % près, autre marque.
  const pairs: Array<[ModelFact, ModelFact]> = [];
  for (const a of list) {
    let best: ModelFact | null = null;
    for (const b of list) {
      if (!areComparable(a, b)) continue;
      if (!best || Math.abs(b.nominalBtu - a.nominalBtu) < Math.abs(best.nominalBtu - a.nominalBtu)) best = b;
    }
    if (best) pairs.push([a, best]);
  }
  showcaseCache = { catalog, list, pairs };
  return showcaseCache;
}

export function generate(series: SeriesId, ctx: GenerateContext): Generated | null {
  const seed = `${series}:${ctx.date}:${ctx.salt ?? ""}`;
  const common = { posts: ctx.posts, date: ctx.date, weeks: ctx.weeks, seed, excludeId: ctx.excludeId, avoid: ctx.avoid };
  switch (series) {
    case "modele": {
      const m = pickCandidate({ ...common, candidates: showcase(ctx.catalog).list, keysOf: (x) => [`model:${x.slug}`], pool: 60 });
      return m ? buildModele(m, ctx.variant, ctx.now) : null;
    }
    case "logisvert": {
      const list = ctx.catalog.models
        .filter((m) => isLogisVertModel(m) && !!m.imageUrl)
        .sort((a, b) => b.logisVertDollars - a.logisVertDollars || a.slug.localeCompare(b.slug));
      const m = pickCandidate({ ...common, candidates: list, keysOf: (x) => [`model:${x.slug}`], pool: 80 });
      return m ? buildLogisVert(m, ctx.catalog.logisVertListDate, ctx.variant, ctx.now) : null;
    }
    case "comparatif": {
      const pair = pickCandidate({ ...common, candidates: showcase(ctx.catalog).pairs, keysOf: ([a, b]) => [`model:${a.slug}`, `model:${b.slug}`], pool: 60 });
      return pair ? buildComparatif(pair[0], pair[1], ctx.variant, ctx.now) : null;
    }
    case "froid": {
      const month = Number(ctx.date.slice(5, 7));
      const winter = WINTER_MONTHS.has(month);
      const list = ctx.catalog.cities
        .slice()
        .sort((a, b) =>
          winter
            ? a.design.t - b.design.t || a.station.janMinC - b.station.janMinC || a.code.localeCompare(b.code)
            : (b.population ?? 0) - (a.population ?? 0) || a.code.localeCompare(b.code),
        );
      const c = pickCandidate({ ...common, candidates: list, keysOf: (x) => [`ville:${x.code}`], pool: winter ? 25 : 150 });
      return c ? buildFroid(c, ctx.catalog.holdsFullCount, ctx.variant, ctx.now) : null;
    }
    case "glossaire": {
      const t = pickCandidate({ ...common, candidates: ctx.catalog.terms, keysOf: (x) => [`terme:${x.slug}`], pool: ctx.catalog.terms.length });
      return t ? buildGlossaire(t, ctx.variant, ctx.now) : null;
    }
    case "question":
      return buildQuestion(ctx.question ?? { question: "", answer: "" }, ctx.now);
    case "chantier":
      // Réservée (phase 2) : voir chantier.ts.
      return null;
  }
}

export function variantFor(date: string, offset = 0): number {
  return (weekIndex(date) + offset) % VARIANT_COUNT;
}

export function postIdFor(posts: Array<Pick<Post, "id">>, date: string, series: SeriesId): string {
  const base = `p-${date.replaceAll("-", "")}-${series}`;
  if (!posts.some((p) => p.id === base)) return base;
  for (let i = 2; i < 1000; i++) {
    const id = `${base}-${i}`;
    if (!posts.some((p) => p.id === id)) return id;
  }
  throw new Error("Trop de publications le même jour pour cette série.");
}

/** Statut de départ : question → brouillon ; automatique permis et activé → planifiée ; sinon → à approuver. */
export function initialStatus(series: SeriesId, data: Pick<PresenceData, "settings" | "approvals">): { status: Post["status"]; auto: boolean } {
  if (series === "question") return { status: "brouillon", auto: false };
  const auto = data.settings.series[series].auto && canEnableAuto(series, data.approvals).ok;
  return auto ? { status: "planifiee", auto: true } : { status: "a_approuver", auto: false };
}

export function newPost(series: SeriesId, date: string, gen: Generated, data: Pick<PresenceData, "settings" | "approvals" | "posts">, now: Date, variant: number, extra: Post[] = []): Post {
  const iso = now.toISOString();
  const { status, auto } = initialStatus(series, data);
  return {
    id: postIdFor([...data.posts, ...extra], date, series),
    series,
    date,
    scheduledAt: zonedToUtc(date, data.settings.series[series].time).toISOString(),
    status,
    rev: 1,
    variant,
    text: gen.text,
    hashtags: gen.hashtags,
    link: gen.link,
    source: gen.source,
    slides: gen.slides,
    story: gen.story,
    footnote: gen.footnote,
    rotationKeys: gen.rotationKeys,
    edited: false,
    ...(series === "question" ? { question: { question: "", answer: "" } } : {}),
    createdAt: iso,
    updatedAt: iso,
    ...(auto ? { approvedAt: iso, approvedBy: "automatique (gabarit validé)" } : {}),
    publish: { attempts: 0 },
  };
}

export interface PlanResult {
  created: Post[];
  skipped: Array<{ date: string; series: SeriesId; reason: string }>;
}

/** Prépare les `days` prochains jours (aujourd'hui compris si l'heure n'est pas passée). N'écrase jamais une publication existante. */
export function planDays(data: PresenceData, catalog: PresenceCatalog, now: Date, days = 30): PlanResult {
  const created: Post[] = [];
  const skipped: PlanResult["skipped"] = [];
  const today = montrealDate(now);
  const settings: PresenceSettings = data.settings;
  for (let i = 0; i < days; i++) {
    const date = addDays(today, i);
    const series = seriesForWeekday(weekdayOf(date), settings);
    if (!series) continue;
    if (!settings.series[series].enabled || !SERIES_INFO[series].available) {
      skipped.push({ date, series, reason: "Série désactivée" });
      continue;
    }
    if (data.posts.some((p) => p.date === date && p.series === series) || created.some((p) => p.date === date && p.series === series)) continue;
    const at = zonedToUtc(date, settings.series[series].time);
    if (at.getTime() <= now.getTime() + 10 * 60_000) continue;
    const variant = variantFor(date);
    const gen = generate(series, { catalog, posts: [...data.posts, ...created], date, weeks: settings.rotationWeeks, variant, now: now.toISOString() });
    if (!gen) {
      skipped.push({ date, series, reason: "Aucun sujet disponible" });
      continue;
    }
    created.push(newPost(series, date, gen, data, now, variant, created));
  }
  return { created, skipped };
}
