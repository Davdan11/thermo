/* ==================================================================
   Proxy (ex-Middleware) : seulement sous /gestion.
   Vérification OPTIMISTE : un cookie de session lisible et non expiré
   laisse passer, sinon redirection vers la connexion (401 pour les
   routes /gestion/api). La vraie vérification (signature, adresse
   autorisée) est faite par la couche d'accès à chaque page, route et
   action (src/lib/gestion/auth/dal.ts). Le site public n'est jamais
   touché : le matcher ne couvre que /gestion.
   ================================================================== */

import { NextResponse, type NextRequest } from "next/server";
import { peekSession, SESSION_COOKIE } from "@/lib/gestion/auth/session-token";

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (pathname === "/gestion/connexion" || pathname.startsWith("/gestion/connexion/")) return NextResponse.next();
  // Server Actions : laissées à la couche d'accès, qui répond par une redirection propre.
  if (req.headers.has("next-action")) return NextResponse.next();
  if (peekSession(req.cookies.get(SESSION_COOKIE)?.value)) return NextResponse.next();
  if (pathname.startsWith("/gestion/api/")) {
    return new NextResponse(JSON.stringify({ error: "Non autorisé." }), { status: 401, headers: { "Content-Type": "application/json" } });
  }
  const url = req.nextUrl.clone();
  url.pathname = "/gestion/connexion";
  url.search = "";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/gestion", "/gestion/:path*"],
};
