/* Chantier S — clés et connexions (liste blanche, formats, valeur jamais réaffichée, écriture sûre du .env,
   refus hors du dossier d'essai, redémarrage en production seulement) et journal d'audit sans secret. */
import { mkdir, mkdtemp, readFile, readdir, rm, stat, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { audit, auditDir, readAudit, sanitizeDetails } from "../audit";
import { isAllowedKey, keyStatuses, KEY_SPECS, setKey, validateKeyValue } from "../cles";
import { envTestDir, reloadCommand, reloadEnv, replaceEnvVar, resolveEnvTarget, scheduleReload, writeEnvVar, type Spawner } from "../env-file";

const env = process.env;
let dir: string;

/* Fausses valeurs assemblées à l'exécution : aucune chaîne qui ressemble à une vraie clé dans le dépôt. */
const fake = {
  stripe: ["sk", "live", "Z".repeat(30)].join("_"),
  anthropic: ["sk", "ant", "api03", "Q".repeat(40)].join("-"),
  meta: "EAA" + "B".repeat(120),
  gemini: "AIza" + "C".repeat(35),
  whsec: ["whsec", "D".repeat(32)].join("_"),
};

beforeEach(async () => {
  dir = await mkdtemp(path.join(tmpdir(), "thermo-cles-"));
  process.env = { ...env, GESTION_DATA_DIR: dir, NODE_ENV: "test" };
  delete process.env.GESTION_ENV_FILE;
  delete process.env.STRIPE_SECRET_KEY;
});
afterEach(async () => {
  process.env = env;
  await rm(dir, { recursive: true, force: true });
});

describe("liste blanche et formats", () => {
  it("seules les variables prévues ; les autres sont refusées", () => {
    for (const n of ["META_PAGE_TOKEN", "GOOGLE_ADS_DEVELOPER_TOKEN", "ANTHROPIC_API_KEY", "STRIPE_SECRET_KEY", "GEMINI_API_KEY", "ELEVENLABS_API_KEY", "GOOGLE_REVIEW_URL", "BACKUP_S3_SECRET", "BACKUP_ENCRYPTION_KEY"]) expect(isAllowedKey(n)).toBe(true);
    for (const n of ["ADMIN_EMAILS", "ADMIN_SESSION_SECRET", "TWILIO_AUTH_TOKEN", "SMTP_PASS", "NODE_ENV", "GESTION_2FA_DESACTIVEE", "PATH"]) {
      expect(isAllowedKey(n)).toBe(false);
      expect(validateKeyValue(n, "x")).toMatchObject({ ok: false });
    }
  });

  it("valide chaque format", () => {
    expect(validateKeyValue("STRIPE_SECRET_KEY", fake.stripe)).toMatchObject({ ok: true });
    expect(validateKeyValue("STRIPE_SECRET_KEY", "pk_live_abc")).toMatchObject({ ok: false });
    expect(validateKeyValue("STRIPE_WEBHOOK_SECRET", fake.whsec)).toMatchObject({ ok: true });
    expect(validateKeyValue("ANTHROPIC_API_KEY", fake.anthropic)).toMatchObject({ ok: true });
    expect(validateKeyValue("ANTHROPIC_API_KEY", "sk-autre")).toMatchObject({ ok: false });
    expect(validateKeyValue("META_PAGE_TOKEN", fake.meta)).toMatchObject({ ok: true });
    expect(validateKeyValue("META_PAGE_ID", "12345678901")).toMatchObject({ ok: true });
    expect(validateKeyValue("META_PAGE_ID", "12a45")).toMatchObject({ ok: false });
    expect(validateKeyValue("GEMINI_API_KEY", fake.gemini)).toMatchObject({ ok: true });
    expect(validateKeyValue("GOOGLE_ADS_CUSTOMER_ID", "123-456-7890")).toEqual({ ok: true, value: "1234567890" });
    expect(validateKeyValue("GOOGLE_REVIEW_URL", "https://g.page/r/exemple/review")).toMatchObject({ ok: true });
    expect(validateKeyValue("GOOGLE_REVIEW_URL", "https://pirate.example/avis")).toMatchObject({ ok: false });
    expect(validateKeyValue("GOOGLE_REVIEW_URL", "http://g.page/r/x")).toMatchObject({ ok: false });
    expect(validateKeyValue("BACKUP_ENCRYPTION_KEY", "a".repeat(64))).toMatchObject({ ok: true });
    expect(validateKeyValue("BACKUP_ENCRYPTION_KEY", "a".repeat(63))).toMatchObject({ ok: false });
    expect(validateKeyValue("BACKUP_S3_ENDPOINT", "https://s3.us-east-005.backblazeb2.com/")).toEqual({ ok: true, value: "https://s3.us-east-005.backblazeb2.com" });
    expect(validateKeyValue("BACKUP_S3_REGION", "us-east-005")).toMatchObject({ ok: true });
    // Caractères dangereux pour dotenv ou le shell.
    expect(validateKeyValue("META_PAGE_TOKEN", `EAA${"a".repeat(50)}$HOME`)).toMatchObject({ ok: false });
    expect(validateKeyValue("META_PAGE_TOKEN", `EAA${"a".repeat(50)}'`)).toMatchObject({ ok: false });
    expect(validateKeyValue("META_PAGE_TOKEN", `EAA${"a".repeat(50)}\nADMIN_EMAILS=pirate@exemple.ca`)).toMatchObject({ ok: false });
    expect(validateKeyValue("META_PAGE_TOKEN", "  ")).toMatchObject({ ok: false });
  });

  it("chaque clé a un libellé et un format décrit sans exemple de vraie valeur", () => {
    for (const s of KEY_SPECS) {
      expect(s.label.length).toBeGreaterThan(3);
      expect(s.hint).not.toMatch(/[A-Za-z0-9]{24,}/);
    }
  });
});

describe("écriture sûre du .env (fichier d'essai)", () => {
  it("remplacement propre : autres lignes, commentaires et fins de ligne intacts ; doublons retirés", () => {
    const crlf = "# Commentaire\r\nA=1\r\nSTRIPE_SECRET_KEY=ancienne\r\nB='deux'\r\nexport STRIPE_SECRET_KEY=doublon\r\n";
    const r = replaceEnvVar(crlf, "STRIPE_SECRET_KEY", "nouvelle");
    expect(r.text).toBe("# Commentaire\r\nA=1\r\nSTRIPE_SECRET_KEY=nouvelle\r\nB='deux'\r\n");
    expect(replaceEnvVar("A=1", "GOOGLE_REVIEW_URL", "https://g.page/r/x?y=1&z=2").text).toBe("A=1\nGOOGLE_REVIEW_URL='https://g.page/r/x?y=1&z=2'\n");
    expect(replaceEnvVar("A=1\nMETA_PAGE_ID=5\n", "META_PAGE_ID", null).text).toBe("A=1\n");
    expect(replaceEnvVar("A=1\n", "A", "1").changed).toBe(false);
  });

  it("copie de sauvegarde, remplacement, droits 600", async () => {
    const target = await resolveEnvTarget();
    expect(target.file).toBe(path.join(envTestDir(), ".env"));
    await mkdir(path.dirname(target.file), { recursive: true });
    await writeFile(target.file, "A=1\nSTRIPE_SECRET_KEY=ancienne\n");
    const r = await writeEnvVar("STRIPE_SECRET_KEY", "nouvelle", { target });
    expect(r.changed).toBe(true);
    expect(await readFile(target.file, "utf8")).toBe("A=1\nSTRIPE_SECRET_KEY=nouvelle\n");
    expect(await readFile(r.backup!, "utf8")).toBe("A=1\nSTRIPE_SECRET_KEY=ancienne\n");
    expect((await readdir(path.dirname(target.file))).filter((n) => n.endsWith(".lock") || n.endsWith(".tmp"))).toEqual([]);
    if (process.platform !== "win32") {
      expect((await stat(target.file)).mode & 0o777).toBe(0o600);
      expect((await stat(r.backup!)).mode & 0o777).toBe(0o600);
    }
  });

  it("hors production : refuse tout fichier hors du dossier d'essai (.env.local compris)", async () => {
    process.env.GESTION_ENV_FILE = path.join(process.cwd(), ".env.local");
    await expect(resolveEnvTarget()).rejects.toThrow(/fichier d’essai/);
    process.env.GESTION_ENV_FILE = path.join(dir, "ailleurs", ".env");
    await expect(resolveEnvTarget()).rejects.toThrow(/fichier d’essai/);
    await expect(writeEnvVar("STRIPE_SECRET_KEY", "x", { target: { file: path.join(dir, "ailleurs", ".env"), mode: "essai" } })).rejects.toThrow(/fichier d’essai/);
    const r = await setKey("STRIPE_SECRET_KEY", fake.stripe, { by: "proprio@exemple.ca" });
    expect(r).toMatchObject({ ok: false });
    await expect(readFile(path.join(process.cwd(), ".env.local.lock"))).rejects.toThrow();
  });
});

describe("valeur jamais réaffichée", () => {
  it("setKey : message et état sans la valeur ; audit sans la valeur ; aucun redémarrage hors production", async () => {
    const spawner = vi.fn() as unknown as Spawner;
    const r = await setKey("STRIPE_SECRET_KEY", fake.stripe, { by: "proprio@exemple.ca", ip: "198.51.100.7", spawner });
    expect(r).toMatchObject({ ok: true, restart: "hors-production" });
    expect(JSON.stringify(r)).not.toContain(fake.stripe);
    expect(spawner).not.toHaveBeenCalled();

    const statuses = await keyStatuses();
    const stripe = statuses.find((s) => s.name === "STRIPE_SECRET_KEY")!;
    expect(stripe).toMatchObject({ defined: true, pendingRestart: true });
    expect(Object.keys(stripe).sort()).toEqual(["applies", "defined", "group", "hint", "label", "name", "pendingRestart"]);
    expect(JSON.stringify(statuses)).not.toContain(fake.stripe);
    expect(statuses.find((s) => s.name === "GEMINI_API_KEY")!.defined).toBe(false);

    const log = (await readdir(auditDir())).map((f) => f);
    const raw = (await Promise.all(log.map((f) => readFile(path.join(auditDir(), f), "utf8")))).join("");
    expect(raw).toContain("STRIPE_SECRET_KEY");
    expect(raw).toContain("cle.modifiee");
    expect(raw).not.toContain(fake.stripe);

    expect(await setKey("STRIPE_SECRET_KEY", null, { by: "proprio@exemple.ca" })).toMatchObject({ ok: true });
    expect((await keyStatuses()).find((s) => s.name === "STRIPE_SECRET_KEY")!.defined).toBe(false);
  });

  it("production : redémarrage détaché `pm2 reload thermo --update-env`, sans les variables de .env", () => {
    const unref = vi.fn();
    const spawner = vi.fn(() => ({ unref })) as unknown as Spawner;
    const prodEnv = { NODE_ENV: "production", PATH: "/usr/bin", HOME: "/root", PORT: "3003", STRIPE_SECRET_KEY: fake.stripe, PM2_BIN: "/opt/pm2" } as NodeJS.ProcessEnv;
    expect(scheduleReload(spawner, prodEnv)).toBe("planifie");
    const call = (spawner as unknown as ReturnType<typeof vi.fn>).mock.calls[0];
    expect(call[0]).toBe("/bin/sh");
    expect(call[1].slice(2)).toEqual(["/opt/pm2", "reload", "thermo", "--update-env"]);
    expect(call[2]).toMatchObject({ detached: true, stdio: "ignore" });
    expect(call[2].env.STRIPE_SECRET_KEY).toBeUndefined();
    expect(call[2].env).toMatchObject({ NODE_ENV: "production", PORT: "3003", HOME: "/root" });
    expect(unref).toHaveBeenCalled();
    expect(reloadCommand({ PM2_APP_NAME: "thermo; rm -rf /" }).args).toEqual(["reload", "thermo", "--update-env"]);
    expect(Object.keys(reloadEnv(prodEnv))).not.toContain("STRIPE_SECRET_KEY");
    expect(scheduleReload(spawner, { NODE_ENV: "development" })).toBe("hors-production");
  });
});

describe("journal d'audit sans secret", () => {
  it("nettoyage : champs sensibles et valeurs qui ressemblent à une clé masqués", () => {
    const d = sanitizeDetails({ variable: "META_PAGE_TOKEN", valeur: "x", token: "y", code: "123456", note: fake.anthropic, lien: fake.meta, client: "c_abc123", n: 3, ok: true, obj: { a: 1 } })!;
    expect(d).toMatchObject({ variable: "META_PAGE_TOKEN", valeur: "[masqué]", token: "[masqué]", code: "[masqué]", note: "[masqué]", lien: "[masqué]", client: "c_abc123", n: 3, ok: true, obj: "[ignoré]" });
  });

  it("écrit une ligne par action, filtrable, sans secret", async () => {
    await audit("cle.modifiee", { variable: "GEMINI_API_KEY", valeur: fake.gemini }, { qui: "proprio@exemple.ca", ip: "198.51.100.7", now: new Date("2026-09-13T10:00:00Z") });
    await audit("connexion.echec", { raison: "expire" }, { qui: null, ip: "203.0.113.5", now: new Date("2026-09-13T11:00:00Z") });
    await audit("paiement.marque", { facture: "f_123", moyen: "virement" }, { qui: "proprio@exemple.ca", ip: "198.51.100.7", now: new Date("2026-09-13T12:00:00Z") });
    const raw = await readFile(path.join(auditDir(), "2026-09.jsonl"), "utf8");
    expect(raw.trim().split("\n")).toHaveLength(3);
    expect(raw).not.toContain(fake.gemini);
    const now = new Date("2026-09-14T00:00:00Z");
    expect((await readAudit({ now })).entries.map((e) => e.action)).toEqual(["paiement.marque", "connexion.echec", "cle.modifiee"]);
    expect((await readAudit({ now, famille: "cles" })).entries).toHaveLength(1);
    expect((await readAudit({ now, famille: "echecs" })).entries[0].action).toBe("connexion.echec");
    expect((await readAudit({ now, q: "f_123" })).entries).toHaveLength(1);
    expect((await readAudit({ now: new Date("2026-11-30T00:00:00Z"), jours: 30 })).entries).toHaveLength(0);
  });

  it("ne lève jamais d'erreur (dossier impossible à créer)", async () => {
    process.env.GESTION_DATA_DIR = path.join(dir, "fichier");
    await writeFile(path.join(dir, "fichier"), "pas un dossier");
    const spy = vi.spyOn(console, "error").mockImplementation(() => undefined);
    await expect(audit("export", { quoi: "paiements" }, { qui: "proprio@exemple.ca", ip: "1.2.3.4" })).resolves.toBeUndefined();
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});
