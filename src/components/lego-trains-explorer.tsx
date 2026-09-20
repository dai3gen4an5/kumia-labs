"use client";

import { useId, useState } from "react";
import {
  JOIN_NOTE,
  NOTE,
  SOURCES,
  TRACKS,
  TRAINS,
  VERIFIED_DATE,
  evaluate,
  type Outcome,
  type TrackId,
  type TrainId,
} from "@/data/lego-trains-explorer";
import styles from "./lego-trains-explorer.module.css";

const outcomeStyle: Record<Outcome, { cls: string; icon: string }> = {
  "FITS & RUNS": { cls: styles.runs, icon: "✓" },
  "FITS — NEEDS THE RIGHT POWER": { cls: styles.power, icon: "!" },
  "ROLLS — NO MOTOR NEEDED": { cls: styles.rolls, icon: "→" },
  "CHECK FIRST": { cls: styles.check, icon: "?" },
};

export function LegoTrainsExplorer() {
  const uid = useId();
  const [train, setTrain] = useState<TrainId>("pu");
  const [track, setTrack] = useState<TrackId>("rolling");
  const result = evaluate(train, track);
  const style = outcomeStyle[result.outcome];

  return (
    <div className={styles.explorer}>
      <p className={styles.note}>{NOTE}</p>

      <fieldset className={styles.step}>
        <legend>
          <span className={styles.label}>Step 1</span>
          <span className={styles.question}>Which train?</span>
        </legend>
        <div className={styles.options} role="radiogroup" aria-label="Train">
          {TRAINS.map((t) => (
            <label key={t.id} className={`${styles.option} ${train === t.id ? styles.selected : ""}`}>
              <input type="radio" name={`${uid}-train`} checked={train === t.id} onChange={() => setTrain(t.id)} />
              <span>{t.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className={styles.step}>
        <legend>
          <span className={styles.label}>Step 2</span>
          <span className={styles.question}>Which track?</span>
        </legend>
        <div className={styles.options} role="radiogroup" aria-label="Track">
          {TRACKS.map((t) => (
            <label key={t.id} className={`${styles.option} ${track === t.id ? styles.selected : ""}`}>
              <input type="radio" name={`${uid}-track`} checked={track === t.id} onChange={() => setTrack(t.id)} />
              <span>{t.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div aria-live="polite">
        <div className={`${styles.result} ${style.cls}`}>
          <header>
            <span className={styles.icon} aria-hidden="true">{style.icon}</span>
            <p className={styles.verdict}>{result.outcome}</p>
          </header>
          <p>{result.reason}</p>
          <p className={styles.powerLine}>
            <strong>Where power comes from:</strong> {result.power}
          </p>
          {result.condition && (
            <p className={styles.cond}>
              <strong>Condition:</strong> {result.condition}
            </p>
          )}
          <p className={styles.sources}>
            <span>Sources (checked {VERIFIED_DATE}):</span>{" "}
            {result.sources.map((id) => (
              <a key={id} href={SOURCES[id].url} target="_blank" rel="noopener noreferrer">
                {SOURCES[id].short} ↗
              </a>
            ))}
          </p>
        </div>
      </div>
      <p className={styles.footnote}>{JOIN_NOTE}</p>
    </div>
  );
}
