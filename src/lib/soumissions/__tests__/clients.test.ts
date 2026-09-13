/* « Trouver un client » : l'action exige la session ; 10 résultats au plus ; la liste ne contient que le nom, la ville,
   l'étape et les 4 derniers chiffres (jamais le courriel ni le numéro complet) ; les coordonnées complètes ne partent
   que pour le client choisi. Données fictives dans un dossier temporaire. */
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const jar = vi.hoisted(() => ({ value: undefined as string | undefined }));
vi.mock("next/headers", () => ({
  cookies: async () => ({
    get: (name: string) => (name === "tav_gestion" && jar.value ? { name, value: jar.value } : undefined),
    set: vi.fn(),
  }),
  headers: async () => new Headers({ host: "localhost:3001" }),
}));
vi.mock("next/cache", () => ({ refresh: vi.fn(), revalidatePath: vi.fn() }));

import * as actions from "@/app/gestion/soumissions/actions";
import { createSessionToken } from "@/lib/gestion/auth/session-token";
import { getSessionSecret, resetSecretCache } from "@/lib/gestion/auth/secret";
import { resetCrmMemo } from "@/lib/gestion/crm/service";
import { CLIENT_SEARCH_LIMIT } from "../clients";
import { createQuote } from "../quote";
import { mutateSoumissions } from "../store";
import { NOW, readyContent } from "./fixtures";

const env = process.env;
let dir: string;
const digest = (e: unknown) => String((e as { digest?: string })?.digest ?? "");

beforeEach(async () => {
  dir = await mkdtemp(path.join(tmpdir(), "thermo-soum-clients-"));
  process.env = { ...env, GESTION_DATA_DIR: dir, LEAD_JOURNAL_DIR: path.join(dir, "leads"), TEXTOS_DATA_DIR: dir, RELANCES_FILE: path.join(dir, "relances.json"), ADMIN_EMAILS: "proprio@exemple.ca", NODE_ENV: "test" };
  delete process.env.ADMIN_SESSION_SECRET;
  resetSecretCache();
  resetCrmMemo();
  jar.value = undefined;
  // Douze clients fictifs « Exemple », à Laval, chacun avec son courriel et son numéro.
  await mutateSoumissions((d) => {
    for (let i = 0; i < 12; i++) {
      const c = readyContent();
      c.client = { firstName: `Client${i}`, lastName: "Exemple", email: `client${i}@exemple.ca`, phone: `514 555-01${String(i).padStart(2, "0")}`, address: `${i + 1} rue Fictive`, city: "Laval", postalCode: "H7A 1A1" };
      createQuote(d, c, "proprio@exemple.ca", NOW);
    }
    return { result: null, changed: true };
  });
});

afterEach(async () => {
  process.env = env;
  resetSecretCache();
  resetCrmMemo();
  await rm(dir, { recursive: true, force: true });
});

describe("recherche de clients depuis le créateur", () => {
  it("sans session : renvoi vers la connexion, rien n'est lu", async () => {
    expect(digest(await actions.searchClientsAction("Exemple").then(() => null, (e) => e))).toContain("/gestion/connexion");
    expect(digest(await actions.pickClientAction("c_0123456789ab").then(() => null, (e) => e))).toContain("/gestion/connexion");
  });

  it("10 résultats au plus, seulement nom, ville, étape et 4 derniers chiffres", async () => {
    jar.value = createSessionToken("proprio@exemple.ca", await getSessionSecret()).token;
    const list = await actions.searchClientsAction("Exemple");
    expect(CLIENT_SEARCH_LIMIT).toBe(10);
    expect(list).toHaveLength(10);
    for (const h of list) {
      expect(Object.keys(h).sort()).toEqual(["city", "id", "last4", "name", "stage"]);
      expect(h.id).toMatch(/^c_[0-9a-f]{12}$/);
      expect(h.city).toBe("Laval");
      expect(h.last4).toMatch(/^\d{4}$/);
    }
    const json = JSON.stringify(list);
    expect(json).not.toContain("@");
    expect(json).not.toMatch(/\d{7,}/);
    expect(json).not.toContain("rue Fictive");
  });

  it("par téléphone, par courriel ou par ville ; moins de 2 caractères : rien", async () => {
    jar.value = createSessionToken("proprio@exemple.ca", await getSessionSecret()).token;
    expect((await actions.searchClientsAction("514 555-0105")).map((h) => h.name)).toEqual(["Client5 Exemple"]);
    expect((await actions.searchClientsAction("client7@exemple.ca")).map((h) => h.name)).toEqual(["Client7 Exemple"]);
    expect(await actions.searchClientsAction("Laval")).toHaveLength(10);
    expect(await actions.searchClientsAction("E")).toEqual([]);
    expect(await actions.searchClientsAction(42)).toEqual([]);
  });

  it("le client choisi : ses coordonnées complètes, pour le formulaire ; identifiant invalide refusé", async () => {
    jar.value = createSessionToken("proprio@exemple.ca", await getSessionSecret()).token;
    const [hit] = await actions.searchClientsAction("514 555-0103");
    const r = await actions.pickClientAction(hit.id);
    expect(r).toEqual({ ok: true, client: { id: hit.id, firstName: "Client3", lastName: "Exemple", email: "client3@exemple.ca", phone: expect.stringContaining("555"), address: "4 rue Fictive", city: "Laval", postalCode: expect.stringMatching(/^H7A/) } });
    expect(await actions.pickClientAction("../../etc")).toEqual({ ok: false, error: "Client introuvable." });
    expect(await actions.pickClientAction("c_ffffffffffff")).toEqual({ ok: false, error: "Client introuvable." });
  });
});
