/* Billets de service (règles pures) et tâches automatiques du volet A dans le CRM. */
import { describe, expect, it } from "vitest";
import { AUTO_TASK_RE } from "../../crm/types";
import { partnerAutoTasks } from "../../partenaires/crm-tasks";
import { emptyPartenaires, emptyPartner } from "../../partenaires/store";
import { assign, classify, isLate, newTicketDue, planVisit, recordSatisfaction, resolve, TicketError } from "../rules";
import type { ServiceTicket } from "../types";

const NOW = new Date("2026-09-20T15:00:00Z");

function ticket(over: Partial<ServiceTicket> = {}): ServiceTicket {
  return { id: "b_ticket0001", number: 1, jobId: "j_job0000001", installerId: "i_install0001", source: "client", createdAt: NOW.toISOString(), createdBy: "client", description: "Fuite d’eau", contactPreference: "", photos: [], cause: null, causeNote: "", status: "nouveau", dueAt: newTicketDue(NOW, 48), events: [], updatedAt: NOW.toISOString(), ...over };
}

describe("billets de service", () => {
  it("cycle complet : cause, assignation, visite, résolution, client satisfait → fermé", () => {
    const t = ticket();
    expect(t.dueAt).toBe("2026-09-22T15:00:00.000Z");
    classify(t, "main-oeuvre", "raccord mal serré", "p", NOW);
    assign(t, "p", NOW);
    expect(t.status).toBe("assigne");
    planVisit(t, "2026-09-21T13:00:00.000Z", "installateur:i_install0001", NOW);
    expect(t.status).toBe("planifie");
    expect(() => resolve(t, "", "x", NOW)).toThrow(TicketError);
    resolve(t, "Raccord resserré, essai d’étanchéité refait.", "installateur:i_install0001", NOW);
    expect(t.status).toBe("resolu");
    recordSatisfaction(t, true, "", "client", "client", NOW);
    expect(t.status).toBe("ferme");
    expect(t.closedAt).toBe(NOW.toISOString());
  });

  it("client insatisfait : le billet est rouvert (assigné), suivi jusqu'à satisfaction", () => {
    const t = ticket({ status: "resolu", cause: "appareil", resolution: { at: NOW.toISOString(), by: "x", note: "x" } });
    recordSatisfaction(t, false, "Ça coule encore", "client", "client", NOW);
    expect(t.status).toBe("assigne");
    expect(t.satisfaction).toMatchObject({ satisfied: false, note: "Ça coule encore" });
  });

  it("assignation impossible sans installateur d'origine ; retard de prise en charge", () => {
    expect(() => assign(ticket({ installerId: null }), "p", NOW)).toThrow(TicketError);
    const t = ticket({ status: "assigne" });
    expect(isLate(t, NOW)).toBe(false);
    expect(isLate(t, new Date("2026-09-23T00:00:00Z"))).toBe(true);
    planVisit(t, "2026-09-24T13:00:00.000Z", "p", NOW);
    expect(isLate(t, new Date("2026-09-23T00:00:00Z"))).toBe(false);
  });
});

describe("tâches automatiques du volet A", () => {
  const installers = [{ id: "i_install0001", company: "Clim Exemple", createdAt: "2026-01-10T12:00:00.000Z", active: true }];

  it("billet à classer (rattaché au job), documents qui expirent, entente à envoyer ; clés valides", () => {
    const partners = emptyPartenaires();
    partners.agreements.push({ id: "a_version0001", number: 1, title: "E", preamble: "", articles: [{ title: "O", paragraphs: ["T"] }], status: "publiee", createdAt: "2026-09-01T12:00:00.000Z", createdBy: "p", updatedAt: "2026-09-01T12:00:00.000Z", updatedBy: "p", validatedAt: "2026-09-01T12:00:00.000Z", publishedAt: "2026-09-01T12:00:00.000Z", graceDays: 14 });
    const p = emptyPartner("i_install0001");
    p.compliance.rbq.expiresOn = "2026-10-05";
    p.compliance.assurance.expiresOn = "2026-09-01";
    partners.partners["i_install0001"] = p;
    const tasks = partnerAutoTasks({ partners, sav: { version: 1, tickets: [ticket()], links: [] }, installers }, NOW);
    const titles = tasks.map((t) => t.title);
    expect(titles).toContain("Classer la cause du billet n° 1");
    expect(titles).toContain("Licence RBQ de Clim Exemple : expire le 5 octobre 2026");
    expect(titles).toContain("Assurance responsabilité de Clim Exemple expirée");
    expect(titles).toContain("Envoyer l’entente à Clim Exemple");
    expect(tasks.find((t) => t.rule === "sav-billet")?.jobId).toBe("j_job0000001");
    for (const t of tasks) expect(t.key).toMatch(AUTO_TASK_RE);
  });

  it("sans données du volet A (anciens tests, données de démonstration) : aucune tâche", () => {
    expect(partnerAutoTasks(undefined, NOW)).toEqual([]);
  });
});
