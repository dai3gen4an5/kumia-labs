"use client";

import { useId, useState } from "react";
import { NOT_VERIFIED_TEXT, PAIRINGS, PAIRING_COUNT_NOTE, SOURCES, VERIFIED_DATE, type Outcome } from "@/data/lego-duplo-explorer";
import styles from "./lego-duplo-explorer.module.css";

const outcomeStyle: Record<Outcome, { cls: string; icon: string }> = {
  CONNECTS: { cls: styles.connects, icon: "✓" },
  "CONNECTS WITH A CONDITION": { cls: styles.condition, icon: "!" },
  "DOESN’T CONNECT": { cls: styles.no, icon: "✕" },
  "NOT VERIFIED": { cls: styles.unverified, icon: "?" },
};

export function LegoDuploExplorer() {
  const uid = useId();
  const [selected, setSelected] = useState(PAIRINGS[0].id);
  const pairing = PAIRINGS.find((p) => p.id === selected) ?? PAIRINGS[0];
  const style = outcomeStyle[pairing.outcome];

  return (
    <div className={styles.explorer}>
      <p className={styles.note}>{PAIRING_COUNT_NOTE}</p>
      <fieldset className={styles.pairs}>
        <legend className={styles.legend}>Pick a pairing</legend>
        <div className={styles.options} role="radiogroup" aria-label="Pairing">
          {PAIRINGS.map((p) => (
            <label key={p.id} className={`${styles.option} ${selected === p.id ? styles.selected : ""}`}>
              <input type="radio" name={`${uid}-pair`} checked={selected === p.id} onChange={() => setSelected(p.id)} />
              <span>{p.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div aria-live="polite">
        <div className={`${styles.result} ${style.cls}`}>
          <header>
            <span className={styles.icon} aria-hidden="true">{style.icon}</span>
            <p className={styles.verdict}>{pairing.outcome}</p>
          </header>
          <p>{pairing.reason}</p>
          {pairing.condition && (
            <p className={styles.cond}>
              <strong>Condition:</strong> {pairing.condition}
            </p>
          )}
          {pairing.tryInstead && (
            <p className={styles.alt}>
              <strong>Try instead:</strong> {pairing.tryInstead}
            </p>
          )}
          <p className={styles.sources}>
            <span>Sources (checked {VERIFIED_DATE}):</span>{" "}
            {pairing.sources.map((id) => (
              <a key={id} href={SOURCES[id].url} target="_blank" rel="noopener noreferrer">
                {SOURCES[id].short} ↗
              </a>
            ))}
          </p>
        </div>
      </div>
      <p className={styles.footnote}>{NOT_VERIFIED_TEXT}</p>
    </div>
  );
}
