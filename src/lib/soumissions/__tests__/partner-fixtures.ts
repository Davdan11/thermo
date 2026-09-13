/* Partenaire fictif pour les tests : écrit gestion.json et partenaires.json dans le dossier temporaire du test
   (GESTION_DATA_DIR). Aucune vraie entreprise, aucun vrai numéro. */
import { mutatePartenaires, partnerOf } from "@/lib/gestion/partenaires/store";
import type { PartnerIdentity } from "@/lib/gestion/partenaires/types";
import { mutateGestion } from "@/lib/gestion/store";
import type { Installer } from "@/lib/gestion/types";
import { contractorIdentity, INSTALLER_ID } from "./fixtures";

export function installer(over: Partial<Installer> = {}): Installer {
  return {
    id: INSTALLER_ID,
    company: "Exemple Climatisation",
    contactName: "Alex Exemple",
    phone: "514 555-0142",
    email: "alex@exemple.ca",
    rbq: "",
    basePostalCode: "H7A 1A1",
    base: null,
    radiusKm: 60,
    extraRegions: [],
    brands: [],
    systemTypes: [],
    active: true,
    maxOpenJobs: null,
    notes: "",
    createdAt: "2026-01-05T15:00:00.000Z",
    updatedAt: "2026-01-05T15:00:00.000Z",
    ...over,
  };
}

export interface SeedPartner {
  /** null : aucune identité saisie. Objet : champs qui remplacent l'identité complète par défaut. */
  identity?: Partial<PartnerIdentity> | null;
  rbqNumber?: string;
  rbqExpires?: string | null;
  insuranceExpires?: string | null;
  ended?: boolean;
  installer?: Partial<Installer>;
}

export async function seedPartner(o: SeedPartner = {}): Promise<void> {
  const inst = installer(o.installer);
  await mutateGestion((g) => {
    g.installers = g.installers.filter((i) => i.id !== inst.id).concat(inst);
    return { result: null, changed: true };
  });
  const id = contractorIdentity();
  await mutatePartenaires((d) => {
    const r = partnerOf(d, inst.id);
    r.identity =
      o.identity === null
        ? null
        : {
            legalName: id.legalName,
            tradeName: id.tradeName,
            neq: id.neq,
            address: id.address,
            city: id.city,
            postalCode: id.postalCode,
            phone: id.phone,
            email: id.email,
            tps: id.tps,
            tvq: id.tvq,
            rbqDeclared: "",
            source: "proprietaire",
            updatedAt: "2026-09-01T12:00:00.000Z",
            updatedBy: "proprio@exemple.ca",
            verifiedAt: "2026-09-01T12:00:00.000Z",
            verifiedBy: "proprio@exemple.ca",
            ...(o.identity ?? {}),
          };
    r.compliance.rbq = { number: o.rbqNumber ?? id.rbq, issuer: "", expiresOn: o.rbqExpires === undefined ? "2027-12-31" : o.rbqExpires, coverage: "" };
    r.compliance.assurance = { number: "POL-0001", issuer: "Assureur Exemple", expiresOn: o.insuranceExpires === undefined ? "2027-12-31" : o.insuranceExpires, coverage: "Responsabilité civile" };
    r.ended = o.ended ? { at: "2026-09-01T12:00:00.000Z", by: "proprio@exemple.ca", reason: "Test" } : null;
    return { result: null, changed: true };
  });
}
