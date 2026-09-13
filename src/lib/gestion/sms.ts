/* ==================================================================
   Textos (Twilio) : seulement si TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN
   et TWILIO_PHONE_NUMBER sont définis et que l'installateur a un
   numéro valide. Sinon le courriel suffit : l'état du canal est noté.
   ================================================================== */

import type { ChannelStatus } from "./types";

export function smsConfigured(): boolean {
  return Boolean(process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN && process.env.TWILIO_PHONE_NUMBER);
}

/** « 514 555-1234 » → « +15145551234 » ; null si ce n'est pas un numéro nord-américain. */
export function toE164(phone: string): string | null {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith("1")) return `+${digits}`;
  return null;
}

export async function sendSms(to: string, body: string): Promise<ChannelStatus> {
  if (!smsConfigured()) return "non-configure";
  const number = toE164(to);
  if (!number) return "sans-numero";
  const sid = process.env.TWILIO_ACCOUNT_SID!;
  const token = process.env.TWILIO_AUTH_TOKEN!;
  try {
    const res = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${sid}/Messages.json`, {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(`${sid}:${token}`).toString("base64")}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({ To: number, From: process.env.TWILIO_PHONE_NUMBER!, Body: body }).toString(),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) {
      console.error("[gestion] texto refusé par Twilio :", res.status, (await res.text()).slice(0, 300));
      return "echec";
    }
    return "envoye";
  } catch (e) {
    console.error("[gestion] texto impossible :", e);
    return "echec";
  }
}
