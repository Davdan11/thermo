/* ==================================================================
   POST /api/reseau/tick?taches=rbq,stock — Chantier R, tâches
   planifiées du réseau (cron du VPS, scripts/reseau-cron.sh) :
     rbq    vérification des licences au fichier ouvert de la RBQ
            (une fois par nuit ; RBQ_VERIFICATION_ACTIVE=1 requis) ;
     stock  sorties du stock pour les jobs terminés (idempotent).
   Protégé par un secret partagé (comparaison en temps constant ;
   refus en production sans la variable) :
     Authorization: Bearer <RESEAU_CRON_SECRET>
   Réponse : un bilan chiffré, sans aucun renseignement personnel.
   ================================================================== */

import { syncStockExits } from "@/lib/gestion/inventaire/service";
import { reseauCronAuth } from "@/lib/gestion/reseau/cron-auth";
import { runRbqVerification } from "@/lib/gestion/reseau/rbq/job";

export const dynamic = "force-dynamic";

const json = (body: unknown, status = 200) => Response.json(body, { status, headers: { "Cache-Control": "no-store" } });

export async function POST(req: Request) {
  const auth = reseauCronAuth(req);
  if (auth === "absent") return json({ error: "RESEAU_CRON_SECRET absent (24 caractères ou plus) : passage refusé." }, 503);
  if (auth === "refuse") return json({ error: "Non autorisé." }, 401);
  const asked = new URL(req.url).searchParams.get("taches") ?? "rbq,stock";
  const tasks = new Set(asked.split(",").map((s) => s.trim()).filter((s) => s === "rbq" || s === "stock"));
  if (!tasks.size) return json({ error: "taches : rbq, stock ou les deux." }, 400);
  const out: Record<string, unknown> = { ok: true };
  try {
    if (tasks.has("rbq")) {
      const r = await runRbqVerification({ log: (line) => console.log(`[reseau] ${line}`) });
      out.rbq = { statut: r.status, detail: r.detail, verifies: r.checked, bloques: r.blocked, leves: r.lifted };
    }
    if (tasks.has("stock")) out.stock = { sorties: (await syncStockExits()).created };
    return json(out);
  } catch (e) {
    console.error("[reseau] passage interrompu :", e);
    return json({ error: "Passage interrompu : voir le journal du serveur." }, 500);
  }
}

export function GET() {
  return json({ error: "Méthode non permise : POST seulement." }, 405);
}
