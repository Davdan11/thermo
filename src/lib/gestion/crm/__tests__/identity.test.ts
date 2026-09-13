/* Identité : formats de téléphone, casse des courriels, valeurs génériques jamais utilisées pour rapprocher. */
import { describe, expect, it } from "vitest";
import { clientIdFor, emailOf, genericKeys, identityKeys, last4, phoneOf } from "../identity";
import { CLIENT_ID_RE } from "../types";

describe("téléphone", () => {
  it("les formats courants donnent le même E.164", () => {
    for (const raw of ["418 555-1234", "+1 (418) 555-1234", "1-418-555-1234", "(418)555-1234", "418.555.1234", "4185551234", "418 555-1234 poste 22"]) {
      expect(phoneOf(raw)).toBe("+14185551234");
    }
  });
  it("numéros incomplets ou génériques : ignorés", () => {
    for (const raw of ["555-1234", "000-000-0000", "111 111-1111", "123 456 7890", "", "   ", undefined, 4185551234]) expect(phoneOf(raw)).toBeNull();
  });
});

describe("courriel", () => {
  it("casse et espaces ne comptent pas", () => {
    expect(emailOf("  Julie.Tremblay@Exemple.CA ")).toBe("julie.tremblay@exemple.ca");
  });
  it("adresses génériques ou illisibles : ignorées", () => {
    for (const raw of ["test@gmail.com", "noreply@exemple.ca", "jean@example.com", "a@test.ca", "pas-un-courriel", "x@y"]) expect(emailOf(raw)).toBeNull();
  });
});

describe("clés et identifiants", () => {
  it("le numéro du site et ceux de l'entreprise ne rapprochent jamais personne", () => {
    const generic = genericKeys(["514 555-0100", "info@entreprise-exemple.ca"]);
    expect(identityKeys({ phone: "+14389003224" }, generic)).toEqual([]);
    expect(identityKeys({ phone: "514 555-0100", email: "INFO@entreprise-exemple.ca" }, generic)).toEqual([]);
    expect(identityKeys({ phone: "514 555-0142", email: "julie@exemple.ca" }, generic)).toEqual(["p:+15145550142", "e:julie@exemple.ca"]);
  });
  it("identifiant stable « c_ » + 12 caractères, quatre derniers chiffres", () => {
    const id = clientIdFor("p:+15145550142");
    expect(id).toMatch(CLIENT_ID_RE);
    expect(clientIdFor("p:+15145550142")).toBe(id);
    expect(clientIdFor("e:julie@exemple.ca")).not.toBe(id);
    expect(last4("+15145550142")).toBe("0142");
  });
});
