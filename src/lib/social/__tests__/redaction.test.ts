/* Rédaction : gabarits sourcés, garde-fou des nombres, liens UTM, aucun prix de vente. */
import { describe, expect, it } from "vitest";
import { extractNumbers } from "@/lib/presence/numbers";
import { redigerCorps } from "../generer";
import type { RedacteurIa } from "../ia";
import { composerTexte, gabarit, permisDe, typographier, verifierTexte } from "../redaction";
import { sujetsDu } from "../sujets";
import { lienSuivi, lireUtm } from "../utm";
import { FORMATS, type Faits, type FaitsDe, type Usage } from "../types";
import { catalogueFictif } from "./fixtures";

const cat = catalogueFictif();
const tousLesSujets = (usage: Usage): Faits[] => FORMATS.flatMap((f) => sujetsDu(f, cat, usage).slice(0, 8));
const premier = <F extends Faits["format"]>(format: F, usage: Usage = "chauffage") => sujetsDu(format, cat, usage)[0] as FaitsDe<F>;

const iaFixe = (texte: string | null): RedacteurIa => ({ fournisseur: "test", rediger: async () => texte });

/** Montants en dollars d'un texte (« 1 296 $ », « 275 $ »). */
const montants = (texte: string) => [...texte.matchAll(/(\d{1,3}(?:[   ]\d{3})*|\d+)[   ]?\$/g)].map((m) => Number(m[1].replace(/\D/g, "")));

function montantsOfficiels(f: Faits): number[] {
  switch (f.format) {
    case "thermopompe-semaine":
      return [f.modele.logisVert];
    case "duel":
      return [f.a.logisVert, f.b.logisVert];
    case "subventions":
      return [f.min, f.max];
    default:
      return [];
  }
}

describe("gabarits", () => {
  for (const usage of ["chauffage", "climatisation"] as const) {
    it(`chaque gabarit passe le garde-fou (${usage}, deux tournures)`, () => {
      const sujets = tousLesSujets(usage);
      expect(sujets.length).toBeGreaterThan(20);
      for (const f of sujets) for (const v of [0, 1]) expect(verifierTexte(gabarit(f, v), f), `${f.format} ${f.sujet} v${v}`).toEqual([]);
    });
  }

  it("aucun prix de vente : les seuls montants en dollars sont les montants LogisVert officiels", () => {
    for (const usage of ["chauffage", "climatisation"] as const)
      for (const f of tousLesSujets(usage))
        for (const v of [0, 1]) {
          const t = gabarit(f, v);
          expect(t).not.toMatch(/prix|coût|à partir de|rabais|économis/i);
          for (const m of montants(t)) expect(montantsOfficiels(f), `${f.sujet} : ${m} $`).toContain(m);
        }
  });

  it("le montant LogisVert est dit versé au client", () => {
    for (const format of ["thermopompe-semaine", "duel", "subventions"] as const) expect(gabarit(premier(format), 0)).toMatch(/versés? au client/);
  });
});

describe("garde-fou", () => {
  const f = premier("thermopompe-semaine");
  const m = f.modele;
  const base = typographier(`La ${m.marque} ${m.nomCommercial} chauffe jusqu’à ${m.chauffeJusquaC} °C selon ${m.chauffeSource}. Sa subvention LogisVert officielle est de ${m.logisVert} $, versée au client par Hydro-Québec. Une machine à regarder avant l’hiver.`);

  it("accepte un texte qui ne reprend que les faits (espaces ordinaires dans les milliers comprises)", () => {
    expect(verifierTexte(base, f)).toEqual([]);
    const milliers = premier("chiffre");
    expect(verifierTexte(`Le chiffre du jour : 3 948 fiches au catalogue, chacune pour une unité extérieure publiée. Source : catalogue du site.`, milliers)).toEqual([]);
  });

  it("rejette un nombre absent des faits", () => {
    expect(verifierTexte(`${base} Elle réduit la facture de 40 %.`, f).join()).toMatch(/nombre absent des faits : 40/);
    expect(verifierTexte(base.replace(String(m.logisVert), String(m.logisVert + 1)), f).join()).toMatch(/nombre absent|montant/);
  });

  it("rejette un montant en dollars qui n'est pas LogisVert, même si le nombre existe ailleurs dans les faits", () => {
    const pbs = verifierTexte(`${base} Comptez ${m.calibreBtu} $ pour l’installation.`, f).join();
    expect(pbs).toMatch(/montant en dollars qui n'est pas un montant LogisVert officiel/);
  });

  it("rejette les mots de vente, l'identité légale, le Markdown, les liens, les mots-clics et les émojis en trop", () => {
    expect(verifierTexte(`${base} Le meilleur prix en ville!`, f).join()).toMatch(/« prix »/);
    expect(verifierTexte(`${base} Licence RBQ en règle.`, f).join()).toMatch(/identité légale/);
    expect(verifierTexte(`**${base}**`, f).join()).toMatch(/Markdown/);
    expect(verifierTexte(`${base} Voir www.exemple.com`, f).join()).toMatch(/lien/);
    expect(verifierTexte(`${base} #thermopompe`, f).join()).toMatch(/mot-clic/);
    expect(verifierTexte(`${base} ❄️🔥❄️`, f).join()).toMatch(/émojis/);
    expect(verifierTexte(`${base} ❄️`, f)).toEqual([]);
    expect(verifierTexte(`${base} Sur Thermopompes À Vendre.ca, tout est sourcé.`, f)).toEqual([]);
  });

  it("rejette un texte qui ne nomme pas son sujet", () => {
    expect(verifierTexte("Une thermopompe à regarder de près avant l’hiver, avec sa subvention LogisVert versée au client par Hydro-Québec.", f).join()).toMatch(/sujet/);
  });

  it("les nombres permis viennent des faits, y compris ceux écrits dans les libellés (−15 °C, 5 °F)", () => {
    const p = permisDe(f);
    for (const n of [m.calibreBtu, m.logisVert, m.chauffeJusquaC!, -15, 5]) expect(p.nombres.has(n.toFixed(2))).toBe(true);
    expect(p.nombres.has((40).toFixed(2))).toBe(false);
  });
});

describe("IA sous garde-fou", () => {
  const f = premier("grand-froid");
  const bon = `Grand froid à ${f.ville.nom} : on y dimensionne le chauffage pour ${f.ville.conceptionC} °C. Parmi les ${f.connues} machines distinctes dont la température minimale est publiée, ${f.tiennent} chauffent jusque-là ou plus bas.`;

  it("garde le texte de l'IA quand il ne reprend que les faits", async () => {
    const r = await redigerCorps(f, "publication", "fb-20260917-grand-froid-pub", iaFixe(bon));
    expect(r.redaction.mode).toBe("ia");
    expect(r.corps).toContain(f.ville.nom);
    expect(r.corps).toContain("−"); // vrai signe moins
  });

  it("retombe sur le gabarit si l'IA invente un chiffre, et garde la raison", async () => {
    const r = await redigerCorps(f, "publication", "fb-20260917-grand-froid-pub", iaFixe(`${bon} En moyenne, 12 nuits par hiver sous ce seuil.`));
    expect(r.redaction.mode).toBe("gabarit");
    expect(r.redaction.rejets?.join()).toMatch(/nombre absent des faits : 12/);
    expect(r.corps).toBe(gabarit(f, r.corps === gabarit(f, 0) ? 0 : 1));
  });

  it("sans clé ou sans réponse : gabarit", async () => {
    expect((await redigerCorps(f, "story", "fb-20260917-grand-froid-story", null)).redaction).toEqual({ mode: "gabarit" });
    expect((await redigerCorps(f, "story", "fb-20260917-grand-froid-story", iaFixe(null))).redaction.mode).toBe("gabarit");
  });

  it("chaque nombre du texte final existe dans les faits", async () => {
    const r = await redigerCorps(f, "publication", "fb-x", iaFixe(bon));
    const p = permisDe(f);
    for (const n of extractNumbers(r.corps)) expect(p.nombres.has((Math.round(n.value * 100) / 100).toFixed(2)), n.raw).toBe(true);
  });
});

describe("liens suivis", () => {
  it("utm_source=facebook, utm_medium=social, utm_campaign=<format>, utm_content=<identifiant>", () => {
    const u = new URL(lienSuivi("/produit/alpha-serie-1", "thermopompe-semaine", "fb-20260917-thermopompe-semaine-pub"));
    expect(u.origin).toBe("https://thermopompesavendre.ca");
    expect(u.pathname).toBe("/produit/alpha-serie-1");
    expect(Object.fromEntries(u.searchParams)).toEqual({ utm_source: "facebook", utm_medium: "social", utm_campaign: "thermopompe-semaine", utm_content: "fb-20260917-thermopompe-semaine-pub" });
  });

  it("garde l'ancre et les paramètres de la page", () => {
    const ancre = lienSuivi("/methode#chiffres", "chiffre", "fb-1");
    expect(ancre.endsWith("#chiffres")).toBe(true);
    const duel = new URL(lienSuivi("/comparer?models=a,b", "duel", "fb-2"));
    expect(duel.searchParams.get("models")).toBe("a,b");
    expect(duel.searchParams.get("utm_campaign")).toBe("duel");
  });

  it("chaque légende finit par le lien suivi de sa publication", () => {
    for (const f of tousLesSujets("chauffage")) {
      const id = `fb-20260917-${f.format}-pub`;
      const { texte, lien } = composerTexte(gabarit(f), f, id);
      expect(texte.endsWith(lien)).toBe(true);
      expect(lireUtm(lien)).toEqual({ format: f.format, publicationId: id });
    }
  });

  it("une visite sans les paramètres du robot n'est pas comptée", () => {
    expect(lireUtm("https://thermopompesavendre.ca/produit/x?utm_source=google")).toBeNull();
    expect(lireUtm("/produit/x?utm_source=facebook&utm_medium=cpc&utm_campaign=duel")).toBeNull();
  });
});
