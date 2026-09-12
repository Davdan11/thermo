import { describe, expect, it } from "vitest";
import {
  alertRequestSchema,
  amountsFromValues,
  diffSnapshots,
  formatDollars,
  formatRange,
  sameAmounts,
  targetKey,
  type AlertSnapshot,
  type ModelAmounts,
} from "../logisvert-alerts-core";
import { alertChangeEmail, alertChangeSubject, alertConfirmationEmail, listUnsubscribeHeaders } from "@/lib/crm/templates/logisvert-alert-email";

const snap = (models: Record<string, ModelAmounts>, listUpdatedAt = "2026-09-10T23:03:27.622Z"): AlertSnapshot => ({ listUpdatedAt, models });
const A = (min: number, max: number, n: number): ModelAmounts => ({ min, max, n });
const OUT = A(0, 0, 0);

describe("alertRequestSchema", () => {
  const base = { email: "  Marie@Exemple.CA ", target: { kind: "model", modelId: "daikin-ftx12axvju" }, consent: true };

  it("accepte un modèle, normalise le courriel et ignore un prénom vide", () => {
    const r = alertRequestSchema.safeParse({ ...base, firstName: "", website: "" });
    expect(r.success).toBe(true);
    if (!r.success) return;
    expect(r.data.email).toBe("marie@exemple.ca");
    expect(r.data.firstName).toBeUndefined();
    expect(r.data.target).toEqual({ kind: "model", modelId: "daikin-ftx12axvju" });
  });

  it("accepte une marque", () => {
    const r = alertRequestSchema.safeParse({ ...base, target: { kind: "brand", brandSlug: "mitsubishi-electric" }, firstName: " Luc " });
    expect(r.success).toBe(true);
    if (r.success) expect(r.data.firstName).toBe("Luc");
  });

  it("exige le consentement explicite", () => {
    expect(alertRequestSchema.safeParse({ ...base, consent: false }).success).toBe(false);
    const { consent: _c, ...sans } = base;
    void _c;
    expect(alertRequestSchema.safeParse(sans).success).toBe(false);
  });

  it("refuse un courriel invalide, une cible inconnue ou mal formée", () => {
    expect(alertRequestSchema.safeParse({ ...base, email: "pas-un-courriel" }).success).toBe(false);
    expect(alertRequestSchema.safeParse({ ...base, target: { kind: "serie", id: "x" } }).success).toBe(false);
    expect(alertRequestSchema.safeParse({ ...base, target: { kind: "brand", brandSlug: "Daikin Inc" } }).success).toBe(false);
    expect(alertRequestSchema.safeParse({ ...base, target: { kind: "model", modelId: "../../etc/passwd" } }).success).toBe(false);
    expect(alertRequestSchema.safeParse({ ...base, target: { kind: "model" } }).success).toBe(false);
  });

  it("signale le pot de miel rempli sur le champ website", () => {
    const r = alertRequestSchema.safeParse({ ...base, website: "http://spam" });
    expect(r.success).toBe(false);
    if (!r.success) expect(r.error.issues[0].path[0]).toBe("website");
  });

  it("donne une clé stable par cible", () => {
    expect(targetKey({ kind: "model", modelId: "a" })).toBe("model:a");
    expect(targetKey({ kind: "brand", brandSlug: "a" })).toBe("brand:a");
  });
});

describe("amountsFromValues", () => {
  it("ignore les montants nuls ou invalides", () => {
    expect(amountsFromValues([1250, 0, 900, Number.NaN, 1100])).toEqual({ min: 900, max: 1250, n: 3 });
    expect(amountsFromValues([])).toEqual(OUT);
  });
});

describe("diffSnapshots", () => {
  it("rien à annoncer quand les montants sont identiques", () => {
    const s = snap({ m1: A(900, 1250, 3) });
    expect(diffSnapshots(s, snap({ m1: A(900, 1250, 3) }, "2026-10-01T00:00:00Z"))).toEqual([]);
  });

  it("hausse et baisse du montant maximal", () => {
    const before = snap({ up: A(900, 1250, 3), down: A(700, 1000, 2) });
    const after = snap({ up: A(900, 1400, 3), down: A(700, 950, 2) });
    const changes = diffSnapshots(before, after);
    expect(changes.map((c) => [c.modelId, c.kind])).toEqual([
      ["up", "raised"],
      ["down", "lowered"],
    ]);
    expect(changes[0].before.max).toBe(1250);
    expect(changes[0].after.max).toBe(1400);
  });

  it("modèle ajouté à la liste ou retiré", () => {
    const changes = diffSnapshots(snap({ a: OUT, r: A(800, 800, 1) }), snap({ a: A(1500, 1500, 1), r: OUT }));
    expect(changes.map((c) => [c.modelId, c.kind])).toEqual([
      ["a", "added"],
      ["r", "removed"],
    ]);
  });

  it("nouveau modèle de la marque admissible : annoncé comme ajouté ; nouveau modèle hors liste : rien", () => {
    const changes = diffSnapshots(snap({}), snap({ neuf: A(1000, 1200, 2), horsListe: OUT }));
    expect(changes).toHaveLength(1);
    expect(changes[0]).toMatchObject({ modelId: "neuf", kind: "added", before: OUT });
  });

  it("même maximum mais minimum différent : fourchette modifiée", () => {
    const [c] = diffSnapshots(snap({ m: A(900, 1250, 3) }), snap({ m: A(1000, 1250, 3) }));
    expect(c.kind).toBe("adjusted");
  });

  it("un appariement de plus au même montant n'est pas annoncé", () => {
    expect(diffSnapshots(snap({ m: A(900, 1250, 3) }), snap({ m: A(900, 1250, 4) }))).toEqual([]);
  });

  it("un modèle disparu du catalogue est ignoré", () => {
    expect(diffSnapshots(snap({ parti: A(900, 900, 1), reste: A(500, 500, 1) }), snap({ reste: A(500, 500, 1) }))).toEqual([]);
  });

  it("trie : hausses, ajouts, fourchettes, baisses, retraits ; plus grand écart d'abord", () => {
    const before = snap({ r: A(1, 1, 1), l: A(1, 900, 2), s: A(1, 100, 1), b: A(1, 100, 1), a: OUT, j: A(1, 500, 2) });
    const after = snap({ r: OUT, l: A(1, 800, 2), s: A(1, 150, 1), b: A(1, 400, 1), a: A(300, 300, 1), j: A(2, 500, 2) });
    expect(diffSnapshots(before, after).map((c) => c.modelId)).toEqual(["b", "s", "a", "j", "l", "r"]);
  });

  it("sans instantané précédent, tout modèle admissible est « ajouté »", () => {
    expect(diffSnapshots(null, snap({ m: A(1, 2, 2) }))[0].kind).toBe("added");
  });
});

describe("sameAmounts et formats", () => {
  it("compare les montants, pas la date de liste", () => {
    expect(sameAmounts(snap({ m: A(1, 2, 2) }, "a"), snap({ m: A(1, 2, 2) }, "b"))).toBe(true);
    expect(sameAmounts(snap({ m: A(1, 2, 2) }), snap({ m: A(1, 2, 3) }))).toBe(false);
    expect(sameAmounts(snap({ m: A(1, 2, 2) }), snap({ m: A(1, 2, 2), n: OUT }))).toBe(false);
  });

  it("formate en dollars québécois avec espace insécable", () => {
    expect(formatDollars(1250)).toMatch(/^1\s?250 \$$/u);
    expect(formatRange(A(900, 1250, 2))).toMatch(/^900 \$ à 1\s?250 \$$/u);
    expect(formatRange(OUT)).toBe("hors de la liste");
  });
});

describe("courriels d'alerte", () => {
  const base = { firstName: "Marie", target: { kind: "model" as const, modelId: "daikin-x" }, label: "Daikin <X>", path: "/produit/daikin-x", token: "t".repeat(32) };

  it("sujet d'un changement unique de modèle", () => {
    const subject = alertChangeSubject(base, [{ modelId: "daikin-x", kind: "raised", before: A(1250, 1250, 1), after: A(1400, 1400, 1) }]);
    expect(subject).toContain("LogisVert en hausse pour Daikin <X>");
    expect(subject).toMatch(/1\s?250 \$ → 1\s?400 \$/u);
  });

  it("l'avis porte le lien de désabonnement, les montants et échappe les noms", () => {
    const { html } = alertChangeEmail({
      ...base,
      changes: [{ modelId: "daikin-x", kind: "lowered", before: A(1000, 1250, 2), after: A(1000, 1100, 2) }],
      names: { "daikin-x": { name: "Daikin <X>", slug: "daikin-x" } },
      listUpdatedAt: "2026-09-10T23:03:27.622Z",
    });
    expect(html).toContain(`/alertes-logisvert/desabonnement?token=${"t".repeat(32)}`);
    expect(html).toContain("se désabonner en un clic");
    expect(html).toContain("Daikin &lt;X&gt;");
    expect(html).not.toContain("Daikin <X>");
    expect(html).toContain("/produit/daikin-x");
    expect(html).not.toContain("répondez « STOP »");
  });

  it("la confirmation contient le lien d'activation et le lien de désabonnement", () => {
    const { subject, html } = alertConfirmationEmail({ ...base, snapshot: snap({ "daikin-x": A(1250, 1250, 1) }) });
    expect(subject).toMatch(/^Confirmez votre alerte LogisVert : /u);
    expect(html).toContain(`/alertes-logisvert/confirmer?token=${"t".repeat(32)}`);
    expect(html).toContain(`/alertes-logisvert/desabonnement?token=${"t".repeat(32)}`);
  });

  it("en-têtes de désabonnement en un clic (RFC 8058)", () => {
    const h = listUnsubscribeHeaders("t".repeat(32));
    expect(h["List-Unsubscribe"]).toMatch(/^<https:\/\/thermopompesavendre\.ca\/api\/alertes-logisvert\/desabonnement\?token=t{32}>$/);
    expect(h["List-Unsubscribe-Post"]).toBe("List-Unsubscribe=One-Click");
  });
});
