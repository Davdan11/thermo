/* Parcours complets sur un dossier temporaire : envoi (bloqué ou non), consultation (POST), lecture du lien sans
   effet, acceptation avec piste d'audit et courriels, soumission expirée ou remplacée, Pipedrive en panne ou
   configuré. Aucun appel réseau réel : courriel, texto et fetch sont simulés. */
import { mkdtemp, readFile, rm, stat } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const mail = vi.hoisted(() => ({ sendClientEmail: vi.fn(async (..._args: unknown[]) => true) }));
vi.mock("@/lib/crm/email", () => mail);
vi.mock("@/lib/gestion/sms", () => ({ sendSms: vi.fn(async () => "envoye"), smsConfigured: () => true }));

import { defaultSettings } from "../defaults";
import { hashOf } from "../hash";
import { createQuote, freezeForSend, reviseQuote, verifyAcceptance } from "../quote";
import { getClientView, recordClientView, remindService, respondToQuote, sendQuoteService, type RespondInput } from "../service";
import { mutateSettings, mutateSoumissions, readSoumissions, soumissionsFile, viewsFile } from "../store";
import { computeTotals } from "../totals";
import type { Settings } from "../types";
import { fullSettings, INSTALLER_ID, readyContent, TODAY } from "./fixtures";
import { seedPartner } from "./partner-fixtures";

const env = process.env;
let dir: string;
const BASE = "http://localhost:3001";
const NOW = new Date(`${TODAY}T15:00:00Z`);

async function writeSettings(s: Settings) {
  await mutateSettings((cur) => {
    Object.assign(cur, s);
    return { result: null, changed: true };
  });
}

async function newDraft(): Promise<string> {
  return mutateSoumissions((d) => ({ result: createQuote(d, readyContent(), "proprio@exemple.ca", NOW, { contractorId: INSTALLER_ID }).id, changed: true }));
}

async function sentQuote(): Promise<{ id: string; token: string }> {
  await writeSettings(fullSettings());
  await seedPartner();
  const id = await newDraft();
  const r = await sendQuoteService(id, "proprio@exemple.ca", BASE, { sms: false }, NOW);
  expect(r.ok).toBe(true);
  const q = (await readSoumissions()).quotes.find((x) => x.id === id)!;
  return { id, token: q.versions[0].token };
}

async function accInput(token: string, selection: string[]): Promise<RespondInput> {
  const view = await getClientView(token, NOW);
  if (view.state !== "ok") throw new Error("vue invalide");
  const total = computeTotals(view.doc.content, selection, view.doc.taxes, TODAY).totalCents;
  return { selection, typedName: "Camille Exemple", termsAccepted: true, reason: "", message: "", postedTotalCents: total, postedHash: view.contentHash, ip: "203.0.113.7", userAgent: "Mozilla/5.0 (Test)" };
}

type FetchCall = { url: string; method: string; body: unknown };
let calls: FetchCall[];

function mockFetch(handler: (url: string, method: string) => { status: number; json?: unknown }) {
  calls = [];
  vi.stubGlobal(
    "fetch",
    vi.fn(async (input: string | URL, init?: RequestInit) => {
      const url = String(input);
      const method = init?.method ?? "GET";
      calls.push({ url, method, body: init?.body ? JSON.parse(String(init.body)) : undefined });
      const r = handler(url, method);
      return new Response(JSON.stringify(r.json ?? {}), { status: r.status, headers: { "Content-Type": "application/json" } });
    }),
  );
}

beforeEach(async () => {
  dir = await mkdtemp(path.join(tmpdir(), "thermo-soumissions-"));
  process.env = { ...env, GESTION_DATA_DIR: dir, ADMIN_EMAILS: "proprio@exemple.ca", PIPEDRIVE_API_TOKEN: "jeton-test", NODE_ENV: "test" };
  mail.sendClientEmail.mockClear();
  // Par défaut : Pipedrive en panne (500) — le parcours de la soumission ne doit jamais en dépendre.
  mockFetch(() => ({ status: 500 }));
});

afterEach(async () => {
  vi.unstubAllGlobals();
  process.env = env;
  await rm(dir, { recursive: true, force: true });
});

describe("envoi", () => {
  it("bloqué tant que l'entrepreneur manque et que les textes sont à compléter : rien ne part, la version reste en brouillon", async () => {
    await writeSettings(defaultSettings());
    const id = await newDraft(); // entrepreneur choisi, mais absent des installateurs
    const r = await sendQuoteService(id, "proprio@exemple.ca", BASE, { sms: true }, NOW);
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.blockers?.map((b) => b.id)).toEqual(expect.arrayContaining(["entrepreneur", "texte-paymentTerms", "texte-warranty"]));
    expect(mail.sendClientEmail).not.toHaveBeenCalled();
    expect(calls).toHaveLength(0);
    expect((await readSoumissions()).quotes[0].versions[0].status).toBe("brouillon");
  });

  it("Pipedrive en panne : la soumission part quand même, l'erreur est notée pour l'outil", async () => {
    const { id, token } = await sentQuote();
    const q = (await readSoumissions()).quotes.find((x) => x.id === id)!;
    const v = q.versions[0];
    expect(v.status).toBe("envoyee");
    expect(v.frozen?.company.legalName).toBe("Entreprise Exemple inc.");
    expect(v.sends).toEqual([expect.objectContaining({ kind: "envoi", email: "envoye", sms: null })]);
    expect(q.pipedrive.log[0]).toMatchObject({ event: "envoi", ok: false });
    expect(q.pipedrive.log[0].detail).toContain("Pipedrive 500");
    const [to, subject, html, opts] = mail.sendClientEmail.mock.calls[0] as [string, string, string, { text: string }];
    expect(to).toBe("camille@exemple.ca");
    expect(subject).toContain("S-2026-0001");
    expect(html).toContain(`${BASE}/devis/${token}`);
    expect(opts.text).toContain(`${BASE}/devis/${token}`);
    expect(html).not.toMatch(/<img[^>]+(pixel|track|1x1)/i);
  });

  it("relance : renvoie le même lien, sans pouvoir être répétée aussitôt", async () => {
    const { id, token } = await sentQuote();
    const later = new Date(NOW.getTime() + 60 * 60 * 1000);
    const r = await remindService(id, "proprio@exemple.ca", BASE, { sms: false }, later);
    expect(r.ok).toBe(true);
    expect(String(mail.sendClientEmail.mock.calls[1][2])).toContain(`/devis/${token}`);
    expect((await remindService(id, "proprio@exemple.ca", BASE, { sms: false }, new Date(later.getTime() + 1000))).ok).toBe(false);
  });
});

describe("lien du client", () => {
  it("la lecture de /devis/[jeton] n'écrit rien et ne change aucun statut", async () => {
    const { token } = await sentQuote();
    const before = await readFile(soumissionsFile(), "utf8");
    const mtime = (await stat(soumissionsFile())).mtimeMs;
    for (let i = 0; i < 3; i++) {
      const v = await getClientView(token, NOW);
      expect(v.state === "ok" && v.status).toBe("envoyee");
    }
    expect(await getClientView("x".repeat(43), NOW)).toEqual({ state: "invalide" });
    expect(await readFile(soumissionsFile(), "utf8")).toBe(before);
    expect((await stat(soumissionsFile())).mtimeMs).toBe(mtime);
    await expect(stat(viewsFile())).rejects.toThrow();
  });

  it("un brouillon n'est jamais visible par son jeton", async () => {
    await writeSettings(fullSettings());
    const id = await newDraft();
    const token = (await readSoumissions()).quotes.find((q) => q.id === id)!.versions[0].token;
    expect(await getClientView(token, NOW)).toEqual({ state: "invalide" });
  });

  it("consultation (POST) : compteur, journal, « ouverte », avis au propriétaire à la première seulement", async () => {
    const { id, token } = await sentQuote();
    mail.sendClientEmail.mockClear();
    expect(await recordClientView(token, "Mozilla/5.0 (Test)", BASE, NOW)).toEqual({ recorded: true, first: true });
    expect(await recordClientView(token, "Mozilla/5.0 (Test)", BASE, new Date(NOW.getTime() + 5000))).toEqual({ recorded: true, first: false });
    const v = (await readSoumissions()).quotes.find((q) => q.id === id)!.versions[0];
    expect(v.views.count).toBe(2);
    expect(v.status).toBe("ouverte");
    const lines = (await readFile(viewsFile(), "utf8")).trim().split("\n").map((l) => JSON.parse(l));
    expect(lines).toHaveLength(2);
    expect(lines[0]).toMatchObject({ quoteId: id, v: 1, ua: "Mozilla/5.0 (Test)" });
    expect(lines[0]).not.toHaveProperty("ip");
    const owner = mail.sendClientEmail.mock.calls.filter((c) => c[0] === "proprio@exemple.ca");
    expect(owner).toHaveLength(1);
    expect(String(owner[0][1])).toContain("ouverte");
  });
});

describe("acceptation", () => {
  it("piste d'audit complète, instantané vérifiable, confirmation au client avec le contenu accepté", async () => {
    const { id, token } = await sentQuote();
    mail.sendClientEmail.mockClear();
    const r = await respondToQuote(token, "accepter", await accInput(token, ["l_opt"]), BASE, NOW);
    expect(r).toEqual({ ok: true, state: "acceptee" });
    const q = (await readSoumissions()).quotes.find((x) => x.id === id)!;
    const a = q.versions[0].acceptance!;
    expect(a).toMatchObject({ version: 1, typedName: "Camille Exemple", ip: "203.0.113.7", userAgent: "Mozilla/5.0 (Test)", selectedOptionIds: ["l_opt"], termsAccepted: true });
    expect(a.totalCents).toBe(a.snapshot.totals.totalCents);
    expect(verifyAcceptance(a)).toBe(true);
    expect(hashOf(a.snapshot)).toBe(a.snapshotHash);
    expect(q.pipedrive.log.at(-1)).toMatchObject({ event: "acceptation", ok: false });

    const client = mail.sendClientEmail.mock.calls.find((c) => c[0] === "camille@exemple.ca")!;
    const text = (client[3] as { text: string }).text;
    expect(String(client[1])).toContain("accepté");
    for (const expected of ["PREUVE D’ACCEPTATION", a.snapshotHash, "Camille Exemple", "Déneigement", "Mur arrière", "123456789", "Texte validé (test).", `/devis/${token}`]) expect(text).toContain(expected);
    expect(mail.sendClientEmail.mock.calls.some((c) => c[0] === "proprio@exemple.ca" && String(c[1]).includes("ACCEPTÉE"))).toBe(true);

    // Lien de la version acceptée : l'instantané, tel quel.
    const view = await getClientView(token, new Date("2031-01-01T12:00:00Z"));
    expect(view.state === "ok" && view.status).toBe("acceptee");
    if (view.state === "ok") {
      expect(view.doc).toEqual(a.snapshot.document);
      expect(view.selection).toEqual(["l_opt"]);
    }
    expect((await respondToQuote(token, "accepter", await accInput(token, []), BASE, NOW)).ok).toBe(false);
  });

  it("refus et question : notés, propriétaire avisé", async () => {
    const { id, token } = await sentQuote();
    expect(await respondToQuote(token, "question", { ...(await accInput(token, [])), message: "Peut-on installer en novembre ?" }, BASE, NOW)).toEqual({ ok: true, state: "question" });
    expect(await respondToQuote(token, "refuser", { ...(await accInput(token, [])), reason: "Budget" }, BASE, NOW)).toEqual({ ok: true, state: "refusee" });
    const v = (await readSoumissions()).quotes.find((x) => x.id === id)!.versions[0];
    expect(v.questions[0].message).toBe("Peut-on installer en novembre ?");
    expect(v.refusal?.reason).toBe("Budget");
    expect(v.status).toBe("refusee");
    expect((await respondToQuote(token, "accepter", await accInput(token, []), BASE, NOW)).ok).toBe(false);
  });

  it("expirée ou remplacée : l'acceptation est bloquée et la page le dit", async () => {
    const { id, token } = await sentQuote();
    const input = await accInput(token, []);
    const after = new Date("2026-12-31T15:00:00Z");
    expect(await respondToQuote(token, "accepter", input, BASE, after)).toMatchObject({ ok: false, code: "expiree" });
    const expired = await getClientView(token, after);
    expect(expired.state === "ok" && [expired.status, expired.canRespond]).toEqual(["expiree", false]);

    await mutateSoumissions((d) => {
      const q = d.quotes.find((x) => x.id === id)!;
      const v2 = reviseQuote(q, 1, "p", NOW, 30);
      freezeForSend(q, v2, fullSettings(), [], NOW);
      return { result: null, changed: true };
    });
    expect(await respondToQuote(token, "accepter", input, BASE, NOW)).toMatchObject({ ok: false, code: "remplacee" });
    const view = await getClientView(token, NOW);
    expect(view.state === "ok" && view.status).toBe("remplacee");
    expect(view.state === "ok" && view.replacedBy?.v).toBe(2);
  });
});

describe("Pipedrive configuré", () => {
  const ok = (json: unknown) => ({ status: 200, json: { success: true, data: json } });

  it("personne, affaire [TAV] avec valeur, note ; étape déplacée seulement si elle existe dans le pipeline", async () => {
    mockFetch((url, method) => {
      if (url.includes("/persons/search")) return ok({ items: [] });
      if (url.endsWith("/persons") && method === "POST") return ok({ id: 7 });
      if (url.endsWith("/deals") && method === "POST") return ok({ id: 99 });
      if (url.endsWith("/notes")) return ok({ id: 1 });
      if (url.endsWith("/stages")) return ok([{ id: 5, name: "Soumission envoyée", pipeline_id: 3 }, { id: 6, name: "Gagné", pipeline_id: 3 }, { id: 8, name: "Autre", pipeline_id: 9 }]);
      if (url.includes("/deals/99") && method === "PUT") return ok({ id: 99 });
      return { status: 404 };
    });
    const s = fullSettings();
    s.pipedriveStages = { envoyee: 5, ouverte: null, acceptee: 8, refusee: null };
    await writeSettings(s);
    await seedPartner();
    const id = await newDraft();
    const r = await sendQuoteService(id, "proprio@exemple.ca", BASE, { sms: false }, NOW);
    expect(r.ok && r.pipedrive.ok).toBe(true);
    const deal = calls.find((c) => c.url.endsWith("/deals") && c.method === "POST")!.body as Record<string, unknown>;
    expect(String(deal.title)).toMatch(/^\[TAV\] Soumission S-2026-0001/);
    expect(deal.value).toBeGreaterThan(0);
    expect(deal.currency).toBe("CAD");
    expect(calls.some((c) => c.method === "PUT" && (c.body as Record<string, unknown>).stage_id === 5)).toBe(true);
    const q = (await readSoumissions()).quotes.find((x) => x.id === id)!;
    expect(q.pipedrive).toMatchObject({ personId: 7, dealId: 99 });

    // Acceptation : valeur = total accepté ; l'étape 8 est dans un autre pipeline, donc l'affaire n'est pas déplacée.
    calls.length = 0;
    const token = q.versions[0].token;
    await respondToQuote(token, "accepter", await accInput(token, []), BASE, NOW);
    const a = (await readSoumissions()).quotes.find((x) => x.id === id)!.versions[0].acceptance!;
    const put = calls.find((c) => c.method === "PUT")!.body as Record<string, unknown>;
    expect(put.value).toBe(a.totalCents / 100);
    expect(put).not.toHaveProperty("stage_id");
    const log = (await readSoumissions()).quotes.find((x) => x.id === id)!.pipedrive.log.at(-1)!;
    expect(log).toMatchObject({ event: "acceptation", ok: true });
    expect(log.detail).toContain("introuvable");
  });
});
