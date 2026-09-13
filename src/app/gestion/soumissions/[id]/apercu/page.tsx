/* Aperçu d'une version, tel que le client la voit (sans suivi de consultation ni formulaire actif). */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { todayIn } from "@/lib/soumissions/dates";
import { buildDocument, currentVersion, draftOf, effectiveStatus, latestSent, QUOTE_ID_RE, versionNumber } from "@/lib/soumissions/quote";
import { loadQuote } from "@/lib/soumissions/service";
import { defaultSelection } from "@/lib/soumissions/totals";
import { QuoteDocumentView } from "@/components/gestion/soumissions/document/QuoteDocumentView";

export const metadata: Metadata = { title: "Aperçu de la soumission" };
export const dynamic = "force-dynamic";

export default async function ApercuPage({ params, searchParams }: { params: Promise<{ id: string }>; searchParams: Promise<{ v?: string }> }) {
  await requireAdmin();
  const { id } = await params;
  const { v } = await searchParams;
  if (!QUOTE_ID_RE.test(id)) notFound();
  const data = await loadQuote(id);
  if (!data) notFound();
  const q = data.quote;
  const version = (v ? versionNumber(q, Number(v)) : undefined) ?? draftOf(q) ?? latestSent(q) ?? currentVersion(q);
  const today = todayIn();
  const doc = buildDocument(q, version, data.settings, data.photos);
  const a = version.acceptance;
  return (
    <div className="sq-doc">
      <div className="sq-preview-bar">
        <span>
          <strong>Aperçu, version {version.v}</strong> · {version.status === "brouillon" ? "brouillon : l’identité et les textes viennent des réglages actuels, figés à l’envoi." : a ? "version acceptée : instantané figé." : "document figé à l’envoi."}
        </span>
        <Link href={`/gestion/soumissions/${q.id}`} className="g-btn g-btn--quiet"><ArrowLeft size={16} aria-hidden /> Retour à la fiche</Link>
      </div>
      <QuoteDocumentView
        doc={doc}
        mode="apercu"
        status={effectiveStatus(version, today)}
        canRespond={false}
        asOf={a ? a.at.slice(0, 10) : today}
        initialSelection={a ? a.snapshot.selection : defaultSelection(doc.content.lines)}
        contentHash={version.contentHash ?? ""}
        photoBase="/gestion/soumissions/photo/"
        action={null}
        beaconUrl={null}
        acceptance={a ? { at: a.at, typedName: a.typedName, snapshotHash: a.snapshotHash, totalCents: a.totalCents } : null}
        refusal={version.refusal ? { at: version.refusal.at } : null}
        replacedBy={null}
        flash={null}
      />
    </div>
  );
}
