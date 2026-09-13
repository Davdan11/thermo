import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { googleReviewUrl } from "../config";
import { handleDealWon, type ReviewRequestDeps } from "../review-requests";
import { readRelances } from "../store";

const won = { id: 42, title: "[TAV] Marie Tremblay", status: "won" };
const now = () => new Date("2026-09-12T16:00:00Z");

describe("demande d'avis après une affaire Pipedrive gagnée", () => {
  const env = process.env;
  let dir: string;
  let person: ReturnType<typeof vi.fn<ReviewRequestDeps["resolvePerson"]>>;

  beforeEach(async () => {
    dir = await mkdtemp(path.join(tmpdir(), "thermo-avis-"));
    process.env = { ...env, RELANCES_FILE: path.join(dir, "relances.json"), GOOGLE_REVIEW_URL: "https://g.page/r/exemple/review" };
    person = vi.fn<ReviewRequestDeps["resolvePerson"]>(async () => ({ email: "Marie@Exemple.ca", firstName: "Marie" }));
  });
  afterEach(async () => {
    process.env = env;
    await rm(dir, { recursive: true, force: true });
  });

  it("affaire [TAV] passée à « gagnée » : demande planifiée 5 jours plus tard", async () => {
    const r = await handleDealWon(won, { id: 42, status: "open" }, { resolvePerson: person, now });
    expect(r).toEqual({ action: "planifiee", dueAt: "2026-09-17T13:00:00.000Z" });
    const [m] = (await readRelances()).messages;
    expect(m).toMatchObject({ kind: "avis", email: "marie@exemple.ca", firstName: "Marie", status: "pending", source: { type: "pipedrive", dealId: 42 } });
  });

  it("webhook v2 (seuls les champs modifiés dans `previous`)", async () => {
    expect((await handleDealWon(won, { status: "open" }, { resolvePerson: person, now })).action).toBe("planifiee");
  });

  it("jamais deux fois : webhook relivré, ou autre affaire de la même adresse", async () => {
    await handleDealWon(won, { id: 42, status: "open" }, { resolvePerson: person, now });
    expect((await handleDealWon(won, { id: 42, status: "open" }, { resolvePerson: person, now })).action).toBe("doublon");
    expect((await handleDealWon({ ...won, id: 43 }, { id: 43, status: "open" }, { resolvePerson: person, now })).action).toBe("doublon");
    expect((await readRelances()).messages).toHaveLength(1);
  });

  it("ignore ce qui n'est pas un passage à « gagnée »", async () => {
    expect((await handleDealWon(won, { title: "Ancien titre" }, { resolvePerson: person, now })).action).toBe("ignore");
    expect((await handleDealWon(won, { id: 42, status: "won" }, { resolvePerson: person, now })).action).toBe("ignore");
    expect((await handleDealWon({ ...won, status: "lost" }, { id: 42, status: "open" }, { resolvePerson: person, now })).action).toBe("ignore");
    expect(person).not.toHaveBeenCalled();
  });

  it("ignore les affaires de Bellechasse Énergie (pipeline commun)", async () => {
    expect((await handleDealWon({ ...won, title: "[BE] Marie Tremblay" }, { status: "open" }, { resolvePerson: person, now })).action).toBe("autre-site");
    expect((await readRelances()).messages).toHaveLength(0);
  });

  it("sans GOOGLE_REVIEW_URL (ou lien non https) : rien n'est planifié", async () => {
    for (const v of ["", "http://g.page/r/exemple", "javascript:alert(1)"]) {
      process.env.GOOGLE_REVIEW_URL = v;
      expect(googleReviewUrl()).toBeNull();
      expect((await handleDealWon(won, { status: "open" }, { resolvePerson: person, now })).action).toBe("sans-lien-avis");
    }
    expect(person).not.toHaveBeenCalled();
    expect((await readRelances()).messages).toHaveLength(0);
  });

  it("sans courriel dans Pipedrive : rien n'est planifié", async () => {
    person.mockResolvedValueOnce(null);
    expect((await handleDealWon(won, { status: "open" }, { resolvePerson: person, now })).action).toBe("sans-courriel");
    expect((await readRelances()).messages).toHaveLength(0);
  });
});
