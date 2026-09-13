/* ==================================================================
   Chantier T — /appel/<jeton> : ouvert depuis le texto d'alerte
   « Nouvelle demande : Julie T., Laval. Appuie pour l'appeler ».
   GET en lecture seule (les aperçus de liens visitent les URL) : le
   bouton lance l'appel masqué (POST). Jeton signé, durée limitée.
   ================================================================== */

import type { Metadata } from "next";
import { headers } from "next/headers";
import { Clock, Link2Off } from "lucide-react";
import { createLimiter, ipFromHeaders } from "@/lib/gestion/rate-limit";
import { LEAD_CONTEXT } from "@/lib/telephonie/masked-call";
import { appelLinkView } from "@/lib/telephonie/speed";
import { Mark } from "@/components/gestion/ui";
import { AppelLauncher } from "./AppelLauncher";

export const metadata: Metadata = { title: "Appeler un client" };
export const dynamic = "force-dynamic";

const viewIp = createLimiter({ limit: 60, windowMs: 10 * 60_000 });
const timeFmt = new Intl.DateTimeFormat("fr-CA", { timeZone: "America/Toronto", hour: "numeric", minute: "2-digit" });

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <main className="g-app g-center">
      <div className="tp-pub">
        <Mark sub="Appel masqué" />
        {children}
      </div>
    </main>
  );
}

function Message({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="g-card g-card__pad">
      <div className="g-state">
        <span className="g-state__icon g-state__icon--muted">{icon}</span>
        <h1 className="g-h2" style={{ fontSize: 22 }}>
          {title}
        </h1>
        {children}
      </div>
    </div>
  );
}

export default async function AppelPage({ params }: { params: Promise<{ jeton: string }> }) {
  const { jeton } = await params;
  if (!viewIp.hit(ipFromHeaders(await headers()))) {
    return (
      <Shell>
        <Message icon={<Clock size={26} aria-hidden />} title="Trop de visites">
          <p className="g-hint">Réessayez dans quelques minutes.</p>
        </Message>
      </Shell>
    );
  }
  const v = await appelLinkView(jeton);
  if (v.state !== "ok") {
    return (
      <Shell>
        <Message icon={<Link2Off size={26} aria-hidden />} title={v.state === "expire" ? "Ce lien a expiré" : "Lien invalide"}>
          <p className="g-hint">Ouvrez la fiche du client dans /gestion : le bouton « Appeler » y lance le même appel masqué.</p>
        </Message>
      </Shell>
    );
  }
  return (
    <Shell>
      <section className="tp-hero">
        <svg className="tp-hero__arcs" viewBox="0 0 240 240" aria-hidden>
          <circle cx="120" cy="120" r="116" />
          <circle cx="120" cy="120" r="84" />
          <circle cx="120" cy="120" r="52" />
        </svg>
        <p className="tp-hero__eyebrow">{LEAD_CONTEXT[v.kind]}</p>
        <h1 className="tp-hero__title">
          Appeler <em>{v.label}</em>
        </h1>
        <p>Votre cellulaire sonne d’abord ; faites le 1, puis Twilio appelle le client avec le numéro du site. Lien valide jusqu’à {timeFmt.format(new Date(v.expiresAt))}.</p>
      </section>
      <div className="tp-pub__body">
        <AppelLauncher token={jeton} label={v.label} />
      </div>
    </Shell>
  );
}
