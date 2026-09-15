import { describe, expect, it, vi } from "vitest";
import { createElement, type ReactNode } from "react";
import { renderToString } from "react-dom/server";
import { readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";

/* Scénario de l'audit externe, sur le vrai registre : 1 500 à 2 000 pi², 3 étages, fournaise au gaz,
   type de système inconnu. Avant : trois unités de 18 000 BTU sans dire comment la chaleur serait
   distribuée, une centrale mêlée à une multizone (Trane 4TXM2318A12NU), 85 et 85 sans départage, la
   même fourchette de prix trois fois et « votre région ne change pas la machine recommandée ».
   Variante sans conduits : trois simples zones calibrées chacune pour toute la maison. */

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
  usePathname: () => "/trouver-ma-thermopompe",
  useSearchParams: () => new URLSearchParams(),
}));

import { recommendFromAnswers } from "../recommend";
import { MULTI_INDOOR_RE } from "../candidates";
import type { QuestionnaireAnswers } from "../answers";
import { ThermoMatchResults } from "@/app/trouver-ma-thermopompe/_components/ThermoMatchResults";

const AUDIT: QuestionnaireAnswers = {
  postalCode: "H2X 1Y4",
  propertyType: "maison",
  area: "1500-2000",
  floors: "3",
  constructionPeriod: "ne-sais-pas",
  insulation: "ne-sais-pas",
  windowShare: "standard",
  basement: "unheated",
  currentSystem: "fournaise-gaz",
  electricalPanel: "ne-sais-pas",
  priority: ["economies"],
  budget: "ne-sais-pas",
  financing: "non",
};

/** Texte visible du HTML : sans balises ni commentaires de React, entités usuelles décodées. */
const texte = (html: string) =>
  html
    .replace(/<!--.*?-->/g, "")
    .replace(/<[^>]+>/g, "")
    .replace(/&#x27;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&");
const money = (n: number) => `${(Math.round(n / 50) * 50).toLocaleString("fr-CA", { maximumFractionDigits: 0 })} $`;
const compter = (s: string, needle: string) => s.split(needle).length - 1;
const rendre = (rec: ReturnType<typeof recommendFromAnswers>) =>
  renderToString(createElement(ThermoMatchResults, { results: rec.results as never, summaryContext: rec.summaryContext as never, onSelectResult: () => {}, onRetry: () => {} }));

describe("Scénario de l'audit : fournaise au gaz, type de système inconnu", () => {
  const rec = recommendFromAnswers(AUDIT);
  const arch = rec.summaryContext.architecture;

  it("l'architecture d'abord : centrale ajoutée à la fournaise, à confirmer", () => {
    expect(arch).toMatchObject({ kind: "central-hybrid", pairingClass: "central", heads: 1, confidence: "a-confirmer" });
    const why = arch.why.join(" ");
    expect(why).toMatch(/fournaise au gaz/);
    expect(why).toMatch(/conduits/);
    expect(arch.checks.map((c) => c.text)).toContain("À confirmer à la visite : état et dimension des conduits, surtout aux étages.");
  });

  it("trois centrales, aucune multizone (la Trane 4TXM2318A12NU n'y est plus)", () => {
    expect(rec.results.length).toBeGreaterThan(0);
    for (const r of rec.results) {
      expect(r.product.installKind).toBe("central-hybrid");
      expect(r.product.systemType).toBe("central");
      expect(MULTI_INDOOR_RE.test(r.product.indoorModel ?? "")).toBe(false);
      expect(r.installLabel).toBe("Centrale gainable");
    }
    expect(rec.results.map((r) => r.product.outdoorModel)).not.toContain("4TXM2318A12NU");
  });

  it("l'ordre de grandeur installé est affiché une seule fois, avec son libellé", () => {
    expect(arch.price).not.toBeNull();
    expect(arch.pricePerCard).toBe(false);
    for (const r of rec.results) expect(r.priceRange).toBeNull();
    const html = rendre(rec);
    const t = texte(html);
    expect(compter(t, `${money(arch.price!.min)} – ${money(arch.price!.max)}`)).toBe(1);
    expect(compter(t, "Ordre de grandeur installé")).toBe(1);
    expect(t).toContain("Ordre de grandeur indicatif du marché québécois, pas un prix de vente");
  });

  it("égalité signalée quand les scores arrondis se confondent, avec le départage", () => {
    const html = texte(rendre(rec));
    for (let i = 0; i + 1 < rec.results.length; i++) {
      const a = rec.results[i];
      const b = rec.results[i + 1];
      if (Math.round(a.score) !== Math.round(b.score)) continue;
      expect(a.tie?.withRank).toBe(b.rank);
      expect(b.tie).not.toBeNull();
      expect(html).toContain("Ex æquo");
      expect(html).toContain(a.tie!.decidedBy);
    }
  });

  it("la relève à la température de calcul de Montréal est dite, pour la maison et pour chaque machine", () => {
    expect(arch.designTempC).toBe(-23);
    expect(arch.backupSummary).toContain("(−23 °C)");
    for (const r of rec.results) expect(r.backupNote).toMatch(/à −23 °C|−23 °C/);
  });

  it("un ancien lien avec les mêmes réponses (type « Je ne sais pas ») arrive à la même architecture", () => {
    const ancien = recommendFromAnswers({ ...AUDIT, heatPumpType: "ne-sais-pas" });
    expect(ancien.summaryContext.architecture).toMatchObject({ kind: "central-hybrid", rule: "L" });
    expect(ancien.results.map((r) => r.product.id)).toEqual(rec.results.map((r) => r.product.id));
  });
});

describe("Même maison, sans conduits", () => {
  const rec = recommendFromAnswers({ ...AUDIT, ducts: "aucun", zonesWanted: "ne-sais-pas", layout: "mixte", placements: ["mur-haut"] });
  const arch = rec.summaryContext.architecture;

  it("trois zones, une par étage", () => {
    expect(arch.heads).toBe(3);
    expect(arch.kind).toMatch(/^multi-/);
    expect(arch.zonePlan.filter((z) => z.servedBy === "tete")).toHaveLength(3);
    expect(arch.sizingLoadBtuH).toBeLessThan(rec.summaryContext.estimatedLoadBtu);
  });

  it("jamais une simple zone calibrée pour toute la maison", () => {
    expect(rec.results.length).toBeGreaterThan(0);
    for (const r of rec.results) {
      // Chaque machine est calibrée pour son étage : sa capacité à −15 °C reste loin de la charge de la maison.
      expect(r.product.heatingCapacity5FBtuH.min).toBeLessThan(0.95 * rec.summaryContext.estimatedLoadBtu);
      expect(r.installLabel).toMatch(/× 3|3 têtes/);
    }
  });
});

describe("Plus de phrase catégorique sur la région, plus de « 13 questions »", () => {
  const SRC = path.resolve(__dirname, "../../..");
  function* fichiers(dir: string): Generator<string> {
    for (const f of readdirSync(dir)) {
      const p = path.join(dir, f);
      if (statSync(p).isDirectory()) yield* fichiers(p);
      else if (/\.(tsx?|md)$/.test(f) && !p.includes("__tests__")) yield p;
    }
  }
  it("aucun fichier de src ne dit que la région « ne change pas la machine » ni ne compte « 13 questions »", () => {
    const fautifs: string[] = [];
    for (const f of fichiers(SRC)) {
      const s = readFileSync(f, "utf8");
      if (/ne change pas la machine/.test(s) || /\b13 questions\b/.test(s)) fautifs.push(path.relative(SRC, f));
    }
    expect(fautifs).toEqual([]);
  });
});
