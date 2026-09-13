/* Chantier V — fiche d'un membre (propriétaire seulement) : disponibilité, territoire, part de commission, rôle,
   invitation, redistribution de ses dossiers ouverts, désactivation, suppression. */
import "@/components/gestion/equipe/equipe.css";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { teamView } from "@/lib/gestion/equipe/service";
import { ROLE_LABELS, STATUS_LABELS, USER_ID_RE } from "@/lib/gestion/equipe/types";
import { redistributeAction, resendInviteAction, setRoleAction, setStatusAction } from "../actions";
import { Card } from "@/components/gestion/kit/Card";
import { Chip } from "@/components/gestion/kit/Chip";
import { plural } from "@/components/gestion/kit/format";
import { Reveal } from "@/components/gestion/Reveal";
import { ActionButton, DeleteMemberForm, MemberForm } from "@/components/gestion/equipe/TeamForms";

export const metadata: Metadata = { title: "Membre de l’équipe" };

const day = (iso: string) => new Date(iso).toLocaleString("fr-CA", { timeZone: "America/Toronto", dateStyle: "long", timeStyle: "short" });

export default async function MembrePage({ params }: { params: Promise<{ id: string }> }) {
  await requireAdmin();
  const { id } = await params;
  if (!USER_ID_RE.test(id)) notFound();
  const m = (await teamView()).members.find((x) => x.id === id);
  if (!m) notFound();
  const other = m.role === "vendeur" ? "adjoint" : "vendeur";

  return (
    <div className="g-main--narrow" style={{ margin: "0 auto" }}>
      <Reveal className="k-pagehead">
        <div>
          <Link href="/gestion/equipe" className="k-link">
            <ChevronLeft size={15} aria-hidden /> Équipe
          </Link>
          <h1 className="k-h1" style={{ marginTop: 8 }}>
            {m.name}
          </h1>
          <p className="k-lead" style={{ display: "flex", flexWrap: "wrap", gap: 6, alignItems: "center" }}>
            <Chip tone={m.role === "adjoint" ? "blue" : "cream"}>{ROLE_LABELS[m.role]}</Chip>
            <Chip tone={m.status === "actif" ? "ok" : m.status === "invite" ? "warn" : "muted"}>{m.inviteExpired ? "Invitation expirée" : STATUS_LABELS[m.status]}</Chip>
            <span>{m.email}</span>
          </p>
        </div>
      </Reveal>

      <div className="cr-stack">
        <Card title="Fiche" sub={m.role === "vendeur" ? "Disponibilité, territoire et part de commission." : "Coordonnées et disponibilité."}>
          <MemberForm member={m} />
        </Card>

        {m.status === "invite" ? (
          <Card title="Invitation" sub={m.inviteExpired ? "Le lien a expiré : envoyez-en un nouveau." : `Envoyée le ${day(m.invitedAt)}.`}>
            <ActionButton action={resendInviteAction.bind(null, m.id)} label="Renvoyer l’invitation" pendingLabel="Envoi…" className="k-btn k-btn--ink" />
          </Card>
        ) : null}

        {m.role === "vendeur" ? (
          <Card title="Dossiers ouverts" sub={m.open ? `${plural(m.open, "client", "clients")} en cours lui ${m.open > 1 ? "sont attribués" : "est attribué"}.` : "Aucun dossier ouvert."}>
            {m.open ? <ActionButton action={redistributeAction.bind(null, m.id)} label="Redistribuer aux autres vendeurs" pendingLabel="Redistribution…" confirmText={`Redistribuer les ${m.open} dossiers ouverts de ${m.name} ?`} /> : <p className="g-hint" style={{ margin: 0 }}>Ses nouvelles demandes arriveront ici.</p>}
          </Card>
        ) : null}

        <Card title="Rôle" sub={m.role === "vendeur" ? "Vendeur : ses clients seulement." : "Adjoint : tout, sauf l’argent de l’entreprise, la sécurité, les clés et les réglages sensibles."}>
          <ActionButton action={setRoleAction.bind(null, m.id, other)} label={`En faire un ${other}`} pendingLabel="Changement…" confirmText={`Changer le rôle de ${m.name} ? Ses sessions seront fermées.`} />
        </Card>

        <Card title="Accès" sub={m.status === "desactive" ? "Désactivé : aucune connexion, aucune demande." : "Désactiver ferme aussitôt ses sessions ; ses clients restent attribués jusqu’à redistribution."}>
          {m.status === "desactive" ? (
            <ActionButton action={setStatusAction.bind(null, m.id, true)} label="Réactiver" pendingLabel="Réactivation…" className="k-btn k-btn--ink" />
          ) : (
            <ActionButton action={setStatusAction.bind(null, m.id, false)} label="Désactiver" pendingLabel="Désactivation…" className="k-btn eq-danger" confirmText={`Désactiver ${m.name} ? Ses sessions seront fermées aussitôt.`} />
          )}
          <div style={{ marginTop: 16 }}>
            <DeleteMemberForm id={m.id} name={m.name} />
          </div>
        </Card>
      </div>
    </div>
  );
}
