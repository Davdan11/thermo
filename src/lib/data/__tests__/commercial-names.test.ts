import { describe, expect, it } from "vitest";
import names from "@/lib/data/commercial-names.json";
import { registry } from "@/lib/data/registry";
import { isOfficialSource } from "@/lib/data/official-sources";
import { commercialSeriesName, documentedCommercialName, isSeriesCode, productNames } from "../product-name";

/* Noms commerciaux relevés dans les documents des fabricants (« Endure », « Arctic », « Classic Plus »…).
   Même discipline que les températures : source officielle (liste fermée) ou secondaire justifiée,
   citation courte qui contient le nom, jamais une description ni deux noms pour le même numéro. */

interface Entry {
  brand: string;
  outdoorModel: string;
  commercialName: string;
  sourceFile: string;
  quote: string;
  sourceType?: "officiel" | "secondaire";
  confidence?: "modele" | "serie";
  note?: string;
}
const entries = names as Entry[];
const key = (e: Entry) => `${e.brand.toLowerCase()}|${e.outdoorModel.toUpperCase().replace(/[^A-Z0-9]/g, "")}`;
const quoteText = (q: string) => q.replace(/[®™]/g, "").replace(/TM\*?/g, " ").toLowerCase();

describe("commercial-names.json", () => {
  it("chaque nom est sourcé, cité et n'est pas une description", () => {
    expect(entries.length).toBeGreaterThan(0);
    const problemes: string[] = [];
    for (const e of entries) {
      const id = `${e.brand} ${e.outdoorModel}`;
      if (!e.commercialName.trim()) problemes.push(`${id} : nom vide`);
      if (/[®™]/.test(e.commercialName)) problemes.push(`${id} : ® ou ™ dans le nom`);
      if (/^(s|sd)\b|^cold climate$|^high efficiency|^ductless$|^multi[- ]?zone$/i.test(e.commercialName)) problemes.push(`${id} : description (« ${e.commercialName} »)`);
      if (!(e.quote.length > 0 && e.quote.length <= 160)) problemes.push(`${id} : citation vide ou trop longue`);
      const mots = e.commercialName.split(/[\s-]+/).filter((w) => w.length >= 2 && !/^series$/i.test(w));
      if (!mots.every((w) => quoteText(e.quote).includes(w.toLowerCase()))) problemes.push(`${id} : la citation ne contient pas « ${e.commercialName} »`);
      if (!/^https:\/\//.test(e.sourceFile)) problemes.push(`${id} : source qui n'est pas une adresse https`);
      else if ((e.sourceType ?? "officiel") === "secondaire") {
        if (!e.note?.trim()) problemes.push(`${id} : source secondaire sans note`);
      } else if (!isOfficialSource(new URL(e.sourceFile))) problemes.push(`${id} : hôte hors de la liste officielle (${new URL(e.sourceFile).hostname})`);
    }
    expect(problemes).toEqual([]);
  });

  it("un seul nom par numéro", () => {
    const vus = new Set<string>();
    const doublons = entries.filter((e) => (vus.has(key(e)) ? true : (vus.add(key(e)), false))).map((e) => `${e.brand} ${e.outdoorModel}`);
    expect(doublons).toEqual([]);
  });
});

describe("Nom affiché d'une fiche", () => {
  const seriesById = new Map(registry.series.map((s) => [s.id, s]));
  const actifs = registry.models.filter((m) => m.status === "published" && registry.brandById.get(m.brandId)?.activeInQuebec);

  it("série absente ou réduite à un code : le nom commercial du document", () => {
    const m = actifs.find((x) => {
      const s = seriesById.get(x.seriesId);
      const serie = commercialSeriesName(s?.name, s?.slug);
      return (!serie || isSeriesCode(serie)) && documentedCommercialName(registry.brandById.get(x.brandId)!.name, x.modelNumber);
    });
    expect(m, "au moins une fiche nommée par un document").toBeTruthy();
    const brand = registry.brandById.get(m!.brandId)!.name;
    const s = seriesById.get(m!.seriesId);
    const n = productNames({ brand, seriesName: s?.name, seriesSlug: s?.slug, capacityBtu: m!.nominalCapacityBtu, modelNumber: m!.modelNumber });
    expect(n.series).toBe(documentedCommercialName(brand, m!.modelNumber));
    expect(n.full.startsWith(`${brand} ${n.series}`)).toBe(true);
  });

  it("un vrai nom de série déjà connu n'est jamais remplacé", () => {
    for (const m of actifs) {
      const s = seriesById.get(m.seriesId);
      const serie = commercialSeriesName(s?.name, s?.slug);
      if (!serie || isSeriesCode(serie)) continue;
      const n = productNames({ brand: registry.brandById.get(m.brandId)!.name, seriesName: s?.name, seriesSlug: s?.slug, capacityBtu: m.nominalCapacityBtu, modelNumber: m.modelNumber });
      expect(n.series, m.slug).toBe(serie);
    }
  }, 60_000);
});
