/* ==================================================================
   Conformité C1 — /chantier/[jeton]/avenant : l'installateur prépare
   un avenant depuis sa page de chantier (condition imprévue, travail
   ajouté ou retranché, prix avant taxes, effet sur l'échéancier) et
   l'approuve à la création. Le client le signe AVANT l'exécution :
   aucun extra sans avenant signé.
   ================================================================== */
import type { Metadata } from "next";
import { headers } from "next/headers";
import { Clock, Link2Off } from "lucide-react";
import { moneyFr } from "@/lib/contrats/format";
import { contratLimits } from "@/lib/contrats/limits";
import { fieldContract } from "@/lib/contrats/service";
import { AVENANT_STATUS_LABELS } from "@/lib/contrats/types";
import { ipFromHeaders } from "@/lib/gestion/rate-limit";
import { Foot, Mark, Plain } from "@/components/partenaires/PublicBits";
import "@/components/contrats/contrat.css";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Avenant" };

export default async function AvenantPage({ params, searchParams }: { params: Promise<{ token: string }>; searchParams: Promise<{ r?: string; e?: string }> }) {
  const { token } = await params;
  const { r, e } = await searchParams;
  if (!contratLimits.view.hit(ipFromHeaders(await headers()))) return <Plain icon={<Clock size={26} />} title="Trop de visites" text="Réessayez dans quelques minutes." />;
  const fc = await fieldContract(token);
  if (!fc) return <Plain icon={<Link2Off size={26} />} title="Aucun contrat signé pour ce chantier" text="Un avenant suppose un contrat signé par le client. Communiquez avec nous." />;
  const done = fc.jobStatus === "termine" || fc.jobStatus === "annule";
  return (
    <main className="pp ct-app">
      <div className="pp-wrap" style={{ paddingTop: 20 }}>
        <Mark sub="Avenant" />
        <section className="pp-sheet pp-pad pp-rise" style={{ marginTop: 16 }}>
          <p className="pp-eyebrow">Contrat {fc.contractNumber} · total actuel {moneyFr(fc.totalCents)}</p>
          <h1 className="pp-section-title">
            Préparer un avenant <em>avant les travaux</em>
          </h1>
          <p className="pp-lead">Aucun extra sans avenant signé par le client AVANT l’exécution. Le client reçoit l’avenant par courriel et par texto ; rien n’est fait ni facturé avant sa signature.</p>
          {r === "ok" ? <p className="pp-alert pp-alert--ok">Avenant envoyé au client pour signature.</p> : null}
          {e ? <p className="pp-alert">{decodeURIComponent(e).slice(0, 400)}</p> : null}
          {done ? (
            <p className="pp-alert pp-alert--warn">Les travaux sont terminés : un avenant ne peut plus précéder l’exécution.</p>
          ) : (
            <form method="post" action={`/chantier/${encodeURIComponent(token)}/avenant/creer`} className="pp-form">
              <div className="pp-field">
                <label className="pp-label" htmlFor="reason">Condition imprévue ou raison</label>
                <input id="reason" name="reason" className="pp-input" required minLength={3} maxLength={600} />
              </div>
              <div className="pp-row pp-row--2">
                <div className="pp-field">
                  <label className="pp-label" htmlFor="added">Travail ajouté</label>
                  <textarea id="added" name="added" className="pp-textarea" rows={3} maxLength={1000} />
                </div>
                <div className="pp-field">
                  <label className="pp-label" htmlFor="removed">Travail retranché</label>
                  <textarea id="removed" name="removed" className="pp-textarea" rows={3} maxLength={1000} />
                </div>
              </div>
              {[1, 2, 3].map((i) => (
                <div key={i} className="pp-row pp-row--2">
                  <input name={`l${i}_label`} className="pp-input" placeholder={`Ligne ${i} : description`} maxLength={160} aria-label={`Ligne ${i}`} />
                  <span style={{ display: "flex", gap: 8, alignItems: "center" }}>
                    <input name={`l${i}_amount`} className="pp-input" inputMode="decimal" placeholder="Prix avant taxes" aria-label="Prix avant taxes" />
                    <label className="pp-check" style={{ minHeight: 0 }}>
                      <input type="checkbox" name={`l${i}_minus`} value="1" /> <span>retrait</span>
                    </label>
                  </span>
                </div>
              ))}
              <div className="pp-field">
                <label className="pp-label" htmlFor="schedule">Effet sur l’échéancier</label>
                <input id="schedule" name="schedule" className="pp-input" required maxLength={300} placeholder="« aucun » au besoin" />
              </div>
              <div className="pp-row pp-row--2">
                <input name="name" className="pp-input" required placeholder="Votre prénom et nom" maxLength={120} aria-label="Prénom et nom" />
                <input name="title" className="pp-input" required placeholder="Titre" maxLength={80} aria-label="Titre" />
              </div>
              <label className="pp-check">
                <input type="checkbox" name="authorized" value="1" required />
                <span>Je suis autorisé à signer pour {fc.installerName} et j’approuve cet avenant.</span>
              </label>
              <button type="submit" className="pp-btn pp-btn--primary pp-btn--lg pp-btn--block">Approuver et envoyer au client</button>
            </form>
          )}
        </section>
        {fc.avenants.length ? (
          <section className="pp-sheet pp-pad" style={{ marginTop: 16 }}>
            <h2 className="pp-section-title" style={{ fontSize: 20 }}>Avenants de ce contrat</h2>
            {fc.avenants.map((a) => (
              <p key={a.id} className="pp-lead">
                <b>n° {a.number}</b> · {AVENANT_STATUS_LABELS[a.status]} · {moneyFr(a.priceBeforeTaxCents)} avant taxes · nouveau total {moneyFr(a.newTotalCents)}
              </p>
            ))}
          </section>
        ) : null}
        <p style={{ marginTop: 16 }}>
          <a className="pp-btn pp-btn--ghost" href={`/chantier/${encodeURIComponent(token)}`}>Retour au chantier</a>
        </p>
        <Foot />
      </div>
    </main>
  );
}
