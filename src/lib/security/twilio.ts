/* ==================================================================
   Vérification de la signature des webhooks Twilio (X-Twilio-Signature)

   Twilio signe chaque requête : base64(HMAC-SHA1(authToken, url + params))
   où url est l'URL complète appelée et params les champs POST triés par
   nom et concaténés nom+valeur. Sans TWILIO_AUTH_TOKEN en production, tout
   webhook est refusé : mieux vaut un IVR muet qu'un IVR piloté par un inconnu.
   ================================================================== */

import { createHmac, timingSafeEqual } from "node:crypto";
import { SITE_URL } from "@/lib/seo";

export interface TwilioCheck {
  ok: boolean;
  params: URLSearchParams;
  reason?: string;
}

/** Lit le corps (x-www-form-urlencoded) et vérifie la signature. */
export async function verifyTwilioRequest(req: Request): Promise<TwilioCheck> {
  const raw = await req.text();
  const params = new URLSearchParams(raw);
  const token = process.env.TWILIO_AUTH_TOKEN;
  const signature = req.headers.get("x-twilio-signature") ?? "";

  if (!token) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("[twilio] TWILIO_AUTH_TOKEN absent : signature non vérifiée (développement seulement).");
      return { ok: true, params };
    }
    return { ok: false, params, reason: "TWILIO_AUTH_TOKEN manquant" };
  }
  if (!signature) return { ok: false, params, reason: "signature absente" };

  // URL telle que Twilio l'a appelée : domaine public + chemin + query.
  const incoming = new URL(req.url);
  const url = `${SITE_URL}${incoming.pathname}${incoming.search}`;
  const keys = [...params.keys()].sort();
  const data = url + keys.map((k) => k + (params.get(k) ?? "")).join("");
  const expected = createHmac("sha1", token).update(data).digest("base64");

  const a = Buffer.from(expected);
  const b = Buffer.from(signature);
  const ok = a.length === b.length && timingSafeEqual(a, b);
  return ok ? { ok, params } : { ok, params, reason: "signature invalide" };
}

export function twilioForbidden(reason?: string): Response {
  console.warn(`[twilio] webhook refusé : ${reason ?? "signature invalide"}`);
  return new Response("Forbidden", { status: 403 });
}

/** Échappe une valeur insérée dans un attribut ou un texte TwiML (XML). */
export function xml(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}

export function twiml(body: string): Response {
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<Response>${body}</Response>`, {
    headers: { "Content-Type": "application/xml" },
  });
}
