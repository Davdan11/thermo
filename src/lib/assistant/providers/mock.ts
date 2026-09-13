/* ==================================================================
   Assistant — fournisseur factice, DÉVELOPPEMENT SEULEMENT

   Rejoue une réponse type en appelant les vrais outils : chaque chiffre
   vient donc des données. Sert aux captures d'écran et aux tests sans
   clé. Impossible à activer en production : resolveProvider() ne le
   renvoie jamais avec NODE_ENV=production, et la fabrique refuse.
   ================================================================== */

import type { AssistantProvider, ProviderRunArgs } from "./types";
import { emptyUsage } from "./types";

const fmt = (n: unknown) => (typeof n === "number" ? n.toLocaleString("fr-CA") : String(n ?? ""));
const firstSentence = (s: string) => (s.match(/^.*?[.!?](\s|$)/)?.[0] ?? s).trim();

type Json = Record<string, unknown>;

export function createMockProvider(options: { delayMs?: number } = {}): AssistantProvider {
  if (process.env.NODE_ENV === "production") throw new Error("Fournisseur factice interdit en production.");
  const delayMs = options.delayMs ?? 16;

  return {
    id: "mock",
    async run({ history, executeTool, onText, signal }: ProviderRunArgs) {
      const question = history[history.length - 1]?.content ?? "";
      const q = question.toLowerCase();
      const call = async (name: string, input: Json) => JSON.parse(await executeTool(name, input)) as Json;
      let text: string;

      const term = q.match(/hspf2?|seer2?|\bcop\b|\bbtu\b|inverter|biénergie/)?.[0];
      if (term) {
        const r = await call("glossary", { term });
        const e = (r.entries as Json[] | undefined)?.[0];
        text = e
          ? `**${e.term}** : ${firstSentence(String(e.definition))} [Voir la définition complète](${e.url}).\n\nPour savoir quel rendement viser chez vous, essayez [ThermoMatch](/trouver-ma-thermopompe).`
          : "Ce terme n'est pas dans notre glossaire. Consultez le [glossaire](/glossaire) ou appelez-nous au [438-900-3224](tel:4389003224).";
      } else if (/subvention|logisvert/.test(q)) {
        const brand = ["daikin", "mitsubishi", "fujitsu", "gree", "samsung", "bosch", "lg"].find((b) => q.includes(b)) ?? "daikin";
        const type = /mural/.test(q) ? "murale" : undefined;
        const r = await call("logisvert_for", { brand, type });
        const top = (r.highest_models as Json[] | undefined)?.[0];
        text =
          r.min_dollars !== undefined
            ? `Selon la ${r.source} du ${r.list_date}, les ${type ? "murales " : "modèles "}${r.brand} de notre catalogue donnent droit de ${fmt(r.min_dollars)} $ à ${fmt(r.max_dollars)} $. ` +
              `Le montant exact dépend du jumelage des appareils et des conditions du programme.` +
              (top ? `\n\n- [${top.name}](${top.url}) : ${fmt(top.logisvert_dollars)} $` : "") +
              `\n\nTous les montants : [subventions ${r.brand}](${r.brand_page}).`
            : "Je ne trouve pas de montant officiel pour cette demande. Voyez la page [Subventions](/subventions).";
      } else {
        const cityName = question.match(/(?:à|a)\s+([A-ZÀ-Ý][\p{L}'-]+(?:[- ][A-ZÀ-Ý][\p{L}'-]+)*)/u)?.[1];
        const city = cityName ? await call("city_climate", { city: cityName }) : null;
        const r = await call("search_models", { type: "murale", cold_climate_only: true, sort: "froid", min_btu: 9000, max_btu: 18000, limit: 3 });
        const lines = ((r.models as Json[] | undefined) ?? [])
          .map((m) => `- [${m.name}](${m.url}) : ${fmt(m.btu_at_minus15c)} BTU/h à -15 °C`)
          .join("\n");
        text =
          (city?.found ? `À ${city.city}, le froid de référence pour choisir une thermopompe est de ${city.design_temp_c} °C. ` : "") +
          `La bonne puissance dépend de votre maison (superficie, isolation, fenêtres) : [ThermoMatch](/trouver-ma-thermopompe) fait le calcul en 13 questions.` +
          (lines ? `\n\nQuelques murales qui tiennent bien le froid :\n${lines}` : "");
      }

      for (const word of text.split(/(?<=\s)/)) {
        if (signal?.aborted) break;
        onText(word);
        if (delayMs) await new Promise((r) => setTimeout(r, delayMs));
      }
      return emptyUsage();
    },
  };
}
