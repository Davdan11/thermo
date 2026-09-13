/* Statistiques et journal : canal Texto ajouté pour une conversation absente du journal (jamais deux fois),
   lignes de résultat (dealId) réunies, fichiers de démonstration lus seulement hors production. */
import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { aggregateStats, readJournalEntries, readJournalOutcomes, toRecords } from "../../statistiques";
import { missingTextoRecords } from "../textos-adapter";
import { conv, entry, hoursAgo, msg, NOW } from "./fixtures";

let dir: string;
beforeEach(async () => {
  dir = await mkdtemp(path.join(tmpdir(), "thermo-crm-journal-"));
});
afterEach(async () => {
  await rm(dir, { recursive: true, force: true });
});

describe("canal Texto", () => {
  it("une conversation sans ligne au journal compte une fois, une conversation déjà journalisée ne compte pas deux fois", () => {
    const logged = conv("+15145550142", [msg("in", hoursAgo(5), "Bonjour")]);
    const missing = conv("+15145550166", [msg("in", hoursAgo(3), "Allô")]);
    const entries = [entry("texto", hoursAgo(5), { phone: "+15145550142", conversationId: logged.id })];
    const extra = missingTextoRecords([logged, missing], entries);
    expect(extra).toHaveLength(1);
    const s = aggregateStats([...toRecords(entries), ...extra], { period: "7", now: NOW });
    expect(s.total).toBe(2);
    expect(s.channels).toEqual([expect.objectContaining({ id: "texto", n: 2 })]);
  });
});

describe("journal", () => {
  it("résultats réunis par demande ; démonstration lue seulement si demandée", async () => {
    const line = (o: object) => JSON.stringify(o);
    await writeFile(
      path.join(dir, "2026-09.jsonl"),
      [
        line({ id: "x1", at: "2026-09-10T12:00:00Z", kind: "soumission", lead: { firstName: "Julie" } }),
        line({ id: "x1", at: "2026-09-10T12:00:02Z", kind: "soumission", lead: {}, outcome: { pipedrive: "ok", dealId: 42 } }),
        line({ id: "x1", at: "2026-09-10T12:00:05Z", kind: "soumission", lead: {}, outcome: { pipedrive: "ok", relances: "planifiees" } }),
        "{abîmée",
      ].join("\n"),
    );
    await writeFile(path.join(dir, "demo-crm.jsonl"), line({ id: "demo1", at: "2026-09-11T12:00:00Z", kind: "contact", lead: { firstName: "Démo" } }) + "\n");
    expect((await readJournalOutcomes(dir)).get("x1")).toMatchObject({ dealId: 42, relances: "planifiees" });
    expect((await readJournalEntries(dir)).map((e) => e.id)).toEqual(["x1"]);
    expect((await readJournalEntries(dir, { includeDemo: true })).map((e) => e.id)).toEqual(["x1", "demo1"]);
  });
});
