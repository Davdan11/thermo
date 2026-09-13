/* Chantier T — liens signés et à durée limitée (/appel, /rappel) : signature, altération, expiration, usage. */
import { describe, expect, it } from "vitest";
import { LINK_TOKEN_RE, linkKey, signLink, verifyLink } from "../links";

const KEY = linkKey(Buffer.alloc(32, 7));
const NOW = new Date("2026-09-16T15:00:00Z");
const ID = "l_Ab3dE5gH7jK";
const in1h = new Date(NOW.getTime() + 3_600_000);

describe("liens signés", () => {
  it("un jeton valide donne l'identifiant et l'expiration", () => {
    const t = signLink("appel", ID, in1h, KEY);
    expect(t).toMatch(LINK_TOKEN_RE);
    const r = verifyLink(t, "appel", KEY, NOW);
    expect(r.ok).toBe(true);
    if (r.ok) {
      expect(r.id).toBe(ID);
      expect(r.expiresAt.getTime()).toBe(Math.floor(in1h.getTime() / 1000) * 1000);
    }
  });

  it("expire à l'heure dite", () => {
    const t = signLink("appel", ID, in1h, KEY);
    expect(verifyLink(t, "appel", KEY, new Date(in1h.getTime() - 1000)).ok).toBe(true);
    expect(verifyLink(t, "appel", KEY, new Date(in1h.getTime() + 1000))).toEqual({ ok: false, error: "expire" });
  });

  it("refuse un jeton modifié (identifiant, expiration ou signature)", () => {
    const t = signLink("appel", ID, in1h, KEY);
    const [id, exp, sig] = t.split(".");
    expect(verifyLink(`l_Zz3dE5gH7jK.${exp}.${sig}`, "appel", KEY, NOW)).toEqual({ ok: false, error: "invalide" });
    expect(verifyLink(`${id}.${(Number.parseInt(exp, 36) + 86_400).toString(36)}.${sig}`, "appel", KEY, NOW)).toEqual({ ok: false, error: "invalide" });
    expect(verifyLink(`${id}.${exp}.${sig.slice(0, -1)}${sig.endsWith("A") ? "B" : "A"}`, "appel", KEY, NOW)).toEqual({ ok: false, error: "invalide" });
  });

  it("un jeton « rappel » n'ouvre pas la page « appel », ni avec une autre clé", () => {
    const t = signLink("rappel", ID, in1h, KEY);
    expect(verifyLink(t, "appel", KEY, NOW).ok).toBe(false);
    expect(verifyLink(t, "rappel", linkKey(Buffer.alloc(32, 8)), NOW).ok).toBe(false);
  });

  it("refuse les jetons mal formés", () => {
    for (const bad of ["", "abc", `${ID}..x`, "../../etc/passwd", `${ID}.zz.${"a".repeat(22)}!`]) expect(verifyLink(bad, "appel", KEY, NOW)).toEqual({ ok: false, error: "invalide" });
  });
});
