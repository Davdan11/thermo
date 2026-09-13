/* Nouveau client saisi à la main (appel sur un cellulaire, bouche-à-oreille…). Le téléphone et le courriel le relient
   aux demandes, soumissions, jobs et textos du même client. */
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { Card } from "@/components/gestion/kit/Card";
import { ClientForm } from "@/components/gestion/crm/forms";
import { Reveal } from "@/components/gestion/Reveal";

export const metadata: Metadata = { title: "Nouveau client" };

export default async function NewClientPage() {
  await requireAdmin();
  return (
    <div className="g-main--narrow" style={{ margin: "0 auto" }}>
      <Reveal className="k-pagehead">
        <div>
          <Link href="/gestion/clients" className="k-link">
            <ChevronLeft size={15} aria-hidden /> Clients
          </Link>
          <h1 className="k-h1" style={{ marginTop: 8 }}>
            Nouveau <em>client</em>
          </h1>
          <p className="k-lead">Pour quelqu’un qui n’est pas passé par le site : un appel sur votre cellulaire, une recommandation, un voisin.</p>
        </div>
      </Reveal>
      <Card>
        <ClientForm />
      </Card>
    </div>
  );
}
