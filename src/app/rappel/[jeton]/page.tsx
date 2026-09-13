/* ==================================================================
   Chantier T — /rappel/<jeton> : lien du texto de réponse. Le client
   choisit son moment de rappel parmi les créneaux réglés dans
   /gestion ; une tâche datée apparaît dans le CRM. GET en lecture
   seule ; le choix est un POST (Server Action). Jeton signé.
   ================================================================== */

import type { Metadata } from "next";
import { headers } from "next/headers";
import { CalendarCheck, Clock, Link2Off } from "lucide-react";
import { createLimiter, ipFromHeaders } from "@/lib/gestion/rate-limit";
import { rappelView } from "@/lib/telephonie/speed";
import { Mark } from "@/components/gestion/ui";
import { RappelPicker } from "./RappelPicker";

export const metadata: Metadata = { title: "Choisir le moment de notre appel" };
export const dynamic = "force-dynamic";

const PHONE = "438-900-3224";
const viewIp = createLimiter({ limit: 60, windowMs: 10 * 60_000 });

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <main className="g-app g-center">
      <div className="tp-pub">
        <Mark sub="Rappel" />
        {children}
        <p className="g-foot">
          Une question ? <a href="tel:4389003224">{PHONE}</a> · Thermopompes À Vendre
        </p>
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

export default async function RappelPage({ params }: { params: Promise<{ jeton: string }> }) {
  const { jeton } = await params;
  if (!viewIp.hit(ipFromHeaders(await headers()))) {
    return (
      <Shell>
        <Message icon={<Clock size={26} aria-hidden />} title="Trop de visites">
          <p className="g-hint">Réessayez dans quelques minutes, ou répondez simplement à notre texto.</p>
        </Message>
      </Shell>
    );
  }
  const v = await rappelView(jeton);
  if (v.state === "choisi") {
    return (
      <Shell>
        <Message icon={<CalendarCheck size={26} aria-hidden />} title="C’est noté">
          <p className="g-hint">
            Nous vous appelons {v.chosen}. Pour changer, répondez à notre texto.
          </p>
        </Message>
      </Shell>
    );
  }
  if (v.state !== "ok") {
    return (
      <Shell>
        <Message icon={<Link2Off size={26} aria-hidden />} title={v.state === "expire" ? "Ce lien a expiré" : "Lien invalide"}>
          <p className="g-hint">Répondez simplement à notre texto avec le moment qui vous convient : nous vous rappellerons.</p>
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
        <p className="tp-hero__eyebrow">Thermopompes À Vendre</p>
        <h1 className="tp-hero__title">
          {v.firstName ? `${v.firstName}, quand` : "Quand"} peut-on <em>vous appeler ?</em>
        </h1>
        <p>Choisissez le moment qui vous convient : un conseiller vous appelle dans ce créneau, du numéro {PHONE}.</p>
      </section>
      <div className="tp-pub__body">
        <RappelPicker token={jeton} options={v.options} />
      </div>
    </Shell>
  );
}
