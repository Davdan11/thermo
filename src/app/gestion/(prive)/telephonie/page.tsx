/* ==================================================================
   Chantier T — /gestion/telephonie : l'état de la téléphonie en un
   coup d'œil. Réponses en 60 secondes (délai réel mesuré), appels
   masqués, transcriptions récentes, ce qu'il reste à régler. Tous les
   chiffres viennent de telephonie.json : aucun n'est estimé.
   ================================================================== */

import type { Metadata } from "next";
import Link from "next/link";
import { CalendarCheck, Check, Megaphone, MessageSquare, PhoneCall, Settings2, Voicemail, X } from "lucide-react";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { hubView } from "@/lib/telephonie/view";
import { Card } from "@/components/gestion/kit/Card";
import { Chip } from "@/components/gestion/kit/Chip";
import { EmptyState } from "@/components/gestion/kit/EmptyState";
import { KpiTile } from "@/components/gestion/kit/KpiTile";
import { Reveal } from "@/components/gestion/Reveal";
import { MaskedCallButton } from "@/components/gestion/telephonie/CallButton";
import { RecordingItem } from "@/components/gestion/telephonie/RecordingItem";
import "@/components/gestion/telephonie/telephonie.css";

export const metadata: Metadata = { title: "Téléphonie" };

function Ready({ ok, title, detail }: { ok: boolean; title: string; detail: string }) {
  return (
    <li>
      <span className={ok ? "is-ok" : "is-off"} aria-label={ok ? "Prêt" : "À régler"}>
        {ok ? <Check size={18} /> : <X size={18} />}
      </span>
      <span>
        <strong>{title}</strong>
        <small>{detail}</small>
      </span>
    </li>
  );
}

const plural = (n: number, one: string, many: string) => `${n} ${n > 1 ? many : one}`;

export default async function TelephoniePage() {
  await requireAdmin();
  const v = await hubView();
  const r = v.readiness;
  const k = v.kpis;
  return (
    <>
      <Reveal className="k-pagehead">
        <div>
          <p className="k-eyebrow">Travail</p>
          <h1 className="k-h1">
            Téléphonie <em>et vitesse de réponse</em>
          </h1>
          <p className="k-lead">Chaque demande reçoit un texto dans la minute ; vous appelez par le numéro du site ; chaque appel enregistré est résumé dans la fiche du client.</p>
        </div>
        <div className="g-actions">
          <Link href="/gestion/telephonie/campagnes" className="k-btn">
            <Megaphone size={15} aria-hidden /> Campagnes
          </Link>
          <Link href="/gestion/telephonie/reglages" className="k-btn k-btn--ink">
            <Settings2 size={15} aria-hidden /> Réglages
          </Link>
        </div>
      </Reveal>

      <div className="tp-kpis">
        <KpiTile label="Appels masqués" value={k.calls7} sub={`7 jours · ${plural(k.answered7, "répondu", "répondus")}`} icon={<PhoneCall size={16} />} tone="ink" />
        <KpiTile label="Textos en moins de 60 s" value={k.within60} sub={k.texted30 ? `sur ${plural(k.texted30, "texto envoyé", "textos envoyés")} (30 jours)` : "30 jours · aucun texto encore"} icon={<MessageSquare size={16} />} tone="orange" />
        <KpiTile label="Moments de rappel choisis" value={k.chosen30} sub={`sur ${plural(k.leads30, "demande", "demandes")} (30 jours)`} icon={<CalendarCheck size={16} />} />
        <KpiTile label="Transcriptions" value={k.transcribed30} sub={`30 jours · ${k.pending} en attente`} icon={<Voicemail size={16} />} />
      </div>

      <div className="tp-grid">
        <div className="cr-stack">
          <Card title="Réponses en 60 secondes" sub={r.speedEnabled ? "Texto au client, alerte sur votre cellulaire" : "Désactivée : à activer dans les réglages"}>
            {v.leads.length ? (
              <ul className="tp-rows">
                {v.leads.map((l, i) => (
                  <li key={l.id} className="tp-row" style={{ ["--i" as string]: i }}>
                    <strong>{l.label}</strong>
                    <Chip tone={l.smsTone}>{l.sms}</Chip>
                    <small>
                      {l.kind} · {l.when}
                      {l.delay ? ` · texto parti en ${l.delay}` : ""}
                      {l.waitsUntil ? ` · part le ${l.waitsUntil}` : ""}
                      {l.choice ? ` · rappel choisi : ${l.choice}` : ""} · {l.owner}
                    </small>
                    {l.canCall ? (
                      <div style={{ gridColumn: "1 / -1", marginTop: 4 }}>
                        <MaskedCallButton target={{ kind: "lead", id: l.id }} className="k-btn" />
                      </div>
                    ) : null}
                  </li>
                ))}
              </ul>
            ) : (
              <EmptyState compact title="Aucune demande depuis l’activation" body={r.speedEnabled ? "La prochaine demande avec un numéro apparaîtra ici." : "Activez la réponse en 60 secondes dans les réglages."} />
            )}
          </Card>

          <Card title="Appels masqués" sub="Le client voit le numéro du site, jamais votre cellulaire">
            {v.calls.length ? (
              <ul className="tp-rows">
                {v.calls.map((c, i) => (
                  <li key={c.id} className="tp-row" style={{ ["--i" as string]: i }}>
                    <strong>{c.label}</strong>
                    <Chip tone={c.tone === "ok" ? "ok" : c.tone === "bad" ? "bad" : c.tone === "warn" ? "warn" : c.tone === "live" ? "orange" : "muted"}>{c.title}</Chip>
                    <small>
                      {c.when}
                      {c.record ? " · enregistré" : ""}
                    </small>
                  </li>
                ))}
              </ul>
            ) : (
              <EmptyState compact title="Aucun appel masqué" body="Le bouton « Appeler » de la fiche client, des tâches et des textos lance un appel par le numéro du site." />
            )}
          </Card>
        </div>

        <aside className="cr-stack">
          <Card title="Ce qui est prêt" tone="cream">
            <ul className="tp-ready">
              <Ready ok={r.calls.ok} title="Appels masqués" detail={r.calls.ok ? `Votre cellulaire (${r.cell}) sonne d’abord ; le client voit le ${r.site}.` : `À régler dans shared/.env : ${r.calls.missing.join(", ")}.`} />
              <Ready ok={r.alertSms} title="Alerte « Appuie pour l’appeler »" detail={r.alertSms ? "ALERT_SMS_TO est réglé." : "ALERT_SMS_TO absent : pas d’alerte texto au propriétaire."} />
              <Ready ok={r.speedEnabled} title="Réponse en 60 secondes" detail={r.speedEnabled ? "Active pour les soumissions, ThermoMatch, rendez-vous et contacts." : "Désactivée par défaut : activez-la dans les réglages."} />
              <Ready ok={r.transcription.active} title="Transcription (Gemini)" detail={r.transcription.label} />
              <Ready ok={r.cron} title="Robot des 5 minutes" detail={r.cron ? "Secret présent. Tâche cron : scripts/telephonie-cron.sh." : "TELEPHONIE_CRON_SECRET (ou AUTOMATISATIONS_CRON_SECRET) absent : les textos de 8 h, campagnes et transcriptions en file ne partent pas."} />
              <Ready ok={!r.record} title="Enregistrement des appels masqués" detail={r.record ? "Activé : l’avis est donné au client avant chaque appel." : "Désactivé (par défaut)."} />
            </ul>
          </Card>

          <Card title="Transcriptions récentes" sub="Résumé en 3 à 5 lignes dans la fiche du client">
            {v.recordings.length ? (
              <ul className="tp-recs">
                {v.recordings.map((x, i) => (
                  <RecordingItem key={x.id} r={x} i={i} />
                ))}
              </ul>
            ) : (
              <EmptyState compact title="Aucun enregistrement" body="Appels entrants du menu, messages vocaux et appels masqués enregistrés arrivent ici." />
            )}
          </Card>
        </aside>
      </div>
    </>
  );
}
