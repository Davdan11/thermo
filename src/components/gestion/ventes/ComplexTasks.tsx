/* ==================================================================
   Tâches à étapes (serveur) : lit ses propres données, pour que les
   pages partagées n'aient qu'une ligne à ajouter.
     ComplexTasksCard     fiche client ou job : les tâches rattachées
                          (terminées depuis 30 jours comprises) et la
                          création rapide
     ComplexTasksSection  page À faire : toutes les tâches ouvertes
   ================================================================== */

import { ListChecks } from "lucide-react";
import { complexTasksView } from "@/lib/gestion/ventes/service";
import { Card, SectionHeader } from "../kit/Card";
import { EmptyState } from "../kit/EmptyState";
import { plural } from "../kit/format";
import { ComplexTaskForm } from "./ComplexTaskForm";
import { ComplexTaskList } from "./ComplexTaskList";
import "./ventes.css";

export async function ComplexTasksCard({ clientId, jobId }: { clientId?: string; jobId?: string }) {
  const v = await complexTasksView({ clientId, jobId });
  const open = v.tasks.filter((t) => !t.done).length;
  return (
    <Card title="Tâches à étapes" sub={open ? plural(open, "tâche en cours", "tâches en cours") : "Listes de contrôle, échéances, modèles"}>
      <ComplexTaskList tasks={v.tasks} showClient={!clientId} showJob={!jobId} />
      <details className="vt-cxnew" style={{ marginTop: v.tasks.length ? 14 : 0 }}>
        <summary className="k-btn" style={{ listStyle: "none" }}>
          <ListChecks size={15} aria-hidden /> Nouvelle tâche à étapes
        </summary>
        <div style={{ marginTop: 12 }}>
          <ComplexTaskForm clientId={clientId ?? null} jobId={jobId ?? null} templates={v.templates} />
        </div>
      </details>
    </Card>
  );
}

export async function ComplexTasksSection({ n = "04" }: { n?: string }) {
  const v = await complexTasksView({});
  return (
    <>
      <SectionHeader n={n} title="Tâches à étapes" lead={v.tasks.length ? `${plural(v.tasks.length, "tâche en cours", "tâches en cours")}, l’échéance la plus proche d’abord.` : "Une installation, une soumission commerciale : chaque étape cochée, rien d’oublié."} />
      <div className="cr-split" style={{ alignItems: "start" }}>
        <ComplexTaskList tasks={v.tasks} empty={<EmptyState compact title="Aucune tâche à étapes en cours" body="Créez-en une ici, ou depuis la fiche d’un client ou d’un job." />} />
        <Card title="Nouvelle tâche à étapes" sub="À partir d’un modèle ou de vos propres étapes." tone="cream">
          <ComplexTaskForm templates={v.templates} />
        </Card>
      </div>
    </>
  );
}
