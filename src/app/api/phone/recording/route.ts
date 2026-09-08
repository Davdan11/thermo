/* ==================================================================
   POST /api/phone/recording — enregistrement d'appel terminé (webhook Twilio signé)
   → URL de l'enregistrement dans le CRM
   ================================================================== */

import { captureFullLead } from "@/lib/ghl/client";
import { twilioForbidden, verifyTwilioRequest } from "@/lib/security/twilio";

export async function POST(req: Request) {
  const check = await verifyTwilioRequest(req);
  if (!check.ok) return twilioForbidden(check.reason);

  const p = check.params;
  const recordingUrl = p.get("RecordingUrl") ?? "";
  const duration = p.get("RecordingDuration") ?? "0";
  const caller = p.get("From") ?? "";

  if (!recordingUrl || !caller || caller === "anonymous") return new Response("OK");

  const dateStr = new Date().toLocaleString("fr-CA", { timeZone: "America/Montreal" });
  await captureFullLead({
    phone: caller,
    customFields: {
      notes_projet: `Appel enregistré le ${dateStr} — durée ${duration} s\nEnregistrement : ${recordingUrl}.mp3`,
      source_page: "appel-enregistre",
    },
    extraTags: ["appel-enregistre"],
  }).catch((e) => console.error("[Recording] CRM :", e));

  return new Response("OK");
}
