import { businessMailingAddress } from "@/lib/relances/config";

/* ==================================================================
   État des relances pour le formulaire ThermoMatch : la case « rappels »
   ne s'affiche que si les envois sont possibles (adresse postale
   configurée, exigée par la LCAP). Lu à chaque appel, jamais figé au build.
   ================================================================== */

export const dynamic = "force-dynamic";

export function GET() {
  return Response.json({ disponibles: businessMailingAddress() !== null }, { headers: { "Cache-Control": "no-store" } });
}
