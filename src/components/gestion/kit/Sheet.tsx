"use client";

/* Feuille (Dialog de Radix) : monte du bas sur le téléphone, glisse de la droite sur le bureau.
   Focus piégé, Échap et clic à l'extérieur ferment ; animations CSS (réduites si l'utilisateur le demande). */
import { Dialog } from "radix-ui";
import { X } from "lucide-react";
import { cx } from "./format";

/** Les feuilles s'ouvrent dans la coquille (#g-portal, sous .g-app) pour en hériter les couleurs et polices.
    Rien n'est rendu au serveur par le portail : aucun écart d'hydratation. */
const portalContainer = () => (typeof document === "undefined" ? undefined : (document.getElementById("g-portal") ?? undefined));

export function Sheet({
  open,
  onOpenChange,
  trigger,
  title,
  description,
  children,
  side = "auto",
  className,
}: {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  trigger?: React.ReactNode;
  title: string;
  description?: string;
  children: React.ReactNode;
  side?: "auto" | "bottom" | "center";
  className?: string;
}) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      {trigger ? <Dialog.Trigger asChild>{trigger}</Dialog.Trigger> : null}
      <Dialog.Portal container={portalContainer()}>
        <Dialog.Overlay className="k-sheet__overlay" />
        <Dialog.Content className={cx("k-sheet", `k-sheet--${side}`, className)} aria-describedby={description ? undefined : undefined}>
          <span className="k-sheet__grip" aria-hidden />
          <div className="k-sheet__head">
            <div style={{ minWidth: 0 }}>
              <Dialog.Title className="k-sheet__title">{title}</Dialog.Title>
              {description ? <Dialog.Description className="k-sheet__desc">{description}</Dialog.Description> : <Dialog.Description className="g-sr">{title}</Dialog.Description>}
            </div>
            <Dialog.Close className="k-sheet__close" aria-label="Fermer">
              <X size={18} aria-hidden />
            </Dialog.Close>
          </div>
          <div className="k-sheet__body">{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export const SheetClose = Dialog.Close;
