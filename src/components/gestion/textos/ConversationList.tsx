"use client";

/* Liste des conversations : numéro masqué, dernier message, pastille des non-lus, heure.
   Apparition en cascade et réordonnancement doux (motion) ; « réduire les animations » respecté. */
import Link from "next/link";
import { motion } from "motion/react";
import { Paperclip } from "lucide-react";
import { useReduced } from "@/components/heroes-v2/outils/motion";
import type { ConversationRow } from "@/lib/textos/view";

const EASE = [0.22, 1, 0.36, 1] as const;

function Row({ r, active }: { r: ConversationRow; active: boolean }) {
  return (
    <Link href={`/gestion/textos/${r.id}`} className={`t-row${r.unread ? " t-row--unread" : ""}`} aria-current={active ? "page" : undefined}>
      <span className="t-avatar" aria-hidden>
        {/^\d{3}/.test(r.masked) ? r.masked.slice(0, 3) : "#"}
      </span>
      <span className="t-row__main">
        <span className="t-row__top">
          <span className="t-row__num">
            <span className="g-sr">Numéro se terminant par </span>
            {r.masked}
          </span>
          <time className="t-row__when" dateTime={r.whenIso}>{r.when}</time>
        </span>
        <span className="t-row__prev">
          {r.previewOut ? <span className="t-row__you">Vous : </span> : null}
          {r.media ? <Paperclip size={13} aria-label="Pièce jointe" /> : null}
          {r.preview}
        </span>
      </span>
      <span className="t-row__end">
        {r.unread ? <span className="t-badge" aria-label={`${r.unread} non lu${r.unread > 1 ? "s" : ""}`}>{r.unread}</span> : null}
        {r.optedOut ? <span className="t-flag">Désabonné</span> : null}
      </span>
    </Link>
  );
}

export function ConversationList({ rows, activeId }: { rows: ConversationRow[]; activeId?: string }) {
  const reduced = useReduced();
  return (
    <ul className="t-list">
      {rows.map((r, i) =>
        reduced ? (
          <li key={r.id}>
            <Row r={r} active={r.id === activeId} />
          </li>
        ) : (
          <motion.li
            key={r.id}
            layout="position"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.42, delay: Math.min(i, 10) * 0.035, ease: EASE, layout: { duration: 0.35, ease: EASE } }}
          >
            <Row r={r} active={r.id === activeId} />
          </motion.li>
        ),
      )}
    </ul>
  );
}
