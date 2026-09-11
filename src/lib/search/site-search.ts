/* ==================================================================
   Recherche interne : modèles, marques, villes, guides et pages.
   Index en mémoire construit une fois par processus ; correspondance
   sans accents, préfixe favorisé, puis inclusion. Côté serveur.
   ================================================================== */
import { registry } from "@/lib/data/registry";
import { getAllCatalogueProducts } from "@/lib/data/queries/catalogue";
import { getCities } from "@/lib/seo/cities";
import { getAllGuides } from "@/lib/markdown";

export type SearchKind = "modele" | "marque" | "ville" | "guide" | "page";

export interface SearchHit {
  kind: SearchKind;
  title: string;
  subtitle?: string;
  href: string;
  imageUrl?: string | null;
}

interface Entry extends SearchHit {
  /** Texte normalisé servant à la correspondance. */
  key: string;
  /** Mots-clés secondaires normalisés (numéro de modèle, région…). */
  alt: string;
  weight: number;
}

const PAGES: SearchHit[] = [
  { kind: "page", title: "Trouver ma thermopompe (ThermoMatch)", subtitle: "Questionnaire de 3 minutes", href: "/trouver-ma-thermopompe" },
  { kind: "page", title: "Comparateur", subtitle: "Comparer des modèles côte à côte", href: "/comparer" },
  { kind: "page", title: "Subvention LogisVert", subtitle: "Montants officiels d'Hydro-Québec", href: "/subventions" },
  { kind: "page", title: "Prix d'une thermopompe", subtitle: "Fourchettes installées 2026", href: "/prix" },
  { kind: "page", title: "Meilleures thermopompes", subtitle: "Classements grand froid, efficacité, centrales", href: "/meilleures-thermopompes" },
  { kind: "page", title: "ThermoScan", subtitle: "Identifier votre thermopompe actuelle", href: "/thermoscan" },
  { kind: "page", title: "Toutes les marques", subtitle: "44 marques vendues au Québec", href: "/marques" },
  { kind: "page", title: "Catalogue des thermopompes", subtitle: "Murales, multizones, centrales", href: "/thermopompes" },
  { kind: "page", title: "Guides", subtitle: "Articles et conseils", href: "/guides" },
  { kind: "page", title: "Demander une soumission", subtitle: "Un conseiller vous rappelle", href: "/soumission" },
  { kind: "page", title: "Nous joindre", subtitle: "438-900-3224 · info@thermopompesavendre.ca", href: "/contact" },
];

export function normalizeQuery(s: string): string {
  return s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    // « 12 000 BTU » et « 12000 » doivent se rejoindre.
    .replace(/(\d)\s+(?=\d)/g, "$1")
    .trim();
}

let index: Entry[] | null = null;

function buildIndex(): Entry[] {
  if (index) return index;
  const entries: Entry[] = [];

  for (const p of PAGES) entries.push({ ...p, key: normalizeQuery(p.title), alt: normalizeQuery(p.subtitle ?? ""), weight: 3 });

  for (const b of registry.brands) {
    if (!b.activeInQuebec) continue;
    entries.push({ kind: "marque", title: b.name, subtitle: "Marque", href: `/marques/${b.slug}`, key: normalizeQuery(b.name), alt: "", weight: 4 });
  }

  for (const c of getCities()) {
    entries.push({ kind: "ville", title: `Thermopompe à ${c.name}`, subtitle: c.region, href: `/thermopompe/${c.slug}`, key: normalizeQuery(c.name), alt: normalizeQuery(c.region), weight: 2 });
  }

  for (const g of getAllGuides()) {
    entries.push({ kind: "guide", title: g.title, subtitle: "Guide", href: `/guides/${g.slug}`, key: normalizeQuery(g.title), alt: normalizeQuery(g.description ?? ""), weight: 1 });
  }

  for (const p of getAllCatalogueProducts()) {
    const cap = p.model.nominalCapacityBtu ? `${p.model.nominalCapacityBtu.toLocaleString("fr-CA")} BTU` : "";
    entries.push({
      kind: "modele",
      title: `${p.brand.name} ${p.model.name}`,
      subtitle: [p.systemTypeLabel, cap, p.outdoorModelNumber ?? p.model.modelNumber].filter(Boolean).join(" · "),
      href: `/produit/${p.model.slug}`,
      imageUrl: p.imageUrl,
      key: normalizeQuery(`${p.brand.name} ${p.model.name}`),
      // Capacité sous ses deux écritures (« 12000 » et « 12k ») pour les requêtes du type « tosot 12000 ».
      alt: normalizeQuery(`${p.model.modelNumber} ${p.outdoorModelNumber ?? ""} ${p.systemTypeLabel} ${p.model.nominalCapacityBtu ?? ""} ${p.model.nominalCapacityBtu ? Math.round(p.model.nominalCapacityBtu / 1000) + "k" : ""}`),
      weight: 1,
    });
  }

  index = entries;
  return entries;
}

function score(e: Entry, q: string, words: string[]): number {
  if (!q) return 0;
  let s = 0;
  if (e.key === q) s += 100;
  else if (e.key.startsWith(q)) s += 60;
  else if (e.key.includes(q)) s += 35;
  else if (e.alt.includes(q)) s += 25;
  else {
    // Tous les mots doivent apparaître (titre ou mots-clés) pour compter.
    const hay = `${e.key} ${e.alt}`;
    if (!words.every((w) => hay.includes(w))) return 0;
    s += 15 + words.filter((w) => e.key.includes(w)).length * 5;
  }
  return s + e.weight;
}

/** Résultats groupés par type, limités. */
export function searchSite(query: string, limit = 8): SearchHit[] {
  const q = normalizeQuery(query);
  if (q.length < 2) return [];
  const words = q.split(" ").filter(Boolean);
  const scored: Array<{ e: Entry; s: number }> = [];
  for (const e of buildIndex()) {
    const s = score(e, q, words);
    if (s > 0) scored.push({ e, s });
  }
  scored.sort((a, b) => b.s - a.s || a.e.title.localeCompare(b.e.title, "fr"));
  // Au plus la moitié des places pour les modèles, pour laisser voir marques, villes et guides.
  const out: SearchHit[] = [];
  let models = 0;
  for (const { e } of scored) {
    if (e.kind === "modele") {
      if (models >= Math.max(3, Math.ceil(limit / 2))) continue;
      models++;
    }
    const { key: _k, alt: _a, weight: _w, ...hit } = e;
    void _k; void _a; void _w;
    out.push(hit);
    if (out.length >= limit) break;
  }
  return out;
}
