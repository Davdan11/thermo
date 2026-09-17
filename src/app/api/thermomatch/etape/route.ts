/* ==================================================================
   POST /api/thermomatch/etape

   Compte un écran atteint dans le questionnaire ThermoMatch, pour voir
   où les gens s'arrêtent (/gestion/statistiques). Le corps ne porte
   qu'un identifiant d'écran connu ; tout le reste est ignoré. Rien
   n'est écrit sur le visiteur : pas d'adresse IP, pas de témoin, pas
   de réponse au questionnaire, aucun outil externe.
   ================================================================== */

import { NextResponse } from "next/server";
import { compterEtape } from "@/lib/thermomatch/etapes-store";

const OK = new NextResponse(null, { status: 204 });

export async function POST(request: Request) {
  try {
    const body = (await request.json().catch(() => null)) as { ecran?: unknown } | null;
    const ecran = typeof body?.ecran === "string" ? body.ecran : null;
    // Un écran inconnu est ignoré par le magasin : la réponse reste la même, rien n'est écrit.
    if (ecran) await compterEtape(ecran);
  } catch {
    /* la mesure ne doit jamais faire échouer une page */
  }
  return OK.clone();
}
