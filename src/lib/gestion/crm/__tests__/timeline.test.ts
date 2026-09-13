/* Chronologie : du plus récent au plus ancien, libellés de chaque source. */
import { describe, expect, it } from "vitest";
import { hashKey } from "../identity";
import { buildBundles } from "../model";
import { emptyCrm } from "../store";
import { buildTimeline } from "../timeline";
import { conv, daysAgo, entry, hoursAgo, iso, job, msg, NOW, quote, src } from "./fixtures";

describe("chronologie", () => {
  it("ordre et libellés", () => {
    const julie = { firstName: "Julie", lastName: "Tremblay", email: "julie@exemple.ca", phone: "514 555-0142" };
    const d = entry("soumission", daysAgo(10), { firstName: "Julie", email: julie.email, phone: julie.phone }, { attribution: { channel: "google-ads" } });
    const q = quote({ client: julie, sentAt: daysAgo(8), viewedAt: daysAgo(7), acceptedAt: daysAgo(6) });
    const j = job({ client: julie, createdAt: iso(daysAgo(5)) });
    const c = conv("+15145550142", [msg("in", daysAgo(4), "Merci !"), msg("out", daysAgo(4), "Au plaisir", { by: "proprio@exemple.ca", status: "delivered" })]);
    const s = src({ journal: [d], quotes: [q], jobs: [j], textos: [c], outcomes: new Map([[d.id, { pipedrive: "ok" as const, dealId: 4321 }]]) });
    const [b0] = buildBundles(s);
    const crm = emptyCrm();
    crm.clients[b0.id] = { id: b0.id, keys: [hashKey("p:+15145550142")], stageLog: [{ at: iso(hoursAgo(1)), by: "proprio@exemple.ca", from: "acceptee", to: "planifiee" }], tags: [], notes: [{ id: "n_testnote01", at: iso(hoursAgo(2)), by: "proprio@exemple.ca", text: "Installation confirmée pour jeudi", kind: "note" }], createdAt: iso(hoursAgo(2)), updatedAt: iso(hoursAgo(1)) };
    const [b] = buildBundles({ ...s, crm });
    const items = buildTimeline(b, { now: NOW });
    const ats = items.map((i) => i.at);
    expect([...ats].sort().reverse()).toEqual(ats);
    const titles = items.map((i) => i.title);
    expect(titles[0]).toBe("Étape : Planifiée");
    expect(titles[1]).toBe("Note");
    expect(titles).toEqual(expect.arrayContaining(["Demande de soumission", `Soumission ${q.number} envoyée`, `Soumission ${q.number} ouverte par le client`, `Soumission ${q.number} acceptée`, `Job n° ${j.number} créé`, "Texto reçu", "Texto envoyé", "Affaire Pipedrive n° 4321"]));
    expect(items.find((i) => i.title === "Demande de soumission")?.detail).toBe("Google Ads");
    expect(items.find((i) => i.kind === "acceptation")?.detail).toMatch(/taxes comprises$/);
    expect(items.at(-1)?.title).toBe("Demande de soumission");
  });
});
