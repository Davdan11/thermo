import { NextRequest, NextResponse } from "next/server";

/* ─────────────────────────────────────────────────────────────────────────
   POST /api/phone/ivr/route
   Aiguille l'appel avec voix ElevenLabs
───────────────────────────────────────────────────────────────────────────*/

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://thermopompesavendre.ca";
const FORWARD_VENTES = process.env.TWILIO_FORWARD_VENTES ?? "+14389003224";
const FORWARD_SAV    = process.env.TWILIO_FORWARD_SAV    ?? "+14389003224";
const audioBase = `${SITE_URL}/api/phone/audio`;

function makeTransfer(digit: string): string {
  const routes: Record<string, { number: string; audio: string; dept: string }> = {
    "1": { number: FORWARD_VENTES, audio: "transfert-ventes",    dept: "ventes"    },
    "2": { number: FORWARD_SAV,    audio: "transfert-sav",       dept: "service"   },
    "3": { number: FORWARD_VENTES, audio: "transfert-technique", dept: "technique" },
  };

  const route = routes[digit];

  // Touche invalide → retour au menu
  if (!route) {
    return `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Redirect>${SITE_URL}/api/phone/ivr/welcome</Redirect>
</Response>`;
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Play>${audioBase}/${route.audio}</Play>
  <Dial
    action="${SITE_URL}/api/phone/ivr/no-answer?dept=${route.dept}"
    timeout="20"
    record="record-from-answer"
    recordingStatusCallback="${SITE_URL}/api/phone/recording"
  >
    <Number statusCallbackEvent="initiated ringing answered completed">${route.number}</Number>
  </Dial>
</Response>`;
}

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const digit = formData.get("Digits") as string ?? "0";
  const caller = formData.get("From") as string ?? "";

  console.log(`[IVR Route] Caller: ${caller} → Touche: ${digit}`);

  return new NextResponse(makeTransfer(digit), {
    headers: { "Content-Type": "application/xml" },
  });
}
