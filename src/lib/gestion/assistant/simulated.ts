/* ==================================================================
   Chantier A — transport SIMULÉ (développement et tests) : même forme
   de réponse que l'API Messages, aucun appel réseau. Il choisit un
   outil d'après quelques mots de la question, puis résume ce que
   l'outil a lu. Permet de voir le panneau sans jamais joindre
   Anthropic hors production.
   ================================================================== */

import type { Block, MessagesCall, MessagesResponse } from "./anthropic";

function pickTool(q: string): { name: string; input: Record<string, unknown> } {
  const client = /client_id (c_[0-9a-f]{12})/.exec(q)?.[1];
  if (client) return { name: "fiche_client", input: { client_id: client } };
  const quote = /\b[A-Z]-\d{4}-\d{3,5}\b/.exec(q)?.[0];
  if (quote) return { name: "chercher_client", input: { requete: quote } };
  const named = /fiche (?:de|d[’'])\s*([\p{Lu}][\p{L}-]+)/u.exec(q)?.[1];
  if (named) return { name: "chercher_client", input: { requete: named } };
  if (/vente|baiss|rentab|dépens|depens|publicit|canal|canaux/i.test(q)) return { name: "rentabilite", input: { periode: "3-mois" } };
  if (/pipeline|étape|etape/i.test(q)) return { name: "pipeline", input: {} };
  if (/argent|commission|paiement|factur|retard/i.test(q)) return { name: "argent", input: { periode: "30" } };
  return { name: "taches_du_jour", input: {} };
}

const label = (k: string) => k.replace(/_/g, " ");

function summarize(data: Record<string, unknown>): string[] {
  const lines: string[] = [];
  for (const [k, v] of Object.entries(data).slice(0, 12)) {
    if (v === null || v === undefined) continue;
    if (Array.isArray(v)) {
      lines.push(`- ${label(k)} : ${v.length} élément${v.length > 1 ? "s" : ""}`);
      for (const item of v.slice(0, 4)) {
        if (!item || typeof item !== "object") {
          lines.push(`  - ${String(item)}`);
          continue;
        }
        const o = item as Record<string, unknown>;
        const name = String(o.nom ?? o.titre ?? o.canal ?? o.etape ?? o.numero ?? o.mois ?? o.quoi ?? "élément");
        lines.push(typeof o.lien === "string" ? `  - [${name}](${o.lien})` : `  - ${name}`);
      }
    } else if (typeof v === "object") {
      const parts = Object.entries(v as Record<string, unknown>)
        .filter(([, x]) => x !== null && typeof x !== "object")
        .slice(0, 4)
        .map(([kk, x]) => `${label(kk)} ${String(x)}`);
      if (parts.length) lines.push(`- ${label(k)} : ${parts.join(", ")}`);
    } else if (k === "lien") {
      lines.push(`- [Ouvrir la page](${String(v)})`);
    } else {
      lines.push(`- ${label(k)} : ${String(v)}`);
    }
  }
  return lines;
}

const usage = { input_tokens: 0, output_tokens: 0, cache_read_input_tokens: 0, cache_creation_input_tokens: 0 };

export function createSimulatedCaller(): MessagesCall {
  return async (body): Promise<MessagesResponse> => {
    const last = body.messages[body.messages.length - 1];
    const blocks: Block[] = Array.isArray(last?.content) ? last.content : [];
    const results = blocks.filter((b) => b.type === "tool_result");
    if (!results.length && body.tool_choice.type === "auto") {
      const q = typeof last?.content === "string" ? last.content : "";
      const t = pickTool(q);
      return { model: "simule", content: [{ type: "tool_use", id: "simule_1", name: t.name, input: t.input }], stop_reason: "tool_use", usage };
    }
    const lines = ["**Mode simulé** : hors production, rien n’est envoyé à Anthropic. Voici ce que l’outil a lu dans le CRM :", ""];
    for (const r of results) {
      try {
        lines.push(...summarize(JSON.parse(String(r.content)) as Record<string, unknown>));
      } catch {
        lines.push("- (résultat illisible)");
      }
    }
    if (!results.length) lines.push("Aucune donnée lue.");
    return { model: "simule", content: [{ type: "text", text: lines.join("\n") }], stop_reason: "end_turn", usage };
  };
}
