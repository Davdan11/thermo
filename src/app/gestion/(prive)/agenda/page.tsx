/* Agenda des installations (volet C) : jour, semaine, mois ; filtres par installateur et par région ; jobs sans date
   « À céduler ». ?vue=jour|semaine|mois&date=AAAA-MM-JJ&installateur=<id>|aucun&region=<code>. Tout est calculé sur le
   serveur ; la page ne reçoit que prénoms et initiales, villes, machines et installateurs. */
import type { Metadata } from "next";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { agendaView } from "@/lib/gestion/agenda/service";
import { AgendaView } from "@/components/gestion/ventes/AgendaView";

export const metadata: Metadata = { title: "Agenda" };

export default async function AgendaPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  await requireAdmin();
  const a = await agendaView(await searchParams);
  return <AgendaView a={a} />;
}
