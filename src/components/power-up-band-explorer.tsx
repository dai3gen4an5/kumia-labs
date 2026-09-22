"use client";

import { useId, useState } from "react";
import {
  BAND_IDENTITIES,
  EXPLORER_BOUNDARY,
  SOURCES,
  VERIFIED_DATE,
  getBandIdentity,
  type CharacterId,
} from "@/data/power-up-band-explorer";
import styles from "./power-up-band-explorer.module.css";

export function PowerUpBandExplorer() {
  const uid = useId();
  const [selected, setSelected] = useState<CharacterId>("mario");
  const identity = getBandIdentity(selected);

  return (
    <div className={styles.explorer}>
      <p className={styles.scope}>
        Eight standard characters only. Limited editions are intentionally excluded.
      </p>

      <fieldset className={styles.selector}>
        <legend>Choose the character printed on your standard Band</legend>
        <div className={styles.options}>
          {BAND_IDENTITIES.map((item) => (
            <label
              key={item.id}
              className={`${styles.option} ${selected === item.id ? styles.selected : ""}`}
            >
              <input
                type="radio"
                name={`${uid}-character`}
                value={item.id}
                checked={selected === item.id}
                onChange={() => setSelected(item.id)}
              />
              <span className={styles.character}>{item.character}</span>
              <span className={styles.pairing}>{item.parkIdentity} · {item.amiiboIdentity}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className={styles.live} aria-live="polite" aria-atomic="true">
        <article className={styles.result}>
          <header>
            <span className={styles.resultIcon} aria-hidden="true">ID</span>
            <div>
              <p className={styles.resultLabel}>Selected identity</p>
              <h3>{identity.character}</h3>
            </div>
          </header>

          <dl className={styles.details}>
            <div>
              <dt>Park identity</dt>
              <dd>{identity.parkIdentity}</dd>
            </div>
            <div>
              <dt>Current documented standard locations</dt>
              <dd>{identity.standardLocations}</dd>
            </div>
            <div>
              <dt>Home identity</dt>
              <dd>{identity.amiiboIdentity}</dd>
            </div>
            <div>
              <dt>Console support</dt>
              <dd>{identity.consoleSupport}</dd>
            </div>
            <div>
              <dt>Not supported</dt>
              <dd>{identity.notSupported}</dd>
            </div>
            <div className={styles.fullRow}>
              <dt>Verified game example</dt>
              <dd>{identity.gameExample}</dd>
            </div>
            <div className={styles.fullRow}>
              <dt>Travel / park-specific note</dt>
              <dd>{identity.travelNote}</dd>
            </div>
          </dl>

          <p className={styles.boundary}>
            <strong>Boundary:</strong> {EXPLORER_BOUNDARY}
          </p>
          <p className={styles.sources}>
            <span>Sources checked {VERIFIED_DATE}:</span>{" "}
            {identity.sources.map((id) => (
              <a key={id} href={SOURCES[id].url} target="_blank" rel="noopener noreferrer">
                {SOURCES[id].short} ↗
              </a>
            ))}
          </p>
        </article>
      </div>
    </div>
  );
}
