"use client";
import { useRouter } from "next/navigation";
import type { ComponentProps } from "react";
import { ThermoMatchResults } from "../_components/ThermoMatchResults";
import { CorrigeStrip } from "../_components/Corrige";
import { ShareResultsButton } from "@/components/thermomatch/ShareResultsButton";
import { saveProjectDraft, thermoMatchAnswersToProjectDraft } from "@/lib/project/project-draft";
import type { QuestionnaireAnswers } from "@/lib/thermomatch/answers";
import type { Recommendation } from "@/lib/thermomatch/recommend";

const STORAGE_KEY = "thermomatch-answers";

type ResultsSummary = ComponentProps<typeof ThermoMatchResults>["summaryContext"];

export function SharedResults({ answers, results, summaryContext }: { answers: QuestionnaireAnswers; results: Recommendation["results"]; summaryContext: Recommendation["summaryContext"] }) {
  // Même objet que celui renvoyé par l'API au parcours normal ; le composant le type de façon plus lâche.
  const summary = summaryContext as unknown as ResultsSummary;
  const router = useRouter();

  function requestQuote(candidate: Recommendation["results"][number]) {
    const draft = thermoMatchAnswersToProjectDraft(Object.fromEntries(Object.entries(answers).filter(([, v]) => v !== undefined)) as Record<string, string | string[]>, true);
    if (candidate?.product) {
      draft.desiredSystem = {
        ...draft.desiredSystem,
        systemType: candidate.product.systemType,
        selectedModelId: candidate.product.id,
        selectedBrandName: candidate.product.brand,
      };
    }
    saveProjectDraft(draft);
    router.push("/soumission?source=thermomatch");
  }

  function retry() {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ answers, step: 0 }));
    } catch {
      /* stockage indisponible : le questionnaire repart de zéro */
    }
    router.push("/trouver-ma-thermopompe");
  }

  return (
    <div className="w-full">
      <ThermoMatchResults results={results} summaryContext={summary} onSelectResult={requestQuote} onRetry={retry} />
      {/* Dernière ligne du corrigé : le lien à partager (place gardée pour la barre fixe sur mobile). */}
      <CorrigeStrip className="pb-28 pt-2 lg:pb-20">
        <ShareResultsButton answers={answers} tone="light" />
      </CorrigeStrip>
    </div>
  );
}
