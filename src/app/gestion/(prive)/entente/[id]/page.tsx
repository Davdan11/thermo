/* /gestion/entente/[id] — une version de l'entente : édition (brouillon), validation « texte final », publication. */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { agreementHash, clauseRef } from "@/lib/gestion/partenaires/agreement";
import { longDate, longDateTime } from "@/lib/gestion/partenaires/format";
import { readPartenaires } from "@/lib/gestion/partenaires/store";
import { readGestion } from "@/lib/gestion/store";
import { AGREEMENT_ID_RE, AGREEMENT_STATUS_LABELS, PLACEHOLDER_RE } from "@/lib/gestion/partenaires/types";
import { deleteDraftAction, publishVersionAction, saveDraftAction, unvalidateVersionAction, validateVersionAction } from "../../partenaires-actions";
import { Card } from "@/components/gestion/kit/Card";
import { Chip } from "@/components/gestion/kit/Chip";
import { Reveal } from "@/components/gestion/Reveal";
import { SubmitButton } from "@/components/gestion/SubmitButton";
import { ActionButton, ActionForm } from "@/components/partenaires/admin/AdminTools";
import { ClauseEditor } from "@/components/partenaires/admin/ClauseEditor";
import "@/components/partenaires/admin/partenaires.css";

export const metadata: Metadata = { title: "Version de l’entente" };

export default async function VersionPage({ params }: { params: Promise<{ id: string }> }) {
  await requireAdmin();
  const { id } = await params;
  if (!AGREEMENT_ID_RE.test(id)) notFound();
  const [d, g] = await Promise.all([readPartenaires(), readGestion()]);
  const v = d.agreements.find((a) => a.id === id);
  if (!v) notFound();
  const sigs = d.signatures.filter((s) => s.versionId === v.id);
  const company = (iid: string) => g.installers.find((i) => i.id === iid)?.company ?? "—";

  return (
    <>
      <Reveal className="k-pagehead">
        <div>
          <Link href="/gestion/entente" className="k-link">
            <ChevronLeft size={15} aria-hidden /> Entente
          </Link>
          <h1 className="k-h1">
            Version {v.number} <em>{AGREEMENT_STATUS_LABELS[v.status].toLowerCase()}</em>
          </h1>
          <p className="k-lead">
            {v.status === "brouillon"
              ? "Remplacez chaque « [À rédiger par l’avocat] » par le texte fourni par l’avocat. Rien n’est envoyé tant que la version n’est pas validée puis publiée."
              : v.status === "validee"
                ? "Texte final validé : il ne change plus. Publiez-le pour le faire signer par tout le réseau."
                : v.status === "publiee"
                  ? `En vigueur depuis le ${v.publishedAt ? longDate(v.publishedAt) : "—"}.`
                  : `Remplacée le ${v.replacedAt ? longDate(v.replacedAt) : "—"}.`}
          </p>
        </div>
      </Reveal>

      {v.status === "brouillon" ? (
        <>
          <ClauseEditor versionId={v.id} initial={{ title: v.title, preamble: v.preamble, articles: v.articles }} save={saveDraftAction} validate={validateVersionAction} />
          <form action={deleteDraftAction.bind(null, v.id)} style={{ marginTop: 24 }}>
            <SubmitButton className="g-btn g-btn--danger" pendingLabel="…">
              Supprimer ce brouillon
            </SubmitButton>
          </form>
        </>
      ) : (
        <div className="pa-grid">
          <Card title={v.title} sub={`Empreinte SHA-256 du texte : ${v.textSha256 ?? agreementHash(v)}`}>
            <div className="pa-read">
              {v.preamble ? <p style={{ gridTemplateColumns: "1fr", color: "var(--g-muted)" }}>{v.preamble}</p> : null}
              {v.articles.map((a, i) => (
                <section key={i} className="pa-art">
                  <h3>
                    Article {i + 1} — {a.title}
                  </h3>
                  {a.paragraphs.map((p, j) => (
                    <p key={j} className={PLACEHOLDER_RE.test(p) ? "is-todo" : ""}>
                      <b>{clauseRef(i, j)}</b>
                      <span>{p}</span>
                    </p>
                  ))}
                </section>
              ))}
            </div>
          </Card>
          <aside className="pa-stack">
            {v.status === "validee" ? (
              <>
                <Card title="Publier cette version" sub="Elle remplace la version en vigueur ; chaque partenaire devra la signer.">
                  <ActionForm action={publishVersionAction.bind(null, v.id)} submit="Publier" submitClass="k-btn k-btn--primary" pending="…">
                    <div className="g-field">
                      <label className="g-label" htmlFor="graceDays">
                        Délai de grâce <small>(jours, partenaires déjà en place)</small>
                      </label>
                      <input id="graceDays" name="graceDays" type="number" min={0} max={120} className="g-input" defaultValue={d.settings.graceDays} />
                    </div>
                    <label className="g-check">
                      <input type="checkbox" name="confirm" value="1" /> Tous les partenaires devront signer cette version
                    </label>
                  </ActionForm>
                </Card>
                <Card title="Corriger le texte">
                  <ActionButton action={unvalidateVersionAction.bind(null, v.id)} className="k-btn" confirm="Revenir au brouillon ? La validation sera retirée.">
                    Revenir au brouillon
                  </ActionButton>
                </Card>
              </>
            ) : null}
            <Card title="Suivi" sub={v.validatedAt ? `Validée le ${longDateTime(v.validatedAt)} par ${v.validatedBy ?? "—"}` : undefined}>
              {v.publishedAt ? (
                <p className="g-hint" style={{ marginTop: 0 }}>
                  Publiée le {longDateTime(v.publishedAt)} · délai de grâce de {v.graceDays ?? d.settings.graceDays} jours
                </p>
              ) : null}
              <p className="k-eyebrow" style={{ marginTop: 10 }}>
                Signatures ({sigs.length})
              </p>
              {sigs.length ? (
                <ul className="pa-history">
                  {sigs.map((s) => (
                    <li key={s.id}>
                      <Link href={`/gestion/partenaires/${s.installerId}`}>{company(s.installerId)}</Link> · {s.signerName}
                      <small>{longDateTime(s.signedAt)}</small>
                    </li>
                  ))}
                </ul>
              ) : (
                <Chip tone="muted">Aucune</Chip>
              )}
            </Card>
          </aside>
        </div>
      )}
    </>
  );
}
