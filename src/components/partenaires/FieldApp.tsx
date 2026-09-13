"use client";

/* ==================================================================
   Page de chantier de l'installateur (téléphone d'abord).
   Tout ce qu'il fait passe par une file locale (IndexedDB) : sans
   réseau (sous-sol), rien ne se perd ; l'envoi reprend dès que le
   signal revient (événement « online » + nouvel essai toutes les
   20 s). Photos compressées dans le téléphone (1600 px, JPEG).
   Les règles de fermeture sont les mêmes qu'au serveur (rules.ts) :
   le bouton grisé n'est qu'un confort, le serveur vérifie de nouveau.
   ================================================================== */

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { CalendarClock, Camera, Check, CheckCircle2, CloudOff, Flag, Loader2, Lock, MapPin, Navigation, Phone, Plus, RefreshCw, ScanLine, Timer, Trash2, Wrench, X } from "lucide-react";
import { compressImage } from "@/components/gestion/soumissions/compress";
import { missingForClose, normalizeSerial, SERIAL_RE, type FieldOp } from "@/lib/gestion/terrain/rules";
import { CHECKLIST, PHOTO_STEPS, type FieldRecord, type PhotoStep } from "@/lib/gestion/terrain/types";
import type { FieldViewDTO } from "@/lib/gestion/terrain/service";
import { SignaturePad } from "./SignaturePad";
import * as q from "./offline-queue";

type DistOmit<T, K extends PropertyKey> = T extends unknown ? Omit<T, K> : never;
type OpInput = DistOmit<FieldOp, "id" | "at">;
type Pending = { id: string; step: PhotoStep | null; ticketId: string | null; url: string };
type Status = "ok" | "envoi" | "hors-ligne";

const TZ = "America/Toronto";
const tf = new Intl.DateTimeFormat("fr-CA", { hour: "numeric", minute: "2-digit", timeZone: TZ });
const df = new Intl.DateTimeFormat("fr-CA", { weekday: "long", day: "numeric", month: "long", timeZone: TZ });
const clock = (iso: string) => tf.format(new Date(iso));
const dayOf = (ymd: string) => df.format(new Date(`${ymd}T12:00:00Z`));

/** Vue affichée = dernière vue du serveur + opérations encore dans la file. */
function applyLocal(v: FieldViewDTO, ops: FieldOp[]): FieldViewDTO {
  const e: FieldViewDTO = { ...v, checklist: { ...v.checklist }, serials: { ...v.serials } };
  for (const op of ops) {
    const at = op.at ?? new Date().toISOString();
    if (op.type === "en-route") e.enRoute = { at, etaAt: op.etaAt, smsSent: false };
    else if (op.type === "arrive") e.arrivedAt = e.arrivedAt ?? at;
    else if (op.type === "checklist") {
      if (op.value) e.checklist[op.item] = op.value;
      else delete e.checklist[op.item];
    } else if (op.type === "serials") e.serials = { outdoor: op.outdoor.map(normalizeSerial).filter(Boolean), indoor: op.indoor.map(normalizeSerial).filter(Boolean) };
    else if (op.type === "signature") e.signature = { name: op.name, at };
  }
  return e;
}

/** Photos réduites dans le téléphone (1600 px, JPEG), puis mises dans la file locale (hors du rendu : l'horloge est lue ici). */
async function queuePhotos(token: string, files: FileList, step: PhotoStep | null, ticketId: string | null): Promise<void> {
  for (const f of Array.from(files).slice(0, 8)) {
    const blob = await compressImage(f, 1600, 0.82);
    const now = Date.now();
    await q.put("photos", { id: q.newId(), token, createdAt: now, step, ticketId, takenAt: new Date(f.lastModified || now).toISOString(), blob });
  }
}

function Section({ n, title, sub, done, children, id }: { n: string; title: string; sub?: string; done?: boolean; children: React.ReactNode; id?: string }) {
  return (
    <section className={`ft-card pp-rise${done ? " is-done" : ""}`} id={id}>
      <header className="ft-card__head">
        <span className="ft-card__n" aria-hidden>
          {done ? <Check size={15} /> : n}
        </span>
        <div style={{ minWidth: 0 }}>
          <h2 className="ft-card__title">{title}</h2>
          {sub ? <p className="ft-card__sub">{sub}</p> : null}
        </div>
      </header>
      {children}
    </section>
  );
}

function Ring({ done, total }: { done: number; total: number }) {
  const r = 26;
  const c = 2 * Math.PI * r;
  const p = total ? done / total : 0;
  return (
    <div className="ft-ring" role="img" aria-label={`${done} étapes sur ${total}`}>
      <svg viewBox="0 0 64 64">
        <circle cx="32" cy="32" r={r} className="ft-ring__bg" />
        <circle cx="32" cy="32" r={r} className="ft-ring__fg" style={{ strokeDasharray: c, strokeDashoffset: c * (1 - p) }} />
      </svg>
      <span>
        <b>{done}</b>/{total}
      </span>
    </div>
  );
}

export function FieldApp({ token, initial }: { token: string; initial: FieldViewDTO }) {
  const base = `/chantier/${encodeURIComponent(token)}`;
  const [view, setView] = useState(initial);
  const [ops, setOps] = useState<q.QueuedOp[]>([]);
  const [pending, setPending] = useState<Pending[]>([]);
  const [status, setStatus] = useState<Status>("ok");
  const [toast, setToast] = useState<{ tone: "ok" | "bad"; text: string } | null>(null);
  const [closeErrors, setCloseErrors] = useState<string[]>([]);
  const [confirmClose, setConfirmClose] = useState(false);
  const syncing = useRef(false);
  const urls = useRef(new Map<string, string>());
  const toastTimer = useRef<number | null>(null);

  const flash = useCallback((tone: "ok" | "bad", text: string) => {
    setToast({ tone, text });
    if (toastTimer.current) window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(null), 5000);
  }, []);

  const reload = useCallback(async () => {
    const [o, p] = await Promise.all([q.list("ops", token), q.list("photos", token)]);
    setOps(o);
    setPending(
      p.map((x) => {
        let u = urls.current.get(x.id);
        if (!u) {
          u = URL.createObjectURL(x.blob);
          urls.current.set(x.id, u);
        }
        return { id: x.id, step: x.step, ticketId: x.ticketId, url: u };
      }),
    );
  }, [token]);

  const refreshView = useCallback(async () => {
    const r = await fetch(`${base}/sync`, { cache: "no-store" }).catch(() => null);
    const j = r && r.ok ? ((await r.json().catch(() => null)) as { view?: FieldViewDTO } | null) : null;
    if (j?.view) setView(j.view);
  }, [base]);

  const sync = useCallback(async () => {
    if (syncing.current) return;
    syncing.current = true;
    let offline = typeof navigator !== "undefined" && navigator.onLine === false;
    try {
      if (offline) return;
      const photos = await q.list("photos", token);
      if (photos.length) setStatus("envoi");
      let ticketPhotos = false;
      for (const ph of photos) {
        const fd = new FormData();
        fd.set("file", ph.blob, "photo.jpg");
        if (ph.step) fd.set("step", ph.step);
        if (ph.ticketId) fd.set("ticketId", ph.ticketId);
        fd.set("clientId", ph.id);
        fd.set("takenAt", ph.takenAt);
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
        const j = (await res.json().catch(() => null)) as { ok?: boolean; error?: string; photo?: FieldViewDTO["photos"][number] } | null;
        await q.remove("photos", ph.id);
        const u = urls.current.get(ph.id);
        if (u) {
          URL.revokeObjectURL(u);
          urls.current.delete(ph.id);
        }
        if (j?.ok && j.photo) {
          const photo = j.photo;
          setView((v) => (v.photos.some((p) => p.id === photo.id) ? v : { ...v, photos: [...v.photos, photo] }));
        } else if (j?.ok && ph.ticketId) ticketPhotos = true;
        else flash("bad", j?.error ?? "Photo refusée.");
      }
      if (offline) return;
      const list = await q.list("ops", token);
      if (!list.length) {
        if (ticketPhotos) await refreshView();
        return;
      }
      setStatus("envoi");
      let res: Response;
      try {
        res = await fetch(`${base}/sync`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ops: list.map((o) => o.op) }) });
      } catch {
        offline = true;
        return;
      }
      if (res.status === 429 || res.status >= 500) {
        offline = true;
        return;
      }
      const j = (await res.json().catch(() => null)) as { results?: Array<{ id: string; ok: boolean; error?: string; missing?: Array<{ label: string }> }>; view?: FieldViewDTO } | null;
      if (res.status === 400 || res.status === 404) {
        for (const o of list) await q.remove("ops", o.id);
        flash("bad", res.status === 404 ? "Ce job ne vous est plus attribué." : "Données refusées : rechargez la page.");
        return;
      }
      for (const r of j?.results ?? []) {
        await q.remove("ops", r.id);
        if (!r.ok) {
          if (r.missing?.length) setCloseErrors(r.missing.map((m) => m.label));
          flash("bad", r.error ?? "Opération refusée.");
        } else if (list.find((o) => o.id === r.id)?.op.type === "fermer") flash("ok", "Job fermée. Merci !");
      }
      if (j?.view) setView(j.view);
    } finally {
      syncing.current = false;
      setStatus(offline ? "hors-ligne" : "ok");
      await reload();
    }
  }, [base, token, reload, refreshView, flash]);

  const enqueue = useCallback(
    async (op: OpInput) => {
      const id = q.newId();
      await q.put("ops", { id, token, createdAt: Date.now(), op: { ...op, id, at: new Date().toISOString() } as FieldOp });
      await reload();
      void sync();
    },
    [token, reload, sync],
  );

  useEffect(() => {
    // File locale relue puis envoyée au premier passage, dès le retour du réseau et toutes les 20 s.
    const first = window.setTimeout(() => void reload().then(() => sync()), 0);
    const on = () => void sync();
    const off = () => setStatus("hors-ligne");
    window.addEventListener("online", on);
    window.addEventListener("offline", off);
    const id = window.setInterval(() => void sync(), 20_000);
    return () => {
      window.clearTimeout(first);
      window.removeEventListener("online", on);
      window.removeEventListener("offline", off);
      window.clearInterval(id);
    };
  }, [reload, sync]);

  useEffect(() => {
    const map = urls.current;
    return () => {
      for (const u of map.values()) URL.revokeObjectURL(u);
    };
  }, []);

  const addPhotos = async (files: FileList | null, step: PhotoStep | null, ticketId: string | null = null) => {
    if (!files?.length) return;
    await queuePhotos(token, files, step, ticketId);
    await reload();
    void sync();
  };

  const removePending = async (id: string) => {
    await q.remove("photos", id);
    const u = urls.current.get(id);
    if (u) {
      URL.revokeObjectURL(u);
      urls.current.delete(id);
    }
    await reload();
  };

  /* ---------------- État affiché ---------------- */

  const eff = useMemo(() => applyLocal(view, ops.map((o) => o.op)), [view, ops]);
  const closing = ops.some((o) => o.op.type === "fermer");
  const stepPhotos = (s: PhotoStep) => [...eff.photos.filter((p) => p.step === s).map((p) => ({ id: p.id, url: p.url, pending: false })), ...pending.filter((p) => p.step === s && !p.ticketId).map((p) => ({ id: p.id, url: p.url, pending: true }))];
  const missing = useMemo(
    () =>
      missingForClose({
        photos: [...eff.photos.map((p) => ({ step: p.step })), ...pending.filter((p) => p.step && !p.ticketId).map((p) => ({ step: p.step as PhotoStep }))] as FieldRecord["photos"],
        serials: eff.serials,
        checklist: Object.fromEntries(Object.entries(eff.checklist).map(([k, v]) => [k, { value: v, at: "" }])) as FieldRecord["checklist"],
        clientSignature: eff.signature ? ({} as FieldRecord["clientSignature"]) : undefined,
      }),
    [eff, pending],
  );
  const total = PHOTO_STEPS.length + 2 + CHECKLIST.length + 1;
  const queued = ops.length + pending.length;

  /* ---------------- Trajet ---------------- */

  const [etaMin, setEtaMin] = useState<number | null>(30);
  const [etaTime, setEtaTime] = useState("");
  const etaAt = (): string | null => {
    if (etaTime && /^\d{2}:\d{2}$/.test(etaTime)) {
      const [h, m] = etaTime.split(":").map(Number);
      const d = new Date();
      d.setHours(h, m, 0, 0);
      return d.getTime() > Date.now() - 5 * 60_000 ? d.toISOString() : null;
    }
    return etaMin ? new Date(Date.now() + etaMin * 60_000).toISOString() : null;
  };

  /* ---------------- Numéros de série ---------------- */

  const [draft, setDraft] = useState(() => ({ outdoor: initial.serials.outdoor.length ? initial.serials.outdoor : [""], indoor: initial.serials.indoor.length ? initial.serials.indoor : [""] }));
  const [visionUsed, setVisionUsed] = useState(false);
  const [reading, setReading] = useState<string | null>(null);
  const cleanDraft = { outdoor: draft.outdoor.map(normalizeSerial).filter(Boolean), indoor: draft.indoor.map(normalizeSerial).filter(Boolean) };
  const serialsSaved = JSON.stringify(cleanDraft) === JSON.stringify(eff.serials);
  const badSerial = [...cleanDraft.outdoor, ...cleanDraft.indoor].find((s) => !SERIAL_RE.test(s));

  const readPlate = async (photoId: string, target: "outdoor" | "indoor") => {
    setReading(photoId);
    try {
      const res = await fetch(`${base}/plaque`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ photoId }) });
      const j = (await res.json().catch(() => null)) as { ok?: boolean; serial?: string | null; error?: string } | null;
      if (j?.ok && j.serial) {
        const serial = j.serial;
        setDraft((d) => {
          const list = d[target].filter((x) => x.trim());
          return { ...d, [target]: list.includes(serial) ? list : [...list, serial] };
        });
        setVisionUsed(true);
        flash("ok", `Numéro lu : ${serial}. Vérifiez-le, puis enregistrez.`);
      } else flash("bad", j?.error ?? "Plaque illisible : saisissez le numéro à la main.");
    } catch {
      flash("bad", "Pas de réseau : saisissez le numéro à la main.");
    } finally {
      setReading(null);
    }
  };

  /* ---------------- Signature ---------------- */

  const [signName, setSignName] = useState(initial.client.name);
  const [signImage, setSignImage] = useState("");
  const [resign, setResign] = useState(false);

  /* ---------------- Appels de service ---------------- */

  const [visit, setVisit] = useState<Record<string, string>>({});
  const [note, setNote] = useState<Record<string, string>>({});
  const [busy, setBusy] = useState<string | null>(null);
  const ticketAction = async (ticketId: string, body: Record<string, string>) => {
    setBusy(ticketId);
    try {
      const res = await fetch(`${base}/service`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ticketId, ...body }) });
      const j = (await res.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
      if (j?.ok) {
        flash("ok", body.type === "resolu" ? "Résolution notée : le client est invité à confirmer." : "Visite prévue.");
        await refreshView();
      } else flash("bad", j?.error ?? "Action impossible.");
    } catch {
      flash("bad", "Pas de réseau : réessayez dès que le signal revient.");
    } finally {
      setBusy(null);
    }
  };

  const phoneDigits = eff.client.phone.replace(/\D/g, "");

  return (
    <main className="pp ft">
      <header className="ft-top">
        <div className="ft-top__in">
          <div className="ft-top__id">
            <span className="ft-dot" aria-hidden />
            <div>
              <b>Job n° {eff.jobNumber}</b>
              <small>{eff.company}</small>
            </div>
          </div>
          <span className={`ft-pill ft-pill--${status === "hors-ligne" ? "off" : status === "envoi" || queued ? "busy" : "ok"}`} role="status" aria-live="polite">
            {status === "hors-ligne" ? <CloudOff size={14} aria-hidden /> : status === "envoi" ? <Loader2 size={14} aria-hidden className="ft-spin" /> : queued ? <RefreshCw size={14} aria-hidden /> : <Check size={14} aria-hidden />}
            {status === "hors-ligne" ? `Hors ligne${queued ? ` · ${queued} en attente` : ""}` : status === "envoi" ? "Envoi…" : queued ? `${queued} en attente` : "Tout est envoyé"}
          </span>
        </div>
        <div className="ft-bar" aria-hidden>
          <i style={{ ["--p" as string]: (total - missing.length) / total }} />
        </div>
      </header>

      <div className="ft-wrap">
        {toast ? (
          <p className={`pp-alert ${toast.tone === "ok" ? "pp-alert--ok" : ""} ft-toast`} role="status">
            {toast.text}
          </p>
        ) : null}

        <section className="ft-hero pp-rise">
          <div style={{ minWidth: 0 }}>
            <p className="pp-eyebrow" style={{ color: "var(--orange-2)" }}>
              Chantier{eff.scheduledFor ? ` · ${dayOf(eff.scheduledFor)}` : ""}
              {eff.plannedAt ? ` · arrivée prévue ${clock(eff.plannedAt)}` : ""}
            </p>
            <h1 className="ft-h1">{eff.client.name || "Client"}</h1>
            <div className="ft-chips">
              {phoneDigits ? (
                <a className="ft-chip" href={`tel:${phoneDigits}`}>
                  <Phone size={14} aria-hidden /> {eff.client.phone}
                </a>
              ) : null}
              {eff.client.address ? (
                <span className="ft-chip">
                  <MapPin size={14} aria-hidden /> {eff.client.address}
                </span>
              ) : null}
            </div>
          </div>
          {!eff.closed ? <Ring done={total - missing.length} total={total} /> : null}
          {eff.equipment.length ? (
            <dl className="ft-equip">
              {eff.equipment.map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          ) : null}
          {eff.notes ? <p className="ft-notes">{eff.notes}</p> : null}
        </section>

        {eff.closed ? (
          <section className="ft-card ft-closed pp-rise">
            <span className="ft-closed__icon">
              <CheckCircle2 size={30} aria-hidden />
            </span>
            <h2 className="pp-section-title">
              Job fermée<em>{eff.closedAt ? ` le ${dayOf(eff.closedAt.slice(0, 10))} à ${clock(eff.closedAt)}` : ""}</em>
            </h2>
            <p className="pp-lead">Merci ! Le propriétaire a été prévenu. Photos, numéros de série et signature sont au dossier du client.</p>
            <dl className="pp-proof">
              <dt>Photos</dt>
              <dd>{eff.photos.length}</dd>
              <dt>Séries ext.</dt>
              <dd>{eff.serials.outdoor.join(", ") || "—"}</dd>
              <dt>Séries int.</dt>
              <dd>{eff.serials.indoor.join(", ") || "—"}</dd>
              <dt>Signé par</dt>
              <dd>{eff.signature?.name ?? "—"}</dd>
            </dl>
          </section>
        ) : (
          <>
            <Section n="01" title="Trajet" sub="Aucune position n’est partagée : seulement l’heure estimée que vous donnez." done={Boolean(eff.arrivedAt)}>
              {!eff.enRoute ? (
                <div className="ft-stack">
                  <span className="pp-label">
                    <Timer size={14} aria-hidden style={{ verticalAlign: -2 }} /> Arrivée estimée
                  </span>
                  <div className="ft-choices" role="group" aria-label="Arrivée estimée">
                    {[15, 30, 45, 60].map((m) => (
                      <button
                        key={m}
                        type="button"
                        className={`ft-choice${etaMin === m && !etaTime ? " is-on" : ""}`}
                        aria-pressed={etaMin === m && !etaTime}
                        onClick={() => {
                          setEtaMin(m);
                          setEtaTime("");
                        }}
                      >
                        {m === 60 ? "1 h" : `${m} min`}
                      </button>
                    ))}
                    <label className={`ft-choice ft-choice--time${etaTime ? " is-on" : ""}`}>
                      <span className="pp-sr">Heure précise</span>
                      <input type="time" value={etaTime} onChange={(e) => setEtaTime(e.target.value)} aria-label="Heure d’arrivée précise" />
                    </label>
                  </div>
                  <button type="button" className="pp-btn pp-btn--primary pp-btn--lg pp-btn--block" onClick={() => void enqueue({ type: "en-route", etaAt: etaAt() })}>
                    <Navigation size={18} aria-hidden /> Je suis en route
                  </button>
                  <p className="pp-hint">Le client reçoit un texto : « Votre installateur est en route », avec l’heure estimée.</p>
                </div>
              ) : !eff.arrivedAt ? (
                <div className="ft-stack">
                  <p className="ft-state">
                    <Navigation size={16} aria-hidden /> En route depuis {clock(eff.enRoute.at)}
                    {eff.enRoute.etaAt ? ` · arrivée prévue vers ${clock(eff.enRoute.etaAt)}` : ""}
                    {eff.enRoute.smsSent ? " · texto envoyé au client" : ""}
                  </p>
                  <button type="button" className="pp-btn pp-btn--ink pp-btn--lg pp-btn--block" onClick={() => void enqueue({ type: "arrive" })}>
                    <Wrench size={18} aria-hidden /> Je suis arrivé, je commence
                  </button>
                </div>
              ) : (
                <p className="ft-state ft-state--ok">
                  <Check size={16} aria-hidden /> Arrivé à {clock(eff.arrivedAt)}
                  {eff.enRoute?.etaAt ? ` (prévu ${clock(eff.enRoute.etaAt)})` : ""}
                </p>
              )}
            </Section>

            <Section n="02" title="Photos obligatoires" sub="Au moins une photo par étape. Elles partent seules dès qu’il y a du réseau." done={PHOTO_STEPS.every((s) => stepPhotos(s.id).length > 0)}>
              <ul className="ft-steps">
                {PHOTO_STEPS.map((s) => {
                  const list = stepPhotos(s.id);
                  const plate = s.id === "plaque-ext" || s.id === "plaque-int";
                  return (
                    <li key={s.id} className={`ft-step${list.length ? " is-done" : ""}`}>
                      <div className="ft-step__head">
                        <span className="ft-step__check" aria-hidden>
                          {list.length ? <Check size={13} /> : null}
                        </span>
                        <div style={{ minWidth: 0 }}>
                          <b>{s.label}</b>
                          <small>{s.hint}</small>
                        </div>
                      </div>
                      {list.length ? (
                        <div className="ft-thumbs">
                          {list.map((p) => (
                            <figure key={p.id} className={`ft-thumb${p.pending ? " is-pending" : ""}`}>
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img src={p.url} alt={s.label} loading="lazy" />
                              {p.pending ? (
                                <button type="button" className="ft-thumb__x" aria-label="Retirer cette photo" onClick={() => void removePending(p.id)}>
                                  <X size={13} />
                                </button>
                              ) : plate && eff.vision && status !== "hors-ligne" ? (
                                <button type="button" className="ft-thumb__scan" disabled={reading === p.id} onClick={() => void readPlate(p.id, s.id === "plaque-ext" ? "outdoor" : "indoor")}>
                                  {reading === p.id ? <Loader2 size={13} className="ft-spin" aria-hidden /> : <ScanLine size={13} aria-hidden />} Lire
                                </button>
                              ) : null}
                            </figure>
                          ))}
                        </div>
                      ) : null}
                      <label className="ft-shot">
                        <input type="file" accept="image/*" capture="environment" multiple onChange={(e) => void addPhotos(e.target.files, s.id).then(() => (e.target.value = ""))} />
                        <Camera size={16} aria-hidden /> {list.length ? "Ajouter une photo" : "Prendre la photo"}
                      </label>
                    </li>
                  );
                })}
              </ul>
            </Section>

            <Section n="03" title="Numéros de série" sub="Tels qu’écrits sur les plaques. Toujours corrigibles à la main." done={eff.serials.outdoor.length > 0 && eff.serials.indoor.length > 0}>
              {(["outdoor", "indoor"] as const).map((k) => (
                <div key={k} className="ft-serials">
                  <span className="pp-label">{k === "outdoor" ? "Unité extérieure" : "Unité(s) intérieure(s)"}</span>
                  {draft[k].map((val, i) => (
                    <div key={i} className="ft-serial">
                      <input
                        className="pp-input"
                        value={val}
                        inputMode="text"
                        autoCapitalize="characters"
                        autoCorrect="off"
                        spellCheck={false}
                        placeholder={k === "outdoor" ? "N° de série extérieur" : `N° de série intérieur${draft.indoor.length > 1 ? ` ${i + 1}` : ""}`}
                        aria-label={k === "outdoor" ? "Numéro de série extérieur" : `Numéro de série intérieur ${i + 1}`}
                        onChange={(e) => setDraft((d) => ({ ...d, [k]: d[k].map((x, j) => (j === i ? e.target.value.toUpperCase() : x)) }))}
                      />
                      {draft[k].length > 1 ? (
                        <button type="button" className="pp-btn pp-btn--ghost pp-btn--sm" aria-label="Retirer" onClick={() => setDraft((d) => ({ ...d, [k]: d[k].filter((_, j) => j !== i) }))}>
                          <Trash2 size={15} aria-hidden />
                        </button>
                      ) : null}
                    </div>
                  ))}
                  {draft[k].length < (k === "outdoor" ? 4 : 8) ? (
                    <button type="button" className="ft-add" onClick={() => setDraft((d) => ({ ...d, [k]: [...d[k], ""] }))}>
                      <Plus size={15} aria-hidden /> {k === "outdoor" ? "Autre unité extérieure" : "Autre tête intérieure"}
                    </button>
                  ) : null}
                </div>
              ))}
              {badSerial ? <p className="pp-alert pp-alert--warn">« {badSerial} » ne ressemble pas à un numéro de série (lettres, chiffres, tirets ; 3 caractères au moins).</p> : null}
              <button type="button" className="pp-btn pp-btn--ink pp-btn--block" disabled={serialsSaved || Boolean(badSerial) || (!cleanDraft.outdoor.length && !cleanDraft.indoor.length)} onClick={() => void enqueue({ type: "serials", outdoor: cleanDraft.outdoor, indoor: cleanDraft.indoor, readByVision: visionUsed })}>
                {serialsSaved && cleanDraft.outdoor.length ? (
                  <>
                    <Check size={17} aria-hidden /> Numéros enregistrés
                  </>
                ) : (
                  "Enregistrer les numéros"
                )}
              </button>
            </Section>

            <Section n="04" title="Liste de contrôle" done={CHECKLIST.every((c) => eff.checklist[c.id] === "fait" || (c.naAllowed && eff.checklist[c.id] === "sans-objet"))}>
              <ul className="ft-checks">
                {CHECKLIST.map((c) => {
                  const v = eff.checklist[c.id];
                  const set = (value: "fait" | "sans-objet") => void enqueue({ type: "checklist", item: c.id, value: v === value ? null : value });
                  return (
                    <li key={c.id} className={`ft-checkrow${v ? " is-set" : ""}`}>
                      <span>{c.label}</span>
                      <div className="ft-toggle" role="group" aria-label={c.label}>
                        <button type="button" className={v === "fait" ? "is-on" : ""} aria-pressed={v === "fait"} onClick={() => set("fait")}>
                          <Check size={14} aria-hidden /> Fait
                        </button>
                        {c.naAllowed ? (
                          <button type="button" className={v === "sans-objet" ? "is-on is-na" : ""} aria-pressed={v === "sans-objet"} onClick={() => set("sans-objet")}>
                            S. O.
                          </button>
                        ) : null}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </Section>

            <Section n="05" title="Signature du client" sub="Le client confirme que les travaux sont terminés." done={Boolean(eff.signature) && !resign}>
              {eff.signature && !resign ? (
                <div className="ft-stack">
                  <p className="ft-state ft-state--ok">
                    <Check size={16} aria-hidden /> Signé par {eff.signature.name} à {clock(eff.signature.at)}
                  </p>
                  <button type="button" className="pp-btn pp-btn--ghost pp-btn--sm" onClick={() => setResign(true)}>
                    Refaire la signature
                  </button>
                </div>
              ) : (
                <div className="ft-stack">
                  <div className="pp-field">
                    <label className="pp-label" htmlFor="ft-sign-name">
                      Nom du client
                    </label>
                    <input id="ft-sign-name" className="pp-input" value={signName} onChange={(e) => setSignName(e.target.value)} autoComplete="off" />
                  </div>
                  <SignaturePad onChange={setSignImage} label="Le client signe ici avec le doigt" />
                  <button
                    type="button"
                    className="pp-btn pp-btn--ink pp-btn--block"
                    disabled={signName.trim().length < 2 || !signImage}
                    onClick={() => {
                      void enqueue({ type: "signature", name: signName.trim(), image: signImage });
                      setResign(false);
                    }}
                  >
                    Enregistrer la signature
                  </button>
                </div>
              )}
            </Section>

            <Section n="06" title="Fermer la job" id="fermer">
              {closing ? (
                <p className="ft-state">
                  <Loader2 size={16} aria-hidden className="ft-spin" /> Fermeture {status === "hors-ligne" ? "en attente du réseau : elle partira seule." : "en cours…"}
                </p>
              ) : missing.length ? (
                <div className="ft-stack">
                  <p className="ft-state ft-state--lock">
                    <Lock size={16} aria-hidden /> Il manque {missing.length} élément{missing.length > 1 ? "s" : ""} :
                  </p>
                  <ul className="ft-missing">
                    {missing.map((m) => (
                      <li key={m.code}>
                        <X size={13} aria-hidden /> {m.label}
                      </li>
                    ))}
                  </ul>
                  <button type="button" className="pp-btn pp-btn--primary pp-btn--lg pp-btn--block" disabled>
                    <Flag size={18} aria-hidden /> Fermer la job
                  </button>
                </div>
              ) : confirmClose ? (
                <div className="ft-stack">
                  <p className="ft-state">La job sera fermée et le propriétaire prévenu. Plus rien ne pourra être modifié ici.</p>
                  <div className="ft-row2">
                    <button type="button" className="pp-btn pp-btn--ghost" onClick={() => setConfirmClose(false)}>
                      Annuler
                    </button>
                    <button
                      type="button"
                      className="pp-btn pp-btn--primary"
                      onClick={() => {
                        setConfirmClose(false);
                        setCloseErrors([]);
                        void enqueue({ type: "fermer" });
                      }}
                    >
                      <Flag size={17} aria-hidden /> Confirmer
                    </button>
                  </div>
                </div>
              ) : (
                <button type="button" className="pp-btn pp-btn--primary pp-btn--lg pp-btn--block ft-ready" onClick={() => setConfirmClose(true)}>
                  <Flag size={18} aria-hidden /> Fermer la job
                </button>
              )}
              {closeErrors.length ? (
                <ul className="ft-missing" style={{ marginTop: 10 }}>
                  {closeErrors.map((m) => (
                    <li key={m}>
                      <X size={13} aria-hidden /> {m}
                    </li>
                  ))}
                </ul>
              ) : null}
            </Section>
          </>
        )}

        {eff.tickets.map((t) => {
          const tPending = pending.filter((p) => p.ticketId === t.id);
          return (
            <section key={t.id} className="ft-card ft-ticket pp-rise">
              <header className="ft-card__head">
                <span className="ft-card__n" aria-hidden>
                  <Wrench size={15} />
                </span>
                <div style={{ minWidth: 0 }}>
                  <h2 className="ft-card__title">Appel de service n° {t.number}</h2>
                  <p className="ft-card__sub">
                    {t.statusLabel} · prise en charge attendue avant le {dayOf(t.dueAt.slice(0, 10))} à {clock(t.dueAt)}
                  </p>
                </div>
              </header>
              <p className="ft-notes" style={{ marginTop: 0 }}>
                {t.description}
              </p>
              {t.photos.length || tPending.length ? (
                <div className="ft-thumbs">
                  {t.photos.map((u) => (
                    <figure key={u} className="ft-thumb">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={u} alt="Photo de l’appel de service" loading="lazy" />
                    </figure>
                  ))}
                  {tPending.map((p) => (
                    <figure key={p.id} className="ft-thumb is-pending">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={p.url} alt="Photo en attente d’envoi" />
                    </figure>
                  ))}
                </div>
              ) : null}
              {t.status === "resolu" ? (
                <p className="ft-state ft-state--ok">
                  <Check size={16} aria-hidden /> Résolu : en attente de la confirmation du client.
                </p>
              ) : (
                <div className="ft-stack">
                  <div className="pp-field">
                    <label className="pp-label" htmlFor={`v-${t.id}`}>
                      <CalendarClock size={14} aria-hidden style={{ verticalAlign: -2 }} /> Visite prévue{t.visitAt ? ` (actuellement ${dayOf(t.visitAt.slice(0, 10))} à ${clock(t.visitAt)})` : ""}
                    </label>
                    <div className="ft-serial">
                      <input id={`v-${t.id}`} type="datetime-local" className="pp-input" value={visit[t.id] ?? ""} onChange={(e) => setVisit((s) => ({ ...s, [t.id]: e.target.value }))} />
                      <button type="button" className="pp-btn pp-btn--ink" disabled={!visit[t.id] || busy === t.id} onClick={() => void ticketAction(t.id, { type: "visite", visitAt: new Date(visit[t.id]).toISOString() })}>
                        Prévoir
                      </button>
                    </div>
                  </div>
                  <div className="pp-field">
                    <label className="pp-label" htmlFor={`r-${t.id}`}>
                      Ce qui a été fait
                    </label>
                    <textarea id={`r-${t.id}`} className="pp-textarea" value={note[t.id] ?? ""} onChange={(e) => setNote((s) => ({ ...s, [t.id]: e.target.value }))} maxLength={2000} />
                  </div>
                  <label className="ft-shot">
                    <input type="file" accept="image/*" capture="environment" multiple onChange={(e) => void addPhotos(e.target.files, null, t.id).then(() => (e.target.value = ""))} />
                    <Camera size={16} aria-hidden /> Photos de la résolution
                  </label>
                  <button type="button" className="pp-btn pp-btn--primary pp-btn--block" disabled={(note[t.id] ?? "").trim().length < 3 || busy === t.id} onClick={() => void ticketAction(t.id, { type: "resolu", note: note[t.id] ?? "" })}>
                    <Check size={17} aria-hidden /> Marquer résolu
                  </button>
                </div>
              )}
            </section>
          );
        })}

        <p className="pp-foot">Un souci avec cette page ? Appelez-nous au 438-900-3224.</p>
      </div>
    </main>
  );
}
