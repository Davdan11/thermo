/* ==================================================================
   Refonte R1 — pages refaites, avec de vraies sessions (propriétaire,
   adjointe, vendeurs A et B) :
     · « Aujourd'hui » et « Tableau de bord » : chaque vendeur ne voit
       que les siens ; ancien lien ?periode= renvoyé au tableau de bord
     · fiche client en onglets : TOUTES les cartes d'avant sont là, dans
       leur onglet, avec leurs conditions de rôle (owner, staff)
     · Installateurs et Partenaires fusionnés : une liste, une fiche en
       onglets (identité, conformité, entente, performance,
       disponibilités, paiements, historique), réservée au propriétaire
   Aucun envoi réel : NODE_ENV=test, aucune action appelée.
   ================================================================== */
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const jar = vi.hoisted(() => ({ value: undefined as string | undefined }));
vi.mock("next/headers", () => ({
  cookies: async () => ({ get: (n: string) => (n === "tav_gestion" && jar.value ? { name: n, value: jar.value } : undefined), set: vi.fn() }),
  headers: async () => new Headers({ host: "localhost:3001", "x-forwarded-for": "198.51.100.7" }),
}));
vi.mock("next/cache", () => ({ refresh: vi.fn(), revalidatePath: vi.fn() }));

import TodayPage from "@/app/gestion/(prive)/page";
import DashboardPage from "@/app/gestion/(prive)/tableau-de-bord/page";
import ClientPage from "@/app/gestion/(prive)/clients/[id]/page";
import PartenairesPage from "@/app/gestion/(prive)/partenaires/page";
import PartnerPage from "@/app/gestion/(prive)/partenaires/[id]/page";
import NewInstallerPage from "@/app/gestion/(prive)/partenaires/nouveau/page";
import { Tabs } from "@/components/gestion/kit/Tabs";
import { HomeView } from "@/components/gestion/crm/HomeView";
import { TodayView } from "@/components/gestion/crm/TodayView";
import { ArgentStrip } from "@/components/gestion/argent/ArgentStrip";
import { AccessNotice, MaCarte } from "@/components/gestion/equipe/MaCarte";
import { AcquisitionCard } from "@/components/gestion/rentabilite/AcquisitionCard";
import { AdsClientPanel } from "@/components/gestion/publicite/AdsClientPanel";
import { ApresVentePanel } from "@/components/gestion/argent/ApresVentePanel";
import { AssignCard } from "@/components/gestion/equipe/AssignCard";
import { AssistantSummarizeButton } from "@/components/gestion/assistant/SummarizeButton";
import { ClientPhotoDossier } from "@/components/partenaires/admin/ClientPhotoDossier";
import { ClientTelephonieCard } from "@/components/gestion/telephonie/ClientTelephonieCard";
import { ClientVisitsCard } from "@/components/gestion/visites/ClientVisitsCard";
import { ComplexTasksCard } from "@/components/gestion/ventes/ComplexTasks";
import { MaskedCallButton } from "@/components/gestion/telephonie/CallButton";
import { SeasonConsentCard } from "@/components/gestion/ventes/SeasonConsent";
import { ThermoMatchPanel } from "@/components/gestion/ventes/ThermoMatch";
import { ParcoursPanel } from "@/components/contrats/ParcoursPanel";
import { InstallerForm } from "@/components/gestion/InstallerForm";
import { RbqRegistryCard } from "@/components/gestion/reseau/RbqRegistryCard";
import { PartnerContractCard } from "@/components/contrats/PartnerContractCard";
import { CitationForm } from "@/components/partenaires/admin/CitationForm";
import { AvailabilityLinkButton } from "@/components/gestion/portail/PortalForms";
import { resetSecretCache } from "../../auth/secret";
import { resetCrmMemo } from "../../crm/service";
import { A, ADJ, B, cookieFor, OWNER, seedClients, seedTeam, testEnv, txt, type Seed } from "../../equipe/__tests__/helpers";
import { seedPartner } from "@/lib/soumissions/__tests__/partner-fixtures";
import { INSTALLER_ID } from "@/lib/soumissions/__tests__/fixtures";

const env = process.env;
let dir: string;
let s: Seed;
const sp = <T,>(v: T) => Promise.resolve(v);
const as = async (email: string) => {
  jar.value = await cookieFor(email);
};
const digest = (e: unknown) => String((e as { digest?: string })?.digest ?? "");
const rejected = async (p: Promise<unknown>) => digest(await p.then(() => null, (e: unknown) => e));
const REFUSED = "/gestion?acces=refuse";

/** Types de composants présents dans un arbre rendu par une page serveur (props comprises, panneaux des onglets aussi). */
function types(node: unknown): Set<unknown> {
  const out = new Set<unknown>();
  const seen = new WeakSet<object>();
  const walk = (v: unknown): void => {
    if (!v || typeof v !== "object" || seen.has(v)) return;
    seen.add(v);
    if (Array.isArray(v)) return v.forEach(walk);
    const el = v as { $$typeof?: unknown; type?: unknown; props?: unknown };
    if (el.$$typeof) {
      out.add(el.type);
      return walk(el.props);
    }
    for (const [k, x] of Object.entries(v)) if (k !== "_owner" && k !== "_store" && k !== "_debugInfo") walk(x);
  };
  walk(node);
  return out;
}
/** Props du composant d'onglets d'une fiche. */
function tabsOf(node: unknown): { tabs: Array<{ id: string }>; panels: Record<string, unknown>; initial?: string } {
  let found: { tabs: Array<{ id: string }>; panels: Record<string, unknown>; initial?: string } | null = null;
  const seen = new WeakSet<object>();
  const walk = (v: unknown): void => {
    if (found || !v || typeof v !== "object" || seen.has(v)) return;
    seen.add(v);
    if (Array.isArray(v)) return v.forEach(walk);
    const el = v as { $$typeof?: unknown; type?: unknown; props?: Record<string, unknown> };
    if (el.$$typeof) {
      if (el.type === Tabs) found = el.props as never;
      else walk(el.props);
      return;
    }
    for (const x of Object.values(v)) walk(x);
  };
  walk(node);
  if (!found) throw new Error("onglets introuvables");
  return found;
}

beforeEach(async () => {
  dir = await mkdtemp(path.join(tmpdir(), "thermo-refonte-"));
  process.env = testEnv(dir);
  delete process.env.ADMIN_SESSION_SECRET;
  resetSecretCache();
  resetCrmMemo();
  jar.value = undefined;
  vi.clearAllMocks();
  vi.spyOn(console, "log").mockImplementation(() => undefined);
  await seedTeam();
  s = await seedClients(dir);
});
afterEach(async () => {
  process.env = env;
  vi.restoreAllMocks();
  resetSecretCache();
  await rm(dir, { recursive: true, force: true });
});

describe("Aujourd'hui et Tableau de bord", () => {
  it("vendeur A : ses actions (Rappeler Alice), rien de Bruno, dans les deux onglets", async () => {
    await as(A.email);
    const today = await TodayPage({ searchParams: sp({}) });
    const dash = await DashboardPage({ searchParams: sp({}) });
    for (const [name, out] of [["aujourd'hui", txt(today)], ["tableau de bord", txt(dash)]] as const) {
      expect(out, name).not.toContain("Bruno");
      expect(out, name).not.toContain(s.convB);
      expect(out, name).not.toContain(s.quoteB);
      expect(out, name).not.toContain("555-0162");
      expect(out, name).not.toContain("bruno@exemple.ca");
      expect(out, name).not.toContain("Tâche perso de B");
    }
    expect(txt(today)).toContain("Rappeler Alice");
    expect(types(today).has(TodayView)).toBe(true);
    expect(types(today).has(MaCarte)).toBe(true);
    expect(types(dash).has(HomeView)).toBe(true);
    expect(types(dash).has(ArgentStrip)).toBe(false);
  });

  it("vendeur B : ses actions, sa tâche personnelle comprise ; rien d'Alice", async () => {
    await as(B.email);
    const out = txt(await TodayPage({ searchParams: sp({}) }));
    expect(out).toContain("Rappeler Bruno");
    expect(out).toContain("Tâche perso de B");
    expect(out).not.toContain("Alice");
    expect(out).not.toContain(s.convA);
  });

  it("propriétaire : tout (les 5 plus urgentes des deux vendeurs) ; bloc 05 (partenaires et après-vente) toujours dans le tableau de bord", async () => {
    await as(OWNER);
    const out = txt(await TodayPage({ searchParams: sp({}) }));
    expect(out).toContain("Alice");
    expect(out).toContain("Bruno");
    expect(types(await DashboardPage({ searchParams: sp({}) })).has(ArgentStrip)).toBe(true);
  });

  it("ancien lien ?periode= de l'accueil → tableau de bord ; ?acces=refuse : l'avis s'affiche sur Aujourd'hui", async () => {
    await as(A.email);
    expect(await rejected(TodayPage({ searchParams: sp({ periode: "90" }) }))).toContain("/gestion/tableau-de-bord?periode=90");
    expect(types(await TodayPage({ searchParams: sp({ acces: "refuse" }) })).has(AccessNotice)).toBe(true);
    expect(types(await TodayPage({ searchParams: sp({}) })).has(AccessNotice)).toBe(false);
  });
});

describe("fiche client en onglets : aucune carte perdue, rôles inchangés", () => {
  const OWNER_ONLY = [AcquisitionCard, AdsClientPanel, ApresVentePanel, AssistantSummarizeButton, ClientTelephonieCard, SeasonConsentCard];
  const STAFF_ONLY = [ComplexTasksCard, ClientPhotoDossier];
  const EVERYONE = [AssignCard, ClientVisitsCard, MaskedCallButton, ThermoMatchPanel, ParcoursPanel];
  const name = (f: unknown) => (f as { name?: string }).name ?? String(f);

  it("propriétaire : six onglets et toutes les cartes (dont le parcours du contrat C1)", async () => {
    await as(OWNER);
    const page = await ClientPage({ params: sp({ id: s.b }), searchParams: sp({}) });
    const t = tabsOf(page);
    expect(t.tabs.map((x) => x.id)).toEqual(["apercu", "historique", "soumission", "chantier", "argent", "messages"]);
    const found = types(page);
    for (const c of [...OWNER_ONLY, ...STAFF_ONLY, ...EVERYONE]) expect(found.has(c), name(c)).toBe(true);
    // Chaque carte est dans son onglet.
    expect(types(t.panels.argent).has(AcquisitionCard)).toBe(true);
    expect(types(t.panels.argent).has(AdsClientPanel)).toBe(true);
    expect(types(t.panels.messages).has(ClientTelephonieCard)).toBe(true);
    expect(types(t.panels.messages).has(SeasonConsentCard)).toBe(true);
    expect(types(t.panels.chantier).has(ApresVentePanel)).toBe(true);
    expect(types(t.panels.chantier).has(ClientPhotoDossier)).toBe(true);
    expect(types(t.panels.chantier).has(ClientVisitsCard)).toBe(true);
    expect(types(t.panels.soumission).has(ThermoMatchPanel)).toBe(true);
    expect(types(t.panels.soumission).has(ParcoursPanel)).toBe(true);
    expect(types(t.panels.apercu).has(AssignCard)).toBe(true);
    expect(types(t.panels.apercu).has(ComplexTasksCard)).toBe(true);
  });

  it("adjointe : cartes des adjoints, sans l'argent ni les cartes du propriétaire", async () => {
    await as(ADJ.email);
    const page = await ClientPage({ params: sp({ id: s.b }), searchParams: sp({}) });
    expect(tabsOf(page).tabs.map((x) => x.id)).not.toContain("argent");
    const found = types(page);
    for (const c of [...STAFF_ONLY, ...EVERYONE]) expect(found.has(c), name(c)).toBe(true);
    for (const c of OWNER_ONLY) expect(found.has(c), name(c)).toBe(false);
  });

  it("vendeur B : sa fiche sans l'argent, les cartes du propriétaire ni des adjoints ; ?onglet= ouvre l'onglet demandé", async () => {
    await as(B.email);
    const page = await ClientPage({ params: sp({ id: s.b }), searchParams: sp({ onglet: "messages" }) });
    const t = tabsOf(page);
    expect(t.tabs.map((x) => x.id)).toEqual(["apercu", "historique", "soumission", "chantier", "messages"]);
    expect(t.panels.argent).toBeUndefined();
    expect(t.initial).toBe("messages");
    const found = types(page);
    for (const c of EVERYONE) expect(found.has(c), name(c)).toBe(true);
    for (const c of [...OWNER_ONLY, ...STAFF_ONLY]) expect(found.has(c), name(c)).toBe(false);
    expect(txt(page)).not.toContain("Alice");
  });
});

describe("Installateurs et Partenaires : une liste, une fiche", () => {
  beforeEach(async () => {
    await seedPartner();
  });

  it("liste unique (vue conformité et vue zone et marques) ; ajout d'un installateur ; propriétaire seulement", async () => {
    await as(OWNER);
    const table = txt(await PartenairesPage({ searchParams: sp({}) }));
    expect(table).toContain("Exemple Climatisation");
    expect(table).toContain("Taux d’acceptation");
    const cards = txt(await PartenairesPage({ searchParams: sp({ vue: "cartes" }) }));
    expect(cards).toContain("Exemple Climatisation");
    expect(cards).toMatch(/Rayon\s+•\s+60\s+•\s+km/);
    await expect(PartenairesPage()).resolves.toBeTruthy();
    await expect(NewInstallerPage({ searchParams: sp({}) })).resolves.toBeTruthy();
    for (const who of [A.email, ADJ.email]) {
      await as(who);
      expect(await rejected(PartenairesPage({ searchParams: sp({}) })), who).toContain(REFUSED);
      expect(await rejected(NewInstallerPage({ searchParams: sp({}) })), who).toContain(REFUSED);
      expect(await rejected(PartnerPage({ params: sp({ id: INSTALLER_ID }), searchParams: sp({}) })), who).toContain(REFUSED);
    }
  });

  it("fiche unique : sept onglets, formulaire de l'installateur et cartes de conformité, d'entente, de disponibilités", async () => {
    await as(OWNER);
    const page = await PartnerPage({ params: sp({ id: INSTALLER_ID }), searchParams: sp({}) });
    const t = tabsOf(page);
    expect(t.tabs.map((x) => x.id)).toEqual(["identite", "conformite", "entente", "performance", "disponibilites", "paiements", "historique"]);
    expect(types(t.panels.identite).has(InstallerForm)).toBe(true);
    expect(types(t.panels.conformite).has(RbqRegistryCard)).toBe(true);
    expect(types(t.panels.conformite).has(PartnerContractCard)).toBe(true);
    expect(types(t.panels.entente).has(CitationForm)).toBe(true);
    expect(types(t.panels.disponibilites).has(AvailabilityLinkButton)).toBe(true);
    const out = txt(page);
    for (const label of ["Identité légale", "Conformité", "Entente de partenariat", "Renseignements personnels", "Fin du partenariat", "Performance", "Niveau", "Disponibilités", "Paiements", "Historique"]) expect(out, label).toContain(label);
    expect(t.initial).toBeUndefined();
    expect(tabsOf(await PartnerPage({ params: sp({ id: INSTALLER_ID }), searchParams: sp({ nouveau: "1" }) })).initial).toBe("entente");
    expect(tabsOf(await PartnerPage({ params: sp({ id: INSTALLER_ID }), searchParams: sp({ onglet: "paiements" }) })).initial).toBe("paiements");
  });
});
