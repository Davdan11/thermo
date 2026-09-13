/* Pipeline (refonte R2) : le vrai parcours du client en 12 étapes, calculées à partir des événements (contrat C1,
   job, commission, suivi), plus « Perdu ». Deux vues : par étape, ou par « qui doit agir ». Filtres vendeur, région,
   montant. L'étape manuelle d'origine reste : glisser une carte (bureau) ou « Déplacer… » (clavier, téléphone). */
import type { Metadata } from "next";
import Link from "next/link";
import { requireUser } from "@/lib/gestion/auth/dal";
import { loadCrmIndex } from "@/lib/gestion/crm/service";
import { buildPipelineView } from "@/lib/gestion/crm/pipeline-parcours";
import { isJourneyState, STEP_OF_LEGACY, type JourneyState } from "@/lib/gestion/crm/parcours";
import { scopedIndex } from "@/lib/gestion/equipe/scope"; // Chantier V : un vendeur ne voit que ses clients
import { listMembers } from "@/lib/gestion/equipe/members";
import { isStage } from "@/lib/gestion/crm/types";
import { dollars, plural } from "@/components/gestion/kit/format";
import { PipelineBoard } from "@/components/gestion/crm/PipelineBoard";
import { ForecastPanel } from "@/components/gestion/ventes/Forecast";
import { Reveal } from "@/components/gestion/Reveal";

export const metadata: Metadata = { title: "Pipeline" };

export default async function PipelinePage({ searchParams }: { searchParams: Promise<{ etape?: string; vue?: string }> }) {
  const session = await requireUser(); // Chantier V
  const vendeur = session.role === "vendeur";
  const { etape, vue } = await searchParams;
  const index = vendeur ? await scopedIndex(session) : await loadCrmIndex();
  const v = buildPipelineView(index);
  // Filtre « vendeur » : propriétaire et adjoints seulement (un vendeur ne voit que les siens, sans nom d'un autre).
  const vendors = vendeur ? [] : (await listMembers().catch(() => [])).filter((m) => m.role === "vendeur" && m.status === "actif").map((m) => ({ id: m.id, name: m.name || m.email.split("@")[0] }));
  // ?etape= accepte une étape du parcours ou une étape d'origine (anciens liens de l'accueil).
  const focus: JourneyState | null = isJourneyState(etape) ? etape : isStage(etape) ? STEP_OF_LEGACY[etape] : null;
  const mine = v.actors.find((a) => a.actor === "proprietaire");
  const pipedriveEnabled = Object.values(index.settings.pipedriveStageMap).some((x) => typeof x === "number");
  return (
    <>
      <Reveal className="k-pagehead">
        <div>
          <p className="k-eyebrow">Travail</p>
          <h1 className="k-h1">
            Le <em>pipeline</em>
          </h1>
          <p className="k-lead">
            {plural(v.active.n, "dossier en cours", "dossiers en cours")}
            {v.active.cents ? ` · ${dollars(v.active.cents)}` : ""}
            {mine?.n ? `, dont ${mine.n} où c’est à vous d’agir` : ""}. L’étape avance d’elle-même (appel, envoi, ouverture, « va de l’avant », approbation, signature, date, fin de chantier, commission, suivi).
          </p>
          <p className="k-lead" style={{ marginTop: 6 }}>
            <Link href="/gestion/pertes">Pourquoi on perd</Link>
            {session.role === "proprietaire" ? (
              <>
                {" · "}
                <Link href="/gestion/reglages/etapes">Réglages des étapes</Link>
              </>
            ) : null}
          </p>
        </div>
      </Reveal>
      <PipelineBoard view={v} vendors={vendors} focus={focus} initialMode={vue === "qui" ? "qui" : "etapes"} pipedriveEnabled={pipedriveEnabled} />
      {/* Volet C : prévision pondérée par étape (probabilités réglables dans Réglages), inchangée : les étapes 5 à 7 du
          parcours y comptent comme « Soumission ouverte ». Chantier V : toute l'entreprise, donc pas pour un vendeur. */}
      {!vendeur ? (
        <div style={{ marginTop: 20 }}>
          <ForecastPanel />
        </div>
      ) : null}
    </>
  );
}
