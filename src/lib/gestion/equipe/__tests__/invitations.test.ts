/* ==================================================================
   Chantier V — invitation (lien à durée limitée, usage unique),
   invitation expirée, 2e étape obligatoire pour les vendeurs,
   membre désactivé ou dont le rôle change (sessions fermées), et
   journal d'audit de chaque étape. Aucun envoi réel (NODE_ENV=test).
   ================================================================== */
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const jar = vi.hoisted(() => ({ values: new Map<string, string>() }));
vi.mock("next/headers", () => ({
  cookies: async () => ({
    get: (n: string) => (jar.values.has(n) ? { name: n, value: jar.values.get(n)! } : undefined),
    set: (n: string, v: string) => {
      if (v) jar.values.set(n, v);
      else jar.values.delete(n);
    },
  }),
  headers: async () => new Headers({ host: "localhost:3001", "x-forwarded-for": "198.51.100.8" }),
}));
vi.mock("next/cache", () => ({ refresh: vi.fn(), revalidatePath: vi.fn() }));

import HomePage from "@/app/gestion/(prive)/page";
import { acceptInvitationAction } from "@/app/gestion/connexion/invitation/actions";
import { cancelSetupAction, confirmSetupAction, finalizeSetupAction, startSetupAction } from "@/app/gestion/connexion/activer-deux-etapes/actions";
import { pendingEnrollment } from "../../securite/deux-etapes";
import { totp } from "../../securite/totp";
import * as teamActions from "@/app/gestion/(prive)/equipe/actions";
import { getSessionState } from "../../auth/dal";
import { consumeMagicLink, createMagicLink, peekMagicLink } from "../../auth/magic-link";
import { resetSecretCache } from "../../auth/secret";
import { resetCrmMemo } from "../../crm/service";
import { readAudit } from "../../securite/audit";
import { acceptInvite, inviteMember, peekInvite } from "../members";
import { canSignIn } from "../roles";
import { readTeam, mutateTeam } from "../store";
import { A, cookieFor, OWNER, seedTeam, testEnv } from "./helpers";

const env = process.env;
let dir: string;
const digest = (e: unknown) => String((e as { digest?: string })?.digest ?? "");
const rejected = async (p: Promise<unknown>) => digest(await p.then(() => null, (e: unknown) => e));
const sp = <T,>(v: T) => Promise.resolve(v);
const actions = async () => (await readAudit({ jours: 2 })).entries.map((e) => e.action);

beforeEach(async () => {
  dir = await mkdtemp(path.join(tmpdir(), "thermo-invitations-"));
  process.env = testEnv(dir);
  delete process.env.ADMIN_SESSION_SECRET;
  resetSecretCache();
  resetCrmMemo();
  jar.values.clear();
  vi.spyOn(console, "log").mockImplementation(() => undefined);
});
afterEach(async () => {
  process.env = env;
  vi.restoreAllMocks();
  resetSecretCache();
  await rm(dir, { recursive: true, force: true });
});

const fdOf = (o: Record<string, string>) => {
  const f = new FormData();
  for (const [k, v] of Object.entries(o)) f.set(k, v);
  return f;
};

describe("invitation", () => {
  it("le propriétaire invite : membre « invité », courriel simulé, jeton jamais renvoyé, audit", async () => {
    jar.values.set("tav_gestion", await cookieFor(OWNER, false));
    const r = await teamActions.inviteMemberAction(undefined, fdOf({ name: "Camille Exemple", email: "Camille@Exemple.ca", role: "vendeur", phone: "514 555-0171" }));
    expect(r).toEqual({ ok: true, message: "Invitation simulée (développement) : rien n’est parti." });
    const m = (await readTeam()).members[0];
    expect(m).toMatchObject({ email: "camille@exemple.ca", role: "vendeur", status: "invite", phone: "+15145550171" });
    expect(m.invite?.hash).toMatch(/^[0-9a-f]{64}$/);
    expect(JSON.stringify(r)).not.toContain("jeton");
    expect(await canSignIn("camille@exemple.ca")).toBe(false); // pas avant d'avoir accepté
    expect(await teamActions.inviteMemberAction(undefined, fdOf({ name: "Proprio", email: OWNER, role: "vendeur" }))).toMatchObject({ ok: false });
    expect(await actions()).toContain("equipe.invitation");
  });

  it("invitation acceptée : membre actif, session ouverte, puis 2e étape obligatoire avant tout ; usage unique ; audit", async () => {
    const inv = await inviteMember({ email: "camille@exemple.ca", name: "Camille", role: "vendeur" }, OWNER);
    if (!inv.ok) throw new Error(inv.error);
    expect(await peekInvite(inv.token)).toMatchObject({ state: "valide", name: "Camille" });
    expect(await rejected(acceptInvitationAction(fdOf({ jeton: inv.token })))).toContain(";/gestion;");
    expect(jar.values.get("tav_gestion")).toBeTruthy();
    expect((await readTeam()).members[0]).toMatchObject({ status: "actif" });
    expect((await readTeam()).settings.activeSince).toBeTruthy();
    // 2e étape obligatoire pour les vendeurs (réglage activé par défaut) : rien n'est ouvert avant.
    expect((await getSessionState()).status).toBe("mfa-setup");
    expect(await rejected(HomePage({ searchParams: sp({}) }))).toContain("/gestion/connexion/activer-deux-etapes");
    // Deuxième usage du même lien : refusé.
    expect(await peekInvite(inv.token)).toEqual({ state: "utilise" });
    expect(await rejected(acceptInvitationAction(fdOf({ jeton: inv.token })))).toContain("erreur=utilise");
    const log = await actions();
    expect(log).toEqual(expect.arrayContaining(["equipe.acceptee", "connexion.reussie", "connexion.echec"]));
  });

  it("2e étape obligatoire : activation guidée à la première connexion, puis l'accès s'ouvre ; audit", async () => {
    await seedTeam();
    jar.values.set("tav_gestion", await cookieFor(A.email, false));
    expect((await getSessionState()).status).toBe("mfa-setup");
    expect(await rejected(startSetupAction())).toContain("/gestion/connexion/activer-deux-etapes");
    const p = await pendingEnrollment(A.email);
    expect(p).toBeTruthy();
    expect(await confirmSetupAction(undefined, fdOf({ code: "000000" }))).toMatchObject({ ok: false });
    expect(await confirmSetupAction(undefined, fdOf({ code: totp(p!.secret) }))).toMatchObject({ ok: true, codes: expect.any(Array) });
    expect(await rejected(finalizeSetupAction(fdOf({})))).toContain("erreur=codes");
    expect(await rejected(finalizeSetupAction(fdOf({ notes: "oui" })))).toContain(";/gestion;");
    expect((await getSessionState()).status).toBe("ok");
    await expect(HomePage({ searchParams: sp({}) })).resolves.toBeTruthy();
    expect(await actions()).toContain("2fa.activee");
  });

  it("activation annulée : session fermée", async () => {
    await seedTeam();
    jar.values.set("tav_gestion", await cookieFor(A.email, false));
    expect(await rejected(cancelSetupAction())).toContain("/gestion/connexion?sortie=1");
    expect(jar.values.get("tav_gestion")).toBeUndefined();
  });

  it("réglage « 2e étape obligatoire pour les vendeurs » désactivé : l'accès s'ouvre sans code", async () => {
    await seedTeam({ require2faVendeurs: false });
    jar.values.set("tav_gestion", await cookieFor(A.email, false));
    expect((await getSessionState()).status).toBe("ok");
    await expect(HomePage({ searchParams: sp({}) })).resolves.toBeTruthy();
    await mutateTeam((d) => ((d.settings.require2faVendeurs = true), { result: undefined, changed: true }));
    expect(await rejected(HomePage({ searchParams: sp({}) }))).toContain("/gestion/connexion/activer-deux-etapes");
  });

  it("invitation expirée : refusée, notée au journal ; le propriétaire peut la renvoyer", async () => {
    const old = new Date(Date.now() - 8 * 86_400_000);
    const inv = await inviteMember({ email: "tardif@exemple.ca", name: "Tardif", role: "vendeur" }, OWNER, old);
    if (!inv.ok) throw new Error(inv.error);
    expect(await peekInvite(inv.token)).toEqual({ state: "expire" });
    expect(await acceptInvite(inv.token)).toEqual({ ok: false, error: "expire" });
    expect(await rejected(acceptInvitationAction(fdOf({ jeton: inv.token })))).toContain("erreur=expire");
    expect(jar.values.get("tav_gestion")).toBeUndefined();
    expect((await readTeam()).members[0].status).toBe("invite");
    expect((await readAudit({ jours: 2 })).entries.find((e) => e.action === "connexion.echec")).toMatchObject({ details: { raison: "expire", contexte: "invitation" } });
    jar.values.set("tav_gestion", await cookieFor(OWNER, false));
    expect(await teamActions.resendInviteAction((await readTeam()).members[0].id)).toMatchObject({ ok: true });
    expect(await peekInvite(inv.token)).toEqual({ state: "invalide" }); // l'ancien lien ne marche plus
  });
});

describe("membre désactivé, rôle changé", () => {
  it("désactivé : sessions fermées aussitôt, aucun lien de connexion ; réactivé : de nouveau permis ; audit", async () => {
    await seedTeam();
    const vendorCookie = await cookieFor(A.email);
    jar.values.set("tav_gestion", vendorCookie);
    await expect(HomePage({ searchParams: sp({}) })).resolves.toBeTruthy();
    const link = await createMagicLink(A.email);
    expect(await peekMagicLink(link)).toBe("valide");

    jar.values.set("tav_gestion", await cookieFor(OWNER, false));
    expect(await teamActions.setStatusAction(A.id, false)).toMatchObject({ ok: true });

    jar.values.set("tav_gestion", vendorCookie);
    expect(await rejected(HomePage({ searchParams: sp({}) }))).toContain("/gestion/connexion");
    expect(await canSignIn(A.email)).toBe(false);
    expect(await peekMagicLink(link)).toBe("invalide");
    expect(await consumeMagicLink(link)).toEqual({ error: "invalide" });

    jar.values.set("tav_gestion", await cookieFor(OWNER, false));
    expect(await teamActions.setStatusAction(A.id, true)).toMatchObject({ ok: true });
    expect(await canSignIn(A.email)).toBe(true);
    // L'ancienne session reste fermée (jeton émis avant la désactivation).
    jar.values.set("tav_gestion", vendorCookie);
    expect(await rejected(HomePage({ searchParams: sp({}) }))).toContain("/gestion/connexion");
    expect(await actions()).toEqual(expect.arrayContaining(["equipe.desactive", "equipe.reactive"]));
  });

  it("rôle changé : sessions fermées, nouveau rôle appliqué ; audit", async () => {
    await seedTeam();
    const vendorCookie = await cookieFor(A.email);
    jar.values.set("tav_gestion", await cookieFor(OWNER, false));
    expect(await teamActions.setRoleAction(A.id, "adjoint")).toMatchObject({ ok: true });
    jar.values.set("tav_gestion", vendorCookie);
    expect(await rejected(HomePage({ searchParams: sp({}) }))).toContain("/gestion/connexion");
    await new Promise((ok) => setTimeout(ok, 1100)); // nouveau jeton, émis après la fermeture (secondes)
    jar.values.set("tav_gestion", await cookieFor(A.email));
    expect(await getSessionState()).toMatchObject({ status: "ok", session: { role: "adjoint", userId: A.id } });
    expect((await readAudit({ jours: 2 })).entries.find((e) => e.action === "equipe.role")).toMatchObject({ qui: OWNER, details: { membre: A.id, de: "vendeur", vers: "adjoint" } });
  });

  it("supprimé : plus rien ; audit", async () => {
    await seedTeam();
    const vendorCookie = await cookieFor(A.email);
    jar.values.set("tav_gestion", await cookieFor(OWNER, false));
    expect(await rejected(teamActions.deleteMemberAction(A.id, undefined, fdOf({ confirmer: "oui" })))).toContain("/gestion/equipe?supprime=1");
    jar.values.set("tav_gestion", vendorCookie);
    expect(await rejected(HomePage({ searchParams: sp({}) }))).toContain("/gestion/connexion");
    expect(await actions()).toContain("equipe.supprime");
  });
});
