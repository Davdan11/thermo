import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import type { AlertSnapshot } from "../logisvert-alerts-core";
import {
  MAX_ALERTS_PER_EMAIL,
  PENDING_TTL_MS,
  RESEND_COOLDOWN_MS,
  alertsFile,
  confirmSubscription,
  listSubscriptions,
  purgePendingSubscriptions,
  requestSubscription,
  unsubscribe,
  updateSubscription,
} from "../logisvert-alerts-store";

const snapA: AlertSnapshot = { listUpdatedAt: "2026-09-10T00:00:00Z", models: { m1: { min: 1250, max: 1250, n: 1 } } };
const snapB: AlertSnapshot = { listUpdatedAt: "2026-09-20T00:00:00Z", models: { m1: { min: 1400, max: 1400, n: 1 } } };
const input = (over: Partial<Parameters<typeof requestSubscription>[0]> = {}) => ({
  email: "marie@exemple.ca",
  target: { kind: "model" as const, modelId: "m1" },
  label: "Daikin M1",
  path: "/produit/m1",
  snapshot: snapA,
  ...over,
});

describe("stockage des alertes LogisVert", () => {
  const env = process.env;
  let dir: string;

  beforeEach(async () => {
    dir = await mkdtemp(path.join(tmpdir(), "thermo-alertes-"));
    process.env = { ...env, LOGISVERT_ALERTS_FILE: path.join(dir, "alertes-logisvert.json") };
  });
  afterEach(async () => {
    process.env = env;
    await rm(dir, { recursive: true, force: true });
  });

  it("par défaut, le fichier est à côté du journal des leads (shared/data sur le VPS)", () => {
    process.env = { ...env, LOGISVERT_ALERTS_FILE: "", LEAD_JOURNAL_DIR: path.join(dir, "shared", "data", "leads") };
    expect(alertsFile()).toBe(path.join(dir, "shared", "data", "alertes-logisvert.json"));
  });

  it("crée une demande non confirmée avec un jeton, puis la déduplique", async () => {
    const t0 = new Date("2026-09-12T10:00:00Z");
    const first = await requestSubscription(input({ firstName: "Marie", journalId: "j1" }), t0);
    expect(first.status).toBe("created");
    if (first.status === "limit") return;
    expect(first.shouldEmail).toBe(true);
    expect(first.sub.confirmedAt).toBeNull();
    expect(first.sub.token).toMatch(/^[A-Za-z0-9_-]{32}$/);

    // Deuxième demande 2 minutes plus tard : même alerte, pas de nouveau courriel, instantané rafraîchi.
    const again = await requestSubscription(input({ snapshot: snapB }), new Date(t0.getTime() + 2 * 60 * 1000));
    expect(again.status).toBe("pending");
    if (again.status === "limit") return;
    expect(again.shouldEmail).toBe(false);
    expect(again.sub.id).toBe(first.sub.id);
    expect(again.sub.token).toBe(first.sub.token);
    expect(again.sub.lastSnapshot).toEqual(snapB);
    expect(again.sub.firstName).toBe("Marie");

    // Après le délai d'attente, la confirmation peut repartir.
    const later = await requestSubscription(input(), new Date(t0.getTime() + RESEND_COOLDOWN_MS + 1000));
    expect(later.status === "pending" && later.shouldEmail).toBe(true);
    expect(await listSubscriptions()).toHaveLength(1);
  });

  it("une autre cible pour la même adresse est une autre alerte", async () => {
    await requestSubscription(input());
    await requestSubscription(input({ target: { kind: "brand", brandSlug: "daikin" }, label: "Daikin", path: "/subventions/logisvert/daikin" }));
    expect(await listSubscriptions()).toHaveLength(2);
  });

  it("confirme une fois, puis « déjà » ; une alerte confirmée garde sa référence", async () => {
    const r = await requestSubscription(input());
    if (r.status === "limit") throw new Error("inattendu");
    expect(await confirmSubscription("x".repeat(32))).toBeNull();
    const c1 = await confirmSubscription(r.sub.token, new Date("2026-09-12T11:00:00Z"));
    expect(c1?.status).toBe("confirmed");
    expect(c1?.sub.confirmedAt).toBe("2026-09-12T11:00:00.000Z");
    expect((await confirmSubscription(r.sub.token))?.status).toBe("already");

    const again = await requestSubscription(input({ snapshot: snapB }), new Date(Date.now() + RESEND_COOLDOWN_MS * 2));
    expect(again.status).toBe("confirmed");
    if (again.status === "limit") return;
    expect(again.sub.lastSnapshot).toEqual(snapA);
  });

  it("met à jour une alerte sans toucher aux autres, puis désabonne en effaçant", async () => {
    const a = await requestSubscription(input());
    const b = await requestSubscription(input({ email: "luc@exemple.ca" }));
    if (a.status === "limit" || b.status === "limit") throw new Error("inattendu");
    expect(await updateSubscription(a.sub.id, { lastSnapshot: snapB, lastNotifiedAt: "2026-09-20T06:00:00Z" })).toBe(true);
    const list = await listSubscriptions();
    expect(list.find((s) => s.id === a.sub.id)?.lastSnapshot).toEqual(snapB);
    expect(list.find((s) => s.id === b.sub.id)?.lastSnapshot).toEqual(snapA);

    const removed = await unsubscribe(a.sub.token);
    expect(removed?.email).toBe("marie@exemple.ca");
    expect(await unsubscribe(a.sub.token)).toBeNull();
    const raw = await readFile(alertsFile(), "utf8");
    expect(raw).not.toContain("marie@exemple.ca");
    expect(raw).toContain("luc@exemple.ca");
  });

  it("efface les demandes jamais confirmées après 30 jours, pas les alertes confirmées", async () => {
    const old = new Date("2026-07-01T00:00:00Z");
    const p = await requestSubscription(input(), old);
    const c = await requestSubscription(input({ email: "luc@exemple.ca" }), old);
    await requestSubscription(input({ email: "recent@exemple.ca" }), new Date("2026-09-11T00:00:00Z"));
    if (p.status === "limit" || c.status === "limit") throw new Error("inattendu");
    await confirmSubscription(c.sub.token);
    const purged = await purgePendingSubscriptions(new Date("2026-09-12T00:00:00Z"), PENDING_TTL_MS);
    expect(purged).toBe(1);
    expect((await listSubscriptions()).map((s) => s.email).sort()).toEqual(["luc@exemple.ca", "recent@exemple.ca"]);
  });

  it("limite le nombre d'alertes par adresse", async () => {
    for (let i = 0; i < MAX_ALERTS_PER_EMAIL; i++) await requestSubscription(input({ target: { kind: "model", modelId: `m${i}` } }));
    const over = await requestSubscription(input({ target: { kind: "model", modelId: "encore" } }));
    expect(over.status).toBe("limit");
  });

  it("des écritures simultanées ne se perdent pas", async () => {
    await Promise.all(Array.from({ length: 12 }, (_, i) => requestSubscription(input({ email: `p${i}@exemple.ca` }))));
    expect(await listSubscriptions()).toHaveLength(12);
  });
});
