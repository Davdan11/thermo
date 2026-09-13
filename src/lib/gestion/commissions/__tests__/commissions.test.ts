/* Factures de commission : calcul (rabais, taxes conditionnelles, LogisVert exclu, arrondis au cent), numérotation,
   échéance à l'heure de Montréal, émission de bout en bout (une seule par job) et export comptable. */
import { readFile, rm } from "node:fs/promises";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { computeTotals, defaultSelection } from "@/lib/soumissions/totals";
import { fullSettings, line, RATES, readyContent } from "@/lib/soumissions/__tests__/fixtures";
import { commissionBase, computeCommission, dueAtFor, invoiceState, issueDueAt, nextInvoiceNumber, registrationFilled, taxesFor } from "../calc";
import { invoicesCsv, issueInvoiceForJob } from "../service";
import { readCommissions } from "../store";
import { acceptedQuote, BY, fakeChannels, makeInstaller, makeJob, tempDir, testEnv, writeStores } from "./fixtures";

const NO_TAX = { tps: "", tvq: "" };
const BOTH = { tps: "123456789 RT0001", tvq: "1234567890 TQ0001" };

describe("calcul de la commission", () => {
  it("10 % du sous-total APRÈS rabais et AVANT taxes", () => {
    const c = readyContent();
    c.discounts = [{ id: "d1", reason: "Promotion d’automne", kind: "pourcentage", value: 10, expiresOn: null }];
    const totals = computeTotals(c, defaultSelection(c.lines), RATES, "2026-09-12");
    expect(totals.subtotalCents).toBe(425_000);
    expect(totals.taxableCents).toBe(382_500);
    const r = computeCommission(commissionBase(totals), 10, NO_TAX);
    expect(r.baseCents).toBe(382_500);
    expect(r.commissionCents).toBe(38_250);
    expect(r.totalCents).toBe(38_250);
  });

  it("l’aide LogisVert n’entre jamais dans le calcul, quel que soit le mode de la soumission", () => {
    const bases = (["client", "cession", "aucune"] as const).map((mode) => {
      const c = readyContent();
      c.logisvert = { mode };
      const t = computeTotals(c, defaultSelection(c.lines), RATES, "2026-09-12");
      if (mode !== "aucune") expect(t.logisvertCents).toBe(150_000);
      return computeCommission(commissionBase(t), 10, NO_TAX).commissionCents;
    });
    expect(bases).toEqual([42_500, 42_500, 42_500]);
  });

  it("arrondi au cent, demi vers le haut", () => {
    expect(computeCommission(123_457, 10, NO_TAX).commissionCents).toBe(12_346); // 12 345,7
    expect(computeCommission(123_457, 7.5, NO_TAX).commissionCents).toBe(9_259); // 9 259,275
    expect(computeCommission(123_450, 10, NO_TAX).commissionCents).toBe(12_345);
    expect(computeCommission(5, 10, NO_TAX).commissionCents).toBe(1); // 0,5 ¢ → 1 ¢
  });

  it("rabais de ligne compris dans la base", () => {
    const c = readyContent();
    c.lines = [line("a", { unitPriceCents: 500_000, discount: { id: "x", reason: "Client fidèle", kind: "montant", value: 50_000, expiresOn: null } })];
    const t = computeTotals(c, [], RATES, "2026-09-12");
    expect(commissionBase(t)).toBe(450_000);
    expect(computeCommission(commissionBase(t), 10, NO_TAX).commissionCents).toBe(45_000);
  });
});

describe("TPS et TVQ sur la facture : seulement si les numéros de l’entreprise sont remplis", () => {
  it("aucun numéro : aucune taxe", () => {
    const r = computeCommission(425_000, 10, NO_TAX);
    expect([r.tpsCents, r.tvqCents, r.totalCents]).toEqual([0, 0, 42_500]);
  });
  it("les deux numéros : TPS 5 % et TVQ 9,975 %, arrondies au cent", () => {
    const r = computeCommission(425_000, 10, BOTH);
    expect(r.tpsCents).toBe(2_125);
    expect(r.tvqCents).toBe(4_239); // 4 239,375
    expect(r.totalCents).toBe(48_864);
    expect(r.tpsNumber).toBe(BOTH.tps);
  });
  it("un seul numéro : seulement cette taxe ; un numéro incomplet ne compte pas", () => {
    expect(computeCommission(425_000, 10, { tps: BOTH.tps, tvq: "" }).tvqCents).toBe(0);
    expect(taxesFor({ tps: "123", tvq: "  " })).toEqual({ tps: false, tvq: false });
    expect(registrationFilled("123456789 RT0001")).toBe(true);
  });
});

describe("numérotation et échéance (Montréal)", () => {
  it("séquentielle par année civile de Montréal", () => {
    const counters: Record<string, number> = {};
    expect(nextInvoiceNumber(counters, new Date("2026-09-11T12:00:00Z"))).toBe("COM-2026-0001");
    expect(nextInvoiceNumber(counters, new Date("2026-09-12T12:00:00Z"))).toBe("COM-2026-0002");
    // 31 décembre, 22 h à Montréal : encore 2026.
    expect(nextInvoiceNumber(counters, new Date("2027-01-01T03:00:00Z"))).toBe("COM-2026-0003");
    expect(nextInvoiceNumber(counters, new Date("2027-01-01T06:00:00Z"))).toBe("COM-2027-0001");
  });
  it("échéance : fin du jour de Montréal, heure d’été et heure normale", () => {
    expect(dueAtFor(new Date("2026-09-11T12:30:00Z"), 7).toISOString()).toBe("2026-09-19T03:59:59.000Z");
    expect(dueAtFor(new Date("2026-12-01T15:00:00Z"), 7).toISOString()).toBe("2026-12-09T04:59:59.000Z");
  });
  it("émission : le lendemain de la fin du chantier, 8 h", () => {
    expect(issueDueAt("2026-09-10T18:00:00.000Z").toISOString()).toBe("2026-09-11T12:00:00.000Z");
    // Fini à 23 h 30 (Montréal) : le lendemain civil, pas le surlendemain.
    expect(issueDueAt("2026-09-11T03:30:00.000Z").toISOString()).toBe("2026-09-11T12:00:00.000Z");
  });
  it("en retard seulement après l’échéance", () => {
    const due = "2026-09-19T03:59:59.000Z";
    expect(invoiceState({ status: "emise", dueAt: due }, new Date("2026-09-19T03:59:00Z"))).toBe("a-recevoir");
    expect(invoiceState({ status: "emise", dueAt: due }, new Date("2026-09-19T04:00:00Z"))).toBe("en-retard");
    expect(invoiceState({ status: "payee", dueAt: due }, new Date("2026-10-01T00:00:00Z"))).toBe("payee");
  });
});

describe("émission de bout en bout", () => {
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

  it("une seule facture par job, montants de l’instantané accepté, envoyée à l’installateur", async () => {
    await writeStores(dir, {});
    const { ch, count } = fakeChannels();
    const now = new Date("2026-09-11T12:30:00Z");
    const a = await issueInvoiceForJob("j_testjob0001", "automatisation", { now, channels: ch, baseUrl: "https://exemple.ca" });
    expect(a.ok).toBe(true);
    if (!a.ok) return;
    expect(a.created).toBe(true);
    expect(a.invoice.number).toBe("COM-2026-0001");
    expect(a.invoice.baseCents).toBe(425_000);
    expect(a.invoice.commissionCents).toBe(42_500);
    expect(a.invoice.totalCents).toBe(48_864); // réglages avec TPS et TVQ
    expect(a.invoice.quoteNumber).toBe("2026-0012");
    expect(a.invoice.token).toMatch(/^[A-Za-z0-9_-]{43}$/);
    expect(count("installerMail")).toBe(1);

    const b = await issueInvoiceForJob("j_testjob0001", BY, { now: new Date("2026-09-11T13:00:00Z"), channels: ch });
    expect(b.ok && !b.created && b.invoice.number === "COM-2026-0001").toBe(true);
    expect(count("installerMail")).toBe(1);
    expect((await readCommissions()).invoices).toHaveLength(1);
    // Fichier privé : la facture contient l'identité de l'entreprise.
    expect(JSON.parse(await readFile(path.join(dir, "commissions.json"), "utf8")).invoices[0].company.legalName).toBe("Entreprise Exemple inc.");
  });

  it("sans numéros de taxes dans les réglages : facture sans TPS ni TVQ", async () => {
    const s = fullSettings();
    s.company.tps = "";
    s.company.tvq = "";
    await writeStores(dir, { settings: s });
    const r = await issueInvoiceForJob("j_testjob0001", BY, { channels: fakeChannels().ch, now: new Date("2026-09-11T12:30:00Z") });
    expect(r.ok && r.invoice.totalCents === 42_500 && r.invoice.tpsCents === 0 && r.invoice.tvqCents === 0).toBe(true);
  });

  it("lien par le même client (téléphone) quand les notes ne nomment pas la soumission", async () => {
    await writeStores(dir, { jobs: [makeJob({ internalNotes: "" })] });
    const r = await issueInvoiceForJob("j_testjob0001", BY, { channels: fakeChannels().ch, now: new Date("2026-09-11T12:30:00Z") });
    expect(r.ok && r.invoice.quoteNumber).toBe("2026-0012");
  });

  it("aucune soumission sûre : aucune facture (aucun montant deviné)", async () => {
    await writeStores(dir, { jobs: [makeJob({ internalNotes: "", client: { ...makeJob().client, phone: "514 555-0177", email: "autre@exemple.ca" } })] });
    const r = await issueInvoiceForJob("j_testjob0001", BY, { channels: fakeChannels().ch });
    expect(r).toMatchObject({ ok: false, code: "sans-soumission" });
    expect((await readCommissions()).invoices).toHaveLength(0);
  });

  it("job pas terminé ou sans installateur : refus", async () => {
    await writeStores(dir, { jobs: [makeJob({ status: "planifie" })] });
    expect(await issueInvoiceForJob("j_testjob0001", BY, { channels: fakeChannels().ch })).toMatchObject({ ok: false, code: "non-termine" });
    await writeStores(dir, { jobs: [makeJob({ assignedInstallerId: null })], installers: [makeInstaller()] });
    expect(await issueInvoiceForJob("j_testjob0001", BY, { channels: fakeChannels().ch })).toMatchObject({ ok: false, code: "sans-installateur" });
  });

  it("export CSV : BOM, point-virgule, virgule décimale, formules neutralisées", async () => {
    await writeStores(dir, { installers: [makeInstaller({ company: "=HYPERLINK(\"x\")" })] });
    await issueInvoiceForJob("j_testjob0001", BY, { channels: fakeChannels().ch, now: new Date("2026-09-11T12:30:00Z") });
    const csv = await invoicesCsv("2026");
    expect(csv.charCodeAt(0)).toBe(0xfeff);
    const [head, row] = csv.slice(1).split("\r\n");
    expect(head.split(";")[0]).toBe("Numéro");
    expect(row).toContain("COM-2026-0001");
    expect(row).toContain("4250,00");
    expect(row).toContain("425,00");
    expect(row).toContain(`"'=HYPERLINK(""x"")"`);
    expect(await invoicesCsv("2025")).not.toContain("COM-");
  });

  it("aucune soumission acceptée n’est facturée deux fois", async () => {
    await writeStores(dir, { jobs: [makeJob(), makeJob({ id: "j_testjob0002", number: 8, internalNotes: "" })], quotes: [acceptedQuote()] });
    const ch = fakeChannels().ch;
    expect((await issueInvoiceForJob("j_testjob0001", BY, { channels: ch })).ok).toBe(true);
    expect(await issueInvoiceForJob("j_testjob0002", BY, { channels: ch })).toMatchObject({ ok: false, code: "sans-soumission" });
  });
});
