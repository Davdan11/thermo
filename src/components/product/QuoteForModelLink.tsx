"use client";
/* ==================================================================
   Lien « Obtenir un prix » depuis une fiche : enregistre le modèle
   choisi dans le brouillon de projet (comme ThermoMatch le fait), puis
   ouvre la page de soumission déjà renseignée.
   ================================================================== */
import { useRouter } from "next/navigation";
import { loadProjectDraft, saveProjectDraft, thermoMatchAnswersToProjectDraft } from "@/lib/project/project-draft";
import { track } from "@/lib/analytics/track";

interface Props {
  modelId: string;
  brandName: string;
  systemType: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export function QuoteForModelLink({ modelId, brandName, systemType, className, style, children }: Props) {
  const router = useRouter();

  function onClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    const draft = loadProjectDraft() ?? thermoMatchAnswersToProjectDraft({}, false);
    draft.desiredSystem = { ...draft.desiredSystem, systemType, selectedModelId: modelId, selectedBrandName: brandName };
    saveProjectDraft(draft);
    track("quote_for_model", { model: modelId });
    router.push("/soumission?source=fiche");
  }

  return (
    <a href="/soumission" onClick={onClick} className={className} style={style}>
      {children}
    </a>
  );
}
