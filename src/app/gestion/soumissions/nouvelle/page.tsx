import type { Metadata } from "next";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { clientPrefill } from "@/lib/gestion/crm/service";
import { todayIn } from "@/lib/soumissions/dates";
import { emptyContent } from "@/lib/soumissions/defaults";
import { CURRENT_RATES } from "@/lib/soumissions/service";
import { readSettings } from "@/lib/soumissions/store";
import { QuoteBuilder } from "@/components/gestion/soumissions/QuoteBuilder";

export const metadata: Metadata = { title: "Nouvelle soumission" };
export const dynamic = "force-dynamic";

/* ?client=<id> (fiche client) : les coordonnées du client sont les valeurs initiales du créateur (rendues au serveur). */
export default async function NouvellePage({ searchParams }: { searchParams: Promise<{ client?: string }> }) {
  await requireAdmin();
  const { client } = await searchParams;
  const [settings, pre] = await Promise.all([readSettings(), client ? clientPrefill(client) : Promise.resolve(null)]);
  const today = todayIn();
  const initial = emptyContent(settings, today);
  if (pre) initial.client = { ...initial.client, firstName: pre.firstName, lastName: pre.lastName, email: pre.email, phone: pre.phone, address: pre.address, city: pre.city, postalCode: pre.postalCode };
  return <QuoteBuilder quoteId={null} number={null} version={1} initial={initial} internalNotes="" settings={settings} today={today} rates={CURRENT_RATES} />;
}
