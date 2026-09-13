/* Pipeline : les clients par étape, de la nouvelle demande à l'installation terminée. Glisser une carte (bureau) ou
   « Déplacer… » (clavier, téléphone). L'étape choisie à la main tient jusqu'à ce qu'un événement fasse avancer le client. */
import type { Metadata } from "next";
import { requireUser } from "@/lib/gestion/auth/dal";
import { boardView } from "@/lib/gestion/crm/service";
import { scopedIndex } from "@/lib/gestion/equipe/scope"; // Chantier V : un vendeur ne voit que ses clients
import { isStage } from "@/lib/gestion/crm/types";
import { dollars, plural } from "@/components/gestion/kit/format";
import { PipelineBoard } from "@/components/gestion/crm/PipelineBoard";
import { ForecastPanel } from "@/components/gestion/ventes/Forecast";
import { Reveal } from "@/components/gestion/Reveal";

export const metadata: Metadata = { title: "Pipeline" };

export default async function PipelinePage({ searchParams }: { searchParams: Promise<{ etape?: string }> }) {
  const session = await requireUser(); // Chantier V
  const vendeur = session.role === "vendeur";
  const { etape } = await searchParams;
  const v = await boardView(vendeur ? await scopedIndex(session) : undefined);
  const active = v.columns.filter((c) => c.stage !== "terminee" && c.stage !== "perdue");
  const n = active.reduce((s, c) => s + c.n, 0);
  const cents = active.reduce((s, c) => s + c.cents, 0);
  return (
    <>
      <Reveal className="k-pagehead">
        <div>
          <p className="k-eyebrow">Travail</p>
          <h1 className="k-h1">
            Le <em>pipeline</em>
          </h1>
          <p className="k-lead">
            {plural(n, "client en cours", "clients en cours")}
            {cents ? ` · ${dollars(cents)}` : ""}. L’étape avance d’elle-même (appel, envoi, ouverture, acceptation, job) ; glissez une carte pour la choisir vous-même.
          </p>
        </div>
      </Reveal>
      <PipelineBoard columns={v.columns} focus={isStage(etape) ? etape : null} pipedriveEnabled={v.pipedriveEnabled} />
      {/* Volet C : prévision pondérée par étape (probabilités réglables dans Réglages). Chantier V : toute l'entreprise,
          donc pas pour un vendeur. */}
      {!vendeur ? (
        <div style={{ marginTop: 20 }}>
          <ForecastPanel />
        </div>
      ) : null}
    </>
  );
}
