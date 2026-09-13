/* Chantier T — réglages de la téléphonie : appels masqués, réponse en 60 secondes (texte, délai, nuit, alerte, créneaux),
   transcription et conservation de l'audio, heures d'envoi des campagnes. */
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { formatPhone } from "@/lib/textos/phone";
import { siteNumber } from "@/lib/telephonie/config";
import { readTelephonie } from "@/lib/telephonie/store";
import { transcriptionState } from "@/lib/telephonie/transcription";
import { Card } from "@/components/gestion/kit/Card";
import { Reveal } from "@/components/gestion/Reveal";
import { CallSettingsForm, CampaignSettingsForm, SpeedSettingsForm, TranscriptionSettingsForm } from "@/components/gestion/telephonie/SettingsForms";
import "@/components/gestion/telephonie/telephonie.css";

export const metadata: Metadata = { title: "Réglages de la téléphonie" };

export default async function TelephonieReglagesPage() {
  await requireAdmin();
  const data = await readTelephonie();
  const s = data.settings;
  const site = formatPhone(siteNumber() ?? "+14389003224");
  return (
    <div className="g-main--narrow" style={{ margin: "0 auto" }}>
      <Reveal className="k-pagehead">
        <div>
          <Link href="/gestion/telephonie" className="t-back" style={{ display: "inline-flex", alignItems: "center", gap: 4, marginBottom: 8 }}>
            <ChevronLeft size={16} aria-hidden /> Téléphonie
          </Link>
          <h1 className="k-h1">Réglages de la téléphonie</h1>
          <p className="k-lead">Ce que reçoit un client qui fait une demande, comment vous l’appelez, et ce qu’on garde de ses appels.</p>
        </div>
      </Reveal>
      <div className="cr-stack">
        <Card title="Réponse en 60 secondes" sub="Texto au client, alerte sur votre cellulaire, moment de rappel choisi par le client">
          <SpeedSettingsForm initial={s.speed} site={site} />
        </Card>
        <Card title="Appels masqués" sub="Votre cellulaire sonne d’abord ; le client voit le numéro du site">
          <CallSettingsForm record={s.calls.record} />
        </Card>
        <Card title="Transcription et conservation" sub="Gemini, en français ; audio supprimé selon la Loi 25">
          <TranscriptionSettingsForm initial={s.transcription} stateLabel={transcriptionState(data, new Date()).label} />
        </Card>
        <Card title="Campagnes : heures d’envoi et débit" sub="S’applique à toutes les campagnes lancées">
          <CampaignSettingsForm initial={s.campaigns} />
        </Card>
      </div>
      {s.updatedAt ? (
        <p className="g-hint" style={{ marginTop: 12 }}>
          Modifié le {new Date(s.updatedAt).toLocaleString("fr-CA", { timeZone: "America/Toronto", dateStyle: "long", timeStyle: "short" })}
          {s.updatedBy ? ` par ${s.updatedBy}` : ""}.
        </p>
      ) : null}
    </div>
  );
}
