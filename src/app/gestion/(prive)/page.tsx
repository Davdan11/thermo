/* Accueil de l'outil de gestion : le CRM en un coup d'œil (À faire aujourd'hui, L'argent, Les demandes et leurs
   sources, Le pipeline). Tout est calculé sur le serveur ; la page ne reçoit qu'un objet d'affichage (HomeView), sans
   courriel ni numéro de téléphone. ?periode= (7, 30, 90, tout) règle l'argent et les demandes ; À faire et le pipeline
   montrent toujours le présent. */
import type { Metadata } from "next";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { homeView } from "@/lib/gestion/crm/service";
import { parsePeriod } from "@/lib/gestion/statistiques";
import { HomeView } from "@/components/gestion/crm/HomeView";
import { ArgentStrip } from "@/components/gestion/argent/ArgentStrip";

export const metadata: Metadata = { title: "Accueil" };

export default async function HomePage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  await requireAdmin();
  const period = parsePeriod((await searchParams).periode);
  const h = await homeView(period);
  return (
    <>
      <HomeView h={h} />
      {/* Volet B : commissions des partenaires, satisfaction et LogisVert des clients (bloc 05). */}
      <ArgentStrip />
    </>
  );
}
