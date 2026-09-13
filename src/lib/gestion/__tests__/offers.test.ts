/* Cycle de vie des offres, de bout en bout sur des fichiers temporaires :
   le premier qui accepte gagne, retrait, refus, expiration paresseuse,
   lecture (GET) sans effet, et aucune coordonnée du client avant l'acceptation. */
import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
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

import { changeJobStatus, getOfferView, loadJobPage, ownerWithdrawOffer, respondToOffer, saveInstaller, saveJob, sendOffers } from "../service";
import { gestionFile, readGestion } from "../store";
import { offerEmail, offerSms } from "@/lib/crm/templates/gestion-email";
import type { InstallerInput } from "../forms";
import type { OfferSummary } from "../summary";

const BASE = "http://test.local";
const BY = "proprio@exemple.ca";
const t0 = new Date("2026-09-12T12:00:00Z");

function installerInput(company: string, basePostalCode: string): InstallerInput {
  return { company, contactName: `Contact ${company}`, phone: "514 555-0001", email: `${company.replace(/\W/g, "").toLowerCase()}@exemple.ca`, rbq: "", basePostalCode, radiusKm: 60, extraRegions: [], brands: ["daikin"], systemTypes: [], active: true, maxOpenJobs: null, notes: "" };
}

async function setup() {
  const a = (await saveInstaller(installerInput("Clim A", "H7N 1A1"), BY, undefined, t0))!;
  const b = (await saveInstaller(installerInput("Clim B", "H2X 1Y4"), BY, undefined, t0))!;
  const c = (await saveInstaller(installerInput("Clim C", "J4K 1A1"), BY, undefined, t0))!;
  const job = (await saveJob(
    {
      client: { firstName: "Marie", lastName: "Tremblay", phone: "514-555-1234", email: "marie@client.ca", address: "123 rue des Érables", city: "", postalCode: "H4B 1A1" },
      region: null,
      brand: "daikin",
      systemType: "wall-single",
      modelSlug: null,
      capacity: "12 000 BTU",
      desiredDate: "2026-10-20",
      desiredWindow: "",
      installerNotes: "Accès par la ruelle.",
      internalNotes: "Client pressé.",
    },
    BY,
    undefined,
    t0,
  ))!;
  return { a, b, c, job };
}

/** Jeton envoyé à un installateur (dernier lien d'offre passé à notifyOffer). */
function tokenFor(installerId: string): string {
  const call = [...notify.notifyOffer.mock.calls].reverse().find((c) => c[0].id === installerId);
  if (!call) throw new Error("aucune offre envoyée à " + installerId);
  return String(call[2]).split("/job/")[1];
}

describe("cycle de vie des offres", () => {
  const env = process.env;
  let dir: string;

  beforeEach(async () => {
    dir = await mkdtemp(path.join(tmpdir(), "thermo-gestion-"));
    process.env = { ...env, GESTION_DATA_DIR: dir, NODE_ENV: "test" };
    vi.clearAllMocks();
    notify.notifyOffer.mockResolvedValue({ email: "envoye", sms: "non-configure" });
    notify.notifyConfirmed.mockResolvedValue("envoye");
    notify.notifyWithdrawn.mockResolvedValue("envoye");
    notify.notifyOwner.mockResolvedValue(undefined);
    vi.stubGlobal("fetch", vi.fn(async () => { throw new Error("réseau interdit dans les tests"); }));
  });
  afterEach(async () => {
    process.env = env;
    vi.unstubAllGlobals();
    await rm(dir, { recursive: true, force: true });
  });

  it("le job est placé hors ligne : ville, position et région devinées", async () => {
    const { job } = await setup();
    expect(job).toMatchObject({ number: 1, status: "nouveau", region: "06", regionGuess: "06" });
    expect(job.client.city).toBe("Montréal");
    expect(job.geo?.precision).toBe("ville");
  });

  it("le premier qui accepte gagne ; les autres offres sont retirées et les installateurs prévenus", async () => {
    const { a, b, job } = await setup();
    expect(await sendOffers(job.id, [a.id, b.id], 48, BY, BASE, t0)).toEqual({ sent: 2, errors: [] });
    expect((await readGestion()).jobs[0].status).toBe("offert");

    const later = new Date(t0.getTime() + 3_600_000);
    expect(await respondToOffer(tokenFor(a.id), "accepter", "", BASE, later)).toEqual({ state: "accepte" });
    const saved = (await readGestion()).jobs[0];
    expect(saved).toMatchObject({ status: "attribue", assignedInstallerId: a.id });
    expect(saved.offers.find((o) => o.installerId === b.id)).toMatchObject({ response: "retire", withdrawnBecause: "deja-attribue" });

    expect(notify.notifyConfirmed).toHaveBeenCalledWith(expect.objectContaining({ id: a.id }), expect.anything(), expect.objectContaining({ firstName: "Marie", phone: "514-555-1234" }), `${BASE}/job/${tokenFor(a.id)}`);
    expect(notify.notifyWithdrawn).toHaveBeenCalledWith(expect.objectContaining({ id: b.id }), expect.anything(), "deja-attribue");
    expect(notify.notifyOwner).toHaveBeenCalledWith(expect.objectContaining({ response: "accepte", company: "Clim A", jobUrl: `${BASE}/gestion/jobs/${job.id}` }));

    // Trop tard pour B.
    expect(await respondToOffer(tokenFor(b.id), "accepter", "", BASE, later)).toEqual({ state: "retire" });
    expect((await readGestion()).jobs[0].assignedInstallerId).toBe(a.id);

    const viewA = await getOfferView(tokenFor(a.id), later);
    expect(viewA).toMatchObject({ state: "accepte", client: { lastName: "Tremblay", address: "123 rue des Érables" } });
    const viewB = await getOfferView(tokenFor(b.id), later);
    expect(viewB).toMatchObject({ state: "retire", withdrawnBecause: "deja-attribue" });
    expect(viewB).not.toHaveProperty("client");
  });

  it("refus : le propriétaire est prévenu avec les prochains candidats ; le job revient à offrir", async () => {
    const { a, job } = await setup();
    await sendOffers(job.id, [a.id], 48, BY, BASE, t0);
    expect(await respondToOffer(tokenFor(a.id), "refuser", "Trop loin", BASE, t0)).toEqual({ state: "refuse" });

    const saved = (await readGestion()).jobs[0];
    expect(saved.status).toBe("nouveau");
    expect(saved.offers[0]).toMatchObject({ response: "refuse", reason: "Trop loin" });
    const call = notify.notifyOwner.mock.calls[0][0];
    expect(call).toMatchObject({ response: "refuse", reason: "Trop loin", pendingLeft: 0 });
    expect(call.nextCandidates).toEqual(expect.arrayContaining(["Clim B", "Clim C"]));
    expect(call.nextCandidates).not.toContain("Clim A");

    const page = (await loadJobPage(job.id, t0))!;
    expect(page.match!.ranked.map((c) => c.installer.id)).not.toContain(a.id);
    expect(page.match!.nearMisses.find((c) => c.installer.id === a.id)?.failures).toContain("a refusé ce job");
  });

  it("expiration paresseuse : l'affichage ne change rien au fichier ; une réponse tardive est refusée", async () => {
    const { a, job } = await setup();
    await sendOffers(job.id, [a.id], 24, BY, BASE, t0);
    const token = tokenFor(a.id);
    const before = await readFile(gestionFile(), "utf8");
    const later = new Date(t0.getTime() + 25 * 3_600_000);

    expect((await getOfferView(token, later)).state).toBe("expire");
    const page = (await loadJobPage(job.id, later))!;
    expect(page.job.status).toBe("nouveau");
    expect(page.job.offers[0].response).toBe("expire");
    expect(await readFile(gestionFile(), "utf8")).toBe(before);

    expect(await respondToOffer(token, "accepter", "", BASE, later)).toEqual({ state: "expire" });
    const saved = (await readGestion()).jobs[0];
    expect(saved.offers[0].response).toBe("expire");
    expect(saved.assignedInstallerId).toBeNull();
    expect(notify.notifyConfirmed).not.toHaveBeenCalled();
  });

  it("ouvrir le lien (GET) ne modifie jamais les données", async () => {
    const { a, job } = await setup();
    await sendOffers(job.id, [a.id], 48, BY, BASE, t0);
    const before = await readFile(gestionFile(), "utf8");
    for (let i = 0; i < 3; i++) expect((await getOfferView(tokenFor(a.id), t0)).state).toBe("en-attente");
    expect(await getOfferView("jeton-inconnu-mais-bien-forme-0123456789abcdef", t0)).toEqual({ state: "invalide" });
    expect(await readFile(gestionFile(), "utf8")).toBe(before);

    const route = await import("@/app/job/[token]/repondre/route");
    expect("GET" in route).toBe(false);
    expect(typeof route.POST).toBe("function");
  });

  it("retrait par le propriétaire : l'installateur est prévenu, le job revient à offrir", async () => {
    const { a, job } = await setup();
    await sendOffers(job.id, [a.id], 48, BY, BASE, t0);
    const offerId = (await readGestion()).jobs[0].offers[0].id;
    expect(await ownerWithdrawOffer(job.id, offerId, BY, t0)).toBe(true);
    expect((await readGestion()).jobs[0]).toMatchObject({ status: "nouveau", offers: [{ response: "retire", withdrawnBecause: "manuel" }] });
    expect(notify.notifyWithdrawn).toHaveBeenCalledWith(expect.objectContaining({ id: a.id }), expect.anything(), "manuel");
    expect((await getOfferView(tokenFor(a.id), t0)).state).toBe("retire");
    expect(await ownerWithdrawOffer(job.id, offerId, BY, t0)).toBe(false);
  });

  it("annulation : toutes les offres en attente sont retirées et les installateurs prévenus", async () => {
    const { a, b, job } = await setup();
    await sendOffers(job.id, [a.id, b.id], 48, BY, BASE, t0);
    expect(await changeJobStatus(job.id, "annuler", BY, {}, t0)).toEqual({ ok: true });
    const saved = (await readGestion()).jobs[0];
    expect(saved.status).toBe("annule");
    expect(saved.offers.every((o) => o.response === "retire" && o.withdrawnBecause === "annule")).toBe(true);
    expect(notify.notifyWithdrawn).toHaveBeenCalledTimes(2);
    expect(await respondToOffer(tokenFor(a.id), "accepter", "", BASE, t0)).toEqual({ state: "retire" });
    expect((await changeJobStatus(job.id, "terminer", BY, {}, t0)).ok).toBe(false);
  });

  it("pas de deuxième offre à un installateur qui n'a pas encore répondu", async () => {
    const { a, job } = await setup();
    await sendOffers(job.id, [a.id], 48, BY, BASE, t0);
    const again = await sendOffers(job.id, [a.id], 48, BY, BASE, t0);
    expect(again.sent).toBe(0);
    expect(again.errors[0]).toMatch(/attend déjà/);
  });

  it("confidentialité : l'offre ne contient ni le nom, ni le téléphone, ni le courriel, ni l'adresse du client", async () => {
    const { a, job } = await setup();
    await sendOffers(job.id, [a.id], 48, BY, BASE, t0);
    const summary = notify.notifyOffer.mock.calls[0][1] as OfferSummary;
    const expiresAt = new Date(t0.getTime() + 48 * 3_600_000).toISOString();
    const email = offerEmail({ contactName: "Contact", summary, link: `${BASE}/job/x`, expiresAt });
    const sms = offerSms({ summary, link: `${BASE}/job/x`, expiresAt });
    const everything = [JSON.stringify(summary), email.subject, email.html, email.text, sms].join("\n");
    for (const secret of ["Tremblay", "Marie", "514-555-1234", "marie@client.ca", "123 rue", "Érables", "H4B", "Client pressé"]) {
      expect(everything, secret).not.toContain(secret);
    }
    // Ce qu'il faut pour décider y est.
    expect(email.text).toContain("Montréal");
    expect(email.text).toContain("Daikin");
    expect(email.text).toContain("12 000 BTU");
    expect(email.text).toContain("Accès par la ruelle.");
    expect(email.text).toContain("438-900-3224");
    expect(sms).toContain("Thermopompes À Vendre");

    const view = await getOfferView(tokenFor(a.id), t0);
    expect(view).not.toHaveProperty("client");
  });
});
