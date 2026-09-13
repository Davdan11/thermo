import { HeroPremium } from "@/components/home/HeroPremium";
import { ColdStory } from "@/components/home/ColdStory";
import { ScanShowcase } from "@/components/home/premium/ScanShowcase";
import { CompareStage, type CompareModel } from "@/components/home/premium/CompareStage";
import { ThermoMatchStage, type StageModel } from "@/components/home/premium/ThermoMatchStage";
import { TypeTriptych, type TypePanel } from "@/components/home/premium/TypeTriptych";
import { SelectionShelf, type ShelfModel } from "@/components/home/premium/SelectionShelf";
import { BrandsMarquee, type BrandLogo } from "@/components/home/premium/BrandsMarquee";
import { AidesLedger } from "@/components/home/premium/AidesLedger";
import { GuidesEditorial } from "@/components/home/premium/GuidesEditorial";
import { FinalCta, ProcessRail } from "@/components/home/premium/JourneyFinale";
import { GoogleReviews } from "@/components/avis/GoogleReviews";
import { getRanking, getSeoModel } from "@/lib/seo/programmatic";
import { getLogisVertStats } from "@/lib/subsidies/logisvert-official";
import { getPublishedBrandsSummary } from "@/lib/data/queries/brand-detail";
import { getAvailableFilters } from "@/lib/data/queries/catalogue";
import { registry } from "@/lib/data/registry";
import { getEligibleModelCount } from "@/lib/data/queries/stats";
import { SYSTEM_TYPE_LABELS, type SystemType } from "@/lib/data/types/enums";
import { Inter_Tight, Instrument_Serif } from "next/font/google";
import { createMetadata } from "@/lib/seo";

// Polices des titres du héros et de « Le test du froid », chargées sur l’accueil seulement.
const display = Inter_Tight({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-serif", display: "swap" });

export const metadata = createMetadata({
  // ≈ 60 caractères : le nom du site est aussi fourni à Google par le JSON-LD WebSite (layout).
  title: { absolute: "Thermopompe au Québec : comparez toutes les marques | TAV.ca" },
  description:
    "Toutes les thermopompes vendues au Québec, comparées avec les données certifiées d'Hydro-Québec : capacité à -15 °C, HSPF2, subvention LogisVert. Trois bons choix en 2 minutes.",
  canonicalPath: "/",
});

/* Logos de la bande « Toutes les grandes marques » (liens vers les fiches marques). */
const BRAND_LOGOS: BrandLogo[] = [
  { src: "/images/marques/mono/daikin.png", alt: "Daikin", href: "/marques/daikin" },
  { src: "/images/marques/mono/mitsubishi-electric.png", alt: "Mitsubishi Electric", href: "/marques/mitsubishi-electric" },
  { src: "/images/marques/mono/fujitsu.png", alt: "Fujitsu", href: "/marques/fujitsu" },
  { src: "/images/marques/mono/gree.png", alt: "Gree", href: "/marques/gree" },
  { src: "/images/marques/mono/lg.png", alt: "LG", href: "/marques/lg" },
  { src: "/images/marques/mono/samsung.png", alt: "Samsung", href: "/marques/samsung" },
  { src: "/images/marques/mono/panasonic.png", alt: "Panasonic", href: "/marques/panasonic" },
  { src: "/images/marques/mono/moovair.png", alt: "Moovair", href: "/marques/moovair" },
  { src: "/images/marques/mono/bosch.png", alt: "Bosch", href: "/marques/bosch" },
  { src: "/images/marques/mono/lennox.png", alt: "Lennox", href: "/marques/lennox" },
  { src: "/images/marques/mono/carrier.png", alt: "Carrier", href: "/marques/carrier" },
  { src: "/images/marques/mono/tosot.png", alt: "Tosot", href: "/marques/tosot" },
];

/* ─────────────────────────────────────────────────────────────────────────
   HOMEPAGE — Thermopompes À Vendre.ca
   Héros, « Le test du froid », puis les sections premium (encre, crème,
   orange ; Inter Tight + Instrument Serif), toutes nourries par le catalogue.
───────────────────────────────────────────────────────────────────────────*/
export default function HomePage() {
  // Chiffres de la section « Le test du froid », calculés à partir du catalogue.
  const brandsSummary = getPublishedBrandsSummary();
  const coldClimate = brandsSummary.reduce((sum, b) => sum + b.coldClimateCount, 0);
  const with5F = registry.models.filter((m) => m.status === "published" && m.heatingCapacity5FMinBtu != null).length;

  // Types : le catalogue filtre par ?type= (valeurs SYSTEM_TYPES). Aucun modèle n'est classé « multi-zone »
  // dans le catalogue (?type=multi-zone donne 0 résultat) : la carte Multizones mène à la page
  // catégorie déjà liée dans le pied de page, sans compteur.
  const typeCount = new Map(getAvailableFilters().types.map((t) => [t.value, t.count]));
  const typePanels: TypePanel[] = (
    [
      { key: "wall-single", label: "Murales", src: "/images/categorie-murale-daikin-hd.webp", href: "/thermopompes?type=wall-single" },
      { key: "multi-zone", label: "Multizones", src: "/images/categorie-multizone-mitsubishi-electric-hd.webp", href: "/thermopompes/thermopompe-multizone" },
      { key: "central-ducted", label: "Centrales", src: "/images/categorie-centrale-samsung-hd.webp", href: "/thermopompes?type=central-ducted" },
    ] satisfies { key: SystemType; label: string; src: string; href: string }[]
  ).map((t) => ({ ...t, sub: SYSTEM_TYPE_LABELS[t.key], count: t.href.includes("?type=") ? (typeCount.get(t.key) ?? null) : null }));

  // Comparaison : trois murales de 12 000 BTU certifiées climat froid, chiffres du catalogue (N/D si absents).
  const compareModels: CompareModel[] = [
    { slug: "mitsubishi-electric-muz-fx12nlhz", brand: "Mitsubishi Electric", img: "/images/comparer-accueil/mitsubishi-muz-fx12nlhz.webp" },
    { slug: "daikin-rxt12avju", brand: "Daikin", img: "/images/comparer-accueil/daikin-rxt12avju.webp" },
    { slug: "fujitsu-aouh12ktap1", brand: "Fujitsu", img: "/images/comparer-accueil/fujitsu-aouh12ktap1.webp" },
  ].flatMap((c) => {
    const m = registry.modelBySlug.get(c.slug);
    return m ? [{ ...c, name: m.name, h5: m.heatingCapacity5FMaxBtu ?? null, hspf2: m.hspf2Max ?? null, seer2: m.seer2Max ?? null, cop5: m.cop5FMax ?? null }] : [];
  });
  // « Modèles à découvrir » : trois modèles réels du classement grand froid (avec photo), chiffres certifiés.
  const shelfModels: ShelfModel[] = (getRanking("grand-froid", 40)?.models ?? [])
    .filter((m) => m.imageUrl)
    // Une seule fois la même machine vendue sous plusieurs marques : mêmes chiffres affichés = même carte.
    .filter((m, i, arr) => arr.findIndex((o) => `${o.h5Btu}|${o.cop5}|${o.seer2}` === `${m.h5Btu}|${m.cop5}|${m.seer2}`) === i)
    .slice(0, 3)
    .map((m) => ({ slug: m.slug, brand: m.brand, name: m.name, img: m.imageUrl as string, h5: m.h5Btu, cop5: m.cop5, seer2: m.seer2, noise: null }));
  // Section ThermoMatch : l'écran animé montre ces trois mêmes modèles, avec le montant LogisVert officiel.
  const stageModels: StageModel[] = compareModels.map((c) => ({
    slug: c.slug,
    brand: c.brand,
    name: c.name,
    img: c.img,
    h5: c.h5,
    hspf2: c.hspf2,
    subsidy: getSeoModel(c.slug)?.logisVertDollars || null,
  }));
  return (
    <main className={`${display.variable} ${serif.variable}`} style={{ fontFamily: "var(--font-sans, 'Inter', sans-serif)", color: "#172126", backgroundColor: "#fff" }}>

      <HeroPremium eligible={getEligibleModelCount()} brands={brandsSummary.length} coldClimate={coldClimate} />

      {/* Le test du froid : juste après le héros. */}
      <ColdStory coldClimate={coldClimate} with5F={with5F} />

      {/* Magasinez avec les bonnes informations : Murales / Multizones / Centrales. */}
      <TypeTriptych types={typePanels} />

      <CompareStage models={compareModels} />

      <ScanShowcase />

      {/* Modèles à découvrir. */}
      <SelectionShelf models={shelfModels} />

      {/* Toutes les grandes marques, en bande d'encre qui mène à ThermoMatch. */}
      <BrandsMarquee brands={BRAND_LOGOS} count={brandsSummary.length} />

      <ThermoMatchStage models={stageModels} evaluated={getEligibleModelCount()} />

      {/* Les aides financières, enfin plus simples. */}
      <AidesLedger stats={getLogisVertStats()} />

      {/* Comprendre avant de choisir : trois guides. */}
      <GuidesEditorial />

      {/* Les vrais avis Google (Places API) : rien si non configurés, en erreur ou sans avis. */}
      <GoogleReviews variant="accueil" />

      {/* De la comparaison à l'installation, puis l'appel final. */}
      <ProcessRail />
      <FinalCta />

    </main>
  );
}
