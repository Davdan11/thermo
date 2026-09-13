/* Chronologie d'un client (serveur) : icône par type d'événement, ton (accepté, refusé, à surveiller), heure de Montréal.
   Entrée en CSS (léger glissement, jamais d'opacité nulle) : lisible dès le premier affichage. */
import Link from "next/link";
import { ArrowUpRight, CalendarCheck, Camera, Check, Eye, FileText, Handshake, HelpCircle, Mail, MessageSquare, MoveRight, Phone, PhoneMissed, Send, StickyNote, Voicemail, Wrench, X } from "lucide-react";
import type { TimelineItem, TimelineKind } from "@/lib/gestion/crm/timeline";

const ICONS: Record<TimelineKind, typeof Phone> = {
  demande: Send,
  appel: Phone,
  vocal: Voicemail,
  rdv: CalendarCheck,
  "texto-in": MessageSquare,
  "texto-out": MessageSquare,
  soumission: FileText,
  vue: Eye,
  question: HelpCircle,
  acceptation: Check,
  refus: X,
  job: Wrench,
  offre: Handshake,
  courriel: Mail,
  note: StickyNote,
  etape: MoveRight,
  tache: Check,
  pipedrive: ArrowUpRight,
  photos: Camera, // Chantier D : photos reçues de la visite à distance
};

export function Timeline({ items, limit }: { items: Array<TimelineItem & { when: string }>; limit?: number }) {
  const shown = limit ? items.slice(0, limit) : items;
  return (
    <ol className="cr-timeline">
      {shown.map((i, n) => {
        const Icon = i.kind === "appel" && i.title === "Appel manqué" ? PhoneMissed : ICONS[i.kind];
        return (
          <li key={i.key} className={`cr-tl cr-rise${i.tone ? ` cr-tl--${i.tone}` : ""}`} style={{ animationDelay: `${Math.min(n, 12) * 30}ms` }}>
            <span className="cr-tl__dot" aria-hidden>
              <Icon size={14} />
            </span>
            <div style={{ minWidth: 0 }}>
              <div className="cr-tl__head">
                {i.href ? (
                  i.external ? (
                    <a href={i.href} className="cr-tl__title" target="_blank" rel="noreferrer">
                      {i.title}
                    </a>
                  ) : (
                    <Link href={i.href} className="cr-tl__title">
                      {i.title}
                    </Link>
                  )
                ) : (
                  <span className="cr-tl__title">{i.title}</span>
                )}
                <time className="cr-tl__when" dateTime={i.at}>
                  {i.when}
                </time>
              </div>
              {i.detail ? <p className="cr-tl__detail">{i.detail}</p> : null}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
