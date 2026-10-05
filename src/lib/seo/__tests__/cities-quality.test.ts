import { describe, expect, it, vi } from "vitest";

// Construit et compare toutes les pages villes : lent quand la machine est chargée (suites en parallèle).
vi.setConfig({ testTimeout: 180_000 });
import sitemap from "@/app/sitemap";
import { getCities, getCity } from "../cities";
import { buildCityPage } from "../cities-content";
import {
  MAX_FULL_CONTAINMENT,
  MAX_OWN_CONTAINMENT,
  MAX_STATION_KM,
  MIN_OWN_SHINGLES,
  SHINGLE,
  TEMPLATE_SHARE,
  assessCityPages,
  cityPageInputs,
  localValueCriteria,
  summarizeCityAssessment,
  type CityPageInput,
} from "../cities-quality";
import { aNom, deNom, nameRepetitions, nameWithRegion, regionRepeatsName } from "../cities-text";
import { shingleSet } from "../municipal-content";
import { getPageMunicipalities } from "../municipalites";

/* ------------------------------------------------------------------
   Rédaction
   ------------------------------------------------------------------ */
describe("rédaction des pages villes", () => {
  it("la région n'est nommée que si elle apporte quelque chose", () => {
    expect(regionRepeatsName("Montréal", "Montréal")).toBe(true);
    expect(regionRepeatsName("Laval", "Laval")).toBe(true);
    expect(regionRepeatsName("Saguenay (Chicoutimi)", "Saguenay–Lac-Saint-Jean")).toBe(true);
    expect(regionRepeatsName("Gaspé", "Gaspésie–Îles-de-la-Madeleine")).toBe(false);
    expect(nameWithRegion("Montréal", "Montréal")).toBe("Montréal");
    expect(nameWithRegion("Québec", "Capitale-Nationale")).toBe("Québec (Capitale-Nationale)");
    expect(nameWithRegion("Saguenay (Chicoutimi)", "Saguenay–Lac-Saint-Jean")).toBe("Saguenay (Chicoutimi)");
  });

  it("élision et contraction devant un nom", () => {
    expect(deNom("Alma")).toBe("d'Alma");
    expect(deNom("Québec")).toBe("de Québec");
    expect(deNom("Les Cèdres")).toBe("des Cèdres");
    expect(deNom("Le Bic")).toBe("du Bic");
    expect(aNom("Alma")).toBe("à Alma");
    expect(aNom("Les Éboulements", true)).toBe("Aux Éboulements");
  });

  it("repère les répétitions de nom, sans fausse alerte", () => {
    const mtl = nameRepetitions("À Montréal (Montréal), la température");
    expect(mtl).toHaveLength(1);
    expect(mtl[0]).toMatch(/Montréal \(Montréal\)$/);
    expect(nameRepetitions("À Laval (Laval)")).toHaveLength(1);
    expect(nameRepetitions("À Saguenay (Chicoutimi) (Saguenay–Lac-Saint-Jean), la température").length).toBeGreaterThan(0);
    expect(nameRepetitions("À Québec (Capitale-Nationale) : station LAUZON (ID 7024254, 12 m)")).toEqual([]);
    expect(nameRepetitions("Saint-Célestin (village) et Saint-Augustin (Maria-Chapdelaine)")).toEqual([]);
    // Nom officiel de station qui contient une parenthèse, suivi de son identifiant : pas une répétition.
    expect(nameRepetitions("station MONTREAL TRUDEAU (AIRPORT) (ID 7025250, 36 m)")).toEqual([]);
  });

  it("Montréal : ni « Montréal (Montréal) » dans l'encadré, ni dans la description", () => {
    const p = buildCityPage(getCity("montreal")!);
    expect(p.hero.answer).toMatch(/^À Montréal, la température de conception/);
    expect(nameRepetitions(`${p.title} ${p.description} ${p.hero.region} ${p.hero.answer}`)).toEqual([]);
    expect(p.hero.region).toBe("Région administrative de Montréal");
    expect(buildCityPage(getCity("quebec")!).hero.answer).toMatch(/^À Québec \(Capitale-Nationale\),/);
  });

  it("villes historiques : plus d'affirmation universelle ni de chiffre écrit à la main", () => {
    for (const c of getCities()) {
      const t = JSON.stringify(buildCityPage(c));
      expect(t, c.slug).not.toMatch(/quelques heures par hiver|pleine charge|ne tournent que|ne démarrent que|toute thermopompe|Aucune thermopompe résidentielle|quasi-totalité|Seule une machine|entre 8 000 et 14 000/);
      expect(t, c.slug).not.toMatch(/undefined|NaN|null \$/);
      // Élision : jamais « de Alma », « de Amos ».
      expect(t, c.slug).not.toMatch(/\bde [AEIOUÉÎ]/);
    }
    // L'écart de capacité à -15 °C vient du catalogue.
    expect(buildCityPage(getCity("sherbrooke")!).choice.rows[1].note).toMatch(/fournit de [\d\s]+ à [\d\s]+ BTU\/h à -15 °C selon le modèle/);
  });
});

/* ------------------------------------------------------------------
   Critères et ressemblance : cas construits
   ------------------------------------------------------------------ */
const words = (tag: string, n: number, from = 0) => Array.from({ length: n }, (_, i) => `${tag}${i + from}`).join(" ");
const TEMPLATE = words("gabarit", 80);
const OWN_WORDS = 320;

function fake(slug: string, own: string, over: Partial<CityPageInput> = {}): CityPageInput {
  return {
    slug,
    kind: "municipalite",
    name: slug,
    title: `Thermopompe à ${slug}`,
    description: `Description ${slug}`,
    text: `${TEMPLATE} ${own}`,
    station: { name: "STATION", km: 12, hdd18: 4500, janMeanC: -11 },
    designGeneric: false,
    region: "Estrie",
    territory: { name: "MRC de Test", href: "/thermopompe/mrc/test" },
    census: { population: 1000, dwellings: 450, builtTo1980Pct: 40 },
    neighbourLinks: 3,
    population: 1000,
    ...over,
  };
}

describe("contrôle de qualité : règles", () => {
  it("critères de valeur locale", () => {
    const ok = fake("ok", words("ok", OWN_WORDS));
    expect(localValueCriteria(ok, MIN_OWN_SHINGLES, 0.48).every((c) => c.ok)).toBe(true);
    const far = localValueCriteria(fake("loin", "x", { station: { name: "S", km: MAX_STATION_KM + 7, hdd18: 5000, janMeanC: -12 } }), 400, 0.48);
    expect(far.find((c) => c.key === "climat")?.ok).toBe(false);
    // Ville historique : station vérifiée sans distance mesurée (arrondissement), acceptée.
    expect(localValueCriteria(fake("arr", "x", { kind: "historique", station: { name: "S", km: null, hdd18: 5000, janMeanC: -12 } }), 400, 0.3)[0].ok).toBe(true);
    expect(localValueCriteria(fake("mun", "x", { station: { name: "S", km: null, hdd18: 5000, janMeanC: -12 } }), 400, 0.48)[0].ok).toBe(false);
    // Une ville qui est à elle seule son territoire (Laval, Gatineau) : pas de page MRC à lier, critère rempli.
    expect(localValueCriteria(fake("ville-territoire", "x", { territory: { name: "Laval", href: null } }), 400, 0.3).find((c) => c.key === "territoire")?.ok).toBe(true);
    const thin = localValueCriteria(fake("mince", "x", { territory: null, census: { population: 80, dwellings: 40, builtTo1980Pct: null }, neighbourLinks: 1 }), MIN_OWN_SHINGLES - 1, 0.2);
    expect(thin.filter((c) => !c.ok).map((c) => c.key)).toEqual(["territoire", "parc", "voisines", "texte-propre"]);
    const rep = localValueCriteria(fake("Laval", "x", { title: "Thermopompe à Laval (Laval)" }), 400, 0.48);
    expect(rep.find((c) => c.key === "nom")?.ok).toBe(false);
  });

  it("deux pages presque identiques : la moins peuplée sort de l'index, l'autre reste", () => {
    const pages = [
      fake("grande", words("a", OWN_WORDS), { population: 5000 }),
      fake("copie", `${words("a", OWN_WORDS - 8)} ${words("b", 8)}`, { population: 100 }),
      fake("sans-parc", words("d", OWN_WORDS), { census: { population: 50, dwellings: 20, builtTo1980Pct: null } }),
      ...Array.from({ length: 9 }, (_, k) => fake(`p${k}`, words(`p${k}x`, OWN_WORDS))),
    ];
    const a = assessCityPages(pages);
    expect(a.templateSize.municipalite).toBeGreaterThan(0);
    expect(a.bySlug.get("grande")!.indexable).toBe(true);
    expect(a.bySlug.get("grande")!.ownShingles).toBeGreaterThanOrEqual(MIN_OWN_SHINGLES);
    const copie = a.bySlug.get("copie")!;
    expect(copie.indexable).toBe(false);
    expect(copie.reasons.join(" ")).toMatch(/^similarite : trop proche de grande/);
    expect(a.bySlug.get("sans-parc")!.reasons.join(" ")).toMatch(/^parc/);
    for (let k = 0; k < 9; k++) expect(a.bySlug.get(`p${k}`)!.indexable).toBe(true);
    expect(a.bySlug.get("grande")!.maxOwnContainment).toBeLessThanOrEqual(MAX_OWN_CONTAINMENT);
  });

  it("entre deux pages trop proches, celle qui ne dit rien de plus sort, même si la priorité la gardait", () => {
    // « mince » est presque entièrement contenue dans « riche », qui porte en plus ses propres
    // données : c'est « mince » qui sort, bien qu'elle soit plus peuplée (priorité) que « riche ».
    const pages = [
      fake("mince", words("c", 300), { population: 90000 }),
      fake("riche", `${words("c", 300)} ${words("r", 400)}`, { population: 1000 }),
      ...Array.from({ length: 9 }, (_, k) => fake(`p${k}`, words(`p${k}x`, OWN_WORDS))),
    ];
    const a = assessCityPages(pages);
    expect(a.bySlug.get("riche")!.indexable).toBe(true);
    expect(a.bySlug.get("mince")!.indexable).toBe(false);
    expect(a.bySlug.get("mince")!.reasons.join(" ")).toMatch(/^similarite : trop proche de riche/);
    // Deux pages aussi contenues l'une dans l'autre : aucune n'est la copie, la priorité tranche.
    const jumelles = assessCityPages([
      fake("peuplee", `${words("j", 290)} ${words("u", 40)}`, { population: 90000 }),
      fake("petite", `${words("j", 290)} ${words("v", 40)}`, { population: 1000 }),
      ...Array.from({ length: 9 }, (_, k) => fake(`q${k}`, words(`q${k}x`, OWN_WORDS))),
    ]);
    expect(jumelles.bySlug.get("peuplee")!.indexable).toBe(true);
    expect(jumelles.bySlug.get("petite")!.indexable).toBe(false);
  });
});

/* ------------------------------------------------------------------
   Toutes les pages villes (données et gabarits réels)
   ------------------------------------------------------------------ */
/**
 * Villes que le propriétaire refuse de voir sortir de l'index. Toutes portent des données propres :
 * recensement de leur municipalité pour la plupart, et pour les deux arrondissements (Saint-Hubert,
 * Jonquière) leurs codes postaux, leur zone de conception, leur station et la provenance déclarée des
 * chiffres de leur ville. Si l'une redevient « noindex », ce test le dit.
 */
const PRIORITAIRES = [
  "montreal",
  "quebec",
  "laval",
  "gatineau",
  "longueuil",
  "sherbrooke",
  "levis",
  "saguenay",
  "jonquiere",
  "trois-rivieres",
  "terrebonne",
  "saint-jean-sur-richelieu",
  "brossard",
  "repentigny",
  "saint-jerome",
  "drummondville",
  "granby",
  "saint-hyacinthe",
  "blainville",
  "mirabel",
  "saint-hubert",
  "mascouche",
  "saint-eustache",
  "boucherville",
  "boisbriand",
  "victoriaville",
  "shawinigan",
  "rimouski",
];

describe("toutes les pages /thermopompe/[ville]", () => {
  const inputs = cityPageInputs();
  const a = assessCityPages(inputs);
  const indexed = a.verdicts.filter((v) => v.indexable);

  it("chaque page qui existe est évaluée une fois", () => {
    expect(inputs.length).toBe(getCities().length + getPageMunicipalities().length);
    expect(new Set(inputs.map((p) => p.slug)).size).toBe(inputs.length);
    expect(indexed.length).toBeGreaterThan(0);
    expect(indexed.length).toBeLessThan(inputs.length);
    // Les grandes villes restent indexées : elles ont leurs données vérifiées et priorité sur une voisine.
    for (const slug of ["montreal", "quebec", "gatineau", "sherbrooke", "trois-rivieres"]) {
      expect(a.bySlug.get(slug)!.indexable, slug).toBe(true);
    }
    // Depuis que chaque page porte le recensement de sa municipalité (logements, périodes de
    // construction, types, mode d'occupation, densité, rangs, écart avec la voisine d'une autre
    // station), l'immense majorité des pages se distingue : 1 008 sur 1 024 au moment d'écrire.
    // Le plancher protège le travail ; un chiffre exact casserait à chaque mise à jour des données.
    expect(indexed.length).toBeGreaterThanOrEqual(1000);
  });

  it("les villes que le propriétaire veut garder restent indexées", () => {
    const refusees = PRIORITAIRES.filter((s) => !a.bySlug.get(s)?.indexable).map((s) => `${s} : ${(a.bySlug.get(s)?.reasons ?? ["page absente"]).join(" ; ")}`);
    expect(refusees).toEqual([]);
  });

  it("une ville historique n'est écartée que faute de station de normales assez proche", () => {
    const historiques = a.verdicts.filter((v) => v.kind === "historique");
    for (const v of historiques.filter((v) => !v.indexable)) {
      expect(v.reasons.join(" "), v.slug).toMatch(new RegExp(`^climat : station .* \\(plus de ${MAX_STATION_KM} km\\)$`));
    }
    // Matane (Mont-Joli, 57 km) et La Sarre (Rouyn, 63 km) : aucune station plus proche ne publie de
    // normales complètes, et rien ne doit être écrit à leur place.
    expect(historiques.filter((v) => !v.indexable).map((v) => v.slug)).toEqual(["la-sarre", "matane"]);
  });

  it("une page indexée remplit tous les critères ; une page sortie en donne la raison", () => {
    for (const v of a.verdicts) {
      if (v.indexable) expect(v.criteria.every((c) => c.ok === true), v.slug).toBe(true);
      else expect(v.reasons.length, v.slug).toBeGreaterThan(0);
    }
  });

  it("aucun texte de page ne répète un nom, aucun titre n'est porté par deux pages", () => {
    for (const p of inputs) expect(nameRepetitions(`${p.title} ${p.description} ${p.text}`), p.slug).toEqual([]);
    const titles = inputs.map((p) => p.title.toLowerCase());
    expect(new Set(titles).size).toBe(titles.length);
    for (const p of inputs) expect(p.text, p.slug).not.toMatch(/toute thermopompe chute|quelques nuits par hiver|reste exceptionnel|undefined|NaN/);
  });

  it("aucune page indexée n'est trop semblable à une autre page indexée (recalcul indépendant, toutes les paires)", () => {
    // Recalcul direct : ensembles de séquences de 5 mots (shingleSet), gabarit par type de page, puis
    // intersections exactes par fusion de listes triées, pour chaque paire de pages indexées.
    const dict = new Map<string, number>();
    const ids = (s: Set<string>) =>
      Int32Array.from(
        [...s].map((x) => {
          let id = dict.get(x);
          if (id === undefined) dict.set(x, (id = dict.size));
          return id;
        }),
      ).sort();
    const sets = inputs.map((p) => shingleSet(p.text, SHINGLE));
    const template = new Map<string, Set<string>>();
    for (const kind of ["historique", "municipalite"]) {
      const members = sets.filter((_, i) => inputs[i].kind === kind);
      const df = new Map<string, number>();
      for (const s of members) for (const x of s) df.set(x, (df.get(x) ?? 0) + 1);
      const min = Math.max(2, Math.ceil(TEMPLATE_SHARE * members.length));
      template.set(kind, new Set([...df].filter(([, n]) => n >= min).map(([x]) => x)));
    }
    const idx = inputs.flatMap((p, i) => (a.bySlug.get(p.slug)!.indexable ? [i] : []));
    const full = new Map(idx.map((i) => [i, ids(sets[i])]));
    const own = new Map(idx.map((i) => [i, ids(new Set([...sets[i]].filter((x) => !template.get(inputs[i].kind)!.has(x))))]));
    const inter = (x: Int32Array, y: Int32Array) => {
      let i = 0;
      let j = 0;
      let n = 0;
      while (i < x.length && j < y.length) {
        if (x[i] === y[j]) (n++, i++, j++);
        else if (x[i] < y[j]) i++;
        else j++;
      }
      return n;
    };
    const tooClose: string[] = [];
    let worstOwn = 0;
    let worstFull = 0;
    for (let a1 = 0; a1 < idx.length; a1++) {
      for (let b1 = a1 + 1; b1 < idx.length; b1++) {
        const i = idx[a1];
        const j = idx[b1];
        const oi = own.get(i)!;
        const oj = own.get(j)!;
        const shared = inter(oi, oj);
        const co = Math.max(shared / oi.length, shared / oj.length);
        const fi = full.get(i)!;
        const fj = full.get(j)!;
        const f = inter(fi, fj);
        const cf = Math.max(f / fi.length, f / fj.length);
        worstOwn = Math.max(worstOwn, co);
        worstFull = Math.max(worstFull, cf);
        if (co > MAX_OWN_CONTAINMENT || cf > MAX_FULL_CONTAINMENT) tooClose.push(`${inputs[i].slug} ~ ${inputs[j].slug} (${co.toFixed(3)}, ${cf.toFixed(3)})`);
      }
    }
    expect(tooClose).toEqual([]);
    expect(worstOwn).toBeLessThanOrEqual(MAX_OWN_CONTAINMENT);
    expect(worstFull).toBeLessThanOrEqual(MAX_FULL_CONTAINMENT);
    // Même mesure que le module : sa ressemblance maximale restante concorde avec le recalcul.
    expect(Math.max(...indexed.map((v) => v.maxOwnContainment))).toBeCloseTo(worstOwn, 6);
  });

  it("le plan du site « villes-quebec » liste exactement les pages indexées (et toutes les MRC)", async () => {
    const urls = (await sitemap({ id: Promise.resolve("villes-quebec") })).map((e) => e.url);
    const listed = new Set(urls.filter((u) => !u.includes("/thermopompe/mrc/")).map((u) => u.split("/thermopompe/")[1]));
    expect(listed).toEqual(new Set(indexed.map((v) => v.slug)));
  });

  it("rapport : pages indexées et raisons de sortie", () => {
    const s = summarizeCityAssessment(a);
    expect(s.indexed + s.noindex).toBe(inputs.length);
    // Visible dans la sortie du test : le compte et les raisons, recalculés à chaque exécution.
    console.log(JSON.stringify(s));
    console.log(
      a.verdicts
        .filter((v) => !v.indexable && v.kind === "historique")
        .map((v) => `${v.name} : ${v.reasons.join(" ; ")}`)
        .join("\n"),
    );
  });
});
