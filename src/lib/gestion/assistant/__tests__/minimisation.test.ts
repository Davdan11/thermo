/* Chantier A — minimisation : ce qui part vers Anthropic ne contient ni courriel ni numéro complet ; le journal garde
   la question masquée, jamais la réponse. En-têtes et modèle de l'appel direct (fetch). */
import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { ANTHROPIC_MESSAGES_URL, FALLBACK_BETA } from "../config";
import { maskPersonal } from "../redact";
import { askCrmAssistant, resetAssistantLimits } from "../service";
import { readAssistant } from "../store";
import { fixtureContext, NOW, PHONE_LIKE, PROD, reply, scriptedFetch, text, toolUse, withoutIds } from "./helpers";

const env = process.env;
let dir: string;

beforeEach(async () => {
  dir = await mkdtemp(path.join(tmpdir(), "thermo-assistant-mini-"));
  process.env = { ...env, GESTION_DATA_DIR: dir, NODE_ENV: "test" };
  resetAssistantLimits();
});
afterEach(async () => {
  process.env = env;
  await rm(dir, { recursive: true, force: true });
});

describe("masquage", () => {
  it("courriels et numéros masqués ; identifiants, montants et dates intacts", () => {
    expect(maskPersonal("Écrire à julie.tremblay@exemple.ca ou nina@exemple")).toBe("Écrire à [courriel masqué] ou [courriel masqué]");
    expect(maskPersonal("Tél. : (514) 555-0142, +1 450.555.0177, 4385550111")).toBe("Tél. : [numéro masqué], [numéro masqué], [numéro masqué]");
    expect(maskPersonal("Qui est le 514 555-0142 ?", { keepLast4: true })).toBe("Qui est le [numéro se terminant par 0142] ?");
    const safe = "c_0123456789ab · S-2026-0005 · 2026-09-16T15:00:00Z · 12 450 $ · 1 234 567 $";
    expect(maskPersonal(safe)).toBe(safe);
  });
});

describe("ce qui part vers Anthropic", () => {
  it("aucun courriel ni numéro complet, quelle que soit la question ou l'outil", async () => {
    const { ctx, idOf } = fixtureContext();
    const julie = idOf("Julie");
    const f = scriptedFetch([
      reply([toolUse("t1", "chercher_client", { requete: "0142" }), toolUse("t2", "fiche_client", { client_id: julie })]),
      reply([toolUse("t3", "taches_du_jour", {}), toolUse("t4", "argent", { periode: "30" }), toolUse("t5", "demandes_et_canaux", { periode: "30" }), toolUse("t6", "pipeline", {}), toolUse("t7", "rentabilite", {}), toolUse("t8", "publicite", {})]),
      reply([toolUse("t9", "preparer_brouillon", { client_id: julie, canal: "texto", texte: "Rappelez-nous au 438 555-0100 ou à info@exemple.ca" })]),
      reply([text(`[Julie T.](/gestion/clients/${julie}) a accepté sa soumission.`)], "end_turn"),
    ]);
    const r = await askCrmAssistant(
      {
        email: "proprio@exemple.ca",
        question: "Qui est le 514 555-0142 ? Son courriel : julie.tremblay@exemple.ca",
        history: [
          { role: "user", content: "Mon client Luc (819 555-0123, luc@exemple.ca) a-t-il appelé ?" },
          { role: "assistant", content: "Je n’ai pas cette donnée." },
        ],
      },
      { env: PROD, fetchImpl: f.fetch, context: ctx, now: NOW },
    );
    expect(r.ok).toBe(true);
    expect(f.calls.length).toBe(4);
    for (const c of f.calls) {
      // Ce que NOUS envoyons : consignes, outils, questions, historique, résultats d'outils. Les tours du modèle dans la
      // boucle (ses propres blocs, renvoyés tels quels comme l'exige l'API) ne viennent pas du CRM : exclus du contrôle.
      const ours = JSON.stringify({ ...c.body, messages: c.body.messages.filter((m) => !(m.role === "assistant" && Array.isArray(m.content))) });
      expect(ours).not.toContain("@");
      expect(withoutIds(ours)).not.toMatch(PHONE_LIKE);
      expect(ours).not.toContain("Tremblay");
    }
    expect(f.calls[0].raw).toContain("se terminant par 0142");
    // Le brouillon remis au panneau est masqué lui aussi.
    if (r.ok) expect(r.drafts[0].texte).toBe("Rappelez-nous au [numéro masqué] ou à [courriel masqué]");
  });

  it("appel direct : bonne adresse, en-têtes, modèle par défaut claude-opus-5 et repli côté serveur", async () => {
    const { ctx } = fixtureContext();
    const f = scriptedFetch([reply([text("Bonjour.")], "end_turn")]);
    await askCrmAssistant({ email: "proprio@exemple.ca", question: "Bonjour" }, { env: PROD, fetchImpl: f.fetch, context: ctx, now: NOW });
    const c = f.calls[0];
    expect(c.url).toBe(ANTHROPIC_MESSAGES_URL);
    expect(c.headers["x-api-key"]).toBe(PROD.ANTHROPIC_API_KEY);
    expect(c.headers["anthropic-version"]).toBe("2023-06-01");
    expect(c.headers["anthropic-beta"]).toBe(FALLBACK_BETA);
    expect(c.body.model).toBe("claude-opus-5");
    expect(c.body.fallbacks).toBe("default");
    expect(c.body).not.toHaveProperty("temperature");
    expect(c.body.system[0].cache_control).toEqual({ type: "ephemeral" });
    expect(c.body.tools.at(-1)!.cache_control).toEqual({ type: "ephemeral" });

    const g = scriptedFetch([reply([text("Bonjour.")], "end_turn")]);
    await askCrmAssistant({ email: "proprio@exemple.ca", question: "Bonjour" }, { env: { ...PROD, ANTHROPIC_MODEL: "claude-sonnet-5" }, fetchImpl: g.fetch, context: ctx, now: NOW });
    expect(g.calls[0].body.model).toBe("claude-sonnet-5");
    expect(g.calls[0].body).not.toHaveProperty("fallbacks");
    expect(g.calls[0].headers).not.toHaveProperty("anthropic-beta");
  });

  it("journal : question masquée et raccourcie, jamais la réponse", async () => {
    const { ctx } = fixtureContext();
    const secret = "RÉPONSE-COMPLÈTE-QUI-NE-DOIT-PAS-ÊTRE-GARDÉE";
    const f = scriptedFetch([reply([text(secret)], "end_turn")]);
    await askCrmAssistant({ email: "proprio@exemple.ca", question: `Appelle le 514 555-0142 (julie.tremblay@exemple.ca) ${"x".repeat(400)}` }, { env: PROD, fetchImpl: f.fetch, context: ctx, now: NOW });
    const row = (await readAssistant()).journal.at(-1)!;
    expect(row.question).not.toContain("@");
    expect(row.question).not.toMatch(PHONE_LIKE);
    expect(row.question.length).toBeLessThanOrEqual(240);
    expect(row.answerChars).toBe(secret.length);
    expect(await readFile(path.join(dir, "assistant.json"), "utf8")).not.toContain(secret);
  });
});
