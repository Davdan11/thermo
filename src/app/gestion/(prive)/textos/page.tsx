/* Boîte des textos reçus au numéro du site : conversations récentes d'abord, numéros masqués dans la liste. */
import type { Metadata } from "next";
import Link from "next/link";
import { MessageSquare, Settings } from "lucide-react";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { smsConfigured } from "@/lib/gestion/sms";
import { formatPhone } from "@/lib/textos/phone";
import { readTextos } from "@/lib/textos/store";
import { conversationRows } from "@/lib/textos/view";
import { Reveal } from "@/components/gestion/Reveal";
import { ConversationList } from "@/components/gestion/textos/ConversationList";
import { AutoRefresh } from "@/components/gestion/textos/client-bits";

export const metadata: Metadata = { title: "Textos" };

export default async function TextosPage({ searchParams }: { searchParams: Promise<{ vue?: string | string[] }> }) {
  await requireAdmin();
  const archived = (await searchParams).vue === "archives";
  const now = new Date();
  const data = await readTextos();
  const rows = conversationRows(data, { archived }, now);
  const all = Object.values(data.conversations).filter((c) => c.messages.length);
  const inbox = all.filter((c) => !c.archived).length;
  const unread = all.filter((c) => !c.archived && c.unread > 0).length;
  const site = formatPhone(process.env.TWILIO_PHONE_NUMBER || "+14389003224");

  return (
    <>
      <Reveal className="g-head">
        <div>
          <p className="g-eyebrow">Numéro du site · {site}</p>
          <h1 className="g-h1">Textos</h1>
          <p className="g-lead">
            {unread ? `${unread} conversation${unread > 1 ? "s" : ""} à lire. ` : ""}Les textos envoyés au {site} arrivent ici ; votre réponse part du même numéro.
          </p>
        </div>
        <div className="t-headtools">
          <nav className="g-seg" aria-label="Vue">
            <Link href="/gestion/textos" aria-current={!archived ? "page" : undefined} scroll={false}>
              Boîte ({inbox})
            </Link>
            <Link href="/gestion/textos?vue=archives" aria-current={archived ? "page" : undefined} scroll={false}>
              Archivées ({all.length - inbox})
            </Link>
          </nav>
          <Link href="/gestion/textos/reglages" className="g-btn g-btn--ghost">
            <Settings size={16} aria-hidden /> Réglages
          </Link>
        </div>
      </Reveal>

      <div className="t-split">
        <section aria-label={archived ? "Conversations archivées" : "Conversations"}>
          {rows.length ? (
            <ConversationList rows={rows} />
          ) : (
            <Reveal delay={0.05}>
              <p className="g-empty">{archived ? "Aucune conversation archivée." : `Aucun texto pour l’instant. Ils arriveront ici dès qu’un client écrira au ${site}.`}</p>
            </Reveal>
          )}
        </section>
        <Reveal delay={0.1} className="t-placeholder">
          <span className="t-placeholder__icon" aria-hidden>
            <MessageSquare size={24} />
          </span>
          <h2 className="g-h2" style={{ color: "var(--g-ink)" }}>
            Choisissez une conversation
          </h2>
          <p>
            Accusé de réception automatique : <strong>{data.settings.autoReply ? "activé" : "désactivé"}</strong>.{" "}
            <Link href="/gestion/textos/reglages">Modifier</Link>
          </p>
          {!smsConfigured() ? <p className="g-alert">Twilio n’est pas configuré sur ce serveur : les réponses ne peuvent pas partir.</p> : null}
        </Reveal>
      </div>
      <AutoRefresh />
    </>
  );
}
