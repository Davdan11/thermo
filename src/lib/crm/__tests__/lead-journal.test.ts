import { mkdtemp, readFile, readdir, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { journalDir, journalLead, journalOutcome } from "../lead-journal";

describe("lead-journal", () => {
  const env = process.env;
  let dir: string;

  beforeEach(async () => {
    dir = await mkdtemp(path.join(tmpdir(), "thermo-leads-"));
    process.env = { ...env, LEAD_JOURNAL_DIR: dir };
  });
  afterEach(async () => {
    process.env = env;
    await rm(dir, { recursive: true, force: true });
  });

  it("utilise LEAD_JOURNAL_DIR quand il est défini", () => {
    expect(journalDir()).toBe(dir);
  });

  it("écrit une ligne JSON par lead dans le fichier du mois, puis le résultat sous le même id", async () => {
    const { entry, written } = await journalLead("soumission", { firstName: "Jean", phone: "5145551234" });
    expect(written).toBe(true);
    expect(entry.id).toMatch(/^[0-9a-f-]{36}$/);

    await journalOutcome(entry, { pipedrive: "non-configure", alertEmail: false, clientEmail: false });

    const files = await readdir(dir);
    expect(files).toEqual([`${entry.at.slice(0, 7)}.jsonl`]);
    const lines = (await readFile(path.join(dir, files[0]), "utf8")).trim().split("\n").map((l) => JSON.parse(l));
    expect(lines).toHaveLength(2);
    expect(lines[0]).toMatchObject({ id: entry.id, kind: "soumission", lead: { firstName: "Jean", phone: "5145551234" } });
    expect(lines[1]).toMatchObject({ id: entry.id, outcome: { pipedrive: "non-configure" } });
  });

  it("renvoie written=false sans lancer quand le dossier est inaccessible", async () => {
    // Un fichier à la place du dossier : mkdir -p échoue.
    const blocked = path.join(dir, "bloque");
    await (await import("node:fs/promises")).writeFile(blocked, "x");
    process.env.LEAD_JOURNAL_DIR = blocked;
    const { written } = await journalLead("appel-manque", { phone: "+15145551234" });
    expect(written).toBe(false);
  });
});
