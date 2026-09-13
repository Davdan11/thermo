/* ==================================================================
   Assistant de style (facultatif) : si ANTHROPIC_API_KEY est présente,
   Claude peut proposer une version plus fluide du corps d'un article.
   Il n'a le droit d'ajouter AUCUN chiffre ni aucun lien : la
   proposition est refusée si un nombre n'existe pas dans la source de
   l'article (même contrôle que le studio, unknownNumbers) ou si un lien
   nouveau apparaît. Jamais appelé pendant les tests.
   Modèle : BLOGUE_ASSISTANT_MODEL (défaut claude-sonnet-5).
   ================================================================== */

import { extractNumbers } from "@/lib/presence/numbers";
import { allowedForArticle, markdownCheckText } from "./text";
import { unknownNumbers } from "@/lib/presence/numbers";
import type { BlogArticle } from "./types";

type Env = Record<string, string | undefined>;

export const BLOGUE_ASSISTANT_DEFAULT_MODEL = "claude-sonnet-5";

export interface StyleClient {
  rewrite(input: { model: string; system: string; prompt: string }): Promise<string>;
}

export function styleAssistantStatus(env: Env = process.env): { enabled: boolean; reason?: string; model: string } {
  const model = env.BLOGUE_ASSISTANT_MODEL?.trim() || BLOGUE_ASSISTANT_DEFAULT_MODEL;
  if (env.NODE_ENV === "test") return { enabled: false, reason: "Désactivé pendant les tests.", model };
  if (!env.ANTHROPIC_API_KEY?.trim()) return { enabled: false, reason: "Assistant non configuré (ANTHROPIC_API_KEY absente du serveur).", model };
  return { enabled: true, model };
}

const SYSTEM = `Tu relis un article du blogue de ThermopompesÀVendre.ca, en français du Québec, au vouvoiement.
Améliore seulement le style : phrases plus simples, plus naturelles, sans jargon, sans formule creuse, sans emoji, sans tiret cadratin, sans « en conclusion ».
Règles absolues :
- Ne change, n'ajoute ni ne retire AUCUN nombre : chaque chiffre, montant, température et date reste écrit exactement comme dans le texte.
- Garde tous les liens Markdown tels quels (même adresse) et n'en ajoute aucun.
- Garde la structure : mêmes titres ##, mêmes listes, mêmes tableaux.
- N'ajoute aucune affirmation, aucun conseil, aucun fait.
Réponds seulement avec le Markdown final, sans commentaire.`;

const linksOf = (md: string) => new Set([...md.matchAll(/\]\(([^)\s]+)\)/g)].map((m) => m[1]));
const numberKeys = (md: string) => extractNumbers(markdownCheckText(md)).map((n) => (Math.round(n.value * 100) / 100).toFixed(2));

export type StyleCheck = { ok: true } | { ok: false; reason: string };

/** Vérifie une proposition : aucun nombre hors source, aucun nombre nouveau, aucun lien nouveau, longueur raisonnable. */
export function checkStyleProposal(article: Pick<BlogArticle, "body" | "source" | "figures" | "mentions">, proposal: string): StyleCheck {
  const text = proposal.trim();
  if (!text) return { ok: false, reason: "Réponse vide." };
  const unknown = unknownNumbers(markdownCheckText(text), allowedForArticle(article));
  if (unknown.length) return { ok: false, reason: `Proposition refusée : ${unknown.length === 1 ? "un nombre absent" : "des nombres absents"} de la source (${[...new Set(unknown.map((n) => n.raw))].join(", ")}).` };
  const before = new Set(numberKeys(article.body));
  const added = numberKeys(text).filter((k) => !before.has(k));
  if (added.length) return { ok: false, reason: "Proposition refusée : elle ajoute des chiffres qui n’étaient pas dans l’article." };
  const links = linksOf(article.body);
  const newLinks = [...linksOf(text)].filter((l) => !links.has(l));
  if (newLinks.length) return { ok: false, reason: `Proposition refusée : lien ajouté (${newLinks[0]}).` };
  const ratio = text.length / Math.max(1, article.body.length);
  if (ratio < 0.6 || ratio > 1.5) return { ok: false, reason: "Proposition refusée : longueur trop différente de l’original." };
  return { ok: true };
}

async function defaultClient(apiKey: string): Promise<StyleClient> {
  const { default: Anthropic } = await import("@anthropic-ai/sdk");
  const client = new Anthropic({ apiKey, maxRetries: 1, timeout: 90_000 });
  return {
    async rewrite({ model, system, prompt }) {
      const msg = await client.messages.create({ model, max_tokens: 8000, system, messages: [{ role: "user", content: prompt }] });
      if (msg.stop_reason === "max_tokens") throw new Error("Réponse coupée.");
      return msg.content
        .filter((b): b is Extract<typeof b, { type: "text" }> => b.type === "text")
        .map((b) => b.text)
        .join("")
        .trim();
    },
  };
}

export type StyleOutcome = { ok: true; body: string; model: string } | { ok: false; reason: string; model: string };

export async function proposeStyle(article: Pick<BlogArticle, "title" | "body" | "source" | "figures" | "mentions">, deps: { env?: Env; client?: StyleClient } = {}): Promise<StyleOutcome> {
  const env = deps.env ?? process.env;
  const status = styleAssistantStatus(env);
  if (!deps.client && !status.enabled) return { ok: false, reason: status.reason ?? "Assistant indisponible.", model: status.model };
  let proposal: string;
  try {
    const client = deps.client ?? (await defaultClient(env.ANTHROPIC_API_KEY!.trim()));
    proposal = await client.rewrite({ model: status.model, system: SYSTEM, prompt: `Titre de l'article : ${article.title}\n\nCorps en Markdown :\n\n${article.body}` });
  } catch (err) {
    return { ok: false, reason: `Assistant indisponible : ${err instanceof Error ? err.message : "erreur inconnue"}.`, model: status.model };
  }
  proposal = proposal.replace(/^```(?:markdown|md)?\s*\n([\s\S]*?)\n```\s*$/i, "$1").trim();
  const check = checkStyleProposal(article, proposal);
  return check.ok ? { ok: true, body: proposal, model: status.model } : { ok: false, reason: check.reason, model: status.model };
}
