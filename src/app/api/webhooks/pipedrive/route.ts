/* ==================================================================
   POST /api/webhooks/pipedrive — affaire mise à jour (changement
   d'étape, affaire perdue) → courriel client personnalisé.
   Protégé par authentification HTTP Basic (configurée dans Pipedrive :
   Webhooks → HTTP Auth). Variables : PIPEDRIVE_WEBHOOK_USER / _PASSWORD.
   Sans ces variables en production, tout appel est refusé.
   La logique est dans src/lib/crm/stage-emails.ts.
   ================================================================== */

import { NextResponse } from "next/server";
import { timingSafeEqual } from "node:crypto";
import { handleDealChange, type WebhookDeal } from "@/lib/crm/stage-emails";

function authorized(request: Request): boolean {
  const user = process.env.PIPEDRIVE_WEBHOOK_USER;
  const pass = process.env.PIPEDRIVE_WEBHOOK_PASSWORD;
  if (!user || !pass) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("[webhook pipedrive] identifiants absents : accès autorisé en développement seulement.");
      return true;
    }
    return false;
  }
  const header = request.headers.get("authorization") ?? "";
  if (!header.startsWith("Basic ")) return false;
  const expected = Buffer.from(`${user}:${pass}`);
  const given = Buffer.from(header.slice(6), "base64");
  return expected.length === given.length && timingSafeEqual(expected, given);
}

export async function POST(request: Request) {
  if (!authorized(request)) return new Response("Unauthorized", { status: 401, headers: { "WWW-Authenticate": "Basic" } });

  try {
    const body = (await request.json()) as { meta?: { action?: string; object?: string; entity?: string }; current?: WebhookDeal; previous?: WebhookDeal | null; data?: WebhookDeal };
    // v1 : meta.object = "deal", current/previous ; v2 : meta.entity = "deal", data/previous.
    const object = body?.meta?.object ?? body?.meta?.entity;
    const action = body?.meta?.action;
    const current = body?.current ?? body?.data;
    if (object !== "deal" || (action !== "updated" && action !== "change") || !current?.id) {
      return NextResponse.json({ success: true, message: "Événement ignoré" });
    }
    const result = await handleDealChange(current, body.previous ?? null);
    if (result.action !== "ignore") console.log(`[webhook pipedrive] affaire ${current.id} : ${result.action}${result.key ? ` (${result.key})` : ""}${result.subject ? ` « ${result.subject} »` : ""}`);
    return NextResponse.json({ success: true, ...result });
  } catch (error) {
    console.error("[webhook pipedrive]", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
