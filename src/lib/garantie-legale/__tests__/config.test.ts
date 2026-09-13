import { readFileSync } from "node:fs";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  ATTR_EN_ATTENTE,
  ATTR_EN_VIGUEUR,
  CATEGORIES_GRILLE_PRIX,
  categorieDe,
  dateEnVigueur,
  estEnVigueur,
  estVise,
  lireConfig,
  lireInstant,
  scriptGarantieLegale,
  texteMention,
} from "../config";

/* Garantie légale de bon fonctionnement : date d'entrée en vigueur (heure de Montréal, changements d'heure compris),
   surcharges par variables d'environnement, produits visés, script d'activation du layout. */

const ENV = { ...process.env };
afterEach(() => {
  process.env = { ...ENV };
});

const iso = (t: number | null) => (t == null ? null : new Date(t).toISOString());

describe("date d'entrée en vigueur, heure de Montréal", () => {
  it("par défaut : le 5 octobre 2026 à 00 h à Montréal (heure avancée), soit 04 h UTC, et 6 ans", () => {
    const c = lireConfig({});
    expect(iso(c.debut)).toBe("2026-10-05T04:00:00.000Z");
    expect(c.ans).toBe(6);
    expect(dateEnVigueur(c)).toBe("5 octobre 2026");
    expect(texteMention(c)).toBe("Garantie légale de bon fonctionnement : 6 ans");
  });

  it("rien avant la date, mention dès la date, à la milliseconde près", () => {
    const c = lireConfig({});
    // 4 octobre, 23 h 59 min 59,999 s à Montréal
    expect(estEnVigueur(c, Date.parse("2026-10-05T03:59:59.999Z"))).toBe(false);
    // Déjà le 5 octobre en UTC, encore le 4 à Montréal (22 h)
    expect(estEnVigueur(c, Date.parse("2026-10-05T02:00:00Z"))).toBe(false);
    // 5 octobre, 00 h à Montréal
    expect(estEnVigueur(c, Date.parse("2026-10-05T04:00:00.000Z"))).toBe(true);
    expect(estEnVigueur(c, new Date("2027-06-01T12:00:00Z"))).toBe(true);
    expect(estEnVigueur(c, Number.NaN)).toBe(false);
  });

  it("heure normale de l'Est : minuit à Montréal = 05 h UTC", () => {
    expect(iso(lireInstant("2027-01-15"))).toBe("2027-01-15T05:00:00.000Z");
    const c = lireConfig({ GARANTIE_LEGALE_DEBUT: "2026-12-01" });
    expect(estEnVigueur(c, Date.parse("2026-12-01T04:59:59.999Z"))).toBe(false);
    expect(estEnVigueur(c, Date.parse("2026-12-01T05:00:00.000Z"))).toBe(true);
  });

  it("retour à l'heure normale (1er novembre 2026) : 00 h = 04 h UTC, 1 h 30 ambiguë = première occurrence, 3 h = 08 h UTC", () => {
    expect(iso(lireInstant("2026-11-01"))).toBe("2026-11-01T04:00:00.000Z");
    expect(iso(lireInstant("2026-11-01T01:30"))).toBe("2026-11-01T05:30:00.000Z");
    expect(iso(lireInstant("2026-11-01T03:00"))).toBe("2026-11-01T08:00:00.000Z");
  });

  it("passage à l'heure avancée (14 mars 2027) : 00 h = 05 h UTC, 2 h 30 inexistante = 3 h 30 HAE, 4 h = 08 h UTC", () => {
    expect(iso(lireInstant("2027-03-14"))).toBe("2027-03-14T05:00:00.000Z");
    expect(iso(lireInstant("2027-03-14T02:30"))).toBe("2027-03-14T07:30:00.000Z");
    expect(iso(lireInstant("2027-03-14T04:00"))).toBe("2027-03-14T08:00:00.000Z");
  });
});

describe("surcharges par variables d'environnement", () => {
  it("GARANTIE_LEGALE_DEBUT (heure de Montréal) et GARANTIE_LEGALE_ANS", () => {
    const c = lireConfig({ GARANTIE_LEGALE_DEBUT: "2026-09-01T08:30", GARANTIE_LEGALE_ANS: "7" });
    expect(iso(c.debut)).toBe("2026-09-01T12:30:00.000Z");
    expect(c.ans).toBe(7);
    expect(texteMention(c)).toBe("Garantie légale de bon fonctionnement : 7 ans");
  });

  it("instant ISO complet avec fuseau", () => {
    expect(iso(lireConfig({ GARANTIE_LEGALE_DEBUT: "2026-10-05T00:00:00-04:00" }).debut)).toBe("2026-10-05T04:00:00.000Z");
    expect(iso(lireConfig({ GARANTIE_LEGALE_DEBUT: "2026-10-06T10:00:00Z" }).debut)).toBe("2026-10-06T10:00:00.000Z");
  });

  it("valeur invalide ignorée : le défaut reste", () => {
    for (const v of ["", "   ", "demain", "2026-02-30", "2026-10-05T25:00", "05/10/2026"]) {
      expect(iso(lireConfig({ GARANTIE_LEGALE_DEBUT: v }).debut)).toBe("2026-10-05T04:00:00.000Z");
    }
    for (const v of ["", "0", "-1", "6.5", "six", "99"]) {
      expect(lireConfig({ GARANTIE_LEGALE_ANS: v }).ans).toBe(6);
    }
  });

  it("lues dans process.env par défaut", () => {
    process.env.GARANTIE_LEGALE_DEBUT = "2026-09-01";
    process.env.GARANTIE_LEGALE_ANS = "5";
    const c = lireConfig();
    expect(iso(c.debut)).toBe("2026-09-01T04:00:00.000Z");
    expect(c.ans).toBe(5);
    expect(estEnVigueur(c, Date.parse("2026-09-13T12:00:00Z"))).toBe(true);
  });
});

describe("seulement les produits visés", () => {
  const c = lireConfig({});

  it("type de thermopompe : catalogue, ThermoMatch et zones", () => {
    expect(categorieDe("wall-single")).toBe("murale");
    expect(categorieDe("wall-single", 3)).toBe("multizone");
    expect(categorieDe("multi-zone")).toBe("multizone");
    expect(categorieDe("central-ducted")).toBe("centrale");
    expect(categorieDe("hybrid")).toBe("centrale");
    expect(categorieDe("central")).toBe("centrale");
    expect(categorieDe("ductless")).toBe("murale");
    expect(categorieDe("ductless", 2)).toBe("multizone");
    expect(categorieDe("floor-console")).toBe("console");
    expect(categorieDe("cassette")).toBe("cassette");
    expect(categorieDe("ceiling")).toBe("plafonnier");
    expect(categorieDe("chauffe-eau")).toBeNull();
    expect(categorieDe(undefined)).toBeNull();
  });

  it("par défaut, toute thermopompe du catalogue est visée ; un autre produit ne l'est pas", () => {
    for (const t of ["wall-single", "multi-zone", "central-ducted", "floor-console", "cassette", "ceiling", "hybrid", "other"]) {
      expect(estVise({ systemType: t }, c)).toBe(true);
    }
    expect(estVise({ systemType: "chauffe-eau" }, c)).toBe(false);
    expect(estVise({ systemType: null }, c)).toBe(false);
    expect(estVise(CATEGORIES_GRILLE_PRIX, c)).toBe(true);
  });

  it("types visés réglables", () => {
    const centrales = lireConfig({}, ["centrale"]);
    expect(estVise({ systemType: "central-ducted" }, centrales)).toBe(true);
    expect(estVise({ systemType: "wall-single" }, centrales)).toBe(false);
    expect(estVise("murale", centrales)).toBe(false);
    expect(estVise(["murale", "multizone"], centrales)).toBe(false);
    expect(estVise(["murale", "centrale"], centrales)).toBe(true);
  });
});

describe("activation sans redéploiement : script en ligne du layout et règle CSS", () => {
  function executer(script: string, maintenant: number) {
    const attrs: Record<string, string> = {};
    const minuteries: Array<{ fn: () => void; ms: number }> = [];
    const document = { documentElement: { setAttribute: (k: string, v: string) => void (attrs[k] = v) } };
    const horloge = { now: () => maintenant };
    const setTimeout = (fn: () => void, ms: number) => void minuteries.push({ fn, ms });
    new Function("document", "Date", "setTimeout", script)(document, horloge, setTimeout);
    return { attrs, minuteries };
  }
  const c = lireConfig({});

  it("à partir de la date : <html> marqué avant le premier affichage", () => {
    const { attrs, minuteries } = executer(scriptGarantieLegale(c), c.debut);
    expect(attrs[ATTR_EN_VIGUEUR]).toBe("");
    expect(minuteries).toHaveLength(0);
  });

  it("avant la date : rien, puis marqué à la date si l'onglet reste ouvert", () => {
    const heure = 3_600_000;
    const { attrs, minuteries } = executer(scriptGarantieLegale(c), c.debut - heure);
    expect(attrs).toEqual({});
    expect(minuteries).toHaveLength(1);
    expect(minuteries[0].ms).toBe(heure);
    minuteries[0].fn();
    expect(attrs[ATTR_EN_VIGUEUR]).toBe("");
  });

  it("à plus de 24 jours : aucune minuterie (limite de setTimeout), rien de marqué", () => {
    const { attrs, minuteries } = executer(scriptGarantieLegale(c), c.debut - 30 * 86_400_000);
    expect(attrs).toEqual({});
    expect(minuteries).toHaveLength(0);
  });

  it("globals.css masque une mention « en attente » tant que <html> n'est pas marqué ; le layout exécute le script", () => {
    const racine = path.resolve(__dirname, "../../../..");
    const css = readFileSync(path.join(racine, "src/app/globals.css"), "utf8");
    expect(css).toMatch(new RegExp(`html:not\\(\\[${ATTR_EN_VIGUEUR}\\]\\) \\[${ATTR_EN_ATTENTE}\\] \\{\\s*display: none !important;`));
    const layout = readFileSync(path.join(racine, "src/app/layout.tsx"), "utf8");
    expect(layout).toContain("scriptGarantieLegale()");
    expect(layout).toMatch(/<html[^>]*suppressHydrationWarning/);
  });
});
