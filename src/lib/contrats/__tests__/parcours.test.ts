/* Conformité C1 — parcours complets sur un dossier temporaire, avec une trousse FICTIVE : parcours A (installateur
   choisi : envoi simultané, signature désactivée, approbation avec la date, contrat automatique, signature, trois
   copies, job attribué), refus de l'installateur (tâche, rien de signable), parcours B (aller de l'avant, tâche,
   « Trouver un installateur », autre date affichée), offre anonymisée (disponibilités, premier qui accepte), réglage
   automatique désactivé, changement d'installateur (aucune commission au premier, désistement compté), avenants,
   commission et intérêts, envoi bloqué par un champ entre crochets. Aucun envoi réel : canaux simulés. */
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const mail = vi.hoisted(() => ({ sendClientEmail: vi.fn(async (..._args: unknown[]) => true) }));
vi.mock("@/lib/crm/email", () => mail);
vi.mock("@/lib/gestion/sms", async (orig) => ({ ...(await orig<typeof import("@/lib/gestion/sms")>()), sendSms: vi.fn(async () => "envoye"), smsConfigured: () => false }));

import { hashToken, newToken } from "@/lib/gestion/auth/magic-link";
import { issueInvoiceForJob } from "@/lib/gestion/commissions/service";
import { interestCents } from "@/lib/gestion/commissions/interets";
import { resolvePostalOffline } from "@/lib/gestion/geo";
import { mutatePortal } from "@/lib/gestion/portail/store";
import { mutateReseau, onboardingOf } from "@/lib/gestion/reseau/store";
import { changeJobStatus, respondToOffer } from "@/lib/gestion/service";
import { mutateGestion, readGestion } from "@/lib/gestion/store";
import { trousseFile } from "@/lib/plateforme/trousse";
import { divRound } from "@/lib/soumissions/money";
import { createQuote } from "@/lib/soumissions/quote";
import { respondToQuote, sendQuoteService, getClientView, type RespondInput } from "@/lib/soumissions/service";
import { mutateSettings, mutateSoumissions, readSoumissions } from "@/lib/soumissions/store";
import { computeTotals } from "@/lib/soumissions/totals";
import { fullSettings, INSTALLER_ID, readyContent, TODAY } from "@/lib/soumissions/__tests__/fixtures";
import { seedPartner } from "@/lib/soumissions/__tests__/partner-fixtures";
import { contratAutoTasks, readContratTaskInput } from "../crm-tasks";
import { normalizePaymentProfile } from "../paiement";
import { commitmentStats, verifyContract } from "../regles";
import {
  answerAvenantAsClient,
  answerAvenantAsInstaller,
  approvalView,
  approveAsInstaller,
  changeInstaller,
  clientParcours,
  contractDocumentForToken,
  createAvenant,
  declineAsInstaller,
  findInstallers,
  offerToEligible,
  proposeToInstaller,
  saveContratsSettings,
  savePartnerRbq,
  savePaymentProfile,
  signContract,
  signedContractForJob,
  type ContratChannels,
  type SignInput,
} from "../service";
import { readContrats } from "../store";
import type { DateChoice } from "../types";
import { seedPlateforme, TROUSSE_FICTIVE } from "./trousse-fictive";

const env = process.env;
let dir: string;
const BASE = "http://localhost:3001";
const NOW = new Date(`${TODAY}T15:00:00Z`);
const BY = "proprio@exemple.ca";
const B_ID = "i_exemple0002";
const C_ID = "i_exemple0003";
const PAY = normalizePaymentProfile({ methods: ["carte", "virement"], schedule: [{ id: "v1", label: "Acompte", when: "signature", percent: 20, methods: ["carte"] }, { id: "v2", label: "Solde", when: "fin-travaux", percent: 80, methods: ["carte", "virement"] }] });

type Sent = { kind: "email" | "sms" | "owner"; to: string; subject: string; body: string; label: string };
let sent: Sent[];
const channels: ContratChannels = {
  email: async (to, m, label) => (sent.push({ kind: "email", to, subject: m.subject, body: m.text, label }), "simule"),
  sms: async (to, body, label) => (sent.push({ kind: "sms", to, subject: "", body, label }), "simule"),
  owner: async (m, label) => (sent.push({ kind: "owner", to: "proprietaire", subject: m.subject, body: m.text, label }), "simule"),
};
const O = () => ({ now: NOW, channels, baseUrl: BASE });
const linkIn = (text: string | undefined) => /\/approbation\/([A-Za-z0-9_-]{32,64})/.exec(text ?? "")?.[1] ?? "";

async function partner(id: string, company: string, email: string) {
  const geo = resolvePostalOffline("H7A 1A1");
  expect(geo).not.toBeNull();
  await seedPartner({ installer: { id, company, email, brands: ["exemple"], base: { lat: geo!.lat, lon: geo!.lon, city: geo!.city, precision: geo!.precision }, radiusKm: 80 } });
  await savePartnerRbq(id, "15.10", "test", BY, NOW);
  await savePaymentProfile(id, PAY, BY, NOW);
}

const draft = (contractorId: string | null) => mutateSoumissions((d) => ({ result: createQuote(d, readyContent(), BY, NOW, { contractorId }).id, changed: true }));
const versionOf = async (id: string) => (await readSoumissions()).quotes.find((q) => q.id === id)!.versions.at(-1)!;

async function respond(token: string, checked: boolean, selection: string[] = ["l_opt"]): Promise<ReturnType<typeof respondToQuote>> {
  const view = await getClientView(token, NOW);
  if (view.state !== "ok") throw new Error("vue invalide");
  const input: RespondInput = { selection, typedName: "", termsAccepted: false, reason: "", message: "", postedTotalCents: computeTotals(view.doc.content, selection, view.doc.taxes, TODAY).totalCents, postedHash: view.contentHash, ip: "203.0.113.7", userAgent: "Vitest", jumelageChecked: checked };
  return respondToQuote(token, "jumelage", input, BASE, NOW);
}

const approveInput = (sha: string, dateChoice: DateChoice | null) => ({ name: "Alex Exemple", title: "Président", authorized: true, dateChoice, postedSha256: sha, ip: "198.51.100.4", userAgent: "Vitest-installateur" });

async function signInput(token: string): Promise<SignInput> {
  const p = await clientParcours(token, NOW);
  const c = p!.contract!;
  return { typedName: "Camille Exemple", confirmations: c.doc.confirmations.map((_, i) => i), selection: c.selection, client: { ...c.doc.client, phone: "514 555-0000" }, site: c.doc.site, postedSha256: c.contentSha256, postedTotalCents: c.totalCents, ip: "203.0.113.7", userAgent: "Vitest-client" };
}

/** Parcours A jusqu'au contrat signé : renvoie la soumission, le jeton du client et celui de l'installateur. */
async function signedA(): Promise<{ id: string; ctoken: string; itoken: string }> {
  const id = await draft(INSTALLER_ID);
  expect((await sendQuoteService(id, BY, BASE, { sms: false, transferConsent: "Case du formulaire (test)", contratChannels: channels }, NOW)).ok).toBe(true);
  const itoken = linkIn(sent.find((s) => s.kind === "email" && s.label.includes("approbation"))?.body);
  const ctoken = (await versionOf(id)).token;
  const av = await approvalView(itoken, NOW);
  if (av.state !== "ok") throw new Error("approbation invalide");
  expect(av.blockers).toEqual([]);
  expect((await approveAsInstaller(itoken, approveInput(av.contentSha256, { kind: "confirme" }), O())).ok).toBe(true);
  expect((await signContract(ctoken, await signInput(ctoken), O())).ok).toBe(true);
  // Contrat signé = acceptation de la soumission, lue par la commission, l'argent, le pipeline, la publicité et le portail.
  const signedVersion = await versionOf(id);
  expect(signedVersion.status).toBe("acceptee");
  expect(signedVersion.acceptance?.totalCents).toBeGreaterThan(0);
  return { id, ctoken, itoken };
}

beforeEach(async () => {
  dir = await mkdtemp(path.join(tmpdir(), "thermo-contrat-"));
  process.env = { ...env, GESTION_DATA_DIR: dir, TEXTOS_DATA_DIR: dir, ADMIN_EMAILS: BY, NODE_ENV: "test" };
  delete process.env.PIPEDRIVE_API_TOKEN;
  vi.stubGlobal("fetch", vi.fn(async () => new Response("{}", { status: 500 })));
  mail.sendClientEmail.mockClear();
  sent = [];
  await mutateSettings((s) => (Object.assign(s, fullSettings()), { result: null, changed: true }));
  await seedPlateforme();
  await partner(INSTALLER_ID, "Exemple Climatisation", "alex@exemple.ca");
});

afterEach(async () => {
  vi.unstubAllGlobals();
  process.env = env;
  await rm(dir, { recursive: true, force: true });
});

describe("parcours A : installateur choisi à l'envoi", () => {
  it("de bout en bout : envoi simultané, signature désactivée, approbation avec la date, contrat automatique, signature, trois copies, job attribué", async () => {
    const id = await draft(INSTALLER_ID);
    const r = await sendQuoteService(id, BY, BASE, { sms: false, transferConsent: "Case du formulaire (test)", contratChannels: channels }, NOW);
    expect(r.ok).toBe(true);
    // Envoi simultané : le client (soumission complète) et l'installateur (demande d'approbation, texto et courriel).
    expect(mail.sendClientEmail.mock.calls.some((c) => c[0] === "camille@exemple.ca")).toBe(true);
    const ask = sent.find((s) => s.kind === "email" && s.to === "alex@exemple.ca");
    expect(ask?.subject).toMatch(/^Nouveau contrat à approuver : Camille E\., Laval, /);
    expect(sent.some((s) => s.kind === "sms" && s.body.includes("/approbation/"))).toBe(true);
    const itoken = linkIn(ask?.body);
    const ctoken = (await versionOf(id)).token;

    // Avant l'approbation : aucun contrat, aucune signature possible.
    expect(await clientParcours(ctoken, NOW)).toMatchObject({ stage: "confirmation", contract: null });
    const early = await signContract(ctoken, { typedName: "Camille Exemple", confirmations: [0, 1, 2, 3], selection: [], client: readyContent().client, site: { sameAsBilling: true, address: "", city: "", postalCode: "" }, postedSha256: "x", postedTotalCents: null, ip: "x", userAgent: "x" }, O());
    expect(early).toMatchObject({ ok: false, code: "etape" });

    // « Je veux aller de l'avant » : case 3.1 obligatoire ; l'intention est gardée (options comprises).
    expect(await respond(ctoken, false)).toMatchObject({ ok: false, code: "case" });
    expect(await respond(ctoken, true, ["l_opt"])).toEqual({ ok: true, state: "jumelage" });

    // Approbation : la date est obligatoire (confirmée ou proposée).
    const av = await approvalView(itoken, NOW);
    if (av.state !== "ok") throw new Error("approbation invalide");
    expect(av.blockers).toEqual([]);
    expect(av.when).toBe("le 1er octobre 2026");
    expect(await approveAsInstaller(itoken, approveInput(av.contentSha256, null), O())).toMatchObject({ ok: false, code: "date" });
    expect(await approveAsInstaller(itoken, approveInput("0".repeat(64), { kind: "confirme" }), O())).toMatchObject({ ok: false, code: "change" });
    expect((await approveAsInstaller(itoken, approveInput(av.contentSha256, { kind: "confirme" }), O())).ok).toBe(true);

    // Job créé et attribué automatiquement, sans offre séparée ; avis « prêt à signer » au client.
    const job = (await readGestion()).jobs[0];
    expect(job).toMatchObject({ status: "attribue", assignedInstallerId: INSTALLER_ID, offers: [] });
    expect(sent.some((s) => s.to === "camille@exemple.ca" && s.subject === "Votre contrat avec Installations Exemple inc. est prêt à signer")).toBe(true);

    // Le document du client devient le contrat final : identité et RBQ visibles, options de l'intention cochées.
    const cp = await clientParcours(ctoken, NOW);
    expect(cp?.stage).toBe("contrat");
    for (const x of ["Installations Exemple inc.", "1234-5678-90", "sous-catégories 15.10", "Préparé par ThermopompesAVendre.ca"]) expect(cp?.contract?.html).toContain(x);
    expect(cp?.contract?.selection).toEqual(["l_opt"]);
    expect(cp?.contract?.doc.changes).toEqual([]);

    // Signature en un geste, avec une correction du client.
    sent = [];
    expect(await signContract(ctoken, { ...(await signInput(ctoken)), confirmations: [0, 1] }, O())).toMatchObject({ ok: false, code: "confirmations" });
    expect((await signContract(ctoken, await signInput(ctoken), O())).ok).toBe(true);
    expect((await clientParcours(ctoken, NOW))?.stage).toBe("signe");
    expect(await signContract(ctoken, await signInput(ctoken), O())).toMatchObject({ ok: false, code: "deja" });

    // Trois copies : client, installateur, propriétaire ; texte intégral dans le courriel.
    const copies = sent.filter((s) => s.label.startsWith("contrat : copie"));
    expect(copies.map((s) => s.to).sort()).toEqual(["camille@exemple.ca", "installations@exemple.ca", "proprietaire"]);
    expect(copies[0].body).toContain("CONTRAT DE VENTE ET D’INSTALLATION");
    expect(copies[0].body).toContain("/devis/");

    // Preuve : versions, empreintes recalculées, IP, horodatage, identité, confirmations ; rangée dans le job.
    const d = (await readContrats()).dossiers[0];
    const c = d.contracts[0];
    expect(c).toMatchObject({ status: "signe", copies: { client: "simule", installer: "simule", owner: "simule" } });
    expect(c.signature).toMatchObject({ typedName: "Camille Exemple", ip: "203.0.113.7", userAgent: "Vitest-client", trousse: { version: "9.9" } });
    expect(c.signature?.client.phone).toBe("514 555-0000");
    expect(c.signature?.confirmations).toHaveLength(4);
    expect(d.proposals[0].approval).toMatchObject({ name: "Alex Exemple", title: "Président", authorized: true, ip: "198.51.100.4", userAgent: "Vitest-installateur", dateChoice: { kind: "confirme" } });
    expect(verifyContract(c, d.proposals[0].approval!.contentSha256)).toMatchObject({ ok: true });
    expect((await readGestion()).jobs[0].audit.some((a) => a.action === "contrat signé")).toBe(true);
    const doc = await contractDocumentForToken(ctoken);
    expect(doc).toContain("Preuve électronique");
    expect(doc).not.toContain("NE CORRESPOND PAS");
  });

  it("refus de l'installateur : tâche pour le propriétaire, rien de signable, rien d'envoyé au client", async () => {
    const id = await draft(INSTALLER_ID);
    await sendQuoteService(id, BY, BASE, { sms: false, transferConsent: "Case du formulaire (test)", contratChannels: channels }, NOW);
    const itoken = linkIn(sent.find((s) => s.kind === "email" && s.label.includes("approbation"))?.body);
    const ctoken = (await versionOf(id)).token;
    sent = [];
    expect((await declineAsInstaller(itoken, "refus", "Trop loin cette semaine", O())).ok).toBe(true);
    expect(await clientParcours(ctoken, NOW)).toMatchObject({ stage: "finalisation", contract: null });
    expect(await signContract(ctoken, { typedName: "Camille Exemple", confirmations: [0, 1, 2, 3], selection: [], client: readyContent().client, site: { sameAsBilling: true, address: "", city: "", postalCode: "" }, postedSha256: "x", postedTotalCents: null, ip: "x", userAgent: "x" }, O())).toMatchObject({ ok: false, code: "etape" });
    expect(sent.filter((s) => s.to === "camille@exemple.ca")).toEqual([]);
    const tasks = contratAutoTasks(await readContratTaskInput(), (await readSoumissions()).quotes, (await readGestion()).jobs, NOW);
    expect(tasks.find((t) => t.rule === "contrat-reponse")?.title).toContain("refuse le projet de Camille E.");
  });
});

describe("parcours B : aucun installateur à l'envoi", () => {
  it("aller de l'avant, tâche « depuis X h », Trouver un installateur, autre date proposée et affichée, signature", async () => {
    const id = await draft(null);
    expect((await sendQuoteService(id, BY, BASE, { sms: false }, NOW)).ok).toBe(true);
    const v = await versionOf(id);
    expect(v.frozen?.contractor).toBeUndefined();
    expect(await clientParcours(v.token, NOW)).toMatchObject({ stage: "estimation" });
    expect((await readContrats()).settings.autoOffer).toBe(false);

    expect(await respond(v.token, true)).toEqual({ ok: true, state: "jumelage" });
    expect((await clientParcours(v.token, NOW))?.stage).toBe("recherche");
    expect((await readContrats()).dossiers[0].offer).toBeNull();
    const later = new Date(NOW.getTime() + 5 * 3_600_000);
    const task = contratAutoTasks(await readContratTaskInput(), (await readSoumissions()).quotes, (await readGestion()).jobs, later).find((t) => t.rule === "contrat-installateur");
    expect(task).toMatchObject({ title: "Trouver l’installateur pour Camille E." });
    expect(task?.detail).toContain("depuis 5 h");

    const find = await findInstallers(id, NOW);
    expect(find?.rows[0]).toMatchObject({ installerId: INSTALLER_ID, eligible: true, approvalIssues: [], availability: { kind: "inconnue" } });
    const p = await proposeToInstaller({ quoteId: id, installerId: INSTALLER_ID, by: BY }, O());
    if (!p.ok) throw new Error(p.error);
    const itoken = linkIn(p.link);
    expect((await clientParcours(v.token, NOW))?.stage).toBe("confirmation");

    const av = await approvalView(itoken, NOW);
    if (av.state !== "ok") throw new Error("approbation invalide");
    const other: DateChoice = { kind: "autre", mode: "date", date: "2026-10-20", windowStart: "", windowEnd: "", note: "Pas de place le 1er" };
    expect((await approveAsInstaller(itoken, approveInput(av.contentSha256, other), O())).ok).toBe(true);
    const cp = await clientParcours(v.token, NOW);
    expect(cp?.stage).toBe("contrat");
    expect(cp?.contract?.doc.dateStatus).toBe("proposee");
    expect(cp?.contract?.doc.changes.find((x) => x.kind === "date")).toMatchObject({ before: "le 1er octobre 2026", after: "le 20 octobre 2026" });
    expect(cp?.contract?.html).toContain("ctd-when is-new");
    expect((await signContract(v.token, await signInput(v.token), O())).ok).toBe(true);
  });

  it("offre anonymisée : seulement aux disponibles ou inconnus ; le premier admissible qui accepte obtient la priorité", async () => {
    await partner(B_ID, "Complet Climatisation", "b@exemple.ca");
    await partner(C_ID, "Inconnu Climatisation", "c@exemple.ca");
    await mutatePortal((p) => (p.slots.push({ id: "s_slot000001", installerId: INSTALLER_ID, day: "2026-10-01", start: "08:00", end: "12:00", createdAt: NOW.toISOString(), createdBy: "test" }), { result: undefined, changed: true }));
    await mutateReseau((d) => ((onboardingOf(d, B_ID).availability = { days: [], weeklyCapacity: 0, note: "" }), { result: undefined, changed: true }));
    const id = await draft(null);
    await sendQuoteService(id, BY, BASE, { sms: false }, NOW);
    await respond((await versionOf(id)).token, true);

    const find = await findInstallers(id, NOW);
    expect(find?.rows.map((r) => [r.installerId, r.availability.kind])).toEqual([
      [INSTALLER_ID, "disponible"],
      [C_ID, "inconnue"],
      [B_ID, "complet"],
    ]);
    const r = await offerToEligible({ quoteId: id, by: BY }, O());
    if (!r.ok) throw new Error(r.error);
    expect(r.sent).toBe(2);
    const job = (await readGestion()).jobs.find((j) => j.id === r.jobId)!;
    expect(job.offers.map((o) => o.installerId).sort()).toEqual([INSTALLER_ID, C_ID].sort());

    const tA = newToken();
    const tC = newToken();
    await mutateGestion((g) => {
      const j = g.jobs.find((x) => x.id === r.jobId)!;
      for (const o of j.offers) o.tokenHash = hashToken(o.installerId === INSTALLER_ID ? tA : tC);
      return { result: undefined, changed: true };
    });
    expect(await respondToOffer(tA, "accepter", "", BASE, NOW)).toEqual({ state: "accepte" });
    expect((await respondToOffer(tC, "accepter", "", BASE, NOW)).state).not.toBe("accepte");
    expect((await approvalView(tA, NOW)).state).toBe("ok");
    expect((await approvalView(tC, NOW)).state).toBe("invalide");
  });

  it("réglage « Offrir automatiquement » désactivé par défaut ; activé, l'offre part dès que le client va de l'avant", async () => {
    expect((await readContrats()).settings).toMatchObject({ autoOffer: false, autoOfferCount: 5, offerHours: 48 });
    await saveContratsSettings({ autoOffer: true }, BY, NOW);
    const id = await draft(null);
    await sendQuoteService(id, BY, BASE, { sms: false }, NOW);
    await respond((await versionOf(id)).token, true);
    const d = (await readContrats()).dossiers[0];
    expect(d.offer).toMatchObject({ auto: true, installerIds: [INSTALLER_ID] });
  });
});

describe("après la signature", () => {
  it("changer d'installateur : ancien contrat annulé, client averti, nouvelle approbation et signature ; aucune commission au premier ; désistement compté", async () => {
    const { id, ctoken } = await signedA();
    const jobId = (await readContrats()).dossiers[0].jobId!;
    sent = [];
    expect((await changeInstaller({ quoteId: id, reason: "Blessure, ne peut pas faire les travaux", cause: "desistement", by: BY }, O())).ok).toBe(true);
    const d1 = (await readContrats()).dossiers[0];
    expect(d1.contracts[0]).toMatchObject({ status: "annule", cancellation: { cause: "desistement" } });
    expect(sent.some((s) => s.to === "camille@exemple.ca" && s.subject.includes("annulé d’un commun accord"))).toBe(true);
    expect((await readGestion()).jobs.find((j) => j.id === jobId)).toMatchObject({ status: "nouveau", assignedInstallerId: null });
    expect(commitmentStats(INSTALLER_ID, [d1], (await readGestion()).jobs, {}, TODAY).withdrawals).toBe(1);
    expect((await clientParcours(ctoken, NOW))?.stage).toBe("finalisation");
    // L'acceptation du premier contrat tombe avec lui : la commission ira au nouvel installateur, au montant du nouveau contrat.
    expect((await versionOf(id)).acceptance).toBeNull();

    await partner(B_ID, "Relève Climatisation", "b@exemple.ca");
    const p = await proposeToInstaller({ quoteId: id, installerId: B_ID, by: BY }, O());
    if (!p.ok) throw new Error(p.error);
    const itoken = linkIn(p.link);
    const av = await approvalView(itoken, NOW);
    if (av.state !== "ok") throw new Error("approbation invalide");
    expect((await approveAsInstaller(itoken, approveInput(av.contentSha256, { kind: "confirme" }), O())).ok).toBe(true);
    expect((await readGestion()).jobs.find((j) => j.id === jobId)).toMatchObject({ status: "attribue", assignedInstallerId: B_ID });
    expect((await signContract(ctoken, await signInput(ctoken), O())).ok).toBe(true);

    expect((await changeJobStatus(jobId, "terminer", BY, {}, NOW)).ok).toBe(true);
    expect(await signedContractForJob(jobId, INSTALLER_ID)).toBeNull();
    const inv = await issueInvoiceForJob(jobId, BY, { now: NOW, send: false });
    expect(inv.ok && inv.invoice.installerId).toBe(B_ID);
  });

  it("avenant : approuvé par l'installateur, signé par le client AVANT l'exécution ; commission avec l'extra, sans taxes ni LogisVert ; intérêts exacts", async () => {
    const { id, ctoken } = await signedA();
    const draft0 = { reason: "Mur de béton imprévu", added: "Percement dans le béton", removed: "", lines: [{ label: "Percement béton", amountCents: 20_000 }], scheduleEffect: "aucun" };
    sent = [];
    const a = await createAvenant({ quoteId: id, by: BY, draft: draft0 }, O());
    if (!a.ok) throw new Error(a.error);
    const jobId = (await readContrats()).dossiers[0].jobId!;
    expect((await signedContractForJob(jobId, INSTALLER_ID))?.baseCents).toBe(425_000); // non signé : pas dans la base
    const itoken = linkIn(sent.find((s) => s.to === "alex@exemple.ca")?.body);
    const av = (await readContrats()).dossiers[0].avenants[0];
    expect(av.status).toBe("a-approuver");
    expect(av.content).toMatchObject({ priceBeforeTaxCents: 20_000, tpsCents: 1_000, tvqCents: 1_995, deltaTotalCents: 22_995 });
    expect(await answerAvenantAsClient(ctoken, av.id, { approve: true, typedName: "Camille Exemple", postedSha256: av.contentSha256, reason: "", ip: "x", userAgent: "x" }, O())).toMatchObject({ ok: false, code: "statut" });
    expect((await answerAvenantAsInstaller(itoken, av.id, { approve: true, name: "Alex Exemple", title: "Président", authorized: true, postedSha256: av.contentSha256, reason: "", ip: "x", userAgent: "x" }, O())).ok).toBe(true);
    expect((await answerAvenantAsClient(ctoken, av.id, { approve: true, typedName: "Camille Exemple", postedSha256: av.contentSha256, reason: "", ip: "203.0.113.7", userAgent: "x" }, O())).ok).toBe(true);
    expect((await signedContractForJob(jobId, INSTALLER_ID))?.baseCents).toBe(445_000);

    expect((await changeJobStatus(jobId, "terminer", BY, {}, NOW)).ok).toBe(true);
    expect((await createAvenant({ quoteId: id, by: BY, draft: draft0 }, O())).ok).toBe(false);
    const inv = await issueInvoiceForJob(jobId, BY, { now: NOW, send: false });
    if (!inv.ok) throw new Error(inv.message);
    expect(inv.invoice).toMatchObject({ baseCents: 445_000, percent: 10, commissionCents: 44_500 });
    const late = new Date(Date.parse(inv.invoice.dueAt) + 12 * 86_400_000 + 60_000);
    expect(interestCents(inv.invoice, late)).toBe(divRound(inv.invoice.totalCents * 18 * 12, 36_500));
  });
});

describe("envoi bloqué", () => {
  it("champ entre crochets vide, identité incomplète ou trousse absente : rien ne part, message clair", async () => {
    await seedPlateforme({ trousse: TROUSSE_FICTIVE.replace("écrivez à [COURRIEL].", "écrivez à [COURRIEL] ou [CHAMP INCONNU].") });
    const id = await draft(null);
    const r = await sendQuoteService(id, BY, BASE, { sms: false }, NOW);
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.error).toContain("[CHAMP INCONNU]");
    await seedPlateforme({ identity: { neq: "" } });
    const r2 = await sendQuoteService(id, BY, BASE, { sms: false }, NOW);
    if (!r2.ok) expect(r2.error).toContain("Identité de l’entreprise incomplète");
    expect(r2.ok).toBe(false);
    await rm(trousseFile(), { force: true });
    const r3 = await sendQuoteService(id, BY, BASE, { sms: false }, NOW);
    if (!r3.ok) expect(r3.error).toContain("Trousse contractuelle non importée");
    expect(r3.ok).toBe(false);
    expect(mail.sendClientEmail).not.toHaveBeenCalled();
    expect((await versionOf(id)).status).toBe("brouillon");
  });
});
