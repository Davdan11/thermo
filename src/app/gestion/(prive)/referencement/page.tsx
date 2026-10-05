/* ==================================================================
   Référencement : ce que Google montre du site (Search Console, lecture
   seule par compte de service), mots-clés suivis, état des plans du site
   et envoi automatique des adresses à Bing & co. (IndexNow).
   Réservée au propriétaire (requireAdmin) : absente des sections des
   adjoints et des vendeurs (src/lib/gestion/equipe/roles.ts).
   Tout est lu sur le serveur ; aucune clé n'est affichée. Cache de
   6 heures (src/lib/seo/search-console.ts).
   ================================================================== */

import type { Metadata } from "next";
import Link from "next/link";
import { ShieldAlert, TriangleAlert } from "lucide-react";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { SITE_URL } from "@/lib/seo";
import { searchConsoleOverview, type GscData, type GscMetrics, type PeriodBlock, type SearchConsoleState } from "@/lib/seo/search-console";
import { readTrackedKeywords } from "@/lib/seo/search-console-store";
import { indexNowSummary, type IndexNowMode, type IndexNowSummary } from "@/lib/seo/indexnow";
import { JOURNAL_VISIBILITE, visibiliteEtat } from "@/lib/seo/visibilite";
import { Card, SectionHeader } from "@/components/gestion/kit/Card";
import { Chip } from "@/components/gestion/kit/Chip";
import { DataTable } from "@/components/gestion/kit/DataTable";
import { EmptyState } from "@/components/gestion/kit/EmptyState";
import { KpiTile } from "@/components/gestion/kit/KpiTile";
import { num } from "@/components/gestion/kit/format";
import { Reveal } from "@/components/gestion/Reveal";
import { SubmitButton } from "@/components/gestion/SubmitButton";
import { refreshSearchConsoleAction, saveKeywordsAction } from "./actions";
import "@/components/gestion/referencement/referencement.css";

export const metadata: Metadata = { title: "Référencement" };

const BASE = "/gestion/referencement";
const CRON_LINE = "45 6 * * * /bin/bash /var/www/thermopompesavendre.ca/current/scripts/indexnow-cron.sh >> /var/log/thermo-indexnow.log 2>&1";

/* ---------------- Formats ---------------- */

const dec = (x: number, d = 1) => x.toLocaleString("fr-CA", { minimumFractionDigits: d, maximumFractionDigits: d });
const ctr = (x: number) => `${dec(x * 100)} %`;
const pos = (m: GscMetrics | null) => (m && m.impressions ? dec(m.position) : "—");
const when = (iso: string | null) => (iso ? new Intl.DateTimeFormat("fr-CA", { dateStyle: "medium", timeStyle: "short", timeZone: "America/Toronto" }).format(new Date(iso)) : "—");
const day = (d: string) => new Intl.DateTimeFormat("fr-CA", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" }).format(new Date(`${d}T12:00:00Z`));
const path = (url: string) => {
  try {
    const u = new URL(url);
    return u.pathname + u.search || "/";
  } catch {
    return url;
  }
};

type Delta = { text: string; tone: "up" | "down" | "flat" };

/** Variation en % (clics, impressions). */
function change(cur: number, prev: number): Delta {
  if (!prev) return cur ? { text: "nouveau", tone: "up" } : { text: "=", tone: "flat" };
  const r = (cur - prev) / prev;
  if (Math.abs(r) < 0.005) return { text: "=", tone: "flat" };
  return { text: `${r > 0 ? "+" : "−"}${Math.round(Math.abs(r) * 100)} %`, tone: r > 0 ? "up" : "down" };
}

/** Écart de position : plus petit = mieux. */
function rank(cur: GscMetrics, prev: GscMetrics): Delta | undefined {
  if (!cur.impressions || !prev.impressions) return undefined;
  const d = prev.position - cur.position;
  if (Math.abs(d) < 0.05) return { text: "=", tone: "flat" };
  return { text: `${d > 0 ? "▲" : "▼"} ${dec(Math.abs(d))}`, tone: d > 0 ? "up" : "down" };
}

function points(cur: number, prev: number): Delta {
  const d = (cur - prev) * 100;
  if (Math.abs(d) < 0.05) return { text: "=", tone: "flat" };
  return { text: `${d > 0 ? "+" : "−"}${dec(Math.abs(d))} pt`, tone: d > 0 ? "up" : "down" };
}

const MODE: Record<IndexNowMode, string> = {
  complet: "Passage complet",
  differentiel: "Différentiel",
  "aucun-changement": "Rien de nouveau",
  "sans-cle": "Clé manquante",
  simule: "Simulé (hors production)",
};

/* ---------------- Page ---------------- */

export default async function ReferencementPage({ searchParams }: { searchParams: Promise<{ periode?: string | string[] }> }) {
  await requireAdmin();
  const sp = await searchParams;
  const which: "d28" | "m3" = sp.periode === "3m" ? "m3" : "d28";
  const keywords = await readTrackedKeywords();
  const [gsc, inx] = await Promise.all([searchConsoleOverview({ siteUrl: SITE_URL, keywords }), indexNowSummary()]);
  const data = gsc.status === "ok" ? gsc.data : null;

  return (
    <>
      <Reveal className="k-pagehead">
        <div>
          <p className="k-eyebrow">Marketing · Google et Bing</p>
          <h1 className="k-h1">
            Référencement <em>et positions</em>
          </h1>
          <p className="k-lead">Ce que Google montre du site (Search Console), les mots-clés qui comptent, les plans du site et l’envoi automatique des pages nouvelles ou modifiées à Bing (IndexNow).</p>
        </div>
      </Reveal>

      {gsc.status === "ok" ? <Overview state={gsc} which={which} /> : <ConnectGuide state={gsc} />}

      <SectionHeader n={data ? "04" : "01"} title="Mots-clés" accent="suivis" lead="Position moyenne, clics et impressions sur 28 jours, comparés aux 28 jours d’avant. Accents et majuscules ignorés : « thermopompe montreal » compte pour « thermopompe montréal »." />
      <Reveal className="cr-grid2" delay={0.04}>
        <Card title="Positions" sub={data ? `Du ${day(data.d28.start)} au ${day(data.d28.end)}` : "Dès que la Search Console est connectée"} pad={false}>
          <DataTable
            label="Mots-clés suivis"
            columns={[
              { key: "k", label: "Mot-clé", width: "2fr" },
              { key: "p", label: "Position", align: "end" },
              { key: "d", label: "Écart", align: "end" },
              { key: "c", label: "Clics", align: "end" },
              { key: "i", label: "Impressions", align: "end" },
            ]}
            rows={(data?.keywords ?? keywords.map((keyword) => ({ keyword, current: null, previous: null, variants: [] }))).map((k) => {
              const d = k.current && k.previous ? rank(k.current, k.previous) : undefined;
              return {
                key: k.keyword,
                tone: k.current ? undefined : "muted",
                cells: {
                  k: (
                    <span className="rf-kw">
                      <b>{k.keyword}</b>
                      {k.variants.length > 1 ? <small>{k.variants.join(" · ")}</small> : null}
                    </span>
                  ),
                  p: pos(k.current),
                  d: d ? <span className={`rf-delta is-${d.tone}`}>{d.text}</span> : k.current && !k.previous ? <Chip tone="ok">nouveau</Chip> : null,
                  c: k.current ? num(k.current.clicks) : "—",
                  i: k.current ? num(k.current.impressions) : "—",
                },
              };
            })}
          />
        </Card>
        <Card title="Liste suivie" sub="Une ligne par mot-clé, 40 au plus. Vide : la liste par défaut.">
          <form action={saveKeywordsAction} className="rf-form">
            <label htmlFor="rf-keywords" className="sr-only">
              Mots-clés suivis
            </label>
            <textarea id="rf-keywords" name="keywords" className="rf-textarea" rows={12} defaultValue={keywords.join("\n")} spellCheck={false} />
            <SubmitButton pendingLabel="Enregistrement…" className="k-btn k-btn--ink">
              Enregistrer la liste
            </SubmitButton>
          </form>
        </Card>
      </Reveal>

      <SectionHeader n={data ? "05" : "02"} title="Plans du site" lead={`Index soumis à Google : ${SITE_URL}/sitemap-index.xml (toutes les pages, par segments).`} />
      <Reveal delay={0.04}>
        {data ? (
          <Sitemaps data={data} />
        ) : (
          <Card tone="cream" title="État dans la Search Console">
            <p className="g-hint rf-flat">
              Visible ici dès que la Search Console est connectée. En attendant : Search Console, « Sitemaps », ajoutez <code>sitemap-index.xml</code>.
            </p>
          </Card>
        )}
      </Reveal>

      <SectionHeader n={data ? "06" : "03"} title="IndexNow" accent="Bing, Yandex, Seznam" lead="Chaque matin à 6 h 45, après le robot de nuit, et après chaque déploiement : seules les adresses ajoutées, modifiées ou retirées du plan du site sont envoyées." />
      <Reveal delay={0.04}>
        <IndexNowPanel s={inx} />
      </Reveal>

      <SectionHeader
        id="visibilite"
        n={data ? "07" : "04"}
        title="Visibilité"
        accent="ce qui a été fait"
        lead="Où en sont les fiches, compté en direct sur le catalogue, et le journal des changements qui aident le site à être trouvé."
      />
      <Visibilite />
    </>
  );
}

/* ---------------- Visibilité : état des fiches et journal ---------------- */

const pct = (n: number, total: number) => `${total ? Math.round((n / total) * 100) : 0} %`;

function Visibilite() {
  const v = visibiliteEtat();
  return (
    <>
      <Reveal className="cr-grid3" delay={0.04}>
        <KpiTile label="Fiches visibles" value={num(v.fiches)} sub="marques vendues au Québec" tone="ink" />
        <KpiTile label="Avec leur vrai nom" value={num(v.avecNom)} sub={`${pct(v.avecNom, v.fiches)} · dans le titre et l’adresse`} />
        <KpiTile label="« Chauffe jusqu’à »" value={num(v.avecTemperature)} sub={`${pct(v.avecTemperature, v.fiches)} · publié par le fabricant`} />
        <KpiTile label="Dans les plans du site" value={num(v.indexables)} sub="une fiche par marque et par machine" tone="orange" />
      </Reveal>
      <Reveal delay={0.06}>
        <Card title="Journal" sub="Du plus récent au plus ancien">
          <p className="g-hint rf-flat">
            {num(v.adressesEnrichies)} adresses de fiches portent le nom et la capacité (les anciennes redirigent). Restent {num(v.fiches - v.avecNom)} fiches sans nom commercial et{" "}
            {num(v.fiches - v.avecTemperature)} sans « chauffe jusqu’à » : la tâche du lundi les cherche dans les documents des fabricants.
          </p>
          <ol className="rf-history rf-journal">
            {JOURNAL_VISIBILITE.map((e) => (
              <li key={`${e.date}-${e.titre}`}>
                <span className="rf-journal__date">{day(e.date)}</span>
                <b>{e.titre}</b>
                <small>{e.detail}</small>
              </li>
            ))}
          </ol>
        </Card>
      </Reveal>
    </>
  );
}

/* ---------------- Search Console connectée ---------------- */

function Overview({ state, which }: { state: Extract<SearchConsoleState, { status: "ok" }>; which: "d28" | "m3" }) {
  const { data } = state;
  const b: PeriodBlock = data[which];
  const days = which === "d28" ? data.daily.slice(-28) : data.daily;
  return (
    <>
      {state.warning ? (
        <div className="rf-banner is-warn" role="note">
          <TriangleAlert size={18} aria-hidden />
          <div>
            <b>Dernières données connues, du {when(state.fetchedAt)}.</b>
            <span>La Search Console n’a pas répondu : {state.warning}</span>
          </div>
        </div>
      ) : null}

      <Reveal className="rf-bar">
        <nav className="k-tabs" aria-label="Période">
          <Link href={BASE} aria-current={which === "d28" ? "page" : undefined} scroll={false} prefetch={false}>
            28 jours
          </Link>
          <Link href={`${BASE}?periode=3m`} aria-current={which === "m3" ? "page" : undefined} scroll={false} prefetch={false}>
            3 mois
          </Link>
        </nav>
        <form action={refreshSearchConsoleAction}>
          <SubmitButton pendingLabel="Lecture…" className="k-btn k-btn--ghost">
            Actualiser
          </SubmitButton>
        </form>
      </Reveal>
      <p className="rf-meta">
        <span>
          Propriété <code>{data.siteUrl}</code>
        </span>
        <span>
          Du {day(b.start)} au {day(b.end)}, comparé au {day(b.prevStart)} – {day(b.prevEnd)}
        </span>
        <span>Lu le {when(state.fetchedAt)}</span>
      </p>

      <Reveal className="cr-grid3" delay={0.04}>
        <KpiTile label="Clics" value={num(b.current.clicks)} delta={change(b.current.clicks, b.previous.clicks)} sub="depuis Google" tone="ink" spark={days.map((d) => d.clicks)} />
        <KpiTile label="Impressions" value={num(b.current.impressions)} delta={change(b.current.impressions, b.previous.impressions)} sub="affichages dans les résultats" spark={days.map((d) => d.impressions)} />
        <KpiTile label="CTR" value={b.current.impressions ? ctr(b.current.ctr) : "—"} delta={b.previous.impressions ? points(b.current.ctr, b.previous.ctr) : undefined} sub="clics ÷ impressions" />
        <KpiTile label="Position moyenne" value={pos(b.current)} delta={rank(b.current, b.previous)} sub="plus petit = plus haut" tone="orange" />
      </Reveal>

      <SectionHeader n="01" title="Requêtes" accent={which === "d28" ? "28 jours" : "3 mois"} lead="Ce que les gens ont tapé avant de voir le site, par clics." />
      <Reveal delay={0.04}>
        <Card pad={false}>
          <DataTable
            label="Meilleures requêtes"
            columns={[
              { key: "q", label: "Requête", width: "2.2fr" },
              { key: "c", label: "Clics", align: "end" },
              { key: "i", label: "Impressions", align: "end" },
              { key: "t", label: "CTR", align: "end", hideOnMobile: true },
              { key: "p", label: "Position", align: "end" },
            ]}
            rows={b.queries.map((r) => {
              const d = r.prevPosition !== null && r.impressions ? r.prevPosition - r.position : null;
              return {
                key: r.query,
                cells: {
                  q: r.query,
                  c: num(r.clicks),
                  i: num(r.impressions),
                  t: ctr(r.ctr),
                  p: (
                    <span className="rf-pos">
                      {dec(r.position)}
                      {d !== null && Math.abs(d) >= 0.05 ? <span className={`rf-delta is-${d > 0 ? "up" : "down"}`}>{d > 0 ? "▲" : "▼"}</span> : null}
                    </span>
                  ),
                },
              };
            })}
            empty={<EmptyState title="Aucune requête sur la période" body="Normal pour un site neuf : les premières impressions arrivent quelques semaines après l’indexation." compact />}
          />
        </Card>
      </Reveal>

      <SectionHeader n="02" title="Pages" lead="Les pages les plus cliquées, et celles qui gagnent ou perdent des clics (28 jours contre les 28 d’avant)." />
      <Reveal delay={0.04}>
        <Card title="Meilleures pages" sub={which === "d28" ? "28 jours" : "3 mois"} pad={false}>
          <DataTable
            label="Meilleures pages"
            columns={[
              { key: "u", label: "Page", width: "2.4fr" },
              { key: "c", label: "Clics", align: "end" },
              { key: "i", label: "Impressions", align: "end" },
              { key: "p", label: "Position", align: "end", hideOnMobile: true },
            ]}
            rows={b.pages.map((r) => ({ key: r.page, cells: { u: <span className="rf-url">{path(r.page)}</span>, c: num(r.clicks), i: num(r.impressions), p: dec(r.position) } }))}
            empty={<EmptyState title="Aucune page avec des impressions" compact />}
          />
        </Card>
      </Reveal>
      <Reveal className="cr-grid2" delay={0.06}>
        <Moves title="Qui montent" rows={data.rising} tone="up" />
        <Moves title="Qui baissent" rows={data.falling} tone="down" />
      </Reveal>
    </>
  );
}

function Moves({ title, rows, tone }: { title: string; rows: GscData["rising"]; tone: "up" | "down" }) {
  return (
    <Card title={title} sub="Écart de clics, puis d’impressions">
      {rows.length ? (
        <ul className="rf-moves">
          {rows.map((r) => (
            <li key={r.page}>
              <span className="rf-url">{path(r.page)}</span>
              <span className={`rf-delta is-${tone}`}>
                {r.deltaClicks > 0 ? "+" : r.deltaClicks < 0 ? "−" : ""}
                {num(Math.abs(r.deltaClicks))} clic{Math.abs(r.deltaClicks) > 1 ? "s" : ""}
              </span>
              <small>
                {r.deltaImpressions > 0 ? "+" : r.deltaImpressions < 0 ? "−" : ""}
                {num(Math.abs(r.deltaImpressions))} impr.
              </small>
            </li>
          ))}
        </ul>
      ) : (
        <p className="g-hint rf-flat">Aucune page sur la période.</p>
      )}
    </Card>
  );
}

function Sitemaps({ data }: { data: GscData }) {
  return (
    <Card pad={false}>
      <DataTable
        label="Plans du site dans la Search Console"
        columns={[
          { key: "p", label: "Plan", width: "2fr" },
          { key: "s", label: "Soumis le", hideOnMobile: true },
          { key: "l", label: "Lu le" },
          { key: "n", label: "Adresses", align: "end" },
          { key: "e", label: "État", align: "end" },
        ]}
        rows={data.sitemaps.map((m) => ({
          key: m.path,
          cells: {
            p: (
              <span className="rf-kw">
                <b className="rf-url">{path(m.path)}</b>
                {m.isSitemapsIndex ? <small>index</small> : null}
              </span>
            ),
            s: when(m.lastSubmitted),
            l: when(m.lastDownloaded),
            n: m.submitted === null ? "—" : num(m.submitted),
            e: m.errors ? (
              <Chip tone="bad" dot>
                {m.errors} erreur{m.errors > 1 ? "s" : ""}
              </Chip>
            ) : m.warnings ? (
              <Chip tone="warn" dot>
                {m.warnings} avert.
              </Chip>
            ) : m.isPending ? (
              <Chip tone="muted" dot>
                En attente
              </Chip>
            ) : (
              <Chip tone="ok" dot>
                Lu
              </Chip>
            ),
          },
        }))}
        empty={<EmptyState title="Aucun plan du site soumis" body="Search Console, « Sitemaps » : ajoutez sitemap-index.xml." compact />}
      />
    </Card>
  );
}

function IndexNowPanel({ s }: { s: IndexNowSummary }) {
  const last = s.lastRun;
  return (
    <div className="cr-grid2">
      <Card title="Dernier passage" action={<Chip tone={s.keyConfigured ? "ok" : "warn"} dot>{s.keyConfigured ? "Clé en place" : "Clé manquante"}</Chip>}>
        {last ? (
          <dl className="rf-facts">
            <div>
              <dt>Quand</dt>
              <dd>{when(last.at)}</dd>
            </div>
            <div>
              <dt>Type</dt>
              <dd>{MODE[last.mode]}</dd>
            </div>
            <div>
              <dt>Acceptées</dt>
              <dd>
                {num(last.accepted)} sur {num(last.sent || last.added + last.changed + last.removed)}
              </dd>
            </div>
            <div>
              <dt>Dans le plan</dt>
              <dd>{num(last.inPlan)}</dd>
            </div>
            <div>
              <dt>Adresses suivies</dt>
              <dd>{num(s.tracked)}</dd>
            </div>
            <div>
              <dt>Dernier succès</dt>
              <dd>{when(s.lastSuccessAt)}</dd>
            </div>
          </dl>
        ) : (
          <p className="g-hint rf-flat">Aucun passage pour l’instant. Le premier envoie tout le plan du site (par lots de 10 000 adresses).</p>
        )}
        {!s.keyConfigured ? (
          <p className="g-hint">
            Ajoutez <code>INDEXNOW_KEY</code> dans <code>shared/.env</code> (8 à 128 caractères : lettres, chiffres, « - » ; par exemple <code>openssl rand -hex 16</code>). Elle est servie à <code>{SITE_URL}/&lt;clé&gt;.txt</code>.
          </p>
        ) : null}
      </Card>
      <Card title="Historique" sub="Les 5 derniers passages">
        {s.history.length ? (
          <ul className="rf-history">
            {s.history.slice(0, 5).map((r) => (
              <li key={r.at}>
                <span>{when(r.at)}</span>
                <b>{MODE[r.mode]}</b>
                <small>
                  {num(r.accepted)} acceptée{r.accepted > 1 ? "s" : ""}
                  {r.batches.length ? ` · ${r.batches.map((x) => (x.status === null ? "—" : x.status)).join(", ")}` : ""}
                </small>
              </li>
            ))}
          </ul>
        ) : (
          <p className="g-hint rf-flat">Rien encore.</p>
        )}
        <p className="g-hint">Tâche planifiée (crontab du serveur) :</p>
        <pre className="rf-code">{CRON_LINE}</pre>
      </Card>
    </div>
  );
}

/* ---------------- Search Console non connectée ---------------- */

const STATUS_TITLE: Record<Exclude<SearchConsoleState["status"], "ok">, string> = {
  "non-configure": "Search Console non connectée",
  "hors-production": "Hors production : aucune requête vers Google",
  "sans-acces": "Le compte de service n’a pas encore accès à la propriété",
  "api-desactivee": "L’API Search Console n’est pas activée",
  erreur: "La Search Console ne répond pas",
};

function ConnectGuide({ state }: { state: Exclude<SearchConsoleState, { status: "ok" }> }) {
  const email = state.email;
  return (
    <>
      <div className={`rf-banner ${state.status === "hors-production" ? "is-info" : "is-warn"}`} role="note">
        <ShieldAlert size={18} aria-hidden />
        <div>
          <b>{STATUS_TITLE[state.status]}</b>
          <span>
            {state.status === "non-configure"
              ? "La page lit la Search Console par un compte de service Google, en lecture seule. Environ 10 minutes, une seule fois."
              : state.status === "hors-production"
                ? "En développement, rien ne part vers Google. Sur le serveur, la page lit la Search Console avec ce compte."
                : state.message}
          </span>
        </div>
      </div>

      <Card tone="cream" title="Adresse à ajouter dans la Search Console" sub="Utilisateur de la propriété, accès « Restreint » (lecture seule) suffisant">
        {email ? <pre className="rf-code rf-email">{email}</pre> : <p className="g-hint rf-flat">Pas encore de compte de service : créez-le à l’étape 1 ; son adresse se termine par « .iam.gserviceaccount.com ».</p>}
      </Card>

      <ol className="rf-steps">
        <li>
          <h2>Le compte de service</h2>
          {email ? (
            <p>
              Le compte déjà en place pour Google Agenda est réutilisé (<code>GOOGLE_SERVICE_ACCOUNT_EMAIL</code> et <code>GOOGLE_SERVICE_ACCOUNT_KEY</code> dans <code>shared/.env</code>). Rien à créer.
            </p>
          ) : (
            <p>
              Sur <b>console.cloud.google.com</b> : « IAM et administration », « Comptes de service », « Créer ». Puis, dans le compte : « Clés », « Ajouter une clé », « JSON ». Collez le contenu du fichier vous-même dans <code>shared/.env</code>, sur une ligne <code>GSC_SERVICE_ACCOUNT_JSON=…</code> (ou encodé en base64). Jamais dans le dépôt ni dans un courriel.
            </p>
          )}
        </li>
        <li>
          <h2>Activer l’API</h2>
          <p>Dans le même projet Google Cloud : « API et services », « Bibliothèque », cherchez « Google Search Console API », puis « Activer ».</p>
        </li>
        <li>
          <h2>Ajouter l’adresse à la propriété</h2>
          <p>
            Sur <b>search.google.com/search-console</b>, propriété thermopompesavendre.ca : « Paramètres », « Utilisateurs et autorisations », « Ajouter un utilisateur ». Collez l’adresse ci-dessus, autorisation « Restreint », puis « Ajouter ».
          </p>
        </li>
        <li>
          <h2>Préciser la propriété (facultatif)</h2>
          <p>
            <code>GSC_SITE_URL=sc-domain:thermopompesavendre.ca</code> pour une propriété de domaine, ou <code>https://thermopompesavendre.ca/</code> pour un préfixe d’URL. Sans elle, la page prend la propriété de ce domaine à laquelle le compte a accès.
          </p>
        </li>
        <li>
          <h2>Recharger le site</h2>
          <p>
            <code>pm2 reload thermo --update-env</code>, puis revenez ici. Les données sont gardées 6 heures ; « Actualiser » relit la Search Console (une fois par 10 minutes au plus).
          </p>
        </li>
      </ol>
    </>
  );
}
