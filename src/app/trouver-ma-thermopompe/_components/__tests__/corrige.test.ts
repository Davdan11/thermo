import { describe, expect, it, vi } from "vitest";
import { createElement, type ReactNode } from "react";
import { renderToString } from "react-dom/server";
import { readFileSync } from "node:fs";
import path from "node:path";

/* ThermoMatch — « Le corrigé » (écran des résultats et lien partagé).
   - Aucune neige : la neige est réservée à la page d'accueil.
   - Les nombres du calcul posé dans la marge viennent de summaryContext ; une valeur absente
     donne « N/D » ou une ligne omise, jamais un zéro inventé.
   - Le lien partagé est une page normale du site : l'en-tête du site, plus l'en-tête fait à la main.
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
import { ND, buildLoadCalc, fr, funnelParts, type SummaryContext } from "../results-model";
import ResultatsPartagesPage from "@/app/trouver-ma-thermopompe/resultats/page";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { heroTone } from "@/components/hero/routes";
import { encodeShareCode } from "@/lib/thermomatch/share-code";
import { recommendFromAnswers } from "@/lib/thermomatch/recommend";
import type { QuestionnaireAnswers } from "@/lib/thermomatch/answers";

/** Un summaryContext connu (valeurs choisies pour se reconnaître dans le HTML). */
const CTX: SummaryContext = {
  estimatedLoadBtu: 38500,
  targetBtu: 38500,
  floors: 2,
  requestedZones: 2,
  isMultiZone: true,
  heatedAreaFt2: 1750,
  uncertaintyPct: 13,
  region: "Montréal",
  loadFactors: { baseBtuPerFt2: 25, homeType: 1, floors: 0.95, construction: 1.1, insulation: 1, windows: 1.05, basement: 1.12 },
  candidatesEvaluated: 1284,
  candidatesRetained: 212,
};

const RESULT = {
  badge: "Meilleur choix",
  score: 91,
  product: { id: "m1", brand: "Marque Exemple", series: "Série Test", outdoorModel: "EXT-24", systemType: "ductless", nominalBtu: 24000, heatingCapacity5FBtuH: { min: 21000, max: 21000 }, coldClimate: true, h5Certified: true, minOperatingTempC: -30, imageUrl: null, alsoSoldAs: [] },
  selectedPairing: { hspf2: { min: 10.5, max: 10.5 }, seer2: { min: 22, max: 22 } },
  subsidyEstimate: 1350,
  fitRatio: 1.05,
  priceRange: null,
  reasons: ["Couvre la charge estimée."],
  warnings: [],
};

const render = (ctx: Partial<SummaryContext> | null) =>
  renderToString(createElement(ThermoMatchResults, { results: [RESULT], onSelectResult: () => {}, onRetry: () => {}, summaryContext: ctx as SummaryContext | null }));

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

describe("ThermoMatch, le corrigé : pas de neige", () => {
  it("aucun fichier des résultats n'importe Snowfall, et le rendu n'a pas de canevas de neige", () => {
    const dir = path.resolve(__dirname, "..");
    const files = ["ThermoMatchResults.tsx", "Corrige.tsx", "results-model.ts", "SavingsBand.tsx", "ExistingUnitCompare.tsx", "EmailMyChoices.tsx", "results.css", "../resultats/page.tsx", "../resultats/SharedResults.tsx", "../resultats/LienIncomplet.tsx"];
    for (const f of files) expect(readFileSync(path.join(dir, f), "utf8"), f).not.toMatch(/Snowfall/);
    expect(render(CTX)).not.toContain("<canvas");
  });
});

describe("ThermoMatch, le corrigé : le calcul posé dans la marge", () => {
  it("chaque ligne reprend summaryContext : superficie, facteurs de charge, étages, charge, incertitude, calibre, zones", () => {
    const calc = buildLoadCalc(CTX)!;
    expect(calc.steps.map((l) => l.key)).toEqual(["area", "baseBtuPerFt2", "homeType", "floors", "construction", "insulation", "windows", "basement"]);
    expect(calc.steps.map((l) => l.value)).toEqual([fr(1750), fr(25), fr(1, 2), fr(0.95, 2), fr(1.1, 2), fr(1, 2), fr(1.05, 2), fr(1.12, 2)]);
    expect(calc.steps.map((l) => l.op)).toEqual(["", "×", "×", "×", "×", "×", "×", "×"]);
    expect(calc.steps.find((l) => l.key === "floors")?.label).toBe("étages (2)");
    expect(calc.total).toMatchObject({ op: "≈", value: fr(38500), unit: "BTU/h" });
    expect(calc.notes.map((l) => [l.key, l.value])).toEqual([
      ["uncertainty", fr(13)],
      ["target", fr(38500)],
      ["zones", fr(2)],
    ]);
    expect(funnelParts(CTX, 3).map((p) => p.value)).toEqual([fr(1284), fr(212), fr(3)]);
  });

  it("le rendu affiche ces nombres-là", () => {
    const html = render(CTX);
    for (const v of [fr(1750), fr(0.95, 2), fr(1.12, 2), fr(38500), fr(1284), fr(212)]) expect(html).toContain(v);
    expect(html).toContain("Le calcul de votre maison");
    expect(html).toContain("étages (2)");
    expect(html).toContain("Montréal");
  });

  it("valeur absente : « N/D » ou ligne omise, jamais un zéro inventé", () => {
    expect(buildLoadCalc(null)).toBeNull();

    // Superficie et charge absentes : N/D ; incertitude, calibre et zones absents : lignes omises.
    const bare = buildLoadCalc({ floors: 1 })!;
    expect(bare.steps.map((l) => [l.key, l.value])).toEqual([
      ["area", ND],
      ["floors", "1"],
    ]);
    expect(bare.total.value).toBe(ND);
    expect(bare.notes).toEqual([]);

    // Facteur absent dans une liste fournie : N/D à sa place, pas 0 ni 1.
    const partial = buildLoadCalc({ ...CTX, loadFactors: { baseBtuPerFt2: 25, homeType: 1 } })!;
    expect(partial.steps.find((l) => l.key === "windows")?.value).toBe(ND);
    for (const l of [...partial.steps, partial.total, ...partial.notes]) expect(l.value).not.toBe("0");

    // Entonnoir : sans « machines évaluées », pas de note ; sans « bon calibre », l'étape est omise.
    expect(funnelParts({}, 3)).toEqual([]);
    expect(funnelParts({ candidatesEvaluated: 40 }, 3).map((p) => p.key)).toEqual(["evaluated", "kept"]);

    const rest: Partial<SummaryContext> = { ...CTX };
    delete rest.candidatesRetained;
    delete rest.uncertaintyPct;
    const html = render({ ...rest, heatedAreaFt2: undefined });
    expect(html).not.toContain("de bon calibre");
    expect(html).not.toContain("marge de l’estimation");
    const nd = html.indexOf(ND);
    const area = html.indexOf("superficie chauffée");
    expect(nd).toBeGreaterThan(-1);
    expect(area - nd).toBeGreaterThan(0);
    expect(area - nd).toBeLessThan(600);
  });
});

describe("ThermoMatch, le corrigé : lien partagé", () => {
  it("le lien partagé rend le corrigé dans la page du site, sans l'en-tête fait à la main", async () => {
    const { results, summaryContext } = recommendFromAnswers(ANSWERS);
    expect(results.length).toBeGreaterThan(0);
    nav.pathname = "/trouver-ma-thermopompe/resultats";
    const html = renderToString(await ResultatsPartagesPage({ searchParams: Promise.resolve({ r: encodeShareCode(ANSWERS) }) }));
    expect(html).toContain("Résultats partagés");
    expect(html).toContain("Refaire le questionnaire");
    expect(html).toContain('id="tm-titre"');
    // Le calcul vient des recommandations recalculées.
    expect(html).toContain(fr(Math.round(summaryContext.estimatedLoadBtu)));
    expect(html).toContain(fr(summaryContext.heatedAreaFt2));
    // Plus de fond sombre ni d'en-tête fait à la main (« THERMOPOMPES / À VENDRE », « Refaire le test »).
    expect(html).not.toContain("#0D1117");
    expect(html).not.toContain("Refaire le test");
    expect(html).not.toMatch(/<header/);
  });

  it("l'en-tête du site est rendu sur le lien partagé (ton clair), pas sur le questionnaire plein écran", () => {
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
    expect(chrome("/soumission")).not.toMatch(/<header/);
    expect(heroTone("/trouver-ma-thermopompe/resultats")).toBe("light");
  });

  it("lien incomplet : un mot sur le papier du carnet et le chemin vers le questionnaire", async () => {
    const html = renderToString(await ResultatsPartagesPage({ searchParams: Promise.resolve({ r: "tronqué!" }) }));
    expect(html).toContain("Ce lien de résultats");
    expect(html).toContain('href="/trouver-ma-thermopompe"');
    expect(html).not.toContain("#0D1117");
  });
});
