/* ==================================================================
   /gestion/partenaires — le réseau d'un coup d'œil : entente (qui a
   signé), conformité (licence RBQ, assurance), niveau, et surtout qui
   est BLOQUÉ pour les offres de jobs, avec la raison.
   ================================================================== */
import type { Metadata } from "next";
import Link from "next/link";
import { FileSignature, HardHat, Images, Settings2, ShieldAlert, ShieldCheck } from "lucide-react";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { publishedVersion } from "@/lib/gestion/partenaires/agreement";
import { readNetwork, summarizeAll } from "@/lib/gestion/partenaires/network";
import { sendAgreementToAllAction } from "../partenaires-actions";
import { Chip } from "@/components/gestion/kit/Chip";
import { DataTable } from "@/components/gestion/kit/DataTable";
import { EmptyState } from "@/components/gestion/kit/EmptyState";
import { KpiTile } from "@/components/gestion/kit/KpiTile";
import { Reveal } from "@/components/gestion/Reveal";
import { ActionButton } from "@/components/partenaires/admin/AdminTools";
import { AgreementChip, DocChip, TierChip } from "@/components/partenaires/admin/bits";
import "@/components/partenaires/admin/partenaires.css";

export const metadata: Metadata = { title: "Partenaires" };

export default async function PartenairesPage() {
  await requireAdmin();
  const snap = await readNetwork();
  const all = await summarizeAll(snap);
  const version = publishedVersion(snap.partners);
  const live = all.filter((s) => s.installer.active && !s.record?.ended);
  const signed = live.filter((s) => s.agreement.code === "signee").length;
  const blocked = live.filter((s) => s.blockers.length).length;
  const renew = live.filter((s) => ["bientot", "expiree"].includes(s.compliance.rbq.state) || ["bientot", "expiree"].includes(s.compliance.assurance.state)).length;
  const toSign = version ? live.filter((s) => s.agreement.code !== "signee").length : 0;

  return (
    <>
      <Reveal className="k-pagehead">
        <div>
          <p className="k-eyebrow">Réseau</p>
          <h1 className="k-h1">
            Partenaires <em>en règle</em>
          </h1>
          <p className="k-lead">Entente signée, licence RBQ et assurance valides : sinon, aucune offre de job ne part. La raison de chaque blocage est affichée ici et dans la fiche du partenaire.</p>
        </div>
        <div className="g-actions">
          <Link href="/gestion/entente" className="k-btn">
            <FileSignature size={16} aria-hidden /> Entente
          </Link>
          <Link href="/gestion/photos" className="k-btn">
            <Images size={16} aria-hidden /> Photos à vérifier
          </Link>
          <Link href="/gestion/partenaires/reglages" className="k-btn k-btn--ghost">
            <Settings2 size={16} aria-hidden /> Réglages
          </Link>
        </div>
      </Reveal>

      {!version ? (
        <Reveal className="pa-banner">
          <ShieldAlert size={22} aria-hidden />
          <div>
            <b>Aucune entente en vigueur</b>
            <p>
              Les offres ne dépendent pas encore de la signature. Faites rédiger le texte par l’avocat, marquez-le « texte final validé », puis publiez-le : chaque partenaire devra alors signer avant de recevoir des offres. <Link href="/gestion/entente">Ouvrir l’entente</Link>
            </p>
          </div>
        </Reveal>
      ) : toSign ? (
        <Reveal className="pa-banner">
          <FileSignature size={22} aria-hidden />
          <div style={{ display: "grid", gap: 10 }}>
            <div>
              <b>
                {toSign} partenaire{toSign > 1 ? "s" : ""} doi{toSign > 1 ? "vent" : "t"} signer la version {version.number}
              </b>
              <p>Un lien personnel part par courriel et texto ; les relances apparaissent dans « À faire ».</p>
            </div>
            <ActionButton action={sendAgreementToAllAction} className="k-btn k-btn--ink" pending="Envoi…">
              Envoyer à tous ceux qui doivent signer
            </ActionButton>
          </div>
        </Reveal>
      ) : null}

      <div className="cr-grid3" style={{ marginBottom: 20 }}>
        <KpiTile label="Actifs" icon={<HardHat size={16} />} value={live.length} tone="ink" sub={`${all.length - live.length} en pause ou terminés`} />
        <KpiTile label="Entente signée" icon={<ShieldCheck size={16} />} value={version ? `${signed}/${live.length}` : "—"} sub={version ? `version ${version.number} en vigueur` : "aucune version publiée"} />
        <KpiTile label="Bloqués" icon={<ShieldAlert size={16} />} value={blocked} tone={blocked ? "orange" : "paper"} sub="ne reçoivent aucune offre" />
        <KpiTile label="À renouveler" value={renew} sub="licence ou assurance qui expire" />
      </div>

      {all.length ? (
        <DataTable
          label="Partenaires"
          columns={[
            { key: "p", label: "Partenaire", width: "1.6fr" },
            { key: "e", label: "Entente", width: "1.1fr" },
            { key: "r", label: "Licence RBQ", width: "1.1fr" },
            { key: "a", label: "Assurance", width: "1.1fr" },
            { key: "n", label: "Niveau", width: "0.8fr" },
            { key: "b", label: "Offres", width: "1.6fr" },
          ]}
          rows={all.map((s) => ({
            key: s.installer.id,
            href: `/gestion/partenaires/${s.installer.id}`,
            tone: !s.installer.active || s.record?.ended ? "muted" : s.blockers.length ? "hot" : undefined,
            cells: {
              p: (
                <span>
                  <b>{s.installer.company}</b>
                  <br />
                  <small className="g-hint">{s.record?.ended ? "Partenariat terminé" : s.installer.active ? s.installer.contactName : "En pause"}</small>
                </span>
              ),
              e: <AgreementChip state={s.agreement} />,
              r: <DocChip state={s.compliance.rbq.state} expiresOn={s.compliance.rbq.doc?.expiresOn} />,
              a: <DocChip state={s.compliance.assurance.state} expiresOn={s.compliance.assurance.doc?.expiresOn} />,
              n: <TierChip tier={s.performance.tier} imposed={Boolean(s.performance.override)} />,
              b: s.blockers.length ? (
                <span style={{ color: "var(--g-bad)", fontWeight: 600, fontSize: 13 }}>{s.blockers.map((x) => x.label).join(" · ")}</span>
              ) : (
                <Chip tone="ok">Offres permises</Chip>
              ),
            },
          }))}
        />
      ) : (
        <EmptyState icon={<HardHat size={20} />} title="Aucun partenaire pour l’instant" body="Ajoutez un installateur, ou convertissez une candidature." action={<Link href="/gestion/installateurs/nouveau" className="k-btn k-btn--primary">Ajouter un installateur</Link>} />
      )}
    </>
  );
}
