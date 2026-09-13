/* Réglages du CRM : délais des tâches automatiques et, facultatif, l'étape Pipedrive associée à chaque étape du
   pipeline (désactivé par défaut ; Pipedrive reste en sens unique). */
import type { Metadata } from "next";
import Link from "next/link";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { readCrmSettings } from "@/lib/gestion/crm/service";
import { salesStages } from "@/lib/soumissions/pipedrive-sync";
import { Card } from "@/components/gestion/kit/Card";
import { SettingsForm } from "@/components/gestion/crm/forms";
import { Reveal } from "@/components/gestion/Reveal";
import { VentesReglages } from "@/components/gestion/ventes/VentesReglages";

export const metadata: Metadata = { title: "Réglages" };

export default async function ReglagesPage() {
  await requireAdmin();
  const [settings, stages] = await Promise.all([readCrmSettings(), salesStages()]);
  return (
    <div className="g-main--narrow" style={{ margin: "0 auto" }}>
      <Reveal className="k-pagehead">
        <div>
          <p className="k-eyebrow">Analyse</p>
          <h1 className="k-h1">Réglages</h1>
          <p className="k-lead">
            Les délais qui font apparaître les tâches automatiques. Les réglages des soumissions et des textos sont dans leurs sections : <Link href="/gestion/soumissions/reglages">Soumissions</Link>, <Link href="/gestion/textos/reglages">Textos</Link>.
          </p>
        </div>
      </Reveal>
      <Card>
        <SettingsForm settings={settings} stages={stages} />
      </Card>
      {settings.updatedAt ? (
        <p className="g-hint" style={{ marginTop: 12 }}>
          Modifié le {new Date(settings.updatedAt).toLocaleString("fr-CA", { timeZone: "America/Toronto", dateStyle: "long", timeStyle: "short" })}
          {settings.updatedBy ? ` par ${settings.updatedBy}` : ""}.
        </p>
      ) : null}
      {/* Volet C : radar à occasions, probabilités de la prévision, modèles de tâches. */}
      <VentesReglages />
      {/* Chantier A : tarifs de l'assistant IA et dépenses publicitaires, réglés dans leurs pages. */}
      <Card title="Assistant IA et rentabilité" sub="Réglés dans leurs pages." className="as-reglages">
        <p className="g-hint" style={{ margin: 0 }}>
          Tarifs et journal de l’assistant : <Link href="/gestion/assistant#tarifs">Assistant IA</Link>. Dépenses publicitaires par canal et par mois : <Link href="/gestion/rentabilite">Rentabilité</Link>.
        </p>
      </Card>
    </div>
  );
}
