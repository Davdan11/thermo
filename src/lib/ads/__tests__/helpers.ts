/* Aides des tests de la mesure publicitaire : faux navigateur (aucun jsdom), identifiants FICTIFS. */
import { vi } from "vitest";

export class MemoryStorage {
  map = new Map<string, string>();
  getItem(k: string) {
    return this.map.has(k) ? this.map.get(k)! : null;
  }
  setItem(k: string, v: string) {
    this.map.set(k, String(v));
  }
  removeItem(k: string) {
    this.map.delete(k);
  }
  get size() {
    return this.map.size;
  }
}

/** Identifiants de clic fictifs (forme valide, aucune vraie valeur). */
export const FAKE = {
  gclid: "TEST-gclid_0000000001",
  gbraid: "TEST-gbraid_000000001",
  wbraid: "TEST-wbraid_000000001",
  fbclid: "TEST-fbclid_000000001",
  msclkid: "TEST0000000000000000000000000001",
};

/** Faux `window` / `document` : localStorage en mémoire, gtag et fbq espionnés. */
export function fakeBrowser(href: string) {
  const storage = new MemoryStorage();
  const gtag = vi.fn();
  const fbq = vi.fn();
  const win = {
    location: new URL(href),
    localStorage: storage,
    sessionStorage: new MemoryStorage(),
    gtag,
    fbq,
    dataLayer: [] as unknown[],
    dispatchEvent: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  };
  const doc = { cookie: "", referrer: "" };
  vi.stubGlobal("window", win);
  vi.stubGlobal("document", doc);
  return { win, doc, storage, gtag, fbq };
}
