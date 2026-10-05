/* Envoi à Facebook (fetch simulé, aucun appel réseau) : interrupteur éteint, approbation pendant 7 jours puis d'office,
   aucun doublon, Instagram absent sans erreur, story en deux appels, jeton jamais dans l'adresse, reprise limitée,
   ancienne file retirée. */
import { mkdtemp, rm } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { mutatePresence, readPresence } from "@/lib/presence/store";
import { zonedToUtc } from "@/lib/presence/time";
import { configFacebook, etatConnexion, traduireErreur, VERSION_GRAPH_DEFAUT } from "../facebook";
import { casesLibres, modeEnvoi, passage, publier, retirerAncienneFile } from "../envoi";
import { genererPublication } from "../generer";
import { ajouterPublications, lireSocial, modifierSocial } from "../store";
import type { Genre, PublicationSociale } from "../types";
import { catalogueFictif, reglagesFictifs } from "./fixtures";

const JETON = "EAAJETONDETESTPOURLESTESTS1234567890";
const PROD = { NODE_ENV: "production", META_PAGE_ID: "1122334455", META_PAGE_TOKEN: JETON };
const MAINTENANT = new Date("2026-10-02T14:30:00.000Z"); // 10 h 30 à Montréal
const PNG = Buffer.from("89504e470d0a1a0a", "hex");

interface Appel {
  url: string;
  methode: string;
  auth: string | null;
  champs: Record<string, string>;
}

function faux(reponses: Array<(a: Appel) => { status?: number; json: unknown }>) {
  const appels: Appel[] = [];
  let i = 0;
  const fetch = async (url: string, init: RequestInit): Promise<Response> => {
    const champs: Record<string, string> = {};
    const b = init.body;
    if (b instanceof FormData) for (const [k, v] of b.entries()) champs[k] = typeof v === "string" ? v : `<fichier ${(v as Blob).type}>`;
    if (b instanceof URLSearchParams) for (const [k, v] of b.entries()) champs[k] = v;
    const a: Appel = { url, methode: String(init.method), auth: new Headers(init.headers).get("authorization"), champs };
    appels.push(a);
    const r = (reponses[i++] ?? reponses[reponses.length - 1])(a);
    return new Response(JSON.stringify(r.json), { status: r.status ?? 200, headers: { "Content-Type": "application/json" } });
  };
  return { fetch, appels };
}

let dir = "";
const env0 = { ...process.env };

async function ajouter(genre: Genre, jour: string, heure: string, statut?: PublicationSociale["statut"]): Promise<PublicationSociale> {
  const p = await genererPublication({ genre, prevueLe: zonedToUtc(jour, heure), maintenant: new Date("2026-09-30T12:00:00Z"), historique: [], catalogue: catalogueFictif(), reglages: reglagesFictifs(), ia: null });
  if (!p) throw new Error("aucun sujet");
  const x = statut ? { ...p, statut } : p;
  await ajouterPublications([x]);
  return x;
}

const deps = (f: ReturnType<typeof faux>["fetch"], sur: Record<string, unknown> = {}) => ({ env: PROD, interrupteur: true, fetch: f, sleep: async () => {}, delais: [], rendre: async () => PNG, maintenant: () => MAINTENANT, ...sur });

beforeEach(async () => {
  dir = await mkdtemp(path.join(os.tmpdir(), "social-envoi-"));
  process.env.GESTION_DATA_DIR = dir;
  process.env.SOCIAL_FILE = path.join(dir, "social-facebook.json");
  process.env.PRESENCE_FILE = path.join(dir, "presence.json");
});
afterEach(async () => {
  for (const k of ["GESTION_DATA_DIR", "SOCIAL_FILE", "PRESENCE_FILE"]) {
    if (env0[k] === undefined) delete process.env[k];
    else process.env[k] = env0[k];
  }
  await rm(dir, { recursive: true, force: true });
});

describe("mode et connexion", () => {
  it("Instagram facultatif : META_PAGE_ID et META_PAGE_TOKEN suffisent, sans raison ni erreur Instagram", () => {
    const m = modeEnvoi(true, PROD);
    expect(m).toEqual({ reel: true, raisons: [] });
    expect(JSON.stringify(modeEnvoi(false, { NODE_ENV: "production" }))).not.toMatch(/instagram|IG_USER/i);
    expect(configFacebook(PROD).version).toBe(VERSION_GRAPH_DEFAUT);
  });

  it("interrupteur éteint, développement ou clé absente : mode essai, avec la raison", () => {
    expect(modeEnvoi(false, PROD).raisons.join()).toMatch(/Interrupteur/);
    expect(modeEnvoi(true, { ...PROD, NODE_ENV: "development" }).reel).toBe(false);
    expect(modeEnvoi(true, { NODE_ENV: "production", META_PAGE_ID: "1" }).raisons.join()).toMatch(/META_PAGE_TOKEN/);
  });

  it("état de la connexion : nom de la page et validité du jeton, jeton jamais dans le résultat ni dans l'en-tête d'une adresse de publication", async () => {
    const { fetch, appels } = faux([() => ({ json: { id: "1122334455", name: "Thermopompes a Vendre" } }), () => ({ json: { data: { is_valid: true, expires_at: 0, type: "PAGE", scopes: ["pages_manage_posts", "pages_read_engagement", "pages_show_list"] } } })]);
    const e = await etatConnexion(PROD, { fetch }, MAINTENANT.getTime());
    expect(e).toMatchObject({ configuree: true, pageNom: "Thermopompes a Vendre", pageConcorde: true, jetonValide: true, expire: "jamais", permissionsManquantes: [] });
    expect(JSON.stringify(e)).not.toContain(JETON);
    expect(appels[0].url).not.toContain(JETON);
    expect(appels.every((a) => a.auth === `Bearer ${JETON}`)).toBe(true);
    expect(appels[1].url).toContain("/debug_token?input_token=");
  });

  it("erreurs de Facebook traduites en français, sans jeton", () => {
    expect(traduireErreur(400, { error: { code: 190, message: `Invalid token ${JETON}` } }).message).toMatch(/Jeton de page expiré/);
    const e = traduireErreur(400, { error: { code: 100, message: `bad access_token=${JETON}` } });
    expect(e.message).not.toContain(JETON);
    expect(traduireErreur(503, null).nature).toBe("inconnue");
  });
});

describe("envoi", () => {
  it("interrupteur éteint : aucun appel à Facebook, même avec « Publier maintenant » ; l'essai est gardé", async () => {
    const p = await ajouter("publication", "2026-10-02", "10:00", "approuvee");
    const { fetch, appels } = faux([() => ({ json: {} })]);
    const r = await publier(p.id, "manuel", deps(fetch, { interrupteur: false }));
    expect(r.kind).toBe("essai");
    expect(appels).toHaveLength(0);
    const x = (await lireSocial()).publications[0];
    expect(x.statut).toBe("approuvee");
    expect(x.envoi.essai?.requetes[0].chemin).toContain("/photos");
    expect(JSON.stringify(x)).not.toContain(JETON);
  });

  it("pendant les 7 jours : un élément non approuvé ne part jamais", async () => {
    await modifierSocial((d) => {
      d.reglages.approbation.depart = "2026-09-30T12:00:00.000Z";
      return { result: null, changed: true };
    });
    const p = await ajouter("publication", "2026-10-02", "10:00");
    expect(p.statut).toBe("en_attente");
    const { fetch, appels } = faux([() => ({ json: { id: "9", post_id: "1122334455_9" } })]);
    const rapport = await passage({ ...deps(fetch), planifier: false });
    expect(rapport.resultats).toEqual([]);
    expect((await publier(p.id, "manuel", deps(fetch))).kind).toBe("ignoree");
    expect(appels).toHaveLength(0);
    expect((await lireSocial()).publications[0].statut).toBe("en_attente");
  });

  it("avant toute mise en ligne (départ vide) : rien d'office non plus", async () => {
    const p = await ajouter("story", "2026-10-02", "09:00");
    const { fetch, appels } = faux([() => ({ json: {} })]);
    await passage({ ...deps(fetch), planifier: false });
    expect(appels).toHaveLength(0);
    expect((await lireSocial()).publications.find((x) => x.id === p.id)?.statut).toBe("en_attente");
  });

  it("après 7 jours : approuvé d'office à son heure, publié, identifiant et lien gardés", async () => {
    await modifierSocial((d) => {
      d.reglages.approbation.depart = "2026-09-20T12:00:00.000Z";
      return { result: null, changed: true };
    });
    const p = await ajouter("publication", "2026-10-02", "10:00");
    expect(p.statut).toBe("en_attente");
    const { fetch, appels } = faux([() => ({ json: { id: "777", post_id: "1122334455_777" } })]);
    const rapport = await passage({ ...deps(fetch), planifier: false });
    expect(rapport.resultats[0].issue).toEqual({ kind: "publiee", postId: "1122334455_777", lien: "https://www.facebook.com/1122334455_777" });
    expect(appels).toHaveLength(1);
    const a = appels[0];
    expect(a.url).toBe(`https://graph.facebook.com/${VERSION_GRAPH_DEFAUT}/1122334455/photos`);
    expect(a.url).not.toContain(JETON);
    expect(a.auth).toBe(`Bearer ${JETON}`);
    expect(a.champs).toMatchObject({ published: "true", source: "<fichier image/png>" });
    expect(a.champs.message).toContain(`utm_content=${p.id}`);
    const x = (await lireSocial()).publications[0];
    expect(x.statut).toBe("publiee");
    expect(x.historique.map((h) => h.note ?? "")).toContain("Approuvée d’office : période d’approbation terminée");
    expect(x.envoi).toMatchObject({ postId: "1122334455_777", lien: "https://www.facebook.com/1122334455_777", tentatives: 1 });
    expect(JSON.stringify(await lireSocial())).not.toContain(JETON);
  });

  it("story en deux appels : photo non publiée, puis photo_stories avec son identifiant ; la première mise en ligne lance les 7 jours", async () => {
    const p = await ajouter("story", "2026-10-02", "09:00", "approuvee");
    const { fetch, appels } = faux([() => ({ json: { id: "5551" } }), () => ({ json: { success: true, post_id: "1122334455_8881" } })]);
    const r = await publier(p.id, "manuel", deps(fetch));
    expect(r.kind).toBe("publiee");
    expect(appels.map((a) => a.url.replace(`https://graph.facebook.com/${VERSION_GRAPH_DEFAUT}/`, ""))).toEqual(["1122334455/photos", "1122334455/photo_stories"]);
    expect(appels[0].champs).toEqual({ published: "false", source: "<fichier image/png>" });
    expect(appels[1].champs).toEqual({ photo_id: "5551" });
    const d = await lireSocial();
    expect(d.publications[0].envoi).toMatchObject({ photoId: "5551", postId: "1122334455_8881" });
    expect(d.reglages.approbation.depart).toBe(MAINTENANT.toISOString());
  });

  it("aucun doublon : deux passages qui se chevauchent n'envoient qu'une fois ; un élément publié ne repart pas", async () => {
    const p = await ajouter("publication", "2026-10-02", "10:00", "approuvee");
    let lacher: () => void = () => {};
    const attente = new Promise<void>((r) => (lacher = r));
    const appels: string[] = [];
    const fetch = async (url: string): Promise<Response> => {
      appels.push(url);
      await attente;
      return new Response(JSON.stringify({ id: "1", post_id: "1122334455_1" }), { status: 200 });
    };
    const premier = publier(p.id, "passage", deps(fetch));
    await new Promise((r) => setTimeout(r, 30));
    const second = await publier(p.id, "passage", deps(fetch));
    expect(second.kind).toBe("ignoree");
    lacher();
    expect((await premier).kind).toBe("publiee");
    expect((await publier(p.id, "manuel", deps(fetch))).kind).toBe("ignoree");
    expect(appels).toHaveLength(1);
  });

  it("réponse perdue à l'étape qui publie : vérification sur Facebook avant tout nouvel essai, jamais de seconde story", async () => {
    const p = await ajouter("story", "2026-10-02", "09:00", "approuvee");
    const un = faux([() => ({ json: { id: "4441" } }), () => ({ status: 502, json: {} })]);
    expect((await publier(p.id, "passage", deps(un.fetch))).kind).toBe("reessai");
    expect((await lireSocial()).publications[0].envoi).toMatchObject({ photoId: "4441", aVerifier: true });
    const deux = faux([() => ({ json: { data: [{ post_id: "1122334455_4442", media_id: "4441", url: "https://www.facebook.com/stories/4442" }] } })]);
    const r = await publier(p.id, "manuel", deps(deux.fetch, { maintenant: () => new Date(MAINTENANT.getTime() + 6 * 60_000) }));
    expect(r).toEqual({ kind: "publiee", postId: "1122334455_4442", lien: "https://www.facebook.com/stories/4442" });
    expect(deux.appels.map((a) => a.methode)).toEqual(["GET"]);
    expect(deux.appels[0].url).toContain("/stories?");
  });

  it("reprise limitée : erreur passagère → nouvel essai espacé ; erreur permanente → échec lisible", async () => {
    const p = await ajouter("publication", "2026-10-02", "10:00", "approuvee");
    const passager = faux([() => ({ status: 400, json: { error: { code: 4, message: "rate" } } })]);
    const r1 = await publier(p.id, "passage", deps(passager.fetch));
    expect(r1.kind).toBe("reessai");
    const x = (await lireSocial()).publications[0];
    expect(x.envoi.prochainEssai).toBe(new Date(MAINTENANT.getTime() + 5 * 60_000).toISOString());
    expect((await publier(p.id, "passage", deps(passager.fetch))).kind).toBe("ignoree");
    const permanent = faux([() => ({ status: 400, json: { error: { code: 190, message: "expired" } } })]);
    const r2 = await publier(p.id, "manuel", deps(permanent.fetch));
    expect(r2.kind).toBe("echec");
    const y = (await lireSocial()).publications[0];
    expect(y.statut).toBe("echec");
    expect(y.envoi.derniereErreur).toMatch(/Jeton de page expiré/);
  });
});

describe("file et ancienne file", () => {
  it("cases libres : story chaque jour à 9 h, publication un jour sur deux à 10 h, heure passée exclue, rien d'écrasé", () => {
    const cases = casesLibres({ reglages: reglagesFictifs(), publications: [] }, MAINTENANT);
    const stories = cases.filter((c) => c.genre === "story");
    const pubs = cases.filter((c) => c.genre === "publication");
    expect(stories.map((c) => c.jour)).toEqual(["2026-10-03", "2026-10-04", "2026-10-05"]);
    expect(pubs.length).toBeGreaterThanOrEqual(1);
    expect(pubs.length).toBeLessThanOrEqual(2);
    expect(stories.every((c) => c.prevueLe.toISOString().endsWith("13:00:00.000Z"))).toBe(true);
  });

  it("l'ancienne file est retirée (rejetée, avec la raison et le journal), jamais envoyée", async () => {
    await mutatePresence((d) => {
      d.posts.push({ id: "p-20260914-modele", series: "modele", date: "2026-09-14", status: "a_approuver" }, { id: "p-20260910-froid", series: "froid", date: "2026-09-10", status: "publiee" });
      return { result: null, changed: true };
    });
    expect(await retirerAncienneFile(MAINTENANT)).toBe(1);
    const pd = await readPresence();
    expect(pd.posts.find((p) => p.id === "p-20260914-modele")).toMatchObject({ status: "rejetee", rejectedBy: "robot Facebook" });
    expect(pd.posts.find((p) => p.id === "p-20260910-froid")?.status).toBe("publiee");
    expect(pd.log[0].message).toMatch(/Rien n’a été envoyé/);
    expect(await retirerAncienneFile(MAINTENANT)).toBe(0);
    expect((await lireSocial()).ancienneFileRetireeLe).toBe(MAINTENANT.toISOString());
  });
});
