/* Chantier S — TOTP (vecteurs RFC 6238 et RFC 4226), base32, fenêtre ±1 et rejeu. */
import { describe, expect, it } from "vitest";
import { base32Decode, base32Encode, hotp, otpauthUri, totp, verifyTotp } from "../totp";

const SEED1 = Buffer.from("12345678901234567890", "ascii");
const SEED256 = Buffer.from("12345678901234567890123456789012", "ascii");
const SEED512 = Buffer.from("1234567890123456789012345678901234567890123456789012345678901234", "ascii");

describe("RFC 4226 (HOTP)", () => {
  it("donne les 10 valeurs de l'annexe D", () => {
    const expected = ["755224", "287082", "359152", "969429", "338314", "254676", "287922", "162583", "399871", "520489"];
    expected.forEach((code, counter) => expect(hotp(SEED1, counter)).toBe(code));
  });
});

describe("RFC 6238 (TOTP), annexe B", () => {
  const rows: Array<[number, string, string, string]> = [
    [59, "94287082", "46119246", "90693936"],
    [1111111109, "07081804", "68084774", "25091201"],
    [1111111111, "14050471", "67062674", "99943326"],
    [1234567890, "89005924", "91819424", "93441116"],
    [2000000000, "69279037", "90698825", "38618901"],
    [20000000000, "65353130", "77737706", "47863826"],
  ];
  it.each(rows)("t = %i s", (t, sha1, sha256, sha512) => {
    expect(totp(SEED1, t * 1000, { digits: 8, algorithm: "sha1" })).toBe(sha1);
    expect(totp(SEED256, t * 1000, { digits: 8, algorithm: "sha256" })).toBe(sha256);
    expect(totp(SEED512, t * 1000, { digits: 8, algorithm: "sha512" })).toBe(sha512);
  });
});

describe("base32 (RFC 4648)", () => {
  it("vecteurs de la RFC et aller-retour", () => {
    expect(base32Encode(Buffer.from("foobar"))).toBe("MZXW6YTBOI");
    expect(base32Encode(Buffer.from("f"))).toBe("MY");
    expect(base32Decode("mzxw 6ytb-oi======").toString()).toBe("foobar");
    expect(base32Decode(base32Encode(SEED1)).equals(SEED1)).toBe(true);
    expect(() => base32Decode("A1B8")).toThrow();
  });
});

describe("vérification", () => {
  const key = base32Encode(SEED1);
  const t = 1_700_000_000_000;

  it("accepte ±1 période, refuse ±2", () => {
    expect(verifyTotp(key, totp(key, t), { timeMs: t })).not.toBeNull();
    expect(verifyTotp(key, totp(key, t - 30_000), { timeMs: t })).not.toBeNull();
    expect(verifyTotp(key, totp(key, t + 30_000), { timeMs: t })).not.toBeNull();
    expect(verifyTotp(key, totp(key, t - 60_000), { timeMs: t })).toBeNull();
    expect(verifyTotp(key, totp(key, t + 60_000), { timeMs: t })).toBeNull();
  });

  it("refuse le rejeu d'un pas déjà utilisé, et les codes mal formés", () => {
    const step = verifyTotp(key, totp(key, t), { timeMs: t });
    expect(step).not.toBeNull();
    expect(verifyTotp(key, totp(key, t), { timeMs: t, lastStep: step })).toBeNull();
    expect(verifyTotp(key, "12345", { timeMs: t })).toBeNull();
    expect(verifyTotp(key, "abcdef", { timeMs: t })).toBeNull();
    expect(verifyTotp(key, "", { timeMs: t })).toBeNull();
  });

  it("lien otpauth:// lisible par les applications", () => {
    const uri = otpauthUri({ secret: "JBSWY3DPEHPK3PXP", account: "proprio@exemple.ca", issuer: "ThermopompesAVendre" });
    expect(uri).toMatch(/^otpauth:\/\/totp\/ThermopompesAVendre%3Aproprio%40exemple\.ca\?/);
    expect(uri).toContain("secret=JBSWY3DPEHPK3PXP");
    expect(uri).toContain("period=30");
  });
});
