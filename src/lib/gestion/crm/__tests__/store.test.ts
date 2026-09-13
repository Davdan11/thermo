/* crm.json : dossier temporaire (GESTION_DATA_DIR), écritures concurrentes, valeurs par défaut (Pipedrive désactivé),
   et le service de bout en bout (note, étape, tâche, fiche saisie à la main, fusion, séparation). */
import { mkdtemp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { addNote, addTask, clientPage, completeTask, createManualContact, freshIndex, mergeClients, resetCrmMemo, saveCrmSettings, setStage, snoozeTask, splitClient } from "../service";
import { crmFile, mutateCrm, normalizeCrm, readCrm } from "../store";
import { NOW } from "./fixtures";

const env = process.env;
let dir: string;

beforeEach(async () => {
  dir = await mkdtemp(path.join(tmpdir(), "thermo-crm-"));
  process.env = { ...env, GESTION_DATA_DIR: dir, LEAD_JOURNAL_DIR: path.join(dir, "leads"), TEXTOS_DATA_DIR: dir, RELANCES_FILE: path.join(dir, "relances.json"), ADMIN_EMAILS: "proprio@exemple.ca", NODE_ENV: "test" };
  resetCrmMemo();
});
afterEach(async () => {
  process.env = env;
  resetCrmMemo();
  await rm(dir, { recursive: true, force: true });
});

async function journal(lines: Array<Record<string, unknown>>) {
  await mkdir(path.join(dir, "leads"), { recursive: true });
  await writeFile(path.join(dir, "leads", "2026-09.jsonl"), lines.map((l) => JSON.stringify(l)).join("\n") + "\n");
}

describe("crm.json", () => {
  it("valeurs par défaut : délais du propriétaire, correspondance Pipedrive désactivée", async () => {
    const d = await readCrm();
    expect(d.settings).toMatchObject({ callbackHours: 2, openedFollowDays: 3, jobNoAnswerHours: 48, expiringDays: 3, pipedriveStageMap: {} });
    expect(normalizeCrm({ settings: { callbackHours: 999, pipedriveStageMap: { perdue: 12, inconnue: 3, ouverte: -1 } } } as never).settings).toMatchObject({ callbackHours: 72, pipedriveStageMap: { perdue: 12 } });
  });

  it("écritures concurrentes : aucune perdue", async () => {
    await Promise.all(
      Array.from({ length: 20 }, (_, i) =>
        mutateCrm((d) => {
          d.tasks.push({ id: `t_concurrent${String(i).padStart(2, "0")}`, clientId: null, title: `Tâche ${i}`, dueAt: NOW.toISOString(), by: "test", createdAt: NOW.toISOString() });
          return { result: undefined, changed: true };
        }),
      ),
    );
    const d = JSON.parse(await readFile(crmFile(), "utf8"));
    expect(d.tasks).toHaveLength(20);
  });
});

describe("service (dossier temporaire)", () => {
  it("note, étape perdue (sans Pipedrive par défaut), tâche faite, report, réactivation", async () => {
    await journal([{ id: "a1", at: "2026-09-10T14:00:00.000Z", kind: "soumission", lead: { firstName: "Julie", email: "julie@exemple.ca", phone: "514 555-0142" } }]);
    const [c] = (await freshIndex(NOW)).clients;
    expect(c.stage.stage).toBe("nouvelle");
    expect(await addNote(c.b.id, "Rappelée : elle veut une murale", "appel", "proprio@exemple.ca", NOW)).toEqual({ ok: true });
    expect((await freshIndex(NOW)).byId.get(c.b.id)!.stage.stage).toBe("contacte");
    expect(await setStage(c.b.id, "perdue", "", "proprio@exemple.ca", NOW)).toMatchObject({ ok: false });
    const lost = await setStage(c.b.id, "perdue", "A choisi un concurrent", "proprio@exemple.ca", NOW);
    expect(lost).toEqual({ ok: true, id: c.b.id });
    expect((await freshIndex(NOW)).byId.get(c.b.id)!.stage.stage).toBe("perdue");
    await addTask({ clientId: c.b.id, title: "Rappeler dans un mois", dueAt: new Date("2026-10-16T13:00:00Z") }, "proprio@exemple.ca", NOW);
    const task = (await freshIndex(NOW)).byId.get(c.b.id)!.tasks.find((t) => t.manual)!;
    expect(await snoozeTask(task.key, new Date("2026-10-20T13:00:00Z"), NOW)).toEqual({ ok: true });
    expect((await freshIndex(NOW)).tasks.find((t) => t.key === task.key)?.dueAt).toBe("2026-10-20T13:00:00.000Z");
    expect(await completeTask(task.key, "proprio@exemple.ca", NOW)).toEqual({ ok: true });
    expect((await freshIndex(NOW)).tasks.find((t) => t.key === task.key)).toBeUndefined();
    const page = await clientPage(c.b.id);
    expect(page && "client" in page && page.client.timeline.map((i) => i.title)).toEqual(expect.arrayContaining(["Appel noté", "Étape : Perdue", "Fait : Rappeler dans un mois"]));
  });

  it("pipeline → Pipedrive seulement si une étape est associée dans Réglages", async () => {
    await journal([{ id: "b1", at: "2026-09-10T14:00:00.000Z", kind: "soumission", lead: { firstName: "Marc", phone: "450 555-0177" } }, { id: "b1", at: "2026-09-10T14:00:01.000Z", kind: "soumission", lead: {}, outcome: { pipedrive: "ok", dealId: 987 } }]);
    const [c] = (await freshIndex(NOW)).clients;
    expect(c.b.dealIds).toEqual([987]);
    expect(await setStage(c.b.id, "contacte", "", "proprio@exemple.ca", NOW)).not.toHaveProperty("pipedrive");
    await saveCrmSettings({ pipedriveStageMap: { acceptee: 55 } }, "proprio@exemple.ca", NOW);
    expect(await setStage(c.b.id, "acceptee", "", "proprio@exemple.ca", NOW)).toMatchObject({ pipedrive: { dealId: 987, stageId: 55 } });
  });

  it("fiche saisie à la main, fusion (le plus ancien gagne), séparation", async () => {
    await journal([{ id: "c1", at: "2026-09-01T14:00:00.000Z", kind: "appel-manque", lead: { phone: "+15145550142" } }]);
    const created = await createManualContact({ firstName: "Julie", lastName: "Tremblay", phone: "", email: "julie@exemple.ca", city: "Laval" }, "proprio@exemple.ca", NOW);
    expect(created.ok).toBe(true);
    const index = await freshIndex(NOW);
    expect(index.clients).toHaveLength(2);
    const call = index.clients.find((x) => x.b.journal.length)!;
    const manual = index.clients.find((x) => x.b.manual.length)!;
    const merged = await mergeClients(manual.b.id, call.b.id, "proprio@exemple.ca", NOW);
    expect(merged).toEqual({ ok: true, id: call.b.id });
    const after = await freshIndex(NOW);
    expect(after.clients).toHaveLength(1);
    expect(after.byId.get(manual.b.id)!.b.id).toBe(call.b.id);
    const page = await clientPage(manual.b.id);
    expect(page).toEqual({ redirect: call.b.id });
    const one = after.clients[0];
    const email = (await clientPage(one.b.id)) as { client: { identities: Array<{ selector: string; kind: string }> } };
    const sel = email.client.identities.find((i) => i.kind === "email")!.selector;
    const split = await splitClient(one.b.id, [sel], "proprio@exemple.ca", NOW);
    expect(split.ok).toBe(true);
    expect((await freshIndex(NOW)).clients).toHaveLength(2);
  });
});
