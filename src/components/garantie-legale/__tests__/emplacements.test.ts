import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { createElement, type ReactElement, type ReactNode } from "react";
import { renderToString } from "react-dom/server";

/* Garantie légale de bon fonctionnement : la mention « Garantie légale de bon fonctionnement : 6 ans » est rendue près
   du prix, sur chaque type de page publique qui affiche un prix de thermopompe neuve, et sur le document /devis.
   Avant la date, elle est dans le HTML avec l'attribut « en attente » (masquée par globals.css : rien ne s'affiche) ;
   dès la date, sans l'attribut. Rendu serveur, horloge simulée (Date seulement). */

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
  usePathname: () => "/",
  useSearchParams: () => new URLSearchParams(),
  notFound: () => {
    throw new Error("notFound");
  },
}));
vi.mock("next/font/google", () => {
  const police = () => ({ className: "police", variable: "--police", style: { fontFamily: "police" } });
  return { Anton: police, Fraunces: police, IBM_Plex_Mono: police, Inter: police, Outfit: police, Geist: police, Inter_Tight: police, Instrument_Serif: police, JetBrains_Mono: police, Roboto: police };
});

import { MentionGarantieLegale } from "../MentionGarantieLegale";
import { SOURCE_OPC } from "@/lib/garantie-legale/config";
import { PriceSection } from "@/components/product/PriceSection";
import { getProductDetail, type ProductDetail } from "@/lib/data/queries/product-detail";
import { registry } from "@/lib/data/registry";
import { installedPriceRange, money } from "@/lib/prices/grille-installee";
import { brandTier } from "@/lib/thermomatch/tiers";
import PrixPage from "@/app/prix/page";
import PrixKeywordPage from "@/app/prix/[slug]/page";
import ThermopompesSlugPage from "@/app/thermopompes/[slug]/page";
import GarantieLegalePage from "@/app/garantie-legale/page";
import { getSeoPagesByPrefix } from "@/lib/seo/registry";
import { getLandingPages } from "@/lib/seo/landings";
import { ComparePageClient } from "@/components/compare/ComparePageClient";
import { getComparisonData } from "@/lib/data/queries/comparator";
import { ThermoMatchResults } from "@/app/trouver-ma-thermopompe/_components/ThermoMatchResults";
import { QuoteDocumentView, type DocumentViewProps } from "@/components/gestion/soumissions/document/QuoteDocumentView";
import { LINKS } from "@/lib/soumissions/config";
import type { MachineInfo, QuoteDocument } from "@/lib/soumissions/types";
import { fullSettings, machine, RATES, readyContent } from "@/lib/soumissions/__tests__/fixtures";

/** 4 octobre 2026, 12 h à Montréal ; 5 octobre 2026, 00 h à Montréal. */
const AVANT = new Date("2026-10-04T16:00:00Z");
const APRES = new Date("2026-10-05T04:00:00Z");

const MENTION = /Garantie légale de bon fonctionnement(?: |&nbsp;| ): 6(?: |&nbsp;| )ans/;
const compter = (html: string) => html.match(new RegExp(MENTION.source, "g"))?.length ?? 0;
const enAttente = (html: string) => html.match(/data-garantie-legale-attente=""/g)?.length ?? 0;

/** La mention suit le prix de près : moins de `limite` caractères de HTML entre le prix et la mention. */
function pres(html: string, prix: string, limite = 1500): boolean {
  const i = html.indexOf(prix);
  if (i < 0) return false;
  const j = html.slice(i).search(MENTION);
  return j >= 0 && j < limite;
}

/** Même rendu avant la date (mentions « en attente ») puis dès la date (aucune en attente) ; rend le HTML d'après. */
function avantApres(rendre: () => string, attendu: number): string {
  vi.setSystemTime(AVANT);
  const avant = rendre();
  expect(compter(avant)).toBe(attendu);
  expect(enAttente(avant)).toBe(attendu);
  vi.setSystemTime(APRES);
  const apres = rendre();
  expect(compter(apres)).toBe(attendu);
  expect(enAttente(apres)).toBe(0);
  return apres;
}

beforeEach(() => {
  vi.useFakeTimers({ toFake: ["Date"] });
});
afterEach(() => {
  vi.useRealTimers();
  delete process.env.GARANTIE_LEGALE_DEBUT;
  delete process.env.GARANTIE_LEGALE_ANS;
});

/* ------------------------------------------------------------------ */

const prixDe = (d: ProductDetail) =>
  installedPriceRange({ systemType: d.model.systemType, nominalBtu: d.model.nominalCapacityBtu, zones: d.model.zones, brandTier: brandTier(d.brand.name) });

/** Fiches publiées qui affichent une fourchette de prix installé. */
function fichesAvecPrix(n: number): ProductDetail[] {
  const out: ProductDetail[] = [];
  for (const m of registry.models) {
    if (m.status !== "published") continue;
    const d = getProductDetail(m.slug);
    if (d && prixDe(d)) out.push(d);
    if (out.length >= n) break;
  }
  return out;
}

describe("MentionGarantieLegale", () => {
  const rendre = (props: Parameters<typeof MentionGarantieLegale>[0]) => renderToString(createElement(MentionGarantieLegale, props));

  it("en attente avant la date, affichée dès la date, avec le lien vers la page explicative", () => {
    const html = avantApres(() => rendre({ cible: { systemType: "wall-single" } }), 1);
    expect(html).toContain('href="/garantie-legale"');
  });

  it("rien pour un produit qui n'est pas une thermopompe visée", () => {
    vi.setSystemTime(APRES);
    expect(rendre({ cible: { systemType: "chauffe-eau" } })).toBe("");
    expect(rendre({ cible: { systemType: null } })).toBe("");
  });

  it("contrat déjà conclu : sa date tranche, sans attente", () => {
    vi.setSystemTime(APRES);
    expect(rendre({ cible: "murale", concluLe: "2026-10-04T20:00:00Z" })).toBe("");
    vi.setSystemTime(AVANT);
    const conclu = rendre({ cible: "murale", concluLe: "2026-10-05T04:00:00Z" });
    expect(compter(conclu)).toBe(1);
    expect(enAttente(conclu)).toBe(0);
  });

  it("surcharges par variables d'environnement : durée et date lues au rendu", () => {
    vi.setSystemTime(AVANT);
    process.env.GARANTIE_LEGALE_ANS = "7";
    process.env.GARANTIE_LEGALE_DEBUT = "2026-09-01";
    const html = rendre({ cible: "centrale" });
    expect(html).toMatch(/Garantie légale de bon fonctionnement : 7 ans/);
    expect(enAttente(html)).toBe(0);
  });
});

describe("pages publiques qui affichent un prix de thermopompe neuve", () => {
  it("fiche produit /produit/[slug] : sous le premier prix de la section Prix", () => {
    const [detail] = fichesAvecPrix(1);
    const html = avantApres(() => renderToString(createElement(PriceSection, { detail, logisVertDollars: 0 })), 1);
    const r = prixDe(detail)!;
    expect(pres(html, `${money(r.min)} à ${money(r.max)}`)).toBe(true);
  });

  it("fiche produit d'un type qui n'est pas visé : le prix reste, sans mention", () => {
    const [detail] = fichesAvecPrix(1);
    const autre = { ...detail, model: { ...detail.model, systemType: "chauffe-eau" as never } };
    vi.setSystemTime(APRES);
    expect(compter(renderToString(createElement(PriceSection, { detail: autre, logisVertDollars: 0 })))).toBe(0);
  });

  it("/prix : ticket « En bref », reçu du héros et chacune des trois grilles (murale, multizone, centrale)", () => {
    const html = avantApres(() => renderToString(createElement(PrixPage)), 5);
    expect(html).toContain("Fourchettes installées, avant subvention");
  });

  it("/prix/[slug] : sous les fourchettes de l'étiquette", async () => {
    const [page] = getSeoPagesByPrefix("/prix/");
    const slug = page.urlSlug.replace("/prix/", "").replace(/\/$/, "");
    const el = (await PrixKeywordPage({ params: Promise.resolve({ slug }) })) as ReactElement;
    avantApres(() => renderToString(el), 1);
  });

  it("/thermopompes/[slug] : sous le tableau des prix installés", async () => {
    const landing = getLandingPages().find((p) => (p.contentBlocks?.prices?.length ?? 0) > 0);
    expect(landing).toBeTruthy();
    const el = (await ThermopompesSlugPage({ params: Promise.resolve({ slug: landing!.slug }) })) as ReactElement;
    avantApres(() => renderToString(el), 1);
  });

  it("comparateur /comparer : sous le prix de chaque modèle comparé", () => {
    const fiches = fichesAvecPrix(2);
    const data = getComparisonData(fiches.map((d) => d.model.slug));
    expect(data.products).toHaveLength(2);
    const html = avantApres(() => renderToString(createElement(ComparePageClient, { data, maxCompare: 5 })), 2);
    const r = prixDe(fiches[0])!;
    expect(pres(html, `${money(r.min)} – ${money(r.max)}`)).toBe(true);
  });

  it("ThermoMatch : sous l'ordre de grandeur de chaque recommandation, et rien sans prix", () => {
    const resultat = (prix: boolean) => ({
      badge: "Meilleur choix",
      score: 90,
      product: { id: "m1", brand: "Marque Exemple", series: "Série Test", outdoorModel: "EXT-12", systemType: "ductless", nominalBtu: 12000, heatingCapacity5FBtuH: { min: 11000, max: 11000 }, coldClimate: true, h5Certified: true, minOperatingTempC: -25, imageUrl: null, alsoSoldAs: [] },
      selectedPairing: { hspf2: { min: 10, max: 10 }, seer2: { min: 20, max: 20 } },
      subsidyEstimate: 0,
      fitRatio: 1.1,
      priceRange: prix ? { min: 3600, max: 4400, basis: "publie", sources: 1, tierLabel: "gamme intermédiaire", matchLabel: "12 000 BTU" } : null,
      reasons: ["Couvre la charge estimée."],
      warnings: [],
    });
    const ctx = { estimatedLoadBtu: 10000, targetBtu: 10000, floors: 1, requestedZones: 1, isMultiZone: false, heatedAreaFt2: 1000 };
    const rendre = (prix: boolean) => renderToString(createElement(ThermoMatchResults, { results: [resultat(prix)], onSelectResult: () => {}, onRetry: () => {}, summaryContext: ctx }));
    const html = avantApres(() => rendre(true), 1);
    expect(pres(html, "Ordre de grandeur installé")).toBe(true);
    expect(compter(rendre(false))).toBe(0);
  });
});

describe("document de soumission /devis", () => {
  function documentDevis(m: MachineInfo | null = machine()): QuoteDocument {
    const s = fullSettings();
    const content = readyContent(s);
    content.machine = m;
    return { number: "S-0001", version: 1, kind: "initiale", basedOn: null, issuedAt: "2026-09-12T15:00:00.000Z", validUntil: "2026-11-30", company: s.company, texts: s.texts, taxes: RATES, links: { ...LINKS }, photos: {}, content };
  }
  function props(doc: QuoteDocument, acceptance: DocumentViewProps["acceptance"] = null): DocumentViewProps {
    return {
      doc,
      mode: "client",
      status: acceptance ? "acceptee" : "envoyee",
      canRespond: !acceptance,
      asOf: "2026-10-04",
      initialSelection: ["l_opt"],
      contentHash: "x",
      photoBase: "/devis/x/photo/",
      action: "/devis/x/repondre",
      beaconUrl: null,
      acceptance,
      refusal: null,
      replacedBy: null,
      flash: null,
    };
  }
  const rendre = (p: DocumentViewProps) => renderToString(createElement(QuoteDocumentView, p));

  it("soumission à accepter : sous les lignes de prix, en attente avant la date, affichée dès la date", () => {
    const html = avantApres(() => rendre(props(documentDevis())), 1);
    expect(pres(html, "Support au sol", 4000)).toBe(true);
  });

  it("soumission acceptée avant la date : aucune mention, même consultée après ; acceptée dès la date : mention", () => {
    vi.setSystemTime(APRES);
    const avant = rendre(props(documentDevis(), { at: "2026-10-04T20:00:00.000Z", typedName: "Camille Exemple", snapshotHash: "h", totalCents: 1 }));
    expect(compter(avant)).toBe(0);
    const apres = rendre(props(documentDevis(), { at: "2026-10-05T14:00:00.000Z", typedName: "Camille Exemple", snapshotHash: "h", totalCents: 1 }));
    expect(compter(apres)).toBe(1);
    expect(enAttente(apres)).toBe(0);
  });

  it("sans machine au document : aucune mention", () => {
    vi.setSystemTime(APRES);
    expect(compter(rendre(props(documentDevis(null))))).toBe(0);
  });
});

describe("page explicative /garantie-legale", () => {
  it("durée, date d'entrée en vigueur, point de départ et lien vers l'Office", () => {
    const html = renderToString(createElement(GarantieLegalePage));
    expect(html).toContain("6 ans");
    expect(html).toContain("5 octobre 2026");
    expect(html).toContain("date de livraison");
    expect(html).toContain(`href="${SOURCE_OPC}"`);
    expect(html).toContain("Office de la protection du consommateur");
  });
});
