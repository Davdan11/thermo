/* ==================================================================
   Filtre SVG « crème » des logos de marques (utilisé par .bh-logo).
   Les logos monochromes codent leurs nuances de gris dans l'opacité :
   un simple brightness(0) invert(1) les laisse délavés. Ce filtre peint
   chaque pixel en crème #F4EFE7, puis relève l'opacité par une courbe
   gamma : les parties pâles deviennent lisibles sans écraser les logos
   à deux tons (lettres évidées, pastilles).
   ================================================================== */

export function CreamFilter() {
  return (
    <svg aria-hidden="true" width="0" height="0" focusable="false" style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}>
      <filter id="bh-creme" colorInterpolationFilters="sRGB">
        <feColorMatrix type="matrix" values="0 0 0 0 0.957  0 0 0 0 0.937  0 0 0 0 0.906  0 0 0 1 0" />
        <feComponentTransfer>
          <feFuncA type="gamma" amplitude="1" exponent="0.45" offset="0" />
        </feComponentTransfer>
      </filter>
    </svg>
  );
}
