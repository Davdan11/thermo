/* Radar à occasions : client chaud (seuil réglable, en tête de liste), ThermoMatch sans soumission, alertes des demandes
   sans réponse (rien n'est envoyé), relance de saison des clients perdus (automatique seulement avec consentement). */
import { describe, expect, it } from "vitest";
import { recordView } from "@/lib/soumissions/quote";
import { buildBundles, computeIndex } from "../../crm/model";
import { bucketTasks } from "../../crm/tasks";
import type { SourceData } from "../../crm/types";
import { HOT_PRIORITY, nextSeason, radarAlertsFrom, seasonalRelaunchesFrom } from "../../radar/radar";
import { DEFAULT_SALES_SETTINGS } from "../../crm/extensions";
import { daysAgo, entry, hoursAgo, NOW, quote, src } from "../../crm/__tests__/fixtures";

const PHONE = "514 555-0142";
const who = { firstName: "Julie", lastName: "Tremblay", email: "julie@exemple.ca", phone: PHONE, city: "Laval" };
const index = (s: SourceData, now = NOW) => computeIndex(buildBundles(s), s, now);
const rules = (s: SourceData, now = NOW) => index(s, now).tasks.map((t) => t.rule);

describe("client chaud", () => {
  const opened = (times: number, lastAt = hoursAgo(3)) => {
    const q = quote({ client: who, sentAt: daysAgo(6), viewedAt: daysAgo(5) });
    const v = q.versions[0];
    for (let i = 1; i < times - 1; i++) recordView(v, daysAgo(4 - i * 0.1));
    if (times > 1) recordView(v, lastAt);
    return q;
  };

  it("ouverte au moins 3 fois (réglable), consultée récemment : en tête de liste, devant des tâches plus anciennes", () => {
    const old = entry("appel-manque", daysAgo(10), { phone: "+14385550111" });
    expect(rules(src({ quotes: [opened(2)], journal: [old] }))).not.toContain("client-chaud");
    const s = src({ quotes: [opened(3)], journal: [old] });
    const tasks = index(s).tasks;
    expect(tasks[0]).toMatchObject({ rule: "client-chaud", family: "ouvertes", title: "Client chaud : appeler Julie", detail: expect.stringContaining("ouverte 3 fois"), priority: HOT_PRIORITY });
    expect(bucketTasks(tasks, NOW).overdue[0].rule).toBe("client-chaud");
    s.crm.salesSettings = { ...DEFAULT_SALES_SETTINGS, hotViews: 4 };
    expect(rules(s)).not.toContain("client-chaud");
  });

  it("dernière consultation trop ancienne, soumission acceptée ou client perdu : pas de client chaud", () => {
    expect(rules(src({ quotes: [opened(3, daysAgo(9))] }))).not.toContain("client-chaud");
    const accepted = quote({ client: who, sentAt: daysAgo(6), viewedAt: daysAgo(5), acceptedAt: daysAgo(1) });
    recordView(accepted.versions[0], hoursAgo(20));
    recordView(accepted.versions[0], hoursAgo(2));
    expect(accepted.versions[0].views.count).toBe(3);
    expect(rules(src({ quotes: [accepted] }))).not.toContain("client-chaud");
  });
});

describe("ThermoMatch sans soumission", () => {
  const tm = entry("thermomatch", hoursAgo(5), { firstName: "Marc", email: "marc@exemple.ca", phone: "450 555-0177", choices: ["1. Alpha Série A (AOU-12)"], code: "abc" });

  it("tâche « Préparer la soumission », avec le lien de la soumission pré-remplie", () => {
    const s = src({ journal: [tm] });
    const c = index(s).clients[0];
    const t = c.tasks.find((x) => x.rule === "thermomatch-sans-soumission");
    expect(t).toMatchObject({ title: "Préparer la soumission de Marc", family: "suivis", href: `/gestion/soumissions/nouvelle?client=${c.b.id}&thermomatch=${tm.id}` });
  });

  it("disparaît dès qu'une soumission est créée ; revient pour un nouveau ThermoMatch", () => {
    const after = quote({ client: { firstName: "Marc", email: "marc@exemple.ca" }, createdAt: hoursAgo(1) });
    expect(rules(src({ journal: [tm], quotes: [after] }))).not.toContain("thermomatch-sans-soumission");
    const before = quote({ client: { firstName: "Marc", email: "marc@exemple.ca" }, createdAt: daysAgo(30) });
    expect(rules(src({ journal: [tm], quotes: [before] }))).toContain("thermomatch-sans-soumission");
  });

  it("demande de soumission portant le modèle choisi dans ThermoMatch : même tâche ; sans modèle : non", () => {
    const withModel = entry("soumission", hoursAgo(2), { firstName: "Léa", phone: "819 555-0123", modeleSelectionne: "Alpha — m-alpha" });
    const plain = entry("soumission", hoursAgo(2), { firstName: "Luc", phone: "819 555-0124" });
    const all = index(src({ journal: [withModel, plain] })).tasks.filter((t) => t.rule === "thermomatch-sans-soumission");
    expect(all.map((t) => t.title)).toEqual(["Préparer la soumission de Léa"]);
  });
});

describe("alertes : demandes sans réponse au-delà du délai (rien n'est envoyé ici)", () => {
  const d = entry("soumission", hoursAgo(1), { firstName: "Julie", phone: PHONE, email: "julie@exemple.ca", municipality: "Laval" });

  it("dans le délai : rien ; délai de rappel dépassé : une alerte, clé stable, texte sans numéro ni courriel", () => {
    const s = src({ journal: [d] });
    expect(radarAlertsFrom(index(s), NOW)).toEqual([]);
    const later = new Date(NOW.getTime() + 2 * 3_600_000);
    const alerts = radarAlertsFrom(index(s, later), later);
    expect(alerts).toHaveLength(1);
    expect(alerts[0]).toMatchObject({ key: `radar:sans-reponse:auto:rappel-nouveau:${d.id}`, kind: "demande-sans-reponse", firstName: "Julie", city: "Laval", deadline: "2026-09-16T16:00:00.000Z" });
    expect(alerts[0].text).toContain("Julie (Laval)");
    expect(JSON.stringify(alerts)).not.toMatch(/@|\d{3}[ .-]?\d{3}[ .-]?\d{4}/);
  });

  it("appel manqué : même délai ; tâche faite : plus d'alerte ; reportée : alerte à la fin du report seulement", () => {
    const call = entry("appel-manque", hoursAgo(3), { phone: "+14385550111" });
    const s = src({ journal: [call] });
    expect(radarAlertsFrom(index(s), NOW).map((a) => a.demand)).toEqual(["Appel manqué"]);
    const key = `auto:rappel-appel:${call.id}`;
    s.crm.taskState[key] = { snoozedUntil: new Date(NOW.getTime() + 3_600_000).toISOString() };
    expect(radarAlertsFrom(index(s), NOW)).toEqual([]);
    const later = new Date(NOW.getTime() + 2 * 3_600_000);
    expect(radarAlertsFrom(index(s, later), later)).toHaveLength(1);
    s.crm.taskState[key] = { doneAt: NOW.toISOString() };
    expect(radarAlertsFrom(index(s, later), later)).toEqual([]);
  });
});

describe("relance de saison des clients perdus", () => {
  // Soumission refusée le 10 juillet 2026 : client perdu ; saison suivante = chauffage, dès le 1er septembre.
  const lostQuote = () => quote({ client: who, sentAt: new Date("2026-07-01T14:00:00Z"), refusedAt: new Date("2026-07-10T14:00:00Z") });

  it("saisons : la saison qui suit la perte, jusqu'au début de la suivante", () => {
    expect(nextSeason("2026-07-10", DEFAULT_SALES_SETTINGS)).toEqual({ kind: "chauffage", start: "2026-09-01", end: "2027-04-01" });
    expect(nextSeason("2026-12-01", DEFAULT_SALES_SETTINGS)).toEqual({ kind: "climatisation", start: "2027-04-01", end: "2027-09-01" });
    expect(nextSeason("2026-07-10", { coolingStart: "05-01", heatingStart: "05-01" })).toEqual({ kind: "climatisation", start: "2027-05-01", end: "2028-05-01" });
  });

  it("sans consentement : tâche manuelle seulement, aucune relance automatique", () => {
    const s = src({ quotes: [lostQuote()] });
    const i = index(s);
    expect(i.clients[0].stage.stage).toBe("perdue");
    const t = i.tasks.find((x) => x.rule === "relance-saison");
    expect(t).toMatchObject({ title: "Relancer Julie à la main (saison de chauffage)", detail: expect.stringContaining("aucun envoi automatique"), dueAt: "2026-09-01T13:00:00.000Z" });
    expect(seasonalRelaunchesFrom(i, NOW)).toEqual([]);
  });

  it("avec consentement enregistré : relance automatique permise (le volet B envoie) ; retiré : manuelle", () => {
    const s = src({ quotes: [lostQuote()] });
    const id = index(s).clients[0].b.id;
    s.crm.seasonConsents[id] = { at: "2026-07-10T15:00:00.000Z", by: "proprio@exemple.ca", note: "au téléphone" };
    const i = index(s);
    expect(i.tasks.find((x) => x.rule === "relance-saison")?.title).toBe("Relance de saison : Julie");
    expect(seasonalRelaunchesFrom(i, NOW)).toEqual([
      expect.objectContaining({ clientId: id, key: `auto:relance-saison:${id}:2026-09-01`, season: { kind: "chauffage", start: "2026-09-01", end: "2027-04-01" }, channels: { sms: true, email: true } }),
    ]);
    s.crm.taskState[`auto:relance-saison:${id}:2026-09-01`] = { doneAt: NOW.toISOString() };
    expect(seasonalRelaunchesFrom(index(s), NOW)).toEqual([]);
    delete s.crm.taskState[`auto:relance-saison:${id}:2026-09-01`];
    s.crm.seasonConsents[id] = { ...s.crm.seasonConsents[id], withdrawnAt: "2026-08-01T12:00:00.000Z", withdrawnBy: "proprio@exemple.ca" };
    expect(seasonalRelaunchesFrom(index(s), NOW)).toEqual([]);
    expect(index(s).tasks.find((x) => x.rule === "relance-saison")?.title).toMatch(/à la main/);
  });

  it("hors de la saison de relance : rien (avant son début, ou une fois la saison suivante commencée)", () => {
    const s = src({ quotes: [lostQuote()] });
    expect(rules(s, new Date("2026-08-20T15:00:00Z"))).not.toContain("relance-saison");
    expect(rules(s, new Date("2027-04-02T15:00:00Z"))).not.toContain("relance-saison");
  });
});
