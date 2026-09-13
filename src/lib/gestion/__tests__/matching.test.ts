/* Admissibilité, classement par points et « presque » avec la raison qui bloque. */
import { describe, expect, it } from "vitest";
import { evaluateInstaller, matchInstallers } from "../matching";
import type { GeoPoint, Installer, Job, Offer } from "../types";

const now = new Date("2026-09-12T15:00:00Z");
const at = (lat: number, lon: number, city: string): GeoPoint => ({ lat, lon, city, precision: "ville" });
const MTL = at(45.5019, -73.5674, "Montréal");
const LAVAL = at(45.6066, -73.7124, "Laval");
const LONGUEUIL = at(45.5312, -73.5181, "Longueuil");
const QUEBEC = at(46.8139, -71.208, "Québec");
const SHERBROOKE = at(45.4042, -71.8929, "Sherbrooke");
const brandLabel = (id: string) => ({ daikin: "Daikin", fujitsu: "Fujitsu" })[id] ?? id;
const opts = { now, brandLabel };

let seq = 0;
function inst(p: Partial<Installer> & { company: string }): Installer {
  seq++;
  return {
    id: `i_test${String(seq).padStart(6, "0")}`,
    contactName: "Contact",
    phone: "514 555-0000",
    email: `inst${seq}@exemple.ca`,
    rbq: "",
    basePostalCode: "H2X 1Y4",
    base: MTL,
    radiusKm: 60,
    extraRegions: [],
    brands: ["daikin"],
    systemTypes: [],
    active: true,
    maxOpenJobs: null,
    notes: "",
    createdAt: now.toISOString(),
    updatedAt: now.toISOString(),
    ...p,
  };
}

function job(p: Partial<Job> = {}): Job {
  return {
    id: `j_test${String(++seq).padStart(6, "0")}`,
    number: seq,
    createdAt: now.toISOString(),
    updatedAt: now.toISOString(),
    client: { firstName: "Marie", lastName: "Tremblay", phone: "514-555-1234", email: "", address: "", city: "Montréal", postalCode: "H2X 1Y4" },
    geo: MTL,
    region: "06",
    regionGuess: "06",
    brand: "daikin",
    systemType: "central-ducted",
    modelSlug: null,
    modelLabel: null,
    capacity: "",
    desiredDate: null,
    desiredWindow: "",
    installerNotes: "",
    internalNotes: "",
    status: "nouveau",
    assignedInstallerId: null,
    scheduledFor: null,
    offers: [],
    audit: [],
    ...p,
  };
}

function offer(installerId: string, p: Partial<Offer> = {}): Offer {
  return {
    id: `o_test${String(++seq).padStart(6, "0")}`,
    installerId,
    sentAt: "2026-09-10T12:00:00Z",
    channels: { email: "envoye", sms: "non-configure" },
    tokenHash: `hash${seq}`,
    expiresAt: "2026-09-20T12:00:00Z",
    distanceKm: 10,
    response: null,
    ...p,
  };
}

describe("admissibilité", () => {
  it("dans le rayon, vend la marque, fait le type : admissible, raisons en clair", () => {
    const a = inst({ company: "A", base: LAVAL, systemTypes: ["central-ducted", "wall-single"] });
    const c = evaluateInstaller(job(), a, [], opts);
    expect(c.eligible).toBe(true);
    expect(c.failures).toEqual([]);
    expect(c.reasons[0]).toMatch(/^à 1\d km$/);
    expect(c.reasons).toEqual(expect.arrayContaining(["vend Daikin", "fait les centrales", "aucun job en cours", "peu d’historique"]));
    expect(c.points).toMatchObject({ marque: 40, charge: 20, historique: 5 });
    expect(c.points.distance).toBe(Math.round(30 - (c.distanceKm ?? 0) / 4));
  });

  it("hors du rayon mais région cochée : admissible grâce à la région", () => {
    const b = inst({ company: "B", base: QUEBEC, extraRegions: ["06"] });
    const c = evaluateInstaller(job(), b, [], opts);
    expect(c.eligible).toBe(true);
    expect(c.viaRegion).toBe(true);
    expect(c.reasons[0]).toMatch(/^dessert Montréal \(2\d\d km\)$/);
  });

  it("aucun type coché = tous les types", () => {
    expect(evaluateInstaller(job({ systemType: "cassette" }), inst({ company: "T" }), [], opts).eligible).toBe(true);
  });

  it("chaque critère manquant donne sa raison", () => {
    const j = job();
    const cases: Array<[Installer, string | RegExp, Job[]?]> = [
      [inst({ company: "Loin", base: SHERBROOKE }), /^hors zone : 1\d\d km \(rayon 60 km\)$/],
      [inst({ company: "Marque", brands: ["fujitsu"] }), "ne vend pas Daikin"],
      [inst({ company: "Pause", active: false }), "en pause"],
      [inst({ company: "Type", systemTypes: ["wall-single"] }), "ne fait pas les centrales"],
      [inst({ company: "Sans position", base: null }), "position inconnue"],
    ];
    for (const [i, reason] of cases) {
      const c = evaluateInstaller(j, i, [], opts);
      expect(c.eligible, i.company).toBe(false);
      expect(c.failures.some((f) => (typeof reason === "string" ? f === reason : reason.test(f))), `${i.company} : ${c.failures.join(" | ")}`).toBe(true);
    }
  });

  it("a refusé ou laissé expirer une offre sur ce job : écarté", () => {
    const r = inst({ company: "Refus" });
    const e = inst({ company: "Expiré" });
    const j = job({ offers: [offer(r.id, { response: "refuse", reason: "trop loin" }), offer(e.id, { expiresAt: "2026-09-11T12:00:00Z" })] });
    expect(evaluateInstaller(j, r, [j], opts).failures).toContain("a refusé ce job");
    expect(evaluateInstaller(j, e, [j], opts).failures).toContain("n’a pas répondu à l’offre (expirée)");
  });

  it("plafond de jobs simultanés atteint : complet", () => {
    const g = inst({ company: "Plein", maxOpenJobs: 1 });
    const busy = job({ status: "attribue", assignedInstallerId: g.id });
    const c = evaluateInstaller(job(), g, [busy], opts);
    expect(c.failures).toContain("complet : 1 job sur 1");
    expect(evaluateInstaller(job(), inst({ company: "Libre", maxOpenJobs: 2 }), [busy], opts).eligible).toBe(true);
  });
});

describe("classement", () => {
  it("distance, puis charge, puis historique ; les points s'additionnent", () => {
    const here = inst({ company: "Ici" }); // 0 km
    const laval = inst({ company: "Laval", base: LAVAL }); // ~16 km, aucune charge
    const busy = inst({ company: "Longueuil occupé", base: LONGUEUIL }); // ~4 km, 2 jobs
    const jobs = [job({ status: "attribue", assignedInstallerId: busy.id }), job({ status: "planifie", assignedInstallerId: busy.id })];
    const r = matchInstallers(job(), [busy, laval, here], jobs, opts);
    expect(r.ranked.map((c) => c.installer.company)).toEqual(["Ici", "Laval", "Longueuil occupé"]);
    expect(r.ranked[2].reasons).toContain("2 jobs en cours");
    expect(r.ranked[2].points.charge).toBe(6);
  });

  it("à distance et charge égales, le meilleur taux d'acceptation passe devant", () => {
    const good = inst({ company: "Accepte" });
    const bad = inst({ company: "Refuse" });
    const past = [0, 1, 2].map(() =>
      job({ status: "termine", offers: [offer(good.id, { response: "accepte" }), offer(bad.id, { response: "refuse" })] }),
    );
    const r = matchInstallers(job(), [bad, good], past, opts);
    expect(r.ranked.map((c) => c.installer.company)).toEqual(["Accepte", "Refuse"]);
    expect(r.ranked[0].reasons).toContain("accepte 100 % des offres");
    expect(r.ranked[1].reasons).toContain("accepte 0 % des offres");
    expect(r.ranked[0].points.historique).toBeGreaterThan(r.ranked[1].points.historique);
  });

  it("offre en attente : hors du classement, dans « offre envoyée »", () => {
    const a = inst({ company: "Attend" });
    const b = inst({ company: "Libre" });
    const j = job({ status: "offert", offers: [offer(a.id)] });
    const r = matchInstallers(j, [a, b], [j], opts);
    expect(r.offered.map((c) => c.installer.company)).toEqual(["Attend"]);
    expect(r.ranked.map((c) => c.installer.company)).toEqual(["Libre"]);
  });

  it("presque : au plus deux critères manquants, la marque avant la distance", () => {
    const noBrand = inst({ company: "Proche sans Daikin", brands: ["fujitsu"] });
    const paused = inst({ company: "En pause avec Daikin", base: LAVAL, active: false });
    const three = inst({ company: "Trois problèmes", brands: ["fujitsu"], active: false, base: SHERBROOKE });
    const r = matchInstallers(job(), [noBrand, paused, three], [], opts);
    expect(r.ranked).toEqual([]);
    expect(r.nearMisses.map((c) => c.installer.company)).toEqual(["En pause avec Daikin", "Proche sans Daikin"]);
    expect(r.nearMisses[1].failures).toEqual(["ne vend pas Daikin"]);
  });
});
