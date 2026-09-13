/* ==================================================================
   /gestion/entente — versions de l'entente de partenariat.
   1. Brouillon (texte de l'avocat) → 2. « Texte final validé » →
   3. Publiée : tous les partenaires doivent la signer.
   Le gabarit ne contient que les titres des articles ; chaque
   paragraphe marqué « [À rédiger par l'avocat] » bloque la validation.
   Conformité C3 : « Créer une version depuis la trousse importée » :
   l'entente maître (parties, articles 2.1 à 2.n, annexes) est lue dans
   trousse.json, jamais dans le code.
   ================================================================== */
import type { Metadata } from "next";
import Link from "next/link";
import { BookOpenCheck, FilePen, FileSignature, Plus } from "lucide-react";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { placeholderRefs, publishedVersion } from "@/lib/gestion/partenaires/agreement";
import { agreementFromTrousse } from "@/lib/gestion/partenaires/entente-trousse";
import { longDate } from "@/lib/gestion/partenaires/format";
import { readPartenaires } from "@/lib/gestion/partenaires/store";
import { AGREEMENT_STATUS_LABELS } from "@/lib/gestion/partenaires/types";
import { platformIssues, readPlatformIdentity } from "@/lib/plateforme/identite";
import { readTrousse, trousseLoaded } from "@/lib/plateforme/trousse";
import { createDraftAction, createDraftFromTrousseAction, sendAgreementToAllAction } from "../partenaires-actions";
import { Card } from "@/components/gestion/kit/Card";
import { Chip, type ChipTone } from "@/components/gestion/kit/Chip";
import { EmptyState } from "@/components/gestion/kit/EmptyState";
import { Reveal, StaggerList } from "@/components/gestion/Reveal";
import { SubmitButton } from "@/components/gestion/SubmitButton";
import { ActionButton } from "@/components/partenaires/admin/AdminTools";
import "@/components/partenaires/admin/partenaires.css";

export const metadata: Metadata = { title: "Entente de partenariat" };

const TONE: Record<string, ChipTone> = { brouillon: "warn", validee: "blue", publiee: "ok", remplacee: "muted" };

export default async function EntentePage() {
  await requireAdmin();
  const [d, trousse, identity] = await Promise.all([readPartenaires(), readTrousse(), readPlatformIdentity()]);
  const versions = [...d.agreements].sort((a, b) => b.number - a.number);
  const live = publishedVersion(d);
  const draft = versions.find((v) => v.status === "brouillon" || v.status === "validee");
  // Conformité C3 : ce que la trousse importée contient (comptes seulement : aucun texte affiché ici).
  const built = trousseLoaded(trousse) ? agreementFromTrousse(trousse) : null;
  const issues = platformIssues(identity);

  return (
    <>
      <Reveal className="k-pagehead">
        <div>
          <p className="k-eyebrow">Réseau</p>
          <h1 className="k-h1">
            Entente <em>de partenariat</em>
          </h1>
          <p className="k-lead">Le texte vient de l’avocat. L’outil garde les versions, bloque l’envoi tant qu’une version n’est pas marquée « texte final validé », et fait re-signer tout le réseau à chaque nouvelle version.</p>
        </div>
        {draft ? (
          <Link href={`/gestion/entente/${draft.id}`} className="k-btn k-btn--primary k-btn--lg">
            <FilePen size={18} aria-hidden /> Reprendre la version {draft.number}
          </Link>
        ) : (
          <form action={createDraftAction}>
            <SubmitButton className="k-btn k-btn--primary k-btn--lg" pendingLabel="…">
              <Plus size={18} aria-hidden /> {live ? "Préparer une nouvelle version" : "Commencer l’entente"}
            </SubmitButton>
          </form>
        )}
      </Reveal>

      <ol className="pa-steps" style={{ marginBottom: 22 }}>
        <li className={versions.length ? "is-done" : "is-now"}>
          <b>1. Rédiger</b>Texte de l’avocat, article par article
        </li>
        <li className={versions.some((v) => v.validatedAt) ? "is-done" : versions.length ? "is-now" : ""}>
          <b>2. Valider</b>« Texte final validé » : il ne change plus
        </li>
        <li className={live ? "is-done" : versions.some((v) => v.status === "validee") ? "is-now" : ""}>
          <b>3. Publier</b>Tous les partenaires signent
        </li>
      </ol>

      {/* Conformité C3 : entente maître depuis la trousse importée. */}
      <Reveal>
        <Card
          title="Entente maître de la trousse"
          sub={trousseLoaded(trousse) ? `Trousse ${trousse.version || "(version inconnue)"}${trousse.sourceDate ? ` du ${trousse.sourceDate}` : ""} · importée${trousse.importedAt ? ` le ${longDate(trousse.importedAt)}` : ""}` : "Aucune trousse importée"}
          action={built?.ok ? <Chip tone="ok" dot>Prête</Chip> : <Chip tone="muted">À importer</Chip>}
        >
          {built?.ok ? (
            <div className="cr-stack">
              <dl className="g-kv">
                <dt>Articles</dt>
                <dd>
                  {built.value.articles.length} ({built.value.articles[0]?.number} à {built.value.articles.at(-1)?.number}, numéros de l’avocat)
                </dd>
                <dt>Annexes</dt>
                <dd>{built.value.annexes.map((a) => a.letter).join(", ") || "aucune"}</dd>
                <dt>Parties</dt>
                <dd>{built.value.parties.filter((p) => p.party).length} paragraphes, champs remplis à la validation (plateforme) et à l’envoi (installateur)</dd>
                <dt>Empreinte</dt>
                <dd>
                  <code>{trousse.sha256?.slice(0, 16)}…</code>
                </dd>
              </dl>
              {issues.length ? (
                <p className="g-hint" style={{ margin: 0 }}>
                  Identité de la plateforme : {issues.length} champ{issues.length > 1 ? "s" : ""} à compléter avant la validation ({issues.map((i) => i.label).join(", ")}).
                </p>
              ) : null}
              {draft ? (
                <p className="g-hint" style={{ margin: 0 }}>
                  La version {draft.number} est en préparation : terminez-la ou supprimez-la pour en créer une depuis la trousse.
                </p>
              ) : (
                <ActionButton action={createDraftFromTrousseAction} className="k-btn k-btn--ink" pending="Création…">
                  <BookOpenCheck size={16} aria-hidden /> Créer une version depuis la trousse importée
                </ActionButton>
              )}
            </div>
          ) : (
            <p className="g-hint" style={{ margin: 0 }}>
              {built && !built.ok ? built.error : "Importez la trousse (fichier .txt, jamais dans le dépôt) :"} <code>npx tsx scripts/importer-trousse.ts &lt;fichier.txt&gt;</code>
            </p>
          )}
        </Card>
      </Reveal>

      {live ? (
        <div style={{ marginTop: 18 }}>
          <Reveal className="pa-banner pa-banner--ink">
            <FileSignature size={22} aria-hidden />
            <div style={{ display: "grid", gap: 10 }}>
              <div>
                <b>Version {live.number} en vigueur depuis le {live.publishedAt ? longDate(live.publishedAt) : "—"}</b>
                <p>{d.signatures.filter((s) => s.versionId === live.id).length} signature(s). Délai de grâce : {live.graceDays ?? d.settings.graceDays} jours pour les partenaires déjà en place.</p>
              </div>
              <ActionButton action={sendAgreementToAllAction} className="k-btn k-btn--primary" pending="Envoi…">
                Envoyer à tous ceux qui doivent signer
              </ActionButton>
            </div>
          </Reveal>
        </div>
      ) : null}

      <div style={{ height: 18 }} aria-hidden />
      {versions.length ? (
        <StaggerList className="g-cards">
          {versions.map((v) => {
            const todo = placeholderRefs(v).length;
            const count = d.signatures.filter((s) => s.versionId === v.id).length;
            return (
              <Link key={v.id} href={`/gestion/entente/${v.id}`} className="g-inst" style={{ height: "100%" }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                  <div className="g-cand__name">Version {v.number}</div>
                  <Chip tone={TONE[v.status]} dot>
                    {AGREEMENT_STATUS_LABELS[v.status]}
                  </Chip>
                </div>
                <div className="g-cand__sub">
                  {v.title}
                  {v.source?.kind === "trousse" ? " · entente maître" : ""}
                </div>
                <dl className="g-kv">
                  <dt>Créée</dt>
                  <dd>{longDate(v.createdAt)}</dd>
                  {v.validatedAt ? (
                    <>
                      <dt>Validée</dt>
                      <dd>{longDate(v.validatedAt)}</dd>
                    </>
                  ) : null}
                  {v.publishedAt ? (
                    <>
                      <dt>Publiée</dt>
                      <dd>{longDate(v.publishedAt)}</dd>
                    </>
                  ) : null}
                  <dt>Articles</dt>
                  <dd>
                    {v.articles.length}
                    {v.annexes?.length ? ` · ${v.annexes.length} annexes` : ""}
                  </dd>
                  <dt>Signatures</dt>
                  <dd>{count}</dd>
                </dl>
                {v.status === "brouillon" && todo ? <Chip tone="warn">{todo} paragraphe{todo > 1 ? "s" : ""} à rédiger par l’avocat</Chip> : null}
              </Link>
            );
          })}
        </StaggerList>
      ) : (
        <EmptyState icon={<FileSignature size={20} />} title="Aucune version pour l’instant" body="Créez la version depuis la trousse importée, ou commencez l’entente : le gabarit contient les onze articles prévus, sans aucun texte juridique." />
      )}
    </>
  );
}
