import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { requireUser } from "@/lib/gestion/auth/dal";
import { STAFF } from "@/lib/gestion/equipe/garde"; // Chantier V : propriétaire et adjoints
import { brandOptions, modelBySlug } from "@/lib/gestion/catalog";
import { loadJobPage } from "@/lib/gestion/service";
import { JobForm } from "@/components/gestion/JobForm";
import { Reveal } from "@/components/gestion/Reveal";

export const metadata: Metadata = { title: "Modifier le job" };

export default async function EditJobPage({ params }: { params: Promise<{ id: string }> }) {
  await requireUser({ roles: STAFF }); // Chantier V
  const { id } = await params;
  const data = await loadJobPage(id);
  if (!data) notFound();
  const { job } = data;
  const model = job.modelSlug ? modelBySlug(job.modelSlug) : null;
  return (
    <div className="g-main--narrow" style={{ margin: "0 auto" }}>
      <Reveal className="k-pagehead">
        <div>
          <p className="k-eyebrow">Job n° {job.number}</p>
          <h1 className="k-h1">Modifier le job</h1>
          <p className="k-lead">Les offres déjà envoyées gardent le résumé du moment de l’envoi ; les nouvelles offres prendront ces changements.</p>
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
