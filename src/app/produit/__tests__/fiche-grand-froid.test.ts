import { describe, expect, it, vi } from "vitest";
import { createElement, type ReactNode } from "react";
import { renderToString } from "react-dom/server";

/* Fiche produit — « Chauffe jusqu'à −XX °C » (résolveur unique : catalogue, puis documents du fabricant).
   - Modèle connu : le chiffre en évidence, la mention de sa source, la citation et le lien, la donnée
     structurée JSON-LD, la même valeur dans l'en-tête et les caractéristiques.
   - Source secondaire : « Selon la fiche technique du fabricant, reproduite par un distributeur ».
   - Modèle inconnu : aucune température inventée ; certifié climat froid → « Certifiée grand froid ·
     chauffe encore à −15 °C », jamais « jusqu'à −15 °C » ; sinon rien de nouveau.
   Rendu serveur (renderToString), comme les autres tests de composants. */

vi.mock("next/link", () => ({
  default: (props: { href: string; children: ReactNode; prefetch?: unknown; scroll?: unknown }) => {
    const { href, children, ...rest } = props;
    delete rest.prefetch;
    delete rest.scroll;
    return createElement("a", { href, ...rest }, children);
  },
}));
vi.mock("next/image", () => ({
  default: ({ src, alt, width, height }: { src: unknown; alt?: string; width?: number; height?: number }) =>
    createElement("img", { src: typeof src === "string" ? src : "", alt: alt ?? "", width, height }),
}));
vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: () => {}, replace: () => {}, prefetch: () => {}, back: () => {}, refresh: () => {} }),
  usePathname: () => "/produit/test",
  useSearchParams: () => new URLSearchParams(),
  notFound: () => {
    throw new Error("NEXT_NOT_FOUND");
  },
}));
vi.mock("next/font/google", () => {
  const police = () => ({ className: "police", variable: "--police", style: { fontFamily: "police" } });
  return { JetBrains_Mono: police, IBM_Plex_Mono: police, Inter: police, Outfit: police, Geist: police, Inter_Tight: police, Instrument_Serif: police };
});

import ProductPage from "@/app/produit/[slug]/page";
import { ChauffeJusqua } from "@/components/product/ChauffeJusqua";
import { registry } from "@/lib/data/registry";
import { minHeatingTempForModel } from "@/lib/thermomatch/min-temp";

/**
 * Première fiche publiée (une seule configuration) dont la température est encore inconnue.
 * Choisie dans le catalogue et non figée : chaque relevé de températures en fait passer en « connues ».
 */
function ficheInconnue(climatFroid: boolean): string {
  const nbConfigs = new Map<string, number>();
  for (const c of registry.configurations) nbConfigs.set(c.modelId, (nbConfigs.get(c.modelId) ?? 0) + 1);
  const m = registry.models.find(
    (x) =>
      x.status === "published" &&
      registry.brandById.get(x.brandId)?.activeInQuebec &&
      (nbConfigs.get(x.id) ?? 0) <= 1 &&
      x.categories.includes("cold-climate") === climatFroid &&
      !minHeatingTempForModel(x.id),
  );
  if (!m) throw new Error(`aucune fiche inconnue (climat froid : ${climatFroid})`);
  return m.slug;
}

/** Texte visible du HTML : sans balises ni commentaires de React. */
const texte = (html: string) => html.replace(/<!--.*?-->/g, "").replace(/<script[\s\S]*?<\/script>/g, "").replace(/<[^>]+>/g, "");
const fiche = async (slug: string) => renderToString(await ProductPage({ params: Promise.resolve({ slug }) }));

const OFFICIEL = "Température minimale publiée par le fabricant";
const SECONDAIRE = "Selon la fiche technique du fabricant, reproduite par un distributeur";

describe("Fiche produit d'un modèle connu : « Chauffe jusqu'à »", () => {
  it("Fujitsu AOUH15KTAP1 : −30 °C, brochure officielle du dépôt", async () => {
    const html = await fiche("fujitsu-aouh15ktap1");
    const t = texte(html);
    expect(t).toMatch(/Chauffe jusqu’à\s*−30\s*°C/);
    expect(t).toContain(OFFICIEL);
    expect(t).not.toContain(SECONDAIRE);
    // Le titre du bandeau porte la valeur (nom accessible de la section).
    expect(html).toMatch(/<h2 id="grand-froid-titre"[^>]*>[\s\S]*?Chauffe jusqu’à[\s\S]*?−30[\s\S]*?<\/h2>/);
    // Citation, page et lien vers le document du fabricant.
    expect(t).toContain("-22 to 75");
    expect(t).toContain("p. 23");
    expect(html).toContain('href="/documents/brochures/fujitsu/airstage-h-series.pdf"');
    // Caractéristiques principales et en-tête : même valeur.
    expect(t.match(/Chauffe jusqu’à\s*−30\s*°C/g)?.length ?? 0).toBeGreaterThanOrEqual(2);
    // Donnée structurée de la fiche.
    expect(html).toContain('"name":"Température minimale de chauffage","value":"-30°C"');
  });

  it("Conforto MHSZ124DA : −30 °C, page officielle de la série", async () => {
    const t = texte(await fiche("conforto-mhsz124da"));
    expect(t).toMatch(/Chauffe jusqu’à\s*−30\s*°C/);
    expect(t).toContain(OFFICIEL);
    expect(t).toContain("valeur publiée pour l’ensemble de la série");
    expect(t).toContain("Voir le document du fabricant");
  });
});

describe("Source secondaire : la mention le dit", () => {
  it("« Selon la fiche technique du fabricant, reproduite par un distributeur », lien nofollow", () => {
    const html = renderToString(
      createElement(ChauffeJusqua, {
        minTemp: { valueC: -28, sourceType: "secondaire", origin: "document", sourceFile: "https://distributeur.example/fiche", page: null, quote: "Heating -28°C", confidence: "modele" },
        coldClimate: true,
      }),
    );
    const t = texte(html);
    expect(t).toMatch(/Chauffe jusqu’à\s*−28\s*°C/);
    expect(t).toContain(SECONDAIRE);
    expect(t).not.toContain(OFFICIEL);
    expect(t).not.toContain("Certifiée grand froid");
    expect(html).toContain('rel="noopener noreferrer nofollow"');
    expect(t).toContain("Voir la fiche reproduite");
  });
});

describe("Fiche produit d'un modèle inconnu : aucune température inventée", () => {
  it("certifié climat froid : « Certifiée grand froid · chauffe encore à −15 °C », jamais « jusqu'à »", async () => {
    const html = await fiche(ficheInconnue(true));
    const t = texte(html);
    expect(t).toContain("Certifiée grand froid");
    expect(t).toContain("Chauffe encore à −15 °C");
    expect(t).not.toContain("Chauffe jusqu’à");
    expect(t).not.toMatch(/jusqu’à\s*−15/);
    expect(t).not.toContain(OFFICIEL);
    expect(t).not.toContain(SECONDAIRE);
    expect(html).not.toContain("Température minimale de chauffage");
  });

  it("non certifié : ni bandeau, ni « Chauffe jusqu'à », ni « Certifiée grand froid »", async () => {
    const html = await fiche(ficheInconnue(false));
    const t = texte(html);
    expect(html).not.toContain('id="grand-froid"');
    expect(t).not.toContain("Chauffe jusqu’à");
    expect(t).not.toContain("Chauffe encore à");
    expect(t).not.toContain("Certifiée grand froid");
    expect(t).not.toContain(OFFICIEL);
    expect(html).not.toContain("Température minimale de chauffage");
  });
});
