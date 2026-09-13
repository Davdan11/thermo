/* Étapes : chaque règle, étape manuelle qui tient jusqu'au progrès, perdue et réactivation, ordre de l'historique. */
import { describe, expect, it } from "vitest";
import { hashKey } from "../identity";
import { buildBundles } from "../model";
import { inferStage } from "../stage";
import { emptyCrm } from "../store";
import type { CrmData, SourceData, Stage } from "../types";
import { conv, daysAgo, entry, hoursAgo, iso, job, msg, NOW, quote, src } from "./fixtures";

const PHONE = "514 555-0142";
const E164 = "+15145550142";
const EMAIL = "julie@exemple.ca";
const who = { firstName: "Julie", lastName: "Tremblay", email: EMAIL, phone: PHONE };
const stageOf = (s: SourceData, now = NOW) => inferStage(buildBundles(s)[0], now);
const demand = (at = daysAgo(10)) => entry("soumission", at, { firstName: "Julie", email: EMAIL, phone: PHONE });

function withRecord(s: SourceData, stage: Stage, at: Date, reason = ""): SourceData {
  const [b] = buildBundles(s);
  const crm: CrmData = emptyCrm();
  crm.clients[b.id] = {
    id: b.id,
    keys: [hashKey(`p:${E164}`)],
    stageOverride: { stage, at: iso(at), by: "proprio@exemple.ca" },
    stageLog: [{ at: iso(at), by: "proprio@exemple.ca", from: null, to: stage, ...(reason ? { reason } : {}) }],
    ...(stage === "perdue" ? { lost: { reason, at: iso(at) } } : {}),
    tags: [],
    notes: [],
    createdAt: iso(at),
    updatedAt: iso(at),
  };
  return { ...s, crm };
}

describe("étape automatique", () => {
  it("nouvelle demande", () => {
    expect(stageOf(src({ journal: [demand()] })).stage).toBe("nouvelle");
  });

  it("contacté : texto sortant du propriétaire, rendez-vous, appel enregistré ou note « appel » ; pas l'accusé automatique", () => {
    const auto = conv(E164, [msg("in", daysAgo(9), "Bonjour"), msg("out", daysAgo(9), "Merci pour votre message", { auto: "accuse", status: "auto" })]);
    expect(stageOf(src({ journal: [demand()], textos: [auto] })).stage).toBe("nouvelle");
    const manual = conv(E164, [msg("in", daysAgo(9), "Bonjour"), msg("out", daysAgo(8), "Je vous appelle demain", { by: "proprio@exemple.ca", status: "delivered" })]);
    expect(stageOf(src({ journal: [demand()], textos: [manual] })).stage).toBe("contacte");
    expect(stageOf(src({ journal: [demand(), entry("rendez-vous", daysAgo(8), { firstName: "Julie", phone: PHONE })] })).stage).toBe("contacte");
    expect(stageOf(src({ journal: [demand(), entry("appel-enregistre", daysAgo(8), { phone: E164 })] })).stage).toBe("contacte");
    const s = withRecord(src({ journal: [demand()] }), "nouvelle", daysAgo(9));
    s.crm.clients[Object.keys(s.crm.clients)[0]].stageOverride = undefined;
    s.crm.clients[Object.keys(s.crm.clients)[0]].notes.push({ id: "n_testnote01", at: iso(daysAgo(7)), by: "proprio@exemple.ca", text: "Appelée, rappel lundi", kind: "appel" });
    expect(stageOf(s).stage).toBe("contacte");
  });

  it("soumission envoyée, ouverte, acceptée", () => {
    expect(stageOf(src({ journal: [demand()], quotes: [quote({ client: who, sentAt: daysAgo(5) })] })).stage).toBe("soumission-envoyee");
    expect(stageOf(src({ journal: [demand()], quotes: [quote({ client: who, sentAt: daysAgo(5), viewedAt: daysAgo(4) })] })).stage).toBe("ouverte");
    const s = stageOf(src({ journal: [demand()], quotes: [quote({ client: who, sentAt: daysAgo(5), viewedAt: daysAgo(4), acceptedAt: daysAgo(3) })] }));
    expect(s.stage).toBe("acceptee");
    expect(s.since).toBe(iso(daysAgo(3)));
  });

  it("jobs : nouveau = acceptée, planifié, terminé", () => {
    expect(stageOf(src({ jobs: [job({ client: who, status: "offert" })] })).stage).toBe("acceptee");
    expect(stageOf(src({ jobs: [job({ client: who, status: "planifie", scheduledFor: "2026-09-20" })] })).stage).toBe("planifiee");
    expect(stageOf(src({ jobs: [job({ client: who, status: "termine" })] })).stage).toBe("terminee");
  });

  it("perdue : dernière soumission refusée et aucune autre ouverte", () => {
    const refused = quote({ client: who, sentAt: daysAgo(6), viewedAt: daysAgo(5), refusedAt: daysAgo(4), reason: "Trop cher" });
    const s = stageOf(src({ journal: [demand()], quotes: [refused] }));
    expect(s.stage).toBe("perdue");
    expect(s.lost).toMatchObject({ reason: "Soumission refusée", detail: "Trop cher", auto: true });
    const other = quote({ client: who, sentAt: daysAgo(2) });
    expect(stageOf(src({ journal: [demand()], quotes: [refused, other] })).stage).toBe("soumission-envoyee");
  });

  it("une soumission expirée ne rend pas perdu", () => {
    const q = quote({ client: who, sentAt: daysAgo(40), validUntil: "2026-09-01" });
    expect(stageOf(src({ quotes: [q] })).stage).toBe("soumission-envoyee");
  });

  it("perdue : tous les jobs annulés", () => {
    expect(stageOf(src({ jobs: [job({ client: who, status: "annule" })] })).stage).toBe("perdue");
  });
});

describe("étape choisie à la main", () => {
  it("tient jusqu'à ce qu'un événement plus récent donne une étape plus haute", () => {
    const base = src({ journal: [demand()], quotes: [quote({ client: who, sentAt: daysAgo(6), viewedAt: daysAgo(5) })] });
    const held = stageOf(withRecord(base, "contacte", daysAgo(4)));
    expect(held).toMatchObject({ stage: "contacte", manual: true });
    // Une nouvelle consultation n'est pas une étape plus haute qu'« ouverte » déjà atteinte avant le choix… mais l'acceptation l'est.
    const accepted = src({ journal: [demand()], quotes: [quote({ client: who, sentAt: daysAgo(6), viewedAt: daysAgo(5), acceptedAt: daysAgo(1) })] });
    expect(stageOf(withRecord(accepted, "contacte", daysAgo(4)))).toMatchObject({ stage: "acceptee", manual: false });
    // Une étape manuelle plus haute tient face à des événements plus bas.
    const up = stageOf(withRecord(base, "planifiee", daysAgo(4)));
    expect(up.stage).toBe("planifiee");
  });

  it("perdue tient jusqu'à une nouvelle demande entrante : réactivé, repart de « Nouvelle demande »", () => {
    const base = src({ journal: [demand(daysAgo(20))], quotes: [quote({ client: who, sentAt: daysAgo(15) })] });
    const lost = stageOf(withRecord(base, "perdue", daysAgo(10), "A choisi un concurrent"));
    expect(lost).toMatchObject({ stage: "perdue", manual: true, lost: { reason: "A choisi un concurrent" } });
    const back = { ...base, journal: [...base.journal, entry("appel-manque", hoursAgo(3), { phone: E164 })] };
    const s = stageOf(withRecord(back, "perdue", daysAgo(10), "A choisi un concurrent"));
    expect(s.stage).toBe("nouvelle");
    expect(s.reactivatedAt).toBe(iso(hoursAgo(3)));
    expect(s.history.some((h) => h.reactivated)).toBe(true);
    // Un texto reçu réactive aussi.
    const texto = { ...base, textos: [conv(E164, [msg("in", hoursAgo(2), "Finalement, êtes-vous disponible ?")])] };
    expect(stageOf(withRecord(texto, "perdue", daysAgo(10), "Plus tard")).stage).toBe("nouvelle");
  });

  it("historique en ordre chronologique : transitions automatiques et choix manuels", () => {
    const base = src({ journal: [demand(daysAgo(10))], quotes: [quote({ client: who, sentAt: daysAgo(8), viewedAt: daysAgo(7), acceptedAt: daysAgo(2) })] });
    const s = stageOf(withRecord(base, "contacte", daysAgo(5)));
    const ats = s.history.map((h) => h.at);
    expect([...ats].sort()).toEqual(ats);
    expect(s.history.map((h) => h.stage)).toEqual(["nouvelle", "soumission-envoyee", "ouverte", "contacte", "acceptee"]);
    expect(s.history.find((h) => !h.auto)).toMatchObject({ stage: "contacte", by: "proprio@exemple.ca" });
  });
});
