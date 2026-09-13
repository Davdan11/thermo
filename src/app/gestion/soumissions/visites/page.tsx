/* ==================================================================
   /gestion/soumissions/visites — Chantier D : toutes les visites
   photo à distance (statut, photos, suggestions, date de
   suppression), et les réglages : durée de conservation (12 mois par
   défaut) et durée de validité du lien.
   ================================================================== */
import type { Metadata } from "next";
import Link from "next/link";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { listVisitsAdmin } from "@/lib/visites/service";
import { VisitRowActions, VisitSettingsForm } from "@/components/gestion/visites/VisitAdmin";
import "@/components/gestion/soumissions/photos-client.css";

export const metadata: Metadata = { title: "Photos à distance" };
export const dynamic = "force-dynamic";

const day = (iso: string) => new Date(iso).toLocaleDateString("fr-CA", { day: "numeric", month: "long", year: "numeric", timeZone: "America/Toronto" });

export default async function VisitesPage() {
  await requireAdmin();
  const { rows, settings } = await listVisitsAdmin();
  return (
    <div>
      <div className="g-head">
        <div>
          <p className="g-eyebrow">Créateur de soumissions</p>
          <h1 className="g-h1">Photos à distance</h1>
        </div>
      </div>
      <div className="sq-builder">
        <div>
          <section className="sq-step">
            <div className="sq-step__head">
              <span className="sq-step__n">01</span>
              <div>
                <h2 className="sq-step__title">Visites photo</h2>
                <p className="sq-step__hint">Envoyées depuis le créateur ou la fiche client. Les photos sont privées et supprimées à la fin de la durée de conservation.</p>
              </div>
            </div>
            {rows.length ? (
              rows.map((v, i) => (
                <article key={v.id} id={v.id} className="sq-d-visit" style={{ ["--i" as string]: Math.min(i, 10) }}>
                  <div className="sq-d-visit__head">
                    <strong>{v.name || "Client (supprimé)"}</strong>
                    <span className="sq-d-chip" data-tone={v.status === "recue" ? "ok" : v.status === "ouverte" ? "orange" : v.status === "envoyee" ? undefined : "muted"}>
                      {v.statusLabel}
                    </span>
                    <span className="g-hint" style={{ margin: 0 }}>
                      Demandée le {day(v.createdAt)}
                      {v.submittedAt ? ` · reçue le ${day(v.submittedAt)}` : ""}
                      {v.purgedAt ? ` · supprimée le ${day(v.purgedAt)}` : ` · suppression le ${day(v.purgeAt)}`}
                    </span>
                  </div>
                  {v.photos.length ? (
                    <div className="sq-d-photos" style={{ marginBottom: 8 }}>
                      {v.photos.slice(0, 8).map((ph) => (
                        <a key={ph.id} href={ph.url} target="_blank" rel="noreferrer" className="sq-d-photo" aria-label={`Photo : ${ph.stepLabel}`}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={ph.url} alt="" loading="lazy" />
                        </a>
                      ))}
                    </div>
                  ) : null}
                  <p className="g-hint" style={{ margin: "0 0 8px" }}>
                    {v.photos.length} photo{v.photos.length > 1 ? "s" : ""} · {v.suggestions.length} suggestion{v.suggestions.length > 1 ? "s" : ""} · {v.ai.label}
                    {v.quoteId ? (
                      <>
                        {" · "}
                        <Link href={`/gestion/soumissions/${v.quoteId}/modifier#photos-client`}>soumission</Link>
                      </>
                    ) : null}
                    {v.clientId ? (
                      <>
                        {" · "}
                        <Link href={`/gestion/clients/${v.clientId}`}>fiche client</Link>
                      </>
                    ) : null}
                  </p>
                  {!v.purgedAt ? <VisitRowActions id={v.id} canResend={!v.submittedAt} canRetry={Boolean(v.submittedAt) && v.ai.state !== "fait" && v.ai.state !== "en-cours"} /> : null}
                </article>
              ))
            ) : (
              <p className="g-hint">Aucune visite photo pour l’instant. Dans le créateur, « Demander des photos au client » envoie le lien.</p>
            )}
          </section>
        </div>
        <aside className="sq-aside">
          <div className="sq-card">
            <h2 className="g-h2" style={{ fontSize: 18, marginBottom: 6 }}>
              Réglages
            </h2>
            <VisitSettingsForm initial={settings} />
          </div>
        </aside>
      </div>
    </div>
  );
}
