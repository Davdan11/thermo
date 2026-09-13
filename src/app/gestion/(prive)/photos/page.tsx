/* /gestion/photos — file de vérification des photos de chantier : approuver ou signaler (chaque job ou un échantillon). */
import type { Metadata } from "next";
import Link from "next/link";
import { Images } from "lucide-react";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { longDateTime } from "@/lib/gestion/partenaires/format";
import { photoQueue } from "@/lib/gestion/terrain/service";
import { Card } from "@/components/gestion/kit/Card";
import { EmptyState } from "@/components/gestion/kit/EmptyState";
import { Reveal } from "@/components/gestion/Reveal";
import { PhotoGrid } from "@/components/partenaires/admin/bits";
import "@/components/partenaires/admin/partenaires.css";

export const metadata: Metadata = { title: "Photos à vérifier" };

const FILTERS = [
  { id: "a-verifier", label: "À vérifier" },
  { id: "signalees", label: "Signalées" },
  { id: "toutes", label: "Toutes" },
] as const;

export default async function PhotosPage({ searchParams }: { searchParams: Promise<{ f?: string }> }) {
  await requireAdmin();
  const { f } = await searchParams;
  const filter = FILTERS.find((x) => x.id === f)?.id ?? "a-verifier";
  const q = await photoQueue(filter);
  return (
    <>
      <Reveal className="k-pagehead">
        <div>
          <p className="k-eyebrow">Réseau</p>
          <h1 className="k-h1">
            Photos <em>à vérifier</em>
          </h1>
          <p className="k-lead">
            {q.mode === "chaque" ? "Chaque chantier passe ici." : `Un chantier sur ${Math.round(1 / q.rate)} environ, tiré au hasard.`} Une photo signalée compte contre la conformité des photos du partenaire. <Link href="/gestion/partenaires/reglages">Réglages</Link>
          </p>
        </div>
      </Reveal>
      <nav className="k-tabs" aria-label="Filtre" style={{ marginBottom: 18 }}>
        {FILTERS.map((x) => (
          <a key={x.id} href={`/gestion/photos?f=${x.id}`} aria-current={x.id === filter ? "page" : undefined}>
            {x.label}
            {x.id === "a-verifier" && q.pending ? <b> {q.pending}</b> : x.id === "signalees" && q.flagged ? <b> {q.flagged}</b> : null}
          </a>
        ))}
      </nav>
      {q.groups.length ? (
        <div className="cr-stack">
          {q.groups.map((g) => (
            <Card key={g.jobId} title={`Job n° ${g.jobNumber} · ${g.company}`} sub={`${g.city}${g.closedAt ? ` · fermé le ${longDateTime(g.closedAt)}` : " · en cours"}`} action={<Link href={`/gestion/jobs/${g.jobId}#chantier`} className="k-link">Voir le job</Link>}>
              <PhotoGrid photos={g.photos} review />
            </Card>
          ))}
        </div>
      ) : (
        <EmptyState icon={<Images size={20} />} title={filter === "a-verifier" ? "Rien à vérifier" : "Aucune photo"} body="Les photos arrivent depuis les pages de chantier des installateurs." />
      )}
    </>
  );
}
