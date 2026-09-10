import Link from "next/link";

/* ==================================================================
   Barre d'action fixe en bas de l'écran, mobile seulement.
   Deux gestes, toujours à portée de pouce : lancer ThermoMatch ou appeler.
   Montée une seule fois dans SiteChrome ; le corps de page garde un
   dégagement (padding-bottom) pour que rien ne reste caché dessous.
   ================================================================== */

export const PHONE_DISPLAY = "438-900-3224";
export const PHONE_TEL = "tel:4389003224";

export function MobileActionBar() {
  return (
    <>
    <style>{`@media (max-width: 767px) { :root { --mobile-bar-offset: 64px; } }`}</style>
    <div
      className="md:hidden fixed inset-x-0 bottom-0 z-40 border-t border-[#e4ddd5] bg-white/95 backdrop-blur px-3 py-2 pb-[max(8px,env(safe-area-inset-bottom))]"
      role="navigation"
      aria-label="Actions rapides"
    >
      <div className="grid grid-cols-[1fr_auto] gap-2">
        <Link
          href="/trouver-ma-thermopompe"
          className="flex min-h-[48px] items-center justify-center rounded-xl bg-[#e54b17] hover:bg-[#d44315] text-white font-bold text-[15px] transition-colors"
        >
          Trouver ma thermopompe
        </Link>
        <a
          href={PHONE_TEL}
          className="flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-[#0C1821] px-4 text-[#0C1821] font-bold text-[15px]"
          aria-label={`Appeler le ${PHONE_DISPLAY}`}
        >
          <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
          </svg>
          Appeler
        </a>
      </div>
    </div>
    </>
  );
}
