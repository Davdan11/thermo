import type { Metadata } from "next";
import { requireUser } from "@/lib/gestion/auth/dal";
import { STAFF } from "@/lib/gestion/equipe/garde"; // Chantier V : propriétaire et adjoints
import { brandOptions } from "@/lib/gestion/catalog";
import { jobPrefill } from "@/lib/gestion/crm/service";
import { JobForm } from "@/components/gestion/JobForm";
import { Reveal } from "@/components/gestion/Reveal";

export const metadata: Metadata = { title: "Nouveau job" };

/* ?client=<id> (fiche client) ou ?soumission=<id> (soumission acceptée) : formulaire pré-rempli au serveur. */
export default async function NewJobPage({ searchParams }: { searchParams: Promise<{ client?: string; soumission?: string }> }) {
  await requireUser({ roles: STAFF }); // Chantier V
  const sp = await searchParams;
  const pre = await jobPrefill({ clientId: sp.client, quoteId: sp.soumission });
  return (
    <div className="g-main--narrow" style={{ margin: "0 auto" }}>
      <Reveal className="k-pagehead">
        <div>
          <p className="k-eyebrow">{pre ? `Pré-rempli depuis ${pre.from}` : "Saisie"}</p>
          <h1 className="k-h1">Nouveau job</h1>
          <p className="k-lead">Le code postal place le job sur la carte et devine la région. L’installateur ne voit le nom, le téléphone et l’adresse du client qu’après avoir accepté.</p>
        </div>
      </Reveal>
      <JobForm brands={brandOptions()} initial={pre?.initial} />
    </div>
  );
}
