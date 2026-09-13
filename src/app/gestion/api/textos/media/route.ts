/* ==================================================================
   GET /gestion/api/textos/media?c=…&m=…&i=… — pièce jointe (MMS) d'un
   texto reçu, pour la personne connectée seulement. Les URL Twilio
   exigent les identifiants du compte : on les lit ici, jamais dans le
   navigateur. Seules les URL enregistrées pour ce message, sur
   api.twilio.com et ce compte, sont lues (pas de relais ouvert).
   ================================================================== */

import { getAdminSession, unauthorizedJson } from "@/lib/gestion/auth/dal";
import { mediaFor } from "@/lib/textos/service";

const INLINE = /^(image\/(jpeg|png|gif|webp|heic|heif|bmp)|video\/(mp4|3gpp|quicktime)|audio\/[\w.+-]+)$/;

export async function GET(req: Request) {
  if (!(await getAdminSession())) return unauthorizedJson();

  const q = new URL(req.url).searchParams;
  const media = await mediaFor(q.get("c") ?? "", q.get("m") ?? "", Number(q.get("i")));
  const sid = process.env.TWILIO_ACCOUNT_SID;
  const token = process.env.TWILIO_AUTH_TOKEN;
  if (!media || !sid || !token || !media.url.startsWith(`https://api.twilio.com/2010-04-01/Accounts/${sid}/`)) {
    return new Response("Pièce jointe introuvable.", { status: 404, headers: { "Cache-Control": "no-store" } });
  }

  const upstream = await fetch(media.url, {
    headers: { Authorization: `Basic ${Buffer.from(`${sid}:${token}`).toString("base64")}` },
    signal: AbortSignal.timeout(20_000),
  }).catch(() => null);
  if (!upstream?.ok || !upstream.body) return new Response("Pièce jointe indisponible.", { status: 502, headers: { "Cache-Control": "no-store" } });

  const type = (upstream.headers.get("content-type") ?? media.type).split(";")[0].trim().toLowerCase();
  const inline = INLINE.test(type);
  return new Response(upstream.body, {
    headers: {
      "Content-Type": inline ? type : "application/octet-stream",
      "Content-Disposition": inline ? "inline" : "attachment",
      "Cache-Control": "private, max-age=3600",
      "X-Content-Type-Options": "nosniff",
      "Content-Security-Policy": "default-src 'none'; sandbox",
    },
  });
}
