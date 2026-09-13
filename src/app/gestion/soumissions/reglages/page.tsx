import type { Metadata } from "next";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { settingsChecks } from "@/lib/soumissions/checklist";
import { salesStages } from "@/lib/soumissions/pipedrive-sync";
import { readSettings } from "@/lib/soumissions/store";
import { SettingsForm } from "@/components/gestion/soumissions/SettingsForm";

export const metadata: Metadata = { title: "Réglages des soumissions" };
export const dynamic = "force-dynamic";

export default async function ReglagesPage() {
  await requireAdmin();
  const [settings, stages] = await Promise.all([readSettings(), salesStages()]);
  return <SettingsForm initial={settings} checks={settingsChecks(settings)} stages={stages.ok ? stages.stages : []} stagesError={stages.ok ? null : stages.error} />;
}
