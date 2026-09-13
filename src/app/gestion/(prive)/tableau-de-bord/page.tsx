/* Refonte R1 — onglet « Tableau de bord » de la section Aujourd'hui : l'ancien accueil de l'outil de gestion, déplacé
   tel quel (À faire aujourd'hui, L'argent, Les demandes et leurs sources, Le pipeline, prévision ; bloc 05 des
   partenaires et de l'après-vente pour le propriétaire). Tout est calculé sur le serveur ; la page ne reçoit qu'un objet
   d'affichage (HomeView), sans courriel ni numéro de téléphone. ?periode= (7, 30, 90, tout) règle l'argent et les
   demandes ; À faire et le pipeline montrent toujours le présent.
   Chantier V : ouvert à tous les membres. Un vendeur voit SA version (ses clients seulement, calculée sur l'index
   restreint) et sa carte du classement ; le bloc 05 (commissions des partenaires : l'argent de l'entreprise) reste au
   propriétaire. */
import type { Metadata } from "next";
import { requireUser } from "@/lib/gestion/auth/dal";
import { homeView } from "@/lib/gestion/crm/service";
import { scopedIndex } from "@/lib/gestion/equipe/scope";
import { parsePeriod } from "@/lib/gestion/statistiques";
import { HomeView } from "@/components/gestion/crm/HomeView";
import { ArgentStrip } from "@/components/gestion/argent/ArgentStrip";
import { MaCarte } from "@/components/gestion/equipe/MaCarte";

export const metadata: Metadata = { title: "Tableau de bord" };

export default async function DashboardPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const session = await requireUser(); // Chantier V
  const sp = await searchParams;
  const period = parsePeriod(sp.periode);
  const vendeur = session.role === "vendeur";
  const h = await homeView(period, vendeur ? await scopedIndex(session) : undefined);
  return (
    <>
      {vendeur ? <MaCarte session={session} /> : null}
      <HomeView h={h} />
      {/* Volet B : commissions des partenaires, satisfaction et LogisVert des clients (bloc 05). Chantier V : propriétaire. */}
      {session.role === "proprietaire" ? <ArgentStrip /> : null}
    </>
  );
}
