import fs from "fs";
import path from "path";
import type { BrandDetail } from "@/lib/data/queries/brand-detail";
import { brandLogoPath } from "@/lib/data/brand-logos";
import { GENERIC_SERIES_LABEL, isGenericSeries } from "@/lib/data/series-label";
import type { BrandHeroProps } from "./BrandHero";

/* ==================================================================
   Données des héros de marques — côté serveur seulement (lit public/).
   Aucune image n'est proposée sans que le fichier existe vraiment.
   ================================================================== */

const PUBLIC_DIR = path.join(process.cwd(), "public");

/* Logos « mono » livrés sur un fond plein (pavé, ovale) : une fois peints
   en crème, ils deviennent une tache. Vérifié à l'œil et par l'opacité
   des pixels (plus de 75 % du cadre couvert). */
const MONO_WITH_BACKGROUND = new Set(["midea", "tcl", "direct-air"]);

/** Chemin public local qui existe sur le disque, sinon null (les URL distantes sont écartées). */
function publicFile(src: string | null | undefined): string | null {
  if (!src || !src.startsWith("/") || src.startsWith("//")) return null;
  const clean = src.split("?")[0];
  return fs.existsSync(path.join(PUBLIC_DIR, clean)) ? clean : null;
}

/** Proportion largeur / hauteur lue dans l'en-tête PNG. */
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

export type HeroLogo = { src: string; ratio: number };

/** Logo monochrome détouré (/images/marques/mono/<slug>.png) s'il existe et se prête au crème. */
export function monoLogo(slug: string): HeroLogo | null {
  if (MONO_WITH_BACKGROUND.has(slug)) return null;
  const file = publicFile(`/images/marques/mono/${slug}.png`);
  const ratio = file ? pngRatio(file) : null;
  return file && ratio ? { src: file, ratio } : null;
}

/** Logo du héros : monochrome en crème, sinon le logo officiel posé sur une plaque crème. */
function heroLogo(slug: string): BrandHeroProps["logo"] {
  const mono = monoLogo(slug);
  if (mono) return { ...mono, plate: false };
  const file = publicFile(brandLogoPath(slug));
  const ratio = file ? pngRatio(file) : null;
  return file && ratio ? { src: file, ratio, plate: true } : null;
}

const TYPE_LABELS: Record<string, string> = {
  "wall-single": "Murales",
  "multi-zone": "Multizones",
  "central-ducted": "Centrales",
};

const fmt = (n: number) => n.toLocaleString("fr-CA");

/** Photo réelle d'un modèle de la marque : l'image la plus représentative (climat froid et photo officielle d'abord). */
function pickPhoto(detail: BrandDetail, brandName: string): BrandHeroProps["photo"] {
  const withImg = detail.models
    .map((p) => ({ p, src: publicFile(p.imageUrl) }))
    .filter((x): x is { p: (typeof detail.models)[number]; src: string } => x.src !== null);
  if (!withImg.length) return null;

  const groups = new Map<string, typeof withImg>();
  for (const x of withImg) groups.set(x.src, [...(groups.get(x.src) ?? []), x]);
  const score = (src: string, list: typeof withImg) =>
    list.filter((x) => x.p.isColdClimate).length * 2 + list.length + (src.includes("/official/") ? 3 : 0);
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

  return {
    src,
    alt: `Thermopompe ${brandName} ${title}`,
    title,
    subtitle: subtitle || null,
    cold: p.isColdClimate,
    href: `/produit/${p.model.slug}`,
  };
}

/** Assemble les données sérialisables du héros d'une marque. */
export function buildBrandHero(detail: BrandDetail): BrandHeroProps {
  const { brand } = detail;
  const name = brand.name.replace(" [DEV]", "").trim();
  return {
    name,
    slug: brand.slug,
    logo: heroLogo(brand.slug),
    stats: { models: detail.modelCount, series: detail.seriesCount, cold: detail.coldClimateCount },
    types: detail.systemTypes
      .filter((t) => t.value !== "other")
      .map((t) => ({ label: TYPE_LABELS[t.value] ?? t.label, href: `/thermopompes?brand=${brand.slug}&type=${t.value}` })),
    cold: detail.hasColdClimate,
    capacity: detail.capacityRange,
    photo: pickPhoto(detail, name),
  };
}

/* Logos monochromes aux traits trop fins et pâles : lisibles en grand sur la page
   de la marque, mais pas en petit sur les orbites de l’annuaire. */
const FAINT_MONO = new Set(["tempstar", "quebec-vair", "danby"]);

/** Logo pour les orbites de l’annuaire (/marques). */
export function orbitLogo(slug: string): HeroLogo | null {
  return FAINT_MONO.has(slug) ? null : monoLogo(slug);
}
