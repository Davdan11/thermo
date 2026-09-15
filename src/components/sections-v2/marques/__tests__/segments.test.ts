/* Pages de marques : les fiches (/marques/[slug]) et le relevé (/marques/[slug]/[type]) passent
   au navigateur des données allégées et ne rendent complètes que les premières entrées. Les liens
   vers les fiches (et, dans le relevé, toutes les valeurs) restent dans le HTML serveur. */

import { describe, expect, it } from "vitest";
import { createElement, isValidElement, type ReactNode } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { getBrandDetail } from "@/lib/data/queries/brand-detail";
import { modelsForBrandKind } from "@/lib/seo/programmatic";
import { ModelFolio } from "../Monographie";
import { CalibresTable } from "../Calibres";
import { FichesSuite } from "../FichesSuite";
import { ReleveLignes } from "../ReleveLignes";

/** Taille JSON des props du premier composant client `type` trouvé dans l'arbre (sans le rendre). */
function propsSize(node: ReactNode, type: unknown): number | null {
  if (Array.isArray(node)) {
    for (const n of node) {
      const s = propsSize(n, type);
      if (s !== null) return s;
    }
    return null;
  }
  if (!isValidElement(node)) return null;
  const props = node.props as Record<string, unknown>;
  if (node.type === type) return JSON.stringify(props).length;
  for (const v of Object.values(props)) {
    if (Array.isArray(v) || isValidElement(v)) {
      const s = propsSize(v as ReactNode, type);
      if (s !== null) return s;
    }
  }
  return null;
}

/** Descend dans les composants serveur (fonctions sans état) pour trouver les composants client. */
function expand(node: ReactNode): ReactNode {
  if (Array.isArray(node)) return node.map(expand);
  if (!isValidElement(node)) return node;
  const props = node.props as Record<string, unknown>;
  if (node.type === ModelFolio || node.type === CalibresTable) return expand((node.type as (p: unknown) => ReactNode)(props));
  return node;
}

const daikin = getBrandDetail("daikin")!;
const murales = modelsForBrandKind("daikin", "murale");

describe("/marques/[slug] : fiches par segments", () => {
  const props = { brandName: "Daikin", brandSlug: "daikin", brandRawName: daikin.brand.name, models: daikin.models };
  const html = renderToStaticMarkup(createElement(ModelFolio, props));
  const shown = daikin.models.slice(0, 48);

  it("la marque a assez de modèles pour que le test ait un sens", () => {
    expect(daikin.models.length).toBeGreaterThan(48);
  });

  it("les 48 fiches gardent leur nom et leur lien dans le HTML serveur", () => {
    for (const p of shown) expect(html).toContain(`href="/produit/${p.model.slug}"`);
    expect(html).toContain("autres modèles");
  });

  it("seules les 12 premières fiches sont complètes dans le HTML", () => {
    expect(html.match(/Voir le modèle/g)).toHaveLength(12);
  });

  it("HTML et props client allégés (avant : ~221 Ko de HTML, arbre rendu de 48 fiches)", () => {
    expect(html.length).toBeLessThan(110_000);
    const size = propsSize(expand(createElement(ModelFolio, props)), FichesSuite);
    expect(size).not.toBeNull();
    expect(size!).toBeLessThan(30_000);
  });
});

describe("/marques/[slug]/[type] : relevé par segments", () => {
  const props = { models: murales, brandName: "Daikin", kindLabel: "murale" };
  const html = renderToStaticMarkup(createElement(CalibresTable, props));

  it("toutes les lignes gardent leur lien et leurs valeurs dans le HTML serveur", () => {
    expect(murales.length).toBeGreaterThan(24);
    for (const m of murales) expect(html).toContain(`href="/produit/${m.canonicalSlug}"`);
    expect(html.match(/<tr/g)).toHaveLength(murales.length + 1);
    // Chaque ligne affiche sa capacité nominale, même sans mini-règle.
    for (const m of murales.slice(24, 40)) expect(html).toContain(`${m.nominalBtu.toLocaleString("fr-CA")} BTU`);
  });

  it("seules les 24 premières lignes ont la vignette et la mini-règle", () => {
    expect(html.match(/mqs-mark/g)).toHaveLength(24);
  });

  it("HTML et props client allégés (avant : ~488 Ko de HTML pour les murales Daikin)", () => {
    expect(html.length).toBeLessThan(260_000);
    const size = propsSize(expand(createElement(CalibresTable, props)), ReleveLignes);
    expect(size).not.toBeNull();
    expect(size!).toBeLessThan(90_000);
  });
});
