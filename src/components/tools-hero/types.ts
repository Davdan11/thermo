/* Un jumelage réel de la liste officielle LogisVert, tel qu'affiché dans le héros des subventions. */
export type LogisVertSample = {
  brand: string;
  model: string;
  /** Capacité de chauffage certifiée à -8 °C, en BTU/h. */
  btu: number;
  /** Montant LogisVert officiel, en dollars. */
  amount: number;
};
