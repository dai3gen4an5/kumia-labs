import styles from "./kitchenaid-visuals.module.css";

/** BODY-1: the 1919 food-preparation idea and today's jobs. Text-led on purpose; no archival imagery is cleared for use. */
export function EvolutionCompare() {
  return (
    <figure className={styles.figure}>
      <div className={styles.evolution}>
        <div className={`${styles.card} ${styles.old}`}>
          <p className={styles.eyebrow}>1919 · H-5</p>
          <h4>Slicing and straining</h4>
          <p>KitchenAid’s official history says the H-5 offered attachments for slicing and straining and was conceived as a food-preparation tool.</p>
        </div>
        <span className={styles.arrow} aria-hidden="true" />
        <div className={`${styles.card} ${styles.now}`}>
          <p className={styles.eyebrow}>Today</p>
          <h4>The same motor, many more jobs</h4>
          <ul>
            <li>Rolling pasta</li>
            <li>Grinding meat</li>
            <li>Slicing and shredding</li>
            <li>Spiralizing produce</li>
            <li>Milling grain</li>
            <li>Dicing and sifting</li>
            <li>Making shave ice</li>
          </ul>
        </div>
      </div>
      <figcaption>
        KitchenAid’s 1919 history already includes slicing and straining. Modern attachments extend the same motor-sharing idea into many more jobs. This shows continuity of purpose, not identical hardware.
      </figcaption>
    </figure>
  );
}

/** TECH-1: conceptual power-interface flow. */
export function HubFlowDiagram() {
  const steps = [
    { t: "Mixer motor", d: "Turns the drive." },
    { t: "Front power hub", d: "A covered square socket." },
    { t: "Attachment shaft", d: "Enters the socket and is secured with the attachment knob." },
    { t: "Independent tool", d: "The mechanism inside the pasta roller, grinder, slicer, or mill." },
  ];
  return (
    <figure className={styles.figure}>
      <ol className={styles.flow} aria-label="How power reaches an attachment">
        {steps.map((s) => (
          <li key={s.t}>
            <strong>{s.t}</strong>
            <span>{s.d}</span>
          </li>
        ))}
      </ol>
      <p className={styles.otherPath}>
        <strong>Meanwhile, underneath:</strong> the bowl sits on a different path. It has to be supported, aligned, and matched to the beater, not turned by the hub.
      </p>
      <figcaption>Conceptual, not to scale. It shows function only, with no dimensions and not a historical or engineering drawing. Source: KitchenAid’s installation guidance.</figcaption>
    </figure>
  );
}

/** BODY-2: the three bowl families. Kept compact; the sketches below carry the how-it-is-held detail. */
export function BowlFamilies() {
  const families = ["Mini tilt-head", "Full-size tilt-head", "Bowl-lift"];
  return (
    <figure className={styles.figure}>
      <ul className={styles.familyChips} aria-label="KitchenAid bowl families">
        {families.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
      <p className={styles.banner}>Not interchangeable across these three types.</p>
      <figcaption>KitchenAid currently separates Mini tilt-head, full-size tilt-head, and bowl-lift bowls. That doesn’t mean every bowl inside one family fits every model.</figcaption>
    </figure>
  );
}

function Sketch({ kind }: { kind: "mini" | "tilt" | "lift" }) {
  const scale = kind === "mini" ? 0.78 : 1;
  return (
    <svg viewBox="0 0 200 140" className={styles.svg} aria-hidden="true" focusable="false">
      <g transform={`translate(${kind === "mini" ? 22 : 0} ${kind === "mini" ? 24 : 0}) scale(${scale})`} stroke="#071a46" strokeWidth={3} strokeLinejoin="round">
        {/* base and column */}
        <rect x={20} y={118} width={150} height={12} rx={3} fill="#eef6ff" />
        <rect x={140} y={40} width={22} height={80} rx={4} fill="#eef6ff" />
        {kind === "lift" ? (
          <>
            {/* fixed head */}
            <rect x={70} y={22} width={92} height={24} rx={8} fill="#cfe2fb" />
            {/* lift arms and bowl */}
            <path d="M136 108 L104 92 M36 108 L68 92" fill="none" stroke="#0668ed" strokeWidth={5} strokeLinecap="round" />
            <path d="M52 66 h64 v12 q0 24 -32 24 q-32 0 -32 -24z" fill="#fff" />
            <path d="M84 60 v-8" stroke="#0668ed" strokeWidth={5} strokeLinecap="round" />
            <path d="M84 50 l-6 8 h12z" fill="#0668ed" stroke="none" />
          </>
        ) : (
          <>
            {/* tilted head */}
            <g transform="rotate(-14 150 46)">
              <rect x={62} y={24} width={100} height={26} rx={9} fill="#cfe2fb" />
            </g>
            {/* bowl on a base plate */}
            <rect x={42} y={104} width={70} height={10} rx={3} fill="#0668ed" stroke="none" />
            <path d="M46 68 h62 v14 q0 22 -31 22 q-31 0 -31 -22z" fill="#fff" />
            {/* twist-in arrow */}
            <path d="M118 96 a16 16 0 1 1 -4 -18" fill="none" stroke="#0668ed" strokeWidth={4} strokeLinecap="round" />
            <path d="M108 74 l10 4 -6 8z" fill="#0668ed" stroke="none" />
          </>
        )}
      </g>
    </svg>
  );
}

/** TECH-2: conceptual support geometries. */
export function BowlSupportSketches() {
  const items = [
    { kind: "mini" as const, t: "Mini tilt-head", d: "A separate, compact bowl family." },
    { kind: "tilt" as const, t: "Full-size tilt-head", d: "The bowl twists into a clamping plate on the base." },
    { kind: "lift" as const, t: "Bowl-lift", d: "The bowl locks on support arms and rises toward a fixed head." },
  ];
  return (
    <figure className={styles.figure}>
      <div className={styles.families}>
        {items.map((s) => (
          <div key={s.kind} className={styles.card}>
            <Sketch kind={s.kind} />
            <h4>{s.t}</h4>
            <p>{s.d}</p>
          </div>
        ))}
      </div>
      <p className={styles.banner}>Exact model, bowl, and tool still matter.</p>
      <figcaption>Conceptual sketches, not to scale, with no dimensions or pin locations. They show the idea of how each family holds its bowl, not any specific model.</figcaption>
    </figure>
  );
}

/** BODY-3: the Ice Cream Maker exception, following KitchenAid's current KSMICM product-page wording. */
export function IceCreamBridge() {
  return (
    <figure className={styles.figure}>
      <div className={styles.iceParts}>
        <span>Freeze bowl</span>
        <span>Dasher</span>
        <span>Drive assembly</span>
      </div>
      <div className={styles.icePaths}>
        <div className={styles.card}>
          <h4>Tilt-head path</h4>
          <p>KitchenAid says it fits all tilt-head stand mixers except the Artisan Mini KSM3316 and KSM3317.</p>
        </div>
        <div className={styles.card}>
          <h4>Bowl-lift path</h4>
          <p>KitchenAid says it fits all bowl-lift stand mixers except the K5SS, KSM50, KSM500, and KSM450.</p>
        </div>
      </div>
      <div className={styles.exclusions}>
        <h4>Still not universal</h4>
        <ul>
          <li>
            <strong>Excluded, tilt-head:</strong> Artisan Mini KSM3316 and KSM3317.
          </li>
          <li>
            <strong>Excluded, bowl-lift:</strong> K5SS, KSM50, KSM500, and KSM450.
          </li>
          <li>
            <strong>Verify model:</strong> vintage or unidentified mixers, including KPM5 and KSM5, where KitchenAid’s own lists don’t agree.
          </li>
        </ul>
      </div>
      <figcaption>The KSMICM bridges two mixer architectures through extra hardware, but it is not universal. Only the models named here are covered; nothing else is inferred.</figcaption>
    </figure>
  );
}
