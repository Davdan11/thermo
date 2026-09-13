/* ==================================================================
   /gestion/recrutement — Chantier R : zones à recruter (demandes
   réelles sans preneur), candidatures évaluées automatiquement,
   accueil des nouveaux partenaires, état de la vérification RBQ.
   ================================================================== */
import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, Inbox, MapPinned, ShieldCheck, UserPlus } from "lucide-react";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { brandLabel } from "@/lib/gestion/catalog";
import { longDate, longDateTime } from "@/lib/gestion/partenaires/format";
import { regionName } from "@/lib/gestion/regions";
import { SCORE_RULES, zoneAnchor } from "@/lib/gestion/reseau/recrutement";
import { RBQ_OUTCOME_LABELS, RBQ_RUN_LABELS } from "@/lib/gestion/reseau/rbq/types";
import { BLOCKING_OUTCOMES, RBQ_DATASET_URL, RBQ_REGISTRY_URL } from "@/lib/gestion/reseau/rbq/verify";
import { recrutementView } from "@/lib/gestion/reseau/views";
import { ZONE_STATUS_LABELS } from "@/lib/gestion/reseau/zones";
import { reseauSettingsAction } from "../reseau-actions";
import { Card, SectionHeader } from "@/components/gestion/kit/Card";
import { Chip } from "@/components/gestion/kit/Chip";
import { EmptyState } from "@/components/gestion/kit/EmptyState";
import { KpiTile } from "@/components/gestion/kit/KpiTile";
import { Reveal } from "@/components/gestion/Reveal";
import { ActionForm } from "@/components/partenaires/admin/AdminTools";
import "@/components/gestion/reseau/reseau.css";

export const metadata: Metadata = { title: "Recrutement" };

const plural = (n: number, one: string, many: string) => `${n} ${n > 1 ? many : one}`;

function Bar({ label, value, max }: { label: string; value: number; max: number }) {
  const p = Math.max(0, Math.min(1, Math.abs(value) / max));
  return (
    <div className="rs-bar">
      <span>{label}</span>
      <span className="rs-progress" aria-hidden>
        <i className={value < 0 ? "is-neg" : undefined} style={{ transform: `scaleX(${p})` }} />
      </span>
      <b>{value > 0 ? `+${value}` : value}</b>
    </div>
  );
}

export default async function RecrutementPage() {
  await requireAdmin();
  const v = await recrutementView();
  const s = v.settings;
  const run = v.rbq.lastRun;

  return (
    <>
      <Reveal className="k-pagehead">
        <div>
          <p className="k-eyebrow">Réseau</p>
          <h1 className="k-h1">
            Recrutement <em>ciblé</em>
          </h1>
          <p className="k-lead">Là où des clients demandent et où personne ne peut répondre. Une tâche « Recruter à … » part dans À faire dès {plural(s.recruitMinDemands, "demande", "demandes")} en {s.recruitDays} jours.</p>
        </div>
        <div className="g-actions">
          <Link href="/gestion/carte" className="k-btn">
            <MapPinned size={16} aria-hidden /> Carte
          </Link>
          <Link href="/gestion/candidatures" className="k-btn k-btn--ghost">
            <Inbox size={16} aria-hidden /> Candidatures
          </Link>
        </div>
      </Reveal>

      <div className="cr-grid3" style={{ marginBottom: 8 }}>
        <KpiTile label="Zones à recruter" value={v.gaps.length} tone={v.gaps.length ? "orange" : "paper"} sub={`${plural(v.gaps.reduce((n, z) => n + z.demands, 0), "demande", "demandes")} en ${s.recruitDays} jours`} />
        <KpiTile label="Zones saturées" value={v.saturated.length} sub="personne de disponible" />
        <KpiTile label="Candidatures à évaluer" value={v.candidates.length} tone="ink" sub="nouvelles" />
        <KpiTile label="Licences bloquées" icon={<ShieldCheck size={16} />} value={v.rbq.blocked} sub={`${v.rbq.active} actives · ${v.rbq.unchecked} non vérifiées`} />
      </div>

      <section className="rs-section">
        <SectionHeader n="01" eyebrow="Trous" title="Zones à" accent="recruter" lead={`Par MRC, demandes des ${s.recruitDays} derniers jours.`} />
        {v.gaps.length || v.saturated.length ? (
          <ol className="rs-zonelist">
            {[...v.gaps, ...v.saturated].map((z, i) => (
              <li key={z.key} id={zoneAnchor(z.key)} style={{ ["--i" as string]: i }}>
                <div className={`rs-zonerow is-${z.status}`}>
                  <div>
                    <div className="rs-zonerow__name">{z.mode === "rta" && z.key.startsWith("rta:") ? `${z.place} · ${z.label}` : z.label}</div>
                    <Chip tone={z.status === "saturee" ? "orange" : "bad"} dot>
                      {ZONE_STATUS_LABELS[z.status]}
                    </Chip>{" "}
                    {z.region ? <small className="g-hint">{regionName(z.region)}</small> : null}
                  </div>
                  <div className="rs-zonerow__count">
                    {z.demands}
                    <small>demande{z.demands > 1 ? "s" : ""}</small>
                  </div>
                  <div className="rs-zonerow__who">
                    {z.covering.length ? z.covering.map((c) => <span key={c.id}>{c.company} : {c.reason ?? c.state}</span>) : "Aucun installateur ne couvre cette zone."}
                    {z.demands >= s.recruitMinDemands && z.status !== "saturee" ? <span>· tâche « Recruter à {z.place} » dans À faire</span> : null}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        ) : (
          <EmptyState compact title="Aucun trou dans le réseau" body={`Toutes les zones avec des demandes dans les ${s.recruitDays} derniers jours ont un installateur disponible.`} />
        )}
      </section>

      <section className="rs-section">
        <SectionHeader n="02" eyebrow="Candidatures" title="Évaluées" accent="automatiquement" lead={SCORE_RULES} />
        {v.candidates.length ? (
          <ul className="rs-cands">
            {v.candidates.map((e, i) => (
              <li key={e.candidature.id} className="rs-cand" style={{ ["--i" as string]: i }}>
                <div className="rs-cand__top">
                  <div style={{ minWidth: 0 }}>
                    <div className="g-cand__name">{e.candidature.company}</div>
                    <div className="g-cand__sub">Reçue le {longDate(e.candidature.receivedAt)} · {e.candidature.regionText || "région non précisée"}</div>
                  </div>
                  <div className="rs-score">
                    {e.score}
                    <small>points</small>
                  </div>
                </div>
                <div className="rs-bars">
                  <Bar label="Trou comblé" value={e.points.trou} max={50} />
                  <Bar label="Licence RBQ" value={e.points.rbq} max={40} />
                  <Bar label="Marques" value={e.points.marques} max={20} />
                </div>
                <ul className="rs-reasons">
                  {e.reasons.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                  {e.warnings.map((w) => (
                    <li key={w} className="is-warn">
                      {w}
                    </li>
                  ))}
                </ul>
                {e.brands.length ? (
                  <div className="g-tags">
                    {e.brands.map((b) => (
                      <Chip key={b} tone="ok">
                        {brandLabel(b)}
                      </Chip>
                    ))}
                  </div>
                ) : null}
                <div className="g-actions">
                  {e.rbq ? (
                    <Chip tone={e.rbq.outcome === "active" ? "ok" : BLOCKING_OUTCOMES.has(e.rbq.outcome) ? "bad" : "warn"} dot>
                      RBQ : {RBQ_OUTCOME_LABELS[e.rbq.outcome]}
                    </Chip>
                  ) : null}
                  <Link href={`/gestion/partenaires/nouveau?candidature=${e.candidature.id}`} className="k-btn k-btn--primary">
                    <UserPlus size={16} aria-hidden /> Ajouter comme installateur
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <EmptyState compact icon={<Inbox size={20} />} title="Aucune candidature nouvelle" body="Elles arrivent par la page Partenaires du site." />
        )}
      </section>

      <section className="rs-section">
        <SectionHeader n="03" eyebrow="Accueil" title="Nouveaux" accent="partenaires" lead="Entente, identité légale, licence RBQ, assurance, disponibilités : dans cet ordre." />
        {v.onboarding.length ? (
          <div className="rs-cands">
            {v.onboarding.map((r, i) => (
              <article key={r.installer.id} className="rs-onb rs-cand" style={{ ["--i" as string]: i }}>
                <div className="rs-onb__top">
                  <div>
                    <div className="g-cand__name">{r.installer.company}</div>
                    <div className="g-cand__sub">Partenaire depuis le {longDate(r.installer.createdAt)}</div>
                  </div>
                  <b>
                    {r.done}/{r.total}
                  </b>
                </div>
                <span className="rs-progress" aria-label={`${r.done} étapes sur ${r.total}`}>
                  <i style={{ transform: `scaleX(${r.done / r.total})` }} />
                </span>
                <p className="g-hint" style={{ margin: 0 }}>
                  {r.steps
                    .filter((x) => x.state !== "fait")
                    .map((x) => x.label)
                    .join(" · ") || "Tout est en règle."}
                </p>
                <Link href={`/gestion/recrutement/accueil/${r.installer.id}`} className="k-btn">
                  Ouvrir l’accueil
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <EmptyState compact title="Aucun accueil en cours" body="Les partenaires ajoutés depuis 60 jours et ceux à qui il manque une étape apparaissent ici." />
        )}
      </section>

      <section className="rs-section">
        <SectionHeader n="04" eyebrow="Conformité" title="Licences" accent="RBQ" lead="Vérifiées chaque nuit au fichier ouvert des licences actives de la RBQ (Données Québec, licence CC-BY 4.0)." />
        <div className="rs-cands">
          <Card title="Vérification automatique" sub={v.rbq.enabled ? "Active (RBQ_VERIFICATION_ACTIVE=1)" : "Désactivée : RBQ_VERIFICATION_ACTIVE n’est pas à 1"}>
            {run ? (
              <dl className="g-kv">
                <dt>Dernier passage</dt>
                <dd>{longDateTime(run.at)}</dd>
                <dt>Résultat</dt>
                <dd>
                  <Chip tone={run.status === "ok" ? "ok" : run.status === "desactive" || run.status === "hors-production" ? "muted" : "bad"} dot>
                    {RBQ_RUN_LABELS[run.status]}
                  </Chip>
                  <br />
                  <small>{run.detail}</small>
                </dd>
                {run.source ? (
                  <>
                    <dt>Fichier</dt>
                    <dd>
                      {run.source.licences.toLocaleString("fr-CA")} licences, {run.source.rows.toLocaleString("fr-CA")} lignes · {run.source.encoding} · séparateur « {run.source.delimiter} »
                    </dd>
                  </>
                ) : null}
              </dl>
            ) : (
              <p className="g-hint">Aucun passage pour l’instant. Aucun statut n’est affiché tant que le fichier de la RBQ n’a pas été lu.</p>
            )}
            <div className="g-actions" style={{ marginTop: 12 }}>
              <a href={RBQ_REGISTRY_URL} target="_blank" rel="noreferrer" className="k-btn">
                <ExternalLink size={14} aria-hidden /> Registre public
              </a>
              <a href={RBQ_DATASET_URL} target="_blank" rel="noreferrer" className="k-btn k-btn--ghost">
                <ExternalLink size={14} aria-hidden /> Jeu de données
              </a>
            </div>
          </Card>
          <Card title="Réglages" sub={s.updatedAt ? `Modifiés le ${longDate(s.updatedAt)}` : "Valeurs par défaut"}>
            <ActionForm action={reseauSettingsAction} submit="Enregistrer">
              <div className="g-field">
                <label className="g-label" htmlFor="rs-sub">
                  Sous-catégories RBQ exigées <small>(codes séparés par des virgules ; vide : aucune)</small>
                </label>
                <input id="rs-sub" name="subcategories" className="g-input" defaultValue={s.relevantSubcategories.join(", ")} maxLength={200} placeholder="Codes tels qu’au registre" />
                <p className="g-hint">Choisissez-les d’après le registre de la RBQ ; une licence sans ces codes crée une tâche (sans bloquer).</p>
              </div>
              <div className="g-row g-row--2">
                <div className="g-field">
                  <label className="g-label" htmlFor="rs-min">
                    Demandes avant une tâche
                  </label>
                  <input id="rs-min" name="recruitMinDemands" type="number" min={1} max={100} className="g-input" defaultValue={s.recruitMinDemands} />
                </div>
                <div className="g-field">
                  <label className="g-label" htmlFor="rs-days">
                    Fenêtre (jours)
                  </label>
                  <input id="rs-days" name="recruitDays" type="number" min={7} max={730} className="g-input" defaultValue={s.recruitDays} />
                </div>
              </div>
            </ActionForm>
          </Card>
        </div>
      </section>
    </>
  );
}
