/* ==================================================================
   /api/donnees/revalider — régénération des pages après la mise à jour
   de nuit des données (liste LogisVert, catalogue), sans reconstruction.

   GET  : données chargées par ce processus (date de la liste, nombre de
          combinaisons, empreinte du contenu). Public et sans effet : le
          robot vérifie ainsi que le serveur redémarré lit bien les
          nouveaux fichiers.
   POST : marque toutes les pages prérendues comme périmées
          (revalidatePath("/", "layout")) ; chacune est régénérée à sa
          prochaine visite avec les nouvelles données.
          Protégé par DONNEES_CRON_SECRET (24 caractères ou plus) dans
          shared/.env : Authorization: Bearer <secret>. Sans secret en
          production, l'appel est refusé ; les pages suivent alors en
          6 heures au plus (revalidate de src/app/layout.tsx).
   Appelé par scripts/publier-donnees.sh.
   ================================================================== */

import { timingSafeEqual } from "node:crypto";
import { revalidatePath } from "next/cache";
import { lireMetaLogisVert } from "@/lib/subsidies/logisvert-meta";
import { registry } from "@/lib/data/registry";
import { getOfficialModelCount } from "@/lib/subsidies/logisvert-official";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const HEADERS = { "Cache-Control": "no-store", "X-Robots-Tag": "noindex, nofollow" };

function authorized(request: Request): boolean {
  const secret = process.env.DONNEES_CRON_SECRET?.trim();
  if (!secret || secret.length < 24) return process.env.NODE_ENV !== "production";
  const header = request.headers.get("authorization") ?? "";
  if (!header.startsWith("Bearer ")) return false;
  const expected = Buffer.from(secret);
  const given = Buffer.from(header.slice(7).trim());
  return expected.length === given.length && timingSafeEqual(expected, given);
}

/** Ce que ce processus a chargé : métadonnées, et le catalogue et la liste eux-mêmes (une lecture qui échoue répond 500). */
function chargees() {
  const m = lireMetaLogisVert();
  return {
    listDate: m.listDate ?? null,
    count: m.count ?? null,
    contentSha256: m.contentSha256 ?? null,
    updatedAt: m.updatedAt ?? null,
    combinaisonsChargees: getOfficialModelCount(),
    fichesChargees: registry.models.length,
  };
}

export async function GET() {
  return Response.json({ ok: true, logisvert: chargees() }, { headers: HEADERS });
}

export async function POST(request: Request) {
  if (!authorized(request)) return Response.json({ error: "Non autorisé." }, { status: 401, headers: HEADERS });
  revalidatePath("/", "layout");
  return Response.json({ ok: true, revalide: "/", logisvert: chargees() }, { headers: HEADERS });
}
