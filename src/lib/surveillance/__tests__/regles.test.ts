/* Surveillance : machine à états des alertes (une fois, rappel aux 60 min, rétabli), messages,
   lecture de pm2 et des journaux du VPS, rotation, masquage. */
import { describe, expect, it } from "vitest";
import {
  analyserDeploiement,
  analyserRelances,
  analyserRobotNuit,
  evaluer,
  garderRecents,
  ligneJournal,
  lirePm2,
  masquerCourriel,
  masquerTelephone,
  messagesAlerte,
  passageOk,
  verifierRedemarrages,
} from "../../../../scripts/surveillance/regles.mjs";

type Check = { id: string; label: string; groupe: string; niveau: "critique" | "avertissement"; ok: boolean | null; detail: string; ms?: number };
const T0 = new Date("2026-09-13T07:00:00Z"); // 3 h du matin à Montréal
const at = (min: number) => new Date(T0.getTime() + min * 60_000);
const check = (over: Partial<Check> = {}): Check => ({ id: "public-accueil", label: "Accueil (site public)", groupe: "public", niveau: "critique", ok: true, detail: "200 · 180 ms", ms: 180, ...over });
const run = (checks: Check[], when: Date) => ({ at: when.toISOString(), dureeMs: 900, ok: passageOk(checks), checks, infos: {} });

function sequence(steps: Array<[number, Check[]]>) {
  let etat = null as ReturnType<typeof evaluer>["etat"] | null;
  return steps.map(([min, checks]) => {
    const r = evaluer(etat, run(checks, at(min)), at(min));
    etat = r.etat;
    return r.evenements.map((e) => e.type);
  });
}

describe("machine à états des alertes", () => {
  it("critique : alerte une fois, rappel aux 60 minutes, un seul « rétabli »", () => {
    const down = [check({ ok: false, detail: "erreur HTTP 502" })];
    const up = [check()];
    expect(
      sequence([
        [-5, up],
        [0, down],
        [5, down],
        [55, down],
        [60, down],
        [65, down],
        [115, down],
        [120, down],
        [125, up],
        [130, up],
      ]),
    ).toEqual([[], ["panne"], [], [], ["rappel"], [], [], ["rappel"], ["retabli"], []]);
  });

  it("premier passage sans état : rien si tout va bien, panne si un problème existe déjà", () => {
    expect(sequence([[0, [check()]]])).toEqual([[]]);
    expect(sequence([[0, [check({ ok: false })]]])).toEqual([["panne"]]);
  });

  it("avertissement : une alerte, aucun rappel, puis « rétabli »", () => {
    const warn = [check({ id: "robots-nuit", label: "Robot de nuit", groupe: "robots", niveau: "avertissement", ok: false, detail: "Blogue : génération en échec" })];
    const ok = [check({ id: "robots-nuit", label: "Robot de nuit", groupe: "robots", niveau: "avertissement", ok: true })];
    expect(sequence([[0, warn], [60, warn], [180, warn], [600, ok]])).toEqual([["panne"], [], [], ["retabli"]]);
  });

  it("non vérifiable : l'état ne bouge pas ; aggravation avertissement → critique : nouvelle alerte", () => {
    const ssl = (ok: boolean | null, niveau: Check["niveau"]) => [check({ id: "serveur-ssl", label: "Certificat SSL", groupe: "serveur", niveau, ok, detail: "" })];
    expect(sequence([[0, ssl(false, "avertissement")], [5, ssl(null, "avertissement")], [10, ssl(false, "avertissement")], [15, ssl(false, "critique")], [20, ssl(false, "critique")]])).toEqual([["panne"], [], [], ["panne"], []]);
  });

  it("le rétabli donne la durée de la panne", () => {
    let r = evaluer(null, run([check({ ok: false })], at(0)), at(0));
    r = evaluer(r.etat, run([check()], at(25)), at(25));
    expect(r.evenements[0]).toMatchObject({ type: "retabli", dureeMs: 25 * 60_000 });
  });
});

describe("messages", () => {
  it("panne critique : texto court en français + courriel avec la liste des vérifications", () => {
    const checks = [check({ ok: false, detail: "délai dépassé (20 s)" }), check({ id: "local-accueil", label: "Accueil (port local)", groupe: "local", ok: true })];
    const { evenements } = evaluer(null, run(checks, at(0)), at(0));
    const m = messagesAlerte(evenements, run(checks, at(0)), { maintenant: at(0) })!;
    expect(m.sms).toContain("TAV.ca 3 h 00 — PANNE : Accueil (site public) (délai dépassé (20 s))");
    expect(m.sms).toContain("nginx"); // public en panne, local correct
    expect(m.sms!.length).toBeLessThanOrEqual(320);
    expect(m.sujet).toBe("[TAV.ca] PANNE : Accueil (site public)");
    expect(m.texte).toContain("ÉCHEC");
    expect(m.texte).toContain("/gestion/statistiques#etat-du-site");
  });

  it("avertissement seul : courriel sans texto ; rétabli critique : texto « RÉTABLI »", () => {
    const warn = [check({ id: "robots-nuit", label: "Robot de nuit", groupe: "robots", niveau: "avertissement", ok: false, detail: "tests en échec" })];
    const w = messagesAlerte(evaluer(null, run(warn, at(0)), at(0)).evenements, run(warn, at(0)), { maintenant: at(0) })!;
    expect(w.sms).toBeNull();
    expect(w.sujet).toBe("[TAV.ca] Avertissement : Robot de nuit");

    const r1 = evaluer(null, run([check({ ok: false })], at(0)), at(0));
    const r2 = evaluer(r1.etat, run([check()], at(70)), at(70));
    const m = messagesAlerte(r2.evenements, run([check()], at(70)), { maintenant: at(70) })!;
    expect(m.sms).toContain("RÉTABLI : Accueil (site public) (problème de 1 h 10)");
    expect(m.sujet).toBe("[TAV.ca] Rétabli : Accueil (site public)");
    expect(messagesAlerte([], run([check()], at(0)))).toBeNull();
  });

  it("ligne de journal compacte", () => {
    const checks = [check({ ok: false }), check({ id: "api-leads", label: "API", groupe: "api", ok: true })];
    const { evenements } = evaluer(null, run(checks, at(0)), at(0));
    expect(ligneJournal(run(checks, at(0)), evenements, { sms: "envoye", courriel: "envoye (smtp)" })).toEqual({
      t: at(0).toISOString(),
      ok: false,
      ko: ["public-accueil"],
      ms: 180,
      ev: [{ type: "panne", id: "public-accueil", label: "Accueil (site public)", niveau: "critique" }],
      envoi: { sms: "envoye", courriel: "envoye (smtp)" },
    });
  });
});

describe("sorties du serveur", () => {
  it("pm2 jlist, même précédé de l'avertissement « In-memory PM2 is out-of-date »", () => {
    const jlist = JSON.stringify([{ name: "solution-net-plus", pm2_env: { status: "online", restart_time: 0 } }, { name: "thermo", pm2_env: { status: "online", restart_time: 35, pm_uptime: T0.getTime() } }]);
    const sortie = `>>>> In-memory PM2 is out-of-date, do:\n>>>> $ pm2 update\nIn memory PM2 version: 7.0.1\nLocal PM2 version: 6.0.14\n\n${jlist}\n`;
    expect(lirePm2(sortie)).toEqual({ statut: "online", redemarrages: 35, depuis: T0.toISOString() });
    expect(lirePm2(jlist, "absent")).toEqual({ statut: "absent", redemarrages: null, depuis: null });
    expect(lirePm2("pm2 : commande introuvable")).toBeNull();
  });

  it("saut du compteur de redémarrages", () => {
    expect(verifierRedemarrages(35, 36).ok).toBe(true); // un déploiement
    expect(verifierRedemarrages(35, 40)).toMatchObject({ ok: false });
    expect(verifierRedemarrages(35, 0).ok).toBe(true); // pm2 remis à zéro
    expect(verifierRedemarrages(null, 12).ok).toBe(true);
  });

  it("robot de nuit : dernier passage, échecs, silence de plus de 36 h", () => {
    const log = [
      "[2026-09-11 05:30:12] Robot de nuit : début",
      "[2026-09-11 05:30:12] Rien de nouveau : fin.",
      "[2026-09-12 05:30:03] Robot de nuit : début",
      "[2026-09-12 05:30:09] LogisVert : liste inchangée.",
      "[2026-09-12 05:31:25] Blogue : génération en échec",
      "[09:31:25] Deuxième version refusée : frontmatter illisible",
      "[2026-09-12 05:31:25] Rien de nouveau : fin.",
    ].join("\n");
    const now = new Date("2026-09-12T14:00:00Z");
    expect(analyserRobotNuit(log, { mtimeMs: now.getTime() - 3_600_000, maintenant: now })).toMatchObject({ ok: false, detail: expect.stringContaining("Blogue : génération en échec") });
    expect(analyserRobotNuit(log.split("\n").slice(0, 2).join("\n"), { maintenant: now })).toMatchObject({ ok: true });
    expect(analyserRobotNuit(log, { mtimeMs: now.getTime() - 40 * 3_600_000, maintenant: now })).toMatchObject({ ok: false, detail: expect.stringContaining("aucun passage") });
    expect(analyserRobotNuit("")).toBeNull();
  });

  it("robot des rappels et déploiement", () => {
    expect(analyserRelances("[2026-09-12 09:30:00] Rappels : début\n[2026-09-12 09:30:40] Rappels : fin (code 0)\n")).toMatchObject({ ok: true });
    expect(analyserRelances("[2026-09-12 09:30:40] Rappels : fin (code 2)\n")).toMatchObject({ ok: false, detail: expect.stringContaining("envois ont échoué") });
    expect(analyserRelances("")).toBeNull();
    const now = new Date("2026-09-13T03:00:00Z");
    const v = (nom: string, minAgo: number) => ({ nom, mtimeMs: now.getTime() - minAgo * 60_000 });
    expect(analyserDeploiement({ versions: [v("20260912-201402", 400), v("20260912-220126", 60)], courante: "20260912-220126", maintenant: now }).ok).toBe(true);
    expect(analyserDeploiement({ versions: [v("20260912-220126", 300), v("20260913-010000", 90)], courante: "20260912-220126", maintenant: now })).toMatchObject({ ok: false });
    expect(analyserDeploiement({ versions: [v("20260912-220126", 300), v("20260913-025500", 5)], courante: "20260912-220126", maintenant: now }).ok).toBe(true);
    expect(analyserDeploiement({ versions: [], courante: null, maintenant: now }).ok).toBe(false);
  });

  it("rotation sur 14 jours et masquage des destinataires", () => {
    const now = new Date("2026-09-13T00:00:00Z");
    const l = (d: number) => JSON.stringify({ t: new Date(now.getTime() - d * 86_400_000).toISOString(), ok: true });
    expect(garderRecents([l(20), l(15), l(13), l(0), "abîmée", ""], now)).toEqual([l(13), l(0)]);
    expect(masquerTelephone("+14389003224")).toBe("***-***-3224");
    expect(masquerTelephone("")).toBe("(aucun)");
    expect(masquerCourriel("info@thermopompesavendre.ca")).toBe("i***@thermopompesavendre.ca");
  });
});
