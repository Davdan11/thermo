/* Candidatures de /partenaires : conservées en plus du courriel interne, marques et régions devinées. */
import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { NextRequest } from "next/server";

const email = vi.hoisted(() => ({ sendInternalMessage: vi.fn() }));
vi.mock("@/lib/crm/email", () => email);

import { POST } from "@/app/api/partenaires/route";
import { brandHints, regionHints } from "../candidatures";
import { readCandidatures } from "../store";

const valid = {
  company: "Réfrigération Boréale inc.",
  rbq: "5678-1234-01",
  contact: "Julie Gagnon",
  phone: "450 555-0199",
  email: "julie@boreale.ca",
  brands: "Daikin, Mitsubishi et LG",
  volume: "50 à 150",
  region: "Rive-Sud, Montérégie",
  website: "",
};

let ip = 0;
const post = (body: unknown) =>
  POST(new NextRequest("http://localhost:3001/api/partenaires", { method: "POST", headers: { "content-type": "application/json", "x-forwarded-for": `192.0.2.${++ip}` }, body: JSON.stringify(body) }));

describe("POST /api/partenaires", () => {
  const env = process.env;
  let dir: string;
  beforeEach(async () => {
    dir = await mkdtemp(path.join(tmpdir(), "thermo-cand-"));
    process.env = { ...env, GESTION_DATA_DIR: dir, NODE_ENV: "test" };
    vi.clearAllMocks();
    email.sendInternalMessage.mockResolvedValue(true);
  });
  afterEach(async () => {
    process.env = env;
    await rm(dir, { recursive: true, force: true });
  });

  it("conserve la candidature et envoie toujours le courriel interne", async () => {
    const res = await post(valid);
    expect(res.status).toBe(200);
    const { candidatures } = await readCandidatures();
    expect(candidatures).toHaveLength(1);
    expect(candidatures[0]).toMatchObject({ company: "Réfrigération Boréale inc.", rbq: "5678-1234-01", brandsText: "Daikin, Mitsubishi et LG", regionText: "Rive-Sud, Montérégie", status: "nouvelle" });
    expect(candidatures[0].id).toMatch(/^c_[A-Za-z0-9_-]{8,16}$/);
    expect(email.sendInternalMessage).toHaveBeenCalledWith(expect.objectContaining({ kind: "partenaire" }));
  });

  it("courriel en panne : la candidature conservée suffit", async () => {
    email.sendInternalMessage.mockResolvedValue(false);
    expect((await post(valid)).status).toBe(200);
    expect((await readCandidatures()).candidatures).toHaveLength(1);
  });

  it("503 seulement si ni le fichier ni le courriel ne fonctionnent", async () => {
    email.sendInternalMessage.mockResolvedValue(false);
    const blocker = path.join(dir, "pas-un-dossier");
    await writeFile(blocker, "x");
    process.env.GESTION_DATA_DIR = path.join(blocker, "sous-dossier");
    const spy = vi.spyOn(console, "error").mockImplementation(() => undefined);
    expect((await post(valid)).status).toBe(503);
    spy.mockRestore();
  });

  it("pot de miel rempli : rien n'est conservé", async () => {
    expect((await post({ ...valid, website: "http://spam.example" })).status).toBe(200);
    expect((await readCandidatures()).candidatures).toHaveLength(0);
    expect(email.sendInternalMessage).not.toHaveBeenCalled();
  });
});

describe("indices tirés du texte libre", () => {
  const brands = [
    { id: "daikin", name: "Daikin" },
    { id: "fujitsu", name: "Fujitsu" },
    { id: "mitsubishi-electric", name: "Mitsubishi Electric" },
    { id: "lg", name: "LG" },
    { id: "ge", name: "GE" },
    { id: "ge-appliances", name: "GE Appliances" },
  ];

  it("marques : nom partiel, séparateurs variés, sans faux positifs", () => {
    expect(brandHints("Daikin, Fujitsu et Mitsubishi", brands).sort()).toEqual(["daikin", "fujitsu", "mitsubishi-electric"]);
    expect(brandHints("LG / GE", brands).sort()).toEqual(["ge", "lg"]);
    expect(brandHints("Fujitsu General", brands)).toEqual(["fujitsu"]);
    expect(brandHints("toutes les marques", brands)).toEqual([]);
  });

  it("régions : nom officiel, appellation courante ou ville du site", () => {
    expect(regionHints("Montérégie, Rive-Sud et Laval").sort()).toEqual(["13", "16"]);
    expect(regionHints("Sherbrooke / Magog")).toEqual(["05"]);
    expect(regionHints("Grand Montréal, Laurentides").sort()).toEqual(["06", "15"]);
    expect(regionHints("Québec et Lévis").sort()).toEqual(["03", "12"]);
  });
});
