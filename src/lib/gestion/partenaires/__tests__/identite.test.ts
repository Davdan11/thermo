/* Identité légale des partenaires : les actions exigent la session ; le partenaire la remplit par un lien sécurisé
   (un seul envoi, 14 jours) ; le propriétaire vérifie et corrige ; la page publique n'est jamais indexée et refuse les
   origines étrangères. Envois simulés (développement), données fictives. */
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { NextRequest } from "next/server";

const jar = vi.hoisted(() => ({ value: undefined as string | undefined }));
vi.mock("next/headers", () => ({
  cookies: async () => ({
    get: (name: string) => (name === "tav_gestion" && jar.value ? { name, value: jar.value } : undefined),
    set: vi.fn(),
  }),
  headers: async () => new Headers({ host: "localhost:3001" }),
}));
vi.mock("next/cache", () => ({ refresh: vi.fn(), revalidatePath: vi.fn() }));
const mail = vi.hoisted(() => ({ sendClientEmail: vi.fn(async (..._args: unknown[]) => true) }));
vi.mock("@/lib/crm/email", () => mail);

import * as actions from "@/app/gestion/(prive)/identite-actions";
import { GET as sendGET, POST as sendPOST } from "@/app/identite/[token]/envoyer/route";
import { metadata as identiteMeta } from "@/app/identite/layout";
import { contractorStatusOf } from "@/lib/soumissions/contractors";
import { INSTALLER_ID } from "@/lib/soumissions/__tests__/fixtures";
import { installer, seedPartner } from "@/lib/soumissions/__tests__/partner-fixtures";
import { createSessionToken } from "../../auth/session-token";
import { getSessionSecret, resetSecretCache } from "../../auth/secret";
import { identityView, issueIdentityLink, saveIdentity, submitIdentity, verifyIdentity, type SubmissionInput } from "../identity";
import { readPartenaires } from "../store";

const env = process.env;
let dir: string;
const BY = "proprio@exemple.ca";
const ORIGIN = "http://localhost:3001";
const NOW = new Date("2026-09-12T15:00:00Z");
const digest = (e: unknown) => String((e as { digest?: string })?.digest ?? "");
const params = <T,>(p: T) => ({ params: Promise.resolve(p) });

const form = (over: Partial<SubmissionInput> = {}): SubmissionInput => ({
  legalName: "Installations Exemple inc.",
  tradeName: "Exemple Climatisation",
  neq: "1234567890",
  address: "2 rue Fictive",
  city: "Laval",
  postalCode: "h7a 1a1",
  phone: "514 555-0142",
  email: "Installations@Exemple.ca",
  tps: "123456789 RT0001",
  tvq: "1234567890 TQ0001",
  rbqDeclared: "1234-5678-90",
  confirm: true,
  ...over,
});

beforeEach(async () => {
  dir = await mkdtemp(path.join(tmpdir(), "thermo-identite-"));
  process.env = { ...env, GESTION_DATA_DIR: dir, TEXTOS_DATA_DIR: dir, ADMIN_EMAILS: BY, NODE_ENV: "test" };
  delete process.env.ADMIN_SESSION_SECRET;
  delete process.env.TEXTOS_ENVOIS_DEV;
  resetSecretCache();
  jar.value = undefined;
  mail.sendClientEmail.mockClear();
});
afterEach(async () => {
  process.env = env;
  resetSecretCache();
  await rm(dir, { recursive: true, force: true });
});

async function linkToken(): Promise<string> {
  const r = await issueIdentityLink(INSTALLER_ID, BY, ORIGIN, NOW);
  if (!r.ok) throw new Error(r.error);
  expect(r.email).toBe("simule");
  return r.link.split("/identite/")[1];
}

describe("accès", () => {
  it("les actions exigent la session ; la page publique n'est jamais indexée", async () => {
    const fd = new FormData();
    fd.set("legalName", "X");
    for (const call of [() => actions.saveIdentityAction(INSTALLER_ID, undefined, fd), () => actions.verifyIdentityAction(INSTALLER_ID), () => actions.sendIdentityLinkAction(INSTALLER_ID)]) {
      expect(digest(await call().then(() => null, (e: unknown) => e))).toContain("/gestion/connexion");
    }
    expect(await readPartenaires().then((d) => Object.keys(d.partners))).toEqual([]);
    expect(identiteMeta.robots).toMatchObject({ index: false, follow: false });
  });

  it("avec la session : identifiant validé avant toute écriture", async () => {
    jar.value = createSessionToken(BY, await getSessionSecret()).token;
    expect(await actions.verifyIdentityAction("../x")).toEqual({ ok: false, error: "Demande invalide." });
    await seedPartner({ identity: null });
    const fd = new FormData();
    fd.set("legalName", "Installations Exemple inc.");
    expect(await actions.saveIdentityAction(INSTALLER_ID, undefined, fd)).toMatchObject({ ok: true });
    expect((await readPartenaires()).partners[INSTALLER_ID].identity).toMatchObject({ legalName: "Installations Exemple inc.", source: "proprietaire", verifiedBy: BY });
  });

  it("route d'envoi : GET inerte, origine étrangère 403, jeton invalide 404", async () => {
    expect(sendGET().status).toBe(405);
    const post = (token: string, origin: string) => new NextRequest(`${ORIGIN}/identite/${token}/envoyer`, { method: "POST", body: new FormData(), headers: { origin, host: "localhost:3001", "x-forwarded-for": "203.0.113.4" } });
    const token = "A".repeat(43);
    expect((await sendPOST(post(token, "https://pirate.example"), params({ token }))).status).toBe(403);
    expect((await sendPOST(post("abc", ORIGIN), params({ token: "abc" }))).status).toBe(404);
  });
});

describe("le partenaire remplit, le propriétaire vérifie", () => {
  it("lien sécurisé : un seul envoi, identité « à vérifier », puis confirmée ; la licence déclarée complète la conformité", async () => {
    await seedPartner({ identity: null, rbqNumber: "" });
    const token = await linkToken();
    const view = await identityView(token, NOW);
    expect(view.state).toBe("a-remplir");
    if (view.state === "a-remplir") expect(view.values).toMatchObject({ phone: installer().phone, email: installer().email, legalName: "" });
    expect(JSON.stringify(await readPartenaires())).not.toContain(token);

    expect(await submitIdentity(token, form({ confirm: false }), { baseUrl: ORIGIN }, NOW)).toEqual({ ok: false, error: "confirm" });
    expect(await submitIdentity(token, form({ legalName: " " }), { baseUrl: ORIGIN }, NOW)).toEqual({ ok: false, error: "legalName" });
    expect(await submitIdentity(token, form(), { baseUrl: ORIGIN }, NOW)).toEqual({ ok: true });
    expect(await submitIdentity(token, form(), { baseUrl: ORIGIN }, NOW)).toEqual({ ok: false, error: "recu" });
    expect((await identityView(token, NOW)).state).toBe("recu");

    let rec = (await readPartenaires()).partners[INSTALLER_ID];
    expect(rec.identity).toMatchObject({ source: "partenaire", postalCode: "H7A 1A1", email: "installations@exemple.ca", rbqDeclared: "1234-5678-90" });
    expect(rec.identity?.verifiedAt).toBeUndefined();
    const g = { alertDays: 30, blockWhenMissing: false };
    expect(contractorStatusOf(installer(), rec, g, NOW)).toMatchObject({ verified: false, source: "partenaire", missing: ["licence RBQ"] });

    expect(await verifyIdentity(INSTALLER_ID, BY, NOW)).toEqual({ ok: true });
    rec = (await readPartenaires()).partners[INSTALLER_ID];
    expect(rec.compliance.rbq.number).toBe("1234-5678-90");
    expect(contractorStatusOf(installer(), rec, g, NOW)).toMatchObject({ verified: true, missing: [] });
  });

  it("lien expiré ou remplacé : refusé ; correction du propriétaire : vérifiée", async () => {
    await seedPartner({ identity: null });
    const old = await linkToken();
    const fresh = await linkToken();
    expect((await identityView(old, NOW)).state).toBe("invalide");
    const later = new Date(NOW.getTime() + 15 * 86_400_000);
    expect((await identityView(fresh, later)).state).toBe("expire");
    expect(await submitIdentity(fresh, form(), { baseUrl: ORIGIN }, later)).toEqual({ ok: false, error: "expire" });
    expect(await saveIdentity(INSTALLER_ID, { ...form(), postalCode: "H7A 1A1", email: "installations@exemple.ca" }, BY, NOW)).toEqual({ ok: true });
    expect((await readPartenaires()).partners[INSTALLER_ID].identity).toMatchObject({ source: "proprietaire", verifiedAt: NOW.toISOString() });
  });
});
