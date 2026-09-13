/* Pause des offres de jobs à un installateur en retard de paiement : calcul, classement des candidats, moteur
   d'envoi (refus même choisi à la main), levée dès le paiement ; statistiques de paiement (fiche de performance). */
import { writeFile, rm } from "node:fs/promises";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const notify = vi.hoisted(() => ({
  notifyOffer: vi.fn(),
  notifyConfirmed: vi.fn(),
  notifyWithdrawn: vi.fn(),
  notifyOwner: vi.fn(),
  sendMagicLink: vi.fn(),
}));
vi.mock("@/lib/gestion/notify", () => notify);

import { evaluateInstaller } from "../../matching";
import { saveInstaller, saveJob, sendOffers } from "../../service";
import { computePaymentStats, loadPaymentBlockers, paymentBlocker } from "../blocker";
import { dueAtFor } from "../calc";
import { markInvoicePaid } from "../service";
import type { CommissionInvoice } from "../types";
import { BY, fakeChannels, makeInstaller, makeJob, tempDir, testEnv } from "./fixtures";

const ISSUED = new Date("2026-09-11T12:30:00Z");
const DUE = dueAtFor(ISSUED, 7).toISOString(); // fin du 18 septembre, Montréal

function invoice(over: Partial<CommissionInvoice> = {}): CommissionInvoice {
  return {
    id: "f_testinv0001",
    number: "COM-2026-0001",
    jobId: "j_testjob0001",
    jobNumber: 7,
    installerId: "i_testinst001",
    installer: { company: "Climatisation Exemple", contactName: "Alex Exemple", email: "alex@exemple.ca", rbq: "" },
    quoteId: "q_testquote01",
    quoteNumber: "2026-0012",
    acceptedAt: "2026-09-01T15:00:00.000Z",
    completedAt: "2026-09-10T18:00:00.000Z",
    issuedAt: ISSUED.toISOString(),
    dueAt: DUE,
    baseCents: 425_000,
    percent: 10,
    commissionCents: 42_500,
    tpsCents: 0,
    tvqCents: 0,
    totalCents: 42_500,
    taxes: { tpsPer100k: 5000, tvqPer100k: 9975, tpsNumber: "", tvqNumber: "" },
    company: { legalName: "Entreprise Exemple inc.", tradeName: "", neq: "", rbq: "", address: "", city: "", postalCode: "", phone: "", email: "", website: "", tps: "", tvq: "", logoId: null },
    jobLabel: "Camille · Laval",
    interac: { email: "", note: "" },
    token: "x".repeat(43),
    status: "emise",
    sends: [],
    events: [],
    ...over,
  };
}

describe("paymentBlocker", () => {
  const s = { graceDays: 0 };
  it("aucune pause avant l’échéance", () => {
    expect(paymentBlocker("i_testinst001", [invoice()], s, new Date("2026-09-18T20:00:00Z"))).toBeNull();
  });
  it("pause dès que l’échéance est passée, raison en clair", () => {
    const b = paymentBlocker({ id: "i_testinst001" }, [invoice()], s, new Date("2026-09-20T15:00:00Z"));
    expect(b?.reason).toMatch(/paiement en retard : facture COM-2026-0001 \(425,00\s\$\), échue depuis 2 jours/);
    expect(b?.overdueCents).toBe(42_500);
  });
  it("jours de grâce respectés", () => {
    expect(paymentBlocker("i_testinst001", [invoice()], { graceDays: 3 }, new Date("2026-09-20T15:00:00Z"))).toBeNull();
    expect(paymentBlocker("i_testinst001", [invoice()], { graceDays: 3 }, new Date("2026-09-22T15:00:00Z"))).not.toBeNull();
  });
  it("levée dès le paiement ; une facture annulée ne bloque pas ; un autre installateur n’est pas touché", () => {
    const late = new Date("2026-10-01T15:00:00Z");
    expect(paymentBlocker("i_testinst001", [invoice({ status: "payee" })], s, late)).toBeNull();
    expect(paymentBlocker("i_testinst001", [invoice({ status: "annulee" })], s, late)).toBeNull();
    expect(paymentBlocker("i_autreinst01", [invoice()], s, late)).toBeNull();
  });
  it("le classement des candidats écarte l’installateur bloqué, avec la raison", () => {
    const inst = makeInstaller();
    const job = makeJob({ status: "nouveau", assignedInstallerId: null, geo: { lat: 45.6, lon: -73.7, city: "Laval", precision: "fsa" } as never });
    const free = evaluateInstaller(job, inst, [], { now: new Date() });
    expect(free.eligible).toBe(true);
    const blocked = evaluateInstaller(job, inst, [], { now: new Date(), blockers: () => "paiement en retard : facture COM-2026-0001" });
    expect(blocked.eligible).toBe(false);
    expect(blocked.failures).toContain("paiement en retard : facture COM-2026-0001");
  });
  it("statistiques de paiement : délai moyen, à temps, retard", () => {
    const now = new Date("2026-10-20T15:00:00Z");
    const list = [
      invoice({ id: "f_a000000001", status: "payee", payment: { date: "2026-09-15", method: "interac", reference: "", recordedAt: "2026-09-15T15:00:00Z", by: BY } }),
      invoice({ id: "f_a000000002", status: "payee", issuedAt: "2026-09-20T12:00:00Z", dueAt: dueAtFor(new Date("2026-09-20T12:00:00Z"), 7).toISOString(), payment: { date: "2026-10-07", method: "interac", reference: "", recordedAt: "2026-10-07T15:00:00Z", by: BY } }),
      invoice({ id: "f_a000000003", issuedAt: "2026-10-01T12:00:00Z", dueAt: dueAtFor(new Date("2026-10-01T12:00:00Z"), 7).toISOString() }),
    ];
    const st = computePaymentStats("i_testinst001", list, { graceDays: 0 }, now);
    expect(st.paid).toBe(2);
    expect(st.overdue).toBe(1);
    expect(st.avgDaysToPay).toBe(10.5); // 4 et 17 jours
    expect(st.onTimeRate).toBe(0.5);
    expect(st.paused).toBe(true);
  });
});

describe("moteur d’envoi : aucune offre à un installateur en retard, reprise dès le paiement", () => {
  const env = process.env;
  let dir: string;
  beforeEach(async () => {
    dir = await tempDir();
    process.env = testEnv(dir);
    vi.clearAllMocks();
    notify.notifyOffer.mockResolvedValue({ email: "envoye", sms: "non-configure" });
    vi.stubGlobal("fetch", vi.fn(async () => { throw new Error("réseau interdit dans les tests"); }));
  });
  afterEach(async () => {
    process.env = env;
    vi.unstubAllGlobals();
    await rm(dir, { recursive: true, force: true });
  });

  it("refus avec la raison, puis offre possible après « Marquer payée »", async () => {
    const t0 = new Date("2026-09-12T12:00:00Z");
    const base = { contactName: "Contact", phone: "514 555-0101", rbq: "", basePostalCode: "H7N 1A1", radiusKm: 60, extraRegions: [], brands: [], systemTypes: [], active: true, maxOpenJobs: null, notes: "" };
    const a = (await saveInstaller({ ...base, company: "Clim A", email: "a@exemple.ca" }, BY, undefined, t0))!;
    const b = (await saveInstaller({ ...base, company: "Clim B", email: "b@exemple.ca" }, BY, undefined, t0))!;
    const job = (await saveJob({ client: { firstName: "Marie", lastName: "Exemple", phone: "514 555-0102", email: "marie@exemple.ca", address: "1 rue Fictive", city: "Laval", postalCode: "H7N 1A1" }, region: null, brand: null, systemType: null, modelSlug: null, capacity: "", desiredDate: null, desiredWindow: "", installerNotes: "", internalNotes: "" }, BY, undefined, t0))!;
    // Émise le 1er août : échue depuis longtemps, quelle que soit la date réelle du test (sendOffers lit l'heure réelle).
    const old = new Date("2026-08-01T12:00:00Z");
    await writeFile(path.join(dir, "commissions.json"), JSON.stringify({ version: 1, counters: { "2026": 1 }, invoices: [invoice({ installerId: a.id, issuedAt: old.toISOString(), dueAt: dueAtFor(old, 7).toISOString() })], jobLinks: {}, settings: {} }));

    const now = new Date();
    expect((await loadPaymentBlockers(now)).has(a.id)).toBe(true);
    const r = await sendOffers(job.id, [a.id, b.id], 48, BY, "http://test.local");
    expect(r.sent).toBe(1);
    expect(r.errors.join(" ")).toMatch(/Clim A : offres en pause, paiement en retard/);
    expect(notify.notifyOffer).toHaveBeenCalledTimes(1);
    expect(notify.notifyOffer.mock.calls[0][0].id).toBe(b.id);

    const paid = await markInvoicePaid("f_testinv0001", { date: "2026-08-20", method: "interac", reference: "CA123" }, BY, { channels: fakeChannels().ch });
    expect(paid).toEqual({ ok: true, resumed: true });
    expect((await loadPaymentBlockers(now)).has(a.id)).toBe(false);
    const again = await sendOffers(job.id, [a.id], 48, BY, "http://test.local");
    expect(again).toEqual({ sent: 1, errors: [] });
  });
});
