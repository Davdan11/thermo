/* ==================================================================
   Rédaction par l'IA (serveur) : même fournisseur et mêmes clés que
   l'assistant du site (src/lib/assistant/config.ts) :
   - Claude si ANTHROPIC_API_KEY est présent (modèle ASSISTANT_MODEL) ;
   - Gemini seulement si ASSISTANT_GEMINI=1 (le quota de GEMINI_API_KEY
     sert d'abord à ThermoScan) ;
   - sinon, ou avec le fournisseur factice : pas d'IA, le gabarit suffit.
   Un seul appel court, sans outil. Toute erreur renvoie null : la
   publication part alors avec le texte gabarit.
   ================================================================== */

import { anthropicModel, geminiModel, resolveProvider } from "@/lib/assistant/config";

type Env = Record<string, string | undefined>;

export interface RedacteurIa {
  fournisseur: string;
  rediger(consignes: string, demande: string): Promise<string | null>;
}

const DELAI_MS = 40_000;

export function redacteurIa(env: Env = process.env): RedacteurIa | null {
  const id = resolveProvider(env);
  if (id === "anthropic") {
    const cle = env.ANTHROPIC_API_KEY!.trim();
    const modele = anthropicModel(env);
    return {
      fournisseur: `anthropic:${modele}`,
      async rediger(consignes, demande) {
        try {
          const { default: Anthropic } = await import("@anthropic-ai/sdk");
          const client = new Anthropic({ apiKey: cle, maxRetries: 1, timeout: DELAI_MS });
          const msg = await client.messages.create({ model: modele, max_tokens: 700, system: consignes, messages: [{ role: "user", content: demande }] });
          if (msg.stop_reason === "max_tokens") return null;
          return msg.content.map((b) => (b.type === "text" ? b.text : "")).join("").trim() || null;
        } catch (err) {
          console.warn("[social] rédaction Claude impossible :", err instanceof Error ? err.message : err);
          return null;
        }
      },
    };
  }
  if (id === "gemini") {
    const cle = env.GEMINI_API_KEY!.trim();
    const modele = geminiModel(env);
    return {
      fournisseur: `gemini:${modele}`,
      async rediger(consignes, demande) {
        try {
          const resp = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(modele)}:generateContent`, {
            method: "POST",
            // Clé en en-tête, jamais dans l'adresse (journaux).
            headers: { "Content-Type": "application/json", "x-goog-api-key": cle },
            body: JSON.stringify({
              systemInstruction: { parts: [{ text: consignes }] },
              contents: [{ role: "user", parts: [{ text: demande }] }],
              generationConfig: { temperature: 0.6, maxOutputTokens: 700, thinkingConfig: { thinkingBudget: 0 } },
            }),
            signal: AbortSignal.timeout(DELAI_MS),
          });
          if (!resp.ok) return null;
          const data = (await resp.json()) as { candidates?: Array<{ content?: { parts?: Array<{ text?: string; thought?: boolean }> }; finishReason?: string }> };
          const c = data.candidates?.[0];
          if (!c || c.finishReason === "MAX_TOKENS") return null;
          return (c.content?.parts ?? []).filter((p) => !p.thought).map((p) => p.text ?? "").join("").trim() || null;
        } catch (err) {
          console.warn("[social] rédaction Gemini impossible :", err instanceof Error ? err.message : err);
          return null;
        }
      },
    };
  }
  return null;
}
