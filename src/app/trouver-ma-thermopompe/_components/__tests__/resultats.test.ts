import { describe, expect, it, vi } from "vitest";
import { createElement, type ReactNode } from "react";
import { renderToString } from "react-dom/server";
import { readFileSync } from "node:fs";
import path from "node:path";

/* ThermoMatch — écran des résultats (cartes d'origine, haut « Le thermomètre ») et lien partagé.
   - Aucune neige : elle est réservée à la page d'accueil.
   - Jamais « prix moins subvention » : l'aide LogisVert est versée par Hydro-Québec, à part.
   - « Par grand froid » : température publiée → « Chauffe jusqu'à −XX °C » en très gros ; sinon certifiée
     climat froid → « Certifiée grand froid », sans chiffre de limite ; sinon la puissance à −15 °C.
   - Le thermomètre : état final dans le HTML serveur, repère régional seulement avec une vraie donnée.
   - Le lien partagé est une page du site au ton sombre ; le questionnaire garde le ton clair.
   Rendu serveur (renderToString), comme les autres tests de composants. */

const nav = vi.hoisted(() => ({ pathname: "/" }));

vi.mock("next/link", () => ({
  default: (props: { href: string; children: ReactNode; prefetch?: unknown; scroll?: unknown }) => {
    const { href, children, ...rest } = props;
    delete rest.prefetch;
    delete rest.scroll;
    return createElement("a", { href, ...rest }, children);
  },
}));
vi.mock("next/image", () => ({
  default: ({ src, alt, width, height }: { src: unknown; alt?: string; width?: number; height?: number }) =>
    createElement("img", { src: typeof src === "string" ? src : "", alt: alt ?? "", width, height }),
}));
vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: () => {}, replace: () => {}, prefetch: () => {}, back: () => {}, refresh: () => {} }),
  usePathname: () => nav.pathname,
  useSearchParams: () => new URLSearchParams(),
}));
vi.mock("next/font/google", () => {
  const police = () => ({ className: "police", variable: "--police", style: { fontFamily: "police" } });
  return { IBM_Plex_Mono: police, Inter: police, Outfit: police, Geist: police, Inter_Tight: police, Instrument_Serif: police };
});

import { ThermoMatchResults } from "../ThermoMatchResults";
import { planThermometre, texteThermometre } from "../thermometre";
import ResultatsPartagesPage from "@/app/trouver-ma-thermopompe/resultats/page";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { heroTone } from "@/components/hero/routes";
import { encodeShareCode } from "@/lib/thermomatch/share-code";
import { recommendFromAnswers } from "@/lib/thermomatch/recommend";
import type { QuestionnaireAnswers } from "@/lib/thermomatch/answers";

const fr = (n: number) => n.toLocaleString("fr-CA", { maximumFractionDigits: 0 });
/** Texte visible du HTML : sans balises ni commentaires de React. */
const texte = (html: string) => html.replace(/<!--.*?-->/g, "").replace(/<[^>]+>/g, "");

/** summaryContext connu (valeurs choisies pour se reconnaître dans le HTML). */
const CTX = {
  estimatedLoadBtu: 38500,
  targetBtu: 38500,
  floors: 2,
  requestedZones: 2,
  isMultiZone: true,
  heatedAreaFt2: 1750,
  uncertaintyPct: 13,
  region: "Montréal",
  weights: { fit: 30, cold: 25, efficiency: 15, subsidy: 10, budget: 10, dataQuality: 10 },
  candidatesEvaluated: 1284,
  candidatesRetained: 212,
};

const result = (id: string, brand: string, produit: Record<string, unknown> = {}) => ({
  badge: "Meilleur choix",
  score: 91,
  product: { id, brand, series: "Série Test", outdoorModel: "EXT-24", systemType: "ductless", nominalBtu: 24000, heatingCapacity5FBtuH: { min: 21000, max: 21000 }, coldClimate: true, h5Certified: true, minOperatingTempC: -30, imageUrl: null, alsoSoldAs: [], ...produit },
  selectedPairing: { hspf2: { min: 10.5, max: 10.5 }, seer2: { min: 22, max: 22 } },
  subsidyEstimate: 1350,
  fitRatio: 1.05,
  priceRange: { min: 3600, max: 4400, basis: "publie", sources: 1, tierLabel: "gamme intermédiaire", matchLabel: "24 000 BTU" },
  reasons: ["Couvre la charge estimée."],
  warnings: [],
});
const trois = (produit: Record<string, unknown> = {}) => [result("m1", "Marque Un", produit), result("m2", "Marque Deux", produit), result("m3", "Marque Trois", produit)];
const RESULTS = trois();

const renderWith = (results: unknown[], ctx: Record<string, unknown> | null) =>
  renderToString(createElement(ThermoMatchResults, { results: results as never, onSelectResult: () => {}, onRetry: () => {}, summaryContext: ctx as never }));
const render = (ctx: Record<string, unknown> | null) => renderWith(RESULTS, ctx);

/** Bloc « Par grand froid » de chaque carte, dans l'ordre des résultats (jusqu'à la scène de l'appareil). */
const blocsFroid = (html: string) =>
  html
    .split('data-grand-froid="')
    .slice(1)
    .map((s) => ({ kind: s.slice(0, s.indexOf('"')), texte: texte(s.slice(s.indexOf(">") + 1, s.indexOf("Photo officielle à venir"))) }));

const ANSWERS = {
  postalCode: "H2X 1Y4",
  propertyType: "maison",
  area: "1500-2000",
  floors: "2",
  constructionPeriod: "1981_2000",
  insulation: "standard",
  windowShare: "standard",
  basement: "heated",
  currentSystem: "electrique",
  heatPumpType: "murale",
  priority: ["economies"],
  budget: "5000-7000",
  financing: "non",
} as QuestionnaireAnswers;

describe("Résultats ThermoMatch : pas de neige, pas de prix moins la subvention", () => {
  it("aucun fichier des résultats n'importe Snowfall", () => {
    const dir = path.resolve(__dirname, "..");
    const files = ["ThermoMatchResults.tsx", "ThermometreHero.tsx", "thermometre.ts", "SavingsBand.tsx", "ExistingUnitCompare.tsx", "EmailMyChoices.tsx", "results.css", "../resultats/page.tsx", "../resultats/SharedResults.tsx", "../resultats/LienIncomplet.tsx"];
    for (const f of files) expect(readFileSync(path.join(dir, f), "utf8"), f).not.toMatch(/Snowfall/);
  });

  it("l'aide LogisVert n'est jamais soustraite du prix : elle est à part, versée par Hydro-Québec", () => {
    const src = readFileSync(path.resolve(__dirname, "../ThermoMatchResults.tsx"), "utf8");
    expect(src).not.toMatch(/après LogisVert/);
    expect(src).not.toMatch(/price\.(min|max)\s*-\s*card\.subsidy/);
    const html = render(CTX);
    expect(html).not.toContain("après LogisVert");
    // 3 600 − 1 350 et 4 400 − 1 350 n'apparaissent nulle part.
    expect(html).not.toContain(fr(2250));
    expect(html).not.toContain(fr(3050));
    expect(html).toContain("Aide LogisVert à part");
    expect(html).toContain("montant officiel pour cet appariement, à faire confirmer");
  });
});

describe("« Par grand froid » sur les cartes", () => {
  it("température publiée : « Chauffe jusqu’à −30 °C » en très gros, avec sa source", () => {
    const html = render(CTX);
    const blocs = blocsFroid(html);
    expect(blocs).toHaveLength(3);
    for (const b of blocs) {
      expect(b.kind).toBe("publiee");
      expect(b.texte).toMatch(/Chauffe jusqu’à\s*−30 °C/);
      expect(b.texte).toContain("Température minimale publiée par le fabricant");
      expect(b.texte).not.toContain("Certifiée grand froid");
    }
    // Au moins 44 px sur mobile, chiffres tabulaires : le plus gros texte de la carte.
    const gros = [...html.matchAll(/<p class="([^"]*)"[^>]*>−30</g)];
    expect(gros).toHaveLength(3);
    for (const g of gros) {
      expect(g[1]).toContain("text-[56px]");
      expect(g[1]).toContain("tabular-nums");
    }
  });

  it("sans température publiée mais certifiée climat froid : « Certifiée grand froid », sans chiffre de limite", () => {
    const html = renderWith(trois({ minOperatingTempC: null, coldClimate: true }), CTX);
    const blocs = blocsFroid(html);
    expect(blocs).toHaveLength(3);
    for (const b of blocs) {
      expect(b.kind).toBe("certifiee");
      expect(b.texte).toContain("Certifiée grand froid");
      expect(b.texte).toContain("Chauffe encore à −15 °C");
      expect(b.texte).toContain("Certification ENERGY STAR climat froid");
      expect(b.texte).toContain(`${fr(21000)} BTU/h livrés à −15 °C`);
      expect(b.texte).not.toMatch(/jusqu’à/i);
    }
    // Nulle part « jusqu’à −15 °C » : −15 °C est le point de mesure de la certification, pas la limite.
    const tout = texte(html);
    expect(tout).not.toMatch(/jusqu’à\s*−15/);
    // Le thermomètre les pose au repère −15 °C, « minimum non publié ».
    expect(tout).toContain("certifiées à −15 °C");
    expect(tout).toContain("minimum non publié");
  });

  it("ni température publiée ni climat froid : ni « Chauffe jusqu’à » ni « Certifiée grand froid », la puissance à −15 °C", () => {
    const html = renderWith(trois({ minOperatingTempC: null, coldClimate: false }), CTX);
    const blocs = blocsFroid(html);
    expect(blocs).toHaveLength(3);
    for (const b of blocs) {
      expect(b.kind).toBe("mesuree");
      expect(b.texte).toContain(`${fr(21000)} BTU/h`);
      expect(b.texte).toContain("livrés à −15 °C");
      expect(b.texte).not.toMatch(/jusqu’à/i);
      expect(b.texte).not.toContain("Certifiée grand froid");
      expect(b.texte).not.toContain("Chauffe encore");
    }
    // Sur le thermomètre : pas posées, listées « température minimale non publiée ».
    const tout = texte(html);
    expect(tout).toContain("Température minimale non publiée");
    expect(tout).not.toContain("certifiée à");
    expect(tout).not.toContain("certifiées à");
  });
});

describe("Le thermomètre (haut de page)", () => {
  const MACHINES = RESULTS.map((r) => ({ key: r.product.id, brand: r.product.brand, series: r.product.series, minTemp: r.product.minOperatingTempC, coldClimate: r.product.coldClimate }));

  it("HTML serveur : état final (valeurs, positions), animation en attente, texte équivalent", () => {
    const ctx = { ...CTX, designTempC: -23 };
    const html = render(ctx);
    const plan = planThermometre(MACHINES, ctx);
    expect(html).toContain('data-play="0"');
    expect(html).not.toContain("<canvas");
    // Le mercure s'arrête à la machine la plus froide (−30 °C), calculé côté serveur.
    expect(plan.mercure).toBeGreaterThan(0);
    expect(html).toContain(`height="${plan.mercure}"`);
    const tout = texte(html);
    expect(tout).toContain("chauffent jusqu’à −30 °C");
    expect(tout).toContain("Jours les plus froids : −23 °C");
    expect(tout).toContain("à Montréal");
    for (const l of texteThermometre(plan)) expect(tout).toContain(l);
    // Infos de l'en-tête : maison, région, charge et marge.
    for (const v of [fr(38500), fr(1750), "2 étages", "Montréal", "±13 %"]) expect(tout).toContain(v);
    expect(html).not.toContain("NaN");
  });

  it("repère régional seulement avec une vraie température de conception", () => {
    expect(texte(render(CTX))).not.toContain("Jours les plus froids");
    expect(texte(render({ ...CTX, designTempC: null }))).not.toContain("Jours les plus froids");
    expect(texte(render({ ...CTX, designTempC: -23 }))).toContain("Jours les plus froids");
  });

  it("moteur : température de conception de la région, jamais celle du repli général", () => {
    expect(recommendFromAnswers(ANSWERS).summaryContext).toMatchObject({ region: "Montréal / Laval", designTempC: -23 });
    expect(recommendFromAnswers({ ...ANSWERS, postalCode: "G0A 1A0" }).summaryContext).toMatchObject({ region: "Québec (Général)", designTempC: null });
    expect(recommendFromAnswers({ ...ANSWERS, postalCode: "K1A 0B1" }).summaryContext.designTempC).toBeNull();
  });

  it("sans « bon calibre » ni pondération complète : rien d'inventé (ni 0, ni NaN)", () => {
    const ctx: Record<string, unknown> = { ...CTX, weights: { fit: 30 } };
    delete ctx.candidatesRetained;
    delete ctx.uncertaintyPct;
    const html = render(ctx);
    expect(html).not.toContain("de bon calibre");
    expect(html).not.toContain("de calibre compatible");
    expect(html).not.toContain("NaN");
    expect(html).not.toContain("undefined");
    expect(html).toContain(fr(1284));
  });
});

describe("Lien partagé", () => {
  it("ton de l'en-tête : sombre sur les résultats partagés, clair sur le questionnaire", () => {
    expect(heroTone("/trouver-ma-thermopompe/resultats")).toBe("dark");
    expect(heroTone("/trouver-ma-thermopompe")).toBe("light");
  });

  it("rendu dans la page du site, sans l'en-tête fait à la main, avec le thermomètre et ses vraies données", async () => {
    const { results, summaryContext } = recommendFromAnswers(ANSWERS);
    expect(results.length).toBeGreaterThan(0);
    nav.pathname = "/trouver-ma-thermopompe/resultats";
    const html = renderToString(await ResultatsPartagesPage({ searchParams: Promise.resolve({ r: encodeShareCode(ANSWERS) }) }));
    expect(html).toContain("Résultats partagés");
    expect(html).toContain("Refaire le questionnaire");
    expect(html).toContain('id="tm-titre"');
    expect(html).toContain('data-play="0"');
    expect(html).toContain(fr(Math.round(summaryContext.estimatedLoadBtu)));
    expect(html).toContain(fr(summaryContext.candidatesEvaluated));
    // Repère régional tiré du moteur (Montréal / Laval, −23 °C).
    expect(texte(html)).toContain("Jours les plus froids : −23 °C");
    expect(html).not.toContain("Refaire le test");
    expect(html).not.toMatch(/<header/);
  });

  it("l'en-tête du site est rendu sur le lien partagé, pas sur le questionnaire plein écran", () => {
    // Enfants passés en argument (et non en prop) : SiteChrome les exige dans son type, d'où cette signature.
    const Chrome = SiteChrome as unknown as (p: { footer: ReactNode; children?: ReactNode }) => ReactNode;
    const chrome = (p: string) => {
      nav.pathname = p;
      return renderToString(createElement(Chrome, { footer: createElement("footer", null, "pied") }, createElement("main", null, "contenu")));
    };
    const shared = chrome("/trouver-ma-thermopompe/resultats");
    expect(shared).toMatch(/<header/);
    expect(shared).toContain('href="/marques"');
    expect(chrome("/trouver-ma-thermopompe")).not.toMatch(/<header/);
  });

  it("lien incomplet : page sombre avec le chemin vers le questionnaire", async () => {
    const html = renderToString(await ResultatsPartagesPage({ searchParams: Promise.resolve({ r: "tronqué!" }) }));
    expect(html).toContain("Ce lien de résultats");
    expect(html).toContain('href="/trouver-ma-thermopompe"');
    expect(html).toContain("#0A1419");
  });
});
