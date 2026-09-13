/* ==================================================================
   /approbation/[jeton] — l'installateur examine le dossier complet
   (portée, jumelage, prix, exclusions, échéancier) et le contrat final
   à son nom. Il confirme la date du client ou en propose une autre,
   puis « J'accepte la job et j'approuve le contrat » ; ou il demande
   un changement, ou refuse. Blocages affichés en rouge : entente,
   licence RBQ et sous-catégories, assurance, identité, paiement.
   GET en lecture seule ; l'ouverture est notée par un POST de la page.
   ================================================================== */
import type { Metadata } from "next";
import { headers } from "next/headers";
import { AlertTriangle, CalendarCheck, Check, Clock, Link2Off, ShieldCheck } from "lucide-react";
import { moneyFr } from "@/lib/contrats/format";
import { contratLimits } from "@/lib/contrats/limits";
import { APPROVAL_ERRORS } from "@/lib/contrats/regles";
import { CONTRACT_CSS } from "@/lib/contrats/rendu";
import { approvalView } from "@/lib/contrats/service";
import { PROPOSAL_STATUS_LABELS } from "@/lib/contrats/types";
import { formatDateTime } from "@/lib/soumissions/dates";
import { ipFromHeaders } from "@/lib/gestion/rate-limit";
import { OpenBeacon } from "@/components/partenaires/AgreementSignForm";
import { Arcs, Foot, Mark, Plain } from "@/components/partenaires/PublicBits";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Contrat à approuver" };

const DONE: Record<string, string> = {
  approuve: "C’est approuvé. Le contrat part au client pour signature ; le job vous est attribué.",
  changements: "Demande de changement envoyée. Nous vous revenons avec la version corrigée.",
  refuse: "Refus noté. Merci d’avoir répondu rapidement.",
  avenant: "Réponse à l’avenant enregistrée.",
};

export default async function ApprovalPage({ params, searchParams }: { params: Promise<{ token: string }>; searchParams: Promise<{ r?: string; e?: string; m?: string }> }) {
  const { token } = await params;
  const { r, e, m } = await searchParams;
  if (!contratLimits.view.hit(ipFromHeaders(await headers()))) return <Plain icon={<Clock size={26} />} title="Trop de visites" text="Réessayez dans quelques minutes." />;
  const view = await approvalView(token);
  if (view.state !== "ok") return <Plain icon={<Link2Off size={26} />} title="Ce lien n’est pas valide" text="Vérifiez qu’il est complet, ou utilisez le lien du dernier courriel ou texto reçu." />;

  const action = `/approbation/${encodeURIComponent(token)}/repondre`;
  const open = view.status === "en-attente" && !view.replaced;
  const blocked = view.blockers.length > 0;
  const error = e ? (e === "bloque" && m ? m : APPROVAL_ERRORS[e] ?? "Une erreur est survenue. Réessayez.") : null;

  return (
    <main className="pp ct-app">
      <header className="pp-cover">
        <Arcs />
        <div className="pp-cover__in">
          <Mark sub="Contrat à approuver" />
          <p className="pp-eyebrow pp-rise">
            Soumission {view.quoteNumber} · {view.who}
            {view.city ? `, ${view.city}` : ""}
          </p>
          <h1 className="pp-title pp-rise pp-rise--2">
            Le contrat final
            <em>à votre nom, {view.company}</em>
          </h1>
          <div className="pp-meta pp-rise pp-rise--3">
            <span>
              Total <b>{moneyFr(view.totalCents)}</b> taxes comprises
            </span>
            <span>
              Date voulue : <b>{view.when}</b>
            </span>
            <span>{PROPOSAL_STATUS_LABELS[view.status]}</span>
          </div>
        </div>
      </header>

      <div className="pp-wrap">
        {r && DONE[r] ? (
          <p className="pp-alert pp-alert--ok" role="status" style={{ marginTop: 20 }}>
            <Check size={16} aria-hidden style={{ verticalAlign: -3 }} /> {DONE[r]}
          </p>
        ) : null}
        {error ? (
          <p className="pp-alert" role="alert" style={{ marginTop: 20 }}>
            {error}
          </p>
        ) : null}
        {view.replaced ? (
          <p className="pp-alert pp-alert--warn" role="status" style={{ marginTop: 20 }}>
            Cette version a été remplacée : un nouveau lien vous a été envoyé pour la version à jour.
          </p>
        ) : null}
        {view.approval ? (
          <p className="pp-alert pp-alert--ok" style={{ marginTop: 20 }}>
            <ShieldCheck size={16} aria-hidden style={{ verticalAlign: -3 }} /> Approuvé le {formatDateTime(view.approval.at)} par {view.approval.name}, {view.approval.title}
            {view.approval.dateChoice.kind === "autre" ? " (nouvelle date proposée au client)" : " (date confirmée)"}.
            {view.contractStatus === "signe" ? " Le client a signé." : view.contractStatus === "a-signer" ? " En attente de la signature du client." : ""}
          </p>
        ) : null}

        {open && blocked ? (
          <section className="pp-sheet pp-pad ct-block" aria-labelledby="blocages">
            <h2 id="blocages" className="pp-section-title" style={{ fontSize: 22 }}>
              <AlertTriangle size={20} aria-hidden style={{ verticalAlign: -3 }} /> Approbation impossible pour l’instant
            </h2>
            <p className="pp-lead">Réglez ces éléments avec nous ; le bouton d’approbation s’activera ensuite.</p>
            <ul>
              {view.blockers.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </section>
        ) : null}

        <section className="pp-sheet pp-pad ct-docframe pp-rise pp-rise--2" aria-label="Dossier complet et contrat">
          <div className="ct-datecard">
            <small>
              <CalendarCheck size={14} aria-hidden style={{ verticalAlign: -2 }} /> Date ou période voulue par le client
            </small>
            <p className="ct-bigdate">{view.when}</p>
            {view.schedule.windowText ? <span>{view.schedule.windowText}</span> : null}
          </div>
          <style dangerouslySetInnerHTML={{ __html: CONTRACT_CSS }} />
          <div dangerouslySetInnerHTML={{ __html: view.html }} />
        </section>

        {open ? (
          <section className="pp-sheet pp-pad" style={{ marginTop: 20 }} aria-labelledby="approuver">
            <p className="pp-eyebrow" style={{ color: "var(--orange-2)" }}>
              <ShieldCheck size={14} aria-hidden style={{ verticalAlign: -2 }} /> Approbation électronique
            </p>
            <h2 id="approuver" className="pp-section-title">
              Accepter la job <em>et approuver le contrat</em>
            </h2>
            <form method="post" action={action} className="pp-form">
              <input type="hidden" name="decision" value="approuver" />
              <input type="hidden" name="sha" value={view.contentSha256} />
              <fieldset className="ct-datechoice">
                <legend className="pp-label">La date</legend>
                <label className="pp-check">
                  <input type="radio" name="date" value="confirme" required />
                  <span>
                    Je confirme pouvoir faire les travaux <b>{view.when}</b>.
                  </span>
                </label>
                <label className="pp-check">
                  <input type="radio" name="date" value="autre" />
                  <span>Proposer une autre date (le client la verra, mise en évidence, avant de signer).</span>
                </label>
                <div className="ct-other">
                  <div className="pp-row pp-row--2">
                    <div className="pp-field">
                      <label className="pp-label" htmlFor="mode">
                        Proposition
                      </label>
                      <select id="mode" name="mode" className="pp-select" defaultValue="date">
                        <option value="date">Une date</option>
                        <option value="fenetre">Une période (au plus tôt, au plus tard)</option>
                      </select>
                    </div>
                    <div className="pp-field">
                      <label className="pp-label" htmlFor="d">
                        Date proposée
                      </label>
                      <input id="d" name="d" type="date" className="pp-input" />
                    </div>
                  </div>
                  <div className="pp-row pp-row--2">
                    <div className="pp-field">
                      <label className="pp-label" htmlFor="d1">
                        Au plus tôt
                      </label>
                      <input id="d1" name="d1" type="date" className="pp-input" />
                    </div>
                    <div className="pp-field">
                      <label className="pp-label" htmlFor="d2">
                        Au plus tard
                      </label>
                      <input id="d2" name="d2" type="date" className="pp-input" />
                    </div>
                  </div>
                  <div className="pp-field">
                    <label className="pp-label" htmlFor="note">
                      Précision pour le client <small>(facultatif)</small>
                    </label>
                    <input id="note" name="note" className="pp-input" maxLength={300} />
                  </div>
                </div>
              </fieldset>
              <div className="pp-row pp-row--2">
                <div className="pp-field">
                  <label className="pp-label" htmlFor="name">
                    Prénom et nom
                  </label>
                  <input id="name" name="name" className="pp-input" autoComplete="name" required minLength={3} maxLength={120} />
                </div>
                <div className="pp-field">
                  <label className="pp-label" htmlFor="title">
                    Titre dans l’entreprise <small>(ex. président)</small>
                  </label>
                  <input id="title" name="title" className="pp-input" autoComplete="organization-title" required minLength={2} maxLength={80} />
                </div>
              </div>
              <label className="pp-check">
                <input type="checkbox" name="authorized" value="1" required />
                <span>Je suis autorisé à signer pour {view.company} : l’entreprise est l’entrepreneur-vendeur nommé au contrat.</span>
              </label>
              <button type="submit" className="pp-btn pp-btn--primary pp-btn--lg pp-btn--block" disabled={blocked}>
                <Check size={18} aria-hidden /> J’accepte la job et j’approuve le contrat
              </button>
              <p className="pp-hint">Nous conservons votre nom, votre titre, votre déclaration, la date et l’heure, votre adresse IP, votre navigateur et l’empreinte SHA-256 du contenu exact approuvé. Le client reçoit ensuite le contrat à signer.</p>
            </form>
            <details className="ct-details" style={{ marginTop: 16 }}>
              <summary>Demander un changement</summary>
              <form method="post" action={action} className="pp-form">
                <input type="hidden" name="decision" value="changements" />
                <div className="pp-field">
                  <label className="pp-label" htmlFor="msg">
                    Ce qu’il faut changer (portée, prix, équipement…)
                  </label>
                  <textarea id="msg" name="message" className="pp-textarea" rows={4} required minLength={5} maxLength={2000} />
                </div>
                <button type="submit" className="pp-btn pp-btn--ink">Envoyer la demande</button>
              </form>
            </details>
            <details className="ct-details">
              <summary>Refuser ce projet</summary>
              <form method="post" action={action} className="pp-form">
                <input type="hidden" name="decision" value="refuser" />
                <div className="pp-field">
                  <label className="pp-label" htmlFor="why">
                    Raison <small>(facultatif)</small>
                  </label>
                  <textarea id="why" name="message" className="pp-textarea" rows={3} maxLength={2000} />
                </div>
                <button type="submit" className="pp-btn pp-btn--ghost">Refuser</button>
              </form>
            </details>
          </section>
        ) : null}

        {view.messages.length ? (
          <section className="pp-sheet pp-pad" style={{ marginTop: 20 }}>
            <h2 className="pp-section-title" style={{ fontSize: 20 }}>Vos messages</h2>
            {view.messages.map((x, i) => (
              <p key={i} className="pp-lead">
                <b>{formatDateTime(x.at)} :</b> {x.text || (x.kind === "refus" ? "Refus" : "")}
              </p>
            ))}
          </section>
        ) : null}

        {view.avenants.length ? (
          <section id="avenants" className="pp-sheet pp-pad" style={{ marginTop: 20 }} aria-label="Avenants">
            <h2 className="pp-section-title" style={{ fontSize: 22 }}>Avenants</h2>
            {view.avenants.map((a) => (
              <article key={a.id} className="ct-avenant">
                <h3 style={{ margin: 0 }}>
                  Avenant n° {a.number} · {a.status === "a-approuver" ? "à approuver" : a.status === "a-signer" ? "approuvé, à signer par le client" : a.status}
                </h3>
                <p className="pp-hint">{a.reason}</p>
                <table>
                  <tbody>
                    {a.lines.map((l, i) => (
                      <tr key={i}>
                        <td>{l.label}</td>
                        <td>{moneyFr(l.amountCents)}</td>
                      </tr>
                    ))}
                    <tr>
                      <td>Taxes</td>
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
                <p className="pp-hint">Effet sur l’échéancier : {a.scheduleEffect}</p>
                {a.status === "a-approuver" ? (
                  <form method="post" action={action} className="pp-form">
                    <input type="hidden" name="avenant" value={a.id} />
                    <input type="hidden" name="sha" value={a.contentSha256} />
                    <div className="pp-row pp-row--2">
                      <input name="name" className="pp-input" placeholder="Prénom et nom" maxLength={120} aria-label="Prénom et nom" />
                      <input name="title" className="pp-input" placeholder="Titre" maxLength={80} aria-label="Titre" />
                    </div>
                    <label className="pp-check">
                      <input type="checkbox" name="authorized" value="1" />
                      <span>Je suis autorisé à signer pour {view.company}.</span>
                    </label>
                    <div className="pp-row pp-row--2">
                      <button type="submit" name="decision" value="avenant-approuver" className="pp-btn pp-btn--primary">
                        J’approuve l’avenant
                      </button>
                      <button type="submit" name="decision" value="avenant-refuser" className="pp-btn pp-btn--ghost">
                        Je refuse
                      </button>
                    </div>
                  </form>
                ) : null}
              </article>
            ))}
          </section>
        ) : null}
        <Foot />
      </div>
      {open ? <OpenBeacon url={`/approbation/${encodeURIComponent(token)}/vue`} /> : null}
    </main>
  );
}
