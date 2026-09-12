import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createMetadata, getBreadcrumbSchema, getFaqPageSchema, getItemListSchema } from "@/lib/seo";
import { getLandingPage, getLandingPages, type LandingPage } from "@/lib/seo/landings";
import { getCapacityClass, getCapacityClasses, getRanking, type CapacityClass } from "@/lib/seo/programmatic";
import { estimateLoad } from "@/lib/thermomatch/sizing";
import { JsonLd } from "@/components/seo/SeoBlocks";
import { AtelierHero } from "@/components/heroes-v2/marques/AtelierHero";
import { PlaqueHero } from "@/components/heroes-v2/plaque/PlaqueHero";
import { buildPlaque } from "@/components/heroes-v2/plaque/data";
import { typo } from "@/components/heroes-v2/marques/shared";
import { GuideSections } from "@/components/sections-v2/atelier/GuideSections";
import { CapacitySections } from "@/components/sections-v2/atelier/CapacitySections";
import { toPartRows } from "@/components/sections-v2/atelier/data";
import type { GuideVariant } from "@/components/seo/hero/types";

export const dynamicParams = false;

/* Schéma de principe du héros, selon le sujet du guide. */
const GUIDE_VARIANT: Record<string, GuideVariant> = {
  "thermopompe-murale": "murale",
  "thermopompe-centrale": "centrale",
  "thermopompe-multizone": "multizone",
  "thermopompe-a-vendre": "catalogue",
  "comparateur-thermopompe": "catalogue",
  "installation-thermopompe": "installation",
  "soumission-thermopompe": "installation",
  "remplacement-thermopompe": "remplacement",
  "thermopompe-climat-froid": "froid",
  "thermopompe-haute-efficacite": "efficacite",
};

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
    <main className="bg-[#0D3B66] text-[#071d2b]">
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Accueil", url: "/" },
          { name: "Thermopompes", url: "/thermopompes" },
          { name: page.h1, url: `/thermopompes/${page.slug}` },
        ])}
      />
      {faq.length > 0 && <JsonLd data={getFaqPageSchema(faq)} />}
      {/* Héros « Plan d'atelier » : planche technique du système, titre dans le cartouche. */}
      <AtelierHero
        eyebrow={typo(page.pageType)}
        title={typo(page.h1)}
        intro={typo(cb.hero.subtitle)}
        crumbs={[{ label: "Thermopompes", href: "/thermopompes" }, { label: typo(page.h1) }]}
        variant={GUIDE_VARIANT[page.slug] ?? "catalogue"}
      />
      {/* Suite en planches numérotées : feuilles de papier, montage, nomenclature, index, notes. */}
      <GuideSections
        d={{
          doc: typo(page.pageType),
          intro: typo(cb.intro),
          benefits: cb.benefits.map((b) => ({ title: typo(b.title), desc: typo(b.desc) })),
          steps: cb.steps.map((s) => ({ title: typo(s.title), desc: typo(s.desc) })),
          forWho: cb.forWho.map(typo),
          notForWho: cb.notForWho.map(typo),
          grants: cb.grants.map((g) => ({ name: typo(g.name), conditions: typo(g.conditions), source: g.source ?? null })),
          cold: { rows: toPartRows(cold.models, cold.def.value), metricLabel: typo(cold.def.metricLabel) },
          capacities: classes.map((c) => ({ href: `/thermopompes/${c.slug}`, label: `Thermopompe ${c.label}`, btu: c.btu, count: c.models.length })),
          related: cb.relatedLinks.map((l) => ({ href: l.href, label: typo(l.label) })),
          faq: faq.map((f) => ({ question: typo(f.question), answer: typo(f.answer) })),
        }}
      />
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
    <main className="bg-[#E7E6E1] text-[#071d2b]">
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
      <JsonLd data={getFaqPageSchema(faq)} />
      {/* Héros « Plaque signalétique » : les chiffres de la classe poinçonnés sur une plaque d'aluminium. */}
      <PlaqueHero
        d={buildPlaque({
          btu: cap.btu,
          label: cap.label,
          slug: cap.slug,
          models: cap.models.length,
          brands: brands.length,
          walls: walls.length,
          centrals: centrals.length,
          cold: cap.coldClimateCount,
          certified: certified.length,
          h5Min: h5Values.length ? h5Min : null,
          h5Max: h5Values.length ? h5Max : null,
          maxLogisVert: cap.maxLogisVert,
          areaMin: area.min,
          areaMax: area.max,
          classes: classes.map((c) => ({ btu: c.btu, slug: c.slug })),
          intro: `${cap.models.length} machines distinctes de ${brands.length} marques, avec leur capacité certifiée à -15 °C, leur efficacité et leur subvention LogisVert. Pour une maison standard de ${area.min.toLocaleString("fr-CA")} à ${area.max.toLocaleString("fr-CA")} pi².`,
          answer: `${cap.models.length} thermopompes ${cap.label} de ${brands.length} marques sont vendues au Québec : ${walls.length} murales et ${centrals.length} centrales. ${h5Values.length ? `Leur capacité certifiée à -15 °C va de ${h5Min.toLocaleString("fr-CA")} à ${h5Max.toLocaleString("fr-CA")} BTU/h` : "La capacité certifiée à -15 °C n'est pas publiée pour toutes"}${cap.maxLogisVert > 0 ? `, avec une subvention LogisVert jusqu'à ${cap.maxLogisVert.toLocaleString("fr-CA")} $` : ""}. Convient en général à une maison de ${area.min.toLocaleString("fr-CA")} à ${area.max.toLocaleString("fr-CA")} pi², selon l'isolation.`,
        })}
      />
      {/* Suite en plaques rivetées : conformité, grand froid, plaques de caractéristiques, étiquette, renvois, notice. */}
      <CapacitySections
        d={{
          label: cap.label,
          btu: cap.btu,
          nominal: cap.btu.toLocaleString("fr-CA"),
          h5: h5Values.length ? { min: h5Min.toLocaleString("fr-CA"), max: h5Max.toLocaleString("fr-CA"), minN: h5Min, maxN: h5Max } : null,
          certified: certified.length.toLocaleString("fr-CA"),
          area: { min: area.min.toLocaleString("fr-CA"), max: area.max.toLocaleString("fr-CA") },
          walls: toPartRows(walls),
          centrals: toPartRows(centrals),
          wallsCaption: "Triées par qualité des données certifiées, tenue de capacité au froid, HSPF2 puis subvention.",
          ctaTitle: typo(`Une ${cap.label} est-elle le bon calibre pour votre maison?`),
          related: [
            ...(prev ? [{ href: `/thermopompes/${prev.slug}`, label: `Thermopompe ${prev.label}`, hint: "calibre inférieur" }] : []),
            ...(next ? [{ href: `/thermopompes/${next.slug}`, label: `Thermopompe ${next.label}`, hint: "calibre supérieur" }] : []),
            { href: "/meilleures-thermopompes", label: "Classements sur données certifiées" },
            { href: "/thermopompes/thermopompe-murale", label: "Guide : thermopompe murale" },
            { href: "/thermopompes/thermopompe-centrale", label: "Guide : thermopompe centrale" },
            { href: "/subventions/logisvert", label: "LogisVert par marque" },
          ].map((l) => ({ ...l, label: typo(l.label) })),
          faq: faq.map((f) => ({ question: typo(f.question), answer: typo(f.answer) })),
        }}
      />
    </main>
  );
}
