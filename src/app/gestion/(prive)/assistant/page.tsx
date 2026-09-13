/* ==================================================================
   Chantier A — Assistant IA : état (clé présente ou non, jamais sa
   valeur), usage du mois, plafond, tarifs saisis par le propriétaire,
   journal des questions (masquées, sans les réponses).
   ================================================================== */

import type { Metadata } from "next";
import Link from "next/link";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { assistantMode, CRM_ASSISTANT_LIMITS as L, crmAssistantModel, monthlyBudgetCents } from "@/lib/gestion/assistant/config";
import { budgetState, totalTokens } from "@/lib/gestion/assistant/cost";
import { monthUsage, readAssistant } from "@/lib/gestion/assistant/store";
import { TOOL_LABELS } from "@/lib/gestion/assistant/tools";
import { localYmd, stamp } from "@/lib/gestion/crm/time";
import { Card, SectionHeader } from "@/components/gestion/kit/Card";
import { Chip } from "@/components/gestion/kit/Chip";
import { DataTable } from "@/components/gestion/kit/DataTable";
import { EmptyState } from "@/components/gestion/kit/EmptyState";
import { KpiTile } from "@/components/gestion/kit/KpiTile";
import { dollars, num } from "@/components/gestion/kit/format";
import { Reveal } from "@/components/gestion/Reveal";
import { PricesForm } from "@/components/gestion/assistant/PricesForm";
import { OpenAssistantButton } from "@/components/gestion/assistant/SummarizeButton";

export const metadata: Metadata = { title: "Assistant IA" };

const cents2 = (c: number) => `${(c / 100).toLocaleString("fr-CA", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} $`;
const OUTCOME: Record<string, { label: string; tone: "ok" | "warn" | "bad" | "muted" }> = {
  ok: { label: "Répondu", tone: "ok" },
  coupee: { label: "Coupée", tone: "warn" },
  refus: { label: "Refusée", tone: "warn" },
  erreur: { label: "Erreur", tone: "bad" },
};

export default async function AssistantPage() {
  await requireAdmin();
  const now = new Date();
  const data = await readAssistant();
  const month = localYmd(now).slice(0, 7);
  const u = monthUsage(data, month);
  const budgetCents = monthlyBudgetCents();
  const b = budgetState(u, data.prices, budgetCents);
  const mode = assistantMode();
  const keyPresent = Boolean(process.env.ANTHROPIC_API_KEY?.trim());
  const rows = [...data.journal].reverse().slice(0, 60);

  return (
    <>
      <Reveal className="k-pagehead">
        <div>
          <p className="k-eyebrow">Analyse</p>
          <h1 className="k-h1">
            Demande <em>à Claude</em>
          </h1>
          <p className="k-lead">
            L’assistant lit le CRM en lecture seule (clients, tâches, pipeline, argent, canaux, rentabilité) et prépare des brouillons que vous envoyez vous-même. Ouvrez-le partout avec <kbd className="sh-kbd">Ctrl J</kbd> (<kbd className="sh-kbd">⌘J</kbd> sur Mac).
          </p>
        </div>
        <OpenAssistantButton />
      </Reveal>

      <div className="cr-grid3">
        <KpiTile label="État" value={mode === "api" ? "Branché" : mode === "simule" ? "Simulé" : "Non branché"} sub={mode === "simule" ? "Hors production : rien n’est envoyé" : mode === "api" ? crmAssistantModel() : "Clé ANTHROPIC_API_KEY absente"} tone="ink" />
        <KpiTile label="Questions ce mois-ci" value={u.questions} sub={`${num(u.requests)} appels à l’API`} />
        <KpiTile label="Jetons ce mois-ci" value={num(totalTokens(u))} sub={`${num(u.inputTokens)} lus · ${num(u.outputTokens)} écrits`} />
        <KpiTile
          label="Dépense ce mois-ci"
          value={b.spentCents === null ? "—" : cents2(b.spentCents)}
          sub={b.spentCents === null ? "Tarifs non saisis : jetons seulement" : b.budgetCents !== null ? `sur un plafond de ${dollars(b.budgetCents)}` : "Aucun plafond fixé"}
          tone={b.block ? "orange" : "paper"}
        />
      </div>

      <SectionHeader n="01" title="Réglages" lead="Les variables se règlent dans shared/.env (serveur) ; aucune valeur secrète n’est affichée ici." />
      <Reveal className="cr-grid2" delay={0.05}>
        <Card title="Branchement" sub="Présent ou manquant seulement.">
          <ul className="as-env">
            <li>
              <span>
                <strong>Clé de l’API</strong>
                <small>
                  <code>ANTHROPIC_API_KEY</code> · secret · ajoutée par vous
                </small>
              </span>
              <Chip tone={keyPresent ? "ok" : "warn"} dot>
                {keyPresent ? "Présente" : "Manquante"}
              </Chip>
            </li>
            <li>
              <span>
                <strong>Modèle</strong>
                <small>
                  <code>ANTHROPIC_MODEL</code> · facultatif
                </small>
              </span>
              <Chip tone="cream">{crmAssistantModel()}</Chip>
            </li>
            <li>
              <span>
                <strong>Plafond mensuel</strong>
                <small>
                  <code>ANTHROPIC_MONTHLY_BUDGET_CENTS</code> · en cents
                </small>
              </span>
              <Chip tone={budgetCents === null ? "warn" : "ok"} dot>
                {budgetCents === null ? "Aucun" : dollars(budgetCents)}
              </Chip>
            </li>
          </ul>
          <p className="g-hint" style={{ marginBottom: 0 }}>
            Limites : {L.perMinute} questions par minute, {L.perHour} par heure, une à la fois. Avec un plafond, les quatre tarifs sont obligatoires : sinon la dépense ne peut pas être vérifiée et l’assistant ne répond pas.
          </p>
        </Card>
        <Card title="Tarifs" sub="Saisis par vous, tels que publiés par Anthropic pour le modèle choisi. Aucun tarif n’est fixé dans le code." id="tarifs">
          <PricesForm prices={data.prices} />
          {data.pricesUpdatedAt ? (
            <p className="g-hint" style={{ margin: "10px 0 0" }}>
              Modifiés le {stamp(data.pricesUpdatedAt, now)}
              {data.pricesUpdatedBy ? ` par ${data.pricesUpdatedBy}` : ""}.
            </p>
          ) : null}
        </Card>
      </Reveal>

      <SectionHeader n="02" title="Confidentialité" />
      <Reveal delay={0.05}>
        <Card tone="cream">
          <ul className="as-privacy">
            <li>
              <strong>Envoyé à Anthropic :</strong> votre question et les données que les outils consultent pour y répondre (prénom et initiale du nom, ville, étapes, montants, dates, notes et chronologie masquées).
            </li>
            <li>
              <strong>Jamais envoyé :</strong> numéros de téléphone complets, courriels, adresses. Un numéro tapé dans une question devient « se terminant par 0142 ».
            </li>
            <li>
              <strong>Gardé ici :</strong> la question (masquée, 240 caractères), les outils consultés, les jetons et le coût. Les réponses ne sont pas conservées.
            </li>
            <li>
              <strong>Aucune action :</strong> l’assistant ne modifie rien et n’envoie rien. Les brouillons s’ouvrent dans votre courriel ou dans Textos ; c’est vous qui envoyez.
            </li>
          </ul>
        </Card>
      </Reveal>

      <SectionHeader n="03" title="Journal des questions" accent={rows.length ? `${rows.length} dernières` : undefined} lead="Questions masquées ; les réponses complètes ne sont jamais gardées, seulement leur longueur." />
      <Reveal delay={0.05}>
        <Card pad={false}>
          <DataTable
            label="Journal des questions"
            columns={[
              { key: "when", label: "Date", width: "120px" },
              { key: "question", label: "Question", width: "2.4fr" },
              { key: "tools", label: "Outils", width: "1.4fr", hideOnMobile: true },
              { key: "tokens", label: "Jetons", width: "90px", align: "end" },
              { key: "cost", label: "Coût", width: "90px", align: "end" },
              { key: "outcome", label: "Résultat", width: "110px" },
            ]}
            rows={rows.map((r) => ({
              key: r.id,
              cells: {
                when: stamp(r.at, now),
                question: (
                  <span>
                    {r.question}
                    {r.clientId ? (
                      <>
                        {" "}
                        <Link href={`/gestion/clients/${r.clientId}`} className="k-link" prefetch={false}>
                          fiche
                        </Link>
                      </>
                    ) : null}
                    {r.mode === "simule" ? <small className="as-muted"> · simulé</small> : null}
                  </span>
                ),
                tools: r.tools.length ? [...new Set(r.tools.map((t) => TOOL_LABELS[t] ?? t))].join(", ") : "—",
                tokens: num(totalTokens(r.usage)),
                cost: r.costCents === null ? "—" : cents2(r.costCents),
                outcome: (
                  <Chip tone={OUTCOME[r.outcome]?.tone ?? "muted"} dot>
                    {OUTCOME[r.outcome]?.label ?? r.outcome}
                    {r.drafts ? ` · ${r.drafts} brouillon${r.drafts > 1 ? "s" : ""}` : ""}
                  </Chip>
                ),
              },
            }))}
            empty={<EmptyState title="Aucune question pour l’instant" body="Ouvrez l’assistant avec Ctrl J, ou le bouton « Demander à Claude »." action={<OpenAssistantButton />} />}
          />
        </Card>
      </Reveal>
    </>
  );
}
