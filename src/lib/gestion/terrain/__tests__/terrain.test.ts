/* Outil terrain de bout en bout : accès par jeton (seulement SON job, fermé si réattribué), fermeture BLOQUÉE tant
   qu'il manque une photo, un numéro de série, la liste de contrôle ou la signature (vérifié au serveur), file hors
   ligne idempotente, droits sur les photos, contrat « fin de chantier » (completedAt) pour le volet B, fin déclarée
   par le propriétaire. Aucun vrai texto ni courriel. */
import { mkdtemp, readdir, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import sharp from "sharp";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const mail = vi.hoisted(() => ({ sendClientEmail: vi.fn(async () => true) }));
vi.mock("@/lib/crm/email", async (orig) => ({ ...(await orig<typeof import("@/lib/crm/email")>()), sendClientEmail: mail.sendClientEmail }));
const sms = vi.hoisted(() => ({ sendSms: vi.fn(async () => "envoye" as const) }));
vi.mock("@/lib/gestion/sms", async (orig) => ({ ...(await orig<typeof import("@/lib/gestion/sms")>()), sendSms: sms.sendSms }));

import { hashToken, newToken } from "../../auth/magic-link";
import { applyStatusAction } from "../../offers";
import { mutateGestion, readGestion } from "../../store";
import type { Installer, Job } from "../../types";
import { getCompletion } from "../completion";
import type { FieldOp } from "../rules";
import { applyFieldOps, declareCompletion, fieldFileForAdmin, getFieldView, photoForToken, uploadFieldPhoto } from "../service";
import { readTerrain, terrainPhotosDir } from "../store";
import { CHECKLIST, PHOTO_STEPS } from "../types";

const env = process.env;
let dir: string;
const NOW = new Date("2026-09-20T15:00:00Z");
const CTX = { ip: "203.0.113.9", userAgent: "test", baseUrl: "http://test.local" };
const TOKEN_A = newToken();
const TOKEN_B = newToken();
const A = "i_installa001";
const B = "i_installb001";

const inst = (id: string): Installer => ({ id, company: `Clim ${id.slice(-4)}`, contactName: "Contact", phone: "514 555-0160", email: `${id}@exemple.ca`, rbq: "", basePostalCode: "H7N 1A1", base: null, radiusKm: 60, extraRegions: [], brands: [], systemTypes: [], active: true, maxOpenJobs: null, notes: "", createdAt: "2026-01-01T12:00:00.000Z", updatedAt: "2026-01-01T12:00:00.000Z" });

function job(id: string, n: number, installerId: string, token: string): Job {
  return {
    id,
    number: n,
    createdAt: "2026-09-10T12:00:00.000Z",
    updatedAt: "2026-09-10T12:00:00.000Z",
    client: { firstName: "Test", lastName: `Client ${n}`, phone: "514 555-0170", email: "client@exemple.ca", address: "1 rue Exemple", city: "Laval", postalCode: "H7N 1A1" },
    geo: null,
    region: null,
    regionGuess: null,
    brand: null,
    systemType: null,
    modelSlug: null,
    modelLabel: "Modèle de test",
    capacity: "12 000 BTU",
    desiredDate: null,
    desiredWindow: "",
    installerNotes: "",
    internalNotes: "",
    status: "planifie",
    assignedInstallerId: installerId,
    scheduledFor: "2026-09-20",
    offers: [{ id: `o_${id.slice(2)}`, installerId, sentAt: "2026-09-10T12:00:00.000Z", channels: { email: "envoye", sms: "envoye" }, tokenHash: hashToken(token), expiresAt: "2026-09-12T12:00:00.000Z", distanceKm: 5, response: "accepte", respondedAt: "2026-09-10T13:00:00.000Z" }],
    audit: [],
  };
}

let jpeg: Buffer;
let signature: string;
let n = 0;
const op = <T extends Omit<FieldOp, "id" | "at">>(o: T, at = new Date(NOW.getTime() - 60_000)) => ({ ...o, id: `op-${++n}-${Math.random().toString(36).slice(2, 10)}`, at: at.toISOString() }) as unknown as FieldOp;

beforeEach(async () => {
  dir = await mkdtemp(path.join(tmpdir(), "thermo-terrain-"));
  process.env = { ...env, GESTION_DATA_DIR: dir, TEXTOS_DATA_DIR: dir, ADMIN_EMAILS: "proprio@exemple.ca", NODE_ENV: "test", TEXTOS_ENVOIS_DEV: "", TWILIO_ACCOUNT_SID: "", TWILIO_AUTH_TOKEN: "", TWILIO_PHONE_NUMBER: "", GEMINI_API_KEY: "" };
  vi.clearAllMocks();
  jpeg ??= await sharp({ create: { width: 120, height: 90, channels: 3, background: "#335577", noise: { type: "gaussian", mean: 120, sigma: 30 } } }).jpeg().toBuffer();
  signature ??= `data:image/png;base64,${(await sharp({ create: { width: 240, height: 90, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0.5 }, noise: { type: "gaussian", mean: 128, sigma: 40 } } }).png().toBuffer()).toString("base64")}`;
  await mutateGestion((g) => {
    g.installers.push(inst(A), inst(B));
    g.jobs.push(job("j_jobterra001", 1, A, TOKEN_A), job("j_jobterrb001", 2, B, TOKEN_B));
    return { result: null, changed: true };
  });
});
afterEach(async () => {
  process.env = env;
  await rm(dir, { recursive: true, force: true });
});

async function fillEverything(token: string) {
  for (const s of PHOTO_STEPS) {
    const r = await uploadFieldPhoto(token, { step: s.id, clientId: `ph-${s.id}-0001` }, jpeg, NOW);
    expect(r.ok).toBe(true);
  }
  const ops: FieldOp[] = [
    op({ type: "serials", outdoor: ["abc-12345 x"], indoor: ["IDU998877"] }),
    ...CHECKLIST.map((c) => op({ type: "checklist", item: c.id, value: "fait" })),
    op({ type: "signature", name: "Test Client", image: signature }),
  ];
  const out = await applyFieldOps(token, ops, CTX, NOW);
  expect(out.results.every((r) => r.ok)).toBe(true);
  return ops;
}

describe("accès par jeton", () => {
  it("le lien de l'offre acceptée ouvre SON chantier ; lien invalide ; job réattribué = accès fermé", async () => {
    const v = await getFieldView(TOKEN_A, NOW);
    expect(v.state === "ok" && v.view.jobNumber).toBe(1);
    expect((await getFieldView("pas-un-jeton", NOW)).state).toBe("invalide");
    expect((await getFieldView(newToken(), NOW)).state).toBe("invalide");
    await mutateGestion((g) => {
      g.jobs[0].assignedInstallerId = B;
      return { result: null, changed: true };
    });
    expect((await getFieldView(TOKEN_A, NOW)).state).toBe("plus-attribue");
  });

  it("photos : stockées hors de public/, servies seulement au jeton du même job (ou au propriétaire)", async () => {
    const r = await uploadFieldPhoto(TOKEN_A, { step: "avant" }, jpeg, NOW);
    if (!r.ok) throw new Error(r.error);
    const files = await readdir(terrainPhotosDir());
    expect(files).toEqual([`${r.photo.id}.webp`]);
    expect(terrainPhotosDir().startsWith(dir)).toBe(true);
    expect(await photoForToken(TOKEN_A, r.photo.id)).not.toBeNull();
    expect(await photoForToken(TOKEN_B, r.photo.id)).toBeNull();
    expect(await photoForToken("x".repeat(43), r.photo.id)).toBeNull();
    expect(await fieldFileForAdmin(r.photo.id)).not.toBeNull();
    expect(await uploadFieldPhoto(TOKEN_A, { step: "avant" }, Buffer.from("pas une image"), NOW)).toEqual({ ok: false, error: "Format non reconnu : JPEG, PNG ou WebP seulement." });
  });
});

describe("fermeture de la job", () => {
  it("BLOQUÉE au serveur tant qu'il manque quelque chose, puis « terminé » avec completedAt", async () => {
    const early = await applyFieldOps(TOKEN_A, [op({ type: "fermer" })], CTX, NOW);
    expect(early.results[0].ok).toBe(false);
    expect(early.results[0].missing?.map((m) => m.label)).toEqual(expect.arrayContaining(["Signature du client", "Numéro de série de l’unité extérieure", "Photo : plaque signalétique intérieure"]));
    expect((await readGestion()).jobs[0].status).toBe("planifie");

    const ops = await fillEverything(TOKEN_A);
    const closeAt = new Date(NOW.getTime() - 30_000);
    const close = op({ type: "fermer" }, closeAt);
    const done = await applyFieldOps(TOKEN_A, [close], CTX, NOW);
    expect(done.results).toEqual([{ id: close.id, ok: true }]);
    const j = (await readGestion()).jobs[0];
    expect(j.status).toBe("termine");
    expect(j.completedAt).toBe(closeAt.toISOString());
    expect(j.audit.at(-1)?.action).toBe("fin de chantier");

    const c = await getCompletion(j.id);
    expect(c).toMatchObject({ jobId: j.id, jobNumber: 1, completedAt: closeAt.toISOString(), completedBy: "installateur", installerId: A, serials: { outdoor: ["ABC-12345 X"], indoor: ["IDU998877"] }, clientSignature: { name: "Test Client" }, missing: [] });
    expect(c?.photos).toHaveLength(PHOTO_STEPS.length);

    // File hors ligne renvoyée deux fois : rien n'est appliqué deux fois.
    const before = (await readTerrain()).records[j.id].events.length;
    const again = await applyFieldOps(TOKEN_A, ops, CTX, NOW);
    expect(again.results.every((r) => r.ok)).toBe(true);
    expect((await readTerrain()).records[j.id].events.length).toBe(before);
    expect(await uploadFieldPhoto(TOKEN_A, { step: "apres" }, jpeg, NOW)).toEqual({ ok: false, error: "Ce chantier est fermé." });
    expect(mail.sendClientEmail).not.toHaveBeenCalled();
    expect(sms.sendSms).not.toHaveBeenCalled();
  });

  it("« en route » : heure estimée validée, texto au client jamais réellement envoyé en test", async () => {
    const out = await applyFieldOps(TOKEN_A, [op({ type: "en-route", etaAt: new Date(NOW.getTime() + 30 * 60_000).toISOString() }, NOW)], CTX, NOW);
    expect(out.results[0].ok).toBe(true);
    const r = (await readTerrain()).records["j_jobterra001"];
    expect(r.enRoute?.etaAt).toBe(new Date(NOW.getTime() + 30 * 60_000).toISOString());
    expect(r.enRoute?.sms?.status).toBe("non-configure");
    expect(sms.sendSms).not.toHaveBeenCalled();
    const bad = await applyFieldOps(TOKEN_A, [op({ type: "en-route", etaAt: new Date(NOW.getTime() + 20 * 3_600_000).toISOString() }, NOW)], CTX, NOW);
    expect(bad.results[0]).toMatchObject({ ok: false, error: "Heure d’arrivée estimée invalide." });
  });

  it("fin déclarée par le propriétaire : refusée sans « malgré tout », puis notée avec ce qui manque", async () => {
    const refused = await declareCompletion("j_jobterrb001", "proprio@exemple.ca", "", false, NOW);
    expect(refused.ok).toBe(false);
    const ok = await declareCompletion("j_jobterrb001", "proprio@exemple.ca", "Photos reçues par courriel", true, NOW);
    expect(ok.ok).toBe(true);
    const c = await getCompletion("j_jobterrb001");
    expect(c).toMatchObject({ completedBy: "proprietaire", completedAt: NOW.toISOString() });
    expect(c?.missing.length).toBeGreaterThan(0);
  });

  it("l'ancien bouton « Marquer terminé » pose aussi completedAt ; « Rouvrir » le retire", () => {
    const j = job("j_jobterrc001", 3, A, newToken());
    applyStatusAction(j, "terminer", "p", NOW);
    expect(j.completedAt).toBe(NOW.toISOString());
    applyStatusAction(j, "rouvrir", "p", NOW);
    expect(j.completedAt).toBeUndefined();
  });
});
