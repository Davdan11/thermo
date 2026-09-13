/* ==================================================================
   /service/[jeton] — « Un problème ? » : le client signale un problème
   avec son installation (photos comprises), suit ses demandes et
   confirme en un clic que c'est réglé. GET en lecture seule.
   ================================================================== */
import type { Metadata } from "next";
import { headers } from "next/headers";
import { Check, Clock, Link2Off } from "lucide-react";
import { longDate } from "@/lib/gestion/partenaires/format";
import { voletLimits } from "@/lib/gestion/partenaires/limits";
import { ipFromHeaders } from "@/lib/gestion/rate-limit";
import { getServiceView } from "@/lib/gestion/sav/service";
import { Arcs, Foot, Mark, Plain } from "@/components/partenaires/PublicBits";
import { ServiceReportForm } from "@/components/partenaires/ServiceReportForm";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Un problème ?" };

const ERRORS: Record<string, string> = {
  description: "Décrivez le problème en quelques mots.",
  photo: "Une photo n’a pas pu être lue : JPEG, PNG ou WebP, 12 Mo au plus.",
  erreur: "Rien n’a été envoyé. Réessayez, ou appelez-nous.",
};

export default async function ServicePage({ params, searchParams }: { params: Promise<{ token: string }>; searchParams: Promise<{ r?: string; n?: string; e?: string }> }) {
  const { token } = await params;
  const { r, n, e } = await searchParams;
  if (!voletLimits.serviceView.hit(ipFromHeaders(await headers()))) return <Plain icon={<Clock size={26} />} title="Trop de visites" text="Réessayez dans quelques minutes." />;
  const view = await getServiceView(token);
  if (!view) return <Plain icon={<Link2Off size={26} />} title="Ce lien n’est pas valide" text="Vérifiez qu’il est complet, ou appelez-nous : nous nous occupons de vous." />;
  const base = `/service/${encodeURIComponent(token)}`;

  return (
    <main className="pp">
      <header className="pp-cover">
        <Arcs />
        <div className="pp-cover__in">
          <Mark sub="Service après-vente" />
          <p className="pp-eyebrow pp-rise">
            Installation n° {view.jobNumber}
            {view.equipment ? ` · ${view.equipment}` : ""}
          </p>
          <h1 className="pp-title pp-rise pp-rise--2">
            Un problème ?<em>Dites-le-nous, {view.firstName || "on s’en occupe"}.</em>
          </h1>
          <div className="pp-meta pp-rise pp-rise--3">
            {view.installedOn ? <span>Installée le {longDate(view.installedOn.length === 10 ? `${view.installedOn}T12:00:00Z` : view.installedOn)}</span> : null}
            <span>Réponse rapide, photos bienvenues</span>
          </div>
        </div>
      </header>

      <div className="pp-wrap">
        {r === "envoye" ? (
          <p className="pp-alert pp-alert--ok pp-rise" role="status" style={{ marginTop: 16 }}>
            Merci, votre demande{n ? ` n° ${n}` : ""} est bien reçue. Nous vous revenons rapidement.
          </p>
        ) : r === "merci" ? (
          <p className="pp-alert pp-alert--ok pp-rise" role="status" style={{ marginTop: 16 }}>
            Merci pour votre réponse.
          </p>
        ) : e ? (
          <p className="pp-alert pp-rise" role="alert" style={{ marginTop: 16 }}>
            {ERRORS[e] ?? ERRORS.erreur}
          </p>
        ) : null}

        {view.tickets.length ? (
          <section className="pp-sheet pp-pad pp-rise" style={{ marginTop: 16 }} aria-labelledby="suivi">
            <h2 id="suivi" className="pp-section-title" style={{ fontSize: 22 }}>
              Vos demandes
            </h2>
            {view.tickets.map((t) => (
              <article key={t.id} className="pp-art">
                <p className="pp-art__n">
                  Demande n° {t.number} · {t.statusLabel}
                </p>
                <p className="pp-para" style={{ gridTemplateColumns: "1fr" }}>
                  <span>{t.description}</span>
                </p>
                {t.resolution ? (
                  <p className="pp-alert pp-alert--info">
                    <b>Ce qui a été fait :</b> {t.resolution}
                  </p>
                ) : null}
                {t.canConfirm ? (
                  <form action={`${base}/satisfaction`} method="post" className="pp-form" style={{ marginTop: 12 }}>
                    <input type="hidden" name="ticketId" value={t.id} />
                    <p className="pp-label">Est-ce réglé à votre satisfaction ?</p>
                    <textarea name="note" className="pp-textarea" style={{ minHeight: 70 }} maxLength={1000} placeholder="Un commentaire ? (facultatif)" />
                    <div className="pp-row pp-row--2">
                      <button type="submit" name="satisfied" value="1" className="pp-btn pp-btn--ok pp-btn--lg">
                        <Check size={18} aria-hidden /> Oui, c’est réglé
                      </button>
                      <button type="submit" name="satisfied" value="0" className="pp-btn pp-btn--ghost pp-btn--lg">
                        Non, pas encore
                      </button>
                    </div>
                  </form>
                ) : t.satisfied === true ? (
                  <p className="pp-hint">Réglé à votre satisfaction. Merci !</p>
                ) : null}
              </article>
            ))}
          </section>
        ) : null}

        <section className="pp-sheet pp-pad pp-rise pp-rise--2" style={{ marginTop: 16 }} aria-labelledby="signaler">
          <h2 id="signaler" className="pp-section-title">
            Signaler <em>un problème</em>
          </h2>
          <p className="pp-lead">Bruit inhabituel, eau qui coule, code d’erreur, télécommande… Décrivez ce que vous voyez ; une photo aide beaucoup.</p>
          <ServiceReportForm action={`${base}/envoyer`} />
        </section>
        <Foot />
      </div>
    </main>
  );
}
