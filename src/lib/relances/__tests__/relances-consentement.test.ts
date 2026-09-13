/* Conformité C2 — robot des relances : un rappel ne part qu'avec la case 5.2 cochée, deux au plus par demande ;
   désabonnement en un clic : prise d'effet immédiate et consignée ; pied de message 5.5 pour les rappels.
   Aucun envoi réel : le transport est simulé. */
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { consentStatus, readConsents, recordWithdrawal } from "@/lib/consentements/store";
import { loadConversions } from "../conversions";
import { runRelances, type RunOptions } from "../sender";
import { enqueueThermoMatch, readRelances, relancesFile, unsubscribeByToken } from "../store";

const consent = { at: "2030-01-10T16:00:00.000Z", page: "/trouver-ma-thermopompe", text: "Case fictive des rappels", version: "abcdef0123456789", recordId: "cs_fictif" };
const T0 = new Date("2030-01-10T16:00:00Z");
const J2 = new Date("2030-01-12T14:30:00Z");
const J7 = new Date("2030-01-17T14:30:00Z");
const mail = { subject: "Rappel fictif", html: "<p>x</p>", text: "x" };

function setup(over: Partial<RunOptions> = {}) {
  const send = vi.fn<RunOptions["send"]>(async () => true);
  const render = vi.fn<RunOptions["render"]>(() => mail);
  const o: RunOptions = { now: J2, max: 40, mailingAddress: "1, rue Fictive, Laval", reviewUrl: null, transport: "smtp", render, send, loadConversions, ...over };
  return { o, send, render };
}

describe("relances : consentement 5.2 et plafond de deux rappels", () => {
  const env = process.env;
  let dir: string;
  beforeEach(async () => {
    dir = await mkdtemp(path.join(tmpdir(), "thermo-relances-c2-"));
    process.env = { ...env, RELANCES_FILE: path.join(dir, "relances.json"), LEAD_JOURNAL_DIR: path.join(dir, "leads"), GESTION_DATA_DIR: dir };
  });
  afterEach(async () => {
    process.env = env;
    await rm(dir, { recursive: true, force: true });
  });

  it("sans case 5.2 (aucune preuve jointe) : le rappel est annulé, rien ne part", async () => {
    await enqueueThermoMatch({ email: "marie@exemple.ca", slugs: ["a"], journalId: "j-1", consent }, T0);
    const data = JSON.parse(await readFile(relancesFile(), "utf8"));
    delete data.messages[0].consent;
    await writeFile(relancesFile(), JSON.stringify(data));
    const { o, send } = setup();
    const r = await runRelances(o);
    expect(send).not.toHaveBeenCalled();
    expect(r.cancelled["sans-consentement"]).toBe(1);
  });

  it("au plus deux rappels par demande : un troisième pour la même demande est annulé (plafond)", async () => {
    await enqueueThermoMatch({ email: "marie@exemple.ca", slugs: ["a"], journalId: "j-1", consent }, T0);
    const { o, send } = setup();
    await runRelances(o);
    await runRelances({ ...o, now: J7 });
    expect(send).toHaveBeenCalledTimes(2);
    const data = JSON.parse(await readFile(relancesFile(), "utf8"));
    const third = { ...data.messages[1], id: "00000000-0000-4000-8000-000000000003", status: "pending", sentAt: null, attempts: 0, token: "A".repeat(32) };
    data.messages.push(third);
    await writeFile(relancesFile(), JSON.stringify(data));
    const r = await runRelances({ ...o, now: new Date("2030-01-18T14:30:00Z") });
    expect(send).toHaveBeenCalledTimes(2);
    expect(r.cancelled.plafond).toBe(1);
  });

  it("retrait de la case 5.2 (magasin des consentements) après le consentement : arrêt immédiat", async () => {
    await enqueueThermoMatch({ email: "marie@exemple.ca", slugs: ["a"], journalId: "j-1", consent }, T0);
    await recordWithdrawal({ email: "marie@exemple.ca", purposes: ["rappels"], method: "gestion" }, new Date("2030-01-11T10:00:00Z"));
    const { o, send } = setup();
    const r = await runRelances(o);
    expect(send).not.toHaveBeenCalled();
    expect(r.cancelled.desabonnement).toBe(1);
  });

  it("désabonnement en un clic : prise d'effet immédiate (≤ 10 jours ouvrables), retrait consigné (date, méthode)", async () => {
    const q = await enqueueThermoMatch({ email: "marie@exemple.ca", slugs: ["a"], journalId: "j-1", consent }, T0);
    if (q.status !== "queued") throw new Error("file");
    const clickAt = new Date("2030-01-11T09:00:00Z");
    const u = await unsubscribeByToken(q.messages[0].token, clickAt);
    expect(u).toMatchObject({ email: "marie@exemple.ca", cancelled: 2, already: false });
    const c = await readConsents();
    expect(c.withdrawals).toHaveLength(1);
    expect(c.withdrawals[0]).toMatchObject({ method: "lien-un-clic", at: clickAt.toISOString(), effectiveAt: clickAt.toISOString(), purposes: ["rappels", "promotions"] });
    expect(consentStatus(c, { email: "marie@exemple.ca" }, "promotions", clickAt).withdrawnAt).toBe(clickAt.toISOString());
    const { o, send } = setup();
    await runRelances(o);
    expect(send).not.toHaveBeenCalled();
    expect((await readRelances()).messages.every((m) => m.status === "cancelled")).toBe(true);
  });

  it("pied de message commercial 5.5 remis au rendu des rappels", async () => {
    await enqueueThermoMatch({ email: "marie@exemple.ca", slugs: ["a"], journalId: "j-1", consent }, T0);
    const footer = vi.fn(async () => "Pied fictif 5.5");
    const { o, render } = setup({ footer });
    await runRelances(o);
    expect(render.mock.calls[0][1]).toEqual({ mailingAddress: "1, rue Fictive, Laval", footer: "Pied fictif 5.5" });
  });
});
