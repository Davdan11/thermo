/* Capture et expiration des identifiants de clic (90 jours, première partie). */
import { describe, expect, it } from "vitest";
import { CLICKS_KEY, clicksFromUrl, persistClicks, readStoredClicks } from "../clicks";
import { CLICK_TTL_MS } from "../config";
import { FAKE, MemoryStorage } from "./helpers";

const NOW = new Date("2026-09-13T12:00:00Z");
const url = (q: string) => `https://thermopompesavendre.ca/soumission?${q}`;

describe("capture", () => {
  it("gclid, gbraid, wbraid, msclkid, fbclid (au format fbc) et utm_*", () => {
    const c = clicksFromUrl(url(`gclid=${FAKE.gclid}&gbraid=${FAKE.gbraid}&wbraid=${FAKE.wbraid}&msclkid=${FAKE.msclkid}&fbclid=${FAKE.fbclid}&utm_source=Google&utm_campaign=Automne_2026`), NOW)!;
    expect(c).toEqual({
      at: NOW.toISOString(),
      gclid: FAKE.gclid,
      gbraid: FAKE.gbraid,
      wbraid: FAKE.wbraid,
      msclkid: FAKE.msclkid,
      fbc: `fb.1.${NOW.getTime()}.${FAKE.fbclid}`,
      utm: { utm_source: "google", utm_campaign: "automne_2026" },
    });
  });

  it("valeurs douteuses rejetées, utm personnels retirés, rien à garder → null", () => {
    expect(clicksFromUrl(url("gclid=%3Cscript%3E&fbclid=court"), NOW)).toBeNull();
    expect(clicksFromUrl(url("utm_source=jean%40exemple.ca"), NOW)).toBeNull();
    expect(clicksFromUrl(url("q=thermopompe"), NOW)).toBeNull();
    expect(clicksFromUrl("pas une adresse", NOW)).toBeNull();
  });
});

describe("conservation 90 jours", () => {
  it("échéance = arrivée + 90 jours ; valide la veille, effacée à l'échéance", () => {
    const s = new MemoryStorage();
    const saved = persistClicks(s, clicksFromUrl(url(`gclid=${FAKE.gclid}`), NOW), NOW)!;
    expect(Date.parse(saved.exp) - Date.parse(saved.at)).toBe(CLICK_TTL_MS);
    expect(readStoredClicks(s, new Date(NOW.getTime() + CLICK_TTL_MS - 1))?.gclid).toBe(FAKE.gclid);
    expect(readStoredClicks(s, new Date(NOW.getTime() + CLICK_TTL_MS))).toBeNull();
    expect(s.getItem(CLICKS_KEY)).toBeNull();
  });

  it("un nouveau clic remplace l'ancien ; des utm seuls ne remplacent pas un clic valide", () => {
    const s = new MemoryStorage();
    persistClicks(s, clicksFromUrl(url(`gclid=${FAKE.gclid}`), NOW), NOW);
    const later = new Date(NOW.getTime() + 5 * 86_400_000);
    expect(persistClicks(s, clicksFromUrl(url("utm_source=infolettre"), later), later)?.gclid).toBe(FAKE.gclid);
    const other = persistClicks(s, clicksFromUrl(url(`gbraid=${FAKE.gbraid}`), later), later)!;
    expect(other.gclid).toBeUndefined();
    expect(other.gbraid).toBe(FAKE.gbraid);
    expect(other.at).toBe(later.toISOString());
  });

  it("valeur abîmée : effacée, jamais relue", () => {
    const s = new MemoryStorage();
    s.setItem(CLICKS_KEY, "{abîmée");
    expect(readStoredClicks(s, NOW)).toBeNull();
    expect(s.size).toBe(0);
  });

  it("sans stockage (navigateur qui le bloque) : rien, sans erreur", () => {
    expect(persistClicks(null, clicksFromUrl(url(`gclid=${FAKE.gclid}`), NOW), NOW)).toBeNull();
    expect(readStoredClicks(null, NOW)).toBeNull();
  });
});
