import styles from "./m22-seal-diagram.module.css";

type Case = {
  key: string;
  stem: 14 | 15;
  bore: 14 | 15;
  title: string;
  outcome: "seal" | "leak" | "blocked";
  outcomeLabel: string;
  detail: string;
};

const cases: Case[] = [
  { key: "14-14", stem: 14, bore: 14, title: "14 mm stem in 14 mm bore", outcome: "seal", outcomeLabel: "Intended match", detail: "The O-ring seats against the bore wall." },
  { key: "15-15", stem: 15, bore: 15, title: "15 mm stem in 15 mm bore", outcome: "seal", outcomeLabel: "Intended match", detail: "The O-ring seats against the bore wall." },
  { key: "14-15", stem: 14, bore: 15, title: "14 mm stem in 15 mm bore", outcome: "leak", outcomeLabel: "Threads, but can leak", detail: "The outer threads may engage while the seal fails." },
  { key: "15-14", stem: 15, bore: 14, title: "15 mm stem into 14 mm bore", outcome: "blocked", outcomeLabel: "Will not fit", detail: "The larger stem cannot enter the smaller bore." },
];

// Heights are exaggerated on purpose so the difference is visible. This is a concept sketch, not a dimensional drawing.
const H = { 14: 28, 15: 42 } as const;
const CY = 55;

function Sketch({ stem, bore, outcome }: Pick<Case, "stem" | "bore" | "outcome">) {
  const boreH = H[bore];
  const stemH = H[stem];
  const shellX = 128;
  const stemEnd = outcome === "blocked" ? shellX - 6 : 196;
  const oring = outcome === "blocked" ? shellX - 26 : 172;
  const stroke = outcome === "seal" ? "#15954a" : outcome === "leak" ? "#c93a3a" : "#b86f00";
  return (
    <svg viewBox="0 0 250 110" className={styles.svg} aria-hidden="true" focusable="false">
      {/* shared outer-thread family: identical for every case */}
      <rect x={shellX} y={12} width={104} height={86} rx={6} fill="#eef6ff" stroke="#071a46" strokeWidth={2} />
      {Array.from({ length: 7 }, (_, i) => (
        <g key={i} stroke="#071a46" strokeWidth={2}>
          <line x1={140 + i * 14} y1={12} x2={140 + i * 14} y2={20} />
          <line x1={140 + i * 14} y1={90} x2={140 + i * 14} y2={98} />
        </g>
      ))}
      {/* bore */}
      <rect x={shellX} y={CY - boreH / 2} width={82} height={boreH} fill="#fff" stroke="#071a46" strokeWidth={1.5} />
      {/* stem */}
      <rect x={16} y={CY - stemH / 2} width={stemEnd - 16} height={stemH} fill="#0668ed" opacity={0.92} />
      {/* O-ring, shown in cross-section on both sides of the stem */}
      <circle cx={oring} cy={CY - stemH / 2} r={4.5} fill="#071a46" />
      <circle cx={oring} cy={CY + stemH / 2} r={4.5} fill="#071a46" />
      {/* outcome cue */}
      {outcome === "leak" && (
        <g fill="#c93a3a">
          <rect x={shellX + 4} y={CY - boreH / 2 + 1} width={70} height={(boreH - stemH) / 2 - 1} opacity={0.55} />
          <rect x={shellX + 4} y={CY + stemH / 2} width={70} height={(boreH - stemH) / 2 - 1} opacity={0.55} />
          <path d="M222 100 q4 -8 8 0 a4 4 0 1 1 -8 0z" />
        </g>
      )}
      <rect x={shellX - 3} y={CY - boreH / 2 - 3} width={3} height={boreH + 6} fill={stroke} opacity={outcome === "blocked" ? 1 : 0} />
      <line x1={16} y1={104} x2={234} y2={104} stroke={stroke} strokeWidth={3} strokeLinecap="round" />
    </svg>
  );
}

export function M22SealDiagram() {
  return (
    <figure className={styles.diagram}>
      <p className={styles.frame}>
        <strong>Shared:</strong> the same general M22 outer-thread family. <strong>Different:</strong> the internal stem and bore that make the seal.
      </p>
      <ul className={styles.legend} aria-label="Diagram key">
        <li><i className={styles.keyStem} aria-hidden="true" /> Internal stem</li>
        <li><i className={styles.keyBore} aria-hidden="true" /> Bore</li>
        <li><i className={styles.keyOring} aria-hidden="true" /> O-ring (sealing area)</li>
      </ul>
      <div className={styles.grid}>
        {cases.map((c) => (
          <div key={c.key} className={`${styles.case} ${styles[c.outcome]}`}>
            <Sketch stem={c.stem} bore={c.bore} outcome={c.outcome} />
            <h4>{c.title}</h4>
            <p className={styles.outcome}>
              <span aria-hidden="true">{c.outcome === "seal" ? "✓" : c.outcome === "leak" ? "!" : "✕"}</span> {c.outcomeLabel}
            </p>
            <p className={styles.detail}>{c.detail}</p>
          </div>
        ))}
      </div>
      <figcaption>
        Conceptual sketch, not to scale. The size difference is exaggerated, and this is not a dimensional drawing. Outcomes follow AR Blue Clean’s description of M22-14 and M22-15 fittings.
      </figcaption>
    </figure>
  );
}
