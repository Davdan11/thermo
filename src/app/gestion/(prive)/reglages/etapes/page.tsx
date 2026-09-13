/* Réglages des étapes du parcours (refonte R2) : noms affichés, délais d'alerte, escalade par texto, correspondance
   avec les probabilités de la prévision existante (volet C). Propriétaire seulement. */
import type { Metadata } from "next";
import Link from "next/link";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { stageSettingsView } from "@/lib/gestion/crm/parcours-service";
import { Card } from "@/components/gestion/kit/Card";
import { StageSettingsForm } from "@/components/gestion/crm/StageSettingsForm";
import { Reveal } from "@/components/gestion/Reveal";

export const metadata: Metadata = { title: "Étapes du parcours" };

export default async function EtapesPage() {
  await requireAdmin();
  const view = await stageSettingsView();
  return (
    <div className="g-main--narrow" style={{ margin: "0 auto" }}>
      <Reveal className="k-pagehead">
        <div>
          <p className="k-eyebrow">Réglages</p>
          <h1 className="k-h1">
            Étapes du <em>parcours</em>
          </h1>
          <p className="k-lead">
            Les 12 étapes se calculent d’elles-mêmes à partir des événements (jamais saisies, sauf l’étape manuelle). Ici : leur nom, le délai qui déclenche une alerte et la probabilité utilisée par la note de priorité. Les probabilités elles-mêmes se règlent dans <Link href="/gestion/reglages#prevision">Réglages → Prévision</Link>.
          </p>
        </div>
      </Reveal>
      <Card>
        <StageSettingsForm view={view} />
      </Card>
      {view.settings.updatedAt ? (
        <p className="g-hint" style={{ marginTop: 12 }}>
          Modifié le {new Date(view.settings.updatedAt).toLocaleString("fr-CA", { timeZone: "America/Toronto", dateStyle: "long", timeStyle: "short" })}
          {view.settings.updatedBy ? ` par ${view.settings.updatedBy}` : ""}.
        </p>
      ) : null}
    </div>
  );
}
