/* ==================================================================
   Chantier V — Équipe (propriétaire seulement) : inviter un vendeur ou
   un adjoint, voir qui est actif et disponible, régler la répartition
   des nouvelles demandes et la 2e étape obligatoire.
   ================================================================== */
import "@/components/gestion/equipe/equipe.css";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Receipt, Trophy, UserPlus } from "lucide-react";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { teamView } from "@/lib/gestion/equipe/service";
import { ROLE_LABELS, STATUS_LABELS } from "@/lib/gestion/equipe/types";
import { runRepartitionAction } from "./actions";
import { Avatar } from "@/components/gestion/kit/Avatar";
import { Card, SectionHeader } from "@/components/gestion/kit/Card";
import { Chip } from "@/components/gestion/kit/Chip";
import { EmptyState } from "@/components/gestion/kit/EmptyState";
import { plural } from "@/components/gestion/kit/format";
import { KpiTile } from "@/components/gestion/kit/KpiTile";
import { Reveal } from "@/components/gestion/Reveal";
import { ActionButton, InviteForm, TeamSettingsForm } from "@/components/gestion/equipe/TeamForms";

export const metadata: Metadata = { title: "Équipe" };

const initials = (name: string) =>
  name
    .split(/\s+/)
    .map((w) => w.charAt(0))
    .join("")
    .slice(0, 2)
    .toUpperCase() || "·";

const when = (iso: string | null) => (iso ? new Date(iso).toLocaleDateString("fr-CA", { timeZone: "America/Toronto", day: "numeric", month: "long" }) : null);

export default async function EquipePage({ searchParams }: { searchParams: Promise<{ supprime?: string }> }) {
  await requireAdmin();
  const { supprime } = await searchParams;
  const v = await teamView();
  const vendors = v.members.filter((m) => m.role === "vendeur" && m.status === "actif");
  const available = vendors.filter((m) => m.available).length;
  const pending = v.members.filter((m) => m.status === "invite").length;

  return (
    <>
      <Reveal className="k-pagehead">
        <div>
          <p className="k-eyebrow">Équipe</p>
          <h1 className="k-h1">
            Vos <em>vendeurs</em>
          </h1>
          <p className="k-lead">Chaque vendeur ne voit que ses clients, ses tâches, ses soumissions et ses textos. Les nouvelles demandes leur sont réparties d’elles-mêmes ; vous pouvez réattribuer un client depuis sa fiche.</p>
        </div>
        <div className="eq-actions">
          <Link href="/gestion/classement" className="k-btn">
            <Trophy size={16} aria-hidden /> Classement
          </Link>
          <Link href="/gestion/equipe/releves" className="k-btn">
            <Receipt size={16} aria-hidden /> Relevés
          </Link>
        </div>
      </Reveal>

      {supprime ? (
        <p className="g-alert g-alert--ok eq-rise" role="status">
          Membre supprimé : ses sessions sont fermées.
        </p>
      ) : null}

      <div className="cr-grid3" style={{ marginBottom: 20 }}>
        <KpiTile label="Vendeurs actifs" value={vendors.length} sub={`${available} disponible${available > 1 ? "s" : ""}`} tone={vendors.length ? "ink" : "paper"} />
        <KpiTile label="Invitations en attente" value={pending} />
        <KpiTile label="Dossiers ouverts sans vendeur" value={v.unassigned} sub={v.modeLabel} tone={v.unassigned ? "orange" : "paper"} />
      </div>

      <Card title="Inviter un membre" sub="Il reçoit un lien personnel par courriel ; à l’ouverture, il active sa connexion à deux étapes." tone="cream">
        <InviteForm />
      </Card>

      <SectionHeader n="01" title="Membres" lead={v.members.length ? plural(v.members.length, "membre", "membres") : undefined} />
      {v.members.length ? (
        <ul className="eq-members">
          {v.members.map((m, i) => (
            <li key={m.id} style={{ animationDelay: `${i * 35}ms` }} className="eq-rise">
              <Link href={`/gestion/equipe/${m.id}`} className="eq-member">
                <Avatar initials={initials(m.name)} seed={m.id} size="md" />
                <span className="eq-member__name">
                  <span className={`eq-dot${m.status === "actif" && m.available ? " eq-dot--on" : ""}`} aria-hidden />
                  {m.name}
                  <ChevronRight size={15} aria-hidden style={{ opacity: 0.4 }} />
                </span>
                <p className="eq-member__meta">
                  {m.email}
                  {m.role === "vendeur" ? ` · ${plural(m.open, "dossier ouvert", "dossiers ouverts")}` : ""}
                  {m.lastLoginAt ? ` · vu le ${when(m.lastLoginAt)}` : m.status === "invite" ? ` · invité le ${when(m.invitedAt)}` : ""}
                </p>
                <span className="eq-member__side">
                  <Chip tone={m.role === "adjoint" ? "blue" : "cream"}>{ROLE_LABELS[m.role]}</Chip>
                  <Chip tone={m.status === "actif" ? "ok" : m.status === "invite" ? (m.inviteExpired ? "bad" : "warn") : "muted"}>{m.inviteExpired ? "Invitation expirée" : STATUS_LABELS[m.status]}</Chip>
                  {m.status === "actif" && !m.available ? <Chip tone="muted">Indisponible</Chip> : null}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <EmptyState icon={<UserPlus size={20} />} title="Aucun membre pour l’instant" body="Invitez votre premier vendeur ci-dessus : il ne verra que les demandes qui lui sont attribuées." />
      )}

      <SectionHeader
        n="02"
        title="Répartition"
        accent="des demandes"
        lead="Seuls les vendeurs actifs et disponibles reçoivent des demandes. Les clients déjà présents ne sont jamais répartis d’office."
        action={<ActionButton action={runRepartitionAction} label="Répartir maintenant" pendingLabel="Répartition…" />}
      />
      <Card>
        <TeamSettingsForm settings={v.settings} />
      </Card>
      {v.settings.updatedAt ? (
        <p className="g-hint" style={{ marginTop: 12 }}>
          Modifié le {new Date(v.settings.updatedAt).toLocaleString("fr-CA", { timeZone: "America/Toronto", dateStyle: "long", timeStyle: "short" })}
          {v.settings.updatedBy ? ` par ${v.settings.updatedBy}` : ""}.
        </p>
      ) : null}
    </>
  );
}
