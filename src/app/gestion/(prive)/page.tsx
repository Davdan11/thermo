/* Refonte R1 — « Aujourd'hui », première page de /gestion (cellulaire d'abord) : les 5 actions les plus payantes du
   moment, les installations du jour, les blocages et l'argent du mois en une ligne. Tout est calculé sur le serveur ; la
   page ne reçoit qu'un objet d'affichage (TodayView), sans courriel ni numéro de téléphone. L'ancien accueil (L'argent,
   Les demandes et leurs sources, Le pipeline, Partenaires et après-vente) est l'onglet « Tableau de bord ».
   Chantier V : ouverte à tous les membres. Un vendeur voit SA version (index restreint) et sa carte du classement ; le
   paiement en retard des partenaires (l'argent de l'entreprise) reste au propriétaire. ?acces=refuse : une section
   fermée à ce rôle a renvoyé ici. ?periode= (anciens liens de l'accueil) : renvoyé au tableau de bord.
   R2 : les actions sont triées par la note de priorité (montant en jeu × probabilité × urgence) ; une note nulle ou
   « à définir » laisse l'ordre d'urgence des tâches décider. */
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { requireUser } from "@/lib/gestion/auth/dal";
import { homeAfterSale } from "@/lib/gestion/automatisations/views";
import { loadCrmIndex } from "@/lib/gestion/crm/service";
import { priorityIndex } from "@/lib/gestion/crm/priorite";
import { buildToday } from "@/lib/gestion/crm/today";
import { scopedIndex } from "@/lib/gestion/equipe/scope";
import { TodayView } from "@/components/gestion/crm/TodayView";
import { AccessNotice, MaCarte } from "@/components/gestion/equipe/MaCarte";

export const metadata: Metadata = { title: "Aujourd’hui" };

export default async function TodayPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const session = await requireUser(); // Chantier V
  const sp = await searchParams;
  if (typeof sp.periode === "string" && /^[a-z0-9]{1,8}$/.test(sp.periode)) redirect(`/gestion/tableau-de-bord?periode=${sp.periode}`);
  const vendeur = session.role === "vendeur";
  const owner = session.role === "proprietaire";
  const index = vendeur ? await scopedIndex(session) : await loadCrmIndex();
  const after = owner ? await homeAfterSale(index.now).catch(() => null) : null;
  const notes = priorityIndex(index);
  const priorityOf = (clientId: string): number | null => {
    const c = index.byId.get(clientId);
    const s = c ? notes.get(c.b.id)?.score : null;
    return s && s > 0 ? s : null;
  };
  const t = buildToday(index, index.now, { staff: !vendeur, priorityOf, overdueInvoices: after ? { n: after.overdueCount, cents: after.overdueCents } : null });
  return (
    <>
      {sp.acces === "refuse" ? <AccessNotice /> : null}
      <TodayView t={t} receivable={after ? { cents: after.receivableCents, n: after.receivableCount } : null} />
      {vendeur ? <MaCarte session={session} /> : null}
    </>
  );
}
