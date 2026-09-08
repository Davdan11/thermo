import { describe, expect, it } from "vitest";
import { clientIp, rateLimit, tooManyRequests } from "../rate-limit";

function req(ip: string, extra?: Record<string, string>) {
  return new Request("http://localhost/api/x", { headers: { "x-forwarded-for": ip, ...extra } });
}

describe("rateLimit", () => {
  it("laisse passer jusqu'à la limite puis bloque", () => {
    const opts = { name: `t-${Math.random()}`, limit: 3, windowMs: 60_000 };
    expect(rateLimit(req("10.0.0.1"), opts)).toBe(true);
    expect(rateLimit(req("10.0.0.1"), opts)).toBe(true);
    expect(rateLimit(req("10.0.0.1"), opts)).toBe(true);
    expect(rateLimit(req("10.0.0.1"), opts)).toBe(false);
  });

  it("compte séparément par adresse IP et par ressource", () => {
    const a = { name: `a-${Math.random()}`, limit: 1, windowMs: 60_000 };
    const b = { name: `b-${Math.random()}`, limit: 1, windowMs: 60_000 };
    expect(rateLimit(req("10.0.0.2"), a)).toBe(true);
    expect(rateLimit(req("10.0.0.2"), a)).toBe(false);
    expect(rateLimit(req("10.0.0.3"), a)).toBe(true);
    expect(rateLimit(req("10.0.0.2"), b)).toBe(true);
  });

  it("répond 429 avec un message en français", async () => {
    const res = tooManyRequests();
    expect(res.status).toBe(429);
    expect((await res.json()).error).toMatch(/Trop de requêtes/);
  });
});

describe("clientIp", () => {
  it("prend la première adresse de x-forwarded-for", () => {
    expect(clientIp(req("1.2.3.4, 10.0.0.1"))).toBe("1.2.3.4");
  });
  it("retombe sur x-real-ip puis « inconnue »", () => {
    expect(clientIp(new Request("http://localhost", { headers: { "x-real-ip": "5.6.7.8" } }))).toBe("5.6.7.8");
    expect(clientIp(new Request("http://localhost"))).toBe("inconnue");
  });
});
