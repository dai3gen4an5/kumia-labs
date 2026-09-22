import styles from "./power-up-band-visuals.module.css";

type ReaderLaneProps = {
  label: string;
  reader: string;
  input: string;
  result: string;
  badge: string;
};

function ReaderLane({ label, reader, input, result, badge }: ReaderLaneProps) {
  return (
    <li className={styles.lane}>
      <div className={styles.laneHead}>
        <span className={styles.badge} aria-hidden="true">{badge}</span>
        <strong>{label}</strong>
      </div>
      <ol className={styles.steps} aria-label={`${label} reader path`}>
        <li>
          <span>Reader</span>
          <strong>{reader}</strong>
        </li>
        <li>
          <span>Recognizes</span>
          <strong>{input}</strong>
        </li>
        <li>
          <span>Contextual result</span>
          <strong>{result}</strong>
        </li>
      </ol>
    </li>
  );
}

export function OneBandThreeReaders() {
  return (
    <figure className={styles.diagram} aria-labelledby="three-readers-title">
      <div className={styles.heading}>
        <p>CONCEPTUAL IDENTITY MAP</p>
        <h3 id="three-readers-title">One Band, three readers</h3>
        <p className={styles.summary}>Each context asks a different question of the same object.</p>
      </div>

      <ul className={styles.lanes}>
        <ReaderLane
          label="PARK"
          badge="RF"
          reader="ambient RF"
          input="anonymous Band ID"
          result="player / Team / park record"
        />
        <ReaderLane
          label="PARK APP"
          badge="QR"
          reader="camera"
          input="underside QR code"
          result="link / view / manage that park record"
        />
        <ReaderLane
          label="SWITCH / SWITCH 2"
          badge="NFC"
          reader="NFC touchpoint"
          input="circular character face"
          result="corresponding amiibo in a compatible game"
        />
      </ul>

      <figcaption>
        <strong>Conceptual relationship only—not a data-transfer or internal-storage diagram.</strong>
        No lane implies that park records move into a game or that game data moves into a park.
      </figcaption>
    </figure>
  );
}
