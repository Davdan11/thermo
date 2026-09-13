/* Filtre Loi 25 de la question de la semaine, et règles du service (toujours manuelle). Numéros et adresses fictifs. */
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { privacyMessage, privacyProblems } from "../loi25";
import { newPost } from "../planner";
import { approvePost, saveQuestion, saveSettings } from "../service";
import { mutatePresence, readPresence } from "../store";
import { buildQuestion } from "../templates";
import { emptyData } from "./fixtures";

describe("filtre Loi 25", () => {
  it.each([
    ["Écrivez-moi à jean.tremblay@exemple.ca", "courriel"],
    ["Mon numéro : (514) 555-0199", "telephone"],
    ["Rappelez au 514-555-0199 svp", "telephone"],
    ["5145550199", "telephone"],
    ["+1 438 555 0100", "telephone"],
    ["1-800-555-0100", "telephone"],
    ["le 555-0199 le soir", "telephone"],
    ["J’habite au G1R 4P5", "code-postal"],
    ["h2x1y4", "code-postal"],
    ["C’est au 123, rue Principale", "adresse"],
    ["1450 boulevard des Érables", "adresse"],
  ])("bloque « %s » (%s)", (text, kind) => {
    const found = privacyProblems(text);
    expect(found.map((f) => f.kind)).toContain(kind);
    expect(privacyMessage(found)).toMatch(/^Bloqué \(Loi 25\)/);
  });

  it.each(["Une thermopompe de 12 000 BTU/h", "Il fait −26 °C la nuit", "L’aide est de 1 250 $", "Normales 1991-2020", "HSPF2 de 8,2 et SEER2 de 17,5", "Modèle 4A6V0X24A1", "Nous avons 3 enfants et une maison de 1985"])("laisse passer « %s »", (text) => {
    expect(privacyProblems(text)).toEqual([]);
    expect(privacyMessage([])).toBeNull();
  });
});

describe("question de la semaine : toujours manuelle", () => {
  const env = process.env;
  let dir: string;
  beforeEach(async () => {
    dir = await mkdtemp(path.join(tmpdir(), "thermo-presence-q-"));
    process.env = { ...env, GESTION_DATA_DIR: dir };
    delete process.env.PRESENCE_FILE;
    const data = emptyData();
    const post = newPost("question", "2026-09-15", buildQuestion({ question: "", answer: "" }, "2026-09-13T12:00:00Z"), data, new Date("2026-09-13T12:00:00Z"), 0);
    await mutatePresence((d) => {
      d.posts.push(post);
      return { result: null, changed: true };
    });
  });
  afterEach(async () => {
    process.env = env;
    await rm(dir, { recursive: true, force: true });
  });

  it("brouillon vide : l’approbation est refusée tant que rien n’est écrit", async () => {
    const r = await approvePost("p-20260915-question", "proprio@exemple.ca");
    expect(r.ok).toBe(false);
  });

  it("un courriel ou un numéro bloque l’enregistrement", async () => {
    const r = await saveQuestion("p-20260915-question", "Pouvez-vous me rappeler au 819-555-0142?", "Oui.", "proprio@exemple.ca");
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.error).toMatch(/Loi 25/);
    expect((await readPresence()).posts[0].question).toEqual({ question: "", answer: "" });
  });

  it("texte propre : à approuver, puis approuvé à la main ; la série ne passe jamais en automatique", async () => {
    const s = await saveQuestion("p-20260915-question", "Faut-il déneiger l’unité extérieure?", "Oui, dégagez-la après chaque tempête.", "proprio@exemple.ca");
    expect(s.ok).toBe(true);
    expect((await readPresence()).posts[0].status).toBe("a_approuver");
    expect((await approvePost("p-20260915-question", "proprio@exemple.ca")).ok).toBe(true);
    const data = await readPresence();
    expect(data.posts[0].status).toBe("planifiee");
    expect(data.approvals.question?.postId).toBe("p-20260915-question");

    const r = await saveSettings({ autoPublish: false, rotationWeeks: 8, applyTimes: false, series: { question: { enabled: true, auto: true, time: "12:00", story: false } } }, "proprio@exemple.ca");
    expect(r.ok).toBe(false);
    expect((await readPresence()).settings.series.question.auto).toBe(false);
  });

  it("modifier une question approuvée demande une nouvelle approbation", async () => {
    await saveQuestion("p-20260915-question", "Faut-il déneiger l’unité extérieure?", "Oui.", "proprio@exemple.ca");
    await approvePost("p-20260915-question", "proprio@exemple.ca");
    await saveQuestion("p-20260915-question", "Faut-il déneiger l’unité extérieure l’hiver?", "Oui.", "proprio@exemple.ca");
    expect((await readPresence()).posts[0].status).toBe("a_approuver");
  });
});

describe("automatique après une approbation (service)", () => {
  const env = process.env;
  let dir: string;
  beforeEach(async () => {
    dir = await mkdtemp(path.join(tmpdir(), "thermo-presence-auto-"));
    process.env = { ...env, GESTION_DATA_DIR: dir };
    delete process.env.PRESENCE_FILE;
  });
  afterEach(async () => {
    process.env = env;
    await rm(dir, { recursive: true, force: true });
  });

  it("refusé avant la première approbation de la série, accepté après", async () => {
    const input = { autoPublish: false, rotationWeeks: 8, applyTimes: false, series: { glossaire: { enabled: true, auto: true, time: "10:00", story: true } } };
    const before = await saveSettings(input, "proprio@exemple.ca");
    expect(before.ok).toBe(false);
    expect((await readPresence()).settings.series.glossaire.auto).toBe(false);
    await mutatePresence((d) => {
      d.approvals.glossaire = { at: "2026-09-12T12:00:00Z", by: "proprio@exemple.ca", postId: "p-20260912-glossaire" };
      return { result: null, changed: true };
    });
    const after = await saveSettings(input, "proprio@exemple.ca");
    expect(after.ok).toBe(true);
    expect((await readPresence()).settings.series.glossaire.auto).toBe(true);
  });
});
