/* Chantier P — plans d'entretien : aucun prix par défaut, adhésion (conditions requises, consentement), génération
   annuelle des visites (job « entretien » offert d'abord à l'installateur d'origine, rappel au client, jamais deux
   fois), commission de la visite au pourcentage du plan (mécanisme du volet B), revenus récurrents, invitation
   « choisissez votre date ». Données fictives ; aucun vrai courriel, texto ni offre. */
import { rm } from "node:fs/promises";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { issueInvoiceForJob } from "../../commissions/service";
import { ensureDossier } from "../../automatisations/store";
import { readGestion } from "../../store";
import type { Job } from "../../types";
import { fakeChannels, makeInstaller, makeJob, tempDir, testEnv, writeStores } from "../../commissions/__tests__/fixtures";
import { recurringRevenue } from "../rules";
import { addSlots, cancelMembership, enrollByOwner, getPortalView, joinPlan, savePlan, savePortalSettings } from "../service";
import { readPortal } from "../store";
import { runPortalTick, type PortalTickOptions } from "../tick";
import type { Membership } from "../types";
import { BY, INST, JOB_A, twoProjects, writeProjects } from "./helpers";

const JOIN = new Date("2026-01-10T15:00:00Z");
const env = process.env;
let dir: string;

beforeEach(async () => {
  dir = await tempDir();
  process.env = testEnv(dir);
  vi.stubGlobal("fetch", vi.fn(async () => { throw new Error("réseau interdit dans les tests"); }));
});
afterEach(async () => {
  process.env = env;
  vi.unstubAllGlobals();
  await rm(dir, { recursive: true, force: true });
});

async function plan(over: Partial<{ priceCents: number | null; commissionPercent: number | null; active: boolean }> = {}): Promise<string> {
  const r = await savePlan({ name: "Entretien test", priceCents: 24900, includes: ["Nettoyage des filtres", "Vérification du drain"], commissionPercent: 15, active: true, ...over }, BY, undefined, JOIN);
  if (!r.ok) throw new Error(r.error);
  return r.id;
}

/** Installation terminée le 15 octobre 2025 : première visite due le 15 octobre 2026. */
async function member(): Promise<{ planId: string }> {
  const origin = makeJob({ id: JOB_A, number: 30, status: "termine", completedAt: "2025-10-15T18:00:00.000Z", scheduledFor: "2025-10-15" });
  await writeStores(dir, { jobs: [origin], installers: [makeInstaller({ id: INST })] });
  const planId = await plan();
  await savePortalSettings({ conditionsText: "Conditions fictives de test." }, BY, JOIN);
  const r = await enrollByOwner(JOB_A, planId, "accepté au téléphone (test)", BY, { now: JOIN, channels: fakeChannels().ch, baseUrl: "https://exemple.ca" });
  expect(r.ok).toBe(true);
  return { planId };
}

describe("plans et adhésions", () => {
  it("aucun prix par défaut : un plan sans prix ni commission ne peut pas être offert", async () => {
    await writeStores(dir, {});
    expect(await savePlan({ name: "Sans prix", priceCents: null, includes: [], commissionPercent: null, active: true }, BY)).toMatchObject({ ok: false, code: "incomplet" });
    const draft = await savePlan({ name: "Brouillon", priceCents: null, includes: [], commissionPercent: null, active: false }, BY);
    expect(draft.ok).toBe(true);
    expect((await readPortal()).plans[0]).toMatchObject({ priceCents: null, commissionPercent: null, active: false });
  });

  it("adhésion dans le portail : fermée tant que les conditions sont « à rédiger », puis consentement et montants figés", async () => {
    await writeStores(dir, { jobs: [makeJob({ id: JOB_A, number: 30 })] });
    const token = (await ensureDossier(JOB_A, JOIN)).token;
    const planId = await plan();
    const f = fakeChannels();
    const ctx = { ip: "203.0.113.7", userAgent: "test" };
    expect((await getPortalView(token, JOIN))!.maintenance).toMatchObject({ conditions: null, canJoin: false });
    expect(await joinPlan(token, { planId, typedName: "Camille Exemple", accepted: true, ...ctx }, { now: JOIN, channels: f.ch })).toMatchObject({ ok: false, code: "conditions" });

    await savePortalSettings({ conditionsText: "Conditions fictives de test." }, BY, JOIN);
    expect(await joinPlan(token, { planId, typedName: "Camille Exemple", accepted: false, ...ctx }, { now: JOIN, channels: f.ch })).toMatchObject({ ok: false, code: "consentement" });
    expect(await joinPlan(token, { planId, typedName: "Camille", accepted: true, ...ctx }, { now: JOIN, channels: f.ch })).toMatchObject({ ok: false, code: "nom" });
    expect(await joinPlan(token, { planId, typedName: "Camille Exemple", accepted: true, ...ctx }, { now: JOIN, channels: f.ch })).toEqual({ ok: true });
    expect(await joinPlan(token, { planId, typedName: "Camille Exemple", accepted: true, ...ctx }, { now: JOIN, channels: f.ch })).toMatchObject({ ok: false, code: "deja" });

    const m = (await readPortal()).memberships[0];
    expect(m).toMatchObject({ jobId: JOB_A, installerId: INST, source: "portail", status: "active", plan: { priceCents: 24900, commissionPercent: 15 }, consent: { typedName: "Camille Exemple", ip: "203.0.113.7" } });
    expect(m.consent.conditionsSha256).toMatch(/^[0-9a-f]{64}$/);
    // Le prix du plan change ensuite : l'adhésion garde son montant.
    await savePlan({ name: "Entretien test", priceCents: 29900, includes: [], commissionPercent: 20, active: true }, BY, planId);
    expect((await readPortal()).memberships[0].plan).toMatchObject({ priceCents: 24900, commissionPercent: 15 });
    expect(f.count("clientMail", "adhésion")).toBe(1);
    expect(f.count("ownerMail", "adhésion")).toBe(1);
  });
});

describe("visites d'entretien annuelles", () => {
  const offers: Array<{ jobId: string; ids: string[] }> = [];
  const f = fakeChannels();
  const opts = (now: string): PortalTickOptions => ({
    now: new Date(now),
    channels: f.ch,
    baseUrl: "https://exemple.ca",
    startedAt: "2026-01-01T00:00:00.000Z",
    offer: async (jobId, ids) => (offers.push({ jobId, ids }), { sent: 1, errors: [] }),
  });
  beforeEach(() => {
    offers.length = 0;
    f.calls.length = 0;
  });
  const visits = async (): Promise<Job[]> => (await readGestion()).jobs.filter((j) => j.kind === "entretien");

  it("chaque année, un job « entretien » offert d'abord à l'installateur d'origine, avec rappel au client, jamais deux fois", async () => {
    await member();
    expect((await runPortalTick(opts("2026-09-10T14:00:00Z"))).visits).toBe(0); // 35 jours avant : trop tôt

    expect((await runPortalTick(opts("2026-09-16T14:00:00Z"))).visits).toBe(1); // 29 jours avant (30 par défaut)
    const [v1] = await visits();
    expect(v1).toMatchObject({ kind: "entretien", status: "nouveau", desiredDate: "2026-10-15", assignedInstallerId: null, client: { firstName: "Camille" }, maintenance: { visit: 1, originJobId: JOB_A, priceCents: 24900, commissionPercent: 15, planName: "Entretien test" } });
    expect(offers).toEqual([{ jobId: v1.id, ids: [INST] }]);
    expect(f.count("clientMail", "visite")).toBe(1);
    expect(f.count("clientSms", "visite")).toBe(1);

    expect((await runPortalTick(opts("2026-09-16T14:05:00Z"))).visits).toBe(0);
    expect(await visits()).toHaveLength(1);
    expect(offers).toHaveLength(1);
    expect((await readPortal()).memberships[0].visits).toMatchObject([{ n: 1, dueDay: "2026-10-15", jobId: v1.id, offer: "offerte à l’installateur d’origine" }]);

    expect((await runPortalTick(opts("2027-09-20T14:00:00Z"))).visits).toBe(1);
    expect((await visits()).map((j) => j.maintenance!.visit).sort()).toEqual([1, 2]);
  });

  it("offre impossible : alerte au propriétaire ; adhésion annulée : plus aucune visite", async () => {
    await member();
    const o = { ...opts("2026-09-16T14:00:00Z"), offer: async () => ({ sent: 0, errors: ["Climatisation Exemple : offres en pause"] }) };
    expect((await runPortalTick(o)).visits).toBe(1);
    expect(f.count("ownerMail", "visite")).toBe(1);
    expect((await readPortal()).memberships[0].visits[0].offer).toContain("non offerte");

    const m = (await readPortal()).memberships[0];
    expect((await cancelMembership(m.id, "déménagement", BY)).ok).toBe(true);
    expect((await runPortalTick(opts("2027-09-20T14:00:00Z"))).visits).toBe(0);
  });

  it("facture de commission de la visite terminée : prix et pourcentage du plan, par la facture du volet B", async () => {
    const visit = makeJob({
      id: "j_visite00001",
      number: 31,
      kind: "entretien",
      maintenance: { membershipId: "m_test0000001", planId: "p_test0000001", planName: "Entretien test", priceCents: 24900, commissionPercent: 15, visit: 1, originJobId: JOB_A, joinedAt: "2026-01-10T15:00:00.000Z" },
      status: "termine",
      completedAt: "2026-10-15T18:00:00.000Z",
      internalNotes: "",
    });
    await writeStores(dir, { jobs: [visit], quotes: [] });
    const ch = fakeChannels();
    const r = await issueInvoiceForJob("j_visite00001", BY, { now: new Date("2026-10-16T13:00:00Z"), channels: ch.ch, baseUrl: "https://exemple.ca" });
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.invoice).toMatchObject({ jobId: "j_visite00001", baseCents: 24900, percent: 15, commissionCents: 3735, quoteNumber: "Plan « Entretien test »", acceptedAt: "2026-01-10T15:00:00.000Z" });
    expect(r.invoice.totalCents).toBeGreaterThanOrEqual(3735);
    expect(ch.count("installerMail")).toBe(1);
  });

  it("revenus récurrents : montants figés des adhésions actives seulement", () => {
    const m = (id: string, priceCents: number, commissionPercent: number, status: Membership["status"]) => ({ id, planId: "p", plan: { name: "x", priceCents, commissionPercent, includes: [] }, jobId: id, installerId: null, source: "portail", joinedAt: "2026-01-01T00:00:00.000Z", consent: {} as Membership["consent"], status, visits: [] }) as Membership;
    expect(recurringRevenue([m("a", 24900, 15, "active"), m("b", 39900, 10, "active"), m("c", 99900, 50, "annulee")])).toEqual({ active: 2, annualValueCents: 64800, annualCommissionCents: 3735 + 3990 });
  });
});

describe("invitation à choisir sa date", () => {
  it("dès que l'installateur publie des moments, chaque client attribué sans date est invité une seule fois", async () => {
    await writeProjects(dir, twoProjects());
    const f = fakeChannels();
    const o: PortalTickOptions = { now: new Date("2026-09-20T15:00:00Z"), channels: f.ch, baseUrl: "https://exemple.ca", startedAt: "2026-09-01T00:00:00.000Z", offer: async () => ({ sent: 0, errors: [] }) };
    expect((await runPortalTick(o)).invites).toBe(0); // aucun moment publié
    await addSlots(INST, { day: "2026-09-25", start: "08:00", end: "12:00", repeatWeeks: 0 }, BY, o.now);
    expect((await runPortalTick(o)).invites).toBe(2);
    expect(f.count("clientSms", "choisir")).toBe(2);
    expect(f.calls.find((c) => c.kind === "clientSms")!.body).toContain("https://exemple.ca/projet/");
    expect((await runPortalTick(o)).invites).toBe(0);
  });
});
