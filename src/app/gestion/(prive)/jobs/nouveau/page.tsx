import type { Metadata } from "next";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { brandOptions } from "@/lib/gestion/catalog";
import { JobForm } from "@/components/gestion/JobForm";
import { Reveal } from "@/components/gestion/Reveal";

export const metadata: Metadata = { title: "Nouveau job" };

export default async function NewJobPage() {
  await requireAdmin();
  return (
    <div className="g-main--narrow" style={{ margin: "0 auto" }}>
      <Reveal className="g-head">
        <div>
          <p className="g-eyebrow">Saisie</p>
          <h1 className="g-h1">Nouveau job</h1>
          <p className="g-lead">Le code postal place le job sur la carte et devine la région. L’installateur ne voit le nom, le téléphone et l’adresse du client qu’après avoir accepté.</p>
        </div>
      </Reveal>
      <JobForm brands={brandOptions()} />
    </div>
  );
}
