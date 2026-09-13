/* ==================================================================
   Chantier P — POST /disponibilites/[jeton]/creneaux : l'installateur
   ajoute ou retire ses moments libres. Formulaire HTML ordinaire :
   origine vérifiée, débit limité par jeton, validation zod, installateur
   actif résolu par le jeton, puis retour (303) à la page.
   Un moment réservé par un client ne se retire pas ici.
   ================================================================== */
import { NextResponse, type NextRequest } from "next/server";
import { z } from "zod";
import { isSameOrigin } from "@/lib/gestion/origin";
import { baseUrlFromHeaders } from "@/lib/gestion/request";
import { portalLimits } from "@/lib/gestion/portail/limits";
import { addSlots, installerForToken, removeSlot } from "@/lib/gestion/portail/service";
import { HHMM_RE, SLOT_ID_RE } from "@/lib/gestion/portail/types";

export const dynamic = "force-dynamic";

const text = (body: string, status: number) => new NextResponse(body, { status, headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" } });

const Form = z.discriminatedUnion("action", [
  z.object({ action: z.literal("ajouter"), jour: z.string().regex(/^\d{4}-\d{2}-\d{2}$/), debut: z.string().regex(HHMM_RE), fin: z.string().regex(HHMM_RE), semaines: z.coerce.number().int().min(0).max(12).default(0) }),
  z.object({ action: z.literal("retirer"), slotId: z.string().regex(SLOT_ID_RE) }),
]);

export async function POST(req: NextRequest, { params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  if (!isSameOrigin(req)) return text("Requête refusée : origine inconnue.", 403);
  if (!portalLimits.availabilityWrite.hit(token.slice(0, 64))) return text("Trop de requêtes. Réessayez plus tard.", 429);
  const installer = await installerForToken(token);
  if (!installer) return text("Lien invalide.", 404);
  const base = baseUrlFromHeaders(req.headers);
  const back = (q: Record<string, string>) => {
    const url = new URL(`/disponibilites/${encodeURIComponent(token)}`, base);
    for (const [k, v] of Object.entries(q)) url.searchParams.set(k, v);
    return NextResponse.redirect(url, 303);
  };
  const form = await req.formData().catch(() => null);
  const parsed = Form.safeParse(form ? Object.fromEntries([...form.entries()].map(([k, v]) => [k, String(v).slice(0, 40)])) : {});
  if (!parsed.success) return back({ e: "formulaire" });
  const f = parsed.data;
  const by = `installateur:${installer.id}`;
  if (f.action === "ajouter") {
    const r = await addSlots(installer.id, { day: f.jour, start: f.debut, end: f.fin, repeatWeeks: f.semaines }, by);
    return r.ok ? back({ r: "ajoute", n: String(r.added) }) : back({ e: "creneau" });
  }
  const r = await removeSlot(installer.id, f.slotId, by);
  return r.ok ? back({ r: "retire" }) : back({ e: r.code === "reserve" ? "reserve" : "introuvable" });
}

export function GET() {
  return text("Méthode non permise.", 405);
}
