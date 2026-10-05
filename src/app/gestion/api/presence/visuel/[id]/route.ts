/* ==================================================================
   GET /gestion/api/presence/visuel/<id>?v=<version> — aperçu PNG d'un
   élément de la file Facebook (1080 × 1350 ou 1080 × 1920), pour la
   page de gestion seulement (session vérifiée). Le visuel envoyé à
   Facebook est rendu de la même façon, au moment de l'envoi.
   ================================================================== */

import { NextResponse } from "next/server";
import { getAdminSession, unauthorizedJson } from "@/lib/gestion/auth/dal";
import { lireSocial } from "@/lib/social/store";
import { PUBLICATION_ID_RE } from "@/lib/social/types";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!(await getAdminSession())) return unauthorizedJson();
  const { id } = await params;
  if (!PUBLICATION_ID_RE.test(id)) return NextResponse.json({ ok: false, error: "Adresse invalide." }, { status: 400 });
  const p = (await lireSocial()).publications.find((x) => x.id === id);
  if (!p) return NextResponse.json({ ok: false, error: "Introuvable." }, { status: 404 });
  try {
    const { rendreVisuel } = await import("@/lib/social/visuels/rendu");
    const png = await rendreVisuel(p.faits, p.genre, p.variante);
    return new Response(new Uint8Array(png), { headers: { "Content-Type": "image/png", "Cache-Control": "private, max-age=300", "X-Robots-Tag": "noindex" } });
  } catch (err) {
    console.error("[presence/visuel]", err instanceof Error ? err.message : err);
    return NextResponse.json({ ok: false, error: "Rendu impossible." }, { status: 500 });
  }
}
