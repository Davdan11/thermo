import { describe, expect, it } from "vitest";
import { leadSchema } from "../lead";

const base = { firstName: "Jean", email: "jean@exemple.com", consentProcessing: true };

describe("leadSchema", () => {
  it("accepte un lead minimal valide et normalise le code postal", () => {
    const r = leadSchema.safeParse({ ...base, postalCode: " h2x 1y4 " });
    expect(r.success).toBe(true);
    if (r.success) {
      expect(r.data.postalCode).toBe("H2X1Y4");
      expect(r.data.consentMarketing).toBe(false);
    }
  });

  it("exige le consentement au traitement (Loi 25)", () => {
    const r = leadSchema.safeParse({ ...base, consentProcessing: false });
    expect(r.success).toBe(false);
    if (!r.success) expect(r.error.issues[0].path).toEqual(["consentProcessing"]);
  });

  it("exige un courriel ou un téléphone", () => {
    expect(leadSchema.safeParse({ firstName: "Jean", consentProcessing: true }).success).toBe(false);
    expect(leadSchema.safeParse({ firstName: "Jean", phone: "(514) 555-1234", consentProcessing: true }).success).toBe(true);
  });

  it("refuse un téléphone trop court et un code postal invalide", () => {
    expect(leadSchema.safeParse({ ...base, phone: "555-12" }).success).toBe(false);
    expect(leadSchema.safeParse({ ...base, postalCode: "12345" }).success).toBe(false);
  });

  it("rejette une requête dont le pot de miel est rempli", () => {
    const r = leadSchema.safeParse({ ...base, website: "http://spam.example" });
    expect(r.success).toBe(false);
    if (!r.success) expect(r.error.issues[0].path).toEqual(["website"]);
  });

  it("refuse un courriel mal formé", () => {
    expect(leadSchema.safeParse({ ...base, email: "pas-un-courriel" }).success).toBe(false);
  });
});
