import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { todayIn } from "@/lib/soumissions/dates";
import { draftOf, QUOTE_ID_RE } from "@/lib/soumissions/quote";
import { CURRENT_RATES, loadQuote } from "@/lib/soumissions/service";
import { QuoteBuilder } from "@/components/gestion/soumissions/QuoteBuilder";

export const metadata: Metadata = { title: "Modifier la soumission" };
export const dynamic = "force-dynamic";

export default async function ModifierPage({ params }: { params: Promise<{ id: string }> }) {
  await requireAdmin();
  const { id } = await params;
  if (!QUOTE_ID_RE.test(id)) notFound();
  const data = await loadQuote(id);
  if (!data) notFound();
  const draft = draftOf(data.quote);
  if (!draft) redirect(`/gestion/soumissions/${id}?msg=${encodeURIComponent("Cette version a été envoyée : créez une nouvelle version pour la modifier.")}`);
  return (
    <QuoteBuilder
      quoteId={data.quote.id}
      number={data.quote.number}
      version={draft.v}
      initial={draft.content}
      internalNotes={data.quote.internalNotes}
      settings={data.settings}
      today={todayIn()}
      rates={CURRENT_RATES}
    />
  );
}
