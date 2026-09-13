/* Tâches : seuils, heures ouvrables de Montréal (heure d'été comprise), reporter, tâche faite qui revient après une nouvelle activité. */
import { describe, expect, it } from "vitest";
import { buildBundles, computeIndex } from "../model";
import { emptyCrm } from "../store";
import { bucketTasks } from "../tasks";
import { addBusinessHours, snoozeUntil } from "../time";
import type { SourceData } from "../types";
import { conv, daysAgo, entry, hoursAgo, iso, job, msg, NOW, quote, src } from "./fixtures";

const PHONE = "514 555-0142";
const E164 = "+15145550142";
const who = { firstName: "Julie", lastName: "Tremblay", email: "julie@exemple.ca", phone: PHONE };
const tasksOf = (s: SourceData, now = NOW) => computeIndex(buildBundles(s), s, now).tasks;
const rules = (s: SourceData, now = NOW) => tasksOf(s, now).map((t) => t.rule);

describe("heures ouvrables (8 h à 18 h, lundi au vendredi, Montréal)", () => {
  const at = (s: string) => addBusinessHours(new Date(s), 2).toISOString();
  it("dans la journée, en soirée, la fin de semaine, tôt le matin", () => {
    expect(at("2026-09-16T14:00:00Z")).toBe("2026-09-16T16:00:00.000Z"); // mercredi 10 h → 12 h
    expect(at("2026-09-18T21:00:00Z")).toBe("2026-09-21T13:00:00.000Z"); // vendredi 17 h : 1 h vendredi + 1 h lundi → lundi 9 h
    expect(at("2026-09-18T23:00:00Z")).toBe("2026-09-21T14:00:00.000Z"); // vendredi 19 h → lundi 10 h
    expect(at("2026-09-19T14:00:00Z")).toBe("2026-09-21T14:00:00.000Z"); // samedi → lundi 10 h
    expect(at("2026-09-15T10:00:00Z")).toBe("2026-09-15T14:00:00.000Z"); // mardi 6 h → 10 h
  });
  it("changements d'heure : fin et début de l'heure d'été", () => {
    expect(at("2026-10-30T21:30:00Z")).toBe("2026-11-02T14:30:00.000Z"); // ven. 17 h 30 HAE → lun. 9 h 30 HNE
    expect(at("2027-03-12T22:00:00Z")).toBe("2027-03-15T13:00:00.000Z"); // ven. 17 h HNE → lun. 9 h HAE
  });
});

describe("règles", () => {
  it("rappel d'une nouvelle demande : +2 heures ouvrables ; disparaît après un texto du propriétaire", () => {
    const d = entry("soumission", hoursAgo(1), { firstName: "Julie", phone: PHONE });
    const [t] = tasksOf(src({ journal: [d] }));
    expect(t).toMatchObject({ rule: "rappel-nouveau", family: "rappels", title: "Rappeler Julie", dueAt: "2026-09-16T16:00:00.000Z" });
    const answered = conv(E164, [msg("out", hoursAgo(0.5), "Bonjour Julie, je vous rappelle à 14 h", { by: "proprio@exemple.ca", status: "delivered" })]);
    expect(rules(src({ journal: [d], textos: [answered] }))).not.toContain("rappel-nouveau");
  });

  it("appel manqué : maintenant ; réglé par un appel enregistré ensuite", () => {
    const missed = entry("appel-manque", hoursAgo(2), { phone: E164 });
    expect(tasksOf(src({ journal: [missed] }))[0]).toMatchObject({ rule: "rappel-appel", dueAt: iso(hoursAgo(2)) });
    expect(rules(src({ journal: [missed, entry("appel-enregistre", hoursAgo(1), { phone: E164 })] }))).toEqual([]);
  });

  it("texto non lu", () => {
    const c = conv(E164, [msg("in", hoursAgo(1), "Avez-vous des disponibilités ?")], { unread: 1 });
    expect(tasksOf(src({ textos: [c] }))[0]).toMatchObject({ rule: "texto-non-lu", family: "textos", href: `/gestion/textos/${c.id}` });
  });

  it("soumission ouverte sans réponse : relance après 3 jours", () => {
    const recent = quote({ client: who, sentAt: daysAgo(3), viewedAt: daysAgo(2) });
    const [t] = tasksOf(src({ quotes: [recent] }));
    expect(t).toMatchObject({ rule: "relance-ouverte", dueAt: iso(daysAgo(-1)) });
    expect(bucketTasks([t], NOW).upcoming).toHaveLength(1);
    const old = quote({ client: who, sentAt: daysAgo(6), viewedAt: daysAgo(5) });
    const [t2] = tasksOf(src({ quotes: [old] }));
    expect(bucketTasks([t2], NOW).overdue).toHaveLength(1);
  });

  it("envoyée depuis 2 jours, jamais ouverte", () => {
    expect(rules(src({ quotes: [quote({ client: who, sentAt: daysAgo(1) })] }))).toContain("envoyee-non-ouverte");
    const [t] = tasksOf(src({ quotes: [quote({ client: who, sentAt: daysAgo(3) })] }));
    expect(t.rule).toBe("envoyee-non-ouverte");
    expect(Date.parse(t.dueAt)).toBeLessThan(NOW.getTime());
  });

  it("question du client après la dernière action", () => {
    expect(rules(src({ quotes: [quote({ client: who, sentAt: daysAgo(3), viewedAt: daysAgo(2), questionAt: hoursAgo(5) })] }))).toContain("question-client");
  });

  it("soumission qui expire dans 3 jours, et soumission expirée", () => {
    expect(rules(src({ quotes: [quote({ client: who, sentAt: daysAgo(20), viewedAt: daysAgo(19), validUntil: "2026-09-18" })] }))).toContain("soumission-expire");
    expect(rules(src({ quotes: [quote({ client: who, sentAt: daysAgo(20), viewedAt: daysAgo(19), validUntil: "2026-09-25" })] }))).not.toContain("soumission-expire");
    const expired = tasksOf(src({ quotes: [quote({ client: who, sentAt: daysAgo(40), validUntil: "2026-09-10" })] }));
    expect(expired.find((t) => t.rule === "soumission-expire")?.title).toContain("expirée");
  });

  it("job sans preneur : offres en attente après 48 h, nouveau depuis 24 h sans offre ; job à planifier", () => {
    const offered = job({
      client: who,
      status: "offert",
      createdAt: iso(daysAgo(3)),
      offers: [{ id: "o_testoffer01", installerId: "i_testinst001", sentAt: iso(hoursAgo(50)), channels: { email: "envoye", sms: "envoye" }, tokenHash: "x", expiresAt: iso(daysAgo(-1)), distanceKm: 10, response: null }],
    });
    expect(tasksOf(src({ jobs: [offered] }))[0]).toMatchObject({ rule: "job-sans-reponse", family: "jobs", dueAt: iso(hoursAgo(2)) });
    const fresh = job({ client: who, createdAt: iso(hoursAgo(25)) });
    expect(tasksOf(src({ jobs: [fresh] }))[0]).toMatchObject({ rule: "job-sans-reponse", dueAt: iso(hoursAgo(1)) });
    const assigned = job({ client: who, status: "attribue", assignedInstallerId: "i_testinst001", updatedAt: iso(daysAgo(4)) });
    expect(tasksOf(src({ jobs: [assigned] }))[0]).toMatchObject({ rule: "job-a-planifier", dueAt: iso(daysAgo(1)) });
  });
});

describe("faire et reporter", () => {
  it("une tâche faite disparaît et revient après une nouvelle activité ; une tâche reportée change d'échéance", () => {
    const first = entry("appel-manque", hoursAgo(5), { phone: E164 });
    const s = src({ journal: [first] });
    const [t] = tasksOf(s);
    const crm = emptyCrm();
    crm.taskState[t.key] = { doneAt: iso(hoursAgo(4)) };
    expect(tasksOf({ ...s, crm })).toHaveLength(0);
    const again = entry("appel-manque", hoursAgo(1), { phone: E164 });
    const back = tasksOf({ ...s, journal: [first, again], crm });
    expect(back).toHaveLength(1);
    expect(back[0].key).not.toBe(t.key);
    const snoozed = emptyCrm();
    snoozed.taskState[t.key] = { snoozedUntil: "2026-09-17T13:00:00.000Z" };
    expect(tasksOf({ ...s, crm: snoozed })[0]).toMatchObject({ dueAt: "2026-09-17T13:00:00.000Z", snoozed: true });
  });

  it("choix de report : 1 h, ce soir 18 h, demain 9 h, lundi 9 h, date au choix", () => {
    expect(snoozeUntil("1h", NOW)!.toISOString()).toBe("2026-09-16T16:00:00.000Z");
    expect(snoozeUntil("soir", NOW)!.toISOString()).toBe("2026-09-16T22:00:00.000Z");
    expect(snoozeUntil("soir", new Date("2026-09-16T23:00:00Z"))!.toISOString()).toBe("2026-09-17T22:00:00.000Z");
    expect(snoozeUntil("demain", NOW)!.toISOString()).toBe("2026-09-17T13:00:00.000Z");
    expect(snoozeUntil("lundi", NOW)!.toISOString()).toBe("2026-09-21T13:00:00.000Z");
    expect(snoozeUntil("date", NOW, "2026-09-24", "14:30")!.toISOString()).toBe("2026-09-24T18:30:00.000Z");
    expect(snoozeUntil("date", NOW, "2026-09-01")).toBeNull();
  });

  it("tâches manuelles : dans la fiche du client, et générales", () => {
    const d = entry("soumission", daysAgo(3), { firstName: "Julie", phone: PHONE });
    const s = src({ journal: [d] });
    const [b] = buildBundles(s);
    const crm = emptyCrm();
    crm.tasks.push({ id: "t_testtask001", clientId: b.id, title: "Envoyer la fiche technique", dueAt: iso(daysAgo(-1)), by: "proprio@exemple.ca", createdAt: iso(daysAgo(1)) });
    crm.tasks.push({ id: "t_testtask002", clientId: null, title: "Commander des supports", dueAt: iso(daysAgo(-2)), by: "proprio@exemple.ca", createdAt: iso(daysAgo(1)) });
    const index = computeIndex(buildBundles({ ...s, crm }), { ...s, crm }, NOW);
    expect(index.byId.get(b.id)!.tasks.map((t) => t.key)).toContain("t_testtask001");
    expect(index.tasks.find((t) => t.key === "t_testtask002")).toMatchObject({ clientId: null, family: "suivis" });
  });
});
