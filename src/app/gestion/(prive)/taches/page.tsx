/* À faire : tâches automatiques (demandes sans réponse, soumissions sans suite, jobs sans preneur, textos non lus,
   soumissions qui expirent) et tâches ajoutées à la main. En retard, aujourd'hui, à venir. */
import type { Metadata } from "next";
import { requireUser } from "@/lib/gestion/auth/dal";
import { tasksView } from "@/lib/gestion/crm/service";
import { scopedIndex } from "@/lib/gestion/equipe/scope"; // Chantier V : un vendeur ne voit que ses tâches
import { CLIENT_ID_RE } from "@/lib/gestion/crm/types";
import { Card, SectionHeader } from "@/components/gestion/kit/Card";
import { EmptyState } from "@/components/gestion/kit/EmptyState";
import { plural } from "@/components/gestion/kit/format";
import { TaskForm } from "@/components/gestion/crm/forms";
import { TaskList } from "@/components/gestion/crm/TaskList";
import { Reveal } from "@/components/gestion/Reveal";
import { ComplexTasksSection } from "@/components/gestion/ventes/ComplexTasks";

export const metadata: Metadata = { title: "À faire" };

export default async function TachesPage({ searchParams }: { searchParams: Promise<{ nouvelle?: string; client?: string }> }) {
  const session = await requireUser(); // Chantier V
  const index = await scopedIndex(session);
  const sp = await searchParams;
  const v = await tasksView(index);
  const clientId = sp.client && CLIENT_ID_RE.test(sp.client) ? sp.client : null;
  const c = clientId ? index.byId.get(clientId) : undefined;
  const who = c ? `${c.b.firstName || "Sans nom"}${c.b.city ? ` · ${c.b.city}` : ""}` : null;
  const today = v.overdue.length + v.today.length;

  return (
    <>
      <Reveal className="k-pagehead">
        <div>
          <p className="k-eyebrow">Travail</p>
          <h1 className="k-h1">
            À faire <em>{today ? "aujourd’hui" : "bientôt"}</em>
          </h1>
          <p className="k-lead">
            {today ? `${plural(today, "tâche", "tâches")} pour aujourd’hui${v.overdue.length ? `, dont ${v.overdue.length} en retard` : ""}. ` : "Rien pour aujourd’hui. "}
            {v.upcoming.length ? `${plural(v.upcoming.length, "autre prévue", "autres prévues")} plus tard.` : ""}
          </p>
        </div>
      </Reveal>

      <Card title="Nouvelle tâche" sub={who ? `Pour ${who}` : "Un rappel, un suivi, une chose à ne pas oublier."} tone={sp.nouvelle ? "paper" : "cream"}>
        <TaskForm clientId={c?.b.id ?? null} autoFocus={sp.nouvelle === "1"} />
      </Card>

      <SectionHeader n="01" title="En retard" lead={v.overdue.length ? "À régler en premier : chaque minute compte pour un client qui attend." : undefined} />
      <TaskList tasks={v.overdue} empty={<EmptyState compact title="Rien en retard" body="Tout ce qui devait être fait l’a été." />} />

      <SectionHeader n="02" title="Aujourd’hui" />
      <TaskList tasks={v.today} empty={<EmptyState compact title="Rien d’autre aujourd’hui" body="Les nouvelles demandes, les textos et les soumissions à relancer s’ajoutent ici d’eux-mêmes." />} />

      <SectionHeader n="03" title="À venir" />
      <TaskList tasks={v.upcoming} empty={<EmptyState compact title="Rien de prévu" body="Ajoutez une tâche ci-dessus, ou reportez-en une pour la retrouver ici." />} />

      {/* Volet C : tâches à étapes (listes de contrôle, modèles) et création rapide. Chantier V : pas pour les vendeurs
          (liste de toute l'entreprise, actions réservées). */}
      {session.role !== "vendeur" ? <ComplexTasksSection n="04" /> : null}
    </>
  );
}
