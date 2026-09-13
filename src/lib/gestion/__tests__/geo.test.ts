/* Distance à vol d'oiseau, positions des codes postaux hors ligne et région devinée. */
import { describe, expect, it } from "vitest";
import { getCities } from "@/lib/seo/cities";
import { citiesWithin, distanceKm, formatPostalCode, guessRegion, resolvePostalOffline, siteCities } from "../geo";
import { QUEBEC_REGIONS, regionFromLabel } from "../regions";

describe("distance du grand cercle", () => {
  it("Montréal–Québec : environ 233 km", () => {
    const km = distanceKm({ lat: 45.5019, lon: -73.5674 }, { lat: 46.8139, lon: -71.208 });
    expect(km).toBeGreaterThan(225);
    expect(km).toBeLessThan(240);
  });
  it("nulle pour un même point, symétrique", () => {
    const a = { lat: 45.4, lon: -71.9 };
    const b = { lat: 48.4, lon: -71.1 };
    expect(distanceKm(a, a)).toBe(0);
    expect(distanceKm(a, b)).toBeCloseTo(distanceKm(b, a), 6);
  });
});

describe("codes postaux (hors ligne)", () => {
  it("formate et rejette les codes invalides", () => {
    expect(formatPostalCode("h2x1y4")).toBe("H2X 1Y4");
    expect(formatPostalCode(" H2X 1Y4 ")).toBe("H2X 1Y4");
    expect(formatPostalCode("D2X 1Y4")).toBeNull();
    expect(formatPostalCode("H2X")).toBeNull();
  });

  it("RTA d'une ville du site : position de la ville et région par la RTA", () => {
    const r = resolvePostalOffline("H7N 1A1")!;
    expect(r).toMatchObject({ city: "Laval", region: "13", precision: "ville", regionSource: "rta" });
    expect(resolvePostalOffline("J4B 2X3")).toMatchObject({ city: "Boucherville", region: "16" });
    expect(resolvePostalOffline("G1K 3A1")).toMatchObject({ city: "Québec", region: "03" });
  });

  it("RTA connue seulement de la table : région par la ville du site la plus proche", () => {
    const r = resolvePostalOffline("G9A 5H7")!;
    expect(r).toMatchObject({ city: "Shawinigan", precision: "rta", region: "04", regionSource: "ville-proche" });
  });

  it("RTA H7 inconnue : Laval par le préfixe", () => {
    expect(resolvePostalOffline("H7X 1A1")).toMatchObject({ city: "Laval", region: "13", precision: "approx" });
  });

  it("RTA rurale inconnue hors ligne : rien plutôt qu'une position fausse", () => {
    expect(resolvePostalOffline("G0X 1A0")).toBeNull();
  });

  it("région devinée par la ville du site la plus proche d'une position géocodée", () => {
    expect(guessRegion("G0S 1A0", { lat: 46.12, lon: -70.68 })).toEqual({ region: "12", source: "ville-proche" });
    expect(guessRegion("J0K 1A0", { lat: 46.03, lon: -73.44 })).toEqual({ region: "14", source: "ville-proche" });
    expect(guessRegion("G0X 1A0", null)).toEqual({ region: null, source: "aucune" });
  });
});

describe("régions administratives", () => {
  it("les 17 régions officielles, codes 01 à 17", () => {
    expect(QUEBEC_REGIONS).toHaveLength(17);
    expect(QUEBEC_REGIONS.map((r) => r.code)).toEqual(Array.from({ length: 17 }, (_, i) => String(i + 1).padStart(2, "0")));
  });

  it("lit les libellés des villes du site, avec ou sans précision entre parenthèses", () => {
    expect(regionFromLabel("Capitale-Nationale (Charlevoix)")).toBe("03");
    expect(regionFromLabel("Saguenay–Lac-Saint-Jean")).toBe("02");
    expect(regionFromLabel("Chaudière-Appalaches (Beauce)")).toBe("12");
    expect(regionFromLabel("Gaspésie–Îles-de-la-Madeleine")).toBe("11");
    expect(regionFromLabel("montérégie")).toBe("16");
    expect(regionFromLabel("Rive-Sud")).toBe("16");
    expect(regionFromLabel("Atlantide")).toBeNull();
  });

  it("chaque ville du site a des coordonnées et une région officielle", () => {
    expect(siteCities()).toHaveLength(getCities().length);
    for (const c of siteCities()) expect(c.region, c.slug).not.toBeNull();
  });

  it("villes du site dans un rayon", () => {
    const near = citiesWithin({ lat: 45.5019, lon: -73.5674 }, 30).map((c) => c.slug);
    expect(near).toContain("laval");
    expect(near).toContain("longueuil");
    expect(near).not.toContain("quebec");
    expect(near[0]).toBe("montreal");
  });
});
