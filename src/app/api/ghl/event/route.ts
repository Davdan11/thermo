import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { sendWebhook } from "@/lib/ghl/client";

/* ─────────────────────────────────────────────────────────────────────────
   POST /api/ghl/event
   Enregistre un événement comportemental anonyme dans GHL.
   Utilisé pour : code postal saisi dans hero, quiz démarré, résultats vus.
   Ces événements déclenchent des automations GHL sans identité connue.
   ──────────────────────────────────────────────────────────────────────── */

export interface GHLEventPayload {
  event: string;              // "hero_postal_clicked" | "thermomatch_started" | "results_viewed"
  postalCode?: string;
  municipality?: string;
  province?: string;
  zone?: string;
  designTemp?: string;
  quizAnswers?: Record<string, unknown>;
  source?: string;
  userAgent?: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: GHLEventPayload = await req.json();

    if (!body.event) {
      return NextResponse.json({ error: "event requis" }, { status: 400 });
    }

    // Enrichir avec le user agent (pour analytics GHL)
    const payload = {
      ...body,
      userAgent: req.headers.get("user-agent") ?? "",
      ip: req.headers.get("x-forwarded-for") ?? "",
      referrer: req.headers.get("referer") ?? "",
    };

    // Envoyer au webhook GHL (non-bloquant)
    sendWebhook({ type: "anonymous_event", ...payload }).catch(() => {});

    // Log en dev
    if (process.env.NODE_ENV === "development") {
      console.log("[GHL Event]", payload);
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error("[/api/ghl/event] Erreur:", err);
    return NextResponse.json({ error: "Erreur serveur." }, { status: 500 });
  }
}
