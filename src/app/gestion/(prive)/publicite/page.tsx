/* ==================================================================
   Publicité — étape 1 du pilote : mesurer les demandes et renvoyer les
   VENTES SIGNÉES (la commission) à Google Ads et à Meta.
   Tout est lu et agrégé sur le serveur (src/lib/ads/service.ts) :
   présence des identifiants (jamais leur valeur), consentement,
   conversions, ventes renvoyées, guide pas à pas. Place réservée à
   l'étape suivante (le cerveau publicitaire), non construite.
   ================================================================== */

import type { Metadata } from "next";
import Link from "next/link";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { adsOverview, type StatusRow } from "@/lib/ads/service";
import { Card, SectionHeader } from "@/components/gestion/kit/Card";
import { Chip } from "@/components/gestion/kit/Chip";
import { DataTable } from "@/components/gestion/kit/DataTable";
import { EmptyState } from "@/components/gestion/kit/EmptyState";
import { KpiTile } from "@/components/gestion/kit/KpiTile";
import { dollars, pct, plural } from "@/components/gestion/kit/format";
import { Reveal } from "@/components/gestion/Reveal";
import { BarList } from "@/components/gestion/StatsCharts";
import { SubmitButton } from "@/components/gestion/SubmitButton";
import { saveAdsSettingsAction, syncMetaAction } from "./actions";
import "@/components/gestion/publicite/publicite.css";

export const metadata: Metadata = { title: "Publicité" };

function StatusList({ rows }: { rows: StatusRow[] }) {
  return (
    <ul className="pb-status">
      {rows.map((r) => (
        <li key={r.key}>
          <span>
            <strong>{r.label}</strong>
            <small>
              <code>{r.env}</code> · {r.secret ? "secret, shared/.env" : "public"} · {r.note}
            </small>
          </span>
          <Chip tone={r.present ? "ok" : "warn"} dot>
            {r.present ? "Présent" : "Manquant"}
          </Chip>
        </li>
      ))}
    </ul>
  );
}

export default async function PublicitePage() {
  await requireAdmin();
  const o = await adsOverview(new Date());
  const ventes = o.byType.find((t) => t.key === "vente")?.n ?? 0;
  const ventesValue = o.byChannel.reduce((s, c) => s + c.valueCents, 0);

  return (
    <>
      <Reveal className="k-pagehead">
        <div>
          <p className="k-eyebrow">Pilote publicitaire · étape 1</p>
          <h1 className="k-h1">
            Publicité <em>et ventes mesurées</em>
          </h1>
          <p className="k-lead">On optimise sur les ventes signées (la commission), pas sur les formulaires. Tout est lu sur le serveur ; aucun secret n’est affiché.</p>
        </div>
      </Reveal>

      <div className="cr-grid3">
        <KpiTile
          label="Consentement (30 j)"
          value={o.consent.rate === null ? "—" : pct(o.consent.rate)}
          sub={o.consent.total ? `${o.consent.granted} ${o.consent.granted > 1 ? "accords" : "accord"} sur ${plural(o.consent.total, "demande", "demandes")}` : "Aucune demande sur la période"}
          tone="ink"
        />
        <KpiTile label="Ventes signées (30 j)" value={ventes} sub={ventes ? `${dollars(ventesValue)} de commission prévue` : "Aucune vente sur la période"} />
        <KpiTile label="Dans le flux Google (90 j)" value={o.feed.rows} sub={o.feed.rows ? `${dollars(o.feed.valueCents)} de commission` : "Aucune vente admissible"} tone="orange" />
      </div>

      <SectionHeader n="01" title="État de la mesure" lead="Présent ou manquant seulement : aucune valeur n’est affichée. Les variables publiques (NEXT_PUBLIC_…) demandent une reconstruction du site." />
      <Reveal className="cr-grid3" delay={0.05}>
        <Card title="Google" sub="Analytics et Google Ads, après « Accepter »">
          <StatusList rows={o.status.google} />
        </Card>
        <Card title="Meta" sub="Pixel et API Conversions">
          <StatusList rows={o.status.meta} />
          <p className="g-hint" style={{ marginBottom: 0 }}>
            {o.meta.active ? "API Conversions active." : o.meta.production ? "API Conversions inactive : clés absentes." : "Hors production : aucun envoi à Meta, jamais."}
          </p>
        </Card>
        <Card title="Flux des ventes" sub="Importation planifiée de Google Ads">
          <StatusList rows={o.status.feed} />
        </Card>
      </Reveal>

      <SectionHeader n="02" title="Conversions" accent="des 30 derniers jours" lead="Demandes du journal et ventes signées. Les clics sur le téléphone ou texto et « ThermoMatch terminé » sont comptés dans Google Ads et Meta seulement." />
      <Reveal className="cr-grid2" delay={0.05}>
        <Card title="Par type">
          <BarList rows={o.byType.map((t) => ({ key: t.key, label: t.label, n: t.n, note: t.note, tone: t.key === "vente" || t.key === "installation" ? "orange" : "ink" }))} empty="Aucune conversion sur la période." />
          <p className="g-note">
            Consentement parmi les demandes envoyées : {o.consent.granted} {o.consent.granted > 1 ? "accords" : "accord"}, {o.consent.denied} {o.consent.denied > 1 ? "refus" : "refus"}, {o.consent.absent} sans choix (bandeau non affiché, ancien onglet ou demande d’avant le {o.consentVersion}).
          </p>
        </Card>
        <Card title="Par canal" sub="Demandes (barres) et ventes signées">
          <BarList rows={o.byChannel.map((c) => ({ key: c.key, label: c.label, n: c.demandes, note: c.ventes ? `${plural(c.ventes, "vente", "ventes")} · ${dollars(c.valueCents)}` : undefined, tone: c.ventes ? "orange" : "ink" }))} empty="Aucune demande sur la période." />
        </Card>
      </Reveal>

      <SectionHeader n="03" title="Ventes renvoyées" accent="90 jours" lead="Valeur = commission prévue : pourcentage du volet B sur le sous-total accepté après rabais, avant taxes. L’aide LogisVert n’y entre jamais." />
      <Reveal delay={0.05}>
        <Card pad={false}>
          <DataTable
            label="Ventes signées et installations"
            columns={[
              { key: "when", label: "Date", width: "110px" },
              { key: "name", label: "Conversion", width: "1.2fr" },
              { key: "quote", label: "Soumission", width: "110px" },
              { key: "channel", label: "Canal", width: "1.2fr", hideOnMobile: true },
              { key: "click", label: "Clic", width: "1fr", hideOnMobile: true },
              { key: "value", label: "Valeur", width: "110px", align: "end" },
              { key: "google", label: "Google", width: "1.4fr" },
              { key: "meta", label: "Meta", width: "1.2fr" },
            ]}
            rows={o.sales.map((s) => ({
              key: s.key,
              href: s.clientId ? `/gestion/clients/${s.clientId}` : undefined,
              tone: s.google.ok ? undefined : "muted",
              cells: {
                when: s.when,
                name: s.name,
                quote: s.quoteNumber,
                channel: s.channel,
                click: s.click,
                value: <span className="k-money">{dollars(s.valueCents)}</span>,
                google: (
                  <Chip tone={s.google.ok ? "ok" : "muted"} title={s.google.label}>
                    {s.google.label}
                  </Chip>
                ),
                meta: s.meta,
              },
            }))}
            empty={<EmptyState compact title="Aucune soumission acceptée depuis 90 jours." />}
          />
        </Card>
      </Reveal>

      <SectionHeader n="04" title="Flux Google" accent="et envois à Meta" />
      <Reveal className="cr-grid2" delay={0.05}>
        <Card title="Flux de l’importation planifiée" sub="HTTPS, identifiant et mot de passe (HTTP Basic), jamais indexé">
          <code className="pb-url">{o.feed.url}</code>
          <ul className="pb-facts">
            <li>
              <span>Identifiant et mot de passe</span>
              <span>{o.feed.configured ? "En place" : "À ajouter dans shared/.env"}</span>
            </li>
            <li>
              <span>Dernier passage de Google</span>
              <span>{o.feed.lastFetch ? `${o.feed.lastFetch} (${plural(o.feed.lastRows ?? 0, "ligne", "lignes")})` : "Jamais"}</span>
            </li>
            <li>
              <span>Lignes admissibles aujourd’hui</span>
              <span>{o.feed.rows}</span>
            </li>
          </ul>
          <form action={saveAdsSettingsAction}>
            <label className="pb-toggle">
              <input type="checkbox" name="installationConversion" defaultChecked={o.settings.installationConversion} />
              <span>
                Ajouter « {o.names.installation} » au flux. À cocher seulement après avoir créé cette action dans Google Ads (sinon Google signale des lignes en erreur).
              </span>
            </label>
            <SubmitButton className="k-btn" pendingLabel="Enregistrement…">
              Enregistrer
            </SubmitButton>
          </form>
        </Card>
        <Card title="API Conversions de Meta" sub="Lead à la soumission, Purchase à la vente signée (moins de 7 jours)">
          <form action={syncMetaAction}>
            <SubmitButton className="k-btn" pendingLabel="Envoi…" disabled={!o.meta.active}>
              Envoyer les ventes en attente
            </SubmitButton>
          </form>
          <p className="g-hint">Aussi fait à chaque passage de Google sur le flux. Un événement envoyé avec succès ne repart jamais.</p>
          {o.meta.sends.length ? (
            <ul className="pb-sends">
              {o.meta.sends.map((m) => (
                <li key={m.key}>
                  <span>
                    {m.name}
                    {m.ref ? ` · ${m.ref}` : ""} · {m.when}
                    <br />
                    <small>{m.detail}</small>
                  </span>
                  <Chip tone={m.ok ? "ok" : "bad"}>{m.ok ? "Reçu" : "Échec"}</Chip>
                </li>
              ))}
            </ul>
          ) : (
            <EmptyState compact title="Aucun envoi pour l’instant." />
          )}
        </Card>
      </Reveal>

      <SectionHeader n="05" title="Guide pas à pas" lead="À faire une fois, dans l’ordre. Les noms des conversions doivent être copiés EXACTEMENT (accents compris)." />
      <Reveal delay={0.05}>
        <Card>
          <ol className="pb-steps">
            <li>
              <h4>Google Ads : suivi automatique</h4>
              <p>Paramètres du compte → Suivi automatique (auto-tagging) : activé. Sans lui, les annonces n’ajoutent pas de gclid à l’adresse et aucune vente ne peut être renvoyée.</p>
            </li>
            <li>
              <h4>Google Ads : les conversions Web (balise)</h4>
              <p>Objectifs → Conversions → Nouvelle action → Site Web → configuration manuelle. Créez une action par événement, puis copiez l’identifiant « AW-… » et chaque étiquette :</p>
              <ul>
                <li>
                  Identifiant du compte → <code className="pb-code">NEXT_PUBLIC_GOOGLE_ADS_ID</code>
                </li>
                {o.browser.map((b) => (
                  <li key={b.id}>
                    « {b.label} » → <code className="pb-code">{b.env}</code>
                  </li>
                ))}
              </ul>
              <p>Tant que les ventes sont rares, gardez « Soumission envoyée » comme action principale ; passez « {o.names.vente} » en principale quand les ventes deviennent régulières, et les autres en secondaires.</p>
            </li>
            <li>
              <h4>Google Ads : les ventes (importation de clics)</h4>
              <p>Nouvelle action → Importer → autres sources de données ou CRM → suivre les conversions à partir des clics. Noms exacts :</p>
              <div className="pb-names">
                <span className="pb-name">{o.names.vente}</span>
                <span className="pb-name">{o.names.installation}</span>
              </div>
              <p>Valeur : « utiliser des valeurs différentes » (en CAD) ; période de conversion : 90 jours. « {o.names.installation} » est facultative : mettez-la en secondaire, puis cochez-la dans la section 04.</p>
            </li>
            <li>
              <h4>Google Ads : l’importation planifiée</h4>
              <p>Objectifs → Conversions → Importations → + → source HTTPS, fréquence quotidienne.</p>
              <ul>
                <li>
                  Adresse : <code className="pb-code">{o.feed.url}</code>
                </li>
                <li>
                  Identifiant et mot de passe : ceux que vous choisissez et mettez vous-même dans <code className="pb-code">shared/.env</code> (<code className="pb-code">ADS_FEED_USER</code>, <code className="pb-code">ADS_FEED_PASSWORD</code>, {o.minPassword} caractères ou plus), puis redémarrez le site.
                </li>
                <li>Chaque ligne porte son fuseau horaire : aucun paramètre de fuseau à régler. Un passage réussi apparaît dans la section 04.</li>
              </ul>
            </li>
            <li>
              <h4>Relier Google Analytics</h4>
              <p>
                Google Analytics → Administration → Associations de produits → Google Ads : associez le compte. L’identifiant « G-… » va dans <code className="pb-code">NEXT_PUBLIC_GA_ID</code>.
              </p>
            </li>
            <li>
              <h4>Meta (quand les clés existent)</h4>
              <p>
                Gestionnaire d’événements → votre ensemble de données : l’identifiant va dans <code className="pb-code">NEXT_PUBLIC_META_PIXEL_ID</code> et <code className="pb-code">META_PIXEL_ID</code> ; Paramètres → API Conversions → générer un jeton d’accès → <code className="pb-code">META_CAPI_TOKEN</code>. Pour tester : <code className="pb-code">META_TEST_EVENT_CODE</code>, à retirer ensuite.
              </p>
            </li>
            <li>
              <h4>Mettre en ligne</h4>
              <p>Les variables NEXT_PUBLIC_… sont inscrites dans le site à la construction : reconstruire puis redémarrer. Les secrets (shared/.env) : un redémarrage suffit. Le bandeau de consentement réapparaît une fois pour tous les visiteurs (texte du {o.consentVersion}).</p>
            </li>
          </ol>
        </Card>
      </Reveal>

      <SectionHeader n="06" title="Prochaine étape" accent="le cerveau publicitaire" />
      <Reveal delay={0.05}>
        <Card tone="ink" title="Pas encore construit" sub="Cette page en sera la base : sans mesure fiable des ventes, rien ne peut être optimisé.">
          <div className="pb-brain">
            <p style={{ margin: 0 }}>Il lira ces mêmes données (ventes signées, commission, canal, coût des campagnes) et proposera des changements de budget et de mots-clés, avec des garde-fous :</p>
            <ul>
              <li>budget quotidien plafonné, jamais dépassé ;</li>
              <li>chaque changement proposé, expliqué et approuvé avant d’être appliqué ;</li>
              <li>retour en arrière en un clic et journal de toutes les décisions.</li>
            </ul>
            <p style={{ margin: 0 }}>
              En attendant : <Link href="/gestion/statistiques" style={{ color: "inherit", textDecoration: "underline" }}>Statistiques</Link> pour les sources de toutes les demandes.
            </p>
          </div>
        </Card>
      </Reveal>
    </>
  );
}
