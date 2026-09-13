/* Chargement de « Pourquoi on perd ». */
export default function Loading() {
  return (
    <div aria-busy="true" aria-label="Chargement des pertes" style={{ display: "grid", gap: 14 }}>
      <div className="k-skel" style={{ height: 64, borderRadius: 18 }} />
      <div className="k-skel" style={{ height: 120, borderRadius: 18 }} />
      <div className="k-skel" style={{ height: 240, borderRadius: 18 }} />
    </div>
  );
}
