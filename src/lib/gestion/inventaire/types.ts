/* ==================================================================
   Chantier R — inventaire : articles en stock liés au catalogue,
   mouvements, réservations levées à la main, bons de commande.

   Magasin : inventaire.json (store.ts), à côté de gestion.json.
   Aucun prix n'est inventé : le coût d'un article est saisi par le
   propriétaire (null tant qu'il ne l'est pas).
   Les réservations ne sont PAS stockées : elles se calculent à la
   lecture des jobs et des soumissions acceptées (reservations.ts).
   ================================================================== */

export const ITEM_KINDS = ["exterieur", "interieur", "accessoire"] as const;
export type ItemKind = (typeof ITEM_KINDS)[number];
export const ITEM_KIND_LABELS: Record<ItemKind, string> = { exterieur: "Unité extérieure", interieur: "Unité intérieure", accessoire: "Accessoire" };

export interface StockItem {
  id: string;
  kind: ItemKind;
  /** Désignation affichée. */
  label: string;
  /** Modèle du catalogue (registry) : réservé automatiquement pour les jobs et soumissions acceptées de ce modèle. */
  modelSlug: string | null;
  modelLabel: string | null;
  brandId: string | null;
  /** Numéro de pièce ou de modèle du fabricant (texte libre). */
  partNumber: string;
  /** Unités par installation (ex. 2 têtes intérieures pour un bi-zone). */
  perJob: number;
  /** Quantité en main. */
  quantity: number;
  location: string;
  /** Coût unitaire saisi par le propriétaire, en cents ; null : non saisi. */
  unitCostCents: number | null;
  /** Alerte quand le disponible (en main − réservé) descend à ce seuil ; null : pas d'alerte. */
  lowThreshold: number | null;
  supplier: string;
  archived: boolean;
  createdAt: string;
  createdBy: string;
  updatedAt: string;
}

export type MovementReason = "entree" | "sortie-chantier" | "ajustement" | "reception-bc";
export const MOVEMENT_LABELS: Record<MovementReason, string> = { entree: "Entrée", "sortie-chantier": "Sortie (fin du chantier)", ajustement: "Ajustement", "reception-bc": "Réception d’un bon de commande" };

export interface StockMovement {
  id: string;
  at: string;
  by: string;
  itemId: string;
  delta: number;
  reason: MovementReason;
  note: string;
  /** Clé d'idempotence (sortie d'un job, réception d'un bon) : jamais deux fois. */
  key?: string;
  jobId?: string;
  orderId?: string;
}

/** Réservation libérée à la main (soumission acceptée qui ne se fera pas, job fourni autrement). */
export interface StockRelease {
  /** « job:<id> » ou « quote:<id> ». */
  ref: string;
  itemId: string;
  at: string;
  by: string;
  note: string;
}

export const ORDER_STATUSES = ["brouillon", "envoye", "recu", "annule"] as const;
export type OrderStatus = (typeof ORDER_STATUSES)[number];
export const ORDER_STATUS_LABELS: Record<OrderStatus, string> = { brouillon: "Brouillon", envoye: "Commandé", recu: "Reçu", annule: "Annulé" };

export interface OrderLine {
  itemId: string;
  qty: number;
  unitCostCents: number | null;
}

export interface PurchaseOrder {
  id: string;
  /** Numéro lisible : 1, 2, 3… */
  number: number;
  supplier: string;
  status: OrderStatus;
  lines: OrderLine[];
  note: string;
  createdAt: string;
  createdBy: string;
  updatedAt: string;
  sentAt?: string;
  receivedAt?: string;
  receivedBy?: string;
}

export interface InventaireData {
  version: 1;
  counter: number;
  items: StockItem[];
  movements: StockMovement[];
  releases: StockRelease[];
  orders: PurchaseOrder[];
}

export const ITEM_ID_RE = /^k_[A-Za-z0-9_-]{8,16}$/;
export const ORDER_ID_RE = /^bc_[A-Za-z0-9_-]{8,16}$/;
export const RESERVATION_REF_RE = /^(job|quote):[A-Za-z0-9_-]{3,40}$/;
