/* ==================================================================
   Chantier P — /projet/[jeton] : le portail « Mon projet » du client.
   Un seul endroit, dans l'ordre de la vie du projet : soumission,
   date d'installation (choisie parmi les créneaux de l'installateur),
   « en route » avec l'heure estimée, photos de SON chantier, aide
   LogisVert (versée au client par Hydro-Québec), garantie, entretien
   annuel, « Un problème ? » et parrainage.
   GET en lecture seule : ouvrir le lien ne change jamais rien (les
   messageries ouvrent les liens pour les analyser). Les formulaires
   sont des POST ordinaires (sans JavaScript) vers ./repondre.
   Le jeton ne vaut que pour ce projet ; aucun courriel ni numéro du
   client n'est affiché.
   ================================================================== */
import type { Metadata } from "next";
import { headers } from "next/headers";
import { BRAND } from "@/lib/crm/templates/layout";
import { businessMailingAddress } from "@/lib/relances/config";
import { LINKS } from "@/lib/soumissions/config";
import { formatDateTime, formatDay } from "@/lib/soumissions/dates";
import { money } from "@/lib/soumissions/money";
import { clock } from "@/lib/gestion/partenaires/format";
import { ipFromHeaders } from "@/lib/gestion/rate-limit";
import { RATING_LABELS } from "@/lib/gestion/automatisations/messages";
import { LOGISVERT_STATUSES, type LogisvertStatus } from "@/lib/gestion/automatisations/types";
import { portalLimits } from "@/lib/gestion/portail/limits";
import { getPortalView, type PortalView, type ScheduleDTO } from "@/lib/gestion/portail/service";
import { CopyLink, LiveRefresh } from "@/components/portail/ClientBits";
import { referralCardState } from "@/lib/reference/portail"; // Conformité C2 : programme de recommandation (trousse 7)

export const metadata: Metadata = { title: "Mon projet" };
export const dynamic = "force-dynamic";

const FOCI = ["sondage", "logisvert", "changer", "probleme", "entretien", "desabonnement"] as const;
type Focus = (typeof FOCI)[number];
const isFocus = (v: unknown): v is Focus => typeof v === "string" && (FOCI as readonly string[]).includes(v);

const DONE = ["reserver", "annuler", "adherer", "sondage", "logisvert", "changer", "probleme", "entretien", "desabonnement"] as const;
type Done = (typeof DONE)[number];

const ERRORS: Record<string, string> = {
  invalide: "Ce lien n’est plus valide.",
  introuvable: "Ce moment n’est plus proposé : choisissez-en un autre.",
  pris: "Un autre client vient de choisir ce moment. Choisissez-en un autre.",
  "trop-tard": "Ce moment est trop proche : choisissez-en un autre, ou appelez-nous.",
  delai: "Le rendez-vous est trop proche pour être changé en ligne : appelez-nous.",
  "fixee-par-nous": "Votre date a été fixée avec nous : pour la changer, appelez-nous.",
  etat: "Ce rendez-vous vient de changer : la page est à jour.",
  "sans-installateur": "Votre installateur n’est pas encore confirmé.",
  "sans-soumission": "La date se choisit une fois la soumission acceptée.",
  consentement: "Cochez « J’ai lu et j’accepte les conditions » pour adhérer.",
  nom: "Tapez votre prénom et votre nom au complet : ils tiennent lieu de signature.",
  plan: "Ce plan n’est plus offert.",
  conditions: "Les conditions du plan ne sont pas encore prêtes.",
  deja: "Vous avez déjà un plan d’entretien pour ce projet.",
  formulaire: "Réponse incomplète : vérifiez le formulaire.",
  declaration: "Cochez la case de déclaration (18 ans ou plus, résident du Canada) pour confirmer.", // Conformité C2
};

const dayTitle = (ymd: string) => {
  const s = new Date(`${ymd}T12:00:00Z`).toLocaleDateString("fr-CA", { timeZone: "UTC", weekday: "long", day: "numeric", month: "long" });
  return s.charAt(0).toLocaleUpperCase("fr-CA") + s.slice(1);
};

function Arcs() {
  return (
    <svg className="pj-hero__arcs" viewBox="0 0 360 360" aria-hidden>
      <circle cx="180" cy="180" r="176" />
      <circle cx="180" cy="180" r="130" />
      <circle cx="180" cy="180" r="84" />
    </svg>
  );
}

function Foot({ token }: { token?: string }) {
  const address = businessMailingAddress();
  return (
    <footer className="pj-foot">
      {BRAND.name}
      {address ? ` · ${address}` : ""} · <a href={BRAND.phoneHref}>{BRAND.phone}</a> · <a href="/confidentialite">Confidentialité</a>
      {token ? (
        <>
          {" "}
          · <a href={`/projet/${encodeURIComponent(token)}?q=desabonnement`}>Ne plus recevoir ces suivis</a>
        </>
      ) : null}
    </footer>
  );
}

function Plain({ title, text }: { title: string; text: string }) {
  return (
    <main className="pj">
      <header className="pj-hero">
        <Arcs />
        <div className="pj-hero__in">
          <p className="pj-mark">
            <i aria-hidden /> Thermopompes À Vendre <span>· Mon projet</span>
          </p>
          <h1 className="pj-title">{title}</h1>
          <span className="pj-rule" aria-hidden />
          <p className="pj-sub">{text}</p>
        </div>
      </header>
      <Foot />
    </main>
  );
}

function Chap({ n, label }: { n: string; label: string }) {
  return (
    <p className="pj-chap">
      <b>{n}</b> {label}
    </p>
  );
}

function Flash({ ok, note, lv }: { ok: Done; note: number; lv: LogisvertStatus | null }) {
  const [title, text] =
    ok === "reserver"
      ? ["C’est réservé.", "Votre installateur est prévenu. Vous recevrez un rappel la veille."]
      : ok === "annuler"
        ? ["Date annulée.", "Le moment est libéré. Choisissez-en un autre quand vous voulez."]
        : ok === "adherer"
          ? ["Bienvenue dans votre plan d’entretien.", "Une copie des conditions vous a été envoyée par courriel."]
          : ok === "sondage"
            ? note >= 4
              ? ["Merci !", "Ça nous fait vraiment plaisir. Votre note aide toute l’équipe."]
              : ["Merci de nous le dire.", "Nous vous rappelons rapidement pour arranger les choses."]
            : ok === "logisvert"
              ? lv === "besoin-aide"
                ? ["C’est noté.", "Nous vous appelons pour vous aider avec votre demande."]
                : ["C’est noté.", "Merci ! Votre dossier est à jour."]
              : ok === "entretien"
                ? ["Merci !", "Nous vous appelons pour fixer la date de l’entretien."]
                : ok === "desabonnement"
                  ? ["C’est fait.", "Vous ne recevrez plus nos suivis automatiques."]
                  : ["Message reçu.", "Nous vous rappelons rapidement."];
  return (
    <div className="pj-flash pj-rise" role="status">
      <svg className="pj-check" viewBox="0 0 32 32" aria-hidden>
        <circle cx="16" cy="16" r="16" />
        <path d="M9 16.5 l4.5 4.5 l9 -10" />
      </svg>
      <div>
        <strong>{title}</strong>
        <p>{text}</p>
      </div>
    </div>
  );
}

/* ---------------- Date : créneaux ---------------- */

function SlotPicker({ action, s, legend, cta }: { action: string; s: ScheduleDTO; legend: string; cta: string }) {
  return (
    <form method="post" action={action} className="pj-form">
      <input type="hidden" name="action" value="reserver" />
      <input type="hidden" name="jobId" value={s.jobId} />
      <fieldset className="pj-days">
        <legend>{legend}</legend>
        {s.days.map((d) => (
          <div key={d.day} className="pj-day">
            <h3>{dayTitle(d.day)}</h3>
            <div className="pj-slots">
              {d.slots.map((x) => (
                <label key={x.id} className="pj-slot">
                  <input type="radio" name="slotId" value={x.id} required />
                  <span>{x.window}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </fieldset>
      <div className="pj-sticky">
        <button type="submit" className="pj-btn pj-btn--primary pj-btn--block">
          {cta}
        </button>
      </div>
    </form>
  );
}

function ScheduleBody({ s, action, what, deadlineHours }: { s: ScheduleDTO; action: string; what: string; deadlineHours: number }) {
  if (s.completedAt) {
    return (
      <div className="pj-when">
        <span>Fait</span>
        <strong>{formatDay(s.completedAt.slice(0, 10))}</strong>
      </div>
    );
  }
  if (s.day) {
    return (
      <>
        <div className="pj-when">
          <span>{s.fromSlot ? "Votre moment" : "Date prévue"}</span>
          <strong>{dayTitle(s.day)}</strong>
          {s.window ? <small>Arrivée entre {s.window}{s.company ? ` · ${s.company}` : ""}</small> : s.company ? <small>{s.company}</small> : null}
        </div>
        {s.canCancel ? (
          <>
            <p className="pj-note">Vous pouvez changer ou annuler en ligne jusqu’au {formatDateTime(s.changeUntil)}. Ensuite, appelez-nous.</p>
            {s.days.length ? (
              <details className="pj-more">
                <summary>Choisir un autre moment</summary>
                <SlotPicker action={action} s={s} legend="Moments libres" cta="Changer pour ce moment" />
              </details>
            ) : null}
            <form method="post" action={action} style={{ marginTop: 10 }}>
              <input type="hidden" name="action" value="annuler" />
              <input type="hidden" name="jobId" value={s.jobId} />
              <button type="submit" className="pj-link">
                Annuler ce moment
              </button>
            </form>
          </>
        ) : s.blockText ? (
          <p className="pj-note pj-note--warn">
            {s.blockText} <a href={BRAND.phoneHref}>{BRAND.phone}</a>
          </p>
        ) : null}
      </>
    );
  }
  if (s.canBook && s.days.length) {
    return (
      <>
        <p className="pj-lead">
          {s.company ? `${s.company} a publié ses disponibilités.` : "Voici les disponibilités de votre installateur."} Choisissez l’heure d’arrivée qui vous convient ; vous pourrez changer jusqu’à {deadlineHours} h avant.
        </p>
        <SlotPicker action={action} s={s} legend={`Choisissez le moment de ${what}`} cta="Réserver ce moment" />
      </>
    );
  }
  if (s.waitingForSlots) return <p className="pj-note">{s.company ?? "Votre installateur"} publiera bientôt ses disponibilités. Nous vous écrirons dès que vous pourrez choisir votre date.</p>;
  if (s.status === "nouveau" || s.status === "offert") return <p className="pj-note">Nous confirmons votre installateur. Vous choisirez ensuite votre date ici même.</p>;
  return s.blockText ? <p className="pj-note">{s.blockText}</p> : null;
}

/* ---------------- Sections ---------------- */

function RequestForm({ action, kind }: { action: string; kind: "changer" | "probleme" }) {
  return (
    <form method="post" action={action} className="pj-form">
      <input type="hidden" name="action" value={kind} />
      <label className="pj-field">
        {kind === "changer" ? "Un empêchement ? Dites-nous vos disponibilités" : "Votre message"}
        <textarea name="message" className="pj-textarea" maxLength={1000} required placeholder={kind === "changer" ? "Ex. : je ne suis pas disponible ce jour-là ; les matins de semaine me conviennent." : "Ce qui se passe, et quand vous êtes disponible pour un appel."} />
      </label>
      <button type="submit" className="pj-btn pj-btn--ghost">
        Envoyer
      </button>
    </form>
  );
}

const LV_STEP: Record<LogisvertStatus, number> = { "a-faire": 0, "besoin-aide": 0, "demande-faite": 1, recue: 2 };

function Logisvert({ action, lv, pre }: { action: string; lv: NonNullable<PortalView["logisvert"]>; pre: LogisvertStatus | null }) {
  const step = LV_STEP[lv.status];
  const options: Array<[LogisvertStatus, string, string]> = [
    ["a-faire", "Pas encore fait ma demande", "Nous vous le rappellerons."],
    ["demande-faite", "Demande faite, en attente", "Nous vous demanderons si vous l’avez reçue."],
    ["recue", "Aide reçue", "Parfait !"],
    ["besoin-aide", "J’ai besoin d’aide", "Nous vous appelons pour vous aider."],
  ];
  return (
    <>
      <h2 className="pj-h2">
        Votre aide <em>LogisVert</em>
      </h2>
      <p className="pj-lead">L’aide est versée directement à vous par Hydro-Québec{lv.expectedCents ? ` : ${money(lv.expectedCents)} prévus selon la liste officielle` : ""}. Le montant final est confirmé par Hydro-Québec.</p>
      <ol className="pj-steps" aria-label="Où en est votre demande">
        <li className={step > 0 ? "is-done" : "is-current"}>Demande à faire</li>
        <li className={step > 1 ? "is-done" : step === 1 ? "is-current" : ""}>Demande faite</li>
        <li className={step === 2 ? "is-done" : ""}>Aide reçue</li>
      </ol>
      {lv.rows.length ? (
        <dl className="pj-facts">
          {lv.rows.map(([k, v]) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd>{k === "Date d’installation" ? formatDay(v) : v}</dd>
            </div>
          ))}
        </dl>
      ) : null}
      <p style={{ margin: "0 0 18px" }}>
        <a className="pj-btn pj-btn--ghost" href={LINKS.logisvert} target="_blank" rel="noreferrer">
          Faire ma demande chez Hydro-Québec
        </a>
      </p>
      <form method="post" action={action} className="pj-form">
        <input type="hidden" name="action" value="logisvert" />
        <fieldset>
          <legend>Où en êtes-vous ?</legend>
          <div className="pj-choices">
            {options.map(([s, label, hint]) => (
              <label key={s} className="pj-choice">
                <input type="radio" name="statut" value={s} defaultChecked={(pre ?? lv.status) === s} required />
                <span>
                  {label}
                  <small>{hint}</small>
                </span>
              </label>
            ))}
          </div>
        </fieldset>
        <button type="submit" className="pj-btn pj-btn--primary">
          Envoyer
        </button>
      </form>
    </>
  );
}

function Maintenance({ action, m, deadlineHours }: { action: string; m: PortalView["maintenance"]; deadlineHours: number }) {
  if (m.membership) {
    const mb = m.membership;
    return (
      <>
        <h2 className="pj-h2">
          Votre plan <em>{mb.planName}</em>
        </h2>
        <p className="pj-lead">
          Adhésion du {formatDay(mb.joinedAt.slice(0, 10))} · {money(mb.priceCents)} par année, avant taxes.{mb.nextDue ? ` Prochaine visite vers le ${formatDay(mb.nextDue)}.` : ""}
        </p>
        {mb.includes.length ? (
          <ul className="pj-list" style={{ marginBottom: 16 }}>
            {mb.includes.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        ) : null}
        {m.visits.map((v) => (
          <div key={v.jobId} className="pj-visit">
            <h3>Visite d’entretien {v.visit ? `· année ${v.visit}` : ""}</h3>
            {v.dueDay && !v.day && !v.completedAt ? <p className="pj-muted" style={{ margin: "0 0 10px", fontSize: 14 }}>Échéance vers le {formatDay(v.dueDay)}.</p> : null}
            <ScheduleBody s={v} action={action} what="votre visite" deadlineHours={deadlineHours} />
          </div>
        ))}
      </>
    );
  }
  return (
    <>
      <h2 className="pj-h2">
        L’entretien <em>annuel</em>
      </h2>
      <p className="pj-lead">Un entretien chaque année (filtres, serpentins, drain, raccords) garde votre thermopompe efficace. Avec un plan, la visite se planifie d’elle-même, avec l’installateur qui connaît déjà votre appareil.</p>
      {m.plans.length ? (
        <form method="post" action={action} className="pj-form">
          <input type="hidden" name="action" value="adherer" />
          <fieldset>
            <legend>Choisissez votre plan</legend>
            <div className="pj-plans">
              {m.plans.map((pl, i) => (
                <label key={pl.id} className="pj-plan" style={{ position: "relative" }}>
                  <input type="radio" name="planId" value={pl.id} defaultChecked={i === 0} required />
                  <span className="pj-plan__top">
                    <b>{pl.name}</b>
                    <span className="pj-plan__price">
                      {money(pl.priceCents)} <small>/ an, avant taxes</small>
                    </span>
                  </span>
                  {pl.includes.length ? (
                    <ul>
                      {pl.includes.map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  ) : null}
                </label>
              ))}
            </div>
          </fieldset>
          <div>
            <p className="pj-field" style={{ margin: "0 0 6px" }}>
              Conditions du plan
            </p>
            {m.conditions ? <div className="pj-terms">{m.conditions}</div> : <div className="pj-terms pj-terms--todo">Conditions à rédiger : l’adhésion en ligne ouvrira dès qu’elles seront prêtes.</div>}
          </div>
          {m.canJoin ? (
            <>
              <label className="pj-field">
                Votre prénom et votre nom (tiennent lieu de signature)
                <input name="nom" className="pj-input" required minLength={4} maxLength={120} autoComplete="name" />
              </label>
              <label className="pj-consent">
                <input type="checkbox" name="accepte" required />
                <span>J’ai lu et j’accepte les conditions du plan.</span>
              </label>
              <button type="submit" className="pj-btn pj-btn--primary pj-btn--block">
                Adhérer au plan
              </button>
            </>
          ) : null}
        </form>
      ) : (
        <form method="post" action={action} className="pj-form">
          <input type="hidden" name="action" value="entretien" />
          <label className="pj-field">
            Vos disponibilités (facultatif)
            <textarea name="message" className="pj-textarea" maxLength={1000} placeholder="Ex. : les matins de semaine" />
          </label>
          <button type="submit" className="pj-btn pj-btn--ghost">
            Je veux un entretien
          </button>
        </form>
      )}
    </>
  );
}

function Survey({ action, pre, answered }: { action: string; pre: number; answered: boolean }) {
  return (
    <>
      <h2 className="pj-h2">{answered ? "Votre note" : <>Comment s’est passée <em>votre installation ?</em></>}</h2>
      <p className="pj-lead">{answered ? "Vous pouvez la changer ou ajouter un commentaire." : "De 1 (très déçu) à 5 (excellent). Si quelque chose ne va pas, nous vous rappelons."}</p>
      <form method="post" action={action} className="pj-form">
        <input type="hidden" name="action" value="sondage" />
        <fieldset>
          <legend className="pj-sr">Votre note</legend>
          <div className="pj-rating">
            {[1, 2, 3, 4, 5].map((n) => (
              <label key={n} className="pj-rate">
                <input type="radio" name="note" value={n} defaultChecked={n === pre} required />
                <span>
                  {n}
                  <small>{RATING_LABELS[n]}</small>
                </span>
              </label>
            ))}
          </div>
        </fieldset>
        <label className="pj-field">
          Un commentaire ? (facultatif)
          <textarea name="commentaire" className="pj-textarea" maxLength={1000} />
        </label>
        <button type="submit" className="pj-btn pj-btn--primary">
          Envoyer ma note
        </button>
      </form>
    </>
  );
}

/* ---------------- Page ---------------- */

export default async function ProjetPage({ params, searchParams }: { params: Promise<{ token: string }>; searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const { token } = await params;
  const sp = await searchParams;
  const one = (k: string) => (typeof sp[k] === "string" ? (sp[k] as string) : undefined);
  if (!portalLimits.view.hit(ipFromHeaders(await headers()))) return <Plain title="Un instant…" text={`Trop de visites en peu de temps. Réessayez dans quelques minutes, ou appelez-nous au ${BRAND.phone}.`} />;
  const v = await getPortalView(token);
  if (!v) return <Plain title="Ce lien n’est pas valide" text={`Il a peut-être été coupé en le copiant. Appelez-nous au ${BRAND.phone} ou écrivez à ${BRAND.email}.`} />;

  const enc = encodeURIComponent(token);
  const refCard = await referralCardState(token).catch(() => null); // Conformité C2
  const action = `/projet/${enc}/repondre`;
  const q = isFocus(one("q")) ? (one("q") as Focus) : null;
  const okRaw = one("ok");
  const ok = okRaw && (DONE as readonly string[]).includes(okRaw) ? (okRaw as Done) : null;
  const err = one("e");
  const noteParam = Number(one("note") ?? "");
  const note = Number.isInteger(noteParam) && noteParam >= 1 && noteParam <= 5 ? noteParam : 0;
  const lvParam = one("r");
  const lvPre = lvParam && (LOGISVERT_STATUSES as readonly string[]).includes(lvParam) ? (lvParam as LogisvertStatus) : null;

  const s = v.schedule;
  const current = v.steps.find((x) => !x.done)?.id ?? null;
  const sub = v.installedOn
    ? `Installée le ${formatDay(v.installedOn)}${v.city ? ` · ${v.city}` : ""}`
    : s.day
      ? `Installation prévue le ${dayTitle(s.day).toLocaleLowerCase("fr-CA")}${s.window ? `, arrivée entre ${s.window}` : ""}`
      : `Projet n° ${v.jobNumber}${v.city ? ` · ${v.city}` : ""}`;

  type Sec = { id: string; focus?: Focus; node: React.ReactNode; ink?: boolean };
  const secs: Sec[] = [];
  let n = 0;
  const num = () => String(++n).padStart(2, "0");

  if (v.quote) {
    secs.push({
      id: "soumission",
      node: (
        <>
          <Chap n={num()} label="Votre soumission" />
          <h2 className="pj-h2">
            Soumission <em>n° {v.quote.number}</em>
          </h2>
          <p className="pj-lead">Acceptée le {formatDay(v.quote.acceptedAt.slice(0, 10))}. Le document complet, avec vos options et vos totaux, reste accessible en tout temps.</p>
          <a className="pj-btn pj-btn--ghost" href={v.quote.href}>
            Voir ma soumission
          </a>
        </>
      ),
    });
  }

  secs.push({
    id: "date",
    focus: "changer",
    node: (
      <>
        <Chap n={num()} label="Date d’installation" />
        <h2 className="pj-h2">{s.completedAt ? <>Installation <em>terminée</em></> : s.day ? <>C’est à <em>l’agenda</em></> : <>Votre <em>date</em></>}</h2>
        <ScheduleBody s={s} action={action} what="votre installation" deadlineHours={v.deadlineHours} />
        {v.canChangeRequest && (q === "changer" || (s.day && !s.canCancel)) ? (
          <details className="pj-more" open={q === "changer" && !s.canCancel && !s.canBook}>
            <summary>Un empêchement ? Écrivez-nous</summary>
            <RequestForm action={action} kind="changer" />
          </details>
        ) : null}
      </>
    ),
  });

  if (v.photos.length) {
    secs.push({
      id: "photos",
      node: (
        <>
          <Chap n={num()} label="Votre chantier" />
          <h2 className="pj-h2">
            Les photos <em>de votre chantier</em>
          </h2>
          <p className="pj-lead">Prises par votre installateur, étape par étape. Touchez une photo pour l’agrandir.</p>
          <ul className="pj-photos">
            {v.photos.map((ph) => (
              <li key={ph.id}>
                <a href={ph.url} target="_blank" rel="noreferrer">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={ph.url} alt={ph.label} loading="lazy" decoding="async" />
                  <span>{ph.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </>
      ),
    });
  }

  if (v.logisvert) secs.push({ id: "logisvert", focus: "logisvert", node: (<><Chap n={num()} label="Subvention" /><Logisvert action={action} lv={v.logisvert} pre={lvPre} /></>) });

  if (v.warranty) {
    const w = v.warranty;
    secs.push({
      id: "garantie",
      node: (
        <>
          <Chap n={num()} label="Garantie" />
          <h2 className="pj-h2">
            Votre <em>garantie</em>
          </h2>
          {w.items.length ? (
            <ul className="pj-warranty">
              {w.items.map((x) => (
                <li key={x.label}>
                  <b>{x.years} an{x.years > 1 ? "s" : ""}</b>
                  <span>
                    {x.label}
                    {x.registration ? " · à enregistrer auprès du fabricant" : ""}
                  </span>
                </li>
              ))}
            </ul>
          ) : null}
          {w.text ? <p className="pj-lead" style={{ whiteSpace: "pre-wrap" }}>{w.text}</p> : null}
          <p className="pj-muted" style={{ margin: 0, fontSize: 14 }}>Les conditions exactes sont celles du fabricant et de votre soumission.</p>
        </>
      ),
    });
  }

  secs.push({ id: "entretien", focus: "entretien", node: (<><Chap n={num()} label="Entretien" /><Maintenance action={action} m={v.maintenance} deadlineHours={v.deadlineHours} /></>) });

  secs.push({
    id: "probleme",
    focus: "probleme",
    node: (
      <>
        <Chap n={num()} label="Service" />
        <h2 className="pj-h2">
          Un problème ? <em>On s’en occupe.</em>
        </h2>
        <p className="pj-lead">
          Bruit inhabituel, eau qui coule, code d’erreur… Signalez-le en une minute, photos bienvenues.{v.openTickets ? ` Vous avez ${v.openTickets} demande${v.openTickets > 1 ? "s" : ""} en cours.` : ""}
        </p>
        <form method="post" action={action} className="pj-row">
          <input type="hidden" name="action" value="service" />
          <button type="submit" className="pj-btn pj-btn--primary">
            Signaler un problème
          </button>
          <a className="pj-btn pj-btn--ghost" href={BRAND.phoneHref}>
            Appeler le {BRAND.phone}
          </a>
        </form>
        {q === "probleme" ? (
          <details className="pj-more">
            <summary>Ou écrivez-nous simplement</summary>
            <RequestForm action={action} kind="probleme" />
          </details>
        ) : null}
      </>
    ),
  });

  if (v.installedOn && (!v.survey || q === "sondage")) secs.push({ id: "sondage", focus: "sondage", node: (<><Chap n={num()} label="Votre avis" /><Survey action={action} pre={note || v.survey?.rating || 0} answered={Boolean(v.survey)} /></>) });

  if (v.referral) {
    secs.push({
      id: "parrainage",
      node: (
        <>
          <Chap n={num()} label="Parrainage" />
          <h2 className="pj-h2">
            Un proche cherche <em>une thermopompe ?</em>
          </h2>
          <p className="pj-lead">Partagez votre lien personnel : il nous dit que la personne vient de votre part.</p>
          <CopyLink value={v.referral.link} />
          {/* Conformité C2 : trousse en vigueur : récompense tirée des réglages, déclaration du recommandant, règles publiques. */}
          {(refCard?.c2 ? refCard.reward : v.referral.reward) ? <p style={{ margin: "14px 0 0" }}>{refCard?.c2 ? refCard.reward : v.referral.reward}</p> : null}
          {refCard?.c2 && refCard.offered ? (
            refCard.declared ? (
              <p className="pj-muted" style={{ margin: "12px 0 0", fontSize: 14 }}>
                Déclaration reçue : 18 ans ou plus, résident du Canada.
              </p>
            ) : (
              <form method="post" action={`/projet/${enc}/reference`} className="pj-row" style={{ marginTop: 14 }}>
                <label style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 15 }}>
                  <input type="checkbox" name="declaration" value="oui" required style={{ marginTop: 4 }} />
                  <span>Je déclare avoir 18 ans ou plus et résider au Canada (condition pour recevoir la récompense).</span>
                </label>
                <button type="submit" className="pj-btn pj-btn--primary">
                  Confirmer
                </button>
              </form>
            )
          ) : null}
          {refCard?.c2 && refCard.offered ? (
            <p style={{ margin: "12px 0 0", fontSize: 14 }}>
              <a href={refCard.rulesUrl}>Règles du programme de recommandation</a>
            </p>
          ) : null}
        </>
      ),
    });
  }

  if (q === "desabonnement") {
    secs.push({
      id: "desabonnement",
      focus: "desabonnement",
      node: (
        <>
          <h2 className="pj-h2">{v.unsubscribed ? "Vous êtes désabonné" : "Ne plus recevoir ces suivis"}</h2>
          {/* Conformité C2 : un désabonnement commercial n'arrête pas les messages de service. */}
          <p className="pj-lead">Vous ne recevrez plus de sondages, d’offres d’entretien ni de messages de recommandation à ce courriel ni à ce numéro. Les messages nécessaires à votre installation (rendez-vous, chantier, garantie, sécurité, aide LogisVert) continuent. Votre espace reste accessible.</p>
          {v.unsubscribed ? null : (
            <form method="post" action={action}>
              <input type="hidden" name="action" value="desabonnement" />
              <button type="submit" className="pj-btn pj-btn--ghost">
                Confirmer le désabonnement
              </button>
            </form>
          )}
        </>
      ),
    });
  }

  // Le lien d'un message (q=…) met sa section en premier, bien visible.
  const focused = q ? secs.find((x) => x.focus === q) : undefined;
  const ordered = focused ? [focused, ...secs.filter((x) => x !== focused)] : secs;
  const f = v.field;

  return (
    <main className="pj">
      <header className="pj-hero">
        <Arcs />
        <div className="pj-hero__in">
          <p className="pj-mark">
            <i aria-hidden /> Thermopompes À Vendre <span>· Mon projet</span>
          </p>
          <p className="pj-eyebrow">Projet n° {v.jobNumber}</p>
          <h1 className="pj-title">
            Bonjour{v.firstName ? ` ${v.firstName}` : ""}.<em>Tout votre projet, au même endroit.</em>
          </h1>
          <span className="pj-rule" aria-hidden />
          <p className="pj-sub">{sub}</p>
          <ol className="pj-rail" aria-label="Où en est votre projet">
            {v.steps.map((st) => (
              <li key={st.id} className={st.done ? "is-done" : st.id === current ? "is-now" : ""} aria-current={st.id === current ? "step" : undefined}>
                <b>{st.label}</b>
                {st.detail ? <small>{st.detail}</small> : null}
              </li>
            ))}
          </ol>
        </div>
      </header>

      <div className="pj-main">
        {ok ? <Flash ok={ok} note={note} lv={v.logisvert?.status ?? null} /> : null}
        {err ? (
          <div className="pj-flash pj-flash--bad pj-rise" role="alert">
            <div>
              <strong>Rien n’a été enregistré.</strong>
              <p>{ERRORS[err] ?? "Une erreur est survenue. Réessayez, ou appelez-nous."}</p>
            </div>
          </div>
        ) : null}

        {f ? (
          <section className="pj-card pj-card--ink pj-live pj-rise" aria-live="polite" aria-labelledby="pj-live">
            <LiveRefresh />
            <div className="pj-live__top">
              <span className={`pj-pulse${f.state === "arrive" ? " pj-pulse--ok" : ""}`} aria-hidden />
              <p className="pj-chap" style={{ margin: 0 }} id="pj-live">
                {f.state === "arrive" ? "Sur place" : "En route"} · {f.kind === "entretien" ? "visite d’entretien" : "installation"}
              </p>
            </div>
            {f.state === "arrive" ? (
              <p className="pj-eta">
                Votre installateur est arrivé.<small>{f.company} · depuis {clock(f.at)}</small>
              </p>
            ) : (
              <>
                <p className="pj-eta">
                  {f.etaAt ? clock(f.etaAt) : "En route"}
                  <small>{f.etaAt ? `Arrivée estimée · ${f.company} est en route` : `${f.company} est en route depuis ${clock(f.at)}`}</small>
                </p>
                <div className="pj-road" aria-hidden>
                  <i />
                </div>
              </>
            )}
          </section>
        ) : null}

        {ordered.map((sec, i) => (
          <section key={sec.id} id={sec.id} className={`pj-card pj-rise${focused === sec ? " pj-card--focus" : ""}`} style={{ ["--d" as string]: Math.min(i + 1, 6) }}>
            {sec.node}
          </section>
        ))}
      </div>
      <Foot token={token} />
    </main>
  );
}
