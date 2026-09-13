/* LogisVert : toujours versée au client, jamais garantie. Plus de choix de mode ; le montant officiel est montré à
   titre d'information et n'est JAMAIS soustrait du total dû (acompte et solde compris). Courriel simulé. */
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const mail = vi.hoisted(() => ({ sendClientEmail: vi.fn(async (..._args: unknown[]) => true) }));
vi.mock("@/lib/crm/email", () => mail);
vi.mock("@/lib/gestion/sms", () => ({ sendSms: vi.fn(async () => "envoye"), smsConfigured: () => false }));

import { LOGISVERT_NOTICE } from "../config";
import { createQuote } from "../quote";
import { getClientView, saveQuote, sendQuoteService } from "../service";
import { mutateSettings, mutateSoumissions, readSoumissions } from "../store";
import { computeTotals, logisvertModeFor, withLogisvertMode } from "../totals";
import { parseQuoteInput } from "../validate";
import { fullSettings, INSTALLER_ID, line, machine, RATES, readyContent, TODAY } from "./fixtures";
import { seedPartner } from "./partner-fixtures";
import { renderDoc } from "./render-doc";

const env = process.env;
let dir: string;
const NOW = new Date(`${TODAY}T15:00:00Z`);
const BY = "proprio@exemple.ca";

beforeEach(async () => {
  dir = await mkdtemp(path.join(tmpdir(), "thermo-logisvert-"));
  process.env = { ...env, GESTION_DATA_DIR: dir, TEXTOS_DATA_DIR: dir, ADMIN_EMAILS: BY, NODE_ENV: "test" };
  delete process.env.PIPEDRIVE_API_TOKEN;
  vi.stubGlobal("fetch", vi.fn(async () => new Response("{}", { status: 500 })));
});
afterEach(async () => {
  vi.unstubAllGlobals();
  process.env = env;
  await rm(dir, { recursive: true, force: true });
});

describe("montant de l'aide : information seulement", () => {
  it("le total dû, l'acompte et le solde portent sur le prix complet ; l'estimation après l'aide est à part", () => {
    const c = readyContent();
    c.lines = [line("l_a", { unitPriceCents: 400_000 })];
    c.deposit = { kind: "pourcentage", value: 20 };
    const t = computeTotals(c, [], RATES, TODAY);
    expect(t.logisvertMode).toBe("client");
    expect(t.logisvertCents).toBe(150_000);
    expect(t.totalCents).toBe(459_900);
    expect(t.clientPaysCents).toBe(t.totalCents);
    expect(t.depositCents).toBe(91_980);
    expect(t.balanceCents).toBe(t.totalCents - t.depositCents);
    expect(t.netAfterAidCents).toBe(459_900 - 150_000);
  });

  it("plus de choix de mode : le jumelage officiel avec un montant donne « client », sinon « aucune » ; jamais « cession »", () => {
    expect(logisvertModeFor(machine())).toBe("client");
    expect(logisvertModeFor(machine({ offList: true, pairing: null }))).toBe("aucune");
    expect(logisvertModeFor(machine({ pairing: { ...machine().pairing!, logisVertCents: 0 } }))).toBe("aucune");
    expect(logisvertModeFor(null)).toBe("aucune");
    const old = readyContent();
    old.logisvert = { mode: "cession" };
    const fixed = withLogisvertMode(old);
    expect(fixed.logisvert.mode).toBe("client");
    const t = computeTotals(fixed, [], RATES, TODAY);
    expect(t.clientPaysCents).toBe(t.totalCents);
  });

  it("à l'enregistrement, le mode reçu est ignoré et recalculé", async () => {
    const c = readyContent();
    const p = parseQuoteInput({ content: { ...c, machine: null, logisvert: { mode: "cession" } }, internalNotes: "" });
    expect(p.ok).toBe(true);
    if (!p.ok) return;
    const r = await saveQuote(null, p.data, BY, NOW);
    expect(r.ok).toBe(true);
    expect((await readSoumissions()).quotes[0].versions[0].content.logisvert.mode).toBe("aucune");
  });

  it("un ancien brouillon « cession » envoyé aujourd'hui : l'aide n'est pas déduite, le document le dit", async () => {
    await mutateSettings((s) => {
      Object.assign(s, fullSettings());
      return { result: null, changed: true };
    });
    await seedPartner();
    const c = readyContent();
    c.logisvert = { mode: "cession" };
    const id = await mutateSoumissions((d) => ({ result: createQuote(d, c, BY, NOW, { contractorId: INSTALLER_ID }).id, changed: true }));
    expect((await sendQuoteService(id, BY, "http://localhost:3001", { sms: false }, NOW)).ok).toBe(true);
    const v = (await readSoumissions()).quotes[0].versions[0];
    expect(v.content.logisvert.mode).toBe("client");
    const view = await getClientView(v.token, NOW);
    if (view.state !== "ok") throw new Error("vue invalide");
    const t = computeTotals(view.doc.content, view.selection, view.doc.taxes, TODAY);
    expect(t.clientPaysCents).toBe(t.totalCents);
    const html = renderDoc(view.doc, view.selection);
    expect(html).toContain(LOGISVERT_NOTICE);
    expect(html).toContain("estimation, non garantie");
    expect(html).toContain("jamais soustraite");
    expect(html).not.toContain("À payer à l’entreprise");
    expect(html).not.toContain("versée par Hydro-Québec à l’entreprise");
    // Le courriel d'envoi le dit aussi, sans montant « à payer après l'aide ».
    const text = (mail.sendClientEmail.mock.calls.at(-1)?.[3] as { text: string }).text;
    expect(text).toContain(LOGISVERT_NOTICE);
    expect(text).not.toContain("À payer après l’aide");
  });
});
