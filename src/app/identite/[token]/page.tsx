/* ==================================================================
   /identite/[jeton] — le partenaire remplit l'identité légale de son
   entreprise (celle qui réalise les travaux dans les soumissions),
   sans compte, par un lien personnel (14 jours, un seul envoi).
   GET en lecture seule. Envoi : POST /identite/[jeton]/envoyer
   (formulaire HTML ordinaire, fonctionne sans JavaScript).
   Le propriétaire vérifie et corrige ensuite dans la fiche du
   partenaire.
   ================================================================== */
import type { Metadata } from "next";
import { headers } from "next/headers";
import { Clock, Link2Off, ShieldCheck } from "lucide-react";
import { longDate } from "@/lib/gestion/partenaires/format";
import { IDENTITY_ERRORS, identityLimits, identityView } from "@/lib/gestion/partenaires/identity";
import { ipFromHeaders } from "@/lib/gestion/rate-limit";
import { Arcs, Foot, Mark, Plain } from "@/components/partenaires/PublicBits";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Identité légale de l’entreprise" };

function Field({ name, label, value, hint, required, max = 200, type = "text", auto, full }: { name: string; label: string; value: string; hint?: string; required?: boolean; max?: number; type?: string; auto?: string; full?: boolean }) {
  return (
    <div className="pp-field" style={full ? { gridColumn: "1 / -1" } : undefined}>
      <label className="pp-label" htmlFor={`f-${name}`}>
        {label}
        {hint ? <small> {hint}</small> : null}
      </label>
      <input id={`f-${name}`} name={name} className="pp-input" type={type} defaultValue={value} maxLength={max} required={required} autoComplete={auto ?? "off"} />
    </div>
  );
}

export default async function IdentitePage({ params, searchParams }: { params: Promise<{ token: string }>; searchParams: Promise<{ r?: string; e?: string }> }) {
  const { token } = await params;
  const { r, e } = await searchParams;
  if (!identityLimits.view.hit(ipFromHeaders(await headers()))) return <Plain icon={<Clock size={26} />} title="Trop de visites" text="Réessayez dans quelques minutes." />;
  if (r === "recu") return <Plain icon={<ShieldCheck size={26} />} title="Merci, c’est reçu" text="Nous vérifions ces renseignements avant de les utiliser dans les soumissions. Aucune autre action n’est requise de votre part." />;
  const view = await identityView(token);
  if (view.state !== "a-remplir") {
    const m = {
      invalide: { title: "Ce lien n’est pas valide", text: "Vérifiez qu’il est complet, ou utilisez le lien le plus récent reçu par courriel ou texto." },
      expire: { title: "Ce lien est expiré", text: "Demandez-nous un nouveau lien : il vous sera envoyé par courriel et par texto." },
      recu: { title: "Déjà reçu", text: "Vos renseignements ont déjà été transmis. Pour une correction, appelez-nous." },
    }[view.state];
    return <Plain icon={<Link2Off size={26} />} title={m.title} text={m.text} />;
  }
  const v = view.values;
  const action = `/identite/${encodeURIComponent(token)}/envoyer`;
  return (
    <main className="pp">
      <header className="pp-cover">
        <Arcs />
        <div className="pp-cover__in">
          <Mark sub="Partenaires installateurs" />
          <p className="pp-eyebrow pp-rise">Identité légale</p>
          <h1 className="pp-title pp-rise pp-rise--2">
            {view.company}
            <em>l’entreprise qui réalise les travaux</em>
          </h1>
          <div className="pp-meta pp-rise pp-rise--3">
            <span>
              Pour <b>{view.contactName}</b>
            </span>
            <span>Lien valable jusqu’au {longDate(view.expiresAt)}</span>
          </div>
        </div>
      </header>

      <div className="pp-wrap">
        <div className="pp-sheet pp-rise pp-rise--2">
          <div className="pp-pad">
            <h2 className="pp-section-title">Les renseignements de votre entreprise</h2>
            <p className="pp-lead">Ils figurent dans les soumissions que Thermopompes À Vendre prépare pour vos chantiers, comme l’entreprise qui réalise les travaux. Écrivez-les exactement comme sur vos documents officiels : nous les vérifions avant de les utiliser.</p>
            {e ? (
              <p className="pp-alert pp-alert--warn" role="alert">
                {IDENTITY_ERRORS[e] ?? "Une erreur est survenue. Réessayez."}
              </p>
            ) : null}
            <form action={action} method="post" className="pp-form">
              <div className="pp-row pp-row--2">
                <Field name="legalName" label="Raison sociale" hint="nom légal" value={v.legalName} required auto="organization" />
                <Field name="tradeName" label="Nom commercial" hint="facultatif" value={v.tradeName} />
              </div>
              <div className="pp-row pp-row--2">
                <Field name="neq" label="Numéro d’entreprise du Québec (NEQ)" hint="10 chiffres" value={v.neq} max={20} />
                <Field name="rbqDeclared" label="Licence RBQ" hint="0000-0000-00" value={v.rbqDeclared} max={20} />
              </div>
              <div className="pp-row">
                <Field name="address" label="Adresse" value={v.address} auto="street-address" full />
              </div>
              <div className="pp-row pp-row--2">
                <Field name="city" label="Ville" value={v.city} max={100} auto="address-level2" />
                <Field name="postalCode" label="Code postal" value={v.postalCode} max={10} auto="postal-code" />
              </div>
              <div className="pp-row pp-row--2">
                <Field name="phone" label="Téléphone de l’entreprise" value={v.phone} type="tel" max={40} auto="tel" />
                <Field name="email" label="Courriel de l’entreprise" value={v.email} type="email" auto="email" />
              </div>
              <div className="pp-row pp-row--2">
                <Field name="tps" label="Numéro de TPS" hint="123456789 RT0001" value={v.tps} max={30} />
                <Field name="tvq" label="Numéro de TVQ" hint="1234567890 TQ0001" value={v.tvq} max={30} />
              </div>
              <label className="pp-check">
                <input type="checkbox" name="confirm" value="1" required />
                <span>Je confirme que ces renseignements sont exacts et que je peux les transmettre pour l’entreprise.</span>
              </label>
              <button type="submit" className="pp-btn pp-btn--primary pp-btn--lg pp-btn--block">
                Envoyer les renseignements
              </button>
              <p className="pp-hint">Un seul envoi par lien. Pour une correction après l’envoi, appelez-nous.</p>
            </form>
            <Foot />
          </div>
        </div>
      </div>
    </main>
  );
}
