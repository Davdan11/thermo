/* ==================================================================
   Conformité C2 — GET /api/consentements/textes : textes de
   consentement en vigueur pour les formulaires publics (5.1, 5.2, 5.3
   et 3.1), lus dans la trousse et remplis avec l'identité, au moment
   de l'appel (jamais figés au build). La version servie est gardée
   (texte exact) pour la preuve du consentement.
   Sans trousse ou sans identité complète : { ready: false } et les
   formulaires gardent leurs textes actuels.
   ================================================================== */

import { currentConsentBundle } from "@/lib/consentements/serveur";
import type { PublicConsentTexts } from "@/lib/consentements/publics";

export const dynamic = "force-dynamic";

export async function GET() {
  const b = await currentConsentBundle({ register: true });
  const body: PublicConsentTexts = b.ready
    ? {
        ready: true,
        version: b.version,
        sender: b.sender,
        communications: b.communications.text,
        rappels: b.rappels.text,
        promotions: b.promotions.text,
        jumelage: { notice: b.jumelage.notice.map((n) => n.text), box: b.jumelage.box.text },
      }
    : { ready: false };
  // Court cache partagé : les textes changent rarement, la page n'attend jamais le disque.
  return Response.json(body, { headers: { "Cache-Control": "public, max-age=60, s-maxage=60" } });
}
