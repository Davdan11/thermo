/* ==================================================================
   Opérations du studio (serveur). Les Server Actions de
   /gestion/presence vérifient la session (requireAdmin) puis appellent
   ces fonctions. Chaque écriture passe par mutatePresence (verrou).
   Le catalogue (35 Mo) n'est chargé que pour générer.
   ================================================================== */

import { composeCaption, normalizeHashtags } from "./captions";
import { privacyMessage, privacyProblems } from "./loi25";
import { generate, initialStatus, planDays, variantFor } from "./planner";
import { publishPost, type PublishOutcome } from "./publisher";
import { canEnableAuto, SERIES_INFO, TIME_RE } from "./series";
import { addLog, mutatePresence } from "./store";
import { buildQuestion } from "./templates";
import { DATE_RE, zonedToUtc } from "./time";
import { SERIES, type PresenceData, type Post, type SeriesId } from "./types";

export type Result = { ok: true; message: string } | { ok: false; error: string };

const ok = (message: string): Result => ({ ok: true, message });
const fail = (error: string): Result => ({ ok: false, error });

export const TEXT_MAX = 2000;
const IG_CAPTION_MAX = 2200;

async function catalog() {
  const { getSiteCatalog } = await import("./catalog-site");
  return getSiteCatalog();
}

const find = (d: PresenceData, id: string) => d.posts.find((p) => p.id === id);
const partlyPublished = (p: Post) => !!(p.publish.facebook?.postId || p.publish.instagram?.mediaId || p.publish.facebook?.photoIds?.length || p.publish.instagram?.containerId);

/* ---------------- Préparer les 30 prochains jours ---------------- */

export async function prepareDays(by: string, days = 30, now = new Date()): Promise<Result> {
  const cat = await catalog();
  return mutatePresence((d) => {
    const { created, skipped } = planDays(d, cat, now, days);
    if (created.length === 0) return { result: ok(skipped.length ? `Rien de nouveau : ${skipped.map((s) => `${s.date} (${SERIES_INFO[s.series].short} : ${s.reason})`).join(", ")}.` : "La file est déjà prête pour ces jours."), changed: false };
    d.posts.push(...created);
    addLog(d, { level: "info", message: `${created.length} publications préparées par ${by}.` });
    const pending = created.filter((p) => p.status !== "planifiee").length;
    return { result: ok(`${created.length} publications préparées${pending ? `, dont ${pending} à approuver ou à écrire` : ""}.`), changed: true };
  });
}

/* ---------------- Approbation ---------------- */

function approvalProblem(p: Post): string | null {
  if (!p.text.trim()) return p.series === "question" ? "Écrivez la question et la réponse avant d’approuver." : "Le texte est vide.";
  if (p.series === "question") {
    const msg = privacyMessage(privacyProblems(`${p.question?.question ?? ""}\n${p.question?.answer ?? ""}\n${p.text}`));
    if (msg) return msg;
  }
  if (composeCaption(p, "instagram").length > IG_CAPTION_MAX) return `Légende Instagram trop longue (plus de ${IG_CAPTION_MAX} caractères).`;
  return null;
}

function approveIn(d: PresenceData, p: Post, by: string, now: Date): string | null {
  if (p.status !== "a_approuver" && p.status !== "brouillon") return p.status === "planifiee" ? null : "Cette publication ne peut plus être approuvée.";
  const problem = approvalProblem(p);
  if (problem) return problem;
  p.status = "planifiee";
  p.approvedAt = now.toISOString();
  p.approvedBy = by;
  p.updatedAt = now.toISOString();
  if (!d.approvals[p.series]) {
    d.approvals[p.series] = { at: now.toISOString(), by, postId: p.id };
    addLog(d, { level: "info", postId: p.id, message: `Gabarit « ${SERIES_INFO[p.series].label} » validé par ${by}.` });
  }
  addLog(d, { level: "info", postId: p.id, message: `Approuvée par ${by}.` });
  return null;
}

export async function approvePost(id: string, by: string, now = new Date()): Promise<Result> {
  return mutatePresence((d) => {
    const p = find(d, id);
    if (!p) return { result: fail("Publication introuvable."), changed: false };
    const wasPlanned = p.status === "planifiee";
    const err = approveIn(d, p, by, now);
    if (err) return { result: fail(err), changed: false };
    const first = d.approvals[p.series]?.postId === p.id && !wasPlanned;
    return { result: ok(first && SERIES_INFO[p.series].autoAllowed ? "Approuvée. Gabarit validé : la série peut maintenant passer en publication automatique dans les réglages." : "Approuvée et planifiée."), changed: !wasPlanned };
  });
}

export async function rejectPost(id: string, reason: string, by: string, now = new Date()): Promise<Result> {
  return mutatePresence((d) => {
    const p = find(d, id);
    if (!p) return { result: fail("Publication introuvable."), changed: false };
    if (p.status === "publiee") return { result: fail("Déjà publiée : retirez-la directement sur Facebook ou Instagram."), changed: false };
    if (partlyPublished(p)) return { result: fail("Une partie est déjà envoyée à Meta : vérifiez les comptes avant de rejeter."), changed: false };
    p.status = "rejetee";
    p.rejectedAt = now.toISOString();
    p.rejectedBy = by;
    p.rejectReason = reason.trim().slice(0, 300) || undefined;
    p.updatedAt = now.toISOString();
    addLog(d, { level: "info", postId: id, message: `Rejetée par ${by}${p.rejectReason ? ` : ${p.rejectReason}` : ""}.` });
    return { result: ok("Rejetée. Le jour reste libre : régénérez ou replanifiez une autre publication."), changed: true };
  });
}

export async function restorePost(id: string, by: string, now = new Date()): Promise<Result> {
  return mutatePresence((d) => {
    const p = find(d, id);
    if (!p || (p.status !== "rejetee" && p.status !== "echec")) return { result: fail("Rien à reprendre."), changed: false };
    if (p.status === "echec") {
      p.status = "planifiee";
      p.publish.attempts = 0;
      delete p.publish.nextAttemptAt;
      addLog(d, { level: "info", postId: id, message: `Nouvel essai demandé par ${by}.` });
    } else {
      p.status = p.series === "question" && !p.text.trim() ? "brouillon" : "a_approuver";
      delete p.rejectedAt;
      delete p.rejectReason;
      addLog(d, { level: "info", postId: id, message: `Remise dans la file par ${by}.` });
    }
    p.updatedAt = now.toISOString();
    return { result: ok(p.status === "planifiee" ? "Nouvel essai au prochain passage (15 min au plus)." : "Remise dans la file, à approuver."), changed: true };
  });
}

/* ---------------- Replanifier ---------------- */

export async function reschedulePost(id: string, date: string, time: string, by: string, now = new Date()): Promise<Result> {
  if (!DATE_RE.test(date) || !TIME_RE.test(time)) return fail("Date ou heure invalide.");
  const at = zonedToUtc(date, time);
  if (at.getTime() < now.getTime() - 60_000) return fail("Choisissez un moment à venir.");
  return mutatePresence((d) => {
    const p = find(d, id);
    if (!p) return { result: fail("Publication introuvable."), changed: false };
    if (p.status === "publiee" || p.status === "rejetee") return { result: fail("Cette publication ne peut plus être replanifiée."), changed: false };
    p.date = date;
    p.scheduledAt = at.toISOString();
    p.updatedAt = now.toISOString();
    if (p.status === "echec") {
      p.status = "planifiee";
      p.publish.attempts = 0;
    }
    delete p.publish.nextAttemptAt;
    addLog(d, { level: "info", postId: id, message: `Replanifiée au ${date} ${time} par ${by}.` });
    return { result: ok("Replanifiée."), changed: true };
  });
}

/* ---------------- Régénérer ---------------- */

export async function regeneratePost(id: string, mode: "tournure" | "sujet", by: string, now = new Date()): Promise<Result> {
  const cat = await catalog();
  return mutatePresence((d) => {
    const p = find(d, id);
    if (!p) return { result: fail("Publication introuvable."), changed: false };
    if (p.status === "publiee" || partlyPublished(p)) return { result: fail("Déjà envoyée à Meta : impossible de la régénérer."), changed: false };
    if (p.series === "question" || p.series === "chantier") return { result: fail("Cette série s’écrit à la main."), changed: false };
    if (p.series === "blogue") return { result: fail("Cette publication vient d’un article du blogue : modifiez le texte ici, ou l’article dans l’onglet Articles."), changed: false };
    const variant = mode === "tournure" ? (p.variant + 1) % 3 : variantFor(p.date, p.rev);
    const gen = generate(p.series, {
      catalog: cat,
      posts: d.posts,
      date: p.date,
      weeks: d.settings.rotationWeeks,
      variant,
      now: now.toISOString(),
      excludeId: p.id,
      ...(mode === "sujet" ? { salt: `r${p.rev}`, avoid: new Set(p.rotationKeys) } : {}),
    });
    if (!gen) return { result: fail("Aucun autre sujet disponible pour cette série."), changed: false };
    const { status, auto } = initialStatus(p.series, d);
    Object.assign(p, {
      text: gen.text,
      hashtags: gen.hashtags,
      link: gen.link,
      source: gen.source,
      slides: gen.slides,
      story: gen.story,
      footnote: gen.footnote,
      rotationKeys: gen.rotationKeys,
      variant,
      rev: p.rev + 1,
      edited: false,
      status,
      updatedAt: now.toISOString(),
      publish: { attempts: 0 },
    });
    if (auto) {
      p.approvedAt = now.toISOString();
      p.approvedBy = "automatique (gabarit validé)";
    } else {
      delete p.approvedAt;
      delete p.approvedBy;
    }
    addLog(d, { level: "info", postId: id, message: `Régénérée (${mode === "tournure" ? "autre tournure" : "autre sujet"}) par ${by} : ${gen.subject}.` });
    return { result: ok(mode === "tournure" ? "Nouvelle tournure prête." : `Nouveau sujet : ${gen.subject}.`), changed: true };
  });
}

/* ---------------- Modifier le texte ---------------- */

export async function saveText(id: string, text: string, hashtags: string, by: string, now = new Date()): Promise<Result> {
  const clean = text.replace(/\r\n/g, "\n").trim();
  if (!clean) return fail("Le texte ne peut pas être vide.");
  if (clean.length > TEXT_MAX) return fail(`Texte trop long (${TEXT_MAX} caractères au plus).`);
  return mutatePresence((d) => {
    const p = find(d, id);
    if (!p) return { result: fail("Publication introuvable."), changed: false };
    if (p.status === "publiee" || partlyPublished(p)) return { result: fail("Déjà envoyée à Meta : le texte ne peut plus changer."), changed: false };
    if (p.series === "question") return { result: fail("La question s’écrit dans ses deux champs."), changed: false };
    p.text = clean;
    p.hashtags = normalizeHashtags(hashtags);
    p.edited = true;
    p.updatedAt = now.toISOString();
    if (composeCaption(p, "instagram").length > IG_CAPTION_MAX) return { result: fail(`Légende Instagram trop longue (plus de ${IG_CAPTION_MAX} caractères).`), changed: false };
    addLog(d, { level: "info", postId: id, message: `Texte modifié par ${by}.` });
    return { result: ok("Texte enregistré."), changed: true };
  });
}

export async function saveQuestion(id: string, question: string, answer: string, by: string, now = new Date()): Promise<Result> {
  const q = question.replace(/\r\n/g, "\n").trim();
  const a = answer.replace(/\r\n/g, "\n").trim();
  if (q.length > 400 || a.length > 1400) return fail("Question ou réponse trop longue.");
  const blocked = privacyMessage(privacyProblems(`${q}\n${a}`));
  if (blocked) return fail(blocked);
  return mutatePresence((d) => {
    const p = find(d, id);
    if (!p || p.series !== "question") return { result: fail("Publication introuvable."), changed: false };
    if (p.status === "publiee" || partlyPublished(p)) return { result: fail("Déjà envoyée à Meta."), changed: false };
    const gen = buildQuestion({ question: q, answer: a }, now.toISOString());
    Object.assign(p, { question: { question: q, answer: a }, text: gen.text, slides: gen.slides, story: gen.story, source: gen.source, rev: p.rev + 1, edited: true, updatedAt: now.toISOString() });
    if (p.status === "brouillon" && q && a) p.status = "a_approuver";
    if (p.status === "planifiee") {
      // Toujours approuvée à la main : une modification demande une nouvelle approbation.
      p.status = "a_approuver";
      delete p.approvedAt;
      delete p.approvedBy;
    }
    addLog(d, { level: "info", postId: id, message: `Question enregistrée par ${by}.` });
    return { result: ok(p.status === "a_approuver" ? "Enregistrée : relisez les aperçus, puis approuvez." : "Brouillon enregistré."), changed: true };
  });
}

/* ---------------- Publier maintenant ---------------- */

export async function publishNow(id: string, by: string, now = new Date()): Promise<Result & { outcome?: PublishOutcome }> {
  const approved = await mutatePresence((d) => {
    const p = find(d, id);
    if (!p) return { result: "Publication introuvable.", changed: false };
    if (p.status === "publiee") return { result: "Déjà publiée.", changed: false };
    if (p.status === "rejetee") return { result: "Rejetée : remettez-la dans la file d’abord.", changed: false };
    if (p.status === "echec") {
      p.status = "planifiee";
      p.publish.attempts = 0;
    }
    const err = approveIn(d, p, by, now);
    if (err) return { result: err, changed: false };
    p.scheduledAt = now.toISOString();
    delete p.publish.nextAttemptAt;
    return { result: null, changed: true };
  });
  if (approved) return fail(approved);
  const outcome = await publishPost(id, { trigger: "manuel", now: () => now });
  switch (outcome.kind) {
    case "essai":
      return { ok: true, message: `Mode essai : rien n’est parti vers Meta. ${outcome.requests.length} requêtes auraient été envoyées (détail dans la fiche).`, outcome };
    case "publiee":
      return { ok: true, message: "Publiée.", outcome };
    case "reessai":
      return { ok: false, error: `${outcome.error} Nouvel essai automatique prévu.`, outcome };
    case "echec":
      return { ok: false, error: outcome.error, outcome };
    case "ignoree":
      return { ok: false, error: outcome.reason, outcome };
  }
}

/* ---------------- Réglages ---------------- */

export interface SettingsInput {
  autoPublish: boolean;
  rotationWeeks: number;
  series: Partial<Record<SeriesId, { enabled: boolean; auto: boolean; time: string; story: boolean }>>;
  applyTimes: boolean;
}

export async function saveSettings(input: SettingsInput, by: string, now = new Date()): Promise<Result> {
  return mutatePresence((d) => {
    const refused: string[] = [];
    const s = d.settings;
    s.autoPublish = input.autoPublish;
    s.rotationWeeks = Math.min(52, Math.max(1, Math.round(input.rotationWeeks || 8)));
    for (const id of SERIES) {
      const v = input.series[id];
      if (!v || !SERIES_INFO[id].available) continue;
      s.series[id].enabled = v.enabled;
      s.series[id].story = v.story;
      if (TIME_RE.test(v.time)) s.series[id].time = v.time;
      if (v.auto && !s.series[id].auto) {
        const check = canEnableAuto(id, d.approvals);
        if (check.ok) s.series[id].auto = true;
        else refused.push(check.reason);
      } else if (!v.auto) s.series[id].auto = false;
    }
    let moved = 0;
    if (input.applyTimes) {
      for (const p of d.posts) {
        if (p.status === "publiee" || p.status === "rejetee" || Date.parse(p.scheduledAt) <= now.getTime()) continue;
        const at = zonedToUtc(p.date, s.series[p.series].time).toISOString();
        if (at !== p.scheduledAt && Date.parse(at) > now.getTime()) {
          p.scheduledAt = at;
          moved++;
        }
      }
    }
    s.updatedAt = now.toISOString();
    s.updatedBy = by;
    addLog(d, { level: "info", message: `Réglages modifiés par ${by} (publication automatique : ${s.autoPublish ? "activée" : "éteinte"}).` });
    const msg = `Réglages enregistrés${moved ? `, ${moved} publications déplacées à la nouvelle heure` : ""}.`;
    return { result: refused.length ? { ok: false as const, error: `${msg} Refusé : ${refused.join(" ")}` } : ok(msg), changed: true };
  });
}
