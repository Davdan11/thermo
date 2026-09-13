/* Chantier R — zones sans installateur, bloquées, saturées ; tâches de recrutement avec le vrai nombre de demandes ;
   évaluation des candidatures. Données fictives. */
import { describe, expect, it } from "vitest";
import { AUTO_TASK_RE } from "../../crm/types";
import type { MuniGroup } from "@/lib/seo/municipalites";
import { fsaPoint, locateDemand, type LocatedDemand, type MuniIndex } from "../geo";
import { evaluateCandidature, recruitTasks } from "../recrutement";
import { reseauAutoTasks } from "../tasks";
import { buildZones, installerSaturation, type CoverageInstaller } from "../zones";

const group: MuniGroup = { key: "MRC-T01", kind: "MRC", code: "T01", name: "Fictive-du-Sud", label: "MRC de Fictive-du-Sud", region: "16", slug: null, hub: { ok: false, reason: null }, centroid: [45.3, -73.3], members: [] };
const idx: MuniIndex = { byName: new Map(), groups: new Map([[group.key, group]]), groupsByFsa: new Map(), points: [] };

const point = (lat: number, lon: number) => ({ lat, lon, precision: "rta" as const, label: "Ville Fictive" });
function demand(id: string, at: string, over: Partial<LocatedDemand> = {}): LocatedDemand {
  return { id, at, fsa: "J0Z", fsaPoint: point(45.3, -73.3), muni: null, groupKey: null, region: "16", ...over };
}
function installer(id: string, over: Partial<CoverageInstaller> = {}): CoverageInstaller {
  return { id, company: `Installateur ${id}`, active: true, ended: false, base: { lat: 45.3, lon: -73.3 }, radiusKm: 30, extraRegions: [], blockers: [], load: 0, maxOpenJobs: null, upcoming7: 0, weeklyCapacity: null, ...over };
}
const far = { lat: 48.4, lon: -71.1 };
const three = [demand("d1", "2026-09-01T12:00:00.000Z"), demand("d2", "2026-09-05T12:00:00.000Z"), demand("d3", "2026-09-10T12:00:00.000Z")];

describe("couverture des zones", () => {
  it("demandes sans installateur : zone orpheline, avec le vrai nombre de demandes", () => {
    const { zones, total, unlocated } = buildZones(three, [installer("a", { base: far })], { mode: "rta", idx });
    expect(total).toBe(3);
    expect(unlocated).toBe(0);
    expect(zones).toHaveLength(1);
    expect(zones[0]).toMatchObject({ key: "rta:J0Z", status: "sans-installateur", demands: 3, lastDemandId: "d3" });
  });

  it("installateur dans son rayon : couverte ; hors rayon mais région cochée : couverte aussi", () => {
    expect(buildZones(three, [installer("a")], { mode: "rta", idx }).zones[0].status).toBe("couverte");
    const viaRegion = buildZones(three, [installer("b", { base: far, extraRegions: ["16"] })], { mode: "rta", idx }).zones[0];
    expect(viaRegion.status).toBe("couverte");
    expect(viaRegion.covering[0].via).toBe("region");
  });

  it("installateur inactif ou partenariat terminé : ne couvre pas", () => {
    expect(buildZones(three, [installer("a", { active: false }), installer("b", { ended: true })], { mode: "rta", idx }).zones[0].status).toBe("sans-installateur");
  });

  it("tous bloqués : « installateurs bloqués » ; complets : « saturée »", () => {
    expect(buildZones(three, [installer("a", { blockers: ["Licence RBQ absente"] })], { mode: "rta", idx }).zones[0].status).toBe("bloquee");
    const sat = buildZones(three, [installer("a", { load: 2, maxOpenJobs: 2 })], { mode: "rta", idx }).zones[0];
    expect(sat.status).toBe("saturee");
    expect(sat.covering[0].reason).toBe("complet : 2 jobs sur 2");
    expect(installerSaturation({ load: 0, maxOpenJobs: null, upcoming7: 5, weeklyCapacity: 5 })).toMatch(/agenda plein/);
    expect(buildZones(three, [installer("a", { load: 2, maxOpenJobs: 2 }), installer("b")], { mode: "rta", idx }).zones[0].status).toBe("couverte");
  });

  it("par MRC : regroupées sous la MRC ; période : seules les demandes récentes comptent ; sans lieu : comptées à part", () => {
    const list = [...three.map((d) => ({ ...d, groupKey: group.key })), demand("d4", "2026-09-11T12:00:00.000Z", { fsa: null, fsaPoint: null })];
    const r = buildZones(list, [], { mode: "mrc", idx, since: "2026-09-04T00:00:00.000Z" });
    expect(r.total).toBe(3);
    expect(r.unlocated).toBe(1);
    expect(r.zones[0]).toMatchObject({ key: "mrc:MRC-T01", label: "MRC de Fictive-du-Sud", place: "Fictive-du-Sud", demands: 2 });
  });

  it("classement : zones orphelines d'abord, puis par nombre de demandes", () => {
    const covered = [demand("x1", "2026-09-01T12:00:00.000Z", { fsa: "H0H", fsaPoint: point(46.8, -71.2) }), demand("x2", "2026-09-02T12:00:00.000Z", { fsa: "H0H", fsaPoint: point(46.8, -71.2) })];
    const zones = buildZones([...covered, three[0]], [installer("q", { base: { lat: 46.8, lon: -71.2 } })], { mode: "rta", idx }).zones;
    expect(zones.map((z) => z.status)).toEqual(["sans-installateur", "couverte"]);
  });

  it("position d'une RTA : table du dépôt, jamais inventée", () => {
    expect(fsaPoint("J4B")).not.toBeNull();
    expect(locateDemand({ id: "z", at: "2026-09-01T00:00:00.000Z", postalCode: "pas un code" }, idx)).toMatchObject({ fsa: null, fsaPoint: null, muni: null });
  });
});

describe("tâches de recrutement", () => {
  const settings = { recruitMinDemands: 2, recruitDays: 90 };

  it("« Recruter à … » avec le nombre réel de demandes ; rien sous le seuil ni pour une zone couverte", () => {
    const zones = buildZones(three.map((d) => ({ ...d, groupKey: group.key })), [], { mode: "mrc", idx }).zones;
    const tasks = recruitTasks(zones, settings);
    expect(tasks).toHaveLength(1);
    expect(tasks[0]).toMatchObject({ rule: "reseau-recrutement", title: "Recruter à Fictive-du-Sud", detail: "3 demandes en 90 jours · aucun installateur", dueAt: "2026-09-10T12:00:00.000Z" });
    expect(tasks[0].key).toMatch(AUTO_TASK_RE);
    expect(recruitTasks(buildZones([three[0]], [], { mode: "rta", idx }).zones, settings)).toEqual([]);
    expect(recruitTasks(buildZones(three, [installer("a")], { mode: "rta", idx }).zones, settings)).toEqual([]);
  });

  it("une nouvelle demande fait revenir la tâche (nouvelle clé)", () => {
    const k1 = recruitTasks(buildZones(three, [], { mode: "rta", idx }).zones, settings)[0].key;
    const k2 = recruitTasks(buildZones([...three, demand("d9", "2026-09-12T12:00:00.000Z")], [], { mode: "rta", idx }).zones, settings)[0].key;
    expect(k2).not.toBe(k1);
  });

  it("reseauAutoTasks : fenêtre de la période respectée", () => {
    const input = { rbq: [], demands: three, installers: [], settings, stock: [] };
    expect(reseauAutoTasks(input, new Date("2026-09-15T12:00:00Z")).map((t) => t.rule)).toEqual(["reseau-recrutement"]);
    expect(reseauAutoTasks(input, new Date("2027-03-01T12:00:00Z"))).toEqual([]);
    expect(reseauAutoTasks(undefined, new Date())).toEqual([]);
  });
});

describe("évaluation des candidatures", () => {
  const cand = (over: Partial<Parameters<typeof evaluateCandidature>[0]> = {}) => ({ id: "c_cand000001", receivedAt: "2026-09-10T12:00:00.000Z", company: "Candidat Fictif", rbq: "0000-0000-05", contact: "", phone: "", email: "", brandsText: "Daikin, Marque Inconnue", regionText: "Montérégie", volume: "", status: "nouvelle" as const, ...over });
  const zones = buildZones(three, [], { mode: "rta", idx }).zones;
  const brands = [{ id: "daikin", name: "Daikin" }];
  const source = { url: "x", fetchedAt: "2026-09-12T07:00:00.000Z", lastModified: null, licences: 1 };

  it("comble un trou, RBQ active, marque reconnue : points détaillés", () => {
    const e = evaluateCandidature(cand(), { zones, brands, rbq: { checkedAt: source.fetchedAt, number: "0000-0000-05", outcome: "active", subcategories: [], missingSubcategories: [], source } });
    expect(e.gapDemands).toBe(3);
    expect(e.points).toEqual({ trou: 30, rbq: 30, marques: 5 });
    expect(e.score).toBe(65);
    expect(e.reasons.join(" ")).toMatch(/comble 1 zone/);
  });

  it("licence absente : points retirés et avertissement ; pas vérifiée : aucun statut inventé", () => {
    const absent = evaluateCandidature(cand(), { zones, brands, rbq: { checkedAt: source.fetchedAt, number: "0000-0000-05", outcome: "introuvable", subcategories: [], missingSubcategories: [], source } });
    expect(absent.points.rbq).toBe(-40);
    const none = evaluateCandidature(cand(), { zones, brands, rbq: null });
    expect(none.points.rbq).toBe(0);
    expect(none.warnings).toContain("licence RBQ pas encore vérifiée au fichier de la RBQ");
  });

  it("région qui ne touche aucun trou : aucun point de trou", () => {
    const e = evaluateCandidature(cand({ regionText: "Gaspésie" }), { zones, brands, rbq: null });
    expect(e.points.trou).toBe(0);
  });
});
