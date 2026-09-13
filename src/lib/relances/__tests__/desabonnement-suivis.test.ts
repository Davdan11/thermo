/* Un client désabonné des suivis après-vente (lien en un clic) ne reçoit pas non plus la demande d'avis Google. */
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { enqueueReviewRequest, isSuppressed, suppressEmail } from "../store";

const env = process.env;
let dir: string;
const NOW = new Date("2026-09-13T15:00:00Z");

beforeEach(async () => {
  dir = await mkdtemp(path.join(tmpdir(), "thermo-avis-"));
  process.env = { ...env, RELANCES_FILE: path.join(dir, "relances.json"), LEAD_JOURNAL_DIR: path.join(dir, "leads"), GESTION_DATA_DIR: dir };
});
afterEach(async () => {
  process.env = env;
  await rm(dir, { recursive: true, force: true });
});

describe("désabonnement venu des suivis", () => {
  it("annule la demande d'avis déjà planifiée et bloque les suivantes (majuscules comprises)", async () => {
    expect((await enqueueReviewRequest({ email: "Julie@Exemple.ca", firstName: "Julie" }, NOW)).status).toBe("queued");
    expect(await suppressEmail("julie@exemple.ca", NOW)).toEqual({ added: true, cancelled: 1 });
    expect(await isSuppressed("JULIE@exemple.ca")).toBe(true);
    // Idempotent.
    expect(await suppressEmail("julie@exemple.ca", NOW)).toEqual({ added: false, cancelled: 0 });
    expect((await enqueueReviewRequest({ email: "julie@exemple.ca" }, NOW)).status).toBe("suppressed");
  });
});
