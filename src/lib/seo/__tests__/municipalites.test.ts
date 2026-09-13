import { describe, expect, it, vi } from "vitest";

// Parcourt toutes les municipalités : lent quand la machine est chargée (suites en parallèle).
vi.setConfig({ testTimeout: 30_000 });
import curatedData from "../cities-data.json";
import { getCities } from "../cities";
import {
  assignSlugs,
  builtTo1980Pct,
  censusValue,
  chooseStation,
  eligibility,
  extremeFromMonths,
  normals1991FromRows,
  sharePct,
  slugify,
} from "../../../../scripts/villes/municipalites-lib.mjs";
import { dmsToDecimal, parse1981Csv } from "../../../../scripts/villes/normales-1981.mjs";
import {
  getDataset,
  getHub,
  getMunicipalityBySlug,
  getMunicipalityForCity,
  getPageMunicipalities,
  getPageMunicipality,
  getStation,
  groupMembers,
  prerenderMunicipalSlugs,
} from "../municipalites";
import { buildMunicipalPage, neighbourTable, pageVisibleText, placeBlock } from "../municipal-content";
import { catalogueFacts, rankingText } from "../municipal-catalogue";
import { buildHubPage } from "../mrc-content";

type Curated = Record<string, { climate: Record<string, number | string | null>; census: Record<string, number | string | null> }>;
const curated = curatedData as unknown as Curated;
const data = getDataset();
const REGULAR = new Set(["Canton", "Cantons unis", "Paroisse", "Municipalité", "Village", "Ville"]);

/* ------------------------------------------------------------------
   Script de construction : fonctions pures
   ------------------------------------------------------------------ */
describe("build-municipalites : fonctions pures", () => {
  it("slugify donne un slug ASCII en kebab-case", () => {
    expect(slugify("Belœil")).toBe("beloeil");
    expect(slugify("L'Ange-Gardien")).toBe("l-ange-gardien");
    expect(slugify("Cascapédia–Saint-Jules")).toBe("cascapedia-saint-jules");
    expect(slugify("Saint-Lin--Laurentides")).toBe("saint-lin-laurentides");
    expect(slugify("Îles-de-la-Madeleine")).toBe("iles-de-la-madeleine");
  });

  it("assignSlugs : homonymes départagés par la MRC, puis par la désignation ; slugs historiques gardés", () => {
    const s = assignSlugs(
      [
        { code: "1", name: "Saint-Augustin", mrcName: "Maria-Chapdelaine", designation: "Paroisse" },
        { code: "2", name: "Saint-Augustin", mrcName: "Le Golfe-du-Saint-Laurent", designation: "Municipalité" },
        { code: "3", name: "Bedford", mrcName: "Brome-Missisquoi", designation: "Ville" },
        { code: "4", name: "Bedford", mrcName: "Brome-Missisquoi", designation: "Canton" },
        { code: "5", name: "Saint-Augustin-de-Desmaures", mrcName: null, designation: "Ville" },
        { code: "6", name: "Mrc", mrcName: "Test", designation: "Ville" },
      ],
      new Map([["5", "saint-augustin"]]),
      new Set(["saint-augustin", "mrc"]),
    );
    expect(s.get("1")).toBe("saint-augustin-maria-chapdelaine");
    expect(s.get("2")).toBe("saint-augustin-le-golfe-du-saint-laurent");
    expect(s.get("3")).toBe("bedford-ville");
    expect(s.get("4")).toBe("bedford-canton");
    expect(s.get("5")).toBe("saint-augustin");
    expect(s.get("6")).toBe("mrc-test");
    expect(new Set(s.values()).size).toBe(6);
  });

  it("censusValue : les symboles de suppression donnent null", () => {
    for (const sym of ["x", "F", "..", "..."]) expect(censusValue("123", sym)).toBeNull();
    expect(censusValue("", "")).toBeNull();
    expect(censusValue("4047", "")).toBe(4047);
    expect(censusValue("12", "E")).toBe(12);
  });

  it("part bâtie en 1980 ou avant : (1960 ou avant + 1961 à 1980) ÷ total, arrondie à 0,1", () => {
    expect(builtTo1980Pct(5580, 1280, 1760)).toBe(54.5);
    expect(builtTo1980Pct(null, 1280, 1760)).toBeNull();
    expect(builtTo1980Pct(5580, null, 1760)).toBeNull();
    expect(builtTo1980Pct(0, 0, 0)).toBeNull();
    expect(sharePct(4735, 5610)).toBe(84.4);
    expect(sharePct(null, 5610)).toBeNull();
  });

  it("règle d'admissibilité : désignation, recensement, station", () => {
    const ok = { designationCode: "05", lat: 46.6, lon: -70.9, population: 4047, dwellings: 1697, stationId: "7020567" };
    expect(eligibility(ok)).toEqual({ eligible: true, reason: null });
    expect(eligibility({ ...ok, designationCode: "25" }).reason).toBe("designation");
    expect(eligibility({ ...ok, designationCode: "20" }).reason).toBe("designation");
    expect(eligibility({ ...ok, lat: null }).reason).toBe("coordonnees");
    expect(eligibility({ ...ok, population: null }).reason).toBe("recensement");
    expect(eligibility({ ...ok, dwellings: 0 }).reason).toBe("recensement");
    expect(eligibility({ ...ok, stationId: null }).reason).toBe("station");
  });

  it("station : 1991-2020 à 50 km ou moins d'abord, repli 1981-2010, sinon aucune", () => {
    const s91 = [{ id: "A", key: "A", lat: 46.0, lon: -71.0 }];
    const s81 = [{ id: "B", key: "B@1981-2010", lat: 47.0, lon: -71.0 }];
    expect(chooseStation(46.1, -71.0, s91, s81)).toMatchObject({ fallback: false, station: { id: "A" } });
    // À 1 km de B, à 100 km de A : la station 1991-2020 est hors rayon, repli sur 1981-2010.
    const fb = chooseStation(46.99, -71.0, s91, s81);
    expect(fb).toMatchObject({ fallback: true, station: { id: "B" } });
    expect(chooseStation(60, -71, s91, s81).station).toBeNull();
    // Une station 1991-2020 à 40 km passe avant une 1981-2010 à 1 km.
    expect(chooseStation(46.36, -71.0, s91, [{ id: "C", key: "C@1981-2010", lat: 46.37, lon: -71.0 }]).station.id).toBe("A");
  });

  it("normales 1991-2020 : champs de cities-data.md ; total annuel manquant = null", () => {
    const row = (period: string, el: string, jan: string, year: string) => ({ PERIOD_OF_RECORD: period, NORMALS_ELEMENT: el, Jan: jan, Feb: "", Mar: "", Apr: "", May: "", Jun: "", Jul: "", Aug: "", Sep: "", Oct: "", Nov: "", Dec: "", Year: year, Code: "A" });
    const rows = [
      row("Normal", "Daily Average (°C)", "-9.2", "7.0"),
      row("Normal", "Daily Minimum (°C)", "-13.5", "2.3"),
      row("Normal", "Degree Days Below 18 °C", "848.4", "4281.2"),
      row("Normal", "Days with Minimum Temperature < -20 °C", "6.7", "12.0"),
      { ...row("Long-Term", "Extreme Minimum (°C)", "-37.8", ""), Feb: "-33.9" },
      { ...row("Long-Term", "Extreme Minimum (°C) Date (yyyy/mm/dd)", "1957/01/15", ""), Feb: "1943/02/15" },
    ];
    expect(normals1991FromRows(rows)).toMatchObject({ hdd18: 4281.2, janMeanC: -9.2, janMinC: -13.5, annualMeanC: 7, daysBelowMinus20: 12, extremeMinC: -37.8, extremeMinYear: 1957 });
    // Rimouski 1991-2020 : août manquant, pas de total annuel.
    const noYear = rows.map((r) => (r.NORMALS_ELEMENT === "Degree Days Below 18 °C" ? { ...r, Year: "" } : r));
    expect(normals1991FromRows(noYear).hdd18).toBeNull();
    expect(extremeFromMonths(null, null)).toEqual({ value: null, year: null });
  });

  it("normales 1981-2010 : lecture du CSV par station (sections, coordonnées en degrés-minutes)", () => {
    expect(dmsToDecimal(` 48°27'00.000"" N`)).toBeCloseTo(48.45, 3);
    expect(dmsToDecimal(` 68°31'00.000"" W`)).toBeCloseTo(-68.5167, 3);
    const m = (label: string, jan: string, year: string) => `"${label}","${jan}","0","0","0","0","0","0","0","0","0","0","0","${year}","A"`;
    const csv = [
      `"STATION_NAME","PROVINCE","LATITUDE","LONGITUDE","ELEVATION","CLIMATE_ID","WMO_ID","TC_ID"`,
      `"RIMOUSKI","QC"," 48°27'00.000"" N"," 68°31'00.000"" W","35.7 m","7056480","",""`,
      `"Temperature"`,
      m("Daily Average (°C)", "-11.4", "4.4"),
      m("Daily Minimum (°C)", "-15.4", "0.2"),
      `"Extreme Minimum (°C)","-33.0","-32.0","-25.5","-22.0","-7.2","0.0","3.0","0.0","-1.1","-7.8","-16.5","-30.6","",""`,
      `"Date (yyyy/dd)","1984/15","1993/07","1989/07","1994/02","1974/02","1975/08","1993/18","1960/04","1955/30","1954/28","1995/29","1970/23",""," "`,
      `"Days with Minimum Temperature"`,
      m("< -20 °C", "6.9", "13.9"),
      `"Degree Days"`,
      m("Below 18 °C", "915.4", "5074.4"),
    ].join("\n");
    // Mêmes valeurs que Rimouski dans cities-data.json (station 7056480, 1981-2010).
    expect(parse1981Csv(csv)).toMatchObject({ id: "7056480", key: "7056480@1981-2010", period: "1981-2010", hdd18: 5074.4, janMeanC: -11.4, janMinC: -15.4, extremeMinC: -33, extremeMinYear: 1984, daysBelowMinus20: 13.9 });
    expect(parse1981Csv(csv.replace(`"5074.4"`, `""`))).toBeNull();
  });
});

/* ------------------------------------------------------------------
   Jeu construit (municipalites-data.json)
   ------------------------------------------------------------------ */
describe("municipalites-data.json", () => {
  it("slugs uniques, ASCII, jamais « mrc »", () => {
    const slugs = data.municipalities.map((m) => m.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const s of slugs) expect(s).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
    expect(slugs).not.toContain("mrc");
  });

  it("chaque page respecte la règle « pas de donnée, pas de page »", () => {
    const pages = getPageMunicipalities();
    expect(pages.length).toBeGreaterThan(300);
    for (const m of pages) {
      expect(REGULAR.has(m.designation)).toBe(true);
      expect(m.census?.population2021).toBeGreaterThan(0);
      expect(m.census?.dwellings2021).toBeGreaterThan(0);
      expect(m.station!.km).toBeLessThanOrEqual(50);
      expect(getStation(m.station!.key)?.hdd18).not.toBeNull();
      expect(m.uniqueness?.verdict).toBe("ok");
      expect(m.uniqueness!.maxSpecific!).toBeLessThanOrEqual(data.meta.uniqueness!.threshold);
      expect(m.uniqueness!.maxJaccard!).toBeLessThanOrEqual(data.meta.uniqueness!.thresholdFull!);
    }
    for (const m of data.municipalities.filter((x) => !x.eligible)) expect(m.reason).not.toBeNull();
    for (const e of data.excluded) expect(REGULAR.has(e.designation)).toBe(false);
    expect(data.municipalities.length + data.excluded.length).toBe(data.meta.counts.total);
  });

  it("valeurs supprimées par Statistique Canada : null, jamais estimées", () => {
    for (const m of data.municipalities) {
      const c = m.census;
      if (!c) continue;
      if (c.periodTotal === null || c.builtTo1980 === null) expect(c.builtTo1980Pct).toBeNull();
      if (c.singleDetached === null || c.typeTotal === null) expect(c.singleDetachedPct ?? null).toBeNull();
    }
    const suppressed = data.municipalities.filter((m) => m.census && m.census.population2021 !== null && m.census.builtTo1980Pct === null);
    for (const m of suppressed) expect(m.page && !m.curated ? buildMunicipalPage(m, catalogueFacts())!.housing.rows.some((r) => r.value === "Non publiée") : true).toBe(true);
  });

  it("villes historiques : recensement identique à cities-data.json (même source, même définition)", () => {
    let compared = 0;
    for (const [slug, c] of Object.entries(curated)) {
      const m = data.municipalities.find((x) => x.curated === slug);
      if (!m) continue; // Saint-Hubert, Jonquière : arrondissements, chiffres de leur ville
      if (!m.census) {
        // Fusion postérieure au recensement 2021 : pas de profil pour le territoire actuel (Amos, code 88057).
        expect(m.code).toBe("88057");
        continue;
      }
      expect(m.census.population2021).toBe(c.census.population2021);
      expect(m.census.dwellings2021).toBe(c.census.dwellings2021);
      expect(m.census.builtTo1980Pct).toBeCloseTo(c.census.builtBefore1981Pct as number, 1);
      compared++;
    }
    expect(compared).toBeGreaterThanOrEqual(50);
  });

  it("villes historiques : les normales lues correspondent à celles de cities-data.json", () => {
    let compared = 0;
    for (const [slug, c] of Object.entries(curated)) {
      const m = data.municipalities.find((x) => x.curated === slug);
      if (!m?.station) continue;
      if (m.station.source !== "cities-data") {
        // Station vérifiée absente des fichiers de normales disponibles (ex. Arthabaska 1981-2010 pour
        // Victoriaville) : la règle en choisit une autre, la page de la ville garde la sienne.
        expect(m.station.km, slug).toBeLessThanOrEqual(50);
        continue;
      }
      compared++;
      const s = getStation(m.station.key)!;
      expect(s.id).toBe(c.climate.stationId);
      expect(s.period).toBe(c.climate.normalsPeriod);
      for (const k of ["hdd18", "janMeanC", "janMinC", "extremeMinC", "daysBelowMinus20"] as const) {
        expect(s[k], `${slug} ${k}`).toBe(c.climate[k]);
      }
    }
    expect(compared).toBeGreaterThanOrEqual(40);
  });

  it("villes historiques : quand la règle choisit une autre station, l'écart s'explique", () => {
    // Explications admises : (1) la ville vérifiée utilise des normales 1981-2010 alors que la règle
    // préfère une station 1991-2020 à 50 km ou moins ; (2) la station vérifiée est au-delà de 50 km
    // (Matane, La Sarre) ; (3) la règle trouve une station complète plus proche.
    const diffs: string[] = [];
    for (const m of data.municipalities.filter((x) => x.curated && x.station && x.ruleStation !== undefined)) {
      const rule = m.ruleStation;
      if (rule && rule.key === m.station!.key) continue;
      const reason = m.station!.fallback && rule && !rule.key.includes("@") ? "1991-2020 préférée" : m.station!.km > 50 ? "au-delà de 50 km" : rule && rule.km <= m.station!.km ? "station complète plus proche" : null;
      expect(reason, m.name).not.toBeNull();
      diffs.push(`${m.name}: ${reason}`);
    }
    expect(diffs.length).toBeGreaterThan(0);
  });

  it("getCities() reste la liste des villes historiques", () => {
    expect(getCities().length).toBe(Object.keys(curated).length);
  });
});

/* ------------------------------------------------------------------
   Données de page
   ------------------------------------------------------------------ */
describe("pages municipalité et MRC", () => {
  const facts = catalogueFacts();
  const pages = getPageMunicipalities();

  it("petite municipalité admissible : ses propres chiffres, sources et attribution", () => {
    const tiny = [...pages].sort((a, b) => a.census!.population2021! - b.census!.population2021!)[0];
    const p = buildMunicipalPage(tiny, facts)!;
    expect(p).not.toBeNull();
    const text = pageVisibleText(p, rankingText(p.ranking.slug));
    expect(text).toContain(tiny.name);
    expect(text).toContain(p.station.name);
    expect(p.hero.stats[0].value.replace(/\s/g, "")).toBe(String(tiny.census!.population2021));
    expect(p.sources.map((s) => s.label).join(" ")).toMatch(/MAMH.*CC-BY 4\.0/);
    expect(p.sources.map((s) => s.label).join(" ")).toMatch(/Commission de toponymie.*CC-BY 4\.0/);
    expect(p.sources.some((s) => s.url === tiny.census!.url)).toBe(true);
    expect(p.sources.some((s) => s.url === p.station.url)).toBe(true);
    expect(p.faq[0].answer).toContain(p.station.name);
    expect(text).not.toMatch(/undefined|NaN|null/);
  });

  it("toutes les pages : titre ≤ 51 caractères, description 110-158, canonique propre", () => {
    for (const m of pages) {
      const p = buildMunicipalPage(m, facts)!;
      // fitTitle garde le candidat le plus court quand aucun ne tient (noms très longs, comme pour les villes historiques).
      if ([...p.title].length > 51) expect(p.title, m.name).toMatch(/^Thermopompe à /);
      else expect([...p.title].length, m.name).toBeLessThanOrEqual(51);
      expect(p.description.length, m.name).toBeGreaterThanOrEqual(110);
      expect(p.description.length, m.name).toBeLessThanOrEqual(158);
      expect(p.path).toBe(`/thermopompe/${m.slug}`);
      expect(p.title).toMatch(/thermopompe/i);
    }
  });

  it("grande municipalité : page propre, voisines, MRC ; grande ville historique reliée à ses voisines", () => {
    const big = [...pages].sort((a, b) => b.census!.population2021! - a.census!.population2021!)[0];
    const p = buildMunicipalPage(big, facts)!;
    expect(p.neighbours.rows.length).toBeGreaterThan(1);
    expect(p.neighbours.rows[0].self).toBe(true);
    expect(prerenderMunicipalSlugs()).toContain(big.slug);
    const mtl = getMunicipalityForCity("montreal")!;
    expect(mtl.curated).toBe("montreal");
    expect(neighbourTable(mtl).length).toBeGreaterThan(1);
    expect(placeBlock(mtl)?.href).toBe("/thermopompe/mrc/agglomeration-de-montreal");
    expect(getMunicipalityForCity("saint-hubert")?.name).toBe("Longueuil");
  });

  it("page MRC : liste réelle, agrégats exacts, municipalités sans page nommées", () => {
    const hub = getHub("bellechasse")!;
    expect(hub).not.toBeNull();
    const p = buildHubPage("bellechasse")!;
    const members = groupMembers(hub);
    expect(p.members.length).toBe(members.length);
    const pop = members.reduce((a, m) => a + (m.census?.population2021 ?? 0), 0);
    expect(p.hero.stats[1].value.replace(/\s/g, "")).toBe(String(pop));
    for (const r of p.members) {
      const m = members.find((x) => x.code === r.key)!;
      expect(r.href === null).toBe(!m.page);
      if (!m.page) expect(r.tag).toBeTruthy();
    }
    expect(p.description.length).toBeGreaterThanOrEqual(110);
    expect(p.description.length).toBeLessThanOrEqual(158);
    expect(buildHubPage("mrc-inexistante")).toBeNull();
  });

  it("404 : slug exclu, sans page ou inconnu", () => {
    const noPage = data.municipalities.find((m) => !m.page && !m.curated)!;
    expect(noPage).toBeTruthy();
    expect(getPageMunicipality(noPage.slug)).toBeNull();
    expect(getPageMunicipality("slug-qui-n-existe-pas")).toBeNull();
    const tno = data.excluded.find((e) => e.designation.startsWith("Territoire non organisé"))!;
    expect(getMunicipalityBySlug(slugify(tno.name))?.code === tno.code).toBe(false);
    // Une ville historique passe par son propre gabarit, pas par celui des municipalités.
    expect(getPageMunicipality("montreal")).toBeNull();
    expect(prerenderMunicipalSlugs()).not.toContain(noPage.slug);
  });
});
