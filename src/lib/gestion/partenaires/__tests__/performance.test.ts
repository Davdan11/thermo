/* Fiche de performance et niveaux automatiques (Or / Standard / Probation), et leur effet modéré sur le classement. */
import { describe, expect, it } from "vitest";
import { evaluateInstaller } from "../../matching";
import type { ServiceTicket } from "../../sav/types";
import type { FieldRecord } from "../../terrain/types";
import { PHOTO_STEPS } from "../../terrain/types";
import type { Installer, Job } from "../../types";
import { computePerformance } from "../performance";
import { DEFAULT_PARTNER_SETTINGS, type PartnerSettings } from "../types";

const NOW = new Date("2026-09-20T15:00:00Z");
const ID = "i_install0001";
const settings: PartnerSettings = structuredClone(DEFAULT_PARTNER_SETTINGS);

function job(n: number, over: Partial<Job> = {}): Job {
  return {
    id: `j_job${String(n).padStart(7, "0")}`,
    number: n,
    createdAt: "2026-06-01T12:00:00.000Z",
    updatedAt: "2026-06-01T12:00:00.000Z",
    client: { firstName: "Test", lastName: "Client", phone: "514 555-0100", email: "client@exemple.ca", address: "1 rue Exemple", city: "Laval", postalCode: "H7N 1A1" },
    geo: null,
    region: null,
    regionGuess: null,
    brand: null,
    systemType: null,
    modelSlug: null,
    modelLabel: null,
    capacity: "",
    desiredDate: null,
    desiredWindow: "",
    installerNotes: "",
    internalNotes: "",
    status: "termine",
    assignedInstallerId: ID,
    scheduledFor: null,
    completedAt: "2026-06-02T18:00:00.000Z",
    offers: [{ id: `o_off${String(n).padStart(7, "0")}`, installerId: ID, sentAt: "2026-06-01T12:00:00.000Z", channels: { email: "envoye", sms: "envoye" }, tokenHash: "h", expiresAt: "2026-06-03T12:00:00.000Z", distanceKm: 10, response: "accepte", respondedAt: "2026-06-01T13:00:00.000Z" }],
    audit: [],
    ...over,
  };
}

function record(j: Job, opts: { photos?: boolean; flagged?: boolean; late?: boolean } = {}): FieldRecord {
  const photos = opts.photos === false ? [] : PHOTO_STEPS.map((s, i) => ({ id: `f_${j.id.slice(2, 8)}${i}ph`, step: s.id, at: j.completedAt!, takenAt: j.completedAt!, bytes: 1, width: 1, height: 1, ext: "webp" as const, sha256: "x", by: `installateur:${ID}`, ...(opts.flagged && i === 0 ? { review: { status: "signalee" as const, at: j.completedAt!, by: "p" } } : {}) }));
  return {
    jobId: j.id,
    installerId: ID,
    tokens: [],
    plannedAt: "2026-06-02T12:00:00.000Z",
    arrivedAt: opts.late ? "2026-06-02T13:00:00.000Z" : "2026-06-02T12:05:00.000Z",
    checklist: {},
    photos,
    serials: { outdoor: ["ABC123"], indoor: ["DEF456"] },
    events: [],
    appliedOps: [],
    updatedAt: j.completedAt!,
  };
}

const laborTicket = (n: number): ServiceTicket => ({ id: `b_ticket00${n}`, number: n, jobId: null, installerId: ID, source: "client", createdAt: "2026-07-01T12:00:00.000Z", createdBy: "client", description: "x", contactPreference: "", photos: [], cause: "main-oeuvre", causeNote: "", status: "ferme", dueAt: "2026-07-03T12:00:00.000Z", events: [], updatedAt: "2026-07-01T12:00:00.000Z" });

describe("computePerformance", () => {
  it("nouveau partenaire : Standard, rien d'inventé (taux non mesurés = null)", () => {
    const p = computePerformance(ID, { jobs: [], records: {}, tickets: [], settings, now: NOW });
    expect(p).toMatchObject({ installs: 0, laborPer100: null, tier: "standard" });
    expect(p.punctuality.rate).toBeNull();
    expect(p.photos.rate).toBeNull();
    expect(p.payment).toBeNull();
  });

  it("appels de service main-d'œuvre par 100 installations ; appareil et autre ne comptent pas", () => {
    const jobs = Array.from({ length: 20 }, (_, i) => job(i + 1));
    const records = Object.fromEntries(jobs.map((j) => [j.id, record(j)]));
    const other = { ...laborTicket(9), id: "b_ticket009x", cause: "appareil" as const };
    const p = computePerformance(ID, { jobs, records, tickets: [laborTicket(1), other], settings, now: NOW });
    expect(p.laborCalls).toBe(1);
    expect(p.allCalls).toBe(2);
    expect(p.laborPer100).toBe(5);
  });

  it("Or : assez d'installations, photos conformes, ponctuel, peu d'appels", () => {
    const jobs = Array.from({ length: 12 }, (_, i) => job(i + 1));
    const records = Object.fromEntries(jobs.map((j) => [j.id, record(j)]));
    const p = computePerformance(ID, { jobs, records, tickets: [], settings, now: NOW });
    expect(p.photos.rate).toBe(1);
    expect(p.punctuality.rate).toBe(1);
    expect(p.tier).toBe("or");
  });

  it("Probation : photos signalées ou retards répétés au-delà des seuils", () => {
    const jobs = Array.from({ length: 6 }, (_, i) => job(i + 1));
    const flagged = Object.fromEntries(jobs.map((j, i) => [j.id, record(j, { flagged: i < 3 })]));
    const p = computePerformance(ID, { jobs, records: flagged, tickets: [], settings, now: NOW });
    expect(p.photos.flagged).toBe(3);
    expect(p.tier).toBe("probation");
    expect(p.reasons.join(" ")).toMatch(/photos conformes : 50 %/);
    const late = Object.fromEntries(jobs.map((j) => [j.id, record(j, { late: true })]));
    expect(computePerformance(ID, { jobs, records: late, tickets: [], settings, now: NOW }).tier).toBe("probation");
  });

  it("niveau imposé par le propriétaire : remplace le niveau automatique", () => {
    const p = computePerformance(ID, { jobs: [], records: {}, tickets: [], settings, now: NOW, partner: { installerId: ID, compliance: { rbq: { number: "", issuer: "", expiresOn: null, coverage: "" }, assurance: { number: "", issuer: "", expiresOn: null, coverage: "" } }, tierOverride: { tier: "probation", reason: "test", at: NOW.toISOString(), by: "p" }, ended: null, history: [], citations: [] } });
    expect(p).toMatchObject({ autoTier: "standard", tier: "probation" });
  });

  it("commission en retard (volet B) : probation", () => {
    const p = computePerformance(ID, { jobs: [], records: {}, tickets: [], settings, now: NOW, payment: { invoices: 2, paid: 1, late: 1, medianDaysToPay: 4 } });
    expect(p.tier).toBe("probation");
  });
});

describe("classement des jobs", () => {
  const installer: Installer = { id: ID, company: "Clim", contactName: "A", phone: "514 555-0101", email: "a@exemple.ca", rbq: "", basePostalCode: "H7N 1A1", base: null, radiusKm: 60, extraRegions: ["13"], brands: [], systemTypes: [], active: true, maxOpenJobs: null, notes: "", createdAt: "2026-01-01T12:00:00.000Z", updatedAt: "2026-01-01T12:00:00.000Z" };
  const target = job(99, { status: "nouveau", assignedInstallerId: null, offers: [], region: "13" });

  it("points du niveau ajoutés au score (poids modéré), raison affichée", () => {
    const base = evaluateInstaller(target, installer, [], { now: NOW });
    const or = evaluateInstaller(target, installer, [], { now: NOW, partner: () => ({ blockers: [], tierPoints: 6, tierLabel: "niveau Or (+6)" }) });
    const pro = evaluateInstaller(target, installer, [], { now: NOW, partner: () => ({ blockers: [], tierPoints: -10, tierLabel: "niveau Probation (−10)" }) });
    expect(or.score - base.score).toBe(6);
    expect(base.score - pro.score).toBe(10);
    expect(or.reasons).toContain("niveau Or (+6)");
    expect(or.eligible).toBe(base.eligible);
  });

  it("partenaire bloqué : raison du blocage parmi les exclusions, jamais admissible", () => {
    const c = evaluateInstaller(target, installer, [], { now: NOW, partner: () => ({ blockers: ["Licence RBQ expirée le 19 septembre 2026"], tierPoints: 0, tierLabel: null }) });
    expect(c.eligible).toBe(false);
    expect(c.failures).toContain("Licence RBQ expirée le 19 septembre 2026");
  });
});
