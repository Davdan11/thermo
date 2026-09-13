/* ==================================================================
   Conformité C1 — le document du client, devenu le contrat final au
   nom de l'installateur (après son approbation) : étapes, changements
   par rapport à la soumission, contrat rendu (le même HTML que la
   copie et que l'empreinte), signature en un geste, puis certificat,
   copie imprimable et avenants à signer. Composant serveur.
   ================================================================== */

import { Check, FileText, ShieldAlert, ShieldCheck } from "lucide-react";
import type { ClientParcoursView } from "@/lib/contrats/service";
import { CHANGE_LABELS, CONTRACT_CSS } from "@/lib/contrats/rendu";
import { moneyFr } from "@/lib/contrats/format";
import { formatDateTime } from "@/lib/soumissions/dates";
import { ContractSignForm } from "./ContractSignForm";
import { Stepper } from "./Stepper";
import "./contrat.css";

export interface ContractFlash {
  tone: "ok" | "bad" | "info";
  text: string;
}

export function ContractClientView({ token, view, flash, asOf, error }: { token: string; view: ClientParcoursView; flash: ContractFlash | null; asOf: string; error: string | null }) {
  const c = view.contract!;
  const doc = c.doc;
  const base = `/devis/${encodeURIComponent(token)}`;
  const signed = view.stage === "signe";
  const pending = view.avenants.filter((a) => a.status === "a-signer");

  return (
    <main className="dv ct-page">
      <style dangerouslySetInnerHTML={{ __html: CONTRACT_CSS }} />
      <div className="ct-wrap">
        <header className="ct-top ct-rise">
          <p className="ct-top__brand">Préparé par {doc.platform.tradeName || doc.platform.legalName}</p>
          <Stepper current={signed ? 4 : 3} dark />
        </header>

        {flash ? (
          <div className={`ct-banner ${flash.tone === "ok" ? "is-ok" : flash.tone === "bad" ? "is-bad" : ""}`} role="status">
            <span className="ct-banner__dot" aria-hidden />
            <div>
              <strong>{flash.text}</strong>
            </div>
          </div>
        ) : null}

        {signed ? (
          <div className="ct-banner is-ok ct-rise">
            <span className="ct-banner__dot" aria-hidden />
            <div>
              <strong>Contrat signé avec {c.installer}.</strong>
              <p>Signé le {c.signedAt ? formatDateTime(c.signedAt) : ""}. Une copie intégrale vous a été envoyée par courriel.</p>
            </div>
          </div>
        ) : (
          <div className="ct-banner is-go ct-rise">
            <span className="ct-banner__dot" aria-hidden />
            <div>
              <strong>Votre contrat avec {c.installer} est prêt à signer.</strong>
              <p>Votre entrepreneur licencié a approuvé votre projet. Relisez-le, cochez les confirmations, puis signez.</p>
            </div>
          </div>
        )}

        {doc.changes.length && !signed ? (
          <section className="ct-changes ct-rise ct-rise--2" aria-labelledby="ct-changes">
            <h2 id="ct-changes">Ce qui change par rapport à votre soumission</h2>
            <ul>
              {doc.changes.map((x, i) => (
                <li key={i}>
                  <b>{CHANGE_LABELS[x.kind]} · {x.label} :</b> {x.before ?? "—"} → <mark>{x.after ?? "retiré"}</mark>
                </li>
              ))}
            </ul>
            <p className="ct-fine">Vous pouvez signer, refuser, ou demander un autre installateur (en bas de la page).</p>
          </section>
        ) : null}

        <div className="ct-doc ct-rise ct-rise--2" dangerouslySetInnerHTML={{ __html: c.html }} />

        {signed ? (
          <section className="ct-cert ct-rise" aria-labelledby="ct-cert">
            <span className="ct-cert__seal" aria-hidden>
              <Check size={26} />
            </span>
            <h2 id="ct-cert" className="ct-h">
              Contrat {c.number} signé
            </h2>
            <dl>
              <dt>Signé par</dt>
              <dd>{c.typedName}</dd>
              <dt>Le</dt>
              <dd>{c.signedAt ? formatDateTime(c.signedAt) : ""}</dd>
              <dt>Total</dt>
              <dd>{moneyFr(c.totalCents)}</dd>
              <dt>Empreinte</dt>
              <dd className="ct-hash">{c.contentSha256}</dd>
              <dt>Vérification</dt>
              <dd>{c.verified ? <><ShieldCheck size={14} aria-hidden /> empreintes recalculées et conformes</> : <><ShieldAlert size={14} aria-hidden /> à vérifier : communiquez avec nous</>}</dd>
            </dl>
            <a className="ct-btn" href={`${base}/contrat`}>
              <FileText size={17} aria-hidden /> Copie conservable et imprimable
            </a>
          </section>
        ) : (
          <>
            <ContractSignForm action={`${base}/signer`} doc={doc} sha={c.contentSha256} asOf={asOf} initialSelection={c.selection} error={error} />
            <div className="ct-form" style={{ gap: 6 }}>
              <details className="ct-details">
                <summary>Demander un autre installateur</summary>
                <form method="post" action={`${base}/signer`} className="ct-grid2" style={{ gridTemplateColumns: "1fr" }}>
                  <input type="hidden" name="decision" value="autre-installateur" />
                  <label className="ct-field">
                    Pourquoi ? <small>(facultatif)</small>
                    <textarea className="ct-input" name="raison" rows={3} maxLength={1000} />
                  </label>
                  <button type="submit" className="ct-btn ct-btn--ghost">Demander un autre installateur</button>
                </form>
              </details>
              <details className="ct-details">
                <summary>Refuser le contrat</summary>
                <form method="post" action={`${base}/signer`} className="ct-grid2" style={{ gridTemplateColumns: "1fr" }}>
                  <input type="hidden" name="decision" value="refuser" />
                  <label className="ct-field">
                    Raison <small>(facultatif)</small>
                    <textarea className="ct-input" name="raison" rows={3} maxLength={1000} />
                  </label>
                  <button type="submit" className="ct-btn ct-btn--ghost">Confirmer le refus</button>
                </form>
              </details>
            </div>
          </>
        )}

        {view.avenants.length ? (
          <section id="avenants" aria-label="Avenants">
            {view.avenants.map((a) => (
              <article key={a.id} className="ct-avenant ct-rise">
                <h2 className="ct-h">
                  Avenant n° {a.number} · {a.status === "signe" ? "signé" : "à signer avant l’exécution"}
                </h2>
                <p className="ct-fine">{a.reason}</p>
                <table>
                  <tbody>
                    {a.lines.map((l, i) => (
                      <tr key={i}>
                        <td>{l.label}</td>
                        <td>{moneyFr(l.amountCents)}</td>
                      </tr>
                    ))}
                    <tr>
                      <td>Taxes (TPS et TVQ)</td>
                      <td>{moneyFr(a.tpsCents + a.tvqCents)}</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Nouveau total du contrat</b>
                      </td>
                      <td>
                        <b>{moneyFr(a.newTotalCents)}</b>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className="ct-fine">Effet sur l’échéancier : {a.scheduleEffect}</p>
                {a.status === "a-signer" && pending.includes(a) ? (
                  <form method="post" action={`${base}/avenant`} className="ct-grid2" style={{ gridTemplateColumns: "1fr", marginTop: 10 }}>
                    <input type="hidden" name="avenant" value={a.id} />
                    <input type="hidden" name="sha" value={a.contentSha256} />
                    <label className="ct-field">
                      Votre prénom et votre nom (signature électronique)
                      <input className="ct-input ct-input--sign" name="nom" minLength={4} maxLength={120} autoComplete="name" />
                    </label>
                    <button type="submit" name="decision" value="signer" className="ct-btn ct-btn--go">
                      Je signe l’avenant
                    </button>
                    <button type="submit" name="decision" value="refuser" className="ct-btn ct-btn--ghost">
                      Je refuse l’avenant
                    </button>
                  </form>
                ) : null}
              </article>
            ))}
          </section>
        ) : null}
      </div>
    </main>
  );
}
