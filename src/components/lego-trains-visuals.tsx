import styles from "./lego-trains-visuals.module.css";

// TECH-1: concept sketch only. No dimensions, no contact geometry, no connector drawings.

function Flow({ steps, live }: { steps: string[]; live: number[] }) {
  return (
    <ol className={styles.flow}>
      {steps.map((s, i) => (
        <li key={s} className={live.includes(i) ? styles.live : undefined}>
          <span>{s}</span>
        </li>
      ))}
    </ol>
  );
}

function TrackStrip({ powered, label }: { powered: boolean; label: string }) {
  const rail = powered ? "#0668ed" : "#9aa9c2";
  return (
    <svg viewBox="0 0 260 64" className={styles.strip} role="img" aria-label={label}>
      {/* two running rails seen from the side of the layout, with a wheel set on top */}
      <line x1="8" y1="46" x2="252" y2="46" stroke={rail} strokeWidth="6" strokeLinecap="round" />
      <line x1="8" y1="58" x2="252" y2="58" stroke={rail} strokeWidth="6" strokeLinecap="round" />
      <rect x="84" y="14" width="92" height="24" rx="5" fill="#eef6ff" stroke="#071a46" strokeWidth="2" />
      <circle cx="102" cy="38" r="7" fill="#fff" stroke="#071a46" strokeWidth="2" />
      <circle cx="158" cy="38" r="7" fill="#fff" stroke="#071a46" strokeWidth="2" />
      {powered ? (
        <path d="M102 45 v-2 M158 45 v-2" stroke="#0668ed" strokeWidth="3" />
      ) : (
        <rect x="112" y="18" width="36" height="14" rx="3" fill="#ffe7e1" stroke="#071a46" strokeWidth="1.5" />
      )}
    </svg>
  );
}

export function PowerPathDiagram() {
  return (
    <figure className={styles.diagram}>
      <p className={styles.tag}>Conceptual — not to scale</p>
      <div className={styles.cards}>
        <div className={styles.card}>
          <p className={styles.head}>Old 9V: the track is part of the circuit</p>
          <Flow steps={["Controller / supply", "Metal running rails", "Metal wheel contacts", "Motor"]} live={[1, 2]} />
          <TrackStrip powered label="A train on two energized metal running rails. Conceptual sketch." />
          <p className={styles.note}>Plastic rail can guide the wheels but cannot complete this original power path.</p>
        </div>
        <div className={styles.card}>
          <p className={styles.head}>Powered Up: the circuit rides onboard</p>
          <Flow steps={["Battery hub", "Cable", "Train motor"]} live={[0, 1, 2]} />
          <TrackStrip powered={false} label="A train carrying its own hub and motor on plain rails. Conceptual sketch." />
          <p className={styles.note}>Old metal or current plastic track supplies the path, not the electricity.</p>
        </div>
      </div>
      <div className={styles.twelve}>
        <p className={styles.head}>A separate note on 12V</p>
        <p>
          LEGO’s 1969 12V system used electric rails placed between the running rails and connected to a transformer. Do not read the 9V drawing as a 12V diagram.
        </p>
      </div>
      <figcaption className={styles.caption}>
        A simplified idea sketch, not an engineering drawing. It shows where the power comes from, not rail geometry or contacts.
      </figcaption>
    </figure>
  );
}
