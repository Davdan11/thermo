/* Conformité C2 — textes (lus dans une trousse FICTIVE), preuve du consentement, retraits, conservation.
   Aucun texte de la vraie trousse ici : tout est inventé pour les essais. */
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { parseTrousse } from "@/lib/plateforme/trousse";
import { CTX, IDENTITE, trousseFictive } from "./fictif";
import {
  consentStatus,
  purgeConsents,
  readConsents,
  recordCallDecision,
  recordConsent,
  recordWithdrawal,
  registerBundle,
  withdrawnSince,
} from "../store";
import { buildConsentBundle, buildPolicy, buildReferralRules, commercialFooter, inboundCallNotice, outboundCallNotice, toBlocks, type ConsentBundle } from "../textes";



const NO_BRACKETS = /\[[^\]]*\]/;

describe("textes lus dans la trousse (fictive) et remplis avec l'identité", () => {
  it("formulaires : 5.1 (avis), 5.2 et 5.3 (cases), 3.1 (avis sans consigne, case) ; aucun crochet", () => {
    const b = buildConsentBundle(trousseFictive(), CTX);
    expect(b.ready).toBe(true);
    if (!b.ready) return;
    expect(b.communications.text).toBe("En envoyant, j’accepte des messages fictifs de Entreprise Fictive SENC.");
    expect(b.rappels.text).toBe("J’accepte deux rappels fictifs de Entreprise Fictive SENC. 1, rue Imaginaire, Laval (Québec) H0H 0H0 · 514 555-0100 · service@fictif.ca · https://exemple.ca/confidentialite");
    expect(b.promotions.text).toContain("offres fictives");
    expect(b.promotions.text).not.toContain("Note inventée");
    expect(b.jumelage.notice.map((n) => n.text)).toEqual(["Intitulé fictif  Premier paragraphe d’avis inventé pour les essais.", "Deuxième paragraphe inventé : écrire à vieprivee@fictif.ca pour retirer l’accord."]);
    expect(b.jumelage.box.text).toBe("Je demande le jumelage fictif de Entreprise Fictive SENC.");
    for (const t of [b.communications, b.rappels, b.promotions, b.jumelage.box, ...b.jumelage.notice]) {
      expect(t.text).not.toMatch(NO_BRACKETS);
      expect(t.sha).toMatch(/^[0-9a-f]{16}$/);
    }
    expect(b.sender).toBe("Entreprise Fictive SENC");
    expect(b.version).toMatch(/^[0-9a-f]{16}$/);
  });

  it("repli : trousse absente ou identité incomplète → pas prêt (le site garde ses textes)", () => {
    const vide = { ...parseTrousse(""), importedAt: null, importedBy: null };
    expect(buildConsentBundle(vide, CTX).ready).toBe(false);
    const r = buildConsentBundle(trousseFictive(), { ...CTX, identity: { ...IDENTITE, neq: "" } });
    expect(r.ready).toBe(false);
    if (!r.ready) expect(r.missing.join(" ")).toContain("NEQ");
  });

  it("appels : 6.2 garde son texte, seule la touche passe de 2 à 9 ; 6.3 prend le nom de la personne", () => {
    const i = inboundCallNotice(trousseFictive(), CTX);
    expect(i.ok && i.text.text).toBe("Avis fictif de Entreprise Fictive SENC. Pour refuser, faites le 9 ou dites-le.");
    const o = outboundCallNotice(trousseFictive(), CTX, "Alex");
    expect(o.ok && o.text.text).toBe("Ici Alex de Entreprise Fictive SENC, avis fictif. D’accord?");
  });

  it("pied commercial 5.5 : type de messages, lien de désabonnement et coordonnées remplis", () => {
    const f = commercialFooter(trousseFictive(), CTX, { typeMessages: "des rappels", unsubscribeUrl: "https://exemple.ca/d?t=1" });
    expect(f?.text).toBe("Pied fictif pour des rappels ; expéditeur Entreprise Fictive SENC (1, rue Imaginaire, Laval (Québec) H0H 0H0) ; lien https://exemple.ca/d?t=1 ; service@fictif.ca ou 514 555-0100.");
  });

  it("politique : sections 4.x en blocs (tableau, liste, paragraphes), date d'entrée en vigueur ; sans date → pas prête", () => {
    const r = buildPolicy(trousseFictive(), CTX, { effectiveDate: "2030-02-03" });
    expect("ok" in r).toBe(true);
    if (!("ok" in r)) return;
    expect(r.doc.intro).toEqual(["Politique fictive datée du 3 février 2030"]);
    const blocks = Object.fromEntries(r.doc.sections.map((s) => [s.number, s.blocks]));
    expect(blocks["4.2"]).toEqual([{ kind: "p", text: "Responsable fictif : Camille Fictive, Présidente (vieprivee@fictif.ca)." }]);
    expect(blocks["4.3"]).toEqual([{ kind: "table", head: ["Colonne A", "Colonne B"], rows: [["Ligne un", "Valeur un."], ["Ligne deux", "Valeur deux."]] }]);
    expect(blocks["4.4"]).toEqual([{ kind: "list", items: ["premier point;", "deuxième point;", "dernier point."] }]);
    expect(blocks["4.10"]).toEqual([{ kind: "table", head: ["Dossier", "Durée"], rows: [["Prospect fictif", "24 mois fictifs."]] }, { kind: "p", text: "Paragraphe final inventé qui clôt le tableau." }]);
    expect(JSON.stringify(r.doc.sections)).not.toMatch(/\[[A-Z]/);
    expect("ok" in buildPolicy(trousseFictive(), CTX, { effectiveDate: null })).toBe(false);
  });

  it("règles du programme : montant, forme, plafond et date ; sans montant → pas offert", () => {
    const r = buildReferralRules(trousseFictive(), CTX, { rewardCents: 5000, form: "carte-cadeau", annualCap: { kind: "nombre", value: 3 }, launchDate: "2030-03-01" });
    expect("ok" in r && r.doc.sections.flatMap((s) => s.blocks).map((b) => (b.kind === "p" ? b.text : ""))).toEqual([
      "Organisateur fictif : Entreprise Fictive SENC (1, rue Imaginaire, Laval (Québec) H0H 0H0), à partir du 1 mars 2030.",
      "Récompense de 50 $ (carte-cadeau), limite 3 récompenses par année.",
    ]);
    expect("ok" in buildReferralRules(trousseFictive(), CTX, { rewardCents: null, form: "", annualCap: null, launchDate: "2030-03-01" })).toBe(false);
  });

  it("blocs : une ligne isolée finie par « ; » reste une liste d'un point", () => {
    expect(toBlocks(["seul;"])).toEqual([{ kind: "list", items: ["seul;"] }]);
  });
});

describe("preuve du consentement (5.4), retraits et conservation", () => {
  const prev = process.env.GESTION_DATA_DIR;
  let dir: string;
  let bundle: ConsentBundle;
  beforeEach(async () => {
    dir = await mkdtemp(path.join(tmpdir(), "thermo-consentements-"));
    process.env.GESTION_DATA_DIR = dir;
    const b = buildConsentBundle(trousseFictive(), CTX);
    if (!b.ready) throw new Error("trousse fictive incomplète");
    bundle = b;
    await registerBundle(bundle, new Date("2030-01-10T15:00:00Z"));
  });
  afterEach(async () => {
    if (prev === undefined) delete process.env.GESTION_DATA_DIR;
    else process.env.GESTION_DATA_DIR = prev;
    await rm(dir, { recursive: true, force: true });
  });

  it("preuve complète : texte exact et version, cases et état, identité, date, heure, fuseau, IP, source, canaux, expéditeur", async () => {
    const at = new Date("2030-01-10T15:04:05Z");
    const r = await recordConsent({ version: bundle.version, form: "soumission", source: "/soumission", email: "Marie@Exemple.ca", phone: "514 555-0142", ip: "203.0.113.7", journalId: "j-1", jumelage: true, checks: { rappels: true, promotions: false, jumelage: true } }, at);
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    const rec = r.record;
    expect(rec).toMatchObject({ at: "2030-01-10T15:04:05.000Z", timeZone: "America/Toronto", ip: "203.0.113.7", form: "soumission", source: "/soumission", email: "marie@exemple.ca", phone: "+15145550142", sender: "Entreprise Fictive SENC", version: bundle.version, journalId: "j-1" });
    expect(rec.localTime).toMatch(/2030-01-10.*10.*04.*05/);
    expect(rec.keys).toHaveLength(2);
    const byPurpose = Object.fromEntries(rec.items.map((i) => [i.purpose, i]));
    expect(byPurpose.rappels).toMatchObject({ kind: "case", checked: true, defaultChecked: false, required: false, channels: ["courriel", "texto"], section: "5.2", textSha: bundle.rappels.sha });
    expect(byPurpose.promotions).toMatchObject({ checked: false, defaultChecked: false, section: "5.3" });
    expect(byPurpose.jumelage).toMatchObject({ checked: true, required: true, section: "3.1" });
    expect(byPurpose.communications).toMatchObject({ kind: "avis", section: "5.1" });
    // Le texte exact de chaque version est gardé une fois, par empreinte.
    const data = await readConsents();
    expect(data.texts[bundle.rappels.sha].text).toBe(bundle.rappels.text);
    expect(data.bundles[bundle.version].shas.promotions).toBe(bundle.promotions.sha);
  });

  it("version inconnue du serveur : refusée (aucune preuve sans texte exact)", async () => {
    const r = await recordConsent({ version: "0123456789abcdef", form: "contact", source: "/contact", email: "a@exemple.ca", checks: { rappels: true, promotions: true } });
    expect(r).toEqual({ ok: false, reason: "version-inconnue" });
  });

  it("retrait en un clic : prise d'effet immédiate, pour la fin visée seulement ; un nouveau consentement le remplace", async () => {
    const who = { email: "marie@exemple.ca" };
    await recordConsent({ version: bundle.version, form: "thermomatch", source: "/trouver-ma-thermopompe", email: who.email, checks: { rappels: true, promotions: true } }, new Date("2030-01-10T15:00:00Z"));
    const w = await recordWithdrawal({ ...who, purposes: ["promotions"], method: "lien-un-clic" }, new Date("2030-02-01T12:00:00Z"));
    expect(w).toMatchObject({ at: "2030-02-01T12:00:00.000Z", effectiveAt: "2030-02-01T12:00:00.000Z", method: "lien-un-clic" });
    const d = await readConsents();
    const t = new Date("2030-02-01T12:00:01Z");
    expect(consentStatus(d, who, "promotions", t)).toMatchObject({ active: false, withdrawnAt: "2030-02-01T12:00:00.000Z" });
    expect(consentStatus(d, who, "rappels", t).active).toBe(true);
    expect(withdrawnSince(d, who, "promotions", "2030-01-10T15:00:00.000Z", t)).toBe(true);
    await recordConsent({ version: bundle.version, form: "contact", source: "/contact", email: who.email, checks: { rappels: false, promotions: true } }, new Date("2030-03-01T12:00:00Z"));
    expect(consentStatus(await readConsents(), who, "promotions", new Date("2030-03-02T00:00:00Z")).active).toBe(true);
  });

  it("conservation : preuve gardée 3 ans après le dernier retrait ou message, puis supprimée avec son IP ; décisions d'appel 12 mois", async () => {
    await recordConsent({ version: bundle.version, form: "contact", source: "/contact", email: "xavier@exemple.ca", ip: "198.51.100.1", checks: { rappels: true, promotions: false } }, new Date("2030-01-10T15:00:00Z"));
    await recordWithdrawal({ email: "xavier@exemple.ca", purposes: ["rappels"], method: "lien-un-clic" }, new Date("2030-06-01T12:00:00Z"));
    await recordCallDecision({ direction: "entrant", decision: "refus-touche", phone: "+15145550142", noticeSha: "abc", trousseVersion: "9.9" }, new Date("2030-01-10T15:00:00Z"));
    const early = await purgeConsents(new Date("2033-05-31T12:00:00Z"));
    expect(early).toEqual({ ipRetirees: 0, supprimees: 0, appelsSupprimes: 1 });
    const essai = await purgeConsents(new Date("2033-06-02T12:00:00Z"), { dryRun: true });
    expect(essai.supprimees).toBe(1);
    expect((await readConsents()).records).toHaveLength(1);
    const late = await purgeConsents(new Date("2033-06-02T12:00:00Z"));
    expect(late).toEqual({ ipRetirees: 1, supprimees: 1, appelsSupprimes: 0 });
    const d = await readConsents();
    expect(d.records).toHaveLength(0);
    expect(d.withdrawals).toHaveLength(1); // liste minimale de suppression
  });
});
