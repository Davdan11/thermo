/* Chantier V — commission des vendeurs : ventes signées seulement, montants réels (facture émise) ou pourcentage des
   réglages, LogisVert TOUJOURS exclu, vendeur au moment de la signature ; classement. Données fictives. */
import { describe, expect, it } from "vitest";
import { buildBundles, computeIndex, type CrmIndex } from "../../crm/model";
import type { CommissionInvoice } from "../../commissions/types";
import type { CrmClientRecord } from "../../crm/types";
import { daysAgo, hoursAgo, iso, NOW, quote, src } from "../../crm/__tests__/fixtures";
import { assigneeAt, signedSales, statementFor } from "../commission";
import { leaderboard } from "../classement";
import type { Member } from "../types";

const A = "u_vendeurA001";
const B = "u_vendeurB001";
const at = iso(daysAgo(60));
const member = (id: string, name: string, pct: number): Member => ({ id, email: `${name.toLowerCase()}@exemple.ca`, name, role: "vendeur", status: "actif", available: true, territory: { cities: [], postal: [] }, commissionPercent: pct, invitedAt: at, invitedBy: "proprio@exemple.ca", activatedAt: at, updatedAt: at });

function setRecord(index: CrmIndex, firstName: string, rec: Partial<CrmClientRecord>) {
  const c = index.clients.find((x) => x.b.firstName === firstName)!;
  c.b.record = { id: c.b.id, keys: [], stageLog: [], tags: [], notes: [], createdAt: at, updatedAt: at, ...c.b.record, ...rec };
  return c;
}

function fixture() {
  const alice = { firstName: "Alice", lastName: "Exemple", email: "alice@exemple.ca", phone: "514 555-0161" };
  const bruno = { firstName: "Bruno", lastName: "Exemple", email: "bruno@exemple.ca", phone: "514 555-0162" };
  const chloe = { firstName: "Chloé", lastName: "Exemple", email: "chloe@exemple.ca", phone: "514 555-0163" };
  const s = src({
    quotes: [
      quote({ client: alice, sentAt: daysAgo(10), acceptedAt: daysAgo(8) }),
      quote({ client: bruno, sentAt: daysAgo(9), acceptedAt: daysAgo(3) }),
      quote({ client: chloe, sentAt: daysAgo(5) }), // envoyée, jamais signée : aucune commission
    ],
  });
  const index = computeIndex(buildBundles(s), s, NOW);
  setRecord(index, "Alice", { assignedTo: { userId: A, at: iso(daysAgo(20)), by: "proprio@exemple.ca", how: "tour" }, assignLog: [{ at: iso(daysAgo(20)), by: "repartition-automatique", from: null, to: A, how: "tour" }] });
  // Bruno : à A au départ, réattribué à B AVANT la signature.
  setRecord(index, "Bruno", {
    assignedTo: { userId: B, at: iso(daysAgo(6)), by: "proprio@exemple.ca", how: "manuel" },
    assignLog: [
      { at: iso(daysAgo(15)), by: "repartition-automatique", from: null, to: A, how: "tour" },
      { at: iso(daysAgo(6)), by: "proprio@exemple.ca", from: A, to: B, how: "manuel" },
    ],
  });
  setRecord(index, "Chloé", { assignedTo: { userId: A, at: iso(daysAgo(12)), by: "proprio@exemple.ca", how: "tour" }, assignLog: [{ at: iso(daysAgo(12)), by: "repartition-automatique", from: null, to: A, how: "tour" }] });
  return index;
}

describe("vendeur au moment de la signature", () => {
  it("assigneeAt suit l'historique", () => {
    const rec = { assignLog: [
      { at: "2026-09-01T00:00:00.000Z", by: "x", from: null, to: A, how: "tour" as const },
      { at: "2026-09-10T00:00:00.000Z", by: "x", from: A, to: B, how: "manuel" as const },
      { at: "2026-09-12T00:00:00.000Z", by: "x", from: B, to: null, how: "retrait" as const },
    ] };
    expect(assigneeAt(rec, "2026-08-30T00:00:00.000Z")).toBeNull();
    expect(assigneeAt(rec, "2026-09-05T00:00:00.000Z")).toBe(A);
    expect(assigneeAt(rec, "2026-09-11T00:00:00.000Z")).toBe(B);
    expect(assigneeAt(rec, "2026-09-13T00:00:00.000Z")).toBeNull();
    expect(assigneeAt({ assignedTo: { userId: A, at: "2026-09-01T00:00:00.000Z", by: "x", how: "tour" } }, "2026-09-02T00:00:00.000Z")).toBe(A);
    expect(assigneeAt(null, "2026-09-02T00:00:00.000Z")).toBeNull();
  });
});

describe("commission des vendeurs", () => {
  it("ventes signées seulement ; base = sous-total signé avant taxes ; pourcentage des réglages sans facture", () => {
    const index = fixture();
    const sales = signedSales(index, { invoices: [], companyPercent: 10 });
    expect(sales.map((s) => s.who.split(" · ")[0])).toEqual(["Alice", "Bruno"]);
    const alice = sales[0];
    const q = index.clients.find((c) => c.b.firstName === "Alice")!.b.quotes[0];
    const snap = q.versions.find((v) => v.acceptance)!.acceptance!.snapshot.totals;
    expect(alice.baseCents).toBe(snap.taxableCents);
    expect(alice.companyCents).toBe(Math.round(snap.taxableCents * 0.1));
    expect(alice.source).toBe("signee");
    expect(alice.userId).toBe(A);
    expect(sales[1].userId).toBe(B);
  });

  it("LogisVert n'entre jamais dans le calcul", () => {
    const index = fixture();
    const before = signedSales(index, { invoices: [], companyPercent: 10 });
    for (const c of index.clients) for (const q of c.b.quotes) for (const v of q.versions) {
      if (!v.acceptance) continue;
      v.acceptance.snapshot.totals.logisvertCents = 750_000;
      v.acceptance.snapshot.totals.logisvertMode = "client";
      v.acceptance.snapshot.totals.netAfterAidCents = Math.max(0, v.acceptance.snapshot.totals.totalCents - 750_000);
    }
    const after = signedSales(index, { invoices: [], companyPercent: 10 });
    expect(after.map((s) => [s.baseCents, s.companyCents])).toEqual(before.map((s) => [s.baseCents, s.companyCents]));
  });

  it("facture émise : montant réel ; facture annulée : ignorée", () => {
    const index = fixture();
    const qid = index.clients.find((c) => c.b.firstName === "Alice")!.b.quotes[0].id;
    const inv = (status: CommissionInvoice["status"]) => ({ quoteId: qid, status, percent: 12, commissionCents: 123_45 }) as unknown as CommissionInvoice;
    expect(signedSales(index, { invoices: [inv("emise")], companyPercent: 10 })[0]).toMatchObject({ companyCents: 12_345, companyPercent: 12, source: "facture" });
    expect(signedSales(index, { invoices: [inv("annulee")], companyPercent: 10 })[0]).toMatchObject({ source: "signee", companyPercent: 10 });
  });

  it("relevé du mois : part du vendeur sur SES ventes du mois", () => {
    const index = fixture();
    const sales = signedSales(index, { invoices: [], companyPercent: 10 });
    const month = sales[0].month;
    const a = statementFor(sales.filter((s) => s.month === month), member(A, "Vendeur A", 25), month);
    const alice = sales.find((s) => s.userId === A)!;
    expect(a.lines.every((l) => l.vendorPercent === 25)).toBe(true);
    expect(a.totalCents).toBe(a.lines.reduce((n, l) => n + l.vendorCents, 0));
    expect(a.lines.map((l) => l.quoteId)).toContain(alice.quoteId);
    expect(a.lines.map((l) => l.quoteId)).not.toContain(sales.find((s) => s.userId === B)!.quoteId);
    expect(statementFor(sales, member(A, "Vendeur A", 25), "1999-01").lines).toEqual([]);
  });
});

describe("classement", () => {
  it("demandes, première réponse, envoyées, signées, taux, ventes et commission par vendeur", () => {
    const index = fixture();
    // Alice : attribuée il y a 20 jours, appel noté 30 minutes après.
    const c = index.clients.find((x) => x.b.firstName === "Alice")!;
    c.b.record!.notes = [{ id: "n_testnote0001", at: new Date(Date.parse(c.b.record!.assignLog![0].at) + 30 * 60_000).toISOString(), by: "vendeur.a@exemple.ca", text: "Appel", kind: "appel" }];
    const sales = signedSales(index, { invoices: [], companyPercent: 10 });
    const cards = leaderboard(index, [member(A, "Vendeur A", 25), member(B, "Vendeur B", 30)], sales, { from: daysAgo(30), to: hoursAgo(-1) });
    const a = cards.find((x) => x.userId === A)!;
    const b = cards.find((x) => x.userId === B)!;
    expect(a.demandes).toBe(3); // Alice, Bruno (avant la réattribution), Chloé
    expect(a.answered).toBeGreaterThanOrEqual(1);
    expect(a.medianMinutes).not.toBeNull();
    expect(a.sent).toBe(3); // Alice, Bruno (encore à A lors de l'envoi) et Chloé
    expect(a.signed).toBe(1);
    expect(b.signed).toBe(1);
    expect(b.demandes).toBe(1);
    expect(a.signRate).toBeCloseTo(1 / 3);
    expect(a.commissionCents).toBe(Math.round(sales.find((s) => s.userId === A)!.companyCents * 0.25));
    expect(cards[0].salesCents).toBeGreaterThanOrEqual(cards[1].salesCents);
  });
});
