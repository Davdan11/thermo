/* ==================================================================
   Refonte R1 — test d'inventaire de la navigation de /gestion.
   Lit le système de fichiers : chaque page (page.tsx sous
   src/app/gestion, sauf la connexion et les pages à paramètre) doit
   être atteignable depuis la navigation du PROPRIÉTAIRE : onglet d'une
   section, sous-page d'un onglet, Réglages ou bouton « + ». Aucune
   adresse morte dans la carte ; les anciennes adresses redirigent en
   permanence ; la liste blanche navHrefsFor s'applique à l'adjoint et
   au vendeur (rien de plus, rien de moins) ; la recherche rapide
   trouve les pages. Une page ajoutée sans place dans la carte
   (nav/sections.ts) fait échouer ce test.
   ================================================================== */
import { existsSync, readdirSync, statSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import nextConfig from "../../../../../next.config";
import type { Role } from "../../equipe/types";
import { navHrefsFor, roleCan, SECTION_ROLES } from "../../equipe/roles";
import { activeOf, ALL_SECTIONS, canSee, CREATE, hrefsOf, navFor, optionalHrefs, pathOf, searchablePages, searchPages, SECTIONS, SETTINGS, SOUMISSIONS_SUB, type NavLink } from "../sections";

const ROOT = path.resolve(__dirname, "../../../../..");
const APP = path.join(ROOT, "src", "app");

function pageFiles(dir: string, acc: string[] = []): string[] {
  for (const name of readdirSync(dir)) {
    const p = path.join(dir, name);
    if (statSync(p).isDirectory()) pageFiles(p, acc);
    else if (name === "page.tsx") acc.push(p);
  }
  return acc;
}
/** « src/app/gestion/(prive)/clients/nouveau/page.tsx » → « /gestion/clients/nouveau » (groupes entre parenthèses retirés). */
const routeOf = (file: string) =>
  "/" +
  path
    .relative(APP, path.dirname(file))
    .split(path.sep)
    .filter((seg) => !/^\(.*\)$/.test(seg))
    .join("/");

const ALL_ROUTES = pageFiles(path.join(APP, "gestion")).map(routeOf);
const ROUTES = ALL_ROUTES.filter((r) => !r.startsWith("/gestion/connexion") && !r.includes("["));
const AVAILABLE = optionalHrefs().filter((h) => ROUTES.includes(h));
const OWNER = navFor(null, AVAILABLE);
const allLinks = (n: ReturnType<typeof navFor>): NavLink[] => {
  const walk = (ls: NavLink[]): NavLink[] => ls.flatMap((l) => [l, ...walk(l.sub ?? [])]);
  return [...n.sections.flatMap((s) => walk(s.tabs)), ...walk(n.settings), ...walk(n.create)];
};

/** Inventaire de la spécification (71 pages au 2026-09-13) plus les pages des chantiers C1 à C3 et de la refonte. */
const INVENTORY = [
  "/gestion",
  "/gestion/agenda",
  "/gestion/assistant",
  "/gestion/automatisations",
  "/gestion/candidatures",
  "/gestion/carte",
  "/gestion/classement",
  "/gestion/clients",
  "/gestion/clients/nouveau",
  "/gestion/conformite",
  "/gestion/creneaux",
  "/gestion/entente",
  "/gestion/entretien",
  "/gestion/equipe",
  "/gestion/equipe/releves",
  "/gestion/inventaire",
  "/gestion/jobs",
  "/gestion/jobs/nouveau",
  "/gestion/paiements",
  "/gestion/partenaires",
  "/gestion/partenaires/nouveau",
  "/gestion/partenaires/reglages",
  "/gestion/photos",
  "/gestion/pipeline",
  "/gestion/presence",
  "/gestion/presence/connecter",
  "/gestion/presence/reglages",
  "/gestion/publicite",
  "/gestion/recrutement",
  "/gestion/reglages",
  "/gestion/reglages/identite",
  "/gestion/reglages/rbq",
  "/gestion/rentabilite",
  "/gestion/sav",
  "/gestion/sav/nouveau",
  "/gestion/securite",
  "/gestion/securite/cles",
  "/gestion/securite/deux-etapes",
  "/gestion/soumissions",
  "/gestion/soumissions/nouvelle",
  "/gestion/soumissions/prix",
  "/gestion/soumissions/reglages",
  "/gestion/soumissions/visites",
  "/gestion/statistiques",
  "/gestion/tableau-de-bord",
  "/gestion/taches",
  "/gestion/telephonie",
  "/gestion/telephonie/campagnes",
  "/gestion/telephonie/reglages",
  "/gestion/textos",
  "/gestion/textos/reglages",
];
/** Pages à paramètre de l'inventaire : elles restent (ouvertes depuis leur liste). */
const PARAM_PAGES = [
  "/gestion/clients/[id]",
  "/gestion/entente/[id]",
  "/gestion/equipe/[id]",
  "/gestion/inventaire/[id]",
  "/gestion/inventaire/commandes/[id]",
  "/gestion/jobs/[id]",
  "/gestion/jobs/[id]/modifier",
  "/gestion/paiements/[id]",
  "/gestion/partenaires/[id]",
  "/gestion/presence/[id]",
  "/gestion/recrutement/accueil/[id]",
  "/gestion/sav/[id]",
  "/gestion/soumissions/[id]",
  "/gestion/soumissions/[id]/apercu",
  "/gestion/soumissions/[id]/modifier",
  "/gestion/telephonie/campagnes/[id]",
  "/gestion/textos/[id]",
];

describe("inventaire : aucune page perdue", () => {
  it("toutes les pages de l'inventaire existent encore (sauf les anciennes adresses fusionnées, redirigées)", () => {
    expect(ROUTES.length).toBeGreaterThanOrEqual(INVENTORY.length);
    for (const r of INVENTORY) expect(ROUTES, r).toContain(r);
    for (const r of PARAM_PAGES) expect(ALL_ROUTES, r).toContain(r);
    for (const r of ["/gestion/connexion", "/gestion/connexion/deux-etapes", "/gestion/connexion/activer-deux-etapes", "/gestion/connexion/invitation", "/gestion/connexion/verifier"]) expect(ALL_ROUTES, r).toContain(r);
  });

  it("chaque page de /gestion est atteignable depuis la navigation du propriétaire (section, onglet, sous-page, Réglages ou « + »)", () => {
    const reach = hrefsOf(OWNER);
    const missing = ROUTES.filter((r) => !reach.includes(r));
    expect(missing).toEqual([]);
  });

  it("chaque page a sa section : les onglets de la page s'affichent", () => {
    for (const r of ROUTES) expect(activeOf(r), r).not.toBeNull();
  });

  it("aucune adresse morte dans la carte (une page optionnelle d'un autre chantier est tolérée tant qu'elle n'existe pas)", () => {
    const optional = optionalHrefs();
    for (const h of hrefsOf(navFor(null, optional))) expect(ROUTES.includes(h) || optional.includes(h), h).toBe(true);
    expect(optional).toEqual(expect.arrayContaining(["/gestion/referencement", "/gestion/presence/articles"]));
    // Tant qu'elle n'existe pas, une page optionnelle n'apparaît nulle part.
    expect(hrefsOf(navFor(null, [])).filter((h) => optional.includes(h))).toEqual([]);
  });

  it("anciennes adresses (Installateurs fusionnés dans Partenaires) : redirections permanentes vers des pages existantes", async () => {
    const redirects = await nextConfig.redirects!();
    const expected: Array<[string, string]> = [
      ["/gestion/installateurs", "/gestion/partenaires"],
      ["/gestion/installateurs/nouveau", "/gestion/partenaires/nouveau"],
      ["/gestion/installateurs/:id", "/gestion/partenaires/:id"],
    ];
    for (const [source, dest] of expected) {
      const r = redirects.find((x) => x.source === source);
      expect(r, source).toBeDefined();
      expect(r!.permanent, source).toBe(true);
      expect(pathOf(r!.destination), source).toBe(dest);
      expect(ALL_ROUTES, dest).toContain(dest.replace(":id", "[id]"));
      // Aucune page ne reste à l'ancienne adresse (elle serait inatteignable derrière la redirection).
      expect(ALL_ROUTES, source).not.toContain(source.replace(":id", "[id]"));
    }
    // Aucune redirection ne cache une page existante.
    for (const r of redirects.filter((x) => x.source.startsWith("/gestion"))) expect(ALL_ROUTES, r.source).not.toContain(r.source.replace(/:(\w+)/g, "[$1]"));
  });
});

describe("6 sections, onglets et Réglages", () => {
  it("les 6 sections de la spécification, dans l'ordre, et Réglages à part", () => {
    expect(SECTIONS.map((s) => s.label)).toEqual(["Aujourd’hui", "Clients", "Ventes", "Partenaires", "Argent", "Marketing"]);
    expect(SETTINGS.id).toBe("reglages");
    expect(ALL_SECTIONS).toHaveLength(7);
  });

  it("onglets de la spécification", () => {
    const tabs = (id: string) => SECTIONS.find((s) => s.id === id)!.tabs.map((t) => t.href);
    expect(tabs("aujourdhui")).toEqual(["/gestion", "/gestion/tableau-de-bord", "/gestion/taches", "/gestion/textos", "/gestion/telephonie"]);
    expect(tabs("clients")).toEqual(["/gestion/clients", "/gestion/pipeline", "/gestion/clients/nouveau", "/gestion/classement", "/gestion/pertes"]);
    expect(tabs("ventes")).toEqual(["/gestion/soumissions", "/gestion/jobs", "/gestion/agenda", "/gestion/creneaux", "/gestion/sav", "/gestion/entretien"]);
    expect(tabs("partenaires")).toEqual(expect.arrayContaining(["/gestion/partenaires", "/gestion/entente", "/gestion/photos", "/gestion/recrutement", "/gestion/candidatures", "/gestion/carte", "/gestion/inventaire"]));
    expect(tabs("argent")).toEqual(["/gestion/paiements", "/gestion/equipe/releves", "/gestion/rentabilite", "/gestion/statistiques"]);
    expect(tabs("marketing")).toEqual(["/gestion/presence", "/gestion/publicite", "/gestion/telephonie/campagnes", "/gestion/referencement"]);
    // Une seule entrée pour les installateurs (fusion avec les partenaires).
    expect(allLinks(OWNER).filter((l) => l.href.startsWith("/gestion/installateurs"))).toEqual([]);
    for (const h of ["/gestion/reglages", "/gestion/reglages/etapes", "/gestion/reglages/identite", "/gestion/soumissions/reglages", "/gestion/soumissions/prix", "/gestion/automatisations", "/gestion/telephonie/reglages", "/gestion/textos/reglages", "/gestion/presence/reglages", "/gestion/presence/connecter", "/gestion/partenaires/reglages", "/gestion/equipe", "/gestion/securite", "/gestion/securite/cles", "/gestion/assistant"])
      expect(SETTINGS.tabs.map((t) => t.href), h).toContain(h);
  });

  it("section courante : le lien le plus précis gagne ; à égalité, la section de travail passe avant Réglages", () => {
    const at = (p: string) => {
      const a = activeOf(p)!;
      return `${a.section.id} > ${a.tab.href}`;
    };
    expect(at("/gestion")).toBe("aujourdhui > /gestion");
    expect(at("/gestion/tableau-de-bord")).toBe("aujourdhui > /gestion/tableau-de-bord");
    expect(at("/gestion/textos/c_0123456789ab")).toBe("aujourdhui > /gestion/textos");
    expect(at("/gestion/textos/reglages")).toBe("reglages > /gestion/textos/reglages");
    expect(at("/gestion/telephonie")).toBe("aujourdhui > /gestion/telephonie");
    expect(at("/gestion/telephonie/campagnes/k_1")).toBe("marketing > /gestion/telephonie/campagnes");
    expect(at("/gestion/clients/nouveau")).toBe("clients > /gestion/clients/nouveau");
    expect(at("/gestion/clients/c_0123456789ab")).toBe("clients > /gestion/clients");
    expect(at("/gestion/soumissions/q_1/modifier")).toBe("ventes > /gestion/soumissions");
    // Prix et réglages des soumissions : dans Réglages ET dans le sous-menu des soumissions ; à égalité, la section de travail.
    expect(at("/gestion/soumissions/prix")).toBe("ventes > /gestion/soumissions");
    expect(at("/gestion/soumissions/reglages")).toBe("ventes > /gestion/soumissions");
    expect(SETTINGS.tabs.map((t) => t.href)).toEqual(expect.arrayContaining(["/gestion/soumissions/prix", "/gestion/soumissions/reglages"]));
    expect(at("/gestion/partenaires/i_1")).toBe("partenaires > /gestion/partenaires");
    expect(at("/gestion/partenaires/nouveau")).toBe("partenaires > /gestion/partenaires");
    expect(at("/gestion/partenaires/reglages")).toBe("reglages > /gestion/partenaires/reglages");
    expect(at("/gestion/equipe/releves")).toBe("argent > /gestion/equipe/releves");
    expect(at("/gestion/equipe/u_1")).toBe("reglages > /gestion/equipe");
    expect(at("/gestion/presence/articles")).toBe("marketing > /gestion/presence");
    expect(at("/gestion/jobs/nouveau")).toBe("ventes > /gestion/jobs");
    expect(activeOf("/devis/abc")).toBeNull();
  });
});

describe("rôles : la liste blanche navHrefsFor s'applique", () => {
  const roles: Role[] = ["adjoint", "vendeur"];

  it("propriétaire : aucune entrée retirée (null)", () => {
    expect(navHrefsFor("proprietaire")).toBeNull();
    expect(hrefsOf(navFor(null, AVAILABLE))).toEqual(hrefsOf(OWNER));
    expect(OWNER.settings.length).toBe(SETTINGS.tabs.length);
  });

  for (const role of roles) {
    it(`${role} : rien hors de sa liste blanche, et chaque section de sa liste reste dans son menu`, () => {
      const allowed = navHrefsFor(role)!;
      const nav = navFor(allowed, AVAILABLE);
      for (const l of allLinks(nav)) expect(allowed, `${role} : ${l.href}`).toContain(l.perm ?? pathOf(l.href));
      expect(nav.settings).toEqual([]);
      const reach = hrefsOf(nav);
      for (const section of Object.keys(SECTION_ROLES).filter((k) => roleCan(role, k))) expect(reach, `${role} : ${section}`).toContain(section);
    });
  }

  it("vendeur : ni Paiements, Automatisations, Partenaires, Entente, Publicité, Présence, Sécurité, Réglages, Équipe, Jobs, Téléphonie", () => {
    const reach = hrefsOf(navFor(navHrefsFor("vendeur"), AVAILABLE));
    for (const h of ["/gestion/paiements", "/gestion/automatisations", "/gestion/partenaires", "/gestion/entente", "/gestion/publicite", "/gestion/presence", "/gestion/securite", "/gestion/reglages", "/gestion/equipe", "/gestion/jobs", "/gestion/jobs/nouveau", "/gestion/telephonie", "/gestion/soumissions/prix", "/gestion/soumissions/reglages"]) expect(reach, h).not.toContain(h);
    for (const h of ["/gestion", "/gestion/tableau-de-bord", "/gestion/taches", "/gestion/clients", "/gestion/clients/nouveau", "/gestion/pipeline", "/gestion/soumissions", "/gestion/soumissions/nouvelle", "/gestion/soumissions/visites", "/gestion/textos", "/gestion/agenda", "/gestion/classement"]) expect(reach, h).toContain(h);
    const adj = hrefsOf(navFor(navHrefsFor("adjoint"), AVAILABLE));
    expect(adj).toContain("/gestion/jobs");
    expect(adj).toContain("/gestion/jobs/nouveau");
    expect(adj).toContain("/gestion/statistiques");
    expect(adj).not.toContain("/gestion/paiements");
  });

  it("sous-menu des soumissions et bouton « + » : mêmes droits qu'avant la refonte", () => {
    const v = navHrefsFor("vendeur");
    expect(SOUMISSIONS_SUB.filter((i) => canSee(i, v)).map((i) => i.href)).toEqual(["/gestion/soumissions/nouvelle", "/gestion/soumissions/visites"]);
    expect(SOUMISSIONS_SUB.filter((i) => canSee(i, null)).map((i) => i.href)).toEqual(["/gestion/soumissions/nouvelle", "/gestion/soumissions/prix", "/gestion/soumissions/visites", "/gestion/soumissions/reglages"]);
    expect(navFor(v).create.map((c) => c.label)).toEqual(["Soumission", "Client", "Tâche"]);
    expect(navFor(navHrefsFor("adjoint")).create.map((c) => c.label)).toEqual(["Job", "Soumission", "Client", "Tâche"]);
    expect(navFor(null).create.map((c) => pathOf(c.href))).toEqual(CREATE.map((c) => pathOf(c.href)));
  });
});

describe("recherche rapide (« / ») : elle trouve aussi les pages", () => {
  const owner = searchablePages(OWNER);

  it("« paiements », « reglages textos », « rbq », « equipe » (sans accent), « blocages »", () => {
    expect(searchPages(owner, "paiements")[0].href).toBe("/gestion/paiements");
    expect(searchPages(owner, "reglages textos")[0].href).toBe("/gestion/textos/reglages");
    expect(searchPages(owner, "rbq").map((p) => p.href)).toContain("/gestion/reglages/rbq");
    expect(searchPages(owner, "equipe").map((p) => p.href)).toContain("/gestion/equipe");
    expect(searchPages(owner, "installateurs")[0].href).toBe("/gestion/partenaires");
    expect(searchPages(owner, "aujourd'hui")[0].href).toBe("/gestion");
    expect(searchPages(owner, "zzz introuvable")).toEqual([]);
  });

  it("chaque page atteignable est cherchable, une seule fois", () => {
    const hrefs = owner.map((p) => p.href);
    expect(new Set(hrefs).size).toBe(hrefs.length);
    for (const r of ROUTES) expect(hrefs, r).toContain(r);
  });

  it("vendeur : la recherche ne propose que ses pages", () => {
    const v = searchablePages(navFor(navHrefsFor("vendeur")));
    expect(searchPages(v, "paiements")).toEqual([]);
    expect(searchPages(v, "reglages")).toEqual([]);
    expect(searchPages(v, "pipeline")[0].href).toBe("/gestion/pipeline");
  });
});

describe("pages optionnelles : visibles seulement quand elles existent", () => {
  it("Référencement (SEO) et Articles (Blogue)", () => {
    const without = hrefsOf(navFor(null, []));
    expect(without).not.toContain("/gestion/referencement");
    expect(without).not.toContain("/gestion/presence/articles");
    const withAll = hrefsOf(navFor(null, optionalHrefs()));
    expect(withAll).toContain("/gestion/referencement");
    expect(withAll).toContain("/gestion/presence/articles");
    // L'état réel du dépôt : présentes seulement si la page existe.
    expect(AVAILABLE.every((h) => existsSync(path.join(APP, "gestion", "(prive)", h.replace(/^\/gestion\//, ""), "page.tsx")))).toBe(true);
  });
});
