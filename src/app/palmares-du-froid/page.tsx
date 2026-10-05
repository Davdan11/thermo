/* ==================================================================
   /palmares-du-froid — Palmarès du froid : page de données publique,
   faite pour être citée. Pour chaque municipalité qui a des données
   complètes : nuits de janvier (normales de sa station), température
   de conception (table régionale du site) et nombre de modèles du
   catalogue qui chauffent encore à ce froid selon leur fabricant.
   Aucune estimation : ce qui manque est dit (exclues, valeurs
   générales, modèles sans froid minimal publié).
   Régénérée chaque semaine, comme les pages de villes.
   ================================================================== */

import type { Metadata } from "next";
import Link from "next/link";
import "@/components/palmares/palmares.css";
import { BlReveal } from "@/components/blogue/BlReveal";
import { CopyText } from "@/components/palmares/CopyText";
import { PalmaresMap } from "@/components/palmares/PalmaresMap";
import { PalmaresTable, type TableRow } from "@/components/palmares/PalmaresTable";
import { JsonLd } from "@/components/seo/SeoBlocks";
import { typo } from "@/components/content-hero/typo";
import { fmtInt, fmtTemp } from "@/lib/presence/format";
import { getPalmares, palmaresDataDate } from "@/lib/blogue/palmares-site";
import { coldestStations } from "@/lib/blogue/palmares-visual";
import { PALMARES_EDITION } from "@/lib/blogue/palmares";
import { frDay } from "@/lib/blogue/templates";
import { createMetadata, getBreadcrumbSchema, SITE_NAME, SITE_URL } from "@/lib/seo";

export const revalidate = 604800;

const YEAR = PALMARES_EDITION;
const TITLE = `Palmarès du froid ${YEAR}`;

export async function generateMetadata(): Promise<Metadata> {
  const p = getPalmares();
  return createMetadata({
    title: TITLE,
    description: `${fmtInt(p.totals.municipalities)} municipalités du Québec classées selon leurs nuits de janvier, avec leur température de conception et les modèles qui chauffent encore à ce froid. Méthode et sources.`,
    canonicalPath: "/palmares-du-froid",
  });
}

export default function PalmaresPage() {
  const p = getPalmares();
  const dataDate = palmaresDataDate();
  const first = p.rows[0];
  const periods = [...new Set(p.rows.map((r) => r.period))].sort().reverse();
  const top = coldestStations(p, 1)[0];
  const rows: TableRow[] = p.rows.map((r) => ({ c: r.code, n: r.name, h: r.href, r: r.region, t: r.designT, g: r.designGeneric, j: r.janMinC, d: r.daysBelow20, s: r.stationName, k: r.rank, x: r.tied, mh: r.modelsHeat, mf: r.modelsHeatFull }));
  const regionNames = [...new Set(p.rows.map((r) => r.region))].sort((a, b) => a.localeCompare(b, "fr-CA"));
  const means = p.regions.map((g) => g.meanJanMinC);
  const [coldMean, mildMean] = [Math.min(...means), Math.max(...means)];
  const barWidth = (v: number) => `${Math.round(30 + (70 * (mildMean - v)) / (mildMean - coldMean || 1))}%`;
  const citation = `Source : ${TITLE}, ${SITE_NAME}, d’après les normales climatiques ${periods[0] ?? ""} d’Environnement et Changement climatique Canada.`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Dataset",
      name: TITLE,
      description: `Nuits de janvier (normales climatiques), température de conception et nombre de modèles de thermopompes qui chauffent encore à ce froid selon leur fabricant, pour ${p.totals.municipalities} municipalités du Québec.`,
      url: `${SITE_URL}/palmares-du-froid`,
      inLanguage: "fr-CA",
      creator: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
      dateModified: dataDate,
      spatialCoverage: { "@type": "Place", name: "Québec, Canada" },
      isBasedOn: ["https://climat.meteo.gc.ca/climate_normals/index_f.html", "https://www.hydroquebec.com/residentiel/mieux-consommer/aides-financieres/logisvert/"],
      variableMeasured: ["Nuits de janvier (°C)", "Température de conception (°C)", "Jours sous −20 °C par année", "Modèles qui chauffent encore à la température de conception"],
      distribution: [{ "@type": "DataDownload", encodingFormat: "text/csv", contentUrl: `${SITE_URL}/palmares-du-froid/donnees.csv` }],
    },
    getBreadcrumbSchema([
      { name: "Accueil", url: "/" },
      { name: "Blogue", url: "/blogue" },
      { name: TITLE, url: "/palmares-du-froid" },
    ]),
  ];

  return (
    <main className="pm-root">
      <JsonLd data={jsonLd} />
      <noscript>
        <style>{"[data-reveal]{opacity:1!important;transform:none!important}.pm-bar i{transform:none!important}"}</style>
      </noscript>

      <section className="pm-hero" aria-labelledby="pm-titre">
        <div className="pm-wrap">
          <nav className="pm-crumbs" aria-label="Fil d’Ariane">
            <Link href="/">Accueil</Link> / <Link href="/blogue">Blogue</Link> / <span aria-current="page">{TITLE}</span>
          </nav>
          <div className="pm-hero__grid">
            <div>
              <p className="pm-kicker">Données · édition {YEAR}</p>
              <h1 id="pm-titre" className="pm-title">
                <span>
                  <span>Palmarès</span>
                </span>
                <span>
                  <span>du froid</span>
                </span>
              </h1>
              <p className="pm-lead">
                {typo(
                  `${fmtInt(p.totals.municipalities)} municipalités du Québec classées selon leurs nuits de janvier, avec leur température de conception et le nombre de modèles du catalogue qui chauffent encore à ce froid, selon leur fabricant. Chaque valeur vient d'une source publique, citée plus bas.`,
                )}
              </p>
              {first && top ? (
                <dl className="pm-stats">
                  <div>
                    <dt>Nuits de janvier les plus froides</dt>
                    <dd>{fmtTemp(first.janMinC)}</dd>
                    <small>station {top.station}</small>
                  </div>
                  <div>
                    <dt>Municipalités classées</dt>
                    <dd>{fmtInt(p.totals.municipalities)}</dd>
                    <small>{fmtInt(p.totals.stations)} stations météo</small>
                  </div>
                  <div>
                    <dt>Machines avec un froid minimal publié</dt>
                    <dd>{fmtInt(p.totals.modelsWithMinTemp)}</dd>
                    <small>sur {fmtInt(p.totals.models)} machines distinctes</small>
                  </div>
                </dl>
              ) : null}
            </div>
            <PalmaresMap rows={p.rows} />
          </div>
        </div>
      </section>

      <section className="pm-section pm-section--paper" id="classement" aria-labelledby="pm-classement">
        <div className="pm-wrap">
          <h2 id="pm-classement" className="pm-h2">
            Le classement
          </h2>
          <p className="pm-intro">
            {typo(
              "Rang selon les nuits de janvier (moyenne des minimums quotidiens), puis la température de conception. Même valeur, même rang : des municipalités voisines partagent souvent la même station. Cliquez sur un titre de colonne pour trier.",
            )}
          </p>
          <PalmaresTable rows={rows} regions={regionNames} />
        </div>
      </section>

      <section className="pm-section" aria-labelledby="pm-regions">
        <div className="pm-wrap">
          <h2 id="pm-regions" className="pm-h2">
            Par région
          </h2>
          <p className="pm-intro">{typo("Moyenne des nuits de janvier des municipalités classées de chaque région, arrondie au dixième, de la plus froide à la plus douce.")}</p>
          <ol className="pm-regions">
            {p.regions.map((g) => (
              <li key={g.name} data-reveal>
                <b>{String(g.rank).padStart(2, "0")}</b>
                <span>
                  <strong>{g.name}</strong>
                  <small>
                    {fmtInt(g.count)} {g.count > 1 ? "municipalités" : "municipalité"} · la plus froide : {g.coldest.name} ({fmtTemp(g.coldest.janMinC)})
                  </small>
                </span>
                <em>{fmtTemp(g.meanJanMinC)}</em>
                <span className="pm-bar" aria-hidden="true">
                  <i style={{ ["--w" as string]: barWidth(g.meanJanMinC) }} />
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="pm-section" aria-labelledby="pm-modeles">
        <div className="pm-wrap">
          <h2 id="pm-modeles" className="pm-h2">
            Le froid et les modèles
          </h2>
          <p className="pm-intro">
            {typo(
              `Pour chaque température de conception de la table : combien de municipalités l'ont, et combien de machines distinctes du catalogue ont un froid minimal publié égal ou plus bas. Seuls ${fmtInt(p.totals.modelsWithMinTemp)} des ${fmtInt(p.totals.models)} machines distinctes publient ce chiffre : les autres ne sont pas comptés, ce qui ne veut pas dire qu'ils s'arrêtent plus tôt.`,
            )}
          </p>
          <div className="pm-steps">
            {p.steps.map((s) => (
              <div key={s.t} className="pm-step" data-reveal>
                <b>{fmtTemp(s.t)}</b>
                <p>
                  <strong>
                    {fmtInt(s.municipalities)} {s.municipalities > 1 ? "municipalités" : "municipalité"}
                  </strong>
                  <br />
                  {s.modelsHeat === 0
                    ? "Aucun modèle du catalogue n’a de froid minimal publié aussi bas : prévoyez un appoint et demandez la limite de la machine par écrit."
                    : `${fmtInt(s.modelsHeat)} ${s.modelsHeat > 1 ? "modèles chauffent" : "modèle chauffe"} encore selon le fabricant, dont ${fmtInt(s.modelsHeatFull)} en gardant, à ${fmtTemp(-15)}, toute leur capacité cotée à 8,3 °C.`}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pm-section pm-section--paper" id="methode" aria-labelledby="pm-methode">
        <div className="pm-wrap">
          <h2 id="pm-methode" className="pm-h2">
            Méthode, sources et limites
          </h2>
          <div className="pm-method">
            <div>
              <h3>Les données</h3>
              <ul>
                <li>
                  {typo(`Nuits de janvier et jours sous −20 °C : normales climatiques ${periods.join(" et ")} d’Environnement et Changement climatique Canada, à la station retenue pour chaque municipalité (50 km au plus).`)}{" "}
                  <a href="https://climat.meteo.gc.ca/climate_normals/index_f.html" target="_blank" rel="noopener noreferrer">
                    Normales climatiques
                  </a>
                </li>
                <li>{typo("Température de conception : table régionale du site, selon le code postal de l'hôtel de ville.")}</li>
                <li>{typo("Froid minimal : fiches techniques du catalogue, sinon brochure du fabricant. Puissance à −15 °C : fiches certifiées de la liste officielle LogisVert d'Hydro-Québec.")}</li>
              </ul>
            </div>
            <div>
              <h3>Le calcul</h3>
              <ul>
                <li>{typo("Rang : nuits de janvier, puis température de conception ; ex aequo quand les deux sont égales.")}</li>
                <li>{typo("Modèles qui chauffent encore : machines distinctes du catalogue dont le froid minimal publié est égal ou plus bas que la température de conception.")}</li>
                <li>{typo("Moyenne régionale : moyenne simple des municipalités classées, arrondie au dixième.")}</li>
              </ul>
            </div>
            <div>
              <h3>Les limites</h3>
              <ul>
                <li>{typo("Le froid réel varie avec l'altitude et le relief : une station peut être à plusieurs kilomètres.")}</li>
                <li>{typo(`${fmtInt(p.totals.genericDesign)} municipalités n'ont pas de zone propre dans la table : elles reçoivent la valeur générale${p.totals.genericValues.length === 1 ? ` (${fmtTemp(p.totals.genericValues[0])})` : ""}.`)}</li>
                <li>{typo("Aucune fiche certifiée ne donne la puissance sous −15 °C : le froid minimal dit jusqu'où la machine fonctionne, pas combien elle chauffe.")}</li>
                <li>{typo(`${fmtInt(p.totals.excluded)} municipalités sans données complètes ne sont pas classées.`)}</li>
              </ul>
            </div>
          </div>
          <p className="pm-intro" style={{ marginTop: 28 }}>
            Données du {frDay(dataDate)}.{" "}
            <a href="/palmares-du-froid/donnees.csv" style={{ color: "inherit", textDecoration: "underline", textUnderlineOffset: 3 }}>
              Télécharger le tableau (CSV)
            </a>
          </p>
        </div>
      </section>

      <section className="pm-section" id="medias" aria-labelledby="pm-medias">
        <div className="pm-wrap">
          <h2 id="pm-medias" className="pm-h2">
            Pour les médias
          </h2>
          <p className="pm-intro">{typo("Vous pouvez citer ce palmarès et reprendre son visuel, avec la source ci-dessous. Pour une donnée précise ou une entrevue, écrivez-nous.")}</p>
          <div className="pm-media">
            <blockquote className="pm-quote">
              <p>{typo(citation)}</p>
              <footer>
                <CopyText text={citation} />
                <span>Lien : {SITE_URL.replace(/^https?:\/\//, "")}/palmares-du-froid</span>
              </footer>
            </blockquote>
            <div className="pm-contact">
              <dl>
                <div>
                  <dt>Courriel</dt>
                  <dd>
                    <a href="mailto:info@thermopompesavendre.ca?subject=Palmar%C3%A8s%20du%20froid">info@thermopompesavendre.ca</a>
                  </dd>
                </div>
                <div>
                  <dt>Téléphone</dt>
                  <dd>
                    <a href="tel:+14389003224">438-900-3224</a>
                  </dd>
                </div>
                <div>
                  <dt>À reprendre</dt>
                  <dd>
                    <a className="pm-action" href="/palmares-du-froid/visuel.png">
                      Visuel 1080 × 1350 (PNG)
                    </a>
                    <br />
                    <a className="pm-action" href="/palmares-du-froid/donnees.csv">
                      Tableau complet (CSV)
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>
      <BlReveal />
    </main>
  );
}
