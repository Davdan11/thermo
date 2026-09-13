"use client";

/* ==================================================================
   Chantier T — réglages de la téléphonie : appels masqués
   (enregistrement), réponse en 60 secondes (texte avec aperçu tel que
   le client le verra, délai, nuit, alerte, créneaux de rappel),
   transcription (conservation de l'audio), heures d'envoi des
   campagnes. useActionState : rien n'est vidé si la validation échoue.
   ================================================================== */

import { useActionState, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus, Save, Trash2 } from "lucide-react";
import { saveCallSettingsAction, saveCampaignSettingsAction, saveSpeedSettingsAction, saveTranscriptionSettingsAction, type TelActionResult } from "@/app/gestion/(prive)/telephonie/actions";
import { smsSegments } from "@/lib/textos/segments";
import { renderSpeedText } from "@/lib/telephonie/plan";
import type { CallbackSlot, CampaignSettings, SpeedSettings, TranscriptionSettings } from "@/lib/telephonie/types";
import { useReduced } from "@/components/heroes-v2/outils/motion";
import { Msg } from "./client-bits";

const EASE = [0.22, 1, 0.36, 1] as const;
const DAY_LABELS: Array<[number, string]> = [
  [1, "lun"],
  [2, "mar"],
  [3, "mer"],
  [4, "jeu"],
  [5, "ven"],
  [6, "sam"],
  [0, "dim"],
];
const hours = Array.from({ length: 24 }, (_, h) => h);

export function Switch({ name, defaultChecked, checked, onChange, children }: { name: string; defaultChecked?: boolean; checked?: boolean; onChange?: (v: boolean) => void; children: React.ReactNode }) {
  return (
    <label className="tp-switch">
      <input type="checkbox" name={name} defaultChecked={defaultChecked} checked={checked} onChange={onChange ? (e) => onChange(e.target.checked) : undefined} />
      <span className="tp-switch__track" aria-hidden />
      <span>{children}</span>
    </label>
  );
}

export function SmsMeter({ text }: { text: string }) {
  const s = smsSegments(text);
  return (
    <p className="tp-meter" aria-live="polite">
      <span>{text.length} caractères</span>
      <strong>
        {s.segments} texto{s.segments > 1 ? "s" : ""} facturé{s.segments > 1 ? "s" : ""}
      </strong>
      <span>
        {s.encoding}, {s.perSegment} car. par texto
      </span>
      {s.offenders.length ? <span>Caractères qui imposent 70 car. : {s.offenders.slice(0, 6).join(" ")}</span> : null}
    </p>
  );
}

function Submit({ pending, label = "Enregistrer" }: { pending: boolean; label?: string }) {
  return (
    <div>
      <button type="submit" className="k-btn k-btn--primary k-btn--lg" disabled={pending}>
        <Save size={17} aria-hidden /> {pending ? "Enregistrement…" : label}
      </button>
    </div>
  );
}

/* ---------------- Appels masqués ---------------- */

export function CallSettingsForm({ record }: { record: boolean }) {
  const [state, action, pending] = useActionState<TelActionResult, FormData>(saveCallSettingsAction, undefined);
  return (
    <form action={action} className="cr-form">
      <div className="cr-setting">
        <Switch name="record" defaultChecked={record}>
          Enregistrer les appels masqués
        </Switch>
        <p className="cr-setting__hint">
          Désactivé par défaut. Le client entend toujours « Votre appel peut être enregistré pour la qualité du service » avant d’être relié. Enregistré, l’appel est transcrit et résumé dans sa fiche (si la transcription est active), puis l’audio est supprimé selon la conservation choisie plus bas.
        </p>
      </div>
      <Msg state={state} />
      <Submit pending={pending} />
    </form>
  );
}

/* ---------------- Réponse en 60 secondes ---------------- */

let slotSeq = 0;
const newSlotId = () => `creneau-${Date.now().toString(36)}-${++slotSeq}`;

export function SpeedSettingsForm({ initial, site }: { initial: SpeedSettings; site: string }) {
  const [state, action, pending] = useActionState<TelActionResult, FormData>(saveSpeedSettingsAction, undefined);
  const reduced = useReduced();
  const [enabled, setEnabled] = useState(initial.enabled);
  const [text, setText] = useState(initial.text);
  const [slots, setSlots] = useState<CallbackSlot[]>(initial.slots);
  const preview = useMemo(() => renderSpeedText(text || " ", { firstName: "Julie", link: "https://thermopompesavendre.ca/rappel/l_Ab3dE5gH7jK.mf1a2b3.Xy9Zw8Vu7Ts6Rq5Po4Nm3L" }), [text]);
  const setSlot = (i: number, patch: Partial<CallbackSlot>) => setSlots((xs) => xs.map((s, n) => (n === i ? { ...s, ...patch } : s)));
  const toggleDay = (i: number, d: number) => setSlot(i, { days: slots[i].days.includes(d) ? slots[i].days.filter((x) => x !== d) : [...slots[i].days, d].sort() });

  return (
    <form action={action} className="cr-form">
      <div className="cr-setting">
        <Switch name="enabled" checked={enabled} onChange={setEnabled}>
          Répondre à chaque nouvelle demande en moins d’une minute
        </Switch>
        <p className="cr-setting__hint">Soumission, ThermoMatch, rendez-vous et formulaire de contact, dès qu’un numéro de téléphone est donné. Un numéro désabonné (STOP) ne reçoit rien.</p>
      </div>

      <div className="cr-setting">
        <label className="cr-setting__label" htmlFor="tp-text">
          Texto au client
        </label>
        <p className="cr-setting__hint">
          {"{prenom}"} : prénom du client. {"{lien}"} : lien pour choisir le moment du rappel (obligatoire). « Thermopompes A Vendre » est ajouté s’il manque, et « Répondez STOP pour ne plus recevoir de textos. » termine toujours le texto.
        </p>
        <textarea id="tp-text" name="text" className="tp-textarea" value={text} onChange={(e) => setText(e.target.value)} maxLength={480} required />
        <SmsMeter text={preview} />
        <div>
          <span className="g-label">Aperçu, tel que le client le verra</span>
          <p className="tp-bubble">
            <span className="tp-bubble__from">De : {site}</span>
            {preview}
          </p>
        </div>
      </div>

      <div className="cr-setting">
        <div className="cr-setting__row">
          <label className="cr-setting__label" htmlFor="tp-delay">
            Délai avant l’envoi
          </label>
          <span className="cr-number">
            <input id="tp-delay" name="delaySeconds" type="number" min={0} max={60} defaultValue={initial.delaySeconds} required />
            <span>secondes</span>
          </span>
        </div>
        <p className="cr-setting__hint">De 0 à 60 secondes : le texto part toujours dans la minute (hors heures silencieuses).</p>
      </div>

      <div className="cr-setting">
        <span className="cr-setting__label">Heures silencieuses (la nuit)</span>
        <div className="tp-inline">
          <span>De</span>
          <select name="quietStart" className="g-input g-select" defaultValue={initial.quietStart} aria-label="Début des heures silencieuses">
            {hours.map((h) => (
              <option key={h} value={h}>
                {h} h
              </option>
            ))}
          </select>
          <span>à</span>
          <select name="quietEnd" className="g-input g-select" defaultValue={initial.quietEnd} aria-label="Fin des heures silencieuses">
            {hours.map((h) => (
              <option key={h} value={h}>
                {h} h
              </option>
            ))}
          </select>
        </div>
        <p className="cr-setting__hint">Une demande reçue pendant cette plage reçoit son texto à la fin de la plage (heure de Montréal). Même heure au début et à la fin : jamais de pause.</p>
      </div>

      <div className="cr-setting">
        <Switch name="ownerAlert" defaultChecked={initial.ownerAlert}>
          M’alerter par texto (ALERT_SMS_TO)
        </Switch>
        <p className="cr-setting__hint">« Nouvelle demande : Julie T., Laval. Appuie pour l’appeler maintenant » avec un lien qui lance l’appel masqué. Envoyée tout de suite, même la nuit.</p>
        <div className="cr-setting__row">
          <label className="cr-setting__label" htmlFor="tp-ttl" style={{ fontWeight: 560 }}>
            Validité du lien d’appel
          </label>
          <span className="cr-number">
            <input id="tp-ttl" name="callLinkMinutes" type="number" min={5} max={720} defaultValue={initial.callLinkMinutes} required />
            <span>minutes</span>
          </span>
        </div>
      </div>

      <div className="cr-setting">
        <span className="cr-setting__label">Créneaux de rappel proposés au client</span>
        <p className="cr-setting__hint">Le client choisit un créneau : une tâche datée apparaît dans À faire, au début du créneau.</p>
        <input type="hidden" name="slots" value={JSON.stringify(slots)} />
        <div className="tp-slots-edit">
          <AnimatePresence initial={false}>
            {slots.map((s, i) => (
              <motion.div
                key={s.id}
                className="tp-slot"
                initial={reduced ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduced ? { opacity: 0 } : { opacity: 0, x: 30, transition: { duration: 0.2 } }}
                transition={{ duration: 0.35, ease: EASE }}
              >
                <div className="tp-slot__row">
                  <label className="g-field" style={{ margin: 0 }}>
                    <span className="g-label">Nom</span>
                    <input className="g-input" value={s.label} maxLength={40} onChange={(e) => setSlot(i, { label: e.target.value })} required />
                  </label>
                  <label className="g-field" style={{ margin: 0 }}>
                    <span className="g-label">Début</span>
                    <input className="g-input" type="time" value={s.start} onChange={(e) => setSlot(i, { start: e.target.value })} required />
                  </label>
                  <label className="g-field" style={{ margin: 0 }}>
                    <span className="g-label">Fin</span>
                    <input className="g-input" type="time" value={s.end} onChange={(e) => setSlot(i, { end: e.target.value })} required />
                  </label>
                  <button type="button" className="k-btn k-btn--ghost k-btn--icon" onClick={() => setSlots((xs) => xs.filter((_, n) => n !== i))} disabled={slots.length <= 1} aria-label={`Retirer le créneau ${s.label}`}>
                    <Trash2 size={16} aria-hidden />
                  </button>
                </div>
                <div className="tp-days" role="group" aria-label={`Jours du créneau ${s.label}`}>
                  {DAY_LABELS.map(([d, l]) => (
                    <label key={d}>
                      <input type="checkbox" checked={s.days.includes(d)} onChange={() => toggleDay(i, d)} />
                      {l}
                    </label>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          {slots.length < 8 ? (
            <div>
              <button type="button" className="k-btn" onClick={() => setSlots((xs) => [...xs, { id: newSlotId(), label: "Nouveau créneau", start: "10:00", end: "12:00", days: [1, 2, 3, 4, 5] }])}>
                <Plus size={15} aria-hidden /> Ajouter un créneau
              </button>
            </div>
          ) : null}
        </div>
        <div className="cr-setting__row">
          <label className="cr-setting__label" htmlFor="tp-horizon" style={{ fontWeight: 560 }}>
            Jours proposés
          </label>
          <span className="cr-number">
            <input id="tp-horizon" name="horizonDays" type="number" min={1} max={14} defaultValue={initial.horizonDays} required />
            <span>jours</span>
          </span>
        </div>
        <div className="cr-setting__row">
          <label className="cr-setting__label" htmlFor="tp-linkdays" style={{ fontWeight: 560 }}>
            Validité du lien du client
          </label>
          <span className="cr-number">
            <input id="tp-linkdays" name="linkDays" type="number" min={1} max={30} defaultValue={initial.linkDays} required />
            <span>jours</span>
          </span>
        </div>
      </div>
      <Msg state={state} />
      <Submit pending={pending} />
    </form>
  );
}

/* ---------------- Transcription ---------------- */

export function TranscriptionSettingsForm({ initial, stateLabel }: { initial: TranscriptionSettings; stateLabel: string }) {
  const [state, action, pending] = useActionState<TelActionResult, FormData>(saveTranscriptionSettingsAction, undefined);
  return (
    <form action={action} className="cr-form">
      <div className="cr-setting">
        <Switch name="enabled" defaultChecked={initial.enabled}>
          Transcrire et résumer les enregistrements
        </Switch>
        <p className="cr-setting__hint">
          État : {stateLabel}. Appels entrants du menu, messages vocaux et appels masqués enregistrés. Gemini (clé GEMINI_API_KEY, quota gratuit partagé avec ThermoScan) : deux enregistrements au plus toutes les 5 minutes, pause automatique si le quota est dépassé.
        </p>
      </div>
      <div className="cr-setting">
        <span className="cr-setting__label">Conservation de l’audio chez Twilio (Loi 25)</span>
        <label className="tp-check">
          <input type="radio" name="retention" value="apres-transcription" defaultChecked={initial.retention === "apres-transcription"} />
          <span>Supprimer l’audio dès qu’il est transcrit (la transcription reste dans la fiche)</span>
        </label>
        <label className="tp-check">
          <input type="radio" name="retention" value="jours" defaultChecked={initial.retention === "jours"} />
          <span>Garder l’audio pour l’écouter, puis le supprimer</span>
        </label>
        <div className="cr-setting__row">
          <label className="cr-setting__label" htmlFor="tp-days" style={{ fontWeight: 560 }}>
            Suppression au plus tard après
          </label>
          <span className="cr-number">
            <input id="tp-days" name="retentionDays" type="number" min={1} max={365} defaultValue={initial.retentionDays} required />
            <span>jours</span>
          </span>
        </div>
        <p className="cr-setting__hint">Cette limite vaut dans tous les cas, même si la transcription échoue.</p>
      </div>
      <Msg state={state} />
      <Submit pending={pending} />
    </form>
  );
}

/* ---------------- Campagnes ---------------- */

export function CampaignSettingsForm({ initial }: { initial: CampaignSettings }) {
  const [state, action, pending] = useActionState<TelActionResult, FormData>(saveCampaignSettingsAction, undefined);
  return (
    <form action={action} className="cr-form">
      <div className="cr-setting">
        <span className="cr-setting__label">Heures d’envoi</span>
        <div className="tp-inline">
          <span>De</span>
          <select name="startHour" className="g-input g-select" defaultValue={initial.startHour} aria-label="Début des envois">
            {hours.map((h) => (
              <option key={h} value={h}>
                {h} h
              </option>
            ))}
          </select>
          <span>à</span>
          <select name="endHour" className="g-input g-select" defaultValue={initial.endHour} aria-label="Fin des envois">
            {[...hours.slice(1), 24].map((h) => (
              <option key={h} value={h}>
                {h} h
              </option>
            ))}
          </select>
        </div>
        <div className="tp-days" role="group" aria-label="Jours d’envoi">
          {DAY_LABELS.map(([d, l]) => (
            <label key={d}>
              <input type="checkbox" name="days" value={d} defaultChecked={initial.days.includes(d)} />
              {l}
            </label>
          ))}
        </div>
      </div>
      <div className="cr-setting">
        <div className="cr-setting__row">
          <label className="cr-setting__label" htmlFor="tp-pertick">
            Débit
          </label>
          <span className="cr-number">
            <input id="tp-pertick" name="perTick" type="number" min={1} max={60} defaultValue={initial.perTick} required />
            <span>textos / 5 min</span>
          </span>
        </div>
        <p className="cr-setting__hint">Une seconde d’écart entre deux textos. Hors des heures d’envoi, la campagne attend.</p>
      </div>
      <Msg state={state} />
      <Submit pending={pending} />
    </form>
  );
}
