/* Entente de bout en bout sur un dossier temporaire : versions (brouillon → texte final validé → publiée), envoi à
   jeton (empreinte seulement), ouverture, signature avec preuve (horodatage, version, IP, navigateur, SHA-256 du
   texte exact, image), document signé, relance (ancien lien remplacé), re-signature après une nouvelle version.
   Aucun vrai courriel ni texto : hors production, les envois sont simulés (et les fonctions d'envoi, espionnées). */
import { mkdtemp, readFile, rm } from "node:fs/promises";
import { createHash } from "node:crypto";
import { tmpdir } from "node:os";
import path from "node:path";
import sharp from "sharp";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const mail = vi.hoisted(() => ({ sendClientEmail: vi.fn(async () => true) }));
vi.mock("@/lib/crm/email", async (orig) => ({ ...(await orig<typeof import("@/lib/crm/email")>()), sendClientEmail: mail.sendClientEmail }));
const sms = vi.hoisted(() => ({ sendSms: vi.fn(async () => "envoye" as const) }));
vi.mock("@/lib/gestion/sms", async (orig) => ({ ...(await orig<typeof import("@/lib/gestion/sms")>()), sendSms: sms.sendSms }));

import { mutateGestion } from "../../store";
import type { Installer } from "../../types";
import { agreementState, canonicalText, sha256Text } from "../agreement";
import { partnerBlockers } from "../blockers";
import { createDraft, getSigningView, markOpened, publishVersion, saveDraft, sendAgreement, signAgreement, signedDocumentForToken, validateVersion } from "../service";
import { partenairesFile, partenairesFilesDir, readPartenaires } from "../store";

const env = process.env;
let dir: string;
const BY = "proprio@exemple.ca";
const BASE = "http://test.local";
const T0 = new Date("2026-09-01T12:00:00Z");
const DAY = 86_400_000;

function installer(id: string, company: string, createdAt: Date): Installer {
  return { id, company, contactName: "Julie Exemple", phone: "514 555-0142", email: `${id}@exemple.ca`, rbq: "0000-0000-00", basePostalCode: "H7N 1A1", base: null, radiusKm: 60, extraRegions: [], brands: [], systemTypes: [], active: true, maxOpenJobs: null, notes: "", createdAt: createdAt.toISOString(), updatedAt: createdAt.toISOString() };
}

const lawyerText = (tag: string) => ({
  title: "Entente de partenariat — installateurs",
  preamble: `Préambule de test ${tag}.`,
  articles: [
    { title: "Objet", paragraphs: [`Texte de test ${tag}, 1.1.`] },
    { title: "Photos et numéros de série", paragraphs: [`Texte de test ${tag}, 2.1.`, `Texte de test ${tag}, 2.2.`] },
  ],
});

async function publish(tag: string, at: Date, grace = 14): Promise<string> {
  const d = await createDraft(BY, at);
  if (!d.ok) throw new Error(d.error);
  expect((await saveDraft(d.id, lawyerText(tag), BY, at)).ok).toBe(true);
  expect((await validateVersion(d.id, BY, at)).ok).toBe(true);
  expect((await publishVersion(d.id, grace, BY, at)).ok).toBe(true);
  return d.id;
}

const tokenOf = (link: string) => link.split("/entente/")[1];

async function png(): Promise<string> {
  const buf = await sharp({ create: { width: 240, height: 90, channels: 4, background: { r: 12, g: 24, b: 33, alpha: 0.6 }, noise: { type: "gaussian", mean: 128, sigma: 40 } } }).png().toBuffer();
  return `data:image/png;base64,${buf.toString("base64")}`;
}

beforeEach(async () => {
  dir = await mkdtemp(path.join(tmpdir(), "thermo-entente-"));
  process.env = { ...env, GESTION_DATA_DIR: dir, TEXTOS_DATA_DIR: dir, LEAD_JOURNAL_DIR: path.join(dir, "leads"), ADMIN_EMAILS: BY, NODE_ENV: "test", TEXTOS_ENVOIS_DEV: "", TWILIO_ACCOUNT_SID: "", TWILIO_AUTH_TOKEN: "", TWILIO_PHONE_NUMBER: "" };
  vi.clearAllMocks();
  await mutateGestion((g) => {
    g.installers.push(installer("i_climaaa0001", "Climatisation A", new Date(T0.getTime() + DAY)), installer("i_climbbb0001", "Climatisation B", new Date(T0.getTime() + DAY)));
    return { result: null, changed: true };
  });
});
afterEach(async () => {
  process.env = env;
  await rm(dir, { recursive: true, force: true });
});

describe("versions de l'entente", () => {
  it("brouillon du gabarit : validation refusée (texte de l'avocat manquant) et envoi impossible", async () => {
    const d = await createDraft(BY, T0);
    if (!d.ok) throw new Error(d.error);
    const v = await validateVersion(d.id, BY, T0);
    expect(v.ok).toBe(false);
    expect(!v.ok && v.error).toMatch(/Texte de l’avocat manquant/);
    const s = await sendAgreement("i_climaaa0001", BY, BASE, T0);
    expect(s).toEqual({ ok: false, error: "Aucune entente en vigueur : validez puis publiez une version du texte." });
    expect((await publishVersion(d.id, 14, BY, T0)).ok).toBe(false);
  });
});

describe("envoi, ouverture et signature", () => {
  it("preuve complète et texte exact signé ; le jeton n'est jamais stocké en clair", async () => {
    await publish("v1", T0);
    const sent = await sendAgreement("i_climaaa0001", BY, BASE, new Date(T0.getTime() + 2 * DAY));
    if (!sent.ok) throw new Error(sent.error);
    expect(sent).toMatchObject({ kind: "envoi", email: "simule", sms: "non-configure" });
    const token = tokenOf(sent.link);
    expect(await readFile(partenairesFile(), "utf8")).not.toContain(token);

    const view = await getSigningView(token);
    if (view.state !== "a-signer") throw new Error(view.state);
    const data0 = await readPartenaires();
    const version = data0.agreements[0];
    expect(view.textSha256).toBe(sha256Text(canonicalText(version)));

    await markOpened(token, new Date(T0.getTime() + 3 * DAY));
    const inst = { id: "i_climaaa0001", createdAt: new Date(T0.getTime() + DAY).toISOString() };
    expect(agreementState(inst, await readPartenaires(), new Date(T0.getTime() + 3 * DAY)).code).toBe("ouverte");

    const ctx = { ip: "203.0.113.7", userAgent: "Mozilla/5.0 (test)", baseUrl: BASE };
    const base = { name: "Julie Exemple", title: "Présidente", authorized: true, accepted: true, method: "trace" as const, image: await png(), textSha256: view.textSha256 };
    expect(await signAgreement(token, { ...base, textSha256: "0".repeat(64) }, ctx)).toEqual({ ok: false, error: "document-change" });
    expect(await signAgreement(token, { ...base, authorized: false }, ctx)).toEqual({ ok: false, error: "autorise" });
    expect(await signAgreement(token, { ...base, accepted: false }, ctx)).toEqual({ ok: false, error: "accepte" });
    expect(await signAgreement(token, { ...base, name: "Julie" }, ctx)).toEqual({ ok: false, error: "nom" });
    expect(await signAgreement(token, { ...base, image: "data:image/png;base64,AAAA" }, ctx)).toEqual({ ok: false, error: "signature" });

    const at = new Date(T0.getTime() + 4 * DAY);
    const signed = await signAgreement(token, base, ctx, at);
    expect(signed.ok).toBe(true);
    const d = await readPartenaires();
    const sig = d.signatures[0];
    expect(sig).toMatchObject({ installerId: "i_climaaa0001", versionNumber: 1, signedAt: at.toISOString(), signerName: "Julie Exemple", signerTitle: "Présidente", authorized: true, accepted: true, method: "trace", company: "Climatisation A" });
    expect(sig.proof).toMatchObject({ ip: "203.0.113.7", userAgent: "Mozilla/5.0 (test)" });
    expect(sig.signedText).toBe(canonicalText(version));
    expect(sig.proof.textSha256).toBe(createHash("sha256").update(sig.signedText, "utf8").digest("hex"));
    const img = await readFile(path.join(partenairesFilesDir(), `${sig.imageFileId}.png`));
    expect(sig.proof.imageSha256).toBe(createHash("sha256").update(img).digest("hex"));
    expect(sig.copies.partner).toBe("simule");
    expect(agreementState(inst, d, at).code).toBe("signee");

    const html = await signedDocumentForToken(token);
    expect(html).toContain(sig.proof.textSha256);
    expect(html).toContain("203.0.113.7");
    expect(html).toContain("data:image/png;base64,");
    expect(await signAgreement(token, base, ctx)).toEqual({ ok: false, error: "deja" });
    expect(await sendAgreement("i_climaaa0001", BY, BASE)).toEqual({ ok: false, error: "La version en vigueur est déjà signée." });
    expect(mail.sendClientEmail).not.toHaveBeenCalled();
    expect(sms.sendSms).not.toHaveBeenCalled();
  });

  it("relance : nouveau lien, l'ancien est « remplacé » ; signature par nom tapé", async () => {
    await publish("v1", T0);
    const first = await sendAgreement("i_climbbb0001", BY, BASE, new Date(T0.getTime() + 2 * DAY));
    const second = await sendAgreement("i_climbbb0001", BY, BASE, new Date(T0.getTime() + 5 * DAY));
    if (!first.ok || !second.ok) throw new Error("envoi");
    expect(second.kind).toBe("relance");
    expect((await getSigningView(tokenOf(first.link))).state).toBe("remplace");
    const v = await getSigningView(tokenOf(second.link));
    if (v.state !== "a-signer") throw new Error(v.state);
    const r = await signAgreement(tokenOf(second.link), { name: "Marc Exemple", title: "Copropriétaire", authorized: true, accepted: true, method: "nom", textSha256: v.textSha256 }, { ip: "198.51.100.2", userAgent: "test", baseUrl: BASE });
    expect(r.ok).toBe(true);
    const sig = (await readPartenaires()).signatures[0];
    expect(sig.method).toBe("nom");
    expect(sig.imageFileId).toBeUndefined();
    expect((await readPartenaires()).requests[0].sends).toHaveLength(2);
  });
});

describe("nouvelle version", () => {
  it("tous doivent re-signer : délai de grâce, puis plus d'offres ; l'ancien document reste accessible", async () => {
    await publish("v1", T0);
    const sent = await sendAgreement("i_climaaa0001", BY, BASE, new Date(T0.getTime() + 2 * DAY));
    if (!sent.ok) throw new Error(sent.error);
    const v1 = await getSigningView(tokenOf(sent.link));
    if (v1.state !== "a-signer") throw new Error(v1.state);
    await signAgreement(tokenOf(sent.link), { name: "Julie Exemple", title: "Présidente", authorized: true, accepted: true, method: "nom", textSha256: v1.textSha256 }, { ip: "x", userAgent: "x", baseUrl: BASE }, new Date(T0.getTime() + 3 * DAY));

    const p2 = new Date(T0.getTime() + 40 * DAY);
    await publish("v2", p2, 10);
    const d = await readPartenaires();
    expect(d.agreements.map((a) => [a.number, a.status])).toEqual([
      [1, "remplacee"],
      [2, "publiee"],
    ]);
    const inst = { id: "i_climaaa0001", createdAt: new Date(T0.getTime() + DAY).toISOString() };
    const during = agreementState(inst, d, new Date(p2.getTime() + 5 * DAY));
    expect(during).toMatchObject({ code: "a-resigner", blocking: false });
    expect(partnerBlockers(inst, { data: d, now: new Date(p2.getTime() + 5 * DAY) })).toEqual([]);
    expect(partnerBlockers(inst, { data: d, now: new Date(p2.getTime() + 11 * DAY) }).map((b) => b.code)).toEqual(["entente"]);
    expect((await getSigningView(tokenOf(sent.link))).state).toBe("signee");
    expect(await signedDocumentForToken(tokenOf(sent.link))).toContain("version 1");

    const again = await sendAgreement("i_climaaa0001", BY, BASE, new Date(p2.getTime() + DAY));
    if (!again.ok) throw new Error(again.error);
    const v2 = await getSigningView(tokenOf(again.link));
    expect(v2.state === "a-signer" && v2.version.number).toBe(2);
  });
});
