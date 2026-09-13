/* Grille des 30 jours, fuseau de Montréal (heure d'été et heure normale), rotation, statuts de départ, UTM. */
import { describe, expect, it } from "vitest";
import { composeCaption, HASHTAGS_MAX } from "../captions";
import { initialStatus, planDays } from "../planner";
import { pickCandidate } from "../rotation";
import { canEnableAuto, normalizeSettings } from "../series";
import { addDays, daysBetween, weekdayOf, zonedToUtc } from "../time";
import { trackedUrl } from "../utm";
import type { Post } from "../types";
import { emptyData, fixtureCatalog } from "./fixtures";

const cat = fixtureCatalog();
const GRID: Record<number, string | null> = { 0: null, 1: "modele", 2: "question", 3: "froid", 4: "logisvert", 5: "comparatif", 6: "glossaire" };

describe("fuseau America/Montreal", () => {
  it("heure d’été (UTC−4) et heure normale (UTC−5), à l’automne", () => {
    // Fin de l'heure d'été : dimanche 1er novembre 2026.
    expect(zonedToUtc("2026-10-26", "11:30").toISOString()).toBe("2026-10-26T15:30:00.000Z");
    expect(zonedToUtc("2026-11-02", "11:30").toISOString()).toBe("2026-11-02T16:30:00.000Z");
  });

  it("au printemps (retour de l’heure d’été le 14 mars 2027)", () => {
    expect(zonedToUtc("2027-03-08", "12:00").toISOString()).toBe("2027-03-08T17:00:00.000Z");
    expect(zonedToUtc("2027-03-15", "12:00").toISOString()).toBe("2027-03-15T16:00:00.000Z");
  });

  it("jours de semaine et calcul des dates", () => {
    expect(weekdayOf("2026-09-14")).toBe(1);
    expect(addDays("2026-10-31", 2)).toBe("2026-11-02");
    expect(daysBetween("2026-12-30", "2027-01-02")).toBe(3);
  });
});

describe("préparer les 30 prochains jours", () => {
  it("suit la grille (dim rien) et place chaque publication à son heure, de part et d’autre du changement d’heure", () => {
    const now = new Date("2026-10-25T12:00:00Z"); // dimanche
    const { created } = planDays(emptyData(), cat, now, 30);
    expect(created.length).toBe(25); // 30 jours moins 5 dimanches (25 oct. … 22 nov.)
    for (const p of created) {
      expect(GRID[weekdayOf(p.date)]).toBe(p.series);
      expect(p.date >= "2026-10-25" && p.date <= "2026-11-23").toBe(true);
    }
    const oct = created.find((p) => p.date === "2026-10-26")!;
    const nov = created.find((p) => p.date === "2026-11-02")!;
    expect(oct.scheduledAt).toBe("2026-10-26T15:30:00.000Z");
    expect(nov.scheduledAt).toBe("2026-11-02T16:30:00.000Z");
    const sat = created.find((p) => p.series === "glossaire")!;
    expect(sat.scheduledAt.slice(11, 16)).toBe(sat.date < "2026-11-01" ? "14:00" : "15:00");
  });

  it("saute un créneau déjà passé aujourd’hui et n’écrase jamais l’existant", () => {
    const now = new Date("2026-09-14T16:00:00Z"); // lundi, 12 h à Montréal : 11 h 30 est passé
    const data = emptyData();
    const first = planDays(data, cat, now, 30);
    expect(first.created[0].date).toBe("2026-09-15");
    data.posts.push(...first.created);
    expect(planDays(data, cat, now, 30).created).toEqual([]);
  });

  it("heures réglables", () => {
    const data = emptyData();
    data.settings.series.modele.time = "08:05";
    const { created } = planDays(data, cat, new Date("2026-09-13T12:00:00Z"), 7);
    expect(created.find((p) => p.series === "modele")!.scheduledAt).toBe("2026-09-14T12:05:00.000Z");
  });

  it("une série désactivée n’est pas préparée", () => {
    const data = emptyData();
    data.settings.series.froid.enabled = false;
    const { created, skipped } = planDays(data, cat, new Date("2026-09-13T12:00:00Z"), 14);
    expect(created.some((p) => p.series === "froid")).toBe(false);
    expect(skipped.some((s) => s.series === "froid")).toBe(true);
  });
});

describe("approbation obligatoire, automatique seulement après une approbation", () => {
  it("par défaut : à approuver ; question : brouillon vide", () => {
    const { created } = planDays(emptyData(), cat, new Date("2026-09-13T12:00:00Z"), 7);
    for (const p of created) expect(p.status).toBe(p.series === "question" ? "brouillon" : "a_approuver");
    const q = created.find((p) => p.series === "question")!;
    expect(q.text).toBe("");
  });

  it("automatique demandé sans approbation préalable : refusé", () => {
    const data = emptyData();
    data.settings.series.modele.auto = true;
    expect(canEnableAuto("modele", data.approvals).ok).toBe(false);
    expect(initialStatus("modele", data).status).toBe("a_approuver");
  });

  it("après une première approbation de la série : planifiée d’office", () => {
    const data = emptyData();
    data.approvals.modele = { at: "2026-09-10T12:00:00Z", by: "proprio@exemple.ca", postId: "p-20260907-modele" };
    data.settings.series.modele.auto = true;
    expect(canEnableAuto("modele", data.approvals).ok).toBe(true);
    const { created } = planDays(data, cat, new Date("2026-09-13T12:00:00Z"), 7);
    const m = created.find((p) => p.series === "modele")!;
    expect(m.status).toBe("planifiee");
    expect(m.approvedBy).toMatch(/automatique/);
    expect(created.find((p) => p.series === "froid")!.status).toBe("a_approuver");
  });

  it("question : jamais automatique, même approuvée et forcée dans le fichier", () => {
    const data = emptyData();
    data.approvals.question = { at: "2026-09-10T12:00:00Z", by: "proprio@exemple.ca", postId: "p-20260908-question" };
    expect(canEnableAuto("question", data.approvals).ok).toBe(false);
    const forced = normalizeSettings({ ...data.settings, series: { ...data.settings.series, question: { enabled: true, auto: true, time: "12:00", story: false } } });
    expect(forced.series.question.auto).toBe(false);
    data.settings.series.question.auto = true;
    expect(initialStatus("question", data).status).toBe("brouillon");
  });

  it("chantier : réservée, jamais préparée", () => {
    const forced = normalizeSettings({ series: { chantier: { enabled: true, auto: true, time: "11:30", story: false } } } as never);
    expect(forced.series.chantier.enabled).toBe(false);
    const { created } = planDays({ ...emptyData(), settings: forced }, cat, new Date("2026-09-13T12:00:00Z"), 30);
    expect(created.some((p) => p.series === "chantier")).toBe(false);
  });
});

describe("rotation", () => {
  const conflicts = (posts: Post[], prefix: string, weeks: number) => {
    const out: string[] = [];
    for (const a of posts)
      for (const b of posts) {
        if (a.id >= b.id) continue;
        const shared = a.rotationKeys.filter((k) => k.startsWith(prefix) && b.rotationKeys.includes(k));
        if (shared.length && Math.abs(daysBetween(a.date, b.date)) < weeks * 7) out.push(`${a.id}/${b.id}:${shared.join(",")}`);
      }
    return out;
  };

  it("pas la même ville ni le même terme avant N semaines (8 par défaut)", () => {
    const data = emptyData();
    const { created } = planDays(data, cat, new Date("2026-09-13T12:00:00Z"), 140);
    expect(created.filter((p) => p.series === "froid").length).toBeGreaterThanOrEqual(19);
    expect(conflicts(created, "ville:", 8)).toEqual([]);
    expect(conflicts(created, "terme:", 8)).toEqual([]);
  });

  it("pas le même modèle, toutes séries confondues, avant N semaines (réglable)", () => {
    const data = emptyData();
    data.settings.rotationWeeks = 2;
    const { created } = planDays(data, cat, new Date("2026-09-13T12:00:00Z"), 56);
    expect(conflicts(created, "model:", 2)).toEqual([]);
  });

  it("choix déterministe, et repli sur le sujet le moins récent quand tout est pris", () => {
    const posts = ["a", "b", "c"].map((k, i) => ({ id: `p-2026090${i + 1}-froid`, date: `2026-09-0${i + 1}`, status: "planifiee", rotationKeys: [`ville:${k}`] })) as Post[];
    const opts = { candidates: ["a", "b", "c"], keysOf: (c: string) => [`ville:${c}`], posts, date: "2026-09-10", weeks: 8, seed: "s" };
    expect(pickCandidate(opts)).toBe("a");
    expect(pickCandidate({ ...opts, candidates: ["a", "b", "c", "d"] })).toBe("d");
    expect(pickCandidate({ ...opts, candidates: ["a", "b", "c", "d", "e"], seed: "x" })).toBe(pickCandidate({ ...opts, candidates: ["a", "b", "c", "d", "e"], seed: "x" }));
  });
});

describe("liens suivis (UTM) et légendes par réseau", () => {
  it("paramètres UTM complets, ancre conservée à la fin", () => {
    const u = new URL(trackedUrl("/produit/nordik-xr100", "facebook", "modele", "p-20260914-modele", "https://exemple.ca"));
    expect(u.searchParams.get("utm_source")).toBe("facebook");
    expect(u.searchParams.get("utm_medium")).toBe("social");
    expect(u.searchParams.get("utm_campaign")).toBe("modele");
    expect(u.searchParams.get("utm_content")).toBe("p-20260914-modele");
    const g = trackedUrl("/glossaire#hspf2", "instagram", "glossaire", "p-20260919-glossaire", "https://exemple.ca");
    expect(g).toMatch(/^https:\/\/exemple\.ca\/glossaire\?utm_source=instagram&utm_medium=social&utm_campaign=glossaire&utm_content=p-20260919-glossaire#hspf2$/);
    const c = new URL(trackedUrl("/comparer?models=a,b", "facebook", "comparatif", "p-20260918-comparatif", "https://exemple.ca"));
    expect(c.searchParams.get("models")).toBe("a,b");
  });

  it("Facebook : lien cliquable ; Instagram : « Lien dans la bio » avec la page nommée ; mots-clics sobres", () => {
    const { created } = planDays(emptyData(), cat, new Date("2026-09-13T12:00:00Z"), 7);
    for (const p of created.filter((x) => x.series !== "question")) {
      const fb = composeCaption(p, "facebook");
      const ig = composeCaption(p, "instagram");
      expect(fb).toContain(`utm_source=facebook&utm_medium=social&utm_campaign=${p.series}&utm_content=${p.id}`);
      expect(ig).not.toMatch(/https?:\/\//);
      expect(ig).toContain(`Lien dans la bio : page « ${p.link.label} »`);
      expect((fb.replace(/https?:\/\/\S+/g, "").match(/#\p{L}+/gu) ?? []).length).toBeLessThanOrEqual(HASHTAGS_MAX.facebook);
      expect((ig.match(/#\p{L}+/gu) ?? []).length).toBeLessThanOrEqual(HASHTAGS_MAX.instagram);
      expect(ig).toContain("#thermopompe");
    }
  });
});
