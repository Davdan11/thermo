/* Garde-fou de poids : /comparer sérialisait tout le catalogue (~3 900 modèles, ~1 Mo de JSON)
   dans les props de CompareSelector / ComparePageClient. Ce test lit l'arbre rendu par la page et
   échoue si les props passées aux composants client redeviennent énormes. */

import { describe, expect, it } from "vitest";
import { isValidElement, type ReactNode } from "react";
import ComparerPage from "../page";
import { CompareSelector } from "@/components/compare/CompareSelector";
import { ComparePageClient } from "@/components/compare/ComparePageClient";
import { getAllCatalogueProducts } from "@/lib/data/queries/catalogue";
import { registry } from "@/lib/data/registry";

/* Seuils : quelques suggestions et au plus cinq fiches allégées (~3 Ko chacune). L'ancienne page
   dépassait 1 000 000 de caractères ; ces seuils laissent de la marge sans tolérer une régression. */
const MAX_SANS_COMPARAISON = 20_000;
const MAX_CINQ_MODELES = 60_000;

type Found = { name: string; props: Record<string, unknown>; size: number };

/** Composants client du comparateur trouvés dans l'arbre (sans le rendre), avec la taille JSON de leurs props. */
function clientProps(node: ReactNode, out: Found[] = []): Found[] {
  if (Array.isArray(node)) {
    for (const n of node) clientProps(n, out);
    return out;
  }
  if (!isValidElement(node)) return out;
  const props = node.props as Record<string, unknown>;
  if (node.type === CompareSelector || node.type === ComparePageClient) {
    const rest = { ...props };
    delete rest.children;
    out.push({ name: node.type === CompareSelector ? "CompareSelector" : "ComparePageClient", props: rest, size: JSON.stringify(rest).length });
  }
  for (const v of Object.values(props)) if (Array.isArray(v) || isValidElement(v)) clientProps(v as ReactNode, out);
  return out;
}

async function render(models?: string) {
  const el = await ComparerPage({ searchParams: Promise.resolve(models === undefined ? {} : { models }) });
  return clientProps(el);
}

describe("/comparer : props sérialisées", () => {
  it("sans comparaison : le sélecteur reçoit des suggestions, pas le catalogue", async () => {
    const found = await render();
    expect(found.map((f) => f.name)).toEqual(["CompareSelector"]);
    const [sel] = found;
    expect(sel.size).toBeLessThan(MAX_SANS_COMPARAISON);
    expect((sel.props.suggestions as unknown[]).length).toBeLessThanOrEqual(12);
    expect(sel.props.totalModels).toBe(getAllCatalogueProducts().length);
    expect(sel.props).not.toHaveProperty("products");
  });

  it("cinq modèles comparés : fiches allégées, sous le seuil", async () => {
    const slugs = getAllCatalogueProducts().slice(0, 5).map((p) => p.model.slug);
    const found = await render(slugs.join(","));
    expect(found.map((f) => f.name)).toEqual(["ComparePageClient"]);
    const [page] = found;
    expect(page.size).toBeLessThan(MAX_CINQ_MODELES);
    const data = page.props.data as { products: Array<{ detail: Record<string, unknown> }> };
    expect(data.products).toHaveLength(5);
    // Rien de ce que le tableau n'affiche pas : ni modèles voisins ni similaires, ni doublon « details ».
    expect(Object.keys(data)).toEqual(["products"]);
    for (const p of data.products) {
      expect(p.detail).not.toHaveProperty("seriesSiblings");
      expect(p.detail).not.toHaveProperty("similarModels");
    }
  });

  it("un lien partagé avec d'anciennes adresses de fiches marche encore", async () => {
    // L'identifiant d'une fiche est une adresse passée résolue par registry.modelBySlug.
    const anciens = getAllCatalogueProducts()
      .filter((p) => p.model.id !== p.model.slug && registry.modelBySlug.get(p.model.id)?.slug === p.model.slug)
      .slice(0, 2);
    expect(anciens).toHaveLength(2);
    const [page] = await render(anciens.map((p) => p.model.id).join(","));
    expect(page.name).toBe("ComparePageClient");
    const data = page.props.data as { products: Array<{ detail: { model: { slug: string } } }> };
    expect(data.products.map((p) => p.detail.model.slug)).toEqual(anciens.map((p) => p.model.slug));
  });

  it("un seul modèle valide : sélecteur avec ce modèle déjà coché", async () => {
    const [p] = getAllCatalogueProducts();
    const [sel] = await render(`${p.model.slug},adresse-inconnue`);
    expect(sel.name).toBe("CompareSelector");
    expect(sel.props.initialSlugs).toEqual([p.model.slug]);
  });
});
