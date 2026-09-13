import { describe, expect, it } from "vitest";
import { avisEmail, choixEmail, logisVertEmail, relanceLinks, relanceUnsubscribeHeaders, type RelanceModel } from "@/lib/crm/templates/relances-email";

const base = { firstName: "Marie", token: "t".repeat(32), mailingAddress: "123, rue Exemple, Montréal (Québec) H2X 1Y4" };
const models: RelanceModel[] = [
  { label: "Daikin RXT12AVJU", url: "https://thermopompesavendre.ca/produit/daikin-rxt12avju", h5Btu: 12400, hspf2: 10.2, amounts: { min: 1300, max: 1900, n: 3 } },
  { label: "Marque X Modèle Y", url: "https://thermopompesavendre.ca/produit/x-y", h5Btu: null, hspf2: null, amounts: { min: 0, max: 0, n: 0 } },
];

describe("courriels de relance et demande d'avis", () => {
  const all = [choixEmail({ ...base, models }), logisVertEmail({ ...base, models, listUpdatedAt: "2026-09-01T12:00:00Z" }), avisEmail(base)];

  it("identifient l'expéditeur (nom, téléphone, site, adresse postale) en HTML et en texte", () => {
    for (const mail of all) {
      for (const s of [mail.html, mail.text]) {
        expect(s).toContain("Thermopompes À Vendre");
        expect(s).toContain("438-900-3224");
        expect(s).toContain("thermopompesavendre.ca");
        expect(s).toContain(base.mailingAddress);
        expect(s).not.toMatch(/undefined|NaN/);
      }
    }
  });

  it("portent le lien de désabonnement en un clic (HTML et texte), sans la mention « STOP »", () => {
    for (const mail of all) {
      expect(mail.html).toContain(relanceLinks.unsubscribe(base.token));
      expect(mail.text).toContain(relanceLinks.unsubscribe(base.token));
      expect(mail.html).toContain("se désabonner en un clic");
      expect(mail.html).not.toContain("STOP");
    }
    expect(relanceUnsubscribeHeaders(base.token)).toEqual({
      "List-Unsubscribe": `<https://thermopompesavendre.ca/api/relances/desabonnement?token=${base.token}>`,
      "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
    });
  });

  it("objets courts et honnêtes", () => {
    expect(all[0].subject).toBe("Vos 3 choix vous attendent");
    for (const mail of all) expect(mail.subject.length).toBeLessThanOrEqual(45);
  });

  it("J+2 : chiffres du catalogue, rien d'inventé pour un chiffre absent", () => {
    const { html, text } = all[0];
    expect(html).toMatch(/12\s400 BTU\/h/);
    expect(html).toContain("10,2");
    expect(html).toMatch(/jusqu’à 1\s900\s\$/);
    expect(html).toContain("Marque X Modèle Y");
    expect(html).toContain("/rendez-vous");
    expect(html).toContain("/soumission");
    expect(text).toContain("https://thermopompesavendre.ca/produit/daikin-rxt12avju");
    // Le modèle sans chiffres n'a ni capacité, ni HSPF2, ni montant.
    expect(text.split("Marque X Modèle Y")[1].split("Fiche")[0].trim()).toBe("");
  });

  it("J+7 : montants officiels seulement pour les modèles de la liste ; sinon, aucun montant", () => {
    const { html } = all[1];
    expect(html).toMatch(/1\s300\s\$ à 1\s900\s\$/);
    expect(html).not.toContain("Marque X Modèle Y");
    expect(html).toContain("/subventions");
    const none = logisVertEmail({ ...base, models: [models[1]], listUpdatedAt: null });
    expect(none.subject).toBe("Rappel : la subvention LogisVert");
    expect(none.html).not.toContain("Montants LogisVert officiels");
    expect(none.html).not.toMatch(/\d\s?\$/);
  });

  it("demande d'avis : grand bouton vers /avis", () => {
    expect(all[2].html).toContain('href="https://thermopompesavendre.ca/avis"');
    expect(all[2].html).toContain("font-size:19px");
    expect(all[2].text).toContain("https://thermopompesavendre.ca/avis");
  });

  it("échappe le prénom", () => {
    const { html } = avisEmail({ ...base, firstName: "<img src=x onerror=alert(1)>" });
    expect(html).not.toContain("<img src=x");
  });
});
