/* Conformité C3 (annexe D) — une offre refusée, expirée, retirée ou qui n'est plus la sienne ne montre plus aucun
   détail du projet au partenaire ; l'accès aux coordonnées du client (offre acceptée) est journalisé, sans aucun
   renseignement du client dans le journal. */
import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { hashToken, newToken } from "../../auth/magic-link";
import { getOfferView } from "../../service";
import { mutateGestion } from "../../store";
import type { Job, Offer } from "../../types";
import { accessDir, logClientAccess, readClientAccess, resetAccessThrottle } from "../acces";
import { installer } from "./fixtures-c3";

const env = process.env;
let dir: string;
const NOW = new Date("2026-09-20T15:00:00Z");
const T = { refuse: newToken(), accepte: newToken(), expire: newToken(), retire: newToken(), ancien: newToken() };

const offer = (id: string, installerId: string, token: string, over: Partial<Offer>): Offer => ({ id, installerId, sentAt: "2026-09-18T12:00:00.000Z", channels: { email: "envoye", sms: "envoye" }, tokenHash: hashToken(token), expiresAt: "2026-09-19T12:00:00.000Z", distanceKm: 12, response: null, ...over });

function job(): Job {
  return {
    id: "j_jobrefus001",
    number: 42,
    createdAt: "2026-09-18T12:00:00.000Z",
    updatedAt: "2026-09-18T12:00:00.000Z",
    client: { firstName: "Camille", lastName: "Exemple", phone: "514 555-0199", email: "camille@exemple.ca", address: "99 rue Fictive", city: "Terrebonne", postalCode: "J6W 1A1" },
    geo: null,
    region: null,
    regionGuess: null,
    brand: null,
    systemType: null,
    modelSlug: null,
    modelLabel: "Modèle fictif 12 000",
    capacity: "12 000 BTU",
    desiredDate: "2026-10-01",
    desiredWindow: "matin",
    installerNotes: "Notes fictives : sous-sol fini.",
    internalNotes: "",
    status: "attribue",
    assignedInstallerId: "i_accepte0001",
    scheduledFor: "2026-10-01",
    offers: [
      offer("o_refuse00001", "i_refuse00001", T.refuse, { response: "refuse", respondedAt: "2026-09-18T13:00:00.000Z", reason: "trop loin" }),
      offer("o_accept00001", "i_accepte0001", T.accepte, { response: "accepte", respondedAt: "2026-09-18T14:00:00.000Z" }),
      offer("o_expire00001", "i_expire00001", T.expire, {}),
      offer("o_retire00001", "i_retire00001", T.retire, { response: "retire", withdrawnBecause: "deja-attribue", respondedAt: "2026-09-18T14:00:00.000Z" }),
    ],
    audit: [],
  };
}

beforeEach(async () => {
  dir = await mkdtemp(path.join(tmpdir(), "thermo-c3-offres-"));
  process.env = { ...env, GESTION_DATA_DIR: dir, NODE_ENV: "test" };
  resetAccessThrottle();
  await mutateGestion((g) => {
    for (const id of ["i_refuse00001", "i_accepte0001", "i_expire00001", "i_retire00001"]) g.installers.push(installer(id, `Clim ${id.slice(2, 8)}`, new Date("2026-01-01T12:00:00Z")));
    g.jobs.push(job());
    return { result: null, changed: true };
  });
});
afterEach(async () => {
  process.env = env;
  await rm(dir, { recursive: true, force: true });
});

describe("offres refusées : anonymisées", () => {
  it("refusée, expirée, retirée : numéro du job seulement ; aucune ville, aucun modèle, aucune note, aucun client", async () => {
    for (const [token, state] of [
      [T.refuse, "refuse"],
      [T.expire, "expire"],
      [T.retire, "retire"],
    ] as const) {
      const v = await getOfferView(token, NOW);
      if (v.state === "invalide") throw new Error("invalide");
      expect(v.state).toBe(state);
      expect(v.redacted).toBe(true);
      expect(v.summary).toEqual({ jobNumber: 42, city: "", region: "", distanceKm: null, brand: null, model: null, systemType: null, capacity: null, desiredDate: null, desiredWindow: null, notes: null });
      expect(v.client).toBeUndefined();
      expect(v.scheduledFor).toBeNull();
      const dump = JSON.stringify(v);
      for (const secret of ["Terrebonne", "Camille", "514 555-0199", "Notes fictives", "Modèle fictif", "99 rue Fictive"]) expect(dump).not.toContain(secret);
    }
  });

  it("offre acceptée : coordonnées du client (pour le partenaire attribué) ; accès journalisé sans renseignement du client", async () => {
    const v = await getOfferView(T.accepte, NOW);
    if (v.state === "invalide") throw new Error("invalide");
    expect(v.state).toBe("accepte");
    expect(v.redacted).toBeUndefined();
    expect(v.client?.phone).toBe("514 555-0199");
    expect(v.access).toEqual({ installerId: "i_accepte0001", jobId: "j_jobrefus001", jobNumber: 42 });

    expect(await logClientAccess({ ...v.access!, via: "offre", ip: "203.0.113.5" }, NOW)).toBe(true);
    expect(await logClientAccess({ ...v.access!, via: "offre", ip: "203.0.113.5" }, new Date(NOW.getTime() + 60_000))).toBe(false); // même accès, moins de 30 min
    expect(await logClientAccess({ ...v.access!, via: "chantier" }, new Date(NOW.getTime() + 120_000))).toBe(true);
    const list = await readClientAccess("i_accepte0001", { now: new Date(NOW.getTime() + 3_600_000) });
    expect(list.map((x) => x.via)).toEqual(["chantier", "offre"]);
    expect(list[1]).toEqual({ at: NOW.toISOString(), installerId: "i_accepte0001", jobId: "j_jobrefus001", jobNumber: 42, via: "offre", ip: "203.0.113.5" });
    const raw = await readFile(path.join(accessDir(), "2026-09.jsonl"), "utf8");
    for (const secret of ["Camille", "514 555-0199", "Terrebonne"]) expect(raw).not.toContain(secret);
    expect(await readClientAccess("i_refuse00001")).toEqual([]);
  });

  it("offre acceptée puis job réattribué : plus aucun détail pour l'ancien partenaire", async () => {
    await mutateGestion((g) => {
      g.jobs[0].offers.push(offer("o_ancien00001", "i_refuse00001", T.ancien, { response: "accepte", respondedAt: "2026-09-18T12:30:00.000Z" }));
      return { result: null, changed: true };
    });
    const v = await getOfferView(T.ancien, NOW);
    if (v.state === "invalide") throw new Error("invalide");
    expect(v.state).toBe("plus-attribue");
    expect(v.redacted).toBe(true);
    expect(v.client).toBeUndefined();
    expect(JSON.stringify(v)).not.toContain("Terrebonne");
  });
});
