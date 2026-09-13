/* Refonte R2 — alertes de délais par étape : tâche CRM d'abord, puis texto au propriétaire ; un seul avis par dossier et
   par étape ; tâche faite ou reportée respectée ; heures silencieuses ; au plus 3 par passage ; aucun envoi réel (canaux
   simulés) ; branché sur le passage du moteur d'automatisations sans rien changer aux autres envois. */
import { rm } from "node:fs/promises";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type { enqueueReviewRequest } from "@/lib/relances/store";
import type { Quote } from "@/lib/soumissions/types";
import { runTick, type TickOptions } from "../../automatisations/engine";
import type { MorningData, WeeklyData } from "../../automatisations/owner";
import { readAutomations } from "../../automatisations/store";
import { fakeChannels, tempDir, testEnv, writeStores } from "../../commissions/__tests__/fixtures";
import { MAX_STAGE_ALERTS_PER_TICK, selectStageAlerts, stageAlertKey, stageAlertsFrom, stageAlertSms, type StageAlert } from "../alertes-etapes";
import { buildBundles, computeIndex } from "../model";
import { delayTaskKey, normalizeParcoursSettings } from "../parcours";
import { emptyCrm } from "../store";
import type { CrmData, SourceData } from "../types";
import { daysAgo, hoursAgo, iso, NOW, quote, src } from "./fixtures";

const julie = { firstName: "Julie", lastName: "Tremblay", phone: "514 555-0142", email: "julie@exemple.ca", city: "Laval" };
const index = (s: SourceData, now = NOW) => computeIndex(buildBundles(s), s, now);
function goAhead(q: Quote, at: Date): Quote {
  q.versions[0].jumelage = { at: iso(at), v: 1, selection: [], totalCents: 0, checkbox: "case", noticeSha256: "x", contentHash: "y", ip: "203.0.113.1", userAgent: "test" };
  return q;
}
const ready = (hours = 7) => src({ quotes: [goAhead(quote({ client: julie, sentAt: daysAgo(5), viewedAt: daysAgo(4) }), hoursAgo(hours))] });
const withCrm = (s: SourceData, fn: (crm: CrmData) => void): SourceData => {
  const crm = emptyCrm();
  fn(crm);
  return { ...s, crm };
};

describe("alertes de délais : texto au propriétaire", () => {
  it("délai dépassé et tâche encore ouverte : un avis, clé stable, message sobre (prénom, ville, étape, durée)", () => {
    const i = index(ready());
    const id = i.clients[0].b.id;
    const [a] = stageAlertsFrom(i, NOW);
    expect(a).toEqual({ key: stageAlertKey(id, "va-de-l-avant", null), clientId: id, step: "va-de-l-avant", dueAt: "2026-09-16T15:00:00.000Z", text: "Julie (Laval) : client prêt depuis 7 h, aucun installateur", href: `/gestion/clients/${id}` });
    expect(a.key).toBe(`alerte-etape:${id}:va-de-l-avant:0`);
    const sms = stageAlertSms(a, "https://exemple.ca/");
    expect(sms).toBe(`TAV · Julie (Laval) : client prêt depuis 7 h, aucun installateur. https://exemple.ca/gestion/clients/${id}`);
    expect(sms).not.toMatch(/@|555/);
  });

  it("tâche faite : aucun texto ; tâche reportée : le texto attend la fin du report", () => {
    const i = index(ready());
    const c = i.clients[0];
    const key = delayTaskKey(c.b.id, "va-de-l-avant", c.journey!.since);
    expect(c.tasks.some((t) => t.key === key)).toBe(true);
    expect(stageAlertsFrom(index(withCrm(ready(), (crm) => (crm.taskState[key] = { doneAt: iso(hoursAgo(0.5)) }))), NOW)).toEqual([]);
    const snoozed = stageAlertsFrom(index(withCrm(ready(), (crm) => (crm.taskState[key] = { snoozedUntil: "2026-09-16T18:00:00.000Z" }))), NOW);
    expect(snoozed[0].dueAt).toBe("2026-09-16T19:00:00.000Z");
  });

  it("heures silencieuses : le texto part à la fin du silence ; escalade réglable", () => {
    const quiet = stageAlertsFrom(index(withCrm(ready(), (crm) => (crm.parcours = normalizeParcoursSettings({ quietStart: 10, quietEnd: 12 })))), NOW);
    expect(quiet[0].dueAt).toBe("2026-09-16T16:00:00.000Z"); // 11 h → 12 h (Montréal)
    const later = stageAlertsFrom(index(withCrm(ready(), (crm) => (crm.parcours = normalizeParcoursSettings({ escalateAfterHours: 4 })))), NOW);
    expect(later[0].dueAt).toBe("2026-09-16T18:00:00.000Z");
  });

  it("seulement pour les étapes choisies (défaut : pas « Ouverte ») ; aucune avant le délai", () => {
    const opened = src({ quotes: [quote({ client: julie, sentAt: daysAgo(6), viewedAt: daysAgo(5) })] });
    expect(stageAlertsFrom(index(opened), NOW)).toEqual([]);
    const on = stageAlertsFrom(index(withCrm(opened, (crm) => (crm.parcours = normalizeParcoursSettings({ sms: { ouverte: true } })))), NOW);
    expect(on.map((a) => a.step)).toEqual(["ouverte"]);
    const early = stageAlertsFrom(index(ready(3)), NOW);
    expect(early).toHaveLength(1);
    expect(Date.parse(early[0].dueAt)).toBeGreaterThan(NOW.getTime()); // prévu, pas encore dû
  });

  it("sélection d'un passage : au plus 3 dues, les manquées notées, la prochaine affichée ; les clés déjà traitées écartées", () => {
    const al = (n: number, hoursFromNow: number): StageAlert => ({ key: `alerte-etape:c_00000000000${n}:va-de-l-avant:0`, clientId: `c_00000000000${n}`, step: "va-de-l-avant", dueAt: iso(hoursAgo(-hoursFromNow)), text: "x", href: "/" });
    const list = [al(1, -20), al(2, -3), al(3, -2), al(4, -1.5), al(5, -1), al(6, -0.5), al(7, 2), al(8, 5)];
    const picked = selectStageAlerts(list, (k) => k.endsWith("00000000006:va-de-l-avant:0"), NOW);
    expect(MAX_STAGE_ALERTS_PER_TICK).toBe(3);
    expect(picked.map((a) => a.clientId)).toEqual(["c_000000000001", "c_000000000002", "c_000000000003", "c_000000000004", "c_000000000007"]);
  });
});

describe("branché sur le passage du moteur (volet B)", () => {
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

  const morning = async (): Promise<MorningData> => ({ dayLabel: "mercredi", tasks: [], tasksTotal: 0, overdueTasks: 0, installs: [], installsTotal: 0, overdueInvoices: [], overdueCents: 0, hotQuotes: [], href: "https://exemple.ca/gestion" });
  const weekly = async (): Promise<WeeklyData> => ({ weekLabel: "semaine", demands: 0, installsDone: 0, invoicesIssued: 0, invoicedCents: 0, receivedCents: 0, overdueCents: 0, overdueCount: 0, surveys: 0, avgRating: null, badRatings: 0, logisvert: { aFaire: 0, faite: 0, recue: 0, aide: 0 }, referralDemands: 0, href: "https://exemple.ca/gestion" });
  const alert = (n: number, dueAt: string): StageAlert => ({ key: `alerte-etape:c_00000000000${n}:contrat-pret:0`, clientId: `c_00000000000${n}`, step: "contrat-pret", dueAt, text: `Client ${n} : contrat prêt à signer depuis 48 h`, href: `/gestion/clients/c_00000000000${n}` });

  it("un seul texto par dossier et par étape, même en plusieurs passages ; au plus 3 par passage ; rien avant l'heure", async () => {
    await writeStores(dir, {});
    const f = fakeChannels();
    const alerts = [1, 2, 3, 4].map((n) => alert(n, "2026-09-16T14:00:00.000Z")).concat(alert(5, "2026-09-16T20:00:00.000Z"));
    const opts = (now: string): TickOptions => ({
      now: new Date(now),
      channels: f.ch,
      baseUrl: "https://exemple.ca",
      startedAt: "2026-09-09T12:00:00.000Z",
      crm: { addTask: async () => undefined, clientIdForJob: async () => null },
      enqueueReview: (async () => ({ status: "queued", message: { dueAt: "2026-09-20T13:00:00.000Z" } })) as unknown as typeof enqueueReviewRequest,
      morningData: morning,
      weeklyData: weekly,
      stageAlerts: async () => alerts,
    });
    await runTick(opts("2026-09-16T15:00:00Z"));
    expect(f.count("ownerSms", "alerte de délai")).toBe(3);
    await runTick(opts("2026-09-16T15:15:00Z"));
    expect(f.count("ownerSms", "alerte de délai")).toBe(4);
    await runTick(opts("2026-09-16T15:30:00Z"));
    expect(f.count("ownerSms", "alerte de délai")).toBe(4); // la 5e n'est pas encore due ; aucune n'est renvoyée
    const log = (await readAutomations()).log;
    expect(log["alerte-etape:c_000000000001:contrat-pret:0"]).toMatchObject({ automation: "alerte-etape", status: "fait", attempts: 1 });
    expect(JSON.stringify(log)).not.toMatch(/@|555/);
    const body = f.calls.find((c) => c.kind === "ownerSms" && c.label === "alerte de délai")?.body ?? "";
    expect(body).toMatch(/^TAV · Client \d : contrat prêt à signer depuis 48 h\. https:\/\/exemple\.ca\/gestion\/clients\//);
  });

  it("automatisation éteinte : aucun texto d'alerte", async () => {
    await writeStores(dir, {});
    const { mutateAutomations } = await import("../../automatisations/store");
    await mutateAutomations((d) => {
      d.settings.enabled["alerte-etape"] = false;
      return { result: undefined, changed: true };
    });
    const f = fakeChannels();
    let loaded = false;
    await runTick({ now: new Date("2026-09-16T15:00:00Z"), channels: f.ch, baseUrl: "https://exemple.ca", startedAt: "2026-09-09T12:00:00.000Z", crm: { addTask: async () => undefined, clientIdForJob: async () => null }, enqueueReview: (async () => ({ status: "queued", message: { dueAt: "2026-09-20T13:00:00.000Z" } })) as unknown as typeof enqueueReviewRequest, morningData: morning, weeklyData: weekly, stageAlerts: async () => ((loaded = true), [alert(1, "2026-09-16T14:00:00.000Z")]) });
    expect(loaded).toBe(false);
    expect(f.count("ownerSms", "alerte de délai")).toBe(0);
  });
});
