/* Moteur d'automatisations : idempotence du passage (jamais deux fois le même message), moments dus (facture du
   lendemain, sondage à +8 h reporté la nuit, dossier LogisVert, rappel la veille), heure utile dépassée, jobs terminés
   avant la mise en marche, garde-fou de l'adresse postale, garantie seulement quand la marque l'exige. */
import { rm } from "node:fs/promises";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { readyContent } from "@/lib/soumissions/__tests__/fixtures";
import type { enqueueReviewRequest } from "@/lib/relances/store";
import { paymentBlocker } from "../../commissions/blocker";
import { readCommissions } from "../../commissions/store";
import { runTick, type TickOptions } from "../engine";
import { readAfterSale, readAutomations } from "../store";
import type { MorningData, WeeklyData } from "../owner";
import { acceptedQuote, fakeChannels, makeJob, tempDir, testEnv, writeStores } from "../../commissions/__tests__/fixtures";

const STARTED = "2026-09-09T12:00:00.000Z";
const morning = async (): Promise<MorningData> => ({ dayLabel: "vendredi 11 septembre", tasks: [], tasksTotal: 0, overdueTasks: 0, installs: [], installsTotal: 0, overdueInvoices: [], overdueCents: 0, hotQuotes: [], href: "https://exemple.ca/gestion" });
const weekly = async (): Promise<WeeklyData> => ({ weekLabel: "semaine", demands: 0, installsDone: 0, invoicesIssued: 0, invoicedCents: 0, receivedCents: 0, overdueCents: 0, overdueCount: 0, surveys: 0, avgRating: null, badRatings: 0, logisvert: { aFaire: 0, faite: 0, recue: 0, aide: 0 }, referralDemands: 0, href: "https://exemple.ca/gestion" });

function harness() {
  const f = fakeChannels();
  const tasks: Array<{ clientId: string | null; title: string }> = [];
  const reviews: Array<{ email: string }> = [];
  const enqueueReview = (async (input: { email: string }) => {
    reviews.push(input);
    return { status: "queued", message: { dueAt: "2026-09-15T13:00:00.000Z" } };
  }) as unknown as typeof enqueueReviewRequest;
  const opts = (now: string): TickOptions => ({
    now: new Date(now),
    channels: f.ch,
    baseUrl: "https://exemple.ca",
    startedAt: STARTED,
    crm: { addTask: async (t) => void tasks.push(t), clientIdForJob: async () => null },
    enqueueReview,
    morningData: morning,
    weeklyData: weekly,
  });
  return { ...f, tasks, reviews, opts };
}

describe("passage du moteur", () => {
  const env = process.env;
  let dir: string;
  beforeEach(async () => {
    dir = await tempDir();
    process.env = testEnv(dir, { GOOGLE_REVIEW_URL: "https://exemple.ca/avis" });
    vi.stubGlobal("fetch", vi.fn(async () => { throw new Error("réseau interdit dans les tests"); }));
  });
  afterEach(async () => {
    process.env = env;
    vi.unstubAllGlobals();
    await rm(dir, { recursive: true, force: true });
  });

  it("idempotent : deux passages au même moment n’envoient chaque message qu’une fois", async () => {
    await writeStores(dir, {});
    const h = harness();
    // Vendredi 11 septembre, 8 h 30 à Montréal : facture due (8 h), résumé du matin dû (7 h), sondage pas encore (9 h).
    const r1 = await runTick(h.opts("2026-09-11T12:30:00Z"));
    expect(h.count("installerMail", "emission")).toBe(1);
    expect(h.count("ownerMail", "résumé du matin")).toBe(1);
    expect(h.count("ownerSms", "résumé du matin")).toBe(1);
    expect(h.reviews).toHaveLength(1); // demande d'avis Google à TOUS les clients
    expect(h.count("clientMail")).toBe(0);
    expect(r1.done).toBe(3);
    const before = h.calls.length;
    const r2 = await runTick(h.opts("2026-09-11T12:30:00Z"));
    expect(h.calls.length).toBe(before);
    expect(h.reviews).toHaveLength(1);
    expect(r2.done).toBe(0);
    expect((await readCommissions()).invoices).toHaveLength(1);

    // 10 h 30 : sondage (reporté à 9 h) et dossier LogisVert (10 h), une seule fois chacun.
    await runTick(h.opts("2026-09-11T14:30:00Z"));
    await runTick(h.opts("2026-09-11T14:45:00Z"));
    expect(h.count("clientMail", "sondage")).toBe(1);
    expect(h.count("clientSms", "sondage")).toBe(1);
    expect(h.count("clientMail", "dossier LogisVert")).toBe(1);
    const lv = (await readAfterSale()).dossiers.j_testjob0001.logisvert;
    expect(lv).toMatchObject({ status: "a-faire", expectedCents: 150_000 });
    expect(h.count("clientMail", "garantie")).toBe(0); // la fiche de la marque n'exige pas d'enregistrement

    // Jour 7 après l'émission, 9 h 30 : rappel d'échéance à l'installateur, une fois.
    await runTick(h.opts("2026-09-18T13:30:00Z"));
    await runTick(h.opts("2026-09-18T13:30:00Z"));
    expect(h.count("installerMail", "relance J+7")).toBe(1);
    expect(h.count("installerSms", "relance facture J+7")).toBe(1);

    // Lendemain de l'échéance : offres en pause.
    const comm = await readCommissions();
    expect(paymentBlocker("i_testinst001", comm.invoices, comm.settings, new Date("2026-09-19T12:00:00Z"))).not.toBeNull();
    const log = (await readAutomations()).log;
    expect(log["facture-commission:j_testjob0001"].status).toBe("fait");
    expect(log["sondage:j_testjob0001"].attempts).toBe(1);
    expect(JSON.stringify(log)).not.toMatch(/@|514 555/); // journal sans renseignement personnel
  });

  it("job terminé avant la mise en marche : rien ne part d’office", async () => {
    await writeStores(dir, { jobs: [makeJob({ completedAt: "2026-09-05T18:00:00.000Z" } as never)] });
    const h = harness();
    await runTick(h.opts("2026-09-11T14:30:00Z"));
    expect(h.count("installerMail")).toBe(0);
    expect(h.count("clientMail")).toBe(0);
    expect(h.reviews).toHaveLength(0);
    expect((await readCommissions()).invoices).toHaveLength(0);
  });

  it("rappel la veille : pas avant 16 h, envoyé une fois, manqué après 21 h (jamais en retard)", async () => {
    const planned = makeJob({ id: "j_testjob0003", number: 9, status: "planifie", scheduledFor: "2026-09-15", completedAt: undefined } as never);
    const late = makeJob({ id: "j_testjob0004", number: 10, status: "planifie", scheduledFor: "2026-09-16", completedAt: undefined, internalNotes: "" } as never);
    await writeStores(dir, { jobs: [planned, late] });
    const h = harness();
    await runTick(h.opts("2026-09-14T19:59:00Z")); // 15 h 59
    expect(h.count("clientSms", "rappel la veille")).toBe(0);
    await runTick(h.opts("2026-09-14T20:05:00Z")); // 16 h 05
    await runTick(h.opts("2026-09-14T20:20:00Z"));
    expect(h.count("clientSms", "rappel la veille")).toBe(1);
    expect(h.count("clientMail", "rappel la veille")).toBe(1);
    const sms = h.calls.find((c) => c.kind === "clientSms")!.body!;
    expect(sms).toContain("https://exemple.ca/projet/"); // Chantier P : les liens mènent au portail « Mon projet »
    expect(sms).toContain("ARRET");
    expect(sms).not.toContain("514 555-0199");

    await runTick(h.opts("2026-09-16T02:00:00Z")); // 22 h, veille du 16 : trop tard
    expect(h.count("clientSms", "rappel la veille")).toBe(1);
    const entry = (await readAutomations()).log["rappel-veille:j_testjob0004:2026-09-16"];
    expect(entry.status).toBe("ignore");
    expect(entry.detail).toContain("manqué");
  });

  it("sans adresse postale (LCAP) : les envois aux clients attendent, puis partent quand elle est définie", async () => {
    delete process.env.BUSINESS_MAILING_ADDRESS;
    await writeStores(dir, {});
    const h = harness();
    const r = await runTick(h.opts("2026-09-11T14:30:00Z"));
    expect(h.count("clientMail")).toBe(0);
    expect(Object.keys(r.waiting).join(" ")).toMatch(/BUSINESS_MAILING_ADDRESS/);
    process.env.BUSINESS_MAILING_ADDRESS = "1 rue Exemple, Montréal (Québec) H2X 1Y4";
    await runTick(h.opts("2026-09-11T14:45:00Z"));
    expect(h.count("clientMail", "sondage")).toBe(1);
  });

  it("interrupteur : une automatisation en pause n’envoie rien", async () => {
    await writeStores(dir, {});
    const { mutateAutomations } = await import("../store");
    await mutateAutomations((d) => {
      d.settings.enabled.sondage = false;
      return { result: undefined, changed: true };
    });
    const h = harness();
    await runTick(h.opts("2026-09-11T14:30:00Z"));
    expect(h.count("clientMail", "sondage")).toBe(0);
    expect(h.count("clientMail", "dossier LogisVert")).toBe(1);
  });

  it("garantie : seulement quand la fiche de la marque exige l’enregistrement", async () => {
    const c = readyContent();
    c.machine!.catalogWarranties = [{ type: "parts", years: 10, requiresRegistration: true, confidence: "manufacturer_claim" }];
    await writeStores(dir, { quotes: [acceptedQuote({ content: c })] });
    const h = harness();
    await runTick(h.opts("2026-09-12T14:30:00Z")); // 2 jours après, 10 h 30
    expect(h.count("clientMail", "garantie")).toBe(1);
  });

  it("sans soumission liée : pas de facture, une tâche pour le propriétaire", async () => {
    await writeStores(dir, { quotes: [] });
    const h = harness();
    await runTick(h.opts("2026-09-11T12:30:00Z"));
    expect(h.count("installerMail")).toBe(0);
    expect(h.tasks.map((t) => t.title).join(" ")).toMatch(/Facturer le job n° 7/);
    await runTick(h.opts("2026-09-11T12:45:00Z"));
    expect(h.tasks).toHaveLength(1);
  });
});
