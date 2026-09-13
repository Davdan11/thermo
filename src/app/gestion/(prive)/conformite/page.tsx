/* ==================================================================
   Conformité C2 — /gestion/conformite : ce qui est en vigueur (textes
   de la trousse remplis avec l'identité), ce qui manque, les preuves
   de consentement (recherche par courriel ou téléphone), les retraits
   notés, l'anonymisation des prospects inactifs (essai ou réel) et le
   programme de recommandation (récompense fixe, recommandations).
   Aucun texte de la trousse n'est écrit ici : il vient des données.
   ================================================================== */
import "@/components/gestion/argent/argent.css";
import type { Metadata } from "next";
import Link from "next/link";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { Card } from "@/components/gestion/kit/Card";
import { Chip } from "@/components/gestion/kit/Chip";
import { Reveal } from "@/components/gestion/Reveal";
import { conformiteView } from "@/lib/consentements/vue";
import { dateLongue, money } from "@/lib/consentements/textes";
import { PolicyDateForm, ReferralFactButtons, ReferralProgramForm, RetentionForm, RunDailyButton, WithdrawForm } from "@/components/gestion/conformite/ConformiteForms";

export const metadata: Metadata = { title: "Conformité" };
export const dynamic = "force-dynamic";

const STATUS: Record<string, [string, "muted" | "orange" | "ok" | "bad"]> = {
  "en-attente": ["En attente", "muted"],
  "a-verser": ["À verser", "orange"],
  versee: ["Versée", "ok"],
  refusee: ["Refusée", "bad"],
};

const PURPOSE: Record<string, string> = {
  communications: "Avis sous le formulaire (5.1)",
  rappels: "Deux rappels (5.2)",
  promotions: "Conseils et promotions (5.3)",
  jumelage: "Demande de jumelage (3.1)",
};

const METHOD: Record<string, string> = { "lien-un-clic": "lien en un clic", "texto-stop": "texto STOP", gestion: "noté dans l’outil", courriel: "par courriel", telephone: "par téléphone" };

function State({ ok, label }: { ok: boolean; label: string }) {
  return (
    <li style={{ display: "flex", gap: 10, alignItems: "center", padding: "6px 0" }}>
      <Chip tone={ok ? "ok" : "warn"} dot>
        {ok ? "En vigueur" : "Pas encore"}
      </Chip>
      <span>{label}</span>
    </li>
  );
}

const fmt = (iso: string | null | undefined) => (iso ? new Intl.DateTimeFormat("fr-CA", { timeZone: "America/Toronto", dateStyle: "medium", timeStyle: "short" }).format(new Date(iso)) : "—");

export default async function ConformitePage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  await requireAdmin();
  const sp = await searchParams;
  const q = typeof sp.preuve === "string" ? sp.preuve : "";
  const v = await conformiteView(q);
  const bilan = v.settings.anonymisation.dernierBilan;
  const missing = [...new Set([...v.missing.formulaires, ...v.missing.politique])];

  return (
    <>
      <Reveal className="k-pagehead">
        <div>
          <p className="k-eyebrow">Loi 25 · LCAP</p>
          <h1 className="k-h1">
            Conformité <em>et consentements</em>
          </h1>
          <p className="k-lead">Les textes de la trousse en vigueur, les preuves de consentement, les prospects inactifs et le programme de recommandation.</p>
        </div>
      </Reveal>

      <div style={{ display: "grid", gap: 18 }}>
        <Reveal delay={0.05}>
          <Card
            title="Trousse et identité"
            sub={v.trousse.loaded ? `Trousse ${v.trousse.version || "?"} importée le ${fmt(v.trousse.importedAt)} · empreinte ${v.trousse.sha?.slice(0, 12) ?? "?"}…` : "Trousse non importée : les textes actuels restent en ligne (npx tsx scripts/importer-trousse.ts)."}
          >
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 12px" }}>
              <State ok={v.identity.complete} label="Identité légale de la plateforme complète" />
              <State ok={v.ready.formulaires} label="Formulaires : avis 5.1, cases 5.2 et 5.3, avis et case de jumelage 3.1" />
              <State ok={v.ready.appelEntrant} label="Appels entrants : avis 6.2, touche 9 pour continuer sans enregistrement" />
              <State ok={v.ready.appelSortant} label="Appels masqués enregistrés : avis 6.3, touche 1 pour accepter" />
              <State ok={v.ready.pied} label="Pied des messages commerciaux (5.5)" />
              <State ok={v.ready.politique} label="Politique de confidentialité (4.1 à 4.14)" />
            </ul>
            {missing.length ? (
              <details className="pj-more" style={{ margin: "0 0 14px" }}>
                <summary>Ce qui manque ({missing.length})</summary>
                <ul style={{ margin: "8px 0 0" }}>
                  {missing.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
              </details>
            ) : null}
            <PolicyDateForm value={v.settings.politiqueEnVigueurLe} />
            {v.ready.politique && v.settings.politiqueEnVigueurLe ? (
              <p style={{ margin: "10px 0 0", fontSize: 14 }}>
                En ligne : <Link href="/confidentialite">politique du {dateLongue(v.settings.politiqueEnVigueurLe)}</Link> (relue toutes les 5 minutes).
              </p>
            ) : null}
          </Card>
        </Reveal>

        <Reveal delay={0.1}>
          <Card title="Preuves de consentement" sub={`${v.preuves.records} preuve(s) de formulaire · ${v.preuves.withdrawals} retrait(s) · appels : ${v.preuves.calls.poursuite} poursuite(s), ${v.preuves.calls.accepte} accord(s) à l’enregistrement, ${v.preuves.calls.refus} refus`}>
            <form method="get" className="ar-form">
              <label className="g-field">
                <span className="g-label">Courriel ou téléphone</span>
                <input name="preuve" className="g-input" defaultValue={q} maxLength={160} autoComplete="off" />
                <span className="g-hint">Texte exact et version, cases et état, date, heure, fuseau, adresse IP, page, canaux, expéditeur, retraits.</span>
              </label>
              <button type="submit" className="k-btn">
                Chercher
              </button>
            </form>
            {v.lookup ? (
              v.lookup.proofs.length ? (
                <div style={{ display: "grid", gap: 12, marginTop: 14 }}>
                  {v.lookup.proofs.map((p) => (
                    <article key={p.id} className="k-card k-card--cream k-card--pad">
                      <p style={{ margin: 0, fontWeight: 700 }}>
                        {p.localTime} · formulaire « {p.form} » ({p.source})
                      </p>
                      <p style={{ margin: "4px 0 10px", fontSize: 14 }}>
                        {[p.email, p.phone].filter(Boolean).join(" · ")} · IP {p.ip ?? "retirée"} · expéditeur {p.sender} · version {p.version} (trousse {p.trousseVersion}) · preuve {p.id}
                      </p>
                      <ul style={{ margin: 0, paddingLeft: 18 }}>
                        {p.items.map((i) => (
                          <li key={i.purpose} style={{ marginBottom: 6 }}>
                            <strong>{PURPOSE[i.purpose]}</strong> : {i.kind === "avis" ? "affiché" : i.checked ? "cochée" : "non cochée"} (jamais cochée d’avance{i.channels.length ? ` ; ${i.channels.join(", ")}` : ""})
                            {i.text ? <span style={{ display: "block", fontSize: 13, opacity: 0.85 }}>« {i.text} »</span> : null}
                          </li>
                        ))}
                      </ul>
                      {p.withdrawals.length ? (
                        <p style={{ margin: "8px 0 0", fontSize: 14 }}>
                          Retraits : {p.withdrawals.map((w) => `${fmt(w.at)} (${METHOD[w.method] ?? w.method}, ${w.purposes.join(" et ")}, prise d’effet immédiate)`).join(" ; ")}
                        </p>
                      ) : null}
                    </article>
                  ))}
                </div>
              ) : (
                <p style={{ marginTop: 12 }}>Aucune preuve pour « {v.lookup.query} ».</p>
              )
            ) : null}
            <div style={{ marginTop: 18 }}>
              <WithdrawForm />
            </div>
          </Card>
        </Reveal>

        <Reveal delay={0.15}>
          <Card
            title="Prospects inactifs"
            sub={`Anonymisés après ${v.settings.anonymisation.moisInactivite} mois sans activité (politique 4.10). Mode ${v.settings.anonymisation.mode === "reel" ? "réel" : "essai : rien n’est modifié"}. Passage quotidien${v.settings.anonymisation.dernierJour ? `, dernier le ${v.settings.anonymisation.dernierJour}` : ""}.`}
            action={<RunDailyButton />}
          >
            {bilan ? (
              <p style={{ margin: "0 0 14px" }}>
                Dernier bilan ({bilan.mode === "reel" ? "réel" : "essai"}, {fmt(bilan.at)}) : <strong>{bilan.prospects}</strong> prospect(s) inactif(s) ; exclus {bilan.exclus.contrat} contrat(s), {bilan.exclus.garantie} garantie(s), {bilan.exclus.litige} litige(s) ; {bilan.elements.demandes ?? 0} demande(s), {bilan.elements.fiches ?? 0} fiche(s), {bilan.elements.rappels ?? 0} rappel(s), {bilan.elements.textos ?? 0} conversation(s) texto ; preuves échues : {bilan.preuves.supprimees} (IP retirées : {bilan.preuves.ipRetirees}).
                {bilan.elements.soumissionsNonTouchees ? ` ${bilan.elements.soumissionsNonTouchees} prospect(s) ont une soumission : elle n’est pas modifiée.` : ""}
              </p>
            ) : (
              <p style={{ margin: "0 0 14px" }}>Aucun passage encore.</p>
            )}
            <RetentionForm mode={v.settings.anonymisation.mode} mois={v.settings.anonymisation.moisInactivite} />
            <p style={{ margin: "10px 0 0", fontSize: 13 }}>Pour garder un dossier (litige, plainte, gel de preuve), ajoutez l’étiquette « litige » à la fiche du client.</p>
          </Card>
        </Reveal>

        <Reveal delay={0.2}>
          <Card title="Programme de recommandation" sub={v.programme.offered ? "Offert : récompense fixe, aucun tirage." : `Non offert : ${v.programme.missing.join(", ")}.`} action={v.programme.offered ? <Link className="k-btn" href="/programme-de-recommandation">Règles publiques</Link> : undefined}>
            <ReferralProgramForm p={v.programme.settings} />
            {v.programme.records.length ? (
              <div style={{ overflowX: "auto", marginTop: 16 }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                  <thead>
                    <tr>
                      {["Recommandé", "Lien utilisé", "Statut", "Récompense", "À verser avant", ""].map((h) => (
                        <th key={h} style={{ textAlign: "left", padding: "6px 8px", borderBottom: "1px solid rgba(0,0,0,0.15)" }}>
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {v.programme.records.map((r) => (
                      <tr key={r.id}>
                        <td style={{ padding: "6px 8px" }}>{r.referredName || "Nouveau client"}</td>
                        <td style={{ padding: "6px 8px" }}>{fmt(r.codeUsedAt)}</td>
                        <td style={{ padding: "6px 8px" }}>
                          <Chip tone={STATUS[r.status]?.[1] ?? "muted"}>{STATUS[r.status]?.[0] ?? r.status}</Chip>
                          {r.reasons.length ? <span style={{ display: "block", fontSize: 12, opacity: 0.8 }}>{r.reasons.join(" · ")}</span> : null}
                        </td>
                        <td style={{ padding: "6px 8px" }}>{r.rewardCents ? money(r.rewardCents) : "—"}</td>
                        <td style={{ padding: "6px 8px" }}>{r.dueBy ? fmt(r.dueBy) : "—"}</td>
                        <td style={{ padding: "6px 8px" }}>
                          <ReferralFactButtons id={r.id} status={r.status} paid={Boolean(r.paidConfirmedAt)} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : null}
          </Card>
        </Reveal>
      </div>
    </>
  );
}
