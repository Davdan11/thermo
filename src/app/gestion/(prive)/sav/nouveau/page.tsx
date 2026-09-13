/* /gestion/sav/nouveau — billet de service créé par le propriétaire (appel du client, visite…). */
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { readGestion } from "@/lib/gestion/store";
import { createTicketAction } from "../../partenaires-actions";
import { Card } from "@/components/gestion/kit/Card";
import { Reveal } from "@/components/gestion/Reveal";
import { ActionForm } from "@/components/partenaires/admin/AdminTools";
import "@/components/partenaires/admin/partenaires.css";

export const metadata: Metadata = { title: "Nouveau billet de service" };

export default async function NewTicketPage({ searchParams }: { searchParams: Promise<{ job?: string }> }) {
  await requireAdmin();
  const { job } = await searchParams;
  const g = await readGestion();
  const jobs = g.jobs.filter((j) => j.status === "termine" || j.status === "planifie" || j.status === "attribue").sort((a, b) => b.number - a.number);
  const selected = jobs.find((j) => j.id === job)?.id ?? "";
  return (
    <div className="g-main--narrow" style={{ margin: "0 auto" }}>
      <Reveal className="k-pagehead">
        <div>
          <Link href="/gestion/sav" className="k-link">
            <ChevronLeft size={15} aria-hidden /> Service après-vente
          </Link>
          <h1 className="k-h1">Nouveau billet</h1>
          <p className="k-lead">Le billet est lié au job : l’installateur d’origine est retrouvé tout seul. Les photos s’ajoutent ensuite, dans le billet.</p>
        </div>
      </Reveal>
      <Card>
        <ActionForm action={createTicketAction} submit="Créer le billet" submitClass="k-btn k-btn--primary k-btn--lg" pending="Création…">
          <div className="g-field">
            <label className="g-label" htmlFor="jobId">
              Job
            </label>
            <select id="jobId" name="jobId" className="g-select" defaultValue={selected}>
              <option value="">Sans job (autre)</option>
              {jobs.map((j) => (
                <option key={j.id} value={j.id}>
                  n° {j.number} · {`${j.client.firstName} ${j.client.lastName}`.trim()} · {j.client.city || j.geo?.city || ""}
                </option>
              ))}
            </select>
          </div>
          <div className="g-field">
            <label className="g-label" htmlFor="description">
              Le problème
            </label>
            <textarea id="description" name="description" className="g-textarea" required minLength={5} maxLength={3000} />
          </div>
          <div className="g-field">
            <label className="g-label" htmlFor="contactPreference">
              Quand joindre le client <small>(facultatif)</small>
            </label>
            <input id="contactPreference" name="contactPreference" className="g-input" maxLength={200} />
          </div>
        </ActionForm>
      </Card>
    </div>
  );
}
