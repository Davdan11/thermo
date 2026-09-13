/* Chantier T — campagnes de textos aux anciens clients : liste, bilan (envoyés, réponses, STOP), nouveau brouillon. */
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft, Megaphone } from "lucide-react";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { campaignRows } from "@/lib/telephonie/view";
import { Card } from "@/components/gestion/kit/Card";
import { Chip } from "@/components/gestion/kit/Chip";
import { EmptyState } from "@/components/gestion/kit/EmptyState";
import { Reveal } from "@/components/gestion/Reveal";
import { NewCampaignForm } from "@/components/gestion/telephonie/CampaignEditor";
import "@/components/gestion/telephonie/telephonie.css";

export const metadata: Metadata = { title: "Campagnes de textos" };

const DAYS = ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."];

export default async function CampagnesPage() {
  await requireAdmin();
  const { rows, settings } = await campaignRows();
  return (
    <>
      <Reveal className="k-pagehead">
        <div>
          <Link href="/gestion/telephonie" className="t-back" style={{ display: "inline-flex", alignItems: "center", gap: 4, marginBottom: 8 }}>
            <ChevronLeft size={16} aria-hidden /> Téléphonie
          </Link>
          <h1 className="k-h1">
            Campagnes <em>de textos</em>
          </h1>
          <p className="k-lead">Un segment, un message, un aperçu, un test sur votre cellulaire. Rien ne part sans votre clic.</p>
        </div>
      </Reveal>
      <div className="tp-grid">
        <Card title="Campagnes" sub={rows.length ? `${rows.length} au total` : undefined}>
          {rows.length ? (
            <ul className="tp-rows">
              {rows.map((r, i) => (
                <li key={r.id} className="tp-row" style={{ ["--i" as string]: i }}>
                  <strong>
                    <Link href={`/gestion/telephonie/campagnes/${r.id}`}>{r.name}</Link>
                  </strong>
                  <Chip tone={r.tone}>{r.statusLabel}</Chip>
                  <small>
                    {r.report.total ? `${r.report.sent} sur ${r.report.total} envoyés · ${r.report.replies} réponse${r.report.replies > 1 ? "s" : ""} · ${r.report.stops} STOP · ` : ""}modifiée {r.updated}
                  </small>
                </li>
              ))}
            </ul>
          ) : (
            <EmptyState compact icon={<Megaphone size={20} />} title="Aucune campagne" body="Créez un brouillon : il ne part jamais tout seul." />
          )}
        </Card>
        <aside className="cr-stack">
          <Card title="Nouvelle campagne">
            <NewCampaignForm />
          </Card>
          <Card title="Qui peut recevoir un texto" tone="cream">
            <ul className="tp-ready">
              <li>
                <span className="is-ok">1</span>
                <span>
                  <strong>Consentement exprès</strong>
                  <small>Noté dans la fiche du client (date et comment). Sans expiration, jusqu’au retrait.</small>
                </span>
              </li>
              <li>
                <span className="is-ok">2</span>
                <span>
                  <strong>Achat</strong>
                  <small>Soumission acceptée ou installation terminée : consentement tacite pendant 2 ans.</small>
                </span>
              </li>
              <li>
                <span className="is-ok">3</span>
                <span>
                  <strong>Demande</strong>
                  <small>Formulaire, appel ou texto du client : consentement tacite pendant 6 mois.</small>
                </span>
              </li>
            </ul>
            <p className="g-hint" style={{ margin: "8px 0 0" }}>
              Exclus d’office : désabonnés (STOP, ARRÊT) et consentements expirés, revérifiés avant chaque texto. Envois : {settings.days.map((d) => DAYS[d]).join(" ")} de {settings.startHour} h à {settings.endHour} h, {settings.perTick} textos au plus par 5 minutes.
            </p>
          </Card>
        </aside>
      </div>
    </>
  );
}
