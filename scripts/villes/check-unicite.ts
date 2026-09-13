/* ==================================================================
   Vérification d'unicité des pages « municipalité »

     npx tsx scripts/villes/check-unicite.ts

   Pour chaque municipalité admissible, construit le texte visible de sa
   page (même gabarit que la page réelle : src/lib/seo/municipal-content.ts)
   et le compare à celui de ses 5 voisines les plus proches ayant une page,
   en séquences de 5 mots (indice de Jaccard), de deux façons :

   1. texte propre à la page : on retire d'abord le gabarit commun, soit
      les séquences présentes sur 25 % ou plus des pages admissibles
      (libellés, titres de section, tableau de classement, sources fixes).
      Aucune station ni aucune MRC ne couvre 25 % des pages : les données
      partagées entre voisines restent comptées ;
   2. texte visible complet, gabarit compris.

   Une page est trop proche d'une voisine si (1) dépasse 0,5 ou si (2)
   dépasse 0,7. Dans une paire trop proche, la moins peuplée perd sa page :
   son nom et ses chiffres restent sur la page de sa MRC. On recommence
   (les voisines changent) jusqu'à ce qu'aucune paire ne dépasse les seuils.
   Écrit page, neighbours et uniqueness dans municipalites-data.json.
   ================================================================== */
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { __setDatasetObject, type MuniDataset, type Municipality } from "../../src/lib/seo/municipalites";
import { buildMunicipalPage, jaccard, pageVisibleText, shingleSet, type RankingSlug } from "../../src/lib/seo/municipal-content";
import { catalogueFacts, rankingText } from "../../src/lib/seo/municipal-catalogue";

/**
 * Seuils.
 * - Texte propre > 0,5 : plus de la moitié de ce que la page dit d'elle-même se retrouve chez une
 *   voisine. Mesuré avant retrait : médiane 0,31, 95e centile 0,37 entre voisines les plus proches.
 * - Texte complet > 0,7 : environ 82 % des séquences en commun. Les outils de détection de
 *   quasi-doublons (Siteliner, Screaming Frog) signalent à 90 % ; 0,7 est plus strict.
 */
export const THRESHOLD_SPECIFIC = 0.5;
export const THRESHOLD_FULL = 0.7;
export const TEMPLATE_SHARE = 0.25;
export const SHINGLE = 5;
const COMPARE_WITH = 5;
const NEIGHBOURS = 6;

const FILE = join(process.cwd(), "src/lib/seo/municipalites-data.json");
const data = JSON.parse(readFileSync(FILE, "utf8")) as MuniDataset;
const facts = catalogueFacts();
const ranking: Record<RankingSlug, string> = { "grand-froid": rankingText("grand-froid"), "efficacite-hspf2": rankingText("efficacite-hspf2") };

const R = 6371;
const rad = Math.PI / 180;
function km(a: Municipality, b: Municipality): number {
  const dLat = ((b.lat as number) - (a.lat as number)) * rad;
  const dLon = ((b.lon as number) - (a.lon as number)) * rad;
  const h = Math.sin(dLat / 2) ** 2 + Math.cos((a.lat as number) * rad) * Math.cos((b.lat as number) * rad) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.min(1, Math.sqrt(h)));
}
const r1 = (n: number) => Math.round(n * 10) / 10;
const r3 = (n: number) => Math.round(n * 1000) / 1000;

const located = data.municipalities.filter((m) => m.lat !== null && m.lon !== null);
const candidates = new Set(data.municipalities.filter((m) => m.eligible && !m.curated).map((m) => m.code));
const removed: Array<{ code: string; name: string; with: string; specific: number; full: number }> = [];
for (const m of data.municipalities) m.page = !!m.curated || candidates.has(m.code);

function recomputeNeighbours() {
  const pages = located.filter((m) => m.page);
  for (const m of located) {
    m.neighbours = pages
      .filter((o) => o.code !== m.code)
      .map((o) => [o.code, r1(km(m, o))] as [string, number])
      .sort((a, b) => a[1] - b[1] || a[0].localeCompare(b[0]))
      .slice(0, NEIGHBOURS);
  }
}

type Stat = { specific: number; full: number; closest: string | null };
let template: Set<string> | null = null;
let rounds = 0;
let last = new Map<string, Stat>();
for (;;) {
  rounds++;
  recomputeNeighbours();
  __setDatasetObject(data);
  const byCode = new Map(data.municipalities.map((m) => [m.code, m]));
  const full = new Map<string, Set<string>>();
  for (const code of candidates) {
    const m = byCode.get(code)!;
    const p = buildMunicipalPage(m, facts);
    if (!p) throw new Error(`Page impossible à construire : ${m.name}`);
    full.set(code, shingleSet(pageVisibleText(p, ranking[p.ranking.slug]), SHINGLE));
  }
  // Gabarit commun : figé au premier tour (toutes les admissibles), pour une mesure stable.
  if (!template) {
    const df = new Map<string, number>();
    for (const s of full.values()) for (const x of s) df.set(x, (df.get(x) ?? 0) + 1);
    template = new Set([...df].filter(([, n]) => n / full.size >= TEMPLATE_SHARE).map(([x]) => x));
  }
  const tpl = template;
  const own = new Map([...full].map(([k, s]) => [k, new Set([...s].filter((x) => !tpl.has(x)))]));

  const pairs: Array<{ a: string; b: string; specific: number; full: number }> = [];
  const stats = new Map<string, Stat>();
  const pageList = [...candidates].map((c) => byCode.get(c)!);
  for (const m of pageList) {
    const near = pageList
      .filter((o) => o.code !== m.code)
      .map((o) => ({ o, d: km(m, o) }))
      .sort((x, y) => x.d - y.d || x.o.code.localeCompare(y.o.code))
      .slice(0, COMPARE_WITH);
    const best: Stat = { specific: 0, full: 0, closest: null };
    for (const { o } of near) {
      const js = jaccard(own.get(m.code)!, own.get(o.code)!);
      const jf = jaccard(full.get(m.code)!, full.get(o.code)!);
      if (js > best.specific) best.closest = o.code;
      best.specific = Math.max(best.specific, js);
      best.full = Math.max(best.full, jf);
      if ((js > THRESHOLD_SPECIFIC || jf > THRESHOLD_FULL) && m.code < o.code) pairs.push({ a: m.code, b: o.code, specific: js, full: jf });
    }
    stats.set(m.code, best);
  }
  last = stats;
  if (pairs.length === 0) break;
  // Paire la plus ressemblante d'abord ; on retire la moins peuplée (à égalité, le code le plus grand).
  pairs.sort((x, y) => y.specific - x.specific || y.full - x.full);
  const drop = new Set<string>();
  for (const { a, b, specific, full: jf } of pairs) {
    if (drop.has(a) || drop.has(b)) continue;
    const ma = byCode.get(a)!;
    const mb = byCode.get(b)!;
    const pa = ma.census?.population2021 ?? 0;
    const pb = mb.census?.population2021 ?? 0;
    const loser = pa < pb || (pa === pb && a > b) ? ma : mb;
    const winner = loser === ma ? mb : ma;
    drop.add(loser.code);
    removed.push({ code: loser.code, name: loser.name, with: winner.name, specific: r3(specific), full: r3(jf) });
  }
  for (const c of drop) {
    candidates.delete(c);
    byCode.get(c)!.page = false;
  }
  if (rounds > 20) throw new Error("La vérification ne converge pas");
}

/* ---------------- Verdicts et distributions ---------------- */
const bucketsOf = (values: number[]) => {
  const b: Record<string, number> = {};
  for (let k = 0; k < 10; k++) b[`${(k / 10).toFixed(1)}-${((k + 1) / 10).toFixed(1)}`] = 0;
  for (const v of values) {
    const k = Math.min(9, Math.floor(v * 10));
    b[`${(k / 10).toFixed(1)}-${((k + 1) / 10).toFixed(1)}`]++;
  }
  return b;
};
const quantiles = (values: number[]) => {
  const v = [...values].sort((a, b) => a - b);
  const q = (p: number) => r3(v[Math.min(v.length - 1, Math.floor(p * v.length))]);
  return { min: q(0), p25: q(0.25), median: q(0.5), p75: q(0.75), p95: q(0.95), max: r3(v[v.length - 1]) };
};

for (const m of data.municipalities) {
  if (m.curated) m.uniqueness = { maxJaccard: null, maxSpecific: null, closest: null, verdict: "historique" };
  else if (candidates.has(m.code)) {
    const s = last.get(m.code)!;
    m.uniqueness = { maxJaccard: r3(s.full), maxSpecific: r3(s.specific), closest: s.closest, verdict: "ok" };
  } else {
    const r = removed.find((x) => x.code === m.code);
    if (r) m.uniqueness = { maxJaccard: r.full, maxSpecific: r.specific, closest: null, verdict: "trop-proche" };
    else delete m.uniqueness;
  }
}
const spec = [...last.values()].map((s) => s.specific);
const fullv = [...last.values()].map((s) => s.full);
data.meta.uniqueness = {
  checkedAt: new Date().toLocaleDateString("sv-SE", { timeZone: "America/Toronto" }),
  threshold: THRESHOLD_SPECIFIC,
  thresholdFull: THRESHOLD_FULL,
  templateShare: TEMPLATE_SHARE,
  templateShingles: template?.size ?? 0,
  shingle: SHINGLE,
  compareWith: COMPARE_WITH,
  compared: candidates.size,
  removed: removed.length,
  rounds,
  distribution: bucketsOf(spec),
  distributionFull: bucketsOf(fullv),
  quantiles: quantiles(spec),
  quantilesFull: quantiles(fullv),
  removedList: removed,
};
(data.meta.counts as Record<string, unknown>).pages = data.municipalities.filter((m) => m.page && !m.curated).length;

writeFileSync(FILE, `${JSON.stringify(data, null, 1)}\n`);
console.log(JSON.stringify({ rounds, pages: candidates.size, removed: removed.length, templateShingles: template?.size, specific: quantiles(spec), full: quantiles(fullv), bucketsSpecific: bucketsOf(spec), bucketsFull: bucketsOf(fullv) }, null, 2));
if (removed.length) console.log(removed.map((r) => `${r.name} ~ ${r.with} (propre ${r.specific}, complet ${r.full})`).join("\n"));
