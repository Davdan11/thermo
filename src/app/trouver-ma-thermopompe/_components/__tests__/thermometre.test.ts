import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import path from "node:path";
import {
  CERTIF_C,
  DUREE_TOTALE_MAX,
  ECART,
  HAUTEUR,
  basEchelle,
  froidDe,
  planThermometre,
  poserMachines,
  repereRegion,
  tempTexte,
  texteThermometre,
  yDe,
  type MachineThermo,
} from "../thermometre";

/* « Le thermomètre » (haut des résultats ThermoMatch) : positions tirées des données, jamais inventées.
   - température publiée → posée à sa valeur ; certifiée climat froid sans température → au repère
     −15 °C, jamais plus froid ; ni l'une ni l'autre → pas posée ;
   - disposition déterministe, étiquettes sans chevauchement, horloge de 2,5 s au plus. */

const m = (key: string, minTemp: number | null, coldClimate: boolean): MachineThermo => ({ key, brand: `Marque ${key}`, series: "S", minTemp, coldClimate });
const MTL = { region: "Montréal / Laval", designTempC: -23 };

const CAS: MachineThermo[][] = [
  [m("a", null, true), m("b", null, true), m("c", null, true)],
  [m("a", -30, true), m("b", -30, true), m("c", -25, true)],
  [m("a", -15, true), m("b", null, true), m("c", -16, false)],
  [m("a", -25, true), m("b", -26, true), m("c", -24, true)],
  [m("a", -10, false), m("b", -30, true), m("c", -20, true)],
  [m("a", null, false), m("b", null, false), m("c", null, false)],
  [m("a", -35, true)],
];

describe("Le thermomètre : où se posent les machines", () => {
  it("publiée à sa valeur, certifiée au repère −15 °C, sinon non posée", () => {
    const list = [m("a", -30, true), m("b", null, true), m("c", null, false)];
    const { poses, nonPubliees } = poserMachines(list);
    expect(poses.map((p) => [p.kind, p.tempC, p.machines.map((x) => x.rank)])).toEqual([
      ["certifiee", -15, [2]],
      ["publiee", -30, [1]],
    ]);
    expect(nonPubliees.map((x) => x.rank)).toEqual([3]);

    const plan = planThermometre(list);
    expect(plan.poses.find((p) => p.kind === "publiee")!.y).toBe(yDe(-30, -35));
    expect(plan.poses.find((p) => p.kind === "certifiee")!.y).toBe(plan.certifY);
    expect(plan.certifY).toBe(yDe(CERTIF_C, -35));
    expect(plan.mercure).toBe(yDe(-30, -35));
    expect(plan.queue).toBeNull();
  });

  it("une machine sans température publiée n'est jamais placée plus froid que −15 °C", () => {
    const valeurs = [null, -35, -30, -25, -15, -5];
    for (const a of valeurs)
      for (const b of valeurs)
        for (const ccA of [true, false])
          for (const ccB of [true, false]) {
            const list = [m("a", a, ccA), m("b", b, ccB), m("c", null, true)];
            const plan = planThermometre(list, { region: "Abitibi", designTempC: -32 });
            for (const p of plan.poses) {
              for (const x of p.machines) {
                if (list[x.rank - 1].minTemp != null) continue;
                expect(p.kind).toBe("certifiee");
                expect(p.tempC).toBe(CERTIF_C);
                expect(p.y).toBe(yDe(CERTIF_C, plan.bas));
              }
            }
            // Le mercure ne descend sous −15 °C que pour une température publiée.
            if (!list.some((x) => x.minTemp != null && x.minTemp < CERTIF_C)) expect(plan.mercure).toBeLessThanOrEqual(plan.certifY);
            for (const x of plan.nonPubliees) expect(list[x.rank - 1]).toMatchObject({ minTemp: null, coldClimate: false });
          }
  });

  it("mercure jusqu'à la plus froide ; fondu seulement quand elle n'a que sa certification", () => {
    const cc = planThermometre(CAS[0]);
    expect(cc.poses).toHaveLength(1);
    expect(cc.poses[0].machines.map((x) => x.rank)).toEqual([1, 2, 3]);
    expect(cc.mercure).toBe(cc.certifY);
    expect(cc.queue).toBeGreaterThan(0);

    expect(planThermometre(CAS[1]).queue).toBeNull();

    const aucune = planThermometre(CAS[5]);
    expect(aucune.poses).toHaveLength(0);
    expect(aucune.mercure).toBe(0);
    expect(aucune.queue).toBeNull();
    expect(aucune.nonPubliees.map((x) => x.rank)).toEqual([1, 2, 3]);
  });

  it("échelle de 0 à −35 °C, graduée tous les 5 °C ; plus bas seulement si une vraie valeur l'exige", () => {
    const plan = planThermometre([m("a", -25, true)]);
    expect(plan.bas).toBe(-35);
    expect(plan.graduations.filter((g) => g.majeure).map((g) => g.t)).toEqual([0, -5, -10, -15, -20, -25, -30, -35]);
    expect(plan.graduations[0]).toEqual({ t: 0, y: 0, majeure: true });
    expect(plan.graduations.at(-1)!.y).toBe(HAUTEUR);
    expect(basEchelle([-37])).toBe(-40);
    expect(planThermometre([m("a", -37, true)]).bas).toBe(-40);
    expect(planThermometre([m("a", -30, true)], { region: "Nord", designTempC: -35 }).bas).toBe(-35);
  });

  it("repère régional : seulement avec une vraie température de conception et le nom de la région", () => {
    expect(repereRegion(MTL)).toEqual({ region: "Montréal / Laval", tempC: -23 });
    for (const ctx of [null, {}, { region: "Montréal / Laval" }, { region: "Montréal / Laval", designTempC: null }, { region: "Montréal / Laval", designTempC: Number.NaN }, { region: "", designTempC: -23 }, { designTempC: -23 }]) {
      expect(repereRegion(ctx)).toBeNull();
    }
    expect(planThermometre([m("a", -30, true)], MTL).region).toEqual({ region: "Montréal / Laval", tempC: -23, y: yDe(-23, -35) });
    expect(planThermometre([m("a", -30, true)], { region: "Montréal / Laval" }).region).toBeNull();
    expect(planThermometre([m("a", -30, true)], { region: "Montréal / Laval" }).etiquettes.map((e) => e.kind)).not.toContain("region");
  });

  it("disposition déterministe ; étiquettes sans chevauchement, dans l'échelle", () => {
    for (const list of CAS) {
      const a = planThermometre(list, MTL);
      expect(planThermometre(structuredClone(list), { ...MTL })).toEqual(a);
      const tri = [...a.etiquettes].sort((x, y) => x.top - y.top);
      for (let i = 1; i < tri.length; i++) expect(tri[i].top).toBeGreaterThanOrEqual(tri[i - 1].top + tri[i - 1].h + ECART - 0.11);
      for (const e of a.etiquettes) {
        expect(e.top).toBeGreaterThanOrEqual(-ECART);
        expect(e.top + e.h).toBeLessThanOrEqual(a.hauteur + ECART + 0.01);
      }
    }
  });

  it("horloge : les machines se posent une à une, du plus chaud au plus froid, en 2,5 s au plus", () => {
    for (const list of CAS) {
      const plan = planThermometre(list, MTL);
      const t = Object.values(plan.horaire.machines).sort((x, y) => x - y);
      for (let i = 1; i < t.length; i++) expect(t[i] - t[i - 1]).toBeGreaterThanOrEqual(0.17);
      expect(plan.horaire.fin).toBeLessThanOrEqual(DUREE_TOTALE_MAX);
    }
    // −10 °C (rang 1), puis −20 °C (rang 3), puis −30 °C (rang 2).
    const h = planThermometre(CAS[4]).horaire.machines;
    expect(h[1]).toBeLessThan(h[3]);
    expect(h[3]).toBeLessThan(h[2]);
  });

  it("texte pour les lecteurs d'écran : chaque machine et chaque repère, sans chiffre inventé", () => {
    const t = texteThermometre(planThermometre([m("a", -30, true), m("b", null, true), m("c", null, false)], MTL));
    expect(t[0]).toBe("Échelle de froid de 0 °C à −35 °C.");
    expect(t[1]).toBe("1. Marque a S (meilleur choix) : chauffe jusqu’à −30 °C, température minimale publiée par le fabricant.");
    expect(t[2]).toBe("2. Marque b S : certifiée ENERGY STAR climat froid, chauffe encore à −15 °C ; température minimale non publiée.");
    expect(t[3]).toBe("3. Marque c S : température minimale non publiée.");
    expect(t).toContain("Repère : jours les plus froids à Montréal / Laval, −23 °C.");
    expect(t).toContain("Repère : certification ENERGY STAR climat froid, −15 °C.");
  });

  it("même règle que la carte ; températures au format québécois", () => {
    expect(froidDe({ minTemp: -25, coldClimate: false })).toBe("publiee");
    expect(froidDe({ minTemp: null, coldClimate: true, h5: 21000 })).toBe("certifiee");
    expect(froidDe({ minTemp: null, coldClimate: false, h5: 21000 })).toBe("mesuree");
    expect(froidDe({ minTemp: null, coldClimate: false, h5: null })).toBe("aucune");
    expect(tempTexte(-30)).toBe("−30 °C");
    expect(tempTexte(-25.5)).toBe("−25,5 °C");
    expect(tempTexte(0)).toBe("0 °C");
  });

  it("aucun hasard, aucune neige, aucun canvas, aucun filtre CSS dans le thermomètre", () => {
    const dir = path.resolve(__dirname, "..");
    for (const f of ["thermometre.ts", "ThermometreHero.tsx", "results.css"]) {
      const src = readFileSync(path.join(dir, f), "utf8");
      expect(src, f).not.toMatch(/Math\.random/);
      expect(src, f).not.toMatch(/Snowfall|<canvas/);
      expect(src, f).not.toMatch(/(^|[\s;{])filter\s*:/m);
    }
  });
});
