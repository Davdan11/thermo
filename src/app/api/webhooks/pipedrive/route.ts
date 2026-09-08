/* ==================================================================
   POST /api/webhooks/pipedrive — changement d'étape d'une affaire
   Protégé par authentification HTTP Basic (configurée dans Pipedrive :
   Webhooks → HTTP Auth). Variables : PIPEDRIVE_WEBHOOK_USER / _PASSWORD.
   Sans ces variables en production, tout appel est refusé.
   ================================================================== */

import { NextResponse } from "next/server";
import { timingSafeEqual } from "node:crypto";
import { sendClientRdvEmail } from "@/lib/crm/email";

const STAGE_ID_RDV_CONFIRME = 19;

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
    const body = await request.json();
    if (body?.meta?.action !== "updated" || body?.meta?.object !== "deal") {
      return NextResponse.json({ success: true, message: "Événement ignoré" });
    }
    const { current, previous } = body;
    const justMovedToRdv = current?.stage_id === STAGE_ID_RDV_CONFIRME && previous?.stage_id !== STAGE_ID_RDV_CONFIRME;

    if (justMovedToRdv) {
      const personName: string = current.person_name || "Client";
      const personEmail: string | undefined = current.person_id?.email?.[0]?.value;
      if (personEmail) await sendClientRdvEmail(personEmail, { firstName: personName.split(" ")[0] });
      else console.log(`[webhook pipedrive] affaire ${current.id} en RDV sans courriel.`);
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[webhook pipedrive]", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
