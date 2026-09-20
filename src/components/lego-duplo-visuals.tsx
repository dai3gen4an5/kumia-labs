import styles from "./lego-duplo-visuals.module.css";

// TECH-1: concept sketch only. Shapes are simplified and deliberately carry no dimensions.

function Step({ n, title, note, children }: { n: number; title: string; note: string; children: React.ReactNode }) {
  return (
    <div className={styles.step}>
      <p className={styles.stepLabel}>
        <span aria-hidden="true">{n}</span> {title}
      </p>
      {children}
      <p className={styles.stepNote}>{note}</p>
    </div>
  );
}

function AlignSketch() {
  return (
    <svg viewBox="0 0 240 190" className={styles.svg} role="img" aria-label="A regular 2×2 brick footprint centered above one hollow DUPLO stud. Conceptual sketch, not to scale.">
      {/* regular 2x2 brick, simplified (studs on top, underside tubes shown dashed) */}
      <rect x="60" y="14" width="120" height="58" rx="6" fill="#eef6ff" stroke="#071a46" strokeWidth="2" />
      {[90, 150].map((x) => (
        <rect key={x} x={x - 12} y="6" width="24" height="8" rx="2" fill="#eef6ff" stroke="#071a46" strokeWidth="2" />
      ))}
      <path d="M120 72 v22" stroke="#0668ed" strokeWidth="3" strokeDasharray="5 4" markerEnd="url(#arr)" />
      <defs>
        <marker id="arr" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0 0 L10 5 L0 10 z" fill="#0668ed" />
        </marker>
      </defs>
      {/* DUPLO brick with one hollow stud */}
      <rect x="30" y="128" width="180" height="52" rx="6" fill="#ffe7e1" stroke="#071a46" strokeWidth="2" />
      <rect x="90" y="106" width="60" height="22" rx="4" fill="#ffe7e1" stroke="#071a46" strokeWidth="2" />
      <ellipse cx="120" cy="108" rx="18" ry="5" fill="#fff" stroke="#071a46" strokeWidth="2" />
    </svg>
  );
}

function ConnectSketch() {
  return (
    <svg viewBox="0 0 240 190" className={styles.svg} role="img" aria-label="A simplified tube under the regular brick entering the hollow space inside one DUPLO stud. Conceptual sketch, not to scale.">
      <rect x="60" y="30" width="120" height="58" rx="6" fill="#eef6ff" stroke="#071a46" strokeWidth="2" />
      {[90, 150].map((x) => (
        <rect key={x} x={x - 12} y="22" width="24" height="8" rx="2" fill="#eef6ff" stroke="#071a46" strokeWidth="2" />
      ))}
      {/* DUPLO brick, stud cut open to show the hollow */}
      <rect x="30" y="128" width="180" height="52" rx="6" fill="#ffe7e1" stroke="#071a46" strokeWidth="2" />
      <path d="M88 128 v-34 h64 v34" fill="#ffe7e1" stroke="#071a46" strokeWidth="2" />
      <rect x="100" y="98" width="40" height="30" fill="#fff" stroke="#071a46" strokeWidth="1.5" strokeDasharray="4 3" />
      {/* simplified underside tube of the regular brick entering the hollow */}
      <rect x="108" y="88" width="24" height="34" rx="3" fill="#0668ed" opacity=".9" />
      <path d="M60 88 h48 M132 88 h48" stroke="#071a46" strokeWidth="2" />
    </svg>
  );
}

export function StudDiagram() {
  return (
    <figure className={styles.diagram}>
      <p className={styles.tag}>Conceptual — not to scale</p>
      <div className={styles.steps}>
        <Step n={1} title="ALIGN" note="A regular 2×2 brick sits over one DUPLO stud.">
          <AlignSketch />
        </Step>
        <Step n={2} title="CONNECT" note="The hollow stud gives the standard brick’s tube a place to engage.">
          <ConnectSketch />
        </Step>
      </div>
      <div className={styles.cards}>
        <div className={`${styles.card} ${styles.yes}`}>
          <p className={styles.cardHead}>✓ LEGO says fits</p>
          <p>2×2 and 2×4 regular bricks.</p>
        </div>
        <div className={`${styles.card} ${styles.no}`}>
          <p className={styles.cardHead}>✕ LEGO says does not fit</p>
          <p>1×2 and 2×3 regular bricks, and both figure systems across scales.</p>
        </div>
      </div>
      <figcaption className={styles.caption}>
        A simplified idea sketch, not an engineering drawing. It shows why the hollow stud matters, not exact geometry.
      </figcaption>
    </figure>
  );
}
