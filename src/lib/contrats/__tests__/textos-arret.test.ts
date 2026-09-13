/* Textos du contrat au client : la mention ARRÊT, comme tous les autres textos aux clients. L'installateur (partenaire) n'en a pas besoin. */
import { describe, expect, it } from "vitest";
import { avenantMessage, cancellationMessage, readyToSignMessage } from "../emails";

const ARRET = "Répondez ARRÊT pour ne plus recevoir de textos.";
const link = "https://exemple.ca/c/jeton";

describe("textos du contrat : mention ARRÊT", () => {
  it("contrat prêt, changement d'installateur et avenant au client la portent", () => {
    expect(readyToSignMessage({ firstName: "Julie", installer: "Climat Pro", link, number: "C-1", changes: 0, dateProposed: false }).sms).toContain(ARRET);
    expect(cancellationMessage({ firstName: "Julie", oldInstaller: "Climat Pro", reason: "", link }).sms).toContain(ARRET);
    expect(avenantMessage({ to: "client", name: "Julie Tremblay", number: 1, contractNumber: "C-1", deltaTotalCents: 10000, link }).sms).toContain(ARRET);
  });

  it("l'avenant à approuver par l'installateur n'a pas la mention", () => {
    expect(avenantMessage({ to: "installateur", name: "Climat Pro", number: 1, contractNumber: "C-1", deltaTotalCents: 10000, link }).sms).not.toContain("ARRÊT");
  });
});
