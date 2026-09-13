import type { Metadata } from "next";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { brandHints, regionHints } from "@/lib/gestion/candidatures";
import { brandOptions } from "@/lib/gestion/catalog";
import { DEFAULT_RADIUS_KM } from "@/lib/gestion/forms";
import { siteCities } from "@/lib/gestion/geo";
import { loadCandidature } from "@/lib/gestion/service";
import { formatDateTime } from "@/lib/gestion/summary";
import { InstallerForm, type InstallerInitial } from "@/components/gestion/InstallerForm";
import { Reveal } from "@/components/gestion/Reveal";

export const metadata: Metadata = { title: "Nouvel installateur" };

export default async function NewInstallerPage({ searchParams }: { searchParams: Promise<{ candidature?: string }> }) {
  await requireAdmin();
  const { candidature: candId } = await searchParams;
  const cand = candId ? await loadCandidature(candId) : null;
  const brands = brandOptions();
  const hintedBrands = cand ? brandHints(cand.brandsText, brands) : [];
  const hintedRegions = cand ? regionHints(cand.regionText) : [];
  const initial: InstallerInitial = {
    company: cand?.company ?? "",
    contactName: cand?.contact ?? "",
    phone: cand?.phone ?? "",
    email: cand?.email ?? "",
    rbq: cand?.rbq ?? "",
    basePostalCode: "",
    radiusKm: DEFAULT_RADIUS_KM,
    extraRegions: hintedRegions,
    brands: hintedBrands,
    systemTypes: [],
    active: true,
    maxOpenJobs: null,
    notes: cand ? `Candidature du ${formatDateTime(cand.receivedAt)}. Volume : ${cand.volume || "—"}. Marques déclarées : ${cand.brandsText || "—"}. Région déclarée : ${cand.regionText || "—"}.` : "",
    base: null,
    ...(cand ? { candidatureId: cand.id } : {}),
  };
  const cities = siteCities().map(({ slug, name, region, lat, lon }) => ({ slug, name, region, lat, lon }));

  return (
    <div className="g-main--narrow" style={{ margin: "0 auto" }}>
      <Reveal className="g-head">
        <div>
          <p className="g-eyebrow">Réseau</p>
          <h1 className="g-h1">Nouvel installateur</h1>
          <p className="g-lead">Rayon de {DEFAULT_RADIUS_KM} km par défaut autour du code postal de base, plus les régions que vous cochez.</p>
        </div>
      </Reveal>
      {cand ? (
        <Reveal>
          <p className="g-alert g-alert--info" style={{ marginBottom: 16 }}>
            Pré-rempli d’après la candidature de {cand.company}. Marques déclarées : « {cand.brandsText || "—"} » ; région : « {cand.regionText || "—"} ». Les cases devinées sont à confirmer, et le code postal de base est à saisir.
          </p>
        </Reveal>
      ) : null}
      <InstallerForm brands={brands} cities={cities} initial={initial} hintedBrands={hintedBrands} hintedRegions={hintedRegions} />
    </div>
  );
}
