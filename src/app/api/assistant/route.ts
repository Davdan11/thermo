/* ==================================================================
   POST /api/assistant — questions des visiteurs, réponse en flux NDJSON

   Serveur seulement : les clés (ANTHROPIC_API_KEY, GEMINI_API_KEY) ne
   quittent jamais le serveur. Limites : débit par IP, plafond quotidien
   global, taille de la question, nombre de tours, jetons et outils par
   réponse. Aucune conversation n'est enregistrée.
   ================================================================== */

import { clientIp } from "@/lib/security/rate-limit";
import { ASSISTANT_LIMITS, dailyGlobalLimit, resolveProvider, validateConversation } from "@/lib/assistant/config";
import { DailyCounter, SlidingWindowLimiter } from "@/lib/assistant/rate-limit";
import { createProvider } from "@/lib/assistant/providers";
import { runAssistant, type AssistantEvent } from "@/lib/assistant/run";

const perMinute = new SlidingWindowLimiter(ASSISTANT_LIMITS.perIpPerMinute, 60_000);
const perDay = new SlidingWindowLimiter(ASSISTANT_LIMITS.perIpPerDay, 24 * 60 * 60_000);
const daily = new DailyCounter(dailyGlobalLimit());

function json(body: unknown, status: number, headers: Record<string, string> = {}): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store", ...headers },
  });
}

export async function POST(req: Request): Promise<Response> {
  const providerId = resolveProvider();
  if (!providerId) return json({ error: "L'assistant n'est pas disponible." }, 503);

  // Appels du site seulement (les navigateurs envoient Sec-Fetch-Site).
  const site = req.headers.get("sec-fetch-site");
  if (site && site !== "same-origin" && site !== "none") return json({ error: "Origine refusée." }, 403);

  const ip = clientIp(req);
  if (!perMinute.hit(ip) || !perDay.hit(ip)) {
    return json({ error: "Beaucoup de questions en peu de temps. Réessayez dans quelques minutes ou appelez-nous au 438-900-3224." }, 429, { "Retry-After": "60" });
  }

  const raw = await req.text();
  if (raw.length > ASSISTANT_LIMITS.maxBodyBytes) return json({ error: "Conversation trop longue. Recommencez-en une nouvelle." }, 413);
  let body: unknown;
  try {
    body = JSON.parse(raw);
  } catch {
    return json({ error: "Requête invalide." }, 400);
  }
  const conversation = validateConversation(body);
  if (!conversation.ok) return json({ error: conversation.error }, conversation.status);

  if (!daily.tryIncrement()) {
    return json({ error: "L'assistant a atteint sa limite pour aujourd'hui. Essayez ThermoMatch ou appelez-nous au 438-900-3224." }, 429);
  }

  const provider = createProvider(providerId);
  const encoder = new TextEncoder();
  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      const emit = (e: AssistantEvent) => {
        try {
          controller.enqueue(encoder.encode(`${JSON.stringify(e)}\n`));
        } catch {
          /* flux fermé par le visiteur */
        }
      };
      await runAssistant({ provider, history: conversation.history, emit, signal: req.signal });
      try {
        controller.close();
      } catch {
        /* déjà fermé */
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "application/x-ndjson; charset=utf-8",
      "Cache-Control": "no-store",
      // nginx : pas de mise en tampon, le texte arrive au fil de l'eau.
      "X-Accel-Buffering": "no",
    },
  });
}
