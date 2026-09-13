/* ==================================================================
   Chantier P — /gestion/entretien : plans d'entretien annuels.
   Plans (nom, prix, inclus, commission : AUCUN prix par défaut),
   conditions de l'avocat (« à rédiger » tant que vides), adhérents,
   visites dues et revenus récurrents calculés depuis les montants
   figés des adhésions et les vraies factures de commission.
   ================================================================== */
import "@/components/gestion/argent/argent.css";
import "@/components/gestion/portail/portail-admin.css";
import type { Metadata } from "next";
import Link from "next/link";
import { CalendarClock, HandCoins, Receipt, Users } from "lucide-react";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { plansPageView } from "@/lib/gestion/portail/views";
import { formatDateTime, formatDay } from "@/lib/soumissions/dates";
import { money } from "@/lib/soumissions/money";
import { Card, SectionHeader } from "@/components/gestion/kit/Card";
import { Chip } from "@/components/gestion/kit/Chip";
import { DataTable } from "@/components/gestion/kit/DataTable";
import { EmptyState } from "@/components/gestion/kit/EmptyState";
import { KpiTile } from "@/components/gestion/kit/KpiTile";
import { Reveal } from "@/components/gestion/Reveal";
import { CancelMembershipForm, ConditionsForm, EnrollForm, PlanForm, PortalSettingsForm, RunPortalTickButton } from "@/components/gestion/portail/PortalForms";

export const metadata: Metadata = { title: "Plans d’entretien" };

const pct = (n: number) => `${String(n).replace(".", ",")} %`;

export default async function EntretienPage() {
  await requireAdmin();
  const v = await plansPageView();
  const offered = v.plans.filter((p) => p.ready);
  const conditions = v.settings.conditionsText.trim();

  return (
    <>
      <Reveal className="k-pagehead">
        <div>
          <p className="k-eyebrow">Ventes</p>
          <h1 className="k-h1">
            Plans d’<em>entretien</em>
          </h1>
          <p className="k-lead">Chaque année, la visite de chaque adhérent devient un job « entretien », offert d’abord à l’installateur d’origine ; le client choisit sa date dans son portail. La commission suit le pourcentage du plan.</p>
        </div>
        <RunPortalTickButton />
      </Reveal>

      <div className="cr-grid3" style={{ marginBottom: 20 }}>
        <KpiTile label="Adhérents actifs" icon={<Users size={16} />} value={v.kpis.active} tone="ink" />
        <KpiTile label="Valeur annuelle des adhésions" icon={<HandCoins size={16} />} value={money(v.kpis.annualValueCents)} sub="payée par les clients, avant taxes" />
        <KpiTile label="Commissions annuelles prévues" icon={<Receipt size={16} />} value={money(v.kpis.annualCommissionCents)} sub="pourcentage de chaque plan, figé à l’adhésion" tone="orange" />
        <KpiTile label="Commissions facturées" value={money(v.kpis.invoicedCents)} sub={`dont ${money(v.kpis.paidCents)} payées · visites terminées`} />
        <KpiTile label="Visites à venir" icon={<CalendarClock size={16} />} value={v.kpis.dueSoon} sub="créées ou dues dans 60 jours" />
      </div>

      {!offered.length ? <p className="pa-todo">Aucun plan n’est offert : donnez-lui un nom, un prix annuel et un pourcentage de commission, puis cochez « Offert aux clients ». Aucun prix n’est proposé par défaut.</p> : null}
      {!conditions ? <p className="pa-todo">Conditions à rédiger : tant que le texte de l’avocat n’est pas collé ci-dessous, le portail affiche « Conditions à rédiger » et personne ne peut adhérer.</p> : null}

      <SectionHeader n="01" eyebrow="Offre" title="Vos" accent="plans" lead="Le prix est celui que paie le client, avant taxes. La commission est facturée à l’installateur à chaque visite terminée, par la même facture que les installations." />
      <div className="pa-plans" style={{ marginBottom: 28 }}>
        {v.plans.map((p) => (
          <Card key={p.id} title={p.name} sub={`${p.members} adhérent${p.members > 1 ? "s" : ""} actif${p.members > 1 ? "s" : ""}`}>
            <div className="pa-plan__meta">
              {p.ready ? <Chip tone="ok" dot>Offert</Chip> : p.active ? <Chip tone="warn" dot>Incomplet</Chip> : <Chip tone="muted">Non offert</Chip>}
              <Chip tone="cream">{p.priceCents === null ? "Prix à fixer" : `${money(p.priceCents)} / an`}</Chip>
              <Chip tone="cream">{p.commissionPercent === null ? "Commission à fixer" : `Commission ${pct(p.commissionPercent)}`}</Chip>
            </div>
            <PlanForm plan={{ id: p.id, name: p.name, priceCents: p.priceCents, includes: p.includes, commissionPercent: p.commissionPercent, active: p.active }} />
          </Card>
        ))}
        <Card title="Nouveau plan" tone="cream">
          <PlanForm />
        </Card>
      </div>

      <SectionHeader n="02" eyebrow="Consentement" title="Conditions" accent="du plan" lead={conditions ? `Texte en vigueur${v.settings.conditionsUpdatedAt ? ` depuis le ${formatDateTime(v.settings.conditionsUpdatedAt)}` : ""}. Chaque adhésion garde l’empreinte du texte accepté.` : "À rédiger : texte à fournir par l’avocat."} />
      <Card className="" pad>
        <ConditionsForm text={v.settings.conditionsText} />
      </Card>

      <div style={{ height: 28 }} />
      <SectionHeader n="03" eyebrow="Clients" title="Adhérents" lead="Montants figés à l’adhésion : un changement de prix du plan ne touche pas les adhésions en cours." />
      {v.members.length ? (
        <DataTable
          label="Adhérents"
          columns={[
            { key: "c", label: "Client", width: "1.5fr" },
            { key: "p", label: "Plan", width: "1.3fr" },
            { key: "m", label: "Prix · commission", width: "1.2fr" },
            { key: "d", label: "Depuis", width: "1fr" },
            { key: "n", label: "Prochaine visite", width: "1fr" },
            { key: "s", label: "État", width: "1.2fr", align: "end" },
          ]}
          rows={v.members.map((m) => ({
            key: m.id,
            tone: m.active ? undefined : "muted",
            cells: {
              c: (
                <span>
                  <b>{m.who}</b>
                  <br />
                  <small className="g-hint">{m.jobNumber ? <Link href={`/gestion/jobs/${m.jobId}`}>Job n° {m.jobNumber}</Link> : "Job retiré"} · {m.source}</small>
                </span>
              ),
              p: m.planName,
              m: `${money(m.priceCents)} · ${pct(m.percent)}`,
              d: formatDay(m.joinedAt.slice(0, 10)),
              n: m.active ? (m.nextDue ? formatDay(m.nextDue) : "après l’installation") : "—",
              s: m.active ? <CancelMembershipForm id={m.id} /> : <Chip tone="muted">Annulée{m.cancelled ? ` : ${m.cancelled}` : ""}</Chip>,
            },
          }))}
        />
      ) : (
        <EmptyState title="Aucun adhérent pour l’instant" body="Les clients adhèrent dans leur portail « Mon projet » (plan offert et conditions présentes), ou vous les inscrivez ci-dessous." compact />
      )}

      <div style={{ height: 28 }} />
      <SectionHeader n="04" eyebrow="Terrain" title="Visites" accent="d’entretien" lead={`Créées ${v.settings.visitLeadDays} jours avant l’échéance (anniversaire de la fin de l’installation) et offertes d’abord à l’installateur d’origine.`} />
      {v.visits.length ? (
        <DataTable
          label="Visites d’entretien"
          columns={[
            { key: "j", label: "Job", width: "0.8fr" },
            { key: "c", label: "Client", width: "1.4fr" },
            { key: "e", label: "Échéance", width: "1fr" },
            { key: "s", label: "État", width: "1fr" },
            { key: "i", label: "Installateur", width: "1.2fr" },
            { key: "o", label: "Offre", width: "1.6fr", align: "end" },
          ]}
          rows={v.visits.map((x) => ({
            key: x.jobId,
            href: `/gestion/jobs/${x.jobId}`,
            tone: x.status === "termine" || x.status === "annule" ? "muted" : undefined,
            cells: {
              j: <b>n° {x.jobNumber}</b>,
              c: `${x.who} · année ${x.n}`,
              e: formatDay(x.dueDay),
              s: <Chip tone={x.status === "planifie" ? "blue" : x.status === "termine" ? "ok" : x.status === "attribue" ? "orange" : "muted"} dot>{x.scheduledFor ? `${x.statusLabel} · ${formatDay(x.scheduledFor)}` : x.statusLabel}</Chip>,
              i: x.company ?? "—",
              o: <small className="g-hint">{x.offer}</small>,
            },
          }))}
        />
      ) : (
        <EmptyState title="Aucune visite créée" body="La première visite d’un adhérent est créée à l’approche du premier anniversaire de son installation." compact />
      )}
      {v.upcoming.length ? (
        <Card title="Échéances des 60 prochains jours" sub="La visite sera créée d’elle-même au bon moment." className="" pad>
          <ul className="pa-events">
            {v.upcoming.map((u, i) => (
              <li key={`${u.jobNumber}-${i}`}>
                <b>{formatDay(u.dueDay)}</b>
                <span>
                  {u.who} · {u.planName}
                  {u.jobNumber ? ` · job n° ${u.jobNumber}` : ""}
                </span>
              </li>
            ))}
          </ul>
        </Card>
      ) : null}

      <div style={{ height: 28 }} />
      <SectionHeader n="05" eyebrow="Au téléphone" title="Inscrire" accent="un client" lead="Consentement obtenu autrement (téléphone, papier) : notez-le. Le client reçoit une copie des conditions par courriel." />
      <Card>{offered.length && conditions ? <EnrollForm jobs={v.enrollable} plans={offered.map((p) => ({ id: p.id, name: p.name }))} /> : <p className="g-hint">Offrez d’abord un plan complet et ajoutez les conditions.</p>}</Card>

      <div style={{ height: 28 }} />
      <SectionHeader n="06" eyebrow="Réglages" title="Portail" accent="et délais" lead="Communs aux créneaux d’installation et aux visites d’entretien." />
      <Card>
        <PortalSettingsForm settings={v.settings} />
      </Card>

      {v.events.length ? (
        <>
          <div style={{ height: 28 }} />
          <SectionHeader n="07" eyebrow="Journal" title="Derniers" accent="événements" />
          <Card>
            <ul className="pa-events">
              {v.events.map((e, i) => (
                <li key={`${e.at}-${i}`}>
                  <span>{formatDateTime(e.at)}</span>
                  <span>
                    <b>{e.action}</b>
                    {e.detail ? ` · ${e.detail}` : ""}
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        </>
      ) : null}
    </>
  );
}
