/* Une conversation : numéro complet, fil, réponse par le numéro du site, raccourcis vers un job ou une soumission.
   Le numéro n'apparaît jamais dans l'URL ni dans le titre de l'onglet (identifiant opaque c_…). */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Ban, ChevronLeft, FileText, Plus } from "lucide-react";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { smsConfigured } from "@/lib/gestion/sms";
import { OPTED_OUT_ERROR } from "@/lib/textos/service";
import { CONVERSATION_ID_RE, findConversation, readTextos } from "@/lib/textos/store";
import { conversationRows, threadView } from "@/lib/textos/view";
import { Reveal } from "@/components/gestion/Reveal";
import { SubmitButton } from "@/components/gestion/SubmitButton";
import { Composer } from "@/components/gestion/textos/Composer";
import { ConversationList } from "@/components/gestion/textos/ConversationList";
import { Thread } from "@/components/gestion/textos/Thread";
import { AutoRefresh, CopyNumber, MarkRead } from "@/components/gestion/textos/client-bits";
import { MaskedCallButton } from "@/components/gestion/telephonie/CallButton"; // Chantier T : appel masqué
import { archiveAction, markReadAction, markUnreadAction, sendTextoAction } from "../actions";

export const metadata: Metadata = { title: "Conversation" };

export default async function ConversationPage({ params }: { params: Promise<{ id: string }> }) {
  await requireAdmin();
  const { id } = await params;
  if (!CONVERSATION_ID_RE.test(id)) notFound();
  const data = await readTextos();
  const conv = findConversation(data, id);
  if (!conv) notFound();

  const now = new Date();
  const t = threadView(conv, now);
  const rows = conversationRows(data, { archived: conv.archived }, now);
  const blocked = t.optedOut ? OPTED_OUT_ERROR : !smsConfigured() ? "Twilio n’est pas configuré sur ce serveur : impossible de répondre d’ici." : undefined;

  return (
    <div className="t-split t-split--thread">
      <aside className="t-side" aria-label="Autres conversations">
        <ConversationList rows={rows} activeId={t.id} />
      </aside>

      <Reveal as="section" className="t-thread">
        <header className="t-head">
          <Link href={t.archived ? "/gestion/textos?vue=archives" : "/gestion/textos"} className="t-back">
            <ChevronLeft size={18} aria-hidden /> Textos
          </Link>
          <div className="t-who">
            <h1 className="t-who__num">
              {/* Chantier T : appel masqué (le client voit le numéro du site) au lieu de tel:. */}
              <MaskedCallButton target={{ kind: "conversation", id: t.id }} className="t-who__call" title="Appeler (appel masqué par le numéro du site)">
                {t.phone}
              </MaskedCallButton>
            </h1>
            <p className="t-who__sub">{[t.place, `premier texto le ${t.since}`, t.archived ? "archivée" : null].filter(Boolean).join(" · ")}</p>
          </div>
          <div className="t-tools">
            <Link href="/gestion/jobs/nouveau" className="g-btn g-btn--ghost t-btn-sm">
              <Plus size={15} aria-hidden /> Créer un job
            </Link>
            <Link href="/gestion/soumissions/nouvelle" className="g-btn g-btn--ghost t-btn-sm">
              <FileText size={15} aria-hidden /> Créer une soumission
            </Link>
            <CopyNumber value={t.phone} />
            <span className="t-tools__end">
              <form action={markUnreadAction.bind(null, t.id)}>
                <SubmitButton className="g-btn g-btn--quiet t-btn-sm" pendingLabel="…">
                  Marquer non lu
                </SubmitButton>
              </form>
              <form action={archiveAction.bind(null, t.id, !t.archived)}>
                <SubmitButton className="g-btn g-btn--quiet t-btn-sm" pendingLabel="…">
                  {t.archived ? "Désarchiver" : "Archiver"}
                </SubmitButton>
              </form>
            </span>
          </div>
        </header>
        {t.optedOut ? (
          <p className="t-banner" role="note">
            <Ban size={16} aria-hidden />
            <span>
              {t.optLabel}. Ce numéro a écrit ARRÊT ou STOP : ni réponse automatique ni envoi de l’outil tant qu’il n’écrit pas DEBUT ou START.
            </span>
          </p>
        ) : null}
        <Thread conversationId={t.id} items={t.items} />
        <Composer action={sendTextoAction.bind(null, t.id)} blocked={blocked} />
      </Reveal>

      <MarkRead action={markReadAction.bind(null, t.id)} unread={t.unread} />
      <AutoRefresh />
    </div>
  );
}
