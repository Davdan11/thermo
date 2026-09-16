import { describe, expect, it } from "vitest";
import { registry } from "@/lib/data/registry";
import {
  WARRANTY_RECORDS,
  WARRANTY_UNVERIFIED_SHORT,
  normalizeSeriesName,
  resolveWarranty,
  warrantyShortLabel,
  warrantyWithoutRegistrationLabel,
} from "../warranty";

/* Résolution de la garantie d'une fiche : modèle exact, puis famille de numéros, puis série,
   puis marque ; rien du tout quand aucun document ne la couvre. Aucun repli inventé. */

describe("resolveWarranty — du plus précis au plus large", () => {
  it("modèle nommé par le certificat : la Daikin 2MX18AXVJU est à 10 ans, pas 12", () => {
    const r = resolveWarranty({ brand: "Daikin", seriesName: "Cirra / Multi-Zone", modelNumber: "2MX18AXVJU" });
    expect(r).not.toBeNull();
    expect(r!.matchedBy).toBe("modele");
    expect(r!.record.partsYears).toBe(10);
    expect(r!.record.compressorYears).toBe(10);
    expect(r!.record.sourceFile).toContain("wc-pwddsstf.pdf");
    expect(warrantyShortLabel(r)).toBe("10 ans pièces et compresseur");
  });

  it("les autres Cirra multizones gardent les 12 ans de leur certificat", () => {
    const r = resolveWarranty({ brand: "Daikin", seriesName: "Cirra / Multi-Zone", modelNumber: "2MXS18WMVJU" });
    expect(r!.matchedBy).toBe("numero");
    expect(r!.record.partsYears).toBe(12);
    expect(r!.record.exceptModels).toContain("2MX18AXVJU");
  });

  it("famille de numéros : le motif du certificat rattache la fiche", () => {
    const r = resolveWarranty({ brand: "Direct AIR", seriesName: "DIRM", modelNumber: "DIRM-18DA25-1Z" });
    expect(r!.matchedBy).toBe("numero");
    expect(r!.record.label).toContain("DA25");
    expect(r!.record.partsYears).toBe(5);
  });

  it("le numéro le plus précisément visé gagne sur la famille plus large", () => {
    const large = resolveWarranty({ brand: "Carrier", seriesName: "Série non identifiée", modelNumber: "25VNA824B030" });
    expect(large!.record.label).toBe("Thermopompes centrales");
    const precis = resolveWarranty({ brand: "Carrier", seriesName: "Infinity 20 VS Heat Pump", modelNumber: "27VNA024A030" });
    expect(precis!.record.label).toBe("Infinity 20 VS");
  });

  it("série : le nom de série normalisé suffit quand le document vise la série", () => {
    const r = resolveWarranty({ brand: "Mitsubishi Electric", seriesName: "M-Series", modelNumber: "MUZ-GX24NLHZ" });
    expect(r!.matchedBy).toBe("serie");
    expect(r!.record.partsYears).toBe(10);
    expect(warrantyWithoutRegistrationLabel(r!.record)).toContain("Sans enregistrement");
  });

  it("marque : un relevé de marque couvre toutes ses fiches", () => {
    const r = resolveWarranty({ brand: "Tosot", seriesName: "Charmo", modelNumber: "TW09HQ2A1D" });
    expect(r!.matchedBy).toBe("marque");
    expect(r!.record.partsYears).toBe(10);
  });

  it("deux documents qui se contredisent : la garantie la plus prudente l'emporte", () => {
    const r = resolveWarranty({ brand: "Hisense", seriesName: "SmartSense", modelNumber: "AO-09U3R25SS" });
    const candidats = WARRANTY_RECORDS.filter(
      (e) => e.brand === "Hisense" && e.seriesNames.some((s) => normalizeSeriesName(s) === normalizeSeriesName("SmartSense")),
    );
    expect(candidats.length).toBeGreaterThan(1);
    expect(r!.record.partsYears).toBe(Math.min(...candidats.map((c) => c.partsYears)));
  });
});

describe("resolveWarranty — aucun repli inventé", () => {
  it("marque sans aucun relevé : rien", () => {
    expect(resolveWarranty({ brand: "Napoleon", seriesName: "NDH", modelNumber: "NDHAS24" })).toBeNull();
    expect(resolveWarranty({ brand: "Coleman", seriesName: "LX", modelNumber: "HMH72B" })).toBeNull();
  });

  it("marque relevée mais fiche hors des documents : rien plutôt qu'une durée de marque", () => {
    expect(resolveWarranty({ brand: "Daikin", seriesName: "Série non identifiée", modelNumber: "ZZZ000INCONNU" })).toBeNull();
    expect(resolveWarranty({ brand: "Lennox", seriesName: "Real", modelNumber: "ZZZ000INCONNU" })).toBeNull();
  });

  it("sans relevé, l'affichage ne donne aucun chiffre", () => {
    const label = warrantyShortLabel(null);
    expect(label).toBe(WARRANTY_UNVERIFIED_SHORT);
    expect(label).not.toMatch(/\d/);
  });

  it("une garantie n'est jamais empruntée à une autre marque", () => {
    const visibles = registry.models.filter((m) => m.status === "published" && registry.brandById.get(m.brandId)?.activeInQuebec);
    const seriesById = new Map(registry.series.map((s) => [s.id, s]));
    const fautes: string[] = [];
    for (const m of visibles) {
      const brand = registry.brandById.get(m.brandId)!;
      const r = resolveWarranty({ brand: brand.name, seriesName: seriesById.get(m.seriesId)?.name, modelNumber: m.modelNumber });
      if (r && normalizeSeriesName(r.record.brand) !== normalizeSeriesName(brand.name)) fautes.push(`${m.slug} → ${r.record.brand}`);
    }
    expect(fautes).toEqual([]);
  }, 60_000);
});

describe("catalogue — plus aucune garantie estimée", () => {
  it("le registre ne contient plus de garantie sans source", () => {
    expect(registry.warranties).toEqual([]);
  });
});
