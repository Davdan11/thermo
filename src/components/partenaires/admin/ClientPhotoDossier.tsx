/* Dossier photo d'un client (fiche client du CRM) : chantiers de ses jobs — ce qui a été installé, où, plaques
   signalétiques, numéros de série, signature. Composant serveur ; la page appelante a vérifié la session. */
import Link from "next/link";
import { Card } from "@/components/gestion/kit/Card";
import { longDateTime } from "@/lib/gestion/partenaires/format";
import { clientPhotoDossier } from "@/lib/gestion/terrain/service";
import { PhotoGrid } from "./bits";
import "./partenaires.css";

export async function ClientPhotoDossier({ jobIds }: { jobIds: string[] }) {
  const groups = await clientPhotoDossier(jobIds);
  if (!groups.length) return null;
  return (
    <Card title="Dossier photo" sub="Photos de chantier, plaques signalétiques et numéros de série, retrouvables en tout temps.">
      <div className="cr-stack">
        {groups.map((g) => (
          <div key={g.jobId}>
            <p className="k-eyebrow" style={{ marginBottom: 6 }}>
              <Link href={`/gestion/jobs/${g.jobId}#chantier`} style={{ color: "inherit" }}>
                Job n° {g.jobNumber}
              </Link>
              {g.closedAt ? ` · terminé le ${longDateTime(g.closedAt)}` : " · en cours"}
            </p>
            <p className="pa-serials" style={{ margin: "0 0 8px" }}>
              {[...g.serials.outdoor.map((s) => `ext. ${s}`), ...g.serials.indoor.map((s) => `int. ${s}`)].map((s) => (
                <code key={s}>{s}</code>
              ))}
              {g.signature ? <span className="g-hint"> · signé par {g.signature.name}</span> : null}
            </p>
            <PhotoGrid photos={g.photos} />
          </div>
        ))}
      </div>
    </Card>
  );
}
