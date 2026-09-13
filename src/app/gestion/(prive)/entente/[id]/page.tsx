/* /gestion/entente/[id] — une version de l'entente : édition (brouillon), validation « texte final », publication.
   Conformité C3 : entente maître tirée de la trousse : champs entre crochets (plateforme remplie depuis son identité,
   champs propres à l'entente, installateur rempli à l'envoi), renvois internes vérifiés, aperçu complet avec annexes. */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, Link2, ListChecks, TriangleAlert } from "lucide-react";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { agreementHash, crossRefs, isNumbered, resolveVersion } from "@/lib/gestion/partenaires/agreement";
import { longDate, longDateTime } from "@/lib/gestion/partenaires/format";
import { agreementPlatformValues, PLATFORM_KEYS, SIGNING_TOKENS, tokensIn } from "@/lib/gestion/partenaires/jetons";
import { readPartenaires } from "@/lib/gestion/partenaires/store";
import { readGestion } from "@/lib/gestion/store";
import { AGREEMENT_ID_RE, AGREEMENT_STATUS_LABELS } from "@/lib/gestion/partenaires/types";
import { platformIssues, readPlatformIdentity } from "@/lib/plateforme/identite";
import { deleteDraftAction, publishVersionAction, saveDraftAction, saveVersionFieldsAction, unvalidateVersionAction, validateVersionAction } from "../../partenaires-actions";
import { Card } from "@/components/gestion/kit/Card";
import { Chip } from "@/components/gestion/kit/Chip";
import { Reveal } from "@/components/gestion/Reveal";
import { SubmitButton } from "@/components/gestion/SubmitButton";
import { ActionButton, ActionForm } from "@/components/partenaires/admin/AdminTools";
import { ClauseEditor } from "@/components/partenaires/admin/ClauseEditor";
import { AgreementText } from "@/components/partenaires/AgreementText";
import "@/components/partenaires/admin/partenaires.css";
import "@/components/partenaires/admin/conformite.css";

export const metadata: Metadata = { title: "Version de l’entente" };

export default async function VersionPage({ params }: { params: Promise<{ id: string }> }) {
  await requireAdmin();
  const { id } = await params;
  if (!AGREEMENT_ID_RE.test(id)) notFound();
  const [d, g, identity] = await Promise.all([readPartenaires(), readGestion(), readPlatformIdentity()]);
  const v = d.agreements.find((a) => a.id === id);
  if (!v) notFound();
  const sigs = d.signatures.filter((s) => s.versionId === v.id);
  const company = (iid: string) => g.installers.find((i) => i.id === iid)?.company ?? "—";

  // Conformité C3 : aperçu avec l'identité actuelle tant que la version n'est pas validée ; ensuite, valeurs figées.
  const master = Boolean(v.source || v.parties?.length || v.signatureBlock);
  const resolved = resolveVersion(v, v.platformFill ? {} : { platform: agreementPlatformValues(identity, v.fields) });
  const issues = platformIssues(identity);
  const refs = master ? crossRefs(v) : [];
  const badRefs = refs.filter((r) => !r.ok);
  const identityKeys = resolved.missing.platform.filter((k) => PLATFORM_KEYS.has(k));
  const fieldKeys = [...new Set([...Object.keys(v.fields ?? {}), ...resolved.missing.platform.filter((k) => !PLATFORM_KEYS.has(k))])];
  const partnerKeys = [...new Set((v.parties ?? []).filter((p) => p.party === "partenaire").flatMap((p) => tokensIn(p.text)))];

  const fieldsCard = master ? (
    <Card title="Champs entre crochets" sub="Remplis automatiquement : la plateforme à la validation, l’installateur à l’envoi, le signataire à la signature.">
      <div className="cr-stack">
        <div>
          <p className="k-eyebrow" style={{ marginBottom: 6 }}>
            Plateforme
          </p>
          {v.platformFill ? (
            <p className="g-hint" style={{ margin: 0 }}>Figés à la validation, depuis l’identité légale de la plateforme.</p>
          ) : issues.length || identityKeys.length ? (
            <p className="g-alert" style={{ margin: 0 }}>
              <TriangleAlert size={14} aria-hidden style={{ verticalAlign: -2 }} /> Identité de la plateforme à compléter : {issues.length ? issues.map((i) => i.label).join(", ") : identityKeys.map((k) => `[${k}]`).join(", ")}.
            </p>
          ) : (
            <p className="g-hint" style={{ margin: 0 }}>Identité complète : les champs seront figés à la validation.</p>
          )}
        </div>
        {fieldKeys.length ? (
          <div>
            <p className="k-eyebrow" style={{ marginBottom: 6 }}>
              Propres à l’entente
            </p>
            {v.status === "brouillon" ? (
              <ActionForm action={saveVersionFieldsAction.bind(null, v.id)} submit="Enregistrer les champs" pending="…">
                {fieldKeys.map((k) => (
                  <div key={k} className="g-field">
                    <label className="g-label" htmlFor={`f-${k}`}>
                      [{k}]
                    </label>
                    <input id={`f-${k}`} name={`f:${k}`} className="g-input" defaultValue={v.fields?.[k] ?? ""} maxLength={200} />
                  </div>
                ))}
              </ActionForm>
            ) : (
              <dl className="g-kv">
                {fieldKeys.map((k) => (
                  <div key={k} style={{ display: "contents" }}>
                    <dt>[{k}]</dt>
                    <dd>{v.fields?.[k] ?? "—"}</dd>
                  </div>
                ))}
              </dl>
            )}
          </div>
        ) : null}
        {partnerKeys.length ? (
          <div>
            <p className="k-eyebrow" style={{ marginBottom: 6 }}>
              Installateur (pour chaque partenaire)
            </p>
            <div className="pa-chips">
              {partnerKeys.map((k) => (
                <Chip key={k} tone={SIGNING_TOKENS.has(k) ? "blue" : "muted"}>
                  [{k}] · {SIGNING_TOKENS.has(k) ? "à la signature" : "à l’envoi, depuis sa fiche"}
                </Chip>
              ))}
            </div>
          </div>
        ) : null}
        {resolved.missing.form.length ? <p className="g-hint" style={{ margin: 0 }}>{resolved.missing.form.length} champs du gabarit d’annexe restent à consigner pour chaque projet : ils ne bloquent rien.</p> : null}
      </div>
    </Card>
  ) : null;

  const refsCard = master ? (
    <Card title="Renvois internes" sub={`${refs.length} renvoi${refs.length > 1 ? "s" : ""} « article … » ou « annexe … » dans le texte`} action={badRefs.length ? <Chip tone="bad" dot>{badRefs.length} à corriger</Chip> : <Chip tone="ok" dot>Justes</Chip>}>
      {badRefs.length ? (
        <ul className="pa-history">
          {badRefs.map((r, i) => (
            <li key={i}>
              <b>
                {r.kind === "article" ? "Article" : "Annexe"} {r.target}
              </b>{" "}
              introuvable
              <small>dans {r.from}</small>
            </li>
          ))}
        </ul>
      ) : (
        <p className="g-hint" style={{ margin: 0 }}>
          <Link2 size={14} aria-hidden style={{ verticalAlign: -2 }} /> Chaque renvoi mène à un article ou une annexe de cette version : la numérotation de l’avocat est conservée.
        </p>
      )}
    </Card>
  ) : null;

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
              ? master
                ? "Entente maître tirée de la trousse. Relisez, complétez les champs propres à l’entente, puis validez : le texte et les valeurs de la plateforme seront figés."
                : "Remplacez chaque « [À rédiger par l’avocat] » par le texte fourni par l’avocat. Rien n’est envoyé tant que la version n’est pas validée puis publiée."
              : v.status === "validee"
                ? "Texte final validé : il ne change plus. Publiez-le pour le faire signer par tout le réseau."
                : v.status === "publiee"
                  ? `En vigueur depuis le ${v.publishedAt ? longDate(v.publishedAt) : "—"}.`
                  : `Remplacée le ${v.replacedAt ? longDate(v.replacedAt) : "—"}.`}
          </p>
          {v.source?.kind === "trousse" ? (
            <div className="pa-chips" style={{ marginTop: 10 }}>
              <Chip tone="blue">Trousse {v.source.version || "—"}</Chip>
              <Chip tone="muted">{v.articles.length} articles</Chip>
              {v.annexes?.length ? <Chip tone="muted">Annexes {v.annexes.map((a) => a.letter).join(", ")}</Chip> : null}
            </div>
          ) : null}
        </div>
      </Reveal>

      {v.status === "brouillon" ? (
        <div className="pa-grid">
          <div className="pa-stack">
            {v.headerNote ? (
              <p className="pa-banner" style={{ margin: 0 }}>
                <ListChecks size={20} aria-hidden />
                <span>
                  <b>Mention de la trousse (hors du texte signé)</b>
                  <br />
                  {v.headerNote}
                </span>
              </p>
            ) : null}
            <ClauseEditor versionId={v.id} numbered={isNumbered(v)} initial={{ title: v.title, preamble: v.preamble, articles: v.articles }} save={saveDraftAction} validate={validateVersionAction} />
            {master ? (
              <details className="g-details pa-preview-all">
                <summary>Aperçu complet : parties, articles, annexes et signatures</summary>
                <AgreementText r={resolved} variant="admin" />
              </details>
            ) : null}
            <form action={deleteDraftAction.bind(null, v.id)}>
              <SubmitButton className="g-btn g-btn--danger" pendingLabel="…">
                Supprimer ce brouillon
              </SubmitButton>
            </form>
          </div>
          <aside className="pa-stack">
            {fieldsCard}
            {refsCard}
          </aside>
        </div>
      ) : (
        <div className="pa-grid">
          <Card title={resolved.title || v.title} sub={`Empreinte SHA-256 du texte : ${v.textSha256 ?? agreementHash(v)}`}>
            <AgreementText r={resolved} variant="admin" />
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
            {fieldsCard}
            {refsCard}
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
