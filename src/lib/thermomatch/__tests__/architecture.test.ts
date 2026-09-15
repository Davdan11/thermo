import { describe, expect, it } from "vitest";
import { existsSync } from "node:fs";
import path from "node:path";
import {
  GUIDE_PANNEAU_100A,
  architectureHint,
  backupNoteFor,
  decideArchitecture,
  designLoadAt,
  headCalibre,
  type ArchitectureDecision,
  type ArchitectureInput,
} from "../architecture";

/* L'architecture d'abord : comment la chaleur sera distribuée, avant de choisir une machine.
   Matrice des règles A1 (conduits), A2 (conduits partiels), L (anciens liens), A4 (sans conduits), A5 (panneau). */

const maison = (over: Partial<ArchitectureInput> = {}): ArchitectureInput => ({
  homeType: "detached",
  floors: 3,
  basement: "unheated",
  currentSystem: "fournaise-gaz",
  designTempC: -23,
  region: "Montréal / Laval",
  ...over,
});
const plinthes = (over: Partial<ArchitectureInput> = {}) => maison({ currentSystem: "electrique", ...over });
const LOAD = { loadBtuH: 24_000 };
/** Nombre à la française, comme dans les textes (espace insécable des milliers). */
const n = (x: number) => x.toLocaleString("fr-CA");
const somme = (d: ArchitectureDecision) => d.zonePlan.reduce((s, z) => s + z.loadBtuH, 0);
const tetes = (d: ArchitectureDecision) => d.zonePlan.filter((z) => z.servedBy === "tete");

describe("A1 : conduits complets, ou probables avec une fournaise", () => {
  it("fournaise au gaz, conduits non précisés → centrale biénergie, à confirmer", () => {
    const d = decideArchitecture(maison(), LOAD);
    expect(d).toMatchObject({ kind: "central-hybrid", pairingClass: "central", heads: 1, rule: "A1", confidence: "a-confirmer", sizingLoadBtuH: 24_000, backup: "fournaise" });
    expect(d.title).toBe("Thermopompe centrale ajoutée à votre fournaise au gaz, qui reste en relève (biénergie)");
    const why = d.why.join(" ");
    expect(why).toContain("fournaise au gaz distribue déjà sa chaleur par des conduits");
    expect(why).toContain("sur vos 3 étages");
    expect(why).toContain("la fournaise prend le relais par grand froid");
    expect(d.checks.map((c) => c.text)).toContain("À confirmer à la visite : état et dimension des conduits, surtout aux étages.");
    expect(d.ruledOut.map((r) => r.kind)).toEqual(["multi-zone", "single-zone"]);
    expect(d.ruledOut[1].why).toContain("Une seule tête murale ne chauffe pas 3 étages");
    expect(d.zonePlan).toEqual([{ label: "Toute la maison (conduits)", loadBtuH: 24_000, headNominalBtu: null, servedBy: "conduits" }]);
    // « Je ne sais pas » à la question des conduits donne la même décision que l'absence de réponse.
    expect(decideArchitecture(maison({ ducts: "ne-sais-pas" }), LOAD).kind).toBe("central-hybrid");
  });

  it("le combustible réel est nommé", () => {
    expect(decideArchitecture(maison({ currentSystem: "fournaise-mazout" }), LOAD).title).toContain("fournaise au mazout");
  });

  it("conduits complets : ferme ; sans fournaise, une centrale seule", () => {
    expect(decideArchitecture(maison({ ducts: "complets" }), LOAD)).toMatchObject({ kind: "central-hybrid", confidence: "ferme" });
    const d = decideArchitecture(maison({ currentSystem: "thermopompe", ducts: "complets" }), LOAD);
    expect(d).toMatchObject({ kind: "central", pairingClass: "central", confidence: "ferme", backup: "inconnu" });
    expect(d.title).toBe("Thermopompe centrale branchée sur vos conduits d'air");
  });

  it("une fournaise déclarée sans conduits ne donne pas une centrale", () => {
    expect(decideArchitecture(maison({ ducts: "aucun", zonesWanted: "par-etage" }), LOAD).pairingClass).not.toBe("central");
  });
});

describe("A2 : conduits partiels", () => {
  it("centrale à confirmer, avec la solution sans conduits en repli", () => {
    const d = decideArchitecture(maison({ ducts: "partiels", zonesWanted: "par-etage", layout: "mixte" }), LOAD);
    expect(d).toMatchObject({ kind: "central-hybrid", rule: "A2", confidence: "a-confirmer" });
    expect(d.alternative?.note).toBe("Si l'inspection révèle des conduits trop petits aux étages, voici la solution sans conduits.");
    expect(d.alternative?.decision).toMatchObject({ kind: "multi-single", heads: 3, pairingClass: "single" });
    expect(d.alternative?.decision.ruledOut.find((r) => r.kind === "central")?.why).toContain("les refaire coûterait plus cher");
  });
});

describe("L : anciens liens (type de thermopompe choisi par le client)", () => {
  it("centrale → A1, conduits probables", () => {
    expect(decideArchitecture(plinthes({ heatPumpType: "centrale" }), LOAD)).toMatchObject({ kind: "central", rule: "L", confidence: "a-confirmer" });
  });
  it("murale → une simple zone", () => {
    expect(decideArchitecture(plinthes({ heatPumpType: "murale" }), LOAD)).toMatchObject({ kind: "single-zone", heads: 1, rule: "L" });
  });
  it("multizone → une multizone, une tête par niveau (4 au plus)", () => {
    expect(decideArchitecture(plinthes({ heatPumpType: "multizone" }), LOAD)).toMatchObject({ kind: "multi-zone", heads: 3, rule: "L" });
    expect(decideArchitecture(plinthes({ heatPumpType: "multizone", floors: 4, basement: "heated" }), LOAD).heads).toBe(4);
  });
  it("ne sait pas → centrale avec une fournaise, sans conduits sinon", () => {
    expect(decideArchitecture(maison({ heatPumpType: "ne-sais-pas" }), LOAD)).toMatchObject({ kind: "central-hybrid", rule: "L" });
    expect(decideArchitecture(plinthes({ heatPumpType: "ne-sais-pas" }), LOAD).pairingClass).not.toBe("central");
  });
  it("les réponses du nouveau parcours ont priorité sur l'ancien type", () => {
    expect(decideArchitecture(plinthes({ heatPumpType: "centrale", zonesWanted: "principal" }), LOAD).kind).toBe("single-zone");
  });
});

describe("A4 : sans conduits", () => {
  it("l'espace principal sur 3 étages : une murale calibrée pour cet étage, pas pour la maison", () => {
    const d = decideArchitecture(plinthes({ zonesWanted: "principal" }), LOAD);
    expect(d).toMatchObject({ kind: "single-zone", heads: 1, sizingLoadBtuH: 8_000, sizingLabel: "de l'espace principal", confidence: "ferme" });
    expect(d.why).toContain("Chauffe l'espace principal ; les autres étages restent sur vos plinthes.");
    expect(tetes(d)).toEqual([{ label: "Rez-de-chaussée (espace principal)", loadBtuH: 8_000, headNominalBtu: 9_000, servedBy: "tete" }]);
    expect(d.zonePlan.filter((z) => z.servedBy === "releve")).toHaveLength(2);
    expect(somme(d)).toBe(24_000);
  });

  it("chaque étage : trois murales indépendantes, chacune calibrée pour son étage", () => {
    const d = decideArchitecture(plinthes({ zonesWanted: "par-etage", placements: ["mur-haut"] }), LOAD);
    expect(d).toMatchObject({ kind: "multi-single", heads: 3, pairingClass: "single", sizingLoadBtuH: 8_000, label: "Murale × 3" });
    expect(d.title).toBe("Trois thermopompes murales indépendantes, une par espace");
    expect(d.ruledOut.map((r) => r.kind)).toEqual(["multi-zone", "central", "single-zone"]);
    expect(d.ruledOut.find((r) => r.kind === "central")?.why).toBe("Pas de conduits : les construire multiplie le coût.");
  });

  it("un seul endroit dehors, ou 4 têtes et plus : une multizone", () => {
    expect(decideArchitecture(plinthes({ zonesWanted: "par-etage", placements: ["un-seul-exterieur"] }), LOAD)).toMatchObject({ kind: "multi-zone", heads: 3, pairingClass: "multi", sizingLoadBtuH: 24_000, label: "Multizone, 3 têtes" });
    const pieces = decideArchitecture(plinthes({ zonesWanted: "pieces" }), LOAD);
    expect(pieces).toMatchObject({ kind: "multi-zone", heads: 4 });
    expect(pieces.checks.map((c) => c.text).join(" ")).toContain("accepte 4 têtes");
  });

  it("aucune multizone ne couvre la charge : des murales indépendantes, et on le dit", () => {
    const d = decideArchitecture(plinthes({ zonesWanted: "pieces", multiZoneFits: () => false }), LOAD);
    expect(d).toMatchObject({ kind: "multi-single", heads: 4, confidence: "a-confirmer" });
    expect(d.why.join(" ")).toContain("Aucune multizone admissible ne couvre");
  });

  it("« Conseillez-moi » : une tête par niveau, une de plus si les pièces sont fermées", () => {
    expect(decideArchitecture(plinthes({ zonesWanted: "ne-sais-pas", layout: "ouvert" }), LOAD).heads).toBe(3);
    expect(decideArchitecture(plinthes({ zonesWanted: "ne-sais-pas", layout: "mixte" }), LOAD).heads).toBe(3);
    const d = decideArchitecture(plinthes({ zonesWanted: "ne-sais-pas", layout: "cloisonne" }), LOAD);
    expect(d.heads).toBe(4);
    // La tête de plus partage l'étage le plus haut, celui des chambres.
    expect(tetes(d).map((z) => z.label)).toEqual(["Rez-de-chaussée", "2e niveau", "3e niveau : chambres (1re tête)", "3e niveau : chambres (2e tête)"]);
    expect(d.confidence).toBe("a-confirmer");
  });

  it("sous-sol chauffé : un niveau de plus, qui reprend ce qu'il ajoute à la charge", () => {
    const d = decideArchitecture(plinthes({ basement: "heated", zonesWanted: "par-etage" }), { loadBtuH: 26_500 });
    expect(d.levels).toBe(4);
    expect(d.heads).toBe(4);
    expect(d.zonePlan[0]).toMatchObject({ label: "Sous-sol", loadBtuH: 2_500 });
    expect(somme(d)).toBe(26_500);
    // Chauffé autrement, à exclure : il ne compte pas.
    expect(decideArchitecture(plinthes({ basement: "heated_excluded", zonesWanted: "par-etage" }), LOAD).levels).toBe(3);
  });

  it("consoles au plancher, plafond accessible : points à vérifier", () => {
    const d = decideArchitecture(plinthes({ zonesWanted: "par-etage", placements: ["plancher", "plafond"] }), LOAD);
    const checks = d.checks.map((c) => c.text).join(" ");
    expect(checks).toContain("aucune console n'est admissible au catalogue ThermoMatch");
    expect(checks).toContain("un petit gainable caché est possible, à évaluer");
    expect(decideArchitecture(plinthes({ zonesWanted: "par-etage", placements: ["plancher", "mur-haut"] }), LOAD).checks.map((c) => c.text).join(" ")).not.toContain("console");
  });

  it("condo : tout le logement, sans question de sous-sol", () => {
    const d = decideArchitecture({ homeType: "condo", floors: 1, basement: "heated", currentSystem: "electrique", zonesWanted: "ne-sais-pas" }, { loadBtuH: 7_000 });
    expect(d).toMatchObject({ kind: "single-zone", levels: 1 });
    expect(d.zonePlan).toEqual([{ label: "Tout le logement", loadBtuH: 7_000, headNominalBtu: 9_000, servedBy: "tete" }]);
  });

  it("la somme du plan des zones retombe sur la charge (±500), pour toutes les combinaisons", () => {
    for (const floors of [1, 2, 3, 4])
      for (const basement of ["none", "unheated", "heated", "heated_excluded"])
        for (const zonesWanted of ["principal", "par-etage", "pieces", "ne-sais-pas"])
          for (const layout of ["ouvert", "mixte", "cloisonne"])
            for (const loadBtuH of [4_000, 9_500, 24_000, 47_500]) {
              const d = decideArchitecture(plinthes({ floors, basement, zonesWanted, layout }), { loadBtuH });
              expect(Math.abs(somme(d) - loadBtuH)).toBeLessThanOrEqual(500);
              expect(tetes(d)).toHaveLength(d.heads);
              expect(d.heads).toBeLessThanOrEqual(5);
              for (const z of tetes(d)) expect(z.headNominalBtu).toBeGreaterThanOrEqual(Math.min(z.loadBtuH, 36_000));
            }
  });
});

describe("A5 : panneau électrique", () => {
  it("100 A, plinthes, trois têtes : un électricien fait le calcul de charge, avec le guide", () => {
    const d = decideArchitecture(plinthes({ zonesWanted: "par-etage", electricalPanel: "100-moins" }), LOAD);
    const c = d.checks.find((x) => x.text.startsWith("Panneau de 100 A"));
    expect(c?.text).toContain("un électricien fait le calcul de charge");
    expect(c?.href).toBe(GUIDE_PANNEAU_100A);
    expect(existsSync(path.resolve(__dirname, "../../../content/guides", `${GUIDE_PANNEAU_100A.split("/").pop()}.md`))).toBe(true);
  });

  it("pas de point à vérifier avec une fournaise en relève, ni pour une petite murale", () => {
    expect(decideArchitecture(maison({ electricalPanel: "100-moins" }), LOAD).checks.some((c) => c.href)).toBe(false);
    expect(decideArchitecture(plinthes({ zonesWanted: "principal", electricalPanel: "100-moins" }), LOAD).checks.some((c) => c.href)).toBe(false);
    expect(decideArchitecture(plinthes({ ducts: "complets", currentSystem: "thermopompe", electricalPanel: "100-moins" }), LOAD).checks.some((c) => c.href)).toBe(true);
  });
});

describe("Relève à la température de calcul", () => {
  it("la charge suit l'écart de température : 24 000 BTU/h à −15 °C, 29 500 à −23 °C", () => {
    expect(designLoadAt(24_000, -23)).toBe(29_500);
    expect(designLoadAt(24_000, -15)).toBe(24_000);
    const d = decideArchitecture(maison(), LOAD);
    expect(d.designLoadBtuH).toBe(29_500);
    expect(d.backupSummary).toBe(
      `Les jours les plus froids à Montréal / Laval (−23 °C), la maison demande environ ${n(29_500)} BTU/h, contre ${n(24_000)} BTU/h à −15 °C. Votre fournaise au gaz reste en relève : elle fournit ce que la thermopompe ne donne plus.`,
    );
  });

  it("par machine : au moins la charge à la température de calcul moins sa capacité à −15 °C ; sous sa limite, la relève couvre tout", () => {
    const d = decideArchitecture(maison(), LOAD);
    expect(backupNoteFor(d, 24_000, null)).toBe(`Relève d'au moins ${n(5_500)} BTU/h à −23 °C.`);
    expect(backupNoteFor(d, 24_000, -20)).toBe(`Relève d'au moins ${n(5_500)} BTU/h à −23 °C. Sous −20 °C, sa température minimale de fonctionnement, la fournaise couvre toute la charge.`);
    expect(backupNoteFor(d, 24_000, -30)).not.toContain("Sous");
    // Murales indépendantes : leur capacité s'additionne.
    const m = decideArchitecture(plinthes({ zonesWanted: "par-etage" }), LOAD);
    expect(backupNoteFor(m, 9_000, -25)).toBe(`Relève d'au moins ${n(2_500)} BTU/h à −23 °C.`);
  });

  it("sans région reconnue : on s'en tient à −15 °C", () => {
    const d = decideArchitecture(maison({ designTempC: null, region: null }), LOAD);
    expect(d.designLoadBtuH).toBeNull();
    expect(d.backupSummary).toContain("Région non reconnue : nous nous en tenons au calcul à −15 °C");
    expect(backupNoteFor(d, 20_000, -20)).toBe(`Relève d'au moins ${n(4_000)} BTU/h à −15 °C ; région non reconnue, nous nous en tenons à ce point de mesure.`);
  });
});

describe("Outils", () => {
  it("calibre indicatif d'une tête : le plus petit calibre courant qui couvre la zone", () => {
    expect(headCalibre(5_500)).toBe(6_000);
    expect(headCalibre(8_000)).toBe(9_000);
    expect(headCalibre(12_000)).toBe(12_000);
    expect(headCalibre(50_000)).toBe(36_000);
  });

  it("architecture pressentie d'après les seules réponses (budget, brouillon de projet)", () => {
    expect(architectureHint(maison())).toEqual({ kind: "central-hybrid", heads: 1 });
    expect(architectureHint(plinthes({ zonesWanted: "principal" }))).toEqual({ kind: "single-zone", heads: 1 });
    expect(architectureHint(plinthes({ zonesWanted: "par-etage" }))).toEqual({ kind: "multi-single", heads: 3 });
  });
});
