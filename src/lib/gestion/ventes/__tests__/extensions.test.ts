/* crm.json : un fichier de la phase 1 (sans les clés du volet C) se lit et se réécrit sans rien perdre ; les nouvelles
   clés prennent leur valeur vide ; les entrées abîmées sont écartées. */
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { DEFAULT_SALES_SETTINGS, normalizeExtensions } from "../../crm/extensions";
import { crmFile, mutateCrm, normalizeCrm, readCrm } from "../../crm/store";

const PHASE1 = {
  version: 1,
  clients: {
    c_0123456789ab: {
      id: "c_0123456789ab",
      keys: ["a".repeat(64)],
      stageOverride: { stage: "contacte", at: "2026-09-10T14:00:00.000Z", by: "proprio@exemple.ca" },
      stageLog: [{ at: "2026-09-10T14:00:00.000Z", by: "proprio@exemple.ca", from: "nouvelle", to: "contacte" }],
      tags: ["commercial"],
      notes: [{ id: "n_abcdefgh123", at: "2026-09-10T14:00:00.000Z", by: "proprio@exemple.ca", text: "Rappelée", kind: "appel" }],
      createdAt: "2026-09-10T14:00:00.000Z",
      updatedAt: "2026-09-10T14:00:00.000Z",
    },
  },
  aliases: { c_ba9876543210: "c_0123456789ab" },
  merges: [["c_ba9876543210", "c_0123456789ab"]],
  splits: [],
  manualContacts: [{ id: "m_abcdefgh123", firstName: "Julie", lastName: "Exemple", phone: "514 555-0142", email: "julie@exemple.ca", city: "Laval", createdAt: "2026-09-01T14:00:00.000Z" }],
  tasks: [{ id: "t_abcdefgh123", clientId: "c_0123456789ab", title: "Rappeler", dueAt: "2026-09-20T13:00:00.000Z", by: "proprio@exemple.ca", createdAt: "2026-09-10T14:00:00.000Z" }],
  taskState: { "auto:rappel-nouveau:e1": { doneAt: "2026-09-10T15:00:00.000Z", clientId: "c_0123456789ab", title: "Rappeler Julie" } },
  settings: { callbackHours: 3, openedFollowDays: 4, jobNoAnswerHours: 48, expiringDays: 3, pipedriveStageMap: { acceptee: 55 } },
};

const env = process.env;
let dir: string;
beforeEach(async () => {
  dir = await mkdtemp(path.join(tmpdir(), "thermo-crm-c-"));
  process.env = { ...env, GESTION_DATA_DIR: dir };
});
afterEach(async () => {
  process.env = env;
  await rm(dir, { recursive: true, force: true });
});

describe("rétrocompatibilité de crm.json", () => {
  it("un crm.json de la phase 1 se lit tel quel ; les clés du volet C prennent leur valeur vide", () => {
    const d = normalizeCrm(structuredClone(PHASE1) as never);
    expect(d.clients.c_0123456789ab).toMatchObject({ tags: ["commercial"], notes: PHASE1.clients.c_0123456789ab.notes, stageOverride: PHASE1.clients.c_0123456789ab.stageOverride });
    expect(d.tasks).toEqual(PHASE1.tasks);
    expect(d.taskState).toEqual(PHASE1.taskState);
    expect(d.aliases).toEqual(PHASE1.aliases);
    expect(d.manualContacts).toEqual(PHASE1.manualContacts);
    expect(d.settings).toMatchObject({ callbackHours: 3, openedFollowDays: 4, pipedriveStageMap: { acceptee: 55 } });
    expect(d.complexTasks).toEqual([]);
    expect(d.taskTemplates).toEqual([]);
    expect(d.seasonConsents).toEqual({});
    expect(d.salesSettings).toEqual(DEFAULT_SALES_SETTINGS);
    expect(d.salesSettings.stageProbabilities).toEqual({});
  });

  it("sur disque : lecture, écriture d'une tâche à étapes, relecture — rien de la phase 1 n'est perdu", async () => {
    await writeFile(crmFile(), JSON.stringify(PHASE1));
    expect((await readCrm()).complexTasks).toEqual([]);
    await mutateCrm((d) => {
      d.complexTasks.push({ id: "x_abcdefgh123", title: "Nouvelle installation", clientId: "c_0123456789ab", jobId: null, templateId: null, dueAt: null, notes: "", steps: [{ id: "e_abcdefgh123", label: "Confirmer la date", dueAt: null }], createdAt: "2026-09-16T15:00:00.000Z", createdBy: "proprio@exemple.ca", updatedAt: "2026-09-16T15:00:00.000Z" });
      return { result: undefined, changed: true };
    });
    const raw = JSON.parse(await readFile(crmFile(), "utf8"));
    expect(raw.tasks).toEqual(PHASE1.tasks);
    expect(raw.clients.c_0123456789ab.notes).toEqual(PHASE1.clients.c_0123456789ab.notes);
    expect(raw.settings.pipedriveStageMap).toEqual({ acceptee: 55 });
    expect(raw.complexTasks).toHaveLength(1);
    expect((await readCrm()).complexTasks[0].steps[0].label).toBe("Confirmer la date");
  });

  it("entrées abîmées écartées, valeurs bornées", () => {
    const x = normalizeExtensions({
      complexTasks: [null, { id: "pas-un-id", title: "x" }, { id: "x_abcdefgh123", title: "" }, { id: "x_abcdefgh124", title: "Ok", clientId: "../x", jobId: "j_testjob0001", steps: [{ id: "e_abcdefgh123", label: "A" }, { id: "bad", label: "B" }, { id: "e_abcdefgh124", label: "" }] }],
      taskTemplates: [{ id: "p_abcdefgh123", name: "Modèle", steps: [{ label: "A", offsetDays: 900 }, { label: "", offsetDays: 1 }], dueInDays: -3 }, { id: "p_x", name: "Mauvais" }],
      salesSettings: { hotViews: 999, hotWindowDays: 0, coolingStart: "13-40", heatingStart: "10-15", stageProbabilities: { nouvelle: 1.5, contacte: 0.25, perdue: 0.5, ouverte: "0.4" } },
      seasonConsents: { "pas-un-id": { at: "2026-09-01T00:00:00Z" }, c_0123456789ab: { at: "pas une date" }, c_0123456789ac: { at: "2026-09-01T00:00:00Z", by: "p", note: "au téléphone" } },
    });
    expect(x.complexTasks).toHaveLength(1);
    expect(x.complexTasks[0]).toMatchObject({ clientId: null, jobId: "j_testjob0001", steps: [{ id: "e_abcdefgh123", label: "A", dueAt: null }] });
    expect(x.taskTemplates).toEqual([expect.objectContaining({ id: "p_abcdefgh123", dueInDays: 0, steps: [{ label: "A", offsetDays: 365 }] })]);
    expect(x.salesSettings).toMatchObject({ hotViews: 50, hotWindowDays: 1, coolingStart: "04-01", heatingStart: "10-15", stageProbabilities: { contacte: 0.25 } });
    expect(Object.keys(x.seasonConsents)).toEqual(["c_0123456789ac"]);
    expect(normalizeExtensions(null)).toEqual(normalizeExtensions({}));
  });
});
