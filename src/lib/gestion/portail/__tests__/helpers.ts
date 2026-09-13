/* Chantier P — données fictives des tests du portail (aucun vrai client : numéros 514 555-01xx, exemple.ca). */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { hashToken, newToken } from "../../auth/magic-link";
import type { Installer, Job, Offer } from "../../types";
import { acceptedQuote, makeInstaller, makeJob, writeStores } from "../../commissions/__tests__/fixtures";

export const INST = "i_testinst001";
export const INST_B = "i_testinst002";
export const JOB_A = "j_projeta0001";
export const JOB_B = "j_projetb0001";
export const BY = "proprio@exemple.ca";

/** Offre acceptée (lien /job de l'installateur). */
export function acceptedOffer(installerId: string, token: string, respondedAt = "2026-09-18T13:00:00.000Z"): Offer {
  return { id: `o_${installerId.slice(2, 12)}x`, installerId, sentAt: "2026-09-18T12:00:00.000Z", channels: { email: "envoye", sms: "envoye" }, tokenHash: hashToken(token), expiresAt: "2026-09-20T12:00:00.000Z", distanceKm: 5, response: "accepte", respondedAt };
}

/** Deux projets de deux clients différents, chez le même installateur, soumissions acceptées, attribués sans date. */
export function twoProjects(offerTokens: { a?: string; b?: string } = {}): { jobs: Job[]; installers: Installer[] } {
  const a = makeJob({
    id: JOB_A,
    number: 21,
    status: "attribue",
    scheduledFor: null,
    completedAt: undefined,
    client: { firstName: "Camille", lastName: "Alpha", phone: "514 555-0111", email: "camille@exemple.ca", address: "10 rue Fictive", city: "Laval", postalCode: "H7A 1A1" },
    internalNotes: "Soumission 2026-0012 acceptée.",
    offers: [acceptedOffer(INST, offerTokens.a ?? newToken())],
  } as never);
  const b = makeJob({
    id: JOB_B,
    number: 22,
    status: "attribue",
    scheduledFor: null,
    completedAt: undefined,
    client: { firstName: "Dominique", lastName: "Bravo", phone: "514 555-0122", email: "dominique@exemple.ca", address: "20 rue Imaginaire", city: "Longueuil", postalCode: "J4K 1A1" },
    internalNotes: "Soumission 2026-0013 acceptée.",
    offers: [acceptedOffer(INST, offerTokens.b ?? newToken())],
  } as never);
  return { jobs: [a, b], installers: [makeInstaller({ id: INST }), makeInstaller({ id: INST_B, company: "Réfrigération Fictive", email: "b@exemple.ca", phone: "514 555-0133" })] };
}

export async function writeProjects(dir: string, d: { jobs: Job[]; installers: Installer[] }): Promise<void> {
  await writeStores(dir, {
    jobs: d.jobs,
    installers: d.installers,
    quotes: [acceptedQuote({ id: "q_testquote01", number: "2026-0012", phone: "514 555-0111", email: "camille@exemple.ca" }), acceptedQuote({ id: "q_testquote02", number: "2026-0013", phone: "514 555-0122", email: "dominique@exemple.ca" })],
  });
}

/** Photo de chantier fictive (fichier privé + entrée dans terrain.json). */
export async function writeTerrain(dir: string, records: Record<string, { installerId: string; photoId?: string; enRoute?: { at: string; etaAt: string | null } }>): Promise<void> {
  const out: Record<string, unknown> = {};
  await mkdir(path.join(dir, "terrain-photos"), { recursive: true });
  for (const [jobId, r] of Object.entries(records)) {
    const photos = r.photoId ? [{ id: r.photoId, step: "avant", at: "2026-09-20T14:00:00.000Z", takenAt: "2026-09-20T14:00:00.000Z", bytes: 3, width: 1, height: 1, ext: "jpg", sha256: "x", by: `installateur:${r.installerId}` }] : [];
    if (r.photoId) await writeFile(path.join(dir, "terrain-photos", `${r.photoId}.jpg`), Buffer.from(`photo-${jobId}`));
    out[jobId] = { jobId, installerId: r.installerId, tokens: [], checklist: {}, photos, serials: { outdoor: [], indoor: [] }, events: [], appliedOps: [], updatedAt: "2026-09-20T14:00:00.000Z", ...(r.enRoute ? { enRoute: r.enRoute } : {}) };
  }
  await writeFile(path.join(dir, "terrain.json"), JSON.stringify({ version: 1, records: out }));
}
