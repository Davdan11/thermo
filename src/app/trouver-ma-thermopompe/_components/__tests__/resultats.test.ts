import { describe, expect, it, vi } from "vitest";
import { createElement, type ReactNode } from "react";
import { renderToString } from "react-dom/server";
import { readFileSync } from "node:fs";
import path from "node:path";

/* ThermoMatch — écran des résultats (cartes d'origine, haut « Le tamis ») et lien partagé.
   - Aucune neige : elle est réservée à la page d'accueil.
   - Jamais « prix moins subvention » : l'aide LogisVert est versée par Hydro-Québec, à part.
   - Le tamis : disposition identique d'un rendu à l'autre (graine fixe), nombres tirés de summaryContext,
     étape sautée quand un nombre manque (jamais de zéro inventé).
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
import { layoutSieve, sieveStages } from "../tamis";
import ResultatsPartagesPage from "@/app/trouver-ma-thermopompe/resultats/page";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { heroTone } from "@/components/hero/routes";
import { encodeShareCode } from "@/lib/thermomatch/share-code";
import { recommendFromAnswers } from "@/lib/thermomatch/recommend";
import type { QuestionnaireAnswers } from "@/lib/thermomatch/answers";

const fr = (n: number) => n.toLocaleString("fr-CA", { maximumFractionDigits: 0 });

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

const result = (id: string, brand: string) => ({
  badge: "Meilleur choix",
  score: 91,
  product: { id, brand, series: "Série Test", outdoorModel: "EXT-24", systemType: "ductless", nominalBtu: 24000, heatingCapacity5FBtuH: { min: 21000, max: 21000 }, coldClimate: true, h5Certified: true, minOperatingTempC: -30, imageUrl: null, alsoSoldAs: [] },
  selectedPairing: { hspf2: { min: 10.5, max: 10.5 }, seer2: { min: 22, max: 22 } },
  subsidyEstimate: 1350,
  fitRatio: 1.05,
  priceRange: { min: 3600, max: 4400, basis: "publie", sources: 1, tierLabel: "gamme intermédiaire", matchLabel: "24 000 BTU" },
  reasons: ["Couvre la charge estimée."],
  warnings: [],
});
const RESULTS = [result("m1", "Marque Un"), result("m2", "Marque Deux"), result("m3", "Marque Trois")];

const render = (ctx: Record<string, unknown> | null) =>
  renderToString(createElement(ThermoMatchResults, { results: RESULTS, onSelectResult: () => {}, onRetry: () => {}, summaryContext: ctx as never }));

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
    const files = ["ThermoMatchResults.tsx", "TamisHero.tsx", "tamis.ts", "SavingsBand.tsx", "ExistingUnitCompare.tsx", "EmailMyChoices.tsx", "results.css", "../resultats/page.tsx", "../resultats/SharedResults.tsx", "../resultats/LienIncomplet.tsx"];
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

describe("Le tamis", () => {
  it("disposition identique d'un rendu à l'autre (graine fixe), un point par machine évaluée", () => {
    const stages = sieveStages(CTX, 3);
    expect(stages.map((s) => [s.key, s.n])).toEqual([
      ["evaluated", 1284],
      ["retained", 212],
      ["kept", 3],
    ]);
    const a = layoutSieve(stages, 0.8);
    const b = layoutSieve(sieveStages({ ...CTX }, 3), 0.8);
    expect(b).toEqual(a);
    expect(a.dots).toHaveLength(1284);
    expect(a.retained).toHaveLength(212);
    expect(a.kept).toHaveLength(3);
    for (const k of a.kept) expect(a.retained).toContain(k);
    for (const d of a.dots) {
      expect(d.x).toBeGreaterThan(0);
      expect(d.x).toBeLessThan(1);
      expect(d.y).toBeGreaterThan(0);
      expect(d.y).toBeLessThan(1);
    }
    // Une autre graine donne un autre tamis : la disposition vient bien de la graine, pas du hasard.
    expect(layoutSieve(stages, 0.8, 42).kept).not.toEqual(a.kept);
  });

  it("un nombre absent saute son étape, jamais de nombre inventé", () => {
    expect(sieveStages({}, 3).map((s) => [s.key, s.n])).toEqual([["kept", 3]]);
    expect(layoutSieve(sieveStages({}, 3), 1).dots).toHaveLength(3);

    const noRetained = sieveStages({ candidatesEvaluated: 400 }, 3);
    expect(noRetained.map((s) => s.key)).toEqual(["evaluated", "kept"]);
    const l = layoutSieve(noRetained, 1);
    expect(l.retained).toBeNull();
    expect(l.dots).toHaveLength(400);
    expect(l.kept).toHaveLength(3);

    expect(sieveStages({ candidatesRetained: 90 }, 2).map((s) => [s.key, s.n])).toEqual([
      ["retained", 90],
      ["kept", 2],
    ]);
  });

  it("les nombres du haut de page sont dans le HTML serveur, tirés de summaryContext", () => {
    const html = render(CTX);
    for (const v of [fr(1284), fr(212), fr(38500), fr(1750)]) expect(html).toContain(v);
    expect(html).toContain("machines évaluées");
    expect(html).toContain("de bon calibre pour votre maison");
    expect(html).toContain("Un point par machine évaluée.");
    expect(html).toContain("<canvas");
    expect(html).not.toContain("NaN");
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

  it("rendu dans la page du site, sans l'en-tête fait à la main, avec le tamis et ses vrais nombres", async () => {
    const { results, summaryContext } = recommendFromAnswers(ANSWERS);
    expect(results.length).toBeGreaterThan(0);
    nav.pathname = "/trouver-ma-thermopompe/resultats";
    const html = renderToString(await ResultatsPartagesPage({ searchParams: Promise.resolve({ r: encodeShareCode(ANSWERS) }) }));
    expect(html).toContain("Résultats partagés");
    expect(html).toContain("Refaire le questionnaire");
    expect(html).toContain('id="tm-titre"');
    expect(html).toContain(fr(Math.round(summaryContext.estimatedLoadBtu)));
    expect(html).toContain(fr(summaryContext.candidatesEvaluated));
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
