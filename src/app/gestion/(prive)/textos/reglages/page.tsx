/* Réglages des textos : accusé de réception automatique (activé ou non, texte). Les réponses aux mots-clés sont fixes. */
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { HELP_REPLY, START_CONFIRMATION, STOP_CONFIRMATION } from "@/lib/textos/messages";
import { formatPhone } from "@/lib/textos/phone";
import { readTextos } from "@/lib/textos/store";
import { formatFull } from "@/lib/textos/view";
import { Reveal } from "@/components/gestion/Reveal";
import { Meter, TextosSettingsForm } from "@/components/gestion/textos/SettingsForm";
import { saveTextosSettingsAction } from "../actions";

export const metadata: Metadata = { title: "Réglages des textos" };

const FIXED: Array<[string, string]> = [
  ["ARRÊT ou DÉSABONNER", STOP_CONFIRMATION],
  ["DEBUT (ou OUI après un désabonnement)", START_CONFIRMATION],
  ["AIDE", HELP_REPLY],
];

export default async function TextosReglagesPage() {
  await requireAdmin();
  const { settings } = await readTextos();
  const site = formatPhone(process.env.TWILIO_PHONE_NUMBER || "+14389003224");
  return (
    <>
      <Reveal className="k-pagehead">
        <div>
          <Link href="/gestion/textos" className="k-link">
            <ChevronLeft size={15} aria-hidden /> Textos
          </Link>
          <h1 className="k-h1" style={{ marginTop: 8 }}>Réglages des textos</h1>
          <p className="k-lead">Ce que reçoit un client qui écrit au {site}. Les accents et l’apostrophe typographique limitent un texto à 70 caractères : un message plus long part en plusieurs textos.</p>
        </div>
      </Reveal>

      <Reveal delay={0.05}>
        <TextosSettingsForm
          action={saveTextosSettingsAction}
          initial={{ autoReply: settings.autoReply, autoReplyText: settings.autoReplyText }}
          siteNumber={site}
          updated={settings.updatedAt ? `le ${formatFull(settings.updatedAt)}` : undefined}
        />
      </Reveal>

      <Reveal as="section" className="g-section" delay={0.1}>
        <div className="g-card g-card__pad">
          <div className="g-card__head">
            <h2 className="g-h2">Réponses aux mots-clés</h2>
            <span className="g-count">fixes, en français</span>
          </div>
          <ul className="t-fixed">
            {FIXED.map(([word, text]) => (
              <li key={word}>
                <span className="g-label">{word}</span>
                <q>{text}</q>
                <Meter text={text} />
              </li>
            ))}
          </ul>
          <p className="g-note">
            STOP, UNSUBSCRIBE, CANCEL, END, QUIT, START, HELP (en anglais) : Twilio répond lui-même et bloque les envois ; l’outil note le désabonnement sans
            répondre une deuxième fois. Un numéro désabonné ne reçoit plus rien de l’outil (réponses, offres, soumissions) jusqu’à DEBUT, START ou OUI.
          </p>
        </div>
      </Reveal>
    </>
  );
}
