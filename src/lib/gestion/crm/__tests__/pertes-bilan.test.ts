/* Refonte R2 — « Pourquoi on perd » (par étape, par raison structurée et motif automatique, période, résumé mensuel) et
   bilan hebdomadaire (règles ; assistant IA seulement en production avec une clé, sans nom de client, sans chiffre
   inventé ; aucun appel en développement). */
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type { MessagesCall, MessagesRequest } from "../../assistant/anthropic";
import { readAssistant } from "../../assistant/store";
import { buildWeeklyBilan, numbersKnown, parseBilanJson, phraseBilan } from "../../automatisations/bilan-ia";
import { weeklyReport, type WeeklyData } from "../../automatisations/owner";
import { bilanFromFacts, type BilanFacts } from "../bilan";
import { buildBundles, computeIndex } from "../model";
import type { LossCause } from "../parcours";
import { buildLossView, lossRows } from "../pertes";
import { emptyCrm } from "../store";
import type { SourceData } from "../types";
import { daysAgo, entry, hoursAgo, iso, NOW, quote, src } from "./fixtures";

const person = (firstName: string, n: string, city = "Laval") => ({ firstName, lastName: "Exemple", phone: `514 555-01${n}`, email: `${firstName.toLowerCase()}@exemple.ca`, city });
const index = (s: SourceData, now = NOW) => computeIndex(buildBundles(s), s, now);

function lossesSrc(): SourceData {
  const base = src({
    journal: [entry("soumission", daysAgo(260), { firstName: "Carl", phone: "514 555-0173" })],
    quotes: [
      quote({ client: person("Anne", "71"), sentAt: daysAgo(12), viewedAt: daysAgo(11), refusedAt: daysAgo(10), reason: "Trop cher" }),
      quote({ client: person("Ben", "72", "Longueuil"), sentAt: daysAgo(30), validUntil: "2027-01-01" }),
      quote({ client: person("Dora", "74"), sentAt: daysAgo(3), viewedAt: daysAgo(2) }),
    ],
  });
  const bundles = buildBundles(base);
  const crm = emptyCrm();
  const lose = (first: string, at: Date, reason: string, cause?: LossCause) => {
    const b = bundles.find((x) => x.firstName === first)!;
    crm.clients[b.id] = { id: b.id, keys: b.keys, stageOverride: { stage: "perdue", at: iso(at), by: "proprio@exemple.ca" }, stageLog: [{ at: iso(at), by: "proprio@exemple.ca", from: null, to: "perdue", reason, ...(cause ? { cause } : {}) }], lost: { reason, at: iso(at), ...(cause ? { cause } : {}) }, tags: [], notes: [], createdAt: iso(at), updatedAt: iso(at) };
  };
  lose("Ben", daysAgo(20), "Moins cher ailleurs", "prix");
  lose("Carl", daysAgo(200), "Plus de nouvelles");
  return { ...base, crm };
}

describe("pourquoi on perd", () => {
  it("par étape atteinte, par raison structurée (ou non précisée) et par motif automatique, sur la période", () => {
    const v = buildLossView(index(lossesSrc()), "90");
    expect(v.total).toBe(2);
    expect(v.byStep).toEqual([
      { step: "soumission-envoyee", label: "Soumission envoyée", n: 1, cents: expect.any(Number) },
      { step: "ouverte", label: "Ouverte", n: 1, cents: expect.any(Number) },
    ]);
    expect(v.byCause).toEqual([
      { id: "prix", label: "Prix", n: 1 },
      { id: "non-precisee", label: "Non précisée", n: 1 },
    ]);
    expect(v.byMotif.map((m) => [m.id, m.n])).toEqual([
      ["soumission-refusee", 1],
      ["sans-reponse", 1],
    ]);
    expect(v.matrix.rows.map((r) => [r.step, r.counts])).toEqual([
      ["soumission-envoyee", [0, 1]],
      ["ouverte", [1, 0]],
    ]);
    expect(v.cents).toBeGreaterThan(0);
  });

  it("toute la période : l'ancienne perte sans soumission compte (avant toute soumission) ; résumé des 12 derniers mois", () => {
    const v = buildLossView(index(lossesSrc()), "tout");
    expect(v.total).toBe(3);
    expect(v.recent.find((r) => r.name.startsWith("Carl"))).toMatchObject({ motif: "avant-soumission", reached: "demande", causeLabel: "Non précisée" });
    expect(v.monthly).toHaveLength(12);
    expect(v.monthly.at(-1)).toMatchObject({ month: "2026-09", n: 1, topReason: "Soumission refusée" });
    expect(v.monthly.find((m) => m.month === "2026-08")).toMatchObject({ n: 1, topStep: "Soumission envoyée", topReason: "Prix" });
    expect(v.monthly.find((m) => m.month === "2026-02")).toMatchObject({ n: 1 });
  });

  it("aucun renseignement personnel ; un client actif n'est pas une perte", () => {
    const rows = lossRows(index(lossesSrc()));
    expect(rows.map((r) => r.name.split(" ")[0]).sort()).toEqual(["Anne", "Ben", "Carl"]);
    expect(JSON.stringify(rows)).not.toMatch(/@|555/);
  });
});

/* ---------------- Bilan hebdomadaire ---------------- */

const FACTS: BilanFacts = {
  signed: { n: 2, cents: 2_450_000 },
  wentAhead: 1,
  installed: 0,
  paid: { n: 1, cents: 120_000 },
  lost: { n: 2, top: "Prix" },
  blocked: { n: 1, top: [{ label: "Job sans preneur", n: 1 }] },
  slow: [{ label: "Contrat prêt à signer", n: 3 }],
  alerts: 4,
  top: [{ who: "Julie (Laval)", action: "Trouver l’installateur", score: "7 500" }],
};

describe("bilan de la semaine : par règles", () => {
  it("ce qui a marché, ce qui bloque, quoi faire ; les dossiers nommés restent à part", () => {
    const b = bilanFromFacts(FACTS);
    expect(b.source).toBe("regles");
    expect(b.wins[0]).toMatch(/^2 contrats signés \(24[\s ]500 \$, taxes comprises\)\.$/);
    expect(b.wins).toContain("1 client est allé de l’avant.");
    expect(b.blocks).toEqual(["1 dossier bloqué : 1 « Job sans preneur ».", "Étapes au-delà de leur délai : Contrat prêt à signer (3 dossiers).", "4 alertes de délai envoyées par texto cette semaine.", "2 pertes cette semaine, surtout « Prix »."]);
    expect(b.todo[0]).toBe("Débloquer l’étape « Contrat prêt à signer » : 3 dossiers attendent.");
    expect(b.named).toEqual(["Julie (Laval) : Trouver l’installateur (note 7 500)."]);
    expect(b.todo).toContain(b.named[0]);
    const empty = bilanFromFacts({ signed: { n: 0, cents: 0 }, wentAhead: 0, installed: 0, paid: { n: 0, cents: 0 }, lost: { n: 0, top: null }, blocked: { n: 0, top: [] }, slow: [], alerts: 0, top: [] });
    expect(empty).toMatchObject({ wins: ["Aucune signature, installation ni commission encaissée cette semaine."], blocks: ["Rien de bloqué en ce moment."], todo: ["Rien d’urgent : suivre les tâches du jour."] });
  });

  it("le rapport hebdomadaire garde ses chiffres et ajoute le bilan (courriel et texte)", () => {
    const d: WeeklyData = { weekLabel: "semaine", demands: 3, installsDone: 1, invoicesIssued: 1, invoicedCents: 100_000, receivedCents: 50_000, overdueCents: 0, overdueCount: 0, surveys: 0, avgRating: null, badRatings: 0, logisvert: { aFaire: 0, faite: 0, recue: 0, aide: 0 }, referralDemands: 0, href: "https://exemple.ca/gestion" };
    expect(weeklyReport(d).mail.text).not.toContain("Ce qui a marché");
    const b = bilanFromFacts(FACTS);
    const r = weeklyReport({ ...d, bilan: { wins: b.wins, blocks: b.blocks, todo: b.todo, source: "regles" } });
    expect(r.mail.text).toContain("Nouvelles demandes : 3");
    expect(r.mail.text).toContain("Ce qui a marché :");
    expect(r.mail.text).toContain("Quoi faire :");
    expect(r.mail.html).toContain("Ce qui bloque");
    expect(r.mail.html).toContain("construit par règles");
    expect(r.sms).toBe(weeklyReport(d).sms);
  });
});

describe("bilan de la semaine : assistant IA", () => {
  const env = process.env;
  let dir: string;
  const PROD = { NODE_ENV: "production", ANTHROPIC_API_KEY: "cle-fictive-de-test" };
  beforeEach(async () => {
    dir = await mkdtemp(path.join(tmpdir(), "thermo-bilan-"));
    process.env = { ...env, GESTION_DATA_DIR: dir, NODE_ENV: "test" };
    vi.stubGlobal("fetch", vi.fn(async () => { throw new Error("réseau interdit dans les tests"); }));
  });
  afterEach(async () => {
    process.env = env;
    vi.unstubAllGlobals();
    await rm(dir, { recursive: true, force: true });
  });
  const answer = (text: string): MessagesCall => async () => ({ content: [{ type: "text", text }], stop_reason: "end_turn", usage: { input_tokens: 120, output_tokens: 60 } });

  it("aucun chiffre inventé : chaque nombre doit venir des faits ; réponse JSON validée", () => {
    const src1 = JSON.stringify({ wins: ["2 contrats signés (24 500 $)"] });
    expect(numbersKnown(["Deux semaines fortes : 2 contrats, 24 500 $."], src1)).toBe(true);
    expect(numbersKnown(["3 contrats signés"], src1)).toBe(false);
    expect(parseBilanJson('Voici : {"wins":["a"],"blocks":["b"],"todo":[]}')).toEqual({ wins: ["a"], blocks: ["b"], todo: [] });
    expect(parseBilanJson("pas de JSON")).toBeNull();
    expect(parseBilanJson('{"wins":[],"blocks":["b"],"todo":[]}')).toBeNull();
  });

  it("en développement : aucun appel, le bilan reste construit par règles", async () => {
    expect(await phraseBilan({ wins: ["a"], blocks: ["b"], todo: [] }, { env: { NODE_ENV: "development", ANTHROPIC_API_KEY: "cle-fictive-de-test" } })).toBeNull();
    expect(fetch).not.toHaveBeenCalled();
  });

  it("en production avec une clé : reformulé, sans nom de client envoyé, usage noté au journal de l'assistant", async () => {
    let body: MessagesRequest | null = null;
    const call: MessagesCall = async (b) => {
      body = b;
      return answer(JSON.stringify({ wins: ["Belle semaine : 1 contrat signé."], blocks: ["Rien ne bloque."], todo: ["Suivre les tâches."] }))(b);
    };
    const s = src({ quotes: [quote({ client: person("Julie", "42"), sentAt: daysAgo(4), acceptedAt: hoursAgo(20) })] });
    const b = await buildWeeklyBilan(index(s), NOW, 0, { env: PROD, call });
    expect(b.source).toBe("ia");
    expect(b.wins).toEqual(["Belle semaine : 1 contrat signé."]);
    expect(b.todo.at(-1)).toMatch(/^Julie \(Laval\) : /); // dossier nommé ajouté après, jamais envoyé
    expect(JSON.stringify(body)).not.toMatch(/Julie|Laval|@|555/);
    expect(body!).toMatchObject({ model: "claude-opus-5" });
    expect("tools" in (body as unknown as Record<string, unknown>)).toBe(false);
    const j = (await readAssistant()).journal;
    expect(j.at(-1)).toMatchObject({ by: "automatisation", question: "Bilan hebdomadaire (automatique)", outcome: "ok", mode: "api" });
  });

  it("réponse avec un chiffre inventé, illisible ou refusée : le bilan par règles est gardé", async () => {
    const s = src({ quotes: [quote({ client: person("Julie", "42"), sentAt: daysAgo(4), acceptedAt: hoursAgo(20) })] });
    const invented = await buildWeeklyBilan(index(s), NOW, 0, { env: PROD, call: answer(JSON.stringify({ wins: ["12 contrats signés !"], blocks: ["x"], todo: [] })) });
    expect(invented.source).toBe("regles");
    expect(invented.wins[0]).toMatch(/^1 contrat signé/);
    expect((await buildWeeklyBilan(index(s), NOW, 0, { env: PROD, call: answer("Désolé.") })).source).toBe("regles");
    const refused: MessagesCall = async () => ({ content: [], stop_reason: "refusal" });
    expect((await buildWeeklyBilan(index(s), NOW, 0, { env: PROD, call: refused })).source).toBe("regles");
    const outcomes = (await readAssistant()).journal.map((r) => r.outcome);
    expect(outcomes).toEqual(["erreur", "erreur", "refus"]);
  });
});
