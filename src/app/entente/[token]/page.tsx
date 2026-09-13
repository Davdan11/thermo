/* ==================================================================
   /entente/[jeton] — l'entente de partenariat, lue et signée par le
   représentant du partenaire, sans compte. GET en lecture seule :
   l'ouverture est notée par un signal POST de la page (les robots des
   messageries ne comptent pas). Signature : POST /entente/[jeton]/signer.
   Conformité C3 : entente maître (parties, articles de l'avocat,
   annexes, signatures) rendue depuis la version résolue ; le nom et le
   titre du signataire complètent le texte à la signature.
   ================================================================== */
import type { Metadata } from "next";
import { headers } from "next/headers";
import { Check, Clock, FileText, Link2Off, ShieldCheck } from "lucide-react";
import { longDate, longDateTime } from "@/lib/gestion/partenaires/format";
import { voletLimits } from "@/lib/gestion/partenaires/limits";
import { getSigningView, SIGN_ERRORS } from "@/lib/gestion/partenaires/service";
import { ipFromHeaders } from "@/lib/gestion/rate-limit";
import { AgreementSignForm, OpenBeacon, ReadingProgress } from "@/components/partenaires/AgreementSignForm";
import { AgreementText, AgreementToc } from "@/components/partenaires/AgreementText";
import { Arcs, Foot, Mark, Plain } from "@/components/partenaires/PublicBits";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Entente de partenariat" };

export default async function EntentePage({ params, searchParams }: { params: Promise<{ token: string }>; searchParams: Promise<{ r?: string; e?: string }> }) {
  const { token } = await params;
  const { r, e } = await searchParams;
  if (!voletLimits.ententeView.hit(ipFromHeaders(await headers()))) return <Plain icon={<Clock size={26} />} title="Trop de visites" text="Réessayez dans quelques minutes." />;
  const view = await getSigningView(token);
  if (view.state !== "a-signer" && view.state !== "signee") {
    const m = {
      invalide: { title: "Ce lien n’est pas valide", text: "Vérifiez qu’il est complet, ou utilisez le lien le plus récent reçu par courriel ou texto." },
      remplace: { title: "Ce lien a été remplacé", text: "Un lien plus récent vous a été envoyé : utilisez celui du dernier courriel ou texto reçu." },
      annulee: { title: "Cette version a été remplacée", text: "Une version plus récente de l’entente est en vigueur. Nous vous l’envoyons, ou appelez-nous." },
    }[view.state];
    return <Plain icon={<Link2Off size={26} />} title={m.title} text={m.text} />;
  }

  const v = view.version;
  const res = view.resolved;
  const base = `/entente/${encodeURIComponent(token)}`;
  const signed = view.state === "signee" && view.signature;
  const signerCompletes = res.missing.signing.length > 0 || Boolean(res.signature);

  return (
    <main className="pp">
      <ReadingProgress />
      <header className="pp-cover">
        <Arcs />
        <div className="pp-cover__in">
          <Mark sub="Partenaires installateurs" />
          <p className="pp-eyebrow pp-rise">Entente de partenariat · version {v.number}</p>
          <h1 className="pp-title pp-rise pp-rise--2">
            {res.title || v.title}
            <em>entre Thermopompes À Vendre et {view.company}</em>
          </h1>
          <div className="pp-meta pp-rise pp-rise--3">
            <span>
              Pour <b>{view.contactName}</b>
            </span>
            {v.publishedAt ? <span>En vigueur depuis le {longDate(v.publishedAt)}</span> : null}
            <span>
              {res.articles.length} articles{res.annexes.length ? ` · ${res.annexes.length} annexes` : ""}
            </span>
          </div>
        </div>
      </header>

      <div className="pp-wrap">
        <div className="pp-sheet pp-rise pp-rise--2">
          <AgreementToc r={res} className="pp-toc" />
          <article className="pp-pad">
            <AgreementText r={res} />
          </article>
        </div>

        <section className="pp-sheet pp-pad" style={{ marginTop: 20 }} aria-labelledby="signer">
          {signed ? (
            <div className="pp-signcard">
              <span className="pp-signcard__icon">
                <Check size={28} aria-hidden />
              </span>
              <h2 id="signer" className="pp-section-title">
                {r === "signee" ? "Merci, c’est signé." : "Entente signée"}
                <em> Bienvenue dans le réseau.</em>
              </h2>
              <p className="pp-lead">Une copie du document signé vous a été envoyée par courriel. Vous pouvez aussi l’ouvrir, l’imprimer ou l’enregistrer en PDF.</p>
              <dl className="pp-proof">
                <dt>Signée le</dt>
                <dd>{longDateTime(signed.signedAt)}</dd>
                <dt>Par</dt>
                <dd>
                  {signed.signerName}, {signed.signerTitle}
                </dd>
                <dt>Version</dt>
                <dd>{v.number}</dd>
                <dt>Empreinte</dt>
                <dd>
                  <code>{view.textSha256}</code>
                </dd>
              </dl>
              <p style={{ marginTop: 18 }}>
                <a className="pp-btn pp-btn--ink" href={`${base}/document`}>
                  <FileText size={17} aria-hidden /> Voir le document signé
                </a>
              </p>
            </div>
          ) : (
            <>
              <p className="pp-eyebrow" style={{ color: "var(--orange-2)" }}>
                <ShieldCheck size={14} aria-hidden style={{ verticalAlign: -2 }} /> Signature électronique
              </p>
              <h2 id="signer" className="pp-section-title">
                Signer <em>l’entente</em>
              </h2>
              <p className="pp-lead">
                Par une personne autorisée à engager {view.company}. Relisez chaque article{res.annexes.length ? " et chaque annexe" : ""} : le texte signé est exactement celui affiché ci-dessus
                {signerCompletes ? ", complété par votre nom et votre titre inscrits ci-dessous" : ""}.
              </p>
              <AgreementSignForm action={`${base}/signer`} textSha256={view.textSha256} company={view.company} error={e ? SIGN_ERRORS[e] ?? "Une erreur est survenue. Réessayez." : null} />
            </>
          )}
        </section>
        <Foot />
      </div>
      {view.state === "a-signer" ? <OpenBeacon url={`${base}/vue`} /> : null}
    </main>
  );
}
