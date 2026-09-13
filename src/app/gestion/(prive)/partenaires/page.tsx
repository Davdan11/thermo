/* ==================================================================
   /gestion/partenaires — refonte R1 : Installateurs et Partenaires en
   UNE seule liste (l'ancienne adresse /gestion/installateurs redirige
   ici, vue « Zone et marques »).
   - Vue « Conformité » (par défaut) : entente (qui a signé), licence
     RBQ, assurance, niveau, acceptation et jobs en cours, et surtout
     qui est BLOQUÉ pour les offres de jobs, avec la raison.
   - Vue « Zone et marques » (?vue=cartes, l'ancienne liste des
     installateurs) : logos, rayon, régions, types, acceptation.
   Chaque ligne ouvre la fiche unique /gestion/partenaires/[id].
   ================================================================== */
import type { Metadata } from "next";
import Link from "next/link";
import { FileSignature, Gauge, HardHat, Images, Plus, Settings2, ShieldAlert, ShieldCheck, Wrench } from "lucide-react";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { brandLabel, brandOptions } from "@/lib/gestion/catalog";
import { installerStats } from "@/lib/gestion/matching";
import { publishedVersion } from "@/lib/gestion/partenaires/agreement";
import { readNetwork, summarizeAll } from "@/lib/gestion/partenaires/network";
import { settleTerminations } from "@/lib/gestion/partenaires/service";
import { SYSTEM_TYPE_LABELS } from "@/lib/data/types/enums";
import { sendAgreementToAllAction } from "../partenaires-actions";
import { Chip } from "@/components/gestion/kit/Chip";
import { DataTable } from "@/components/gestion/kit/DataTable";
import { EmptyState } from "@/components/gestion/kit/EmptyState";
import { KpiTile } from "@/components/gestion/kit/KpiTile";
import { Reveal, StaggerList } from "@/components/gestion/Reveal";
import { ActionButton } from "@/components/partenaires/admin/AdminTools";
import { AgreementChip, DocChip, TierChip } from "@/components/partenaires/admin/bits";
import "@/components/partenaires/admin/partenaires.css";

export const metadata: Metadata = { title: "Installateurs et partenaires" };

const pct = (x: number) => `${Math.round(x * 100)} %`;
const FLASH: Record<string, string> = { ajoute: "Installateur ajouté.", modifie: "Fiche enregistrée." };

export default async function PartenairesPage({ searchParams }: { searchParams?: Promise<{ vue?: string; ok?: string }> } = {}) {
  await requireAdmin();
  const sp = (await searchParams) ?? {};
  const cards = sp.vue === "cartes";
  // Conformité C3 : préavis de fin arrivés à terme inscrits aux fiches avant l'affichage.
  await settleTerminations();
  const snap = await readNetwork();
  const all = await summarizeAll(snap);
  const version = publishedVersion(snap.partners);
  const live = all.filter((s) => s.installer.active && !s.record?.ended);
  const signed = live.filter((s) => s.agreement.code === "signee").length;
  const blocked = live.filter((s) => s.blockers.length).length;
  const renew = live.filter((s) => ["bientot", "expiree"].includes(s.compliance.rbq.state) || ["bientot", "expiree"].includes(s.compliance.assurance.state)).length;
  const toSign = version ? live.filter((s) => s.agreement.code !== "signee").length : 0;
  // Ancienne liste des installateurs : acceptation des offres (répondues ou expirées) et jobs en cours.
  const stats = new Map(all.map((s) => [s.installer.id, installerStats(s.installer.id, snap.gestion.jobs, snap.now)]));
  const totals = [...stats.values()];
  const answered = totals.reduce((n, x) => n + x.answered, 0);
  const accepted = totals.reduce((n, x) => n + x.accepted, 0);
  const load = totals.reduce((n, x) => n + x.load, 0);
  const logos = cards ? new Map(brandOptions().map((b) => [b.id, b.logo])) : new Map<string, string | undefined>();

  return (
    <>
      <Reveal className="k-pagehead">
        <div>
          <p className="k-eyebrow">Réseau</p>
          <h1 className="k-h1">
            Installateurs <em>et partenaires</em>
          </h1>
          <p className="k-lead">Une seule liste, une seule fiche. Entente signée, licence RBQ et assurance valides : sinon, aucune offre de job ne part. La raison de chaque blocage est affichée ici et dans la fiche.</p>
        </div>
        <div className="g-actions">
          <Link href="/gestion/partenaires/nouveau" className="k-btn k-btn--primary">
            <Plus size={16} aria-hidden /> Ajouter
          </Link>
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
      {sp.ok && FLASH[sp.ok] ? (
        <Reveal>
          <p className="g-alert g-alert--ok" role="status">
            {FLASH[sp.ok]}
          </p>
        </Reveal>
      ) : null}

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
        <KpiTile label="Jobs en cours" icon={<Wrench size={16} />} value={load} sub="attribués ou planifiés" />
        <KpiTile label="Taux d’acceptation" icon={<Gauge size={16} />} value={answered ? pct(accepted / answered) : "—"} sub={answered ? `${accepted} sur ${answered} offres` : "Aucune offre répondue"} />
      </div>

      {all.length ? (
        <>
          <nav className="k-tabs" aria-label="Affichage de la liste" style={{ marginBottom: 14 }}>
            <Link href="/gestion/partenaires" aria-current={cards ? undefined : "page"} scroll={false}>
              Conformité
            </Link>
            <Link href="/gestion/partenaires?vue=cartes" aria-current={cards ? "page" : undefined} scroll={false}>
              Zone et marques
            </Link>
          </nav>
          {cards ? (
            <StaggerList className="g-cards">
              {all.map(({ installer: i, blockers, agreement }) => {
                const st = stats.get(i.id)!;
                return (
                  <Link key={i.id} href={`/gestion/partenaires/${i.id}`} className="g-inst" style={{ height: "100%" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", gap: 10, alignItems: "flex-start" }}>
                      <div style={{ minWidth: 0 }}>
                        <div className="g-cand__name">{i.company}</div>
                        <div className="g-cand__sub">
                          {i.contactName} · {i.base?.city ?? i.basePostalCode}
                        </div>
                      </div>
                      <Chip tone={i.active ? "ok" : "muted"} dot>
                        {i.active ? "Actif" : "En pause"}
                      </Chip>
                    </div>
                    <div className="g-inst__logos">
                      {i.brands.slice(0, 6).map((b) => {
                        const logo = logos.get(b);
                        // eslint-disable-next-line @next/next/no-img-element
                        return logo ? <img key={b} src={logo} alt={brandLabel(b)} loading="lazy" /> : <span key={b} className="g-tag">{brandLabel(b)}</span>;
                      })}
                      {i.brands.length > 6 ? <span className="g-count">+{i.brands.length - 6}</span> : null}
                    </div>
                    <div className="g-tags">
                      <span className="g-tag">
                        Rayon {i.radiusKm} km{i.extraRegions.length ? ` + ${i.extraRegions.length} région${i.extraRegions.length > 1 ? "s" : ""}` : ""}
                      </span>
                      <span className="g-tag">{i.systemTypes.length ? i.systemTypes.map((t) => SYSTEM_TYPE_LABELS[t]).join(", ") : "Tous les types"}</span>
                    </div>
                    <div className="cr-facts" style={{ marginTop: 0, background: "var(--g-line)" }}>
                      <div style={{ background: "var(--g-paper-warm)" }}>
                        <span style={{ color: "var(--g-faint)" }}>Acceptation</span>
                        <strong style={{ color: "var(--g-ink)" }}>{st.answered ? pct(st.accepted / st.answered) : "—"}</strong>
                      </div>
                      <div style={{ background: "var(--g-paper-warm)" }}>
                        <span style={{ color: "var(--g-faint)" }}>En cours</span>
                        <strong style={{ color: "var(--g-ink)" }}>
                          {st.load}
                          {i.maxOpenJobs ? ` / ${i.maxOpenJobs}` : ""}
                        </strong>
                      </div>
                    </div>
                    <div className="g-tags">
                      <AgreementChip state={agreement} />
                      {blockers.length ? <Chip tone="bad">Offres bloquées</Chip> : <Chip tone="ok">Offres permises</Chip>}
                    </div>
                    <div className="g-count">{st.answered ? `${st.accepted} acceptée${st.accepted > 1 ? "s" : ""}, ${st.refused} refusée${st.refused > 1 ? "s" : ""}, ${st.expired} expirée${st.expired > 1 ? "s" : ""}` : "Aucune offre répondue pour l’instant"}</div>
                  </Link>
                );
              })}
            </StaggerList>
          ) : (
            <DataTable
              label="Installateurs et partenaires"
              columns={[
                { key: "p", label: "Partenaire", width: "1.6fr" },
                { key: "e", label: "Entente", width: "1.1fr" },
                { key: "r", label: "Licence RBQ", width: "1.1fr" },
                { key: "a", label: "Assurance", width: "1.1fr" },
                { key: "n", label: "Niveau", width: "0.8fr" },
                { key: "x", label: "Activité", width: "0.9fr", hideOnMobile: true },
                { key: "b", label: "Offres", width: "1.6fr" },
              ]}
              rows={all.map((s) => {
                const st = stats.get(s.installer.id)!;
                return {
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
                    x: (
                      <span>
                        <b>{st.answered ? pct(st.accepted / st.answered) : "—"}</b>
                        <small className="g-hint" style={{ display: "block", margin: 0 }}>
                          {st.load}
                          {s.installer.maxOpenJobs ? ` / ${s.installer.maxOpenJobs}` : ""} en cours
                        </small>
                      </span>
                    ),
                    b: s.blockers.length ? <span style={{ color: "var(--g-bad)", fontWeight: 600, fontSize: 13 }}>{s.blockers.map((x) => x.label).join(" · ")}</span> : <Chip tone="ok">Offres permises</Chip>,
                  },
                };
              })}
            />
          )}
        </>
      ) : (
        <EmptyState
          icon={<HardHat size={20} />}
          title="Aucun installateur pour l’instant"
          body="Ajoutez-en un, ou partez d’une candidature reçue."
          action={
            <Link href="/gestion/partenaires/nouveau" className="k-btn k-btn--primary">
              <Plus size={16} aria-hidden /> Ajouter un installateur
            </Link>
          }
        />
      )}
    </>
  );
}
