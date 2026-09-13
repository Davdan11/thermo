"use client";

/* ==================================================================
   Chantier D — visite guidée par photos (/visite/[jeton]).
   Cellulaire d'abord : un écran par étape, exemple dessiné et
   conseils, « Prendre une photo » (appareil) ou « Choisir dans mes
   photos ». Chaque photo est réduite dans le téléphone (1600 px,
   JPEG, sans position GPS), mise dans une file locale (IndexedDB),
   puis envoyée ; si le réseau coupe, elle repart toute seule (retour
   du réseau, ou nouvel essai toutes les 20 s). Réponses gardées dans
   le téléphone jusqu'à « Envoyer ».
   ================================================================== */

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ArrowLeft, Camera, Check, CheckCircle2, CloudOff, ImagePlus, LoaderCircle, Send, ShieldCheck, Wifi, X } from "lucide-react";
import { compressImage } from "@/components/gestion/soumissions/compress";
import type { VisitPhotoDTO, VisitViewDTO } from "@/lib/visites/service";
import { emptyAnswers, HEATING_OPTIONS, MAX_UNITS, stepOf, VISIT_STEPS, type StepId, type VisitAnswers } from "@/lib/visites/types";
import { StepExample } from "./Examples";
import * as q from "./visit-queue";

type Screen = { kind: "accueil" } | { kind: "questions" } | { kind: "photo"; step: StepId; unit: number | null } | { kind: "details" } | { kind: "recap" };
type Net = "ok" | "hors-ligne" | "envoi";
interface Queued {
  id: string;
  step: StepId;
  unit: number | null;
  url: string;
}

const COMPANY_PHONE = "438-900-3224";
const COMPANY_EMAIL = "info@thermopompesavendre.ca";
const FLOORS: Array<[number, string]> = [[1, "1"], [2, "2"], [3, "3"], [4, "4 et plus"]];

function screensFor(rooms: string[]): Screen[] {
  const out: Screen[] = [{ kind: "accueil" }, { kind: "questions" }];
  for (const s of VISIT_STEPS) {
    if (s.perUnit) {
      const n = Math.max(1, Math.min(MAX_UNITS, rooms.length || 1));
      for (let i = 0; i < n; i++) out.push({ kind: "photo", step: s.id, unit: i });
    } else out.push({ kind: "photo", step: s.id, unit: null });
  }
  out.push({ kind: "details" }, { kind: "recap" });
  return out;
}

const dateLong = (iso: string) => new Intl.DateTimeFormat("fr-CA", { day: "numeric", month: "long", timeZone: "America/Toronto" }).format(new Date(iso));

function Chips({ options, value, onChange, multi }: { options: Array<[string, string]>; value: string | string[]; onChange: (v: string) => void; multi?: boolean }) {
  return (
    <div className="vz-chips" role="group">
      {options.map(([v, label]) => {
        const on = multi ? (value as string[]).includes(v) : value === v;
        return (
          <button key={v} type="button" className="vz-chip" aria-pressed={on} onClick={() => onChange(v)}>
            {on && multi ? <Check size={15} aria-hidden /> : null}
            {label}
          </button>
        );
      })}
    </div>
  );
}

export function VisitApp({ token, initial }: { token: string; initial: VisitViewDTO }) {
  const base = `/visite/${encodeURIComponent(token)}`;
  const storeKey = `tav-visite:${token.slice(0, 12)}`;
  const [answers, setAnswers] = useState<VisitAnswers>(() => initial.answers ?? { ...emptyAnswers(), rooms: initial.rooms.slice(0, MAX_UNITS) });
  const [idx, setIdx] = useState(0);
  const [photos, setPhotos] = useState<VisitPhotoDTO[]>(initial.photos);
  const [queued, setQueued] = useState<Queued[]>([]);
  const [net, setNet] = useState<Net>("ok");
  const [done, setDone] = useState(Boolean(initial.submittedAt));
  const [pendingSubmit, setPendingSubmit] = useState(false);
  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState<{ tone: "bad" | "info"; text: string } | null>(null);
  const [customRoom, setCustomRoom] = useState("");
  const urls = useRef(new Map<string, string>());
  const syncing = useRef(false);
  const pendingRef = useRef(false);
  const answersRef = useRef(answers);
  const headRef = useRef<HTMLHeadingElement | null>(null);
  useEffect(() => {
    answersRef.current = answers;
    pendingRef.current = pendingSubmit;
  }, [answers, pendingSubmit]);

  const screens = useMemo(() => screensFor(answers.rooms), [answers.rooms]);
  const screen = screens[Math.min(idx, screens.length - 1)];
  const photoScreens = screens.filter((s) => s.kind === "photo").length;

  const flash = useCallback((text: string, tone: "bad" | "info" = "bad") => setMsg({ tone, text }), []);

  /* ---------- Réponses et position gardées dans le téléphone ----------
     Lues avant la première écriture (plus bas), puis posées juste après l'affichage (même rendu au serveur). */
  useEffect(() => {
    if (initial.submittedAt) return;
    let raw: string | null = null;
    try {
      raw = window.localStorage.getItem(storeKey);
    } catch {
      /* stockage indisponible : la visite fonctionne quand même */
    }
    if (!raw) return;
    let alive = true;
    void Promise.resolve().then(() => {
      if (!alive) return;
      try {
        const s = JSON.parse(raw) as { answers?: VisitAnswers; idx?: number; pendingSubmit?: boolean };
        if (s.answers && !initial.answers) setAnswers({ ...emptyAnswers(), ...s.answers });
        if (typeof s.idx === "number") setIdx(Math.max(0, s.idx));
        if (s.pendingSubmit) setPendingSubmit(true);
      } catch {
        /* donnée abîmée : ignorée */
      }
    });
    return () => {
      alive = false;
    };
  }, [storeKey, initial.submittedAt, initial.answers]);

  useEffect(() => {
    if (done) return;
    try {
      window.localStorage.setItem(storeKey, JSON.stringify({ answers, idx, pendingSubmit }));
    } catch {
      /* rien */
    }
  }, [answers, idx, pendingSubmit, done, storeKey]);

  /* ---------- Ouverture notée (une fois, dans un vrai navigateur) ---------- */
  useEffect(() => {
    if (initial.submittedAt) return;
    try {
      if (window.sessionStorage.getItem(`${storeKey}:vue`)) return;
      window.sessionStorage.setItem(`${storeKey}:vue`, "1");
    } catch {
      /* rien */
    }
    fetch(`${base}/vue`, { method: "POST" }).catch(() => undefined);
  }, [base, storeKey, initial.submittedAt]);

  /* ---------- File locale et envoi des photos ---------- */
  const reload = useCallback(async () => {
    const list = await q.queueList(token);
    const next: Queued[] = list.map((p) => {
      let url = urls.current.get(p.id);
      if (!url) {
        url = URL.createObjectURL(p.blob);
        urls.current.set(p.id, url);
      }
      return { id: p.id, step: p.step, unit: p.unit, url };
    });
    for (const [id, url] of urls.current) {
      if (!list.some((p) => p.id === id)) {
        URL.revokeObjectURL(url);
        urls.current.delete(id);
      }
    }
    setQueued(next);
    return list.length;
  }, [token]);

  const submitNow = useCallback(async (): Promise<void> => {
    setSending(true);
    try {
      const res = await fetch(`${base}/envoyer`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ answers: answersRef.current }) });
      if (res.status === 429 || res.status >= 500) throw new Error("reseau");
      const j = (await res.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
      if (j?.ok) {
        setDone(true);
        setPendingSubmit(false);
        setMsg(null);
        try {
          window.localStorage.removeItem(storeKey);
        } catch {
          /* rien */
        }
      } else {
        setPendingSubmit(false);
        flash(j?.error ?? "Envoi refusé. Réessayez.");
      }
    } catch {
      setPendingSubmit(true);
      flash("Pas de réseau pour l’instant : l’envoi partira tout seul dès que la connexion revient.", "info");
    } finally {
      setSending(false);
    }
  }, [base, storeKey, flash]);

  const sync = useCallback(async () => {
    if (syncing.current) return;
    syncing.current = true;
    let offline = typeof navigator !== "undefined" && navigator.onLine === false;
    try {
      if (offline) return;
      const list = await q.queueList(token);
      if (list.length) setNet("envoi");
      for (const ph of list) {
        const fd = new FormData();
        fd.set("file", ph.blob, "photo.jpg");
        fd.set("step", ph.step);
        if (ph.unit !== null) fd.set("unit", String(ph.unit));
        fd.set("clientId", ph.id);
        let res: Response;
        try {
          res = await fetch(`${base}/photo`, { method: "POST", body: fd });
        } catch {
          offline = true;
          break;
        }
        if (res.status === 429 || res.status >= 500) {
          offline = true;
          break;
        }
        const j = (await res.json().catch(() => null)) as { ok?: boolean; error?: string; photo?: VisitPhotoDTO } | null;
        await q.queueRemove(ph.id);
        if (j?.ok && j.photo) {
          const photo = j.photo;
          setPhotos((p) => (p.some((x) => x.id === photo.id) ? p : [...p, photo]));
        } else flash(j?.error ?? "Photo refusée.");
      }
      if (!offline && pendingRef.current && !(await q.queueList(token)).length) await submitNow();
    } finally {
      syncing.current = false;
      setNet(offline ? "hors-ligne" : "ok");
      await reload();
    }
  }, [base, token, reload, flash, submitNow]);

  useEffect(() => {
    void reload().then((n) => (n ? sync() : undefined));
    const on = () => void sync();
    const off = () => setNet("hors-ligne");
    window.addEventListener("online", on);
    window.addEventListener("offline", off);
    const t = window.setInterval(() => void sync(), 20_000);
    const map = urls.current;
    return () => {
      window.removeEventListener("online", on);
      window.removeEventListener("offline", off);
      window.clearInterval(t);
      for (const u of map.values()) URL.revokeObjectURL(u);
    };
  }, [reload, sync]);

  const count = (step: StepId, unit: number | null) => photos.filter((p) => p.step === step && p.unit === unit).length + queued.filter((p) => p.step === step && p.unit === unit).length;

  const addFiles = async (files: FileList | null, step: StepId, unit: number | null) => {
    if (!files?.length) return;
    setMsg(null);
    const room = stepOf(step).max - count(step, unit);
    if (room <= 0) return flash(`${stepOf(step).max} photos au plus pour cette étape.`, "info");
    for (const f of Array.from(files).slice(0, room)) {
      if (!f.type.startsWith("image/")) {
        flash("Choisissez une photo (JPEG, PNG ou HEIC converti par le téléphone).");
        continue;
      }
      const blob = await compressImage(f, 1600, 0.82);
      await q.queuePut({ id: q.queueId(), token, createdAt: Date.now(), step, unit, blob });
    }
    await reload();
    void sync();
  };

  const removeQueued = async (id: string) => {
    await q.queueRemove(id);
    await reload();
  };
  const removeSent = async (id: string) => {
    try {
      const res = await fetch(`${base}/retirer`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ photoId: id }) });
      const j = (await res.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
      if (j?.ok) setPhotos((p) => p.filter((x) => x.id !== id));
      else flash(j?.error ?? "Impossible de retirer la photo.");
    } catch {
      flash("Pas de réseau : réessayez dans un instant.", "info");
    }
  };

  const go = (n: number) => {
    setMsg(null);
    setIdx(Math.max(0, Math.min(screens.length - 1, n)));
    window.scrollTo({ top: 0, behavior: "auto" });
    requestAnimationFrame(() => headRef.current?.focus());
  };

  const send = async () => {
    setMsg(null);
    const pending = await reload();
    if (pending) {
      setPendingSubmit(true);
      flash("Vos photos partent dès que le réseau revient : l’envoi suivra tout seul.", "info");
      void sync();
      return;
    }
    await submitNow();
  };

  const set = <K extends keyof VisitAnswers>(k: K, v: VisitAnswers[K]) => setAnswers((a) => ({ ...a, [k]: v }));
  const toggle = (k: "rooms" | "heating", v: string) =>
    setAnswers((a) => {
      const has = a[k].includes(v);
      const list = has ? a[k].filter((x) => x !== v) : [...a[k], v];
      return { ...a, [k]: k === "rooms" ? list.slice(0, MAX_UNITS) : list };
    });

  const progress = done ? 100 : Math.round((idx / (screens.length - 1)) * 100);
  const netLabel = net === "hors-ligne" ? "Hors ligne" : net === "envoi" ? "Envoi…" : queued.length ? `${queued.length} en attente` : "En ligne";

  const top = (
    <header className="vz-top">
      <div className="vz-top__in">
        <span className="vz-brand">
          Thermopompes <em>À Vendre</em>
        </span>
        <span className="vz-net" data-state={net} role="status">
          {net === "hors-ligne" ? <CloudOff size={14} aria-hidden /> : net === "envoi" ? <LoaderCircle size={14} className="vz-spin" aria-hidden /> : <Wifi size={14} aria-hidden />}
          {netLabel}
        </span>
      </div>
      <div className="vz-progress" aria-hidden>
        <div className="vz-progress__bar">
          <span style={{ width: `${progress}%` }} />
        </div>
      </div>
    </header>
  );

  if (done) {
    return (
      <div className="vz">
        {top}
        <main className="vz-main vz-done">
          <div className="vz-done__mark" aria-hidden>
            <Check size={40} />
          </div>
          <h1 className="vz-h1">
            Merci, <em>c’est envoyé</em>.
          </h1>
          <p className="vz-lead">Nous préparons votre soumission à partir de vos photos. Vous la recevrez par courriel.</p>
          <p className="vz-soft" style={{ fontSize: 14 }}>
            Vos photos sont gardées {initial.retentionMonths} mois, puis supprimées automatiquement. Vous pouvez fermer cette page.
          </p>
        </main>
      </div>
    );
  }

  const photoNumber = screens.slice(0, idx + 1).filter((s) => s.kind === "photo").length;
  const roomName = (unit: number | null) => (unit !== null ? answers.rooms[unit] ?? "" : "");

  let body: React.ReactNode;
  let next: React.ReactNode = (
    <button type="button" className="vz-btn vz-btn--primary" onClick={() => go(idx + 1)}>
      Continuer
    </button>
  );

  if (screen.kind === "accueil") {
    const first = initial.firstName.trim();
    body = (
      <div className="vz-screen" key="accueil">
        <p className="vz-kicker">Visite photo · environ 5 minutes</p>
        <h1 className="vz-h1" ref={headRef} tabIndex={-1}>
          {first ? `Bonjour ${first}, ` : "Bonjour, "}
          <em>montrez-nous</em> votre maison.
        </h1>
        <p className="vz-lead">Quelques photos et quelques questions : nous préparons votre soumission sans nous déplacer.</p>
        <section className="vz-card" aria-labelledby="vz-steps-t">
          <h2 className="vz-card__title" id="vz-steps-t">
            <Camera size={17} aria-hidden /> Ce que nous allons voir
          </h2>
          <ol className="vz-steps">
            {VISIT_STEPS.map((s, i) => (
              <li key={s.id}>
                <span className="vz-steps__n">{i + 1}</span>
                {s.short}
                {s.perUnit ? <small>une par pièce</small> : null}
              </li>
            ))}
          </ol>
        </section>
        <section className="vz-card vz-privacy" aria-labelledby="vz-privacy-t">
          <h2 className="vz-card__title" id="vz-privacy-t">
            <ShieldCheck size={17} aria-hidden /> Vos photos et vos renseignements
          </h2>
          <dl>
            <div>
              <dt>À quoi elles servent</dt>
              <dd>Uniquement à préparer votre soumission : emplacement de l’unité, électricité, installation.</dd>
            </div>
            <div>
              <dt>Qui les voit</dt>
              <dd>L’équipe de Thermopompes À Vendre, pour votre soumission.</dd>
            </div>
            {initial.vision ? (
              <div>
                <dt>Lecture automatique</dt>
                <dd>Un service d’analyse d’images (Google Gemini) peut lire les étiquettes (ampérage, plaque de l’appareil) pour gagner du temps. Une personne vérifie toujours.</dd>
              </div>
            ) : null}
            <div>
              <dt>Combien de temps on les garde</dt>
              <dd>{initial.retentionMonths} mois, puis elles sont supprimées automatiquement.</dd>
            </div>
            <div>
              <dt>À éviter</dt>
              <dd>Ne photographiez aucune personne, ni vos documents personnels.</dd>
            </div>
            <div>
              <dt>Vos droits</dt>
              <dd>
                Pour consulter ou faire supprimer vos photos : <a href={`mailto:${COMPANY_EMAIL}`}>{COMPANY_EMAIL}</a> ou <a href={`tel:${COMPANY_PHONE.replace(/-/g, "")}`}>{COMPANY_PHONE}</a>.
              </dd>
            </div>
          </dl>
        </section>
        <p className="vz-soft" style={{ fontSize: 13.5, marginTop: 14 }}>
          Lien valide jusqu’au {dateLong(initial.expiresAt)}.
        </p>
      </div>
    );
    next = (
      <button type="button" className="vz-btn vz-btn--primary" onClick={() => go(1)}>
        Commencer
      </button>
    );
  } else if (screen.kind === "questions") {
    const rooms = [...new Set([...initial.choices.room, ...answers.rooms])];
    body = (
      <div className="vz-screen" key="questions">
        <p className="vz-kicker">Votre maison</p>
        <h2 className="vz-h2" ref={headRef} tabIndex={-1}>
          Parlez-nous de la maison
        </h2>
        <p className="vz-lead">Un clic par réponse. Rien n’est obligatoire.</p>
        <div className="vz-field">
          <span className="vz-label">Type de maison</span>
          <Chips options={initial.choices.propertyType.map((o) => [o, o])} value={answers.propertyType} onChange={(v) => set("propertyType", answers.propertyType === v ? "" : v)} />
        </div>
        <div className="vz-field">
          <label className="vz-label" htmlFor="vz-year">
            Année de construction <small>si vous la connaissez</small>
          </label>
          <input id="vz-year" className="vz-input" inputMode="numeric" maxLength={20} placeholder="Ex. 1987, ou « vers 1960 »" value={answers.yearBuilt} onChange={(e) => set("yearBuilt", e.target.value)} />
        </div>
        <div className="vz-field">
          <span className="vz-label">Étages hors sol</span>
          <Chips options={FLOORS.map(([n, l]) => [String(n), l])} value={answers.floors === null ? "" : String(answers.floors)} onChange={(v) => set("floors", answers.floors === Number(v) ? null : Number(v))} />
        </div>
        <div className="vz-field">
          <span className="vz-label">Un sous-sol ?</span>
          <Chips options={[["oui", "Oui"], ["non", "Non"]]} value={answers.basement} onChange={(v) => set("basement", answers.basement === v ? "" : (v as "oui" | "non"))} />
        </div>
        <div className="vz-field">
          <span className="vz-label">
            Pièces à chauffer <small>une photo de chacune suivra</small>
          </span>
          <Chips multi options={rooms.map((r) => [r, answers.rooms.includes(r) ? `${answers.rooms.indexOf(r) + 1}. ${r}` : r])} value={answers.rooms} onChange={(v) => toggle("rooms", v)} />
          <div className="vz-row" style={{ marginTop: 8 }}>
            <input className="vz-input" placeholder="Autre pièce" maxLength={60} value={customRoom} onChange={(e) => setCustomRoom(e.target.value)} aria-label="Autre pièce" />
            <button
              type="button"
              className="vz-btn vz-btn--ghost"
              disabled={!customRoom.trim() || answers.rooms.length >= MAX_UNITS}
              onClick={() => {
                const r = customRoom.trim();
                if (r && !answers.rooms.includes(r)) set("rooms", [...answers.rooms, r].slice(0, MAX_UNITS));
                setCustomRoom("");
              }}
            >
              Ajouter
            </button>
          </div>
        </div>
        <div className="vz-field">
          <span className="vz-label">Votre chauffage actuel</span>
          <Chips multi options={HEATING_OPTIONS.map((o) => [o, o])} value={answers.heating} onChange={(v) => toggle("heating", v)} />
        </div>
      </div>
    );
  } else if (screen.kind === "photo") {
    const s = stepOf(screen.step);
    const unit = screen.unit;
    const room = roomName(unit);
    const mine = photos.filter((p) => p.step === s.id && p.unit === unit);
    const waiting = queued.filter((p) => p.step === s.id && p.unit === unit);
    const n = mine.length + waiting.length;
    const title = s.perUnit ? `Pièce ${(unit ?? 0) + 1}${room ? ` · ${room}` : ""} : la pièce et le mur` : s.title;
    body = (
      <div className="vz-screen" key={`${s.id}-${unit ?? "x"}`}>
        <p className="vz-kicker">
          Photo {photoNumber} sur {photoScreens}
        </p>
        <h2 className="vz-h2" ref={headRef} tabIndex={-1}>
          {title}
        </h2>
        <p className="vz-lead">{s.lead}</p>
        <StepExample step={s.id} label={s.short} />
        <ul className="vz-tips">
          {s.tips.map((t) => (
            <li key={t}>
              <CheckCircle2 size={17} aria-hidden />
              <span>{t}</span>
            </li>
          ))}
        </ul>
        {n < s.max ? (
          <div className="vz-capture">
            <label className="vz-btn vz-btn--ink">
              <Camera size={19} aria-hidden /> Prendre une photo
              <input type="file" accept="image/*" capture="environment" onChange={(e) => void addFiles(e.target.files, s.id, unit).finally(() => (e.target.value = ""))} />
            </label>
            <label className="vz-btn vz-btn--ghost">
              <ImagePlus size={19} aria-hidden /> Choisir dans mes photos
              <input type="file" accept="image/*" multiple onChange={(e) => void addFiles(e.target.files, s.id, unit).finally(() => (e.target.value = ""))} />
            </label>
          </div>
        ) : (
          <p className="vz-soft" style={{ fontSize: 14 }}>
            {s.max} photos au plus pour cette étape : c’est parfait.
          </p>
        )}
        {n ? (
          <div className="vz-thumbs">
            {mine.map((p) => (
              <span key={p.id} className="vz-thumb">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.url} alt={`Photo : ${s.short}`} />
                <span className="vz-thumb__state" data-state="envoyee">
                  <Check size={12} aria-hidden /> Envoyée
                </span>
                <button type="button" className="vz-thumb__rm" onClick={() => void removeSent(p.id)} aria-label="Retirer la photo">
                  <X size={16} aria-hidden />
                </button>
              </span>
            ))}
            {waiting.map((p) => (
              <span key={p.id} className="vz-thumb">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.url} alt={`Photo en attente : ${s.short}`} />
                <span className="vz-thumb__state">
                  <LoaderCircle size={12} className="vz-spin" aria-hidden /> En attente
                </span>
                <button type="button" className="vz-thumb__rm" onClick={() => void removeQueued(p.id)} aria-label="Retirer la photo">
                  <X size={16} aria-hidden />
                </button>
              </span>
            ))}
          </div>
        ) : null}
      </div>
    );
    next = n ? (
      <button type="button" className="vz-btn vz-btn--primary" onClick={() => go(idx + 1)}>
        Continuer
      </button>
    ) : (
      <button type="button" className="vz-btn vz-btn--ghost" onClick={() => go(idx + 1)}>
        Passer cette étape
      </button>
    );
  } else if (screen.kind === "details") {
    body = (
      <div className="vz-screen" key="details">
        <p className="vz-kicker">Presque fini</p>
        <h2 className="vz-h2" ref={headRef} tabIndex={-1}>
          Quelques détails pratiques
        </h2>
        <p className="vz-lead">Facultatif : ce qui aidera l’équipe le jour de l’installation.</p>
        <div className="vz-field">
          <label className="vz-label" htmlFor="vz-access">
            Accès et stationnement
          </label>
          <textarea id="vz-access" className="vz-textarea" maxLength={1000} placeholder="Stationnement dans l’entrée, accès par la ruelle…" value={answers.access} onChange={(e) => set("access", e.target.value)} />
        </div>
        <div className="vz-field">
          <label className="vz-label" htmlFor="vz-constraints">
            Contraintes à connaître
          </label>
          <textarea id="vz-constraints" className="vz-textarea" maxLength={1000} placeholder="Télétravail, jeune enfant, animaux, horaires…" value={answers.constraints} onChange={(e) => set("constraints", e.target.value)} />
        </div>
        <div className="vz-field">
          <label className="vz-label" htmlFor="vz-presence">
            Qui sera présent pendant les travaux
          </label>
          <input id="vz-presence" className="vz-input" maxLength={300} placeholder="Un adulte de 18 ans ou plus" value={answers.presence} onChange={(e) => set("presence", e.target.value)} />
        </div>
        <div className="vz-field">
          <label className="vz-label" htmlFor="vz-notes">
            Autre chose à nous dire ?
          </label>
          <textarea id="vz-notes" className="vz-textarea" maxLength={2000} value={answers.notes} onChange={(e) => set("notes", e.target.value)} />
        </div>
      </div>
    );
  } else {
    const photoSteps = screens.filter((x): x is Extract<Screen, { kind: "photo" }> => x.kind === "photo");
    const total = photos.length + queued.length;
    body = (
      <div className="vz-screen" key="recap">
        <p className="vz-kicker">Dernière étape</p>
        <h2 className="vz-h2" ref={headRef} tabIndex={-1}>
          Tout est prêt ?
        </h2>
        <p className="vz-lead">
          {total} photo{total > 1 ? "s" : ""}
          {queued.length ? `, dont ${queued.length} encore dans le téléphone (elle${queued.length > 1 ? "s partiront" : " partira"} avec l’envoi)` : ""}.
        </p>
        <section className="vz-card">
          <ol className="vz-steps">
            {photoSteps.map((p, i) => {
              const c = count(p.step, p.unit);
              const label = stepOf(p.step).perUnit ? `Pièce ${(p.unit ?? 0) + 1}${roomName(p.unit) ? ` · ${roomName(p.unit)}` : ""}` : stepOf(p.step).short;
              return (
                <li key={`${p.step}-${p.unit ?? "x"}`} className={c ? "is-done" : ""}>
                  <span className="vz-steps__n">{c ? <Check size={14} aria-hidden /> : i + 1}</span>
                  <button type="button" className="vz-btn vz-btn--quiet" style={{ minHeight: 0, padding: 0, justifyContent: "flex-start" }} onClick={() => go(screens.indexOf(p))}>
                    {label}
                  </button>
                  <small>{c ? `${c} photo${c > 1 ? "s" : ""}` : "passée"}</small>
                </li>
              );
            })}
          </ol>
        </section>
        <p className="vz-soft" style={{ fontSize: 13.5, marginTop: 14 }}>
          En envoyant, vous confirmez que les photos ne montrent aucune personne. Elles servent seulement à votre soumission et sont supprimées après {initial.retentionMonths} mois.
        </p>
      </div>
    );
    next = (
      <button type="button" className="vz-btn vz-btn--primary" disabled={sending} onClick={() => void send()}>
        {sending ? <LoaderCircle size={18} className="vz-spin" aria-hidden /> : <Send size={18} aria-hidden />} {pendingSubmit ? "Envoi en attente du réseau" : "Envoyer"}
      </button>
    );
  }

  return (
    <div className="vz">
      {top}
      <main className="vz-main">
        {msg ? (
          <p className={`vz-alert ${msg.tone === "info" ? "vz-alert--info" : ""}`} role="alert">
            {msg.text}
          </p>
        ) : null}
        {body}
      </main>
      <div className="vz-dock">
        <div className="vz-dock__in">
          {idx > 0 ? (
            <button type="button" className="vz-btn vz-btn--ghost vz-dock__back" onClick={() => go(idx - 1)} aria-label="Étape précédente">
              <ArrowLeft size={20} aria-hidden />
            </button>
          ) : null}
          {next}
        </div>
      </div>
    </div>
  );
}
