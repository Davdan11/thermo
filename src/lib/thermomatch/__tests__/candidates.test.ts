import { describe, expect, it } from "vitest";
import { buildCandidates, pairingClassOf, runThermoMatch, type MatchRequest, type SourceModel, type SourcePairing } from "../index";
import { makeCandidate } from "./scoring.test";

/* La classe d'un appariement vient de LogisVert, pas du type inscrit au catalogue :
   - Trane 4TXM2318A12NU : « central-ducted » au catalogue, mais « Appareils sans conduits » dans LogisVert → multizone ;
   - Mitsubishi SUZ-AA18NLHZ : sept unités intérieures possibles, une à la fois → simple zone. */

const TRANE: SourceModel = { id: "trane-4txm2318a12nu", brandName: "Trane", name: "4TXM2318A12NU", modelNumber: "4TXM2318A12NU", systemType: "central-ducted", nominalCapacityBtu: 18_000 };
const TRANE_PAIRINGS: SourcePairing[] = [
  { ahri: "t1", indoorModel: "Appareils sans conduits", logisVertDollars: 1_500, heatingBtu17F: 16_000, heatingBtu5F: 14_000, nominalBtu: 18_000, coldClimate: true, systemType: "C" },
  { ahri: "t2", indoorModel: "Appareils sans conduits", logisVertDollars: 1_400, heatingBtu17F: 15_000, heatingBtu5F: 13_000, nominalBtu: 18_000, coldClimate: true, systemType: "C" },
];
const SUZ: SourceModel = { id: "mitsubishi-electric-suz-aa18nlhz", brandName: "Mitsubishi Electric", name: "SUZ-AA18NLHZ", modelNumber: "SUZ-AA18NLHZ", systemType: "wall-single", nominalCapacityBtu: 15_000 };
const SUZ_PAIRINGS: SourcePairing[] = ["MFZ-KX18NL***", "PEAD-AA18NL***", "MSZ-EX18NLW***", "MSZ-EX18NLS***", "MSZ-EX18NLB***", "SVZ-AP18NL***", "MLZ-KX18NL***"].map((indoorModel, i) => ({
  ahri: `s${i}`,
  indoorModel,
  logisVertDollars: 1_000 + i,
  heatingBtu17F: 14_000,
  heatingBtu5F: 12_000 - i * 100,
  nominalBtu: 18_000,
  coldClimate: true,
  systemType: "M",
}));
const CENTRALE: SourceModel = { id: "carrier-38marbq24", brandName: "Carrier", name: "38MARBQ24AA3", modelNumber: "38MARBQ24AA3", systemType: "central-ducted", nominalCapacityBtu: 24_000 };
const CENTRALE_PAIRINGS: SourcePairing[] = [{ ahri: "c1", indoorModel: "CAP**2414AL*", logisVertDollars: 2_000, heatingBtu17F: 26_000, heatingBtu5F: 25_000, nominalBtu: 24_000, coldClimate: true, systemType: "C" }];

const PAIRINGS: Record<string, SourcePairing[]> = { "4TXM2318A12NU": TRANE_PAIRINGS, "SUZ-AA18NLHZ": SUZ_PAIRINGS, "38MARBQ24AA3": CENTRALE_PAIRINGS };
const pairingsFor = (m: string) => PAIRINGS[m] ?? [];

describe("pairingClassOf", () => {
  it("unité intérieure générique de LogisVert → multizone, quel que soit le type du catalogue", () => {
    expect(pairingClassOf({ indoorModel: "Appareils sans conduits", systemType: "C" }, "central-ducted")).toBe("multi");
    expect(pairingClassOf({ indoorModel: "Appareils avec conduits", systemType: "M" }, "wall-single")).toBe("multi");
    expect(pairingClassOf({ indoorModel: "Combinaison d'appareils avec ou sans conduits", systemType: "M" }, "multi-zone")).toBe("multi");
  });
  it("centrale : type du catalogue centrale, et appariement LogisVert qui n'est pas « M »", () => {
    expect(pairingClassOf({ indoorModel: "CAP**2414AL*", systemType: "C" }, "central-ducted")).toBe("central");
    expect(pairingClassOf({ indoorModel: "CAP**2414AL*" }, "hybrid")).toBe("central");
    expect(pairingClassOf({ indoorModel: "MVBE-24", systemType: "M" }, "central-ducted")).toBe("single");
    expect(pairingClassOf({ indoorModel: "MSZ-EX18NLW***", systemType: "M" }, "wall-single")).toBe("single");
  });
});

describe("buildCandidates : la classe voulue d'abord", () => {
  it("Trane 4TXM2318A12NU : jamais une centrale, une multizone", () => {
    expect(buildCandidates([TRANE], { loadBtuH: 14_000, pairingsFor, pairingClass: "central" })).toEqual([]);
    const [c] = buildCandidates([TRANE], { loadBtuH: 14_000, pairingsFor, pairingClass: "multi" });
    expect(c).toMatchObject({ pairingClass: "multi", systemKind: "ductless", multiZoneCapable: true, h5Btu: 14_000 });
  });

  it("SUZ-AA18NLHZ : une simple zone, pas une multizone malgré ses sept têtes possibles", () => {
    expect(buildCandidates([SUZ], { loadBtuH: 12_000, pairingsFor, pairingClass: "multi" })).toEqual([]);
    const [c] = buildCandidates([SUZ], { loadBtuH: 12_000, pairingsFor, pairingClass: "single" });
    expect(c).toMatchObject({ pairingClass: "single", systemKind: "ductless", multiZoneCapable: false });
  });

  it("sans classe demandée (anciens appels) : l'appariement le plus proche, avec sa classe", () => {
    const out = buildCandidates([TRANE, SUZ, CENTRALE], { loadBtuH: 24_000, pairingsFor });
    expect(Object.fromEntries(out.map((c) => [c.outdoorModel, c.pairingClass]))).toEqual({ "4TXM2318A12NU": "multi", "SUZ-AA18NLHZ": "single", "38MARBQ24AA3": "central" });
  });
});

describe("runThermoMatch : la classe et la charge décidées par l'architecture", () => {
  const req: MatchRequest = { heatedAreaFt2: 1750, homeType: "detached", floors: 3, systemKind: "any", zones: 1, backupHeatAvailable: true, priorities: [], budget: "unknown" };
  const pool = [
    makeCandidate({ id: "central-24", brand: "Alpha", systemKind: "central", pairingClass: "central", nominalBtu: 24_000, h5Btu: 24_000 }),
    makeCandidate({ id: "multi-18", brand: "Beta", systemKind: "ductless", pairingClass: "multi", nominalBtu: 18_000, h5Btu: 23_000, multiZoneCapable: true }),
    makeCandidate({ id: "single-9", brand: "Gamma", systemKind: "ductless", pairingClass: "single", nominalBtu: 9_000, h5Btu: 8_500 }),
    makeCandidate({ id: "single-24", brand: "Delta", systemKind: "ductless", pairingClass: "single", nominalBtu: 24_000, h5Btu: 24_000 }),
  ];

  it("centrale : aucune multizone, même classée « centrale » au catalogue", () => {
    const out = runThermoMatch({ ...req, pairingClass: "central", systemKind: "central" }, pool);
    expect(out.results.map((r) => r.candidate.id)).toEqual(["central-24"]);
  });

  it("murales indépendantes : calibrées pour la zone la plus chargée, couverture × N unités", () => {
    const out = runThermoMatch({ ...req, pairingClass: "single", systemKind: "ductless", sizingLoadBtuH: 8_000, sizingLabel: "de la zone la plus chargée", heads: 3, independentUnits: true, backupHeatAvailable: false }, pool);
    expect(out.results.map((r) => r.candidate.id)).toEqual(["single-9"]);
    expect(out.results[0].fitRatio).toBe(1.06);
    expect(out.results[0].reasons[0]).toContain("par unité, pour la charge estimée de la zone la plus chargée (8");
    expect(out.results[0].reasons[0]).toContain("× 3 unités : 106 % de la charge de la maison");
    // Des murales voulues : pas d'avertissement « une seule unité intérieure ».
    expect(out.results[0].warnings.join(" ")).not.toContain("une seule unité intérieure");
  });
});
