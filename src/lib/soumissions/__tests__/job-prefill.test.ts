/* Soumission acceptée → « Créer le job » : l'entrepreneur choisi dans la soumission est proposé pour l'offre (coché
   d'office, jamais imposé) ; le moteur d'offres existant n'est pas modifié. Aucun appel réseau. */
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { jobPrefill } from "@/lib/gestion/crm/service";
import { parseJobForm } from "@/lib/gestion/forms";
import { saveJob } from "@/lib/gestion/service";
import { readGestion } from "@/lib/gestion/store";
import { buildDocument, acceptVersion, createQuote, freezeForSend } from "../quote";
import { mutateSoumissions } from "../store";
import { computeTotals } from "../totals";
import { contractorIdentity, fullSettings, INSTALLER_ID, NOW, readyContent, TODAY } from "./fixtures";
import { seedPartner } from "./partner-fixtures";

const env = process.env;
let dir: string;

beforeEach(async () => {
  dir = await mkdtemp(path.join(tmpdir(), "thermo-job-prefill-"));
  process.env = { ...env, GESTION_DATA_DIR: dir, NODE_ENV: "test" };
  vi.stubGlobal("fetch", vi.fn(async () => { throw new Error("aucun appel réseau dans les tests"); }));
});
afterEach(async () => {
  vi.unstubAllGlobals();
  process.env = env;
  await rm(dir, { recursive: true, force: true });
});

async function acceptedQuote(contractorId: string | null): Promise<string> {
  return mutateSoumissions((d) => {
    const q = createQuote(d, readyContent(), "proprio@exemple.ca", NOW, { contractorId });
    const v = q.versions[0];
    freezeForSend(q, v, fullSettings(), [], NOW, contractorId ? contractorIdentity() : null);
    const doc = buildDocument(q, v, null, []);
    const total = computeTotals(doc.content, ["l_opt"], doc.taxes, TODAY).totalCents;
    acceptVersion(q, v, { selection: ["l_opt"], typedName: "Camille Exemple", termsAccepted: true, ip: "203.0.113.7", userAgent: "Vitest", postedTotalCents: total, postedHash: v.contentHash, now: NOW });
    return { result: q.id, changed: true };
  });
}

function jobForm(extra: Record<string, string> = {}): FormData {
  const fd = new FormData();
  for (const [k, v] of Object.entries({ firstName: "Camille", lastName: "Exemple", phone: "514 555-0199", email: "camille@exemple.ca", address: "10 rue Fictive", city: "Laval", postalCode: "H7A 1A1", ...extra })) fd.set(k, v);
  return fd;
}

describe("pré-remplissage du job depuis la soumission acceptée", () => {
  it("l'entrepreneur de la soumission est proposé pour l'offre", async () => {
    await seedPartner();
    const id = await acceptedQuote(INSTALLER_ID);
    const pre = await jobPrefill({ quoteId: id });
    expect(pre?.initial.proposedInstallerId).toBe(INSTALLER_ID);
    expect(pre?.initial.proposedInstallerName).toBe("Exemple Climatisation");
    expect(pre?.initial.firstName).toBe("Camille");
  });

  it("sans entrepreneur, ou installateur supprimé : rien n'est proposé", async () => {
    const id = await acceptedQuote(null);
    expect((await jobPrefill({ quoteId: id }))?.initial.proposedInstallerId).toBeUndefined();
    const other = await acceptedQuote(INSTALLER_ID); // aucun installateur dans gestion.json
    expect((await jobPrefill({ quoteId: other }))?.initial.proposedInstallerId).toBeUndefined();
  });

  it("le formulaire garde la proposition ; le job l'enregistre ; une modification sans ce champ ne l'efface pas", async () => {
    const p = parseJobForm(jobForm({ proposedInstallerId: INSTALLER_ID }));
    expect(p.ok && p.data.proposedInstallerId).toBe(INSTALLER_ID);
    const bad = parseJobForm(jobForm({ proposedInstallerId: "../../x" }));
    expect(bad.ok && bad.data.proposedInstallerId).toBeNull();
    if (!p.ok) return;
    const job = await saveJob(p.data, "proprio@exemple.ca", undefined, NOW);
    expect(job?.proposedInstallerId).toBe(INSTALLER_ID);
    expect(job?.offers).toEqual([]);
    const edit = parseJobForm(jobForm({ installerNotes: "Accès par la ruelle" }));
    if (!edit.ok || !job) throw new Error("formulaire invalide");
    await saveJob(edit.data, "proprio@exemple.ca", job.id, NOW);
    const saved = (await readGestion()).jobs.find((j) => j.id === job.id);
    expect(saved?.proposedInstallerId).toBe(INSTALLER_ID);
    expect(saved?.installerNotes).toBe("Accès par la ruelle");
  });
});
