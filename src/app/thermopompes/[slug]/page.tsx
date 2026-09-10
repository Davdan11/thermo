/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { createMetadata, getBreadcrumbSchema, getItemListSchema } from "@/lib/seo";
import { getLandingPage, getLandingPages, type LandingPage } from "@/lib/seo/landings";
import { getCapacityClass, getCapacityClasses, getRanking, type CapacityClass } from "@/lib/seo/programmatic";
import { estimateLoad } from "@/lib/thermomatch/sizing";
import { CtaThermoMatch, FaqBlock, JsonLd, ModelTable, Prose, RelatedLinks, SeoHero } from "@/components/seo/SeoBlocks";

export const dynamicParams = false;

export async function generateStaticParams() {
  return [
    ...getLandingPages().map((p) => ({ slug: p.slug })),
    ...getCapacityClasses().map((c) => ({ slug: c.slug })),
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const landing = getLandingPage(slug);
  if (landing) {
    return createMetadata({
      title: landing.seoTitle,
      description: landing.metaDescription,
      canonicalPath: `/thermopompes/${landing.slug}`,
    });
  }
  const cap = getCapacityClass(slug);
  if (cap) {
    return createMetadata({
      title: `Thermopompe ${cap.label} : ${cap.models.length} modèles, capacité réelle à -15 °C et subvention LogisVert`,
      description: `Toutes les thermopompes ${cap.label} vendues au Québec (${cap.wallCount} murales, ${cap.centralCount} centrales) avec capacité certifiée à -15 °C, HSPF2, SEER2 et montant LogisVert officiel. Pour quelle superficie? Réponse chiffrée.`,
      canonicalPath: `/thermopompes/${cap.slug}`,
    });
  }
  return createMetadata({ title: "Page introuvable" });
}

export default async function ThermopompesSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const landing = getLandingPage(slug);
  if (landing) return <LandingView page={landing} />;
  const cap = getCapacityClass(slug);
  if (cap) return <CapacityView cap={cap} />;
  notFound();
}

/* ------------------------------------------------------------------
   Page éditoriale (contenu rédigé)
   ------------------------------------------------------------------ */

function LandingView({ page }: { page: LandingPage }) {
  const raw = page.contentBlocks ?? ({} as LandingPage["contentBlocks"]);
  const cb = {
    hero: raw.hero ?? { subtitle: page.metaDescription },
    intro: raw.intro ?? "",
    benefits: raw.benefits ?? [],
    steps: raw.steps ?? [],
    forWho: raw.forWho ?? [],
    notForWho: raw.notForWho ?? [],
    grants: raw.grants ?? [],
    faq: raw.faq ?? [],
    relatedLinks: raw.relatedLinks ?? [],
  };
  const faq = cb.faq.map((f) => ({ question: f.q, answer: f.a }));
  const cold = getRanking("grand-froid", 6)!;
  const classes = getCapacityClasses();

  return (
    <main className="bg-[#f8f5f0] text-[#071d2b]">
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Accueil", url: "/" },
          { name: "Thermopompes", url: "/thermopompes" },
          { name: page.h1, url: `/thermopompes/${page.slug}` },
        ])}
      />
      <SeoHero
        eyebrow={page.pageType}
        title={page.h1}
        intro={cb.hero.subtitle}
        breadcrumbs={[
          { label: "Thermopompes", href: "/thermopompes" },
          { label: page.h1, href: `/thermopompes/${page.slug}` },
        ]}
      />
      <Prose>
        {cb.intro && <p className="text-[18px]">{cb.intro}</p>}

        {cb.benefits.length > 0 && (
          <>
            <h2>Ce qu'il faut savoir</h2>
            {cb.benefits.map((b) => (
              <div key={b.title}>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            ))}
          </>
        )}

        {cb.steps.length > 0 && (
          <>
            <h2>Les étapes d'un projet réussi</h2>
            <ol className="list-decimal pl-6 mb-4 space-y-2">
              {cb.steps.map((s) => (
                <li key={s.title}>
                  <strong>{s.title}.</strong> {s.desc}
                </li>
              ))}
            </ol>
          </>
        )}

        {(cb.forWho.length > 0 || cb.notForWho.length > 0) && (
          <>
            <h2>Pour qui, et pour qui pas</h2>
            {cb.forWho.length > 0 && (
              <>
                <h3>Un bon choix si</h3>
                <ul>{cb.forWho.map((x) => <li key={x}>{x}</li>)}</ul>
              </>
            )}
            {cb.notForWho.length > 0 && (
              <>
                <h3>À reconsidérer si</h3>
                <ul>{cb.notForWho.map((x) => <li key={x}>{x}</li>)}</ul>
              </>
            )}
          </>
        )}

        {cb.grants.length > 0 && (
          <>
            <h2>Subventions applicables</h2>
            {cb.grants.map((g) => (
              <div key={g.name}>
                <h3>{g.name}</h3>
                <p>
                  {g.conditions}
                  {g.source && (
                    <>
                      {" "}
                      <a href={g.source} rel="noopener noreferrer nofollow" target="_blank">Source officielle</a>.
                    </>
                  )}
                </p>
              </div>
            ))}
            <p>
              Les montants LogisVert exacts par appareil sont dans notre <Link href="/subventions/logisvert">tableau par marque</Link>, tiré de la liste
              officielle d'Hydro-Québec et mis à jour automatiquement.
            </p>
          </>
        )}
      </Prose>

      <section className="mx-auto max-w-6xl px-5 sm:px-8 pb-4">
        <h2 className="text-[26px] font-bold text-[#172126] mb-2">Les machines les plus performantes par grand froid</h2>
        <p className="text-[#536873] mb-5">Classement sur le COP certifié à -15 °C, toutes marques confondues.</p>
        <ModelTable models={cold.models} showRank metric={{ label: cold.def.metricLabel, value: cold.def.value }} />
        <p className="mt-3 text-sm"><Link href="/meilleures-thermopompes" className="text-[#e54b17] font-semibold">Tous les classements →</Link></p>
      </section>

      <CtaThermoMatch />

      <RelatedLinks title="Par capacité" links={classes.map((c) => ({ href: `/thermopompes/${c.slug}`, label: `Thermopompe ${c.label}`, hint: `${c.models.length} machines` }))} />
      <RelatedLinks title="Voir aussi" links={cb.relatedLinks.map((l) => ({ href: l.href, label: l.label }))} />
      <FaqBlock items={faq} />
    </main>
  );
}

/* ------------------------------------------------------------------
   Page par classe de capacité (données)
   ------------------------------------------------------------------ */

function areaRangeFor(btu: number): { min: number; max: number } {
  // Inverse du calcul de charge ThermoMatch pour une maison standard (1981-2000, isolation standard).
  const perFt2 = estimateLoad({ heatedAreaFt2: 1000, homeType: "detached", floors: 1, systemKind: "any", zones: 1, backupHeatAvailable: false, priorities: [], budget: "unknown" }).loadBtuH / 1000;
  const ideal = btu / perFt2;
  return { min: Math.round((ideal * 0.8) / 50) * 50, max: Math.round((ideal * 1.05) / 50) * 50 };
}

function CapacityView({ cap }: { cap: CapacityClass }) {
  const classes = getCapacityClasses();
  const idx = classes.findIndex((c) => c.slug === cap.slug);
  const prev = classes[idx - 1];
  const next = classes[idx + 1];
  const area = areaRangeFor(cap.btu);
  const walls = cap.models.filter((m) => m.kind === "murale");
  const centrals = cap.models.filter((m) => m.kind === "centrale");
  const certified = cap.models.filter((m) => m.h5Btu !== null);
  const h5Values = certified.map((m) => m.h5Btu as number).sort((a, b) => a - b);
  const h5Min = h5Values[0];
  const h5Max = h5Values[h5Values.length - 1];
  const brands = [...new Set(cap.models.map((m) => m.brand))];

  const faq = [
    {
      question: `Une thermopompe ${cap.label} chauffe quelle superficie?`,
      answer: `Pour une maison unifamiliale standard (construction 1981-2000, isolation normale), notre calcul de charge situe une ${cap.label} entre ${area.min.toLocaleString("fr-CA")} et ${area.max.toLocaleString("fr-CA")} pi². Une maison plus ancienne ou mal isolée demande plus ; un condo ou une maison neuve demande moins. ThermoMatch fait ce calcul pour votre maison précise.`,
    },
    {
      question: `Combien de BTU fournit réellement une ${cap.label} à -15 °C?`,
      answer: h5Values.length
        ? `Selon les fiches ENERGY STAR de ${certified.length} machines, entre ${h5Min.toLocaleString("fr-CA")} et ${h5Max.toLocaleString("fr-CA")} BTU/h. L'écart est énorme : c'est pour cela que la capacité nominale ne suffit pas pour choisir.`
        : `Aucune donnée certifiée à -15 °C n'est publiée pour cette classe dans la liste actuelle.`,
    },
    {
      question: `Quelle subvention LogisVert pour une ${cap.label}?`,
      answer: cap.maxLogisVert > 0
        ? `Jusqu'à ${cap.maxLogisVert.toLocaleString("fr-CA")} $ selon l'appariement, d'après la liste officielle d'Hydro-Québec. Les montants exacts sont dans le tableau.`
        : `Aucun montant LogisVert n'est publié pour cette classe.`,
    },
    {
      question: `Murale ou centrale en ${cap.label}?`,
      answer: `${walls.length} murales et ${centrals.length} centrales existent dans cette classe. La centrale demande des conduits existants ; la murale s'installe sans conduits. Le choix dépend de votre maison, pas de la capacité.`,
    },
  ];

  return (
    <main className="bg-[#f8f5f0] text-[#071d2b]">
      <JsonLd
        data={[
          getBreadcrumbSchema([
            { name: "Accueil", url: "/" },
            { name: "Thermopompes", url: "/thermopompes" },
            { name: `Thermopompe ${cap.label}`, url: `/thermopompes/${cap.slug}` },
          ]),
          getItemListSchema({ name: `Thermopompes ${cap.label}`, items: cap.models.slice(0, 50).map((m) => ({ name: `${m.brand} ${m.name}`, url: `/produit/${m.canonicalSlug}` })) }),
        ]}
      />
      <SeoHero
        eyebrow="Par capacité"
        title={`Thermopompe ${cap.label}`}
        intro={`${cap.models.length} machines distinctes de ${brands.length} marques, avec leur capacité certifiée à -15 °C, leur efficacité et leur subvention LogisVert. Pour une maison standard de ${area.min.toLocaleString("fr-CA")} à ${area.max.toLocaleString("fr-CA")} pi².`}
        answer={`${cap.models.length} thermopompes ${cap.label} de ${brands.length} marques sont vendues au Québec : ${walls.length} murales et ${centrals.length} centrales. ${h5Values.length ? `Leur capacité certifiée à -15 °C va de ${h5Min.toLocaleString("fr-CA")} à ${h5Max.toLocaleString("fr-CA")} BTU/h` : "La capacité certifiée à -15 °C n'est pas publiée pour toutes"}${cap.maxLogisVert > 0 ? `, avec une subvention LogisVert jusqu'à ${cap.maxLogisVert.toLocaleString("fr-CA")} $` : ""}. Convient en général à une maison de ${area.min.toLocaleString("fr-CA")} à ${area.max.toLocaleString("fr-CA")} pi², selon l'isolation.`}
        breadcrumbs={[
          { label: "Thermopompes", href: "/thermopompes" },
          { label: `Thermopompe ${cap.label}`, href: `/thermopompes/${cap.slug}` },
        ]}
        stats={[
          { label: "Murales / centrales", value: `${walls.length} / ${centrals.length}` },
          { label: "Certifiées grand froid", value: String(cap.coldClimateCount) },
          { label: "À -15 °C (certifié)", value: h5Values.length ? `${h5Min.toLocaleString("fr-CA")} à ${h5Max.toLocaleString("fr-CA")}` : "—" },
          { label: "LogisVert jusqu'à", value: cap.maxLogisVert > 0 ? `${cap.maxLogisVert.toLocaleString("fr-CA")} $` : "—" },
        ]}
      />
      <Prose>
        <h2>« {cap.label} » ne veut pas dire {cap.label} en hiver</h2>
        <p>
          La capacité nominale est mesurée à 8 °C. Au Québec, ce qui compte est la capacité certifiée à -15 °C : dans cette classe, elle va de{" "}
          {h5Values.length ? <><strong>{h5Min.toLocaleString("fr-CA")}</strong> à <strong>{h5Max.toLocaleString("fr-CA")} BTU/h</strong></> : "valeurs non publiées"} selon la machine.
          Deux « {cap.label} » peuvent donc chauffer très différemment quand il fait froid.
        </p>
        <p>
          Pour une maison unifamiliale standard, une {cap.label} convient à environ {area.min.toLocaleString("fr-CA")} à {area.max.toLocaleString("fr-CA")} pi². Ce repère vient du
          calcul de charge de <Link href="/trouver-ma-thermopompe">ThermoMatch</Link> (15 BTU/h par pi², ajusté selon l'âge, l'isolation, la fenestration et le sous-sol) et doit être
          confirmé sur place par un calcul CSA F280.
        </p>
      </Prose>
      {walls.length > 0 && (
        <section className="mx-auto max-w-6xl px-5 sm:px-8 pb-10">
          <h2 className="text-[26px] font-bold text-[#172126] mb-4">Murales {cap.label}</h2>
          <ModelTable models={walls} caption="Triées par qualité des données certifiées, tenue de capacité au froid, HSPF2 puis subvention." />
        </section>
      )}
      {centrals.length > 0 && (
        <section className="mx-auto max-w-6xl px-5 sm:px-8 pb-10">
          <h2 className="text-[26px] font-bold text-[#172126] mb-4">Centrales {cap.label}</h2>
          <ModelTable models={centrals} />
        </section>
      )}
      <CtaThermoMatch title={`Une ${cap.label} est-elle le bon calibre pour votre maison?`} />
      <RelatedLinks
        title="Autres capacités"
        links={[
          ...(prev ? [{ href: `/thermopompes/${prev.slug}`, label: `Thermopompe ${prev.label}`, hint: "calibre inférieur" }] : []),
          ...(next ? [{ href: `/thermopompes/${next.slug}`, label: `Thermopompe ${next.label}`, hint: "calibre supérieur" }] : []),
          { href: "/meilleures-thermopompes", label: "Classements sur données certifiées" },
          { href: "/thermopompes/thermopompe-murale", label: "Guide : thermopompe murale" },
          { href: "/thermopompes/thermopompe-centrale", label: "Guide : thermopompe centrale" },
          { href: "/subventions/logisvert", label: "LogisVert par marque" },
        ]}
      />
      <FaqBlock items={faq} />
    </main>
  );
}
