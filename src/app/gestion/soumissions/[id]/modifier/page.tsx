import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { loadContractorOptions } from "@/lib/soumissions/contractors";
import { todayIn } from "@/lib/soumissions/dates";
import { readMemory } from "@/lib/soumissions/memory-store"; // Chantier D
import { draftOf, QUOTE_ID_RE } from "@/lib/soumissions/quote";
import { CURRENT_RATES, listTemplates, loadQuote } from "@/lib/soumissions/service";
import { QuoteBuilder } from "@/components/gestion/soumissions/QuoteBuilder";

export const metadata: Metadata = { title: "Modifier la soumission" };
export const dynamic = "force-dynamic";

export default async function ModifierPage({ params, searchParams }: { params: Promise<{ id: string }>; searchParams: Promise<{ copie?: string }> }) {
  await requireAdmin();
  const { id } = await params;
  const { copie } = await searchParams;
  if (!QUOTE_ID_RE.test(id)) notFound();
  const data = await loadQuote(id);
  if (!data) notFound();
  const draft = draftOf(data.quote);
  if (!draft) redirect(`/gestion/soumissions/${id}?msg=${encodeURIComponent("Cette version a été envoyée : créez une nouvelle version pour la modifier.")}`);
  // Chantier D : derniers choix du propriétaire, pour les têtes ajoutées au plan.
  const [contractors, templates, memory] = await Promise.all([loadContractorOptions(new Date(), draft.contractorId ?? null), listTemplates(), readMemory()]);
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
      contractors={contractors}
      contractorId={draft.contractorId ?? null}
      clientId={data.quote.clientId ?? null}
      templates={templates}
      copy={copie === "autre" ? "autre" : copie ? "meme" : null}
      memory={memory}
    />
  );
}
