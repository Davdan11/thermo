import { describe, expect, it } from "vitest";
import { registry } from "@/lib/data/registry";
import { getProductDetail } from "@/lib/data/queries/product-detail";
import { getThermoMatchEmailHTML, type ThermoMatchEmailChoice } from "@/lib/crm/templates/thermomatch-email";
import { minHeatingTempFromBrochures } from "../min-temp-brochures";
import { minHeatingTempForModel } from "../min-temp";
import { recommendFromAnswers } from "../recommend";
import type { QuestionnaireAnswers } from "../answers";

/* ThermoMatch inchangé par le résolveur unique.
   La règle d'avant (recommend.ts, minHeatingTempFor) est recopiée ici telle quelle et sert de référence :
   la plus basse des configurations du modèle, sinon la brochure pour son numéro et sa marque.
   Puis : la fiche produit donne la même valeur que ThermoMatch, et le courriel des trois choix dit
   « Chauffe jusqu'à », la source secondaire, ou « Certifiée grand froid » sans jamais « jusqu'à −15 °C ». */

const ancienMinParModele = new Map<string, number>();
for (const c of registry.configurations) {
  const v = (c as { minHeatingTempC?: number | null }).minHeatingTempC;
  if (typeof v !== "number") continue;
  const prev = ancienMinParModele.get(c.modelId);
  if (prev === undefined || v < prev) ancienMinParModele.set(c.modelId, v);
}

/** Règle d'avant, mot pour mot. */
function ancienneRegle(modelId: string): number | null {
  const known = ancienMinParModele.get(modelId);
  if (known !== undefined) return known;
  const m = registry.modelById.get(modelId);
  if (!m) return null;
  return minHeatingTempFromBrochures({ outdoorModel: m.modelNumber, brand: registry.brandById.get(m.brandId)?.name ?? null });
}

const BASE = {
  postalCode: "H2X 1Y4",
  propertyType: "maison",
  area: "1500-2000",
  floors: "2",
  constructionPeriod: "1981_2000",
  insulation: "standard",
  windowShare: "standard",
  basement: "heated",
  currentSystem: "electrique",
  heatPumpType: "murale",
  priority: ["economies"],
  budget: "5000-7000",
  financing: "non",
} as QuestionnaireAnswers;
const PROFILS: QuestionnaireAnswers[] = [
  BASE,
  { ...BASE, postalCode: "G1R 2J6" } as QuestionnaireAnswers,
  { ...BASE, postalCode: "J9X 1A1", area: "1000-1500" } as QuestionnaireAnswers,
];

describe("ThermoMatch : même température minimale qu'avant le résolveur unique", () => {
  it("pour chaque modèle du registre", () => {
    const ecarts = registry.models
      .filter((m) => (minHeatingTempForModel(m.id)?.valueC ?? null) !== ancienneRegle(m.id))
      .map((m) => m.id);
    expect(ecarts).toEqual([]);
  });

  it("dans les recommandations (minOperatingTempC), avec la nature de la source", () => {
    let connues = 0;
    for (const answers of PROFILS) {
      const rec = recommendFromAnswers(answers);
      expect(rec.results.length).toBeGreaterThan(0);
      for (const r of rec.results) {
        expect(r.product.minOperatingTempC, r.product.id).toBe(ancienneRegle(r.product.id));
        // La table ne contient encore que des sources officielles.
        expect(r.product.minOperatingTempSource).toBe(r.product.minOperatingTempC === null ? null : "officiel");
        if (r.product.minOperatingTempC !== null) connues++;
      }
    }
    // Le test compare de vraies valeurs, pas seulement des null.
    expect(connues).toBeGreaterThan(0);
  });

  it("la fiche produit donne la même valeur que ThermoMatch", () => {
    const nbConfigs = new Map<string, number>();
    for (const c of registry.configurations) nbConfigs.set(c.modelId, (nbConfigs.get(c.modelId) ?? 0) + 1);
    let comparees = 0;
    for (const m of registry.models) {
      const attendu = ancienneRegle(m.id);
      if (attendu === null || (nbConfigs.get(m.id) ?? 0) > 1) continue;
      const d = getProductDetail(m.slug);
      if (!d) continue;
      expect(d.minHeatingTemp?.valueC ?? null, m.slug).toBe(attendu);
      comparees++;
    }
    expect(comparees).toBeGreaterThan(100);
    // Une fiche complète par modèle dont la température est connue : la durée croît avec la couverture.
  }, 60_000);
});

describe("Courriel ThermoMatch : par grand froid", () => {
  const choix = (c: Partial<ThermoMatchEmailChoice>): ThermoMatchEmailChoice => ({
    brand: "Marque",
    series: "Série",
    outdoorModel: "EXT-24",
    minTempC: null,
    h5: 21000,
    hspf2: 10.5,
    subsidy: 0,
    priceMin: null,
    priceMax: null,
    url: null,
    ...c,
  });
  const html = (c: Partial<ThermoMatchEmailChoice>) => getThermoMatchEmailHTML({ firstName: "Test", shareUrl: "https://example.test/r", choices: [choix(c)] });

  it("température officielle : « Chauffe jusqu'à −30 °C », sans mention de distributeur", () => {
    const h = html({ minTempC: -30, minTempSource: "officiel" });
    expect(h).toContain("Chauffe jusqu’à −30 °C");
    expect(h).not.toContain("distributeur");
  });

  it("température secondaire : la mention le dit", () => {
    expect(html({ minTempC: -28, minTempSource: "secondaire" })).toContain("Chauffe jusqu’à −28 °C (selon la fiche technique du fabricant, reproduite par un distributeur)");
  });

  it("inconnue mais certifiée climat froid : « Certifiée grand froid · chauffe encore à −15 °C », jamais « jusqu'à −15 °C »", () => {
    const h = html({ minTempC: null, coldClimate: true });
    expect(h).toContain("Certifiée grand froid · chauffe encore à −15 °C");
    expect(h).not.toMatch(/jusqu’à\s*−15/);
  });

  it("inconnue et non certifiée : la puissance à −15 °C, comme avant", () => {
    const h = html({ minTempC: null, coldClimate: false });
    expect(h).toContain("BTU/h livrés à −15 °C");
    expect(h).not.toContain("Chauffe jusqu’à");
    expect(h).not.toContain("Certifiée grand froid");
  });
});
