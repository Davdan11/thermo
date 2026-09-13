import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { brandOptions } from "@/lib/gestion/catalog";
import { siteCities } from "@/lib/gestion/geo";
import { loadInstaller } from "@/lib/gestion/service";
import { formatDateTime } from "@/lib/gestion/summary";
import { InstallerForm } from "@/components/gestion/InstallerForm";
import { Reveal } from "@/components/gestion/Reveal";

export const metadata: Metadata = { title: "Installateur" };

export default async function InstallerPage({ params }: { params: Promise<{ id: string }> }) {
  await requireAdmin();
  const { id } = await params;
  const i = await loadInstaller(id);
  if (!i) notFound();
  const cities = siteCities().map(({ slug, name, region, lat, lon }) => ({ slug, name, region, lat, lon }));
  return (
    <div className="g-main--narrow" style={{ margin: "0 auto" }}>
      <Reveal className="g-head">
        <div>
          <p className="g-eyebrow">Installateur · ajouté le {formatDateTime(i.createdAt)}</p>
          <h1 className="g-h1">{i.company}</h1>
        </div>
        <span className={`g-pill ${i.active ? "g-pill--termine" : "g-pill--muted"}`}>{i.active ? "Actif" : "En pause"}</span>
      </Reveal>
      <InstallerForm
        brands={brandOptions()}
        cities={cities}
        initial={{
          id: i.id,
          company: i.company,
          contactName: i.contactName,
          phone: i.phone,
          email: i.email,
          rbq: i.rbq,
          basePostalCode: i.basePostalCode,
          radiusKm: i.radiusKm,
          extraRegions: i.extraRegions,
          brands: i.brands,
          systemTypes: i.systemTypes,
          active: i.active,
          maxOpenJobs: i.maxOpenJobs,
          notes: i.notes,
          base: i.base ? { lat: i.base.lat, lon: i.base.lon, city: i.base.city } : null,
        }}
      />
    </div>
  );
}
