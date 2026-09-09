/* ==================================================================
   POST /api/phone/recording — enregistrement d'appel terminé (webhook Twilio signé)
   → URL de l'enregistrement dans Pipedrive
   ================================================================== */

import { capturePhoneLead } from "@/lib/crm/pipedrive";
import { journalLead } from "@/lib/crm/lead-journal";
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
  await journalLead("appel-enregistre", { phone: caller, duration, recordingUrl, when: dateStr }).catch(() => {});
  await capturePhoneLead({
    phone: caller,
    title: `Appel enregistré — ${caller}`,
    note: `Appel enregistré le ${dateStr} — durée ${duration} s\nEnregistrement : ${recordingUrl}.mp3`,
    source: "appel-enregistre",
  }).catch((e) => console.error("[Recording] CRM :", e));

  return new Response("OK");
}
