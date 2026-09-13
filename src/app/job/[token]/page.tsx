/* ==================================================================
   /job/[jeton] — l'offre vue par l'installateur (sans compte).
   GET en lecture seule : aucun changement d'état, même pour une offre
   qui vient d'expirer (calculé à l'affichage). Accepter et Refuser
   sont des formulaires POST vers /job/[jeton]/repondre.
   Coordonnées du client : seulement après acceptation.
   ================================================================== */
import type { Metadata } from "next";
import { headers } from "next/headers";
import { CalendarDays, Check, Clock, MapPin, Phone, X } from "lucide-react";
import { brandOptions } from "@/lib/gestion/catalog";
import { ipFromHeaders, limiters } from "@/lib/gestion/rate-limit";
import { getOfferView, type OfferView } from "@/lib/gestion/service";
import { formatDateTime, formatDay, kmText, summaryHeadline, summaryRows } from "@/lib/gestion/summary";
import { Reveal } from "@/components/gestion/Reveal";
import { Mark } from "@/components/gestion/ui";

export const metadata: Metadata = { title: "Offre de job" };
export const dynamic = "force-dynamic";

const PHONE = "438-900-3224";

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <main className="g-app g-center">
      <div className="g-panel g-panel--wide">
        <Mark sub="Installateurs" />
        {children}
        <p className="g-foot">Une question ? <a href="tel:4389003224">{PHONE}</a> · Thermopompes À Vendre</p>
      </div>
    </main>
  );
}

function Message({ icon, tone, title, children }: { icon: React.ReactNode; tone?: "muted" | "bad"; title: string; children?: React.ReactNode }) {
  return (
    <Reveal className="g-card g-card__pad">
      <div className="g-state">
        <span className={`g-state__icon ${tone ? `g-state__icon--${tone}` : ""}`}>{icon}</span>
        <h1 className="g-h2" style={{ fontSize: 22 }}>{title}</h1>
        {children}
      </div>
    </Reveal>
  );
}

export default async function JobOfferPage({ params, searchParams }: { params: Promise<{ token: string }>; searchParams: Promise<{ r?: string }> }) {
  const { token } = await params;
  const { r } = await searchParams;
  if (!limiters.jobView.hit(ipFromHeaders(await headers()))) {
    return (
      <Shell>
        <Message icon={<Clock size={26} aria-hidden />} tone="muted" title="Trop de visites">
          <p className="g-hint">Réessayez dans quelques minutes, ou appelez-nous au {PHONE}.</p>
        </Message>
      </Shell>
    );
  }
  const view: OfferView = await getOfferView(token);
  if (view.state === "invalide") {
    return (
      <Shell>
        <Message icon={<X size={26} aria-hidden />} tone="bad" title="Ce lien n’est pas valide">
          <p className="g-hint">Vérifiez qu’il est complet, ou appelez-nous au {PHONE}.</p>
        </Message>
      </Shell>
    );
  }

  const s = view.summary;
  const logo = view.brandId ? brandOptions().find((b) => b.id === view.brandId)?.logo ?? null : null;
  const rows = summaryRows(s).filter(([k, v]) => v && k !== "Marque");
  const action = `/job/${encodeURIComponent(token)}/repondre`;

  const hero = (
    <div className="g-offer-hero">
      <p className="g-eyebrow">Job n° {s.jobNumber}{view.company ? ` · pour ${view.company}` : ""}</p>
      <h1 className="g-offer-title">{summaryHeadline(s)}</h1>
      <div className="g-offer-meta">
        {s.distanceKm !== null ? <span><MapPin size={14} aria-hidden /> {kmText(s.distanceKm)} de votre base</span> : null}
        {s.desiredDate || s.desiredWindow ? <span><CalendarDays size={14} aria-hidden /> {s.desiredDate ?? s.desiredWindow}</span> : null}
        <span>{s.region}</span>
      </div>
    </div>
  );

  const details = (
    <>
      {logo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={logo} alt={s.brand ?? ""} className="g-offer-logo" />
      ) : s.brand ? <p className="g-h2">{s.brand}</p> : null}
      <dl className="g-kv" style={{ marginTop: 14 }}>
        {rows.map(([k, v]) => (
          <div key={k} style={{ display: "contents" }}>
            <dt>{k}</dt>
            <dd style={k === "Notes" ? { whiteSpace: "pre-wrap", fontWeight: 450 } : undefined}>{v}</dd>
          </div>
        ))}
      </dl>
    </>
  );

  if (view.state === "en-attente") {
    return (
      <Shell>
        <Reveal>
          {hero}
          <div className="g-offer-body">
            {details}
            <hr className="g-divider" />
            <p className="g-hint" style={{ fontSize: 14 }}>
              <Clock size={14} aria-hidden style={{ verticalAlign: -2 }} /> Répondez avant le <strong>{formatDateTime(view.expiresAt)}</strong>. Si l’offre a été envoyée à plus d’un installateur, le premier qui accepte obtient le job. Les coordonnées du client s’affichent dès que vous acceptez.
            </p>
            <div className="g-decide">
              <form action={action} method="post">
                <input type="hidden" name="decision" value="accepter" />
                <button type="submit" className="g-btn g-btn--primary g-btn--lg g-btn--block"><Check size={18} aria-hidden /> Accepter le job</button>
              </form>
              <details className="g-details">
                <summary className="g-btn g-btn--ghost g-btn--lg g-btn--block" style={{ color: "var(--g-ink)", justifyContent: "center" }}>Refuser</summary>
                <form action={action} method="post" className="g-form" style={{ gap: 10, marginTop: 10 }}>
                  <input type="hidden" name="decision" value="refuser" />
                  <label className="g-label" htmlFor="raison">Raison <small>(facultatif)</small></label>
                  <textarea id="raison" name="raison" className="g-textarea" maxLength={500} placeholder="ex. trop loin, pas disponible à cette date" />
                  <button type="submit" className="g-btn g-btn--danger g-btn--block">Confirmer le refus</button>
                </form>
              </details>
            </div>
          </div>
        </Reveal>
      </Shell>
    );
  }

  if (view.state === "accepte" && view.client) {
    const c = view.client;
    return (
      <Shell>
        <Reveal>
          {hero}
          <div className="g-offer-body">
            <div className="g-state" style={{ marginBottom: 14 }}>
              <span className="g-state__icon"><Check size={26} aria-hidden /></span>
              <p className="g-h2" style={{ fontSize: 22 }}>{r === "accepte" ? "C’est confirmé : le job est à vous" : "Ce job vous est attribué"}</p>
              <p className="g-hint">Appelez le client dans les 24 heures pour fixer la date. Les coordonnées vous ont aussi été envoyées par courriel.</p>
            </div>
            <div className="g-card g-card__pad" style={{ boxShadow: "none", background: "var(--g-cream)" }}>
              <p className="g-eyebrow">Client</p>
              <dl className="g-kv">
                <dt>Nom</dt>
                <dd>{`${c.firstName} ${c.lastName}`.trim()}</dd>
                <dt>Téléphone</dt>
                <dd><a href={`tel:${c.phone.replace(/\D/g, "")}`}><Phone size={13} aria-hidden style={{ verticalAlign: -1 }} /> {c.phone}</a></dd>
                {c.email ? (<><dt>Courriel</dt><dd><a href={`mailto:${c.email}`}>{c.email}</a></dd></>) : null}
                <dt>Adresse</dt>
                <dd>{[c.address, c.city, c.postalCode].filter(Boolean).join(", ")}</dd>
                {view.scheduledFor ? (<><dt>Installation</dt><dd>{formatDay(view.scheduledFor)}</dd></>) : null}
              </dl>
            </div>
            <hr className="g-divider" />
            {details}
          </div>
        </Reveal>
      </Shell>
    );
  }

  const withdrawn =
    view.withdrawnBecause === "deja-attribue"
      ? { title: "Déjà attribué", text: "Un autre installateur a accepté ce job avant vous. Merci d’avoir regardé : d’autres offres suivront." }
      : view.withdrawnBecause === "annule"
        ? { title: "Job annulé", text: "Le client a annulé ce projet. Aucune action n’est requise." }
        : { title: "Offre retirée", text: "Nous avons retiré cette offre. Aucune action n’est requise." };

  const messages: Record<string, { icon: React.ReactNode; tone?: "muted" | "bad"; title: string; text: string }> = {
    refuse: { icon: <Check size={26} aria-hidden />, tone: "muted", title: "C’est noté, merci", text: "Vous avez refusé ce job. Nous l’offrons à un autre installateur." },
    expire: { icon: <Clock size={26} aria-hidden />, tone: "muted", title: "Cette offre a expiré", text: `Elle attendait une réponse avant le ${formatDateTime(view.expiresAt)}. Le job a peut-être déjà été offert à quelqu’un d’autre.` },
    retire: { icon: <X size={26} aria-hidden />, tone: "muted", ...withdrawn },
    "plus-attribue": { icon: <X size={26} aria-hidden />, tone: "muted", title: "Ce job ne vous est plus attribué", text: `Communiquez avec nous au ${PHONE} pour en savoir plus.` },
  };
  const m = messages[view.state] ?? messages.retire;
  return (
    <Shell>
      <Message icon={m.icon} tone={m.tone} title={m.title}>
        <p className="g-hint" style={{ fontSize: 14 }}>{m.text}</p>
        <p className="g-count">Job n° {s.jobNumber} · {summaryHeadline(s)}</p>
      </Message>
    </Shell>
  );
}
