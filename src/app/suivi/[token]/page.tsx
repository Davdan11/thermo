/* ==================================================================
   /suivi/[jeton] — le dossier du client après la vente, ouvert depuis
   ses courriels et textos : note de l'installation, aide LogisVert
   (dossier et réponse « faite / reçue »), « Un problème ? / changer »,
   entretien, lien de référence, désabonnement des suivis.
   GET en lecture seule : ouvrir un lien ne répond jamais à la place du
   client (les messageries ouvrent les liens pour les analyser) ; le
   choix du lien est déjà coché, un bouton suffit. Les formulaires
   sont des POST ordinaires (sans JavaScript) vers ./repondre.
   Aucun courriel ni numéro affiché ; le jeton ne vaut que pour ce job.
   ================================================================== */
import type { Metadata } from "next";
import { headers } from "next/headers";
import { BRAND } from "@/lib/crm/templates/layout";
import { businessMailingAddress } from "@/lib/relances/config";
import { LINKS } from "@/lib/soumissions/config";
import { formatDay } from "@/lib/soumissions/dates";
import { money } from "@/lib/soumissions/money";
import { createLimiter, ipFromHeaders } from "@/lib/gestion/rate-limit";
import { getSuiviView, type SuiviView } from "@/lib/gestion/automatisations/followup";
import { RATING_LABELS } from "@/lib/gestion/automatisations/messages";
import { LOGISVERT_STATUSES, type LogisvertStatus } from "@/lib/gestion/automatisations/types";
import { CopyField } from "@/components/gestion/argent/ClientBits";

export const metadata: Metadata = { title: "Votre dossier" };
export const dynamic = "force-dynamic";

const limiter = createLimiter({ limit: 60, windowMs: 10 * 60 * 1000 });

const FOCI = ["sondage", "logisvert", "changer", "probleme", "entretien", "desabonnement"] as const;
type Focus = (typeof FOCI)[number];
const isFocus = (v: unknown): v is Focus => typeof v === "string" && (FOCI as readonly string[]).includes(v);

const MORE_LABELS: Record<Focus, string> = {
  sondage: "Noter mon installation",
  logisvert: "Mon aide LogisVert",
  changer: "Changer la date",
  probleme: "Signaler un problème",
  entretien: "Planifier un entretien",
  desabonnement: "Ne plus recevoir ces suivis",
};

function Arcs() {
  return (
    <svg className="sv-hero__arcs" viewBox="0 0 380 380" aria-hidden>
      <circle cx="190" cy="190" r="186" />
      <circle cx="190" cy="190" r="138" />
      <circle cx="190" cy="190" r="90" />
    </svg>
  );
}

function Shell({ title, sub, children, token }: { title: React.ReactNode; sub?: string; children: React.ReactNode; token?: string }) {
  const address = businessMailingAddress();
  return (
    <main className="sv">
      <header className="sv-hero">
        <Arcs />
        <div className="sv-hero__in">
          <p className="sv-mark">Thermopompes À Vendre</p>
          <p className="sv-eyebrow">Votre dossier</p>
          <h1 className="sv-title">{title}</h1>
          {sub ? <p className="sv-sub">{sub}</p> : null}
        </div>
      </header>
      <div className="sv-main">{children}</div>
      <footer className="sv-foot">
        {BRAND.name}
        {address ? ` · ${address}` : ""} · <a href={`tel:${BRAND.phone.replace(/\D/g, "")}`}>{BRAND.phone}</a> · <a href="/confidentialite">Politique de confidentialité</a>
        {token ? (
          <>
            {" "}
            · <a href={`/suivi/${encodeURIComponent(token)}?q=desabonnement`}>Ne plus recevoir ces suivis</a>
          </>
        ) : null}
      </footer>
    </main>
  );
}

function SurveyCard({ action, pre, answered }: { action: string; pre: number; answered: boolean }) {
  return (
    <section className="sv-card" aria-labelledby="sv-sondage">
      <h2 className="sv-h2" id="sv-sondage">
        {answered ? "Votre note" : "Comment s’est passée votre installation ?"}
      </h2>
      <p className="sv-lead">{answered ? "Vous pouvez la changer ou ajouter un commentaire." : "De 1 (très déçu) à 5 (excellent). Si quelque chose ne va pas, nous vous rappelons."}</p>
      <form method="post" action={action} className="sv-form">
        <input type="hidden" name="action" value="sondage" />
        <fieldset>
          <legend>Votre note</legend>
          <div className="sv-rating">
            {[1, 2, 3, 4, 5].map((n) => (
              <label key={n} className="sv-rate">
                <input type="radio" name="note" value={n} defaultChecked={n === pre} required />
                <span className="sv-rate__n">{n}</span>
                <span className="sv-rate__l">{RATING_LABELS[n]}</span>
              </label>
            ))}
          </div>
        </fieldset>
        <label className="sv-field">
          Un commentaire ? (facultatif)
          <textarea name="commentaire" maxLength={1000} placeholder="Ce qui vous a plu, ou ce qui aurait pu être mieux…" />
        </label>
        <button type="submit" className="sv-btn">
          Envoyer ma note
        </button>
      </form>
    </section>
  );
}

const STEP_OF: Record<LogisvertStatus, number> = { "a-faire": 0, "besoin-aide": 0, "demande-faite": 1, recue: 2 };

function LogisvertCard({ action, lv, pre }: { action: string; lv: NonNullable<SuiviView["logisvert"]>; pre: LogisvertStatus | null }) {
  const step = STEP_OF[lv.status];
  const options: Array<[LogisvertStatus, string, string]> = [
    ["a-faire", "Pas encore fait ma demande", "Nous vous le rappellerons."],
    ["demande-faite", "Demande faite, en attente", "Nous vous demanderons si vous l’avez reçue."],
    ["recue", "Aide reçue", "Parfait !"],
    ["besoin-aide", "J’ai besoin d’aide", "Nous vous appelons pour vous aider."],
  ];
  return (
    <section className="sv-card" aria-labelledby="sv-lv">
      <h2 className="sv-h2" id="sv-lv">
        Votre aide LogisVert
      </h2>
      <p className="sv-lead">
        L’aide est versée directement à vous par Hydro-Québec{lv.expectedCents ? ` : ${money(lv.expectedCents)} prévus selon la liste officielle` : ""}. Voici ce qu’il faut pour la demande.
      </p>
      <ol className="sv-steps" aria-label="Où en est votre demande">
        <li className={step > 0 ? "is-done" : "is-current"}>Demande à faire</li>
        <li className={step > 1 ? "is-done" : step === 1 ? "is-current" : ""}>Demande faite</li>
        <li className={step === 2 ? "is-done" : ""}>Aide reçue</li>
      </ol>
      {lv.rows.length ? (
        <dl className="sv-facts">
          {lv.rows.map(([k, v]) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd>{k === "Date d’installation" ? formatDay(v) : v}</dd>
            </div>
          ))}
        </dl>
      ) : null}
      <p style={{ margin: "0 0 18px" }}>
        <a className="sv-btn sv-btn--ghost" href={LINKS.logisvert} target="_blank" rel="noreferrer">
          Faire ma demande chez Hydro-Québec
        </a>
      </p>
      <form method="post" action={action} className="sv-form">
        <input type="hidden" name="action" value="logisvert" />
        <fieldset>
          <legend>Où en êtes-vous ?</legend>
          <div className="sv-choices">
            {options.map(([s, label, hint]) => (
              <label key={s} className="sv-choice">
                <input type="radio" name="statut" value={s} defaultChecked={(pre ?? lv.status) === s} required />
                <span>
                  {label}
                  <small>{hint}</small>
                </span>
              </label>
            ))}
          </div>
        </fieldset>
        <button type="submit" className="sv-btn">
          Envoyer
        </button>
      </form>
    </section>
  );
}

function RequestCard({ action, kind, canChange }: { action: string; kind: "changer" | "probleme"; canChange: boolean }) {
  return (
    <section className="sv-card" aria-labelledby="sv-req">
      <h2 className="sv-h2" id="sv-req">
        Un problème ? On s’en occupe.
      </h2>
      <p className="sv-lead">Dites-nous ce qui se passe : nous vous rappelons rapidement.</p>
      <form method="post" action={action} className="sv-form">
        <fieldset>
          <legend>C’est au sujet de…</legend>
          <div className="sv-choices">
            {canChange ? (
              <label className="sv-choice">
                <input type="radio" name="action" value="changer" defaultChecked={kind === "changer"} required />
                <span>
                  Changer la date de l’installation
                  <small>Indiquez vos disponibilités ci-dessous.</small>
                </span>
              </label>
            ) : null}
            <label className="sv-choice">
              <input type="radio" name="action" value="probleme" defaultChecked={kind === "probleme" || !canChange} required />
              <span>
                Un problème ou une question
                <small>Accès, appareil, bruit, eau, autre…</small>
              </span>
            </label>
          </div>
        </fieldset>
        <label className="sv-field">
          Votre message
          <textarea name="message" maxLength={1000} required placeholder="Ce qui se passe, et quand vous êtes disponible pour un appel." />
        </label>
        <button type="submit" className="sv-btn">
          Envoyer
        </button>
      </form>
    </section>
  );
}

function MaintenanceCard({ action }: { action: string }) {
  return (
    <section className="sv-card" aria-labelledby="sv-ent">
      <h2 className="sv-h2" id="sv-ent">
        Planifier un entretien
      </h2>
      <p className="sv-lead">Un entretien annuel garde votre thermopompe à son meilleur. Laissez vos disponibilités : nous vous rappelons pour fixer la date.</p>
      <form method="post" action={action} className="sv-form">
        <input type="hidden" name="action" value="entretien" />
        <label className="sv-field">
          Vos disponibilités (facultatif)
          <textarea name="message" maxLength={1000} placeholder="Ex. : les matins de semaine" />
        </label>
        <button type="submit" className="sv-btn">
          Je veux un entretien
        </button>
      </form>
    </section>
  );
}

function UnsubscribeCard({ action, done }: { action: string; done: boolean }) {
  return (
    <section className="sv-card" aria-labelledby="sv-unsub">
      <h2 className="sv-h2" id="sv-unsub">
        {done ? "Vous êtes désabonné" : "Ne plus recevoir ces suivis"}
      </h2>
      {/* Conformité C2 : un désabonnement commercial n'arrête pas les messages de service. */}
      <p className="sv-lead">
        {done
          ? "Vous ne recevrez plus de sondages, d’offres d’entretien ni de messages de recommandation pour ce dossier. Les messages nécessaires à votre installation (rendez-vous, chantier, garantie, sécurité, aide LogisVert) continuent."
          : "Vous ne recevrez plus de sondages, d’offres d’entretien ni de messages de recommandation à ce courriel ni à ce numéro. Les messages nécessaires à votre installation (rendez-vous, chantier, garantie, sécurité, aide LogisVert) continuent."}
      </p>
      {done ? null : (
        <form method="post" action={action} className="sv-form">
          <input type="hidden" name="action" value="desabonnement" />
          <button type="submit" className="sv-btn sv-btn--ghost">
            Confirmer le désabonnement
          </button>
        </form>
      )}
    </section>
  );
}

function ReferralCard({ referral }: { referral: NonNullable<SuiviView["referral"]> }) {
  return (
    <section className="sv-card" aria-labelledby="sv-ref">
      <h2 className="sv-h2" id="sv-ref">
        Votre lien de référence
      </h2>
      <p className="sv-lead">Un proche cherche une thermopompe ? Partagez ce lien : il nous dit que la personne vient de votre part.</p>
      <CopyField value={referral.link} variant="sv" />
      {referral.reward ? <p style={{ margin: "14px 0 0" }}>{referral.reward}</p> : null}
    </section>
  );
}

function Thanks({ ok, note, lvStatus }: { ok: Focus; note: number; lvStatus: LogisvertStatus | null }) {
  const [title, text] =
    ok === "sondage"
      ? note >= 4
        ? ["Merci !", "Ça nous fait vraiment plaisir. Votre note aide toute l’équipe."]
        : ["Merci de nous le dire.", "Nous vous rappelons rapidement pour arranger les choses."]
      : ok === "logisvert"
        ? lvStatus === "besoin-aide"
          ? ["C’est noté.", "Nous vous appelons pour vous aider avec votre demande."]
          : ["C’est noté.", "Merci ! Votre dossier est à jour."]
        : ok === "entretien"
          ? ["Merci !", "Nous vous appelons pour fixer la date de l’entretien."]
          : ok === "desabonnement"
            ? ["C’est fait.", "Vous ne recevrez plus nos suivis automatiques."]
            : ["Message reçu.", "Nous vous rappelons rapidement."];
  return (
    <section className="sv-card sv-thanks" role="status">
      <svg className="sv-check" viewBox="0 0 64 64" aria-hidden>
        <circle cx="32" cy="32" r="32" />
        <path d="M20 33 l8 8 l16 -18" />
      </svg>
      <h2>{title}</h2>
      <p>{text}</p>
    </section>
  );
}

export default async function SuiviPage({ params, searchParams }: { params: Promise<{ token: string }>; searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const { token } = await params;
  const sp = await searchParams;
  const one = (k: string) => (typeof sp[k] === "string" ? (sp[k] as string) : undefined);
  if (!limiter.hit(ipFromHeaders(await headers()))) {
    return (
      <Shell title="Un instant…">
        <section className="sv-card">
          <p>Trop de visites en peu de temps. Réessayez dans quelques minutes, ou appelez-nous au {BRAND.phone}.</p>
        </section>
      </Shell>
    );
  }
  const v = await getSuiviView(token);
  if (!v) {
    return (
      <Shell title="Ce lien n’est pas valide">
        <section className="sv-card">
          <p>Il a peut-être été coupé en le copiant. Appelez-nous au {BRAND.phone} ou écrivez à {BRAND.email}.</p>
        </section>
      </Shell>
    );
  }

  const action = `/suivi/${encodeURIComponent(token)}/repondre`;
  const q = isFocus(one("q")) ? (one("q") as Focus) : null;
  const ok = isFocus(one("ok")) ? (one("ok") as Focus) : null;
  const noteParam = Number(one("note") ?? "");
  const note = Number.isInteger(noteParam) && noteParam >= 1 && noteParam <= 5 ? noteParam : 0;
  const lvParam = one("r");
  const lvPre = lvParam && (LOGISVERT_STATUSES as readonly string[]).includes(lvParam) ? (lvParam as LogisvertStatus) : null;
  const city = v.city ? ` · ${v.city}` : "";
  const sub = v.installedOn ? `Installation du ${formatDay(v.installedOn)}${city}` : v.scheduledFor ? `Installation prévue le ${formatDay(v.scheduledFor, true)}${city}` : v.city || undefined;

  const available: Focus[] = [
    ...(v.installedOn ? (["sondage"] as Focus[]) : []),
    ...(v.logisvert ? (["logisvert"] as Focus[]) : []),
    ...(v.canChange ? (["changer"] as Focus[]) : []),
    "probleme",
    ...(v.installedOn ? (["entretien"] as Focus[]) : []),
  ];
  const shown: Focus[] = ok ? [] : q ? [q] : ([!v.survey && v.installedOn ? "sondage" : null, v.logisvert ? "logisvert" : null, v.canChange ? "changer" : "probleme"].filter(Boolean) as Focus[]);
  const more = available.filter((f) => !shown.includes(f) && !(f === "changer" && shown.includes("probleme")) && !(f === "probleme" && shown.includes("changer")));

  const card = (f: Focus) => {
    switch (f) {
      case "sondage":
        return <SurveyCard key={f} action={action} pre={note || v.survey?.rating || 0} answered={Boolean(v.survey)} />;
      case "logisvert":
        return v.logisvert ? <LogisvertCard key={f} action={action} lv={v.logisvert} pre={lvPre} /> : null;
      case "changer":
      case "probleme":
        return <RequestCard key={f} action={action} kind={f} canChange={v.canChange} />;
      case "entretien":
        return <MaintenanceCard key={f} action={action} />;
      case "desabonnement":
        return <UnsubscribeCard key={f} action={action} done={v.unsubscribed} />;
    }
  };

  return (
    <Shell
      token={token}
      title={
        <>
          Bonjour{v.firstName ? ` ${v.firstName}` : ""}
          <em>.</em>
        </>
      }
      sub={sub}
    >
      {ok ? <Thanks ok={ok} note={note} lvStatus={v.logisvert?.status ?? null} /> : null}
      {shown.map(card)}
      {ok === "sondage" && v.referral ? <ReferralCard referral={v.referral} /> : !ok && !q && v.referral ? <ReferralCard referral={v.referral} /> : null}
      {more.length ? (
        <nav aria-label="Autre chose ?">
          <ul className="sv-more">
            {more.map((f) => (
              <li key={f}>
                <a href={`/suivi/${encodeURIComponent(token)}?q=${f}`}>{MORE_LABELS[f]}</a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </Shell>
  );
}
