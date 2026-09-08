/* ==================================================================
   POST /api/ghl/event — événement comportemental anonyme (questionnaire)
   - même origine uniquement, liste blanche d'événements, limite de débit
   - aucune adresse IP ni referrer transmis : l'événement reste anonyme
   ================================================================== */

import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { sendWebhook } from "@/lib/ghl/client";
import { SITE_URL } from "@/lib/seo";
import { rateLimit, tooManyRequests } from "@/lib/security/rate-limit";

const ALLOWED_EVENTS = new Set(["hero_postal_clicked", "thermomatch_started", "thermomatch_completed", "results_viewed"]);

function sameOrigin(req: NextRequest): boolean {
  const origin = req.headers.get("origin") ?? req.headers.get("referer") ?? "";
  if (!origin) return false;
  if (process.env.NODE_ENV !== "production" && /^https?:\/\/localhost(:\d+)?/.test(origin)) return true;
  return origin.startsWith(SITE_URL);
}

export async function POST(req: NextRequest) {
  if (!sameOrigin(req)) return NextResponse.json({ error: "Origine refusée." }, { status: 403 });
  if (!rateLimit(req, { name: "ghl-event", limit: 30, windowMs: 10 * 60 * 1000 })) return tooManyRequests();

  try {
    const body = (await req.json()) as Record<string, unknown>;
    const event = typeof body.event === "string" ? body.event : "";
    if (!ALLOWED_EVENTS.has(event)) return NextResponse.json({ error: "Événement inconnu." }, { status: 400 });

    const payload = {
      type: "anonymous_event",
      event,
      source: typeof body.source === "string" ? body.source.slice(0, 40) : undefined,
      postalCode: typeof body.postalCode === "string" ? body.postalCode.slice(0, 3).toUpperCase() : undefined, // RTA seulement
      quizAnswers: typeof body.quizAnswers === "object" && body.quizAnswers ? body.quizAnswers : undefined,
      at: new Date().toISOString(),
    };
    sendWebhook(payload).catch(() => {});
    return NextResponse.json({ received: true });
  } catch {
    return NextResponse.json({ error: "Corps invalide." }, { status: 400 });
  }
}
