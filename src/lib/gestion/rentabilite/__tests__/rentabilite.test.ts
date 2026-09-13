/* Chantier A — rentabilité réelle : commission = pourcentage du volet B sur le sous-total avant taxes, jamais
   LogisVert ; facture émise prioritaire (annulée ignorée) ; coûts et rendement par canal ; « données insuffisantes »
   sous les seuils ; coût d'acquisition calculable ou non ; dépenses manuelles protégées de l'API. */
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import type { JournalEntry } from "@/lib/crm/lead-journal";
import { percentOf } from "@/lib/soumissions/money";
import { DEFAULT_COMMISSION_SETTINGS } from "../../commissions/types";
import { buildBundles, computeIndex } from "../../crm/model";
import { daysAgo, entry, NOW, quote, src } from "../../crm/__tests__/fixtures";
import type { SourceData } from "../../crm/types";
import { acquisitionFor, buildRentabilite, periodMonths, salesOf, type RentaInvoice } from "../calc";
import { rentaInput } from "../service";
import { readRentabilite, setSpend } from "../store";
import { SEUILS, type SpendEntry } from "../types";

const spend = (channel: SpendEntry["channel"], month: string, cents: number): SpendEntry => ({ channel, month, cents, source: "manuel", updatedAt: NOW.toISOString(), updatedBy: "proprio@exemple.ca" });
const person = (i: number) => ({ firstName: `Client${i}`, lastName: "Exemple", email: `client${i}@exemple.ca`, phone: `514 555-01${String(10 + i).padStart(2, "0")}` });
const ads = (at: Date, who: ReturnType<typeof person>, channel = "google-ads"): JournalEntry => entry("soumission", at, { ...who, postalCode: "H7N1A1" }, { attribution: { channel: channel as "google-ads", gclid: channel === "google-ads" ? true : undefined } });

function input(s: SourceData, spends: SpendEntry[], invoices: RentaInvoice[] = [], percent = 10) {
  const index = computeIndex(buildBundles(s), s, NOW);
  return { index, input: rentaInput(index, { invoices: invoices.map((i) => ({ ...i })) as never, settings: { ...DEFAULT_COMMISSION_SETTINGS, percent } }, spends, NOW) };
}

describe("commissions réelles", () => {
  it("pourcentage du sous-total avant taxes ; l'aide LogisVert n'y entre jamais, même en mode « cession »", () => {
    const who = person(1);
    const q = quote({ client: who, sentAt: daysAgo(8), acceptedAt: daysAgo(5), mode: "cession" });
    const { input: inp } = input(src({ journal: [ads(daysAgo(10), who)], quotes: [q] }), []);
    const a = q.versions[0].acceptance!;
    const t = a.snapshot.totals;
    expect(t.logisvertCents).toBeGreaterThan(0);
    const [sale] = salesOf(inp);
    expect(sale.commissionCents).toBe(percentOf(t.taxableCents, 10));
    expect(sale.commissionCents).not.toBe(percentOf(t.netAfterAidCents, 10));
    expect(sale.commissionCents).not.toBe(percentOf(a.clientPaysCents, 10));
    expect(sale.commissionCents).not.toBe(percentOf(a.totalCents, 10));
    expect(sale).toMatchObject({ invoiced: false, key: "google-ads", month: "2026-09" });
  });

  it("facture émise prioritaire ; facture annulée ignorée", () => {
    const who = person(2);
    const q = quote({ client: who, sentAt: daysAgo(8), acceptedAt: daysAgo(5) });
    const s = src({ journal: [ads(daysAgo(10), who)], quotes: [q] });
    expect(salesOf(input(s, [], [{ quoteId: q.id, commissionCents: 123_456, status: "emise" }]).input)[0]).toMatchObject({ commissionCents: 123_456, invoiced: true });
    const planned = percentOf(q.versions[0].acceptance!.snapshot.totals.taxableCents, 10);
    expect(salesOf(input(s, [], [{ quoteId: q.id, commissionCents: 999, status: "annulee" }]).input)[0]).toMatchObject({ commissionCents: planned, invoiced: false });
  });
});

describe("rentabilité par canal", () => {
  const sept = periodMonths("mois", NOW);

  it("sous les seuils : « données insuffisantes » ; aucune dépense : jamais deviné ; canal naturel : non payant", () => {
    const julie = person(3);
    const marc = person(4);
    const q = quote({ client: julie, sentAt: daysAgo(8), acceptedAt: daysAgo(5) });
    const s = src({ journal: [ads(daysAgo(10), julie), ads(daysAgo(9), marc, "google-naturel")], quotes: [q, quote({ client: marc, sentAt: daysAgo(6) })] });
    const v = buildRentabilite(input(s, [spend("google-ads", "2026-09", 50_000)]).input, sept);
    const g = v.rows.find((r) => r.key === "google-ads")!;
    expect(g).toMatchObject({ paid: true, spendCents: 50_000, demandes: 1, soumissions: 1, ventes: 1 });
    expect(g.costPerDemand).toEqual({ value: 50_000, status: "insuffisant" });
    expect(g.costPerSale.status).toBe("insuffisant");
    expect(g.roi.status).toBe("insuffisant");
    const meta = v.rows.find((r) => r.key === "meta")!;
    expect(meta.spendCents).toBeNull();
    expect([meta.costPerDemand.status, meta.costPerSale.status, meta.roi.status]).toEqual(["sans-depense", "sans-depense", "sans-depense"]);
    const organic = v.rows.find((r) => r.key === "google-naturel")!;
    expect(organic).toMatchObject({ paid: false, demandes: 1, soumissions: 1, ventes: 0 });
    expect(organic.roi.status).toBe("non-payant");
    expect(v.chartReady).toBe(false);
  });

  it("au-dessus des seuils : coût par demande, coût par vente et rendement exacts", () => {
    const people = Array.from({ length: 6 }, (_, i) => person(10 + i));
    const quotes = [quote({ client: people[0], sentAt: daysAgo(8), acceptedAt: daysAgo(5) }), quote({ client: people[1], sentAt: daysAgo(7), acceptedAt: daysAgo(4) })];
    const s = src({ journal: people.map((p, i) => ads(daysAgo(12 - i), p)), quotes });
    const { input: inp } = input(s, [spend("google-ads", "2026-09", 60_000), spend("google-ads", "2026-08", 40_000)]);
    const v = buildRentabilite(inp, sept);
    const g = v.rows.find((r) => r.key === "google-ads")!;
    const commission = quotes.reduce((sum, q) => sum + percentOf(q.versions[0].acceptance!.snapshot.totals.taxableCents, 10), 0);
    expect(g.demandes).toBeGreaterThanOrEqual(SEUILS.demandes);
    expect(g.costPerDemand).toEqual({ value: 60_000 / 6, status: "ok" });
    expect(g.costPerSale).toEqual({ value: 30_000, status: "ok" });
    expect(g.commissionCents).toBe(commission);
    expect(g.roi).toEqual({ value: commission / 60_000, status: "ok" });
    expect(v.paid.spendCents).toBe(60_000);
    // Deux mois avec des données : les graphiques s'affichent ; août ne compte que sa dépense.
    expect(v.chartReady).toBe(true);
    expect(v.monthly.find((m) => m.month === "2026-08")).toMatchObject({ spendCents: 40_000, hasSpend: true, ventes: 0 });
    const three = buildRentabilite(inp, periodMonths("3-mois", NOW));
    expect(three.rows.find((r) => r.key === "google-ads")).toMatchObject({ spendCents: 100_000, spendMonths: 2 });
    expect(three.months).toBe(3);
  });
});

describe("coût d'acquisition d'un client", () => {
  it("calculable : dépense du canal ce mois-là ÷ nouveaux clients du canal ; sinon la raison", () => {
    const a = person(20);
    const b = person(21);
    const organic = person(22);
    const august = person(23);
    const qa = quote({ client: a, sentAt: daysAgo(8), acceptedAt: daysAgo(5) });
    const s = src({
      journal: [ads(daysAgo(10), a), ads(daysAgo(9), b), ads(daysAgo(8), organic, "google-naturel"), ads(new Date("2026-08-10T15:00:00Z"), august)],
      quotes: [qa],
    });
    const { index, input: inp } = input(s, [spend("google-ads", "2026-09", 50_000)]);
    const id = (p: ReturnType<typeof person>) => index.clients.find((c) => c.b.firstName === p.firstName)!.b.id;
    const r = acquisitionFor(id(a), inp)!;
    expect(r).toMatchObject({ status: "calculable", spendCents: 50_000, newClients: 2, cacCents: 25_000, fragile: true, month: "2026-09" });
    if (r.status === "calculable") expect(r.commissionCents).toBe(percentOf(qa.versions[0].acceptance!.snapshot.totals.taxableCents, 10));
    expect(acquisitionFor(id(organic), inp)).toMatchObject({ status: "non-calculable", reason: expect.stringContaining("canal sans dépense publicitaire") });
    expect(acquisitionFor(id(august), inp)).toMatchObject({ status: "non-calculable", reason: expect.stringContaining("Aucune dépense Google Ads saisie") });
    expect(acquisitionFor("c_000000000000", inp)).toBeNull();
  });

  it("client saisi à la main (sans demande en ligne) : non calculable", () => {
    const s = src({ quotes: [quote({ client: person(30), sentAt: daysAgo(3) })] });
    const { index, input: inp } = input(s, [spend("google-ads", "2026-09", 50_000)]);
    expect(acquisitionFor(index.clients[0].b.id, inp)).toMatchObject({ status: "non-calculable", reason: expect.stringContaining("saisi à la main") });
  });
});

describe("dépenses saisies", () => {
  const env = process.env;
  let dir: string;
  beforeEach(async () => {
    dir = await mkdtemp(path.join(tmpdir(), "thermo-rentabilite-"));
    process.env = { ...env, GESTION_DATA_DIR: dir };
  });
  afterEach(async () => {
    process.env = env;
    await rm(dir, { recursive: true, force: true });
  });

  it("une valeur par canal et par mois ; l'API ne remplace pas une saisie manuelle sans le demander", async () => {
    expect(await setSpend({ channel: "google-ads", month: "2026-09", cents: 10_000, source: "manuel", by: "proprio@exemple.ca" }, NOW)).toEqual({ ok: true });
    expect(await setSpend({ channel: "google-ads", month: "2026-09", cents: 12_000, source: "manuel", by: "proprio@exemple.ca" }, NOW)).toEqual({ ok: true });
    expect(await setSpend({ channel: "google-ads", month: "2026-09", cents: 99_000, source: "api", by: "cerveau" }, NOW)).toMatchObject({ ok: false });
    expect((await readRentabilite()).spends).toEqual([expect.objectContaining({ channel: "google-ads", month: "2026-09", cents: 12_000, source: "manuel" })]);
    expect(await setSpend({ channel: "google-ads", month: "2026-09", cents: 99_000, source: "api", by: "cerveau", replaceManual: true }, NOW)).toEqual({ ok: true });
    expect((await readRentabilite()).spends[0]).toMatchObject({ cents: 99_000, source: "api" });
    expect(await setSpend({ channel: "google-ads", month: "2026-13", cents: 1, source: "manuel", by: "x" }, NOW)).toMatchObject({ ok: false });
    expect(await setSpend({ channel: "google-ads", month: "2026-08", cents: -1, source: "manuel", by: "x" }, NOW)).toMatchObject({ ok: false });
  });
});
