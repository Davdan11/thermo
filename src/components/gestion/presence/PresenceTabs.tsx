/* Onglets du studio de présence. Composant serveur. */
import Link from "next/link";

const TABS = [
  { href: "/gestion/presence", label: "Studio" },
  { href: "/gestion/presence/reglages", label: "Réglages" },
  { href: "/gestion/presence/connecter", label: "Connecter Meta" },
] as const;

export function PresenceTabs({ current }: { current: (typeof TABS)[number]["href"] }) {
  return (
    <nav className="k-tabs pr-tabs" aria-label="Studio de présence">
      {TABS.map((t) => (
        <Link key={t.href} href={t.href} aria-current={t.href === current ? "page" : undefined}>
          {t.label}
        </Link>
      ))}
    </nav>
  );
}
