import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { emailHash } from "../core";
import { loadConversions } from "../conversions";
import { runRelances, type RunOptions } from "../sender";
import { claimMessage, enqueueReviewRequest, enqueueThermoMatch, readRelances, relancesFile, unsubscribeByToken } from "../store";

const consent = { at: "2026-09-12T16:00:00.000Z", page: "/trouver-ma-thermopompe", text: "M’envoyer aussi deux rappels…", version: "2026-09-12" };
const T0 = new Date("2026-09-12T16:00:00Z");
const J2 = new Date("2026-09-14T13:30:00Z");
const J7 = new Date("2026-09-19T13:30:00Z");
const ADDRESS = "123, rue Exemple, Montréal (Québec) H2X 1Y4";
const mail = { subject: "Vos 3 choix vous attendent", html: "<p>x</p>", text: "x" };

function setup(over: Partial<RunOptions> = {}) {
  const send = vi.fn<RunOptions["send"]>(async () => true);
  const lines: string[] = [];
  const o: RunOptions = {
    now: J2,
    max: 40,
    mailingAddress: ADDRESS,
    reviewUrl: "https://g.page/r/exemple/review",
    transport: "smtp",
    render: () => mail,
    send,
    loadConversions,
    log: (l) => lines.push(l),
    ...over,
  };
  return { o, send: (over.send as typeof send) ?? send, lines };
}

const enqueue = (email = "marie@exemple.ca", now = T0) => enqueueThermoMatch({ email, firstName: "Marie", slugs: ["a", "b", "c"], consent }, now);
const byKind = async () => Object.fromEntries((await readRelances()).messages.map((m) => [`${m.email}|${m.kind}`, m]));

describe("file des relances et envoi quotidien", () => {
  const env = process.env;
  let dir: string;

  beforeEach(async () => {
    dir = await mkdtemp(path.join(tmpdir(), "thermo-relances-"));
    process.env = { ...env, RELANCES_FILE: path.join(dir, "relances.json"), LEAD_JOURNAL_DIR: path.join(dir, "leads") };
  });
  afterEach(async () => {
    process.env = env;
    await rm(dir, { recursive: true, force: true });
  });

  it("par défaut, la file est à côté du journal des leads (shared/data sur le VPS)", () => {
    process.env = { ...env, RELANCES_FILE: "", LEAD_JOURNAL_DIR: path.join(dir, "shared", "data", "leads") };
    expect(relancesFile()).toBe(path.join(dir, "shared", "data", "relances.json"));
  });

  it("idempotence : J+2 part une seule fois, puis J+7 à son tour", async () => {
    await enqueue();
    const { o, send } = setup();
    expect((await runRelances(o)).sent).toBe(1);
    expect(send).toHaveBeenCalledTimes(1);
    expect(send.mock.calls[0][0].kind).toBe("thermomatch-j2");
    expect(send.mock.calls[0][2]).toEqual({
      "List-Unsubscribe": expect.stringMatching(/^<https:\/\/thermopompesavendre\.ca\/api\/relances\/desabonnement\?token=[A-Za-z0-9_-]{32}>$/),
      "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
    });
    await runRelances(o);
    expect(send).toHaveBeenCalledTimes(1);

    await runRelances({ ...o, now: J7 });
    await runRelances({ ...o, now: J7 });
    expect(send).toHaveBeenCalledTimes(2);
    const m = await byKind();
    expect(m["marie@exemple.ca|thermomatch-j2"].status).toBe("sent");
    expect(m["marie@exemple.ca|thermomatch-j7"].status).toBe("sent");
    expect(m["marie@exemple.ca|thermomatch-j7"].sentAt).toBeTruthy();
  });

  it("deux passages simultanés n'envoient le message qu'une fois", async () => {
    await enqueue();
    const { o, send } = setup();
    await Promise.all([runRelances(o), runRelances(o), runRelances(o)]);
    expect(send).toHaveBeenCalledTimes(1);
  });

  it("un message ne peut être réservé qu'une fois", async () => {
    const r = await enqueue();
    if (r.status !== "queued") throw new Error("non planifié");
    const id = r.messages[0].id;
    expect(await claimMessage(id, T0)).toBeNull(); // pas encore dû
    expect(await claimMessage(id, J2)).not.toBeNull();
    expect(await claimMessage(id, J2)).toBeNull();
  });

  it("respecte le plafond par passage", async () => {
    for (let i = 0; i < 5; i++) await enqueue(`client${i}@exemple.ca`);
    const { o, send } = setup({ max: 2 });
    const first = await runRelances(o);
    expect(first.sent).toBe(2);
    expect(first.deferred).toBe(3);
    await runRelances(o);
    await runRelances(o);
    expect(send).toHaveBeenCalledTimes(5);
  });

  it("échec du transport : nouvel essai au passage suivant, abandon après 3 essais", async () => {
    await enqueue();
    const { o, send } = setup({ send: vi.fn<RunOptions["send"]>(async () => false) });
    await runRelances(o);
    expect((await byKind())["marie@exemple.ca|thermomatch-j2"]).toMatchObject({ status: "failed", attempts: 1 });
    await runRelances(o);
    await runRelances(o);
    await runRelances(o);
    expect(send).toHaveBeenCalledTimes(3);
    expect((await byKind())["marie@exemple.ca|thermomatch-j2"]).toMatchObject({ status: "cancelled", cancelReason: "echecs" });
  });

  it("arrêt : soumission reçue après la demande ThermoMatch (journal des leads)", async () => {
    await enqueue();
    await mkdir(path.join(dir, "leads"), { recursive: true });
    await writeFile(
      path.join(dir, "leads", "2026-09.jsonl"),
      [
        JSON.stringify({ id: "x", at: "2026-09-13T15:00:00Z", kind: "soumission", lead: { email: "MARIE@exemple.ca" } }),
        JSON.stringify({ id: "x", at: "2026-09-13T15:00:01Z", kind: "soumission", lead: {}, outcome: { pipedrive: "ok" } }),
      ].join("\n") + "\n",
    );
    const { o, send } = setup();
    const report = await runRelances(o);
    expect(send).not.toHaveBeenCalled();
    expect(report.cancelled.soumission).toBe(1);
    await runRelances({ ...o, now: J7 });
    expect(send).not.toHaveBeenCalled();
    const m = await byKind();
    expect(m["marie@exemple.ca|thermomatch-j2"]).toMatchObject({ status: "cancelled", cancelReason: "soumission" });
    expect(m["marie@exemple.ca|thermomatch-j7"]).toMatchObject({ status: "cancelled", cancelReason: "soumission" });
  });

  it("un rendez-vous ANTÉRIEUR à la demande n'arrête rien", async () => {
    await enqueue();
    await mkdir(path.join(dir, "leads"), { recursive: true });
    await writeFile(path.join(dir, "leads", "2026-09.jsonl"), JSON.stringify({ id: "y", at: "2026-09-10T15:00:00Z", kind: "rendez-vous", lead: { email: "marie@exemple.ca" } }) + "\n");
    const { o, send } = setup();
    await runRelances(o);
    expect(send).toHaveBeenCalledTimes(1);
  });

  it("désabonnement en un clic : tout s'arrête, maintenant et plus tard", async () => {
    const r = await enqueue();
    if (r.status !== "queued") throw new Error("non planifié");
    expect(await unsubscribeByToken(r.messages[0].token)).toEqual({ email: "marie@exemple.ca", cancelled: 2, already: false });
    // Idempotent ; jeton inconnu : null.
    expect(await unsubscribeByToken(r.messages[1].token)).toEqual({ email: "marie@exemple.ca", cancelled: 0, already: true });
    expect(await unsubscribeByToken("x".repeat(32))).toBeNull();

    const { o, send } = setup();
    await runRelances({ ...o, now: J7 });
    expect(send).not.toHaveBeenCalled();
    expect(await enqueue()).toEqual({ status: "suppressed" });
    expect(await enqueueReviewRequest({ email: "Marie@Exemple.ca" })).toEqual({ status: "suppressed" });
    const data = await readRelances();
    // Seule une empreinte est gardée dans la liste des désabonnés.
    expect(data.suppressed).toEqual([emailHash("marie@exemple.ca")]);
    expect(data.messages.every((m) => m.status === "cancelled" && m.cancelReason === "desabonnement")).toBe(true);
  });

  it("sans BUSINESS_MAILING_ADDRESS : rien ne part, tout reste en file, la raison est journalisée", async () => {
    await enqueue();
    const { o, send, lines } = setup({ mailingAddress: null });
    const report = await runRelances(o);
    expect(send).not.toHaveBeenCalled();
    expect(Object.keys(report.held).join(" ")).toContain("BUSINESS_MAILING_ADDRESS");
    expect(lines.join("\n")).toContain("BUSINESS_MAILING_ADDRESS absente");
    expect((await byKind())["marie@exemple.ca|thermomatch-j2"]).toMatchObject({ status: "pending", attempts: 0 });

    // Adresse ajoutée : le message gardé part au passage suivant.
    await runRelances({ ...o, mailingAddress: ADDRESS });
    expect(send).toHaveBeenCalledTimes(1);
  });

  it("sans transport de courriel : rien ne part, tout reste en file", async () => {
    await enqueue();
    const { o, send } = setup({ transport: null });
    await runRelances(o);
    expect(send).not.toHaveBeenCalled();
    expect((await byKind())["marie@exemple.ca|thermomatch-j2"].status).toBe("pending");
  });

  it("sans GOOGLE_REVIEW_URL : la demande d'avis reste en file", async () => {
    await enqueueReviewRequest({ email: "client@exemple.ca", dealId: 5 }, T0);
    const due = new Date("2026-09-17T14:00:00Z");
    const { o, send } = setup({ now: due, reviewUrl: null });
    const report = await runRelances(o);
    expect(send).not.toHaveBeenCalled();
    expect(Object.keys(report.held).join(" ")).toContain("GOOGLE_REVIEW_URL");
    expect((await byKind())["client@exemple.ca|avis"].status).toBe("pending");
    await runRelances({ ...o, reviewUrl: "https://g.page/r/exemple/review" });
    expect(send).toHaveBeenCalledTimes(1);
  });

  it("demande d'avis : jamais deux fois pour la même affaire ou la même adresse", async () => {
    expect((await enqueueReviewRequest({ email: "client@exemple.ca", dealId: 5 })).status).toBe("queued");
    expect((await enqueueReviewRequest({ email: "autre@exemple.ca", dealId: 5 })).status).toBe("doublon");
    expect((await enqueueReviewRequest({ email: "CLIENT@exemple.ca", dealId: 6 })).status).toBe("doublon");
    expect((await readRelances()).messages).toHaveLength(1);
  });

  it("une nouvelle demande ThermoMatch remplace les relances pas encore parties", async () => {
    await enqueue();
    const again = await enqueue("marie@exemple.ca", new Date("2026-09-13T16:00:00Z"));
    expect(again).toMatchObject({ status: "queued", replaced: 2 });
    const data = await readRelances();
    expect(data.messages.filter((m) => m.status === "cancelled" && m.cancelReason === "remplacee")).toHaveLength(2);
    expect(data.messages.filter((m) => m.status === "pending")).toHaveLength(2);
  });

  it("essai à blanc : rien n'est envoyé ni écrit", async () => {
    await enqueue();
    const { o, send } = setup({ dryRun: true });
    const report = await runRelances(o);
    expect(report.wouldSend).toBe(1);
    expect(send).not.toHaveBeenCalled();
    expect((await byKind())["marie@exemple.ca|thermomatch-j2"]).toMatchObject({ status: "pending", attempts: 0 });
  });

  it("modèles disparus du catalogue : le rappel est annulé", async () => {
    await enqueue();
    const { o, send } = setup({ render: () => null });
    await runRelances(o);
    expect(send).not.toHaveBeenCalled();
    expect((await byKind())["marie@exemple.ca|thermomatch-j2"]).toMatchObject({ status: "cancelled", cancelReason: "catalogue" });
  });
});
