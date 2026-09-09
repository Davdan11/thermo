/* Le formulaire de soumission ne doit jamais perdre un lead :
   Pipedrive absent ou en panne → la demande est quand même acceptée,
   consignée dans le journal et signalée par courriel. */

import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { NextRequest } from "next/server";

const pipedrive = vi.hoisted(() => ({ captureWebLead: vi.fn() }));
const email = vi.hoisted(() => ({ sendInternalLeadAlert: vi.fn(), sendClientWelcomeEmail: vi.fn() }));
const journal = vi.hoisted(() => ({ journalLead: vi.fn(), journalOutcome: vi.fn() }));

vi.mock("@/lib/crm/pipedrive", async (importOriginal) => ({
  ...(await importOriginal<typeof import("@/lib/crm/pipedrive")>()),
  captureWebLead: pipedrive.captureWebLead,
}));
vi.mock("@/lib/crm/email", () => email);
vi.mock("@/lib/crm/lead-journal", () => journal);

import { POST } from "../route";

const valid = {
  firstName: "Jean",
  lastName: "Tremblay",
  email: "jean@exemple.com",
  phone: "514-555-1234",
  postalCode: "H2X 1Y4",
  superficie: "1500 pi²",
  consentProcessing: true,
};

function post(body: unknown, ip = "203.0.113.7") {
  return POST(
    new NextRequest("http://localhost:3000/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-forwarded-for": ip },
      body: JSON.stringify(body),
    }),
  );
}

let ipCounter = 0;
const freshIp = () => `203.0.113.${++ipCounter}`;

describe("POST /api/leads", () => {
  const env = process.env;
  let dir: string;
  const entry = { id: "11111111-1111-4111-8111-111111111111", at: "2026-09-09T12:00:00.000Z", kind: "soumission" as const, lead: {} };

  beforeEach(async () => {
    dir = await mkdtemp(path.join(tmpdir(), "thermo-route-"));
    process.env = { ...env, LEAD_JOURNAL_DIR: dir, NODE_ENV: "test" };
    vi.clearAllMocks();
    journal.journalLead.mockResolvedValue({ entry, written: true });
    journal.journalOutcome.mockResolvedValue(true);
    email.sendInternalLeadAlert.mockResolvedValue(true);
    email.sendClientWelcomeEmail.mockResolvedValue(true);
  });
  afterEach(async () => {
    process.env = env;
    await rm(dir, { recursive: true, force: true });
  });

  it("crée l'affaire Pipedrive et répond succès quand tout fonctionne", async () => {
    pipedrive.captureWebLead.mockResolvedValue({ ok: true, dealId: 42, personId: 7 });
    const res = await post(valid, freshIp());
    expect(res.status).toBe(200);
    await expect(res.json()).resolves.toMatchObject({ success: true, emailSent: true });

    expect(journal.journalLead).toHaveBeenCalledWith("soumission", expect.objectContaining({ firstName: "Jean", postalCode: "H2X1Y4", territory: "Montréal" }));
    expect(pipedrive.captureWebLead).toHaveBeenCalledWith(expect.objectContaining({ firstName: "Jean", email: "jean@exemple.com", title: "Jean Tremblay - Thermopompe" }));
    expect(email.sendInternalLeadAlert).toHaveBeenCalledWith(expect.objectContaining({ dealId: 42, crmStatus: "ok", journalId: entry.id }));
    expect(journal.journalOutcome).toHaveBeenCalledWith(entry, expect.objectContaining({ pipedrive: "ok", dealId: 42 }));
  });

  it("accepte le lead sans Pipedrive et le signale à saisir", async () => {
    pipedrive.captureWebLead.mockResolvedValue({ ok: false, reason: "non-configure" });
    const res = await post(valid, freshIp());
    expect(res.status).toBe(200);
    expect(email.sendInternalLeadAlert).toHaveBeenCalledWith(expect.objectContaining({ dealId: undefined, crmStatus: "non-configure" }));
    expect(journal.journalOutcome).toHaveBeenCalledWith(entry, expect.objectContaining({ pipedrive: "non-configure" }));
  });

  it("accepte le lead quand Pipedrive tombe en panne", async () => {
    pipedrive.captureWebLead.mockResolvedValue({ ok: false, reason: "erreur", error: "Pipedrive 500" });
    const res = await post(valid, freshIp());
    expect(res.status).toBe(200);
    expect(journal.journalOutcome).toHaveBeenCalledWith(entry, expect.objectContaining({ pipedrive: "erreur", error: "Pipedrive 500" }));
  });

  it("répond 500 seulement si aucune trace n'a pu être conservée", async () => {
    journal.journalLead.mockResolvedValue({ entry, written: false });
    pipedrive.captureWebLead.mockResolvedValue({ ok: false, reason: "erreur", error: "réseau" });
    email.sendInternalLeadAlert.mockResolvedValue(false);
    const res = await post(valid, freshIp());
    expect(res.status).toBe(500);
  });

  it("ne consigne rien pour le pot de miel, tout en répondant succès", async () => {
    const res = await post({ ...valid, website: "http://spam" }, freshIp());
    expect(res.status).toBe(200);
    expect(journal.journalLead).not.toHaveBeenCalled();
    expect(pipedrive.captureWebLead).not.toHaveBeenCalled();
  });

  it("refuse un lead sans consentement Loi 25", async () => {
    const res = await post({ ...valid, consentProcessing: false }, freshIp());
    expect(res.status).toBe(400);
    expect(journal.journalLead).not.toHaveBeenCalled();
  });
});
