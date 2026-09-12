/* ==================================================================
   Sections v2 « atelier » : données mises en forme côté serveur.
   Tout est formaté ici (fr-CA) pour que le serveur et le navigateur
   affichent exactement les mêmes caractères. Aucun chiffre n’est
   ajouté : on reprend ce que la page calculait déjà.
   ================================================================== */
import { brandLogoPath } from "@/lib/data/brand-logos";
import type { SeoModel } from "@/lib/seo/programmatic";
import { typo } from "@/components/heroes-v2/marques/shared";

/** Une ligne de nomenclature (mêmes colonnes que ModelTable). */
export type PartRow = {
  key: string;
  href: string;
  name: string;
  outdoorModel: string;
  also: string | null;
  brand: string;
  brandHref: string;
  logo: string | null;
  image: string | null;
  kind: string;
  cold: boolean;
  nominal: string;
  h5: string | null;
  hspf2: string;
  seer2: string;
  logisVert: string | null;
  metric?: string;
};

const fmt = (n: number | null | undefined, suffix = "") => (n === null || n === undefined ? "—" : `${n.toLocaleString("fr-CA")}${suffix}`);

export function toPartRows(models: SeoModel[], metric?: (m: SeoModel) => string): PartRow[] {
  return models.map((m) => ({
    key: m.slug,
    href: `/produit/${m.canonicalSlug}`,
    name: m.name,
    outdoorModel: m.outdoorModel,
    also: m.alsoSoldAs.length > 0 ? m.alsoSoldAs.map((a) => a.brand).join(", ") : null,
    brand: m.brand,
    brandHref: `/marques/${m.brandSlug}`,
    logo: brandLogoPath(m.brandSlug) ?? null,
    image: m.imageUrl,
    kind: m.kind === "murale" ? "Murale" : "Centrale",
    cold: m.coldClimate,
    nominal: fmt(m.nominalBtu, " BTU"),
    h5: m.h5Btu !== null ? fmt(m.h5Btu, " BTU") : null,
    hspf2: fmt(m.hspf2),
    seer2: fmt(m.seer2),
    logisVert: m.logisVertDollars > 0 ? fmt(m.logisVertDollars, " $") : null,
    ...(metric ? { metric: metric(m) } : {}),
  }));
}

/** Bande de preuve (même texte que TrustStrip). */
export const TRUST = [
  { label: "Liste LogisVert d'Hydro-Québec", hint: "montants officiels, mise à jour automatique" },
  { label: "Certifications AHRI et ENERGY STAR", hint: "capacités et COP mesurés, jamais estimés sans le dire" },
  { label: "Toutes les marques vendues au Québec", hint: "aucune marque favorisée, aucun avis sponsorisé" },
  { label: "Installateurs licenciés RBQ", hint: "la soumission finale vient d'un entrepreneur licencié" },
].map((x) => ({ label: typo(x.label), hint: typo(x.hint) }));

/** Textes par défaut de CtaThermoMatch. */
export const CTA_TITLE = "Trouvez la bonne thermopompe en 2 minutes";
export const CTA_TEXT = typo(
  "Répondez à 13 questions sur votre maison. ThermoMatch compare toutes les marques avec les données certifiées d'Hydro-Québec et vous propose trois machines vraiment adaptées, sans parti pris.",
);

export type LinkItem = { href: string; label: string; hint?: string };
export type FaqItem = { question: string; answer: string };

export type GuideData = {
  /** Type de document (cartouche), p. ex. « Guide d’achat ». */
  doc: string;
  intro: string;
  benefits: Array<{ title: string; desc: string }>;
  steps: Array<{ title: string; desc: string }>;
  forWho: string[];
  notForWho: string[];
  grants: Array<{ name: string; conditions: string; source: string | null }>;
  cold: { rows: PartRow[]; metricLabel: string };
  capacities: Array<{ href: string; label: string; btu: number; count: number }>;
  related: LinkItem[];
  faq: FaqItem[];
};

export type CapacityData = {
  /** « 12 000 BTU » */
  label: string;
  btu: number;
  /** « 12 000 » */
  nominal: string;
  h5: { min: string; max: string; minN: number; maxN: number } | null;
  /** Nombre de machines avec une capacité certifiée à -15 °C, formaté. */
  certified: string;
  area: { min: string; max: string };
  walls: PartRow[];
  centrals: PartRow[];
  wallsCaption: string;
  ctaTitle: string;
  related: LinkItem[];
  faq: FaqItem[];
};
