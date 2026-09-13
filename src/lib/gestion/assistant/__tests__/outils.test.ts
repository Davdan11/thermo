/* Chantier A — outils de l'assistant : LECTURE SEULE. Aucun outil n'écrit (aucun appel à mutateJson, fichiers du CRM
   identiques octet pour octet) ; les résultats ne contiennent ni courriel ni numéro complet ; seul assistant.json
   (le journal) change après une question complète. */
import { createHash } from "node:crypto";
import { mkdir, mkdtemp, readdir, readFile, rm, stat, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const spy = vi.hoisted(() => ({ files: [] as string[] }));
vi.mock("@/lib/gestion/store", async (orig) => {
  const m = await orig<typeof import("@/lib/gestion/store")>();
  const wrapped = ((file: string, ...rest: unknown[]) => {
    spy.files.push(path.basename(file));
    return (m.mutateJson as (...a: unknown[]) => Promise<unknown>)(file, ...rest);
  }) as typeof m.mutateJson;
  return { ...m, mutateJson: wrapped };
});

import { resetCrmMemo } from "../../crm/service";
import { loadAssistantContext } from "../context";
import { askCrmAssistant, resetAssistantLimits } from "../service";
import { executeTool, TOOL_DEFS, TOOL_NAMES, type ToolSink } from "../tools";
import { fixtureContext, fixtureSource, NOW, PHONE_LIKE, withoutIds } from "./helpers";

const env = process.env;
let dir: string;

async function snapshot(root: string): Promise<Record<string, string>> {
  const out: Record<string, string> = {};
  for (const f of await readdir(root, { recursive: true })) {
    const p = path.join(root, String(f));
    const st = await stat(p);
    if (st.isFile()) out[String(f)] = `${st.mtimeMs}:${createHash("sha256").update(await readFile(p)).digest("hex")}`;
  }
  return out;
}

function callsFor(julie: string, marc: string): Array<[string, unknown]> {
  return [
    ["chercher_client", { requete: "Julie" }],
    ["chercher_client", { requete: "0142" }],
    ["fiche_client", { client_id: julie }],
    ["fiche_client", { client_id: marc }],
    ["taches_du_jour", {}],
    ["pipeline", {}],
    ["argent", { periode: "30" }],
    ["demandes_et_canaux", { periode: "30" }],
    ["rentabilite", { periode: "3-mois" }],
    ["rentabilite", { mois: "2026-09" }],
    ["publicite", {}],
    ["preparer_brouillon", { client_id: julie, canal: "texto", texte: "Bonjour Julie, avez-vous des questions sur la soumission ?" }],
  ];
}

beforeEach(async () => {
  dir = await mkdtemp(path.join(tmpdir(), "thermo-assistant-outils-"));
  process.env = { ...env, GESTION_DATA_DIR: dir, LEAD_JOURNAL_DIR: path.join(dir, "leads"), TEXTOS_DATA_DIR: dir, RELANCES_FILE: path.join(dir, "relances.json"), NODE_ENV: "test" };
  resetCrmMemo();
  resetAssistantLimits();
  spy.files.length = 0;
});
afterEach(async () => {
  process.env = env;
  await rm(dir, { recursive: true, force: true });
});

describe("outils en lecture seule", () => {
  it("la liste des outils est fixe : aucun outil d'écriture ou d'envoi", () => {
    expect(TOOL_NAMES).toEqual(["chercher_client", "fiche_client", "taches_du_jour", "pipeline", "argent", "demandes_et_canaux", "rentabilite", "publicite", "preparer_brouillon"]);
    for (const t of TOOL_DEFS) expect(t.name).not.toMatch(/envoy|send|modif|supprim|ecrire|update|delete|creer/);
  });

  it("chaque outil répond en JSON, sans courriel ni numéro complet, et sans rien écrire", async () => {
    const { ctx, idOf } = fixtureContext();
    const sink: ToolSink = { drafts: [] };
    for (const [name, input] of callsFor(idOf("Julie"), idOf("Marc"))) {
      const out = await executeTool(name, input, ctx, sink);
      const parsed = JSON.parse(out) as Record<string, unknown>;
      expect(parsed.erreur, `${name} : ${out.slice(0, 200)}`).toBeUndefined();
      expect(out, name).not.toContain("@");
      expect(withoutIds(out), name).not.toMatch(PHONE_LIKE);
    }
    expect(spy.files).toEqual([]);
    expect(sink.drafts).toHaveLength(1);
  });

  it("la fiche contient ce qu'il faut (étape, soumissions, notes masquées, liens) et jamais les coordonnées", async () => {
    const { ctx, idOf } = fixtureContext();
    const f = JSON.parse(await executeTool("fiche_client", { client_id: idOf("Julie") }, ctx, { drafts: [] }));
    expect(f.nom).toBe("Julie T.");
    expect(f.lien).toBe(`/gestion/clients/${idOf("Julie")}`);
    expect(f.a_un_telephone).toBe(true);
    expect(f.a_un_courriel).toBe(true);
    expect(f.soumissions[0].lien).toMatch(/^\/gestion\/soumissions\//);
    expect(f.notes[0].texte).toContain("[numéro masqué]");
    expect(f.notes[0].texte).toContain("[courriel masqué]");
    expect(JSON.stringify(f)).not.toContain("Tremblay");
    expect(f).not.toHaveProperty("telephone");
    expect(f).not.toHaveProperty("courriel");
  });

  it("entrées invalides : message d'erreur, jamais d'exception ni d'écriture", async () => {
    const { ctx } = fixtureContext();
    const sink: ToolSink = { drafts: [] };
    for (const [name, input] of [
      ["fiche_client", { client_id: "../../etc/passwd" }],
      ["fiche_client", { client_id: "c_000000000000" }],
      ["chercher_client", { requete: "x" }],
      ["argent", { periode: "365" }],
      ["rentabilite", { mois: "2026-13" }],
      ["preparer_brouillon", { client_id: "c_000000000000", canal: "texto", texte: "x" }],
      ["effacer_client", { client_id: "c_000000000000" }],
    ] as Array<[string, unknown]>) {
      expect(JSON.parse(await executeTool(name, input, ctx, sink)).erreur, name).toBeTruthy();
    }
    expect(sink.drafts).toEqual([]);
    expect(spy.files).toEqual([]);
  });

  it("sur disque : les fichiers du CRM sont identiques après la lecture et tous les outils", async () => {
    const s = fixtureSource();
    await mkdir(path.join(dir, "leads"), { recursive: true });
    await writeFile(path.join(dir, "leads", "2026-09.jsonl"), s.journal.map((e) => JSON.stringify(e)).join("\n") + "\n");
    await writeFile(path.join(dir, "crm.json"), JSON.stringify(s.crm));
    await writeFile(path.join(dir, "soumissions.json"), JSON.stringify({ version: 1, counters: {}, quotes: s.quotes, photos: [] }));
    await writeFile(path.join(dir, "gestion.json"), JSON.stringify({ version: 1, installers: [], jobs: s.jobs }));
    const before = await snapshot(dir);

    const ctx = await loadAssistantContext(NOW);
    const julie = ctx.index.clients.find((c) => c.b.firstName === "Julie")!.b.id;
    const marc = ctx.index.clients.find((c) => c.b.firstName === "Marc")!.b.id;
    for (const [name, input] of callsFor(julie, marc)) await executeTool(name, input, ctx, { drafts: [] });
    expect(await snapshot(dir)).toEqual(before);
    expect(spy.files).toEqual([]);

    // Question complète (transport simulé, hors production) : seul le journal assistant.json est écrit.
    const r = await askCrmAssistant({ email: "proprio@exemple.ca", question: "Qu’est-ce que je devrais faire aujourd’hui ?" }, { now: NOW });
    expect(r.ok).toBe(true);
    const after = await snapshot(dir);
    const changed = Object.keys(after).filter((k) => after[k] !== before[k]);
    expect(changed.filter((k) => !k.endsWith(".lock"))).toEqual(["assistant.json"]);
    expect(spy.files).toEqual(["assistant.json"]);
  });
});
