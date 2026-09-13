/* Aucun chiffre inventé : chaque nombre d'une légende (Facebook et Instagram) et de ses visuels existe dans sa source.
   LogisVert : toujours versé au client par Hydro-Québec. */
import { describe, expect, it } from "vitest";
import { composeCaption } from "../captions";
import { extractNumbers, slidesText, unknownNumbers } from "../numbers";
import { buildComparatif, buildFroid, buildGlossaire, buildLogisVert, buildModele, buildQuestion, VARIANT_COUNT, type Generated } from "../templates";
import { areComparable, isLogisVertModel, isShowcaseModel } from "../catalog";
import type { SeriesId } from "../types";
import { fixtureCatalog } from "./fixtures";

const NOW = "2026-09-13T14:00:00.000Z";
const cat = fixtureCatalog();

function everything(g: Generated, series: SeriesId): string {
  const post = { id: `p-20260914-${series}`, series, text: g.text, hashtags: g.hashtags, link: g.link };
  return [g.text, composeCaption(post, "facebook"), composeCaption(post, "instagram"), slidesText([...g.slides, g.story]), g.footnote].join("\n");
}

describe("lecture des nombres", () => {
  it("lit les nombres écrits à la québécoise", () => {
    expect(extractNumbers("12 000 BTU/h, 8,2 et −26 °C, 1 250 $, COP de 3.0").map((n) => n.value)).toEqual([12000, 8.2, -26, 1250, 3]);
  });

  it("ignore les chiffres collés à des lettres et lit deux années séparées", () => {
    expect(extractNumbers("HSPF2 SEER2 4A6V0X24A1 MUZ-FX12NLHZ")).toEqual([]);
    expect(extractNumbers("normales 1991-2020").map((n) => n.value)).toEqual([1991, 2020]);
    expect(extractNumbers("Val-d'Or").length).toBe(0);
  });

  it("signale un nombre absent de la source", () => {
    const source = { values: { chaleur: 13400 }, texts: [] };
    expect(unknownNumbers("Elle donne 13 400 BTU/h", source)).toEqual([]);
    expect(unknownNumbers("Elle donne 99 000 BTU/h", source).map((n) => n.value)).toEqual([99000]);
  });

  it("ne compte pas les liens ni les mots-clics", () => {
    const source = { values: {}, texts: [] };
    expect(unknownNumbers("https://thermopompesavendre.ca/produit/x?utm_content=p-20260914-modele #Top10", source)).toEqual([]);
  });
});

describe("chaque nombre d'une légende générée existe dans sa source", () => {
  const showcase = cat.models.filter(isShowcaseModel);
  const lv = cat.models.filter(isLogisVertModel);
  const pairs = showcase.flatMap((a) => showcase.filter((b) => areComparable(a, b)).map((b) => [a, b] as const)).slice(0, 6);

  for (let v = 0; v < VARIANT_COUNT; v++) {
    it(`tournure ${v + 1} : modèle, froid, LogisVert, comparatif, glossaire`, () => {
      for (const m of showcase) {
        const g = buildModele(m, v, NOW);
        expect(unknownNumbers(everything(g, "modele"), g.source), m.slug).toEqual([]);
      }
      for (const c of cat.cities) {
        const g = buildFroid(c, cat.holdsFullCount, v, NOW);
        expect(unknownNumbers(everything(g, "froid"), g.source), c.code).toEqual([]);
      }
      for (const m of lv) {
        const g = buildLogisVert(m, cat.logisVertListDate, v, NOW);
        expect(unknownNumbers(everything(g, "logisvert"), g.source), m.slug).toEqual([]);
      }
      expect(pairs.length).toBeGreaterThan(0);
      for (const [a, b] of pairs) {
        const g = buildComparatif(a, b, v, NOW);
        expect(unknownNumbers(everything(g, "comparatif"), g.source), `${a.slug}+${b.slug}`).toEqual([]);
      }
      for (const t of cat.terms) {
        const g = buildGlossaire(t, v, NOW);
        expect(unknownNumbers(everything(g, "glossaire"), g.source), t.slug).toEqual([]);
      }
    });
  }

  it("la source garde les valeurs exactes et la page d'origine", () => {
    const m = showcase[1];
    const g = buildModele(m, 0, NOW);
    expect(g.source.page).toBe(`/produit/${m.slug}`);
    expect(g.source.values.chaleurMoins15Btu).toBe(m.h5Btu);
    expect(g.source.values.logisVertDollars).toBe(m.logisVertDollars);
    expect(g.source.values.froidMinimalC).toBe(m.minTempC);
    expect(g.source.derived?.[0].key).toBe("conservationPct");
  });

  it("question : aucun chiffre ajouté par le gabarit", () => {
    const g = buildQuestion({ question: "Faut-il entretenir l’unité extérieure l’hiver?", answer: "Oui : dégagez la neige autour." }, NOW);
    expect(unknownNumbers(everything(g, "question"), g.source)).toEqual([]);
  });
});

describe("LogisVert est toujours versé au client", () => {
  const VERSE = /vers[ée]e? (directement )?au client par Hydro-Québec/;
  it("chaque tournure de la série LogisVert le dit, avec « jamais à l’entreprise »", () => {
    for (const m of cat.models.filter(isLogisVertModel)) {
      for (let v = 0; v < VARIANT_COUNT; v++) {
        const g = buildLogisVert(m, cat.logisVertListDate, v, NOW);
        expect(g.text).toMatch(VERSE);
        expect(g.text).toMatch(/jamais à l’entreprise/);
        expect(slidesText(g.slides)).toMatch(/Versée au client par Hydro-Québec, jamais à l’entreprise/);
        expect(g.text).not.toMatch(/versée? à (l’|l')entreprise|l’entreprise reçoit/i);
      }
    }
  });

  it("toute légende qui cite un montant LogisVert rappelle qu’il va au client", () => {
    const showcase = cat.models.filter(isShowcaseModel);
    for (let v = 0; v < VARIANT_COUNT; v++) {
      for (const m of showcase) expect(buildModele(m, v, NOW).text).toMatch(VERSE);
      expect(buildComparatif(showcase[0], showcase.find((b) => areComparable(showcase[0], b))!, v, NOW).text).toMatch(VERSE);
    }
  });
});

describe("photos", () => {
  it("« Photo représentative » quand l’adresse contient /representatives/", () => {
    const rep = cat.models.find((m) => m.imageUrl?.includes("/representatives/"))!;
    const cover = buildModele(rep, 0, NOW).slides[0];
    expect(cover.kind === "cover" && cover.photo?.representative).toBe(true);
    const other = buildModele(cat.models[0], 0, NOW).slides[0];
    expect(other.kind === "cover" && other.photo?.representative).toBe(false);
  });
});
