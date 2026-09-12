/* ==================================================================
   Données des héros v2 de marques : serveur seulement (lit public/).
   Aucune image n’est proposée sans que le fichier existe vraiment.
   ================================================================== */
import fs from "node:fs";
import path from "node:path";
import type { BrandDetail, BrandSummary } from "@/lib/data/queries/brand-detail";
import { brandLogoPath } from "@/lib/data/brand-logos";
import { GENERIC_SERIES_LABEL, isGenericSeries } from "@/lib/data/series-label";
import { MONO_TRACK, type LogoFile, type MonogrammeData, type Placard } from "./shared";

const PUBLIC_DIR = path.join(process.cwd(), "public");

function publicFile(src: string | null | undefined): string | null {
  if (!src || !src.startsWith("/") || src.startsWith("//")) return null;
  const clean = src.split("?")[0];
  return fs.existsSync(path.join(PUBLIC_DIR, clean)) ? clean : null;
}

/** Proportion largeur / hauteur lue dans l’en-tête PNG. */
function pngRatio(src: string): number | null {
  if (!src.toLowerCase().endsWith(".png")) return null;
  try {
    const fd = fs.openSync(path.join(PUBLIC_DIR, src), "r");
    const buf = Buffer.alloc(24);
    fs.readSync(fd, buf, 0, 24, 0);
    fs.closeSync(fd);
    const w = buf.readUInt32BE(16);
    const h = buf.readUInt32BE(20);
    return w > 0 && h > 0 ? w / h : null;
  } catch {
    return null;
  }
}

function logoFile(src: string | null | undefined): LogoFile | null {
  const file = publicFile(src);
  const ratio = file ? pngRatio(file) : null;
  return file && ratio ? { src: file, ratio } : null;
}

/* Logos « mono » livrés sur un fond plein : passés à l’encre, ils deviennent une tache. */
const MONO_WITH_BACKGROUND = new Set(["midea", "tcl", "direct-air"]);

/** Logo officiel en couleurs (manifeste des logos vérifiés). */
export function colorLogo(slug: string): LogoFile | null {
  return logoFile(brandLogoPath(slug));
}

/** Logo monochrome détouré, s’il existe et se prête à l’encre. */
export function monoLogo(slug: string): LogoFile | null {
  return MONO_WITH_BACKGROUND.has(slug) ? null : logoFile(`/images/marques/mono/${slug}.png`);
}

/** Cadres de la galerie : les marques les plus fournies qui ont un logo officiel vérifié. */
export function buildPlacards(brands: BrandSummary[], count = 7): Placard[] {
  return brands
    .flatMap((s) => {
      const logo = colorLogo(s.brand.slug);
      return logo ? [{ slug: s.brand.slug, name: s.brand.name.replace(" [DEV]", "").trim(), logo, models: s.modelCount, cold: s.coldClimateCount }] : [];
    })
    .sort((a, b) => b.models - a.models || a.name.localeCompare(b.name))
    .slice(0, count);
}

/* Chasses d’Inter Tight 800 (em), mesurées dans le navigateur sur la police chargée par le site.
   Servent à régler le nom géant pour qu’il occupe la largeur, sans mesure côté client. */
const ADV: Record<string, number> = {
  A: 0.743, B: 0.636, C: 0.732, D: 0.702, E: 0.589, F: 0.557, G: 0.738, H: 0.72, I: 0.257, J: 0.551, K: 0.674, L: 0.542, M: 0.896,
  N: 0.701, O: 0.76, P: 0.624, Q: 0.762, R: 0.634, S: 0.632, T: 0.649, U: 0.697, V: 0.743, W: 1.035, X: 0.71, Y: 0.717, Z: 0.652,
  a: 0.562, b: 0.61, c: 0.568, d: 0.61, e: 0.573, f: 0.369, g: 0.612, h: 0.61, i: 0.256, j: 0.256, k: 0.566, l: 0.256, m: 0.9,
  n: 0.608, o: 0.591, p: 0.61, q: 0.61, r: 0.393, s: 0.547, t: 0.369, u: 0.607, v: 0.567, w: 0.834, x: 0.557, y: 0.567, z: 0.554,
  "é": 0.573, "è": 0.573, "à": 0.562, "ç": 0.568, "-": 0.443, "'": 0.329, "’": 0.329, " ": 0.188,
};

function lineWidth(s: string, track: number): number {
  const chars = [...s];
  return chars.reduce((w, ch) => w + (ADV[ch] ?? 0.62), 0) + track * Math.max(chars.length - 1, 0);
}

const r2 = (v: number) => Math.round(v * 100) / 100;
const r3 = (v: number) => Math.round(v * 1000) / 1000;

/**
 * Réglage du nom géant : il occupe la largeur (96 cqw), plafonné à 34 cqw de corps.
 * - Nom long (corps < 22 cqw sur une ligne) : deux lignes, coupées à l’espace le plus central.
 * - Nom court (corps plafonné) : l’interlettrage s’ouvre vers la largeur, sans dépasser 0,3 em.
 */
function monogramFit(name: string): MonogrammeData["fit"] {
  let lines = [name];
  if (96 / lineWidth(name, MONO_TRACK) < 22 && name.includes(" ")) {
    const cuts = [...name].flatMap((ch, i) => (ch === " " ? [[name.slice(0, i), name.slice(i + 1)]] : []));
    const worst = (l: string[]) => Math.max(...l.map((x) => lineWidth(x, MONO_TRACK)));
    lines = cuts.sort((a, b) => worst(a) - worst(b))[0];
  }
  const longest = lines.reduce((a, l) => (lineWidth(l, MONO_TRACK) > lineWidth(a, MONO_TRACK) ? l : a), lines[0]);
  const widest = lineWidth(longest, MONO_TRACK);
  const size = Math.min(96 / widest, 34);
  let track = MONO_TRACK;
  if (size * widest < 94) track = Math.min(MONO_TRACK + (96 / size - widest) / Math.max([...longest].length - 1, 1), 0.3);
  const span = Math.max(...lines.map((l) => (size * lineWidth(l, track)) / 100));
  return { lines, size: r2(size), track: r3(track), span: r3(Math.min(span, 1)) };
}

const TYPE_LABELS: Record<string, string> = { "wall-single": "Murales", "multi-zone": "Multizones", "central-ducted": "Centrales" };
const fmt = (n: number) => n.toLocaleString("fr-CA");

/** Photo réelle d’un modèle de la marque : la plus représentative (climat froid et photo officielle d’abord). */
function pickPhoto(detail: BrandDetail, brandName: string): MonogrammeData["photo"] {
  const withImg = detail.models
    .map((p) => ({ p, src: publicFile(p.imageUrl) }))
    .filter((x): x is { p: (typeof detail.models)[number]; src: string } => x.src !== null);
  if (!withImg.length) return null;
  const groups = new Map<string, typeof withImg>();
  for (const x of withImg) groups.set(x.src, [...(groups.get(x.src) ?? []), x]);
  const score = (src: string, list: typeof withImg) => list.filter((x) => x.p.isColdClimate).length * 2 + list.length + (src.includes("/official/") ? 3 : 0);
  const [, list] = [...groups.entries()].sort((a, b) => score(b[0], b[1]) - score(a[0], a[1]) || a[0].localeCompare(b[0]))[0];
  const { p, src } = [...list].sort(
    (a, b) =>
      Number(b.p.isColdClimate) - Number(a.p.isColdClimate) ||
      (a.p.model.nominalCapacityBtu ?? Number.MAX_SAFE_INTEGER) - (b.p.model.nominalCapacityBtu ?? Number.MAX_SAFE_INTEGER),
  )[0];
  const title = p.model.name.replace(" [DEV]", "").trim();
  const serie = detail.series.find((s) => s.series.id === p.model.seriesId)?.series;
  const serieName = serie && !isGenericSeries(serie.name, serie.slug) ? serie.name.replace(" [DEV]", "").trim() : null;
  const btu = p.model.nominalCapacityBtu ?? null;
  const subtitle = [
    serieName && serieName !== GENERIC_SERIES_LABEL && !title.toLowerCase().includes(serieName.toLowerCase()) ? `Série ${serieName}` : null,
    btu ? `${fmt(btu)} BTU` : null,
  ]
    .filter(Boolean)
    .join(" · ");
  return { src, alt: `Thermopompe ${brandName} ${title}`, title, subtitle: subtitle || null, cold: p.isColdClimate, href: `/produit/${p.model.slug}` };
}

/** Données sérialisables du héros « Monogramme ». */
export function buildMonogramme(detail: BrandDetail): MonogrammeData {
  const { brand } = detail;
  const name = brand.name.replace(" [DEV]", "").trim();
  const mono = monoLogo(brand.slug);
  const color = mono ? null : colorLogo(brand.slug);
  return {
    name,
    slug: brand.slug,
    logo: mono ? { ...mono, mono: true } : color ? { ...color, mono: false } : null,
    stats: { models: detail.modelCount, series: detail.seriesCount, cold: detail.coldClimateCount },
    types: detail.systemTypes
      .filter((t) => t.value !== "other")
      .map((t) => ({ label: TYPE_LABELS[t.value] ?? t.label, href: `/thermopompes?brand=${brand.slug}&type=${t.value}` })),
    cold: detail.hasColdClimate,
    capacity: detail.capacityRange,
    photo: pickPhoto(detail, name),
    fit: monogramFit(name),
  };
}
