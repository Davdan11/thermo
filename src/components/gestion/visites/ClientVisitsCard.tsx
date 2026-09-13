/* Chantier D — carte « Photos du client » de la fiche client : demandes de visite photo, photos reçues (route
   authentifiée), lien vers la soumission, et « Demander des photos au client ». Serveur. */
import Link from "next/link";
import { Card } from "@/components/gestion/kit/Card";
import { RequestPhotos } from "@/components/gestion/soumissions/RequestPhotos";
import { visitsForAdmin } from "@/lib/visites/service";

const day = (iso: string) => new Date(iso).toLocaleDateString("fr-CA", { day: "numeric", month: "long", year: "numeric", timeZone: "America/Toronto" });

export async function ClientVisitsCard({ clientId, phones, emails, phone, email }: { clientId: string; phones: string[]; emails: string[]; phone: string; email: string }) {
  const visits = await visitsForAdmin({ clientIds: [clientId], phones, emails }).catch(() => []);
  return (
    <Card title="Photos du client" sub={visits.length ? `${visits.length} visite${visits.length > 1 ? "s" : ""} photo` : "Visite à distance par photos"}>
      <RequestPhotos forClient clientId={clientId} phone={phone} email={email} compact />
      {visits.length ? (
        <ul className="cr-linked">
          {visits.slice(0, 4).map((v) => (
            <li key={v.id}>
              <div className="cr-linked__row" style={{ display: "block" }}>
                <strong>{v.statusLabel}</strong>
                <small style={{ display: "block" }}>
                  {v.submittedAt ? `Reçues le ${day(v.submittedAt)} · ${v.photos.length} photo${v.photos.length > 1 ? "s" : ""}` : `Demandée le ${day(v.createdAt)}`}
                  {v.suggestions.length ? ` · ${v.suggestions.length} suggestion${v.suggestions.length > 1 ? "s" : ""}` : ""}
                </small>
                {v.photos.length ? (
                  <span style={{ display: "flex", gap: 4, marginTop: 6 }}>
                    {v.photos.slice(0, 5).map((ph) => (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img key={ph.id} src={ph.url} alt={ph.stepLabel} loading="lazy" style={{ width: 48, height: 48, objectFit: "cover", borderRadius: 8 }} />
                    ))}
                  </span>
                ) : null}
                {v.quoteId ? (
                  <Link href={`/gestion/soumissions/${v.quoteId}/modifier#photos-client`} className="g-link" style={{ fontSize: 13 }}>
                    Ouvrir dans la soumission
                  </Link>
                ) : (
                  <Link href={`/gestion/soumissions/nouvelle?client=${clientId}`} className="g-link" style={{ fontSize: 13 }}>
                    Préparer la soumission
                  </Link>
                )}
              </div>
            </li>
          ))}
        </ul>
      ) : null}
    </Card>
  );
}
