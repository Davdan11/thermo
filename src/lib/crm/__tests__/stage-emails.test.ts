import { describe, expect, it } from "vitest";
import { belongsToThisSite, contextFromDeal, detectEvent } from "../stage-emails";
import { STAGE_TEMPLATES, LOST_TEMPLATE, normalizeStageName, templateForStage } from "../templates/stage-emails";
import { PIPEDRIVE_FIELDS } from "../pipedrive";

const NAMES = [
  "Nouveau lead", "Tentative de contact #1", "Tentative de contact #2", "Qualifié / En attente RDV", "RDV Confirmé",
  "Soumission Envoyée", "Négociation / Relance", "À planifier (Contrat Signé)", "Matériel Commandé", "Date d'installation fixée",
  "Installation en cours", "Travaux terminés", "Subvention LogisVert (En attente)", "Facture payée", "Suivi Qualité (30 jours)", "Rappel Entretien (12 mois)",
];

describe("courriels d'étape Pipedrive", () => {
  it("reconnaît toutes les étapes du pipeline sauf « Nouveau lead »", () => {
    for (const n of NAMES) {
      const tpl = templateForStage(n);
      if (n === "Nouveau lead") expect(tpl).toBeNull();
      else expect(tpl, n).not.toBeNull();
    }
    expect(Object.keys(STAGE_TEMPLATES)).toHaveLength(NAMES.length - 1);
  });

  it("normalise les noms d'étape", () => {
    expect(normalizeStageName("Qualifié / En attente RDV")).toBe("qualifie en attente rdv");
    expect(normalizeStageName("Date d'installation fixée")).toBe("date d installation fixee");
  });

  it("rend un courriel complet, signé et personnalisé", () => {
    const ctx = { firstName: "Marie", projectType: "Murale 1 tête", region: "Estrie", brand: "Daikin", series: "Aurora", btu: "12 000", subsidy: "1 700" };
    for (const [name, tpl] of Object.entries(STAGE_TEMPLATES)) {
      const { subject, html } = tpl(ctx);
      expect(subject.length, name).toBeGreaterThan(8);
      expect(html).toContain("Bonjour Marie,");
      expect(html).toContain("headerlogo-720.webp");
      expect(html).toContain("438-900-3224");
      expect(html).toContain("info@thermopompesavendre.ca");
      expect(html).toContain("STOP");
      expect(html).not.toMatch(/undefined|NaN/);
    }
    expect(LOST_TEMPLATE(ctx).html).toContain("Daikin Aurora");
  });

  it("échappe les valeurs venant de Pipedrive", () => {
    const { html } = STAGE_TEMPLATES["soumission envoyee"]({ firstName: "<img src=x onerror=alert(1)>", brand: "<b>X</b>" });
    expect(html).not.toContain("<img src=x");
    expect(html).not.toContain("<b>X</b>");
  });

  it("détecte un changement d'étape, une perte, et ignore le reste", () => {
    expect(detectEvent({ id: 1, stage_id: 20, status: "open" }, { id: 1, stage_id: 19, status: "open" })).toEqual({ kind: "stage", stageId: 20 });
    expect(detectEvent({ id: 1, stage_id: 20, status: "lost" }, { id: 1, stage_id: 20, status: "open" })).toEqual({ kind: "lost" });
    expect(detectEvent({ id: 1, stage_id: 20, status: "open" }, { id: 1, stage_id: 20, status: "open" })).toBeNull();
    expect(detectEvent({ id: 1, stage_id: 20, status: "lost" }, { id: 1, stage_id: 20, status: "lost" })).toBeNull();
  });

  it("ne traite que les affaires de ce site", () => {
    expect(belongsToThisSite({ id: 1, title: "[TAV] Marie Tremblay" })).toBe(true);
    expect(belongsToThisSite({ id: 1, title: "[BE] Marie Tremblay" })).toBe(false);
    expect(belongsToThisSite({ id: 1, title: "Marie", [PIPEDRIVE_FIELDS.SITE]: "252" })).toBe(true);
    expect(belongsToThisSite({ id: 1, title: "[TAV] Marie", [PIPEDRIVE_FIELDS.SITE]: "253" })).toBe(false);
  });

  it("construit le contexte à partir des champs personnalisés", () => {
    const ctx = contextFromDeal({
      id: 1,
      owner_name: "David Danjou",
      [PIPEDRIVE_FIELDS.TYPE_PROJET]: "61",
      [PIPEDRIVE_FIELDS.REGION]: "73",
      [PIPEDRIVE_FIELDS.BTU_TOTAL]: "18000",
      [PIPEDRIVE_FIELDS.SUBVENTION_ESTIMEE]: 1700,
      [PIPEDRIVE_FIELDS.DATE_INSTALLATION]: "2026-09-24",
    }, "Marie");
    expect(ctx.projectType).toBe("Multizone 2+ têtes");
    expect(ctx.region).toBe("Montérégie");
    // Intl insère une espace fine insécable comme séparateur de milliers.
    const plain = (s?: string) => s?.replace(/[  ]/g, " ");
    expect(plain(ctx.btu)).toBe("18 000");
    expect(plain(ctx.subsidy)).toBe("1 700");
    expect(ctx.installDate).toMatch(/24 septembre 2026/);
    expect(ctx.advisorName).toBe("David");
  });
});
