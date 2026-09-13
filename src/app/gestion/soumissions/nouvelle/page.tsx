import type { Metadata } from "next";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { todayIn } from "@/lib/soumissions/dates";
import { emptyContent } from "@/lib/soumissions/defaults";
import { CURRENT_RATES } from "@/lib/soumissions/service";
import { readSettings } from "@/lib/soumissions/store";
import { QuoteBuilder } from "@/components/gestion/soumissions/QuoteBuilder";

export const metadata: Metadata = { title: "Nouvelle soumission" };
export const dynamic = "force-dynamic";

export default async function NouvellePage() {
  await requireAdmin();
  const settings = await readSettings();
  const today = todayIn();
  return <QuoteBuilder quoteId={null} number={null} version={1} initial={emptyContent(settings, today)} internalNotes="" settings={settings} today={today} rates={CURRENT_RATES} />;
}
