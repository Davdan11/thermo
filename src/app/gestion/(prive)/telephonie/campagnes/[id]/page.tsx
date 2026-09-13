/* Chantier T — une campagne : message et segment, aperçu des destinataires (inclus et exclus, avec la raison), envoi test,
   envoi sur clic explicite, puis suivi (envoyés, réponses, STOP). Numéros masqués (« 514 •••-••34 »). */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { dateLong, stamp } from "@/lib/gestion/crm/time";
import { formatPhone, maskPhone } from "@/lib/textos/phone";
import { readTextos } from "@/lib/textos/store";
import { campaignReport, previewCampaign, type SegmentRow } from "@/lib/telephonie/campaigns";
import { siteNumber } from "@/lib/telephonie/config";
import { BASIS_LABELS } from "@/lib/telephonie/consent";
import { CAMPAIGN_ID_RE } from "@/lib/telephonie/store";
import { CAMPAIGN_STATUS } from "@/lib/telephonie/view";
import { Card } from "@/components/gestion/kit/Card";
import { Chip } from "@/components/gestion/kit/Chip";
import { Reveal } from "@/components/gestion/Reveal";
import { CampaignControls, CampaignForm } from "@/components/gestion/telephonie/CampaignEditor";
import "@/components/gestion/telephonie/telephonie.css";

export const metadata: Metadata = { title: "Campagne" };

const RECIPIENT: Record<string, [string, "ok" | "muted" | "bad" | "blue"]> = { attente: ["En attente", "blue"], envoye: ["Envoyé", "ok"], simule: ["Simulé (dév.)", "muted"], echec: ["Échec", "bad"], exclu: ["Exclu", "muted"] };

function Row({ r, now }: { r: SegmentRow; now: Date }) {
  return (
    <li>
      <strong>
        <Link href={`/gestion/clients/${r.clientId}`}>
          {r.firstName}
          {r.city ? `, ${r.city}` : ""}
        </Link>
      </strong>
      <Chip tone={r.reason ? "muted" : "ok"}>{r.reason ?? (r.consent.basis ? BASIS_LABELS[r.consent.basis] : "Consentement")}</Chip>
      <small>
        {r.phone ? maskPhone(r.phone) : "sans numéro"}
        {!r.reason && r.consent.expiresAt ? ` · jusqu’au ${dateLong(r.consent.expiresAt)}` : ""}
        {r.installedAt ? ` · installé ${stamp(r.installedAt, now).split(",")[0]}` : ""}
        {r.brand ? ` · ${r.brand}` : ""}
      </small>
    </li>
  );
}

export default async function CampagnePage({ params }: { params: Promise<{ id: string }> }) {
  await requireAdmin();
  const { id } = await params;
  if (!CAMPAIGN_ID_RE.test(id)) notFound();
  const now = new Date();
  const [p, textos] = await Promise.all([previewCampaign(id, now), readTextos()]);
  if (!p) notFound();
  const c = p.campaign;
  const launched = c.status !== "brouillon";
  const report = campaignReport(c, textos.conversations);
  const [statusLabel, tone] = CAMPAIGN_STATUS[c.status];
  const site = formatPhone(siteNumber() ?? "+14389003224");
  const pct = report.total ? Math.round(((report.sent + report.failed + report.excluded) / report.total) * 100) : 0;

  return (
    <>
      <Reveal className="k-pagehead">
        <div>
          <Link href="/gestion/telephonie/campagnes" className="t-back" style={{ display: "inline-flex", alignItems: "center", gap: 4, marginBottom: 8 }}>
            <ChevronLeft size={16} aria-hidden /> Campagnes
          </Link>
          <h1 className="k-h1">{c.name}</h1>
          <p className="k-lead">
            <Chip tone={tone}>{statusLabel}</Chip> {launched && c.launchedAt ? `Lancée le ${dateLong(c.launchedAt)} par ${c.launchedBy ?? "vous"}.` : "Brouillon : rien ne part tant que vous n’avez pas cliqué sur « Envoyer »."}
          </p>
        </div>
      </Reveal>

      <div className="tp-grid">
        <Card title="Message et segment">
          <CampaignForm id={c.id} initial={{ name: c.name, message: c.message, segment: c.segment }} site={site} locked={launched} />
        </Card>

        <aside className="cr-stack">
          {launched ? (
            <Card title="Envoi" sub={`${report.sent} sur ${report.total} envoyés`}>
              <div style={{ display: "grid", gap: 14 }}>
                <div className="tp-progress" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-label="Progression de l’envoi">
                  <span style={{ width: `${pct}%` }} />
                </div>
                <div className="tp-stats">
                  <div>
                    <strong>{report.sent}</strong>
                    <span>envoyés</span>
                  </div>
                  <div>
                    <strong>{report.replies}</strong>
                    <span>réponses</span>
                  </div>
                  <div>
                    <strong>{report.stops}</strong>
                    <span>STOP</span>
                  </div>
                </div>
                <p className="g-hint" style={{ margin: 0 }}>
                  {report.waiting} en attente · {report.excluded} exclus au moment d’envoyer (consentement ou STOP) · {report.failed} échecs.
                </p>
                <CampaignControls id={c.id} status={c.status} count={report.total} hasMessage testInfo={null} />
                <ul className="tp-recip" aria-label="Destinataires">
                  {c.recipients.map((r) => (
                    <li key={`${r.clientId}:${r.phone}`}>
                      <strong>
                        <Link href={`/gestion/clients/${r.clientId}`}>{r.firstName}</Link>
                      </strong>
                      <Chip tone={RECIPIENT[r.status]?.[1] ?? "muted"}>{RECIPIENT[r.status]?.[0] ?? r.status}</Chip>
                      <small>
                        {maskPhone(r.phone)}
                        {r.sentAt ? ` · ${stamp(r.sentAt, now)}` : ""}
                        {r.reason ? ` · ${r.reason}` : ""}
                      </small>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ) : (
            <>
              <Card title="Aperçu" sub={`${p.included.length} destinataire${p.included.length > 1 ? "s" : ""} · ${p.excluded.length} exclu${p.excluded.length > 1 ? "s" : ""}`}>
                <CampaignControls id={c.id} status={c.status} count={p.included.length} hasMessage={Boolean(c.message.trim())} testInfo={c.test ? `${stamp(c.test.at, now)} (${c.test.status})` : null} />
              </Card>
              <Card title="Recevront le texto" sub="Consentement valide aujourd’hui ; revérifié juste avant l’envoi">
                {p.included.length ? (
                  <ul className="tp-recip">
                    {p.included.slice(0, 200).map((r) => (
                      <Row key={r.clientId} r={r} now={now} />
                    ))}
                  </ul>
                ) : (
                  <p className="g-hint" style={{ margin: 0 }}>
                    Personne dans ce segment avec un consentement valide.
                  </p>
                )}
              </Card>
              {p.excluded.length ? (
                <Card title="Exclus" sub="Désabonnés, consentements expirés ou absents, sans numéro">
                  <ul className="tp-recip">
                    {p.excluded.slice(0, 200).map((r) => (
                      <Row key={r.clientId} r={r} now={now} />
                    ))}
                  </ul>
                </Card>
              ) : null}
            </>
          )}
        </aside>
      </div>
    </>
  );
}
