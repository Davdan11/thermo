import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { brandOptions, modelBySlug } from "@/lib/gestion/catalog";
import { loadJobPage } from "@/lib/gestion/service";
import { JobForm } from "@/components/gestion/JobForm";
import { Reveal } from "@/components/gestion/Reveal";

export const metadata: Metadata = { title: "Modifier le job" };

export default async function EditJobPage({ params }: { params: Promise<{ id: string }> }) {
  await requireAdmin();
  const { id } = await params;
  const data = await loadJobPage(id);
  if (!data) notFound();
  const { job } = data;
  const model = job.modelSlug ? modelBySlug(job.modelSlug) : null;
  return (
    <div className="g-main--narrow" style={{ margin: "0 auto" }}>
      <Reveal className="g-head">
        <div>
          <p className="g-eyebrow">Job n° {job.number}</p>
          <h1 className="g-h1">Modifier le job</h1>
          <p className="g-lead">Les offres déjà envoyées gardent le résumé du moment de l’envoi ; les nouvelles offres prendront ces changements.</p>
        </div>
      </Reveal>
      <JobForm
        brands={brandOptions()}
        initial={{
          id: job.id,
          ...job.client,
          region: job.region ?? "",
          regionGuess: job.regionGuess,
          brand: job.brand ?? "",
          systemType: job.systemType ?? "",
          model: model ? { slug: model.slug, label: model.label } : null,
          capacity: job.capacity,
          desiredDate: job.desiredDate ?? "",
          desiredWindow: job.desiredWindow,
          installerNotes: job.installerNotes,
          internalNotes: job.internalNotes,
          resolvedCity: job.geo?.city ?? null,
        }}
      />
    </div>
  );
}
