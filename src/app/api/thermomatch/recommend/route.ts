/* ==================================================================
   POST /api/thermomatch/recommend

   Questionnaire → ThermoMatch v2 (src/lib/thermomatch/recommend.ts)

   - Charge estimée uniforme pour tout le Québec (le code postal sert
     à situer le client, pas à choisir la machine).
   - Capacités certifiées à -15 °C et montants LogisVert : base officielle
     Hydro-Québec (src/lib/subsidies/logisvert-official-amounts.json).
   - Déterministe, sans IA, sans politique de marque : toutes les marques
     du catalogue actives au Québec sont candidates.
   ================================================================== */

import { NextResponse } from "next/server";
import { recommendFromAnswers } from "@/lib/thermomatch/recommend";
import type { QuestionnaireAnswers } from "@/lib/thermomatch/answers";

export async function POST(request: Request) {
  try {
    const body = (await request.json().catch(() => null)) as { answers?: QuestionnaireAnswers } | null;
    if (!body || typeof body.answers !== "object" || body.answers === null) {
      return NextResponse.json({ success: false, error: "Le questionnaire est manquant." }, { status: 400 });
    }
    return NextResponse.json({ success: true, ...recommendFromAnswers(body.answers) });
  } catch (error) {
    console.error("ThermoMatch API Error:", error);
    const message = error instanceof Error ? error.message : "Erreur interne";
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
