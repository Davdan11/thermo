/* ==================================================================
   GET /api/publicite/ventes-google.csv — flux de l'importation
   planifiée de conversions hors ligne de Google Ads.

   HTTP Basic (ADS_FEED_USER / ADS_FEED_PASSWORD, comparaison en temps
   constant, refus en production s'ils manquent), jamais indexé, jamais
   mis en cache. Contenu : identifiants de clic, nom de la conversion,
   heure, valeur et numéro de soumission ; aucun nom, courriel ni
   téléphone (voir src/lib/ads/google-feed.ts).
   Chaque passage de Google est noté (date, nombre de lignes) et
   déclenche l'envoi des ventes à Meta, inerte sans clés.
   ================================================================== */

import { after } from "next/server";
import { feedAuth } from "@/lib/ads/feed-auth";
import { googleFeed, syncMetaPurchases } from "@/lib/ads/service";

export const dynamic = "force-dynamic";

const PRIVATE = { "Cache-Control": "no-store", "X-Robots-Tag": "noindex, nofollow, noarchive" };

function denied(auth: "absent" | "refuse"): Response {
  if (auth === "absent") return new Response("ADS_FEED_USER ou ADS_FEED_PASSWORD absent : flux fermé.\n", { status: 503, headers: { ...PRIVATE, "Content-Type": "text/plain; charset=utf-8" } });
  return new Response("Non autorisé.\n", { status: 401, headers: { ...PRIVATE, "Content-Type": "text/plain; charset=utf-8", "WWW-Authenticate": 'Basic realm="Flux Google Ads", charset="UTF-8"' } });
}

export async function GET(req: Request) {
  const auth = feedAuth(req);
  if (auth !== "ok") return denied(auth);
  const now = new Date();
  const { csv } = await googleFeed(now);
  try {
    after(() => syncMetaPurchases(now).catch((e) => console.error("[publicite] Meta :", e)));
  } catch {
    /* hors requête Next (tests) : pas d'envoi différé */
  }
  return new Response(csv, {
    status: 200,
    headers: { ...PRIVATE, "Content-Type": "text/csv; charset=utf-8", "Content-Disposition": 'inline; filename="ventes-google.csv"' },
  });
}

export function HEAD(req: Request) {
  const auth = feedAuth(req);
  if (auth !== "ok") return denied(auth);
  return new Response(null, { status: 200, headers: { ...PRIVATE, "Content-Type": "text/csv; charset=utf-8" } });
}
